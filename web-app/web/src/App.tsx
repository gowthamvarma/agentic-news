import React, { useState, useEffect } from 'react';
import {
  Search,
  ShieldCheck,
  Brain,
  Scale,
  Clock,
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  BookOpen,
  MessageSquare,
  Send,
  RefreshCw,
  ExternalLink,
  BarChart3,
  Layers,
  FileText
} from 'lucide-react';
import {
  analyzeNewsTopic,
  fetchRecentAnalyses,
  generateQuiz,
  gradeQuiz,
  generateDebate,
  chatResearchCopilot,
  checkApiHealth
} from './api';
import type {
  NewsIntelligenceReport,
  QuizPayload,
  PerspectiveDebateReport
} from './types';

export default function App() {
  const [topicInput, setTopicInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<NewsIntelligenceReport | null>(null);
  const [, setRecentRuns] = useState<NewsIntelligenceReport[]>([]);
  const [activeTab, setActiveTab] = useState<'brief' | 'verification' | 'timeline' | 'insights' | 'quiz' | 'debate' | 'copilot'>('brief');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Active Recall Quiz State
  const [quiz, setQuiz] = useState<QuizPayload | null>(null);
  const [quizLoading, setQuizLoading] = useState(false);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [quizResult, setQuizResult] = useState<any | null>(null);

  // Perspective Debate State
  const [debate, setDebate] = useState<PerspectiveDebateReport | null>(null);
  const [debateLoading, setDebateLoading] = useState(false);

  // Research Copilot Chat State
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'agent'; text: string }>>([
    {
      sender: 'agent',
      text: 'Hello! I am your Research Copilot. Ask any follow-up question or request an autonomous investigative deep-dive over verified reporting.'
    }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [chatLoading, setChatLoading] = useState(false);

  // Load initial health & recent analyses
  useEffect(() => {
    checkApiHealth().catch(() => {});
    fetchRecentAnalyses()
      .then((data) => {
        if (data && data.length > 0) {
          setRecentRuns(data);
          // If no active report, load the most recent one
          setReport(data[0]);
        }
      })
      .catch(() => {});
  }, []);

  const handleSearch = async (queryToRun?: string) => {
    const q = (queryToRun || topicInput).trim();
    if (!q) return;

    setLoading(true);
    setErrorMsg(null);
    setQuiz(null);
    setDebate(null);
    setQuizResult(null);
    setUserAnswers({});

    try {
      const data = await analyzeNewsTopic(q);
      setReport(data);
      setTopicInput(q);
      setActiveTab('brief');
      // Refresh recent runs
      fetchRecentAnalyses().then(setRecentRuns).catch(() => {});
    } catch (err: any) {
      setErrorMsg(err.message || 'An unexpected error occurred while analyzing this news topic.');
    } finally {
      setLoading(false);
    }
  };

  const handleLoadQuiz = async () => {
    if (!report) return;
    setQuizLoading(true);
    try {
      const data = await generateQuiz(report.topic);
      setQuiz(data);
      setQuizResult(null);
      setUserAnswers({});
    } catch (err: any) {
      console.error(err);
    } finally {
      setQuizLoading(false);
    }
  };

  const handleGradeQuiz = async () => {
    if (!quiz) return;
    try {
      const res = await gradeQuiz(quiz.quiz_id, userAnswers);
      setQuizResult(res);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLoadDebate = async () => {
    if (!report) return;
    setDebateLoading(true);
    try {
      const data = await generateDebate(report.topic);
      setDebate(data);
    } catch (err) {
      console.error(err);
    } finally {
      setDebateLoading(false);
    }
  };

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!chatInput.trim() || chatLoading) return;

    const userText = chatInput.trim();
    setChatMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setChatInput('');
    setChatLoading(true);

    try {
      const res = await chatResearchCopilot(userText, report ? report.topic : 'General News');
      setChatMessages((prev) => [...prev, { sender: 'agent', text: res.response }]);
    } catch (err: any) {
      setChatMessages((prev) => [
        ...prev,
        { sender: 'agent', text: 'Error connecting to Research Copilot: ' + err.message }
      ]);
    } finally {
      setChatLoading(false);
    }
  };

  const quickTopics = [
    'U.S. Administration Halting PERM Program for Tech Companies H-1B',
    'NASA Artemis Moon Mission Schedule Revisions',
    'Global Clean Energy Subsidies & Tariff Accords',
    'Central Bank Interest Rate Outlook & Liquidity Risks'
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <header className="app-header">
        <div className="app-container header-content">
          <div className="brand-badge">
            <div className="brand-icon-box">
              <Brain size={24} />
            </div>
            <div>
              <div className="brand-title">Agentic News Analyser</div>
              <div className="brand-subtitle">25-Agent Autonomous Intelligence Platform • Google ADK & Gemini</div>
            </div>
          </div>
          <div className="nav-status">
            <span className="status-dot"></span>
            <span>Firestore Live Sync Active</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="app-container">
          <div className="hero-pill">
            <Sparkles size={16} />
            <span>Google Cloud AI Builder Cup 2026 Submission</span>
          </div>
          <h1 className="hero-heading">
            Autonomous Multi-Agent <br />
            Media Intelligence & Verification
          </h1>
          <p className="hero-desc">
            Forensic cross-source auditing under IFCN principles, contradiction detection, chronological narrative evolution, and causal consequence modeling.
          </p>

          <div className="search-box-wrapper">
            <div className="search-input-group">
              <Search size={22} color="#64748b" />
              <input
                type="text"
                className="search-input"
                placeholder="Enter breaking event, headline, or policy topic..."
                value={topicInput}
                onChange={(e) => setTopicInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                disabled={loading}
              />
              <button
                className="search-btn"
                onClick={() => handleSearch()}
                disabled={loading || !topicInput.trim()}
              >
                {loading ? (
                  <>
                    <RefreshCw size={18} className="animate-spin" />
                    <span>Analyzing Fleet...</span>
                  </>
                ) : (
                  <>
                    <Sparkles size={18} />
                    <span>Run Fleet (25 Agents)</span>
                  </>
                )}
              </button>
            </div>

            <div className="suggestions-row">
              <span style={{ fontWeight: 600 }}>Suggested Topics:</span>
              {quickTopics.map((qt, idx) => (
                <button
                  key={idx}
                  className="suggestion-chip"
                  onClick={() => handleSearch(qt)}
                  disabled={loading}
                >
                  {qt}
                </button>
              ))}
            </div>
          </div>

          {errorMsg && (
            <div style={{ marginTop: '20px', padding: '12px 18px', background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.4)', borderRadius: '10px', color: '#f87171', display: 'inline-block' }}>
              <AlertTriangle size={18} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
              {errorMsg}
            </div>
          )}
        </div>
      </section>

      {/* Main Content Area */}
      {report && (
        <main className="app-container" style={{ flex: 1, paddingBottom: '60px' }}>
          {/* Navigation Tabs */}
          <div className="tabs-nav-bar">
            <button
              className={`tab-btn ${activeTab === 'brief' ? 'active' : ''}`}
              onClick={() => setActiveTab('brief')}
            >
              <FileText size={18} />
              <span>Executive Brief & Primer</span>
            </button>
            <button
              className={`tab-btn ${activeTab === 'verification' ? 'active' : ''}`}
              onClick={() => setActiveTab('verification')}
            >
              <ShieldCheck size={18} />
              <span>Fact Checks & Bias ({report.verifications?.length || 0})</span>
            </button>
            <button
              className={`tab-btn ${activeTab === 'timeline' ? 'active' : ''}`}
              onClick={() => setActiveTab('timeline')}
            >
              <Clock size={18} />
              <span>Chronological Timeline ({report.timeline?.events?.length || 0})</span>
            </button>
            <button
              className={`tab-btn ${activeTab === 'insights' ? 'active' : ''}`}
              onClick={() => setActiveTab('insights')}
            >
              <TrendingUp size={18} />
              <span>Causal Diagnostics & Scenarios</span>
            </button>
            <button
              className={`tab-btn ${activeTab === 'quiz' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('quiz');
                if (!quiz) handleLoadQuiz();
              }}
            >
              <BookOpen size={18} />
              <span>Active Recall Tutor (MCQs)</span>
            </button>
            <button
              className={`tab-btn ${activeTab === 'debate' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('debate');
                if (!debate) handleLoadDebate();
              }}
            >
              <Scale size={18} />
              <span>Perspective Debate</span>
            </button>
            <button
              className={`tab-btn ${activeTab === 'copilot' ? 'active' : ''}`}
              onClick={() => setActiveTab('copilot')}
            >
              <MessageSquare size={18} />
              <span>Research Copilot Chat</span>
            </button>
          </div>

          {/* TAB 1: EXECUTIVE BRIEF */}
          {activeTab === 'brief' && (
            <div className="dashboard-grid">
              {/* Executive Summary Card */}
              <div className="card" style={{ gridColumn: 'span 12' }}>
                <div className="card-title-row">
                  <div className="card-title">
                    <FileText size={22} color="#60a5fa" />
                    <span>Executive Intelligence Brief: {report.topic}</span>
                  </div>
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                    Audited across {report.sources_analyzed?.length || 6} major wire & investigative outlets
                  </span>
                </div>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#e2e8f0', marginBottom: '20px' }}>
                  {report.executive_summary}
                </p>

                {/* Key Numbers Dashboard (F19) */}
                <div style={{ marginTop: '20px' }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#38bdf8', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Key Numbers & Statistical Baseline (F19)
                  </div>
                  <div className="metric-pills-grid">
                    {report.key_metrics_and_numbers?.map((metric, idx) => (
                      <div key={idx} className="metric-pill-item">
                        <BarChart3 size={18} color="#38bdf8" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Consensus Points (F3) */}
              <div className="card" style={{ gridColumn: 'span 6' }}>
                <div className="card-title-row">
                  <div className="card-title">
                    <CheckCircle2 size={22} color="#34d399" />
                    <span>High-Confidence Consensus Points</span>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {report.consensus_points?.map((pt, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <CheckCircle2 size={18} color="#34d399" style={{ flexShrink: 0, marginTop: '4px' }} />
                      <div style={{ fontSize: '0.95rem', color: '#e2e8f0' }}>{pt}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sources Analyzed */}
              <div className="card" style={{ gridColumn: 'span 6' }}>
                <div className="card-title-row">
                  <div className="card-title">
                    <Layers size={22} color="#a78bfa" />
                    <span>Analyzed Source Outlets</span>
                  </div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {report.sources_analyzed?.map((src, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: 'rgba(30, 41, 59, 0.7)',
                        border: '1px solid #334155',
                        padding: '8px 14px',
                        borderRadius: '8px',
                        fontSize: '0.85rem',
                        color: '#cbd5e1',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <ExternalLink size={14} color="#94a3b8" />
                      <span>{src}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Full Autonomous Multi-Agent Synthesis Brief (Markdown) */}
              {report.raw_markdown && (
                <div className="card" style={{ gridColumn: 'span 12' }}>
                  <div className="card-title-row">
                    <div className="card-title">
                      <Sparkles size={22} color="#38bdf8" />
                      <span>Full Multi-Agent Intelligence Synthesis (Live Gemini Pro Brief)</span>
                    </div>
                  </div>
                  <div
                    style={{
                      background: 'rgba(15, 23, 42, 0.8)',
                      padding: '24px',
                      borderRadius: '12px',
                      border: '1px solid #334155',
                      whiteSpace: 'pre-wrap',
                      fontFamily: 'inherit',
                      fontSize: '0.95rem',
                      lineHeight: '1.7',
                      color: '#cbd5e1',
                      maxHeight: '600px',
                      overflowY: 'auto'
                    }}
                  >
                    {report.raw_markdown}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: VERIFICATION & BIAS */}
          {activeTab === 'verification' && (
            <div className="dashboard-grid">
              {/* Fact Verifications (F6) */}
              <div className="card" style={{ gridColumn: 'span 12' }}>
                <div className="card-title-row">
                  <div className="card-title">
                    <ShieldCheck size={22} color="#34d399" />
                    <span>IFCN Forensic Claim Verification Audit (F6)</span>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {report.verifications?.map((v) => (
                    <div
                      key={v.claim_id}
                      style={{
                        background: 'rgba(15, 23, 42, 0.7)',
                        border: '1px solid #334155',
                        borderRadius: '12px',
                        padding: '18px'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                        <span style={{ fontWeight: 700, color: '#94a3b8', fontSize: '0.85rem' }}>
                          Claim {v.claim_id}
                        </span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                            Confidence: {Math.round(v.confidence * 100)}%
                          </span>
                          <span className={`status-badge ${v.status.toLowerCase()}`}>
                            {v.status}
                          </span>
                        </div>
                      </div>
                      <div style={{ fontSize: '1rem', fontWeight: 600, color: '#f8fafc', marginBottom: '8px' }}>
                        "{v.claim_text}"
                      </div>
                      <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: '1.5', marginBottom: '10px' }}>
                        {v.reasoning}
                      </p>
                      <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                        <strong>Corroborating:</strong> {v.corroborating_sources?.join(', ') || 'Primary Records'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contradictions (F7) */}
              <div className="card" style={{ gridColumn: 'span 12' }}>
                <div className="card-title-row">
                  <div className="card-title">
                    <AlertTriangle size={22} color="#fbbf24" />
                    <span>Cross-Source Contradictions (Side-by-Side Comparison) (F7)</span>
                  </div>
                </div>
                {report.contradictions?.map((c) => (
                  <div key={c.contradiction_id} className="contradiction-box">
                    <div className="contradiction-header">
                      <AlertTriangle size={18} />
                      <span>{c.topic_aspect} ({c.divergence_type})</span>
                    </div>
                    <div className="compare-grid">
                      <div className="compare-column">
                        <div className="compare-outlet">{c.outlet_a}</div>
                        <div className="compare-text">"{c.claim_a}"</div>
                      </div>
                      <div className="compare-column col-b">
                        <div className="compare-outlet">{c.outlet_b}</div>
                        <div className="compare-text">"{c.claim_b}"</div>
                      </div>
                    </div>
                    <div className="contradiction-analysis">
                      <strong>Evidentiary Audit:</strong> {c.analysis}
                    </div>
                  </div>
                ))}
              </div>

              {/* Political Lean & Framing (F8) */}
              <div className="card" style={{ gridColumn: 'span 12' }}>
                <div className="card-title-row">
                  <div className="card-title">
                    <Scale size={22} color="#c084fc" />
                    <span>Media Framing & Political Lean Spectrum (F8)</span>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
                  {report.bias_evaluations?.map((b, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: 'rgba(15, 23, 42, 0.7)',
                        border: '1px solid #334155',
                        borderRadius: '12px',
                        padding: '16px'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <span style={{ fontWeight: 700, color: 'white', fontSize: '0.95rem' }}>{b.outlet}</span>
                        <span style={{ fontSize: '0.75rem', fontWeight: 600, background: 'rgba(99, 102, 241, 0.2)', color: '#818cf8', padding: '3px 8px', borderRadius: '4px' }}>
                          {b.assessed_lean}
                        </span>
                      </div>
                      <p style={{ fontSize: '0.88rem', color: '#cbd5e1', marginBottom: '10px' }}>
                        {b.framing_narrative}
                      </p>
                      {b.loaded_terms_identified?.length > 0 && (
                        <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                          <span style={{ color: '#fbbf24' }}>Loaded Language:</span> {b.loaded_terms_identified.join(', ')}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: TIMELINE */}
          {activeTab === 'timeline' && (
            <div className="card" style={{ width: '100%' }}>
              <div className="card-title-row">
                <div className="card-title">
                  <Clock size={22} color="#38bdf8" />
                  <span>Chronological Event Timeline & Narrative Evolution (F2, F29)</span>
                </div>
              </div>

              {report.timeline?.narrative_evolution_summary && (
                <div style={{ background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.3)', borderRadius: '10px', padding: '14px 18px', color: '#bae6fd', marginBottom: '24px', fontSize: '0.95rem' }}>
                  <strong>Narrative Shift Synthesis:</strong> {report.timeline.narrative_evolution_summary}
                </div>
              )}

              <div className="timeline-track">
                {report.timeline?.events?.map((ev, idx) => (
                  <div key={idx} className="timeline-item">
                    <div className="timeline-time">{ev.timestamp_or_date}</div>
                    <div className="timeline-headline">{ev.headline}</div>
                    <div className="timeline-desc">{ev.description}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Outlet: {ev.source_outlet}</span>
                      {ev.narrative_shift && (
                        <span className="narrative-shift-badge">Shift: {ev.narrative_shift}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: DEEP INSIGHTS & SCENARIOS */}
          {activeTab === 'insights' && (
            <div className="dashboard-grid">
              {/* Root Cause Diagnostics */}
              <div className="card" style={{ gridColumn: 'span 6' }}>
                <div className="card-title-row">
                  <div className="card-title">
                    <Brain size={22} color="#f43f5e" />
                    <span>Root Cause Diagnostics (F34)</span>
                  </div>
                </div>
                <div style={{ marginBottom: '14px' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fda4af', marginBottom: '6px' }}>Immediate Triggers</div>
                  {report.root_cause_analysis?.immediate_triggers?.map((trig, idx) => (
                    <div key={idx} style={{ fontSize: '0.9rem', color: '#e2e8f0', marginBottom: '4px' }}>• {trig}</div>
                  ))}
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fda4af', marginBottom: '6px' }}>Structural Failure Points</div>
                  {report.root_cause_analysis?.structural_failure_points?.map((sf, idx) => (
                    <div key={idx} style={{ fontSize: '0.9rem', color: '#e2e8f0', marginBottom: '4px' }}>• {sf}</div>
                  ))}
                </div>
              </div>

              {/* Consequences Tree */}
              <div className="card" style={{ gridColumn: 'span 6' }}>
                <div className="card-title-row">
                  <div className="card-title">
                    <TrendingUp size={22} color="#3b82f6" />
                    <span>3-Tier Consequences Tree (F35)</span>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {report.consequences_tree?.map((cq, idx) => (
                    <div key={idx} style={{ background: 'rgba(15, 23, 42, 0.7)', padding: '12px 14px', borderRadius: '8px', borderLeft: '3px solid #3b82f6' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#93c5fd', textTransform: 'uppercase' }}>
                        {cq.order.replace('_', ' ')}: {cq.affected_sector_or_group}
                      </div>
                      <div style={{ fontSize: '0.9rem', color: '#e2e8f0', marginTop: '4px' }}>
                        {cq.impact_description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Forward Scenarios */}
              <div className="card" style={{ gridColumn: 'span 12' }}>
                <div className="card-title-row">
                  <div className="card-title">
                    <Sparkles size={22} color="#a855f7" />
                    <span>Forward-Looking Scenarios & Signals to Watch (F15)</span>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
                  {report.future_scenarios?.map((sc, idx) => (
                    <div key={idx} style={{ background: 'rgba(15, 23, 42, 0.7)', border: '1px solid #334155', borderRadius: '12px', padding: '18px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <span style={{ fontWeight: 700, color: 'white', fontSize: '1rem' }}>{sc.scenario_title}</span>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, background: 'rgba(168, 85, 247, 0.2)', color: '#c084fc', padding: '3px 8px', borderRadius: '4px' }}>
                          {sc.probability_rating} PROBABILITY
                        </span>
                      </div>
                      <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: '1.5', marginBottom: '12px' }}>
                        {sc.potential_impact}
                      </p>
                      {sc.signals_to_watch && sc.signals_to_watch.length > 0 && (
                        <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                          <strong style={{ color: '#38bdf8' }}>Signals to Watch:</strong>
                          <ul style={{ paddingLeft: '16px', marginTop: '4px' }}>
                            {sc.signals_to_watch.map((sig, sidx) => (
                              <li key={sidx}>{sig}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: ACTIVE RECALL QUIZ */}
          {activeTab === 'quiz' && (
            <div className="card" style={{ width: '100%' }}>
              <div className="card-title-row">
                <div className="card-title">
                  <BookOpen size={22} color="#34d399" />
                  <span>Active Recall & News Literacy Tutor (F20)</span>
                </div>
                <button
                  className="suggestion-chip"
                  onClick={handleLoadQuiz}
                  disabled={quizLoading}
                >
                  <RefreshCw size={14} style={{ marginRight: '6px' }} />
                  Regenerate Quiz
                </button>
              </div>

              {quizLoading ? (
                <div style={{ padding: '40px', textAlign: 'center', color: '#94a3b8' }}>
                  <RefreshCw size={24} className="animate-spin" style={{ margin: '0 auto 12px auto' }} />
                  <div>Generating pedagogical comprehension questions...</div>
                </div>
              ) : quiz ? (
                <div>
                  {quiz.questions?.map((q) => {
                    const selected = userAnswers[q.question_id];
                    const graded = quizResult?.feedback?.find((f: any) => f.question_id === q.question_id);

                    return (
                      <div key={q.question_id} className="quiz-question-box">
                        <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#f8fafc', marginBottom: '12px' }}>
                          Question {q.question_id}: {q.question}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          {q.options.map((opt, optIdx) => {
                            let optClass = 'quiz-option';
                            if (selected === optIdx) optClass += ' selected';
                            if (graded) {
                              if (optIdx === q.correct_option_index) optClass += ' correct';
                              else if (selected === optIdx && !graded.correct) optClass += ' incorrect';
                            }

                            return (
                              <div
                                key={optIdx}
                                className={optClass}
                                onClick={() => {
                                  if (!quizResult) {
                                    setUserAnswers((prev) => ({ ...prev, [q.question_id]: optIdx }));
                                  }
                                }}
                              >
                                <span style={{ fontWeight: 700, width: '24px' }}>
                                  {String.fromCharCode(65 + optIdx)})
                                </span>
                                <span style={{ flex: 1 }}>{opt}</span>
                              </div>
                            );
                          })}
                        </div>
                        {graded && (
                          <div style={{ marginTop: '12px', padding: '10px 14px', background: graded.correct ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)', borderRadius: '8px', fontSize: '0.88rem', color: graded.correct ? '#34d399' : '#f87171' }}>
                            <strong>{graded.correct ? 'Correct! ' : 'Incorrect. '}</strong>
                            {graded.explanation}
                          </div>
                        )}
                      </div>
                    );
                  })}

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '24px' }}>
                    {quizResult ? (
                      <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#38bdf8' }}>
                        Your Score: {quizResult.score_percentage}% ({quizResult.correct_count} of {quizResult.total_questions} correct)
                      </div>
                    ) : (
                      <button
                        className="search-btn"
                        onClick={handleGradeQuiz}
                        disabled={Object.keys(userAnswers).length === 0}
                      >
                        Submit & Grade Answers
                      </button>
                    )}
                  </div>
                </div>
              ) : null}
            </div>
          )}

          {/* TAB 6: PERSPECTIVE DEBATE */}
          {activeTab === 'debate' && (
            <div className="card" style={{ width: '100%' }}>
              <div className="card-title-row">
                <div className="card-title">
                  <Scale size={22} color="#fbbf24" />
                  <span>Dialectical Perspective Debate Simulator (F38)</span>
                </div>
              </div>

              {debateLoading ? (
                <div style={{ padding: '40px', textAlign: 'center', color: '#94a3b8' }}>
                  <RefreshCw size={24} className="animate-spin" style={{ margin: '0 auto 12px auto' }} />
                  <div>Synthesizing steelmanned opposing viewpoints...</div>
                </div>
              ) : debate ? (
                <div>
                  <div style={{ background: 'rgba(251, 191, 36, 0.1)', border: '1px solid rgba(251, 191, 36, 0.3)', borderRadius: '10px', padding: '16px', color: '#fde68a', marginBottom: '24px', fontSize: '1rem', fontStyle: 'italic' }}>
                    <strong>Resolution Under Debate:</strong> {debate.resolution_under_debate}
                  </div>

                  {debate.debate_turns?.map((turn, idx) => {
                    const isPro = turn.speaker_perspective.includes('PROPONENT');
                    return (
                      <div key={idx} className={`debate-turn-card ${isPro ? 'proponent' : 'critic'}`}>
                        <div className={`debate-speaker ${isPro ? 'proponent' : 'critic'}`}>
                          {turn.speaker_perspective}
                        </div>
                        <div style={{ fontSize: '0.95rem', color: '#f1f5f9', lineHeight: '1.6', marginBottom: '8px' }}>
                          {turn.core_argument}
                        </div>
                        {turn.grounding_citations?.length > 0 && (
                          <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                            <strong>Evidence Grounding:</strong> {turn.grounding_citations.join(' • ')}
                          </div>
                        )}
                      </div>
                    );
                  })}

                  <div style={{ marginTop: '24px', background: 'rgba(30, 41, 59, 0.7)', border: '1px solid #334155', borderRadius: '12px', padding: '18px' }}>
                    <div style={{ fontWeight: 700, color: '#38bdf8', marginBottom: '8px' }}>
                      Neutral Compromise Synthesis & Policy Bridge
                    </div>
                    <p style={{ fontSize: '0.92rem', color: '#cbd5e1', lineHeight: '1.6' }}>
                      {debate.neutral_compromise_synthesis}
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
          )}

          {/* TAB 7: RESEARCH COPILOT CHAT */}
          {activeTab === 'copilot' && (
            <div className="card" style={{ width: '100%', display: 'flex', flexDirection: 'column', height: '650px' }}>
              <div className="card-title-row">
                <div className="card-title">
                  <MessageSquare size={22} color="#3b82f6" />
                  <span>Research Copilot & Autonomous Investigation (F21, F39)</span>
                </div>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                  Session Grounded in Topic: {report.topic}
                </span>
              </div>

              {/* Chat Message History */}
              <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '14px', paddingRight: '8px', marginBottom: '16px' }}>
                {chatMessages.map((msg, idx) => (
                  <div
                    key={idx}
                    style={{
                      alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                      maxWidth: '80%',
                      background: msg.sender === 'user' ? '#2563eb' : 'rgba(30, 41, 59, 0.8)',
                      color: 'white',
                      padding: '12px 18px',
                      borderRadius: '14px',
                      fontSize: '0.95rem',
                      lineHeight: '1.5',
                      whiteSpace: 'pre-wrap'
                    }}
                  >
                    {msg.text}
                  </div>
                ))}
                {chatLoading && (
                  <div style={{ alignSelf: 'flex-start', background: 'rgba(30, 41, 59, 0.8)', padding: '12px 18px', borderRadius: '14px', color: '#94a3b8' }}>
                    Investigating sources and primary filings...
                  </div>
                )}
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSendMessage} style={{ display: 'flex', gap: '10px' }}>
                <input
                  type="text"
                  className="search-input"
                  style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', borderRadius: '10px', padding: '12px 16px' }}
                  placeholder="Ask a question or enter 'investigate grandfathering provisions'..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  disabled={chatLoading}
                />
                <button
                  type="submit"
                  className="search-btn"
                  disabled={chatLoading || !chatInput.trim()}
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          )}
        </main>
      )}

      {/* Footer */}
      <footer className="app-footer">
        <div className="app-container">
          Agentic News Analyser • Built with Google Agent Development Kit (ADK) & Google Gemini • Powered by Cloud Firestore & Firebase
        </div>
      </footer>
    </div>
  );
}
