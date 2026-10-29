import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '../../data/portfolioData';
import { ProjectData } from '../../types/portfolio';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface SignalProjectExplorerProps {
  onSelectCaseStudy: (project: ProjectData) => void;
}

export const SignalProjectExplorer: React.FC<SignalProjectExplorerProps> = ({
  onSelectCaseStudy,
}) => {
  return (
    <section id="projects" className="relative py-24 sm:py-32 border-b border-steel-midnight/40 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-electric-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-laser-violet/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header Layout matching the uploaded reference template */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest_editorial uppercase text-laser-violet font-semibold mb-2">
              <span className="w-2 h-2 rounded-full bg-laser-violet animate-pulse" />
              <span>FEATURED SOLUTIONS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-frost font-light tracking-tight">
              Selected Works & <br className="hidden sm:block" />
              <span className="font-normal text-frost">Projects</span>
            </h2>
          </div>

          <p className="max-w-md text-silver-ice text-sm sm:text-base font-sans font-light leading-relaxed lg:text-right">
            Kumpulan implementasi deep learning, computer vision, dan sistem otomatisasi AI berbasis performa tinggi.
          </p>
        </div>

        {/* 2-Column Cards Grid matching Reference Template */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PROJECTS_DATA.map((project, idx) => {
            const isScovis = project.id === 'scovis';

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                onClick={() => onSelectCaseStudy(project)}
                className="group p-6 sm:p-7 rounded-[28px] border border-steel-midnight bg-navy-surface/40 hover:bg-navy-surface/60 hover:border-electric-blue/50 transition-all duration-500 shadow-2xl cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Card Image / Preview Banner Area */}
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-obsidian-dark border border-steel-midnight/80 mb-6 group-hover:border-electric-blue/40 transition-colors">
                    {/* Visual Preview Banner */}
                    {isScovis ? (
                      /* SCOVIS Image / Banner Simulation with real-time waveform / neural lines */
                      <div className="w-full h-full relative flex items-center justify-center p-6 bg-gradient-to-tr from-obsidian-dark via-navy-deep to-obsidian">
                        {/* Background grid */}
                        <div className="absolute inset-0 bg-[radial-gradient(#1B2948_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

                        {/* Visual Handwriting Scan & Analytics overlay */}
                        <div className="relative z-10 w-full max-w-sm rounded-xl border border-steel-midnight/90 bg-obsidian/90 p-4 shadow-2xl">
                          <div className="flex items-center justify-between border-b border-steel-midnight pb-2 mb-3 text-[10px] font-mono text-silver-muted">
                            <span className="text-electric-blue flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-electric-blue animate-pulse" />
                              SCOVIS // DEEP LEARNING
                            </span>
                            <span>VAL ACC: 55.45%</span>
                          </div>

                          {/* Handwriting stroke preview */}
                          <div className="h-14 rounded bg-[#070b14] border border-steel-midnight/60 p-2 flex flex-col justify-around">
                            <div className="h-1.5 w-3/4 rounded-full bg-gradient-to-r from-arctic-cyan/80 to-transparent" />
                            <div className="h-1.5 w-5/6 rounded-full bg-gradient-to-r from-electric-blue/70 to-transparent" />
                            <div className="h-1.5 w-1/2 rounded-full bg-gradient-to-r from-laser-violet/60 to-transparent" />
                          </div>

                          <div className="mt-2.5 flex items-center justify-between text-[10px] font-mono text-silver-muted">
                            <span>MobileNetV2 + BiLSTM</span>
                            <span className="text-arctic-cyan">1,560 SAMPLES</span>
                          </div>
                        </div>

                        {/* Top corner label */}
                        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-obsidian/80 border border-steel-midnight text-[10px] font-mono text-silver-ice">
                          Image-Based Assessment
                        </div>
                      </div>
                    ) : (
                      /* AI Document Translation Visual Banner with n8n DAG flow */
                      <div className="w-full h-full relative flex items-center justify-center p-6 bg-gradient-to-tr from-obsidian-dark via-navy-surface to-obsidian">
                        {/* Background grid */}
                        <div className="absolute inset-0 bg-[radial-gradient(#1B2948_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

                        {/* Visual DAG Flow Diagram Simulation */}
                        <div className="relative z-10 w-full max-w-sm rounded-xl border border-steel-midnight/90 bg-obsidian/90 p-4 shadow-2xl">
                          <div className="flex items-center justify-between border-b border-steel-midnight pb-2 mb-3 text-[10px] font-mono text-silver-muted">
                            <span className="text-laser-violet flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-laser-violet animate-pulse" />
                              N8N WORKFLOW DAG
                            </span>
                            <span className="text-arctic-cyan">GEMINI 1.5</span>
                          </div>

                          {/* 4 Connected Nodes Preview */}
                          <div className="grid grid-cols-4 gap-2 text-center text-[9px] font-mono">
                            <div className="p-2 rounded bg-navy-surface border border-steel-midnight text-silver-ice">
                              Drive
                            </div>
                            <div className="p-2 rounded bg-navy-surface border border-steel-midnight text-silver-ice">
                              Extract
                            </div>
                            <div className="p-2 rounded bg-laser-violet/20 border border-laser-violet/50 text-frost font-bold">
                              Gemini
                            </div>
                            <div className="p-2 rounded bg-electric-blue/20 border border-electric-blue/50 text-frost font-bold">
                              Docs
                            </div>
                          </div>

                          <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-silver-muted">
                            <span>EN PDF → ID DOCS</span>
                            <span className="text-electric-blue">100% AUTOMATED</span>
                          </div>
                        </div>

                        {/* Top corner label */}
                        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-obsidian/80 border border-steel-midnight text-[10px] font-mono text-silver-ice">
                          Workflow Automation
                        </div>
                      </div>
                    )}

                    {/* Hover Glow Sheen */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />
                  </div>

                  {/* Category & Stack Tag Pills matching reference */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    {/* Primary Badge */}
                    <span className="px-3 py-1 rounded-lg bg-laser-violet/15 text-icy-lilac border border-laser-violet/30 text-xs font-mono font-medium">
                      {isScovis ? 'AI Assessment' : 'AI Automation'}
                    </span>

                    {/* Secondary Stack Badges */}
                    {project.stack.slice(0, 3).map((st, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1 rounded-lg bg-navy-deep/70 text-silver-muted border border-steel-midnight text-xs font-mono"
                      >
                        {st}
                      </span>
                    ))}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl sm:text-2xl font-serif text-frost font-medium group-hover:text-white transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="mt-3 text-silver-ice text-xs sm:text-sm font-sans font-light leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>
                </div>

                {/* Bottom View Case Study Link with Arrow */}
                <div className="mt-6 pt-5 border-t border-steel-midnight/60 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-frost group-hover:text-electric-blue transition-colors font-medium">
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>

                  <span className="text-xs font-mono text-silver-muted">
                    {project.numericId}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Down Arrow Indicator matching Reference Template */}
        <div className="mt-16 flex justify-center">
          <div className="w-10 h-10 rounded-full border border-steel-midnight bg-navy-deep/60 flex items-center justify-center text-silver-muted hover:text-frost hover:border-electric-blue/50 transition-colors">
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
