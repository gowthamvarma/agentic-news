import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  Search,
  Star,
  Trash2,
  RefreshCw,
  ArrowRight,
  Calendar,
  Globe,
  Database,
  Table,
  LayoutGrid,
  MonitorSmartphone,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  CheckCircle2,
  X,
} from 'lucide-react';
import type { AnalysisArchiveItem } from '../types';
import { fetchAnalysesArchive, updateAnalysis, deleteAnalysis } from '../api';

interface AnalysisHistoryGridProps {
  onSelectAnalysis: (analysisId: string) => void;
}

type SortField = 'created_at' | 'topic' | 'sources';
type SortDirection = 'asc' | 'desc';

export const AnalysisHistoryGrid: React.FC<AnalysisHistoryGridProps> = ({ onSelectAnalysis }) => {
  const [items, setItems] = useState<AnalysisArchiveItem[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Search and filter states
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>('');
  const [favoritesOnly, setFavoritesOnly] = useState<boolean>(false);
  const [pageSize, setPageSize] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Debounce search term to prevent keystroke network flooding
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 250);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  // Screen size detection: desktop mode (>= 768px) vs mobile mode (< 768px)
  const [isDesktop, setIsDesktop] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 768;
    }
    return true;
  });

  // Optional manual user override: null follows screen size automatically
  const [userOverride, setUserOverride] = useState<'table' | 'cards' | null>(null);

  useEffect(() => {
    // Purge any stale legacy localStorage value that was forcing table view
    try {
      localStorage.removeItem('agentic_news_history_view');
    } catch {}

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    // Initial check on mount
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  // Client sort state
  const [sortField, setSortField] = useState<SortField>('created_at');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const offset = (currentPage - 1) * pageSize;
      const res = await fetchAnalysesArchive({
        limit: pageSize,
        offset,
        search: debouncedSearchTerm.trim() || undefined,
        favorites_only: favoritesOnly || undefined,
      });
      setItems(res.items || []);
      setTotal(res.total || 0);
    } catch (err: any) {
      console.error('Failed to load analyses:', err);
      setError(err?.message || 'Error fetching analysis archives from server');
    } finally {
      setLoading(false);
    }
  }, [currentPage, pageSize, debouncedSearchTerm, favoritesOnly]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleToggleFavorite = async (item: AnalysisArchiveItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const newStatus = !item.is_favorite;

    // Optimistic update
    setItems((prev) =>
      prev.map((r) => (r.id === item.id ? { ...r, is_favorite: newStatus } : r))
    );

    try {
      await updateAnalysis(item.id, { is_favorite: newStatus });
      if (favoritesOnly && !newStatus) {
        loadData();
      }
    } catch (err) {
      console.error('Failed to update favorite:', err);
      // Revert optimistic update
      setItems((prev) =>
        prev.map((r) => (r.id === item.id ? { ...r, is_favorite: !newStatus } : r))
      );
    }
  };

  const handleDelete = async (item: AnalysisArchiveItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!window.confirm(`Permanently delete investigation archive:\n"${item.topic}"?`)) return;

    try {
      await deleteAnalysis(item.id);
      if (items.length <= 1 && currentPage > 1) {
        setCurrentPage((prev) => prev - 1);
      } else {
        loadData();
      }
    } catch (err: any) {
      alert(`Failed to delete record: ${err?.message || err}`);
    }
  };

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  // Sorted items for Table/Card view
  const sortedItems = useMemo(() => {
    const list = [...items];
    list.sort((a, b) => {
      if (sortField === 'created_at') {
        const valA = a.created_at || 0;
        const valB = b.created_at || 0;
        return sortDirection === 'asc' ? valA - valB : valB - valA;
      }
      if (sortField === 'topic') {
        const valA = (a.topic || '').toLowerCase();
        const valB = (b.topic || '').toLowerCase();
        return sortDirection === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA);
      }
      if (sortField === 'sources') {
        const countA = Math.max(a.sources_analyzed?.length || 0, a.articles_analyzed?.length || 0);
        const countB = Math.max(b.sources_analyzed?.length || 0, b.articles_analyzed?.length || 0);
        return sortDirection === 'asc' ? countA - countB : countB - countA;
      }
      return 0;
    });
    return list;
  }, [items, sortField, sortDirection]);

  // Aggregate stats
  const totalFavorites = useMemo(() => {
    return items.filter((i) => i.is_favorite).length;
  }, [items]);

  const totalSourcesCount = useMemo(() => {
    return items.reduce((acc, curr) => {
      const cnt = Math.max(curr.sources_analyzed?.length || 0, curr.articles_analyzed?.length || 0);
      return acc + cnt;
    }, 0);
  }, [items]);

  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  const formatTimestamp = (timestamp?: number) => {
    if (!timestamp) return 'Recent';
    const d = new Date(timestamp * 1000);
    return d.toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }) + ' ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Top Overview Metric Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5">
        <div className="card bg-base-200/80 border border-base-300 shadow-sm p-3 sm:p-4 flex flex-row items-center gap-2.5 sm:gap-3.5 min-w-0">
          <div className="p-2 sm:p-3 rounded-xl bg-primary/10 text-primary shrink-0">
            <Database size={20} className="sm:w-[22px] sm:h-[22px]" />
          </div>
          <div className="min-w-0">
            <div className="text-[10px] sm:text-xs text-base-content/60 font-semibold uppercase tracking-wider truncate">
              Total Archives
            </div>
            <div className="text-lg sm:text-2xl font-black text-base-content mt-0.5">
              {total}
            </div>
          </div>
        </div>

        <div className="card bg-base-200/80 border border-base-300 shadow-sm p-3 sm:p-4 flex flex-row items-center gap-2.5 sm:gap-3.5 min-w-0">
          <div className="p-2 sm:p-3 rounded-xl bg-warning/10 text-warning shrink-0">
            <Star size={20} className="sm:w-[22px] sm:h-[22px] fill-warning/40" />
          </div>
          <div className="min-w-0">
            <div className="text-[10px] sm:text-xs text-base-content/60 font-semibold uppercase tracking-wider truncate">
              Starred
            </div>
            <div className="text-lg sm:text-2xl font-black text-base-content mt-0.5">
              {favoritesOnly ? total : totalFavorites}
            </div>
          </div>
        </div>

        <div className="card bg-base-200/80 border border-base-300 shadow-sm p-3 sm:p-4 flex flex-row items-center gap-2.5 sm:gap-3.5 min-w-0">
          <div className="p-2 sm:p-3 rounded-xl bg-secondary/10 text-secondary shrink-0">
            <Globe size={20} className="sm:w-[22px] sm:h-[22px]" />
          </div>
          <div className="min-w-0">
            <div className="text-[10px] sm:text-xs text-base-content/60 font-semibold uppercase tracking-wider truncate">
              Sources Audited
            </div>
            <div className="text-lg sm:text-2xl font-black text-base-content mt-0.5">
              {totalSourcesCount}+
            </div>
          </div>
        </div>

        <div className="card bg-base-200/80 border border-base-300 shadow-sm p-3 sm:p-4 flex flex-row items-center gap-2.5 sm:gap-3.5 min-w-0">
          <div className="p-2 sm:p-3 rounded-xl bg-success/10 text-success shrink-0">
            <CheckCircle2 size={20} className="sm:w-[22px] sm:h-[22px]" />
          </div>
          <div className="min-w-0">
            <div className="text-[10px] sm:text-xs text-base-content/60 font-semibold uppercase tracking-wider truncate">
              Persistence
            </div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse shrink-0"></span>
              <span className="text-xs sm:text-sm font-bold text-base-content truncate">
                Firestore Sync
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Card Container */}
      <div className="card bg-base-200/60 border border-base-300 shadow-xl rounded-2xl overflow-hidden backdrop-blur-sm">
        {/* Controls and Filter Bar */}
        <div className="p-4 md:p-5 border-b border-base-300/80 bg-base-200/90 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="flex-1 max-w-md relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-base-content/40">
              <Search size={16} />
            </div>
            <input
              type="text"
              placeholder="Search headline, topic, or keyword..."
              className="input input-sm md:input-md input-bordered w-full pl-9 pr-8 text-xs md:text-sm rounded-xl bg-base-100 border-base-300 focus:border-primary focus:outline-none transition-all shadow-sm"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
            {searchTerm && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setCurrentPage(1);
                }}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-base-content/40 hover:text-base-content"
                title="Clear search"
              >
                <X size={15} />
              </button>
            )}
          </div>

          {/* Right Toolbar Controls */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Filter Toggle: All vs Starred */}
            <div className="join bg-base-100 p-1 rounded-xl border border-base-300 shadow-sm">
              <button
                onClick={() => {
                  setFavoritesOnly(false);
                  setCurrentPage(1);
                }}
                className={`join-item btn btn-xs md:btn-sm rounded-lg font-semibold transition-all ${
                  !favoritesOnly
                    ? 'btn-primary shadow-sm'
                    : 'btn-ghost text-base-content/70 hover:text-base-content'
                }`}
              >
                All Records
              </button>
              <button
                onClick={() => {
                  setFavoritesOnly(true);
                  setCurrentPage(1);
                }}
                className={`join-item btn btn-xs md:btn-sm rounded-lg font-semibold gap-1.5 transition-all ${
                  favoritesOnly
                    ? 'btn-warning text-warning-content shadow-sm'
                    : 'btn-ghost text-base-content/70 hover:text-warning'
                }`}
              >
                <Star size={13} className={favoritesOnly ? 'fill-current' : ''} />
                <span>Starred Only</span>
              </button>
            </div>

            {/* View Mode Toggle Switcher */}
            <div className="join bg-base-100 p-1 rounded-xl border border-base-300 shadow-sm">
              <button
                onClick={() => setUserOverride(null)}
                className={`join-item btn btn-xs md:btn-sm rounded-lg gap-1.5 transition-all ${
                  userOverride === null
                    ? 'btn-primary shadow-sm'
                    : 'btn-ghost text-base-content/60 hover:text-base-content'
                }`}
                title={`Screen Size Auto: currently ${isDesktop ? 'Desktop Table View' : 'Mobile Card View'}`}
              >
                <MonitorSmartphone size={14} />
                <span className="hidden sm:inline text-xs font-semibold">
                  Auto
                  <span className="opacity-75 text-[10px] ml-1 font-normal hidden lg:inline">
                    ({isDesktop ? 'Table' : 'Cards'})
                  </span>
                </span>
              </button>
              <button
                onClick={() => setUserOverride('table')}
                className={`join-item btn btn-xs md:btn-sm rounded-lg gap-1.5 transition-all ${
                  userOverride === 'table'
                    ? 'btn-primary shadow-sm'
                    : 'btn-ghost text-base-content/60 hover:text-base-content'
                }`}
                title="Force Table View"
              >
                <Table size={14} />
                <span className="hidden sm:inline text-xs font-semibold">Table</span>
              </button>
              <button
                onClick={() => setUserOverride('cards')}
                className={`join-item btn btn-xs md:btn-sm rounded-lg gap-1.5 transition-all ${
                  userOverride === 'cards'
                    ? 'btn-primary shadow-sm'
                    : 'btn-ghost text-base-content/60 hover:text-base-content'
                }`}
                title="Force Card View"
              >
                <LayoutGrid size={14} />
                <span className="hidden sm:inline text-xs font-semibold">Cards</span>
              </button>
            </div>

            {/* Refresh Button */}
            <button
              onClick={() => loadData()}
              className="btn btn-sm btn-outline border-base-300 hover:border-primary btn-square rounded-xl shadow-sm bg-base-100"
              title="Refresh analyses from Firestore"
              disabled={loading}
            >
              <RefreshCw size={15} className={loading ? 'animate-spin text-primary' : 'text-base-content/70'} />
            </button>
          </div>
        </div>

        {/* Error Notification */}
        {error && (
          <div className="alert alert-error text-xs p-3 m-4 rounded-xl shadow-md">
            <span>{error}</span>
            <button onClick={() => loadData()} className="btn btn-xs btn-outline">
              Retry
            </button>
          </div>
        )}

        {/* VIEW 1: Modern Interactive DaisyUI Table View (Desktop & Forced Table) */}
        <div
          className={`w-full overflow-x-auto ${
            userOverride === 'table'
              ? 'block'
              : userOverride === 'cards'
              ? 'hidden'
              : 'hidden md:block'
          }`}
        >
            <table className="table table-zebra w-full text-left">
              {/* Header */}
              <thead>
                <tr className="bg-base-300/50 text-base-content/70 border-b border-base-300 text-[11px] uppercase tracking-wider font-bold">
                  <th className="w-12 text-center py-3.5 pl-4">★</th>
                  <th
                    className="cursor-pointer hover:text-primary transition-colors py-3.5"
                    onClick={() => handleSort('topic')}
                  >
                    <div className="flex items-center gap-1.5">
                      <span>Topic & Investigation</span>
                      {sortField === 'topic' ? (
                        sortDirection === 'asc' ? <ArrowUp size={13} /> : <ArrowDown size={13} />
                      ) : (
                        <ArrowUpDown size={12} className="opacity-40" />
                      )}
                    </div>
                  </th>
                  <th className="py-3.5 max-w-md hidden md:table-cell">Executive Summary</th>
                  <th
                    className="cursor-pointer hover:text-primary transition-colors py-3.5 w-32"
                    onClick={() => handleSort('sources')}
                  >
                    <div className="flex items-center gap-1.5">
                      <span>Sources</span>
                      {sortField === 'sources' ? (
                        sortDirection === 'asc' ? <ArrowUp size={13} /> : <ArrowDown size={13} />
                      ) : (
                        <ArrowUpDown size={12} className="opacity-40" />
                      )}
                    </div>
                  </th>
                  <th
                    className="cursor-pointer hover:text-primary transition-colors py-3.5 w-44"
                    onClick={() => handleSort('created_at')}
                  >
                    <div className="flex items-center gap-1.5">
                      <span>Date Analyzed</span>
                      {sortField === 'created_at' ? (
                        sortDirection === 'asc' ? <ArrowUp size={13} /> : <ArrowDown size={13} />
                      ) : (
                        <ArrowUpDown size={12} className="opacity-40" />
                      )}
                    </div>
                  </th>
                  <th className="text-right py-3.5 pr-5 w-28">Action</th>
                </tr>
              </thead>

              {/* Body */}
              <tbody className="divide-y divide-base-300/40">
                {loading ? (
                  // Skeleton rows during loading
                  [1, 2, 3, 4, 5].map((n) => (
                    <tr key={n} className="animate-pulse">
                      <td className="text-center pl-4">
                        <div className="skeleton w-4 h-4 rounded mx-auto"></div>
                      </td>
                      <td className="py-4">
                        <div className="skeleton h-4 w-3/4 mb-1.5"></div>
                        <div className="skeleton h-3 w-1/3"></div>
                      </td>
                      <td className="hidden md:table-cell py-4">
                        <div className="skeleton h-3.5 w-full mb-1"></div>
                        <div className="skeleton h-3.5 w-4/5"></div>
                      </td>
                      <td className="py-4">
                        <div className="skeleton h-5 w-20 rounded-full"></div>
                      </td>
                      <td className="py-4">
                        <div className="skeleton h-4 w-28"></div>
                      </td>
                      <td className="text-right pr-5 py-4">
                        <div className="skeleton h-7 w-16 rounded-lg ml-auto"></div>
                      </td>
                    </tr>
                  ))
                ) : sortedItems.length > 0 ? (
                  sortedItems.map((item) => {
                    const sourcesCount = Math.max(
                      item.sources_analyzed?.length || 0,
                      item.articles_analyzed?.length || 0
                    );
                    const verificationsCount = item.verifications?.length || 0;

                    return (
                      <tr
                        key={item.id}
                        onClick={() => onSelectAnalysis(item.id)}
                        className="hover:bg-primary/5 transition-colors cursor-pointer group"
                      >
                        {/* Star / Favorite */}
                        <td className="text-center pl-4 py-3.5">
                          <button
                            onClick={(e) => handleToggleFavorite(item, e)}
                            className="btn btn-ghost btn-xs btn-square hover:bg-transparent transition-transform hover:scale-110"
                            title={item.is_favorite ? 'Starred' : 'Star this investigation'}
                          >
                            {item.is_favorite ? (
                              <Star size={16} className="text-warning fill-warning drop-shadow-sm" />
                            ) : (
                              <Star size={16} className="text-base-content/25 hover:text-warning" />
                            )}
                          </button>
                        </td>

                        {/* Topic & Headline */}
                        <td className="py-3.5">
                          <div className="flex flex-col gap-1 pr-2">
                            <span className="font-bold text-sm text-base-content group-hover:text-primary transition-colors line-clamp-1">
                              {item.topic}
                            </span>
                            <div className="flex items-center gap-2 text-[11px] text-base-content/60">
                              <span className="badge badge-xs badge-neutral font-mono font-normal px-2 py-0.5 my-0.5">
                                {item.id.slice(0, 12)}...
                              </span>
                              {verificationsCount > 0 && (
                                <span className="text-[11px] text-base-content/60">
                                  {verificationsCount} Fact-Audits
                                </span>
                              )}
                            </div>
                          </div>
                        </td>

                        {/* Executive Summary */}
                        <td className="py-3.5 max-w-md hidden md:table-cell">
                          <p className="text-xs text-base-content/75 line-clamp-2 leading-relaxed">
                            {item.executive_summary || (
                              <span className="italic text-base-content/40">
                                Autonomous 25-agent intelligence dispatch recorded.
                              </span>
                            )}
                          </p>
                        </td>

                        {/* Sources */}
                        <td className="py-3.5">
                          <span className="badge badge-sm badge-outline badge-primary font-mono gap-1.5 px-2.5 py-1 font-semibold">
                            <Globe size={12} />
                            <span>{sourcesCount} Outlets</span>
                          </span>
                        </td>

                        {/* Date Created */}
                        <td className="py-3.5 text-xs text-base-content/70 font-mono">
                          <div className="flex items-center gap-1.5">
                            <Calendar size={13} className="text-base-content/40" />
                            <span>{formatTimestamp(item.created_at)}</span>
                          </div>
                        </td>

                        {/* Actions */}
                        <td className="py-3.5 text-right pr-5">
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onSelectAnalysis(item.id);
                              }}
                              className="btn btn-primary btn-xs gap-1 shadow-sm group-hover:scale-105 transition-transform font-semibold"
                            >
                              <span>Open</span>
                              <ArrowRight size={11} />
                            </button>
                            <button
                              onClick={(e) => handleDelete(item, e)}
                              className="btn btn-ghost btn-xs btn-square text-error/60 hover:text-error hover:bg-error/10"
                              title="Delete record"
                            >
                              <Trash2 size={13} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  // Empty state
                  <tr>
                    <td colSpan={6} className="py-14 text-center">
                      <div className="max-w-md mx-auto flex flex-col items-center gap-2.5">
                        <div className="p-3.5 rounded-full bg-base-300/60 text-base-content/50 mb-1">
                          <Search size={28} />
                        </div>
                        <h4 className="font-bold text-base text-base-content">
                          No analysis records found
                        </h4>
                        <p className="text-xs text-base-content/60 max-w-sm">
                          {searchTerm || favoritesOnly
                            ? 'No archived investigations match your active filter criteria. Try clearing search or removing the star filter.'
                            : 'No intelligence reports have been archived in the database yet.'}
                        </p>
                        {(searchTerm || favoritesOnly) && (
                          <button
                            onClick={() => {
                              setSearchTerm('');
                              setFavoritesOnly(false);
                            }}
                            className="btn btn-sm btn-outline btn-primary rounded-xl mt-2 font-semibold"
                          >
                            Clear All Filters
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

        {/* VIEW 2: Visual Card Grid View (Mobile & Forced Cards) */}
        <div
          className={`p-3.5 sm:p-5 ${
            userOverride === 'cards'
              ? 'block'
              : userOverride === 'table'
              ? 'hidden'
              : 'block md:hidden'
          }`}
        >
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <div key={n} className="card bg-base-100 border border-base-300 p-4 sm:p-5 flex flex-col justify-between rounded-xl animate-pulse shadow-sm">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="skeleton h-5 w-24 rounded-full"></div>
                        <div className="skeleton h-5 w-5 rounded"></div>
                      </div>
                      <div className="skeleton h-5 w-4/5 rounded"></div>
                      <div className="space-y-1.5 mt-2">
                        <div className="skeleton h-3 w-full rounded"></div>
                        <div className="skeleton h-3 w-11/12 rounded"></div>
                        <div className="skeleton h-3 w-2/3 rounded"></div>
                      </div>
                    </div>
                    <div className="mt-4 pt-3.5 border-t border-base-300/60 flex items-center justify-between">
                      <div className="skeleton h-5 w-20 rounded-full"></div>
                      <div className="skeleton h-6 w-16 rounded-lg"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : sortedItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
                {sortedItems.map((item) => {
                  const sourcesCount = Math.max(
                    item.sources_analyzed?.length || 0,
                    item.articles_analyzed?.length || 0
                  );
                  const verificationsCount = item.verifications?.length || 0;

                  return (
                    <div
                      key={item.id}
                      onClick={() => onSelectAnalysis(item.id)}
                      className="card bg-base-100 border border-base-300 hover:border-primary/50 shadow-sm hover:shadow-xl transition-all p-4 sm:p-5 flex flex-col justify-between group cursor-pointer rounded-xl"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2.5">
                          <span className="badge badge-primary badge-outline badge-xs font-mono font-bold px-2.5 py-1">
                            {formatTimestamp(item.created_at)}
                          </span>
                          <button
                            onClick={(e) => handleToggleFavorite(item, e)}
                            className="btn btn-ghost btn-xs btn-square hover:bg-transparent transition-transform hover:scale-110"
                            title={item.is_favorite ? 'Starred' : 'Star this investigation'}
                          >
                            {item.is_favorite ? (
                              <Star size={16} className="text-warning fill-warning drop-shadow-sm" />
                            ) : (
                              <Star size={16} className="text-base-content/25 hover:text-warning" />
                            )}
                          </button>
                        </div>

                        <h3 className="font-bold text-base text-base-content group-hover:text-primary transition-colors line-clamp-2">
                          {item.topic}
                        </h3>

                        <div className="flex items-center gap-2 mt-1.5 text-[11px] text-base-content/60">
                          <span className="badge badge-xs badge-neutral font-mono font-normal px-2 py-0.5">
                            {item.id.slice(0, 12)}...
                          </span>
                          {verificationsCount > 0 && (
                            <span className="text-[11px] text-base-content/60 font-medium">
                              {verificationsCount} Fact-Audits
                            </span>
                          )}
                        </div>

                        <p className="text-xs text-base-content/75 line-clamp-3 mt-2.5 leading-relaxed">
                          {item.executive_summary || 'Autonomous multi-outlet intelligence dispatch.'}
                        </p>
                      </div>

                      <div className="mt-4 pt-3.5 border-t border-base-300/60 flex items-center justify-between gap-2">
                        <span className="badge badge-sm badge-outline badge-primary font-mono gap-1.5 px-2.5 py-1 text-[11px] font-semibold">
                          <Globe size={12} />
                          <span>{sourcesCount} Outlets</span>
                        </span>

                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectAnalysis(item.id);
                            }}
                            className="btn btn-primary btn-xs gap-1 shadow-sm font-semibold group-hover:scale-105 transition-transform"
                          >
                            <span>Open</span>
                            <ArrowRight size={11} />
                          </button>
                          <button
                            onClick={(e) => handleDelete(item, e)}
                            className="btn btn-ghost btn-xs btn-square text-error/60 hover:text-error hover:bg-error/10"
                            title="Delete record"
                          >
                            <Trash2 size={13} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="py-12 text-center">
                <div className="p-3.5 rounded-full bg-base-300/60 text-base-content/50 mx-auto w-fit mb-2">
                  <Search size={28} />
                </div>
                <h4 className="font-bold text-base text-base-content">
                  No matching investigations found
                </h4>
                <p className="text-xs text-base-content/60 max-w-sm mx-auto mt-1">
                  {searchTerm || favoritesOnly
                    ? 'No archived investigations match your active filter criteria. Try clearing search or removing the star filter.'
                    : 'No intelligence reports have been archived in the database yet.'}
                </p>
                {(searchTerm || favoritesOnly) && (
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setFavoritesOnly(false);
                    }}
                    className="btn btn-sm btn-outline btn-primary rounded-xl mt-3 font-semibold"
                  >
                    Clear All Filters
                  </button>
                )}
              </div>
            )}
          </div>

        {/* Pagination & Status Footer Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 border-t border-base-300/80 bg-base-200/90 text-xs text-base-content/70">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span>Rows per page:</span>
              <select
                className="select select-xs select-bordered rounded-lg bg-base-100"
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                  setCurrentPage(1);
                }}
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </select>
            </div>
            <span className="text-base-content/60 hidden sm:inline">|</span>
            <span className="font-mono text-base-content/80">
              Showing {items.length > 0 ? (currentPage - 1) * pageSize + 1 : 0} to{' '}
              {Math.min(currentPage * pageSize, total)} of {total} records
            </span>
          </div>

          <div className="join shadow-sm border border-base-300 rounded-xl overflow-hidden bg-base-100">
            <button
              className="join-item btn btn-xs font-semibold"
              disabled={currentPage <= 1 || loading}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            >
              « Prev
            </button>
            <span className="join-item btn btn-xs btn-disabled font-mono text-base-content/80 bg-base-200/60">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="join-item btn btn-xs font-semibold"
              disabled={currentPage >= totalPages || loading}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            >
              Next »
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
