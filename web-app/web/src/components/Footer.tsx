import React from 'react';
import { Brain } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer footer-center p-8 bg-base-200 text-base-content border-t border-base-300 mt-auto">
      <aside className="gap-2">
        <div className="flex items-center gap-2 font-bold text-base">
          <Brain size={20} className="text-primary" />
          <span>Agentic News Analyser</span>
        </div>
        <p className="text-xs text-base-content/70">
          Built with Google Agent Development Kit (ADK) & Google Gemini • Powered by Cloud Firestore & DaisyUI Themes
        </p>
      </aside>
    </footer>
  );
};
