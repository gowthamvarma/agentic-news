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
        if tool_context is not None and getattr(tool_context, "state", None) is not None:
            try:
                session_ledger = list(tool_context.state.get("session:evidence_ledger", []))
                session_ledger.append(entry)
                tool_context.state["session:evidence_ledger"] = session_ledger
            except Exception:
                pass
        logger.debug("EvidenceLedgerPlugin recorded entry for tool '%s'", tool_name)
        return result

    def record_articles(
        self,
        topic: str,
        articles: List[Dict[str, Any]],
        tool_name: str = "fetch_news_articles",
    ) -> None:
        """Records ingested articles into the immutable evidence ledger for stream provenance."""
        ts = datetime.datetime.now(datetime.timezone.utc).isoformat()
        self._ledger.append({
            "timestamp": ts,
            "tool": tool_name,
            "args": {"topic": topic, "count": len(articles)},
            "result_preview": f"Ingested {len(articles)} primary articles across {', '.join(a.get('outlet', 'Wire') for a in articles[:5])}",
            "sources": [
                {
                    "outlet": a.get("outlet", "News Agency"),
                    "title": a.get("title", ""),
                    "url": a.get("url", ""),
                    "published_date": a.get("published_date", ""),
                }
                for a in articles[:10]
            ],
        })

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
