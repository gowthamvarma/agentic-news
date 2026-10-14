#!/usr/bin/env bash

# =====================================================================
#  Agentic News Analyser - macOS Multi-Window Dev Launcher
#  Spawns Emulator, Backend, and Frontend in separate Terminal windows/tabs
# =====================================================================

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "====================================================================="
echo " Agentic News Analyser - Starting macOS Development Environment"
echo "====================================================================="

# Check if osascript is available and GUI is running
if ! command -v osascript >/dev/null 2>&1 || [ -n "$SSH_CONNECTION" ] || [ "$1" = "--headless" ] || [ "$1" = "--bg" ]; then
    echo "Running in unified background mode via start_dev.sh..."
    exec "$SCRIPT_DIR/start_dev.sh" "$@"
fi

# Detect Python 3
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

echo "[1/3] Launching Firebase Emulator in Terminal..."
osascript <<EOF
tell application "Terminal"
    activate
    do script "cd \"$SCRIPT_DIR/firebase\" && export FIRESTORE_EMULATOR_HOST=127.0.0.1:8085 && export FIREBASE_PROJECT_ID=agentic-news-dev && export GOOGLE_CLOUD_PROJECT=agentic-news-dev && unset GOOGLE_APPLICATION_CREDENTIALS && npx firebase-tools emulators:start --only firestore --project agentic-news-dev --import=./emulator-data --export-on-exit=./emulator-data"
end tell
EOF

sleep 1

echo "[2/3] Launching FastAPI Backend in Terminal..."
osascript <<EOF
tell application "Terminal"
    do script "cd \"$SCRIPT_DIR/backend\" && export FIRESTORE_EMULATOR_HOST=127.0.0.1:8085 && export FIREBASE_PROJECT_ID=agentic-news-dev && export GOOGLE_CLOUD_PROJECT=agentic-news-dev && unset GOOGLE_APPLICATION_CREDENTIALS && $PYTHON_CMD api_server.py"
end tell
EOF

sleep 1

echo "[3/3] Launching Vite Web Dashboard in Terminal..."
osascript <<EOF
tell application "Terminal"
    do script "cd \"$SCRIPT_DIR/frontend\" && npm run dev"
end tell
EOF

echo ""
echo "====================================================================="
echo " All services launched in separate Terminal windows!"
echo " - Web Dashboard:        http://localhost:5173"
echo " - Backend API Docs:     http://localhost:8080/docs"
echo " - Firestore Emulator UI: http://localhost:4000"
echo "====================================================================="
