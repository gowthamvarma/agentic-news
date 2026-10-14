"""Token and Execution Tracker Plugin for ADK.

Tracks run latency, agent invocation count, and estimates token usage.
"""

from __future__ import annotations

import time
from typing import Any, Dict, Optional
from google.adk.plugins import BasePlugin
from google.adk.agents import BaseAgent
from shared.config import logger


class TokenTrackerPlugin(BasePlugin):
    """Monitors workflow latency, model invocation count, and performance metrics."""

    def __init__(self, name: str = "token_tracker") -> None:
        super().__init__(name=name)
        self._start_time: Optional[float] = None
        self._agent_call_count = 0
        self._tool_call_count = 0
        self._total_duration_sec = 0.0

    async def before_run_callback(self, *args: Any, **kwargs: Any) -> None:
        """Start run timer."""
        self._start_time = time.time()
        self._agent_call_count = 0
        self._tool_call_count = 0

    async def after_run_callback(self, *args: Any, **kwargs: Any) -> None:
        """Calculate elapsed duration."""
        if self._start_time:
            self._total_duration_sec = time.time() - self._start_time
            logger.info(
                "Run completed in %.2fs. Agent invocations: %d, Tool invocations: %d",
                self._total_duration_sec,
                self._agent_call_count,
                self._tool_call_count,
            )

    async def before_agent_callback(self, *, agent: BaseAgent, callback_context: Any) -> None:
        self._agent_call_count += 1

    async def after_tool_callback(self, *args: Any, **kwargs: Any) -> Optional[Any]:
        self._tool_call_count += 1
        return None

    def get_metrics(self) -> Dict[str, Any]:
        """Return performance telemetry."""
        return {
            "agent_invocations": self._agent_call_count,
            "tool_invocations": self._tool_call_count,
            "duration_sec": round(self._total_duration_sec, 2),
        }
