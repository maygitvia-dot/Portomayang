import React, { useState, useEffect } from 'react';
import { SiteNavigation } from './components/layout/SiteNavigation';
import { HeroSection } from './components/hero/HeroSection';
import { AboutSection } from './components/about/AboutSection';
import { SignalProjectExplorer } from './components/projects/SignalProjectExplorer';
import { ProjectCaseStudyModal } from './components/projects/ProjectCaseStudyModal';
import { RadialSkillsSection } from './components/skills/RadialSkillsSection';
import { ExperienceEducationSection } from './components/experience/ExperienceEducationSection';
import { ContactSection } from './components/contact/ContactSection';
import { SiteFooter } from './components/layout/SiteFooter';
import { ScrollSignalProgress } from './components/ui/ScrollSignalProgress';
import { ProjectData } from './types/portfolio';
import { PROJECTS_DATA } from './data/portfolioData';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ProjectData | null>(null);

  // Monitor scroll for active section indicator
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle direct hash navigation to case studies
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'scovis') {
        const p = PROJECTS_DATA.find((x) => x.id === 'scovis');
        if (p) setSelectedCaseStudy(p);
      } else if (hash === 'ai-translation' || hash === 'ai-automation') {
        const p = PROJECTS_DATA.find((x) => x.id === 'ai-translation');
        if (p) setSelectedCaseStudy(p);
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  return (
    <div className="min-h-screen bg-obsidian text-frost font-sans selection:bg-electric-blue/30 selection:text-white relative">
      {/* Top Header Navigation */}
      <SiteNavigation activeSection={activeSection} />

      {/* Floating Right-Side Signal Progress Spine */}
      <ScrollSignalProgress />

      {/* Main Content Sections */}
      <main>
        <HeroSection />
        <AboutSection />
        <SignalProjectExplorer
          onSelectCaseStudy={(project) => setSelectedCaseStudy(project)}
        />
        <RadialSkillsSection />
        <ExperienceEducationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <SiteFooter />

      {/* Full Immersive Technical Case Study Modal */}
      {selectedCaseStudy && (
        <ProjectCaseStudyModal
          project={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
          onSwitchProject={(p) => setSelectedCaseStudy(p)}
        />
      )}
    </div>
  );
};

export default App;
