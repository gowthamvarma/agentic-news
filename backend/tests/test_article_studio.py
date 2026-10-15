"""Unit tests for Article Studio generation, Firestore storage, and API endpoints."""

import os
import sys
from pathlib import Path
import unittest
from unittest.mock import patch
from fastapi.testclient import TestClient

# Ensure backend root is on sys.path
BACKEND_ROOT = Path(__file__).resolve().parent.parent
if str(BACKEND_ROOT) not in sys.path:
    sys.path.insert(0, str(BACKEND_ROOT))

import shared.firestore_service as fs_mod
# Ensure in-memory fallback by default during unit test
fs_mod._client_instance = None
fs_mod._client_attempted = True

from api_server import app
from shared.schemas import (
    ArticleGenerateRequest,
    GeneratedArticleItem,
    NewsIntelligenceReport,
    TimelineEvent,
    TimelinePayload,
    ClaimVerification,
)
from shared.firestore_service import FirestoreService, _MEMORY_STORE
from shared.article_generator import generate_article_for_analysis


class TestArticleStudio(unittest.IsolatedAsyncioTestCase):
    def setUp(self):
        self.client = TestClient(app)
        self.mock_analysis = NewsIntelligenceReport(
            id="test-analysis-123",
            topic="Breakthrough in Fusion Energy Net Gain Milestone",
            executive_summary="Scientists at the National Ignition Facility achieved a record energy yield in nuclear fusion.",
            verifications=[
                ClaimVerification(
                    claim_id="c-1",
                    claim_text="Fusion reaction produced 3.88 MJ of output from 2.05 MJ input",
                    status="VERIFIED",
                    confidence=0.95,
                    reasoning="Confirmed by peer-reviewed paper in Physical Review Letters",
                    corroborating_sources=["Nature", "Lawrence Livermore National Lab"]
                )
            ],
            timeline=TimelinePayload(
                topic="Fusion Ignition",
                events=[
                    TimelineEvent(
                        timestamp_or_date="December 2022",
                        headline="Ignition Milestone",
                        description="First net energy gain demonstrated in laser fusion ignition.",
                        source_outlet="NIF"
                    )
                ],
                narrative_evolution_summary="Evolution from theoretical promise to repeatable lab ignition."
            ),
            generated_articles=[]
        )

    def test_article_generation_mock(self):
        """Test generating article structure with simulated fallback."""
        with patch("shared.article_generator.GEMINI_API_KEY", ""):
            res_dict = generate_article_for_analysis(
                analysis=self.mock_analysis.model_dump(),
                writing_style="wire_dispatch",
                target_length="flash",
                language="Spanish (Español)",
                editorial_framing="Focus on technological milestones and global energy impact",
                include_social_kit=True
            )
            res = GeneratedArticleItem(**res_dict)
            self.assertEqual(res.analysis_id, "test-analysis-123")
            self.assertEqual(res.writing_style, "wire_dispatch")
            self.assertEqual(res.language, "Spanish (Español)")
            self.assertTrue(len(res.content_markdown) > 50)
            self.assertTrue(res.word_count > 0)
            self.assertIsNotNone(res.social_kit)
            self.assertTrue(len(res.social_kit.headline_variants) > 0)

    async def test_firestore_article_storage_and_retrieval(self):
        """Test Firestore in-memory persistence and retrieval for articles."""
        # Seed analysis in FirestoreService
        analysis_data = self.mock_analysis.model_dump()
        await FirestoreService.save_analysis("test-analysis-123", analysis_data)

        art = GeneratedArticleItem(
            id="art-test-999",
            analysis_id="test-analysis-123",
            topic="Breakthrough in Fusion Energy",
            headline="Scientists Achieve Fusion Net Gain Milestone",
            subheadline="Historic result marks turning point in clean power research",
            content_markdown="This is a full article report on fusion advancements...",
            writing_style="executive_brief",
            language="English",
            target_length="flash",
            word_count=120,
            reading_time_minutes=1,
            editorial_framing="neutral",
            created_at=1700000000.0,
            created_at_iso="2026-10-15T12:00:00Z"
        )

        saved_id = await FirestoreService.save_article(art.model_dump())
        self.assertEqual(saved_id, "art-test-999")

        # Retrieve articles for analysis
        articles = await FirestoreService.get_articles_for_analysis("test-analysis-123")
        self.assertGreaterEqual(len(articles), 1)
        self.assertTrue(any(a["id"] == "art-test-999" for a in articles))

        # Check that parent analysis has generated_articles updated
        fetched_analysis = await FirestoreService.get_analysis("test-analysis-123")
        self.assertIsNotNone(fetched_analysis)
        self.assertTrue(any(a.get("id") == "art-test-999" for a in fetched_analysis.get("generated_articles", [])))

        # Delete article
        deleted = await FirestoreService.delete_article("test-analysis-123", "art-test-999")
        self.assertTrue(deleted)
        articles_after = await FirestoreService.get_articles_for_analysis("test-analysis-123")
        self.assertFalse(any(a.get("id") == "art-test-999" for a in articles_after))

    async def test_api_endpoints(self):
        """Test POST /api/analysis/{id}/article and GET /api/analysis/{id}/articles."""
        analysis_data = self.mock_analysis.model_dump()
        await FirestoreService.save_analysis("test-analysis-123", analysis_data)

        # 1. POST generate
        payload = {
            "analysis_id": "test-analysis-123",
            "writing_style": "investigative",
            "target_length": "standard",
            "language": "French (Français)",
            "editorial_framing": "Emphasize funding challenges and timeline to commercial grid",
            "include_social_kit": True
        }

        with patch("shared.article_generator.GEMINI_API_KEY", ""):
            response = self.client.post("/api/analysis/test-analysis-123/article", json=payload)
            self.assertEqual(response.status_code, 200)
            data = response.json()
            self.assertEqual(data["analysis_id"], "test-analysis-123")
            self.assertEqual(data["writing_style"], "investigative")
            self.assertEqual(data["language"], "French (Français)")
            article_id = data["id"]

            # 2. GET list
            list_resp = self.client.get("/api/analysis/test-analysis-123/articles")
            self.assertEqual(list_resp.status_code, 200)
            json_body = list_resp.json()
            items = json_body.get("articles", [])
            self.assertGreaterEqual(len(items), 1)
            self.assertTrue(any(i["id"] == article_id for i in items))

            # 3. DELETE
            del_resp = self.client.delete(f"/api/analysis/test-analysis-123/article/{article_id}")
            self.assertEqual(del_resp.status_code, 200)
            self.assertTrue(del_resp.json()["success"])

if __name__ == "__main__":
    unittest.main()
