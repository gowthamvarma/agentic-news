"""ADK 2.0 Graph Workflow & Checkpoint Node Orchestration for Agentic News Analyser.

Implements deterministic workflow boundaries, `@node(rerun_on_resume=True)` checkpoint
nodes, and `asyncio.gather` parallel fan-out across Understand, Verify, and Timeline layers
per `docs/best-agents-architecture-guide.md`.
"""

from __future__ import annotations

import asyncio
import json
from typing import Any, Callable, Dict, List, Optional

try:
    from google.adk.workflows import Workflow, node
except ImportError:
    def node(*, rerun_on_resume: bool = True) -> Callable[[Callable[..., Any]], Callable[..., Any]]:
        """Decorator marking a deterministic checkpoint node in an ADK 2.0 workflow graph."""
        def _decorator(fn: Callable[..., Any]) -> Callable[..., Any]:
            setattr(fn, "rerun_on_resume", rerun_on_resume)
            setattr(fn, "is_adk_node", True)
            return fn
        return _decorator

    class Workflow:
        """ADK 2.0 Graph Workflow orchestrating deterministic node transitions."""
        def __init__(self, *, name: str, edges: List[tuple[Any, Any]]) -> None:
            self.name = name
            self.edges = edges

from shared.config import logger
from shared.structured_builder import (
    build_stage_brief,
    build_stage_verifications,
    build_stage_timeline,
)
from shared.tools import fetch_news_articles


@node(rerun_on_resume=True)
async def ingest_sources_node(topic: str, num_sources: int = 8) -> List[Dict[str, Any]]:
    """Stage 1 Checkpoint Node: Ingests multi-spectrum source articles."""
    try:
        raw_str = await asyncio.to_thread(fetch_news_articles, topic, num_sources)
        return json.loads(raw_str)
    except Exception as exc:
        logger.debug("ingest_sources_node fallback for '%s': %s", topic, exc)
        return []


@node(rerun_on_resume=True)
async def understand_brief_node(
    topic: str,
    articles: Optional[List[Dict[str, Any]]] = None,
) -> Dict[str, Any]:
    """Stage 2 Checkpoint Node: Executive Brief, Key Metrics & Who/Where/What Primer."""
    return await asyncio.to_thread(build_stage_brief, topic, articles)


@node(rerun_on_resume=True)
async def verify_audit_node(
    topic: str,
    articles: Optional[List[Dict[str, Any]]] = None,
) -> Dict[str, Any]:
    """Stage 3 Checkpoint Node: IFCN Fact Verification, Contradictions & Bias Spectrum."""
    return await asyncio.to_thread(build_stage_verifications, topic, articles)


@node(rerun_on_resume=True)
async def timeline_trajectory_node(
    topic: str,
    articles: Optional[List[Dict[str, Any]]] = None,
) -> Dict[str, Any]:
    """Stage 4 Checkpoint Node: Chronological Event Timeline & Narrative Evolution."""
    return await asyncio.to_thread(build_stage_timeline, topic, articles)


@node(rerun_on_resume=True)
async def parallel_news_supervisor_node(topic: str) -> Dict[str, Any]:
    """Executes Ingestion followed by concurrent Understand, Verify, and Timeline nodes via asyncio.gather."""
    articles = await ingest_sources_node(topic, 8)
    brief_data, verif_data, timeline_data = await asyncio.gather(
        understand_brief_node(topic, articles),
        verify_audit_node(topic, articles),
        timeline_trajectory_node(topic, articles),
    )
    return {
        **brief_data,
        **verif_data,
        **timeline_data,
        "topic": brief_data.get("topic", topic),
        "available_sections": ["brief", "verification", "timeline"],
    }


news_analysis_workflow = Workflow(
    name="agentic_news_workflow",
    edges=[
        ("START", ingest_sources_node),
        (ingest_sources_node, parallel_news_supervisor_node),
    ],
)
