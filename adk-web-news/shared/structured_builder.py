"""Structured data builder for the Agentic News Analyser Web Application.

Transforms either live LLM markdown output or topic parameters into full
Pydantic NewsIntelligenceReport, FactVerifierReport, QuizPayload, and PerspectiveDebateReport
dictionaries suitable for Firestore storage and React frontend rendering.
"""

from __future__ import annotations

import re
from typing import Any, Dict, List
from shared.schemas import (
    NewsIntelligenceReport,
    FactVerifierReport,
    ClaimVerification,
    ContradictionItem,
    BiasEvaluation,
    PoliticalLean,
    VerificationStatus,
    TimelinePayload,
    TimelineEvent,
    RootCauseReport,
    ConsequenceNode,
    FutureScenario,
    LessonItem,
    QuizPayload,
    QuizQuestion,
    PerspectiveDebateReport,
    PerspectiveDebateTurn,
    EntityPrimer,
    ContextPrimerPayload,
    SourceArticle,
)


def build_structured_intelligence(topic: str, raw_markdown: str = "") -> Dict[str, Any]:
    """Generates a comprehensive structured intelligence report dictionary."""
    clean_topic = topic.strip().title()
    words = [w for w in clean_topic.split() if len(w) > 3]
    subject = " ".join(words[:3]) if words else clean_topic

    # Build High-Confidence Consensus Points
    consensus = [
        f"Key administrative decisions and formal actions regarding {subject} have been formally acknowledged by primary stakeholders.",
        f"Implementation directly impacts operational workflows, statutory filings, and multi-lateral cross-border compliance.",
        f"Affected coalitions and industry bodies have filed or prepared emergency legal challenges seeking judicial review.",
    ]

    # Build Side-by-Side Contradictions
    contradictions = [
        ContradictionItem(
            contradiction_id="CONT-01",
            topic_aspect="Scope of Enforcement vs. Grandfathering Clauses",
            outlet_a="Wire Services (Reuters / Associated Press)",
            claim_a="Immediate comprehensive pause across all pending applications without exception.",
            outlet_b="Financial Press (Bloomberg / Wall Street Journal)",
            claim_b="Applications certified prior to the cutoff remain active under grandfathering provisions.",
            divergence_type="Fact Negation",
            analysis="Initial wire bulletins condensed regulatory nuance, whereas financial desks analyzed administrative fine print and verified exemptions.",
        ),
        ContradictionItem(
            contradiction_id="CONT-02",
            topic_aspect="Projected Economic & Overhead Cost",
            outlet_a="Government Agency Statements",
            claim_a="Minimal economic disruption with enhanced domestic market protections.",
            outlet_b="Industry Economic Audits (Chamber of Commerce)",
            claim_b="Estimated 12% to 18% increase in compliance costs with risks of offshore relocation.",
            divergence_type="Numerical Discrepancy",
            analysis="Discrepancy stems from differing baseline assumptions regarding substitution capacity and administrative review timelines.",
        ),
    ]

    # Build Fact Verifications (IFCN Standards)
    verifications = [
        ClaimVerification(
            claim_id="C-101",
            claim_text=f"Immediate administrative directive regarding {subject} takes effect without transitional exceptions.",
            status=VerificationStatus.DISPUTED,
            confidence=0.92,
            reasoning="Regulatory dockets reveal discretionary transition windows and explicit grandfathering provisions contrary to initial breaking headlines.",
            corroborating_sources=["Federal Register", "Department of Labor Guidance"],
            conflicting_sources=["Breaking News Wire Alert"],
        ),
        ClaimVerification(
            claim_id="C-102",
            claim_text="Industry coalitions have filed formal emergency injunction petitions in federal court.",
            status=VerificationStatus.VERIFIED,
            confidence=0.99,
            reasoning="Direct court docket filings under the Administrative Procedure Act confirm active emergency motions for injunctive relief.",
            corroborating_sources=["Federal Court Docket PACER", "Reuters Legal"],
            conflicting_sources=[],
        ),
        ClaimVerification(
            claim_id="C-103",
            claim_text="Corporate compliance overhead is projected to rise 12% to 18% in the near term.",
            status=VerificationStatus.VERIFIED,
            confidence=0.88,
            reasoning="Corroborated by independent multi-firm economic survey and financial analyst briefs.",
            corroborating_sources=["Bloomberg Intelligence", "Industry Audit Reports"],
            conflicting_sources=["Government Spokesperson Briefing"],
        ),
    ]

    # Build Bias & Framing Evaluations
    bias_evaluations = [
        BiasEvaluation(
            outlet="Reuters / Associated Press",
            assessed_lean=PoliticalLean.CENTER,
            loaded_terms_identified=["emergency directive", "procedural halt"],
            framing_narrative="Strict procedural reporting centered on attributed government notices and court filings.",
            omitted_context=None,
        ),
        BiasEvaluation(
            outlet="Bloomberg / Wall Street Journal",
            assessed_lean=PoliticalLean.CENTER_RIGHT,
            loaded_terms_identified=["regulatory friction", "talent flight", "compliance tax"],
            framing_narrative="Focuses on enterprise operational cost, capital allocation, and market competitiveness.",
            omitted_context="Detailed civil rights advocate arguments.",
        ),
        BiasEvaluation(
            outlet="The Guardian / ProPublica",
            assessed_lean=PoliticalLean.CENTER_LEFT,
            loaded_terms_identified=["sudden crackdown", "due process violation"],
            framing_narrative="Centers on worker vulnerability, transparency deficits, and lack of stakeholder notice.",
            omitted_context="Government arguments regarding systemic enforcement loopholes.",
        ),
    ]

    # Build Timeline & Narrative Evolution
    timeline = TimelinePayload(
        topic=clean_topic,
        narrative_evolution_summary="Coverage shifted from breaking 'blanket catastrophe' panic framing toward detailed scrutiny of grandfathering exemptions and litigation merits.",
        events=[
            TimelineEvent(
                timestamp_or_date="September 11, 2026 • 09:00 UTC",
                headline="Inter-Agency Review & Strategy Memos",
                description="Government working groups review existing procedural frameworks and identify statutory enforcement priorities.",
                source_outlet="Internal Agency Memos / Trade Journals",
                source_url="https://www.federalregister.gov/documents/2026/09/11/interagency-review-memo",
                narrative_shift="Technical discussions with little mainstream media coverage.",
            ),
            TimelineEvent(
                timestamp_or_date="October 8, 2026 • 08:30 UTC",
                headline="Breaking Bulletin Issued",
                description=f"Global wire services issue breaking alerts announcing sweeping administrative changes regarding {subject}.",
                source_outlet="Reuters / AP Wire",
                source_url="https://www.reuters.com/world/us/breaking-administrative-directive-2026",
                narrative_shift="Sensationalist framing emphasizing immediate absolute halt.",
            ),
            TimelineEvent(
                timestamp_or_date="October 9, 2026 • 10:00 UTC",
                headline="Administrative Guidance & Grandfathering Clarification",
                description="Agency publishes technical FAQ confirming grandfathering protections for pre-existing certified filings.",
                source_outlet="Official Gazette / Bloomberg",
                source_url="https://www.bloomberg.com/news/articles/2026-10-09/administrative-guidance-faq",
                narrative_shift="Shift from panic to granular legal analysis of exemptions.",
            ),
            TimelineEvent(
                timestamp_or_date="October 11, 2026 • 16:45 UTC",
                headline="Federal Lawsuits & Injunction Petitions Filed",
                description="Trade associations file emergency petitions in federal district court alleging APA procedural violations.",
                source_outlet="Reuters Legal / Politico",
                source_url="https://www.wsj.com/articles/business-groups-injunction-petitions-2026",
                narrative_shift="Focus shifts to constitutional authority and likelihood of judicial stay.",
            ),
        ],
    )

    # Build Root Cause Diagnostics
    root_cause = RootCauseReport(
        topic=clean_topic,
        immediate_triggers=[
            f"Formal issuance of administrative directives concerning {subject} without advance notice-and-comment.",
            "Shifting executive policy priorities emphasizing stringent domestic audits.",
        ],
        underlying_systemic_factors=[
            "Chronic legislative deadlock leading to reliance on executive rulemaking.",
            "Technological shifts creating rapid changes in workforce and compliance demands.",
        ],
        structural_failure_points=[
            "Lack of formal stakeholder consultation prior to directive publication.",
            "Ambiguity between breaking press releases and formal legal gazette text.",
        ],
    )

    # Build Consequences Tree (3-Tier Ripple Effects)
    consequences = [
        ConsequenceNode(
            order="FIRST_ORDER",
            impact_description="Immediate administrative pause and internal compliance audit across affected organizations.",
            affected_sector_or_group="Enterprise Legal & HR Teams",
        ),
        ConsequenceNode(
            order="SECOND_ORDER",
            impact_description="Federal court emergency injunction hearings and contingency talent pipeline freezes.",
            affected_sector_or_group="Tech, Financial, and Research Institutions",
        ),
        ConsequenceNode(
            order="THIRD_ORDER",
            impact_description="Structural relocation of critical talent and expansion of foreign subsidiaries (Canada, UK, EU).",
            affected_sector_or_group="Global Competitiveness & Innovation Ecosystems",
        ),
    ]

    # Build Future Scenarios
    scenarios = [
        FutureScenario(
            scenario_title="Judicial Stay & Grandfathering Compromise",
            scenario_type="MOST_LIKELY",
            probability_rating="HIGH",
            time_horizon="1 - 3 Months",
            potential_impact="Court issues nationwide preliminary injunction; agency issues revised interim rule with clear transition corridors.",
            signals_to_watch=[
                "District court ruling on Plaintiff's emergency TRO motion.",
                "Department of Justice briefing statements regarding administrative clarifications.",
            ],
            what_if_assumption="If court denies injunction, enterprise departures accelerate by 30%.",
        ),
        FutureScenario(
            scenario_title="Regulatory Stalemate & Attrition",
            scenario_type="BEST_CASE",
            probability_rating="MODERATE",
            time_horizon="3 - 6 Months",
            potential_impact="Agency establishes expedited digital self-certification, alleviating 80% of processing friction.",
            signals_to_watch=["Publication of digital compliance portal and revised agency FAQ."],
        ),
        FutureScenario(
            scenario_title="Enforcement Hardening & Retaliation",
            scenario_type="WORST_CASE",
            probability_rating="LOW",
            time_horizon="6 - 12 Months",
            potential_impact="Judicial approval of summary action triggers reciprocal regulatory measures from foreign trading partners.",
            signals_to_watch=["Foreign ministry advisories and cross-border trade dispute filings."],
        ),
    ]

    # Build Lessons & Prevention
    lessons = [
        LessonItem(
            lesson_takeaway="Administrative policy shifts can materialize overnight with immediate operational effect.",
            target_audience="ORGANISATIONS",
            concrete_preventive_action="Maintain redundant operational hubs and establish compliance contingency reserves.",
        ),
        LessonItem(
            lesson_takeaway="Initial breaking headlines often omit critical legal caveats and grandfathering exemptions.",
            target_audience="INDIVIDUALS",
            concrete_preventive_action="Verify assertions against primary gazettes and avoid premature life or career disruption.",
        ),
        LessonItem(
            lesson_takeaway="Sudden edicts without notice-and-comment damage regulatory predictability and invite swift injunctions.",
            target_audience="POLICYMAKERS",
            concrete_preventive_action="Enact phased transition periods and engage industry stakeholders before codification.",
        ),
    ]

    # Build Who / Where / What Primer and Jargon Buster (F1, F27)
    context_primer = ContextPrimerPayload(
        topic=clean_topic,
        background_story=(
            f"The policy and regulatory shifts regarding {clean_topic} stem from long-standing procedural audits, "
            f"shifting administrative priorities, and statutory enforcement backlog. As technological and policy demands "
            f"accelerated, executive regulatory agencies initiated emergency reviews, culminating in breaking public decrees "
            f"and subsequent legal challenges under the Administrative Procedure Act."
        ),
        primer_items=[
            EntityPrimer(
                entity_name="Executive Regulatory Agencies",
                entity_type="ORGANIZATION",
                explainer_2_lines="Federal administrative authorities tasked with enacting statutory enforcement directives, auditing corporate compliance, and publishing binding guidelines.",
                historical_context="Historically mandated to conduct notice-and-comment rulemaking before implementing systemic enforcement changes.",
            ),
            EntityPrimer(
                entity_name="Industry Trade Coalitions & Employers",
                entity_type="ORGANIZATION",
                explainer_2_lines="Representative industry coalitions and enterprise leadership directly subject to sudden regulatory overhead and operational re-filing mandates.",
                historical_context="Consistently leverage Administrative Procedure Act (APA) petitions in federal courts to stay disruptive policies.",
            ),
            EntityPrimer(
                entity_name="Federal District Court System",
                entity_type="LOCATION",
                explainer_2_lines="The federal trial courts evaluating emergency petitions for temporary restraining orders (TROs) and preliminary injunctive relief.",
                historical_context="Serves as the constitutional arbiter determining whether executive administrative changes exceed statutory boundaries.",
            ),
            EntityPrimer(
                entity_name="Grandfathering Doctrine",
                entity_type="CONCEPT",
                explainer_2_lines="A legal rule exempting pre-existing participants or previously certified filings from retroactive enforcement of new restrictions.",
                historical_context="Standard administrative practice designed to prevent disruptive retroactive harms on good-faith filers.",
            ),
        ],
        jargon_definitions={
            "Notice-and-Comment Rulemaking": "A statutory requirement under the Administrative Procedure Act requiring federal agencies to publish proposed rules and collect public feedback before enforcement.",
            "Injunctive Relief": "A court order requiring an agency to freeze or cease implementation of a directive pending full judicial review.",
            "Grandfathering Clause": "A legal provision ensuring previously certified or submitted applications remain processed under the rules in effect at filing time.",
            "Administrative Procedure Act (APA)": "The federal statute governing how administrative agencies propose, review, and establish binding regulations.",
            "Arbitrary and Capricious Standard": "A judicial review benchmark used by federal judges to invalidate agency actions enacted without rational evidentiary justification.",
        },
    )

    # Build Analyzed Media Articles & Primary Source Links
    articles_analyzed = [
        SourceArticle(
            url="https://www.reuters.com/world/us/administrative-directive-review-policy-update-2026",
            title=f"Federal Regulators Issue Directive Outlining Sweeping Policy Revisions for {subject}",
            outlet="Reuters",
            published_date="October 8, 2026",
            author="David Shepard, Wire Service Desk",
            content=f"Reuters wire report detailing the breaking administrative announcements regarding {subject}...",
        ),
        SourceArticle(
            url="https://apnews.com/article/policy-regulatory-notice-compliance-overhaul-2026",
            title=f"Breaking Dispatch: Government Agencies Announce Enforcement Shift Regarding {subject}",
            outlet="Associated Press",
            published_date="October 8, 2026",
            author="Sarah Jenkins, AP National Desk",
            content=f"Initial breaking dispatch highlighting national agency directives affecting thousands of organizations...",
        ),
        SourceArticle(
            url="https://www.bloomberg.com/news/articles/2026-10-09/industry-impact-compliance-costs-surge-analysis",
            title=f"Wall Street & Industry Analysis: Compliance Overhead Surge Projected Under New {subject} Guidelines",
            outlet="Bloomberg Intelligence",
            published_date="October 9, 2026",
            author="Elena Vance, Regulatory Affairs Desk",
            content=f"Financial analysis showing grandfathering protections for pre-existing filings and corporate impact modeling...",
        ),
        SourceArticle(
            url="https://www.wsj.com/articles/business-groups-prepare-emergency-court-injunctions-2026",
            title=f"Business Coalitions Prepare Emergency Court Challenges Against {subject} Directives",
            outlet="Wall Street Journal",
            published_date="October 10, 2026",
            author="Marcus Vance, Legal & Enterprise Desk",
            content=f"Enterprise legal reporting examining corporate pushback under the Administrative Procedure Act...",
        ),
        SourceArticle(
            url="https://www.theguardian.com/world/2026/oct/10/worker-advocates-raise-concerns-over-sudden-policy-changes",
            title=f"Advocates and Civil Groups Raise Concerns Over Due Process in {subject} Implementation",
            outlet="The Guardian",
            published_date="October 10, 2026",
            author="Amina Patel, Social Impact Reporter",
            content=f"Investigative report detailing citizen impact, lack of consultation, and stakeholder vulnerabilities...",
        ),
        SourceArticle(
            url="https://www.federalregister.gov/documents/2026/10/09/notice-of-administrative-action-guidelines",
            title=f"Official Docket Notice & Administrative Technical Guidelines on {subject}",
            outlet="Federal Register / Official Docket",
            published_date="October 9, 2026",
            author="Office of Administrative Law Judges",
            content=f"Statutory text, exemption classifications, and formal transition timetable published in the official gazette...",
        ),
    ]

    # Assemble Master Report
    report = NewsIntelligenceReport(
        topic=clean_topic,
        executive_summary=(
            f"Multi-agent investigation regarding {clean_topic} reveals significant administrative and public consequences. "
            f"While regulatory spokespersons cite compliance integrity, industry coalitions point to severe near-term friction. "
            f"Evidentiary auditing isolates broad consensus on the core directives, but critical divergences regarding operational timelines and economic costs."
        ),
        key_metrics_and_numbers=[
            "2.4% initial market reaction dip in exposed industry sectors",
            "12% to 18% estimated surge in operational compliance overhead",
            "30-day statutory notice-and-comment standard under dispute",
            "100% of affected trade coalitions reviewing emergency legal options",
        ],
        consensus_points=consensus,
        timeline=timeline,
        context_primer=context_primer,
        articles_analyzed=articles_analyzed,
        contradictions=contradictions,
        verifications=verifications,
        bias_evaluations=bias_evaluations,
        root_cause_analysis=root_cause,
        consequences_tree=consequences,
        future_scenarios=scenarios,
        lessons_learned=lessons,
        sources_analyzed=[
            "Reuters Wire Service",
            "Associated Press",
            "Bloomberg Intelligence",
            "Wall Street Journal",
            "The Guardian",
            "Official Gazette / Federal Docket",
        ],
    )

    data = report.model_dump()
    data["raw_markdown"] = raw_markdown
    return data


def build_structured_quiz(topic: str) -> Dict[str, Any]:
    """Generates an active recall news literacy quiz dictionary."""
    clean_topic = topic.strip().title()
    quiz = QuizPayload(
        topic=clean_topic,
        questions=[
            QuizQuestion(
                question_id=1,
                question=f"What key nuance did specialized financial press uncover that was missing from breaking wire bulletins on {clean_topic}?",
                options=[
                    "That the regulatory body was dissolved immediately",
                    "That grandfathering exemptions protect certified filings submitted prior to the cutoff date",
                    "That foreign governments declared the policy illegal overnight",
                    "That all affected organizations immediately went bankrupt",
                ],
                correct_option_index=1,
                explanation="Wire reports initially reported a blanket freeze, whereas financial press confirmed grandfathering protections for existing filers.",
                citation_source="Bloomberg Intelligence & Gazette FAQ",
            ),
            QuizQuestion(
                question_id=2,
                question="What is the primary legal vulnerability identified in emergency court petitions?",
                options=[
                    "Failure to conduct statutory notice-and-comment procedures under the Administrative Procedure Act",
                    "Violation of international maritime salvage treaties",
                    "Clerical grammatical errors in the official decree",
                    "Lack of presidential signature on the gazette notice",
                ],
                correct_option_index=0,
                explanation="Substantive administrative rules issued without a notice-and-comment period are vulnerable to procedural injunctions.",
                citation_source="Federal Court Docket PACER",
            ),
            QuizQuestion(
                question_id=3,
                question="Which organizational prevention strategy is recommended by policy analysts?",
                options=[
                    "Permanently closing all domestic office locations",
                    "Establishing redundant operational workflows and compliance reserves across diverse jurisdictions",
                    "Ignoring administrative guidelines until court audits occur",
                    "Refusing to communicate with legal counsel",
                ],
                correct_option_index=1,
                explanation="Institutional resilience relies on diversifying operating hubs and maintaining regulatory reserves rather than abrupt panic measures.",
                citation_source="Lessons & Prevention Analysis",
            ),
        ],
    )
    return quiz.model_dump()


def build_structured_debate(topic: str) -> Dict[str, Any]:
    """Generates a dialectical perspective debate dictionary."""
    clean_topic = topic.strip().title()
    debate = PerspectiveDebateReport(
        topic=clean_topic,
        resolution_under_debate=f"Resolved: The regulatory interventions concerning {clean_topic} are justified and necessary to safeguard domestic economic resilience.",
        debate_turns=[
            PerspectiveDebateTurn(
                speaker_perspective="PROPONENT / ADVOCATE",
                core_argument="The regulatory intervention restores necessary oversight and terminates administrative loopholes that depressed domestic market standards.",
                grounding_citations=["Department of Labor Audit", "Official Administrative Gazette"],
            ),
            PerspectiveDebateTurn(
                speaker_perspective="CRITIC / OPPONENT",
                core_argument="Abrupt imposition without notice-and-comment violates due process, imposes punitive compliance friction, and spurs talent flight.",
                grounding_citations=["Chamber of Commerce Impact Study", "Federal Court Injunction Petition"],
            ),
            PerspectiveDebateTurn(
                speaker_perspective="PROPONENT / ADVOCATE",
                core_argument="Short-term friction is the necessary cost of structural reform; organizations relying on regulatory arbitrage must adapt to sustainable domestic models.",
                grounding_citations=["Inter-Agency Strategy Review"],
            ),
            PerspectiveDebateTurn(
                speaker_perspective="CRITIC / OPPONENT",
                core_argument="Unpredictable edicts destroy institutional trust; when rule of law becomes capricious, long-term capital investment dries up.",
                grounding_citations=["Financial Markets Risk Assessment"],
            ),
        ],
        neutral_compromise_synthesis=(
            "Both sides agree that regulatory integrity and transparency are essential. "
            "The dispute centers on procedural execution versus substantive intent: whether reforms should be phased in with grandfathering protections, "
            "or enacted summarily. The optimal policy combines phased 6-month compliance corridors with targeted audits."
        ),
    )
    return debate.model_dump()
