import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Sparkles,
  PenTool,
  Volume2,
  Play,
  Pause,
  Square,
  Copy,
  Check,
  Share2,
  Clock,
  Sliders,
  Trash2,
  Calendar,
  ChevronDown,
  ChevronUp,
  FileText,
  Bookmark,
  Printer
} from 'lucide-react';
import type {
  NewsIntelligenceReport,
  GeneratedArticleItem,
  ArticleStyleId,
  ArticleLengthId,
} from '../types';
import {
  generateAnalysisArticle,
  fetchAnalysisArticles,
  deleteAnalysisArticle
} from '../api';
import {
  POPULAR_LANGUAGES,
  searchLanguages,
  findLanguage
} from '../utils/languages';
import { useToast } from '../context/ToastContext';

interface ArticleStudioSectionProps {
  analysis: NewsIntelligenceReport;
  onUpdateAnalysis?: (updated: Partial<NewsIntelligenceReport>) => void;
}

const STYLE_OPTIONS: Array<{
  id: ArticleStyleId;
  label: string;
  badge: string;
  badgeClass: string;
  description: string;
}> = [
  {
    id: 'wire_dispatch',
    label: 'News Wire Dispatch',
    badge: 'Neutral Fact',
    badgeClass: 'badge-primary',
    description: 'Classic inverted-pyramid format with objective lead and verified facts (AP/Reuters style).',
  },
  {
    id: 'investigative',
    label: 'In-Depth Investigative',
    badge: 'Forensic',
    badgeClass: 'badge-warning',
    description: 'Deep investigative reporting scrutinizing evidence chains, contradictions, and motives.',
  },
  {
    id: 'executive_brief',
    label: 'Executive Briefing',
    badge: 'C-Suite',
    badgeClass: 'badge-info',
    description: 'High-density intelligence memo outlining operational, financial, and strategic risks.',
  },
  {
    id: 'op_ed',
    label: 'Persuasive Op-Ed',
    badge: 'Perspective',
    badgeClass: 'badge-secondary',
    description: 'Balanced editorial essay steelmanning opposing positions before principled synthesis.',
  },
  {
    id: 'explainer_eli5',
    label: 'Plain-English Explainer',
    badge: 'Accessible',
    badgeClass: 'badge-success',
    description: 'ELI5 (Explain Like I\'m 5): intuitive analogies and zero jargon without losing factual nuance.',
  },
  {
    id: 'academic_essay',
    label: 'Academic Analysis',
    badge: 'Scholarly',
    badgeClass: 'badge-neutral',
    description: 'Formal scholarly tone contextualizing developments in broader socio-legal frameworks.',
  },
  {
    id: 'newsletter',
    label: 'Modern Newsletter',
    badge: 'Curated',
    badgeClass: 'badge-accent',
    description: 'Scannable Morning Brew / Substack style with bold takeaways and punchy prose.',
  },
];

const FRAMING_OPTIONS = [
  { id: 'neutral', label: 'Neutral & Balanced', desc: 'Equal weight to all verified viewpoints' },
  { id: 'watchdog', label: 'Critical Scrutiny', desc: 'Scrutinizes claims, discrepancies, and accountability' },
  { id: 'solution_oriented', label: 'Solutions & Impact', desc: 'Focuses on lessons learned and forward fixes' },
  { id: 'dialectical', label: 'Side-by-Side Debate', desc: 'Contrasts proponent vs critic arguments directly' },
];

export interface EditorialRecipePreset {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  style: ArticleStyleId;
  framing: string;
  lengthPreset: ArticleLengthId;
}

export const EDITORIAL_RECIPES: EditorialRecipePreset[] = [
  {
    id: 'quick_wire',
    title: 'Quick Wire',
    subtitle: 'Fast, objective inverted-pyramid dispatch',
    icon: '⚡',
    style: 'wire_dispatch',
    framing: 'neutral',
    lengthPreset: 'standard',
  },
  {
    id: 'investigative_expose',
    title: 'Investigative Expose',
    subtitle: 'Forensic audit probing contradictions',
    icon: '🔍',
    style: 'investigative',
    framing: 'watchdog',
    lengthPreset: 'longform',
  },
  {
    id: 'executive_brief',
    title: 'Executive Brief',
    subtitle: 'Strategic intelligence memo for leaders',
    icon: '📊',
    style: 'executive_brief',
    framing: 'solution_oriented',
    lengthPreset: 'standard',
  },
  {
    id: 'plain_explainer',
    title: 'Plain Explainer',
    subtitle: 'Jargon-free breakdown of key debates',
    icon: '💡',
    style: 'explainer_eli5',
    framing: 'dialectical',
    lengthPreset: 'standard',
  },
  {
    id: 'opinion_column',
    title: 'Opinion Column',
    subtitle: 'Steelmanned persuasive op-ed debate',
    icon: '✍️',
    style: 'op_ed',
    framing: 'dialectical',
    lengthPreset: 'standard',
  },
];

export const ArticleStudioSection: React.FC<ArticleStudioSectionProps> = ({
  analysis,
  onUpdateAnalysis,
}) => {
  const { showToast } = useToast();
  const analysisId = analysis.id || analysis.analysis_id || '';

  // Form State
  const [style, setStyle] = useState<ArticleStyleId>('wire_dispatch');
  const [lengthPreset, setLengthPreset] = useState<ArticleLengthId>('standard');
  const [customWords, setCustomWords] = useState<number>(600);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('English');
  const [langSearch, setLangSearch] = useState<string>('');
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState<boolean>(false);
  const [framing, setFraming] = useState<string>('neutral');
  const [includeSocialKit, setIncludeSocialKit] = useState<boolean>(true);
  const [selectedRecipeId, setSelectedRecipeId] = useState<string>('quick_wire');

  // Generation & Articles State
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [articles, setArticles] = useState<GeneratedArticleItem[]>(() => {
    return analysis.generated_articles || [];
  });
  const [currentArticle, setCurrentArticle] = useState<GeneratedArticleItem | null>(() => {
    return analysis.generated_articles && analysis.generated_articles.length > 0
      ? analysis.generated_articles[0]
      : null;
  });

  const [copiedText, setCopiedText] = useState<boolean>(false);
  const [copiedMd, setCopiedMd] = useState<boolean>(false);
  const [showSocialKit, setShowSocialKit] = useState<boolean>(true);

  // Audio TTS State
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoiceUri, setSelectedVoiceUri] = useState<string>('');
  const [speechRate, setSpeechRate] = useState<number>(1.0);
  const [speechPitch, setSpeechPitch] = useState<number>(1.0);
  const [ttsState, setTtsState] = useState<'idle' | 'playing' | 'paused'>('idle');
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Computed configuration helpers for available fields
  const targetWordsDisplay = useMemo(() => {
    if (lengthPreset === 'flash') return '~250 words';
    if (lengthPreset === 'standard') return '~600 words';
    if (lengthPreset === 'longform') return '~1,200 words';
    return `${customWords} words`;
  }, [lengthPreset, customWords]);

  const targetReadMinutes = useMemo(() => {
    if (lengthPreset === 'flash') return '1';
    if (lengthPreset === 'standard') return '2-3';
    if (lengthPreset === 'longform') return '5-6';
    return Math.max(1, Math.round(customWords / 200)).toString();
  }, [lengthPreset, customWords]);

  const selectedStyleObj = useMemo(() => {
    return STYLE_OPTIONS.find((s) => s.id === style) || STYLE_OPTIONS[0];
  }, [style]);

  const selectedLangObj = useMemo(() => {
    return findLanguage(selectedLanguage);
  }, [selectedLanguage]);

  const selectedFramingObj = useMemo(() => {
    return FRAMING_OPTIONS.find((f) => f.id === framing) || FRAMING_OPTIONS[0];
  }, [framing]);

  // Fetch articles on mount or analysisId change
  useEffect(() => {
    if (!analysisId) return;
    let isMounted = true;
    fetchAnalysisArticles(analysisId)
      .then((items) => {
        if (!isMounted) return;
        setArticles(items);
        if (items.length > 0 && !currentArticle) {
          setCurrentArticle(items[0]);
        }
      })
      .catch((err) => {
        console.warn('Could not load saved articles from Firestore:', err);
      });
    return () => {
      isMounted = false;
    };
  }, [analysisId]);

  // Load browser voices
  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    const loadVoices = () => {
      const available = window.speechSynthesis.getVoices();
      if (available && available.length > 0) {
        setVoices(available);
        if (!selectedVoiceUri) {
          // Prefer default or local voice
          const def = available.find((v) => v.default) || available[0];
          setSelectedVoiceUri(def?.voiceURI || '');
        }
      }
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Filtered languages for searchable dropdown
  const filteredLanguages = useMemo(() => {
    return searchLanguages(langSearch);
  }, [langSearch]);

  const activeLanguageObj = useMemo(() => {
    return findLanguage(selectedLanguage);
  }, [selectedLanguage]);

  // Handle Voice Change based on language
  const languageFilteredVoices = useMemo(() => {
    if (!voices.length) return [];
    const targetCode = activeLanguageObj.code.toLowerCase().split('-')[0];
    const matching = voices.filter((v) => v.lang.toLowerCase().startsWith(targetCode));
    return matching.length > 0 ? matching : voices;
  }, [voices, activeLanguageObj]);

  // Generate Article Action
  const handleGenerate = async () => {
    if (!analysisId) {
      showToast('No active analysis ID found', 'error');
      return;
    }

    // Stop active audio
    handleStopSpeech();
    setIsGenerating(true);

    try {
      const generated = await generateAnalysisArticle({
        analysis_id: analysisId,
        writing_style: style,
        target_length: lengthPreset,
        custom_word_count: lengthPreset === 'custom' ? customWords : undefined,
        language: selectedLanguage,
        editorial_framing: framing,
        include_social_kit: includeSocialKit,
      });

      setCurrentArticle(generated);
      const updatedList = [generated, ...articles.filter((a) => a.id !== generated.id)];
      setArticles(updatedList);
      if (onUpdateAnalysis) {
        onUpdateAnalysis({ generated_articles: updatedList });
      }

      showToast(`Article generated in ${selectedLanguage} and saved to Firestore!`, 'success');
    } catch (err: any) {
      showToast(err.message || 'Article generation failed', 'error');
    } finally {
      setIsGenerating(false);
    }
  };

  // Delete Article Action
  const handleDeleteArticle = async (articleId: string) => {
    if (!confirm('Are you sure you want to delete this article?')) return;
    try {
      await deleteAnalysisArticle(analysisId, articleId);
      const updated = articles.filter((a) => a.id !== articleId);
      setArticles(updated);
      if (currentArticle?.id === articleId) {
        setCurrentArticle(updated.length > 0 ? updated[0] : null);
      }
      if (onUpdateAnalysis) {
        onUpdateAnalysis({ generated_articles: updated });
      }
      showToast('Article deleted', 'info');
    } catch (err: any) {
      showToast(err.message || 'Failed to delete article', 'error');
    }
  };

  // Copy Plain Text (strips markdown formatting)
  const handleCopyText = () => {
    if (!currentArticle) return;
    const plain = `${currentArticle.headline}\n${currentArticle.subheadline ? `${currentArticle.subheadline}\n` : ''}\n${currentArticle.content_markdown
      .replace(/#{1,6}\s+/g, '')
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/\*(.*?)\*/g, '$1')
      .replace(/`{1,3}(.*?)`{1,3}/g, '$1')
      .replace(/\[(.*?)\]\(.*?\)/g, '$1')
      .replace(/^-\s+/gm, '• ')}`;
    navigator.clipboard.writeText(plain.trim());
    setCopiedText(true);
    showToast('Plain text copied to clipboard!', 'success');
    setTimeout(() => setCopiedText(false), 2500);
  };

  // Copy Raw Markdown
  const handleCopyMd = () => {
    if (!currentArticle) return;
    const md = `# ${currentArticle.headline}\n\n${currentArticle.subheadline ? `*${currentArticle.subheadline}*\n\n` : ''}${currentArticle.content_markdown}`;
    navigator.clipboard.writeText(md);
    setCopiedMd(true);
    showToast('Markdown copied to clipboard!', 'success');
    setTimeout(() => setCopiedMd(false), 2500);
  };

  // Generate & Print / Save PDF for article only (isolated iframe)
  const handleDownloadArticlePdf = () => {
    if (!currentArticle) return;
    const iframe = document.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.right = '0';
    iframe.style.bottom = '0';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = '0';
    document.body.appendChild(iframe);

    const doc = iframe.contentWindow?.document;
    if (!doc) return;

    const dateStr = currentArticle.created_at
      ? new Date(currentArticle.created_at * 1000).toLocaleString(undefined, {
          dateStyle: 'full',
          timeStyle: 'short',
        })
      : new Date().toLocaleString();

    const bodyHtml = currentArticle.content_markdown
      .split('\n\n')
      .map((p) => {
        const trimmed = p.trim();
        if (trimmed.startsWith('## ')) {
          return `<h2 style="font-size: 16pt; font-weight: 700; color: #0f172a; margin-top: 20pt; margin-bottom: 6pt; border-bottom: 1.5px solid #cbd5e1; padding-bottom: 4pt;">${trimmed.replace('## ', '')}</h2>`;
        }
        if (trimmed.startsWith('### ')) {
          return `<h3 style="font-size: 13pt; font-weight: 600; color: #334155; margin-top: 14pt; margin-bottom: 4pt;">${trimmed.replace('### ', '')}</h3>`;
        }
        if (trimmed.startsWith('- ')) {
          const items = trimmed
            .split('\n')
            .map((li) => `<li style="margin-bottom: 4pt;">${li.replace(/^- /, '')}</li>`)
            .join('');
          return `<ul style="margin: 8pt 0 12pt 20pt; line-height: 1.6; color: #334155;">${items}</ul>`;
        }
        const formatted = trimmed
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/\*(.*?)\*/g, '<em>$1</em>');
        return `<p style="font-size: 11pt; line-height: 1.75; color: #334155; margin-bottom: 11pt;">${formatted}</p>`;
      })
      .join('\n');

    doc.open();
    doc.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>${currentArticle.headline}</title>
        <style>
          @page {
            margin: 18mm 16mm;
            size: A4 portrait;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, serif;
            color: #1e293b;
            background: #ffffff;
            margin: 0;
            padding: 24px;
          }
          .header {
            border-bottom: 2px solid #0f172a;
            padding-bottom: 14px;
            margin-bottom: 22px;
          }
          .badge {
            display: inline-block;
            font-size: 9pt;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            background: #f1f5f9;
            color: #475569;
            padding: 3px 8px;
            border-radius: 4px;
            margin-right: 6px;
          }
          h1 {
            font-size: 24pt;
            font-weight: 800;
            line-height: 1.25;
            color: #0f172a;
            margin: 12px 0 8px 0;
          }
          .subheadline {
            font-size: 12pt;
            color: #475569;
            font-style: italic;
            line-height: 1.5;
            margin: 0 0 14px 0;
          }
          .meta {
            font-size: 9pt;
            color: #64748b;
            display: flex;
            gap: 16px;
          }
          .footer {
            margin-top: 36px;
            border-top: 1px solid #e2e8f0;
            padding-top: 10px;
            font-size: 8.5pt;
            color: #94a3b8;
            display: flex;
            justify-content: space-between;
          }
          @media print {
            body { padding: 0; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <span class="badge">${currentArticle.language}</span>
          <span class="badge">${STYLE_OPTIONS.find((s) => s.id === currentArticle.writing_style)?.label || currentArticle.writing_style.replace('_', ' ')}</span>
          ${currentArticle.editorial_framing ? `<span class="badge">${FRAMING_OPTIONS.find((f) => f.id === currentArticle.editorial_framing)?.label || currentArticle.editorial_framing.replace('_', ' ')}</span>` : ''}
          <span class="badge">${currentArticle.word_count} words</span>
          <h1>${currentArticle.headline}</h1>
          ${currentArticle.subheadline ? `<div class="subheadline">${currentArticle.subheadline}</div>` : ''}
          <div class="meta">
            <span><strong>Generated:</strong> ${dateStr}</span>
            <span><strong>Reading Time:</strong> ${currentArticle.reading_time_minutes} min read</span>
          </div>
        </div>
        <main>
          ${bodyHtml}
        </main>
        <div class="footer">
          <span>Agentic News Intelligence • Dossier Grounded Article</span>
          <span>Topic: ${currentArticle.topic}</span>
        </div>
      </body>
      </html>
    `);
    doc.close();

    iframe.contentWindow?.focus();
    setTimeout(() => {
      iframe.contentWindow?.print();
      setTimeout(() => {
        if (document.body.contains(iframe)) {
          document.body.removeChild(iframe);
        }
      }, 1500);
    }, 300);
  };

  // Speech TTS Controller
  const handleStartSpeech = () => {
    if (!currentArticle || typeof window === 'undefined' || !('speechSynthesis' in window)) {
      showToast('Speech synthesis not supported in this browser', 'error');
      return;
    }

    if (ttsState === 'paused') {
      window.speechSynthesis.resume();
      setTtsState('playing');
      return;
    }

    window.speechSynthesis.cancel();

    // Strip markdown formatting symbols for speech
    const cleanText = `${currentArticle.headline}. ${currentArticle.subheadline || ''}. ${currentArticle.content_markdown
      .replace(/[#*`_~[\]()]/g, '')
      .replace(/\n+/g, ' ')}`;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utteranceRef.current = utterance;

    // Set Voice
    if (selectedVoiceUri) {
      const v = voices.find((item) => item.voiceURI === selectedVoiceUri);
      if (v) utterance.voice = v;
    }

    utterance.rate = speechRate;
    utterance.pitch = speechPitch;

    utterance.onend = () => setTtsState('idle');
    utterance.onerror = () => setTtsState('idle');

    window.speechSynthesis.speak(utterance);
    setTtsState('playing');
  };

  const handlePauseSpeech = () => {
    if (typeof window === 'undefined') return;
    window.speechSynthesis.pause();
    setTtsState('paused');
  };

  const handleStopSpeech = () => {
    if (typeof window === 'undefined') return;
    window.speechSynthesis.cancel();
    setTtsState('idle');
  };

  // Stop audio playback cleanly whenever active article switches
  useEffect(() => {
    if (ttsState !== 'idle') {
      handleStopSpeech();
    }
  }, [currentArticle?.id]);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-base-200 via-base-300 to-base-200 p-6 md:p-8 border border-base-content/10 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-wider">
              <Sparkles size={14} className="text-primary shrink-0" />
              <span>Multi-Agent Newsroom Engine • Gemini Fast & Pro</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-base-content">
              On-Demand Article Studio
            </h2>
            <p className="text-sm md:text-base text-base-content/70 leading-relaxed">
              Synthesize custom, factually grounded articles from this investigation dossier in{' '}
              <span className="font-bold text-primary">130+ Google-supported languages</span>, with
              tailored writing styles, word lengths, and browser-powered Read Aloud speech.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="stats bg-base-100/80 backdrop-blur shadow-sm border border-base-content/10">
              <div className="stat py-2 px-4">
                <div className="stat-title text-xs font-medium">Saved Articles</div>
                <div className="stat-value text-xl font-bold text-primary">{articles.length}</div>
                <div className="stat-desc text-[11px] text-success font-semibold">Saved</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Studio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Generator Controls (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="card bg-base-200/80 backdrop-blur border border-base-content/10 shadow-lg rounded-2xl p-5 md:p-6 space-y-5">
            <div className="border-b border-base-300 pb-3 space-y-1.5">
              <h3 className="font-bold text-base md:text-lg flex items-center gap-2 text-base-content">
                <Sliders size={18} className="text-primary" />
                <span>Article Configuration</span>
              </h3>
              <div>
                <span className="badge badge-sm badge-outline font-mono text-[11px] text-base-content/75">
                  Grounding: Active Dossier
                </span>
              </div>
            </div>

            {/* 1. Target Length */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-base-content/80">
                1. Target Length
              </label>
              <div className="grid grid-cols-4 gap-1.5">
                {[
                  { id: 'flash', label: 'Flash (~250w)' },
                  { id: 'standard', label: 'Standard (~600w)' },
                  { id: 'longform', label: 'In-Depth (~1.2k)' },
                  { id: 'custom', label: 'Custom' },
                ].map((l) => (
                  <button
                    key={l.id}
                    type="button"
                    onClick={() => setLengthPreset(l.id as ArticleLengthId)}
                    className={`btn btn-xs rounded-lg text-[11px] transition-all ${
                      lengthPreset === l.id
                        ? 'btn-primary font-bold shadow-sm'
                        : 'btn-ghost border border-base-300 text-base-content/80'
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
              {lengthPreset === 'custom' && (
                <div className="pt-2 space-y-1">
                  <div className="flex justify-between text-xs font-medium text-base-content/70">
                    <span>Target Word Count:</span>
                    <span className="font-bold text-primary">{customWords} words</span>
                  </div>
                  <input
                    type="range"
                    min="150"
                    max="2500"
                    step="50"
                    value={customWords}
                    onChange={(e) => setCustomWords(parseInt(e.target.value))}
                    className="range range-primary range-xs"
                  />
                </div>
              )}
            </div>

            {/* 2. Editorial Recipes (Presets + Custom) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-base-content/80 flex items-center gap-1.5">
                  <Sparkles size={14} className="text-warning" />
                  <span>2. Editorial Recipes</span>
                </label>
                <span className="text-[11px] text-base-content/60">
                  {selectedRecipeId === 'custom' ? 'Custom mode' : '1-click preset'}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {EDITORIAL_RECIPES.map((recipe) => {
                  const isActive = selectedRecipeId === recipe.id;
                  return (
                    <button
                      key={recipe.id}
                      type="button"
                      onClick={() => {
                        setSelectedRecipeId(recipe.id);
                        setStyle(recipe.style);
                        setFraming(recipe.framing);
                      }}
                      className={`p-2.5 rounded-xl border text-left transition-all relative flex flex-col justify-between ${
                        isActive
                          ? 'border-primary bg-primary/10 shadow-sm ring-1 ring-primary'
                          : 'border-base-300 bg-base-100 hover:border-primary/40 hover:bg-base-200/50'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1 w-full mb-1">
                        <span className="text-sm">{recipe.icon}</span>
                        {isActive && (
                          <span className="badge badge-primary badge-xs font-bold">Active</span>
                        )}
                      </div>
                      <div className="font-bold text-xs text-base-content leading-tight">
                        {recipe.title}
                      </div>
                      <div className="text-[10px] text-base-content/65 line-clamp-1 mt-0.5">
                        {recipe.subtitle}
                      </div>
                    </button>
                  );
                })}

                {/* Custom Option Card */}
                <button
                  type="button"
                  onClick={() => {
                    setSelectedRecipeId('custom');
                  }}
                  className={`p-2.5 rounded-xl border text-left transition-all relative flex flex-col justify-between ${
                    selectedRecipeId === 'custom'
                      ? 'border-secondary bg-secondary/10 shadow-sm ring-1 ring-secondary'
                      : 'border-base-300 bg-base-100 hover:border-secondary/40 hover:bg-base-200/50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 w-full mb-1">
                    <span className="text-sm">⚙️</span>
                    {selectedRecipeId === 'custom' && (
                      <span className="badge badge-secondary badge-xs font-bold">Active</span>
                    )}
                  </div>
                  <div className="font-bold text-xs text-base-content leading-tight">
                    Custom Mix
                  </div>
                  <div className="text-[10px] text-base-content/65 line-clamp-1 mt-0.5">
                    Pick your own tone & angle
                  </div>
                </button>
              </div>
            </div>

            {/* Custom Dropdowns: ONLY shown when "Custom" is selected */}
            {selectedRecipeId === 'custom' && (
              <div className="p-3.5 border border-secondary/40 rounded-xl space-y-3.5 bg-secondary/5 animate-fadeIn">
                <div className="flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-wider pb-1 border-b border-secondary/20">
                  <Sliders size={14} />
                  <span>Custom Editorial Controls</span>
                </div>

                {/* Format & Tone */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-base-content/75 flex items-center justify-between">
                    <span>Format & Tone (How it reads)</span>
                    <span className="badge badge-xs badge-primary font-mono text-[10px]">
                      {selectedStyleObj.badge}
                    </span>
                  </label>
                  <select
                    className="select select-bordered select-xs w-full font-medium"
                    value={style}
                    onChange={(e) => setStyle(e.target.value as ArticleStyleId)}
                  >
                    {STYLE_OPTIONS.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <p className="text-[10px] text-base-content/60 italic px-0.5">
                    {selectedStyleObj.description}
                  </p>
                </div>

                {/* Angle & Focus */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-base-content/75">
                    <span>Angle & Focus (Where to shine spotlight)</span>
                  </label>
                  <select
                    className="select select-bordered select-xs w-full text-xs font-medium"
                    value={framing}
                    onChange={(e) => setFraming(e.target.value)}
                  >
                    {FRAMING_OPTIONS.map((f) => (
                      <option key={f.id} value={f.id}>
                        {f.label} ({f.desc})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* 3. Searchable Language Selection (130+ Google Languages) */}
            <div className="space-y-2 relative">
              <label className="text-xs font-bold uppercase tracking-wider text-base-content/80 flex items-center justify-between">
                <span>3. Language (130+ Google Supported)</span>
                <span className="badge badge-sm badge-ghost text-xs gap-1">
                  <span>{activeLanguageObj.flag || '🌐'}</span>
                  <span>{activeLanguageObj.name}</span>
                </span>
              </label>

              {/* Popular quick chips */}
              <div className="flex flex-wrap gap-1 pb-1">
                {POPULAR_LANGUAGES.slice(0, 7).map((pl) => (
                  <button
                    key={pl.code}
                    type="button"
                    onClick={() => setSelectedLanguage(pl.name)}
                    className={`btn btn-xs rounded-md gap-1 text-[11px] ${
                      selectedLanguage === pl.name
                        ? 'btn-primary font-bold shadow-sm'
                        : 'btn-ghost border border-base-300 hover:border-primary/50'
                    }`}
                  >
                    <span>{pl.flag}</span>
                    <span>{pl.name}</span>
                  </button>
                ))}
              </div>

              {/* Searchable Input with Dropdown */}
              <div className="relative">
                <div className="join w-full">
                  <input
                    type="text"
                    placeholder="Search 130+ languages (e.g. Japanese, Hindi, German)..."
                    className="input input-bordered input-sm join-item w-full text-xs"
                    value={langSearch}
                    onChange={(e) => {
                      setLangSearch(e.target.value);
                      setIsLangDropdownOpen(true);
                    }}
                    onFocus={() => setIsLangDropdownOpen(true)}
                  />
                  <button
                    type="button"
                    className="btn btn-sm btn-ghost join-item border border-l-0 border-base-300"
                    onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  >
                    <ChevronDown size={14} />
                  </button>
                </div>

                {isLangDropdownOpen && (
                  <div className="absolute z-50 left-0 right-0 mt-1 max-h-56 overflow-y-auto bg-base-100 rounded-xl shadow-2xl border border-base-300 p-1.5 space-y-0.5">
                    {filteredLanguages.length === 0 ? (
                      <div className="text-xs text-base-content/50 p-3 text-center">
                        No matching languages found
                      </div>
                    ) : (
                      filteredLanguages.map((lang) => (
                        <button
                          key={lang.code}
                          type="button"
                          onClick={() => {
                            setSelectedLanguage(lang.name);
                            setLangSearch('');
                            setIsLangDropdownOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs transition-colors text-left ${
                            selectedLanguage === lang.name
                              ? 'bg-primary text-primary-content font-bold'
                              : 'hover:bg-base-200 text-base-content'
                          }`}
                        >
                          <span className="flex items-center gap-2 truncate">
                            <span>{lang.flag || '🌐'}</span>
                            <span className="truncate">{lang.name}</span>
                          </span>
                          <span className="text-[10px] opacity-70 font-mono ml-2">
                            {lang.nativeName}
                          </span>
                        </button>
                      ))
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Extra Options */}
            <div className="pt-2 border-t border-base-300 flex items-center justify-between text-xs">
              <span className="font-semibold text-base-content/80">Generate Social & SEO Kit</span>
              <input
                type="checkbox"
                className="toggle toggle-primary toggle-sm"
                checked={includeSocialKit}
                onChange={(e) => setIncludeSocialKit(e.target.checked)}
              />
            </div>

            {/* Generate Action Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleGenerate}
                disabled={isGenerating}
                className="btn btn-primary w-full shadow-lg gap-2 text-sm md:text-base font-bold"
              >
                {isGenerating ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    <span>Synthesizing in {selectedLanguage}...</span>
                  </>
                ) : (
                  <>
                    <PenTool size={18} />
                    <span>Generate Grounded Article</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Saved Articles for This Story */}
          <div className="card bg-base-200/60 border border-base-content/10 shadow-md rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold text-sm text-base-content">
                <Bookmark size={16} className="text-secondary" />
                <span>Story Archive ({articles.length})</span>
              </div>
              <span className="text-[11px] text-base-content/50">Saved in Firestore</span>
            </div>

            {isGenerating && (
              <div className="p-3 rounded-xl border border-primary/60 bg-primary/10 space-y-2 animate-pulse shadow-sm">
                <div className="flex items-center justify-between gap-2">
                  <div className="skeleton h-3.5 w-3/4"></div>
                  <span className="badge badge-xs badge-primary font-bold gap-1 shrink-0">
                    <span className="loading loading-spinner loading-[10px]"></span>
                    <span>Generating...</span>
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-base-content/60">
                  <span className="badge badge-ghost badge-xs gap-1">
                    <span>{selectedLangObj.flag}</span>
                    <span>{selectedLangObj.name}</span>
                  </span>
                  <span>•</span>
                  <span className="capitalize">{selectedStyleObj.label}</span>
                  <span>•</span>
                  <span>{targetWordsDisplay}</span>
                </div>
              </div>
            )}

            {articles.length === 0 && !isGenerating ? (
              <div className="text-center py-6 text-xs text-base-content/50 italic">
                No articles generated for this story yet. Configure the panel above and click
                Generate!
              </div>
            ) : (
              <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                {articles.map((art) => {
                  const isSelected = !isGenerating && currentArticle?.id === art.id;
                  const langObj = findLanguage(art.language);
                  const dateStr = art.created_at
                    ? new Date(art.created_at * 1000).toLocaleDateString(undefined, {
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })
                    : 'Just now';

                  return (
                    <div
                      key={art.id}
                      onClick={() => {
                        if (!isGenerating) {
                          setCurrentArticle(art);
                        }
                      }}
                      className={`p-3 rounded-xl border text-left cursor-pointer transition-all flex items-start justify-between gap-3 ${
                        isSelected
                          ? 'bg-primary/10 border-primary shadow-sm'
                          : 'bg-base-100 hover:bg-base-200/80 border-base-300'
                      }`}
                    >
                      <div className="min-w-0 space-y-1">
                        <div className="text-xs font-bold text-base-content truncate">
                          {art.headline}
                        </div>
                        <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-base-content/60">
                          <span className="badge badge-ghost badge-xs gap-1">
                            <span>{langObj.flag}</span>
                            <span>{art.language}</span>
                          </span>
                          <span>•</span>
                          <span className="capitalize">
                            {STYLE_OPTIONS.find((s) => s.id === art.writing_style)?.label || art.writing_style?.replace('_', ' ')}
                          </span>
                          <span>•</span>
                          <span>{art.word_count}w</span>
                          <span>•</span>
                          <span>{dateStr}</span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteArticle(art.id);
                        }}
                        className="btn btn-ghost btn-xs btn-circle text-error opacity-60 hover:opacity-100 shrink-0"
                        title="Delete Article"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Article Viewer & Read Aloud TTS (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {isGenerating ? (
            <div className="space-y-6">
              {/* Audio TTS Status Ribbon / Card showing available fields */}
              <div className="card bg-base-200/90 backdrop-blur border border-base-content/10 shadow-md rounded-2xl p-4 md:p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-base-300 pb-3">
                  <div className="flex items-center gap-2.5 font-bold text-sm md:text-base text-base-content">
                    <Volume2 size={18} className="text-primary/60" />
                    <span>Browser Read Aloud (TTS)</span>
                  </div>
                  <span className="badge badge-sm badge-ghost text-[11px]">
                    Awaiting Audio Generation
                  </span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-base-content/70">
                  <span className="flex items-center gap-1.5">
                    <span>Configured Speech Voice:</span>
                    <span className="badge badge-xs badge-primary font-medium gap-1">
                      <span>{selectedLangObj.flag}</span>
                      <span>{selectedLangObj.name}</span>
                    </span>
                  </span>
                  <span className="text-[11px] text-base-content/50">Audio synthesis activates once article text is available</span>
                </div>
                <div className="pt-2 border-t border-base-300 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <button disabled className="btn btn-primary btn-sm rounded-xl gap-2 font-bold shadow-sm px-4 opacity-40 cursor-not-allowed">
                      <Play size={15} fill="currentColor" />
                      <span>Play</span>
                    </button>
                    <button disabled className="btn btn-ghost btn-sm rounded-xl gap-1.5 border border-base-300 px-3 opacity-40 cursor-not-allowed">
                      <Square size={13} fill="currentColor" />
                      <span>Stop</span>
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="skeleton h-3.5 w-16"></div>
                    <div className="skeleton h-3.5 w-24"></div>
                  </div>
                </div>
              </div>

              {/* Main Article Card with DaisyUI Skeletons for Text Not Available */}
              <div className="card bg-base-100 border border-base-content/10 shadow-xl rounded-2xl overflow-hidden">
                {/* Meta Ribbon showing all available fields */}
                <div className="bg-base-200/90 px-6 py-3.5 border-b border-base-300 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="badge badge-primary font-bold gap-1 text-[11px]">
                      <span>{selectedLangObj.flag}</span>
                      <span>{selectedLangObj.name}</span>
                    </span>
                    <span className="badge badge-outline text-[11px] capitalize">
                      {selectedStyleObj.label}
                    </span>
                    <span className="badge badge-ghost text-[11px] gap-1">
                      <Clock size={12} />
                      <span>{targetReadMinutes} min read ({targetWordsDisplay})</span>
                    </span>
                    <span className="badge badge-secondary badge-outline text-[11px]">
                      {selectedFramingObj.label}
                    </span>
                    <span className="badge badge-primary badge-sm gap-1.5 animate-pulse font-bold text-[11px]">
                      <span className="loading loading-spinner loading-xs"></span>
                      Synthesizing Article...
                    </span>
                  </div>

                  {/* Action Buttons Skeletons */}
                  <div className="flex items-center gap-1.5">
                    <div className="skeleton h-6 w-16 rounded-lg opacity-50"></div>
                    <div className="skeleton h-6 w-16 rounded-lg opacity-50"></div>
                    <div className="skeleton h-6 w-20 rounded-lg opacity-50"></div>
                  </div>
                </div>

                {/* Article Content Area */}
                <div className="p-6 md:p-8 space-y-6">
                  {/* Available Field: Grounding Dossier Topic */}
                  <div className="flex items-center justify-between gap-3 pb-2 border-b border-base-300">
                    <div className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-2">
                      <FileText size={15} />
                      <span>Investigation Topic: {analysis.topic}</span>
                    </div>
                    <span className="badge badge-xs badge-ghost font-mono">
                      AI Newsroom Synthesis
                    </span>
                  </div>

                  {/* Headline & Subheadline Skeletons (Text Not Available) */}
                  <div className="space-y-3 pb-2">
                    <div className="skeleton h-8 md:h-10 w-4/5 rounded-xl"></div>
                    <div className="skeleton h-4 md:h-5 w-3/5 rounded-md"></div>
                  </div>

                  {/* Article Body Paragraphs Skeletons (Text Not Available) */}
                  <div className="space-y-5 pt-2">
                    {/* Paragraph 1 */}
                    <div className="space-y-2.5">
                      <div className="skeleton h-4 w-full"></div>
                      <div className="skeleton h-4 w-full"></div>
                      <div className="skeleton h-4 w-11/12"></div>
                      <div className="skeleton h-4 w-4/5"></div>
                    </div>

                    {/* Section Header + Paragraph 2 */}
                    <div className="space-y-2.5 pt-2">
                      <div className="skeleton h-6 w-1/3 rounded-lg"></div>
                      <div className="skeleton h-4 w-full"></div>
                      <div className="skeleton h-4 w-full"></div>
                      <div className="skeleton h-4 w-5/6"></div>
                    </div>

                    {/* Section Header + Paragraph 3 */}
                    <div className="space-y-2.5 pt-2">
                      <div className="skeleton h-6 w-2/5 rounded-lg"></div>
                      <div className="skeleton h-4 w-full"></div>
                      <div className="skeleton h-4 w-full"></div>
                      <div className="skeleton h-4 w-3/4"></div>
                    </div>
                  </div>
                </div>

                {/* Social & SEO Kit Skeletons if enabled */}
                {includeSocialKit && (
                  <div className="border-t border-base-300 bg-base-200/50 p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-base-content/70">
                        <Share2 size={15} className="text-primary" />
                        <span>SEO & Multi-Platform Publishing Kit (Awaiting Generation)</span>
                      </span>
                      <div className="skeleton h-4 w-16"></div>
                    </div>

                    <div className="space-y-3 pt-1">
                      <div className="p-3 bg-base-100 rounded-xl border border-base-300 space-y-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-base-content/60">
                          SEO Meta Description (Search Snippet)
                        </span>
                        <div className="skeleton h-3.5 w-full"></div>
                        <div className="skeleton h-3.5 w-4/5"></div>
                      </div>

                      <div className="p-3 bg-base-100 rounded-xl border border-base-300 space-y-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-base-content/60">
                          Alternative Editorial Headlines
                        </span>
                        <div className="skeleton h-3.5 w-3/4"></div>
                        <div className="skeleton h-3.5 w-2/3"></div>
                      </div>

                      <div className="p-3 bg-base-100 rounded-xl border border-base-300 space-y-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-base-content/60">
                          Social Distribution Thread
                        </span>
                        <div className="skeleton h-8 w-full rounded-lg"></div>
                        <div className="skeleton h-8 w-11/12 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Card Footer Callout */}
                <div className="bg-primary/10 px-6 py-4 border-t border-primary/20 flex flex-wrap items-center justify-between gap-3 text-xs text-primary font-semibold">
                  <div className="flex items-center gap-2">
                    <span className="loading loading-spinner loading-sm"></span>
                    <span>Multi-Agent Newsroom is synthesizing grounded article text across verified dossiers...</span>
                  </div>
                  <span className="loading loading-dots loading-sm"></span>
                </div>
              </div>
            </div>
          ) : !currentArticle ? (
            <div className="card bg-base-200/50 border border-dashed border-base-content/20 rounded-2xl p-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto shadow-inner">
                <Sparkles size={32} />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-base-content">No Article Selected</h4>
                <p className="text-xs md:text-sm text-base-content/60 max-w-md mx-auto">
                  Select your desired writing style, length, and language on the left to synthesize
                  a publication-ready story grounded in this investigation.
                </p>
              </div>
            </div>
          ) : (
            <div key={currentArticle.id} className="space-y-6">
              {/* Read Aloud Audio Player Controller */}
              <div className="card bg-base-200/90 backdrop-blur border border-base-content/10 shadow-md rounded-2xl p-4 md:p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-base-300 pb-3">
                  <div className="flex items-center gap-2.5 font-bold text-sm md:text-base text-base-content">
                    <Volume2 size={18} className="text-primary animate-pulse" />
                    <span>Browser Read Aloud (TTS)</span>
                  </div>

                  {/* Audio Status Wave Indicator */}
                  {ttsState === 'playing' && (
                    <div className="flex items-center gap-1">
                      <span className="w-1 h-3 bg-primary animate-bounce"></span>
                      <span className="w-1 h-5 bg-primary animate-bounce [animation-delay:0.15s]"></span>
                      <span className="w-1 h-4 bg-primary animate-bounce [animation-delay:0.3s]"></span>
                      <span className="w-1 h-2 bg-primary animate-bounce [animation-delay:0.45s]"></span>
                      <span className="text-xs font-semibold text-primary ml-1">Speaking...</span>
                    </div>
                  )}
                  {ttsState === 'paused' && (
                    <span className="badge badge-sm badge-warning">Paused</span>
                  )}
                  {ttsState === 'idle' && (
                    <span className="badge badge-sm badge-ghost text-[11px]">Ready</span>
                  )}
                </div>

                {/* 1. Voice Selector */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-base-content/70">
                    <span>Voice ({languageFilteredVoices.length} available)</span>
                    <span className="text-[10px] text-base-content/50 normal-case font-normal">
                      Filtered by {findLanguage(currentArticle.language).name}
                    </span>
                  </div>
                  <select
                    className={`select select-bordered select-xs w-full text-xs font-medium ${
                      ttsState !== 'idle' ? 'opacity-60 cursor-not-allowed bg-base-300/40' : ''
                    }`}
                    value={selectedVoiceUri}
                    disabled={ttsState !== 'idle'}
                    onChange={(e) => {
                      setSelectedVoiceUri(e.target.value);
                      if (ttsState !== 'idle') handleStopSpeech();
                    }}
                  >
                    {languageFilteredVoices.map((v) => (
                      <option key={v.voiceURI} value={v.voiceURI}>
                        {v.name} ({v.lang})
                      </option>
                    ))}
                  </select>
                </div>

                {/* 2. Speed & Pitch Selectors */}
                <div className="grid grid-cols-2 gap-4 pt-2 border-t border-base-300 text-xs">
                  <div className="space-y-1">
                    <div className="flex justify-between text-base-content/70 font-medium">
                      <span>Speed: {speechRate}x</span>
                      <button
                        type="button"
                        disabled={ttsState !== 'idle'}
                        onClick={() => setSpeechRate(1.0)}
                        className={`text-[10px] text-primary hover:underline ${
                          ttsState !== 'idle' ? 'opacity-40 cursor-not-allowed' : ''
                        }`}
                      >
                        reset
                      </button>
                    </div>
                    <input
                      type="range"
                      min="0.5"
                      max="2.0"
                      step="0.1"
                      value={speechRate}
                      disabled={ttsState !== 'idle'}
                      onChange={(e) => setSpeechRate(parseFloat(e.target.value))}
                      className={`range range-xs range-primary ${
                        ttsState !== 'idle' ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-base-content/70 font-medium">
                      <span>Pitch: {speechPitch}</span>
                      <button
                        type="button"
                        disabled={ttsState !== 'idle'}
                        onClick={() => setSpeechPitch(1.0)}
                        className={`text-[10px] text-primary hover:underline ${
                          ttsState !== 'idle' ? 'opacity-40 cursor-not-allowed' : ''
                        }`}
                      >
                        reset
                      </button>
                    </div>
                    <input
                      type="range"
                      min="0.5"
                      max="1.5"
                      step="0.1"
                      value={speechPitch}
                      disabled={ttsState !== 'idle'}
                      onChange={(e) => setSpeechPitch(parseFloat(e.target.value))}
                      className={`range range-xs range-secondary ${
                        ttsState !== 'idle' ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    />
                  </div>
                </div>

                {/* Helper hint when reading is in progress */}
                {ttsState !== 'idle' && (
                  <div className="text-[11px] text-base-content/60 italic px-1 pt-1 flex items-center justify-between">
                    <span>Voice, speed, and pitch are locked while reading is active.</span>
                    <button
                      type="button"
                      onClick={handleStopSpeech}
                      className="text-primary hover:underline font-semibold"
                    >
                      Click Stop to unlock
                    </button>
                  </div>
                )}

                {/* 3. Play & Pause Buttons in a New Line Below Speed & Pitch */}
                <div className="pt-2 border-t border-base-300 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {ttsState !== 'playing' ? (
                      <button
                        type="button"
                        onClick={handleStartSpeech}
                        className="btn btn-primary btn-sm rounded-xl gap-2 font-bold shadow-sm px-4"
                      >
                        <Play size={15} fill="currentColor" />
                        <span>{ttsState === 'paused' ? 'Resume' : 'Play'}</span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={handlePauseSpeech}
                        className="btn btn-warning btn-sm rounded-xl gap-2 font-bold px-4"
                      >
                        <Pause size={15} />
                        <span>Pause</span>
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={handleStopSpeech}
                      disabled={ttsState === 'idle'}
                      className="btn btn-ghost btn-sm rounded-xl gap-1.5 border border-base-300 px-3"
                    >
                      <Square size={13} fill="currentColor" />
                      <span>Stop</span>
                    </button>
                  </div>

                  <span className="text-[11px] text-base-content/60 font-mono">
                    {ttsState === 'playing' ? 'Audio playing' : ttsState === 'paused' ? 'Audio paused' : 'Ready'}
                  </span>
                </div>
              </div>

              {/* Main Article Reader Card */}
              <div className="card bg-base-100 border border-base-content/10 shadow-xl rounded-2xl overflow-hidden">
                {/* Meta Ribbon */}
                <div className="bg-base-200/90 px-6 py-3.5 border-b border-base-300 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="badge badge-primary font-bold gap-1 text-[11px]">
                      <span>{findLanguage(currentArticle.language).flag}</span>
                      <span>{currentArticle.language}</span>
                    </span>
                    <span className="badge badge-outline text-[11px] capitalize">
                      {STYLE_OPTIONS.find((s) => s.id === currentArticle.writing_style)?.label || currentArticle.writing_style.replace('_', ' ')}
                    </span>
                    {currentArticle.editorial_framing && (
                      <span className="badge badge-secondary badge-outline text-[11px]">
                        {FRAMING_OPTIONS.find((f) => f.id === currentArticle.editorial_framing)?.label || currentArticle.editorial_framing.replace('_', ' ')}
                      </span>
                    )}
                    <span className="badge badge-ghost text-[11px] gap-1">
                      <Clock size={12} />
                      <span>{currentArticle.reading_time_minutes} min read</span>
                    </span>
                    <span className="badge badge-ghost text-[11px]">
                      {currentArticle.word_count} words
                    </span>
                    <span className="text-[11px] text-base-content/60 flex items-center gap-1">
                      <Calendar size={12} />
                      <span>
                        {new Date(currentArticle.created_at * 1000).toLocaleString(undefined, {
                          dateStyle: 'medium',
                          timeStyle: 'short',
                        })}
                      </span>
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    <button
                      type="button"
                      onClick={handleCopyText}
                      className="btn btn-ghost btn-xs rounded-lg gap-1 border border-base-300 font-semibold"
                      title="Copy clean plain text without markdown symbols"
                    >
                      {copiedText ? <Check size={13} className="text-success" /> : <Copy size={13} />}
                      <span>{copiedText ? 'Copied' : 'Copy text'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleCopyMd}
                      className="btn btn-ghost btn-xs rounded-lg gap-1 border border-base-300 font-semibold"
                      title="Copy raw Markdown formatting"
                    >
                      {copiedMd ? <Check size={13} className="text-success" /> : <FileText size={13} />}
                      <span>{copiedMd ? 'Copied MD' : 'Copy MD'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleDownloadArticlePdf}
                      className="btn btn-primary btn-xs rounded-lg gap-1 shadow-xs font-semibold"
                      title="Generate clean PDF containing solely this article"
                    >
                      <Printer size={13} />
                      <span>Print / PDF</span>
                    </button>
                  </div>
                </div>

                {/* Article Header & Body */}
                <div className="p-6 md:p-8 space-y-6">
                  <div className="space-y-3 border-b border-base-300 pb-6">
                    <h1 className="text-2xl md:text-4xl font-black text-base-content leading-tight">
                      {currentArticle.headline}
                    </h1>
                    {currentArticle.subheadline && (
                      <p className="text-base md:text-lg text-base-content/75 font-medium leading-relaxed italic">
                        {currentArticle.subheadline}
                      </p>
                    )}
                  </div>

                  {/* Rendered Body */}
                  <div className="prose prose-sm md:prose-base max-w-none text-base-content leading-relaxed space-y-4">
                    {currentArticle.content_markdown.split('\n\n').map((para, idx) => {
                      if (para.startsWith('## ')) {
                        return (
                          <h2
                            key={idx}
                            className="text-xl md:text-2xl font-black text-primary pt-3 border-b border-base-300 pb-1"
                          >
                            {para.replace('## ', '')}
                          </h2>
                        );
                      }
                      if (para.startsWith('### ')) {
                        return (
                          <h3 key={idx} className="text-lg md:text-xl font-bold text-secondary pt-2">
                            {para.replace('### ', '')}
                          </h3>
                        );
                      }
                      if (para.startsWith('- ')) {
                        const items = para.split('\n').filter((l) => l.startsWith('- '));
                        return (
                          <ul key={idx} className="list-disc list-inside space-y-1.5 pl-2">
                            {items.map((item, i) => (
                              <li key={i} className="text-sm md:text-base text-base-content/90">
                                {item.replace(/^- \*\*(.*?)\*\*:?/, '$1: ').replace(/^- /, '')}
                              </li>
                            ))}
                          </ul>
                        );
                      }
                      return (
                        <p key={idx} className="text-sm md:text-base text-base-content/90 leading-relaxed">
                          {para}
                        </p>
                      );
                    })}
                  </div>
                </div>

                {/* Collapsible Social & SEO Kit */}
                {currentArticle.social_kit && (
                  <div className="border-t border-base-300 bg-base-200/50 p-6 space-y-4">
                    <button
                      type="button"
                      onClick={() => setShowSocialKit(!showSocialKit)}
                      className="w-full flex items-center justify-between font-bold text-sm text-base-content"
                    >
                      <span className="flex items-center gap-2">
                        <Share2 size={16} className="text-primary" />
                        <span>SEO & Multi-Platform Publishing Kit</span>
                      </span>
                      {showSocialKit ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>

                    {showSocialKit && (
                      <div className="space-y-4 pt-2 text-xs">
                        {/* SEO Meta */}
                        {currentArticle.social_kit.seo_meta_description && (
                          <div className="p-3 bg-base-100 rounded-xl border border-base-300 space-y-1">
                            <span className="font-bold text-base-content/70 uppercase tracking-wider text-[10px]">
                              SEO Meta Description (Search Snippet)
                            </span>
                            <p className="text-xs text-base-content font-mono">
                              {currentArticle.social_kit.seo_meta_description}
                            </p>
                          </div>
                        )}

                        {/* Headline Variants */}
                        {currentArticle.social_kit.headline_variants?.length > 0 && (
                          <div className="p-3 bg-base-100 rounded-xl border border-base-300 space-y-2">
                            <span className="font-bold text-base-content/70 uppercase tracking-wider text-[10px]">
                              Alternative Editorial Headlines
                            </span>
                            <ul className="space-y-1 pl-2">
                              {currentArticle.social_kit.headline_variants.map((v, i) => (
                                <li key={i} className="list-disc font-medium text-base-content">
                                  {v}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Social Thread */}
                        {currentArticle.social_kit.social_thread?.length > 0 && (
                          <div className="p-3 bg-base-100 rounded-xl border border-base-300 space-y-2">
                            <span className="font-bold text-base-content/70 uppercase tracking-wider text-[10px]">
                              Social Distribution Thread (X / LinkedIn)
                            </span>
                            <div className="space-y-1.5">
                              {currentArticle.social_kit.social_thread.map((post, i) => (
                                <div
                                  key={i}
                                  className="p-2.5 rounded-lg bg-base-200 text-base-content/90 font-mono text-[11px] border border-base-300"
                                >
                                  {post}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
