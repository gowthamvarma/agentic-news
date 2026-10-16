#!/usr/bin/env bash
# ==============================================================================
# Agentic News Analyser - Automated Production Deployment Script (Linux / macOS)
# ==============================================================================

set -e

# Detect Script Root Directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# 1. Project ID Detection
PROJECT_ID="${1:-}"
if [ -z "$PROJECT_ID" ]; then
    PROJECT_ID="$(gcloud config get-value project 2>/dev/null || true)"
fi
if [ -z "$PROJECT_ID" ]; then
    PROJECT_ID="project-4124e964-bf18-4c2d-936"
fi

# 2. Gemini API Key Detection
API_KEY="${2:-}"
if [ -z "$API_KEY" ]; then
    API_KEY="${GEMINI_API_KEY:-}"
    if [ -z "$API_KEY" ] && [ -f "backend/.env" ]; then
        API_KEY="$(grep -E '^GEMINI_API_KEY=' backend/.env | cut -d '=' -f2- | tr -d ' "\r' || true)"
    fi
fi

REGION="us-central1"
SERVICE_NAME="agentic-news-api"

echo "=============================================================================="
echo "      Agentic News Analyser - Automated Production Deployment Pipeline        "
echo "=============================================================================="
echo "Target Project: $PROJECT_ID"
echo "Target Region:  $REGION"
echo "Cloud Run App:  $SERVICE_NAME"
echo "=============================================================================="
echo ""

# STEP 1: Build React Production Bundle
echo "[1/4] Building React Production Frontend Bundle..."
(
    cd frontend
    npm run build
)
echo "[OK] Frontend built successfully."
echo ""

# STEP 2: Sync frontend bundle into backend/dist
echo "[2/4] Syncing frontend bundle into backend/dist for unified serving..."
mkdir -p backend/dist
rm -rf backend/dist/*
cp -r frontend/dist/* backend/dist/
echo "[OK] Frontend synced to backend/dist."
echo ""

# STEP 3: Deploy Firestore Security Rules
echo "[3/4] Releasing Cloud Firestore Security Rules..."
PY_BIN="python3"
if python3 --version >/dev/null 2>&1; then
    PY_BIN="python3"
elif python --version >/dev/null 2>&1; then
    PY_BIN="python"
fi
$PY_BIN firebase/deploy_rules.py "$PROJECT_ID" || {
    echo "[WARNING] Firestore rules deployment encountered an issue. Continuing container build..."
}
echo ""

# STEP 4: Deploy Unified Cloud Run Service
echo "[4/4] Building container and deploying to Google Cloud Run..."
(
    cd backend
    BUCKET_NAME="agentic-news-media-$PROJECT_ID"
    if [ -z "$API_KEY" ]; then
        gcloud run deploy "$SERVICE_NAME" \
            --source . \
            --region "$REGION" \
            --project "$PROJECT_ID" \
            --platform managed \
            --allow-unauthenticated \
            --set-env-vars "FIREBASE_PROJECT_ID=$PROJECT_ID,GOOGLE_CLOUD_PROJECT=$PROJECT_ID,GCS_MEDIA_BUCKET=$BUCKET_NAME,ADK_LOG_LEVEL=INFO" \
            --timeout=300s \
            --memory 2Gi \
            --cpu 2 \
            --min-instances 0 \
            --max-instances 10 \
            --quiet
    else
        gcloud run deploy "$SERVICE_NAME" \
            --source . \
            --region "$REGION" \
            --project "$PROJECT_ID" \
            --platform managed \
            --allow-unauthenticated \
            --set-env-vars "FIREBASE_PROJECT_ID=$PROJECT_ID,GOOGLE_CLOUD_PROJECT=$PROJECT_ID,GEMINI_API_KEY=$API_KEY,GCS_MEDIA_BUCKET=$BUCKET_NAME,ADK_LOG_LEVEL=INFO" \
            --timeout=300s \
            --memory 2Gi \
            --cpu 2 \
            --min-instances 0 \
            --max-instances 10 \
            --quiet
    fi
)

LIVE_URL="$(gcloud run services describe "$SERVICE_NAME" --region "$REGION" --project "$PROJECT_ID" --format="value(status.url)" 2>/dev/null || true)"

echo ""
echo "=============================================================================="
echo "[SUCCESS] Deployment Finished Successfully!"
echo "Live Web Dashboard: $LIVE_URL/"
echo "Health API Check:   $LIVE_URL/api/health"
echo "=============================================================================="
