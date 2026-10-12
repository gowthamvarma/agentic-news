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

try:
    from google.cloud import firestore
    from google.auth.credentials import AnonymousCredentials

    emulator_host = (os.environ.get("FIRESTORE_EMULATOR_HOST") or "").strip()
    if emulator_host:
        os.environ["FIRESTORE_EMULATOR_HOST"] = emulator_host
    project_id = (os.environ.get("FIREBASE_PROJECT_ID") or os.environ.get("GOOGLE_CLOUD_PROJECT") or "agentic-news-dev").strip()

    if emulator_host:
        logger.info("Connecting to local Firestore emulator at '%s' for project '%s'", emulator_host, project_id)
        db_client = firestore.AsyncClient(project=project_id, credentials=AnonymousCredentials())
        FIRESTORE_AVAILABLE = True
    elif os.environ.get("GOOGLE_APPLICATION_CREDENTIALS") or project_id:
        db_client = firestore.AsyncClient(project=project_id)
        FIRESTORE_AVAILABLE = True
        logger.info("Firestore AsyncClient initialized for project: %s", project_id)
    else:
        try:
            db_client = firestore.AsyncClient(project="agentic-news-local")
            FIRESTORE_AVAILABLE = True
            logger.info("Firestore AsyncClient initialized with default credentials.")
        except Exception:
            FIRESTORE_AVAILABLE = False
except Exception as e:
    logger.info("Firestore client not initialized: %s. Using in-memory store.", e)
    FIRESTORE_AVAILABLE = False


# In-memory storage fallback
_MEMORY_STORE: Dict[str, Dict[str, Dict[str, Any]]] = {
    "analyses": {},
    "fact_checks": {},
    "quizzes": {},
    "debates": {},
    "evidence_ledger": {},
}


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

        if FIRESTORE_AVAILABLE and db_client:
            try:
                doc_ref = db_client.collection("analyses").document(analysis_id)
                await doc_ref.set(data)
                return analysis_id
            except Exception as e:
                logger.warning("Failed saving analysis to Firestore (%s). Saving to memory.", e)

        _MEMORY_STORE["analyses"][analysis_id] = data
        return analysis_id

    @staticmethod
    async def update_analysis(analysis_id: str, updates: Dict[str, Any]) -> Optional[Dict[str, Any]]:
        """Updates specific fields (such as is_favorite) in Firestore or memory."""
        updates["updated_at"] = time.time()

        if FIRESTORE_AVAILABLE and db_client:
            try:
                doc_ref = db_client.collection("analyses").document(analysis_id)
                await doc_ref.set(updates, merge=True)
                doc = await doc_ref.get()
                if doc.exists:
                    return doc.to_dict()
            except Exception as e:
                logger.warning("Failed updating analysis in Firestore (%s). Updating in memory.", e)

        if analysis_id in _MEMORY_STORE["analyses"]:
            _MEMORY_STORE["analyses"][analysis_id].update(updates)
            return _MEMORY_STORE["analyses"][analysis_id]
        return None

    @staticmethod
    async def delete_analysis(analysis_id: str) -> bool:
        """Deletes an analysis document from Firestore and memory."""
        deleted = False
        if FIRESTORE_AVAILABLE and db_client:
            try:
                doc_ref = db_client.collection("analyses").document(analysis_id)
                await doc_ref.delete()
                deleted = True
            except Exception as e:
                logger.warning("Failed deleting analysis in Firestore (%s). Removing from memory.", e)

        if analysis_id in _MEMORY_STORE["analyses"]:
            del _MEMORY_STORE["analyses"][analysis_id]
            deleted = True
        return deleted

    @staticmethod
    async def get_analysis(analysis_id: str) -> Optional[Dict[str, Any]]:
        if FIRESTORE_AVAILABLE and db_client:
            try:
                doc_ref = db_client.collection("analyses").document(analysis_id)
                doc = await doc_ref.get()
                if doc.exists:
                    return doc.to_dict()
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

        if FIRESTORE_AVAILABLE and db_client:
            try:
                col_ref = db_client.collection("analyses")
                docs = await col_ref.get()
                items = [d.to_dict() for d in docs]
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
        if FIRESTORE_AVAILABLE and db_client:
            try:
                doc_ref = db_client.collection("fact_checks").document(check_id)
                await doc_ref.set(data)
                return check_id
            except Exception as e:
                logger.warning("Failed saving fact-check to Firestore (%s). Saving to memory.", e)
        _MEMORY_STORE["fact_checks"][check_id] = data
        return check_id

    @staticmethod
    async def save_quiz(quiz_id: str, data: Dict[str, Any]) -> str:
        data["id"] = quiz_id
        data["created_at"] = time.time()
        if FIRESTORE_AVAILABLE and db_client:
            try:
                doc_ref = db_client.collection("quizzes").document(quiz_id)
                await doc_ref.set(data)
                return quiz_id
            except Exception as e:
                logger.warning("Failed saving quiz to Firestore (%s). Saving to memory.", e)
        _MEMORY_STORE["quizzes"][quiz_id] = data
        return quiz_id

    @staticmethod
    async def get_quiz(quiz_id: str) -> Optional[Dict[str, Any]]:
        if FIRESTORE_AVAILABLE and db_client:
            try:
                doc_ref = db_client.collection("quizzes").document(quiz_id)
                doc = await doc_ref.get()
                if doc.exists:
                    return doc.to_dict()
            except Exception as e:
                logger.warning("Failed fetching quiz from Firestore (%s). Checking memory.", e)
        return _MEMORY_STORE["quizzes"].get(quiz_id)

    @staticmethod
    async def save_debate(debate_id: str, data: Dict[str, Any]) -> str:
        data["id"] = debate_id
        data["created_at"] = time.time()
        if FIRESTORE_AVAILABLE and db_client:
            try:
                doc_ref = db_client.collection("debates").document(debate_id)
                await doc_ref.set(data)
                return debate_id
            except Exception as e:
                logger.warning("Failed saving debate to Firestore (%s). Saving to memory.", e)
        _MEMORY_STORE["debates"][debate_id] = data
        return debate_id

    @staticmethod
    async def save_evidence_ledger(ledger_id: str, entries: List[Dict[str, Any]]) -> str:
        doc = {"id": ledger_id, "created_at": time.time(), "entries": entries}
        if FIRESTORE_AVAILABLE and db_client:
            try:
                doc_ref = db_client.collection("evidence_ledger").document(ledger_id)
                await doc_ref.set(doc)
                return ledger_id
            except Exception as e:
                logger.warning("Failed saving ledger to Firestore (%s). Saving to memory.", e)
        _MEMORY_STORE["evidence_ledger"][ledger_id] = doc
        return ledger_id
