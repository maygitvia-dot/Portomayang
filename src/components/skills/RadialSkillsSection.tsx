import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const RadialSkillsSection: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('deep-learning');
  const { t } = useLanguage();

  const selectedCategory =
    SKILL_CATEGORIES.find((c) => c.id === selectedCategoryId) || SKILL_CATEGORIES[0];

  // Arc node positions along a 180-degree crescent arc
  const arcNodes = [
    { id: 'programming', label: 'Python', cy: 60, cx: 210, angle: -50 },
    { id: 'deep-learning', label: 'Machine Learning', cy: 120, cx: 245, angle: -20 },
    { id: 'computer-vision', label: 'Computer Vision', cy: 190, cx: 250, angle: 10 },
    { id: 'ai-automation', label: 'Generative AI & n8n', cy: 260, cx: 235, angle: 40 },
    { id: 'tools-dev', label: 'Tools & Cloud APIs', cy: 320, cx: 195, angle: 70 },
  ];

  return (
    <section id="skills" className="relative py-24 sm:py-32 border-b border-steel-midnight/40 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-arctic-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <SectionHeading
          number="04"
          label={t('skills.label')}
          title={t('skills.title')}
          description={t('skills.description')}
        />

        {/* Minimal Radial Layout inspired by Frame 06 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Radial Orbital Arc SVG Visual */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative select-none">
            <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
              {/* Central Typographic Focal Point */}
              <div className="absolute left-10 sm:left-14 top-1/2 -translate-y-1/2 z-10 text-left">
                <div className="text-3xl sm:text-4xl font-serif font-light text-frost">
                  {t('skills.core')}
                </div>
                <div className="text-3xl sm:text-4xl font-serif italic text-icy-lilac">
                  {t('skills.coreSkills')}
                </div>
                <div className="mt-3 text-[11px] font-mono text-silver-muted tracking-widest uppercase">
                  {t('skills.appliedCompetencies')}
                </div>
              </div>

              {/* Orbital Arc SVG with Nodes */}
              <svg
                className="w-full h-full"
                viewBox="0 0 380 380"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer guide arc */}
                <path
                  d="M 170 30 A 160 160 0 0 1 170 350"
                  stroke="#1B2948"
                  strokeWidth="1.5"
                  strokeDasharray="4 6"
                />

                {/* Active Glowing Primary Arc */}
                <path
                  d="M 180 40 A 150 150 0 0 1 180 340"
                  stroke="url(#radialArcGrad)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* Nodes on the Arc */}
                {arcNodes.map((node) => {
                  const isSelected = selectedCategoryId === node.id;
                  return (
                    <g
                      key={node.id}
                      className="cursor-pointer group"
                      onClick={() => setSelectedCategoryId(node.id)}
                    >
                      {/* Pulse ring for selected */}
                      {isSelected && (
                        <circle
                          cx={node.cx}
                          cy={node.cy}
                          r="12"
                          stroke="#36DDF2"
                          strokeWidth="1"
                          strokeDasharray="2 2"
                          className="animate-spin opacity-80"
                        />
                      )}

                      {/* Main node dot */}
                      <circle
                        cx={node.cx}
                        cy={node.cy}
                        r={isSelected ? 6 : 4}
                        fill={isSelected ? '#36DDF2' : '#8B5CFF'}
                        className="transition-all duration-300 group-hover:scale-125"
                      />

                      {/* Node Label Text */}
                      <text
                        x={node.cx + 16}
                        y={node.cy + 4}
                        fill={isSelected ? '#F5F7FF' : '#8D9CB8'}
                        fontSize={isSelected ? '13' : '11'}
                        fontFamily="JetBrains Mono"
                        fontWeight={isSelected ? '600' : '400'}
                        className="transition-colors group-hover:fill-white select-none"
                      >
                        {node.label}
                      </text>
                    </g>
                  );
                })}

                <defs>
                  <linearGradient id="radialArcGrad" x1="180" y1="40" x2="180" y2="340" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3568FF" />
                    <stop offset="0.5" stopColor="#8B5CFF" />
                    <stop offset="1" stopColor="#36DDF2" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Bottom pointer caption */}
              <div className="absolute bottom-2 left-6 text-xs font-mono text-silver-muted flex items-center gap-1.5">
                <span>{t('skills.techWork')}</span>
                <span className="text-electric-blue">→</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contextual Applied Breakdown (No fake % bars) */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-2xl border border-steel-midnight bg-obsidian-dark shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-steel-midnight/50 pb-4 mb-6">
                <div>
                  <div className="text-xs font-mono text-electric-blue uppercase tracking-widest">
                    {t('skills.categoryBreakdown')}
                  </div>
                  <h3 className="text-2xl font-serif text-frost font-light mt-1">
                    {selectedCategory.name}
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full border border-steel-midnight bg-navy-surface text-xs font-mono text-silver-ice">
                  {selectedCategory.skills.length} {t('skills.documentedSkills')}
                </span>
              </div>

              {/* Applied Context List */}
              <div className="space-y-4">
                {selectedCategory.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-steel-midnight/70 bg-navy-surface/30 hover:border-steel-midnight transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-arctic-cyan" />
                        <span className="font-mono text-sm font-semibold text-frost">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-navy-deep text-icy-lilac border border-steel-midnight">
                        {skill.category}
                      </span>
                    </div>
                    <p className="text-xs text-silver-muted font-sans leading-relaxed pl-6">
                      {skill.context}
                    </p>
                  </div>
                ))}
              </div>

              {/* Factual Integrity Disclaimer */}
              <div className="mt-6 pt-4 border-t border-steel-midnight/40 text-[11px] font-mono text-silver-muted/80">
                {t('skills.disclaimer')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
