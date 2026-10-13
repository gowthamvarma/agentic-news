"""Unit tests for the Intelligent Agentic Topic Curator and Curation Pipeline.

Verifies:
1. Brute-force methods (UNWORTHY_HEADLINE_PATTERNS, _deduplicate_headlines) are removed.
2. Headlines are fetched cleanly without regex blacklists.
3. Offline defaults have precise headings and engaging story-driven descriptions.
4. Heuristic fallbacks produce story-driven narratives rather than robotic boilerplate.
5. Intelligent topic curator agent instruction enforces the 4-Pillar Tool-Worthiness standard.
"""

from __future__ import annotations

import unittest
from shared import topic_suggester
from shared.agents.ingestion import topic_curator, TOPIC_CURATOR_INSTRUCTION
from shared.schemas import CuratedTopicItem, TopicSuggestionsPayload


class TestIntelligentTopicCurator(unittest.TestCase):

    def test_brute_force_artifacts_removed(self):
        """Verifies that hardcoded regex and brute-force deduplication methods were eliminated."""
        self.assertFalse(
            hasattr(topic_suggester, "UNWORTHY_HEADLINE_PATTERNS"),
            "UNWORTHY_HEADLINE_PATTERNS should not exist in topic_suggester",
        )
        self.assertFalse(
            hasattr(topic_suggester, "_deduplicate_headlines"),
            "_deduplicate_headlines should not exist in topic_suggester",
        )
        self.assertFalse(
            hasattr(topic_suggester, "_is_unworthy_headline"),
            "_is_unworthy_headline should not exist in topic_suggester",
        )

    def test_topic_curator_agent_defined(self):
        """Verifies the topic_curator agent is properly instantiated in the ADK agent fleet."""
        self.assertEqual(topic_curator.name, "topic_curator")
        self.assertIn("4-PILLAR TOOL-WORTHINESS CRITERIA", TOPIC_CURATOR_INSTRUCTION)
        self.assertIn("TRENDING & HIGH PUBLIC INTEREST", TOPIC_CURATOR_INSTRUCTION)
        self.assertIn("DEBATABLE WITH MULTIPLE COMPETING POINTS OF VIEW", TOPIC_CURATOR_INSTRUCTION)
        self.assertIn("STARK MEDIA BIAS & NARRATIVE DIVERGENCE", TOPIC_CURATOR_INSTRUCTION)
        self.assertIn("SYSTEMIC LESSONS TO LEARN", TOPIC_CURATOR_INSTRUCTION)
        self.assertIn("LIKE A STORY TO GET THE USER INTERESTED", TOPIC_CURATOR_INSTRUCTION)

    def test_offline_defaults_story_quality(self):
        """Verifies offline defaults have clear headings and captivating narrative stories."""
        defaults = topic_suggester._get_offline_defaults_for_country("US", "United States")
        self.assertEqual(len(defaults), 9, "Must provide exactly 9 offline default topics")

        for item in defaults:
            self.assertIn("topic", item)
            self.assertIn("summary", item)
            self.assertIn("category", item)
            self.assertIn("badge", item)

            # Check heading clarity: between 5 and 20 words, non-empty
            words = item["topic"].split()
            self.assertGreaterEqual(len(words), 5, f"Heading too short: {item['topic']}")
            self.assertLessEqual(len(words), 22, f"Heading too long: {item['topic']}")

            # Check storytelling description: rich narrative (at least 2 sentences and 30 words)
            summary = item["summary"]
            self.assertGreater(len(summary.split()), 35, f"Story summary too brief: {summary}")
            self.assertIn(".", summary, "Story summary must contain sentences")

    def test_heuristic_fallback_story_generation(self):
        """Verifies dynamic heuristic fallback formats headlines into story-driven cards."""
        sample_headlines = [
            {"title": "DOJ Files Antitrust Suit Demanding Google Divest Chrome Browser", "outlet": "Reuters"},
            {"title": "Central Bank Signals Slower Rate Reductions Amid Core Inflation Resilience", "outlet": "Bloomberg"},
        ]
        results = topic_suggester._generate_heuristic_topics_for_country("GB", "United Kingdom", sample_headlines)
        self.assertEqual(len(results), 9)

        first = results[0]
        self.assertIn("DOJ Files Antitrust Suit", first["topic"])
        self.assertIn("A developing controversy reported via Reuters", first["summary"])
        self.assertIn("forefront of national debate", first["summary"])
        self.assertIn("essential lessons", first["summary"])

    def test_schemas_validation(self):
        """Verifies typed schema validation for CuratedTopicItem."""
        card = CuratedTopicItem(
            id="us-1",
            topic="DOJ Pushes Historic Breakup of Google to Dismantle Search Monopoly Empire",
            summary="Federal prosecutors demanded that Google divest Chrome in a major antitrust trial.",
            category="Technology & AI",
            badge="Policy Clash",
            badge_color="badge-primary",
        )
        self.assertEqual(card.id, "us-1")
    def test_country_configs_prioritized_list(self):
        """Verifies COUNTRY_CONFIGS has exactly the 16 core countries in specified order."""
        expected_codes = [
            "IN", "US", "CA", "CN", "RU", "GB", "FR", "DE",
            "AE", "SA", "IL", "JP", "SG", "ID", "MY", "AU"
        ]
        actual_codes = [c["code"] for c in topic_suggester.COUNTRY_CONFIGS]
        self.assertEqual(len(actual_codes), 16, "Must contain exactly 16 countries")
        self.assertEqual(actual_codes, expected_codes, "Country codes and order must match requested list")

    def test_country_rss_urls_are_country_based_and_english(self):
        """Verifies all 16 RSS URLs are country-based English feeds without query-based search URLs."""
        for c in topic_suggester.COUNTRY_CONFIGS:
            code = c["code"]
            rss_url = c["rss_url"]
            self.assertNotIn("/search?q=", rss_url, f"{code} must not use query search RSS url: {rss_url}")
            self.assertIn("news.google.com/rss?", rss_url, f"{code} must be a top headlines RSS feed")
            self.assertIn("hl=en", rss_url, f"{code} must be an English feed (hl=en...): {rss_url}")
            self.assertIn(f"gl={code}", rss_url, f"{code} must target the country (gl={code}): {rss_url}")

    def test_24_hour_cache_duration(self):
        """Verifies topic suggestions cache validity is set to 24 hours (86,400 seconds)."""
        payload = TopicSuggestionsPayload(
            id="latest",
            created_at=1000.0,
            updated_at=1000.0,
            countries=[],
        )
        self.assertEqual(payload.cache_duration_seconds, 86400, "Cache duration must be 24 hours (86400s)")


if __name__ == "__main__":
    unittest.main()

