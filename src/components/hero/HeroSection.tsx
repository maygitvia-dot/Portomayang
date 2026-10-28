import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownRight, Plus, User, Orbit } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { SignalArc } from './SignalArc';
import { Profile3DCard } from '../ui/Profile3DCard';

export const HeroSection: React.FC = () => {
  const [visualMode, setVisualMode] = useState<'signal' | 'portrait'>('signal');

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 sm:pt-36 sm:pb-16 overflow-hidden border-b border-steel-midnight/40"
    >
      {/* Background subtle star/signal field */}
      <div className="absolute inset-0 bg-radial-eclipse pointer-events-none opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(#1B2948_1px,transparent_1px)] [background-size:32px_32px] opacity-25 pointer-events-none" />

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto">
        {/* Left Column: Asymmetrical Editorial Copy */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col justify-center z-10"
        >
          {/* Role badge */}
          <div className="inline-flex items-center gap-2.5 font-mono text-xs tracking-widest_editorial text-silver-ice uppercase mb-6 bg-navy-deep/60 border border-steel-midnight px-3.5 py-1.5 rounded-full w-fit backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-arctic-cyan animate-pulse shadow-cyan-glow" />
            <span>{PERSONAL_INFO.role}</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-light text-frost tracking-tight leading-[1.05]">
            Intelligence, <br />
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="italic font-normal bg-gradient-to-r from-icy-lilac via-laser-violet to-electric-blue bg-clip-text text-transparent inline-block"
            >
              with intention.
            </motion.span>
          </h1>

          {/* Supporting Narrative */}
          <p className="mt-8 text-base sm:text-lg text-silver-ice max-w-xl font-sans font-light leading-relaxed">
            {PERSONAL_INFO.headlineSubtitle}
          </p>

          {/* Call to Actions */}
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollTo('#projects')}
              className="group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-gradient-to-r from-electric-blue to-laser-violet text-white text-xs font-mono tracking-widest uppercase font-medium shadow-signal-glow hover:shadow-laser-glow transition-all duration-300"
            >
              <span>Explore My Work</span>
              <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </motion.button>

            <button
              onClick={() => scrollTo('#about')}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-steel-midnight bg-navy-surface/40 hover:bg-navy-surface text-silver-ice hover:text-frost text-xs font-mono tracking-widest uppercase transition-colors"
            >
              <span>About Me</span>
            </button>
          </div>

          {/* Academic Origin Subtext */}
          <div className="mt-12 pt-6 border-t border-steel-midnight/40 flex flex-wrap items-center gap-4 text-xs font-mono text-silver-muted">
            <span className="text-electric-blue font-semibold">SIGNAL → INTELLIGENCE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-steel-midnight"></span>
            <span>Telkom University S1 Engineering</span>
            <span className="w-1.5 h-1.5 rounded-full bg-steel-midnight"></span>
            <span className="text-arctic-cyan">Bandung, Indonesia</span>
          </div>
        </motion.div>

        {/* Right Column: Celestial Signal Arc with 3D Holographic Portrait Toggle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 flex flex-col items-center justify-center relative"
        >
          {/* Mode Switcher pill on top of visual */}
          <div className="mb-4 z-20 flex items-center gap-1.5 p-1 rounded-full border border-steel-midnight/80 bg-navy-deep/80 backdrop-blur-md font-mono text-[10px] tracking-wider uppercase">
            <button
              onClick={() => setVisualMode('signal')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all ${
                visualMode === 'signal'
                  ? 'bg-electric-blue text-white shadow-signal-glow'
                  : 'text-silver-muted hover:text-frost'
              }`}
            >
              <Orbit className="w-3 h-3" />
              <span>ORBITAL SIGNAL</span>
            </button>
            <button
              onClick={() => setVisualMode('portrait')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all ${
                visualMode === 'portrait'
                  ? 'bg-laser-violet text-white shadow-laser-glow'
                  : 'text-silver-muted hover:text-frost'
              }`}
            >
              <User className="w-3 h-3" />
              <span>3D PORTRAIT</span>
            </button>
          </div>

          <AnimatePresence mode="wait">
            {visualMode === 'signal' ? (
              <motion.div
                key="signal-arc"
                initial={{ opacity: 0, rotate: -5 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 5 }}
                transition={{ duration: 0.5 }}
                className="w-full flex items-center justify-center"
              >
                <SignalArc />
              </motion.div>
            ) : (
              <motion.div
                key="portrait-view"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center py-2"
              >
                <Profile3DCard size="lg" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Footer / Scroll indicator matching Frame 01 */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-8 flex items-center justify-between text-xs font-mono text-silver-muted z-10">
        <button
          onClick={() => scrollTo('#about')}
          className="group flex items-center gap-2 hover:text-frost transition-colors"
        >
          <div className="w-6 h-6 rounded-full border border-steel-midnight flex items-center justify-center group-hover:border-electric-blue transition-colors">
            <Plus className="w-3 h-3 text-electric-blue group-hover:rotate-90 transition-transform duration-300" />
          </div>
          <span className="tracking-widest uppercase text-[11px]">SCROLL TO EXPLORE</span>
        </button>

        <div className="hidden sm:flex items-center gap-6 text-[11px] tracking-widest text-silver-muted/80">
          <span>PORTFOLIO / 2026</span>
          <span className="w-1 h-1 rounded-full bg-steel-midnight"></span>
          <span>MAYANG GITA OKTAFIA</span>
        </div>
      </div>
    </motion.section>
  );
};
