"""On-Demand Article Generator Engine.

Synthesizes full-length customized articles from investigated analysis dossiers
using Google Gemini with customizable writing style, length, and 130+ languages.
"""

from __future__ import annotations

import datetime
import json
import math
import os
import re
import time
import uuid
from typing import Any, Dict, List, Optional

from shared.config import (
    GEMINI_API_KEY,
    IS_SIMULATION_MODE,
    MODEL_AGENT_FAST,
    logger,
)


STYLE_DIRECTIVES: Dict[str, str] = {
    "investigative": (
        "Write as an elite investigative reporter. Scrutinize the chain of evidence, highlight discrepancies, "
        "quote verified claims and confidence scores, and investigate structural incentives and motives behind conflicting accounts."
    ),
    "wire_dispatch": (
        "Write as an international wire reporter (AP/Reuters style). Use the classic inverted pyramid format: "
        "lead paragraph answers who, what, when, where, and why. Maintain strict journalistic neutrality and objective attribution."
    ),
    "executive_brief": (
        "Write as a senior intelligence / strategy analyst delivering an executive briefing to C-suite and policy leaders. "
        "Focus on bottom-line implications, operational and regulatory risks, financial impacts, and strategic takeaways."
    ),
    "op_ed": (
        "Write as a thoughtful editorial columnist for a premier global publication. Offer a compelling, dialectically nuanced "
        "argument that examines both sides of the debate, steelmanning opposing views before delivering a principled synthesis."
    ),
    "explainer_eli5": (
        "Write an 'Explain Like I'm Five' deep explainer. Use simple, conversational language, everyday analogies, "
        "and clear step-by-step explanations without sacrificing factual rigor. Break down complex jargon into intuitive concepts."
    ),
    "academic_essay": (
        "Write as an academic researcher. Contextualize the event within broader historical, legal, or socioeconomic frameworks. "
        "Employ analytical rigor, precise terminology, dialectical structure, and formal scholarly prose."
    ),
    "newsletter": (
        "Write in an engaging, modern newsletter style (e.g. Morning Brew / Substack). Use punchy opening hooks, "
        "scannable sections with bold subheadings, key takeaway bullets, and an intellectual yet conversational voice."
    ),
}

FRAMING_DIRECTIVES: Dict[str, str] = {
    "neutral": "Maintain uncompromising neutrality with balanced weight given to all verified viewpoints.",
    "watchdog": "Adopt a rigorous watchdog lens, pressing hard on contradictions, unverified claims, and accountability.",
    "solution_oriented": "Emphasize constructive lessons, preventive measures, root-cause fixes, and future scenarios.",
    "dialectical": "Explicitly contrast the strongest arguments of proponents against critics before synthesizing a neutral middle ground.",
}

LENGTH_CONSTRAINTS: Dict[str, int] = {
    "flash": 250,
    "standard": 600,
    "longform": 1200,
}


def _extract_grounding_context(analysis: Dict[str, Any]) -> str:
    """Extracts structured intelligence facts to ground Gemini's writing."""
    topic = analysis.get("topic", "News Investigation")
    summary = analysis.get("executive_summary", "")
    metrics = analysis.get("key_metrics_and_numbers", [])
    consensus = analysis.get("consensus_points", [])

    # Extract claims & verifications (supports both schema keys and legacy keys)
    verifications = analysis.get("verifications", [])
    claims_text = []
    for v in verifications[:6]:
        c = v.get("claim_text") or v.get("claim", "")
        verd = v.get("status") or v.get("verdict", "")
        conf = v.get("confidence", 0)
        reasoning = v.get("reasoning", "")
        if c:
            claims_text.append(
                f"- Claim: \"{c}\" | Verdict: {verd} (Confidence: {conf * 100:.0f}%)"
                + (f" — {reasoning}" if reasoning else "")
            )

    # Extract contradictions (supports both ContradictionItem schema keys and legacy keys)
    contradictions = analysis.get("contradictions", [])
    contra_text = []
    for con in contradictions[:4]:
        item = con.get("topic_aspect") or con.get("discrepancy_item", "")
        s1 = con.get("outlet_a") or con.get("source_a", "")
        v1 = con.get("claim_a") or con.get("view_a", "")
        s2 = con.get("outlet_b") or con.get("source_b", "")
        v2 = con.get("claim_b") or con.get("view_b", "")
        if item or v1 or v2:
            contra_text.append(f"- Point: {item} | {s1}: \"{v1}\" vs {s2}: \"{v2}\"")

    # Extract timeline (supports both TimelineEvent schema keys and legacy keys)
    timeline = analysis.get("timeline", {})
    events = timeline.get("events", []) if isinstance(timeline, dict) else []
    timeline_text = []
    for ev in events[:5]:
        d = ev.get("timestamp_or_date") or ev.get("date_or_time", "")
        headline = ev.get("headline") or ev.get("event", "")
        desc = ev.get("description", "")
        e_desc = f"{headline}: {desc}" if headline and desc else (headline or desc)
        if d or e_desc:
            timeline_text.append(f"- {d}: {e_desc}")

    # Extract perspective debate
    debate = analysis.get("debate", {})
    compromise = debate.get("neutral_compromise_synthesis", "") if isinstance(debate, dict) else ""

    parts = [
        f"CORE TOPIC: {topic}",
        f"EXECUTIVE SUMMARY:\n{summary}",
    ]
    if metrics:
        parts.append("VERIFIED METRICS & NUMBERS:\n" + "\n".join(f"- {m}" for m in metrics[:6]))
    if consensus:
        parts.append("CONSENSUS POINTS:\n" + "\n".join(f"- {c}" for c in consensus[:5]))
    if claims_text:
        parts.append("AUDITED CLAIMS & VERDICTS:\n" + "\n".join(claims_text))
    if contra_text:
        parts.append("KEY CONTRADICTIONS ACROSS SOURCES:\n" + "\n".join(contra_text))
    if timeline_text:
        parts.append("CHRONOLOGICAL MILESTONES:\n" + "\n".join(timeline_text))
    if compromise:
        parts.append(f"DIALECTICAL NEUTRAL SYNTHESIS:\n{compromise}")

    return "\n\n".join(parts)


def generate_article_for_analysis(
    analysis: Dict[str, Any],
    writing_style: str = "wire_dispatch",
    target_length: str = "standard",
    custom_word_count: Optional[int] = None,
    language: str = "English",
    editorial_framing: str = "neutral",
    include_social_kit: bool = True,
) -> Dict[str, Any]:
    """Generates a complete tailored article from analysis data using Gemini."""
    topic = analysis.get("topic", "News Story")
    analysis_id = analysis.get("id") or analysis.get("analysis_id", str(uuid.uuid4()))

    # Determine word count target
    if target_length == "custom" and custom_word_count:
        target_words = max(100, min(3000, custom_word_count))
    else:
        target_words = LENGTH_CONSTRAINTS.get(target_length, 600)

    style_directive = STYLE_DIRECTIVES.get(writing_style, STYLE_DIRECTIVES["wire_dispatch"])
    framing_directive = FRAMING_DIRECTIVES.get(editorial_framing, FRAMING_DIRECTIVES["neutral"])
    grounding_data = _extract_grounding_context(analysis)

    system_prompt = f"""You are the Master Editor-in-Chief of Agentic News Analyser.
Your mission is to compose a publication-ready, deeply engaging news article based STRICTLY on the verified facts, audited claims, timeline events, and contradictions provided in the investigation dossier below.

TARGET LANGUAGE: {language}
CRITICAL REQUIREMENT: The entire article (Headline, Subheadline, Body, and Social Kit) MUST be written fluently and naturally in {language}. Use proper grammar, culturally appropriate idioms, and accurate translations of concepts while preserving proper nouns, dates, and numbers.

STYLE DIRECTIVE:
{style_directive}

EDITORIAL FRAMING:
{framing_directive}

LENGTH SPECIFICATION:
Target approximate word count: {target_words} words. Structure the article with clear Markdown headings (## and ###), compelling lead paragraphs, and blockquotes where appropriate.

GROUNDING DOSSIER (USE THESE VERIFIED FACTS):
{grounding_data}

OUTPUT REQUIREMENTS:
You must respond with valid JSON matching this schema:
{{
  "headline": "Captivating, accurate title in {language}",
  "subheadline": "Informative secondary deck or subtitle in {language}",
  "content_markdown": "Full article body in Markdown in {language} (~{target_words} words). Use ## headings, bullet lists, and pull quotes.",
  "social_kit": {{
    "headline_variants": ["Variant 1 (Analytical)", "Variant 2 (Direct/Punchy)", "Variant 3 (Curious/Question)"],
    "seo_meta_description": "150-160 character search engine summary in {language}",
    "social_thread": [
      "Tweet 1 / LinkedIn hook summarizing the breaking fact...",
      "Post 2 highlighting the main controversy / contradiction...",
      "Post 3 detailing the forward scenario or takeaway..."
    ],
    "key_takeaways": [
      "Key bullet 1 in {language}",
      "Key bullet 2 in {language}",
      "Key bullet 3 in {language}"
    ]
  }}
}}
Return ONLY valid JSON.
"""

    now = time.time()
    created_at_iso = datetime.datetime.now(datetime.timezone.utc).isoformat()
    article_id = str(uuid.uuid4())

    if not IS_SIMULATION_MODE and GEMINI_API_KEY:
        try:
            from google import genai
            from google.genai import types

            client = genai.Client(api_key=GEMINI_API_KEY)
            res = client.models.generate_content(
                model=MODEL_AGENT_FAST,
                contents=f"Generate the {writing_style} article about '{topic}' in {language}.",
                config=types.GenerateContentConfig(
                    system_instruction=system_prompt,
                    response_mime_type="application/json",
                    temperature=0.3,
                    top_p=0.9,
                ),
            )
            raw_text = (res.text or "").strip()
            fence_match = re.search(r"```(?:json)?\s*([\s\S]*?)\s*```", raw_text, re.IGNORECASE)
            if fence_match:
                raw_text = fence_match.group(1).strip()
            else:
                first_brace = raw_text.find("{")
                first_bracket = raw_text.find("[")
                candidates = [idx for idx in (first_brace, first_bracket) if idx != -1]
                if candidates:
                    start_idx = min(candidates)
                    last_brace = raw_text.rfind("}")
                    last_bracket = raw_text.rfind("]")
                    end_idx = max(last_brace, last_bracket)
                    if end_idx > start_idx:
                        raw_text = raw_text[start_idx : end_idx + 1]
            data = json.loads(raw_text)

            headline = data.get("headline", topic)
            subheadline = data.get("subheadline", "")
            content_markdown = data.get("content_markdown", "")
            social_kit = data.get("social_kit", {})

            # Count words
            words = len(re.findall(r"\w+", content_markdown)) or target_words
            reading_time = max(1, math.ceil(words / 200))

            return {
                "id": article_id,
                "analysis_id": analysis_id,
                "topic": topic,
                "headline": headline,
                "subheadline": subheadline,
                "content_markdown": content_markdown,
                "writing_style": writing_style,
                "target_length": target_length,
                "word_count": words,
                "reading_time_minutes": reading_time,
                "language": language,
                "editorial_framing": editorial_framing,
                "social_kit": social_kit,
                "created_at": now,
                "created_at_iso": created_at_iso,
                "updated_at": now,
            }
        except Exception as e:
            logger.warning("Gemini article generation failed (%s). Falling back to structured simulation.", e)

    # Deterministic simulation fallback
    return _build_simulated_article(
        article_id=article_id,
        analysis_id=analysis_id,
        analysis=analysis,
        writing_style=writing_style,
        target_length=target_length,
        target_words=target_words,
        language=language,
        editorial_framing=editorial_framing,
        now=now,
        created_at_iso=created_at_iso,
    )


def _build_simulated_article(
    article_id: str,
    analysis_id: str,
    analysis: Dict[str, Any],
    writing_style: str,
    target_length: str,
    target_words: int,
    language: str,
    editorial_framing: str,
    now: float,
    created_at_iso: str,
) -> Dict[str, Any]:
    """Generates a rich, structured article payload when offline or in simulation mode."""
    topic = analysis.get("topic", "News Investigation")
    summary = analysis.get("executive_summary", f"A comprehensive analysis of {topic}.")
    metrics = analysis.get("key_metrics_and_numbers", [])
    consensus = analysis.get("consensus_points", [])

    is_english = language.lower() in ["english", "en"]
    lang_suffix = "" if is_english else f" ({language})"

    headline = f"{topic}: An In-Depth Investigative Review{lang_suffix}"
    subheadline = f"Verified evidence, cross-source contradictions, and dialectical synthesis analyzed in {language}."

    sections = [
        f"## The Core Development\n\n{summary}\n",
        "## Key Verified Metrics\n",
    ]
    if metrics:
        sections.append("\n".join(f"- **Data Point**: {m}" for m in metrics[:4]) + "\n")
    else:
        sections.append("- Primary verifiable source audits confirm central statistical baselines.\n")

    sections.append("## Cross-Source Verification & Dialectical Balance\n")
    if consensus:
        sections.append(f"While reporting outlets converge on key factual baselines ({consensus[0] if consensus else ''}), competing narratives emerge over future regulatory and financial trajectory.\n")
    else:
        sections.append("Cross-source triangulation demonstrates how distinct framing shifts the narrative between institutional caution and progressive reform.\n")

    sections.append(
        f"## Strategic Outlook\n\n"
        f"As this situation evolves, the primary determining factors will hinge on institutional accountability, "
        f"evidence transparency, and ongoing public scrutiny. Readers are advised to consult primary source documents "
        f"and monitor the chronological timeline for emerging updates.\n"
    )

    full_markdown = "\n".join(sections)
    words = len(re.findall(r"\w+", full_markdown))
    reading_time = max(1, math.ceil(words / 200))

    return {
        "id": article_id,
        "analysis_id": analysis_id,
        "topic": topic,
        "headline": headline,
        "subheadline": subheadline,
        "content_markdown": full_markdown,
        "writing_style": writing_style,
        "target_length": target_length,
        "word_count": words,
        "reading_time_minutes": reading_time,
        "language": language,
        "editorial_framing": editorial_framing,
        "social_kit": {
            "headline_variants": [
                f"Investigation: The Truth Behind {topic}",
                f"{topic} Explained in 5 Key Findings",
                f"Why the Debate Over {topic} Is Far From Settled",
            ],
            "seo_meta_description": f"Comprehensive {writing_style} investigation into {topic}, exploring cross-source contradictions, verified claims, and neutral consensus.",
            "social_thread": [
                f"1/3 🚨 Investigating {topic}: What the headlines missed and what the audited evidence actually proves. A thread 🧵",
                f"2/3 While major outlets agree on basic facts, key discrepancies remain over timeline milestones and accountability.",
                f"3/3 Read the full interactive breakdown, active recall quiz, and dialectical debate on Agentic News.",
            ],
            "key_takeaways": [
                f"Core development centers on {topic} with multi-source verified claims.",
                "Primary source documentation resolves central factual disputes.",
                "Long-term outcomes depend heavily on immediate policy and regulatory execution.",
            ],
        },
        "created_at": now,
        "created_at_iso": created_at_iso,
        "updated_at": now,
    }
