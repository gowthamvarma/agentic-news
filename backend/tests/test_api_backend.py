import os
import sys
from pathlib import Path
import unittest

BACKEND_ROOT = Path(__file__).resolve().parent.parent
if str(BACKEND_ROOT) not in sys.path:
    sys.path.insert(0, str(BACKEND_ROOT))

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
        self.assertGreaterEqual(len(quiz["questions"]), 3)

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

    async def test_firestore_chat_history_crud(self):
        analysis_id = "test-chat-analysis-456"
        msg1 = {"sender": "user", "text": "What about the legal appeals?"}
        history = await FirestoreService.save_chat_message(analysis_id, msg1)
        self.assertEqual(len(history), 1)
        self.assertEqual(history[0]["text"], "What about the legal appeals?")
        self.assertEqual(history[0]["sender"], "user")

        msg2 = {"sender": "agent", "text": "Preliminary injunction hearing scheduled this Friday."}
        history = await FirestoreService.save_chat_message(analysis_id, msg2)
        self.assertEqual(len(history), 2)

        retrieved = await FirestoreService.get_chat_history(analysis_id)
        self.assertEqual(len(retrieved), 2)
        self.assertEqual(retrieved[1]["sender"], "agent")

        # Test clear chat history
        cleared = await FirestoreService.clear_chat_history(analysis_id)
        self.assertTrue(cleared)
        after_clear = await FirestoreService.get_chat_history(analysis_id)
        self.assertEqual(len(after_clear), 0)


if __name__ == "__main__":
    unittest.main()
