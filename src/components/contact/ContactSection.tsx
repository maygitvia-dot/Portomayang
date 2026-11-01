import React, { useState } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import {
  Mail,
  Linkedin,
  Github,
  ArrowUp,
  Copy,
  Check,
  Send,
  Sparkles,
  ExternalLink
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderSubject, setSenderSubject] = useState('');
  const [senderMessage, setSenderMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    const defaultSubject = '[Job Inquiry / Collaboration] - Regarding AI/ML Opportunities';
    const subject = encodeURIComponent(senderSubject || defaultSubject);
    const body = encodeURIComponent(
      `Hello Mayang,\n\n${senderMessage}\n\nBest regards,\n${senderName}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="relative pt-24 pb-20 sm:pt-36 sm:pb-28 overflow-hidden">
      {/* Upper Right Glowing Celestial Curve matching Frame 07 */}
      <div className="absolute top-0 right-0 w-[320px] sm:w-[480px] h-[320px] sm:h-[480px] pointer-events-none select-none">
        <svg
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full opacity-70"
        >
          <path
            d="M 400 60 C 260 60, 160 160, 160 300"
            stroke="url(#contactCrescentGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <circle cx="160" cy="300" r="4" fill="#36DDF2" />
          <defs>
            <linearGradient id="contactCrescentGrad" x1="400" y1="60" x2="160" y2="300" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3568FF" />
              <stop offset="0.6" stopColor="#8B5CFF" />
              <stop offset="1" stopColor="#36DDF2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-xs font-mono tracking-widest_editorial text-silver-muted uppercase mb-4 flex items-center gap-2">
          <span className="text-electric-blue">06</span>
          <span className="w-4 h-[1px] bg-steel-midnight" />
          <span className="text-icy-lilac">DISTINCT CLOSURE</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Narrative & Contact Channels */}
          <div className="lg:col-span-7">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-frost tracking-tight leading-[1.08]">
              Let’s build <br />
              <span className="italic font-normal bg-gradient-to-r from-icy-lilac via-laser-violet to-electric-blue bg-clip-text text-transparent">
                something meaningful.
              </span>
            </h2>

            <p className="mt-6 text-silver-ice text-base sm:text-lg max-w-xl font-sans font-light leading-relaxed">
              I’m open to entry-level AI/ML Engineer opportunities, graduate programs, research collaborations, or a thoughtful conversation about practical machine learning.
            </p>

            {/* Direct Channels List matching Frame 07 */}
            <div className="mt-10 space-y-4 max-w-md font-mono text-xs">
              {/* Email with copy + mailto */}
              <div className="p-4 rounded-xl border border-steel-midnight bg-navy-surface/30 flex items-center justify-between group hover:border-electric-blue/50 transition-all">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-3 text-silver-ice group-hover:text-frost"
                >
                  <Mail className="w-4 h-4 text-electric-blue flex-shrink-0" />
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="p-1.5 rounded hover:bg-steel-midnight text-silver-muted hover:text-frost transition-colors flex items-center gap-1"
                >
                  {copiedEmail ? (
                    <span className="text-arctic-cyan text-[11px] flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> Copied
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-steel-midnight bg-navy-surface/30 flex items-center justify-between group hover:border-laser-violet/50 transition-all"
              >
                <div className="flex items-center gap-3 text-silver-ice group-hover:text-frost">
                  <Linkedin className="w-4 h-4 text-laser-violet flex-shrink-0" />
                  <span className="truncate">linkedin.com/in/mayanggitaoktafia</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-silver-muted group-hover:text-frost" />
              </a>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-steel-midnight bg-navy-surface/30 flex items-center justify-between group hover:border-arctic-cyan/50 transition-all"
              >
                <div className="flex items-center gap-3 text-silver-ice group-hover:text-frost">
                  <Github className="w-4 h-4 text-arctic-cyan flex-shrink-0" />
                  <span className="truncate">github.com/mayanggita</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-silver-muted group-hover:text-frost" />
              </a>
            </div>
          </div>

          {/* Right Column: Functional Message Dispatcher & Back to Top button */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="p-6 sm:p-8 rounded-2xl border border-steel-midnight bg-obsidian-dark shadow-2xl relative">
              <div className="text-xs font-mono text-silver-muted uppercase tracking-wider mb-2 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-electric-blue" />
                <span>Direct Message Dispatcher</span>
              </div>
              <h3 className="text-lg font-serif text-frost font-light mb-4">
                Send a note directly to my inbox
              </h3>

              <form onSubmit={handleSendMail} className="space-y-4 text-xs font-mono">
                <div>
                  <label className="block text-silver-muted mb-1 text-[11px] uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Hiring Manager / Collaborator"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-steel-midnight bg-navy-surface/50 text-frost placeholder:text-silver-muted/50 focus:outline-none focus:border-electric-blue transition-colors font-sans"
                  />
                </div>

                <div>
                  <label className="block text-silver-muted mb-1 text-[11px] uppercase">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    required
                    value={senderSubject}
                    onChange={(e) => setSenderSubject(e.target.value)}
                    placeholder="e.g. [Job Inquiry] - Regarding AI/ML Opportunities"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-steel-midnight bg-navy-surface/50 text-frost placeholder:text-silver-muted/50 focus:outline-none focus:border-electric-blue transition-colors font-sans"
                  />
                </div>

                <div>
                  <label className="block text-silver-muted mb-1 text-[11px] uppercase">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={senderMessage}
                    onChange={(e) => setSenderMessage(e.target.value)}
                    placeholder="Write your note or question here..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-steel-midnight bg-navy-surface/50 text-frost placeholder:text-silver-muted/50 focus:outline-none focus:border-electric-blue transition-colors font-sans resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-electric-blue hover:bg-electric-blue/90 text-white font-mono uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-signal-glow transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Compose & Send via Email</span>
                </button>
                <p className="text-[10px] text-silver-muted/70 text-center font-sans">
                  Opens your mail client directly with your drafted inquiry.
                </p>
              </form>
            </div>

            {/* Back to top circular button matching Frame 07 */}
            <div className="mt-8 flex justify-end">
              <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="group flex flex-col items-center gap-2 text-silver-muted hover:text-frost transition-colors"
              >
                <div className="w-12 h-12 rounded-full border border-steel-midnight flex items-center justify-center group-hover:border-electric-blue group-hover:bg-electric-blue/10 transition-all">
                  <ArrowUp className="w-5 h-5 text-electric-blue group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <span className="font-mono text-[10px] tracking-widest uppercase">
                  BACK TO TOP
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

