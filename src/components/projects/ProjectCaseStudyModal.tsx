import React, { useState, useEffect } from 'react';
import { ProjectData } from '../../types/portfolio';
import { getProjectsData } from '../../data/portfolioData';
import { ScovisCaseStudy } from './ScovisCaseStudy';
import { TranslationCaseStudy } from './TranslationCaseStudy';
import { ArrowLeft, X, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface ProjectCaseStudyModalProps {
  project: ProjectData;
  onClose: () => void;
  onSwitchProject: (project: ProjectData) => void;
}

export const ProjectCaseStudyModal: React.FC<ProjectCaseStudyModalProps> = ({
  project,
  onClose,
  onSwitchProject,
}) => {
  const { lang, t } = useLanguage();
  const [activeSubSection, setActiveSubSection] = useState<string>('problem');
  const allProjects = getProjectsData(lang);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    // Lock body scroll
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const subSections = [
    { id: 'section-problem', label: t('modal.problem') },
    { id: 'section-contribution', label: t('modal.contribution') },
    { id: 'section-process', label: t('modal.implementation') },
    { id: 'section-results', label: t('modal.results') },
    { id: 'section-resources', label: t('modal.resources') },
  ];

  const scrollToSection = (id: string) => {
    setActiveSubSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-obsidian/95 backdrop-blur-xl animate-fadeIn"
    >
      {/* Top Fixed Header matching Frame 04 */}
      <div className="sticky top-0 z-30 bg-obsidian-dark/90 backdrop-blur-md border-b border-steel-midnight px-6 sm:px-10 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onClose}
            className="group flex items-center gap-2 text-xs font-mono text-silver-ice hover:text-frost px-3 py-1.5 rounded-full border border-steel-midnight hover:border-electric-blue/50 transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            <span>{t('modal.back')}</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-silver-muted border-l border-steel-midnight pl-4">
            <span className="text-electric-blue">{project.numericId}</span>
            <span>/</span>
            <span className="text-frost uppercase tracking-wider">{project.title}</span>
          </div>
        </div>

        {/* Project Switcher */}
        <div className="flex items-center gap-2">
          {allProjects.map((p) => {
            const isCurrent = p.id === project.id;
            return (
              <button
                key={p.id}
                onClick={() => onSwitchProject(p)}
                className={`px-3 py-1.5 rounded text-xs font-mono tracking-wider transition-all ${
                  isCurrent
                    ? 'bg-electric-blue/20 text-frost border border-electric-blue/40 font-semibold'
                    : 'text-silver-muted hover:text-frost border border-transparent'
                }`}
              >
                {p.numericId} {p.title}
              </button>
            );
          })}
          <button
            onClick={onClose}
            aria-label="Close Case Study"
            className="p-1.5 text-silver-muted hover:text-frost rounded-full hover:bg-steel-midnight ml-2"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10 sm:py-16">
        {/* Immersive Editorial Header matching Frame 04 */}
        <div className="pb-12 border-b border-steel-midnight/50">
          <div className="font-mono text-xs tracking-widest text-silver-muted uppercase mb-3 flex items-center gap-2">
            <span className="text-electric-blue">{project.numericId}</span>
            <span className="w-4 h-[1px] bg-steel-midnight" />
            <span className="text-icy-lilac">{project.category}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif text-frost font-light tracking-tight max-w-4xl leading-tight">
            {project.fullTitle}
          </h1>

          <p className="mt-6 text-silver-ice text-base sm:text-lg max-w-3xl font-sans font-light leading-relaxed">
            {project.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {project.stack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full border border-steel-midnight bg-navy-surface/40 text-xs font-mono text-silver-ice"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 2-Column Split: Left Sticky Navigator & Right Technical Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-10">
          {/* Left Column Sticky Subnav matching Frame 05 */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-28 space-y-3 font-mono text-xs">
              <div className="text-silver-muted uppercase tracking-widest text-[11px] mb-3">
                {t('modal.index')}
              </div>
              {subSections.map((sec, idx) => (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className={`w-full flex items-center justify-between p-2.5 rounded-lg border text-left transition-all ${
                    activeSubSection === sec.id
                      ? 'border-electric-blue/40 bg-navy-deep/70 text-frost font-semibold'
                      : 'border-transparent text-silver-muted hover:text-frost hover:bg-navy-deep/20'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-electric-blue">0{idx + 1}</span>
                    <span>{sec.label}</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                </button>
              ))}

              <div className="pt-6 border-t border-steel-midnight/40 text-[11px] text-silver-muted space-y-2">
                <div>
                  <span className="text-silver-ice block">{t('modal.scope')}</span>
                  <span>{project.role}</span>
                </div>
                <div>
                  <span className="text-silver-ice block">{t('modal.status')}</span>
                  <span className="text-arctic-cyan">{t('modal.verified')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Deep Technical Case Study Content */}
          <div className="lg:col-span-9">
            {project.id === 'scovis' ? (
              <ScovisCaseStudy project={project} activeSection={activeSubSection} />
            ) : (
              <TranslationCaseStudy project={project} activeSection={activeSubSection} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
