"""Standalone Scenario Prediction & What-If Simulation Agent for ADK 2.0 Web."""

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
from shared.tools import fetch_news_tool
from shared.simulation import make_simulation_callback, make_model_error_callback
from shared.agents.analyse import SCENARIO_PREDICTION_INSTRUCTION

root_agent = Agent(
    name="scenario_prediction",
    model=MODEL_REASONING_PRO,
    description=(
        "Forward-Looking Scenario Forecasting & What-If Simulation Engine (Feature F18). "
        "Forecasts plausible trajectories across Best Case, Most Likely, and Worst Case scenarios with explicit "
        "probability weighting, leading early-warning indicators to monitor, and What-If hypothesis branching."
    ),
    instruction=SCENARIO_PREDICTION_INSTRUCTION,
    tools=[fetch_news_tool],
    generate_content_config=types.GenerateContentConfig(
        temperature=0.4,
        top_p=0.9,
    ),
    before_model_callback=make_simulation_callback("scenario_prediction") if IS_SIMULATION_MODE else None,
    on_model_error_callback=make_model_error_callback("scenario_prediction"),
)

logger.info("scenario_prediction root_agent loaded (Model: %s)", MODEL_REASONING_PRO)
