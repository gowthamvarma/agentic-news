"""Integration tests for ADK Web Agent discovery and multi-agent execution."""

import sys
import unittest
from pathlib import Path

# Add project root to sys.path
PROJECT_ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(PROJECT_ROOT))

from google.adk.cli.fast_api import AgentLoader
from news_analyser.agent import root_agent as news_root
from fact_verifier.agent import root_agent as fact_root
from tutor_agent.agent import root_agent as tutor_root
from research_copilot.agent import root_agent as copilot_root
from perspective_debate.agent import root_agent as debate_root
from timeline_agent.agent import root_agent as timeline_root
from scenario_prediction.agent import root_agent as scenario_root
from shared.simulation import (
    generate_news_analyser_response,
    generate_timeline_agent_response,
    generate_perspective_debate_response,
    generate_scenario_prediction_response,
    generate_research_copilot_response,
)


class TestWorkflowAndDiscovery(unittest.TestCase):
    def test_agent_definitions_exist(self):
        """Verify standalone agents instantiate with correct names and models."""
        self.assertEqual(news_root.name, "news_analyser")
        self.assertEqual(fact_root.name, "fact_verifier")
        self.assertEqual(tutor_root.name, "tutor_agent")
        self.assertEqual(copilot_root.name, "research_copilot")
        self.assertEqual(debate_root.name, "perspective_debate")
        self.assertEqual(timeline_root.name, "timeline_agent")
        self.assertEqual(scenario_root.name, "scenario_prediction")

        # Verify news_analyser orchestrates all 23 specialist sub-agents across 6 layers
        sub_agent_names = [sa.name for sa in news_root.sub_agents]
        self.assertEqual(len(sub_agent_names), 23)

        expected_agents = [
            # Layer 1: Ingestion
            "source_collector",
            "claim_extractor",
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
        for expected in expected_agents:
            self.assertIn(expected, sub_agent_names)

    def test_adk_web_loader_discovery(self):
        """Verify that ADK Web's AgentLoader discovers standalone agents under adk-web-news."""
        loader = AgentLoader(agents_dir=str(PROJECT_ROOT))
        available = loader.list_agents()

        self.assertIn("news_analyser", available)
        self.assertIn("fact_verifier", available)
        self.assertIn("tutor_agent", available)
        self.assertIn("research_copilot", available)
        self.assertIn("perspective_debate", available)
        self.assertIn("timeline_agent", available)
        self.assertIn("scenario_prediction", available)

    def test_adk_web_loader_load_agent(self):
        """Verify loading each agent via ADK Web AgentLoader."""
        loader = AgentLoader(agents_dir=str(PROJECT_ROOT))

        loaded_news = loader.load_agent("news_analyser")
        self.assertEqual(loaded_news.name, "news_analyser")

        loaded_fact = loader.load_agent("fact_verifier")
        self.assertEqual(loaded_fact.name, "fact_verifier")

        loaded_tutor = loader.load_agent("tutor_agent")
        self.assertEqual(loaded_tutor.name, "tutor_agent")

        loaded_copilot = loader.load_agent("research_copilot")
        self.assertEqual(loaded_copilot.name, "research_copilot")

        loaded_debate = loader.load_agent("perspective_debate")
        self.assertEqual(loaded_debate.name, "perspective_debate")

        loaded_timeline = loader.load_agent("timeline_agent")
        self.assertEqual(loaded_timeline.name, "timeline_agent")

        loaded_scenario = loader.load_agent("scenario_prediction")
        self.assertEqual(loaded_scenario.name, "scenario_prediction")

    def test_agent_descriptions_comprehensive(self):
        """Verify all standalone agents have rich, multi-line professional descriptions (>60 chars)."""
        agents = [
            news_root,
            fact_root,
            tutor_root,
            copilot_root,
            debate_root,
            timeline_root,
            scenario_root,
        ]
        for agent in agents:
            self.assertIsNotNone(agent.description, f"Agent {agent.name} has no description")
            self.assertGreater(
                len(agent.description),
                60,
                f"Agent {agent.name} description is too short ({len(agent.description)} chars): '{agent.description}'",
            )
            # Verify feature tags or role descriptors are present
            self.assertTrue(
                any(keyword in agent.description for keyword in ["Feature", "Reconstructs", "Forensic", "Pedagogical", "Orchestrator", "Dialectical", "Forecasting", "Investigative"]),
                f"Agent {agent.name} description lacks standard role markers: '{agent.description}'",
            )

    def test_simulation_news_analyser_contains_timeline(self):
        """Verify simulation output contains Chronological Event Timeline & Narrative Evolution (F2, F29)."""
        resp = generate_news_analyser_response("Global Semiconductor Subsidies")
        self.assertIn("Chronological Event Timeline", resp)
        self.assertIn("Narrative Evolution", resp)
        self.assertIn("Consensus Points", resp)
        self.assertIn("Contradictions", resp)
        self.assertIn("Bias", resp)
        self.assertIn("Root Cause", resp)
        self.assertIn("Lessons", resp)
        self.assertIn("Scenario", resp)
        self.assertIn("Comprehension Quiz", resp)

    def test_simulation_specialized_agents(self):
        """Verify standalone agent simulation response generators return tailored outputs."""
        topic = "Artemis Moon Mission"

        timeline_resp = generate_timeline_agent_response(topic)
        self.assertIn("Chronological Event Timeline", timeline_resp)
        self.assertIn("Phase 1: Precursor", timeline_resp)
        self.assertIn("Narrative Evolution Tracking", timeline_resp)

        debate_resp = generate_perspective_debate_response(topic)
        self.assertIn("Dialectical Perspective Debate", debate_resp)
        self.assertIn("Advocate Position", debate_resp)
        self.assertIn("Critic Position", debate_resp)
        self.assertIn("Neutral Compromise Synthesis", debate_resp)

        scenario_resp = generate_scenario_prediction_response(topic)
        self.assertIn("Forward-Looking Scenario Prediction", scenario_resp)
        self.assertIn("Scenario 1", scenario_resp)
        self.assertIn("What-If Branching", scenario_resp)

        copilot_resp = generate_research_copilot_response(topic)
        self.assertIn("Autonomous Investigative Research Dossier", copilot_resp)
        self.assertIn("Primary Regulatory Filings", copilot_resp)
        self.assertIn("Open Investigative Leads", copilot_resp)


if __name__ == "__main__":
    unittest.main()
