import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const SiteFooter: React.FC = () => {
  return (
    <footer className="border-t border-steel-midnight bg-obsidian-dark py-12 px-6 sm:px-8 lg:px-12 text-xs font-mono text-silver-muted">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          {/* Mini avatar */}
          <div className="w-6 h-6 rounded-full overflow-hidden border border-electric-blue/40 shadow-sm">
            <img
              src="/mayang-portrait.png"
              alt="Mayang Gita Oktafia"
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/profile.jpg';
              }}
            />
          </div>
          <span className="text-frost font-semibold tracking-wider">{PERSONAL_INFO.name}</span>
          <span className="text-steel-midnight">|</span>
          <span>{PERSONAL_INFO.role}</span>
        </div>

        <div className="text-center md:text-right text-[11px] text-silver-muted space-y-1">
          <div>
            © {new Date().getFullYear()} Mayang Gita Oktafia. Built with precision and intention.
          </div>
          <div className="text-silver-muted/70">
            Telecommunications Engineering → Applied Artificial Intelligence
          </div>
        </div>
      </div>
    </footer>
  );
};
