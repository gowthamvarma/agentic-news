# Previous News Analyses Archive & Progressive Real-Time UI Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a dedicated Previous News Analyses page featuring an AG Grid paginated table with search and favorites stored in the Firebase Local Firestore Emulator, and transform report generation into a real-time progressive stream so UI sections appear immediately as they become available.

**Architecture:** 
1. **Firestore Local Emulator Layer**: Store analyses with pagination, search metadata, and `is_favorite` boolean flags in the `analyses` collection connected to `127.0.0.1:8085`.
2. **Server-Sent Events (SSE) Streaming Engine**: Expose `GET /api/analyze/stream` emitting typed event frames (`brief`, `verifications`, `timeline`, `completed`) to avoid blocking the user.
3. **Frontend AG Grid Archive**: Dedicated view in the dashboard using `ag-grid-react` with custom cell renderers (interactive star toggle, date formatter, actions) and quick search.
4. **Progressive UI State Machine**: Update the React dashboard section-by-section as events arrive, giving the user immediate reading access within 2-3 seconds.

**Tech Stack:** FastAPI, Python 3.12, Google Cloud Firestore AsyncClient, React 19, TypeScript, AG Grid Community, DaisyUI 4, Tailwind CSS, Vite.

## Global Constraints
- Target workspace: `C:\tools\github\agentic-news`
- Firestore emulator host: `127.0.0.1:8085` (Project: `agentic-news-dev`)
- Maintain existing 32 DaisyUI themes compatibility across all new UI elements, including AG Grid
- Implement step-by-step; do not break existing single-turn fallback or tests

---

### Task 1: Extend Firestore Service and CRUD Endpoints for Search, Pagination, and Favorites

**Files:**
- Modify: `adk-web-news/shared/firestore_service.py`
- Modify: `adk-web-news/api_server.py`
- Test: `adk-web-news/tests/test_firestore_archive.py`

**Interfaces:**
- Consumes: Firestore emulator or in-memory fallback
- Produces: 
  - `FirestoreService.toggle_favorite(analysis_id: str) -> bool`
  - `FirestoreService.delete_analysis(analysis_id: str) -> bool`
  - `GET /api/analyses` with query parameters `limit`, `offset`, `search`, `favorites_only`
  - `PATCH /api/analysis/{analysis_id}/favorite`
  - `DELETE /api/analysis/{analysis_id}`

- [ ] **Step 1: Write test for favorite toggle, deletion, and paginated search**
Create `adk-web-news/tests/test_firestore_archive.py`:
```python
import pytest
from shared.firestore_service import FirestoreService

@pytest.mark.asyncio
async def test_favorite_toggle_and_archive_search():
    doc_id = "test-doc-123"
    await FirestoreService.save_analysis(doc_id, {"topic": "Global Trade Accords", "executive_summary": "Summary text"})
    
    # Toggle favorite to True
    fav_status = await FirestoreService.toggle_favorite(doc_id)
    assert fav_status is True
    
    # Fetch list with search
    results = await FirestoreService.list_analyses_filtered(search="Global", favorites_only=True)
    assert len(results) >= 1
    assert results[0]["id"] == doc_id
    assert results[0]["is_favorite"] is True
    
    # Toggle favorite back to False
    fav_status2 = await FirestoreService.toggle_favorite(doc_id)
    assert fav_status2 is False
    
    # Delete doc
    deleted = await FirestoreService.delete_analysis(doc_id)
    assert deleted is True
    assert await FirestoreService.get_analysis(doc_id) is None
```

- [ ] **Step 2: Implement filtered list, toggle_favorite, and delete in `firestore_service.py`**
Add helper methods in `FirestoreService` supporting:
- `toggle_favorite(analysis_id)`
- `delete_analysis(analysis_id)`
- `list_analyses_filtered(limit, offset, search, favorites_only)`

- [ ] **Step 3: Add REST endpoints in `api_server.py`**
Expose:
- `PATCH /api/analysis/{analysis_id}/favorite`
- `DELETE /api/analysis/{analysis_id}`
- Update `GET /api/analyses` with `limit`, `offset`, `search`, `favorites_only` parameters.

- [ ] **Step 4: Run test to verify passes**
Run: `python -m unittest tests/test_firestore_archive.py` or `python -c "import tests.test_firestore_archive"`
Expected: PASS

---

### Task 2: Implement Real-Time Progressive Streaming Analysis Endpoint (SSE)

**Files:**
- Modify: `adk-web-news/api_server.py`
- Modify: `adk-web-news/shared/structured_builder.py`
- Test: `adk-web-news/tests/test_stream_endpoint.py`

**Interfaces:**
- Consumes: Topic string
- Produces: `GET /api/analyze/stream?topic={topic}` returning `text/event-stream` with frames:
  - `event: step_brief` (Executive brief & context primer available)
  - `event: step_verification` (Fact verifications & bias available)
  - `event: step_timeline` (Chronological timeline available)
  - `event: step_complete` (Final status with complete ID)

- [ ] **Step 1: Write test for streaming endpoint generator**
Test event emission sequence and valid JSON payloads.

- [ ] **Step 2: Add modular progressive builder functions in `structured_builder.py`**
Provide decoupled functions:
- `build_stage_brief(topic: str) -> dict`
- `build_stage_verifications(topic: str) -> dict`
- `build_stage_timeline(topic: str) -> dict`

- [ ] **Step 3: Implement SSE endpoint in `api_server.py`**
Use `fastapi.responses.StreamingResponse` emitting JSON messages with `yield f"event: {event_name}\ndata: {json_str}\n\n"`.
Persist each stage progressively into Firestore emulator.

- [ ] **Step 4: Test endpoint with Python HTTP client**
Verify stream yields events in sequence with latency under 1 second per stage.

---

### Task 3: Frontend API Client for Archive and Streaming

**Files:**
- Modify: `web-app/web/src/api.ts`
- Modify: `web-app/web/src/types.ts`

**Interfaces:**
- Consumes: Backend endpoints
- Produces:
  - `analyzeNewsTopicProgressive(topic: string, onSectionReady: (section: string, data: any) => void): Promise<NewsIntelligenceReport>`
  - `fetchAnalysesArchive(params: { limit: number; offset: number; search?: string; favorites_only?: boolean })`
  - `toggleAnalysisFavorite(analysisId: string): Promise<boolean>`
  - `deleteAnalysisReport(analysisId: string): Promise<boolean>`

- [ ] **Step 1: Update `types.ts`**
Add `is_favorite?: boolean`, `available_sections?: string[]`, and `AnalysisArchiveItem` interface.

- [ ] **Step 2: Implement client functions in `api.ts`**
Implement `fetchAnalysesArchive`, `toggleAnalysisFavorite`, `deleteAnalysisReport`, and `analyzeNewsTopicProgressive` using browser `EventSource` or `ReadableStream`.

---

### Task 4: Install and Theme AG Grid in React Frontend

**Files:**
- Modify: `web-app/web/package.json`
- Modify: `web-app/web/src/index.css`

**Interfaces:**
- Consumes: `ag-grid-react`, `ag-grid-community`
- Produces: DaisyUI/Tailwind theme-compatible AG Grid styles

- [ ] **Step 1: Install `ag-grid-react` and `ag-grid-community`**
Run: `npm install ag-grid-react ag-grid-community` in `web-app/web`.

- [ ] **Step 2: Configure AG Grid CSS in `index.css`**
Import AG Grid quartz or alpine CSS and map DaisyUI CSS variables (`--b1`, `--b2`, `--bc`, `--p`) to AG Grid theme CSS properties so AG Grid automatically matches all 32 themes (Dark, Night, Synthwave, Cyberpunk, Light, etc.).

- [ ] **Step 3: Run `npm run build`**
Verify zero TypeScript and bundle errors.

---

### Task 5: Build `AnalysisHistoryGrid` Component with Search, Pagination, and Favorites

**Files:**
- Create: `web-app/web/src/components/AnalysisHistoryGrid.tsx`

**Interfaces:**
- Consumes: `fetchAnalysesArchive`, `toggleAnalysisFavorite`, `deleteAnalysisReport`
- Produces: Full-featured archive page with:
  - AG Grid with pagination (10, 20, 50 rows per page)
  - Search input with real-time debounce filtering
  - "Favorites Only" toggle pill
  - Star cell renderer for one-click favorite toggling
  - "Open Report" action that loads the selected report in the main dashboard
  - Delete row action with confirmation

- [ ] **Step 1: Create `AnalysisHistoryGrid.tsx` component**
Define column definitions:
  - Column 1: Star icon (`is_favorite`) with interactive toggle
  - Column 2: Date (`created_at`) formatted nicely
  - Column 3: Topic (`topic`) with bold headline styling
  - Column 4: Executive Summary preview
  - Column 5: Sources audited count badge
  - Column 6: Verified facts count badge
  - Column 7: Actions ("Open Intelligence Brief", "Delete")

- [ ] **Step 2: Add quick filter search bar & favorites toggle filter above grid**

- [ ] **Step 3: Add empty state and loading skeletons**

---

### Task 6: Integrate Archive View and Header Navigation in `App.tsx`

**Files:**
- Modify: `web-app/web/src/App.tsx`

**Interfaces:**
- Consumes: `AnalysisHistoryGrid` component
- Produces: Seamless switching between `view === 'investigate'` (Fleet Dashboard) and `view === 'archive'` (Previous Analyses Page)

- [ ] **Step 1: Add view state in `App.tsx`**
`const [currentView, setCurrentView] = useState<'investigate' | 'archive'>('investigate');`

- [ ] **Step 2: Add navigation buttons in the top navbar and side navigation**
Add "Archive / History" button in the header navbar and vertical side nav with an archive badge count.

- [ ] **Step 3: Handle "Open Report" callback**
When the user clicks "Open Report" in the AG Grid archive, switch `currentView` to `'investigate'`, populate `report`, and activate the Executive Brief tab immediately.

---

### Task 7: Integrate Section-by-Section Progressive Live Updates

**Files:**
- Modify: `web-app/web/src/App.tsx`

**Interfaces:**
- Consumes: `analyzeNewsTopicProgressive` from `api.ts`
- Produces: Instant progressive UI updates as each section finishes

- [ ] **Step 1: Replace monolithic blocking search with progressive stream handler**
When the user submits a topic:
- Immediately transition from Hero section to Dashboard view with empty/skeleton tabs.
- When `step_brief` arrives (after ~2s): render Tab 1 (Executive Brief & Primer) immediately.
- When `step_verification` arrives (after ~5s): update Tab 2 and display the verification count badge.
- When `step_timeline` arrives (after ~8s): populate Tab 3 timeline events.
- Stop loading spinner as soon as the initial reading view is populated.

- [ ] **Step 2: Add "Live Progress Indicator" in the Vertical Side Navigation**
Show subtle animated pulse / checkmark next to each module in the side nav as it becomes ready, providing clear visual feedback without freezing the screen.

---

### Task 8: Verification & End-to-End Testing

**Files:**
- Test scripts and browser verification

- [ ] **Step 1: Verify Firestore local emulator connectivity**
Ensure documents and favorites are saved to `127.0.0.1:8085` or memory store.

- [ ] **Step 2: Test AG Grid pagination, search, and favorite toggles**
Verify sorting, filtering by favorite, page navigation, and opening past reports.

- [ ] **Step 3: Test real-time progressive section rendering**
Verify user sees the Executive Brief within 2-3 seconds without waiting for all stages to complete.

- [ ] **Step 4: Run production build check (`npm run build`)**
Ensure clean build with no TypeScript or layout regressions.
