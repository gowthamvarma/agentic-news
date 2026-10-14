"""Unit tests for the Cross-Source Contradictions and Divergences pipeline.

Verifies:
1. _generate_heuristic_contradictions produces valid, non-empty contradictions tailored to topic.
2. Contradiction items conform to ContradictionItem schema with all required fields.
3. build_stage_verifications guarantees non-empty contradictions array.
4. build_structured_intelligence guarantees non-empty contradictions array.
"""

from __future__ import annotations

import unittest
from shared.structured_builder import (
    _generate_heuristic_contradictions,
    build_stage_verifications,
    build_structured_intelligence,
)
from shared.schemas import ContradictionItem


class TestContradictionsPipeline(unittest.TestCase):

    def test_heuristic_contradictions_generation(self):
        """Verifies topic-tailored fallback generates valid contradiction items."""
        topic = "Federal Reserve Interest Rate Policy"
        items = _generate_heuristic_contradictions(topic)
        self.assertGreaterEqual(len(items), 2, "Must generate at least 2 contradiction items")

        valid_divergence_types = {
            "Fact Negation",
            "Numerical Discrepancy",
            "Timeline Divergence",
            "Causal Dispute",
            "Attribution Conflict",
        }

        for item in items:
            self.assertIn("contradiction_id", item)
            self.assertIn("topic_aspect", item)
            self.assertIn("outlet_a", item)
            self.assertIn("claim_a", item)
            self.assertIn("outlet_b", item)
            self.assertIn("claim_b", item)
            self.assertIn("divergence_type", item)
            self.assertIn("analysis", item)
            self.assertIn(item["divergence_type"], valid_divergence_types)

            # Check Pydantic validation
            parsed = ContradictionItem(**item)
            self.assertEqual(parsed.contradiction_id, item["contradiction_id"])

    def test_build_stage_verifications_guarantees_contradictions(self):
        """Verifies that Stage 2 verifications payload always contains non-empty contradictions."""
        verif_data = build_stage_verifications("Global AI Chip Export Restrictions")
        self.assertIn("contradictions", verif_data)
        contradictions = verif_data["contradictions"]
        self.assertIsInstance(contradictions, list)
        self.assertGreater(len(contradictions), 0, "Contradictions list must not be empty in Stage 2 verifications")

    def test_build_structured_intelligence_contains_contradictions(self):
        """Verifies that the full intelligence builder generates non-empty contradictions."""
        full_data = build_structured_intelligence("Renewable Energy Grid Transition")
        self.assertIn("contradictions", full_data)
        self.assertGreater(len(full_data["contradictions"]), 0)


if __name__ == "__main__":
    unittest.main()
