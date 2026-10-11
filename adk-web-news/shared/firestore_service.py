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

# Try initializing Google Cloud Firestore
FIRESTORE_AVAILABLE = False
db_client = None

try:
    from google.cloud import firestore
    
    emulator_host = os.environ.get("FIRESTORE_EMULATOR_HOST")
    if emulator_host and "127.0.0.1" in emulator_host:
        emulator_host = emulator_host.replace("127.0.0.1", "localhost")
        os.environ["FIRESTORE_EMULATOR_HOST"] = emulator_host

    project_id = os.environ.get("FIREBASE_PROJECT_ID") or os.environ.get("GOOGLE_CLOUD_PROJECT") or "agentic-news-dev"

    if emulator_host:
        logger.info("Connecting to local Firestore emulator at %s for project %s", emulator_host, project_id)
        db_client = firestore.AsyncClient(project=project_id)
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
        if FIRESTORE_AVAILABLE and db_client:
            try:
                col_ref = db_client.collection("analyses").order_by(
                    "created_at", direction=firestore.Query.DESCENDING
                ).limit(limit)
                docs = await col_ref.get()
                return [d.to_dict() for d in docs]
            except Exception as e:
                logger.warning("Failed listing analyses from Firestore (%s). Checking memory.", e)

        items = list(_MEMORY_STORE["analyses"].values())
        items.sort(key=lambda x: x.get("created_at", 0), reverse=True)
        return items[:limit]

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
