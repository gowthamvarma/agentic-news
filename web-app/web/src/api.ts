import type { NewsIntelligenceReport, QuizPayload, PerspectiveDebateReport } from './types';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

export async function checkApiHealth() {
  const res = await fetch(`${API_BASE}/health`);
  if (!res.ok) throw new Error('API server unreachable');
  return res.json();
}

export async function analyzeNewsTopic(topic: string): Promise<NewsIntelligenceReport> {
  const res = await fetch(`${API_BASE}/analyze`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ topic }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ detail: 'Failed to analyze topic' }));
    throw new Error(err.detail || 'Analysis request failed');
  }
  return res.json();
}

export async function fetchRecentAnalyses(): Promise<NewsIntelligenceReport[]> {
  const res = await fetch(`${API_BASE}/analyses?limit=10`);
  if (!res.ok) return [];
  return res.json();
}

export async function fetchAnalysisDetail(analysisId: string): Promise<NewsIntelligenceReport> {
  const res = await fetch(`${API_BASE}/analysis/${analysisId}`);
  if (!res.ok) throw new Error('Analysis report not found');
  return res.json();
}

export async function generateQuiz(topic: string): Promise<QuizPayload> {
  const res = await fetch(`${API_BASE}/tutor/quiz`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ topic }),
  });
  if (!res.ok) throw new Error('Failed to generate quiz');
  return res.json();
}

export async function gradeQuiz(quizId: string, answers: Record<number, number>) {
  const res = await fetch(`${API_BASE}/tutor/grade`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ quiz_id: quizId, user_answers: answers }),
  });
  if (!res.ok) throw new Error('Failed to grade quiz');
  return res.json();
}

export async function generateDebate(topic: string): Promise<PerspectiveDebateReport> {
  const res = await fetch(`${API_BASE}/debate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ topic }),
  });
  if (!res.ok) throw new Error('Failed to generate perspective debate');
  return res.json();
}

export async function chatResearchCopilot(query: string, topic: string) {
  const res = await fetch(`${API_BASE}/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, topic }),
  });
  if (!res.ok) throw new Error('Research copilot chat failed');
  return res.json();
}
