import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { History, ArrowLeft } from 'lucide-react';
import { AnalysisHistoryGrid } from '../components/AnalysisHistoryGrid';

export const HistoryPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSelectAnalysis = (analysisId: string) => {
    navigate(`/analysis/${analysisId}`);
  };

  return (
    <main className="container mx-auto px-4 lg:px-8 py-8 flex-1 max-w-7xl">
      {/* Top Header & Breadcrumbs */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="text-xs breadcrumbs text-base-content/60 p-0 mb-1">
            <ul>
              <li>
                <Link to="/" className="hover:text-primary">Home (Search)</Link>
              </li>
              <li className="font-semibold text-base-content">History Archive</li>
            </ul>
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-base-content flex items-center gap-2.5">
            <History size={26} className="text-primary" />
            <span>Intelligence Investigation Archives</span>
          </h1>
          <p className="text-xs md:text-sm text-base-content/70 mt-1">
            Browse, search, and audit past 25-agent intelligence dispatches. Select any report to view its full permanent bookmarkable dashboard.
          </p>
        </div>

        <Link
          to="/"
          className="btn btn-sm btn-outline border-base-300 hover:border-primary gap-2 shadow-sm font-semibold flex-shrink-0"
        >
          <ArrowLeft size={14} />
          <span>Back to Live Search</span>
        </Link>
      </div>

      {/* AG Grid History Archive Table */}
      <AnalysisHistoryGrid onSelectAnalysis={handleSelectAnalysis} />
    </main>
  );
};
