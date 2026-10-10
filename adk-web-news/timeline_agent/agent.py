"""Standalone Chronological & Narrative Evolution Agent for ADK 2.0 Web."""

from __future__ import annotations

import sys
from pathlib import Path

_current_dir = Path(__file__).resolve().parent
_root_dir = _current_dir.parent
if str(_root_dir) not in sys.path:
    sys.path.insert(0, str(_root_dir))

from google.adk.agents import Agent
from google.genai import types

from shared.config import MODEL_AGENT_FAST, IS_SIMULATION_MODE, logger
from shared.tools import fetch_news_tool
from shared.simulation import make_simulation_callback, make_model_error_callback
from shared.agents.understand import TIMELINE_RECONSTRUCTION_INSTRUCTION

root_agent = Agent(
    name="timeline_agent",
    model=MODEL_AGENT_FAST,
    description="Reconstructs chronological event timelines and tracks media narrative evolution.",
    instruction=TIMELINE_RECONSTRUCTION_INSTRUCTION,
    tools=[fetch_news_tool],
    generate_content_config=types.GenerateContentConfig(
        temperature=0.0,
        top_p=0.9,
    ),
    before_model_callback=make_simulation_callback("timeline_agent") if IS_SIMULATION_MODE else None,
    on_model_error_callback=make_model_error_callback("timeline_agent"),
)

logger.info("timeline_agent root_agent loaded (Model: %s)", MODEL_AGENT_FAST)
