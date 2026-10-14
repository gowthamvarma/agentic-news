#!/usr/bin/env bash

# =====================================================================
#  Agentic News Analyser - Local Firebase Simulator & Dev Environment
#  Universal startup script for Linux and macOS (Single Terminal / Background)
# =====================================================================

set -e

# Resolve script directory (works even when invoked from another directory or symlinked)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "====================================================================="
echo " Agentic News Analyser - Local Firebase Simulator & Dev Environment"
echo "====================================================================="
echo ""

# Export environment variables for Firestore emulator
export FIRESTORE_EMULATOR_HOST="127.0.0.1:8085"
export FIREBASE_PROJECT_ID="agentic-news-dev"
export GOOGLE_CLOUD_PROJECT="agentic-news-dev"
unset GOOGLE_APPLICATION_CREDENTIALS 2>/dev/null || export GOOGLE_APPLICATION_CREDENTIALS=""

# Detect Python 3 executable (checking local virtualenv first)
if [ -f "$SCRIPT_DIR/backend/.venv/bin/python" ]; then
    PYTHON_CMD="$SCRIPT_DIR/backend/.venv/bin/python"
elif [ -f "$SCRIPT_DIR/.venv/bin/python" ]; then
    PYTHON_CMD="$SCRIPT_DIR/.venv/bin/python"
elif command -v python3 >/dev/null 2>&1; then
    PYTHON_CMD="python3"
elif command -v python >/dev/null 2>&1; then
    PYTHON_CMD="python"
else
    echo "Error: Python is not installed or not found in PATH." >&2
    exit 1
fi

# Detect Node.js tools
if ! command -v npx >/dev/null 2>&1; then
    echo "Error: npx is not found. Please install Node.js." >&2
    exit 1
fi

if ! command -v npm >/dev/null 2>&1; then
    echo "Error: npm is not found. Please install Node.js." >&2
    exit 1
fi

echo "Using Python: $($PYTHON_CMD --version 2>&1)"
echo "Using Node:   $(node --version 2>/dev/null || echo 'detected')"
echo ""

# Array to keep track of child PIDs
PIDS=()

cleanup() {
    echo ""
    echo "Stopping all services..."
    for pid in "${PIDS[@]}"; do
        if kill -0 "$pid" 2>/dev/null; then
            kill "$pid" 2>/dev/null || true
        fi
    done
    wait 2>/dev/null || true
    echo "All services stopped."
}

trap cleanup INT TERM EXIT

echo "[1/3] Starting Firebase Local Firestore Emulator on port 8085 (UI on 4000)..."
(
    cd "$SCRIPT_DIR/firebase"
    npx firebase-tools emulators:start --only firestore --project agentic-news-dev --import=./emulator-data --export-on-exit=./emulator-data
) &
PIDS+=($!)

# Brief pause to allow emulator initialization
sleep 2

echo "[2/3] Starting FastAPI Backend on port 8080..."
(
    cd "$SCRIPT_DIR/backend"
    "$PYTHON_CMD" api_server.py
) &
PIDS+=($!)

echo "[3/3] Starting Vite Web Dashboard on port 5173..."
(
    cd "$SCRIPT_DIR/frontend"
    npm run dev
) &
PIDS+=($!)

echo ""
echo "====================================================================="
echo " All services launched!"
echo " - Web Dashboard:        http://localhost:5173"
echo " - Backend API Docs:     http://localhost:8080/docs"
echo " - Firestore Emulator UI: http://localhost:4000"
echo "====================================================================="
echo "Press Ctrl+C to stop all services."
echo ""

# Wait for all child processes
wait
