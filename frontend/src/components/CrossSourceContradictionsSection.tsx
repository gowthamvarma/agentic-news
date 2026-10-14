import React, { useState, useMemo, useEffect } from 'react';
import {
  AlertTriangle,
  GitCompare,
  Hash,
  Clock,
  Quote,
  XCircle,
  Scale,
  Search,
  Copy,
  Check,
  LayoutGrid,
  Table as TableIcon,
  Radio,
  RefreshCw
} from 'lucide-react';
import type { ContradictionItem } from '../types';
import { generateContradictions } from '../api';
import { useToast } from '../context/ToastContext';

interface CrossSourceContradictionsSectionProps {
  contradictions?: ContradictionItem[];
  topic?: string;
  analysisId?: string;
  onContradictionsUpdated?: (items: ContradictionItem[]) => void;
}

export const CrossSourceContradictionsSection: React.FC<CrossSourceContradictionsSectionProps> = ({
  contradictions = [],
  topic,
  analysisId,
  onContradictionsUpdated,
}) => {
  const { showToast } = useToast();
  const [items, setItems] = useState<ContradictionItem[]>(() => contradictions || []);
  const [auditing, setAuditing] = useState(false);
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('ALL');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    if (contradictions && contradictions.length > 0) {
      setItems(contradictions);
    }
  }, [contradictions]);

  const handleRunContradictionAudit = async () => {
    if (!topic) return;
    setAuditing(true);
    try {
      const generated = await generateContradictions(topic, analysisId);
      if (generated && generated.length > 0) {
        setItems(generated);
        onContradictionsUpdated?.(generated);
        showToast(`Forensically identified ${generated.length} cross-source contradictions!`, 'success');
      } else {
        showToast('No contradictory accounts identified in audited coverage.', 'info');
      }
    } catch (err: any) {
      showToast(err.message || 'Failed to run contradiction audit.', 'error');
    } finally {
      setAuditing(false);
    }
  };

  // Compute divergence types present for filter pills
  const availableTypes = useMemo(() => {
    const types = new Set<string>();
    items.forEach((c) => {
      if (c.divergence_type) types.add(c.divergence_type);
    });
    return Array.from(types);
  }, [items]);

  // Filter contradictions by search query and divergence type
  const filteredContradictions = useMemo(() => {
    return items.filter((item) => {
      const matchesType = selectedType === 'ALL' || item.divergence_type === selectedType;
      if (!matchesType) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        item.topic_aspect?.toLowerCase().includes(q) ||
        item.outlet_a?.toLowerCase().includes(q) ||
        item.outlet_b?.toLowerCase().includes(q) ||
        item.claim_a?.toLowerCase().includes(q) ||
        item.claim_b?.toLowerCase().includes(q) ||
        item.analysis?.toLowerCase().includes(q) ||
        item.divergence_type?.toLowerCase().includes(q)
      );
    });
  }, [items, selectedType, searchQuery]);

  const handleCopy = (c: ContradictionItem) => {
    const textToCopy = `[Contradiction: ${c.topic_aspect} (${c.divergence_type})]\n- ${c.outlet_a}: "${c.claim_a}"\n- ${c.outlet_b}: "${c.claim_b}"\n\nForensic Audit: ${c.analysis}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(c.contradiction_id);
    setTimeout(() => {
      setCopiedId((curr) => (curr === c.contradiction_id ? null : curr));
    }, 2000);
  };

  const getDivergenceBadge = (type: string) => {
    switch (type) {
      case 'Fact Negation':
        return {
          icon: <XCircle size={13} className="text-error" />,
          badgeClass: 'badge-error badge-outline text-error',
          label: 'Fact Negation',
          desc: 'Direct contradiction on factual claims'
        };
      case 'Numerical Discrepancy':
        return {
          icon: <Hash size={13} className="text-warning" />,
          badgeClass: 'badge-warning badge-outline text-warning',
          label: 'Numerical Discrepancy',
          desc: 'Disputed metrics, percentages, or figures'
        };
      case 'Timeline Divergence':
        return {
          icon: <Clock size={13} className="text-info" />,
          badgeClass: 'badge-info badge-outline text-info',
          label: 'Timeline Divergence',
          desc: 'Conflicting event chronology or sequencing'
        };
      case 'Causal Dispute':
        return {
          icon: <GitCompare size={13} className="text-secondary" />,
          badgeClass: 'badge-secondary badge-outline text-secondary',
          label: 'Causal Dispute',
          desc: 'Conflicting attribution of root causes or liability'
        };
      case 'Attribution Conflict':
        return {
          icon: <Radio size={13} className="text-accent" />,
          badgeClass: 'badge-accent badge-outline text-accent',
          label: 'Attribution Conflict',
          desc: 'Conflicting sources or disputed anonymous reporting'
        };
      default:
        return {
          icon: <AlertTriangle size={13} className="text-warning" />,
          badgeClass: 'badge-warning badge-outline',
          label: type || 'Divergence',
          desc: 'Cross-outlet report divergence'
        };
    }
  };

  // If no contradictions exist at all in report
  if (!items || items.length === 0) {
    return (
      <div className="card bg-base-200 border border-base-300 shadow-xl overflow-hidden">
        <div className="card-body p-6 md:p-8">
          <div className="flex items-center gap-3 pb-3 border-b border-base-300">
            <div className="w-10 h-10 rounded-xl bg-warning/10 text-warning flex items-center justify-center flex-shrink-0">
              <GitCompare size={22} />
            </div>
            <div>
              <h2 className="text-xl font-black text-base-content leading-tight">
                Cross-Source Contradictions & Side-by-Side Divergence
              </h2>
              <p className="text-xs text-base-content/60 mt-0.5">
                Automated forensic discrepancy detection across audited reporting desks
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center py-10 px-4 text-center">
            <div className="w-14 h-14 rounded-full bg-warning/10 text-warning flex items-center justify-center mb-3">
              <GitCompare size={28} />
            </div>
            <h3 className="text-base font-bold text-base-content">
              No Cross-Source Contradictions Currently Loaded
            </h3>
            <p className="text-sm text-base-content/70 max-w-md mt-1">
              Cross-examine competing desks, contrasting casualty or financial estimates, and opposing editorial assertions.
            </p>
            {topic && (
              <button
                type="button"
                className="btn btn-warning btn-sm mt-4 gap-2 font-bold shadow-sm"
                onClick={handleRunContradictionAudit}
                disabled={auditing}
              >
                {auditing ? (
                  <>
                    <span className="loading loading-spinner loading-xs" />
                    <span>Auditing Cross-Source Divergences...</span>
                  </>
                ) : (
                  <>
                    <GitCompare size={16} />
                    <span>Run Forensic Contradiction Audit</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card bg-base-200 border border-base-300 shadow-xl overflow-hidden">
      <div className="card-body p-5 md:p-8">
        {/* Section Header - Line 1: Title, Badge & Subtitle */}
        <div className="flex items-start sm:items-center gap-3 pb-3">
          <div className="w-11 h-11 rounded-xl bg-warning/15 text-warning border border-warning/30 flex items-center justify-center flex-shrink-0 shadow-xs">
            <GitCompare size={24} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-xl md:text-2xl font-black text-base-content tracking-tight">
                Cross-Source Contradictions & Side-by-Side Divergence
              </h2>
              <span className="badge badge-warning badge-sm font-bold flex-shrink-0">
                {items.length} {items.length === 1 ? 'Clash' : 'Clashes'}
              </span>
            </div>
            <p className="text-xs md:text-sm text-base-content/70 mt-1 leading-relaxed">
              Side-by-side forensic cross-examination of conflicting metrics, conflicting timelines, and diverging editorial claims across reporting desks.
            </p>
          </div>
        </div>

        {/* Action Controls - Line 2: Re-Audit Clashes & View Mode Toggle */}
        <div className="flex flex-wrap items-center justify-between gap-3 py-3 border-t border-b border-base-300">
          <div>
            {topic && (
              <button
                type="button"
                className="btn btn-sm btn-outline btn-warning gap-2 font-semibold shadow-xs"
                onClick={handleRunContradictionAudit}
                disabled={auditing}
                title="Re-run forensic contradiction audit across reporting desks"
              >
                <RefreshCw size={14} className={auditing ? 'animate-spin' : ''} />
                <span>{auditing ? 'Cross-examining reporting desks...' : 'Re-Audit Clashes'}</span>
              </button>
            )}
          </div>

          {/* View Mode Toggle */}
          <div className="join bg-base-100 p-1 rounded-xl border border-base-300 shadow-xs">
            <button
              type="button"
              className={`join-item btn btn-xs md:btn-sm gap-1.5 font-bold ${
                viewMode === 'cards' ? 'btn-primary text-primary-content shadow-xs' : 'btn-ghost text-base-content/70'
              }`}
              onClick={() => setViewMode('cards')}
              title="Duel Cards view"
            >
              <LayoutGrid size={15} />
              <span>Side-by-Side Cards</span>
            </button>
            <button
              type="button"
              className={`join-item btn btn-xs md:btn-sm gap-1.5 font-bold ${
                viewMode === 'table' ? 'btn-primary text-primary-content shadow-xs' : 'btn-ghost text-base-content/70'
              }`}
              onClick={() => setViewMode('table')}
              title="Comparison Matrix table view"
            >
              <TableIcon size={15} />
              <span>Comparison Matrix</span>
            </button>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pt-2 pb-1">
          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs font-bold text-base-content/60 mr-1 uppercase tracking-wider">
              Filter:
            </span>
            <button
              type="button"
              className={`badge badge-sm cursor-pointer transition-all ${
                selectedType === 'ALL'
                  ? 'badge-primary font-bold'
                  : 'badge-ghost text-base-content/70 hover:badge-neutral'
              }`}
              onClick={() => setSelectedType('ALL')}
            >
              All ({items.length})
            </button>
            {availableTypes.map((type) => {
              const count = items.filter((c) => c.divergence_type === type).length;
              const isSelected = selectedType === type;
              return (
                <button
                  key={type}
                  type="button"
                  className={`badge badge-sm cursor-pointer transition-all ${
                    isSelected
                      ? 'badge-warning font-bold'
                      : 'badge-ghost text-base-content/70 hover:badge-neutral'
                  }`}
                  onClick={() => setSelectedType(type)}
                >
                  {type} ({count})
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[220px] md:max-w-xs w-full">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/40" />
            <input
              type="text"
              placeholder="Search claims or outlets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input input-sm input-bordered w-full pl-9 pr-3 text-xs bg-base-100 rounded-lg focus:outline-none focus:border-primary"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-base-content/50 hover:text-base-content"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* If filtered list is empty */}
        {filteredContradictions.length === 0 && (
          <div className="bg-base-100 border border-base-300 rounded-xl p-8 text-center my-3 shadow-xs">
            <Search size={24} className="mx-auto text-base-content/30 mb-2" />
            <div className="text-sm font-bold text-base-content">No matching contradictions found</div>
            <p className="text-xs text-base-content/60 mt-1">
              Try adjusting your search query or reset the filter pill to "All".
            </p>
            <button
              type="button"
              className="btn btn-xs btn-outline btn-primary mt-3"
              onClick={() => {
                setSelectedType('ALL');
                setSearchQuery('');
              }}
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* VIEW 1: SIDE-BY-SIDE CARDS */}
        {viewMode === 'cards' && filteredContradictions.length > 0 && (
          <div className="flex flex-col gap-6 mt-3">
            {filteredContradictions.map((c, idx) => {
              const badgeInfo = getDivergenceBadge(c.divergence_type);
              const isCopied = copiedId === c.contradiction_id;

              return (
                <div
                  key={c.contradiction_id || idx}
                  className="card bg-base-100 border border-base-300 hover:border-warning/50 transition-all shadow-md overflow-hidden rounded-2xl"
                >
                  {/* Card Header Bar */}
                  <div className="px-5 py-3.5 bg-base-200/60 border-b border-base-300 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="badge badge-neutral font-mono font-bold text-xs">
                        #{c.contradiction_id || `DIV-${idx + 1}`}
                      </span>
                      <h3 className="text-base font-bold text-base-content tracking-tight">
                        {c.topic_aspect}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2">
                      <div
                        className={`badge ${badgeInfo.badgeClass} gap-1 font-bold text-xs py-2 px-2.5 shadow-xs`}
                        title={badgeInfo.desc}
                      >
                        {badgeInfo.icon}
                        <span>{badgeInfo.label}</span>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleCopy(c)}
                        className="btn btn-ghost btn-xs text-base-content/70 hover:text-base-content gap-1"
                        title="Copy contradiction details to clipboard"
                      >
                        {isCopied ? (
                          <>
                            <Check size={13} className="text-success" />
                            <span className="text-success text-xs font-bold">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy size={13} />
                            <span className="hidden sm:inline text-xs font-medium">Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Clash Grid: Outlet A vs Outlet B */}
                  <div className="p-5 md:p-6">
                    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 items-stretch">
                      {/* Central VS Badge (Visible on desktop centered, on mobile between cards) */}
                      <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-base-100 border-2 border-warning text-warning items-center justify-center font-black text-xs shadow-md tracking-tighter">
                        VS
                      </div>

                      {/* OUTLET A CONTAINER */}
                      <div className="flex flex-col justify-between rounded-xl p-4 md:p-5 bg-gradient-to-br from-primary/5 via-base-100 to-base-100 border-2 border-primary/30 shadow-xs relative">
                        <div>
                          {/* Outlet Tag */}
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <div className="flex items-center gap-2">
                              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                              <span className="text-xs font-black uppercase tracking-wider text-primary">
                                {c.outlet_a}
                              </span>
                            </div>
                            <span className="badge badge-primary badge-outline badge-xs font-bold uppercase tracking-wider">
                              Perspective A
                            </span>
                          </div>

                          {/* Claim Quote */}
                          <div className="relative pl-3.5 border-l-3 border-primary/60 my-2">
                            <Quote
                              size={16}
                              className="text-primary/40 absolute -left-1.5 -top-2 fill-primary/10"
                            />
                            <p className="text-sm md:text-base font-semibold text-base-content leading-relaxed">
                              "{c.claim_a}"
                            </p>
                          </div>
                        </div>

                        <div className="text-[11px] text-base-content/50 uppercase font-bold tracking-wider mt-3 pt-2 border-t border-primary/10">
                          Stated Position / Assertion
                        </div>
                      </div>

                      {/* Mobile VS separator */}
                      <div className="flex md:hidden items-center justify-center my-1">
                        <div className="w-8 h-8 rounded-full bg-base-200 border-2 border-warning text-warning flex items-center justify-center font-black text-xs shadow-xs">
                          VS
                        </div>
                      </div>

                      {/* OUTLET B CONTAINER */}
                      <div className="flex flex-col justify-between rounded-xl p-4 md:p-5 bg-gradient-to-br from-secondary/5 via-base-100 to-base-100 border-2 border-secondary/30 shadow-xs relative">
                        <div>
                          {/* Outlet Tag */}
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <div className="flex items-center gap-2">
                              <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
                              <span className="text-xs font-black uppercase tracking-wider text-secondary">
                                {c.outlet_b}
                              </span>
                            </div>
                            <span className="badge badge-secondary badge-outline badge-xs font-bold uppercase tracking-wider">
                              Perspective B
                            </span>
                          </div>

                          {/* Claim Quote */}
                          <div className="relative pl-3.5 border-l-3 border-secondary/60 my-2">
                            <Quote
                              size={16}
                              className="text-secondary/40 absolute -left-1.5 -top-2 fill-secondary/10"
                            />
                            <p className="text-sm md:text-base font-semibold text-base-content leading-relaxed">
                              "{c.claim_b}"
                            </p>
                          </div>
                        </div>

                        <div className="text-[11px] text-base-content/50 uppercase font-bold tracking-wider mt-3 pt-2 border-t border-secondary/10">
                          Counter-Assertion / Contradicting Account
                        </div>
                      </div>
                    </div>

                    {/* Evidentiary Audit Resolution */}
                    <div className="mt-5 rounded-xl bg-base-200/90 border border-base-300 p-4 shadow-inner">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-warning/15 text-warning flex items-center justify-center flex-shrink-0 mt-0.5 border border-warning/20">
                          <Scale size={18} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                            <span className="text-xs font-black uppercase tracking-wider text-base-content/80 flex items-center gap-1.5">
                              <span>Evidentiary Audit & Forensic Resolution</span>
                            </span>
                            <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-base-300 text-base-content/60">
                              Root Cause Synthesis
                            </span>
                          </div>
                          <p className="text-xs md:text-sm text-base-content/90 leading-relaxed">
                            {c.analysis}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* VIEW 2: COMPARISON MATRIX TABLE */}
        {viewMode === 'table' && filteredContradictions.length > 0 && (
          <div className="overflow-x-auto rounded-xl border border-base-300 bg-base-100 mt-3 shadow-sm">
            <table className="table table-sm md:table-md w-full">
              <thead>
                <tr className="bg-base-200 text-base-content font-bold border-b border-base-300">
                  <th className="w-16">ID</th>
                  <th className="min-w-[180px]">Topic Aspect & Type</th>
                  <th className="min-w-[220px]">
                    <span className="text-primary font-bold">Outlet A Position</span>
                  </th>
                  <th className="min-w-[220px]">
                    <span className="text-secondary font-bold">Outlet B Position</span>
                  </th>
                  <th className="min-w-[260px]">Evidentiary Audit Finding</th>
                  <th className="w-12 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredContradictions.map((c, idx) => {
                  const badgeInfo = getDivergenceBadge(c.divergence_type);
                  const isCopied = copiedId === c.contradiction_id;

                  return (
                    <tr
                      key={c.contradiction_id || idx}
                      className="border-b border-base-200 hover:bg-base-200/40 transition-colors align-top"
                    >
                      {/* ID */}
                      <td className="font-mono text-xs font-bold text-base-content/70 pt-4">
                        {c.contradiction_id || `#${idx + 1}`}
                      </td>

                      {/* Topic & Type */}
                      <td className="pt-4">
                        <div className="font-bold text-sm text-base-content mb-1">
                          {c.topic_aspect}
                        </div>
                        <span className={`badge ${badgeInfo.badgeClass} badge-xs font-bold py-1.5 px-2 gap-1`}>
                          {badgeInfo.icon}
                          {badgeInfo.label}
                        </span>
                      </td>

                      {/* Outlet A */}
                      <td className="pt-4">
                        <div className="p-2.5 rounded-lg bg-primary/5 border border-primary/20">
                          <div className="text-[11px] font-black uppercase text-primary mb-1">
                            {c.outlet_a}
                          </div>
                          <div className="text-xs text-base-content font-medium leading-snug">
                            "{c.claim_a}"
                          </div>
                        </div>
                      </td>

                      {/* Outlet B */}
                      <td className="pt-4">
                        <div className="p-2.5 rounded-lg bg-secondary/5 border border-secondary/20">
                          <div className="text-[11px] font-black uppercase text-secondary mb-1">
                            {c.outlet_b}
                          </div>
                          <div className="text-xs text-base-content font-medium leading-snug">
                            "{c.claim_b}"
                          </div>
                        </div>
                      </td>

                      {/* Evidentiary Audit */}
                      <td className="pt-4">
                        <div className="p-2.5 rounded-lg bg-base-200/80 border border-base-300 text-xs text-base-content/85 leading-relaxed">
                          <div className="flex items-center gap-1 font-bold text-[10px] uppercase text-warning mb-1">
                            <Scale size={12} />
                            <span>Forensic Finding</span>
                          </div>
                          {c.analysis}
                        </div>
                      </td>

                      {/* Copy Action */}
                      <td className="pt-4 text-center">
                        <button
                          type="button"
                          onClick={() => handleCopy(c)}
                          className="btn btn-ghost btn-xs text-base-content/60 hover:text-base-content"
                          title="Copy contradiction"
                        >
                          {isCopied ? <Check size={14} className="text-success" /> : <Copy size={14} />}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* Informative Footer Tip */}
        <div className="mt-4 pt-3 border-t border-base-300 flex flex-wrap items-center justify-between text-xs text-base-content/60 gap-2">
          <div className="flex items-center gap-1.5">
            <Scale size={14} className="text-warning flex-shrink-0" />
            <span>
              Contradictions are flagged using comparative claim parsing and reconciled against verified regulatory, primary, and wire registries.
            </span>
          </div>
          <div className="font-semibold text-base-content/80">
            Showing {filteredContradictions.length} of {contradictions.length} divergences
          </div>
        </div>
      </div>
    </div>
  );
};
