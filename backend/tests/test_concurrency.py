"""Tests for multi-request concurrency and non-blocking behavior.

Verifies:
1. Fast in-memory cache in FirestoreService.get_topic_suggestions returns immediately (< 50ms).
2. Topic suggestions endpoint (/api/topics/suggestions) returns promptly without blocking.
3. Single-flight deduplication: concurrent requests to /api/topics/suggestions share a single generation run.
4. Timeouts protect Firestore operations from hanging indefinitely.
"""

from __future__ import annotations

import asyncio
import os
import sys
import time
from pathlib import Path
import unittest

BACKEND_ROOT = Path(__file__).resolve().parent.parent
if str(BACKEND_ROOT) not in sys.path:
    sys.path.insert(0, str(BACKEND_ROOT))

from fastapi.testclient import TestClient

from api_server import app
from shared.firestore_service import (
    FirestoreService,
    FIRESTORE_TIMEOUT_READ,
    FIRESTORE_TIMEOUT_WRITE,
    _MEMORY_STORE,
)


class TestConcurrencyAndNonBlocking(unittest.IsolatedAsyncioTestCase):

    async def asyncSetUp(self):
        # Seed mock topic suggestions into memory
        self.mock_suggestions = {
            "id": "latest",
            "created_at": time.time(),
            "updated_at": time.time(),
            "countries": [
                {
                    "code": "IN",
                    "name": "India",
                    "flag": "🇮🇳",
                    "topics": [
                        {"id": "t1", "topic": "Semiconductor Fab Expansion", "summary": "Investment accords", "badge": "Tech"}
                    ],
                }
            ],
        }
        await FirestoreService.save_topic_suggestions(self.mock_suggestions)

    async def test_fast_memory_cache_retrieval(self):
        """Verifies topic suggestions cache returns in less than 50ms without network delay."""
        start = time.perf_counter()
        data = await FirestoreService.get_topic_suggestions()
        duration_ms = (time.perf_counter() - start) * 1000

        self.assertIsNotNone(data)
        self.assertIn("countries", data)
        self.assertEqual(data["countries"][0]["code"], "IN")
        self.assertLess(duration_ms, 50, f"Memory cache retrieval took {duration_ms:.2f}ms; expected < 50ms")

    def test_api_topics_suggestions_endpoint_speed(self):
        """Verifies GET /api/topics/suggestions returns promptly via HTTP client."""
        client = TestClient(app)
        start = time.perf_counter()
        res = client.get("/api/topics/suggestions")
        duration_ms = (time.perf_counter() - start) * 1000

        self.assertEqual(res.status_code, 200)
        json_data = res.json()
        self.assertIn("countries", json_data)
        self.assertEqual(json_data["is_stale"], False)
        self.assertLess(duration_ms, 150, f"Endpoint response took {duration_ms:.2f}ms; expected < 150ms")

    async def test_concurrent_suggestions_requests_deduplication(self):
        """Verifies that multiple concurrent calls to get_topic_suggestions share execution."""
        from api_server import _run_or_await_suggestions_generation

        # Clear cached suggestions temporarily to trigger generation
        saved_cache = _MEMORY_STORE["topic_suggestions"].get("latest")
        _MEMORY_STORE["topic_suggestions"].clear()

        generation_count = 0

        # Mock generate_country_topic_suggestions in both modules
        import shared.topic_suggester as ts_module
        import api_server as api_module
        orig_gen = ts_module.generate_country_topic_suggestions
        orig_api_gen = getattr(api_module, "generate_country_topic_suggestions", None)

        def mock_gen():
            nonlocal generation_count
            generation_count += 1
            time.sleep(0.05)  # Simulate small work in worker thread
            return {
                "id": "latest",
                "created_at": time.time(),
                "updated_at": time.time(),
                "countries": [{"code": "US", "name": "USA", "flag": "🇺🇸", "topics": []}],
            }

        ts_module.generate_country_topic_suggestions = mock_gen
        api_module.generate_country_topic_suggestions = mock_gen

        try:
            # Launch 5 concurrent calls as if 5 browser tabs opened at the same time
            results = await asyncio.gather(*[
                _run_or_await_suggestions_generation()
                for _ in range(5)
            ])

            self.assertEqual(len(results), 5)
            # All 5 tabs should receive valid suggestions, but only 1 generation executed!
            self.assertEqual(generation_count, 1, f"Expected 1 shared generation, but got {generation_count}")
            for r in results:
                self.assertIn("countries", r)
        finally:
            ts_module.generate_country_topic_suggestions = orig_gen
            if orig_api_gen:
                api_module.generate_country_topic_suggestions = orig_api_gen
            if saved_cache:
                _MEMORY_STORE["topic_suggestions"]["latest"] = saved_cache

    async def test_firestore_timeout_constants(self):
        """Verifies timeout safety bounds are strictly configured."""
        self.assertGreater(FIRESTORE_TIMEOUT_READ, 0)
        self.assertLessEqual(FIRESTORE_TIMEOUT_READ, 5.0)
        self.assertGreater(FIRESTORE_TIMEOUT_WRITE, 0)
        self.assertLessEqual(FIRESTORE_TIMEOUT_WRITE, 10.0)


if __name__ == "__main__":
    unittest.main()
