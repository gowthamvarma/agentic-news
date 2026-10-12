# DaisyUI UI Enhancements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Polish the Agentic News Web UI with continuously spinning brain progress, robust theme color contrast, comprehensive DaisyUI component best practices, full-fidelity skeletons matching loaded response width, and rich DaisyUI toast alerts on completing on-demand sections.

**Architecture:** 
1. Replace step-bound radial progress with smooth spinning circular progress ring around a stationary upright brain icon.
2. Fix DaisyUI color contrast issues (specifically removing `text-*-content` from semi-transparent tinted backgrounds like `bg-secondary/10` and replacing with `text-base-content`).
3. Audit all components for DaisyUI component best practices and clean theme compatibility.
4. Redesign skeletons across HomePage, AnalysisDetailPage, and AnalysisReportView (Scenarios, Quiz, Debate) to occupy full container width and mirror loaded layouts.
5. Upgrade ToastContext to support typed DaisyUI toasts (`success`, `info`, `warning`, `error`) and trigger feedback when on-demand sections complete.

**Tech Stack:** React 19, TypeScript, Tailwind CSS 3.4, DaisyUI 4.12, Lucide React, Vite.

---

### Task 1: Brain Icon Spinning Circular Progress Ring

**Files:**
- Modify: `web-app/web/src/pages/HomePage.tsx:255-275`

- [ ] **Step 1: Replace step-bound radial progress with continuous spinning ring and upright centered brain icon**
- [ ] **Step 2: Verify stepper and linear progress bar still reflect actual fleet loading stages**
- [ ] **Step 3: Test build**

---

### Task 2: Theme Contrast & Color Best Practices Fixes

**Files:**
- Modify: `web-app/web/src/components/TimelineSection.tsx:340-349, 175-180`
- Modify: `web-app/web/src/components/AnalysisReportView.tsx:915-920, 1280-1285, 1990-2000`
- Modify: `web-app/web/src/pages/AnalysisDetailPage.tsx:160-165`

- [ ] **Step 1: Fix `TimelineSection.tsx` narrative shift card to use `text-base-content` on `bg-secondary/10` and `text-secondary` for header**
- [ ] **Step 2: Fix alert contrast issues where `*-content` was combined with low opacity backgrounds**
- [ ] **Step 3: Test across dark and light themes (e.g., dark, light, cupcake, synthwave, cyber, corporate, retro)**

---

### Task 3: Comprehensive DaisyUI Component Audit & Functional UI Refinements

**Files:**
- Audit & Modify: `web-app/web/src/components/AnalysisReportView.tsx`
- Audit & Modify: `web-app/web/src/components/TimelineSection.tsx`
- Audit & Modify: `web-app/web/src/components/CrossSourceContradictionsSection.tsx`
- Audit & Modify: `web-app/web/src/components/Navbar.tsx`

- [ ] **Step 1: Audit and align component classes with DaisyUI specifications**
- [ ] **Step 2: Ensure correct badge, button, table, tabs, and stat pairings**
- [ ] **Step 3: Test build and responsive layout**

---

### Task 4: Full-Fidelity & Full-Width Skeleton Placeholders

**Files:**
- Modify: `web-app/web/src/components/AnalysisReportView.tsx` (Scenarios, Quiz, Debate loading states)
- Modify: `web-app/web/src/pages/AnalysisDetailPage.tsx` (Report loading skeleton)
- Modify: `web-app/web/src/pages/HomePage.tsx` (Loading state skeleton)

- [ ] **Step 1: Expand Scenarios on-demand skeleton to full width matching 2-column causal analysis + 3-column scenario cards**
- [ ] **Step 2: Expand Quiz on-demand skeleton to full width matching quiz card with options and actions**
- [ ] **Step 3: Expand Debate on-demand skeleton to full width matching 2-column dialectic + synthesis card**
- [ ] **Step 4: Expand AnalysisDetailPage loading skeleton to full container width matching the report structure**
- [ ] **Step 5: Test skeleton appearance and verify zero layout shift**

---

### Task 5: Enhanced DaisyUI Toast Alerts for On-Demand Sections

**Files:**
- Modify: `web-app/web/src/context/ToastContext.tsx`
- Modify: `web-app/web/src/components/AnalysisReportView.tsx`
- Modify: `web-app/web/src/pages/HomePage.tsx`
- Modify: `web-app/web/src/pages/AnalysisDetailPage.tsx`

- [ ] **Step 1: Upgrade ToastContext to support DaisyUI toast alert variants (`success`, `info`, `warning`, `error`) with dismissal and icons**
- [ ] **Step 2: Update `AnalysisReportView.tsx` to dispatch typed success toasts when Scenarios, Quiz, and Debate on-demand fleets finish**
- [ ] **Step 3: Verify toasts in browser/build and confirm styling across all themes**
