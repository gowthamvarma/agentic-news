"""Evidence Ledger Plugin for ADK.

Maintains an immutable audit ledger of every tool call, citation, and fact-checking
evidence snippet intercepted during workflow execution.
"""

from __future__ import annotations

import datetime
from typing import Any, Dict, List, Optional
from google.adk.plugins import BasePlugin
from google.adk.tools import BaseTool, ToolContext
from google.adk.agents import BaseAgent
from shared.config import logger


class EvidenceLedgerPlugin(BasePlugin):
    """Interception plugin logging verified evidence and tool output provenance."""

    def __init__(self, name: str = "evidence_ledger") -> None:
        super().__init__(name=name)
        self._ledger: List[Dict[str, Any]] = []

    async def after_tool_callback(
        self,
        *,
        tool: BaseTool,
        tool_args: dict[str, Any],
        tool_context: ToolContext,
        result: dict[str, Any],
    ) -> Optional[dict[str, Any]]:
        """Record tool execution results into the evidence ledger."""
        tool_name = getattr(tool, "name", str(tool))
        entry = {
            "timestamp": datetime.datetime.now(datetime.timezone.utc).isoformat(),
            "tool": tool_name,
            "args": tool_args,
            "result_preview": str(result)[:250] + "..." if len(str(result)) > 250 else str(result),
        }
        self._ledger.append(entry)
        logger.debug("EvidenceLedgerPlugin recorded entry for tool '%s'", tool_name)
        return result

    async def after_agent_callback(
        self,
        *,
        agent: BaseAgent,
        callback_context: Any,
    ) -> Optional[Any]:
        """Record agent step completion."""
        agent_name = getattr(agent, "name", str(agent))
        logger.debug("EvidenceLedgerPlugin noted agent completion: '%s'", agent_name)
        return None

    def get_ledger(self) -> List[Dict[str, Any]]:
        """Retrieve full audit history."""
        return list(self._ledger)

    def clear(self) -> None:
        """Reset ledger for a new session."""
        self._ledger.clear()
