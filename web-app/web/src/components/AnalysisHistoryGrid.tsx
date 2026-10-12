import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import type { ColDef, ICellRendererParams } from 'ag-grid-community';
import type { AnalysisArchiveItem } from '../types';
import { fetchAnalysesArchive, updateAnalysis, deleteAnalysis } from '../api';

// Register AG Grid Community modules
ModuleRegistry.registerModules([AllCommunityModule]);

interface AnalysisHistoryGridProps {
  onSelectAnalysis: (analysisId: string) => void;
}

export const AnalysisHistoryGrid: React.FC<AnalysisHistoryGridProps> = ({ onSelectAnalysis }) => {
  const [items, setItems] = useState<AnalysisArchiveItem[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Search and filter states
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [favoritesOnly, setFavoritesOnly] = useState<boolean>(false);
  const [pageSize, setPageSize] = useState<number>(20);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const offset = (currentPage - 1) * pageSize;
      const res = await fetchAnalysesArchive({
        limit: pageSize,
        offset,
        search: searchTerm.trim() || undefined,
        favorites_only: favoritesOnly || undefined,
      });
      setItems(res.items || []);
      setTotal(res.total || 0);
    } catch (err: any) {
      console.error('Failed to load analyses:', err);
      setError(err?.message || 'Error fetching analysis archives');
    } finally {
      setLoading(false);
    }
  }, [currentPage, pageSize, searchTerm, favoritesOnly]);

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
      // If we are currently in favoritesOnly mode and just un-favorited, reload to maintain filter consistency
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
    if (!window.confirm(`Delete analysis record "${item.topic}"?`)) return;

    try {
      await deleteAnalysis(item.id);
      loadData();
    } catch (err: any) {
      alert(`Failed to delete record: ${err?.message || err}`);
    }
  };

  // AG Grid column definitions
  const columnDefs = useMemo<ColDef<AnalysisArchiveItem>[]>(() => {
    return [
      {
        headerName: '★',
        field: 'is_favorite',
        width: 60,
        minWidth: 60,
        maxWidth: 70,
        sortable: true,
        pinned: 'left',
        cellRenderer: (params: ICellRendererParams<AnalysisArchiveItem>) => {
          if (!params.data) return null;
          const isFav = params.data.is_favorite;
          return (
            <button
              onClick={(e) => handleToggleFavorite(params.data!, e)}
              className="btn btn-ghost btn-xs text-lg p-0 hover:bg-transparent"
              title={isFav ? 'Remove from favorites' : 'Mark as favorite'}
            >
              {isFav ? (
                <span className="text-warning drop-shadow-sm">★</span>
              ) : (
                <span className="text-base-content/30 hover:text-warning transition-colors">☆</span>
              )}
            </button>
          );
        },
      },
      {
        headerName: 'Topic & Headline',
        field: 'topic',
        flex: 2,
        minWidth: 240,
        cellRenderer: (params: ICellRendererParams<AnalysisArchiveItem>) => {
          if (!params.data) return null;
          return (
            <div className="py-1">
              <span className="font-semibold text-base-content hover:text-primary transition-colors cursor-pointer">
                {params.data.topic}
              </span>
            </div>
          );
        },
      },
      {
        headerName: 'Executive Summary',
        field: 'executive_summary',
        flex: 3,
        minWidth: 320,
        cellRenderer: (params: ICellRendererParams<AnalysisArchiveItem>) => {
          if (!params.data?.executive_summary) {
            return <span className="text-base-content/40 italic text-xs">No summary available</span>;
          }
          return (
            <div className="truncate text-xs text-base-content/80 py-1" title={params.data.executive_summary}>
              {params.data.executive_summary}
            </div>
          );
        },
      },
      {
        headerName: 'Sources',
        width: 100,
        valueGetter: (params) => {
          const sources = params.data?.sources_analyzed || [];
          const articles = params.data?.articles_analyzed || [];
          return Math.max(sources.length, articles.length);
        },
        cellRenderer: (params: ICellRendererParams<AnalysisArchiveItem>) => {
          const count = params.value || 0;
          return (
            <div className="flex items-center h-full">
              <span className="badge badge-sm badge-ghost font-mono">{count} sources</span>
            </div>
          );
        },
      },
      {
        headerName: 'Created Date',
        field: 'created_at',
        width: 160,
        valueFormatter: (params) => {
          if (!params.value) return 'Unknown';
          const d = new Date(params.value * 1000);
          return d.toLocaleDateString() + ' ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        },
        cellClass: 'text-xs text-base-content/70 font-mono',
      },
      {
        headerName: 'Actions',
        width: 170,
        pinned: 'right',
        cellRenderer: (params: ICellRendererParams<AnalysisArchiveItem>) => {
          if (!params.data) return null;
          const item = params.data;
          return (
            <div className="flex items-center gap-1.5 h-full">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectAnalysis(item.id);
                }}
                className="btn btn-primary btn-xs"
                title="Open and view intelligence report"
              >
                Open Brief
              </button>
              <button
                onClick={(e) => handleDelete(item, e)}
                className="btn btn-ghost btn-xs text-error hover:bg-error/10"
                title="Delete this analysis"
              >
                ✕
              </button>
            </div>
          );
        },
      },
    ];
  }, [favoritesOnly]);

  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  return (
    <div className="card bg-base-100 shadow-xl border border-base-200">
      <div className="card-body p-5">
        {/* Header & Controls Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-3 border-b border-base-200">
          <div>
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span>Previous News Intelligence Analyses</span>
              <span className="badge badge-primary badge-sm font-normal">
                {total} total records
              </span>
            </h2>
            <p className="text-xs text-base-content/60 mt-0.5">
              Archived in Local Firebase Emulator. Search, filter favorites, or inspect past fleet debriefs.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search topic or headline..."
                className="input input-sm input-bordered w-52 md:w-64 pr-8 text-xs"
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
                  className="absolute right-2 top-2 text-base-content/40 hover:text-base-content text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Favorites Filter Toggle */}
            <button
              onClick={() => {
                setFavoritesOnly(!favoritesOnly);
                setCurrentPage(1);
              }}
              className={`btn btn-sm gap-1.5 ${
                favoritesOnly ? 'btn-warning text-warning-content' : 'btn-outline border-base-300'
              }`}
            >
              <span>{favoritesOnly ? '★' : '☆'}</span>
              <span className="text-xs">Favorites Only</span>
            </button>

            {/* Refresh Button */}
            <button
              onClick={() => loadData()}
              className="btn btn-sm btn-ghost btn-square"
              title="Refresh analyses archive"
              disabled={loading}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="alert alert-error text-xs p-3 my-2">
            <span>{error}</span>
            <button onClick={() => loadData()} className="btn btn-xs btn-outline">
              Retry
            </button>
          </div>
        )}

        {/* AG Grid Container */}
        <div className="w-full ag-theme-quartz mt-3" style={{ height: '520px', width: '100%' }}>
          <AgGridReact<AnalysisArchiveItem>
            rowData={items}
            columnDefs={columnDefs}
            loading={loading}
            onRowClicked={(event) => {
              if (event.data) {
                onSelectAnalysis(event.data.id);
              }
            }}
            rowClass="cursor-pointer transition-colors"
            rowHeight={48}
            headerHeight={40}
            overlayNoRowsTemplate={
              '<span class="text-xs text-base-content/50 py-4">No analysis records found matching your filters.</span>'
            }
          />
        </div>

        {/* Pagination Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-base-200 text-xs text-base-content/70">
          <div className="flex items-center gap-2">
            <span>Rows per page:</span>
            <select
              className="select select-xs select-bordered"
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
            <span>
              Showing {items.length > 0 ? (currentPage - 1) * pageSize + 1 : 0} to{' '}
              {Math.min(currentPage * pageSize, total)} of {total}
            </span>
          </div>

          <div className="join">
            <button
              className="join-item btn btn-xs"
              disabled={currentPage <= 1 || loading}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            >
              « Prev
            </button>
            <span className="join-item btn btn-xs btn-disabled font-mono">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="join-item btn btn-xs"
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
