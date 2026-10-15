"""FastAPI Backend Server for Agentic News Analyser.

Exposes REST APIs connecting the frontend and external clients to the
25-agent Google ADK fleet, Firestore persistence, and active recall engines.
"""

from __future__ import annotations

import asyncio
import json
import os
import sys
import time
import uuid
from pathlib import Path
from typing import Any, Dict, List, Optional

# Ensure project root is on sys.path
PROJECT_ROOT = Path(__file__).resolve().parent
if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))

from fastapi import FastAPI, HTTPException, Query, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse, FileResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field, ConfigDict

from google.adk.runners import Runner
from google.adk.sessions import InMemorySessionService
from google.genai import types

from shared.config import (
    IS_SIMULATION_MODE,
    MODEL_AGENT_FAST,
    MODEL_REASONING_PRO,
    logger,
)
from shared.firestore_service import FirestoreService
from shared.topic_suggester import generate_country_topic_suggestions
from shared.schemas import ArticleGenerateRequest
from shared.article_generator import generate_article_for_analysis
from shared.structured_builder import (
    build_structured_intelligence,
    build_structured_quiz,
    build_structured_debate,
    build_structured_scenarios,
    build_stage_brief,
    build_stage_verifications,
    build_stage_timeline,
    generate_live_contradictions,
)
from shared.simulation import _route_simulation_response
from shared.plugins.evidence_ledger import EvidenceLedgerPlugin
from shared.plugins.token_tracker import TokenTrackerPlugin
from shared.plugins.news_guardrail import NewsGuardrailPlugin

# Import agent objects
from news_analyser.agent import root_agent as news_agent
from fact_verifier.agent import root_agent as fact_agent
from tutor_agent.agent import root_agent as tutor_agent_obj
from research_copilot.agent import root_agent as copilot_agent
from perspective_debate.agent import root_agent as debate_agent
from timeline_agent.agent import root_agent as timeline_agent_obj
from scenario_prediction.agent import root_agent as scenario_agent

app = FastAPI(
    title="Agentic News Analyser API",
    version="1.0.0",
    description="Multi-agent intelligence backend powered by Google ADK and Firestore.",
)

# Enable CORS for local web dev and Firebase hosting domains
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Request and response models
class AnalyzeRequest(BaseModel):
    topic: str = Field(..., description="Breaking news topic, claim, or URL")
    run_live: Optional[bool] = Field(default=None, description="Force live Gemini API execution")
    analysis_id: Optional[str] = Field(default=None, description="Optional associated analysis ID to auto-save results")


class ChatRequest(BaseModel):
    query: str
    topic: Optional[str] = "General News Investigation"
    session_id: Optional[str] = None
    analysis_id: Optional[str] = Field(default=None, description="Associated analysis ID to persist chat history in Firestore")


class UpdateAnalysisRequest(BaseModel):
    model_config = ConfigDict(extra="allow")

    is_favorite: Optional[bool] = Field(default=None, description="Mark or unmark as favorite")
    notes: Optional[str] = Field(default=None, description="Optional researcher notes")
    root_cause_analysis: Optional[Dict[str, Any]] = None
    consequences_tree: Optional[List[Dict[str, Any]]] = None
    future_scenarios: Optional[List[Dict[str, Any]]] = None
    lessons_learned: Optional[List[Dict[str, Any]]] = None
    quiz: Optional[Dict[str, Any]] = None
    debate: Optional[Dict[str, Any]] = None


class QuizGradeRequest(BaseModel):
    quiz_id: str
    user_answers: Dict[int, int] = Field(..., description="Map of question_id to selected_option_index")


async def execute_adk_agent(agent_name: str, target_agent: Any, prompt: str) -> tuple[str, List[Dict[str, Any]]]:
    """Runs an ADK agent through the Runner and captures generated output and evidence ledger."""
    evidence_plugin = EvidenceLedgerPlugin()
    token_plugin = TokenTrackerPlugin()
    guardrail_plugin = NewsGuardrailPlugin()

    # Pre-screen prompt with guardrail
    violation = guardrail_plugin.validate_user_prompt(prompt)
    if violation:
        return f"[Guardrail Notice]: {violation}", []

    if IS_SIMULATION_MODE:
        sim_text = _route_simulation_response(agent_name, prompt)
        return sim_text, []

    session_service = InMemorySessionService()
    runner = Runner(
        app_name=agent_name,
        agent=target_agent,
        session_service=session_service,
        plugins=[evidence_plugin, token_plugin, guardrail_plugin],
    )

    session = await session_service.create_session(
        app_name=agent_name,
        user_id="web_analyst",
    )

    user_content = types.Content(
        parts=[types.Part.from_text(text=prompt)],
        role="user",
    )

    from google.adk.tools.function_tool import _SYNC_CALLABLE_RUNNER
    token = _SYNC_CALLABLE_RUNNER.set(lambda target, args: asyncio.to_thread(target, **args))

    collected_text = []
    try:
        async for event in runner.run_async(
            user_id="web_analyst",
            session_id=session.id,
            new_message=user_content,
        ):
            if hasattr(event, "content") and event.content:
                for part in event.content.parts:
                    if hasattr(part, "text") and part.text:
                        collected_text.append(part.text)
        output_text = "".join(collected_text)
        ledger = evidence_plugin.get_ledger()
        return output_text, ledger
    except Exception as e:
        logger.warning("ADK live execution error for %s: %s. Using dynamic fallback.", agent_name, e)
        fallback_text = _route_simulation_response(agent_name, prompt)
        return fallback_text, []
    finally:
        _SYNC_CALLABLE_RUNNER.reset(token)


@app.get("/api/health")
async def health_check():
    """Health check endpoint providing runtime and model information."""
    return {
        "status": "healthy",
        "live_mode": not IS_SIMULATION_MODE,
        "models": {
            "fast": MODEL_AGENT_FAST,
            "reasoning": MODEL_REASONING_PRO,
        },
        "agents_available": [
            "news_analyser",
            "fact_verifier",
            "tutor_agent",
            "research_copilot",
            "perspective_debate",
            "timeline_agent",
            "scenario_prediction",
        ],
    }


@app.post("/api/analyze")
async def analyze_topic(req: AnalyzeRequest):
    """Triggers the full 25-agent intelligence pipeline and stores the report in Firestore."""
    topic = req.topic.strip()
    if not topic:
        raise HTTPException(status_code=400, detail="Topic cannot be empty.")

    analysis_id = str(uuid.uuid4())
    logger.info("Starting analysis for topic: '%s' (ID: %s)", topic, analysis_id)

    # Execute orchestrator
    raw_markdown, ledger = await execute_adk_agent("news_analyser", news_agent, topic)

    # Build structured report in worker thread so event loop remains responsive for other tabs
    report_data = await asyncio.to_thread(build_structured_intelligence, topic, raw_markdown)
    report_data["id"] = analysis_id
    report_data["analysis_id"] = analysis_id
    report_data["topic"] = topic
    report_data["evidence_ledger"] = ledger

    # Persist to Firestore
    await FirestoreService.save_analysis(analysis_id, report_data)

    if ledger:
        await FirestoreService.save_evidence_ledger(analysis_id, ledger)

    return report_data


@app.get("/api/analyze/stream")
async def stream_analysis(topic: str = Query(..., description="Breaking news topic to analyze")):
    """Streams the analysis progressively section-by-section via Server-Sent Events (SSE)."""
    clean_topic = topic.strip()
    if not clean_topic:
        raise HTTPException(status_code=400, detail="Topic cannot be empty.")

    analysis_id = str(uuid.uuid4())

    async def event_generator():
        # Step 0: Initial metadata
        initial_doc = {
            "id": analysis_id,
            "analysis_id": analysis_id,
            "topic": clean_topic,
            "status": "generating",
            "available_sections": [],
            "created_at": time.time(),
        }
        await FirestoreService.save_analysis(analysis_id, initial_doc)
        yield f"event: init\ndata: {json.dumps(initial_doc)}\n\n"

        # Step 1: Executive Brief & Primer (~yields first)
        brief_data = await asyncio.to_thread(build_stage_brief, clean_topic)
        brief_data["id"] = analysis_id
        brief_data["analysis_id"] = analysis_id
        brief_data["status"] = "partial"
        brief_data["created_at"] = initial_doc["created_at"]
        await FirestoreService.update_analysis(analysis_id, brief_data)
        yield f"event: step_brief\ndata: {json.dumps(brief_data)}\n\n"

        # Step 2: Fact Verifications, Contradictions & Bias Spectrum
        verif_data = await asyncio.to_thread(build_stage_verifications, clean_topic)
        verif_data["id"] = analysis_id
        verif_data["analysis_id"] = analysis_id
        await FirestoreService.update_analysis(analysis_id, verif_data)
        yield f"event: step_verification\ndata: {json.dumps(verif_data)}\n\n"

        # Step 3: Chronological Timeline & Narrative Trajectory
        timeline_data = await asyncio.to_thread(build_stage_timeline, clean_topic)
        timeline_data["id"] = analysis_id
        timeline_data["analysis_id"] = analysis_id
        timeline_data["status"] = "completed"
        await FirestoreService.update_analysis(analysis_id, timeline_data)
        yield f"event: step_timeline\ndata: {json.dumps(timeline_data)}\n\n"

        # Final complete frame from persisted document
        full_doc = await FirestoreService.get_analysis(analysis_id)
        if not full_doc:
            full_doc = {**brief_data, **verif_data, **timeline_data}
        full_doc["id"] = analysis_id
        full_doc["analysis_id"] = analysis_id
        full_doc["status"] = "completed"
        full_doc["available_sections"] = ["brief", "verification", "timeline"]
        await FirestoreService.save_analysis(analysis_id, full_doc)
        yield f"event: complete\ndata: {json.dumps(full_doc)}\n\n"

    return StreamingResponse(
        event_generator(),
        media_type="text/event-stream",
        headers={
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "X-Accel-Buffering": "no",
        },
    )


@app.get("/api/analyses")
async def list_analyses(
    limit: int = Query(default=20, ge=1, le=100),
    offset: int = Query(default=0, ge=0),
    search: Optional[str] = Query(default=None),
    favorites_only: bool = Query(default=False),
):
    """Retrieves paginated and filtered news analyses from Firestore."""
    return await FirestoreService.list_analyses_filtered(
        limit=limit,
        offset=offset,
        search=search,
        favorites_only=favorites_only,
    )


@app.get("/api/analysis/{analysis_id}")
async def get_analysis_detail(analysis_id: str):
    """Fetches a specific news analysis report by ID."""
    doc = await FirestoreService.get_analysis(analysis_id)
    if not doc:
        raise HTTPException(status_code=404, detail="Analysis report not found.")
    return doc


@app.patch("/api/analysis/{analysis_id}")
async def update_analysis(analysis_id: str, req: UpdateAnalysisRequest):
    """Updates an analysis document (such as toggling favorite status)."""
    updates = req.model_dump(exclude_unset=True)
    if not updates:
        raise HTTPException(status_code=400, detail="No fields provided for update.")

    updated_doc = await FirestoreService.update_analysis(analysis_id, updates)
    if not updated_doc:
        raise HTTPException(status_code=404, detail="Analysis report not found.")
    return updated_doc


@app.delete("/api/analysis/{analysis_id}")
async def delete_analysis(analysis_id: str):
    """Deletes an analysis document from Firestore."""
    success = await FirestoreService.delete_analysis(analysis_id)
    if not success:
        raise HTTPException(status_code=404, detail="Analysis report not found.")
    return {"status": "deleted", "id": analysis_id}


@app.post("/api/fact-check")
async def fact_check_claim(req: AnalyzeRequest):
    """Executes a forensic fact verification audit for a specific claim."""
    claim = req.topic.strip()
    if not claim:
        raise HTTPException(status_code=400, detail="Claim cannot be empty.")

    check_id = str(uuid.uuid4())
    raw_markdown, ledger = await execute_adk_agent("fact_verifier", fact_agent, claim)

    result = {
        "check_id": check_id,
        "claim": claim,
        "report_markdown": raw_markdown,
        "evidence_ledger": ledger,
    }
    await FirestoreService.save_fact_check(check_id, result)
    return result


@app.post("/api/tutor/quiz")
async def generate_quiz(req: AnalyzeRequest):
    """Generates an active recall quiz for a topic."""
    topic = req.topic.strip()
    quiz_id = str(uuid.uuid4())
    quiz_data = await asyncio.to_thread(build_structured_quiz, topic)
    quiz_data["quiz_id"] = quiz_id
    await FirestoreService.save_quiz(quiz_id, quiz_data)

    if req.analysis_id:
        await FirestoreService.update_analysis(req.analysis_id, {
            "quiz": quiz_data
        })
    return quiz_data


@app.post("/api/tutor/grade")
async def grade_quiz(req: QuizGradeRequest):
    """Grades a user's quiz responses and calculates their literacy score."""
    quiz_doc = await FirestoreService.get_quiz(req.quiz_id)
    if not quiz_doc:
        raise HTTPException(status_code=404, detail="Quiz not found.")

    questions = quiz_doc.get("questions", [])
    total = len(questions)
    correct_count = 0
    feedback = []

    for q in questions:
        qid = q["question_id"]
        correct_idx = q["correct_option_index"]
        user_choice = req.user_answers.get(qid)
        is_correct = user_choice == correct_idx
        if is_correct:
            correct_count += 1
        feedback.append({
            "question_id": qid,
            "correct": is_correct,
            "user_choice": user_choice,
            "correct_choice": correct_idx,
            "explanation": q.get("explanation"),
        })

    score_pct = round((correct_count / total * 100), 1) if total > 0 else 0
    return {
        "quiz_id": req.quiz_id,
        "score_percentage": score_pct,
        "correct_count": correct_count,
        "total_questions": total,
        "feedback": feedback,
    }


@app.post("/api/debate")
async def generate_perspective_debate(req: AnalyzeRequest):
    """Generates a structured, evidence-grounded perspective debate on an issue."""
    topic = req.topic.strip()
    debate_id = str(uuid.uuid4())
    debate_data = await asyncio.to_thread(build_structured_debate, topic)
    debate_data["debate_id"] = debate_id
    await FirestoreService.save_debate(debate_id, debate_data)

    if req.analysis_id:
        await FirestoreService.update_analysis(req.analysis_id, {
            "debate": debate_data
        })
    return debate_data


@app.post("/api/scenarios")
async def generate_future_scenarios(req: AnalyzeRequest):
    """Generates on-demand causal diagnostics, consequence tree, and future scenarios."""
    topic = req.topic.strip()
    if not topic:
        raise HTTPException(status_code=400, detail="Topic cannot be empty.")

    scenarios_data = await asyncio.to_thread(build_structured_scenarios, topic)
    if req.analysis_id:
        await FirestoreService.update_analysis(req.analysis_id, {
            "root_cause_analysis": scenarios_data.get("root_cause_analysis"),
            "consequences_tree": scenarios_data.get("consequences_tree"),
            "future_scenarios": scenarios_data.get("future_scenarios"),
            "lessons_learned": scenarios_data.get("lessons_learned"),
        })
    return scenarios_data


@app.post("/api/contradictions")
async def generate_topic_contradictions(req: AnalyzeRequest):
    """Generates on-demand cross-source contradictions and divergences for a topic."""
    topic = req.topic.strip()
    if not topic:
        raise HTTPException(status_code=400, detail="Topic cannot be empty.")

    contradictions = await asyncio.to_thread(generate_live_contradictions, topic)
    if req.analysis_id:
        await FirestoreService.update_analysis(req.analysis_id, {
            "contradictions": contradictions
        })
    return {"contradictions": contradictions}


@app.post("/api/chat")
async def chat_research_copilot(req: ChatRequest):
    """Interactive follow-up Q&A and investigation mode with Research Copilot.
    
    Persists user & agent interaction history into Firestore when analysis_id is provided.
    """
    analysis_id = (req.analysis_id or "").strip()
    user_time_str = time.strftime("%H:%M")

    # If associated with an analysis report, persist user question to Firestore
    if analysis_id:
        user_msg = {
            "id": str(uuid.uuid4()),
            "sender": "user",
            "text": req.query,
            "timestamp": time.time(),
            "time": user_time_str,
        }
        await FirestoreService.save_chat_message(analysis_id, user_msg)

    prompt = (
        f"Topic Context: {req.topic}\n"
        f"User Question: {req.query}\n\n"
        "Instructions: Provide a quick, precise, neatly formatted response in Markdown with clear bold headings, bullet points, and source citations. "
        "Write in simple, clear, easy-to-read English sentence structures, but PRESERVE exact technical, legal, scientific, and industry terms (for example, use 'spectrum' rather than replacing it with 'airwaves'). Do NOT dumb down or substitute technical vocabulary."
    )
    raw_markdown, ledger = await execute_adk_agent("research_copilot", copilot_agent, prompt)

    agent_time_str = time.strftime("%H:%M")
    history: List[Dict[str, Any]] = []

    # If associated with an analysis report, persist copilot response to Firestore
    if analysis_id:
        agent_msg = {
            "id": str(uuid.uuid4()),
            "sender": "agent",
            "text": raw_markdown,
            "timestamp": time.time(),
            "time": agent_time_str,
        }
        history = await FirestoreService.save_chat_message(analysis_id, agent_msg)

    return {
        "response": raw_markdown,
        "evidence_ledger": ledger,
        "chat_history": history,
    }


@app.get("/api/chat/history/{analysis_id}")
async def get_copilot_chat_history(analysis_id: str):
    """Retrieves saved Research Copilot chat history from Firestore."""
    messages = await FirestoreService.get_chat_history(analysis_id)
    return {
        "analysis_id": analysis_id,
        "messages": messages,
    }


@app.delete("/api/chat/history/{analysis_id}")
async def clear_copilot_chat_history(analysis_id: str):
    """Clears saved Research Copilot chat history from Firestore."""
    success = await FirestoreService.clear_chat_history(analysis_id)
    return {
        "status": "cleared" if success else "failed",
        "analysis_id": analysis_id,
    }


# ==============================================================================
# Article Studio Endpoints (On-Demand Analysis-Grounded Article Generation)
# ==============================================================================

@app.post("/api/analysis/{analysis_id}/article")
async def generate_analysis_article(analysis_id: str, req: ArticleGenerateRequest):
    """Generates an on-demand customized article grounded in the analysis dossier,
    persists it to Firestore with date & time, and returns the payload.
    """
    analysis_data = await FirestoreService.get_analysis(analysis_id)
    if not analysis_data:
        raise HTTPException(status_code=404, detail=f"Analysis '{analysis_id}' not found.")

    logger.info(
        "Generating article for analysis '%s' (style=%s, length=%s, lang=%s)...",
        analysis_id,
        req.writing_style,
        req.target_length,
        req.language,
    )

    article = await asyncio.to_thread(
        generate_article_for_analysis,
        analysis=analysis_data,
        writing_style=req.writing_style,
        target_length=req.target_length,
        custom_word_count=req.custom_word_count,
        language=req.language,
        editorial_framing=req.editorial_framing,
        include_social_kit=req.include_social_kit,
    )

    # Persist in Firestore (and mirror in parent analysis doc)
    saved_id = await FirestoreService.save_article(article)
    article["id"] = saved_id
    logger.info("Saved article '%s' to Firestore for analysis '%s'", saved_id, analysis_id)
    return article


@app.get("/api/analysis/{analysis_id}/articles")
async def get_analysis_articles(analysis_id: str):
    """Retrieves all articles generated for a specific analysis, sorted by date/time descending."""
    articles = await FirestoreService.get_articles_for_analysis(analysis_id)
    return {
        "analysis_id": analysis_id,
        "articles": articles,
        "total": len(articles),
    }


@app.delete("/api/analysis/{analysis_id}/article/{article_id}")
async def delete_analysis_article(analysis_id: str, article_id: str):
    """Deletes an article from Firestore and the parent analysis document."""
    success = await FirestoreService.delete_article(analysis_id, article_id)
    return {
        "success": success,
        "analysis_id": analysis_id,
        "article_id": article_id,
    }


_suggestions_lock = asyncio.Lock()
_suggestions_task: Optional[asyncio.Task] = None


async def _run_or_await_suggestions_generation() -> Dict[str, Any]:
    """Generates fresh suggestions with single-flight deduplication across multiple tabs."""
    global _suggestions_task
    async with _suggestions_lock:
        if _suggestions_task is not None and not _suggestions_task.done():
            task_to_await = _suggestions_task
        else:
            async def _worker():
                fresh_data = await asyncio.to_thread(generate_country_topic_suggestions)
                saved = await FirestoreService.save_topic_suggestions(fresh_data)
                saved["is_stale"] = False
                saved["age_seconds"] = 0
                saved["refreshed"] = True
                return saved

            _suggestions_task = asyncio.create_task(_worker())
            task_to_await = _suggestions_task

    return await asyncio.shield(task_to_await)


@app.get("/api/topics/suggestions")
async def get_topic_suggestions():
    """Retrieves country-grouped topic suggestions from memory cache or Firestore.
    
    If cache exists, returns immediately (0ms). If cache does not exist,
    triggers single-flight generation so multiple tabs share the same in-flight task.
    """
    cached = await FirestoreService.get_topic_suggestions()
    now = time.time()

    if not cached:
        logger.info("No topic suggestions found in Firestore. Initiating deduplicated generation...")
        return await _run_or_await_suggestions_generation()

    created_at = cached.get("created_at") or cached.get("updated_at") or 0
    age_seconds = max(0.0, now - created_at)
    is_stale = age_seconds > (24 * 3600)  # 24 hours

    response = dict(cached)
    response["is_stale"] = is_stale
    response["age_seconds"] = age_seconds
    return response


@app.post("/api/topics/suggestions/refresh")
async def refresh_topic_suggestions():
    """Generates fresh country-grouped topic suggestions using single-flight execution,
    persists them to Firestore with created_at timestamp, and returns the refreshed data.
    """
    logger.info("Triggered refresh of country-grouped topic suggestions...")
    return await _run_or_await_suggestions_generation()



# ------------------------------------------------------------------------------
# Production Static SPA Mounting (React Vite build)
# ------------------------------------------------------------------------------
DIST_DIR = PROJECT_ROOT / "dist"
if (DIST_DIR / "index.html").exists():
    if (DIST_DIR / "assets").exists():
        app.mount("/assets", StaticFiles(directory=str(DIST_DIR / "assets")), name="assets")

    @app.get("/{full_path:path}")
    async def serve_spa(full_path: str):
        # Let API 404s stay 404s
        if full_path.startswith("api"):
            raise HTTPException(status_code=404, detail="API endpoint not found")
        file_path = DIST_DIR / full_path
        if full_path and file_path.is_file():
            return FileResponse(str(file_path))
        return FileResponse(str(DIST_DIR / "index.html"))


if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 8080))
    uvicorn.run("api_server:app", host="0.0.0.0", port=port, reload=True)
