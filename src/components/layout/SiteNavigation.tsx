import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface SiteNavigationProps {
  activeSection?: string;
}

export const SiteNavigation: React.FC<SiteNavigationProps> = ({ activeSection = 'hero' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'PROJECTS', href: '#projects', id: 'projects' },
    { label: 'SKILLS', href: '#skills', id: 'skills' },
    { label: 'EXPERIENCE', href: '#experience', id: 'experience' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
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
              AI / ML Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-7 text-xs font-mono tracking-widest_editorial text-silver-ice">
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

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="flex items-center gap-1.5 text-xs font-mono px-3.5 py-1.5 rounded-full border border-steel-midnight bg-navy-deep/60 text-silver-ice hover:text-frost hover:border-electric-blue/50 transition-all"
          >
            <span>CONNECT</span>
            <ArrowUpRight className="w-3 h-3 text-electric-blue" />
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="md:hidden p-2 text-silver-ice hover:text-frost border border-steel-midnight rounded bg-navy-deep/80"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
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
            <div className="pt-2">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="block text-center text-xs font-mono py-3 rounded border border-electric-blue/40 bg-electric-blue/10 text-frost hover:bg-electric-blue/20 transition-colors"
              >
                LET'S CONNECT →
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
