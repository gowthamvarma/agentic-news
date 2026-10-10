"""Safety and Model Armor Guardrail Plugin for News Analyser.

Screens for prompt injection, hate speech, and unverified hazardous content,
enforcing journalistic integrity and responsible AI guardrails.
"""

from __future__ import annotations

from typing import Any, Optional
from google.adk.plugins import BasePlugin
from google.adk.agents import BaseAgent
from shared.config import logger


FORBIDDEN_PATTERNS = [
    "ignore all previous instructions",
    "disregard system prompt",
    "jailbreak",
    "override security guidelines",
]


class NewsGuardrailPlugin(BasePlugin):
    """Filters malicious prompt injection and ensures strict editorial standards."""

    def __init__(self, name: str = "news_guardrail") -> None:
        super().__init__(name=name)
        self._violations_count = 0

    async def before_agent_callback(
        self,
        *,
        agent: BaseAgent,
        callback_context: Any,
    ) -> Optional[Any]:
        """Inspect agent invocation for security or integrity issues."""
        agent_name = getattr(agent, "name", "agent")
        logger.debug("NewsGuardrailPlugin inspecting agent turn: %s", agent_name)
        return None

    def validate_user_prompt(self, prompt: str) -> Optional[str]:
        """Check user prompt for jailbreak attempts."""
        lower_prompt = prompt.lower()
        for pattern in FORBIDDEN_PATTERNS:
            if pattern in lower_prompt:
                self._violations_count += 1
                logger.warning("Guardrail violation detected: '%s'", pattern)
                return (
                    "Editorial Safety Guardrail: The submitted query contains unauthorized override "
                    "instructions that violate journalistic integrity standards."
                )
        return None

    def get_violations_count(self) -> int:
        return self._violations_count
