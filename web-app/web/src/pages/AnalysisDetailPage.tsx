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
    if (passedReport && (passedReport.id === id || passedReport.analysis_id === id)) {
      return passedReport;
    }
    return null;
  });

  const [loading, setLoading] = useState<boolean>(() => !report);
  const [error, setError] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

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
        showToast('Bookmark URL copied to clipboard!');
        setTimeout(() => setCopiedLink(false), 2500);
      })
      .catch(() => {
        showToast('Unable to copy automatically. Please copy the URL from your browser address bar.');
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
      })
      .catch((err: any) => {
        setError(err?.message || 'Failed to reload analysis report.');
        setLoading(false);
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
            <span className="badge badge-neutral badge-sm font-mono text-[11px] truncate max-w-xs px-2.5 py-1">{id}</span>
          </div>
        </div>

        {/* Action Buttons: Copy Bookmark Link & Navigation */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handleCopyBookmarkLink}
            className="btn btn-sm btn-outline border-base-300 hover:border-primary gap-1.5 shadow-sm font-semibold"
            title="Copy bookmark URL to clipboard"
          >
            {copiedLink ? <Check size={15} className="text-success" /> : <Copy size={15} className="text-primary" />}
            <span>{copiedLink ? 'Copied Bookmark URL!' : 'Copy Bookmark Link'}</span>
          </button>

          <Link
            to="/history"
            className="btn btn-sm btn-ghost gap-1.5 text-base-content/75 hover:text-primary"
          >
            <History size={15} />
            <span>Archive</span>
          </Link>

          <Link
            to="/"
            className="btn btn-sm btn-primary gap-1.5 shadow-sm"
          >
            <Search size={15} />
            <span>New Search</span>
          </Link>
        </div>
      </div>

      {/* Bookmark Notice Banner */}
      <div className="alert alert-info bg-info/10 text-info-content border border-info/30 rounded-xl mb-6 py-2.5 px-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-sm text-xs">
        <div className="flex items-center gap-2.5">
          <Bookmark size={16} className="text-info flex-shrink-0" />
          <span>
            <strong>Bookmarkable Page:</strong> You can bookmark this exact URL (<span className="font-mono text-[11px]">{`/analysis/${id}`}</span>) in your browser (Ctrl+D / Cmd+D) to return to this forensic debrief at any time.
          </span>
        </div>
        <button
          onClick={handleCopyBookmarkLink}
          className="btn btn-xs btn-outline btn-info gap-1 self-end sm:self-auto flex-shrink-0"
        >
          {copiedLink ? <Check size={12} /> : <Share2 size={12} />}
          <span>{copiedLink ? 'Copied' : 'Share URL'}</span>
        </button>
      </div>

      {/* Loading Skeleton */}
      {loading && (
        <div className="card bg-base-200 border border-base-300 p-8 md:p-12 text-center shadow-xl">
          <span className="loading loading-spinner loading-lg text-primary mx-auto mb-4"></span>
          <h2 className="text-xl font-bold text-base-content">
            Retrieving Intelligence Dossier...
          </h2>
          <p className="text-xs md:text-sm text-base-content/70 mt-1 max-w-md mx-auto mb-6">
            Loading verified claims, chronological narrative timelines, and contradiction records from Firestore...
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto w-full">
            <div className="skeleton h-28 w-full rounded-xl"></div>
            <div className="skeleton h-28 w-full rounded-xl"></div>
            <div className="skeleton h-28 w-full rounded-xl"></div>
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
          report={report}
          onUpdateReport={setReport}
        />
      )}
    </main>
  );
};
