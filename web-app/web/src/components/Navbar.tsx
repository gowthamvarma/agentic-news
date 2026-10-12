import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Brain, History, Search, Palette, ChevronDown, Menu as MenuIcon } from 'lucide-react';
import { useTheme, DAISY_THEMES } from '../context/ThemeContext';

export const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="navbar bg-base-200/90 backdrop-blur-md border-b border-base-300 sticky top-0 z-40 px-3 md:px-6 lg:px-8">
      <div className="navbar-start gap-2 sm:gap-3">
        {/* Mobile Drawer Toggle */}
        <label
          htmlFor="main-drawer"
          className="btn btn-ghost btn-circle btn-sm md:btn-md lg:hidden"
          aria-label="open sidebar"
        >
          <MenuIcon size={20} />
        </label>

        {/* Brand Logo with Aura glow */}
        <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group">
          <div className="relative p-0.5 rounded-full bg-gradient-to-r from-primary via-secondary to-accent shadow-md group-hover:scale-105 transition-transform">
            <div className="btn btn-ghost btn-circle btn-sm md:btn-md bg-base-100 text-primary hover:bg-base-100">
              <Brain size={22} className="text-primary" />
            </div>
          </div>

          <div>
            <div className="font-black text-base sm:text-lg md:text-xl tracking-tight flex items-center gap-1.5 sm:gap-2">
              <span>Agentic News</span>
              <span className="badge badge-primary badge-outline badge-xs sm:badge-sm font-bold">ADK 2.0</span>
            </div>
            <div className="text-[11px] text-base-content/60 font-medium hidden md:block">
              25-Agent Autonomous Media Intelligence • Google Gemini
            </div>
          </div>
        </Link>
      </div>

      <div className="navbar-center hidden md:flex items-center gap-3">
        <div className="join bg-base-300/60 p-1 rounded-xl border border-base-300 shadow-sm">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `join-item btn btn-xs md:btn-sm rounded-lg gap-1.5 transition-all ${
                isActive ? 'btn-primary font-bold shadow-sm' : 'btn-ghost text-base-content/80'
              }`
            }
          >
            <Search size={15} />
            <span>Search & Live Fleet</span>
          </NavLink>
          <NavLink
            to="/history"
            className={({ isActive }) =>
              `join-item btn btn-xs md:btn-sm rounded-lg gap-1.5 transition-all ${
                isActive ? 'btn-primary font-bold shadow-sm' : 'btn-ghost text-base-content/80'
              }`
            }
          >
            <History size={15} />
            <span>History Archive</span>
          </NavLink>
        </div>

        <div className="badge badge-success badge-outline gap-1.5 py-2.5 px-3 text-[11px] font-semibold hidden xl:inline-flex">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
          <span>Firestore Sync Active</span>
        </div>
      </div>

      <div className="navbar-end gap-2">
        {/* DaisyUI Theme Selector Dropdown */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-sm btn-outline border-base-300 hover:border-primary gap-1.5 shadow-sm font-medium"
          >
            <Palette size={15} className="text-primary" />
            <span className="capitalize hidden sm:inline text-xs">{theme}</span>
            <ChevronDown size={13} className="opacity-60" />
          </div>
          <div
            tabIndex={0}
            className="dropdown-content z-[100] p-3 shadow-2xl bg-base-200 rounded-2xl w-[92vw] sm:w-[580px] md:w-[680px] max-w-[calc(100vw-1.5rem)] border border-base-300 mt-2"
          >
            <div className="flex items-center justify-between px-2 pb-2 mb-2 border-b border-base-300">
              <span className="text-xs uppercase tracking-wider text-primary font-bold">
                Select DaisyUI Theme ({DAISY_THEMES.length})
              </span>
              <span className="text-xs text-base-content/70 font-medium">
                Active: <span className="capitalize font-bold text-primary">{theme}</span>
              </span>
            </div>
            <ul className="menu p-0 grid grid-cols-2 sm:grid-cols-4 gap-1 max-h-80 overflow-y-auto">
              {DAISY_THEMES.map((th) => (
                <li key={th.id}>
                  <button
                    className={`flex items-center justify-between py-1.5 px-2.5 rounded-lg text-xs md:text-sm ${
                      theme === th.id ? 'active font-bold text-primary-content bg-primary' : 'hover:bg-base-300'
                    }`}
                    onClick={() => setTheme(th.id)}
                  >
                    <span className="flex items-center gap-1.5 truncate">
                      <span>{th.icon}</span>
                      <span className="capitalize truncate">{th.name}</span>
                    </span>
                    {theme === th.id && <span className="badge badge-xs badge-ghost ml-1">Active</span>}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
