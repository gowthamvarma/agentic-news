export interface SourceArticle {
  url: string;
  title: string;
  outlet: string;
  published_date?: string;
  content: string;
  author?: string;
  country?: string;
  country_code?: string;
  flag?: string;
  editorial_lean?: string;
  reliability_tier?: string;
}

export interface EntityPrimer {
  entity_name: string;
  entity_type: 'PERSON' | 'ORGANIZATION' | 'LOCATION' | 'CONCEPT' | 'EVENT';
  role_or_title?: string;
  explainer_2_lines: string;
  historical_context?: string;
  wikipedia_url?: string;
  image_url?: string;
}

export interface ContextPrimerPayload {
  topic: string;
  primer_items: EntityPrimer[];
  jargon_definitions: Record<string, string>;
  background_story: string;
}

export interface ClaimVerification {
  claim_id: string;
  claim_text: string;
  status: 'VERIFIED' | 'DISPUTED' | 'UNVERIFIED' | 'FALSE' | 'MISLEADING';
  confidence: number;
  reasoning: string;
  corroborating_sources: string[];
  conflicting_sources: string[];
}

export interface ContradictionItem {
  contradiction_id: string;
  topic_aspect: string;
  outlet_a: string;
  claim_a: string;
  outlet_b: string;
  claim_b: string;
  divergence_type: string;
  analysis: string;
}

export interface BiasEvaluation {
  outlet: string;
  assessed_lean: 'Far Left' | 'Left' | 'Center Left' | 'Center' | 'Center Right' | 'Right' | 'Far Right' | 'Unknown';
  loaded_terms_identified: string[];
  framing_narrative: string;
  omitted_context?: string | null;
}

export interface TimelineEvent {
  timestamp_or_date: string;
  headline: string;
  description: string;
  source_outlet: string;
  source_url?: string;
  narrative_shift?: string;
  is_recent?: boolean;
}

export interface TimelinePayload {
  topic: string;
  events: TimelineEvent[];
  narrative_evolution_summary: string;
}

export interface ConsequenceNode {
  order: 'FIRST_ORDER' | 'SECOND_ORDER' | 'THIRD_ORDER';
  impact_description: string;
  affected_sector_or_group: string;
}

export interface FutureScenario {
  scenario_title: string;
  scenario_type: 'BEST_CASE' | 'MOST_LIKELY' | 'WORST_CASE';
  probability_rating: 'HIGH' | 'MODERATE' | 'LOW';
  time_horizon: string;
  potential_impact: string;
  signals_to_watch?: string[];
  what_if_assumption?: string | null;
}

export interface LessonItem {
  lesson_takeaway: string;
  target_audience: 'INDIVIDUALS' | 'ORGANISATIONS' | 'POLICYMAKERS';
  concrete_preventive_action: string;
}

export interface NewsIntelligenceReport {
  id?: string;
  analysis_id?: string;
  topic: string;
  executive_summary: string;
  key_metrics_and_numbers: string[];
  consensus_points: string[];
  timeline?: TimelinePayload;
  contradictions: ContradictionItem[];
  verifications: ClaimVerification[];
  bias_evaluations: BiasEvaluation[];
  bias_landscape?: any;
  root_cause_analysis?: {
    immediate_triggers: string[];
    underlying_systemic_factors: string[];
    structural_failure_points: string[];
  };
  consequences_tree: ConsequenceNode[];
  future_scenarios: FutureScenario[];
  lessons_learned: LessonItem[];
  sources_analyzed: string[];
  context_primer?: ContextPrimerPayload;
  articles_analyzed?: SourceArticle[];
  evidence_ledger?: Array<{
    timestamp: number;
    tool: string;
    args: Record<string, any>;
    status: string;
  }>;
  created_at?: number;
  execution_time_seconds?: number;
  raw_markdown?: string;
  is_favorite?: boolean;
  status?: 'generating' | 'partial' | 'completed' | 'error';
  available_sections?: string[];
  quiz?: QuizPayload;
  debate?: PerspectiveDebateReport;
  chat_history?: ChatMessage[];
  generated_articles?: GeneratedArticleItem[];
  generated_images?: GeneratedImageItem[];
  image_prompts?: ImagePromptSuggestion[];
}

export interface ChatMessage {
  id?: string;
  sender: 'user' | 'agent';
  text: string;
  time?: string;
  timestamp?: number;
}

export interface AnalysisArchiveItem {
  id: string;
  topic: string;
  executive_summary?: string;
  created_at: number;
  updated_at?: number;
  is_favorite: boolean;
  status?: string;
  articles_analyzed?: any[];
  sources_analyzed?: string[];
  verifications?: any[];
}

export interface PaginatedAnalysesResponse {
  items: AnalysisArchiveItem[];
  total: number;
  limit: number;
  offset: number;
}

export interface QuizQuestion {
  question_id: number;
  question: string;
  options: string[];
  correct_option_index: number;
  explanation: string;
  citation_source?: string;
}

export interface QuizPayload {
  quiz_id: string;
  topic: string;
  questions: QuizQuestion[];
}

export interface PerspectiveDebateTurn {
  speaker_perspective: 'PROPONENT / ADVOCATE' | 'CRITIC / OPPONENT';
  core_argument: string;
  grounding_citations: string[];
}

export interface PerspectiveDebateReport {
  debate_id: string;
  topic: string;
  resolution_under_debate: string;
  debate_turns: PerspectiveDebateTurn[];
  neutral_compromise_synthesis: string;
}

export interface TopicSuggestionItem {
  id: string;
  topic: string;
  summary: string;
  category: string;
  badge: string;
  badge_color?: string;
  source_headline?: string;
  source_outlet?: string;
  url?: string;
}

export interface CountryTopicGroup {
  code: string;
  name: string;
  flag: string;
  topics: TopicSuggestionItem[];
}

export interface TopicSuggestionsPayload {
  id: string;
  created_at: number;
  created_at_iso?: string;
  updated_at: number;
  expires_at?: number;
  cache_duration_seconds?: number;
  is_stale?: boolean;
  age_seconds?: number;
  countries: CountryTopicGroup[];
}

export type ArticleStyleId =
  | 'investigative'
  | 'wire_dispatch'
  | 'executive_brief'
  | 'op_ed'
  | 'explainer_eli5'
  | 'academic_essay'
  | 'newsletter';

export type ArticleLengthId = 'flash' | 'standard' | 'longform' | 'custom';

export interface SocialPublishingKit {
  headline_variants: string[];
  seo_meta_description: string;
  social_thread: string[];
  key_takeaways: string[];
}

export interface GeneratedArticleItem {
  id: string;
  analysis_id: string;
  topic: string;
  headline: string;
  subheadline?: string;
  content_markdown: string;
  writing_style: ArticleStyleId | string;
  target_length: ArticleLengthId | string;
  word_count: number;
  reading_time_minutes: number;
  language: string;
  editorial_framing: string;
  social_kit?: SocialPublishingKit;
  created_at: number;
  created_at_iso: string;
  updated_at?: number;
}

export interface ArticleGenerateRequestPayload {
  analysis_id: string;
  writing_style?: ArticleStyleId | string;
  target_length?: ArticleLengthId | string;
  custom_word_count?: number;
  language?: string;
  editorial_framing?: string;
  include_social_kit?: boolean;
}

export interface ImagePromptSuggestion {
  concept_title: string;
  style_name: string;
  prompt_text: string;
  recommended_aspect_ratio: '16:9' | '1:1' | '4:3' | '9:16' | string;
}

export interface GeneratedImageItem {
  id: string;
  analysis_id: string;
  article_id?: string;
  prompt: string;
  style: string;
  aspect_ratio: string;
  image_url: string;
  gcs_uri?: string;
  model: string;
  created_at: number;
  created_at_iso: string;
}

export interface ImageGenerateRequestPayload {
  analysis_id: string;
  prompt: string;
  style?: string;
  aspect_ratio?: string;
  negative_prompt?: string;
  article_id?: string;
}

export type AnalysisTabId =
  | 'brief'
  | 'sources'
  | 'verification'
  | 'timeline'
  | 'insights'
  | 'quiz'
  | 'debate'
  | 'copilot'
  | 'article'
  | 'image';

export interface AnalysisTabMeta {
  id: AnalysisTabId;
  label: string;
  shortLabel: string;
}

export const ANALYSIS_TABS: AnalysisTabMeta[] = [
  { id: 'brief', label: 'Executive Intelligence Brief', shortLabel: 'Brief' },
  { id: 'sources', label: 'Verified Sources & Outlets', shortLabel: 'Sources' },
  { id: 'verification', label: 'Fact Checks & Contradictions', shortLabel: 'Fact Checks' },
  { id: 'timeline', label: 'Chronological Timeline', shortLabel: 'Timeline' },
  { id: 'insights', label: 'Root Causes & Future Scenarios', shortLabel: 'Scenarios' },
  { id: 'quiz', label: 'Active Recall Literacy Tutor', shortLabel: 'Recall Tutor' },
  { id: 'debate', label: 'Perspective Debate Simulator', shortLabel: 'Debate' },
  { id: 'copilot', label: 'Autonomous Research Copilot', shortLabel: 'Copilot' },
  { id: 'article', label: 'On-Demand Article Studio', shortLabel: 'Article Studio' },
  { id: 'image', label: 'On-Demand Image Studio', shortLabel: 'Image Studio' },
];

