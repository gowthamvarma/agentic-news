"""Unit tests for Visual/Image Studio generation, Firestore storage, and API endpoints."""

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
# Ensure in-memory fallback by default during unit tests
fs_mod._client_instance = None
fs_mod._client_attempted = True

from api_server import app
from shared.schemas import (
    GeneratedImageItem,
    ImageGenerateRequest,
    NewsIntelligenceReport,
    TimelineEvent,
    TimelinePayload,
    ClaimVerification,
)
from shared.firestore_service import FirestoreService, _MEMORY_STORE
from shared.image_generator import generate_editorial_image_prompts, generate_image_with_imagen
from shared.storage_service import upload_image_bytes, delete_image_file, get_local_media_path


class TestImageStudio(unittest.IsolatedAsyncioTestCase):
    def setUp(self):
        self.client = TestClient(app)
        self.mock_analysis = NewsIntelligenceReport(
            id="test-analysis-img-123",
            topic="Breakthrough in Quantum Computing Quantum Supremacy",
            executive_summary="Researchers developed a 1000-qubit coherent system outperforming classical supercomputers.",
            verifications=[
                ClaimVerification(
                    claim_id="c-img-1",
                    claim_text="System achieved 99.9% 2-qubit gate fidelity",
                    status="VERIFIED",
                    confidence=0.98,
                    reasoning="Peer reviewed validation in scientific journals",
                    corroborating_sources=["Nature Physics", "MIT Quantum Lab"]
                )
            ],
            timeline=TimelinePayload(
                topic="Quantum Supremacy",
                events=[
                    TimelineEvent(
                        timestamp_or_date="October 2026",
                        headline="Coherence Record Smashed",
                        description="New topological error mitigation strategy deployed.",
                        source_outlet="Quantum Review"
                    )
                ],
                narrative_evolution_summary="Shift from noisy intermediate-scale to fault-tolerant quantum algorithms."
            ),
            generated_images=[]
        )

    def test_suggest_image_prompts_fallback(self):
        """Test generating prompt ideas with simulated fallback."""
        with patch("shared.image_generator.GEMINI_API_KEY", ""):
            prompts = generate_editorial_image_prompts(self.mock_analysis.model_dump())
            self.assertEqual(len(prompts), 5)
            for p in prompts:
                self.assertIn("concept_title", p)
                self.assertIn("style_name", p)
                self.assertIn("prompt_text", p)
                self.assertIn("recommended_aspect_ratio", p)
                self.assertIn(p["recommended_aspect_ratio"], ["16:9", "1:1", "4:3", "9:16"])

    def test_generate_image_fallback(self):
        """Test generating image bytes with deterministic SVG composition fallback."""
        with patch("shared.image_generator.GEMINI_API_KEY", ""):
            image_bytes = generate_image_with_imagen(
                prompt="Photorealistic quantum laboratory with glowing blue cryostat chamber",
                style="photojournalism",
                aspect_ratio="16:9"
            )
            self.assertIsInstance(image_bytes, bytes)
            self.assertTrue(len(image_bytes) > 100)
            self.assertTrue(image_bytes.startswith(b"<svg"))

    async def test_firestore_image_metadata_crud(self):
        """Test saving, retrieving, and deleting image metadata in FirestoreService."""
        analysis_data = self.mock_analysis.model_dump()
        await FirestoreService.save_analysis("test-analysis-img-123", analysis_data)

        img_item = {
            "id": "img-test-999",
            "analysis_id": "test-analysis-img-123",
            "prompt": "Futuristic quantum processor illuminated in cyan",
            "style": "cinematic",
            "aspect_ratio": "16:9",
            "image_url": "/api/media/test_img_999.svg",
            "model": "imagen-3.0-generate-002",
            "created_at": 1700000000.0,
            "created_at_iso": "2026-10-15T12:00:00Z"
        }

        saved = await FirestoreService.save_image_metadata(img_item)
        self.assertTrue(saved)

        images = await FirestoreService.get_images_for_analysis("test-analysis-img-123")
        self.assertEqual(len(images), 1)
        self.assertEqual(images[0]["id"], "img-test-999")

        deleted = await FirestoreService.delete_image_metadata("test-analysis-img-123", "img-test-999")
        self.assertTrue(deleted)

        images_after = await FirestoreService.get_images_for_analysis("test-analysis-img-123")
        self.assertEqual(len(images_after), 0)

    async def test_image_studio_api_endpoints(self):
        """Test all Image Studio API endpoints."""
        # 1. Seed analysis in Firestore
        await FirestoreService.save_analysis(self.mock_analysis.id, self.mock_analysis.model_dump())

        # 2. POST /api/analysis/{analysis_id}/image-prompts (generates and caches)
        with patch("shared.image_generator.GEMINI_API_KEY", ""):
            resp_prompts = self.client.post(f"/api/analysis/{self.mock_analysis.id}/image-prompts")
            self.assertEqual(resp_prompts.status_code, 200)
            data_prompts = resp_prompts.json()
            self.assertIn("prompts", data_prompts)
            self.assertEqual(len(data_prompts["prompts"]), 5)
            self.assertEqual(data_prompts.get("cached"), False)

            # 2b. Repeat call with refresh=false should return cached from Firestore
            resp_cached = self.client.post(f"/api/analysis/{self.mock_analysis.id}/image-prompts")
            self.assertEqual(resp_cached.status_code, 200)
            data_cached = resp_cached.json()
            self.assertEqual(data_cached.get("cached"), True)

            # 2c. Repeat call with refresh=true should regenerate and save
            resp_refreshed = self.client.post(f"/api/analysis/{self.mock_analysis.id}/image-prompts?refresh=true")
            self.assertEqual(resp_refreshed.status_code, 200)
            data_refreshed = resp_refreshed.json()
            self.assertEqual(data_refreshed.get("cached"), False)

        # 3. POST /api/analysis/{analysis_id}/generate-image
        with patch("shared.image_generator.GEMINI_API_KEY", ""):
            req_payload = {
                "prompt": "Cinematic visual of quantum computing chips",
                "style": "cinematic",
                "aspect_ratio": "16:9"
            }
            resp_gen = self.client.post(
                f"/api/analysis/{self.mock_analysis.id}/generate-image",
                json=req_payload
            )
            self.assertEqual(resp_gen.status_code, 200)
            img_data = resp_gen.json()
            self.assertIn("id", img_data)
            self.assertEqual(img_data["aspect_ratio"], "16:9")
            self.assertEqual(img_data["style"], "cinematic")
            generated_img_id = img_data["id"]

        # 4. GET /api/analysis/{analysis_id}/images
        resp_list = self.client.get(f"/api/analysis/{self.mock_analysis.id}/images")
        self.assertEqual(resp_list.status_code, 200)
        list_json = resp_list.json()
        self.assertIn("images", list_json)
        self.assertGreaterEqual(list_json["total"], 1)
        self.assertTrue(any(i["id"] == generated_img_id for i in list_json["images"]))

        # 5. GET /api/media/{filename} (normal view and download=true attachment)
        img_url = img_data.get("image_url", "")
        if img_url.startswith("/api/media/"):
            filename = img_url.split("/api/media/")[1]
            resp_media = self.client.get(f"/api/media/{filename}")
            self.assertEqual(resp_media.status_code, 200)

            resp_media_dl = self.client.get(f"/api/media/{filename}?download=true")
            self.assertEqual(resp_media_dl.status_code, 200)
            self.assertIn("Content-Disposition", resp_media_dl.headers)
            self.assertTrue(resp_media_dl.headers["Content-Disposition"].startswith("attachment;"))

        # 6. DELETE /api/analysis/{analysis_id}/image/{image_id}
        resp_del = self.client.delete(f"/api/analysis/{self.mock_analysis.id}/image/{generated_img_id}")
        self.assertEqual(resp_del.status_code, 200)
        del_res = resp_del.json()
        self.assertTrue(del_res.get("success"))


if __name__ == "__main__":
    unittest.main()
