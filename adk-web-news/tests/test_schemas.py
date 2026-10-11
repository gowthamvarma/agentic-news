"""Comprehensive tests for Pydantic v2 data schemas in adk-web-news."""

import sys
import unittest
from pathlib import Path
from pydantic import ValidationError

# Add project root to sys.path
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from shared.schemas import (
    AtomicClaim,
    AudienceAdaptationReport,
    BiasEvaluation,
    BiasReport,
    ClaimVerification,
    ConsequenceNode,
    ContradictionItem,
    ContradictionReport,
    CountryTransferabilityReport,
    CoverageGapReport,
    EntityPrimer,
    FactVerifierReport,
    FlashcardDeck,
    HistoricalParallelsReport,
    ImpactReport,
    InvestigationReport,
    KnowledgeGraphPayload,
    LessonsPreventionReport,
    ManipulationFlag,
    ManipulationReport,
    NewsIntelligenceReport,
    PerspectiveDebateReport,
    PoliticalLean,
    QuizPayload,
    QuizQuestion,
    RootCauseReport,
    ScenarioPredictionReport,
    SourceArticle,
    SourceCollectorPayload,
    SourceReliabilityReport,
    StakeholderMapPayload,
    TimelinePayload,
    VerificationStatus,
)


class TestSchemas(unittest.TestCase):
    def test_source_article_valid(self):
        article = SourceArticle(
            url="https://reuters.com/news/123",
            title="Test Headline",
            outlet="Reuters",
            content="This is the article body.",
        )
        self.assertEqual(article.outlet, "Reuters")
        self.assertIsNone(article.published_date)

    def test_atomic_claim_valid(self):
        claim = AtomicClaim(
            claim_id="C-101",
            text="Inflation declined by 0.5% in September.",
            source_outlet="Bloomberg",
            quoted_speaker="Treasury Spokesperson",
            category="Statistical",
        )
        self.assertEqual(claim.claim_id, "C-101")
        self.assertEqual(claim.category, "Statistical")

    def test_claim_verification_confidence_bounds(self):
        ver = ClaimVerification(
            claim_id="C-101",
            claim_text="Sample claim",
            status=VerificationStatus.VERIFIED,
            confidence=0.95,
            reasoning="Corroborated by official bureau figures.",
        )
        self.assertEqual(ver.status, VerificationStatus.VERIFIED)

        # Check bounds validation
        with self.assertRaises(ValidationError):
            ClaimVerification(
                claim_id="C-101",
                claim_text="Sample claim",
                status=VerificationStatus.VERIFIED,
                confidence=1.5,  # Exceeds 1.0 limit
                reasoning="Invalid",
            )

    def test_contradiction_item_schema(self):
        item = ContradictionItem(
            contradiction_id="CONTRA-1",
            topic_aspect="Total Budget",
            outlet_a="Reuters",
            claim_a="$500B committed",
            outlet_b="Associated Press",
            claim_b="$420B unconditioned",
            divergence_type="Numerical Discrepancy",
            analysis="Conditionality dispute on sovereign debt reforms",
        )
        self.assertEqual(item.outlet_a, "Reuters")
        self.assertEqual(item.divergence_type, "Numerical Discrepancy")

    def test_bias_evaluation_lean_enum(self):
        eval_item = BiasEvaluation(
            outlet="The Guardian",
            assessed_lean=PoliticalLean.LEFT,
            loaded_terms_identified=["accounting illusion", "dangerous loopholes"],
            framing_narrative="Emphasized activist accountability over diplomatic breakthrough.",
        )
        self.assertEqual(eval_item.assessed_lean, PoliticalLean.LEFT)
        self.assertEqual(len(eval_item.loaded_terms_identified), 2)

    def test_understand_layer_schemas(self):
        # Context Primer
        primer = EntityPrimer(
            entity_name="Federal Reserve",
            entity_type="ORGANIZATION",
            explainer_2_lines="Central banking system of the US determining monetary policy.",
        )
        self.assertEqual(primer.entity_name, "Federal Reserve")

        # Timeline
        timeline = TimelinePayload(
            topic="Space Exploration Treaty",
            events=[],
            narrative_evolution_summary="Initial wire coverage expanded into strategic security reviews.",
        )
        self.assertEqual(timeline.topic, "Space Exploration Treaty")

        # Knowledge Graph
        kg = KnowledgeGraphPayload(topic="Tech Policy", nodes=[], edges=[])
        self.assertEqual(len(kg.nodes), 0)

        # Stakeholder Map
        stakeholders = StakeholderMapPayload(topic="Trade Accord", stakeholders=[])
        self.assertEqual(stakeholders.topic, "Trade Accord")

    def test_verify_layer_schemas(self):
        flag = ManipulationFlag(
            outlet="Tabloid News",
            quote_or_headline="Disaster Strikes Nationwide!",
            technique="FEAR_APPEAL",
            rationale="Catastrophic phrasing unsupported by statistical metrics.",
        )
        self.assertEqual(flag.technique, "FEAR_APPEAL")

    def test_analyse_layer_schemas(self):
        root = RootCauseReport(
            topic="Supply Chain Crisis",
            immediate_triggers=["Port congestion"],
            underlying_systemic_factors=["Just-in-time inventory fragility"],
            structural_failure_points=["Single-point component dependence"],
        )
        self.assertEqual(len(root.immediate_triggers), 1)

        lessons = LessonsPreventionReport(topic="Energy Crisis", lessons=[])
        self.assertEqual(lessons.topic, "Energy Crisis")

        impact = ImpactReport(
            topic="Tariff Policy",
            economic_impact_summary="Estimated 1.2% inflationary pressure.",
            citizen_impact_what_it_means_for_me="Higher retail electronics costs.",
            consequences_tree=[],
        )
        self.assertEqual(impact.topic, "Tariff Policy")

        parallels = HistoricalParallelsReport(topic="Banking Liquidity", parallels=[])
        self.assertEqual(parallels.topic, "Banking Liquidity")

        scenarios = ScenarioPredictionReport(topic="Diplomatic Accord", scenarios=[])
        self.assertTrue(scenarios.is_speculative_disclaimer)

        transfer = CountryTransferabilityReport(
            topic="Grid Failure",
            target_country="India",
            could_it_happen_here="MODERATE_RISK",
            institutional_safeguards="Regional grid interconnect dispatch protocols.",
            vulnerabilities_identified="Summer peak demand surge.",
            adaptable_policy_lessons=["Implement automated load shedding."],
        )
        self.assertEqual(transfer.target_country, "India")

    def test_synthesis_and_adaptation_schemas(self):
        report = NewsIntelligenceReport(
            topic="Clean Energy Treaty",
            executive_summary="Summary of findings across outlets.",
            key_metrics_and_numbers=["$500B", "110 countries"],
            consensus_points=["Agreement on 2032 milestones"],
            sources_analyzed=["Reuters", "AP", "Bloomberg", "The Guardian"],
        )
        self.assertEqual(report.topic, "Clean Energy Treaty")

        adaptation = AudienceAdaptationReport(topic="AI Policy", audience_adaptations=[], translations=[])
        self.assertEqual(adaptation.topic, "AI Policy")

    def test_engage_layer_schemas(self):
        quiz = QuizPayload(topic="Space Policy", questions=[])
        self.assertEqual(quiz.topic, "Space Policy")

        debate = PerspectiveDebateReport(
            topic="Nuclear Energy Expansion",
            resolution_under_debate="Resolved: SMR reactors are essential for grid decarbonization.",
            debate_turns=[],
            neutral_compromise_synthesis="Both sides agree baseload power requires zero-carbon solutions.",
        )
        self.assertEqual(debate.topic, "Nuclear Energy Expansion")

        investigation = InvestigationReport(
            topic="Port Security",
            investigative_hypothesis="Automated crane tracking discrepancies.",
            investigation_steps=[],
            deep_dive_verdict="Independent audit logs corroborate procurement anomalies.",
        )
        self.assertEqual(investigation.topic, "Port Security")

    def test_container_and_extended_report_schemas(self):
        """Verify container schemas for verify layer and extended fields in NewsIntelligenceReport."""
        # SourceCollectorPayload
        collector = SourceCollectorPayload(
            topic="Global Semiconductor Subsidies",
            articles=[
                SourceArticle(
                    url="https://reuters.com/semi-1",
                    title="Chip Fab Funding Announced",
                    outlet="Reuters",
                    content="Details on funding...",
                )
            ],
            total_articles_retrieved=1,
            collection_summary="Retrieved 1 wire article on fab funding.",
        )
        self.assertEqual(len(collector.articles), 1)
        self.assertEqual(collector.total_articles_retrieved, 1)

        # FactVerifierReport
        fact_rep = FactVerifierReport(
            topic="Chip Subsidies",
            verifications=[
                ClaimVerification(
                    claim_id="C-1",
                    claim_text="Subsidies exceed $50B.",
                    status=VerificationStatus.VERIFIED,
                    confidence=0.95,
                    reasoning="Matches statute budget appropriation.",
                )
            ],
            overall_verdict_summary="Statutory funding verified by legislative record.",
        )
        self.assertEqual(len(fact_rep.verifications), 1)

        # ContradictionReport
        contra_rep = ContradictionReport(
            topic="Chip Subsidies",
            contradictions=[],
            divergence_level="LOW",
            synthesis_summary="No substantial discrepancies identified.",
        )
        self.assertEqual(contra_rep.divergence_level, "LOW")

        # BiasReport
        bias_rep = BiasReport(
            topic="Chip Subsidies",
            evaluations=[],
            predominant_framing="Industrial policy and national competitiveness.",
        )
        self.assertEqual(bias_rep.predominant_framing, "Industrial policy and national competitiveness.")

        # SourceReliabilityReport
        rel_rep = SourceReliabilityReport(
            topic="Chip Subsidies",
            sources=[],
            fleet_reliability_score=0.92,
        )
        self.assertEqual(rel_rep.fleet_reliability_score, 0.92)

        # ManipulationReport
        manip_rep = ManipulationReport(
            topic="Chip Subsidies",
            flags=[],
            sensationalism_index=0.15,
        )
        self.assertEqual(manip_rep.sensationalism_index, 0.15)

        # CoverageGapReport
        gap_rep = CoverageGapReport(
            topic="Chip Subsidies",
            underreported_perspectives=["Environmental impact on local water supply"],
            unanswered_questions=["Timeline for cleanroom environmental permits"],
        )
        self.assertEqual(len(gap_rep.underreported_perspectives), 1)

        # NewsIntelligenceReport with timeline and consequence tree
        tl = TimelinePayload(
            topic="Chip Subsidies",
            events=[],
            narrative_evolution_summary="Shifted from subsidy bidding to workforce readiness.",
        )
        root = RootCauseReport(
            topic="Chip Subsidies",
            immediate_triggers=["Supply chain shortages"],
            underlying_systemic_factors=["Geopolitical supply concentration"],
            structural_failure_points=["Single-region advanced packaging dependence"],
        )
        node = ConsequenceNode(
            order="FIRST_ORDER",
            impact_description="Domestic fab construction commences",
            affected_sector_or_group="Semiconductor manufacturing",
        )
        report = NewsIntelligenceReport(
            topic="Chip Subsidies",
            executive_summary="Comprehensive analysis of fab funding.",
            key_metrics_and_numbers=["$52B total"],
            consensus_points=["All outlets confirm signing"],
            sources_analyzed=["Reuters", "Bloomberg"],
            timeline=tl,
            root_cause_analysis=root,
            consequences_tree=[node],
        )
        self.assertIsNotNone(report.timeline)
        self.assertEqual(report.timeline.narrative_evolution_summary, "Shifted from subsidy bidding to workforce readiness.")
        self.assertEqual(len(report.consequences_tree), 1)
        self.assertEqual(report.consequences_tree[0].order, "FIRST_ORDER")


if __name__ == "__main__":
    unittest.main()
