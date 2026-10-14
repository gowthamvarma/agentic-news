# Agentic News Analyser

> **Google Cloud AI Builder Cup 2026 Submission**  
> **Theme**: Media, Content & Digital Experiences  
> **Stack**: Google Agent Development Kit (ADK), Google Gemini, FastAPI, Cloud Firestore, Firebase Hosting

---

## 1. Quickstart with Local Firebase Simulator

The project supports local development with the **Firebase Emulator Suite** and an **in-memory fallback**.

### Run Everything with One Command (Windows)
Double-click or run:
```bat
start_dev.bat
```
This automatically starts:
1. **Firebase Firestore Emulator**: `http://localhost:8085` (Emulator UI: `http://localhost:4000`)
2. **FastAPI ADK Backend**: `http://localhost:8080` (Docs: `http://localhost:8080/docs`)
3. **React Vite Web Dashboard**: `http://localhost:5173`

---

## 2. Manual Step-by-Step Execution

### Step 1: Start the Local Firestore Emulator
```bash
npx firebase-tools emulators:start --only firestore --project agentic-news-dev
```

### Step 2: Start the FastAPI Backend
```bash
cd adk-web-news
set FIRESTORE_EMULATOR_HOST=127.0.0.1:8085
set FIREBASE_PROJECT_ID=agentic-news-dev
python api_server.py
```

### Step 3: Start the Web Dashboard
```bash
cd web
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 3. Architecture & Features

- **25 Specialized Agents** across 6 layers (`Ingestion`, `Understand`, `Verify`, `Analyse`, `Synthesis`, `Engage`).
- **IFCN Claim Verification**: Confidence scores and primary source links.
- **Cross-Source Contradictions**: Side-by-side discrepancy inspector.
- **Interactive Chronological Timeline**: Tracks narrative framing shifts.
- **Active Recall Comprehension Tutor**: Generates MCQs and provides real-time scoring.
- **Dialectical Perspective Debate**: Steelmanned proponent vs. critic positions with neutral compromise synthesis.
- **Research Copilot Chat**: Autonomous investigation mode.
- **Production Firestore Rules & Indexes**: Validated and ready for deployment.
