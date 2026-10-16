# Quiz Validation Loading Spinner Design

## Overview
When users complete an Active Recall Quiz in the Literacy Tutor section of `AnalysisReportView`, submitting their answers triggers a backend API call to `gradeQuiz`. To improve UX and prevent duplicate submissions, the submit button will show a loading spinner with "Validating Answers..." and input options will be locked while the request is in flight.

## Affected Components
- `frontend/src/components/AnalysisReportView.tsx`

## Design Details

### 1. State Management
- Introduce `isGrading: boolean` (default `false`) using `useState` in `AnalysisReportView`.

### 2. Event Handler (`handleGradeQuiz`)
- Guard against concurrent submissions: `if (!quiz || isGrading) return;`
- Set `isGrading` to `true` before dispatching `gradeQuiz(quiz.quiz_id, userAnswers)`.
- Use `try ... catch ... finally` to guarantee `isGrading` is set back to `false` regardless of whether grading succeeds or fails.

### 3. Submission Button UI
- Add `isGrading` to `disabled`: `disabled={Object.keys(userAnswers).length === 0 || isGrading}`.
- When `isGrading` is `true`:
  - Display DaisyUI spinner: `<span className="loading loading-spinner loading-sm"></span>`
  - Display label: `<span>Validating Answers...</span>`
- When `isGrading` is `false`:
  - Display label: `Submit & Grade Answers`

### 4. Input Locking
- In the quiz radio option list, ensure user answer clicks are ignored and the radio input is disabled if `isGrading` is `true` (`disabled={!!quizResult || isGrading}`).

## Verification Plan
1. Check frontend builds with TypeScript compiler (`npm run build` or `npx tsc --noEmit`).
2. Verify visual and interaction states in the quiz tab when submitting answers.
