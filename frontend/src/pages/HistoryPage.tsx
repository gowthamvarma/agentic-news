import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { History, ArrowLeft, Home, Sparkles, Search } from 'lucide-react';
import { AnalysisHistoryGrid } from '../components/AnalysisHistoryGrid';

export const HistoryPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSelectAnalysis = (analysisId: string) => {
    navigate(`/analysis/${analysisId}`);
  };

  return (
    <main className="container mx-auto px-4 lg:px-8 py-8 flex-1 max-w-7xl flex flex-col gap-6">
      {/* Top Header & Breadcrumbs */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-2">
        <div>
          <div className="text-xs breadcrumbs text-base-content/60 p-0 mb-1.5">
            <ul>
              <li>
                <Link to="/" className="hover:text-primary flex items-center gap-1.5 transition-colors">
                  <Home size={12} />
                  <span>Home</span>
                </Link>
              </li>
              <li className="font-semibold text-base-content">History Archive</li>
            </ul>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <span className="badge badge-primary badge-outline badge-sm font-semibold gap-1.5 py-2.5 px-3">
              <Sparkles size={13} />
              <span>Multi-Agent Dispatch Ledger</span>
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-base-content flex items-center gap-3">
            <div className="p-2 rounded-xl bg-primary/10 text-primary">
              <History size={26} />
            </div>
            <span>
              Intelligence{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Investigation Archives
              </span>
            </span>
          </h1>
          <p className="text-xs md:text-sm text-base-content/70 mt-1.5 max-w-2xl leading-relaxed">
            Audit and inspect past 25-agent intelligence investigations. Filter starred dispatches, explore cross-source consensus, or open any report's dedicated bookmarkable dossier.
          </p>
        </div>

        <div className="flex items-center gap-2.5 flex-shrink-0">
          <Link
            to="/"
            className="btn btn-sm btn-primary gap-2 shadow-md font-semibold rounded-xl"
          >
            <Search size={14} />
            <span>New Live Investigation</span>
          </Link>
          <Link
            to="/"
            className="btn btn-sm btn-outline border-base-300 hover:border-primary gap-2 shadow-sm font-semibold rounded-xl"
          >
            <ArrowLeft size={14} />
            <span className="hidden sm:inline">Back</span>
          </Link>
        </div>
      </div>

      {/* History Archive Table & Data Views */}
      <AnalysisHistoryGrid onSelectAnalysis={handleSelectAnalysis} />
    </main>
  );
};
