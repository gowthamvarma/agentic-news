"""Standalone Perspective Debate & Dialectical Simulation Agent for ADK 2.0 Web."""

from __future__ import annotations

import sys
from pathlib import Path

_current_dir = Path(__file__).resolve().parent
_root_dir = _current_dir.parent
if str(_root_dir) not in sys.path:
    sys.path.insert(0, str(_root_dir))

from google.adk.agents import Agent
from google.genai import types

from shared.config import MODEL_REASONING_PRO, IS_SIMULATION_MODE, logger
from shared.tools import fetch_news_tool, perspectives_tool
from shared.simulation import make_simulation_callback, make_model_error_callback
from shared.agents.engage import PERSPECTIVE_DEBATE_INSTRUCTION

root_agent = Agent(
    name="perspective_debate",
    model=MODEL_REASONING_PRO,
    description=(
        "Dialectical Discourse & Perspective Simulation Moderator (Feature F38). "
        "Simulates structured, evidence-grounded debates between steelmanned advocate and critic positions "
        "on controversial news topics, culminating in a balanced compromise synthesis and shared principles matrix."
    ),
    instruction=PERSPECTIVE_DEBATE_INSTRUCTION,
    tools=[fetch_news_tool, perspectives_tool],
    generate_content_config=types.GenerateContentConfig(
        temperature=0.3,
        top_p=0.9,
    ),
    before_model_callback=make_simulation_callback("perspective_debate") if IS_SIMULATION_MODE else None,
    on_model_error_callback=make_model_error_callback("perspective_debate"),
)

logger.info("perspective_debate root_agent loaded (Model: %s)", MODEL_REASONING_PRO)
