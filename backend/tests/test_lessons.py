import unittest
from shared.structured_builder import build_structured_scenarios


class TestLessonsAndScenarios(unittest.TestCase):
    def test_scenarios_and_lessons_structure(self):
        data = build_structured_scenarios("Semiconductor Export Controls")
        self.assertIn("topic", data)
        self.assertIn("lessons_learned", data)
        self.assertIsInstance(data["lessons_learned"], list)
        self.assertGreaterEqual(len(data["lessons_learned"]), 1)

        first_lesson = data["lessons_learned"][0]
        self.assertIn("lesson_takeaway", first_lesson)
        self.assertIn("target_audience", first_lesson)
        self.assertIn("concrete_preventive_action", first_lesson)
        self.assertIn(first_lesson["target_audience"], ["INDIVIDUALS", "ORGANISATIONS", "POLICYMAKERS"])

        # Also check root cause and future scenarios
        self.assertIn("root_cause_analysis", data)
        self.assertIn("future_scenarios", data)
        self.assertIn("consequences_tree", data)


if __name__ == "__main__":
    unittest.main()
