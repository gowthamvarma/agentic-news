import React, { useState, useMemo } from 'react';
import {
  Clock,
  Calendar,
  Flame,
  ArrowUpDown,
  ExternalLink,
  Copy,
  Check,
  Search,
  Sparkles,
  Info
} from 'lucide-react';
import type { TimelinePayload, TimelineEvent } from '../types';

interface TimelineSectionProps {
  timeline?: TimelinePayload | null;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ timeline }) => {
  const [sortOrder, setSortOrder] = useState<'chronological' | 'reverse'>('chronological');
  const [filterRecentOnly, setFilterRecentOnly] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const rawEvents: TimelineEvent[] = useMemo(() => {
    return timeline?.events || [];
  }, [timeline?.events]);

  // Determine which events count as recent / trending
  // If explicitly flagged is_recent, use that; otherwise mark the final event as the latest/trending development
  const eventsWithRecentMeta = useMemo(() => {
    const hasAnyExplicitRecent = rawEvents.some((ev) => ev.is_recent === true);
    return rawEvents.map((ev, idx) => {
      const isRecent =
        ev.is_recent === true || (!hasAnyExplicitRecent && rawEvents.length > 0 && idx === rawEvents.length - 1);
      return {
        ...ev,
        originalIndex: idx,
        isRecent
      };
    });
  }, [rawEvents]);

  const recentCount = useMemo(() => {
    return eventsWithRecentMeta.filter((ev) => ev.isRecent).length;
  }, [eventsWithRecentMeta]);

  // Process sorting and filtering
  const displayedEvents = useMemo(() => {
    let result = [...eventsWithRecentMeta];

    if (filterRecentOnly) {
      result = result.filter((ev) => ev.isRecent);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (ev) =>
          ev.headline?.toLowerCase().includes(q) ||
          ev.description?.toLowerCase().includes(q) ||
          ev.source_outlet?.toLowerCase().includes(q) ||
          ev.timestamp_or_date?.toLowerCase().includes(q) ||
          ev.narrative_shift?.toLowerCase().includes(q)
      );
    }

    if (sortOrder === 'reverse') {
      result.reverse();
    }

    return result;
  }, [eventsWithRecentMeta, filterRecentOnly, searchQuery, sortOrder]);

  const handleCopyEvent = (ev: TimelineEvent, idx: number) => {
    const copyText = `[Timeline: ${ev.timestamp_or_date}] ${ev.headline}\nOutlet: ${ev.source_outlet}\nDetails: ${ev.description}${ev.narrative_shift ? `\nNarrative Shift: ${ev.narrative_shift}` : ''
      }`;
    navigator.clipboard.writeText(copyText);
    setCopiedIdx(idx);
    setTimeout(() => {
      setCopiedIdx((curr) => (curr === idx ? null : curr));
    }, 2000);
  };

  if (!timeline || rawEvents.length === 0) {
    return (
      <div className="card bg-base-200 border border-base-300 shadow-xl p-8 md:p-12 text-center">
        <div className="w-14 h-14 rounded-full bg-base-300 flex items-center justify-center mx-auto mb-3 text-base-content/60">
          <Clock size={28} />
        </div>
        <h3 className="text-lg font-bold text-base-content">No Chronological Milestones Available</h3>
        <p className="text-sm text-base-content/60 max-w-md mx-auto mt-1">
          A narrative trajectory will be reconstructed once verifiable chronological milestones are published across primary news sources.
        </p>
      </div>
    );
  }

  return (
    <div className="card bg-base-200 border border-base-300 shadow-xl overflow-hidden">
      <div className="card-body p-6 md:p-8">
        {/* Header with Title and Badges */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-base-300">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-primary/15 text-primary border border-primary/30 flex items-center justify-center flex-shrink-0 shadow-xs">
              <Clock size={24} />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-xl md:text-2xl font-black text-base-content tracking-tight">
                  Chronological Event Timeline & Narrative Evolution
                </h2>
                <span className="badge badge-primary badge-sm font-bold">
                  {rawEvents.length} Milestones
                </span>
                {recentCount > 0 && (
                  <span className="badge badge-warning badge-sm font-bold gap-1 text-warning-content shadow-xs">
                    <Flame size={12} className="fill-current" />
                    {recentCount} Recent / Trending
                  </span>
                )}
              </div>
              <p className="text-xs md:text-sm text-base-content/70 mt-1 leading-relaxed">
                Tracing early antecedent milestones up to the most recent trending incidents, real-time developments, and narrative shifts.
              </p>
            </div>
          </div>

          {/* Action Toolbar: Sorting and Recent Filter */}
          <div className="flex items-center gap-2 flex-wrap self-start lg:self-center flex-shrink-0">
            {/* Chronological / Reverse Toggle Group */}
            <div className="join shadow-xs border border-base-300 rounded-lg overflow-hidden">
              <button
                type="button"
                onClick={() => setSortOrder('chronological')}
                className={`btn btn-sm join-item font-bold gap-1.5 ${sortOrder === 'chronological'
                  ? 'btn-primary text-primary-content'
                  : 'btn-ghost text-base-content/75 hover:bg-base-300'
                  }`}
                title="View in chronological order (oldest first)"
              >
                <Clock size={14} />
                <span>Oldest First</span>
              </button>
              <button
                type="button"
                onClick={() => setSortOrder('reverse')}
                className={`btn btn-sm join-item font-bold gap-1.5 ${sortOrder === 'reverse'
                    ? 'btn-primary text-primary-content'
                    : 'btn-ghost text-base-content/75 hover:bg-base-300'
                  }`}
                title="Reverse order (newest incidents first)"
              >
                <ArrowUpDown size={14} />
                <span>Newest First</span>
              </button>
            </div>

            {/* Filter Recent Only Button */}
            {recentCount > 0 && (
              <button
                type="button"
                onClick={() => setFilterRecentOnly(!filterRecentOnly)}
                className={`btn btn-sm gap-1.5 font-bold shadow-xs transition-all ${filterRecentOnly ? 'btn-warning text-warning-content' : 'btn-outline btn-warning'
                  }`}
              >
                <Flame size={14} className={filterRecentOnly ? 'fill-current' : ''} />
                <span>{filterRecentOnly ? 'Showing Recent Only' : 'Recent Only'}</span>
              </button>
            )}
          </div>
        </div>

        {/* Narrative Evolution Synthesis Alert */}
        {timeline.narrative_evolution_summary && (
          <div className="alert alert-info bg-info/10 text-base-content border border-info/30 rounded-xl my-4 p-4">
            <div className="flex items-start gap-3">
              <Sparkles size={20} className="text-info flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-xs uppercase text-info tracking-wider flex items-center gap-2">
                  <span>Narrative Evolution Synthesis</span>
                  <span className="badge badge-info badge-outline badge-xs font-semibold">Traversing Full Arc</span>
                </div>
                <div className="text-sm md:text-base text-base-content/90 mt-1 leading-relaxed">
                  {timeline.narrative_evolution_summary}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 pb-2">
          <div className="flex items-center gap-2 text-xs text-base-content/70">
            <Info size={14} className="text-primary flex-shrink-0" />
            <span>
              {sortOrder === 'chronological'
                ? 'Showing sequence from precursor antecedents down to latest trending developments'
                : 'Showing latest breaking incidents at the top descending to historical antecedents'}
            </span>
          </div>

          {/* Quick Search */}
          <div className="relative min-w-[200px] sm:max-w-xs w-full">
            <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/40" />
            <input
              type="text"
              placeholder="Search timeline..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input input-xs input-bordered w-full pl-8 pr-3 text-xs bg-base-100 rounded-lg focus:outline-none focus:border-primary"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-base-content/50 hover:text-base-content"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Empty filter message */}
        {displayedEvents.length === 0 && (
          <div className="bg-base-100 border border-base-300 rounded-xl p-8 text-center my-4 shadow-xs">
            <Search size={24} className="mx-auto text-base-content/30 mb-2" />
            <div className="text-sm font-bold text-base-content">No events match your current filter</div>
            <p className="text-xs text-base-content/60 mt-1">
              Try clearing your search query or reset the "Recent Only" toggle.
            </p>
            <button
              type="button"
              className="btn btn-xs btn-outline btn-primary mt-3"
              onClick={() => {
                setFilterRecentOnly(false);
                setSearchQuery('');
              }}
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* DaisyUI Timeline Component - All cards aligned to the right for efficient space usage */}
        {displayedEvents.length > 0 && (
          <ul className="timeline timeline-compact timeline-vertical w-full mt-6">
            {displayedEvents.map((ev, idx) => {
              const isCopied = copiedIdx === idx;

              return (
                <li key={idx} className="w-full">
                  {idx > 0 && (
                    <hr className={ev.isRecent ? 'bg-warning/60' : 'bg-primary/40'} />
                  )}

                  {/* Timeline Middle Marker / Icon */}
                  <div className="timeline-middle">
                    {ev.isRecent ? (
                      <div className="bg-warning text-warning-content p-1.5 rounded-full shadow-lg ring-4 ring-warning/20">
                        <Flame size={16} className="fill-current animate-bounce" />
                      </div>
                    ) : (
                      <div className="bg-primary text-primary-content p-1.5 rounded-full shadow-md">
                        <Clock size={15} />
                      </div>
                    )}
                  </div>

                  {/* Timeline End: Full-width card aligned to the right of the timeline */}
                  <div className="timeline-end mb-6 w-full min-w-0">
                    <div
                      className={`card transition-all p-4 md:p-6 rounded-2xl shadow-sm text-start w-full overflow-hidden min-w-0 break-words ${ev.isRecent
                          ? 'bg-gradient-to-br from-warning/10 via-base-100 to-base-100 border-2 border-warning/60 shadow-md ring-1 ring-warning/30'
                          : 'bg-base-100 border border-base-300 hover:border-primary/50'
                        }`}
                    >
                      {/* Top Badges: Date, Recent Indicator & Copy Button */}
                      <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <div
                            className={`badge badge-sm gap-1 font-mono font-bold shrink-0 ${ev.isRecent ? 'badge-warning text-warning-content' : 'badge-info badge-outline'
                              }`}
                          >
                            <Calendar size={12} />
                            <span>{ev.timestamp_or_date}</span>
                          </div>

                          {ev.isRecent && (
                            <span className="badge badge-warning badge-sm font-bold gap-1 text-warning-content animate-pulse shrink-0">
                              <Flame size={12} className="fill-current" />
                              <span>Recent Incident / Trending</span>
                            </span>
                          )}
                        </div>

                        <button
                          type="button"
                          onClick={() => handleCopyEvent(ev, idx)}
                          className="btn btn-ghost btn-xs text-base-content/60 hover:text-base-content p-1 shrink-0"
                          title="Copy milestone details"
                        >
                          {isCopied ? (
                            <Check size={14} className="text-success" />
                          ) : (
                            <Copy size={14} />
                          )}
                        </button>
                      </div>

                      {/* Headline */}
                      <h3 className="font-bold text-base md:text-lg text-base-content mt-1 leading-snug break-words">
                        {ev.headline}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-base-content/80 mt-2 leading-relaxed break-words">
                        {ev.description}
                      </p>

                      {/* Source & Narrative Shift */}
                      <div className="flex flex-wrap items-center gap-2 mt-3 pt-2.5 border-t border-base-200">
                        {ev.source_url ? (
                          <a
                            href={ev.source_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link link-primary text-xs flex items-center gap-1 font-semibold hover:underline"
                          >
                            <span>Source: {ev.source_outlet}</span>
                            <ExternalLink size={12} />
                          </a>
                        ) : (
                          <span className="text-xs text-base-content/60 font-medium">
                            Source: {ev.source_outlet}
                          </span>
                        )}

                        {ev.narrative_shift && (
                          <div className="w-full mt-2 p-2.5 rounded-xl bg-secondary/10 border border-secondary/25 text-xs text-base-content leading-relaxed font-medium">
                            <span className="font-bold uppercase tracking-wider text-[10px] text-secondary block mb-0.5">
                              Narrative Shift Tracked
                            </span>
                            {ev.narrative_shift}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {idx < displayedEvents.length - 1 && (
                    <hr className={ev.isRecent ? 'bg-warning/60' : 'bg-primary/40'} />
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};
