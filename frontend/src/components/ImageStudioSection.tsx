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
  Calendar,
  Layers,
  Wand2,
  X,
  ExternalLink
} from 'lucide-react';
import type {
  NewsIntelligenceReport,
  GeneratedImageItem,
  ImagePromptSuggestion,
} from '../types';
import {
  fetchEditorialImagePrompts,
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
  { id: '1:1', label: '1:1 Square', desc: 'Social & Feed Post' },
  { id: '4:3', label: '4:3 Editorial', desc: 'Print Standard' },
  { id: '9:16', label: '9:16 Vertical', desc: 'Mobile Story' },
];

export const ImageStudioSection: React.FC<ImageStudioSectionProps> = ({
  analysis,
  onUpdateAnalysis,
}) => {
  const { showToast } = useToast();
  const analysisId = analysis.id || analysis.analysis_id || '';

  // Form Controls State
  const [prompt, setPrompt] = useState<string>('');
  const [style, setStyle] = useState<string>('photojournalism');
  const [aspectRatio, setAspectRatio] = useState<string>('16:9');
  const [negativePrompt, setNegativePrompt] = useState<string>('');
  const [showNegativePrompt, setShowNegativePrompt] = useState<boolean>(false);

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
      // Auto-populate prompt with first suggestion if user hasn't typed anything yet or if refreshed
      if (items.length > 0 && (!prompt.trim() || refresh)) {
        setPrompt(items[0].prompt_text);
        if (items[0].style_name) setStyle(items[0].style_name);
        if (items[0].recommended_aspect_ratio) setAspectRatio(items[0].recommended_aspect_ratio);
      }
      if (refresh) {
        showToast('Fresh image concepts generated and saved to Firestore!', 'success');
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

  const handleSelectSuggestion = (s: ImagePromptSuggestion) => {
    setPrompt(s.prompt_text);
    if (s.style_name) setStyle(s.style_name);
    if (s.recommended_aspect_ratio) setAspectRatio(s.recommended_aspect_ratio);
    showToast(`Loaded prompt: "${s.concept_title}"`, 'info');
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
      });

      setSelectedImage(newImage);
      const updatedList = [newImage, ...images.filter((img) => img.id !== newImage.id)];
      setImages(updatedList);

      if (onUpdateAnalysis) {
        onUpdateAnalysis({ generated_images: updatedList });
      }

      showToast('Image generated with Google Imagen 3 and saved!', 'success');
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
      console.warn('Blob fetch failed, falling back to direct download link with download parameter:', err);
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
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-base-200 via-base-300 to-base-200 p-6 md:p-8 border border-base-content/10 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-wider">
              <Sparkles size={14} className="text-primary shrink-0" />
              <span>Google Imagen 3 & Gemini 3.8 Flash • Visual Studio</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-base-content">
              On-Demand Image Studio
            </h2>
            <p className="text-sm md:text-base text-base-content/70 leading-relaxed">
              Generate publication-grade editorial visuals, 3D technical cutaways, and thematic covers
              grounded in this investigation using <span className="font-bold text-primary">Imagen 3</span>.
              Create multiple sequential images with tailored styles and resolutions.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="stats bg-base-100/80 backdrop-blur shadow-sm border border-base-content/10">
              <div className="stat py-2 px-4">
                <div className="stat-title text-xs font-medium">Generated Visuals</div>
                <div className="stat-value text-xl font-bold text-primary">{images.length}</div>
                <div className="stat-desc text-[11px] text-success font-semibold">Saved</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Studio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Prompt Ideas & Generation Controls (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="card bg-base-200/80 backdrop-blur border border-base-content/10 shadow-lg rounded-2xl p-5 md:p-6 space-y-5">
            <div className="border-b border-base-300 pb-3 space-y-1.5">
              <h3 className="font-bold text-base md:text-lg flex items-center gap-2 text-base-content">
                <Sliders size={18} className="text-primary" />
                <span>Visual Configuration</span>
              </h3>
              <div>
                <span className="badge badge-sm badge-outline font-mono text-[11px] text-base-content/75">
                  Grounding: Active Dossier
                </span>
              </div>
            </div>

            {/* Step 1: AI Prompt Concepts Carousel */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-base-content/80 flex items-center gap-1.5">
                  <Wand2 size={13} className="text-primary" />
                  <span>1. AI Editorial Concepts (Gemini)</span>
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
                <div className="p-4 rounded-xl bg-base-100/60 border border-base-300 flex items-center justify-center gap-2 text-xs text-base-content/70">
                  <span className="loading loading-spinner loading-xs text-primary"></span>
                  <span>Synthesizing grounded visual concepts...</span>
                </div>
              ) : suggestions.length > 0 ? (
                <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                  {suggestions.map((s, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleSelectSuggestion(s)}
                      className="p-2.5 rounded-xl bg-base-100 hover:bg-primary/10 border border-base-300 hover:border-primary/50 cursor-pointer transition-all space-y-1 group"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-base-content group-hover:text-primary transition-colors truncate">
                          {s.concept_title}
                        </span>
                        <span className="badge badge-xs badge-ghost uppercase text-[10px] shrink-0 font-mono">
                          {s.style_name}
                        </span>
                      </div>
                      <p className="text-[11px] text-base-content/65 line-clamp-2 leading-relaxed">
                        {s.prompt_text}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-3 rounded-xl bg-base-100/50 border border-dashed border-base-content/20 text-center text-xs text-base-content/60">
                  Click refresh to generate AI concepts for this news topic.
                </div>
              )}
            </div>

            {/* Step 2: Prompt Editor Textarea */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-base-content/80">
                <span>2. Prompt Text</span>
                <span className="text-[10px] text-base-content/50 lowercase font-mono">
                  {prompt.length} chars
                </span>
              </div>
              <textarea
                className="textarea textarea-bordered w-full text-xs md:text-sm font-medium leading-relaxed h-28 focus:outline-none focus:border-primary"
                placeholder="Describe the editorial scene, subject, lighting, and composition..."
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

            {/* Step 5: Advanced Negative Prompt Accordion */}
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
                className="btn btn-primary w-full gap-2 shadow-md hover:shadow-lg font-bold text-sm"
              >
                {isGenerating ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    <span>Rendering with Imagen 3...</span>
                  </>
                ) : (
                  <>
                    <ImageIcon size={16} />
                    <span>Generate Visual with Imagen 3</span>
                  </>
                )}
              </button>
              {isGenerating && (
                <p className="text-[11px] text-center text-primary animate-pulse pt-2 font-medium">
                  Diffusion synthesis in progress • Processing resolution and lighting...
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Multi-Image Sequential Media Gallery (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {!selectedImage ? (
            <div className="card bg-base-200/50 border border-dashed border-base-content/20 rounded-2xl p-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto shadow-inner">
                <ImageIcon size={32} />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-base-content">No Visuals Generated Yet</h4>
                <p className="text-xs md:text-sm text-base-content/60 max-w-md mx-auto leading-relaxed">
                  Select an AI prompt concept on the left, pick an aspect ratio (16:9, 1:1, etc.),
                  and click Generate. You can produce multiple images one after another for this story.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Selected Hero Image Viewer Card */}
              <div className="card bg-base-100 border border-base-content/10 shadow-xl rounded-2xl overflow-hidden">
                {/* Meta Ribbon */}
                <div className="bg-base-200/90 px-6 py-3 border-b border-base-300 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="badge badge-primary font-bold text-[11px] uppercase">
                      {selectedImage.aspect_ratio}
                    </span>
                    <span className="badge badge-outline text-[11px] capitalize">
                      {selectedImage.style.replace('_', ' ')}
                    </span>
                    <span className="badge badge-ghost text-[11px] font-mono">
                      {selectedImage.model}
                    </span>
                    <span className="text-[11px] text-base-content/60 flex items-center gap-1">
                      <Calendar size={12} />
                      <span>
                        {new Date(selectedImage.created_at * 1000).toLocaleString(undefined, {
                          dateStyle: 'medium',
                          timeStyle: 'short',
                        })}
                      </span>
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setLightboxUrl(selectedImage.image_url)}
                      className="btn btn-ghost btn-xs rounded-lg gap-1 border border-base-300"
                      title="Full Screen Inspection"
                    >
                      <Maximize2 size={13} />
                      <span>Zoom</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleCopyUrl}
                      className="btn btn-ghost btn-xs rounded-lg gap-1 border border-base-300 font-semibold"
                      title="Copy Public Image URL"
                    >
                      {copiedUrl ? <Check size={13} className="text-success" /> : <ExternalLink size={13} />}
                      <span>{copiedUrl ? 'Copied' : 'Link'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleDownload}
                      disabled={isDownloading}
                      className="btn btn-primary btn-xs rounded-lg gap-1 shadow-xs font-semibold"
                      title="Download Image File"
                    >
                      {isDownloading ? (
                        <span className="loading loading-spinner loading-xs"></span>
                      ) : (
                        <Download size={13} />
                      )}
                      <span>{isDownloading ? 'Saving...' : 'Download'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(selectedImage.id)}
                      className="btn btn-ghost btn-xs text-error rounded-lg"
                      title="Delete Image"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>

                {/* Main Rendered Image Container */}
                <div className="relative bg-base-300/30 flex items-center justify-center p-2 md:p-4 min-h-[340px] max-h-[560px] overflow-hidden">
                  <img
                    src={resolveMediaUrl(selectedImage.image_url)}
                    alt={selectedImage.prompt}
                    className="max-h-[520px] w-auto max-w-full rounded-xl shadow-md object-contain cursor-pointer hover:opacity-95 transition-opacity"
                    onClick={() => setLightboxUrl(selectedImage.image_url)}
                    loading="lazy"
                  />
                </div>

                {/* Prompt Details & Copy */}
                <div className="p-4 md:p-5 bg-base-100 border-t border-base-300 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-base-content/70">
                      Grounding Prompt Used
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyPrompt}
                      className="btn btn-ghost btn-xs gap-1 text-[11px] text-primary"
                    >
                      {copiedPrompt ? <Check size={12} className="text-success" /> : <Copy size={12} />}
                      <span>{copiedPrompt ? 'Copied' : 'Copy Prompt'}</span>
                    </button>
                  </div>
                  <p className="text-xs md:text-sm text-base-content/85 leading-relaxed italic bg-base-200/50 p-3 rounded-xl border border-base-300">
                    "{selectedImage.prompt}"
                  </p>
                </div>
              </div>

              {/* Sequential Multi-Image Thumbnails Filmstrip */}
              {images.length > 1 && (
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-base-content/80 flex items-center gap-1.5">
                      <Layers size={13} className="text-primary" />
                      <span>Story Gallery ({images.length} visuals)</span>
                    </span>
                    <span className="text-[11px] text-base-content/50">
                      Click thumbnail to switch view
                    </span>
                  </div>

                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2.5">
                    {images.map((img) => {
                      const isSelected = selectedImage?.id === img.id;
                      return (
                        <div
                          key={img.id}
                          onClick={() => setSelectedImage(img)}
                          className={`relative aspect-video rounded-xl overflow-hidden cursor-pointer border-2 transition-all group ${
                            isSelected
                              ? 'border-primary shadow-md scale-[1.02]'
                              : 'border-base-300 hover:border-primary/50 opacity-80 hover:opacity-100'
                          }`}
                        >
                          <img
                            src={resolveMediaUrl(img.image_url)}
                            alt={img.prompt}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-1">
                            <span className="text-[9px] text-white font-mono uppercase font-bold">
                              {img.aspect_ratio}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Full Screen Modal */}
      {lightboxUrl && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setLightboxUrl(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxUrl(null)}
            className="absolute top-6 right-6 btn btn-circle btn-sm bg-base-100/30 text-white hover:bg-base-100/60 border-none"
          >
            <X size={18} />
          </button>
          <img
            src={resolveMediaUrl(lightboxUrl)}
            alt="Full size view"
            className="max-h-[90vh] max-w-[95vw] rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};
