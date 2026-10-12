import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Search,
  Sparkles,
  Brain,
  History,
  ShieldCheck,
  Scale,
  Clock,
  TrendingUp,
  AlertTriangle,
  ArrowRight
} from 'lucide-react';
import {
  analyzeNewsTopic,
  analyzeNewsTopicProgressive,
  fetchRecentAnalyses,
  checkApiHealth
} from '../api';
import type { NewsIntelligenceReport } from '../types';
import { useToast } from '../context/ToastContext';

const FLEET_STAGES = [
  { title: 'Stage 1: Multi-Outlet Ingestion', short: 'Ingestion', desc: 'Querying Google News RSS, Associated Press, Reuters, Bloomberg, WSJ...' },
  { title: 'Stage 2: IFCN Forensic Claim Verification', short: 'Claim Audit', desc: 'Auditing assertions against primary records, federal registers & court dockets...' },
  { title: 'Stage 3: Cross-Source Contradictions & Bias', short: 'Contradictions', desc: 'Detecting conflicting figures and charting ideological lean spectrums...' },
  { title: 'Stage 4: Chronological Timeline Reconstruction', short: 'Timeline', desc: 'Aligning exact calendar dates, milestones, and narrative trajectory shifts...' },
  { title: 'Stage 5: Who/Where/What Primer & Jargon Buster', short: 'Primers', desc: 'Compiling entity background primers, institutional backdrops, and legal glossaries...' }
];

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();

  const [topicInput, setTopicInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingStage, setLoadingStage] = useState(0);
  const [streamStatus, setStreamStatus] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [recentAnalyses, setRecentAnalyses] = useState<NewsIntelligenceReport[]>([]);
  const [recentLoading, setRecentLoading] = useState(true);

  // Stage progress animation timer while loading
  useEffect(() => {
    let interval: any;
    if (loading) {
      setLoadingStage(0);
      interval = setInterval(() => {
        setLoadingStage((prev) => (prev < FLEET_STAGES.length - 1 ? prev + 1 : prev));
      }, 2400);
    }
    return () => clearInterval(interval);
  }, [loading]);

  // Load initial health & recent analyses
  useEffect(() => {
    checkApiHealth().catch(() => {});
    fetchRecentAnalyses()
      .then((data) => {
        if (data && data.length > 0) {
          setRecentAnalyses(data);
        }
      })
      .catch((err) => {
        console.warn('Could not load recent analyses:', err);
      })
      .finally(() => {
        setRecentLoading(false);
      });
  }, []);

  const handleSearch = async (queryToRun?: string) => {
    const q = (queryToRun || topicInput).trim();
    if (!q) return;

    setErrorMsg(null);
    setLoading(true);
    setStreamStatus('Deploying 25 Autonomous ADK Agents...');

    try {
      let finalReport: NewsIntelligenceReport | null = null;

      await analyzeNewsTopicProgressive(q, (eventType, data) => {
        if (eventType === 'init') {
          setStreamStatus('Stage 1: Multi-Outlet Ingestion & Executive Brief compiling...');
        } else if (eventType === 'step_brief') {
          setStreamStatus('Stage 2: Auditing IFCN forensic fact-checks & bias...');
        } else if (eventType === 'step_verification') {
          setStreamStatus('Stage 3: Reconstructing chronological timeline...');
        } else if (eventType === 'step_timeline') {
          setStreamStatus('Finalizing intelligence payload in Firestore...');
        } else if (eventType === 'complete') {
          finalReport = data;
          showToast('Intelligence Report successfully generated!');
          const targetId = data.id || data.analysis_id;
          if (targetId) {
            navigate(`/analysis/${targetId}`, { state: { report: data } });
          }
        }
      });

      // If streaming finished without navigating, handle fallback
      if (finalReport) {
        const targetId = (finalReport as any).id || (finalReport as any).analysis_id;
        if (targetId) {
          navigate(`/analysis/${targetId}`, { state: { report: finalReport } });
          return;
        }
      }
    } catch (streamErr: any) {
      console.warn('Progressive streaming failed, falling back to standard endpoint:', streamErr);
      try {
        const data = await analyzeNewsTopic(q);
        showToast('Intelligence Report loaded!');
        const targetId = data.id || data.analysis_id;
        if (targetId) {
          navigate(`/analysis/${targetId}`, { state: { report: data } });
        } else {
          setErrorMsg('Received analysis report without an ID.');
        }
      } catch (err: any) {
        setErrorMsg(err.message || 'An unexpected error occurred while analyzing this news topic.');
      }
    } finally {
      setLoading(false);
      setStreamStatus('');
    }
  };

  const quickTopics = [
    'U.S. Administration Halting PERM Program for Tech Companies H-1B',
    'NASA Artemis Moon Mission Schedule Revisions',
    'Global Clean Energy Subsidies & Tariff Accords',
    'Central Bank Interest Rate Outlook & Liquidity Risks'
  ];

  return (
    <div className="flex flex-col min-h-[calc(100vh-140px)]">
      {/* DaisyUI Hero Section with Search Bar */}
      <section className="hero py-10 md:py-16 px-4 bg-gradient-to-b from-base-200/70 via-base-200/40 to-base-100 border-b border-base-300/40">
        <div className="hero-content text-center max-w-4xl flex-col p-0">
          <div className="badge badge-primary badge-outline gap-2 py-3 px-4 font-semibold shadow-sm mb-4">
            <Sparkles size={16} />
            <span>Google Cloud AI Builder Cup 2026 Submission</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Autonomous Multi-Agent <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Media Intelligence & Verification
            </span>
          </h1>

          <p className="py-4 text-base-content/75 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
            Forensic cross-source auditing under IFCN principles, contradiction detection, chronological narrative evolution, and causal consequence modeling.
          </p>

          {/* Search Box with DaisyUI Join */}
          <div className="w-full max-w-3xl mt-2">
            <div className="join w-full shadow-2xl border border-base-300 rounded-2xl bg-base-100 p-1.5 focus-within:border-primary transition-all">
              <div className="join-item flex items-center pl-4 text-base-content/50">
                <Search size={20} />
              </div>
              <input
                type="text"
                className="input input-ghost join-item w-full focus:outline-none text-sm md:text-base px-3"
                placeholder="Enter breaking event, headline, or policy topic..."
                value={topicInput}
                onChange={(e) => setTopicInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && !loading && handleSearch()}
                disabled={loading}
              />
              <button
                className="btn btn-primary join-item rounded-xl gap-2 px-5 md:px-7 shadow-md"
                onClick={() => handleSearch()}
                disabled={loading || !topicInput.trim()}
              >
                {loading ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <Sparkles size={18} />
                    <span className="hidden sm:inline">Run Fleet (25 Agents)</span>
                    <span className="sm:hidden">Run</span>
                  </>
                )}
              </button>
            </div>

            {/* Suggested Topic Chips */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
              <span className="text-xs font-bold text-base-content/60 uppercase tracking-wider mr-1">
                Suggested Topics:
              </span>
              {quickTopics.map((qt, idx) => (
                <button
                  key={idx}
                  className="btn btn-xs btn-outline btn-neutral rounded-full hover:btn-primary transition-all shadow-sm font-medium"
                  onClick={() => {
                    setTopicInput(qt);
                    handleSearch(qt);
                  }}
                  disabled={loading}
                >
                  {qt}
                </button>
              ))}
            </div>
          </div>

          {errorMsg && (
            <div className="alert alert-error shadow-lg max-w-2xl mt-6 rounded-xl">
              <AlertTriangle size={20} />
              <span>{errorMsg}</span>
            </div>
          )}
        </div>
      </section>

      {/* Loading Progress State during Active Analysis */}
      {loading && (
        <div className="container mx-auto px-4 max-w-4xl my-8">
          <div className="card bg-base-200 border border-base-300 shadow-2xl p-6 md:p-10 text-center">
            {/* Multi-Ring Spinner Visual */}
            <div className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <span className="loading loading-spinner text-primary loading-lg absolute scale-150"></span>
              <span className="loading loading-ring text-secondary loading-lg absolute scale-125"></span>
              <span className="loading loading-dots text-accent loading-md absolute"></span>
              <Brain size={30} className="text-primary animate-pulse relative z-10" />
            </div>

            <h2 className="text-2xl md:text-3xl font-black text-base-content mb-2">
              Deploying 25 Autonomous ADK Agents
            </h2>
            <p className="text-sm text-base-content/70 max-w-lg mx-auto mb-6">
              Auditing cross-spectrum media dispatches, IFCN principles, and chronological narrative evolution...
            </p>

            {/* DaisyUI Steps Pipeline */}
            <div className="w-full my-4">
              <ul className="steps steps-vertical md:steps-horizontal w-full text-xs font-bold">
                {FLEET_STAGES.map((stg, idx) => (
                  <li
                    key={idx}
                    className={`step ${idx <= loadingStage ? 'step-primary font-bold' : 'step-neutral opacity-60'}`}
                    data-content={idx < loadingStage ? '✓' : idx === loadingStage ? '●' : `${idx + 1}`}
                  >
                    {stg.short}
                  </li>
                ))}
              </ul>
            </div>

            {/* DaisyUI Linear Progress Bar */}
            <div className="w-full max-w-md mx-auto mt-4 mb-6">
              <progress
                className="progress progress-primary w-full h-2.5"
                value={(loadingStage + 1) * 20}
                max="100"
              ></progress>
            </div>

            {/* Current Active Stage Card */}
            <div className="p-4 rounded-xl bg-primary/10 border border-primary/40 max-w-xl mx-auto text-left shadow-sm">
              <div className="flex items-center gap-2 font-bold text-sm text-primary">
                <span className="loading loading-spinner loading-xs"></span>
                <span>{FLEET_STAGES[loadingStage].title}</span>
              </div>
              <p className="text-xs text-base-content/75 mt-1">
                {streamStatus || FLEET_STAGES[loadingStage].desc}
              </p>
            </div>

            {/* DaisyUI Skeleton Placeholders */}
            <div className="mt-8 pt-6 border-t border-base-300 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="card bg-base-100 p-4 border border-base-300 flex flex-col gap-2">
                <div className="skeleton h-4 w-1/2"></div>
                <div className="skeleton h-3 w-full"></div>
                <div className="skeleton h-3 w-3/4"></div>
              </div>
              <div className="card bg-base-100 p-4 border border-base-300 flex flex-col gap-2">
                <div className="skeleton h-4 w-2/3"></div>
                <div className="skeleton h-3 w-full"></div>
                <div className="skeleton h-3 w-4/5"></div>
              </div>
              <div className="card bg-base-100 p-4 border border-base-300 flex flex-col gap-2">
                <div className="skeleton h-4 w-1/3"></div>
                <div className="skeleton h-3 w-full"></div>
                <div className="skeleton h-3 w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Home Content when Not Loading */}
      {!loading && (
        <main className="container mx-auto px-4 lg:px-8 py-10 max-w-7xl flex-1 flex flex-col gap-10">
          {/* Recent Analyses Grid Section */}
          <section>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
              <div>
                <h2 className="text-xl md:text-2xl font-black flex items-center gap-2.5">
                  <Clock size={22} className="text-primary" />
                  <span>Recent Intelligence Investigations</span>
                </h2>
                <p className="text-xs md:text-sm text-base-content/65 mt-0.5">
                  Each analysis has a dedicated bookmarkable URL. Select an investigation to review forensic audits.
                </p>
              </div>

              <Link
                to="/history"
                className="btn btn-sm btn-outline border-base-300 hover:border-primary gap-2 shadow-sm font-semibold"
              >
                <History size={15} />
                <span>Browse Full Archive</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {recentLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {[1, 2, 3].map((n) => (
                  <div key={n} className="card bg-base-200 border border-base-300 p-6 flex flex-col gap-3">
                    <div className="skeleton h-5 w-3/4"></div>
                    <div className="skeleton h-14 w-full"></div>
                    <div className="skeleton h-4 w-1/2"></div>
                  </div>
                ))}
              </div>
            ) : recentAnalyses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {recentAnalyses.slice(0, 6).map((item) => {
                  const targetId = item.id || item.analysis_id;
                  const dateStr = item.created_at
                    ? new Date(item.created_at * 1000).toLocaleDateString()
                    : 'Recent';

                  return (
                    <div
                      key={targetId || item.topic}
                      className="card bg-base-200/90 border border-base-300 hover:border-primary/50 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group"
                    >
                      <div className="card-body p-5">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="badge badge-primary badge-outline badge-xs font-bold font-mono px-2.5 py-1 shadow-xs">
                            {dateStr}
                          </span>
                          {item.is_favorite && (
                            <span className="text-warning text-sm drop-shadow-sm" title="Favorited">★</span>
                          )}
                        </div>

                        <h3 className="font-bold text-base text-base-content group-hover:text-primary transition-colors line-clamp-2">
                          {item.topic}
                        </h3>

                        <p className="text-xs text-base-content/75 line-clamp-3 mt-2 leading-relaxed">
                          {item.executive_summary || 'Multi-outlet intelligence synthesis with forensic fact checking.'}
                        </p>
                      </div>

                      <div className="px-5 pb-5 pt-0 border-t border-base-300/40 flex items-center justify-between mt-auto">
                        <span className="text-[11px] text-base-content/60 font-mono">
                          {item.verifications?.length || 0} Fact Checks
                        </span>
                        {targetId && (
                          <Link
                            to={`/analysis/${targetId}`}
                            className="btn btn-primary btn-xs gap-1.5 shadow-sm group-hover:scale-105 transition-transform"
                          >
                            <span>Open Analysis</span>
                            <ArrowRight size={12} />
                          </Link>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="card bg-base-200 border border-base-300 p-8 text-center max-w-md mx-auto">
                <Brain size={36} className="mx-auto text-primary opacity-60 mb-2" />
                <h4 className="font-bold text-base">No previous investigations yet</h4>
                <p className="text-xs text-base-content/70 mt-1 mb-4">
                  Enter any headline or news policy above to start your first multi-agent investigation!
                </p>
              </div>
            )}
          </section>

          {/* Platform Feature Capabilities Banner */}
          <section className="border-t border-base-300 pt-8">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <div className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
                Architecture & Methodology
              </div>
              <h3 className="text-2xl font-black">
                How the 25-Agent ADK Intelligence Engine Audits the News
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="card bg-base-200 border border-base-300 p-5 shadow-sm">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary w-fit mb-3">
                  <ShieldCheck size={22} />
                </div>
                <h4 className="font-bold text-base mb-1">IFCN Forensic Claim Audit</h4>
                <p className="text-xs text-base-content/70 leading-relaxed">
                  Extracts testable assertions and cross-references against federal archives, court dockets, and verified reporting.
                </p>
              </div>

              <div className="card bg-base-200 border border-base-300 p-5 shadow-sm">
                <div className="p-2.5 rounded-xl bg-secondary/10 text-secondary w-fit mb-3">
                  <Scale size={22} />
                </div>
                <h4 className="font-bold text-base mb-1">Ideological Lean & Framing</h4>
                <p className="text-xs text-base-content/70 leading-relaxed">
                  Charts media divergence, identifies loaded terminology, and isolates omitted contextual nuance across spectrums.
                </p>
              </div>

              <div className="card bg-base-200 border border-base-300 p-5 shadow-sm">
                <div className="p-2.5 rounded-xl bg-info/10 text-info w-fit mb-3">
                  <Clock size={22} />
                </div>
                <h4 className="font-bold text-base mb-1">Chronological Evolution</h4>
                <p className="text-xs text-base-content/70 leading-relaxed">
                  Reconstructs precise milestone timelines with narrative inflection points and shifting media frames.
                </p>
              </div>

              <div className="card bg-base-200 border border-base-300 p-5 shadow-sm">
                <div className="p-2.5 rounded-xl bg-accent/10 text-accent w-fit mb-3">
                  <TrendingUp size={22} />
                </div>
                <h4 className="font-bold text-base mb-1">3-Tier Causal Diagnostics</h4>
                <p className="text-xs text-base-content/70 leading-relaxed">
                  5-Whys root cause discovery, 1st/2nd/3rd order cascade trees, and forward probabilistic scenario simulations.
                </p>
              </div>
            </div>
          </section>
        </main>
      )}
    </div>
  );
};
