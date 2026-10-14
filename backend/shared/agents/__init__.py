"""Comprehensive Agent Roster for Agentic News Analyser.

Exports all 25 agents across the 6 architecture layers specified in docs/news-analyser.md.
"""

from shared.agents.ingestion import source_collector, claim_extractor, topic_curator
from shared.agents.understand import (
    context_builder,
    timeline_agent,
    knowledge_graph_agent,
    stakeholder_map_agent,
)
from shared.agents.verify import (
    fact_verifier,
    source_reliability_agent,
    contradiction_analyst,
    bias_analyst,
    manipulation_detector,
    coverage_gap_agent,
)
from shared.agents.analyse import (
    root_cause_agent,
    lessons_prevention_agent,
    impact_analyzer,
    historical_parallels_agent,
    scenario_prediction_agent,
    country_transferability_agent,
)
from shared.agents.synthesis import (
    report_synthesizer,
    audience_adaptation_agent,
)
from shared.agents.engage import (
    tutor_agent,
    perspective_debate_agent,
    research_copilot,
)

__all__ = [
    # Layer 1: Ingestion
    "source_collector",
    "claim_extractor",
    "topic_curator",
    # Layer 2: Understand
    "context_builder",
    "timeline_agent",
    "knowledge_graph_agent",
    "stakeholder_map_agent",
    # Layer 3: Verify
    "fact_verifier",
    "source_reliability_agent",
    "contradiction_analyst",
    "bias_analyst",
    "manipulation_detector",
    "coverage_gap_agent",
    # Layer 4: Analyse & Learn
    "root_cause_agent",
    "lessons_prevention_agent",
    "impact_analyzer",
    "historical_parallels_agent",
    "scenario_prediction_agent",
    "country_transferability_agent",
    # Layer 5: Synthesis & Adaptation
    "report_synthesizer",
    "audience_adaptation_agent",
    # Layer 6: Engage
    "tutor_agent",
    "perspective_debate_agent",
    "research_copilot",
]
