import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation, Link } from 'react-router-dom';
import {
  Brain,
  History,
  Search,
  X,
  FileText,
  Globe,
  ShieldCheck,
  Clock,
  TrendingUp,
  BookOpen,
  Scale,
  MessageSquare,
  Sparkles,
  Image as ImageIcon
} from 'lucide-react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { ToastProvider } from './context/ToastContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { HistoryPage } from './pages/HistoryPage';
import { AnalysisDetailPage } from './pages/AnalysisDetailPage';
import { ANALYSIS_TABS, type AnalysisTabId } from './types';

const TAB_ICONS: Record<AnalysisTabId, React.ComponentType<{ size?: number; className?: string }>> = {
  brief: FileText,
  sources: Globe,
  verification: ShieldCheck,
  timeline: Clock,
  insights: TrendingUp,
  quiz: BookOpen,
  debate: Scale,
  copilot: MessageSquare,
  article: Sparkles,
  image: ImageIcon,
};

// Backwards-compatibility helper for legacy hashes (#archive, ?view=archive)
function LegacyRouteRedirector() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#archive' || location.search.includes('view=archive')) {
      navigate('/history', { replace: true });
    }
  }, [location, navigate]);

  return null;
}

// Automatically scroll to the top of the page on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    const drawerContent = document.querySelector('.drawer-content');
    if (drawerContent) {
      drawerContent.scrollTop = 0;
    }
  }, [pathname]);

  return null;
}

function MainAppLayout() {
  const { theme } = useTheme();
  const location = useLocation();

  const isAnalysisPage = location.pathname.startsWith('/analysis/');

  const [activeAnalysisTab, setActiveAnalysisTab] = useState<AnalysisTabId>(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const h = window.location.hash.replace('#', '');
      if (ANALYSIS_TABS.some((t) => t.id === h)) {
        return h as AnalysisTabId;
      }
    }
    return 'brief';
  });

  useEffect(() => {
    const handleHash = () => {
      const h = window.location.hash.replace('#', '');
      if (ANALYSIS_TABS.some((t) => t.id === h)) {
        setActiveAnalysisTab(h as AnalysisTabId);
      } else if (!h) {
        setActiveAnalysisTab('brief');
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, [location]);

  const closeDrawer = () => {
    const el = document.getElementById('main-drawer') as HTMLInputElement | null;
    if (el) el.checked = false;
  };

  const handleSelectAnalysisSection = (tabId: AnalysisTabId) => {
    closeDrawer();
    setActiveAnalysisTab(tabId);
    if (window.location.hash !== `#${tabId}`) {
      window.location.hash = tabId;
    }
    // Dispatch hashchange in case the hash was already the same but user wants to scroll to top
    window.dispatchEvent(new HashChangeEvent('hashchange'));

    // Smooth scroll to top of viewport and drawer content
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.scrollTo({ top: 0, behavior: 'smooth' });
    const drawerContent = document.querySelector('.drawer-content');
    if (drawerContent) {
      drawerContent.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="drawer min-h-screen bg-base-100 text-base-content font-sans overflow-x-clip">
      <input id="main-drawer" type="checkbox" className="drawer-toggle" />

      {/* Drawer Content */}
      <div className="drawer-content flex flex-col min-h-screen overflow-x-clip">
        <Navbar />

        <ScrollToTop />
        <LegacyRouteRedirector />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/analysis/:id" element={<AnalysisDetailPage />} />
            <Route path="/archive" element={<Navigate to="/history" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        <Footer />
      </div>

      {/* Mobile Drawer Side Menu */}
      <div className="drawer-side z-50">
        <label htmlFor="main-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <aside className="p-4 w-72 sm:w-80 min-h-full bg-base-200 text-base-content border-r border-base-300 flex flex-col justify-between">
          <div className="overflow-y-auto max-h-[calc(100vh-6rem)] pr-1">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-base-300">
              <Link to="/" onClick={closeDrawer} className="flex items-center gap-2 font-black text-lg">
                <Brain size={20} className="text-primary" />
                <span>Agentic News</span>
              </Link>
              <label htmlFor="main-drawer" className="btn btn-ghost btn-circle btn-sm">
                <X size={18} />
              </label>
            </div>

            <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2 px-1">
              Navigation
            </div>
            <ul className="menu menu-md p-0 gap-1 w-full">
              <li>
                <Link
                  to="/"
                  onClick={closeDrawer}
                  className="flex items-center gap-2.5 py-2.5"
                >
                  <Search size={18} className="text-primary" />
                  <span className="font-semibold">Search (Home)</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/history"
                  onClick={closeDrawer}
                  className="flex items-center gap-2.5 py-2.5"
                >
                  <History size={18} className="text-secondary" />
                  <span className="font-semibold">History Archive</span>
                </Link>
              </li>
            </ul>

            {/* Analysis Sections (Mobile Hamburger Drawer only on Analysis Page) */}
            {isAnalysisPage && (
              <div className="mt-4 pt-4 border-t border-base-300">
                <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2 px-1 flex items-center justify-between">
                  <span>Analysis Sections</span>
                  <span className="badge badge-xs badge-primary badge-outline font-mono">Dossier</span>
                </div>
                <ul className="menu menu-sm p-0 gap-1 w-full">
                  {ANALYSIS_TABS.map((tab, idx) => {
                    const Icon = TAB_ICONS[tab.id];
                    const isActive = activeAnalysisTab === tab.id;
                    return (
                      <li key={tab.id}>
                        <button
                          onClick={() => handleSelectAnalysisSection(tab.id)}
                          className={`flex items-center justify-between py-2 px-2.5 rounded-xl font-medium transition-all ${
                            isActive
                              ? 'active font-bold shadow-sm bg-primary text-primary-content'
                              : 'hover:bg-base-300 text-base-content'
                          }`}
                        >
                          <span className="flex items-center gap-2.5 truncate">
                            {Icon && <Icon size={16} className={isActive ? 'text-primary-content' : 'text-primary'} />}
                            <span className="truncate text-xs">
                              {idx + 1}. {tab.label}
                            </span>
                          </span>
                          {isActive && (
                            <span className="badge badge-xs bg-primary-content/20 text-primary-content border-none shrink-0">
                              Active
                            </span>
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>

          <div className="pt-3 border-t border-base-300">
            <div className="text-xs text-base-content/70">
              Active Theme: <span className="capitalize font-bold text-primary">{theme}</span>
            </div>
            <div className="text-[11px] text-base-content/50 mt-1">
              ADK 2.0 • 25 Autonomous Agents
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <BrowserRouter>
          <MainAppLayout />
        </BrowserRouter>
      </ToastProvider>
    </ThemeProvider>
  );
}
