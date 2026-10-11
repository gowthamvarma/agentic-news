"""Automated unit test suite verifying the FastAPI backend and Firestore persistence service.
"""

import unittest
from shared.firestore_service import FirestoreService
from shared.structured_builder import (
    build_structured_intelligence,
    build_structured_quiz,
    build_structured_debate,
)


class TestApiBackendAndFirestore(unittest.IsolatedAsyncioTestCase):

    async def test_structured_intelligence_builder(self):
        data = build_structured_intelligence("AI Safety Regulations")
        self.assertIn("topic", data)
        self.assertIn("consensus_points", data)
        self.assertGreater(len(data["consensus_points"]), 0)
        self.assertIn("verifications", data)
        self.assertGreater(len(data["verifications"]), 0)
        self.assertIn("contradictions", data)
        self.assertIn("consequences_tree", data)

    async def test_quiz_and_debate_builder(self):
        quiz = build_structured_quiz("Clean Energy Subsidies")
        self.assertIn("questions", quiz)
        self.assertEqual(len(quiz["questions"]), 3)

        debate = build_structured_debate("Clean Energy Subsidies")
        self.assertIn("debate_turns", debate)
        self.assertGreater(len(debate["debate_turns"]), 0)
        self.assertIn("neutral_compromise_synthesis", debate)

    async def test_firestore_service_crud(self):
        analysis_id = "test-analysis-123"
        payload = {"topic": "Quantum Computing", "executive_summary": "Quantum test brief"}
        saved_id = await FirestoreService.save_analysis(analysis_id, payload)
        self.assertEqual(saved_id, analysis_id)

        retrieved = await FirestoreService.get_analysis(analysis_id)
        self.assertIsNotNone(retrieved)
        self.assertEqual(retrieved["topic"], "Quantum Computing")

        recent = await FirestoreService.list_recent_analyses(5)
        self.assertGreater(len(recent), 0)


if __name__ == "__main__":
    unittest.main()
