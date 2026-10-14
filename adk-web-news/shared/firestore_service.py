"""Firestore and In-Memory Persistence Layer for Agentic News Analyser.

Manages collections:
- `analyses`: Full multi-agent intelligence reports with metadata and status.
- `fact_checks`: Discrete claim verification audits.
- `quizzes`: Active recall interactive quizzes and user attempts.
- `debates`: Dialectical perspective debate outputs.
- `evidence_ledger`: Provable citations and tool provenance audit trail.

Gracefully falls back to local in-memory storage if Firebase credentials / project are not configured,
allowing seamless local development and automated CI/CD testing.
"""

from __future__ import annotations

import asyncio
import os
import time
import uuid
from typing import Any, Dict, List, Optional
from shared.config import logger

# Sanitize GOOGLE_APPLICATION_CREDENTIALS if it is not an actual file on disk
cred_env = os.environ.get("GOOGLE_APPLICATION_CREDENTIALS")
if cred_env and not os.path.isfile(cred_env):
    logger.info("GOOGLE_APPLICATION_CREDENTIALS ('%s') is not a valid file path. Clearing from environment.", cred_env)
    del os.environ["GOOGLE_APPLICATION_CREDENTIALS"]

FIRESTORE_TIMEOUT_READ = 2.5
FIRESTORE_TIMEOUT_WRITE = 5.0

_client_instance: Optional[Any] = None
_client_attempted: bool = False
FIRESTORE_AVAILABLE: bool = True

def get_db_client():
    """Lazily initializes and returns the Firestore AsyncClient in the running event loop."""
    global _client_instance, _client_attempted, FIRESTORE_AVAILABLE
    if _client_attempted:
        return _client_instance
    _client_attempted = True
    try:
        from google.cloud import firestore
        from google.auth.credentials import AnonymousCredentials

        emulator_host = (os.environ.get("FIRESTORE_EMULATOR_HOST") or "").strip()
        project_id = (os.environ.get("FIREBASE_PROJECT_ID") or os.environ.get("GOOGLE_CLOUD_PROJECT") or "agentic-news-dev").strip()

        if emulator_host:
            os.environ["FIRESTORE_EMULATOR_HOST"] = emulator_host
            logger.info("Connecting to local Firestore emulator at '%s' for project '%s'", emulator_host, project_id)
            _client_instance = firestore.AsyncClient(project=project_id, credentials=AnonymousCredentials())
            FIRESTORE_AVAILABLE = True
        elif os.environ.get("GOOGLE_APPLICATION_CREDENTIALS") or project_id:
            _client_instance = firestore.AsyncClient(project=project_id)
            FIRESTORE_AVAILABLE = True
            logger.info("Firestore AsyncClient initialized for project: %s", project_id)
        else:
            try:
                _client_instance = firestore.AsyncClient(project="agentic-news-local")
                FIRESTORE_AVAILABLE = True
                logger.info("Firestore AsyncClient initialized with default credentials.")
            except Exception:
                _client_instance = None
                FIRESTORE_AVAILABLE = False
    except Exception as e:
        logger.info("Firestore client not initialized: %s. Using in-memory store.", e)
        _client_instance = None
        FIRESTORE_AVAILABLE = False
    return _client_instance


class _DbClientProxy:
    """Transparent proxy preserving legacy 'db_client' references."""
    def __getattr__(self, name: str) -> Any:
        c = get_db_client()
        if c is None:
            raise RuntimeError("Firestore db_client is not initialized")
        return getattr(c, name)

    def __bool__(self) -> bool:
        return get_db_client() is not None


db_client = _DbClientProxy()


_MEMORY_STORE: Dict[str, Dict[str, Dict[str, Any]]] = {
    "analyses": {},
    "fact_checks": {},
    "quizzes": {},
    "debates": {},
    "evidence_ledger": {},
    "chat_history": {},
    "topic_suggestions": {},
}
_mem_suggestions_loaded_at: float = 0.0


class FirestoreService:
    """Service wrapper for storing and retrieving Agentic News documents."""

    @staticmethod
    async def save_analysis(analysis_id: str, data: Dict[str, Any]) -> str:
        data["updated_at"] = time.time()
        if "created_at" not in data:
            data["created_at"] = time.time()
        if "is_favorite" not in data:
            data["is_favorite"] = False
        data["id"] = analysis_id

        # Update in-memory store immediately
        _MEMORY_STORE["analyses"][analysis_id] = dict(data)

        client = get_db_client()
        if client:
            try:
                doc_ref = client.collection("analyses").document(analysis_id)
                await asyncio.wait_for(doc_ref.set(data), timeout=FIRESTORE_TIMEOUT_WRITE)
                return analysis_id
            except Exception as e:
                logger.warning("Failed saving analysis to Firestore (%s). Saved in memory.", e)

        return analysis_id

    @staticmethod
    async def update_analysis(analysis_id: str, updates: Dict[str, Any]) -> Optional[Dict[str, Any]]:
        """Updates specific fields (such as is_favorite) in Firestore or memory."""
        updates["updated_at"] = time.time()

        if analysis_id in _MEMORY_STORE["analyses"]:
            _MEMORY_STORE["analyses"][analysis_id].update(updates)
            updated_in_memory = dict(_MEMORY_STORE["analyses"][analysis_id])
        else:
            updated_in_memory = None

        client = get_db_client()
        if client:
            try:
                doc_ref = client.collection("analyses").document(analysis_id)
                await asyncio.wait_for(doc_ref.set(updates, merge=True), timeout=FIRESTORE_TIMEOUT_WRITE)
                doc = await asyncio.wait_for(doc_ref.get(), timeout=FIRESTORE_TIMEOUT_READ)
                if doc.exists:
                    doc_data = doc.to_dict()
                    _MEMORY_STORE["analyses"][analysis_id] = doc_data
                    return doc_data
            except Exception as e:
                logger.warning("Failed updating analysis in Firestore (%s). Updating in memory.", e)

        return updated_in_memory

    @staticmethod
    async def delete_analysis(analysis_id: str) -> bool:
        """Deletes an analysis document from Firestore and memory."""
        deleted = False
        client = get_db_client()
        if client:
            try:
                doc_ref = client.collection("analyses").document(analysis_id)
                await asyncio.wait_for(doc_ref.delete(), timeout=FIRESTORE_TIMEOUT_WRITE)
                deleted = True
            except Exception as e:
                logger.warning("Failed deleting analysis in Firestore (%s). Removing from memory.", e)

        if analysis_id in _MEMORY_STORE["analyses"]:
            del _MEMORY_STORE["analyses"][analysis_id]
            deleted = True
        return deleted

    @staticmethod
    async def get_analysis(analysis_id: str) -> Optional[Dict[str, Any]]:
        # Fast memory check first
        if analysis_id in _MEMORY_STORE["analyses"]:
            return dict(_MEMORY_STORE["analyses"][analysis_id])

        client = get_db_client()
        if client:
            try:
                doc_ref = client.collection("analyses").document(analysis_id)
                doc = await asyncio.wait_for(doc_ref.get(), timeout=FIRESTORE_TIMEOUT_READ)
                if doc.exists:
                    data = doc.to_dict()
                    _MEMORY_STORE["analyses"][analysis_id] = data
                    return data
            except Exception as e:
                logger.warning("Failed getting analysis from Firestore (%s). Checking memory.", e)

        return _MEMORY_STORE["analyses"].get(analysis_id)

    @staticmethod
    async def list_recent_analyses(limit: int = 20) -> List[Dict[str, Any]]:
        res = await FirestoreService.list_analyses_filtered(limit=limit)
        return res.get("items", [])

    @staticmethod
    async def list_analyses_filtered(
        limit: int = 50,
        offset: int = 0,
        search: Optional[str] = None,
        favorites_only: bool = False,
    ) -> Dict[str, Any]:
        """Lists analyses with search, favorites filter, and pagination."""
        items: List[Dict[str, Any]] = []

        client = get_db_client()
        if client:
            try:
                col_ref = client.collection("analyses")
                docs = await asyncio.wait_for(col_ref.get(), timeout=FIRESTORE_TIMEOUT_READ)
                items = [d.to_dict() for d in docs]
                for it in items:
                    if "id" in it:
                        _MEMORY_STORE["analyses"][it["id"]] = it
            except Exception as e:
                logger.warning("Failed listing filtered analyses from Firestore (%s). Checking memory.", e)
                items = list(_MEMORY_STORE["analyses"].values())
        else:
            items = list(_MEMORY_STORE["analyses"].values())

        if favorites_only:
            items = [item for item in items if item.get("is_favorite") is True]

        if search and search.strip():
            q = search.strip().lower()
            items = [
                item for item in items
                if q in str(item.get("topic", "")).lower() or q in str(item.get("executive_summary", "")).lower()
            ]

        items.sort(key=lambda x: x.get("created_at", 0), reverse=True)
        total = len(items)
        paginated_items = items[offset : offset + limit]

        return {
            "items": paginated_items,
            "total": total,
            "limit": limit,
            "offset": offset,
        }

    @staticmethod
    async def save_fact_check(check_id: str, data: Dict[str, Any]) -> str:
        data["id"] = check_id
        data["created_at"] = time.time()
        _MEMORY_STORE["fact_checks"][check_id] = dict(data)

        client = get_db_client()
        if client:
            try:
                doc_ref = client.collection("fact_checks").document(check_id)
                await asyncio.wait_for(doc_ref.set(data), timeout=FIRESTORE_TIMEOUT_WRITE)
                return check_id
            except Exception as e:
                logger.warning("Failed saving fact-check to Firestore (%s). Saving to memory.", e)
        return check_id

    @staticmethod
    async def save_quiz(quiz_id: str, data: Dict[str, Any]) -> str:
        data["id"] = quiz_id
        data["created_at"] = time.time()
        _MEMORY_STORE["quizzes"][quiz_id] = dict(data)

        client = get_db_client()
        if client:
            try:
                doc_ref = client.collection("quizzes").document(quiz_id)
                await asyncio.wait_for(doc_ref.set(data), timeout=FIRESTORE_TIMEOUT_WRITE)
                return quiz_id
            except Exception as e:
                logger.warning("Failed saving quiz to Firestore (%s). Saving to memory.", e)
        return quiz_id

    @staticmethod
    async def get_quiz(quiz_id: str) -> Optional[Dict[str, Any]]:
        if quiz_id in _MEMORY_STORE["quizzes"]:
            return dict(_MEMORY_STORE["quizzes"][quiz_id])

        client = get_db_client()
        if client:
            try:
                doc_ref = client.collection("quizzes").document(quiz_id)
                doc = await asyncio.wait_for(doc_ref.get(), timeout=FIRESTORE_TIMEOUT_READ)
                if doc.exists:
                    data = doc.to_dict()
                    _MEMORY_STORE["quizzes"][quiz_id] = data
                    return data
            except Exception as e:
                logger.warning("Failed fetching quiz from Firestore (%s). Checking memory.", e)
        return _MEMORY_STORE["quizzes"].get(quiz_id)

    @staticmethod
    async def save_debate(debate_id: str, data: Dict[str, Any]) -> str:
        data["id"] = debate_id
        data["created_at"] = time.time()
        _MEMORY_STORE["debates"][debate_id] = dict(data)

        client = get_db_client()
        if client:
            try:
                doc_ref = client.collection("debates").document(debate_id)
                await asyncio.wait_for(doc_ref.set(data), timeout=FIRESTORE_TIMEOUT_WRITE)
                return debate_id
            except Exception as e:
                logger.warning("Failed saving debate to Firestore (%s). Saving to memory.", e)
        return debate_id

    @staticmethod
    async def save_evidence_ledger(ledger_id: str, entries: List[Dict[str, Any]]) -> str:
        doc = {"id": ledger_id, "created_at": time.time(), "entries": entries}
        _MEMORY_STORE["evidence_ledger"][ledger_id] = dict(doc)

        client = get_db_client()
        if client:
            try:
                doc_ref = client.collection("evidence_ledger").document(ledger_id)
                await asyncio.wait_for(doc_ref.set(doc), timeout=FIRESTORE_TIMEOUT_WRITE)
                return ledger_id
            except Exception as e:
                logger.warning("Failed saving ledger to Firestore (%s). Saving to memory.", e)
        return ledger_id

    @staticmethod
    async def save_chat_message(analysis_id: str, message: Dict[str, Any]) -> List[Dict[str, Any]]:
        """Appends a chat message to the analysis's chat history in Firestore and memory."""
        # Ensure message format
        if "id" not in message:
            message["id"] = str(uuid.uuid4())
        if "timestamp" not in message:
            message["timestamp"] = time.time()
        if "time" not in message:
            message["time"] = time.strftime("%H:%M")

        existing_messages = await FirestoreService.get_chat_history(analysis_id)
        existing_messages.append(message)

        # 1. Update in-memory store
        _MEMORY_STORE["chat_history"][analysis_id] = existing_messages
        if analysis_id in _MEMORY_STORE["analyses"]:
            _MEMORY_STORE["analyses"][analysis_id]["chat_history"] = existing_messages

        # 2. Persist to Firestore if available
        client = get_db_client()
        if client:
            try:
                # Save to dedicated chat_history collection
                chat_doc_ref = client.collection("chat_history").document(analysis_id)
                await asyncio.wait_for(chat_doc_ref.set({
                    "analysis_id": analysis_id,
                    "messages": existing_messages,
                    "updated_at": time.time(),
                }), timeout=FIRESTORE_TIMEOUT_WRITE)

                # Also sync into analyses document if it exists
                analysis_doc_ref = client.collection("analyses").document(analysis_id)
                await asyncio.wait_for(analysis_doc_ref.set({"chat_history": existing_messages, "updated_at": time.time()}, merge=True), timeout=FIRESTORE_TIMEOUT_WRITE)
            except Exception as e:
                logger.warning("Failed saving chat history to Firestore (%s). Preserved in memory.", e)

        return existing_messages

    @staticmethod
    async def get_chat_history(analysis_id: str) -> List[Dict[str, Any]]:
        """Retrieves full chat message history for an analysis from Firestore or memory."""
        if analysis_id in _MEMORY_STORE["chat_history"]:
            return list(_MEMORY_STORE["chat_history"][analysis_id])

        if analysis_id in _MEMORY_STORE["analyses"] and "chat_history" in _MEMORY_STORE["analyses"][analysis_id]:
            return list(_MEMORY_STORE["analyses"][analysis_id]["chat_history"])

        client = get_db_client()
        if client:
            try:
                # First check dedicated chat_history collection
                chat_doc_ref = client.collection("chat_history").document(analysis_id)
                doc = await asyncio.wait_for(chat_doc_ref.get(), timeout=FIRESTORE_TIMEOUT_READ)
                if doc.exists:
                    data = doc.to_dict()
                    msgs = data.get("messages", [])
                    _MEMORY_STORE["chat_history"][analysis_id] = msgs
                    return msgs

                # Fallback check analyses collection
                analysis_doc_ref = client.collection("analyses").document(analysis_id)
                adoc = await asyncio.wait_for(analysis_doc_ref.get(), timeout=FIRESTORE_TIMEOUT_READ)
                if adoc.exists:
                    adata = adoc.to_dict()
                    if "chat_history" in adata and isinstance(adata["chat_history"], list):
                        _MEMORY_STORE["chat_history"][analysis_id] = adata["chat_history"]
                        return adata["chat_history"]
            except Exception as e:
                logger.warning("Failed reading chat history from Firestore (%s). Checking memory.", e)

        return []

    @staticmethod
    async def clear_chat_history(analysis_id: str) -> bool:
        """Clears chat history for an analysis in Firestore and memory."""
        _MEMORY_STORE["chat_history"][analysis_id] = []
        if analysis_id in _MEMORY_STORE["analyses"]:
            _MEMORY_STORE["analyses"][analysis_id]["chat_history"] = []

        client = get_db_client()
        if client:
            try:
                chat_doc_ref = client.collection("chat_history").document(analysis_id)
                await asyncio.wait_for(chat_doc_ref.delete(), timeout=FIRESTORE_TIMEOUT_WRITE)

                analysis_doc_ref = client.collection("analyses").document(analysis_id)
                await asyncio.wait_for(analysis_doc_ref.set({"chat_history": [], "updated_at": time.time()}, merge=True), timeout=FIRESTORE_TIMEOUT_WRITE)
            except Exception as e:
                logger.warning("Failed clearing chat history in Firestore (%s). Cleared in memory.", e)

        return True

    @staticmethod
    async def get_topic_suggestions() -> Optional[Dict[str, Any]]:
        """Retrieves country-grouped topic suggestions from memory cache or Firestore."""
        global _mem_suggestions_loaded_at
        # 1. Fast in-memory cache check: if cached recently in memory, return immediately (0ms latency, zero blocking!)
        mem_latest = _MEMORY_STORE["topic_suggestions"].get("latest")
        if mem_latest and isinstance(mem_latest.get("countries"), list) and len(mem_latest["countries"]) > 0:
            if time.time() - _mem_suggestions_loaded_at < 300:  # Fresh memory hit (loaded within 5 minutes)
                return dict(mem_latest)

        client = get_db_client()
        if client:
            try:
                doc_ref = client.collection("topic_suggestions").document("latest")
                doc = await asyncio.wait_for(doc_ref.get(), timeout=FIRESTORE_TIMEOUT_READ)
                if doc.exists:
                    data = doc.to_dict()
                    _MEMORY_STORE["topic_suggestions"]["latest"] = data
                    _mem_suggestions_loaded_at = time.time()
                    return data
            except Exception as e:
                logger.warning("Failed retrieving topic suggestions from Firestore (%s). Checking memory.", e)

        return _MEMORY_STORE["topic_suggestions"].get("latest")

    @staticmethod
    async def save_topic_suggestions(data: Dict[str, Any]) -> Dict[str, Any]:
        """Saves country-grouped topic suggestions with timestamp to Firestore and memory."""
        global _mem_suggestions_loaded_at
        now = time.time()
        data["updated_at"] = now
        if "created_at" not in data:
            data["created_at"] = now
        data["id"] = "latest"

        # Update in-memory store immediately
        _MEMORY_STORE["topic_suggestions"]["latest"] = dict(data)
        _mem_suggestions_loaded_at = now

        client = get_db_client()
        if client:
            try:
                doc_ref = client.collection("topic_suggestions").document("latest")
                await asyncio.wait_for(doc_ref.set(data), timeout=FIRESTORE_TIMEOUT_WRITE)
            except Exception as e:
                logger.warning("Failed saving topic suggestions to Firestore (%s). Saved in memory.", e)

        return data
