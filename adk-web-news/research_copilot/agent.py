"""Standalone Research Copilot & Autonomous Investigation Agent for ADK 2.0 Web."""

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
from shared.tools import fetch_news_tool, scrape_article_tool, factcheck_db_tool, perspectives_tool
from shared.simulation import make_simulation_callback, make_model_error_callback
from shared.agents.engage import RESEARCH_COPILOT_INSTRUCTION

root_agent = Agent(
    name="research_copilot",
    model=MODEL_REASONING_PRO,
    description="Autonomous Investigative Research Copilot and interactive news Q&A companion.",
    instruction=RESEARCH_COPILOT_INSTRUCTION,
    tools=[fetch_news_tool, scrape_article_tool, factcheck_db_tool, perspectives_tool],
    generate_content_config=types.GenerateContentConfig(
        temperature=0.2,
        top_p=0.9,
    ),
    before_model_callback=make_simulation_callback("research_copilot") if IS_SIMULATION_MODE else None,
    on_model_error_callback=make_model_error_callback("research_copilot"),
)

logger.info("research_copilot root_agent loaded (Model: %s)", MODEL_REASONING_PRO)
