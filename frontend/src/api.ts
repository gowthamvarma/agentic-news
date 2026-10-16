import type {
  NewsIntelligenceReport,
  QuizPayload,
  PerspectiveDebateReport,
  PaginatedAnalysesResponse,
  ChatMessage,
  TopicSuggestionsPayload,
  ContradictionItem,
  GeneratedArticleItem,
  ArticleGenerateRequestPayload,
  ImagePromptSuggestion,
  GeneratedImageItem,
  ImageGenerateRequestPayload,
  MultiAgentPipelineRequestPayload,
  MultiAgentEditorialArtState,
} from './types';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

export function resolveMediaUrl(url?: string): string {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:')) {
    return url;
  }
  const apiHost = API_BASE.replace(/\/api\/?$/, '');
  if (apiHost.startsWith('http://') || apiHost.startsWith('https://')) {
    return `${apiHost}${url.startsWith('/') ? '' : '/'}${url}`;
  }
  return url;
}

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

export async function analyzeNewsTopicProgressive(
  topic: string,
  onEvent: (eventType: string, data: any) => void
): Promise<void> {
  const response = await fetch(`${API_BASE}/analyze/stream?topic=${encodeURIComponent(topic)}`);
  if (!response.ok || !response.body) {
    throw new Error('Failed to start streaming analysis');
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder('utf-8');
  let buffer = '';

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const parts = buffer.split('\n\n');
    buffer = parts.pop() || '';

    for (const part of parts) {
      if (!part.trim()) continue;
      const lines = part.split('\n');
      let eventType = 'message';
      let dataStr = '';

      for (const line of lines) {
        if (line.startsWith('event: ')) {
          eventType = line.slice(7).trim();
        } else if (line.startsWith('data: ')) {
          dataStr = line.slice(6).trim();
        }
      }

      if (dataStr) {
        try {
          const parsed = JSON.parse(dataStr);
          onEvent(eventType, parsed);
        } catch (e) {
          console.error('Error parsing SSE event:', e);
        }
      }
    }
  }
}

export async function fetchRecentAnalyses(): Promise<NewsIntelligenceReport[]> {
  const res = await fetch(`${API_BASE}/analyses?limit=10`);
  if (!res.ok) return [];
  const data = await res.json();
  return Array.isArray(data) ? data : data.items || [];
}

export async function fetchAnalysesArchive(params: {
  limit?: number;
  offset?: number;
  search?: string;
  favorites_only?: boolean;
} = {}): Promise<PaginatedAnalysesResponse> {
  const query = new URLSearchParams();
  if (params.limit !== undefined) query.set('limit', String(params.limit));
  if (params.offset !== undefined) query.set('offset', String(params.offset));
  if (params.search) query.set('search', params.search);
  if (params.favorites_only) query.set('favorites_only', 'true');

  const res = await fetch(`${API_BASE}/analyses?${query.toString()}`);
  if (!res.ok) throw new Error('Failed to fetch analyses archive');
  return res.json();
}

export async function updateAnalysis(
  analysisId: string,
  updates: { is_favorite?: boolean; notes?: string; [key: string]: any }
): Promise<any> {
  const res = await fetch(`${API_BASE}/analysis/${analysisId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates),
  });
  if (!res.ok) throw new Error('Failed to update analysis');
  return res.json();
}

export async function deleteAnalysis(analysisId: string): Promise<boolean> {
  const res = await fetch(`${API_BASE}/analysis/${analysisId}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Failed to delete analysis');
  return true;
}

export async function fetchAnalysisDetail(analysisId: string): Promise<NewsIntelligenceReport> {
  const res = await fetch(`${API_BASE}/analysis/${analysisId}`);
  if (!res.ok) throw new Error('Analysis report not found');
  return res.json();
}

export async function generateQuiz(topic: string, analysisId?: string): Promise<QuizPayload> {
  const res = await fetch(`${API_BASE}/tutor/quiz`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ topic, analysis_id: analysisId }),
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

export async function generateDebate(topic: string, analysisId?: string): Promise<PerspectiveDebateReport> {
  const res = await fetch(`${API_BASE}/debate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ topic, analysis_id: analysisId }),
  });
  if (!res.ok) throw new Error('Failed to generate perspective debate');
  return res.json();
}

export async function generateScenarios(topic: string, analysisId?: string) {
  const res = await fetch(`${API_BASE}/scenarios`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ topic, analysis_id: analysisId }),
  });
  if (!res.ok) throw new Error('Failed to generate scenarios');
  return res.json();
}

export async function generateContradictions(
  topic: string,
  analysisId?: string
): Promise<ContradictionItem[]> {
  const res = await fetch(`${API_BASE}/contradictions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ topic, analysis_id: analysisId }),
  });
  if (!res.ok) throw new Error('Failed to audit contradictions');
  const data = await res.json();
  return data.contradictions || [];
}

export async function chatResearchCopilot(query: string, topic: string, analysisId?: string) {
  const res = await fetch(`${API_BASE}/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, topic, analysis_id: analysisId }),
  });
  if (!res.ok) throw new Error('Research copilot chat failed');
  return res.json();
}

export async function fetchChatHistory(analysisId: string): Promise<ChatMessage[]> {
  const res = await fetch(`${API_BASE}/chat/history/${encodeURIComponent(analysisId)}`);
  if (!res.ok) throw new Error('Failed to load chat history');
  const data = await res.json();
  return data.messages || [];
}

export async function clearChatHistory(analysisId: string): Promise<void> {
  const res = await fetch(`${API_BASE}/chat/history/${encodeURIComponent(analysisId)}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Failed to clear chat history');
}

export async function fetchTopicSuggestions(): Promise<TopicSuggestionsPayload> {
  const res = await fetch(`${API_BASE}/topics/suggestions`);
  if (!res.ok) throw new Error('Failed to load topic suggestions');
  return res.json();
}

export async function refreshTopicSuggestions(): Promise<TopicSuggestionsPayload> {
  const res = await fetch(`${API_BASE}/topics/suggestions/refresh`, {
    method: 'POST',
  });
  if (!res.ok) throw new Error('Failed to refresh topic suggestions');
  return res.json();
}

export async function generateAnalysisArticle(
  payload: ArticleGenerateRequestPayload
): Promise<GeneratedArticleItem> {
  const res = await fetch(`${API_BASE}/analysis/${encodeURIComponent(payload.analysis_id)}/article`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ detail: 'Failed to generate article' }));
    throw new Error(err.detail || 'Article generation failed');
  }
  return res.json();
}

export async function fetchAnalysisArticles(
  analysisId: string
): Promise<GeneratedArticleItem[]> {
  const res = await fetch(`${API_BASE}/analysis/${encodeURIComponent(analysisId)}/articles`);
  if (!res.ok) throw new Error('Failed to fetch articles for this analysis');
  const data = await res.json();
  return data.articles || [];
}

export async function deleteAnalysisArticle(
  analysisId: string,
  articleId: string
): Promise<boolean> {
  const res = await fetch(
    `${API_BASE}/analysis/${encodeURIComponent(analysisId)}/article/${encodeURIComponent(articleId)}`,
    {
      method: 'DELETE',
    }
  );
  if (!res.ok) throw new Error('Failed to delete article');
  const data = await res.json();
  return data.success ?? true;
}

export async function fetchEditorialImagePrompts(
  analysisId: string,
  refresh: boolean = false
): Promise<ImagePromptSuggestion[]> {
  const query = refresh ? '?refresh=true' : '';
  const res = await fetch(`${API_BASE}/analysis/${encodeURIComponent(analysisId)}/image-prompts${query}`, {
    method: 'POST',
  });
  if (!res.ok) throw new Error('Failed to fetch image prompts');
  const data = await res.json();
  return data.prompts || [];
}

export async function generateDossierImage(
  payload: ImageGenerateRequestPayload
): Promise<GeneratedImageItem> {
  const res = await fetch(`${API_BASE}/analysis/${encodeURIComponent(payload.analysis_id)}/generate-image`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ detail: 'Failed to generate image' }));
    throw new Error(err.detail || 'Image generation failed');
  }
  return res.json();
}

export async function fetchDossierImages(
  analysisId: string
): Promise<GeneratedImageItem[]> {
  const res = await fetch(`${API_BASE}/analysis/${encodeURIComponent(analysisId)}/images`);
  if (!res.ok) throw new Error('Failed to fetch images for this analysis');
  const data = await res.json();
  return data.images || [];
}

export async function deleteDossierImage(
  analysisId: string,
  imageId: string
): Promise<boolean> {
  const res = await fetch(
    `${API_BASE}/analysis/${encodeURIComponent(analysisId)}/image/${encodeURIComponent(imageId)}`,
    {
      method: 'DELETE',
    }
  );
  if (!res.ok) throw new Error('Failed to delete image');
  const data = await res.json();
  return data.success ?? true;
}

export async function runEditorialArtPipeline(
  analysisId: string,
  payload?: MultiAgentPipelineRequestPayload
): Promise<{
  analysis_id: string;
  topic: string;
  state: MultiAgentEditorialArtState;
  prompts: ImagePromptSuggestion[];
}> {
  const res = await fetch(`${API_BASE}/analysis/${encodeURIComponent(analysisId)}/editorial-art-pipeline`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload || { analysis_id: analysisId }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ detail: 'Failed to run editorial art pipeline' }));
    throw new Error(err.detail || 'Editorial Art Room pipeline failed');
  }
  return res.json();
}



