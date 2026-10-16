import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import {
  History,
  Search,
  Bookmark,
  Copy,
  Check,
  AlertTriangle,
  RefreshCw,
  Share2
} from 'lucide-react';
import { fetchAnalysisDetail } from '../api';
import type { NewsIntelligenceReport } from '../types';
import { AnalysisReportView } from '../components/AnalysisReportView';
import { useToast } from '../context/ToastContext';

export const AnalysisDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const { showToast } = useToast();

  const [report, setReport] = useState<NewsIntelligenceReport | null>(() => {
    const passedReport = location.state?.report as NewsIntelligenceReport | undefined;
    const durationSeconds = location.state?.durationSeconds as number | undefined;
    if (passedReport && (passedReport.id === id || passedReport.analysis_id === id)) {
      if (durationSeconds && typeof passedReport.execution_time_seconds !== 'number') {
        return { ...passedReport, execution_time_seconds: durationSeconds };
      }
      return passedReport;
    }
    return null;
  });

  const [loading, setLoading] = useState<boolean>(() => !report);
  const [error, setError] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Scroll to position when analysis page is loaded or ID changes
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const scrollY = params.get('scroll');
    const top = scrollY ? (parseInt(scrollY, 10) || 0) : 0;

    const applyScroll = () => {
      window.scrollTo({ top, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = top;
      document.body.scrollTop = top;
    };

    applyScroll();
    if (top > 0) {
      const t1 = setTimeout(applyScroll, 300);
      const t2 = setTimeout(applyScroll, 800);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [id, report?.id]);

  useEffect(() => {
    if (!id) {
      setError('No analysis ID provided in URL');
      setLoading(false);
      return;
    }

    // If report is already loaded and matches current id, no need to re-fetch unless id changes
    if (report && (report.id === id || report.analysis_id === id)) {
      setLoading(false);
      return;
    }

    let isMounted = true;
    setLoading(true);
    setError(null);

    fetchAnalysisDetail(id)
      .then((data) => {
        if (isMounted) {
          setReport(data);
          setLoading(false);
        }
      })
      .catch((err: any) => {
        if (isMounted) {
          console.error('Failed to load analysis detail:', err);
          setError(err?.message || 'Analysis report could not be loaded.');
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

  const handleCopyBookmarkLink = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl)
      .then(() => {
        setCopiedLink(true);
        showToast('Bookmark URL copied to clipboard!', 'info');
        setTimeout(() => setCopiedLink(false), 2500);
      })
      .catch(() => {
        showToast('Unable to copy automatically. Please copy the URL from your browser address bar.', 'warning');
      });
  };

  const handleRetry = () => {
    if (!id) return;
    setLoading(true);
    setError(null);
    fetchAnalysisDetail(id)
      .then((data) => {
        setReport(data);
        setLoading(false);
        showToast('Intelligence Dossier reloaded successfully!', 'success');
      })
      .catch((err: any) => {
        setError(err?.message || 'Failed to reload analysis report.');
        setLoading(false);
        showToast('Failed to reload analysis report: ' + (err?.message || err), 'error');
      });
  };

  const handleUpdateReport = (
    updatedOrPatch: Partial<NewsIntelligenceReport> | ((prev: NewsIntelligenceReport) => NewsIntelligenceReport)
  ) => {
    setReport((prev) => {
      if (!prev) return prev;
      if (typeof updatedOrPatch === 'function') {
        return updatedOrPatch(prev);
      }
      return { ...prev, ...updatedOrPatch };
    });
  };

  return (
    <main className="container mx-auto px-4 lg:px-8 py-6 flex-1 max-w-7xl">
      {/* Top Header & Breadcrumbs / Actions Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 mb-4 border-b border-base-300">
        <div>
          <div className="text-xs breadcrumbs text-base-content/60 p-0 mb-1">
            <ul>
              <li>
                <Link to="/" className="hover:text-primary flex items-center gap-1">
                  <Search size={12} />
                  <span>Search</span>
                </Link>
              </li>
              <li>
                <Link to="/history" className="hover:text-primary flex items-center gap-1">
                  <History size={12} />
                  <span>History Archive</span>
                </Link>
              </li>
              <li className="font-semibold text-base-content truncate max-w-xs sm:max-w-md">
                {report?.topic || id}
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap items-center gap-2 mt-1">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Permanent Investigation:</span>
            <span className="badge badge-neutral badge-sm font-mono text-[11px] truncate max-w-[200px] sm:max-w-xs px-2.5 py-1">{id}</span>
          </div>
        </div>

        {/* Action Buttons: Copy Bookmark Link & Navigation */}
        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          <button
            onClick={handleCopyBookmarkLink}
            className="btn btn-sm btn-outline border-base-300 hover:border-primary gap-1.5 shadow-sm font-semibold text-xs sm:text-sm"
            title="Copy bookmark URL to clipboard"
          >
            {copiedLink ? <Check size={15} className="text-success" /> : <Copy size={15} className="text-primary" />}
            <span>{copiedLink ? 'Copied Bookmark URL!' : 'Copy Bookmark Link'}</span>
          </button>

          <Link
            to="/history"
            className="btn btn-sm btn-ghost gap-1.5 text-base-content/75 hover:text-primary text-xs sm:text-sm"
          >
            <History size={15} />
            <span>Archive</span>
          </Link>

          <Link
            to="/"
            className="btn btn-sm btn-primary gap-1.5 shadow-sm text-xs sm:text-sm"
          >
            <Search size={15} />
            <span>New Search</span>
          </Link>
        </div>
      </div>

      {/* Bookmark Notice Banner */}
      <div className="alert alert-info bg-info/10 text-base-content border border-info/30 rounded-xl mb-6 py-2.5 px-3 sm:px-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm text-xs">
        <div className="flex items-start sm:items-center gap-2.5 min-w-0">
          <Bookmark size={16} className="text-info shrink-0 mt-0.5 sm:mt-0" />
          <span className="break-words min-w-0">
            <strong>Bookmarkable Page:</strong> You can bookmark this exact URL (<span className="font-mono text-[11px] break-all">{`/analysis/${id}`}</span>) in your browser (Ctrl+D / Cmd+D) to return to this forensic debrief at any time.
          </span>
        </div>
        <button
          onClick={handleCopyBookmarkLink}
          className="btn btn-xs btn-outline btn-info gap-1 self-end sm:self-auto shrink-0"
        >
          {copiedLink ? <Check size={12} /> : <Share2 size={12} />}
          <span>{copiedLink ? 'Copied' : 'Share URL'}</span>
        </button>
      </div>

      {/* Loading Skeleton */}
      {/* Full-Fidelity Loading Skeleton (Full Container Width) */}
      {loading && (
        <div className="space-y-6 w-full animate-pulse">
          {/* Top Dossier Header Card Skeleton */}
          <div className="card bg-base-200 border border-base-300 shadow-xl p-6 md:p-8 w-full">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-2">
                <div className="skeleton h-6 w-28 rounded-full"></div>
                <div className="skeleton h-6 w-20 rounded-full"></div>
              </div>
              <div className="skeleton h-8 w-32 rounded-lg"></div>
            </div>

            <div className="skeleton h-8 md:h-10 w-3/4 mb-3 rounded-lg"></div>
            <div className="skeleton h-4 w-1/3 mb-6"></div>

            {/* Overview / Brief Paragraph Skeleton */}
            <div className="p-5 rounded-2xl bg-base-100 border border-base-300 space-y-2.5 mb-6">
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-11/12"></div>
              <div className="skeleton h-4 w-4/5"></div>
            </div>

            {/* 4 Stat Tiles Skeleton */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="p-4 rounded-xl bg-base-100 border border-base-300 space-y-2">
                  <div className="skeleton h-3 w-16"></div>
                  <div className="skeleton h-7 w-20"></div>
                  <div className="skeleton h-2.5 w-12"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Nav Tabs Skeleton */}
          <div className="flex gap-2 overflow-x-auto pb-2 border-b border-base-300 w-full">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="skeleton h-10 w-32 rounded-xl flex-shrink-0"></div>
            ))}
          </div>

          {/* Main Content Layout Skeleton */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
            <div className="lg:col-span-2 space-y-4">
              <div className="card bg-base-200 border border-base-300 p-6 space-y-3">
                <div className="skeleton h-6 w-48"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-5/6"></div>
                <div className="skeleton h-24 w-full rounded-xl mt-4"></div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="card bg-base-200 border border-base-300 p-6 space-y-3">
                <div className="skeleton h-6 w-36"></div>
                <div className="skeleton h-32 w-full rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Error View */}
      {error && !loading && (
        <div className="card bg-base-200 border border-base-300 shadow-xl p-8 max-w-xl mx-auto text-center">
          <div className="w-12 h-12 rounded-full bg-error/15 text-error flex items-center justify-center mx-auto mb-3">
            <AlertTriangle size={24} />
          </div>
          <h2 className="text-xl font-black text-base-content">
            Analysis Report Not Found
          </h2>
          <p className="text-sm text-base-content/70 mt-2 mb-6">
            {error}. The requested investigation record may have been deleted or the ID may be invalid.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button onClick={handleRetry} className="btn btn-sm btn-outline gap-1.5">
              <RefreshCw size={14} />
              <span>Retry Load</span>
            </button>
            <Link to="/history" className="btn btn-sm btn-outline btn-primary gap-1.5">
              <History size={14} />
              <span>View History</span>
            </Link>
            <Link to="/" className="btn btn-sm btn-primary gap-1.5">
              <Search size={14} />
              <span>Start New Search</span>
            </Link>
          </div>
        </div>
      )}

      {/* Full Analysis Dashboard */}
      {!loading && report && (
        <AnalysisReportView
          key={report.id || report.analysis_id || report.topic}
          report={report}
          onUpdateReport={handleUpdateReport}
        />
      )}
    </main>
  );
};
