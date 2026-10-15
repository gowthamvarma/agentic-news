import React, { useState, useEffect, useRef } from 'react';
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
  ArrowRight,
  RotateCw,
  Globe,
  Flame,
  CheckCircle2
} from 'lucide-react';
import {
  analyzeNewsTopic,
  analyzeNewsTopicProgressive,
  fetchRecentAnalyses,
  checkApiHealth,
  fetchTopicSuggestions,
  refreshTopicSuggestions
} from '../api';
import type { NewsIntelligenceReport, TopicSuggestionsPayload } from '../types';
import { useToast } from '../context/ToastContext';

const FLEET_STAGES = [
  { title: 'Stage 1: Multi-Outlet Ingestion', short: 'Ingestion', desc: 'Querying Google News RSS, Associated Press, Reuters, Bloomberg, WSJ...' },
  { title: 'Stage 2: IFCN Forensic Claim Verification', short: 'Claim Audit', desc: 'Auditing assertions against primary records, federal registers & court dockets...' },
  { title: 'Stage 3: Cross-Source Contradictions & Bias', short: 'Contradictions', desc: 'Detecting conflicting figures and charting ideological lean spectrums...' },
  { title: 'Stage 4: Chronological Timeline Reconstruction', short: 'Timeline', desc: 'Aligning exact calendar dates, milestones, and narrative trajectory shifts...' },
  { title: 'Stage 5: Who/Where/What Primer & Jargon Buster', short: 'Primers', desc: 'Compiling entity background primers, institutional backdrops, and legal glossaries...' }
];

export const TARGET_COUNTRIES = [
  { code: 'IN', name: 'India', flag: '🇮🇳' },
  { code: 'US', name: 'United States', flag: '🇺🇸' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦' },
  { code: 'CN', name: 'China', flag: '🇨🇳' },
  { code: 'RU', name: 'Russia', flag: '🇷🇺' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'FR', name: 'France', flag: '🇫🇷' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪' },
  { code: 'AE', name: 'United Arab Emirates', flag: '🇦🇪' },
  { code: 'SA', name: 'Saudi Arabia', flag: '🇸🇦' },
  { code: 'IL', name: 'Israel', flag: '🇮🇱' },
  { code: 'JP', name: 'Japan', flag: '🇯🇵' },
  { code: 'SG', name: 'Singapore', flag: '🇸🇬' },
  { code: 'ID', name: 'Indonesia', flag: '🇮🇩' },
  { code: 'MY', name: 'Malaysia', flag: '🇲🇾' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺' },
];

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const progressRef = useRef<HTMLDivElement>(null);

  const [topicInput, setTopicInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingStage, setLoadingStage] = useState(0);
  const [streamStatus, setStreamStatus] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [recentAnalyses, setRecentAnalyses] = useState<NewsIntelligenceReport[]>([]);
  const [recentLoading, setRecentLoading] = useState(true);

  // Dynamic Country Topic Suggestions State
  const [topicSuggestions, setTopicSuggestions] = useState<TopicSuggestionsPayload | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const p = new URLSearchParams(window.location.search).get('country');
      if (p) return p.toUpperCase();
    }
    return 'IN';
  });
  const [suggestionsLoading, setSuggestionsLoading] = useState(true);
  const [suggestionsRefreshing, setSuggestionsRefreshing] = useState(false);

  // Auto-scroll to loading progress section when fleet run starts
  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        if (progressRef.current) {
          progressRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
          });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  // Graceful pacing timer fallback if progressive stream is slow or in non-streaming mode
  useEffect(() => {
    let interval: any;
    if (loading) {
      interval = setInterval(() => {
        // Only incrementally advance up to stage 3 if stream has not sent an update yet
        setLoadingStage((prev) => (prev < FLEET_STAGES.length - 2 ? prev + 1 : prev));
      }, 7000);
    }
    return () => clearInterval(interval);
  }, [loading]);

  // Load initial health, recent analyses & cached topic suggestions from Firestore
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

    // 1. Instantly load cached topic suggestions from Firestore
    fetchTopicSuggestions()
      .then((data) => {
        if (data && data.countries && data.countries.length > 0) {
          setTopicSuggestions(data);
          // 2. 24-Hour staleness check: trigger background refresh only if stale (> 24 hours)
          if (data.is_stale) {
            setSuggestionsRefreshing(true);
            refreshTopicSuggestions()
              .then((freshData) => {
                setTopicSuggestions(freshData);
                showToast('Topic suggestions updated from live Google News RSS & Gemini!', 'info');
              })
              .catch((err) => {
                console.warn('Background refresh of topic suggestions failed:', err);
              })
              .finally(() => {
                setSuggestionsRefreshing(false);
              });
          }
        }
      })
      .catch((err) => {
        console.warn('Could not load topic suggestions:', err);
      })
      .finally(() => {
        setSuggestionsLoading(false);
      });
  }, []);

  const handleRefreshSuggestions = async () => {
    if (suggestionsRefreshing) return;
    setSuggestionsRefreshing(true);
    try {
      const freshData = await refreshTopicSuggestions();
      setTopicSuggestions(freshData);
      showToast('Live country topic suggestions refreshed & saved to Firestore!', 'success');
    } catch (err: any) {
      showToast('Failed to refresh suggestions: ' + (err.message || 'Error'), 'error');
    } finally {
      setSuggestionsRefreshing(false);
    }
  };

  const formatSuggestionTime = (timestamp?: number) => {
    if (!timestamp) return 'Just now';
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ', ' + date.toLocaleDateString([], { month: 'short', day: 'numeric' });
  };

  const getCacheAgeText = (timestamp?: number) => {
    if (!timestamp) return '';
    const elapsedSeconds = Math.max(0, Math.floor(Date.now() / 1000 - timestamp));
    const hours = Math.floor(elapsedSeconds / 3600);
    const mins = Math.floor((elapsedSeconds % 3600) / 60);
    if (hours > 0) return `${hours}h ${mins}m ago`;
    if (mins > 0) return `${mins}m ago`;
    return 'Just now';
  };

  const handleSearch = async (queryToRun?: string) => {
    const q = (queryToRun || topicInput).trim();
    if (!q) return;

    setErrorMsg(null);
    setLoading(true);
    setLoadingStage(0);
    setStreamStatus('Deploying 25 Autonomous ADK Agents...');

    try {
      let finalReport: NewsIntelligenceReport | null = null;

      await analyzeNewsTopicProgressive(q, (eventType, data) => {
        if (eventType === 'init') {
          setLoadingStage(0);
          setStreamStatus('Stage 1: Multi-Outlet Ingestion & Executive Brief compiling...');
        } else if (eventType === 'step_brief') {
          setLoadingStage(1);
          setStreamStatus('Stage 2: Auditing IFCN forensic fact-checks & bias...');
        } else if (eventType === 'step_verification') {
          setLoadingStage(2);
          setStreamStatus('Stage 3: Cross-Source Contradictions & Bias Audits...');
        } else if (eventType === 'step_timeline') {
          setLoadingStage(3);
          setStreamStatus('Stage 4: Reconstructing Chronological Timeline & Primers...');
        } else if (eventType === 'complete') {
          setLoadingStage(4);
          setStreamStatus('Analysis Complete! Finalizing report...');
          finalReport = data;
          showToast('Intelligence Report successfully generated!', 'success');
          const targetId = data.id || data.analysis_id;
          if (targetId) {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
            navigate(`/analysis/${targetId}`, { state: { report: data } });
          }
        }
      });

      // If streaming finished without navigating, handle fallback
      if (finalReport) {
        const targetId = (finalReport as any).id || (finalReport as any).analysis_id;
        if (targetId) {
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
          navigate(`/analysis/${targetId}`, { state: { report: finalReport } });
          return;
        }
      }
    } catch (streamErr: any) {
      console.warn('Progressive streaming failed, falling back to standard endpoint:', streamErr);
      try {
        setStreamStatus('Running comprehensive multi-agent synthesis pipeline...');
        const data = await analyzeNewsTopic(q);
        setLoadingStage(4);
        showToast('Intelligence Report loaded!', 'success');
        const targetId = data.id || data.analysis_id;
        if (targetId) {
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
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

  const activeCountryGroup = topicSuggestions?.countries?.find(
    (c) => c.code === selectedCountry
  );
  const activeCountryMeta = TARGET_COUNTRIES.find((c) => c.code === selectedCountry) || TARGET_COUNTRIES[0];
  const activeCountryName = activeCountryGroup?.name || activeCountryMeta.name;
  const displayTopics = activeCountryGroup?.topics || [];

  return (
    <div className="flex flex-col min-h-[calc(100vh-140px)]">
      {/* DaisyUI Hero Section with Search Bar */}
      <section className="py-8 sm:py-12 md:py-14 px-3 sm:px-6 lg:px-8 bg-gradient-to-b from-base-200/70 via-base-200/40 to-base-100 border-b border-base-300/40">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="badge badge-primary badge-outline gap-2 py-2.5 px-3 sm:py-3 sm:px-4 text-xs font-semibold shadow-sm mb-4">
            <Sparkles size={15} />
            <span className="hidden sm:inline">Google Cloud AI Builder Cup 2026 Submission</span>
            <span className="sm:hidden">AI Builder Cup 2026</span>
          </div>

          <h1 className="text-lg sm:text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight px-1 break-words">
            Autonomous Multi-Agent <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Media Intelligence & Verification
            </span>
          </h1>

          <p className="py-3 sm:py-4 text-base-content/75 text-xs sm:text-base md:text-lg max-w-2xl leading-relaxed px-2">
            Forensic cross-source auditing under IFCN principles, contradiction detection, chronological narrative evolution, and causal consequence modeling.
          </p>

          {/* Search Box - Fully responsive */}
          <div className="w-full max-w-3xl mt-3 sm:mt-4 px-1">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-1.5 w-full shadow-xl sm:shadow-2xl border border-base-300 rounded-2xl bg-base-100 p-2 sm:p-1.5 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all">
              <div className="flex items-center flex-1 min-w-0">
                <div className="flex items-center pl-2.5 sm:pl-3 text-base-content/50 shrink-0">
                  <Search size={20} />
                </div>
                <input
                  type="text"
                  className="input input-ghost w-full min-w-0 flex-1 focus:outline-none text-xs sm:text-sm md:text-base px-2.5 sm:px-3 bg-transparent border-none"
                  placeholder="Enter breaking event, headline, or policy topic..."
                  value={topicInput}
                  onChange={(e) => setTopicInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && !loading && handleSearch()}
                  disabled={loading}
                />
              </div>
              <button
                className="btn btn-primary rounded-xl gap-2 px-4 sm:px-6 shadow-md shrink-0 text-xs sm:text-sm h-11 min-h-11 sm:h-12 sm:min-h-12"
                onClick={() => handleSearch()}
                disabled={loading || !topicInput.trim()}
              >
                {loading ? (
                  <>
                    <span className="loading loading-spinner loading-xs sm:loading-sm"></span>
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <Sparkles size={16} />
                    <span className="hidden md:inline">Run Fleet (25 Agents)</span>
                    <span className="md:hidden">Run Fleet</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {errorMsg && (
            <div className="alert alert-error shadow-lg max-w-2xl mt-6 rounded-xl text-left">
              <AlertTriangle size={20} className="shrink-0" />
              <span className="text-xs sm:text-sm">{errorMsg}</span>
            </div>
          )}
        </div>

        {/* Dynamic Country Topic Suggestions Section - Expanded to max-w-7xl using most of page width */}
        <div className="w-full max-w-7xl mx-auto mt-8 sm:mt-12 px-1 sm:px-4">
          {/* Country Selector Header & Responsive Chips */}
          <div className="flex flex-col items-center w-full">
            <span className="text-xs font-bold text-base-content/60 uppercase tracking-wider mb-2.5 flex items-center gap-1.5 text-center">
              <Globe size={14} className="text-primary" />
              Select Country for Live Breaking Topics:
            </span>

            {/* Responsive Country Chip Bar: 16 Countries in Priority Order, ONLY Flag + Country Code, no country name, no count badge */}
            <div className="w-full flex flex-wrap justify-center items-center gap-1.5 sm:gap-2 p-2 sm:p-2.5 bg-base-200/80 rounded-2xl border border-base-300/60 shadow-inner">
              {TARGET_COUNTRIES.map((c) => {
                const isSelected = selectedCountry === c.code;
                return (
                  <button
                    key={c.code}
                    onClick={() => setSelectedCountry(c.code)}
                    title={c.name}
                    aria-label={c.name}
                    className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl font-bold text-xs sm:text-sm transition-all whitespace-nowrap shrink-0 ${
                      isSelected
                        ? 'bg-primary text-primary-content shadow-md scale-105 ring-2 ring-primary/40'
                        : 'bg-base-100/70 hover:bg-base-100 text-base-content/75 hover:text-base-content border border-base-300/50 hover:border-primary/50'
                    }`}
                  >
                    <img
                      src={`https://flagcdn.com/24x18/${c.code.toLowerCase()}.png`}
                      alt=""
                      className="w-4 h-3 rounded-2xs object-cover shadow-2xs shrink-0"
                      onError={(e) => {
                        (e.currentTarget as HTMLElement).style.display = 'none';
                      }}
                    />
                    <span className="font-mono tracking-tight">{c.code}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Cache Timestamp & Feed Status Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 mt-5 mb-3 px-1 pb-2.5 border-b border-base-300/50 text-xs text-base-content/65">
            <div className="flex flex-wrap items-center gap-2">
              <span className="flex items-center gap-1.5 font-bold text-base-content/90 text-sm">
                <Flame size={16} className="text-secondary shrink-0" />
                <img
                  src={`https://flagcdn.com/28x21/${selectedCountry.toLowerCase()}.png`}
                  alt=""
                  className="w-5 h-3.5 rounded-2xs object-cover shadow-2xs inline-block shrink-0"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />
                <span>{activeCountryName} Breaking Topics</span>
              </span>
              <span className="hidden sm:inline text-base-content/30">•</span>
              <span className="flex items-center gap-1 text-[11px] sm:text-xs">
                <Clock size={13} className="shrink-0" />
                <span>Updated {getCacheAgeText(topicSuggestions?.created_at)} ({formatSuggestionTime(topicSuggestions?.created_at)})</span>
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
              <span className="badge badge-sm badge-outline gap-1 font-mono text-[11px] bg-base-100/60 shrink-0">
                <CheckCircle2 size={12} className="text-success shrink-0" />
                <span>24h Cache</span>
              </span>
              <button
                className={`btn btn-ghost btn-xs gap-1.5 rounded-lg border border-base-300/40 hover:bg-base-200 font-medium shrink-0 ${suggestionsRefreshing ? 'loading text-primary' : ''}`}
                onClick={handleRefreshSuggestions}
                disabled={suggestionsRefreshing || loading}
                title="Fetch latest Google News RSS & synthesize new topics with Gemini"
              >
                <RotateCw size={12} className={suggestionsRefreshing ? 'animate-spin' : ''} />
                <span>{suggestionsRefreshing ? 'Updating...' : 'Refresh Feed'}</span>
              </button>
            </div>
          </div>

          {/* Topic Cards Grid - Responsive 9 Articles (1 col mobile, 2 col tablet, 3 col desktop) */}
          {suggestionsLoading && !topicSuggestions ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-3">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                <div key={i} className="skeleton h-44 w-full rounded-2xl"></div>
              ))}
            </div>
          ) : displayTopics.length === 0 ? (
            <div className="card bg-base-100/80 border border-base-300/70 p-8 text-center max-w-md mx-auto my-6 shadow-sm">
              <Globe size={32} className="mx-auto text-primary opacity-60 mb-2" />
              <h4 className="font-bold text-sm sm:text-base">Loading live topics for {activeCountryName}...</h4>
              <p className="text-xs text-base-content/70 mt-1 mb-4">
                Fetching latest breaking headlines and synthesizing with Gemini.
              </p>
              <button
                className="btn btn-primary btn-sm mx-auto gap-2"
                onClick={handleRefreshSuggestions}
                disabled={suggestionsRefreshing}
              >
                <RotateCw size={14} className={suggestionsRefreshing ? 'animate-spin' : ''} />
                <span>{suggestionsRefreshing ? 'Fetching...' : 'Fetch Feed'}</span>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-3 text-left">
              {displayTopics.slice(0, 9).map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    setTopicInput(item.topic);
                    handleSearch(item.topic);
                  }}
                  className="group relative bg-base-100/90 hover:bg-base-100 border border-base-300/80 hover:border-primary/60 shadow-sm hover:shadow-xl transition-all duration-200 cursor-pointer p-4 sm:p-5 rounded-2xl flex flex-col justify-between overflow-hidden min-w-0 break-words"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className={`badge badge-xs sm:badge-sm font-semibold shadow-xs shrink-0 ${item.badge_color || 'badge-primary'}`}>
                          {item.badge}
                        </span>
                        <span className="badge badge-outline badge-xs sm:badge-sm text-base-content/75 font-medium shrink-0">
                          {item.category}
                        </span>
                      </div>
                      {item.source_outlet && (
                        <span className="text-[11px] text-base-content/50 font-medium truncate max-w-[140px]">
                          via {item.source_outlet}
                        </span>
                      )}
                    </div>

                    <h4 className="font-bold text-sm sm:text-base text-base-content group-hover:text-primary transition-colors leading-snug mb-2.5 break-words">
                      {item.topic}
                    </h4>

                    <p className="text-xs text-base-content/75 leading-relaxed break-words">
                      {item.summary}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-base-300/50 text-xs">
                    <span className="text-primary font-semibold flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                      <Sparkles size={13} className="text-primary shrink-0" />
                      <span>Analyze with 25 Agents</span>
                    </span>
                    <span className="text-base-content/40 group-hover:text-primary transition-colors text-[11px] font-medium flex items-center gap-1 shrink-0">
                      <span className="hidden sm:inline">Deploy Fleet</span>
                      <span className="sm:hidden">Deploy</span>
                      <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Loading Progress State during Active Analysis */}
      {loading && (
        <div ref={progressRef} className="container mx-auto px-4 max-w-4xl my-8 scroll-mt-20">
          <div className="card bg-base-200 border border-base-300 shadow-2xl p-6 md:p-10 text-center">
            {/* Continuously Spinning Circular Progress around Centered Brain Icon */}
            <div className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              {/* Subtle track ring */}
              <div
                className="radial-progress text-primary/15 absolute"
                style={{
                  '--value': 100,
                  '--size': '5.5rem',
                  '--thickness': '4px'
                } as React.CSSProperties}
                aria-hidden="true"
              />
              {/* Continuously spinning progress arc */}
              <div
                className="radial-progress text-primary animate-spin"
                style={{
                  '--value': 30,
                  '--size': '5.5rem',
                  '--thickness': '4px'
                } as React.CSSProperties}
                role="status"
                aria-label="Analyzing..."
              />
              {/* Center upright brain icon */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shadow-inner">
                  <Brain size={28} className="text-primary animate-pulse" />
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-black text-base-content mb-2">
              Deploying 25 Autonomous ADK Agents
            </h2>
            <p className="text-sm text-base-content/70 max-w-lg mx-auto mb-6">
              Auditing cross-spectrum media dispatches, IFCN principles, and chronological narrative evolution...
            </p>

            {/* DaisyUI Steps Pipeline */}
            <div className="w-full my-4 overflow-x-auto py-2">
              <ul className="steps steps-vertical md:steps-horizontal w-full text-xs font-semibold">
                {FLEET_STAGES.map((stg, idx) => (
                  <li
                    key={idx}
                    className={`step ${idx <= loadingStage ? 'step-primary font-bold' : ''}`}
                    data-content={idx < loadingStage ? '✓' : idx === loadingStage ? '●' : `${idx + 1}`}
                  >
                    <span>{stg.short}</span>
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
                  <div key={n} className="card bg-base-200 border border-base-300 p-5 flex flex-col justify-between shadow-sm animate-pulse">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="skeleton h-4 w-20 rounded-md"></div>
                        <div className="skeleton h-5 w-16 rounded-full"></div>
                      </div>
                      <div className="skeleton h-6 w-5/6 rounded-md"></div>
                      <div className="space-y-1.5">
                        <div className="skeleton h-3.5 w-full rounded"></div>
                        <div className="skeleton h-3.5 w-11/12 rounded"></div>
                        <div className="skeleton h-3.5 w-3/4 rounded"></div>
                      </div>
                    </div>
                    <div className="pt-4 mt-4 border-t border-base-300/60 flex items-center justify-between">
                      <div className="skeleton h-5 w-24 rounded-full"></div>
                      <div className="skeleton h-7 w-20 rounded-lg"></div>
                    </div>
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
                      className="card bg-base-200/90 border border-base-300 hover:border-primary/50 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group overflow-hidden min-w-0 break-words"
                    >
                      <div className="card-body p-4 sm:p-5">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <span className="badge badge-primary badge-outline badge-xs font-bold font-mono px-2.5 py-1 shadow-xs shrink-0">
                            {dateStr}
                          </span>
                          {item.is_favorite && (
                            <span className="text-warning text-sm drop-shadow-sm shrink-0" title="Favorited">★</span>
                          )}
                        </div>

                        <h3 className="font-bold text-base text-base-content group-hover:text-primary transition-colors line-clamp-2 break-words">
                          {item.topic}
                        </h3>

                        <p className="text-xs text-base-content/75 line-clamp-3 mt-2 leading-relaxed break-words">
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
