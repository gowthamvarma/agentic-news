export interface SourceArticle {
  url: string;
  title: string;
  outlet: string;
  published_date?: string;
  content: string;
  author?: string;
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
  analysis_id?: string;
  topic: string;
  executive_summary: string;
  key_metrics_and_numbers: string[];
  consensus_points: string[];
  timeline?: TimelinePayload;
  contradictions: ContradictionItem[];
  verifications: ClaimVerification[];
  bias_evaluations: BiasEvaluation[];
  root_cause_analysis?: {
    immediate_triggers: string[];
    underlying_systemic_factors: string[];
    structural_failure_points: string[];
  };
  consequences_tree: ConsequenceNode[];
  future_scenarios: FutureScenario[];
  lessons_learned: LessonItem[];
  sources_analyzed: string[];
  evidence_ledger?: Array<{
    timestamp: number;
    tool: string;
    args: Record<string, any>;
    status: string;
  }>;
  created_at?: number;
  raw_markdown?: string;
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
