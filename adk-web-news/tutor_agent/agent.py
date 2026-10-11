"""Active Recall & News Literacy Tutor Agent for ADK 2.0 Web.

Generates interactive multi-choice quizzes, concept flashcards, and Socratic
reading challenges based on verified news coverage.
"""

from __future__ import annotations

import sys
from pathlib import Path

# Ensure adk-web-news root is on sys.path
_current_dir = Path(__file__).resolve().parent
_root_dir = _current_dir.parent
if str(_root_dir) not in sys.path:
    sys.path.insert(0, str(_root_dir))

from google.adk.agents import Agent
from google.genai import types

from shared.config import MODEL_AGENT_FAST, IS_SIMULATION_MODE, logger
from shared.simulation import make_simulation_callback, make_model_error_callback
from shared.agents.engage import TUTOR_INSTRUCTION
from shared.tools import fetch_news_tool

root_agent = Agent(
    name="tutor_agent",
    model=MODEL_AGENT_FAST,
    description=(
        "Pedagogical News Literacy & Active Recall Tutor (Features F20, F22, F23). "
        "Generates diagnostic comprehension multiple-choice questions (MCQs), concept retention flashcards, "
        "and critical reflection prompts to test understanding of conflicting reporting, factual subtleties, "
        "and systemic causes."
    ),
    instruction=TUTOR_INSTRUCTION,
    tools=[fetch_news_tool],
    generate_content_config=types.GenerateContentConfig(
        temperature=0.3,
        top_p=0.85,
    ),
    before_model_callback=make_simulation_callback("tutor_agent") if IS_SIMULATION_MODE else None,
    on_model_error_callback=make_model_error_callback("tutor_agent"),
)

logger.info(
    "tutor_agent root_agent loaded (Mode: %s, Model: %s)",
    "SIMULATION" if IS_SIMULATION_MODE else "LIVE",
    MODEL_AGENT_FAST,
)
