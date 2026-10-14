#!/usr/bin/env bash

# =====================================================================
#  Agentic News Analyser - Linux Dev Launcher
#  Spawns services in separate terminal windows if a GUI desktop is available,
#  or falls back to unified background process mode.
# =====================================================================

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

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

# Detect GUI terminal availability
HAS_DISPLAY=0
if [ -n "$DISPLAY" ] || [ -n "$WAYLAND_DISPLAY" ]; then
    HAS_DISPLAY=1
fi

TERM_BIN=""
if [ "$HAS_DISPLAY" -eq 1 ] && [ "$1" != "--headless" ] && [ "$1" != "--bg" ]; then
    if command -v gnome-terminal >/dev/null 2>&1; then
        TERM_BIN="gnome-terminal"
    elif command -v x-terminal-emulator >/dev/null 2>&1; then
        TERM_BIN="x-terminal-emulator"
    elif command -v konsole >/dev/null 2>&1; then
        TERM_BIN="konsole"
    elif command -v xfce4-terminal >/dev/null 2>&1; then
        TERM_BIN="xfce4-terminal"
    elif command -v xterm >/dev/null 2>&1; then
        TERM_BIN="xterm"
    fi
fi

if [ -n "$TERM_BIN" ]; then
    echo "====================================================================="
    echo " Agentic News Analyser - Starting Linux Multi-Window Environment ($TERM_BIN)"
    echo "====================================================================="

    CMD_FIREBASE="cd '$SCRIPT_DIR/firebase' && export FIRESTORE_EMULATOR_HOST=127.0.0.1:8085 && export FIREBASE_PROJECT_ID=agentic-news-dev && export GOOGLE_CLOUD_PROJECT=agentic-news-dev && unset GOOGLE_APPLICATION_CREDENTIALS && npx firebase-tools emulators:start --only firestore --project agentic-news-dev --import=./emulator-data --export-on-exit=./emulator-data; exec bash"
    CMD_BACKEND="cd '$SCRIPT_DIR/backend' && export FIRESTORE_EMULATOR_HOST=127.0.0.1:8085 && export FIREBASE_PROJECT_ID=agentic-news-dev && export GOOGLE_CLOUD_PROJECT=agentic-news-dev && unset GOOGLE_APPLICATION_CREDENTIALS && $PYTHON_CMD api_server.py; exec bash"
    CMD_FRONTEND="cd '$SCRIPT_DIR/frontend' && npm run dev; exec bash"

    case "$TERM_BIN" in
        gnome-terminal)
            gnome-terminal --title="Firebase Emulator" -- bash -c "$CMD_FIREBASE"
            sleep 1
            gnome-terminal --title="Backend API" -- bash -c "$CMD_BACKEND"
            sleep 1
            gnome-terminal --title="Frontend Web" -- bash -c "$CMD_FRONTEND"
            ;;
        konsole)
            konsole --new-tab -e bash -c "$CMD_FIREBASE" &
            sleep 1
            konsole --new-tab -e bash -c "$CMD_BACKEND" &
            sleep 1
            konsole --new-tab -e bash -c "$CMD_FRONTEND" &
            ;;
        xfce4-terminal)
            xfce4-terminal --title="Firebase Emulator" -e "bash -c \"$CMD_FIREBASE\"" &
            sleep 1
            xfce4-terminal --title="Backend API" -e "bash -c \"$CMD_BACKEND\"" &
            sleep 1
            xfce4-terminal --title="Frontend Web" -e "bash -c \"$CMD_FRONTEND\"" &
            ;;
        *)
            "$TERM_BIN" -e bash -c "$CMD_FIREBASE" &
            sleep 1
            "$TERM_BIN" -e bash -c "$CMD_BACKEND" &
            sleep 1
            "$TERM_BIN" -e bash -c "$CMD_FRONTEND" &
            ;;
    esac

    echo ""
    echo "All services launched in separate terminal windows!"
    echo " - Web Dashboard:        http://localhost:5173"
    echo " - Backend API Docs:     http://localhost:8080/docs"
    echo " - Firestore Emulator UI: http://localhost:4000"
    echo ""
else
    # Fallback to single-terminal background mode (universal start_dev.sh)
    exec "$SCRIPT_DIR/start_dev.sh" "$@"
fi
