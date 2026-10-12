# DaisyUI Components Guide & Design System Reference

This document provides a comprehensive developer guide to the DaisyUI components integrated into the **Agentic News Analyser** web application. It serves as a living styleguide and component reference for present enhancements and future feature development.

---

## 🎨 Theme System Overview

The application is built on top of [DaisyUI](https://daisyui.com/) and Tailwind CSS. All styling strictly adheres to DaisyUI semantic CSS variables to guarantee consistent contrast, legibility, and aesthetics across all 32 supported themes (Dark, Light, Corporate, Synthwave, Dracula, Cyberpunk, Emerald, Dim, Night, Nord, etc.).

### Semantic Color Variables
Always use semantic color classes instead of arbitrary colors:
- `bg-base-100`: Primary page background.
- `bg-base-200`: Card backgrounds, elevated panels, sidebars.
- `bg-base-300`: Input borders, dividers, subtle active states.
- `text-base-content`: Primary text color (with opacity modifiers like `/80`, `/60` for secondary text).
- `primary` & `text-primary-content`: Brand primary actions, key headlines, highlighted badges.
- `secondary` & `text-secondary-content`: Secondary accents, entity tags, timeline markers.
- `accent` & `text-accent-content`: High-visibility callouts, jargon terms, analytical highlights.
- `info`, `success`, `warning`, `error`: Status indicators, IFCN verification tags, alerts, and confidence levels.

---

## 🧩 Component Directory & Code Patterns

### 1. Accordion & Collapse (`collapse`, `collapse-arrow`, `collapse-plus`)
Used to organize dense reading material without cluttering the page (e.g. Jargon Buster, Entity Primers, Raw Agent Trace Logs).
```tsx
<div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-xl mb-3 shadow-sm">
  <input type="radio" name="jargon-accordion" defaultChecked={idx === 0} />
  <div className="collapse-title text-base font-bold text-base-content flex items-center justify-between">
    <span>{term}</span>
    <span className="badge badge-accent badge-sm">Term Definition</span>
  </div>
  <div className="collapse-content text-sm text-base-content/80 leading-relaxed">
    <p>{definition}</p>
  </div>
</div>
```

### 2. Aura Effect (`aura`)
Used to create an ambient, glowing focus around high-priority elements (e.g. breaking news alerts, top verified claims, AI insights).
```tsx
<div className="relative p-0.5 rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent animate-pulse">
  <div className="bg-base-100 rounded-[14px] p-4">
    {/* Highlighted breaking news or executive takeaway */}
  </div>
</div>
```

### 3. Badge (`badge`)
Used for quick visual categorization (news outlets, IFCN verification statuses, claim confidence, reading time).
```tsx
<span className="badge badge-primary badge-outline font-bold text-xs">Associated Press</span>
<span className="badge badge-success text-success-content font-bold text-xs">VERIFIED</span>
<span className="badge badge-warning text-warning-content font-bold text-xs">DISPUTED</span>
<span className="badge badge-neutral font-mono text-xs">Claim #1</span>
```

### 4. Card (`card`, `card-body`, `card-title`, `card-actions`)
The primary structural container across the application for sections, executive briefs, and dialectical debates.
```tsx
<div className="card bg-base-200 border border-base-300 shadow-xl hover:shadow-2xl transition-all">
  <div className="card-body p-6 md:p-8">
    <div className="card-title text-xl font-black text-base-content flex items-center gap-2">
      <FileText size={20} className="text-primary" />
      <span>Section Title</span>
    </div>
    <p className="text-base text-base-content/85 leading-relaxed mt-2">Content goes here...</p>
    <div className="card-actions justify-end mt-4">
      <button className="btn btn-sm btn-primary">Action</button>
    </div>
  </div>
</div>
```

### 5. Carousel (`carousel`, `carousel-item`, `carousel-center`)
Enables horizontal scrolling for news sources, wire reports, and scenario cards, keeping vertical page length manageable.
```tsx
<div className="carousel carousel-center max-w-full p-4 space-x-4 bg-base-300/40 rounded-box">
  {articles.map((art, idx) => (
    <div key={idx} className="carousel-item w-80">
      <div className="card bg-base-100 border border-base-300 shadow-md p-4 w-full">
        <span className="badge badge-primary badge-outline text-xs">{art.outlet}</span>
        <h4 className="font-bold text-sm mt-2 line-clamp-2">{art.title}</h4>
      </div>
    </div>
  ))}
</div>
```

### 6. Chat (`chat`, `chat-start`, `chat-end`, `chat-bubble`)
Powers the Research Copilot conversation interface and the Dialectical Perspective Debate simulator.
```tsx
<div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-9 h-9 rounded-full bg-primary text-primary-content flex items-center justify-center">
      <Bot size={18} />
    </div>
  </div>
  <div className="chat-header text-xs opacity-60 mb-1">
    Research Copilot <time className="text-[11px] ml-1">10:45 AM</time>
  </div>
  <div className="chat-bubble chat-bubble-neutral text-sm leading-relaxed">
    Synthesizing cross-outlet perspective...
  </div>
</div>
```

### 7. Stat (`stats`, `stat`, `stat-title`, `stat-value`, `stat-desc`, `stat-figure`)
Displays key numerical metrics, sources analyzed, confidence aggregates, and quiz results.
```tsx
<div className="stats stats-vertical lg:stats-horizontal shadow bg-base-100 border border-base-300 w-full">
  <div className="stat">
    <div className="stat-figure text-primary"><BarChart3 size={24} /></div>
    <div className="stat-title text-xs font-bold uppercase">Sources Audited</div>
    <div className="stat-value text-2xl text-primary font-black">25</div>
    <div className="stat-desc">Global Wire Dispatches</div>
  </div>
</div>
```

### 8. Status / Indicator (`indicator`, `indicator-item`, `badge`)
Visual status dots for live SSE streaming and real-time backend synchronization.
```tsx
<div className="inline-flex items-center gap-2">
  <span className="relative flex h-2.5 w-2.5">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success"></span>
  </span>
  <span className="text-xs font-semibold">Live Pipeline Active</span>
</div>
```

### 9. Table (`table`, `table-zebra`, `table-pin-rows`)
Organizes structured data (e.g., cross-source contradiction claims, stakeholder primers).
```tsx
<div className="overflow-x-auto rounded-xl border border-base-300 bg-base-100">
  <table className="table table-zebra table-sm">
    <thead>
      <tr className="bg-base-200">
        <th>Outlet</th>
        <th>Asserted Claim</th>
        <th>Evidentiary Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="font-bold">Outlet A</td>
        <td>Claim statement...</td>
        <td><span className="badge badge-success badge-sm">Verified</span></td>
      </tr>
    </tbody>
  </table>
</div>
```

### 10. Menu (`menu`, `menu-sm`, `menu-md`)
Powers the sticky vertical navigation sidebar and the theme picker menu.
```tsx
<ul className="menu menu-md p-2 rounded-box bg-base-200 border border-base-300 gap-1">
  <li>
    <button className="active font-bold">
      <FileText size={18} />
      <span>Executive Brief</span>
    </button>
  </li>
  <li>
    <button>
      <ShieldCheck size={18} />
      <span>Fact Checks</span>
    </button>
  </li>
</ul>
```

### 11. Navbar (`navbar`, `navbar-start`, `navbar-center`, `navbar-end`)
Top application header coordinating navigation views, live system indicators, and user preferences.
```tsx
<header className="navbar bg-base-200/90 backdrop-blur-md border-b border-base-300 sticky top-0 z-50 px-4 lg:px-8">
  <div className="navbar-start gap-3">{/* Logo & Branding */}</div>
  <div className="navbar-center hidden md:flex">{/* View Switchers */}</div>
  <div className="navbar-end gap-2">{/* Theme Dropdown & Mobile Menu */}</div>
</header>
```

### 12. Steps (`steps`, `step`, `step-primary`, `steps-vertical`, `steps-horizontal`)
Visualizes the multi-agent pipeline during live topic analysis.
```tsx
<ul className="steps steps-vertical md:steps-horizontal w-full">
  <li className="step step-primary">Ingestion</li>
  <li className="step step-primary">Fact-Checking</li>
  <li className="step step-primary">Contradictions</li>
  <li className="step">Timeline</li>
  <li className="step">Primers</li>
</ul>
```

### 13. Tab (`tabs`, `tabs-boxed`, `tab-active`)
Allows rapid switching between intelligence tabs and report sections.
```tsx
<div className="tabs tabs-boxed bg-base-200 p-1 rounded-xl">
  <button className={`tab ${activeTab === 'brief' ? 'tab-active' : ''}`}>Brief</button>
  <button className={`tab ${activeTab === 'verification' ? 'tab-active' : ''}`}>Verification</button>
  <button className={`tab ${activeTab === 'timeline' ? 'tab-active' : ''}`}>Timeline</button>
</div>
```

### 14. Loading (`loading`, `loading-spinner`, `loading-dots`, `loading-ring`)
Native animation indicators for pending requests.
```tsx
<span className="loading loading-spinner text-primary loading-md"></span>
<span className="loading loading-dots text-accent loading-sm"></span>
```

### 15. Progress (`progress`, `progress-primary`)
Linear progress tracking for multi-agent stage execution.
```tsx
<progress className="progress progress-primary w-full" value={stageIndex * 25} max="100"></progress>
```

### 16. Radial Progress (`radial-progress`)
Circular score visualization for verification confidence and quiz results.
```tsx
<div
  className="radial-progress text-primary font-black text-sm"
  style={{ "--value": 92, "--size": "3.5rem" } as React.CSSProperties}
  role="progressbar"
>
  92%
</div>
```

### 17. Skeleton (`skeleton`)
Placeholder animation for sections awaiting streaming completion.
```tsx
<div className="flex flex-col gap-3 w-full">
  <div className="skeleton h-6 w-1/2"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-5/6"></div>
</div>
```

### 18. Toast (`toast`, `toast-top`, `toast-end`, `alert`)
Non-intrusive floating feedback messages.
```tsx
<div className="toast toast-top toast-end z-50">
  <div className="alert alert-success shadow-lg">
    <span>Analysis saved to favorites!</span>
  </div>
</div>
```

### 19. Checkbox & Radio (`checkbox`, `radio`)
Form controls for active recall quiz and archive filtering.
```tsx
<input type="radio" name="quiz-choice" className="radio radio-primary" />
<input type="checkbox" className="checkbox checkbox-primary checkbox-sm" />
```

### 20. Label (`label`, `label-text`, `cursor-pointer`)
Provides accessible, touch-friendly hit targets for inputs.
```tsx
<label className="label cursor-pointer justify-start gap-3 p-3 rounded-lg border border-base-300 hover:bg-base-200">
  <input type="radio" className="radio radio-primary" />
  <span className="label-text font-medium">Option statement</span>
</label>
```

### 21. Rating (`rating`, `mask mask-star-2`)
Displays scenario probability and source credibility star ratings.
```tsx
<div className="rating rating-sm">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-warning" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-warning" checked readOnly />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-warning" />
</div>
```

### 22. Drawer (`drawer`, `drawer-toggle`, `drawer-content`, `drawer-side`)
Enables off-canvas mobile navigation and settings overlays without sacrificing reading real estate.
```tsx
<div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">{/* Main Page Content */}</div>
  <div className="drawer-side z-50">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">{/* Sidebar Items */}</ul>
  </div>
</div>
```

### 23. Hero (`hero`, `hero-content`)
Hero presentation section with topic search bar and prompt chips.
```tsx
<section className="hero py-12 px-4 bg-gradient-to-b from-base-200/60 to-base-100">
  <div className="hero-content text-center max-w-4xl flex-col p-0">
    <h1 className="text-4xl md:text-5xl font-black">Autonomous Media Intelligence</h1>
  </div>
</section>
```

### 24. Footer (`footer`, `footer-center`)
Standardized application footer containing system info and technical attributions.
```tsx
<footer className="footer footer-center p-8 bg-base-200 text-base-content border-t border-base-300">
  <aside>
    <p className="text-xs text-base-content/70">Agentic News Analyser • Powered by Google Gemini & ADK</p>
  </aside>
</footer>
```

---

## 🚫 Custom CSS Best Practices (What to Avoid)

1. **Do Not Hardcode Colors**: Never write hex codes (`#1e293b`), rgb, or fixed Tailwind colors (`bg-slate-900`, `text-gray-100`) in component files. Always use DaisyUI semantic tokens (`bg-base-100`, `bg-base-200`, `text-base-content`, `border-base-300`).
2. **Avoid Inline Styles**: Do not use `style={{ ... }}` unless setting dynamic CSS custom properties required by DaisyUI (e.g. `--value` in `radial-progress`).
3. **Avoid Custom Keyframe Animations**: Rely on DaisyUI's `loading`, `animate-pulse`, and `transition-all` utility classes.
