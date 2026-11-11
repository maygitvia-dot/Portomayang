import React from 'react';
import { EXPERIENCE_DATA, EDUCATION_DATA } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import {
  GraduationCap,
  Users,
  Radio,
  Calendar,
  MapPin,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const ExperienceEducationSection: React.FC = () => {
  const { t } = useLanguage();
  const internship = EXPERIENCE_DATA.find((item) => item.type === 'internship');
  const orgExperiences = EXPERIENCE_DATA.filter((item) => item.type === 'organization');

  return (
    <section id="experience" className="relative py-24 sm:py-32 border-b border-steel-midnight/40 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-laser-violet/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <SectionHeading
          number="05"
          label={t('exp.label')}
          title={t('exp.title')}
          description={t('exp.description')}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column (7 cols): Engineering Internship & Academic Degree */}
          <div className="lg:col-span-7 space-y-8">
            {/* Primary Technical Engineering Internship */}
            {internship && (
              <div className="p-6 sm:p-8 rounded-2xl border border-steel-midnight bg-obsidian-dark shadow-xl relative overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-silver-muted mb-3">
                  <span className="text-electric-blue font-semibold uppercase tracking-wider flex items-center gap-1.5">
                    <Radio className="w-4 h-4" />
                    {t('exp.telecomInternship')}
                  </span>
                  <span className="flex items-center gap-1 text-silver-muted">
                    <Calendar className="w-3.5 h-3.5" />
                    {internship.period}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif text-frost font-normal">
                  {internship.role}
                </h3>
                <div className="text-sm font-sans text-icy-lilac font-medium mt-1">
                  {internship.organization}
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-silver-muted mt-1">
                  <MapPin className="w-3.5 h-3.5 text-steel-midnight" />
                  <span>{internship.division}</span>
                </div>

                {/* Practical Learning & Exposure Highlights */}
                <div className="mt-6 space-y-2.5">
                  <div className="text-xs font-mono text-silver-muted uppercase tracking-wider">
                    {t('exp.supervisedExposure')}
                  </div>
                  {internship.highlights.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-silver-ice font-sans">
                      <CheckCircle2 className="w-4 h-4 text-arctic-cyan flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>

                {/* Telecom Hardware / Tools Badges */}
                {internship.technologies && (
                  <div className="mt-6 pt-6 border-t border-steel-midnight/50">
                    <div className="text-xs font-mono text-silver-muted uppercase tracking-wider mb-2.5">
                      {t('exp.techPracticed')}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {internship.technologies.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded bg-navy-deep border border-steel-midnight text-[11px] font-mono text-silver-ice"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Formal University Education Card */}
            <div className="p-6 sm:p-8 rounded-2xl border border-steel-midnight bg-navy-deep/30 shadow-xl relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-silver-muted mb-3">
                <span className="text-laser-violet font-semibold uppercase tracking-wider flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4" />
                  {t('exp.completedEdu')}
                </span>
                <span>{EDUCATION_DATA.period}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif text-frost font-normal">
                {EDUCATION_DATA.institution}
              </h3>
              <div className="text-sm font-sans text-silver-ice mt-1">
                {EDUCATION_DATA.major} — {EDUCATION_DATA.faculty}
              </div>

              <div className="mt-4 p-3.5 rounded-lg border border-steel-midnight bg-obsidian-dark text-xs font-sans text-silver-ice">
                <span className="font-mono text-electric-blue block mb-1 uppercase text-[10px]">
                  {t('exp.thesisProject')}
                </span>
                <span className="text-frost font-medium">{EDUCATION_DATA.thesisTitle}</span>
              </div>

              <div className="mt-5">
                <div className="text-xs font-mono text-silver-muted uppercase tracking-wider mb-2">
                  {t('exp.keyCoursework')}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {EDUCATION_DATA.relevantCoursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-full border border-steel-midnight/80 bg-navy-surface/50 text-[11px] font-sans text-silver-ice"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Student Leadership & Organization */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl border border-steel-midnight bg-obsidian-dark shadow-xl">
              <div className="flex items-center gap-2 text-xs font-mono text-arctic-cyan uppercase tracking-wider mb-4">
                <Users className="w-4 h-4" />
                <span>{t('exp.leadership')}</span>
              </div>
              <p className="text-xs text-silver-muted font-sans leading-relaxed mb-6">
                {t('exp.leadershipDesc')}
              </p>

              <div className="space-y-4">
                {orgExperiences.map((org) => (
                  <div
                    key={org.id}
                    className="p-4 rounded-xl border border-steel-midnight/70 bg-navy-surface/20 hover:border-steel-midnight transition-colors"
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono text-silver-muted mb-1">
                      <span className="text-icy-lilac font-semibold uppercase">{org.organization}</span>
                      <span>{org.period}</span>
                    </div>
                    <h4 className="text-sm font-sans font-medium text-frost">
                      {org.role}
                    </h4>
                    {org.division && (
                      <div className="text-xs font-sans text-silver-muted mt-0.5">
                        {org.division}
                      </div>
                    )}
                    <ul className="mt-2 space-y-1 text-xs text-silver-ice font-sans">
                      {org.highlights.map((hl, hIdx) => (
                        <li key={hIdx} className="leading-relaxed flex items-start gap-1.5">
                          <span className="text-electric-blue text-xs">•</span>
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
