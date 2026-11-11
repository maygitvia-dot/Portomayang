import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PHILOSOPHY_PILLARS } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { Profile3DCard } from '../ui/Profile3DCard';
import { GraduationCap } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'me' | 'approach' | 'beyond'>('me');
  const [activePillar, setActivePillar] = useState<number>(0);
  const { t } = useLanguage();

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8 }}
      className="relative py-24 sm:py-32 border-b border-steel-midnight/40 overflow-hidden"
    >
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-laser-violet/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <SectionHeading
          number="02"
          label={t('about.label')}
          title={t('about.title')}
          description={t('about.description')}
        />

        {/* 3-Column Split Narrative Layout matching Frame 02 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Vertical Index Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3 flex lg:flex-col gap-3 overflow-x-auto pb-2 lg:pb-0 font-mono text-xs tracking-widest uppercase"
          >
            <button
              onClick={() => setActiveTab('me')}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg border text-left transition-all whitespace-nowrap ${
                activeTab === 'me'
                  ? 'border-electric-blue/50 bg-electric-blue/10 text-frost font-medium shadow-signal-glow'
                  : 'border-steel-midnight/60 bg-navy-deep/20 text-silver-muted hover:text-frost hover:border-steel-midnight'
              }`}
            >
              <span className="text-electric-blue">01</span>
              <span>{t('about.tab.me')}</span>
            </button>

            <button
              onClick={() => setActiveTab('approach')}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg border text-left transition-all whitespace-nowrap ${
                activeTab === 'approach'
                  ? 'border-laser-violet/50 bg-laser-violet/10 text-frost font-medium shadow-laser-glow'
                  : 'border-steel-midnight/60 bg-navy-deep/20 text-silver-muted hover:text-frost hover:border-steel-midnight'
              }`}
            >
              <span className="text-laser-violet">02</span>
              <span>{t('about.tab.approach')}</span>
            </button>

            <button
              onClick={() => setActiveTab('beyond')}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg border text-left transition-all whitespace-nowrap ${
                activeTab === 'beyond'
                  ? 'border-arctic-cyan/50 bg-arctic-cyan/10 text-frost font-medium shadow-cyan-glow'
                  : 'border-steel-midnight/60 bg-navy-deep/20 text-silver-muted hover:text-frost hover:border-steel-midnight'
              }`}
            >
              <span className="text-arctic-cyan">03</span>
              <span>{t('about.tab.beyond')}</span>
            </button>

            <div className="hidden lg:block mt-8 p-4 rounded-lg border border-steel-midnight bg-navy-deep/20 font-sans text-xs text-silver-muted leading-relaxed">
              <div className="flex items-center gap-2 text-frost font-mono mb-2">
                <GraduationCap className="w-4 h-4 text-electric-blue" />
                <span>{t('about.telkom')}</span>
              </div>
              <p>{t('about.telkomDesc')}</p>
            </div>
          </motion.div>

          {/* Center Column: Interactive 3D Holographic Portrait Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 flex items-center justify-center py-2"
          >
            <Profile3DCard size="md" />
          </motion.div>

          {/* Right Column: Editorial Narrative & Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            {/* Dynamic Content Based on Tab with AnimatePresence */}
            <AnimatePresence mode="wait">
              {activeTab === 'me' && (
                <motion.div
                  key="me"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-3xl sm:text-4xl font-serif font-light text-frost leading-snug">
                    {t('about.me.title')}
                  </h3>
                  <p className="mt-5 text-silver-ice text-sm sm:text-base leading-relaxed font-sans font-light">
                    {t('about.me.p1')}
                  </p>
                  <p className="mt-4 text-silver-muted text-xs sm:text-sm leading-relaxed font-sans">
                    {t('about.me.p2')}
                  </p>
                </motion.div>
              )}

              {activeTab === 'approach' && (
                <motion.div
                  key="approach"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-3xl sm:text-4xl font-serif font-light text-frost leading-snug">
                    {t('about.approach.title')}
                  </h3>
                  <p className="mt-5 text-silver-ice text-sm sm:text-base leading-relaxed font-sans font-light">
                    {t('about.approach.p1')}
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-3 text-xs font-mono">
                    <div className="p-3 rounded border border-steel-midnight bg-navy-surface/40">
                      <span className="text-electric-blue block mb-1">{t('about.approach.dataFocus')}</span>
                      <span className="text-silver-ice font-sans">{t('about.approach.dataDesc')}</span>
                    </div>
                    <div className="p-3 rounded border border-steel-midnight bg-navy-surface/40">
                      <span className="text-laser-violet block mb-1">{t('about.approach.automation')}</span>
                      <span className="text-silver-ice font-sans">{t('about.approach.automationDesc')}</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'beyond' && (
                <motion.div
                  key="beyond"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-3xl sm:text-4xl font-serif font-light text-frost leading-snug">
                    {t('about.beyond.title')}
                  </h3>
                  <p className="mt-5 text-silver-ice text-sm sm:text-base leading-relaxed font-sans font-light">
                    {t('about.beyond.p1')}
                  </p>
                  <div className="mt-4 p-3 rounded border border-steel-midnight bg-navy-surface/30 font-sans text-xs text-silver-ice">
                    <span className="font-mono text-arctic-cyan block mb-1">{t('about.beyond.internship')}</span>
                    {t('about.beyond.internshipDesc')}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Interactive 3 Pillars Section */}
            <div className="mt-8 pt-8 border-t border-steel-midnight/50">
              <div className="font-mono text-xs tracking-widest text-silver-muted uppercase mb-4">
                {t('about.corePillars')}
              </div>
              <div className="space-y-3">
                {PHILOSOPHY_PILLARS.map((pillar, idx) => {
                  const isSelected = activePillar === idx;
                  const title = t(`about.pillar.${idx}.title`) || pillar.title;
                  const headline = t(`about.pillar.${idx}.headline`) || pillar.headline;
                  const description = t(`about.pillar.${idx}.desc`) || pillar.description;
                  return (
                    <motion.div
                      key={pillar.number}
                      onClick={() => setActivePillar(idx)}
                      whileHover={{ scale: 1.01 }}
                      className={`p-3.5 rounded-lg border transition-all cursor-pointer ${
                        isSelected
                          ? 'border-electric-blue/40 bg-navy-deep/60 shadow-signal-glow'
                          : 'border-steel-midnight/50 bg-navy-deep/20 hover:border-steel-midnight'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs text-electric-blue font-semibold">
                            {pillar.number}
                          </span>
                          <span className="w-4 h-[1px] bg-steel-midnight"></span>
                          <h4 className="text-sm font-sans font-medium text-frost">
                            {title}
                          </h4>
                        </div>
                        <span className={`text-xs font-mono ${isSelected ? 'text-arctic-cyan' : 'text-silver-muted'}`}>
                          {isSelected ? t('about.active') : t('about.expand')}
                        </span>
                      </div>

                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mt-3 pl-8 text-xs text-silver-ice font-sans leading-relaxed"
                        >
                          <p className="text-frost font-medium mb-1">{headline}</p>
                          <p className="text-silver-muted">{description}</p>
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
