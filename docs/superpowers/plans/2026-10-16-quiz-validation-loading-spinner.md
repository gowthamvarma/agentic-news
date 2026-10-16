# Quiz Validation Loading Spinner Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Provide visual loading feedback and prevent duplicate submissions when validating quiz answers in the Active Recall Literacy Tutor section.

**Architecture:** Add local `isGrading` state in `AnalysisReportView`, toggle it within a `try...catch...finally` block inside `handleGradeQuiz`, lock radio selections while in-flight, and render a DaisyUI loading spinner inside the submit button.

**Tech Stack:** React 19, TypeScript, DaisyUI, Tailwind CSS, Vite.

## Global Constraints
- Use Windows-compatible command runners (`npm.cmd` instead of `npm`).
- Preserve existing comments and docstrings.
- Maintain styling consistency with existing DaisyUI components in `AnalysisReportView.tsx`.

---

### Task 1: Add `isGrading` state and update `handleGradeQuiz`

**Files:**
- Modify: `frontend/src/components/AnalysisReportView.tsx:244-250`
- Modify: `frontend/src/components/AnalysisReportView.tsx:448-458`

**Interfaces:**
- Consumes: `gradeQuiz(quizId: string, answers: Record<string, number>): Promise<any>` from `frontend/src/api.ts`
- Produces: `isGrading: boolean` state controlling quiz grading activity

- [ ] **Step 1: Add `isGrading` state**

In `frontend/src/components/AnalysisReportView.tsx` around line 246, add `isGrading`:

```tsx
  // Active Recall Quiz State
  const [quiz, setQuiz] = useState<QuizPayload | null>(() => report.quiz || null);
  const [quizLoading, setQuizLoading] = useState(false);
  const [isGrading, setIsGrading] = useState(false);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [quizResult, setQuizResult] = useState<any | null>(null);
```

- [ ] **Step 2: Update `handleGradeQuiz` with guard and `try...finally`**

In `frontend/src/components/AnalysisReportView.tsx`, replace `handleGradeQuiz`:

```tsx
  const handleGradeQuiz = async () => {
    if (!quiz || isGrading) return;
    setIsGrading(true);
    try {
      const res = await gradeQuiz(quiz.quiz_id, userAnswers);
      setQuizResult(res);
      showToast(`Quiz Graded: ${res.score_percentage}% Score!`, 'success');
    } catch (err: any) {
      console.error(err);
      showToast('Failed to grade quiz: ' + (err?.message || err), 'error');
    } finally {
      setIsGrading(false);
    }
  };
```

- [ ] **Step 3: Verify TypeScript compilation**

Run: `npm.cmd run build` inside `frontend` directory.
Expected: Build passes with no TypeScript errors.

- [ ] **Step 4: Commit changes**

```bash
git add frontend/src/components/AnalysisReportView.tsx
git commit -m "feat(quiz): add isGrading state and async guard in handleGradeQuiz"
```

---

### Task 2: Update Quiz submit button and radio answer inputs

**Files:**
- Modify: `frontend/src/components/AnalysisReportView.tsx:2122-2140`
- Modify: `frontend/src/components/AnalysisReportView.tsx:2192-2200`

**Interfaces:**
- Consumes: `isGrading: boolean`, `userAnswers`, `quizResult`, `handleGradeQuiz`
- Produces: Visual spinner and disabled state on the button and radio options during grading

- [ ] **Step 1: Lock radio answers while grading is in flight**

In `frontend/src/components/AnalysisReportView.tsx` around lines 2122-2139:

```tsx
                                onClick={() => {
                                  if (!quizResult && !isGrading) {
                                    setUserAnswers((prev) => ({ ...prev, [q.question_id]: optIdx }));
                                  }
                                }}
                              >
                                <input
                                  type="radio"
                                  name={`quiz-radio-${q.question_id}`}
                                  className="radio radio-primary radio-md"
                                  checked={isSelected}
                                  onChange={() => {
                                    if (!quizResult && !isGrading) {
                                      setUserAnswers((prev) => ({ ...prev, [q.question_id]: optIdx }));
                                    }
                                  }}
                                  disabled={!!quizResult || isGrading}
                                />
```

- [ ] **Step 2: Update submit button with loading spinner and disabled state**

In `frontend/src/components/AnalysisReportView.tsx` around lines 2192-2200, replace:

```tsx
                    ) : (
                      <button
                        className="btn btn-primary btn-block sm:btn-wide shadow-md font-bold text-base gap-2"
                        onClick={handleGradeQuiz}
                        disabled={Object.keys(userAnswers).length === 0 || isGrading}
                      >
                        {isGrading ? (
                          <>
                            <span className="loading loading-spinner loading-sm"></span>
                            <span>Validating Answers...</span>
                          </>
                        ) : (
                          <span>Submit & Grade Answers</span>
                        )}
                      </button>
                    )}
```

- [ ] **Step 3: Verify TypeScript compilation and linter**

Run: `npm.cmd run build` inside `frontend` directory.
Run: `npm.cmd run lint` inside `frontend` directory.
Expected: Build passes with 0 errors.

- [ ] **Step 4: Commit changes**

```bash
git add frontend/src/components/AnalysisReportView.tsx
git commit -m "feat(quiz): display spinner and lock options while validating answers"
```
