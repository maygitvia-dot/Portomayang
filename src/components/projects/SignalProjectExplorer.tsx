import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS_DATA } from '../../data/portfolioData';
import { ProjectData } from '../../types/portfolio';
import { SectionHeading } from '../ui/SectionHeading';
import { SignalBadge } from '../ui/SignalBadge';
import { ArrowRight, FileText } from 'lucide-react';

interface SignalProjectExplorerProps {
  onSelectCaseStudy: (project: ProjectData) => void;
}

export const SignalProjectExplorer: React.FC<SignalProjectExplorerProps> = ({
  onSelectCaseStudy,
}) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>('scovis');

  const selectedProject =
    PROJECTS_DATA.find((p) => p.id === selectedProjectId) || PROJECTS_DATA[0];

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8 }}
      className="relative py-24 sm:py-32 border-b border-steel-midnight/40 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <SectionHeading
          number="03"
          label="THE SIGNAL PATHS"
          title="Explore My Projects"
          description="Two primary engineering projects connecting raw signals, deep learning models, and automated orchestration."
        />

        {/* Desktop & Tablet Interactive Signal Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Interactive Signal Path Orbit / Branching Navigator */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="text-xs font-mono text-silver-muted tracking-widest uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-electric-blue animate-pulse"></span>
              <span>INTERACTIVE SIGNAL SELECTOR</span>
            </div>

            {/* Orbit / Branching Graphic inspired by Frame 03 */}
            <div className="relative p-6 sm:p-8 rounded-2xl border border-steel-midnight bg-navy-deep/30 backdrop-blur-sm overflow-hidden">
              {/* Background fine grid */}
              <div className="absolute inset-0 bg-[radial-gradient(#1B2948_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

              {/* Curving SVG signal paths */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 400 320"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Curved signal trace connecting Node 1 to Node 2 */}
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  d="M 90 85 C 220 85, 240 235, 120 235"
                  stroke="url(#signalTrace)"
                  strokeWidth="2.5"
                  strokeDasharray="6 6"
                />
                <circle cx="210" cy="160" r="3" fill="#8B5CFF" opacity="0.8" className="animate-ping" />
                <defs>
                  <linearGradient id="signalTrace" x1="90" y1="85" x2="120" y2="235" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3568FF" />
                    <stop offset="0.5" stopColor="#8B5CFF" />
                    <stop offset="1" stopColor="#36DDF2" />
                  </linearGradient>
                </defs>
              </svg>

              {/* The Two Signal Nodes */}
              <div className="relative z-10 space-y-6">
                {PROJECTS_DATA.map((project) => {
                  const isSelected = project.id === selectedProjectId;
                  return (
                    <motion.div
                      key={project.id}
                      onClick={() => setSelectedProjectId(project.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.99 }}
                      className={`group p-5 rounded-xl border transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? 'border-electric-blue bg-navy-surface shadow-signal-glow'
                          : 'border-steel-midnight bg-navy-deep/50 hover:border-steel-midnight/90 hover:bg-navy-surface/50'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        {/* Radio Node Indicator */}
                        <div className="relative mt-1">
                          <div
                            className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all ${
                              isSelected
                                ? 'border-electric-blue bg-electric-blue/20 text-electric-blue'
                                : 'border-steel-midnight bg-obsidian-dark text-silver-muted group-hover:border-silver-muted'
                            }`}
                          >
                            <span className="font-mono text-xs font-semibold">
                              {project.numericId}
                            </span>
                          </div>
                          {isSelected && (
                            <span className="absolute -inset-1 rounded-full border border-electric-blue/40 animate-ping opacity-60 pointer-events-none" />
                          )}
                        </div>

                        {/* Title & Tagline */}
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="text-base sm:text-lg font-serif font-medium text-frost group-hover:text-white transition-colors">
                              {project.title}
                            </h3>
                            <span
                              className={`text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded ${
                                isSelected
                                  ? 'bg-electric-blue/20 text-electric-blue border border-electric-blue/30'
                                  : 'text-silver-muted'
                              }`}
                            >
                              {isSelected ? 'ACTIVE' : 'SELECT'}
                            </span>
                          </div>
                          <p className="mt-1 text-xs text-silver-muted font-sans leading-relaxed">
                            {project.tagline}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Subtle instruction tip */}
              <div className="mt-6 pt-4 border-t border-steel-midnight/50 flex items-center justify-between text-xs font-mono text-silver-muted">
                <span>Signal path branching</span>
                <span className="text-electric-blue flex items-center gap-1 font-medium">
                  Select a project to explore →
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Selected Project Interactive Content & Preview Pane */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl border border-steel-midnight bg-obsidian-dark p-6 sm:p-10 shadow-2xl relative overflow-hidden">
              {/* Subtle top edge glow */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-electric-blue to-transparent opacity-70" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedProject.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                >
                  {/* Meta row */}
                  <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-silver-muted mb-4 pb-4 border-b border-steel-midnight/40">
                    <div className="flex items-center gap-2">
                      <span className="text-electric-blue font-semibold">{selectedProject.numericId}</span>
                      <span>/</span>
                      <span className="text-icy-lilac uppercase tracking-wider">{selectedProject.category}</span>
                    </div>
                    <div className="text-silver-muted">
                      Role: <span className="text-frost">{selectedProject.role}</span>
                    </div>
                  </div>

                  {/* Main Title & Subtitle */}
                  <h3 className="text-2xl sm:text-4xl font-serif text-frost font-light leading-snug">
                    {selectedProject.fullTitle}
                  </h3>
                  <p className="mt-4 text-silver-ice text-sm sm:text-base leading-relaxed font-sans font-light">
                    {selectedProject.summary}
                  </p>

                  {/* Key Highlights Metrics Row */}
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {selectedProject.results.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg border border-steel-midnight bg-navy-surface/30 font-mono"
                      >
                        <div className="text-lg sm:text-xl font-light text-frost">
                          {metric.value}
                        </div>
                        <div className="text-[10px] uppercase text-silver-muted tracking-wider mt-1 leading-tight">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="mt-6">
                    <div className="text-xs font-mono text-silver-muted uppercase tracking-wider mb-2.5">
                      Core Technologies
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.stack.slice(0, 6).map((tech, idx) => (
                        <SignalBadge key={idx} variant={idx % 2 === 0 ? 'blue' : 'violet'}>
                          {tech}
                        </SignalBadge>
                      ))}
                      {selectedProject.stack.length > 6 && (
                        <span className="text-xs font-mono text-silver-muted self-center">
                          +{selectedProject.stack.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Call to Action Button to Open Full Case Study */}
                  <div className="mt-8 pt-6 border-t border-steel-midnight/50 flex flex-wrap items-center justify-between gap-4">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => onSelectCaseStudy(selectedProject)}
                      className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-electric-blue text-white text-xs font-mono tracking-widest uppercase hover:bg-electric-blue/90 shadow-signal-glow transition-all"
                    >
                      <span>Open Full Case Study</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>

                    <div className="text-xs font-mono text-silver-muted flex items-center gap-2">
                      <FileText className="w-3.5 h-3.5 text-icy-lilac" />
                      <span>Technical Editorial & Metrics</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
