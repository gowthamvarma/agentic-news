"""Media Storage Service for Agentic News Analyser.

Handles binary image persistence with dual-mode support:
1. Production: Uploads binary images to Google Cloud Storage (GCS) and returns
   CDN-accelerated public or signed media URLs.
2. Local Development & Offline: Stores image binaries in the local `media_cache/`
   directory and serves them via FastAPI `/api/media/{filename}`.
"""

from __future__ import annotations

import os
from pathlib import Path
from typing import Optional

from shared.config import (
    FIREBASE_PROJECT_ID,
    GCS_MEDIA_BUCKET,
    LOCAL_MEDIA_DIR,
    logger,
)

import threading

_gcs_client = None
_gcs_attempted = False
_gcs_bucket_obj = None
_gcs_lock = threading.Lock()


def _get_gcs_bucket():
    """Lazily initializes and caches the Google Cloud Storage bucket object (thread-safe)."""
    global _gcs_client, _gcs_attempted, _gcs_bucket_obj
    if _gcs_attempted:
        return _gcs_bucket_obj

    with _gcs_lock:
        if _gcs_attempted:
            return _gcs_bucket_obj

        try:
            from google.cloud import storage

            # Sanitize credentials if needed
            cred_env = os.environ.get("GOOGLE_APPLICATION_CREDENTIALS")
            if cred_env and not os.path.isfile(cred_env):
                os.environ.pop("GOOGLE_APPLICATION_CREDENTIALS", None)

            project_id = (
                os.environ.get("FIREBASE_PROJECT_ID")
                or os.environ.get("GOOGLE_CLOUD_PROJECT")
                or FIREBASE_PROJECT_ID
            ).strip()
            bucket_name = (os.environ.get("GCS_MEDIA_BUCKET") or GCS_MEDIA_BUCKET).strip()

            _gcs_client = storage.Client(project=project_id)
            bucket = _gcs_client.bucket(bucket_name)
            # Check if bucket exists or can be accessed
            if bucket.exists():
                _gcs_bucket_obj = bucket
                logger.info("Connected to Google Cloud Storage bucket: %s", bucket_name)
            else:
                logger.warning("GCS bucket '%s' does not exist yet. Using local media cache.", bucket_name)
        except Exception as e:
            logger.warning("GCS client not active (%s). Using local media cache: %s", e, LOCAL_MEDIA_DIR)
            _gcs_bucket_obj = None
        finally:
            _gcs_attempted = True

    return _gcs_bucket_obj


def upload_image_bytes(
    image_bytes: bytes,
    filename: str,
    content_type: str = "image/jpeg",
) -> str:
    """Uploads image bytes to GCS or falls back to local media directory.
    
    Returns the web-accessible URL (https://storage.googleapis.com/... or /api/media/...).
    """
    bucket = _get_gcs_bucket()
    if bucket:
        try:
            blob = bucket.blob(f"images/{filename}")
            blob.upload_from_string(image_bytes, content_type=content_type)
            # Uniform bucket-level access uses bucket IAM, but try make_public if fine-grained
            try:
                blob.make_public()
            except Exception:
                pass
            bucket_name = bucket.name
            public_url = f"https://storage.googleapis.com/{bucket_name}/images/{filename}"
            logger.info("Successfully uploaded image to GCS: %s", public_url)
            return public_url
        except Exception as e:
            logger.warning("Failed uploading to GCS bucket (%s). Falling back to local disk.", e)

    # Local fallback
    local_path = LOCAL_MEDIA_DIR / filename
    local_path.write_bytes(image_bytes)
    logger.info("Saved image to local media cache: %s", local_path)
    return f"/api/media/{filename}"


def get_local_media_path(filename: str) -> Optional[Path]:
    """Retrieves file path for locally cached media."""
    # Sanitize filename
    safe_name = os.path.basename(filename)
    path = LOCAL_MEDIA_DIR / safe_name
    if path.is_file():
        return path
    return None


def delete_image_file(filename: str) -> bool:
    """Deletes image file from GCS or local disk."""
    safe_name = os.path.basename(filename)
    deleted = False

    # Check local
    local_path = LOCAL_MEDIA_DIR / safe_name
    if local_path.is_file():
        try:
            local_path.unlink()
            deleted = True
        except Exception as e:
            logger.warning("Failed deleting local media file (%s): %s", local_path, e)

    # Check GCS
    bucket = _get_gcs_bucket()
    if bucket:
        try:
            blob = bucket.blob(f"images/{safe_name}")
            if blob.exists():
                blob.delete()
                deleted = True
        except Exception as e:
            logger.warning("Failed deleting GCS blob (%s): %s", safe_name, e)

    return deleted
