import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const ScrollSignalProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { id: 'hero', label: '01 SIGNAL' },
    { id: 'about', label: '02 NARRATIVE' },
    { id: 'projects', label: '03 PATHS' },
    { id: 'skills', label: '04 PROFICIENCY' },
    { id: 'experience', label: '05 TRAJECTORY' },
    { id: 'contact', label: '06 CLOSURE' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0);

      const scrollPos = window.scrollY + 250;
      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col items-center gap-4 select-none">
      {/* Background Track Line */}
      <div className="relative w-[1.5px] h-48 bg-steel-midnight/80 rounded-full overflow-hidden">
        {/* Animated Progress Beam */}
        <motion.div
          className="absolute top-0 left-0 right-0 bg-gradient-to-b from-electric-blue via-laser-violet to-arctic-cyan rounded-full"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      {/* Interactive Milestone Nodes */}
      <div className="flex flex-col gap-5 py-2">
        {sections.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => scrollTo(sec.id)}
              className="group relative flex items-center justify-end focus:outline-none"
              aria-label={`Scroll to ${sec.label}`}
            >
              {/* Tooltip on hover */}
              <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[10px] font-mono tracking-widest uppercase text-silver-ice whitespace-nowrap bg-navy-deep/90 border border-steel-midnight px-2 py-0.5 rounded shadow-lg pointer-events-none">
                {sec.label}
              </span>

              {/* Node indicator */}
              <div
                className={`w-2.5 h-2.5 rounded-full border transition-all duration-300 ${
                  isActive
                    ? 'border-electric-blue bg-electric-blue scale-125 shadow-signal-glow'
                    : 'border-steel-midnight bg-obsidian group-hover:border-silver-ice'
                }`}
              />
            </button>
          );
        })}
      </div>

      <div className="text-[9px] font-mono text-silver-muted rotate-90 origin-center tracking-widest uppercase mt-4">
        SIGNAL
      </div>
    </div>
  );
};

