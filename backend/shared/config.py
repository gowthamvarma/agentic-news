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
        Path.cwd() / "backend" / ".env",
    ]
    for env_file in env_paths:
        if env_file.exists():
            load_dotenv(dotenv_path=env_file)
            break
except ImportError:
    pass

# Sanitize GOOGLE_APPLICATION_CREDENTIALS if it is an API key or not an existing file on disk
cred_env = os.environ.get("GOOGLE_APPLICATION_CREDENTIALS")
if cred_env and not os.path.isfile(cred_env):
    os.environ.pop("GOOGLE_APPLICATION_CREDENTIALS", None)

# Determine API Key availability and simulation mode
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY") or os.environ.get("GOOGLE_API_KEY")
_force_sim = os.environ.get("FORCE_SIMULATION_MODE", "").strip().lower() in ("1", "true", "yes")
IS_SIMULATION_MODE = _force_sim or not bool(GEMINI_API_KEY and GEMINI_API_KEY.strip())

# Official Verified Gemini & Imagen Models
MODEL_AGENT_FAST = os.environ.get("MODEL_AGENT_FAST", "gemini-3.8-flash").strip()
MODEL_REASONING_PRO = os.environ.get("MODEL_REASONING_PRO", "gemini-3.1-pro-preview").strip()
MODEL_IMAGE = os.environ.get("MODEL_IMAGE", "gemini-3.1-flash-image").strip()
MODEL_IMAGEN = os.environ.get("MODEL_IMAGEN", "imagen-3.0-generate-002").strip()

# Cloud Storage & Media Cache
FIREBASE_PROJECT_ID = (
    os.environ.get("FIREBASE_PROJECT_ID")
    or os.environ.get("GOOGLE_CLOUD_PROJECT")
    or "agentic-news-dev"
).strip()
GCS_MEDIA_BUCKET = os.environ.get(
    "GCS_MEDIA_BUCKET", f"agentic-news-media-{FIREBASE_PROJECT_ID}"
).strip()
LOCAL_MEDIA_DIR = Path(__file__).resolve().parent.parent / "media_cache"
LOCAL_MEDIA_DIR.mkdir(parents=True, exist_ok=True)

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
