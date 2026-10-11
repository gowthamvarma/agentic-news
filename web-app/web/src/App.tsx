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
  FileText,
  Calendar,
  Building2,
  HelpCircle,
  User,
  Bot,
  Trash2,
  Palette,
  ChevronDown
} from 'lucide-react';
import {
  analyzeNewsTopic,
  fetchRecentAnalyses,
  generateQuiz,
  gradeQuiz,
  generateDebate,
  generateScenarios,
  chatResearchCopilot,
  checkApiHealth
} from './api';
import type {
  NewsIntelligenceReport,
  QuizPayload,
  PerspectiveDebateReport
} from './types';

interface ChatMessage {
  sender: 'user' | 'agent';
  text: string;
  time: string;
}

const DAISY_THEMES = [
  { id: 'dark', name: 'Dark', icon: '🌙' },
  { id: 'night', name: 'Night', icon: '🌃' },
  { id: 'dim', name: 'Dim', icon: '🌘' },
  { id: 'sunset', name: 'Sunset', icon: '🌆' },
  { id: 'synthwave', name: 'Synthwave', icon: '🌆' },
  { id: 'cyberpunk', name: 'Cyberpunk', icon: '⚡' },
  { id: 'dracula', name: 'Dracula', icon: '🧛' },
  { id: 'luxury', name: 'Luxury', icon: '💎' },
  { id: 'black', name: 'Black', icon: '⬛' },
  { id: 'coffee', name: 'Coffee', icon: '☕' },
  { id: 'forest', name: 'Forest', icon: '🌲' },
  { id: 'halloween', name: 'Halloween', icon: '🎃' },
  { id: 'business', name: 'Business', icon: '💼' },
  { id: 'aqua', name: 'Aqua', icon: '🌊' },
  { id: 'emerald', name: 'Emerald', icon: '💚' },
  { id: 'corporate', name: 'Corporate', icon: '🏢' },
  { id: 'nord', name: 'Nord', icon: '❄️' },
  { id: 'winter', name: 'Winter', icon: '⛄' },
  { id: 'light', name: 'Light', icon: '☀️' },
  { id: 'cupcake', name: 'Cupcake', icon: '🧁' },
  { id: 'bumblebee', name: 'Bumblebee', icon: '🐝' },
  { id: 'retro', name: 'Retro', icon: '📻' },
  { id: 'valentine', name: 'Valentine', icon: '💖' },
  { id: 'garden', name: 'Garden', icon: '🌻' },
  { id: 'lofi', name: 'Lofi', icon: '🎧' },
  { id: 'pastel', name: 'Pastel', icon: '🎨' },
  { id: 'fantasy', name: 'Fantasy', icon: '🦄' },
  { id: 'wireframe', name: 'Wireframe', icon: '📐' },
  { id: 'cmyk', name: 'CMYK', icon: '🖨️' },
  { id: 'autumn', name: 'Autumn', icon: '🍂' },
  { id: 'acid', name: 'Acid', icon: '🧪' },
  { id: 'lemonade', name: 'Lemonade', icon: '🍋' },
] as const;

export default function App() {
  const [theme, setTheme] = useState<string>(() => {
    return localStorage.getItem('agentic_news_theme') || 'dark';
  });

  const [topicInput, setTopicInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingStage, setLoadingStage] = useState(0);
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

  // Causal Diagnostics & Forward Scenarios State (On-Demand Option 4)
  const [scenariosData, setScenariosData] = useState<any | null>(null);
  const [scenariosLoading, setScenariosLoading] = useState(false);

  // Research Copilot Chat State
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      sender: 'agent',
      text: 'Hello! I am your Research Copilot powered by Google Gemini 3.1 Pro. Ask any follow-up question or request an autonomous investigative deep-dive over verified reporting.',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [chatLoading, setChatLoading] = useState(false);

  // Sync DaisyUI theme with document root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('agentic_news_theme', theme);
  }, [theme]);

  const fleetStages = [
    { title: 'Stage 1: Multi-Outlet Ingestion', desc: 'Querying Google News RSS, Associated Press, Reuters, Bloomberg, WSJ...' },
    { title: 'Stage 2: IFCN Forensic Claim Verification', desc: 'Auditing assertions against primary records, federal registers & court dockets...' },
    { title: 'Stage 3: Cross-Source Contradictions & Bias', desc: 'Detecting conflicting figures and charting ideological lean spectrums...' },
    { title: 'Stage 4: Chronological Timeline Reconstruction', desc: 'Aligning exact calendar dates, milestones, and narrative trajectory shifts...' },
    { title: 'Stage 5: Who/Where/What Primer & Jargon Buster', desc: 'Compiling entity background primers, institutional backdrops, and legal glossaries...' }
  ];

  // Stage progress animation timer while loading
  useEffect(() => {
    let interval: any;
    if (loading) {
      setLoadingStage(0);
      interval = setInterval(() => {
        setLoadingStage((prev) => (prev < fleetStages.length - 1 ? prev + 1 : prev));
      }, 2500);
    }
    return () => clearInterval(interval);
  }, [loading]);

  // Load initial health & recent analyses
  useEffect(() => {
    checkApiHealth().catch(() => {});
    fetchRecentAnalyses()
      .then((data) => {
        if (data && data.length > 0) {
          setRecentRuns(data);
          setReport(data[0]);
        }
      })
      .catch(() => {});
  }, []);

  const handleSearch = async (queryToRun?: string) => {
    const q = (queryToRun || topicInput).trim();
    if (!q) return;

    // Clear old data immediately upon new search
    setReport(null);
    setQuiz(null);
    setDebate(null);
    setScenariosData(null);
    setScenariosLoading(false);
    setQuizResult(null);
    setUserAnswers({});
    setErrorMsg(null);
    setLoading(true);

    try {
      const data = await analyzeNewsTopic(q);
      setReport(data);
      setTopicInput(q);
      setActiveTab('brief');
      fetchRecentAnalyses().then(setRecentRuns).catch(() => {});
    } catch (err: any) {
      setErrorMsg(err.message || 'An unexpected error occurred while analyzing this news topic.');
    } finally {
      setLoading(false);
    }
  };

  const handleLoadScenarios = async () => {
    if (!report) return;
    setScenariosLoading(true);
    try {
      const data = await generateScenarios(report.topic);
      setScenariosData(data);
    } catch (err: any) {
      console.error(err);
    } finally {
      setScenariosLoading(false);
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

  const handleSendMessage = async (e?: React.FormEvent, customText?: string) => {
    if (e) e.preventDefault();
    const userText = (customText || chatInput).trim();
    if (!userText || chatLoading) return;

    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setChatMessages((prev) => [...prev, { sender: 'user', text: userText, time: currentTime }]);
    setChatInput('');
    setChatLoading(true);

    try {
      const res = await chatResearchCopilot(userText, report ? report.topic : 'General News');
      const agentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setChatMessages((prev) => [...prev, { sender: 'agent', text: res.response, time: agentTime }]);
    } catch (err: any) {
      const agentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setChatMessages((prev) => [
        ...prev,
        { sender: 'agent', text: 'Error connecting to Research Copilot: ' + err.message, time: agentTime }
      ]);
    } finally {
      setChatLoading(false);
    }
  };

  const handleClearChat = () => {
    setChatMessages([
      {
        sender: 'agent',
        text: 'Chat history cleared. What topic or claim would you like me to investigate?',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  const quickTopics = [
    'U.S. Administration Halting PERM Program for Tech Companies H-1B',
    'NASA Artemis Moon Mission Schedule Revisions',
    'Global Clean Energy Subsidies & Tariff Accords',
    'Central Bank Interest Rate Outlook & Liquidity Risks'
  ];

  const suggestedQuestions = [
    '⚖️ What are the legal precedents under the APA?',
    '👥 Who are the key winners and losers in this policy?',
    '📉 What is the projected economic compliance cost?',
    '🔍 Investigate grandfathering exemption clauses'
  ];

  return (
    <div className="min-h-screen bg-base-100 text-base-content flex flex-col font-sans">
      {/* DaisyUI Navbar with Brand & Theme Switcher */}
      <header className="navbar bg-base-200/90 backdrop-blur-md border-b border-base-300 sticky top-0 z-50 px-4 lg:px-8">
        <div className="navbar-start gap-3">
          <div className="btn btn-ghost btn-circle bg-primary text-primary-content shadow-lg hover:bg-primary/90">
            <Brain size={24} />
          </div>
          <div>
            <div className="font-extrabold text-lg md:text-xl tracking-tight flex items-center gap-2">
              <span>Agentic News Analyser</span>
              <span className="badge badge-primary badge-sm font-bold hidden sm:inline-flex">ADK 2.0</span>
            </div>
            <div className="text-xs text-base-content/60 font-medium hidden md:block">
              25-Agent Autonomous Fleet • Google ADK & Gemini
            </div>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <div className="badge badge-success badge-outline gap-2 py-3 px-4 text-xs font-semibold shadow-sm">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
            <span>Firestore Live Sync Active</span>
          </div>
        </div>

        <div className="navbar-end gap-2">
          {/* DaisyUI Theme Selector Dropdown */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-sm btn-outline border-base-300 hover:border-primary gap-2 shadow-sm font-medium"
            >
              <Palette size={16} className="text-primary" />
              <span className="capitalize hidden sm:inline">{theme}</span>
              <ChevronDown size={14} className="opacity-60" />
            </div>
            <div
              tabIndex={0}
              className="dropdown-content z-[100] p-3 shadow-2xl bg-base-200 rounded-2xl w-[92vw] sm:w-[620px] md:w-[700px] max-w-[calc(100vw-1.5rem)] border border-base-300 mt-2"
            >
              <div className="flex items-center justify-between px-2 pb-2 mb-2 border-b border-base-300">
                <span className="text-xs uppercase tracking-wider text-primary font-bold">
                  Select Theme ({DAISY_THEMES.length})
                </span>
                <span className="text-xs text-base-content/70 font-medium">
                  Active: <span className="capitalize font-bold text-primary">{theme}</span>
                </span>
              </div>
              <ul className="menu p-0 grid grid-cols-2 sm:grid-cols-4 gap-1">
                {DAISY_THEMES.map((th) => (
                  <li key={th.id}>
                    <button
                      className={`flex items-center justify-between py-1.5 px-2.5 rounded-lg text-xs md:text-sm ${
                        theme === th.id ? 'active font-bold text-primary-content bg-primary' : 'hover:bg-base-300'
                      }`}
                      onClick={() => setTheme(th.id)}
                    >
                      <span className="flex items-center gap-1.5 truncate">
                        <span>{th.icon}</span>
                        <span className="capitalize truncate">{th.name}</span>
                      </span>
                      {theme === th.id && <span className="badge badge-xs badge-ghost ml-1">Active</span>}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>

      {/* DaisyUI Hero Section */}
      <section className="hero py-12 px-4 bg-gradient-to-b from-base-200/60 to-base-100">
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

          <p className="py-4 text-base-content/70 text-base md:text-lg max-w-2xl leading-relaxed">
            Forensic cross-source auditing under IFCN principles, contradiction detection, chronological narrative evolution, and causal consequence modeling.
          </p>

          {/* Search Box with DaisyUI Join */}
          <div className="w-full max-w-3xl mt-2">
            <div className="join w-full shadow-2xl border border-base-300 rounded-2xl bg-base-100 p-1.5 focus-within:border-primary transition-all">
              <div className="join-item flex items-center pl-4 text-base-content/50">
                <Search size={22} />
              </div>
              <input
                type="text"
                className="input input-ghost join-item w-full focus:outline-none text-base px-3"
                placeholder="Enter breaking event, headline, or policy topic..."
                value={topicInput}
                onChange={(e) => setTopicInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                disabled={loading}
              />
              <button
                className="btn btn-primary join-item rounded-xl gap-2 px-6 shadow-md"
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
                    <span>Run Fleet (25 Agents)</span>
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
                  onClick={() => handleSearch(qt)}
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

      {/* DaisyUI Animated Loading Screen */}
      {loading && (
        <div className="container mx-auto px-4 max-w-3xl my-8">
          <div className="card bg-base-200 border border-base-300 shadow-2xl p-6 md:p-10 text-center">
            {/* Multi-Ring Spinner Visual */}
            <div className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <span className="loading loading-spinner text-primary loading-lg absolute scale-150"></span>
              <span className="loading loading-ring text-secondary loading-lg absolute scale-125"></span>
              <span className="loading loading-dots text-accent loading-md absolute"></span>
              <Brain size={30} className="text-primary animate-pulse relative z-10" />
            </div>

            <h2 className="text-2xl font-black text-base-content mb-2">
              Deploying 25 Autonomous ADK Agents
            </h2>
            <p className="text-sm text-base-content/70 max-w-md mx-auto mb-8">
              Auditing cross-spectrum media dispatches, IFCN principles, and chronological narrative evolution...
            </p>

            {/* Stages Pipeline */}
            <div className="flex flex-col gap-3 text-left max-w-xl mx-auto w-full">
              {fleetStages.map((stg, idx) => {
                const isDone = idx < loadingStage;
                const isActive = idx === loadingStage;

                return (
                  <div
                    key={idx}
                    className={`flex items-start gap-4 p-3.5 rounded-xl border transition-all ${
                      isActive
                        ? 'bg-primary/10 border-primary shadow-md scale-[1.01]'
                        : isDone
                        ? 'bg-base-100 border-success/30'
                        : 'bg-base-100/50 border-base-300 opacity-60'
                    }`}
                  >
                    <div className="mt-0.5 flex-shrink-0">
                      {isDone ? (
                        <CheckCircle2 size={20} className="text-success" />
                      ) : isActive ? (
                        <span className="loading loading-spinner loading-sm text-primary"></span>
                      ) : (
                        <div className="w-4 h-4 rounded-full border-2 border-base-content/20 m-0.5"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className={`text-sm font-bold ${isActive ? 'text-primary' : 'text-base-content'}`}>
                        {stg.title}
                      </div>
                      {isActive && (
                        <div className="text-xs text-base-content/70 mt-0.5 leading-relaxed">
                          {stg.desc}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Main Content Dashboard */}
      {!loading && report && (
        <main className="container mx-auto px-4 lg:px-8 pb-16 flex-1 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
            {/* Vertical Side Navigation */}
            <aside className="w-full lg:w-72 xl:w-80 flex-shrink-0 lg:sticky lg:top-20 z-20">
              <div className="card bg-base-200/95 backdrop-blur-md border border-base-300 shadow-xl p-3">
                <div className="flex items-center justify-between px-2.5 pb-2.5 mb-2 border-b border-base-300">
                  <div className="flex items-center gap-2">
                    <Layers size={16} className="text-primary" />
                    <span className="text-xs font-bold uppercase tracking-wider text-base-content/80">
                      Intelligence Fleet
                    </span>
                  </div>
                  <span className="badge badge-primary badge-xs font-bold">25 Agents</span>
                </div>

                <ul className="menu menu-sm md:menu-md p-0 gap-1 w-full">
                  <li>
                    <button
                      className={`flex items-center justify-between py-2.5 px-3 rounded-xl font-medium transition-all ${
                        activeTab === 'brief'
                          ? 'active font-bold shadow-md bg-primary text-primary-content'
                          : 'hover:bg-base-300 text-base-content'
                      }`}
                      onClick={() => setActiveTab('brief')}
                    >
                      <span className="flex items-center gap-2.5">
                        <FileText size={18} className={activeTab === 'brief' ? 'text-primary-content' : 'text-primary'} />
                        <span>Executive Brief</span>
                      </span>
                    </button>
                  </li>

                  <li>
                    <button
                      className={`flex items-center justify-between py-2.5 px-3 rounded-xl font-medium transition-all ${
                        activeTab === 'verification'
                          ? 'active font-bold shadow-md bg-primary text-primary-content'
                          : 'hover:bg-base-300 text-base-content'
                      }`}
                      onClick={() => setActiveTab('verification')}
                    >
                      <span className="flex items-center gap-2.5">
                        <ShieldCheck size={18} className={activeTab === 'verification' ? 'text-primary-content' : 'text-success'} />
                        <span>Fact Checks & Bias</span>
                      </span>
                      <span className={`badge badge-xs font-bold ${activeTab === 'verification' ? 'badge-neutral' : 'badge-ghost'}`}>
                        {report.verifications?.length || 0}
                      </span>
                    </button>
                  </li>

                  <li>
                    <button
                      className={`flex items-center justify-between py-2.5 px-3 rounded-xl font-medium transition-all ${
                        activeTab === 'timeline'
                          ? 'active font-bold shadow-md bg-primary text-primary-content'
                          : 'hover:bg-base-300 text-base-content'
                      }`}
                      onClick={() => setActiveTab('timeline')}
                    >
                      <span className="flex items-center gap-2.5">
                        <Clock size={18} className={activeTab === 'timeline' ? 'text-primary-content' : 'text-info'} />
                        <span>Timeline</span>
                      </span>
                      <span className={`badge badge-xs font-bold ${activeTab === 'timeline' ? 'badge-neutral' : 'badge-ghost'}`}>
                        {report.timeline?.events?.length || 0}
                      </span>
                    </button>
                  </li>

                  <li>
                    <button
                      className={`flex items-center justify-between py-2.5 px-3 rounded-xl font-medium transition-all ${
                        activeTab === 'insights'
                          ? 'active font-bold shadow-md bg-primary text-primary-content'
                          : 'hover:bg-base-300 text-base-content'
                      }`}
                      onClick={() => {
                        setActiveTab('insights');
                        if (!scenariosData && (!report.future_scenarios || report.future_scenarios.length === 0)) {
                          handleLoadScenarios();
                        }
                      }}
                    >
                      <span className="flex items-center gap-2.5">
                        <TrendingUp size={18} className={activeTab === 'insights' ? 'text-primary-content' : 'text-warning'} />
                        <span>Causal & Scenarios</span>
                      </span>
                      {scenariosLoading ? (
                        <span className="loading loading-spinner loading-xs text-primary"></span>
                      ) : (
                        <span className="badge badge-xs badge-outline badge-primary font-semibold">On Demand</span>
                      )}
                    </button>
                  </li>

                  <li>
                    <button
                      className={`flex items-center justify-between py-2.5 px-3 rounded-xl font-medium transition-all ${
                        activeTab === 'quiz'
                          ? 'active font-bold shadow-md bg-primary text-primary-content'
                          : 'hover:bg-base-300 text-base-content'
                      }`}
                      onClick={() => {
                        setActiveTab('quiz');
                        if (!quiz) handleLoadQuiz();
                      }}
                    >
                      <span className="flex items-center gap-2.5">
                        <BookOpen size={18} className={activeTab === 'quiz' ? 'text-primary-content' : 'text-accent'} />
                        <span>Active Recall Tutor</span>
                      </span>
                    </button>
                  </li>

                  <li>
                    <button
                      className={`flex items-center justify-between py-2.5 px-3 rounded-xl font-medium transition-all ${
                        activeTab === 'debate'
                          ? 'active font-bold shadow-md bg-primary text-primary-content'
                          : 'hover:bg-base-300 text-base-content'
                      }`}
                      onClick={() => {
                        setActiveTab('debate');
                        if (!debate) handleLoadDebate();
                      }}
                    >
                      <span className="flex items-center gap-2.5">
                        <Scale size={18} className={activeTab === 'debate' ? 'text-primary-content' : 'text-secondary'} />
                        <span>Perspective Debate</span>
                      </span>
                    </button>
                  </li>

                  <li>
                    <button
                      className={`flex items-center justify-between py-2.5 px-3 rounded-xl font-medium transition-all ${
                        activeTab === 'copilot'
                          ? 'active font-bold shadow-md bg-primary text-primary-content'
                          : 'hover:bg-base-300 text-base-content'
                      }`}
                      onClick={() => setActiveTab('copilot')}
                    >
                      <span className="flex items-center gap-2.5">
                        <MessageSquare size={18} className={activeTab === 'copilot' ? 'text-primary-content' : 'text-primary'} />
                        <span>Research Copilot</span>
                      </span>
                    </button>
                  </li>
                </ul>

                {/* Topic Metadata Box inside Side Nav */}
                <div className="mt-3 pt-3 border-t border-base-300 text-xs text-base-content/70 flex flex-col gap-1.5 px-1">
                  <div className="font-semibold text-base-content truncate">
                    Topic: <span className="font-normal opacity-80">{report.topic}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span>Sources Analyzed:</span>
                    <span className="badge badge-ghost badge-xs font-bold">
                      {report.articles_analyzed?.length || report.sources_analyzed?.length || 6}
                    </span>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 min-w-0 w-full">

          {/* TAB 1: EXECUTIVE BRIEF & PRIMER */}
          {activeTab === 'brief' && (
            <div className="flex flex-col gap-6">
              {/* Executive Summary Card */}
              <div className="card bg-base-200 border border-base-300 shadow-xl">
                <div className="card-body p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-2 border-b border-base-300">
                    <div className="card-title text-xl md:text-2xl font-black text-base-content flex items-center gap-3">
                      <FileText size={24} className="text-primary" />
                      <span>Executive Intelligence Brief: {report.topic}</span>
                    </div>
                    <div className="badge badge-outline badge-primary font-medium py-3 px-3 self-start md:self-auto">
                      Audited across {report.articles_analyzed?.length || report.sources_analyzed?.length || 6} major outlets
                    </div>
                  </div>

                  <p className="text-base md:text-lg leading-relaxed text-base-content/90 mt-4 font-normal">
                    {report.executive_summary}
                  </p>

                  {/* DaisyUI Stats for Key Numbers (F19) */}
                  {report.key_metrics_and_numbers && report.key_metrics_and_numbers.length > 0 && (
                    <div className="mt-6">
                      <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                        Key Numbers & Statistical Baseline (F19)
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                        {report.key_metrics_and_numbers.map((metric, idx) => (
                          <div key={idx} className="stat bg-base-100 rounded-xl border border-base-300 shadow-sm p-4">
                            <div className="stat-figure text-primary">
                              <BarChart3 size={20} />
                            </div>
                            <div className="stat-title text-xs font-bold uppercase">Metric #{idx + 1}</div>
                            <div className="stat-value text-sm md:text-base font-bold text-base-content whitespace-normal leading-snug mt-1">
                              {metric}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* WHO / WHERE / WHAT PRIMER & JARGON BUSTER */}
              {report.context_primer && (
                <div className="card bg-base-200 border border-base-300 shadow-xl">
                  <div className="card-body p-6 md:p-8">
                    <div className="card-title text-xl font-black text-base-content flex items-center gap-3 pb-2 border-b border-base-300">
                      <HelpCircle size={24} className="text-secondary" />
                      <span>Who / Where / What Primer & Jargon Buster (F1, F27)</span>
                    </div>

                    {/* Origins & Backdrop */}
                    {report.context_primer.background_story && (
                      <div className="alert alert-info bg-info/10 text-info-content border border-info/30 rounded-xl mt-4 shadow-sm">
                        <Building2 size={22} className="flex-shrink-0 text-info" />
                        <div>
                          <div className="font-bold text-sm text-info uppercase tracking-wider">
                            Origins & Historical Backdrop
                          </div>
                          <div className="text-sm md:text-base text-base-content/90 mt-1 leading-relaxed">
                            {report.context_primer.background_story}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Key Entities & Stakeholders */}
                    {report.context_primer.primer_items && report.context_primer.primer_items.length > 0 && (
                      <div className="mt-6">
                        <div className="text-xs font-bold uppercase tracking-wider text-secondary mb-3">
                          Key Entities & Core Stakeholders
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {report.context_primer.primer_items.map((item, idx) => (
                            <div key={idx} className="card bg-base-100 border border-base-300 shadow-sm p-5 hover:border-secondary transition-all">
                              <div className="flex items-center justify-between mb-2">
                                <span className={`badge ${
                                  item.entity_type === 'ORGANIZATION'
                                    ? 'badge-primary'
                                    : item.entity_type === 'CONCEPT'
                                    ? 'badge-secondary'
                                    : item.entity_type === 'LOCATION'
                                    ? 'badge-accent'
                                    : 'badge-neutral'
                                } badge-sm font-bold uppercase`}>
                                  {item.entity_type}
                                </span>
                              </div>
                              <div className="font-bold text-base md:text-lg text-base-content">
                                {item.entity_name}
                              </div>
                              <div className="text-sm text-base-content/80 mt-1 leading-relaxed">
                                {item.explainer_2_lines}
                              </div>
                              {item.historical_context && (
                                <div className="text-xs text-base-content/60 border-t border-base-200 pt-2 mt-3 italic">
                                  <strong>Context:</strong> {item.historical_context}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Jargon Buster Glossary */}
                    {report.context_primer.jargon_definitions && Object.keys(report.context_primer.jargon_definitions).length > 0 && (
                      <div className="mt-6">
                        <div className="text-xs font-bold uppercase tracking-wider text-accent mb-3 flex items-center gap-2">
                          <BookOpen size={16} />
                          <span>Jargon Buster (Plain-Language Policy & Legal Terms)</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {Object.entries(report.context_primer.jargon_definitions).map(([term, def], idx) => (
                            <div key={idx} className="card bg-base-100 border border-base-300 shadow-sm p-4">
                              <div className="font-bold text-accent text-sm md:text-base flex items-center gap-2">
                                <span>{term}</span>
                              </div>
                              <div className="text-xs md:text-sm text-base-content/80 mt-1.5 leading-relaxed">
                                {def}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Consensus Points */}
              <div className="card bg-base-200 border border-base-300 shadow-xl">
                <div className="card-body p-6 md:p-8">
                  <div className="card-title text-xl font-black text-base-content flex items-center gap-3 pb-2 border-b border-base-300">
                    <CheckCircle2 size={24} className="text-success" />
                    <span>High-Confidence Consensus Points Across Reporting</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {report.consensus_points?.map((pt, idx) => (
                      <div key={idx} className="card bg-base-100 border border-success/30 shadow-sm p-4 flex flex-row items-start gap-3">
                        <CheckCircle2 size={20} className="text-success flex-shrink-0 mt-0.5" />
                        <div className="text-sm md:text-base text-base-content leading-relaxed">{pt}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Analyzed Media Articles & Primary Source Filings */}
              <div className="card bg-base-200 border border-base-300 shadow-xl">
                <div className="card-body p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-2 border-b border-base-300">
                    <div className="card-title text-xl font-black text-base-content flex items-center gap-3">
                      <Layers size={24} className="text-primary" />
                      <span>
                        Analyzed Media Articles & Primary Source Filings ({report.articles_analyzed?.length || report.sources_analyzed?.length || 0})
                      </span>
                    </div>
                    <span className="text-xs text-base-content/60">
                      Click headline or button to read original publication
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                    {report.articles_analyzed && report.articles_analyzed.length > 0 ? (
                      report.articles_analyzed.map((art, idx) => (
                        <div
                          key={idx}
                          className="card bg-base-100 border border-base-300 shadow-md hover:shadow-xl hover:border-primary transition-all p-5 flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <span className="badge badge-primary badge-outline font-bold text-xs">
                                {art.outlet}
                              </span>
                              {art.published_date && (
                                <span className="badge badge-ghost badge-sm gap-1 text-xs opacity-70">
                                  <Calendar size={12} />
                                  <span>{art.published_date}</span>
                                </span>
                              )}
                            </div>
                            <a
                              href={art.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-bold text-sm md:text-base text-base-content hover:text-primary transition-colors line-clamp-3 leading-snug mt-1"
                            >
                              {art.title}
                            </a>
                            {art.author && (
                              <div className="text-xs text-base-content/60 mt-2">
                                By {art.author}
                              </div>
                            )}
                          </div>
                          <a
                            href={art.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-sm btn-outline btn-primary w-full gap-2 mt-4"
                          >
                            <span>Read Article</span>
                            <ExternalLink size={14} />
                          </a>
                        </div>
                      ))
                    ) : (
                      report.sources_analyzed?.map((src, idx) => (
                        <div key={idx} className="card bg-base-100 border border-base-300 shadow-md p-5 flex flex-col justify-between">
                          <div>
                            <span className="badge badge-primary badge-outline font-bold text-xs">{src}</span>
                            <div className="font-bold text-base text-base-content mt-2">
                              Official Reporting & Wire Dispatches from {src}
                            </div>
                          </div>
                          <a
                            href={`https://news.google.com/search?q=${encodeURIComponent(report.topic + ' ' + src)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-sm btn-outline btn-primary w-full gap-2 mt-4"
                          >
                            <span>Search Dispatches</span>
                            <ExternalLink size={14} />
                          </a>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>

              {/* DaisyUI Collapse for Raw Model Trace Log (Clean & Collapsed by Default) */}
              {report.raw_markdown && (
                <div className="collapse collapse-arrow bg-base-200 border border-base-300 shadow-md rounded-2xl">
                  <input type="checkbox" />
                  <div className="collapse-title font-medium flex items-center gap-2 text-sm text-base-content/70">
                    <Sparkles size={16} className="text-primary" />
                    <span>Inspect Raw Multi-Agent Execution Log & Gemini Output (Technical Trace)</span>
                  </div>
                  <div className="collapse-content">
                    <pre className="bg-base-300/60 p-4 rounded-xl text-xs overflow-x-auto text-base-content/80 font-mono leading-relaxed max-h-96">
                      {report.raw_markdown}
                    </pre>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: VERIFICATION & BIAS */}
          {activeTab === 'verification' && (
            <div className="flex flex-col gap-6">
              {/* Fact Verifications (F6) */}
              <div className="card bg-base-200 border border-base-300 shadow-xl">
                <div className="card-body p-6 md:p-8">
                  <div className="card-title text-xl font-black text-base-content flex items-center gap-3 pb-2 border-b border-base-300">
                    <ShieldCheck size={24} className="text-success" />
                    <span>IFCN Forensic Claim Verification Audit (F6)</span>
                  </div>

                  <div className="flex flex-col gap-4 mt-4">
                    {report.verifications?.map((v) => (
                      <div key={v.claim_id} className="card bg-base-100 border border-base-300 shadow-sm p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                          <span className="badge badge-neutral font-bold text-xs">
                            Claim ID: {v.claim_id}
                          </span>
                          <div className="flex items-center gap-3">
                            <span className="text-xs text-base-content/70 font-semibold">
                              Confidence: {Math.round(v.confidence * 100)}%
                            </span>
                            <span className={`badge ${
                              v.status === 'VERIFIED'
                                ? 'badge-success text-success-content'
                                : v.status === 'DISPUTED'
                                ? 'badge-warning text-warning-content'
                                : 'badge-error text-error-content'
                            } font-bold text-xs py-2.5 px-3`}>
                              {v.status}
                            </span>
                          </div>
                        </div>

                        <div className="text-base md:text-lg font-bold text-base-content leading-snug">
                          "{v.claim_text}"
                        </div>

                        <p className="text-sm text-base-content/80 mt-2 leading-relaxed">
                          {v.reasoning}
                        </p>

                        <div className="text-xs text-base-content/60 mt-3 pt-3 border-t border-base-200 flex flex-wrap gap-2">
                          <span className="font-bold text-base-content/80">Corroborating:</span>
                          <span>{v.corroborating_sources?.join(', ') || 'Primary Records'}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Cross-Source Contradictions (F7) */}
              <div className="card bg-base-200 border border-base-300 shadow-xl">
                <div className="card-body p-6 md:p-8">
                  <div className="card-title text-xl font-black text-base-content flex items-center gap-3 pb-2 border-b border-base-300">
                    <AlertTriangle size={24} className="text-warning" />
                    <span>Cross-Source Contradictions & Side-by-Side Divergence (F7)</span>
                  </div>

                  <div className="flex flex-col gap-4 mt-4">
                    {report.contradictions?.map((c) => (
                      <div key={c.contradiction_id} className="card bg-base-100 border border-warning/30 shadow-md p-6">
                        <div className="flex items-center gap-2 text-warning font-bold text-sm mb-3">
                          <AlertTriangle size={16} />
                          <span>{c.topic_aspect} ({c.divergence_type})</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div className="card bg-base-200 border-l-4 border-primary p-4 rounded-xl">
                            <div className="text-xs font-bold text-primary uppercase">{c.outlet_a}</div>
                            <div className="text-sm font-medium text-base-content mt-1">"{c.claim_a}"</div>
                          </div>

                          <div className="card bg-base-200 border-l-4 border-secondary p-4 rounded-xl">
                            <div className="text-xs font-bold text-secondary uppercase">{c.outlet_b}</div>
                            <div className="text-sm font-medium text-base-content mt-1">"{c.claim_b}"</div>
                          </div>
                        </div>

                        <div className="alert alert-warning bg-warning/10 text-warning-content border border-warning/20 text-xs md:text-sm py-2 px-3 rounded-lg">
                          <strong>Evidentiary Audit:</strong> {c.analysis}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Media Framing & Political Lean Spectrum (F8) */}
              <div className="card bg-base-200 border border-base-300 shadow-xl">
                <div className="card-body p-6 md:p-8">
                  <div className="card-title text-xl font-black text-base-content flex items-center gap-3 pb-2 border-b border-base-300">
                    <Scale size={24} className="text-accent" />
                    <span>Media Framing & Political Lean Spectrum (F8)</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    {report.bias_evaluations?.map((b, idx) => (
                      <div key={idx} className="card bg-base-100 border border-base-300 shadow-sm p-5">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-bold text-base text-base-content">{b.outlet}</span>
                          <span className="badge badge-accent badge-outline text-xs font-bold">
                            {b.assessed_lean}
                          </span>
                        </div>
                        <p className="text-sm text-base-content/80 mt-1 leading-relaxed">
                          {b.framing_narrative}
                        </p>
                        {b.loaded_terms_identified?.length > 0 && (
                          <div className="text-xs text-base-content/60 mt-3 pt-2 border-t border-base-200">
                            <span className="font-bold text-warning">Loaded Terms:</span>{' '}
                            {b.loaded_terms_identified.join(', ')}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: TIMELINE (DaisyUI Timeline Component) */}
          {activeTab === 'timeline' && (
            <div className="card bg-base-200 border border-base-300 shadow-xl">
              <div className="card-body p-6 md:p-8">
                <div className="card-title text-xl font-black text-base-content flex items-center gap-3 pb-2 border-b border-base-300">
                  <Clock size={24} className="text-primary" />
                  <span>Chronological Event Timeline & Narrative Evolution (F2, F29)</span>
                </div>

                {report.timeline?.narrative_evolution_summary && (
                  <div className="alert alert-info bg-info/10 text-info-content border border-info/30 rounded-xl my-4">
                    <Clock size={20} className="text-info flex-shrink-0" />
                    <div>
                      <div className="font-bold text-xs uppercase text-info tracking-wider">
                        Narrative Shift Synthesis
                      </div>
                      <div className="text-sm md:text-base text-base-content/90 mt-1">
                        {report.timeline.narrative_evolution_summary}
                      </div>
                    </div>
                  </div>
                )}

                {/* DaisyUI Timeline */}
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-6">
                  {report.timeline?.events?.map((ev, idx) => {
                    const isEven = idx % 2 === 0;

                    return (
                      <li key={idx}>
                        {idx > 0 && <hr className="bg-primary/40" />}
                        <div className={`timeline-${isEven ? 'start md:text-end' : 'end'} mb-8`}>
                          <div className="badge badge-info badge-outline badge-sm gap-1 font-mono font-bold mb-1">
                            <Calendar size={12} />
                            <span>{ev.timestamp_or_date}</span>
                          </div>
                          <div className="font-bold text-base md:text-lg text-base-content mt-1">
                            {ev.headline}
                          </div>
                          <div className="text-sm text-base-content/80 mt-1 leading-relaxed">
                            {ev.description}
                          </div>
                          <div className="flex flex-wrap items-center gap-2 mt-2">
                            {ev.source_url ? (
                              <a
                                href={ev.source_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link link-primary text-xs flex items-center gap-1 font-semibold"
                              >
                                <span>Outlet: {ev.source_outlet}</span>
                                <ExternalLink size={12} />
                              </a>
                            ) : (
                              <span className="text-xs text-base-content/60">Outlet: {ev.source_outlet}</span>
                            )}
                            {ev.narrative_shift && (
                              <span className="badge badge-secondary badge-outline text-xs">
                                Shift: {ev.narrative_shift}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="timeline-middle">
                          <div className="bg-primary text-primary-content p-1.5 rounded-full shadow-md">
                            <Clock size={16} />
                          </div>
                        </div>
                        {idx < (report.timeline?.events?.length || 0) - 1 && <hr className="bg-primary/40" />}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 4: DEEP INSIGHTS & SCENARIOS */}
          {activeTab === 'insights' && (
            <div className="flex flex-col gap-6">
              {/* Header with Regenerate Button */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-base-300">
                <div className="text-xl md:text-2xl font-black text-base-content flex items-center gap-3">
                  <TrendingUp size={24} className="text-primary" />
                  <span>Causal Diagnostics & Forward Scenarios (F15, F34, F35)</span>
                </div>
                <button
                  className="btn btn-sm btn-outline btn-neutral gap-2 self-start sm:self-auto"
                  onClick={handleLoadScenarios}
                  disabled={scenariosLoading}
                >
                  <RefreshCw size={14} className={scenariosLoading ? 'animate-spin' : ''} />
                  <span>{scenariosData ? 'Regenerate Scenarios' : 'Run Scenario Fleet'}</span>
                </button>
              </div>

              {scenariosLoading ? (
                <div className="card bg-base-200 border border-base-300 shadow-xl p-12 text-center">
                  <span className="loading loading-spinner loading-lg text-primary mx-auto mb-4"></span>
                  <h3 className="text-lg font-bold">Simulating Causal Diagnostics & Forward Scenarios</h3>
                  <p className="text-sm text-base-content/70 mt-1 max-w-md mx-auto">
                    Synthesizing 3-tier consequence cascades, root-cause 5-Whys, and forward probabilistic trajectories on demand...
                  </p>
                </div>
              ) : (
                (() => {
                  const rootCause = scenariosData?.root_cause_analysis || report.root_cause_analysis;
                  const consequences = scenariosData?.consequences_tree || report.consequences_tree;
                  const scenarios = scenariosData?.future_scenarios || report.future_scenarios;

                  return (
                    <>
                      {/* Root Cause & Consequences */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Root Causes */}
                        <div className="card bg-base-200 border border-base-300 shadow-xl">
                          <div className="card-body p-6">
                            <div className="card-title text-xl font-black text-base-content flex items-center gap-2 pb-2 border-b border-base-300">
                              <Brain size={22} className="text-error" />
                              <span>Root Cause Diagnostics (F34)</span>
                            </div>

                            <div className="mt-4">
                              <div className="text-xs font-bold uppercase tracking-wider text-error mb-2">
                                Immediate Triggers
                              </div>
                              <div className="flex flex-col gap-2">
                                {rootCause?.immediate_triggers?.map((trig: string, idx: number) => (
                                  <div key={idx} className="card bg-base-100 border border-base-300 p-3 text-sm text-base-content">
                                    • {trig}
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="mt-4">
                              <div className="text-xs font-bold uppercase tracking-wider text-error mb-2">
                                Structural Failure Points
                              </div>
                              <div className="flex flex-col gap-2">
                                {rootCause?.structural_failure_points?.map((sf: string, idx: number) => (
                                  <div key={idx} className="card bg-base-100 border border-base-300 p-3 text-sm text-base-content">
                                    • {sf}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Consequences Tree */}
                        <div className="card bg-base-200 border border-base-300 shadow-xl">
                          <div className="card-body p-6">
                            <div className="card-title text-xl font-black text-base-content flex items-center gap-2 pb-2 border-b border-base-300">
                              <TrendingUp size={22} className="text-info" />
                              <span>3-Tier Consequences Tree (F35)</span>
                            </div>

                            <div className="flex flex-col gap-3 mt-4">
                              {consequences?.map((cq: any, idx: number) => (
                                <div
                                  key={idx}
                                  className="card bg-base-100 border-l-4 border-info border-y border-r border-base-300 p-4 shadow-sm"
                                >
                                  <div className="text-xs font-bold text-info uppercase tracking-wider">
                                    {cq.order.replace('_', ' ')}: {cq.affected_sector_or_group}
                                  </div>
                                  <div className="text-sm font-medium text-base-content mt-1 leading-snug">
                                    {cq.impact_description}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Forward Scenarios */}
                      <div className="card bg-base-200 border border-base-300 shadow-xl">
                        <div className="card-body p-6 md:p-8">
                          <div className="card-title text-xl font-black text-base-content flex items-center gap-3 pb-2 border-b border-base-300">
                            <Sparkles size={24} className="text-secondary" />
                            <span>Forward-Looking Scenarios & Signals to Watch (F15)</span>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
                            {scenarios?.map((sc: any, idx: number) => (
                              <div key={idx} className="card bg-base-100 border border-base-300 shadow-md p-6 flex flex-col justify-between">
                                <div>
                                  <div className="flex items-center justify-between gap-2 mb-3">
                                    <span className="font-bold text-base md:text-lg text-base-content">{sc.scenario_title}</span>
                                    <span className="badge badge-secondary badge-sm font-bold">{sc.probability_rating}</span>
                                  </div>
                                  <p className="text-sm text-base-content/80 leading-relaxed mb-4">
                                    {sc.potential_impact}
                                  </p>
                                </div>
                                {sc.signals_to_watch && sc.signals_to_watch.length > 0 && (
                                  <div className="text-xs text-base-content/70 border-t border-base-200 pt-3">
                                    <strong className="text-primary block mb-1">Signals to Watch:</strong>
                                    <ul className="list-disc list-inside space-y-1">
                                      {sc.signals_to_watch.map((sig: string, sidx: number) => (
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
                    </>
                  );
                })()
              )}
            </div>
          )}

          {/* TAB 5: ACTIVE RECALL TUTOR (DaisyUI Radio Buttons & Alerts) */}
          {activeTab === 'quiz' && (
            <div className="card bg-base-200 border border-base-300 shadow-xl">
              <div className="card-body p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-base-300">
                  <div className="card-title text-xl font-black text-base-content flex items-center gap-3">
                    <BookOpen size={24} className="text-success" />
                    <span>Active Recall & News Literacy Tutor (F20)</span>
                  </div>
                  <button
                    className="btn btn-sm btn-outline btn-neutral gap-2 self-start sm:self-auto"
                    onClick={handleLoadQuiz}
                    disabled={quizLoading}
                  >
                    <RefreshCw size={14} className={quizLoading ? 'animate-spin' : ''} />
                    <span>Regenerate Quiz</span>
                  </button>
                </div>

                {quizLoading ? (
                  <div className="py-16 text-center text-base-content/70">
                    <span className="loading loading-spinner loading-lg text-primary mb-3"></span>
                    <div className="text-base font-semibold">Generating pedagogical comprehension questions...</div>
                  </div>
                ) : quiz ? (
                  <div className="mt-6 flex flex-col gap-6">
                    {quiz.questions?.map((q) => {
                      const selected = userAnswers[q.question_id];
                      const graded = quizResult?.feedback?.find((f: any) => f.question_id === q.question_id);

                      return (
                        <div key={q.question_id} className="card bg-base-100 border border-base-300 shadow-sm p-6">
                          <div className="font-bold text-base md:text-lg text-base-content mb-4 flex items-center gap-2">
                            <span className="badge badge-primary font-bold">#{q.question_id}</span>
                            <span>{q.question}</span>
                          </div>

                          {/* DaisyUI Radio Button Options */}
                          <div className="flex flex-col gap-2.5">
                            {q.options.map((opt, optIdx) => {
                              const isSelected = selected === optIdx;
                              let labelBorder = 'border-base-300 hover:border-primary hover:bg-base-200/50';

                              if (isSelected) {
                                labelBorder = 'border-primary bg-primary/10 shadow-sm';
                              }

                              if (graded) {
                                if (optIdx === q.correct_option_index) {
                                  labelBorder = 'border-success bg-success/15';
                                } else if (isSelected && !graded.correct) {
                                  labelBorder = 'border-error bg-error/15';
                                }
                              }

                              return (
                                <label
                                  key={optIdx}
                                  className={`label cursor-pointer justify-start gap-4 p-4 rounded-xl border transition-all ${labelBorder}`}
                                  onClick={() => {
                                    if (!quizResult) {
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
                                      if (!quizResult) {
                                        setUserAnswers((prev) => ({ ...prev, [q.question_id]: optIdx }));
                                      }
                                    }}
                                    disabled={!!quizResult}
                                  />
                                  <span className="badge badge-neutral font-bold text-xs">
                                    {String.fromCharCode(65 + optIdx)}
                                  </span>
                                  <span className="text-sm md:text-base text-base-content flex-1 font-medium">
                                    {opt}
                                  </span>
                                  {graded && optIdx === q.correct_option_index && (
                                    <CheckCircle2 size={20} className="text-success flex-shrink-0" />
                                  )}
                                  {graded && isSelected && !graded.correct && (
                                    <AlertTriangle size={20} className="text-error flex-shrink-0" />
                                  )}
                                </label>
                              );
                            })}
                          </div>

                          {graded && (
                            <div className={`alert ${graded.correct ? 'alert-success' : 'alert-error'} mt-4 rounded-xl text-sm`}>
                              {graded.correct ? <CheckCircle2 size={18} /> : <AlertTriangle size={18} />}
                              <div>
                                <span className="font-bold">{graded.correct ? 'Correct! ' : 'Incorrect. '}</span>
                                <span>{graded.explanation}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}

                    {/* Quiz Grading Result Action */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4 pt-4 border-t border-base-300">
                      {quizResult ? (
                        <div className="stat bg-primary text-primary-content rounded-2xl p-4 w-full shadow-md">
                          <div className="stat-title text-primary-content/80 font-bold uppercase text-xs">Quiz Score</div>
                          <div className="stat-value text-2xl md:text-3xl font-black">
                            {quizResult.score_percentage}%
                          </div>
                          <div className="stat-desc text-primary-content/90 font-medium">
                            {quizResult.correct_count} of {quizResult.total_questions} questions correct
                          </div>
                        </div>
                      ) : (
                        <button
                          className="btn btn-primary btn-block sm:btn-wide shadow-md font-bold text-base"
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
            </div>
          )}

          {/* TAB 6: PERSPECTIVE DEBATE */}
          {activeTab === 'debate' && (
            <div className="card bg-base-200 border border-base-300 shadow-xl">
              <div className="card-body p-6 md:p-8">
                <div className="card-title text-xl font-black text-base-content flex items-center gap-3 pb-2 border-b border-base-300">
                  <Scale size={24} className="text-warning" />
                  <span>Dialectical Perspective Debate Simulator (F38)</span>
                </div>

                {debateLoading ? (
                  <div className="py-16 text-center text-base-content/70">
                    <span className="loading loading-spinner loading-lg text-primary mb-3"></span>
                    <div className="text-base font-semibold">Synthesizing steelmanned opposing viewpoints...</div>
                  </div>
                ) : debate ? (
                  <div className="mt-4">
                    {/* Resolution Banner */}
                    <div className="alert alert-warning bg-warning/10 text-warning-content border border-warning/30 shadow-sm rounded-xl mb-6">
                      <Scale size={22} className="text-warning flex-shrink-0" />
                      <div>
                        <div className="font-bold text-xs uppercase tracking-wider text-warning">Resolution Under Debate</div>
                        <div className="text-base font-semibold mt-0.5">{debate.resolution_under_debate}</div>
                      </div>
                    </div>

                    {/* DaisyUI Chat turns for debate */}
                    <div className="flex flex-col gap-4 mb-6">
                      {debate.debate_turns?.map((turn, idx) => {
                        const isPro = turn.speaker_perspective.includes('PROPONENT');

                        return (
                          <div
                            key={idx}
                            className={`card bg-base-100 border-l-4 ${isPro ? 'border-primary' : 'border-warning'} border-y border-r border-base-300 p-5 shadow-sm`}
                          >
                            <div className={`font-bold text-xs uppercase tracking-wider mb-2 ${isPro ? 'text-primary' : 'text-warning'}`}>
                              {turn.speaker_perspective}
                            </div>
                            <div className="text-sm md:text-base text-base-content leading-relaxed">
                              {turn.core_argument}
                            </div>
                            {turn.grounding_citations?.length > 0 && (
                              <div className="text-xs text-base-content/60 mt-3 pt-2 border-t border-base-200">
                                <strong className="text-base-content/80">Grounding Evidence:</strong> {turn.grounding_citations.join(' • ')}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Compromise Synthesis */}
                    <div className="card bg-base-100 border border-info/40 shadow-md p-6 rounded-2xl">
                      <div className="font-bold text-base md:text-lg text-info mb-2 flex items-center gap-2">
                        <Sparkles size={18} />
                        <span>Neutral Compromise Synthesis & Policy Bridge</span>
                      </div>
                      <p className="text-sm md:text-base text-base-content/90 leading-relaxed">
                        {debate.neutral_compromise_synthesis}
                      </p>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          )}

          {/* TAB 7: LIVELY RESEARCH COPILOT (DaisyUI Chat Components) */}
          {activeTab === 'copilot' && (
            <div className="card bg-base-200 border border-base-300 shadow-xl h-[700px] flex flex-col">
              {/* Copilot Header */}
              <div className="p-4 md:p-6 border-b border-base-300 flex items-center justify-between bg-base-200/50">
                <div className="flex items-center gap-3">
                  <div className="btn btn-ghost btn-circle bg-primary text-primary-content shadow">
                    <Bot size={22} />
                  </div>
                  <div>
                    <div className="font-bold text-base md:text-lg text-base-content flex items-center gap-2">
                      <span>Research Copilot</span>
                      <span className="badge badge-primary badge-outline text-xs">Autonomous Mode</span>
                    </div>
                    <div className="text-xs text-base-content/60">
                      Context: {report.topic}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="badge badge-success badge-sm gap-1.5 py-2.5 font-medium shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-success-content animate-pulse"></span>
                    <span>Online • Gemini 3.1 Pro</span>
                  </div>
                  <button
                    onClick={handleClearChat}
                    className="btn btn-sm btn-ghost btn-outline border-base-300 gap-1.5"
                    title="Clear Chat History"
                  >
                    <Trash2 size={14} />
                    <span className="hidden sm:inline">Clear</span>
                  </button>
                </div>
              </div>

              {/* Chat Message History */}
              <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
                {chatMessages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`chat ${msg.sender === 'user' ? 'chat-end' : 'chat-start'}`}
                  >
                    <div className="chat-image avatar">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center shadow ${
                        msg.sender === 'user' ? 'bg-neutral text-neutral-content' : 'bg-primary text-primary-content'
                      }`}>
                        {msg.sender === 'user' ? <User size={18} /> : <Bot size={18} />}
                      </div>
                    </div>
                    <div className="chat-header text-xs opacity-60 mb-1 font-medium">
                      {msg.sender === 'user' ? 'You' : 'Research Copilot'}
                      <time className="text-[11px] ml-1.5 opacity-60">{msg.time}</time>
                    </div>
                    <div className={`chat-bubble text-sm md:text-base leading-relaxed ${
                      msg.sender === 'user' ? 'chat-bubble-primary text-primary-content' : 'chat-bubble-neutral text-neutral-content'
                    } shadow-md`}>
                      {msg.text}
                    </div>
                  </div>
                ))}

                {chatLoading && (
                  <div className="chat chat-start">
                    <div className="chat-image avatar">
                      <div className="w-9 h-9 rounded-full bg-primary text-primary-content flex items-center justify-center shadow">
                        <Bot size={18} />
                      </div>
                    </div>
                    <div className="chat-bubble chat-bubble-neutral flex items-center gap-2">
                      <span className="text-sm">Investigating sources...</span>
                      <span className="loading loading-dots loading-sm text-primary"></span>
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Prompt Suggestions */}
              <div className="px-4 py-2 bg-base-300/40 border-t border-base-300 flex items-center gap-2 overflow-x-auto no-scrollbar">
                <span className="text-xs font-bold text-base-content/60 uppercase whitespace-nowrap">
                  Prompts:
                </span>
                {suggestedQuestions.map((qText, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className="btn btn-xs btn-outline btn-neutral rounded-full whitespace-nowrap hover:btn-primary font-medium"
                    onClick={() => handleSendMessage(undefined, qText)}
                    disabled={chatLoading}
                  >
                    {qText}
                  </button>
                ))}
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSendMessage} className="p-4 bg-base-200 border-t border-base-300">
                <div className="join w-full shadow-md">
                  <input
                    type="text"
                    className="input input-bordered join-item w-full focus:outline-none"
                    placeholder="Ask a question or request an autonomous investigative deep-dive..."
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    disabled={chatLoading}
                  />
                  <button
                    type="submit"
                    className="btn btn-primary join-item gap-2 px-6"
                    disabled={chatLoading || !chatInput.trim()}
                  >
                    <span>Send</span>
                    <Send size={16} />
                  </button>
                </div>
              </form>
            </div>
          )}
            </div>
          </div>
        </main>
      )}

      {/* DaisyUI Footer */}
      <footer className="footer footer-center p-8 bg-base-200 text-base-content border-t border-base-300 mt-auto">
        <aside className="gap-2">
          <div className="flex items-center gap-2 font-bold text-base">
            <Brain size={20} className="text-primary" />
            <span>Agentic News Analyser</span>
          </div>
          <p className="text-xs text-base-content/70">
            Built with Google Agent Development Kit (ADK) & Google Gemini • Powered by Cloud Firestore & DaisyUI Themes
          </p>
        </aside>
      </footer>
    </div>
  );
}
