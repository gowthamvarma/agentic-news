import asyncio
import unittest
from fastapi.testclient import TestClient
from api_server import app
from shared.firestore_service import FirestoreService

class TestFirestoreArchive(unittest.IsolatedAsyncioTestCase):
    async def test_crud_and_favorites(self):
        doc_id = "test-archive-uuid-1"
        data = {
            "topic": "Clean Energy Tariffs and Trade Accords",
            "executive_summary": "Analysis of trade pacts and tariffs across Europe and Asia.",
        }
        saved_id = await FirestoreService.save_analysis(doc_id, data)
        self.assertEqual(saved_id, doc_id)

        # 1. Fetch document and verify default is_favorite is False
        doc = await FirestoreService.get_analysis(doc_id)
        self.assertIsNotNone(doc)
        self.assertEqual(doc.get("is_favorite"), False)

        # 2. Update is_favorite to True
        updated = await FirestoreService.update_analysis(doc_id, {"is_favorite": True})
        self.assertIsNotNone(updated)
        self.assertEqual(updated.get("is_favorite"), True)

        # 3. Filter with search and favorites_only
        res = await FirestoreService.list_analyses_filtered(search="Clean Energy", favorites_only=True)
        self.assertGreaterEqual(res["total"], 1)
        self.assertEqual(res["items"][0]["id"], doc_id)

        # 4. Filter with search that does not match
        res_empty = await FirestoreService.list_analyses_filtered(search="NonExistentTopic")
        self.assertEqual(len(res_empty["items"]), 0)

        # 5. Delete document
        deleted = await FirestoreService.delete_analysis(doc_id)
        self.assertTrue(deleted)
        self.assertIsNone(await FirestoreService.get_analysis(doc_id))

    def test_api_endpoints_patch_and_delete(self):
        client = TestClient(app)
        doc_id = "test-api-doc-99"

        # Save via service
        asyncio.run(FirestoreService.save_analysis(doc_id, {
            "topic": "Semiconductor Export Controls",
            "executive_summary": "Global chip manufacturing export limits.",
        }))

        # Test GET /api/analyses
        res_get = client.get("/api/analyses?search=Semiconductor")
        self.assertEqual(res_get.status_code, 200)
        json_data = res_get.json()
        self.assertIn("items", json_data)
        self.assertGreaterEqual(json_data["total"], 1)

        # Test PATCH /api/analysis/{id} with is_favorite=true
        res_patch = client.patch(f"/api/analysis/{doc_id}", json={"is_favorite": True})
        self.assertEqual(res_patch.status_code, 200)
        self.assertEqual(res_patch.json().get("is_favorite"), True)

        # Test DELETE /api/analysis/{id}
        res_del = client.delete(f"/api/analysis/{doc_id}")
        self.assertEqual(res_del.status_code, 200)
        self.assertEqual(res_del.json().get("status"), "deleted")

        # Test GET after delete
        res_after = client.get(f"/api/analysis/{doc_id}")
        self.assertEqual(res_after.status_code, 404)

    def test_streaming_endpoint(self):
        client = TestClient(app)
        res = client.get("/api/analyze/stream?topic=Global+Clean+Energy+Accord")
        self.assertEqual(res.status_code, 200)
        self.assertIn("text/event-stream", res.headers.get("content-type", ""))
        text = res.text
        self.assertIn("event: init", text)
        self.assertIn("event: step_brief", text)
        self.assertIn("event: step_verification", text)
        self.assertIn("event: step_timeline", text)
        self.assertIn("event: complete", text)

    def test_chat_history_api_endpoints(self):
        client = TestClient(app)
        doc_id = "test-chat-endpoint-doc-77"

        # 1. Post chat query with analysis_id
        res_post = client.post("/api/chat", json={
            "query": "Is there an exception for existing applicants?",
            "topic": "U.S. PERM Program Regulations",
            "analysis_id": doc_id,
        })
        self.assertEqual(res_post.status_code, 200)
        data = res_post.json()
        self.assertIn("response", data)
        self.assertIn("chat_history", data)
        self.assertEqual(len(data["chat_history"]), 2)  # User question + Copilot answer

        # 2. Get chat history from Firestore
        res_get = client.get(f"/api/chat/history/{doc_id}")
        self.assertEqual(res_get.status_code, 200)
        hist_data = res_get.json()
        self.assertEqual(hist_data["analysis_id"], doc_id)
        self.assertEqual(len(hist_data["messages"]), 2)

        # 3. Clear chat history
        res_clear = client.delete(f"/api/chat/history/{doc_id}")
        self.assertEqual(res_clear.status_code, 200)
        self.assertEqual(res_clear.json()["status"], "cleared")

        # 4. Verify empty after clear
        res_after = client.get(f"/api/chat/history/{doc_id}")
        self.assertEqual(len(res_after.json()["messages"]), 0)


if __name__ == "__main__":
    unittest.main()
