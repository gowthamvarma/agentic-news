"""Pydantic v2 schemas and data contracts for News Intelligence Multi-Agent Fleet.

Defines typed data transfer objects (DTOs) for all 25 agents across the 6 layers
specified in docs/news-analyser.md and best-agents-architecture-guide.md.
"""

from __future__ import annotations

from enum import Enum
from typing import Any, Dict, List, Literal, Optional
from pydantic import BaseModel, Field


# ==============================================================================
# Enumerations
# ==============================================================================

class PoliticalLean(str, Enum):
    FAR_LEFT = "Far Left"
    LEFT = "Left"
    CENTER_LEFT = "Center Left"
    CENTER = "Center"
    CENTER_RIGHT = "Center Right"
    RIGHT = "Right"
    FAR_RIGHT = "Far Right"
    UNKNOWN = "Unknown"


class VerificationStatus(str, Enum):
    VERIFIED = "VERIFIED"
    DISPUTED = "DISPUTED"
    UNVERIFIED = "UNVERIFIED"
    FALSE = "FALSE"
    MISLEADING = "MISLEADING"


class ReliabilityTier(str, Enum):
    HIGH = "HIGH"
    MEDIUM = "MEDIUM"
    LOW = "LOW"
    QUESTIONABLE = "QUESTIONABLE"


# ==============================================================================
# Layer 1: Ingestion & Core Data Models
# ==============================================================================

class SourceArticle(BaseModel):
    """Normalized news article data model gathered from RSS, Search, or Web."""
    url: str = Field(description="Direct URL of the news source")
    title: str = Field(description="Headline of the article")
    outlet: str = Field(description="News publisher or outlet name")
    published_date: Optional[str] = Field(default=None, description="Publication timestamp or date string")
    content: str = Field(description="Body text or clean content snippet")
    author: Optional[str] = Field(default=None, description="Author or wire service attribution")


class AtomicClaim(BaseModel):
    """An isolated, verifiable factual assertion extracted from reporting."""
    claim_id: str = Field(description="Unique claim identifier, e.g. C-101")
    text: str = Field(description="Self-contained proposition")
    source_outlet: str = Field(description="Outlet making or reporting the claim")
    source_url: Optional[str] = Field(default=None, description="Source article URL")
    quoted_speaker: Optional[str] = Field(default=None, description="Individual or institution cited")
    category: Optional[str] = Field(default="Factual", description="Category: Factual, Statistical, Projection, Quote")


class ExtractedClaimsPayload(BaseModel):
    """Aggregated claims extracted across all ingested sources."""
    topic: str
    claims: List[AtomicClaim] = Field(default_factory=list)


# ==============================================================================
# Layer 2: Understand Layer Models
# ==============================================================================

class EntityPrimer(BaseModel):
    """Plain-language primer on a key entity or jargon term."""
    entity_name: str
    entity_type: Literal["PERSON", "ORGANIZATION", "LOCATION", "CONCEPT", "EVENT"]
    explainer_2_lines: str = Field(description="1-2 sentence plain-language explainer for newcomers")
    historical_context: Optional[str] = Field(default=None, description="How did we get here? Historical backdrop")


class ContextPrimerPayload(BaseModel):
    """Who / Where / What Primer and background explainer."""
    topic: str
    primer_items: List[EntityPrimer] = Field(default_factory=list)
    jargon_definitions: Dict[str, str] = Field(default_factory=dict)
    background_story: str = Field(description="Concise background summary of the origins of this event")


class TimelineEvent(BaseModel):
    """Chronologically sorted event milestone."""
    timestamp_or_date: str = Field(description="ISO date, month/year, or relative time")
    headline: str
    description: str
    source_outlet: str
    source_url: Optional[str] = None
    narrative_shift: Optional[str] = Field(
        default=None,
        description="How narrative framing or reported figures changed at this point"
    )


class TimelinePayload(BaseModel):
    """Chronological timeline and narrative evolution breakdown."""
    topic: str
    events: List[TimelineEvent] = Field(default_factory=list)
    narrative_evolution_summary: str = Field(
        description="Synthesis of how coverage shifted from initial breaking reports to current reporting"
    )


class KnowledgeNode(BaseModel):
    """Entity node in knowledge and dependency graph."""
    id: str
    label: str
    entity_type: str = Field(description="Person, State, Corporation, RegulatoryBody, Crisis")
    description: str


class KnowledgeEdge(BaseModel):
    """Directed connection in entity and event dependency graph."""
    source_id: str
    target_id: str
    relation_type: str = Field(description="CAUSED_BY, ALLIED_WITH, OPPOSES, REGULATES, FUNDS, PRECIPITATED")
    details: str


class KnowledgeGraphPayload(BaseModel):
    """Entity relationship and event dependency graph."""
    topic: str
    nodes: List[KnowledgeNode] = Field(default_factory=list)
    edges: List[KnowledgeEdge] = Field(default_factory=list)


class StakeholderProfile(BaseModel):
    """Actor analysis in the news event."""
    name: str
    role: str
    stated_position: str
    underlying_incentives: str
    wins_or_loses: Literal["GAINS", "LOSES", "MIXED / UNCERTAIN"]
    details: str


class StakeholderMapPayload(BaseModel):
    """Comprehensive stakeholder and incentives map."""
    topic: str
    stakeholders: List[StakeholderProfile] = Field(default_factory=list)


# ==============================================================================
# Layer 3: Verify Layer Models
# ==============================================================================

class ClaimVerification(BaseModel):
    """Evidentiary fact-check verdict for an atomic claim."""
    claim_id: str
    claim_text: str
    status: VerificationStatus
    confidence: float = Field(ge=0.0, le=1.0, description="Verification confidence score (0.00 to 1.00)")
    reasoning: str = Field(description="Detailed evidentiary analysis justifying the verdict")
    corroborating_sources: List[str] = Field(default_factory=list)
    conflicting_sources: List[str] = Field(default_factory=list)


class ContradictionItem(BaseModel):
    """Identified cross-source factual or statistical divergence."""
    contradiction_id: str
    topic_aspect: str = Field(description="Specific sub-topic or metric where outlets diverge")
    outlet_a: str
    claim_a: str
    outlet_b: str
    claim_b: str
    divergence_type: Literal["Numerical Discrepancy", "Causal Dispute", "Attribution Conflict", "Timeline Divergence", "Fact Negation"]
    analysis: str = Field(description="Synthesis of the discrepancy root cause (e.g. conditional funding vs headline)")


class BiasEvaluation(BaseModel):
    """Framing, loaded language, and political lean rating."""
    outlet: str
    assessed_lean: PoliticalLean
    loaded_terms_identified: List[str] = Field(default_factory=list)
    framing_narrative: str = Field(description="Editorial perspective and framing emphasis")
    omitted_context: Optional[str] = Field(default=None, description="Context present in other outlets but omitted here")


class SourceReliabilityScore(BaseModel):
    """Reputational and journalistic audit of a reporting outlet."""
    outlet: str
    tier: ReliabilityTier
    track_record_score: float = Field(ge=0.0, le=1.0, description="0.0 to 1.0 score")
    sourcing_quality: str = Field(description="Named on-the-record sources vs anonymous leaks")
    corrections_policy_status: str = Field(description="Transparent corrections history rating")


class ManipulationFlag(BaseModel):
    """Flag for propaganda technique or cognitive bias trigger."""
    outlet: str
    quote_or_headline: str
    technique: Literal[
        "CLICKBAIT",
        "LOADED_LANGUAGE",
        "HEADLINE_BODY_MISMATCH",
        "FEAR_APPEAL",
        "BANDWAGON",
        "FALSE_DILEMMA",
        "ANCHORING_BIAS"
    ]
    rationale: str


class CoverageGapReport(BaseModel):
    """Identification of omissions, underreported areas, and unanswered questions."""
    topic: str
    missing_perspectives: List[str] = Field(default_factory=list)
    unanswered_questions: List[str] = Field(default_factory=list)
    underreported_regions: List[str] = Field(default_factory=list)


# ==============================================================================
# Layer 4: Analyse and Learn Layer Models
# ==============================================================================

class RootCauseReport(BaseModel):
    """Systemic breakdown of why the event occurred."""
    topic: str
    immediate_triggers: List[str] = Field(default_factory=list)
    underlying_systemic_factors: List[str] = Field(default_factory=list)
    structural_failure_points: List[str] = Field(default_factory=list)


class LessonItem(BaseModel):
    """Key takeaway and preventive action."""
    lesson_takeaway: str
    target_audience: Literal["INDIVIDUALS", "ORGANISATIONS", "POLICYMAKERS"]
    concrete_preventive_action: str = Field(
        description="e.g. Maintain reserves, improve monitoring, strengthen institutions"
    )


class LessonsPreventionReport(BaseModel):
    """Lessons learned and prevention recommendations."""
    topic: str
    lessons: List[LessonItem] = Field(default_factory=list)


class ConsequenceNode(BaseModel):
    """Causal node in the consequence tree."""
    order: Literal["FIRST_ORDER", "SECOND_ORDER", "THIRD_ORDER"]
    impact_description: str
    affected_sector_or_group: str


class ImpactReport(BaseModel):
    """Economic, citizen, and systemic impact analysis."""
    topic: str
    economic_impact_summary: str = Field(description="Sectors, inflation, employment, public finances. No stock trades.")
    citizen_impact_what_it_means_for_me: str = Field(description="Actionable translation for everyday individuals")
    consequences_tree: List[ConsequenceNode] = Field(default_factory=list)


class HistoricalParallel(BaseModel):
    """Past historical analogue and how it resolved."""
    historical_event: str
    era_or_year: str
    parallels_and_similarities: str
    eventual_resolution_and_lesson: str


class HistoricalParallelsReport(BaseModel):
    """Comparative analysis with historical precedents."""
    topic: str
    parallels: List[HistoricalParallel] = Field(default_factory=list)


class FutureScenario(BaseModel):
    """Projected future scenario with probabilistic modeling."""
    scenario_title: str
    scenario_type: Literal["BEST_CASE", "MOST_LIKELY", "WORST_CASE"]
    probability_rating: Literal["HIGH", "MODERATE", "LOW"]
    time_horizon: str = Field(description="e.g. 1-3 months, 6-12 months, 2-5 years")
    potential_impact: str
    signals_to_watch: List[str] = Field(default_factory=list)
    what_if_assumption: Optional[str] = Field(
        default=None,
        description="What changes if a key baseline assumption is modified"
    )


class ScenarioPredictionReport(BaseModel):
    """Forecasts and what-if simulation scenarios."""
    topic: str
    scenarios: List[FutureScenario] = Field(default_factory=list)
    is_speculative_disclaimer: bool = True


class CountryTransferabilityReport(BaseModel):
    """'Could this happen in my country?' cross-jurisdiction assessment."""
    topic: str
    target_country: str
    could_it_happen_here: Literal["HIGH_RISK", "MODERATE_RISK", "LOW_RISK", "UNLIKELY"]
    institutional_safeguards: str
    vulnerabilities_identified: str
    adaptable_policy_lessons: List[str] = Field(default_factory=list)


# ==============================================================================
# Layer 5: Synthesis & Adaptation Models
# ==============================================================================

class NewsIntelligenceReport(BaseModel):
    """Master Intelligence Brief synthesizing findings across all agents."""
    topic: str
    executive_summary: str
    key_metrics_and_numbers: List[str] = Field(default_factory=list)
    consensus_points: List[str] = Field(default_factory=list, description="Points confirmed across all reporting")
    contradictions: List[ContradictionItem] = Field(default_factory=list)
    verifications: List[ClaimVerification] = Field(default_factory=list)
    bias_evaluations: List[BiasEvaluation] = Field(default_factory=list)
    future_scenarios: List[FutureScenario] = Field(default_factory=list)
    lessons_learned: List[LessonItem] = Field(default_factory=list)
    sources_analyzed: List[str] = Field(default_factory=list)


class AudienceAdaptationItem(BaseModel):
    """Rewritten briefing tailored to a specific audience."""
    audience_type: Literal["ELI5", "TEENAGER", "COLLEGE_ESSAY", "EXECUTIVE_BRIEF", "NEUTRAL_REPORT"]
    adapted_summary: str


class LanguageTranslationItem(BaseModel):
    """Translation into a target language."""
    language_name: str
    language_code: str
    translated_title: str
    translated_summary: str


class AudienceAdaptationReport(BaseModel):
    """Multi-audience and multilingual adapted briefings."""
    topic: str
    audience_adaptations: List[AudienceAdaptationItem] = Field(default_factory=list)
    translations: List[LanguageTranslationItem] = Field(default_factory=list)


# ==============================================================================
# Layer 6: Engage Layer Models
# ==============================================================================

class QuizQuestion(BaseModel):
    """Pedagogical active recall multiple-choice question."""
    question_id: int
    question: str
    options: List[str] = Field(description="4 options: A, B, C, D")
    correct_option_index: int = Field(ge=0, le=3)
    explanation: str
    citation_source: Optional[str] = None


class QuizPayload(BaseModel):
    """Collection of comprehension questions."""
    topic: str
    questions: List[QuizQuestion] = Field(default_factory=list)


class FlashcardItem(BaseModel):
    """Concept flashcard for knowledge retention."""
    card_id: int
    concept: str
    summary: str
    relevance: str


class FlashcardDeck(BaseModel):
    """Collection of retention flashcards."""
    topic: str
    cards: List[FlashcardItem] = Field(default_factory=list)


class PerspectiveDebateTurn(BaseModel):
    """Turn in a pro-vs-con debate grounded in source evidence."""
    speaker_perspective: Literal["PROPONENT / ADVOCATE", "CRITIC / OPPONENT"]
    core_argument: str
    grounding_citations: List[str] = Field(default_factory=list)


class PerspectiveDebateReport(BaseModel):
    """Simulated perspective debate between opposing viewpoints."""
    topic: str
    resolution_under_debate: str
    debate_turns: List[PerspectiveDebateTurn] = Field(default_factory=list)
    neutral_compromise_synthesis: str


class InvestigationStep(BaseModel):
    """Single lead pursued in autonomous Research Copilot investigation mode."""
    step_number: int
    sub_query_researched: str
    findings_extracted: str
    outlets_consulted: List[str] = Field(default_factory=list)


class InvestigationReport(BaseModel):
    """Deep-dive investigation report compiled by Research Copilot."""
    topic: str
    investigative_hypothesis: str
    investigation_steps: List[InvestigationStep] = Field(default_factory=list)
    deep_dive_verdict: str
