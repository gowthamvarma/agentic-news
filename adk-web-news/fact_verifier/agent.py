"""Standalone Fact Verification & Claim Audit Agent for ADK 2.0 Web.

Specialized agent focused specifically on rigorous claim isolation,
forensic evidentiary auditing, and IFCN code of principles scoring.
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

from shared.config import MODEL_REASONING_PRO, IS_SIMULATION_MODE, logger
from shared.tools import factcheck_db_tool, scrape_article_tool, fetch_news_tool
from shared.simulation import make_simulation_callback, make_model_error_callback
from shared.agents.verify import fact_check_toolset, FACT_VERIFIER_INSTRUCTION
from shared.schemas import ClaimVerification

root_agent = Agent(
    name="fact_verifier",
    model=MODEL_REASONING_PRO,
    description="Dedicated Fact Verifier evaluating factual accuracy, statistics, and contradictions.",
    instruction=FACT_VERIFIER_INSTRUCTION,
    tools=[factcheck_db_tool, scrape_article_tool, fetch_news_tool, fact_check_toolset],
    generate_content_config=types.GenerateContentConfig(
        temperature=0.0,
        top_p=0.95,
    ),
    before_model_callback=make_simulation_callback("fact_verifier") if IS_SIMULATION_MODE else None,
    on_model_error_callback=make_model_error_callback("fact_verifier"),
)

logger.info(
    "fact_verifier root_agent loaded (Mode: %s, Model: %s)",
    "SIMULATION" if IS_SIMULATION_MODE else "LIVE",
    MODEL_REASONING_PRO,
)
