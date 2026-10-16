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
        self._model_call_count = 0
        self._total_tokens_used = 0
        self._prompt_tokens = 0
        self._candidate_tokens = 0
        self._total_duration_sec = 0.0

    async def before_run_callback(self, *args: Any, **kwargs: Any) -> None:
        """Start run timer."""
        self._start_time = time.time()
        self._agent_call_count = 0
        self._tool_call_count = 0
        self._model_call_count = 0
        self._total_tokens_used = 0
        self._prompt_tokens = 0
        self._candidate_tokens = 0

    async def after_run_callback(self, *args: Any, **kwargs: Any) -> None:
        """Calculate elapsed duration."""
        if self._start_time:
            self._total_duration_sec = time.time() - self._start_time
            logger.info(
                "Run completed in %.2fs. Agent invocations: %d, Tool invocations: %d, Tokens: %d",
                self._total_duration_sec,
                self._agent_call_count,
                self._tool_call_count,
                self._total_tokens_used,
            )

    async def before_agent_callback(self, *, agent: BaseAgent, callback_context: Any) -> None:
        self._agent_call_count += 1

    async def after_model_callback(
        self,
        *,
        callback_context: Any,
        llm_response: Any,
    ) -> Optional[Any]:
        """Extract and accumulate token usage metadata from ADK LLM responses."""
        self._model_call_count += 1
        self.record_genai_usage(llm_response)
        if callback_context is not None and getattr(callback_context, "state", None) is not None:
            try:
                callback_context.state["temp:tokens_used"] = self._total_tokens_used
            except Exception:
                pass
        return None

    def record_genai_usage(self, response: Any) -> None:
        """Accumulates token counts from either an LlmResponse or GenerateContentResponse."""
        usage = getattr(response, "usage_metadata", None)
        if usage is not None:
            prompt_cnt = getattr(usage, "prompt_token_count", 0) or 0
            cand_cnt = getattr(usage, "candidates_token_count", 0) or 0
            total_cnt = getattr(usage, "total_token_count", 0) or (prompt_cnt + cand_cnt)
            self._prompt_tokens += int(prompt_cnt)
            self._candidate_tokens += int(cand_cnt)
            self._total_tokens_used += int(total_cnt)

    async def after_tool_callback(self, *args: Any, **kwargs: Any) -> Optional[Any]:
        self._tool_call_count += 1
        return None

    def get_metrics(self) -> Dict[str, Any]:
        """Return performance telemetry."""
        return {
            "agent_invocations": self._agent_call_count,
            "tool_invocations": self._tool_call_count,
            "model_invocations": self._model_call_count,
            "total_tokens_used": self._total_tokens_used,
            "prompt_tokens": self._prompt_tokens,
            "candidate_tokens": self._candidate_tokens,
            "duration_sec": round(self._total_duration_sec, 2),
        }
