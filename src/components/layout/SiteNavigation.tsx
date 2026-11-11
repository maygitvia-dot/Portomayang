import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface SiteNavigationProps {
  activeSection?: string;
}

export const SiteNavigation: React.FC<SiteNavigationProps> = ({ activeSection = 'hero' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, toggleLang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t('nav.about'), href: '#about', id: 'about' },
    { label: t('nav.projects'), href: '#projects', id: 'projects' },
    { label: t('nav.skills'), href: '#skills', id: 'skills' },
    { label: t('nav.experience'), href: '#experience', id: 'experience' },
    { label: t('nav.contact'), href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-obsidian/90 backdrop-blur-md border-b border-steel-midnight/80 py-3 shadow-card-subtle'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Profile Avatar + Name */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#hero');
          }}
          className="group flex items-center gap-3 focus:outline-none rounded-full px-1"
        >
          {/* Small Round Profile Avatar */}
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full p-[1.5px] bg-gradient-to-tr from-electric-blue via-laser-violet to-arctic-cyan shadow-signal-glow group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full rounded-full overflow-hidden bg-obsidian-dark">
              <img
                src="/mayang-portrait.png"
                alt="Mayang Gita Oktafia"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/profile.jpg';
                }}
              />
            </div>
            {/* Live active dot indicator */}
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-arctic-cyan border-2 border-obsidian shadow-cyan-glow animate-pulse" />
          </div>

          {/* Full Name */}
          <div className="flex flex-col text-left">
            <span className="text-frost font-sans text-sm sm:text-base font-medium tracking-wide group-hover:text-white transition-colors">
              Mayang Gita Oktafia
            </span>
            <span className="text-[10px] font-mono tracking-widest text-silver-muted uppercase hidden sm:block">
              {t('nav.subtitle')}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-7">
          <div className="flex items-center gap-4 lg:gap-6 text-xs font-mono tracking-widest_editorial text-silver-ice">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative py-1 transition-colors hover:text-frost ${
                    isActive ? 'text-frost font-medium' : 'text-silver-muted'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-electric-blue shadow-signal-glow rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Open to Work status pill */}
          <div className="hidden xl:flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-[10px] font-mono text-emerald-400 whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {t('nav.openToWork')}
          </div>

          {/* Download CV button */}
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-1.5 text-xs font-mono px-3.5 py-1.5 rounded-full border border-electric-blue/50 bg-electric-blue/10 text-electric-blue hover:bg-electric-blue/20 hover:border-electric-blue transition-all whitespace-nowrap"
          >
            <Download className="w-3 h-3" />
            <span>{t('nav.downloadCv')}</span>
          </a>

          {/* Connect shortcut */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="flex items-center gap-1.5 text-xs font-mono px-3.5 py-1.5 rounded-full border border-steel-midnight bg-navy-deep/60 text-silver-ice hover:text-frost hover:border-electric-blue/50 transition-all"
          >
            <span>{t('nav.connect')}</span>
          </a>

          {/* Prominent Bilingual Switch Pill [ EN | ID ] */}
          <div className="flex items-center p-1 rounded-full border border-steel-midnight bg-navy-deep/90 shadow-card-subtle">
            <button
              onClick={() => toggleLang()}
              className="flex items-center gap-1 px-1.5 text-silver-muted hover:text-frost"
              title="Switch Language"
            >
              <Globe className="w-3 h-3 text-laser-violet" />
            </button>
            <div className="flex items-center gap-0.5">
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold transition-all duration-200 ${
                  lang === 'en'
                    ? 'bg-electric-blue text-white shadow-signal-glow'
                    : 'text-silver-muted hover:text-frost'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('id')}
                className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold transition-all duration-200 ${
                  lang === 'id'
                    ? 'bg-laser-violet text-white shadow-laser-glow'
                    : 'text-silver-muted hover:text-frost'
                }`}
              >
                ID
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile: Prominent Language toggle [ EN | ID ] + Hamburger */}
        <div className="md:hidden flex items-center gap-2.5">
          <div className="flex items-center p-0.5 rounded-full border border-steel-midnight bg-navy-deep/90">
            <button
              onClick={() => setLang('en')}
              className={`px-2 py-1 rounded-full text-[10px] font-mono font-semibold transition-all ${
                lang === 'en'
                  ? 'bg-electric-blue text-white'
                  : 'text-silver-muted'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('id')}
              className={`px-2 py-1 rounded-full text-[10px] font-mono font-semibold transition-all ${
                lang === 'id'
                  ? 'bg-laser-violet text-white'
                  : 'text-silver-muted'
              }`}
            >
              ID
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="p-2 text-silver-ice hover:text-frost border border-steel-midnight rounded bg-navy-deep/80"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-obsidian-dark/95 backdrop-blur-xl border-b border-steel-midnight px-6 py-8 animate-fadeIn">
          <div className="flex flex-col gap-5 text-sm font-mono tracking-widest_editorial">
            {navLinks.map((link, idx) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="flex items-center justify-between text-silver-ice hover:text-frost py-2 border-b border-steel-midnight/40"
              >
                <span>{link.label}</span>
                <span className="text-xs text-electric-blue font-mono">0{idx + 1}</span>
              </a>
            ))}
            <div className="pt-2 space-y-2">
              <a
                href="/resume.pdf"
                download
                className="flex items-center justify-center gap-2 text-xs font-mono py-3 rounded border border-electric-blue/50 bg-electric-blue/10 text-electric-blue hover:bg-electric-blue/20 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                {t('nav.downloadCv')} (PDF)
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="block text-center text-xs font-mono py-3 rounded border border-electric-blue/40 bg-electric-blue/10 text-frost hover:bg-electric-blue/20 transition-colors"
              >
                {t('nav.letsConnect')}
              </a>
              <div className="flex items-center justify-center gap-1.5 py-2 text-[11px] font-mono text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {t('nav.openToWorkFull')}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
