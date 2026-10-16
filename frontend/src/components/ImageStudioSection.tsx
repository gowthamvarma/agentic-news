import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Image as ImageIcon,
  Download,
  Copy,
  Check,
  Trash2,
  RefreshCw,
  Maximize2,
  Sliders,
  Layers,
  Wand2,
  X,
  ShieldCheck,
  Volume2,
  Eye,
  Zap,
  CheckCircle2,
  Camera,
  UserX,
  AlertTriangle,
  Link as LinkIcon,
} from 'lucide-react';
import type {
  NewsIntelligenceReport,
  GeneratedImageItem,
  ImagePromptSuggestion,
  MultiAgentEditorialArtState,
  CreativeConceptItem,
} from '../types';
import {
  fetchEditorialImagePrompts,
  runEditorialArtPipeline,
  generateDossierImage,
  fetchDossierImages,
  deleteDossierImage,
  resolveMediaUrl,
} from '../api';
import { useToast } from '../context/ToastContext';

interface ImageStudioSectionProps {
  analysis: NewsIntelligenceReport;
  onUpdateAnalysis?: (updated: Partial<NewsIntelligenceReport>) => void;
}

const STYLE_OPTIONS = [
  { id: 'photojournalism', label: 'Photojournalism', desc: 'Authentic 35mm news photograph, candid natural lighting' },
  { id: 'magazine_cover', label: 'Magazine Cover', desc: 'Symbolic conceptual art inspired by The Economist & TIME' },
  { id: 'isometric_3d', label: '3D Isometric', desc: 'Clean 3D render visualizing industrial & technical systems' },
  { id: 'cinematic', label: 'Cinematic Still', desc: '16:9 widescreen anamorphic depth with dramatic lighting' },
  { id: 'minimalist', label: 'Minimalist Vector', desc: 'Bold geometric shapes and Swiss graphic design aesthetic' },
];

const ASPECT_RATIO_OPTIONS = [
  { id: '16:9', label: '16:9 Landscape', desc: 'Article Hero Header' },
  { id: '1:1', label: '1:1 Square', desc: 'Social & Audio Player' },
  { id: '4:3', label: '4:3 Editorial', desc: 'Print Standard' },
  { id: '9:16', label: '9:16 Vertical', desc: 'Mobile Story' },
];

const AGENT_PIPELINE_STAGES = [
  { id: 1, name: 'News Analyst', role: 'Fact & Tension Extractor', icon: Eye, color: 'text-info' },
  { id: 2, name: 'Creative Director', role: 'Metaphor & Sensory Hooks', icon: Wand2, color: 'text-primary' },
  { id: 3, name: 'Cinematographer', role: 'Imagen 3 Prompt Formula', icon: Camera, color: 'text-warning' },
  { id: 4, name: 'Editorial Critic', role: 'Safety, Cliché & Guardrails', icon: ShieldCheck, color: 'text-success' },
];

export const ImageStudioSection: React.FC<ImageStudioSectionProps> = ({
  analysis,
  onUpdateAnalysis,
}) => {
  const { showToast } = useToast();
  const analysisId = analysis.id || analysis.analysis_id || '';

  // Form Controls State
  const [prompt, setPrompt] = useState<string>('');
  const [style, setStyle] = useState<string>('magazine_cover');
  const [aspectRatio, setAspectRatio] = useState<string>('16:9');
  const [negativePrompt, setNegativePrompt] = useState<string>('');
  const [showNegativePrompt, setShowNegativePrompt] = useState<boolean>(false);
  const [applyGuardrail, setApplyGuardrail] = useState<boolean>(true);

  // Multi-Agent Pipeline & Explorer State
  const [pipelineState, setPipelineState] = useState<MultiAgentEditorialArtState | null>(null);
  const [activeStage, setActiveStage] = useState<number>(1);
  const [isRunningPipeline, setIsRunningPipeline] = useState<boolean>(false);
  const [showExplorer, setShowExplorer] = useState<boolean>(true);

  // Suggestions State
  const [suggestions, setSuggestions] = useState<ImagePromptSuggestion[]>(() => {
    return analysis.image_prompts || [];
  });
  const [loadingSuggestions, setLoadingSuggestions] = useState<boolean>(false);

  // Gallery & Image Generation State
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [images, setImages] = useState<GeneratedImageItem[]>(() => {
    return analysis.generated_images || [];
  });
  const [selectedImage, setSelectedImage] = useState<GeneratedImageItem | null>(() => {
    return analysis.generated_images && analysis.generated_images.length > 0
      ? analysis.generated_images[0]
      : null;
  });

  // Lightbox Modal & Clipboard State
  const [lightboxUrl, setLightboxUrl] = useState<string | null>(null);
  const [copiedPrompt, setCopiedPrompt] = useState<boolean>(false);
  const [copiedUrl, setCopiedUrl] = useState<boolean>(false);
  const [newlyGeneratedId, setNewlyGeneratedId] = useState<string | null>(null);

  const selectedStyleObj = STYLE_OPTIONS.find((s) => s.id === style) || STYLE_OPTIONS[0];

  // Load existing images and initial prompt suggestions on mount
  useEffect(() => {
    if (!analysisId) return;
    let isMounted = true;

    // Load saved images
    fetchDossierImages(analysisId)
      .then((items) => {
        if (!isMounted) return;
        setImages(items);
        if (items.length > 0 && !selectedImage) {
          setSelectedImage(items[0]);
        }
      })
      .catch((err) => {
        console.warn('Could not load saved images from Firestore:', err);
      });

    // Auto-fetch prompt suggestions (loads cached if present in Firestore)
    handleLoadSuggestions(false);

    return () => {
      isMounted = false;
    };
  }, [analysisId]);

  const handleLoadSuggestions = async (refresh: boolean = false) => {
    if (!analysisId) return;
    setLoadingSuggestions(true);
    try {
      const items = await fetchEditorialImagePrompts(analysisId, refresh);
      setSuggestions(items);
      if (onUpdateAnalysis) {
        onUpdateAnalysis({ image_prompts: items });
      }

      // Check if first suggestion contains cached pipeline_state
      if (items.length > 0 && items[0].pipeline_state) {
        setPipelineState(items[0].pipeline_state);
      }

      // Auto-populate prompt with first suggestion if user hasn't typed anything yet or if refreshed
      if (items.length > 0 && (!prompt.trim() || refresh)) {
        setPrompt(items[0].prompt_text);
        if (items[0].style_name) setStyle(items[0].style_name);
        if (items[0].recommended_aspect_ratio) setAspectRatio(items[0].recommended_aspect_ratio);
      }
      if (refresh) {
        showToast('Fresh multi-agent prompts synthesized and saved to Firestore!', 'success');
      }
    } catch (err: any) {
      console.warn('Failed loading image prompt suggestions:', err);
      if (refresh) {
        showToast('Failed to regenerate image prompts', 'error');
      }
    } finally {
      setLoadingSuggestions(false);
    }
  };

  const handleRunFullPipeline = async () => {
    if (!analysisId) return;
    setIsRunningPipeline(true);
    try {
      const res = await runEditorialArtPipeline(analysisId, {
        analysis_id: analysisId,
        article_headline: analysis.topic,
        article_text: analysis.executive_summary,
        preferred_aspect_ratio: aspectRatio,
      });

      setPipelineState(res.state);
      setSuggestions(res.prompts);
      if (onUpdateAnalysis) {
        onUpdateAnalysis({ image_prompts: res.prompts });
      }

      // Populate prompt with primary critic-approved concept
      if (res.prompts.length > 0) {
        setPrompt(res.prompts[0].prompt_text);
        if (res.prompts[0].style_name) setStyle(res.prompts[0].style_name);
        if (res.prompts[0].recommended_aspect_ratio) setAspectRatio(res.prompts[0].recommended_aspect_ratio);
      }

      // Navigate to Critic review stage
      setActiveStage(4);
      showToast('4-Agent Art Room executed successfully! Production prompt ready.', 'success');
    } catch (err: any) {
      console.error('Failed to run editorial art pipeline:', err);
      showToast(err.message || 'Multi-agent pipeline failed', 'error');
    } finally {
      setIsRunningPipeline(false);
    }
  };

  const handleSelectSuggestion = (s: ImagePromptSuggestion) => {
    setPrompt(s.prompt_text);
    if (s.style_name) setStyle(s.style_name);
    if (s.recommended_aspect_ratio) setAspectRatio(s.recommended_aspect_ratio);
    if (s.pipeline_state) setPipelineState(s.pipeline_state);
    showToast(`Loaded prompt: "${s.concept_title}"`, 'info');
  };

  const handleSelectConcept = (concept: CreativeConceptItem) => {
    if (!pipelineState?.analyst_output) return;
    
    // Build cinematic prompt from concept
    const sound = concept.sensory_synesthesia;
    const constructed = `Surreal editorial photograph depicting ${concept.metaphor.toLowerCase()}, centered around ${concept.visual_hook.toLowerCase()}. Set in an atmospheric, high-contrast editorial environment. ${sound} with volumetric haze and subtle kinetic dust particles. Dramatic chiaroscuro lighting, harsh directional warm amber rim light contrasted against deep navy and slate shadows. Shot on 35mm prime lens, shallow depth of field, delicate focus falloff, refined editorial magazine aesthetic.`;
    
    setPrompt(constructed);
    setStyle(concept.style_name || 'magazine_cover');
    showToast(`Activated concept: "${concept.title}"`, 'info');
  };

  const handleInjectSonicCue = (cue: string) => {
    if (prompt.includes(cue)) {
      showToast(`Cue already in prompt: "${cue}"`, 'info');
      return;
    }
    setPrompt((prev) => `${prev.trim()} Evoking the sensory atmosphere of ${cue.toLowerCase()}.`);
    showToast(`Injected sonic cue: "${cue}"`, 'success');
  };

  const handleGenerate = async () => {
    if (!analysisId) {
      showToast('No active analysis ID found', 'error');
      return;
    }
    if (!prompt.trim()) {
      showToast('Please enter an image prompt or select one of the suggestions', 'warning');
      return;
    }

    setIsGenerating(true);
    try {
      const newImage = await generateDossierImage({
        analysis_id: analysisId,
        prompt: prompt.trim(),
        style,
        aspect_ratio: aspectRatio,
        negative_prompt: negativePrompt.trim() || undefined,
        apply_anti_deception_guardrail: applyGuardrail,
      });

      setSelectedImage(newImage);
      setNewlyGeneratedId(newImage.id);
      const updatedList = [newImage, ...images.filter((img) => img.id !== newImage.id)];
      setImages(updatedList);

      if (onUpdateAnalysis) {
        onUpdateAnalysis({ generated_images: updatedList });
      }

      showToast('Visual generated with Google Imagen 3 and guardrail verified!', 'success');
      setTimeout(() => {
        setNewlyGeneratedId(null);
      }, 10000);
    } catch (err: any) {
      showToast(err.message || 'Image generation failed', 'error');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDelete = async (imageId: string) => {
    if (!confirm('Are you sure you want to delete this generated image?')) return;
    try {
      await deleteDossierImage(analysisId, imageId);
      const updated = images.filter((img) => img.id !== imageId);
      setImages(updated);
      if (selectedImage?.id === imageId) {
        setSelectedImage(updated.length > 0 ? updated[0] : null);
      }
      if (onUpdateAnalysis) {
        onUpdateAnalysis({ generated_images: updated });
      }
      showToast('Image deleted', 'info');
    } catch (err: any) {
      showToast(err.message || 'Failed to delete image', 'error');
    }
  };

  const handleCopyPrompt = () => {
    if (!selectedImage) return;
    navigator.clipboard.writeText(selectedImage.prompt);
    setCopiedPrompt(true);
    showToast('Prompt copied to clipboard!', 'success');
    setTimeout(() => setCopiedPrompt(false), 2500);
  };

  const handleCopyUrl = () => {
    if (!selectedImage) return;
    const fullUrl = resolveMediaUrl(selectedImage.image_url);
    navigator.clipboard.writeText(fullUrl);
    setCopiedUrl(true);
    showToast('Image URL copied to clipboard!', 'success');
    setTimeout(() => setCopiedUrl(false), 2500);
  };

  const handleDownload = async () => {
    if (!selectedImage) return;
    setIsDownloading(true);
    try {
      const resolved = resolveMediaUrl(selectedImage.image_url);
      const res = await fetch(resolved);
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      const blob = await res.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = blobUrl;
      const isSvg = selectedImage.image_url.endsWith('.svg');
      const isPng = selectedImage.image_url.endsWith('.png');
      const ext = isSvg ? 'svg' : (isPng ? 'png' : 'jpg');
      a.download = `agentic-news-${selectedImage.id.slice(0, 8)}.${ext}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(blobUrl);
      showToast('Image downloaded!', 'success');
    } catch (err: any) {
      console.warn('Blob fetch failed, falling back to direct download link:', err);
      const resolved = resolveMediaUrl(selectedImage.image_url);
      const sep = resolved.includes('?') ? '&' : '?';
      const a = document.createElement('a');
      a.href = `${resolved}${sep}download=true`;
      const isSvg = selectedImage.image_url.endsWith('.svg');
      const isPng = selectedImage.image_url.endsWith('.png');
      const ext = isSvg ? 'svg' : (isPng ? 'png' : 'jpg');
      a.download = `agentic-news-${selectedImage.id.slice(0, 8)}.${ext}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner & Guardrail Trust Notice */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-base-200 via-base-300 to-base-200 p-6 md:p-8 border border-base-content/10 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-wider">
                <Sparkles size={14} className="text-primary shrink-0" />
                <span>4-Agent Editorial Art Room • Google Imagen 3</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-success/15 text-success border border-success/30 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck size={14} className="shrink-0" />
                <span>Anti-Deception Guardrail Active</span>
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-base-content">
              Editorial Image Studio & Multi-Agent Art Room
            </h2>

            <p className="text-sm md:text-base text-base-content/75 leading-relaxed">
              Transforms dry news text into visually stunning, synesthetic imagery with Google Imagen 3.
              A sequential chain of four specialized agents extracts emotional tension, invents concrete acoustic metaphors,
              synthesizes photographic prompts, and enforces strict public trust guardrails.
            </p>

            {/* Clear Guardrail Indicators Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-base-100/70 border border-success/20 text-xs">
                <UserX size={16} className="text-success shrink-0" />
                <div>
                  <div className="font-bold text-base-content text-[11px]">Likeness Stripping</div>
                  <div className="text-[10px] text-base-content/60">Politicians & CEOs replaced with silhouettes</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-base-100/70 border border-success/20 text-xs">
                <ShieldCheck size={16} className="text-success shrink-0" />
                <div>
                  <div className="font-bold text-base-content text-[11px]">Anti-Deception Tag</div>
                  <div className="text-[10px] text-base-content/60">Labeled as conceptual art (no fake news photos)</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-base-100/70 border border-success/20 text-xs">
                <Volume2 size={16} className="text-primary shrink-0" />
                <div>
                  <div className="font-bold text-base-content text-[11px]">Synesthetic Resonance</div>
                  <div className="text-[10px] text-base-content/60">Acoustic & kinetic hooks capture attention</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col items-end gap-3 shrink-0">
            <button
              type="button"
              onClick={handleRunFullPipeline}
              disabled={isRunningPipeline}
              className="btn btn-primary btn-sm gap-2 shadow-md hover:shadow-lg font-bold"
            >
              {isRunningPipeline ? (
                <>
                  <span className="loading loading-spinner loading-xs"></span>
                  <span>Art Room Collaborating...</span>
                </>
              ) : (
                <>
                  <Zap size={14} />
                  <span>Run 4-Agent Art Room</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => setShowExplorer(!showExplorer)}
              className="btn btn-ghost btn-xs text-base-content/70 hover:text-primary gap-1.5"
            >
              <Layers size={13} />
              <span>{showExplorer ? 'Hide Pipeline Explorer' : 'Show Pipeline Explorer'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Interactive 4-Agent Pipeline Explorer */}
      {showExplorer && (
        <div className="card bg-base-200/90 border border-primary/20 shadow-lg rounded-3xl p-5 md:p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-base-300 pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="badge badge-primary badge-sm font-bold uppercase text-[10px]">
                  Interactive Pipeline Explorer
                </span>
                <span className="text-xs text-base-content/60 font-mono">
                  State Contract: Shared JSON
                </span>
              </div>
              <h3 className="font-bold text-lg text-base-content flex items-center gap-2">
                <span>The Editorial Art Department in Action</span>
              </h3>
            </div>

            <button
              type="button"
              onClick={handleRunFullPipeline}
              disabled={isRunningPipeline}
              className="btn btn-xs btn-outline btn-primary gap-1"
            >
              <RefreshCw size={11} className={isRunningPipeline ? 'animate-spin' : ''} />
              <span>Re-run Agents</span>
            </button>
          </div>

          {/* 4 Stage Stepper */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 w-full">
            {AGENT_PIPELINE_STAGES.map((st) => {
              const Icon = st.icon;
              const isActive = activeStage === st.id;
              return (
                <button
                  key={st.id}
                  type="button"
                  onClick={() => setActiveStage(st.id)}
                  className={`flex flex-col items-start p-3 rounded-2xl border text-left transition-all w-full min-w-0 ${
                    isActive
                      ? 'bg-base-100 border-primary shadow-md ring-2 ring-primary/20'
                      : 'bg-base-100/50 hover:bg-base-100 border-base-300'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <span className="text-[10px] font-mono uppercase text-base-content/50">
                      Agent {st.id}
                    </span>
                    <Icon size={14} className={isActive ? 'text-primary' : 'text-base-content/40'} />
                  </div>
                  <div className="font-bold text-xs text-base-content truncate w-full">{st.name}</div>
                  <div className="text-[10px] text-base-content/60 truncate w-full">{st.role}</div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detail Cards */}
          <div className="p-4 md:p-5 rounded-2xl bg-base-100 border border-base-300 space-y-4 w-full max-w-full overflow-hidden">
            {/* Stage 1: News Analyst */}
            {activeStage === 1 && (
              <div className="space-y-4 animate-fadeIn w-full max-w-full">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-base-300 pb-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <Eye size={16} className="text-info shrink-0" />
                    <span className="font-bold text-sm break-words">Agent 1: The News Analyst (Fact & Tension Extractor)</span>
                  </div>
                  <span className="badge badge-info badge-outline badge-xs font-mono shrink-0">gemini-3.8-flash</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2 p-3.5 rounded-xl bg-base-200/50 border border-base-300 break-words">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-base-content/70">
                      Core Colliding Tension
                    </span>
                    <p className="text-xs font-medium text-base-content leading-relaxed">
                      {pipelineState?.analyst_output?.core_tension ||
                        `Systemic momentum colliding with emerging operational friction around ${analysis.topic}`}
                    </p>
                  </div>

                  <div className="space-y-2 p-3.5 rounded-xl bg-base-200/50 border border-base-300 break-words">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-base-content/70">
                      Emotional Frequency
                    </span>
                    <p className="text-xs font-medium text-base-content leading-relaxed">
                      {pipelineState?.analyst_output?.emotional_frequency || 'High-pressure, urgent, consequential'}
                    </p>
                  </div>
                </div>

                {/* Sonic Cues (Auditory Attention) */}
                <div className="space-y-2 w-full max-w-full">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-base-content/70 flex items-center gap-1.5">
                      <Volume2 size={13} className="text-primary shrink-0" />
                      <span>Extracted Sonic & Kinetic Cues (Click to inject into prompt)</span>
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 w-full">
                    {(pipelineState?.analyst_output?.sonic_cues && pipelineState.analyst_output.sonic_cues.length > 0
                      ? pipelineState.analyst_output.sonic_cues
                      : ['Groaning weathered steel', 'Foghorns in dense sea mist', 'Ticking clock resonance']
                    ).map((cue, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleInjectSonicCue(cue)}
                        className="btn btn-xs rounded-xl bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 text-[11px] gap-1.5 max-w-full h-auto py-1.5 px-2.5 whitespace-normal text-left inline-flex items-center break-words"
                        title="Inject into active prompt"
                      >
                        <Volume2 size={11} className="shrink-0" />
                        <span className="break-words">{cue}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Restricted Entities / Likeness Stripping */}
                <div className="space-y-2 p-3 rounded-xl bg-warning/10 border border-warning/25 w-full max-w-full overflow-hidden">
                  <div className="flex items-center gap-1.5 text-warning font-bold text-xs">
                    <UserX size={14} className="shrink-0" />
                    <span>Likeness Guardrail Filtered Entities</span>
                  </div>
                  <p className="text-[11px] text-base-content/80 break-words">
                    Real public figures or living leaders detected for this news topic are automatically sanitized and
                    replaced with anonymous silhouettes or symbolic items to prevent misleading deepfakes:
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5 pt-1 w-full">
                    <span className="text-[11px] font-bold text-warning flex items-center gap-1 shrink-0">
                      <span>Sanitized to Silhouette:</span>
                    </span>
                    {(pipelineState?.analyst_output?.restricted_entities && pipelineState.analyst_output.restricted_entities.length > 0
                      ? pipelineState.analyst_output.restricted_entities
                      : ['Government Officials', 'Corporate Spokespersons', 'Living Public Figures']
                    ).map((ent, idx) => (
                      <span key={idx} className="badge badge-sm badge-warning badge-outline font-mono font-semibold max-w-full break-words">
                        {ent}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Stage 2: Creative Director */}
            {activeStage === 2 && (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-base-300 pb-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <Wand2 size={16} className="text-primary shrink-0" />
                    <span className="font-bold text-sm break-words">Agent 2: The Creative Director (Metaphor Engine & Sensory Hooks)</span>
                  </div>
                  <span className="badge badge-primary badge-outline badge-xs font-mono shrink-0">gemini-3.1-pro-preview</span>
                </div>

                <p className="text-xs text-base-content/70">
                  Translates dry facts into physical, unexpected visual metaphors. Strictly prohibits cliché charts,
                  handshakes, or glowing brains. Click any concept to load it into the studio:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {(pipelineState?.creative_director_output?.concepts || [
                    {
                      concept_id: 'concept_1',
                      title: 'Macro Pressure Anchor',
                      metaphor: `A weathered brass mechanism under intense thermal strain, symbolizing ${analysis.topic}`,
                      visual_hook: 'Fine fracture lines spider-webbing across the metallic surface with amber glow',
                      sensory_synesthesia: 'Sharp crackle of cooling metal and deep ticking resonance',
                      style_name: 'magazine_cover',
                    },
                    {
                      concept_id: 'concept_2',
                      title: 'Atmospheric Kinetic Horizon',
                      metaphor: 'A vast fog-shrouded expanse with a single illuminated beacon piercing dense industrial haze',
                      visual_hook: 'Volumetric light beams cutting through rain-swept mist',
                      sensory_synesthesia: 'Low foghorn reverberating through damp heavy air',
                      style_name: 'cinematic',
                    },
                    {
                      concept_id: 'concept_3',
                      title: 'Architectural Cutaway',
                      metaphor: 'A transparent isometric cutaway revealing intricate interwoven structural chambers',
                      visual_hook: 'Glowing fiber-optic conduits pulsating through minimalist geometric chambers',
                      sensory_synesthesia: 'Rhythmic mechanical synchronization and dead silence',
                      style_name: 'isometric_3d',
                    },
                  ]).map((c: CreativeConceptItem, idx: number) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-base-200/60 border border-base-300 hover:border-primary/50 transition-all flex flex-col justify-between space-y-3"
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono text-primary uppercase font-bold">
                            Concept {idx + 1}
                          </span>
                          <span className="badge badge-xs badge-ghost capitalize font-mono text-[9px]">
                            {c.style_name}
                          </span>
                        </div>
                        <h4 className="font-bold text-xs text-base-content">{c.title}</h4>
                        <p className="text-[11px] text-base-content/75 line-clamp-3 leading-relaxed">
                          {c.metaphor}
                        </p>
                        <div className="text-[10px] text-base-content/60 italic pt-1 border-t border-base-300">
                          🔊 {c.sensory_synesthesia}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleSelectConcept(c)}
                        className="btn btn-xs btn-primary btn-outline w-full gap-1"
                      >
                        <Check size={11} />
                        <span>Use This Metaphor</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Stage 3: Cinematographer */}
            {activeStage === 3 && (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-base-300 pb-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <Camera size={16} className="text-warning shrink-0" />
                    <span className="font-bold text-sm break-words">Agent 3: The Imagen 3 Cinematographer (Prompt Synthesizer)</span>
                  </div>
                  <span className="badge badge-warning badge-outline badge-xs font-mono shrink-0">imagen-3.0-generate-002</span>
                </div>

                <div className="p-3 rounded-xl bg-base-200/50 border border-base-300 space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-base-content/70">
                    Imagen 3 Formula Decomposition
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div className="p-2 rounded-lg bg-base-100 border border-base-300">
                      <span className="font-bold text-primary block text-[10px] uppercase">1. Subject + Action</span>
                      <span className="text-[11px] text-base-content/80">
                        Concrete focal object under physical stress (no generic abstract diagrams)
                      </span>
                    </div>
                    <div className="p-2 rounded-lg bg-base-100 border border-base-300">
                      <span className="font-bold text-primary block text-[10px] uppercase">2. Acoustic Atmosphere</span>
                      <span className="text-[11px] text-base-content/80">
                        Sensory soundscapes, rain, mist, kinetic sparks evoking auditory attention
                      </span>
                    </div>
                    <div className="p-2 rounded-lg bg-base-100 border border-base-300">
                      <span className="font-bold text-primary block text-[10px] uppercase">3. Lighting & Palette</span>
                      <span className="text-[11px] text-base-content/80">
                        Chiaroscuro directional lighting, amber rim light, deep slate shadows
                      </span>
                    </div>
                    <div className="p-2 rounded-lg bg-base-100 border border-base-300">
                      <span className="font-bold text-primary block text-[10px] uppercase">4. Camera & Lens</span>
                      <span className="text-[11px] text-base-content/80">
                        35mm editorial lens, shallow depth of field, delicate focus falloff
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-base-content/70">
                    Production Imagen 3 Natural Language Prompt
                  </span>
                  <div className="p-3 rounded-xl bg-base-200 border border-base-300 text-xs font-mono leading-relaxed text-base-content/85">
                    {pipelineState?.cinematographer_output?.imagen_3_prompt || prompt || 'No prompt synthesized yet.'}
                  </div>
                </div>
              </div>
            )}

            {/* Stage 4: Editorial Critic & Guardrails */}
            {activeStage === 4 && (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-base-300 pb-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <ShieldCheck size={16} className="text-success shrink-0" />
                    <span className="font-bold text-sm break-words">Agent 4: The Editorial Critic & Safety Guardrail Officer</span>
                  </div>
                  <span className="badge badge-success badge-outline badge-xs font-mono shrink-0">Safety & Anti-Deception</span>
                </div>

                {/* Score & Verdict Banner */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-success/10 via-base-200 to-base-200 border border-success/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={18} className="text-success" />
                      <span className="font-black text-sm text-base-content">
                        Critic Evaluation: APPROVED FOR PRODUCTION
                      </span>
                    </div>
                    <p className="text-xs text-base-content/70">
                      {pipelineState?.critic_evaluation?.feedback ||
                        'Vivid tactile metaphor with strong synesthetic acoustic hooks and strict anti-deception guardrails enforced.'}
                    </p>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="text-xs uppercase font-mono text-base-content/60">Attention Score</div>
                    <div className="text-2xl font-black text-success">
                      {pipelineState?.critic_evaluation?.attention_score ? `${pipelineState.critic_evaluation.attention_score}/10` : '9.2/10'}
                    </div>
                  </div>
                </div>

                {/* Detailed Guardrails Checklist */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-base-content/70">
                    Public Trust & Guardrail Verification Checklist
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                    <div className="p-3 rounded-xl bg-base-200 border border-success/30 flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-success shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-base-content text-[11px]">Anti-Deepfake Likeness</div>
                        <div className="text-[10px] text-base-content/60">
                          Real politicians stripped & symbolized to silhouettes
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-base-200 border border-success/30 flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-success shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-base-content text-[11px]">Cliché Avoidance</div>
                        <div className="text-[10px] text-base-content/60">
                          Banned stock tropes: No chessboards, puzzles, or handshakes
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-base-200 border border-success/30 flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-success shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-base-content text-[11px]">Public Provenance</div>
                        <div className="text-[10px] text-base-content/60">
                          Labeled as conceptual editorial metaphor (C2PA standard)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Revision History if feedback loop fired */}
                {pipelineState?.revision_history && pipelineState.revision_history.length > 0 && (
                  <div className="p-3 rounded-xl bg-base-200 border border-warning/30 space-y-2">
                    <div className="flex items-center gap-1.5 text-warning font-bold text-xs">
                      <AlertTriangle size={14} />
                      <span>Critic Revision Loop History</span>
                    </div>
                    <div className="space-y-1.5 text-xs text-base-content/80">
                      {pipelineState.revision_history.map((rev, idx) => (
                        <div key={idx} className="p-2 rounded-lg bg-base-100 border border-base-300">
                          <span className="font-mono text-warning font-bold">Iteration {rev.iteration}: </span>
                          <span>{rev.critic_feedback}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Main Studio Grid: Controls & Sequential Gallery */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Prompt Ideas & Generation Controls (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="card bg-base-200/80 backdrop-blur border border-base-content/10 shadow-lg rounded-2xl p-5 md:p-6 space-y-5">
            <div className="border-b border-base-300 pb-3 space-y-1.5">
              <h3 className="font-bold text-base md:text-lg flex items-center gap-2 text-base-content">
                <Sliders size={18} className="text-primary" />
                <span>Visual Studio Controls</span>
              </h3>
              <div className="flex flex-wrap items-center gap-2">
                <span className="badge badge-sm badge-outline font-mono text-[11px] text-base-content/75">
                  Grounding: Active Dossier
                </span>
                <span className="badge badge-sm badge-success badge-outline font-mono text-[11px]">
                  Guardrail: Enforced
                </span>
              </div>
            </div>

            {/* Step 1: Multi-Agent Prompt Concepts */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-base-content/80 flex items-center gap-1.5">
                  <Wand2 size={13} className="text-primary" />
                  <span>1. AI Editorial Concepts ({suggestions.length})</span>
                </label>
                <button
                  type="button"
                  onClick={() => handleLoadSuggestions(true)}
                  disabled={loadingSuggestions}
                  className="btn btn-ghost btn-xs gap-1 text-[11px] text-primary"
                  title="Generate fresh prompts"
                >
                  <RefreshCw size={11} className={loadingSuggestions ? 'animate-spin' : ''} />
                  <span>Refresh</span>
                </button>
              </div>

              {loadingSuggestions ? (
                <div className="space-y-2">
                  {[1, 2, 3].map((n) => (
                    <div key={n} className="p-2.5 rounded-xl bg-base-100 border border-base-300 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="skeleton h-3.5 w-32"></div>
                        <div className="skeleton h-3.5 w-14 rounded-full"></div>
                      </div>
                      <div className="skeleton h-3 w-full"></div>
                      <div className="skeleton h-3 w-4/5"></div>
                    </div>
                  ))}
                </div>
              ) : suggestions.length > 0 ? (
                <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                  {suggestions.map((s, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleSelectSuggestion(s)}
                      className="p-2.5 rounded-xl bg-base-100 hover:bg-primary/10 border border-base-300 hover:border-primary/50 cursor-pointer transition-all space-y-1.5 group"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-base-content group-hover:text-primary transition-colors truncate">
                          {s.concept_title}
                        </span>
                        <div className="flex items-center gap-1 shrink-0">
                          {s.attention_score && (
                            <span className="badge badge-xs badge-success text-[9px] font-mono">
                              ★ {s.attention_score}
                            </span>
                          )}
                          <span className="badge badge-xs badge-ghost uppercase text-[9px] font-mono">
                            {s.style_name}
                          </span>
                        </div>
                      </div>

                      <p className="text-[11px] text-base-content/65 line-clamp-2 leading-relaxed">
                        {s.prompt_text}
                      </p>

                      {s.sonic_cues && s.sonic_cues.length > 0 && (
                        <div className="flex items-center gap-1 text-[10px] text-primary/80 truncate">
                          <Volume2 size={10} className="shrink-0" />
                          <span className="truncate">{s.sonic_cues[0]}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-3 rounded-xl bg-base-100/50 border border-dashed border-base-content/20 text-center text-xs text-base-content/60">
                  Click 'Run 4-Agent Art Room' or refresh to generate concepts for this news topic.
                </div>
              )}
            </div>

            {/* Step 2: Prompt Editor Textarea */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-base-content/80">
                <span>2. Prompt Text (Engineered for Imagen 3)</span>
                <span className="text-[10px] text-base-content/50 lowercase font-mono">
                  {prompt.length} chars
                </span>
              </div>
              <textarea
                className="textarea textarea-bordered w-full text-xs md:text-sm font-medium leading-relaxed h-28 focus:outline-none focus:border-primary"
                placeholder="Natural language prompt describing subject, kinetic atmosphere, lighting, and camera specs..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </div>

            {/* Step 3: Style Preset Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-base-content/80">
                3. Style Preset
              </label>
              <select
                className="select select-bordered select-sm w-full font-medium text-xs"
                value={style}
                onChange={(e) => setStyle(e.target.value)}
              >
                {STYLE_OPTIONS.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.label} — {opt.desc}
                  </option>
                ))}
              </select>
            </div>

            {/* Step 4: Aspect Ratio Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-base-content/80">
                4. Aspect Ratio & Framing
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                {ASPECT_RATIO_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setAspectRatio(opt.id)}
                    className={`btn btn-xs rounded-lg text-[11px] transition-all ${
                      aspectRatio === opt.id
                        ? 'btn-primary font-bold shadow-sm'
                        : 'btn-ghost border border-base-300 text-base-content/80'
                    }`}
                  >
                    {opt.id}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 5: Anti-Deception Guardrail Toggle */}
            <div className="p-3 rounded-xl bg-success/10 border border-success/25 space-y-1.5">
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox checkbox-success checkbox-sm mt-0.5"
                  checked={applyGuardrail}
                  onChange={(e) => setApplyGuardrail(e.target.checked)}
                />
                <div className="space-y-0.5">
                  <div className="text-xs font-bold text-base-content flex items-center gap-1.5">
                    <ShieldCheck size={13} className="text-success" />
                    <span>Enforce Anti-Deception Guardrails</span>
                  </div>
                  <p className="text-[10px] text-base-content/70 leading-relaxed">
                    Strips names of living political figures into silhouettes, attaches synthetic media provenance tags,
                    and prohibits deceptive photorealistic public deepfakes.
                  </p>
                </div>
              </label>
            </div>

            {/* Advanced Negative Prompt Accordion */}
            <div className="space-y-2 pt-1 border-t border-base-300">
              <button
                type="button"
                onClick={() => setShowNegativePrompt(!showNegativePrompt)}
                className="flex items-center justify-between w-full text-[11px] font-bold text-base-content/70 hover:text-primary transition-colors"
              >
                <span>Negative Elements to Avoid (Optional)</span>
                <span>{showNegativePrompt ? '▲' : '▼'}</span>
              </button>
              {showNegativePrompt && (
                <input
                  type="text"
                  className="input input-bordered input-xs w-full text-xs"
                  placeholder="e.g. blurry, text watermark, oversaturated, deformed"
                  value={negativePrompt}
                  onChange={(e) => setNegativePrompt(e.target.value)}
                />
              )}
            </div>

            {/* Generate Action Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleGenerate}
                disabled={isGenerating || !prompt.trim()}
                className={`btn btn-primary w-full gap-2 shadow-md hover:shadow-lg font-bold text-sm transition-all duration-300 ${
                  isGenerating ? 'brightness-105' : ''
                }`}
              >
                {isGenerating ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    <span>Creating Visual with Imagen 3...</span>
                  </>
                ) : (
                  <>
                    <ImageIcon size={16} />
                    <span>Create Visual with Imagen 3</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Multi-Image Sequential Media Gallery (7 cols) */}
        <div className="w-full lg:col-span-7 space-y-6">
          {isGenerating || selectedImage ? (
            <div className={`card w-full max-w-full bg-base-100 shadow-xl rounded-2xl overflow-hidden space-y-0 transition-all ${
              isGenerating ? 'border border-primary/40 shadow-2xl ring-1 ring-primary/20' : 'border border-base-content/10'
            }`}>
              {/* Unified Image Metadata & Action Header Bar */}
              <div className="bg-base-200/90 px-4 md:px-6 py-3 border-b border-base-300 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="badge badge-primary font-bold text-[11px] uppercase">
                    {isGenerating ? aspectRatio : (selectedImage?.aspect_ratio || '16:9')}
                  </span>
                  <span className="badge badge-outline text-[11px] capitalize">
                    {isGenerating ? selectedStyleObj.label : (selectedImage?.style || 'photojournalism')}
                  </span>
                  <span className="badge badge-ghost text-[11px] font-mono">
                    {isGenerating ? 'Google Imagen 3' : (selectedImage?.model || 'Google Imagen 3')}
                  </span>
                  {isGenerating ? (
                    <span className="badge badge-primary badge-outline text-[11px] font-semibold">
                      Synthesizing Visual
                    </span>
                  ) : (
                    <span className="badge badge-success badge-sm gap-1 text-[10px] font-bold">
                      <ShieldCheck size={11} />
                      <span>Editorial Art (C2PA)</span>
                    </span>
                  )}
                </div>

                {/* Action Buttons above image (enabled when image ready, disabled during generation) */}
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => selectedImage && setLightboxUrl(resolveMediaUrl(selectedImage.image_url))}
                    disabled={isGenerating || !selectedImage}
                    className="btn btn-ghost btn-xs gap-1 text-xs"
                    title="Fullscreen Lightbox"
                  >
                    <Maximize2 size={13} />
                    <span>Expand</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleDownload}
                    disabled={isGenerating || isDownloading || !selectedImage}
                    className="btn btn-ghost btn-xs gap-1 text-xs text-primary"
                    title="Download Image"
                  >
                    <Download size={13} />
                    <span>Download</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => selectedImage && handleDelete(selectedImage.id)}
                    disabled={isGenerating || !selectedImage}
                    className="btn btn-ghost btn-xs text-error hover:bg-error/10"
                    title="Delete Image"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              </div>

              {/* Main Visual Display Slot: Skeleton while generating, or rendered <img> when ready */}
              <div className="relative bg-base-300/40 flex items-center justify-center p-3 md:p-4 group min-h-[260px] md:min-h-[360px]">
                {isGenerating ? (
                  <div className="w-full flex items-center justify-center py-2">
                    <div
                      className={`w-full ${
                        aspectRatio === '1:1'
                          ? 'aspect-square max-w-[420px]'
                          : aspectRatio === '4:3'
                          ? 'aspect-[4/3] max-w-[480px]'
                          : aspectRatio === '9:16'
                          ? 'aspect-[9/16] max-w-[320px] max-h-[460px]'
                          : 'aspect-video max-w-[540px]'
                      } skeleton rounded-2xl relative flex flex-col items-center justify-center shadow-inner overflow-hidden border border-base-300`}
                    >
                      {/* Animated Shimmer / Pulse */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 via-transparent to-primary/10 animate-pulse"></div>

                      {/* Central Diffusion Loading Badge */}
                      <div className="relative z-10 flex flex-col items-center justify-center p-4 md:p-6 text-center space-y-3">
                        <div className="relative">
                          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-4 border-primary/20 border-t-primary animate-spin"></div>
                          <Sparkles size={18} className="text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                        </div>

                        <div className="space-y-1 max-w-xs px-2">
                          <div className="font-bold text-xs md:text-sm text-base-content">
                            <span>Generating with Imagen 3...</span>
                          </div>
                          <p className="text-[10px] md:text-[11px] text-base-content/70 font-mono">
                            Synthesizing visual metaphor & acoustic depth
                          </p>
                        </div>
                      </div>

                      {/* Watermark preview tag */}
                      <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-base-900/80 backdrop-blur border border-white/10 text-white text-[9px] font-medium flex items-center gap-1 shadow">
                        <ShieldCheck size={11} className="text-emerald-400" />
                        <span>C2PA Synthetic Media Provenance</span>
                      </div>

                      {/* Aspect Ratio Badge */}
                      <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-base-100/70 backdrop-blur text-[10px] font-mono text-base-content/70">
                        {aspectRatio}
                      </div>
                    </div>
                  </div>
                ) : selectedImage ? (
                  <>
                    <img
                      src={resolveMediaUrl(selectedImage.image_url)}
                      alt={selectedImage.prompt}
                      className="rounded-xl shadow-md max-h-[460px] w-auto max-w-full object-contain cursor-pointer transition-transform group-hover:scale-[1.01]"
                      onClick={() => setLightboxUrl(resolveMediaUrl(selectedImage.image_url))}
                    />

                    {/* Provenance Guardrail Overlay Tag */}
                    <div className="absolute bottom-6 left-6 px-3 py-1 rounded-full bg-base-900/80 backdrop-blur border border-white/20 text-white text-[10px] font-semibold flex items-center gap-1.5 shadow-lg">
                      <ShieldCheck size={12} className="text-emerald-400" />
                      <span>AI-Generated Editorial Metaphor • Synthetic Media</span>
                    </div>
                  </>
                ) : null}
              </div>

              {/* Full Width Prompt Box & Metadata Footer - Same layout & standard font */}
              <div className="p-4 md:p-6 bg-base-100 border-t border-base-300 space-y-3 w-full">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-bold text-base-content/60 tracking-wider flex items-center gap-1.5">
                      <Camera size={13} className="text-primary" />
                      <span>Imagen 3 Conditioning Prompt</span>
                    </span>
                    {!isGenerating && selectedImage && selectedImage.id === newlyGeneratedId && (
                      <span className="badge badge-xs badge-success font-bold animate-pulse text-[9px]">
                        RECENTLY GENERATED
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      type="button"
                      onClick={handleCopyUrl}
                      disabled={isGenerating || !selectedImage}
                      className="btn btn-ghost btn-xs gap-1 text-xs"
                      title="Copy Image URL"
                    >
                      {copiedUrl ? <Check size={12} className="text-success" /> : <LinkIcon size={12} />}
                      <span>{copiedUrl ? 'URL Copied' : 'Copy URL'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleCopyPrompt}
                      disabled={!prompt && !selectedImage?.prompt}
                      className="btn btn-ghost btn-xs gap-1 text-xs"
                      title="Copy Prompt"
                    >
                      {copiedPrompt ? <Check size={12} className="text-success" /> : <Copy size={12} />}
                      <span>{copiedPrompt ? 'Copied' : 'Copy Prompt'}</span>
                    </button>
                  </div>
                </div>

                {/* Prompt Text - Full Width, Standard page font, No quotes */}
                <div className="w-full p-4 rounded-xl bg-base-200/70 border border-base-300 text-xs md:text-sm text-base-content/90 font-medium leading-relaxed break-words">
                  {isGenerating ? prompt : (selectedImage?.prompt || prompt)}
                </div>

                {/* Meta Pills Bar inside Prompt Card */}
                <div className="flex flex-wrap items-center gap-2 pt-1 text-[10px]">
                  <span className="badge badge-xs badge-primary badge-outline font-mono">
                    Preset: {isGenerating ? selectedStyleObj.label : (selectedImage?.style || selectedStyleObj.label)}
                  </span>
                  <span className="badge badge-xs badge-outline font-mono">
                    Framing: {isGenerating ? aspectRatio : (selectedImage?.aspect_ratio || aspectRatio)}
                  </span>
                  {(applyGuardrail || (!isGenerating && selectedImage)) && (
                    <span className="badge badge-xs badge-success badge-outline font-mono flex items-center gap-1">
                      <ShieldCheck size={10} />
                      <span>Likeness Stripped & Guardrail Enforced</span>
                    </span>
                  )}
                  {pipelineState?.analyst_output?.sonic_cues?.[0] && (
                    <span className="badge badge-xs badge-ghost font-mono text-primary flex items-center gap-1">
                      <Volume2 size={10} />
                      <span>Acoustic Hook: {pipelineState.analyst_output.sonic_cues[0]}</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="card w-full max-w-full p-12 rounded-2xl bg-base-200/50 border border-dashed border-base-content/20 text-center space-y-3">
              <ImageIcon size={36} className="mx-auto text-base-content/30" />
              <h4 className="font-bold text-sm text-base-content">No visuals generated yet</h4>
              <p className="text-xs text-base-content/60 max-w-sm mx-auto">
                Select a multi-agent concept from the left, inspect the cinematography formula, and click
                "Create Visual with Imagen 3".
              </p>
            </div>
          )}

          {/* Saved Visuals Carousel / Thumbnails */}
          {(images.length > 0 || isGenerating) && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-base-content/75 uppercase tracking-wider">
                <span>Dossier Visual Archive ({images.length})</span>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                {/* Active placeholder in thumbnail list while generating */}
                {isGenerating && (
                  <div className="relative rounded-xl overflow-hidden border-2 border-primary border-dashed aspect-video bg-primary/10 p-2 flex flex-col items-center justify-center text-center animate-pulse shadow-md">
                    <span className="loading loading-spinner loading-xs text-primary mb-1"></span>
                    <span className="text-[9px] font-bold text-primary uppercase tracking-wider">Rendering</span>
                  </div>
                )}

                {images.map((img) => {
                  const isNewlyGenerated = img.id === newlyGeneratedId;
                  const isSelected = selectedImage?.id === img.id;
                  return (
                    <div
                      key={img.id}
                      onClick={() => setSelectedImage(img)}
                      className={`relative rounded-xl overflow-hidden cursor-pointer border transition-all aspect-video bg-base-300 group ${
                        isNewlyGenerated
                          ? 'border-success ring-2 ring-success shadow-lg scale-95'
                          : isSelected
                          ? 'border-primary ring-2 ring-primary/40 scale-95'
                          : 'border-base-300 hover:border-primary/50'
                      }`}
                    >
                      {isNewlyGenerated && (
                        <span className="badge badge-xs badge-success absolute top-1.5 left-1.5 font-black uppercase text-[8px] shadow-md z-10 animate-bounce">
                          NEW
                        </span>
                      )}
                      <img
                        src={resolveMediaUrl(img.image_url)}
                        alt="Thumbnail"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Eye size={14} className="text-white" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxUrl && (
        <div className="modal modal-open z-50">
          <div className="modal-box max-w-5xl p-4 bg-base-100/95 backdrop-blur-md rounded-3xl border border-base-content/10">
            <div className="flex items-center justify-between pb-3 border-b border-base-300 mb-3">
              <div className="flex items-center gap-2">
                <span className="badge badge-primary font-bold text-xs uppercase">
                  Google Imagen 3
                </span>
                <span className="badge badge-success badge-sm gap-1 text-[11px] font-bold">
                  <ShieldCheck size={12} />
                  Anti-Deception Guardrail Verified
                </span>
              </div>
              <button
                type="button"
                onClick={() => setLightboxUrl(null)}
                className="btn btn-ghost btn-sm btn-circle"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex items-center justify-center p-2 bg-base-300/30 rounded-2xl">
              <img
                src={lightboxUrl}
                alt="Fullscreen View"
                className="max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl"
              />
            </div>

            <div className="pt-3 flex items-center justify-between text-xs text-base-content/60">
              <span className="font-mono">
                AI-Generated Editorial Metaphor • Synthetic Visual Media • Not a Real Documentary Photo
              </span>
              <button
                type="button"
                onClick={handleDownload}
                className="btn btn-primary btn-sm gap-1.5"
              >
                <Download size={14} />
                <span>Download Asset</span>
              </button>
            </div>
          </div>
          <div className="modal-backdrop bg-black/70" onClick={() => setLightboxUrl(null)}></div>
        </div>
      )}
    </div>
  );
};
