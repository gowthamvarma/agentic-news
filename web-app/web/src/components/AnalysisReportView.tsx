import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
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
  Building2,
  HelpCircle,
  Trash2,
  History,
  Copy,
  Check,
  CirclePause,
  Play,
  User,
  Globe
} from 'lucide-react';
import {
  updateAnalysis,
  generateQuiz,
  gradeQuiz,
  generateDebate,
  generateScenarios,
  chatResearchCopilot,
  fetchChatHistory,
  clearChatHistory
} from '../api';
import type {
  NewsIntelligenceReport,
  QuizPayload,
  PerspectiveDebateReport,
  ChatMessage
} from '../types';
import { RobotAvatar } from './RobotAvatar';
import { UserAvatar } from './UserAvatar';
import { FormattedMarkdown } from './FormattedMarkdown';
import { CrossSourceContradictionsSection } from './CrossSourceContradictionsSection';
import { TimelineSection } from './TimelineSection';
import { useToast } from '../context/ToastContext';

// Cache for resolved Wikipedia thumbnails to minimize network requests
const wikiThumbnailCache: Record<string, string> = {};

interface EntityAvatarProps {
  entityName: string;
  wikipediaUrl?: string | null;
  imageUrl?: string | null;
  entityType: string;
}

export const EntityAvatar: React.FC<EntityAvatarProps> = ({
  entityName,
  wikipediaUrl,
  imageUrl,
  entityType,
}) => {
  const [imgSrc, setImgSrc] = useState<string | null>(() => {
    if (imageUrl && !imageUrl.includes('upload.wikimedia.org/wikipedia/commons/thumb/')) {
      return imageUrl;
    }
    if (wikipediaUrl && wikiThumbnailCache[wikipediaUrl]) {
      return wikiThumbnailCache[wikipediaUrl];
    }
    return imageUrl || null;
  });
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    if (wikipediaUrl) {
      if (wikiThumbnailCache[wikipediaUrl]) {
        setImgSrc(wikiThumbnailCache[wikipediaUrl]);
        setHasError(false);
        return;
      }
      const pageTitle = wikipediaUrl.split('/wiki/')[1];
      if (pageTitle) {
        fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(pageTitle)}`)
          .then((res) => (res.ok ? res.json() : null))
          .then((data) => {
            if (isMounted && data?.thumbnail?.source) {
              wikiThumbnailCache[wikipediaUrl] = data.thumbnail.source;
              setImgSrc(data.thumbnail.source);
              setHasError(false);
            }
          })
          .catch(() => {});
      }
    }
    return () => {
      isMounted = false;
    };
  }, [wikipediaUrl]);

  if (imgSrc && !hasError) {
    if (entityType === 'PERSON') {
      return (
        <img
          src={imgSrc}
          alt={entityName}
          referrerPolicy="no-referrer"
          className="w-12 h-12 rounded-full object-cover border-2 border-secondary/40 flex-shrink-0 shadow-sm"
          loading="lazy"
          onError={() => setHasError(true)}
        />
      );
    }
    return (
      <img
        src={imgSrc}
        alt={entityName}
        referrerPolicy="no-referrer"
        className="w-11 h-11 rounded-lg object-contain bg-base-200 p-1 border border-base-300 flex-shrink-0 shadow-xs"
        loading="lazy"
        onError={() => setHasError(true)}
      />
    );
  }

  // Graceful Fallback Avatars
  if (entityType === 'PERSON') {
    return (
      <div className="w-12 h-12 rounded-full bg-secondary/15 text-secondary flex items-center justify-center font-bold text-lg flex-shrink-0 border border-secondary/30">
        {entityName.charAt(0)}
      </div>
    );
  }

  return (
    <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-base flex-shrink-0 border border-primary/20">
      <Building2 size={20} />
    </div>
  );
};

interface AnalysisReportViewProps {
  report: NewsIntelligenceReport;
  onUpdateReport?: (updated: NewsIntelligenceReport) => void;
  isStreaming?: boolean;
  streamStatus?: string;
  initialTab?: 'brief' | 'sources' | 'verification' | 'timeline' | 'insights' | 'quiz' | 'debate' | 'copilot';
}

export const AnalysisReportView: React.FC<AnalysisReportViewProps> = ({
  report,
  onUpdateReport,
  isStreaming = false,
  streamStatus = '',
  initialTab = 'brief'
}) => {
  const { showToast } = useToast();
  const [copiedLink, setCopiedLink] = useState(false);

  const [activeTab, setActiveTab] = useState<'brief' | 'sources' | 'verification' | 'timeline' | 'insights' | 'quiz' | 'debate' | 'copilot'>(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const h = window.location.hash.replace('#', '');
      if (['brief', 'sources', 'verification', 'timeline', 'insights', 'quiz', 'debate', 'copilot'].includes(h)) {
        return h as any;
      }
    }
    return initialTab;
  });

  // Check if sections are already saved in the report
  const hasSavedScenarios = !!(
    (report.future_scenarios && report.future_scenarios.length > 0) ||
    (report.root_cause_analysis && (
      (report.root_cause_analysis.immediate_triggers && report.root_cause_analysis.immediate_triggers.length > 0) ||
      (report.root_cause_analysis.structural_failure_points && report.root_cause_analysis.structural_failure_points.length > 0)
    ))
  );

  const hasSavedQuiz = !!(report.quiz && report.quiz.questions && report.quiz.questions.length > 0);
  const hasSavedDebate = !!(report.debate && report.debate.debate_turns && report.debate.debate_turns.length > 0);

  // Active Recall Quiz State
  const [quiz, setQuiz] = useState<QuizPayload | null>(() => report.quiz || null);
  const [quizLoading, setQuizLoading] = useState(false);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [quizResult, setQuizResult] = useState<any | null>(null);

  // Perspective Debate State
  const [debate, setDebate] = useState<PerspectiveDebateReport | null>(() => report.debate || null);
  const [debateLoading, setDebateLoading] = useState(false);

  // Causal Diagnostics & Forward Scenarios State
  const [scenariosData, setScenariosData] = useState<any | null>(() => {
    if (hasSavedScenarios) {
      return {
        root_cause_analysis: report.root_cause_analysis,
        consequences_tree: report.consequences_tree,
        future_scenarios: report.future_scenarios,
        lessons_learned: report.lessons_learned,
      };
    }
    return null;
  });
  const [scenariosLoading, setScenariosLoading] = useState(false);

  // Synchronize state if report changes (e.g. from cache or archive refresh)
  useEffect(() => {
    if (report.quiz && !quiz) {
      setQuiz(report.quiz);
    }
    if (report.debate && !debate) {
      setDebate(report.debate);
    }
    if (hasSavedScenarios && !scenariosData) {
      setScenariosData({
        root_cause_analysis: report.root_cause_analysis,
        consequences_tree: report.consequences_tree,
        future_scenarios: report.future_scenarios,
        lessons_learned: report.lessons_learned,
      });
    }
  }, [report, hasSavedScenarios]);

  // Derived execution statuses
  const scenariosStatus: 'ready' | 'loading' | 'paused' =
    scenariosLoading
      ? 'loading'
      : (scenariosData || hasSavedScenarios)
      ? 'ready'
      : 'paused';

  const quizStatus: 'ready' | 'loading' | 'paused' =
    quizLoading
      ? 'loading'
      : (quiz || hasSavedQuiz)
      ? 'ready'
      : 'paused';

  const debateStatus: 'ready' | 'loading' | 'paused' =
    debateLoading
      ? 'loading'
      : (debate || hasSavedDebate)
      ? 'ready'
      : 'paused';

  // Research Copilot Chat State
  const defaultGreeting: ChatMessage = {
    sender: 'agent',
    text: 'Hello! I am your Research Copilot powered by Google Gemini 3.8 Flash. Ask any follow-up question or request an autonomous investigative deep-dive over verified reporting.',
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(() => {
    if (report.chat_history && report.chat_history.length > 0) {
      return report.chat_history;
    }
    return [defaultGreeting];
  });
  const [chatInput, setChatInput] = useState('');
  const [chatLoading, setChatLoading] = useState(false);

  // Sync and restore chat history from Firestore
  useEffect(() => {
    const targetId = report.id || report.analysis_id;
    if (report.chat_history && report.chat_history.length > 0) {
      setChatMessages(report.chat_history);
      return;
    }

    if (targetId) {
      fetchChatHistory(targetId)
        .then((savedMsgs) => {
          if (savedMsgs && savedMsgs.length > 0) {
            setChatMessages(savedMsgs);
          }
        })
        .catch((err) => {
          console.warn('Could not retrieve Firestore chat history:', err);
        });
    }
  }, [report.id, report.analysis_id, report.chat_history]);

  const handleLoadScenarios = async () => {
    const targetId = report.id || report.analysis_id;
    setScenariosLoading(true);
    try {
      const data = await generateScenarios(report.topic, targetId);
      setScenariosData(data);
      if (targetId) {
        await updateAnalysis(targetId, {
          root_cause_analysis: data.root_cause_analysis,
          consequences_tree: data.consequences_tree,
          future_scenarios: data.future_scenarios,
          lessons_learned: data.lessons_learned,
        });
      }
      if (onUpdateReport) {
        onUpdateReport({
          ...report,
          root_cause_analysis: data.root_cause_analysis,
          consequences_tree: data.consequences_tree,
          future_scenarios: data.future_scenarios,
          lessons_learned: data.lessons_learned,
        });
      }
      showToast('Forward Scenarios synthesized & saved to Firestore');
    } catch (err: any) {
      console.error(err);
      showToast('Failed to generate scenarios: ' + (err?.message || err));
    } finally {
      setScenariosLoading(false);
    }
  };

  const handleLoadQuiz = async () => {
    const targetId = report.id || report.analysis_id;
    setQuizLoading(true);
    try {
      const data = await generateQuiz(report.topic, targetId);
      setQuiz(data);
      setQuizResult(null);
      setUserAnswers({});
      if (targetId) {
        await updateAnalysis(targetId, { quiz: data });
      }
      if (onUpdateReport) {
        onUpdateReport({ ...report, quiz: data });
      }
      showToast('Active Recall Quiz ready & saved to Firestore');
    } catch (err: any) {
      console.error(err);
      showToast('Failed to generate quiz: ' + (err?.message || err));
    } finally {
      setQuizLoading(false);
    }
  };

  const handleLoadDebate = async () => {
    const targetId = report.id || report.analysis_id;
    setDebateLoading(true);
    try {
      const data = await generateDebate(report.topic, targetId);
      setDebate(data);
      if (targetId) {
        await updateAnalysis(targetId, { debate: data });
      }
      if (onUpdateReport) {
        onUpdateReport({ ...report, debate: data });
      }
      showToast('Perspective Debate dialectic generated & saved to Firestore');
    } catch (err: any) {
      console.error(err);
      showToast('Failed to generate debate: ' + (err?.message || err));
    } finally {
      setDebateLoading(false);
    }
  };

  const handleCopyBookmarkLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedLink(true);
      showToast('Bookmark link copied to clipboard!');
      setTimeout(() => setCopiedLink(false), 2500);
    }).catch(() => {
      showToast('Could not copy URL automatically');
    });
  };

  const handleToggleFavorite = async () => {
    const targetId = report.id || report.analysis_id;
    if (!targetId) return;
    const nextFav = !report.is_favorite;
    const updated = { ...report, is_favorite: nextFav };
    if (onUpdateReport) onUpdateReport(updated);

    try {
      await updateAnalysis(targetId, { is_favorite: nextFav });
      showToast(nextFav ? 'Saved to favorites!' : 'Removed from favorites');
    } catch (e) {
      console.error(e);
      showToast('Failed to update favorite status');
    }
  };

  const handleGradeQuiz = async () => {
    if (!quiz) return;
    try {
      const res = await gradeQuiz(quiz.quiz_id, userAnswers);
      setQuizResult(res);
      showToast(`Quiz Graded: ${res.score_percentage}% Score!`);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSendMessage = async (e?: React.FormEvent, customText?: string) => {
    if (e) e.preventDefault();
    const userText = (customText || chatInput).trim();
    if (!userText || chatLoading) return;

    const targetId = report.id || report.analysis_id;
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setChatMessages((prev) => [...prev, { sender: 'user', text: userText, time: currentTime }]);
    setChatInput('');
    setChatLoading(true);

    try {
      const res = await chatResearchCopilot(userText, report.topic, targetId);
      const agentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      if (res.chat_history && res.chat_history.length > 0) {
        setChatMessages(res.chat_history);
      } else {
        setChatMessages((prev) => [...prev, { sender: 'agent', text: res.response, time: agentTime }]);
      }
      if (targetId && onUpdateReport) {
        onUpdateReport({
          ...report,
          chat_history: res.chat_history || [
            ...chatMessages,
            { sender: 'user', text: userText, time: currentTime },
            { sender: 'agent', text: res.response, time: agentTime }
          ]
        });
      }
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

  const handleClearChat = async () => {
    const targetId = report.id || report.analysis_id;
    if (targetId) {
      try {
        await clearChatHistory(targetId);
      } catch (err) {
        console.warn('Could not clear Firestore chat history:', err);
      }
    }
    const resetGreeting: ChatMessage = {
      sender: 'agent',
      text: 'Chat history cleared. What topic or claim would you like me to investigate?',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setChatMessages([resetGreeting]);
    if (onUpdateReport) {
      onUpdateReport({
        ...report,
        chat_history: []
      });
    }
    showToast('Copilot chat history cleared from Firestore');
  };

  const renderProbabilityRating = (ratingStr: string) => {
    let score = 3;
    const lower = ratingStr.toLowerCase();
    if (lower.includes('high') || lower.includes('likely')) score = 5;
    else if (lower.includes('moderate') || lower.includes('medium')) score = 3;
    else if (lower.includes('low') || lower.includes('unlikely')) score = 1;

    return (
      <div className="rating rating-xs" title={`Probability: ${ratingStr}`}>
        {[1, 2, 3, 4, 5].map((star) => (
          <input
            key={star}
            type="radio"
            name={`prob-rating-${star}`}
            className="mask mask-star-2 bg-warning"
            checked={star <= score}
            readOnly
          />
        ))}
      </div>
    );
  };

  const suggestedQuestions = [
    '⚖️ What are the legal precedents under the APA?',
    '👥 Who are the key winners and losers in this policy?',
    '📉 What is the projected economic compliance cost?',
    '🔍 Investigate grandfathering exemption clauses'
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
      {/* Desktop Sticky Side Navigation */}
      <aside className="w-full lg:w-72 xl:w-80 flex-shrink-0 lg:sticky lg:top-20 z-20 hidden lg:block">
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

          <ul className="menu menu-sm p-0 gap-1 w-full">
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
                  <FileText size={17} className={activeTab === 'brief' ? 'text-primary-content' : 'text-primary'} />
                  <span>Executive Brief</span>
                </span>
              </button>
            </li>

            <li>
              <button
                className={`flex items-center justify-between py-2.5 px-3 rounded-xl font-medium transition-all ${
                  activeTab === 'sources'
                    ? 'active font-bold shadow-md bg-primary text-primary-content'
                    : 'hover:bg-base-300 text-base-content'
                }`}
                onClick={() => setActiveTab('sources')}
              >
                <span className="flex items-center gap-2.5">
                  <Globe size={17} className={activeTab === 'sources' ? 'text-primary-content' : 'text-secondary'} />
                  <span>Verified Sources</span>
                </span>
                <span className={`badge badge-xs font-bold ${activeTab === 'sources' ? 'badge-neutral' : 'badge-ghost'}`}>
                  {report.articles_analyzed?.length || report.sources_analyzed?.length || 0}
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
                  <ShieldCheck size={17} className={activeTab === 'verification' ? 'text-primary-content' : 'text-success'} />
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
                  <Clock size={17} className={activeTab === 'timeline' ? 'text-primary-content' : 'text-info'} />
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
                onClick={() => setActiveTab('insights')}
              >
                <span className="flex items-center gap-2.5">
                  <TrendingUp size={17} className={activeTab === 'insights' ? 'text-primary-content' : 'text-warning'} />
                  <span>Causal & Scenarios</span>
                </span>
                {scenariosStatus === 'loading' ? (
                  <span className="badge badge-sm badge-info gap-1.5 py-1 px-2.5 font-semibold shadow-xs">
                    <span className="loading loading-spinner loading-xs"></span>
                    <span>Running</span>
                  </span>
                ) : scenariosStatus === 'ready' ? (
                  <span className={`badge badge-sm gap-1.5 py-1 px-2.5 font-semibold ${activeTab === 'insights' ? 'badge-neutral' : 'badge-success text-success-content'}`}>
                    <CheckCircle2 size={12} />
                    <span>Ready</span>
                  </span>
                ) : (
                  <span className={`badge badge-sm gap-1.5 py-1 px-2.5 font-semibold ${activeTab === 'insights' ? 'badge-neutral' : 'badge-warning text-warning-content'}`}>
                    <CirclePause size={12} />
                    <span>Paused</span>
                  </span>
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
                onClick={() => setActiveTab('quiz')}
              >
                <span className="flex items-center gap-2.5">
                  <BookOpen size={17} className={activeTab === 'quiz' ? 'text-primary-content' : 'text-accent'} />
                  <span>Active Recall Tutor</span>
                </span>
                {quizStatus === 'loading' ? (
                  <span className="badge badge-sm badge-info gap-1.5 py-1 px-2.5 font-semibold shadow-xs">
                    <span className="loading loading-spinner loading-xs"></span>
                    <span>Running</span>
                  </span>
                ) : quizStatus === 'ready' ? (
                  <span className={`badge badge-sm gap-1.5 py-1 px-2.5 font-semibold ${activeTab === 'quiz' ? 'badge-neutral' : 'badge-success text-success-content'}`}>
                    <CheckCircle2 size={12} />
                    <span>Ready</span>
                  </span>
                ) : (
                  <span className={`badge badge-sm gap-1.5 py-1 px-2.5 font-semibold ${activeTab === 'quiz' ? 'badge-neutral' : 'badge-warning text-warning-content'}`}>
                    <CirclePause size={12} />
                    <span>Paused</span>
                  </span>
                )}
              </button>
            </li>

            <li>
              <button
                className={`flex items-center justify-between py-2.5 px-3 rounded-xl font-medium transition-all ${
                  activeTab === 'debate'
                    ? 'active font-bold shadow-md bg-primary text-primary-content'
                    : 'hover:bg-base-300 text-base-content'
                }`}
                onClick={() => setActiveTab('debate')}
              >
                <span className="flex items-center gap-2.5">
                  <Scale size={17} className={activeTab === 'debate' ? 'text-primary-content' : 'text-secondary'} />
                  <span>Perspective Debate</span>
                </span>
                {debateStatus === 'loading' ? (
                  <span className="badge badge-sm badge-info gap-1.5 py-1 px-2.5 font-semibold shadow-xs">
                    <span className="loading loading-spinner loading-xs"></span>
                    <span>Running</span>
                  </span>
                ) : debateStatus === 'ready' ? (
                  <span className={`badge badge-sm gap-1.5 py-1 px-2.5 font-semibold ${activeTab === 'debate' ? 'badge-neutral' : 'badge-success text-success-content'}`}>
                    <CheckCircle2 size={12} />
                    <span>Ready</span>
                  </span>
                ) : (
                  <span className={`badge badge-sm gap-1.5 py-1 px-2.5 font-semibold ${activeTab === 'debate' ? 'badge-neutral' : 'badge-warning text-warning-content'}`}>
                    <CirclePause size={12} />
                    <span>Paused</span>
                  </span>
                )}
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
                  <MessageSquare size={17} className={activeTab === 'copilot' ? 'text-primary-content' : 'text-primary'} />
                  <span>Research Copilot</span>
                </span>
              </button>
            </li>

            <li className="mt-1 pt-1 border-t border-base-300">
              <Link
                to="/history"
                className="flex items-center justify-between py-2 px-3 rounded-xl font-medium transition-all hover:bg-base-300 text-base-content/90"
              >
                <span className="flex items-center gap-2.5">
                  <History size={16} className="text-secondary" />
                  <span className="text-xs">Browse All Archives</span>
                </span>
                <span className="badge badge-sm badge-neutral font-mono px-2 py-0.5">Archive</span>
              </Link>
            </li>
          </ul>

          {/* Topic Metadata Box */}
          <div className="mt-3 pt-3 border-t border-base-300 text-xs text-base-content/70 flex flex-col gap-1.5 px-1">
            <div className="font-semibold text-base-content truncate" title={report.topic}>
              Topic: <span className="font-normal opacity-80">{report.topic}</span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span>Sources Audited:</span>
              <span className="badge badge-ghost badge-xs font-bold">
                {report.articles_analyzed?.length || report.sources_analyzed?.length || 6}
              </span>
            </div>
            {(report.id || report.analysis_id) && (
              <div className="text-[10px] text-base-content/50 font-mono truncate pt-1">
                ID: {report.id || report.analysis_id}
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Mobile Horizontal Tabs Switcher */}
      <div className="w-full lg:hidden mb-2 overflow-x-auto no-scrollbar">
        <div className="tabs tabs-boxed bg-base-200 p-1 flex-nowrap w-max gap-1">
          <button
            className={`tab tab-sm font-medium ${activeTab === 'brief' ? 'tab-active font-bold' : ''}`}
            onClick={() => setActiveTab('brief')}
          >
            Brief
          </button>
          <button
            className={`tab tab-sm font-medium ${activeTab === 'sources' ? 'tab-active font-bold' : ''}`}
            onClick={() => setActiveTab('sources')}
          >
            Sources ({report.articles_analyzed?.length || report.sources_analyzed?.length || 0})
          </button>
          <button
            className={`tab tab-sm font-medium ${activeTab === 'verification' ? 'tab-active font-bold' : ''}`}
            onClick={() => setActiveTab('verification')}
          >
            Fact Checks ({report.verifications?.length || 0})
          </button>
          <button
            className={`tab tab-sm font-medium ${activeTab === 'timeline' ? 'tab-active font-bold' : ''}`}
            onClick={() => setActiveTab('timeline')}
          >
            Timeline ({report.timeline?.events?.length || 0})
          </button>
          <button
            className={`tab tab-sm font-medium gap-1.5 ${activeTab === 'insights' ? 'tab-active font-bold' : ''}`}
            onClick={() => setActiveTab('insights')}
          >
            <span>Scenarios</span>
            {scenariosStatus === 'loading' ? (
              <span className="loading loading-spinner loading-xs text-info"></span>
            ) : scenariosStatus === 'ready' ? (
              <CheckCircle2 size={12} className="text-success" />
            ) : (
              <CirclePause size={12} className="text-warning" />
            )}
          </button>
          <button
            className={`tab tab-sm font-medium gap-1.5 ${activeTab === 'quiz' ? 'tab-active font-bold' : ''}`}
            onClick={() => setActiveTab('quiz')}
          >
            <span>Recall Tutor</span>
            {quizStatus === 'loading' ? (
              <span className="loading loading-spinner loading-xs text-info"></span>
            ) : quizStatus === 'ready' ? (
              <CheckCircle2 size={12} className="text-success" />
            ) : (
              <CirclePause size={12} className="text-warning" />
            )}
          </button>
          <button
            className={`tab tab-sm font-medium gap-1.5 ${activeTab === 'debate' ? 'tab-active font-bold' : ''}`}
            onClick={() => setActiveTab('debate')}
          >
            <span>Debate</span>
            {debateStatus === 'loading' ? (
              <span className="loading loading-spinner loading-xs text-info"></span>
            ) : debateStatus === 'ready' ? (
              <CheckCircle2 size={12} className="text-success" />
            ) : (
              <CirclePause size={12} className="text-warning" />
            )}
          </button>
          <button
            className={`tab tab-sm font-medium ${activeTab === 'copilot' ? 'tab-active font-bold' : ''}`}
            onClick={() => setActiveTab('copilot')}
          >
            Copilot
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 min-w-0 w-full">
        {/* Live Fleet Pipeline Streaming Notification with Aura Glow */}
        {isStreaming && (
          <div className="relative p-0.5 rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent mb-6 shadow-md">
            <div className="alert alert-info bg-base-100 text-base-content rounded-[14px] flex items-center justify-between py-3 px-5 border-none">
              <div className="flex items-center gap-3">
                <span className="loading loading-spinner loading-sm text-primary"></span>
                <div>
                  <div className="font-bold text-xs text-primary uppercase tracking-wider">Live Fleet Pipeline Streaming</div>
                  <div className="text-xs text-base-content/80">{streamStatus || 'Progressive sections arriving in real time...'}</div>
                </div>
              </div>
              <span className="badge badge-sm badge-ghost font-mono uppercase text-[10px] tracking-wider">
                SSE Active
              </span>
            </div>
          </div>
        )}

        {/* TAB 1: EXECUTIVE BRIEF & PRIMER */}
        {activeTab === 'brief' && (
          <div className="flex flex-col gap-6">
            {/* Executive Summary Card */}
            <div className="card bg-base-200 border border-base-300 shadow-xl">
              <div className="card-body p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-base-300">
                  <div className="card-title text-xl md:text-2xl font-black text-base-content flex items-center gap-3">
                    <FileText size={24} className="text-primary flex-shrink-0" />
                    <span>Executive Intelligence Brief: {report.topic}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 self-start md:self-auto flex-shrink-0">
                    {/* Copy Bookmark Link Button */}
                    <button
                      onClick={handleCopyBookmarkLink}
                      className="btn btn-sm btn-outline border-base-300 hover:border-primary gap-1.5 shadow-sm"
                      title="Copy permanent bookmark URL for this analysis"
                    >
                      {copiedLink ? <Check size={14} className="text-success" /> : <Copy size={14} />}
                      <span className="text-xs">{copiedLink ? 'Copied Link!' : 'Bookmark Link'}</span>
                    </button>

                    {(report.id || report.analysis_id) && (
                      <button
                        onClick={handleToggleFavorite}
                        className={`btn btn-sm ${
                          report.is_favorite ? 'btn-warning text-warning-content' : 'btn-outline border-base-300'
                        } gap-1.5`}
                        title={report.is_favorite ? 'Remove from favorites' : 'Mark as favorite'}
                      >
                        <span>{report.is_favorite ? '★' : '☆'}</span>
                        <span className="text-xs">{report.is_favorite ? 'Favorited' : 'Favorite'}</span>
                      </button>
                    )}
                    <div className="badge badge-outline badge-primary font-medium py-3 px-3 whitespace-nowrap text-xs">
                      Audited across {report.articles_analyzed?.length || report.sources_analyzed?.length || 6} major outlets
                    </div>
                  </div>
                </div>

                <p className="text-base md:text-lg leading-relaxed text-base-content/90 mt-4 font-normal">
                  {report.executive_summary}
                </p>

                {/* Key Numbers & Statistical Baseline - Vertical Alignment */}
                {report.key_metrics_and_numbers && report.key_metrics_and_numbers.length > 0 && (
                  <div className="mt-8">
                    <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3 flex items-center gap-2">
                      <BarChart3 size={16} />
                      <span>Key Numbers & Statistical Baseline</span>
                    </div>
                    <div className="flex flex-col gap-3">
                      {report.key_metrics_and_numbers.map((metric, idx) => (
                        <div
                          key={idx}
                          className="bg-base-100 rounded-xl border border-base-300 shadow-sm p-4 hover:border-primary/30 transition-colors"
                        >
                          <div className="text-[11px] font-bold uppercase tracking-wider text-primary/80 mb-1">
                            Metric #{idx + 1}
                          </div>
                          <div className="text-sm md:text-base font-semibold text-base-content leading-relaxed">
                            {metric}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* WHO / WHERE / WHAT PRIMER & JARGON BUSTER WITH ACCORDIONS */}
            {report.context_primer && (
              <div className="card bg-base-200 border border-base-300 shadow-xl">
                <div className="card-body p-6 md:p-8">
                  <div className="card-title text-xl font-black text-base-content flex items-center gap-3 pb-3 border-b border-base-300">
                    <HelpCircle size={24} className="text-secondary flex-shrink-0" />
                    <span>Who / Where / What Primer & Jargon Buster</span>
                  </div>

                  {/* Origins & Historical Backdrop */}
                  {report.context_primer.background_story && (
                    <div className="alert alert-info bg-info/10 text-info-content border border-info/30 rounded-xl mt-4 shadow-sm">
                      <Building2 size={22} className="flex-shrink-0 text-info" />
                      <div>
                        <div className="font-bold text-xs uppercase text-info tracking-wider">
                          Origins & Historical Backdrop
                        </div>
                        <div className="text-sm md:text-base text-base-content/90 mt-1 leading-relaxed">
                          {report.context_primer.background_story}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* PRIMER ENTITIES: ORGANIZATIONS & PERSONS */}
                  {(() => {
                    const orgItems = report.context_primer.primer_items?.filter(
                      (item) => item.entity_type === 'ORGANIZATION'
                    ) || [];
                    const personItems = report.context_primer.primer_items?.filter(
                      (item) => item.entity_type === 'PERSON'
                    ) || [];
                    const conceptAndLocationItems = report.context_primer.primer_items?.filter(
                      (item) => item.entity_type !== 'ORGANIZATION' && item.entity_type !== 'PERSON'
                    ) || [];

                    return (
                      <>
                        {/* 1. KEY ORGANIZATIONS & INSTITUTIONS (SHOWN FIRST & PROMINENTLY) */}
                        {orgItems.length > 0 && (
                          <div className="mt-6">
                            <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3 flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Building2 size={16} />
                                <span>Key Organizations & Institutions ({orgItems.length})</span>
                              </div>
                              <span className="badge badge-primary badge-outline badge-xs font-semibold">
                                Corporate & Regulatory Bodies
                              </span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                              {orgItems.map((item, idx) => (
                                <div
                                  key={idx}
                                  className="card bg-base-100 border border-base-300 shadow-sm p-4 hover:border-primary/40 transition-all flex flex-col justify-between"
                                >
                                  <div>
                                    <div className="flex items-start gap-3 mb-2">
                                      <EntityAvatar
                                        entityName={item.entity_name}
                                        wikipediaUrl={item.wikipedia_url}
                                        imageUrl={item.image_url}
                                        entityType="ORGANIZATION"
                                      />
                                      <div className="min-w-0">
                                        <div className="font-bold text-base text-base-content leading-snug">
                                          {item.entity_name}
                                        </div>
                                        {item.role_or_title && (
                                          <div className="text-xs font-medium text-primary leading-tight mt-0.5">
                                            {item.role_or_title}
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                    <p className="text-xs text-base-content/80 mt-2 leading-relaxed">
                                      {item.explainer_2_lines}
                                    </p>
                                    {item.historical_context && (
                                      <div className="text-[11px] text-base-content/60 mt-2 pt-2 border-t border-base-200">
                                        <strong>Context:</strong> {item.historical_context}
                                      </div>
                                    )}
                                  </div>
                                  {item.wikipedia_url && (
                                    <div className="mt-3 pt-2 border-t border-base-200 flex justify-end">
                                      <a
                                        href={item.wikipedia_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link link-primary text-xs flex items-center gap-1 font-semibold hover:underline"
                                      >
                                        <span>Wikipedia Article</span>
                                        <ExternalLink size={12} />
                                      </a>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* 2. KEY FIGURES & LEADERS (PERSONS) */}
                        {personItems.length > 0 && (
                          <div className="mt-6">
                            <div className="text-xs font-bold uppercase tracking-wider text-secondary mb-3 flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <User size={16} />
                                <span>Key Figures & Decision Makers (Persons) ({personItems.length})</span>
                              </div>
                              <span className="badge badge-secondary badge-outline badge-xs font-semibold">
                                Leaders & Officials
                              </span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                              {personItems.map((item, idx) => (
                                <div
                                  key={idx}
                                  className="card bg-base-100 border border-base-300 shadow-sm p-4 hover:border-secondary/40 transition-all flex flex-col justify-between"
                                >
                                  <div>
                                    <div className="flex items-start gap-3 mb-2">
                                      <EntityAvatar
                                        entityName={item.entity_name}
                                        wikipediaUrl={item.wikipedia_url}
                                        imageUrl={item.image_url}
                                        entityType="PERSON"
                                      />
                                      <div className="min-w-0">
                                        <div className="font-bold text-base text-base-content leading-snug">
                                          {item.entity_name}
                                        </div>
                                        {item.role_or_title && (
                                          <div className="text-xs font-medium text-secondary leading-tight mt-0.5">
                                            {item.role_or_title}
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                    <p className="text-xs text-base-content/80 mt-2 leading-relaxed">
                                      {item.explainer_2_lines}
                                    </p>
                                    {item.historical_context && (
                                      <div className="text-[11px] text-base-content/60 mt-2 pt-2 border-t border-base-200">
                                        <strong>Context:</strong> {item.historical_context}
                                      </div>
                                    )}
                                  </div>
                                  {item.wikipedia_url && (
                                    <div className="mt-3 pt-2 border-t border-base-200 flex justify-end">
                                      <a
                                        href={item.wikipedia_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link link-secondary text-xs flex items-center gap-1 font-semibold hover:underline"
                                      >
                                        <span>Wikipedia Dossier</span>
                                        <ExternalLink size={12} />
                                      </a>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* 3. KEY CONCEPTS, DOCTRINES & LOCATIONS */}
                        {conceptAndLocationItems.length > 0 && (
                          <div className="mt-6">
                            <div className="text-xs font-bold uppercase tracking-wider text-accent mb-3 flex items-center gap-2">
                              <HelpCircle size={16} />
                              <span>Key Doctrines, Legal Frameworks & Locations</span>
                            </div>
                            <div className="flex flex-col gap-2">
                              {conceptAndLocationItems.map((item, idx) => (
                                <div
                                  key={idx}
                                  className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-xl shadow-sm"
                                >
                                  <input type="checkbox" defaultChecked={idx === 0} />
                                  <div className="collapse-title text-base font-bold text-base-content flex items-center justify-between pr-10">
                                    <div className="flex items-center gap-3">
                                      <span className={`badge ${
                                        item.entity_type === 'CONCEPT'
                                          ? 'badge-accent'
                                          : item.entity_type === 'LOCATION'
                                          ? 'badge-info'
                                          : 'badge-neutral'
                                      } badge-sm font-bold uppercase`}>
                                        {item.entity_type}
                                      </span>
                                      <span>{item.entity_name}</span>
                                      {item.role_or_title && (
                                        <span className="text-xs font-normal text-base-content/60 hidden sm:inline">
                                          — {item.role_or_title}
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                  <div className="collapse-content text-sm text-base-content/85 leading-relaxed pt-1">
                                    <p>{item.explainer_2_lines}</p>
                                    {item.historical_context && (
                                      <div className="text-xs text-base-content/65 border-t border-base-200 pt-2 mt-3 italic">
                                        <strong>Historical Context:</strong> {item.historical_context}
                                      </div>
                                    )}
                                    {item.wikipedia_url && (
                                      <div className="mt-3 pt-2 border-t border-base-200 flex justify-end">
                                        <a
                                          href={item.wikipedia_url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="link link-primary text-xs flex items-center gap-1 font-semibold hover:underline"
                                        >
                                          <span>Wikipedia Article</span>
                                          <ExternalLink size={12} />
                                        </a>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </>
                    );
                  })()}

                  {/* DaisyUI Accordions for Jargon Buster */}
                  {report.context_primer.jargon_definitions && Object.keys(report.context_primer.jargon_definitions).length > 0 && (
                    <div className="mt-6">
                      <div className="text-xs font-bold uppercase tracking-wider text-accent mb-3 flex items-center gap-2">
                        <BookOpen size={16} />
                        <span>Jargon Buster (Expand to Read Plain-Language Legal & Policy Terms)</span>
                      </div>
                      <div className="flex flex-col gap-2">
                        {Object.entries(report.context_primer.jargon_definitions).map(([term, def], idx) => (
                          <div
                            key={idx}
                            className="collapse collapse-plus bg-base-100 border border-base-300 rounded-xl shadow-sm"
                          >
                            <input type="checkbox" defaultChecked={idx === 0} />
                            <div className="collapse-title text-sm md:text-base font-bold text-accent">
                              {term}
                            </div>
                            <div className="collapse-content text-xs md:text-sm text-base-content/85 leading-relaxed pt-1">
                              <p>{def}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Consensus Points Card */}
            {report.consensus_points && report.consensus_points.length > 0 && (
              <div className="card bg-base-200 border border-base-300 shadow-xl">
                <div className="card-body p-6 md:p-8">
                  <div className="card-title text-xl font-black text-base-content flex items-center gap-3 pb-3 border-b border-base-300">
                    <CheckCircle2 size={24} className="text-success flex-shrink-0" />
                    <span>Cross-Spectrum Consensus Points</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                    {report.consensus_points.map((pt, idx) => (
                      <div key={idx} className="card bg-base-100 border border-base-300 p-4 flex flex-row items-start gap-3 shadow-sm">
                        <span className="badge badge-success badge-sm font-bold mt-0.5">✓</span>
                        <span className="text-sm text-base-content/90 font-medium leading-snug">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB: VERIFIED SOURCES (Cross-Regional APAC & Global Outlets) */}
        {activeTab === 'sources' && (
          <div className="flex flex-col gap-6">
            <div className="card bg-base-200 border border-base-300 shadow-xl">
              <div className="card-body p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-base-300">
                  <div className="card-title text-xl font-black text-base-content flex items-center gap-3">
                    <Globe size={24} className="text-primary flex-shrink-0" />
                    <span>Verified Source Articles & Media Bias Directory</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="badge badge-primary font-bold text-xs">
                      {report.articles_analyzed?.length || 0} Articles Audited
                    </span>
                    <span className="badge badge-outline text-xs font-semibold">
                      APAC & Major Economies
                    </span>
                  </div>
                </div>

                <p className="text-sm text-base-content/80 mt-3 leading-relaxed">
                  Every source article ingested by the multi-agent fleet is verified, categorized by editorial lean, and linked directly with its canonical URL so you can inspect and audit the reporting firsthand.
                </p>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {report.articles_analyzed && report.articles_analyzed.length > 0 ? (
                    report.articles_analyzed.map((art, idx) => (
                      <div
                        key={idx}
                        className="card bg-base-100 border border-base-300 shadow-sm p-5 hover:border-primary/50 transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <div className="flex items-center gap-2">
                              {art.flag && <span className="text-lg">{art.flag}</span>}
                              <span className="font-bold text-sm text-base-content">{art.outlet}</span>
                              {art.country && (
                                <span className="text-xs text-base-content/60 hidden sm:inline">
                                  ({art.country})
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-1.5">
                              {art.editorial_lean && (
                                <span className={`badge badge-xs font-bold ${
                                  art.editorial_lean.includes('Left')
                                    ? 'badge-info'
                                    : art.editorial_lean.includes('Right')
                                    ? 'badge-warning'
                                    : 'badge-accent'
                                }`}>
                                  {art.editorial_lean}
                                </span>
                              )}
                              {art.reliability_tier && (
                                <span className="badge badge-outline badge-xs font-medium">
                                  {art.reliability_tier}
                                </span>
                              )}
                            </div>
                          </div>

                          <h4 className="font-bold text-base text-base-content leading-snug mb-2">
                            {art.title}
                          </h4>

                          <p className="text-xs text-base-content/75 line-clamp-3 leading-relaxed mb-4">
                            {art.content}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-base-200 flex items-center justify-between text-xs">
                          <span className="text-base-content/50">
                            {art.published_date || 'Recent Report'}
                          </span>
                          {art.url ? (
                            <a
                              href={art.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-xs btn-primary gap-1 font-semibold"
                            >
                              <span>Read Original Article</span>
                              <ExternalLink size={12} />
                            </a>
                          ) : (
                            <span className="text-base-content/40 italic">Link unavailable</span>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-2 alert alert-info bg-info/10 text-info-content border border-info/30 rounded-xl">
                      <Globe size={20} className="text-info flex-shrink-0" />
                      <span>No individual source articles were indexed for this specific query run.</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: VERIFICATION & BIAS */}
        {activeTab === 'verification' && (
          <div className="flex flex-col gap-6">
            {/* Fact Verifications with DaisyUI Radial Progress */}
            <div className="card bg-base-200 border border-base-300 shadow-xl">
              <div className="card-body p-6 md:p-8">
                <div className="card-title text-xl font-black text-base-content flex items-center gap-3 pb-3 border-b border-base-300">
                  <ShieldCheck size={24} className="text-success flex-shrink-0" />
                  <span>IFCN Forensic Claim Verification Audit</span>
                </div>

                <div className="flex flex-col gap-4 mt-4">
                  {report.verifications?.map((v) => {
                    const confPercent = Math.round(v.confidence * 100);

                    return (
                      <div key={v.claim_id} className="card bg-base-100 border border-base-300 shadow-sm p-6 hover:border-primary/50 transition-all">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                          <div className="flex items-center gap-2">
                            <span className="badge badge-neutral font-bold text-xs">
                              Claim #{v.claim_id}
                            </span>
                            <span className={`badge ${
                              v.status === 'VERIFIED'
                                ? 'badge-success text-success-content'
                                : v.status === 'DISPUTED'
                                ? 'badge-warning text-warning-content'
                                : 'badge-error text-error-content'
                            } font-bold text-xs py-2 px-3`}>
                              {v.status}
                            </span>
                          </div>

                          {/* Radial Progress for Confidence Score */}
                          <div className="flex items-center gap-3 self-end sm:self-auto">
                            <div className="text-right">
                              <div className="text-[10px] uppercase font-bold text-base-content/60">Audit Confidence</div>
                              <div className="text-xs font-bold">{confPercent}% Confirmed</div>
                            </div>
                            <div
                              className={`radial-progress ${
                                confPercent >= 80 ? 'text-success' : confPercent >= 50 ? 'text-warning' : 'text-error'
                              } font-bold text-xs`}
                              style={{ '--value': confPercent, '--size': '2.75rem', '--thickness': '3px' } as React.CSSProperties}
                              role="progressbar"
                            >
                              {confPercent}%
                            </div>
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
                          <span>{v.corroborating_sources?.join(', ') || 'Primary Records & Court Filings'}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Cross-Source Contradictions & Side-by-Side Divergence */}
            <CrossSourceContradictionsSection contradictions={report.contradictions} />

            {/* Media Framing & Political Lean Spectrum */}
            <div className="card bg-base-200 border border-base-300 shadow-xl">
              <div className="card-body p-6 md:p-8">
                <div className="card-title text-xl font-black text-base-content flex items-center gap-3 pb-3 border-b border-base-300">
                  <Scale size={24} className="text-accent flex-shrink-0" />
                  <span>Media Framing & Political Lean Spectrum</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  {report.bias_evaluations?.map((b, idx) => (
                    <div key={idx} className="card bg-base-100 border border-base-300 shadow-sm p-5 hover:border-accent transition-all">
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

        {/* TAB 3: TIMELINE (Chronological & Recent Trending Incidents) */}
        {activeTab === 'timeline' && (
          <TimelineSection timeline={report.timeline} />
        )}

        {/* TAB 4: DEEP INSIGHTS & SCENARIOS */}
        {activeTab === 'insights' && (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-base-300">
              <div className="flex flex-wrap items-center gap-3">
                <div className="text-xl md:text-2xl font-black text-base-content flex items-center gap-3">
                  <TrendingUp size={24} className="text-primary flex-shrink-0" />
                  <span>Causal Diagnostics & Forward Scenarios</span>
                </div>
                {scenariosStatus === 'paused' && (
                  <span className="badge badge-warning gap-2 py-2.5 px-3.5 text-xs font-bold shadow-sm my-0.5">
                    <CirclePause size={14} />
                    <span>Paused (Not Started)</span>
                  </span>
                )}
                {scenariosStatus === 'loading' && (
                  <span className="badge badge-info gap-2 py-2.5 px-3.5 text-xs font-bold shadow-sm my-0.5">
                    <span className="loading loading-spinner loading-xs mr-1"></span>
                    <span>Simulating Fleet...</span>
                  </span>
                )}
                {scenariosStatus === 'ready' && (
                  <span className="badge badge-success gap-2 py-2.5 px-3.5 text-xs font-bold text-success-content shadow-sm my-0.5">
                    <CheckCircle2 size={14} />
                    <span>Saved in Firestore</span>
                  </span>
                )}
              </div>

              {scenariosStatus === 'ready' && (
                <button
                  className="btn btn-sm btn-outline btn-neutral gap-2 self-start sm:self-auto shadow-sm"
                  onClick={handleLoadScenarios}
                  disabled={scenariosLoading}
                >
                  <RefreshCw size={14} className={scenariosLoading ? 'animate-spin' : ''} />
                  <span>Regenerate Scenarios</span>
                </button>
              )}
            </div>

            {/* PAUSED STATE: Centered Action Trigger Card */}
            {scenariosStatus === 'paused' && (
              <div className="card bg-base-200 border border-base-300 shadow-xl p-8 md:p-14 text-center max-w-2xl mx-auto my-6 w-full">
                <div className="relative w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-2xl bg-warning/15 text-warning border border-warning/30 shadow-inner">
                  <CirclePause size={42} className="text-warning" />
                </div>
                <div className="badge badge-warning badge-sm uppercase tracking-wider font-bold mx-auto mb-3">
                  On-Demand Simulation • Paused (Not Started)
                </div>
                <h3 className="text-2xl font-black text-base-content mb-2">
                  Launch Causal Diagnostics & Forward Scenarios
                </h3>
                <p className="text-sm text-base-content/75 max-w-md mx-auto mb-8 leading-relaxed">
                  Synthesize 3-tier consequence cascades, root-cause 5-Whys failure points, and forward probabilistic projections. Results will be saved permanently to Firestore for instant viewing from the archive.
                </p>
                <button
                  onClick={handleLoadScenarios}
                  disabled={scenariosLoading}
                  className="btn btn-primary btn-md md:btn-lg gap-2.5 mx-auto shadow-xl hover:scale-105 transition-all font-bold px-8"
                >
                  <Play size={20} className="fill-current" />
                  <span>Run Scenario Fleet (On Demand)</span>
                </button>
                <div className="text-[11px] text-base-content/50 mt-4 flex items-center justify-center gap-1.5">
                  <CheckCircle2 size={13} className="text-success" />
                  <span>Results will be saved to Firestore to prevent re-running in archive</span>
                </div>
              </div>
            )}

            {scenariosStatus === 'loading' && (
              <div className="card bg-base-200 border border-base-300 shadow-xl p-12 text-center">
                <span className="loading loading-spinner loading-lg text-primary mx-auto mb-4"></span>
                <h3 className="text-lg font-bold">Simulating Causal Diagnostics & Forward Scenarios</h3>
                <p className="text-sm text-base-content/70 mt-1 max-w-md mx-auto mb-6">
                  Synthesizing 3-tier consequence cascades, root-cause 5-Whys, and forward probabilistic trajectories on demand...
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto w-full">
                  <div className="skeleton h-24 w-full rounded-xl"></div>
                  <div className="skeleton h-24 w-full rounded-xl"></div>
                  <div className="skeleton h-24 w-full rounded-xl"></div>
                </div>
              </div>
            )}

            {scenariosStatus === 'ready' && (
              (() => {
                const rootCause = scenariosData?.root_cause_analysis || report.root_cause_analysis;
                const consequences = scenariosData?.consequences_tree || report.consequences_tree;
                const scenarios = scenariosData?.future_scenarios || report.future_scenarios;

                return (
                  <>
                    {/* Root Cause & Consequences */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="card bg-base-200 border border-base-300 shadow-xl">
                        <div className="card-body p-6">
                          <div className="card-title text-xl font-black text-base-content flex items-center gap-2 pb-2 border-b border-base-300">
                            <Brain size={22} className="text-error flex-shrink-0" />
                            <span>Root Cause Diagnostics</span>
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

                      <div className="card bg-base-200 border border-base-300 shadow-xl">
                        <div className="card-body p-6">
                          <div className="card-title text-xl font-black text-base-content flex items-center gap-2 pb-2 border-b border-base-300">
                            <TrendingUp size={22} className="text-info flex-shrink-0" />
                            <span>3-Tier Consequences Tree</span>
                          </div>

                          <div className="flex flex-col gap-3 mt-4">
                            {consequences?.map((cq: any, idx: number) => (
                              <div
                                key={idx}
                                className="card bg-base-100 border-l-4 border-info border-y border-r border-base-300 p-4 shadow-sm"
                              >
                                <div className="text-xs font-bold text-info uppercase tracking-wider">
                                  {cq.order?.replace('_', ' ')}: {cq.affected_sector_or_group}
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

                    {/* Forward Scenarios with DaisyUI Rating Component */}
                    <div className="card bg-base-200 border border-base-300 shadow-xl">
                      <div className="card-body p-6 md:p-8">
                        <div className="card-title text-xl font-black text-base-content flex items-center gap-3 pb-3 border-b border-base-300">
                          <Sparkles size={24} className="text-secondary flex-shrink-0" />
                          <span>Forward-Looking Scenarios & Probability Ratings</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
                          {scenarios?.map((sc: any, idx: number) => (
                            <div key={idx} className="card bg-base-100 border border-base-300 shadow-md p-6 flex flex-col justify-between hover:border-secondary transition-all">
                              <div>
                                <div className="flex items-center justify-between gap-2 mb-2">
                                  <span className="badge badge-secondary badge-sm font-bold">{sc.probability_rating}</span>
                                  {renderProbabilityRating(sc.probability_rating)}
                                </div>
                                <div className="font-bold text-base md:text-lg text-base-content mt-1 mb-2">
                                  {sc.scenario_title}
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

        {/* TAB 5: ACTIVE RECALL TUTOR (DaisyUI Radio, Label, Radial Progress) */}
        {activeTab === 'quiz' && (
          <div className="card bg-base-200 border border-base-300 shadow-xl">
            <div className="card-body p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-base-300">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="card-title text-xl font-black text-base-content flex items-center gap-3">
                    <BookOpen size={24} className="text-success flex-shrink-0" />
                    <span>Active Recall & News Literacy Tutor</span>
                  </div>
                  {quizStatus === 'paused' && (
                    <span className="badge badge-warning gap-2 py-2.5 px-3.5 text-xs font-bold shadow-sm my-0.5">
                      <CirclePause size={14} />
                      <span>Paused (Not Started)</span>
                    </span>
                  )}
                  {quizStatus === 'loading' && (
                    <span className="badge badge-info gap-2 py-2.5 px-3.5 text-xs font-bold shadow-sm my-0.5">
                      <span className="loading loading-spinner loading-xs mr-1"></span>
                      <span>Generating Quiz...</span>
                    </span>
                  )}
                  {quizStatus === 'ready' && (
                    <span className="badge badge-success gap-2 py-2.5 px-3.5 text-xs font-bold text-success-content shadow-sm my-0.5">
                      <CheckCircle2 size={14} />
                      <span>Saved in Firestore</span>
                    </span>
                  )}
                </div>

                {quizStatus === 'ready' && (
                  <button
                    className="btn btn-sm btn-outline btn-neutral gap-2 self-start sm:self-auto shadow-sm"
                    onClick={handleLoadQuiz}
                    disabled={quizLoading}
                  >
                    <RefreshCw size={14} className={quizLoading ? 'animate-spin' : ''} />
                    <span>Regenerate Quiz</span>
                  </button>
                )}
              </div>

              {/* PAUSED STATE: Centered Action Trigger Card */}
              {quizStatus === 'paused' && (
                <div className="p-8 md:p-14 text-center max-w-2xl mx-auto my-4 w-full">
                  <div className="relative w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-2xl bg-warning/15 text-warning border border-warning/30 shadow-inner">
                    <CirclePause size={42} className="text-warning" />
                  </div>
                  <div className="badge badge-warning badge-sm uppercase tracking-wider font-bold mx-auto mb-3">
                    On-Demand Tutor • Paused (Not Started)
                  </div>
                  <h3 className="text-2xl font-black text-base-content mb-2">
                    Generate Active Recall Quiz
                  </h3>
                  <p className="text-sm text-base-content/75 max-w-md mx-auto mb-8 leading-relaxed">
                    Test your news literacy with pedagogical multiple-choice questions grounded in audited evidence. Results will be saved permanently to Firestore for this investigation.
                  </p>
                  <button
                    onClick={handleLoadQuiz}
                    disabled={quizLoading}
                    className="btn btn-primary btn-md md:btn-lg gap-2.5 mx-auto shadow-xl hover:scale-105 transition-all font-bold px-8"
                  >
                    <Play size={20} className="fill-current" />
                    <span>Launch Active Recall Tutor Quiz</span>
                  </button>
                  <div className="text-[11px] text-base-content/50 mt-4 flex items-center justify-center gap-1.5">
                    <CheckCircle2 size={13} className="text-success" />
                    <span>Saved in Firestore for replay & archival access</span>
                  </div>
                </div>
              )}

              {quizStatus === 'loading' && (
                <div className="py-16 text-center text-base-content/70">
                  <span className="loading loading-spinner loading-lg text-primary mb-3"></span>
                  <div className="text-base font-semibold">Generating pedagogical comprehension questions...</div>
                  <div className="flex flex-col gap-3 max-w-lg mx-auto mt-6">
                    <div className="skeleton h-12 w-full"></div>
                    <div className="skeleton h-12 w-full"></div>
                  </div>
                </div>
              )}

              {quizStatus === 'ready' && quiz && (
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

                        {/* DaisyUI Radio & Label Controls */}
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

                  {/* Quiz Grading Result Action with Radial Progress */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4 pt-4 border-t border-base-300">
                    {quizResult ? (
                      <div className="stat bg-primary text-primary-content rounded-2xl p-5 w-full shadow-lg flex items-center justify-between">
                        <div>
                          <div className="stat-title text-primary-content/80 font-bold uppercase text-xs">Comprehension Score</div>
                          <div className="stat-value text-2xl md:text-3xl font-black mt-1">
                            {quizResult.score_percentage}%
                          </div>
                          <div className="stat-desc text-primary-content/90 font-medium mt-1">
                            {quizResult.correct_count} of {quizResult.total_questions} questions correct
                          </div>
                        </div>
                        <div
                          className="radial-progress text-primary-content font-black text-sm"
                          style={{ '--value': quizResult.score_percentage, '--size': '4rem', '--thickness': '4px' } as React.CSSProperties}
                          role="progressbar"
                        >
                          {quizResult.score_percentage}%
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
              )}
            </div>
          </div>
        )}

        {/* TAB 6: PERSPECTIVE DEBATE (DaisyUI Chat Turns) */}
        {activeTab === 'debate' && (
          <div className="card bg-base-200 border border-base-300 shadow-xl">
            <div className="card-body p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-base-300">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="card-title text-xl font-black text-base-content flex items-center gap-3">
                    <Scale size={24} className="text-warning flex-shrink-0" />
                    <span>Dialectical Perspective Debate Simulator</span>
                  </div>
                  {debateStatus === 'paused' && (
                    <span className="badge badge-warning gap-2 py-2.5 px-3.5 text-xs font-bold shadow-sm my-0.5">
                      <CirclePause size={14} />
                      <span>Paused (Not Started)</span>
                    </span>
                  )}
                  {debateStatus === 'loading' && (
                    <span className="badge badge-info gap-2 py-2.5 px-3.5 text-xs font-bold shadow-sm my-0.5">
                      <span className="loading loading-spinner loading-xs mr-1"></span>
                      <span>Synthesizing Viewpoints...</span>
                    </span>
                  )}
                  {debateStatus === 'ready' && (
                    <span className="badge badge-success gap-2 py-2.5 px-3.5 text-xs font-bold text-success-content shadow-sm my-0.5">
                      <CheckCircle2 size={14} />
                      <span>Saved in Firestore</span>
                    </span>
                  )}
                </div>

                {debateStatus === 'ready' && (
                  <button
                    className="btn btn-sm btn-outline btn-neutral gap-2 self-start sm:self-auto shadow-sm"
                    onClick={handleLoadDebate}
                    disabled={debateLoading}
                  >
                    <RefreshCw size={14} className={debateLoading ? 'animate-spin' : ''} />
                    <span>Regenerate Debate</span>
                  </button>
                )}
              </div>

              {/* PAUSED STATE: Centered Action Trigger Card */}
              {debateStatus === 'paused' && (
                <div className="p-8 md:p-14 text-center max-w-2xl mx-auto my-4 w-full">
                  <div className="relative w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-2xl bg-warning/15 text-warning border border-warning/30 shadow-inner">
                    <CirclePause size={42} className="text-warning" />
                  </div>
                  <div className="badge badge-warning badge-sm uppercase tracking-wider font-bold mx-auto mb-3">
                    On-Demand Simulation • Paused (Not Started)
                  </div>
                  <h3 className="text-2xl font-black text-base-content mb-2">
                    Simulate Perspective Debate
                  </h3>
                  <p className="text-sm text-base-content/75 max-w-md mx-auto mb-8 leading-relaxed">
                    Generate steelmanned, grounded opposing arguments and a neutral compromise synthesis across stakeholders. Results will be saved permanently to Firestore for this investigation.
                  </p>
                  <button
                    onClick={handleLoadDebate}
                    disabled={debateLoading}
                    className="btn btn-warning btn-md md:btn-lg gap-2.5 mx-auto shadow-xl hover:scale-105 transition-all font-bold px-8 text-warning-content"
                  >
                    <Play size={20} className="fill-current" />
                    <span>Simulate Perspective Debate</span>
                  </button>
                  <div className="text-[11px] text-base-content/50 mt-4 flex items-center justify-center gap-1.5">
                    <CheckCircle2 size={13} className="text-success" />
                    <span>Saved in Firestore for replay & archival access</span>
                  </div>
                </div>
              )}

              {debateStatus === 'loading' && (
                <div className="py-16 text-center text-base-content/70">
                  <span className="loading loading-spinner loading-lg text-primary mb-3"></span>
                  <div className="text-base font-semibold">Synthesizing steelmanned opposing viewpoints...</div>
                  <div className="flex flex-col gap-3 max-w-lg mx-auto mt-6">
                    <div className="skeleton h-20 w-full"></div>
                    <div className="skeleton h-20 w-full"></div>
                  </div>
                </div>
              )}

              {debateStatus === 'ready' && debate && (
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
                          className={`chat ${isPro ? 'chat-start' : 'chat-end'}`}
                        >
                          <div className="chat-image avatar">
                            <RobotAvatar
                              size="sm"
                              variant={isPro ? 'pro' : 'con'}
                              showStatusIndicator={false}
                            />
                          </div>
                          <div className="chat-header text-xs opacity-80 mb-1 font-bold flex items-center gap-1.5">
                            <span>{turn.speaker_perspective}</span>
                            <span className={`badge badge-xs ${isPro ? 'badge-info' : 'badge-warning'} font-mono`}>
                              {isPro ? 'PRO' : 'CON'}
                            </span>
                          </div>
                          <div className={`chat-bubble text-sm md:text-base leading-relaxed max-w-2xl ${
                            isPro ? 'chat-bubble-primary text-primary-content' : 'chat-bubble-warning text-warning-content'
                          } shadow-md`}>
                            <div>{turn.core_argument}</div>
                            {turn.grounding_citations?.length > 0 && (
                              <div className="text-xs opacity-85 mt-2 pt-2 border-t border-current/20">
                                <strong>Grounding Evidence:</strong> {turn.grounding_citations.join(' • ')}
                              </div>
                            )}
                          </div>
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
              )}
            </div>
          </div>
        )}

        {/* TAB 7: LIVELY RESEARCH COPILOT (DaisyUI Chat Components) */}
        {activeTab === 'copilot' && (
          <div className="card bg-base-200 border border-base-300 shadow-xl h-[700px] flex flex-col">
            {/* Copilot Header */}
            <div className="p-4 md:p-6 border-b border-base-300 flex items-center justify-between bg-base-200/50">
              <div className="flex items-center gap-3">
                <RobotAvatar
                  size="md"
                  isThinking={chatLoading}
                  status={chatLoading ? 'busy' : 'online'}
                  variant="primary"
                  glow={true}
                />
                <div>
                  <div className="font-bold text-base md:text-lg text-base-content flex items-center gap-2">
                    <span>Research Copilot</span>
                    <span className="badge badge-primary badge-outline text-xs">Autonomous Agent</span>
                  </div>
                  <div className="text-xs text-base-content/60">
                    Context: {report.topic}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="badge badge-success badge-sm gap-1.5 py-2.5 font-medium shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-success-content animate-pulse"></span>
                  <span>Online • Gemini 3.8 Flash (Fast & Precise)</span>
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
                    {msg.sender === 'user' ? (
                      <UserAvatar size="sm" initials="YOU" />
                    ) : (
                      <RobotAvatar
                        size="sm"
                        variant="primary"
                        showStatusIndicator={false}
                      />
                    )}
                  </div>
                  <div className="chat-header text-xs opacity-75 mb-1 font-medium flex items-center gap-1.5">
                    {msg.sender === 'user' ? (
                      <span className="font-semibold text-base-content/80">You</span>
                    ) : (
                      <>
                        <span className="font-bold text-primary">Research Copilot</span>
                        <span className="badge badge-xs badge-primary/20 text-primary border-none text-[10px] px-1 font-mono">
                          AI AGENT
                        </span>
                      </>
                    )}
                    <time className="text-[11px] opacity-60 ml-1">{msg.time}</time>
                  </div>
                  <div className={`chat-bubble text-sm md:text-base leading-relaxed ${
                    msg.sender === 'user'
                      ? 'chat-bubble-primary text-primary-content shadow-primary/20'
                      : 'chat-bubble-neutral text-neutral-content border border-base-content/10 shadow-md'
                  } shadow-md`}>
                    {msg.sender === 'user' ? (
                      <span className="whitespace-pre-wrap">{msg.text}</span>
                    ) : (
                      <FormattedMarkdown content={msg.text} />
                    )}
                  </div>
                </div>
              ))}

              {chatLoading && (
                <div className="chat chat-start">
                  <div className="chat-image avatar">
                    <RobotAvatar
                      size="sm"
                      isThinking={true}
                      variant="primary"
                      showStatusIndicator={true}
                      status="busy"
                    />
                  </div>
                  <div className="chat-header text-xs opacity-75 mb-1 font-medium flex items-center gap-1.5">
                    <span className="font-bold text-primary">Research Copilot</span>
                    <span className="badge badge-xs badge-warning/20 text-warning border-none text-[10px] px-1 font-mono animate-pulse">
                      INVESTIGATING
                    </span>
                  </div>
                  <div className="chat-bubble chat-bubble-neutral border border-primary/30 flex items-center gap-3 shadow-md">
                    <span className="text-sm">Synthesizing intelligence & cross-referencing claims...</span>
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
                  className="input input-bordered join-item w-full focus:outline-none text-sm md:text-base"
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
  );
};
