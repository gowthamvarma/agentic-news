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
from fastapi.responses import StreamingResponse
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
from shared.structured_builder import (
    build_structured_intelligence,
    build_structured_quiz,
    build_structured_debate,
    build_structured_scenarios,
    build_stage_brief,
    build_stage_verifications,
    build_stage_timeline,
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

    # Build structured report
    report_data = build_structured_intelligence(topic, raw_markdown)
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
    quiz_data = build_structured_quiz(topic)
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
    debate_data = build_structured_debate(topic)
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

    scenarios_data = build_structured_scenarios(topic)
    if req.analysis_id:
        await FirestoreService.update_analysis(req.analysis_id, {
            "root_cause_analysis": scenarios_data.get("root_cause_analysis"),
            "consequences_tree": scenarios_data.get("consequences_tree"),
            "future_scenarios": scenarios_data.get("future_scenarios"),
            "lessons_learned": scenarios_data.get("lessons_learned"),
        })
    return scenarios_data


@app.post("/api/chat")
async def chat_research_copilot(req: ChatRequest):
    """Interactive follow-up Q&A and investigation mode with Research Copilot."""
    prompt = f"Topic Context: {req.topic}\nUser Question: {req.query}"
    raw_markdown, ledger = await execute_adk_agent("research_copilot", copilot_agent, prompt)
    return {
        "response": raw_markdown,
        "evidence_ledger": ledger,
    }


if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 8080))
    uvicorn.run("api_server:app", host="0.0.0.0", port=port, reload=True)
