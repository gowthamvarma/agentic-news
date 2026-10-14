"""Configuration and environment detection for ADK News Analyser Agent Fleet.

Provides dual-mode execution:
1. Live Mode: Uses verified Gemini models (gemini-3.8-flash, gemini-3.1-pro-preview)
   when GEMINI_API_KEY or GOOGLE_API_KEY is available.
2. Simulation Mode: Provides realistic mock outputs for offline testing, CI/CD,
   and adk web preview before API keys are configured.
"""

from __future__ import annotations

import logging
import os
from pathlib import Path

# Attempt to load .env from current directory or parent directories
try:
    from dotenv import load_dotenv

    env_paths = [
        Path(__file__).resolve().parent.parent / ".env",
        Path.cwd() / ".env",
        Path.cwd() / "adk-web-news" / ".env",
    ]
    for env_file in env_paths:
        if env_file.exists():
            load_dotenv(dotenv_path=env_file)
            break
except ImportError:
    pass

# Determine API Key availability
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY") or os.environ.get("GOOGLE_API_KEY")
IS_SIMULATION_MODE = not bool(GEMINI_API_KEY and GEMINI_API_KEY.strip())

# Official Verified Gemini Models
MODEL_AGENT_FAST = "gemini-3.8-flash"
MODEL_REASONING_PRO = "gemini-3.1-pro-preview"

# Logger setup
LOG_LEVEL_STR = os.environ.get("ADK_LOG_LEVEL", "INFO").upper()
LOG_LEVEL = getattr(logging, LOG_LEVEL_STR, logging.INFO)

logging.basicConfig(
    level=LOG_LEVEL,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
)
logger = logging.getLogger("adk_news")

if IS_SIMULATION_MODE:
    logger.info(
        "No GEMINI_API_KEY detected. Running in SIMULATION MODE. "
        "Agents and tools will generate deterministic, realistic mock intelligence."
    )
else:
    logger.info(
        "GEMINI_API_KEY detected. Running in LIVE API MODE with %s & %s.",
        MODEL_AGENT_FAST,
        MODEL_REASONING_PRO,
    )
