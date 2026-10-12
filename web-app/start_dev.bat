@echo off
echo =====================================================================
echo  Agentic News Analyser - Local Firebase Simulator & Dev Environment
echo =====================================================================
echo.

set FIRESTORE_EMULATOR_HOST=127.0.0.1:8085
set FIREBASE_PROJECT_ID=agentic-news-dev
set GOOGLE_CLOUD_PROJECT=agentic-news-dev
set GOOGLE_APPLICATION_CREDENTIALS=

echo [1/3] Starting Firebase Local Firestore Emulator on port 8085 (UI on 4000)...
start "Firebase Emulator" cmd /k "cd /d %~dp0 && npx firebase-tools emulators:start --only firestore --project agentic-news-dev --import=./emulator-data --export-on-exit=./emulator-data"

echo [2/3] Starting FastAPI Backend on port 8080...
start "Backend API (ADK Agents)" cmd /k "cd /d %~dp0..\adk-web-news && set FIRESTORE_EMULATOR_HOST=127.0.0.1:8085 && set FIREBASE_PROJECT_ID=agentic-news-dev && set GOOGLE_APPLICATION_CREDENTIALS= && python api_server.py"

echo [3/3] Starting Vite Web Dashboard on port 5173...
start "Frontend Web (React/Vite)" cmd /k "cd /d %~dp0web && npm run dev"

echo.
echo All services launched!
echo - Web Dashboard:        http://localhost:5173
echo - Backend API Docs:     http://localhost:8080/docs
echo - Firestore Emulator UI: http://localhost:4000
echo.
pause
