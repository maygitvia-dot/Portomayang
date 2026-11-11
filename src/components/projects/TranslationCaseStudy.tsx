import React, { useState } from 'react';
import { ProjectData } from '../../types/portfolio';
import { CodeViewer } from '../ui/CodeViewer';
import { useLanguage } from '../../context/LanguageContext';
import {
  CheckCircle2,
  Sliders,
  Image as ImageIcon,
  ZoomIn
} from 'lucide-react';

interface TranslationCaseStudyProps {
  project: ProjectData;
  activeSection?: string;
}

export const TranslationCaseStudy: React.FC<TranslationCaseStudyProps> = ({
  project,
}) => {
  const [activeNodeIndex, setActiveNodeIndex] = useState<number>(4); // Default to AI Agent node
  const [activeImageModal, setActiveImageModal] = useState<string | null>(null);
  const { lang } = useLanguage();
  const isId = lang === 'id';

  const nodes = project.implementation.workflowNodes || [];
  const selectedNode = nodes[activeNodeIndex] || nodes[0];

  const workflowGallery = [
    {
      step: '01',
      title: isId ? 'Arsitektur Workflow' : 'Workflow Architecture',
      subtitle: isId ? 'Pipeline DAG n8n Lengkap' : 'Complete n8n DAG Pipeline',
      image: '/projects/translation/translation-workflow.jpg',
    },
    {
      step: '02',
      title: isId ? 'Dokumen Masuk' : 'Input Documents',
      subtitle: 'Google Drive: Dokumen_Masuk',
      image: '/projects/translation/translation-input-docs.jpg',
    },
    {
      step: '03',
      title: isId ? 'Eksekusi Translasi AI' : 'AI Translation Execution',
      subtitle: isId ? 'Telemetri & Log Gemini AI' : 'Gemini AI Telemetry & Logs',
      image: '/projects/translation/translation-execution.jpg',
    },
    {
      step: '04',
      title: isId ? 'Hasil Otomatisasi' : 'Automated Output',
      subtitle: 'Google Docs: Dokumen_Hasil',
      image: '/projects/translation/translation-output-docs.jpg',
    },
  ];

  return (
    <div className="space-y-16 py-8">
      {/* 4-Stage Visual Telemetry Navigation Bar */}
      <div className="p-5 sm:p-6 rounded-2xl border border-steel-midnight bg-navy-surface/30 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-steel-midnight/50 pb-3">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-laser-violet">
              {isId ? 'Visualisasi Pipeline Sistem' : 'System Pipeline Visuals'}
            </span>
            <h4 className="text-sm sm:text-base font-serif text-frost font-medium">
              {isId ? 'Showcase Alur Kerja End-to-End 4 Tahap' : '4-Stage End-to-End Workflow Showcase'}
            </h4>
          </div>
          <span className="text-[11px] font-mono text-silver-muted">
            {isId ? 'Klik frame mana saja untuk melihat resolusi penuh' : 'Click any frame to inspect full-resolution'}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {workflowGallery.map((item) => (
            <div
              key={item.step}
              onClick={() => setActiveImageModal(item.image)}
              className="group relative rounded-xl border border-steel-midnight/80 bg-obsidian-dark overflow-hidden cursor-pointer hover:border-electric-blue transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0a0f1d]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded bg-obsidian/85 backdrop-blur-md text-[9px] font-mono text-arctic-cyan border border-steel-midnight">
                  {item.step}
                </div>
                <div className="absolute inset-0 bg-obsidian/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ZoomIn className="w-4 h-4 text-electric-blue" />
                </div>
              </div>
              <div className="p-2.5">
                <div className="text-xs font-sans font-medium text-frost group-hover:text-electric-blue transition-colors truncate">
                  {item.title}
                </div>
                <div className="text-[10px] font-mono text-silver-muted truncate">
                  {item.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 01. Problem & Key Objectives */}
      <section id="section-problem" className="scroll-mt-24 space-y-6">
        <div className="flex items-center gap-2 font-mono text-xs text-electric-blue uppercase tracking-widest">
          <span>01</span>
          <span className="w-4 h-[1px] bg-electric-blue" />
          <span>{isId ? 'Masalah & Dokumen Input' : 'The Problem & Input Documents'}</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-serif text-frost font-light">
          {isId
            ? 'Penerjemahan teknis manual antar repositori cloud bersifat repetitif, terfragmentasi, dan menyita waktu.'
            : 'Manual technical translation between cloud repositories is repetitive, disjointed, and time-intensive.'}
        </h3>
        <p className="text-silver-ice text-sm sm:text-base leading-relaxed font-sans font-light">
          {project.problem.statement}
        </p>

        {/* Key Challenges Badges */}
        <div className="pt-2">
          <div className="text-xs font-mono text-silver-muted uppercase tracking-wider mb-3">
            {isId ? 'Kendala Utama yang Diselesaikan' : 'Core Bottlenecks Addressed'}
          </div>
          <div className="flex flex-wrap gap-2.5">
            {project.problem.challenges.map((challenge, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-full border border-steel-midnight bg-navy-surface/40 text-xs text-silver-ice font-sans"
              >
                {challenge}
              </span>
            ))}
          </div>
        </div>

        {/* 📷 Real Screenshot 2: Input Documents in Google Drive */}
        <div className="p-4 sm:p-6 rounded-2xl border border-steel-midnight bg-obsidian-dark space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-silver-muted">
            <span className="text-electric-blue uppercase tracking-wider flex items-center gap-1.5 font-semibold">
              <ImageIcon className="w-4 h-4" />
              {isId ? '2. Dokumen Masuk (Google Drive: Dokumen_Masuk)' : '2. Input Documents (Google Drive: Dokumen_Masuk)'}
            </span>
            <span className="text-[11px] text-silver-muted hidden sm:inline">Figure 2.0</span>
          </div>

          <div
            onClick={() => setActiveImageModal('/projects/translation/translation-input-docs.jpg')}
            className="group relative rounded-xl overflow-hidden border border-steel-midnight bg-[#080d18] cursor-pointer"
          >
            <img
              src="/projects/translation/translation-input-docs.jpg"
              alt="Google Drive Input Documents"
              className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-obsidian/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-mono text-white">
              <ZoomIn className="w-4 h-4 text-electric-blue" />
              <span>{isId ? 'Klik untuk melihat resolusi penuh' : 'Click to view high-resolution'}</span>
            </div>
          </div>
          <p className="text-[11px] font-sans text-silver-muted leading-relaxed">
            {isId
              ? 'Dokumen PDF target yang dimonitor di direktori Google Drive: '
              : 'Target PDF documents monitored in Google Drive directory: '}
            <code className="text-frost">The Charming Crystal Ball.pdf</code>, <code className="text-frost">The Colour of Love.pdf</code>, {isId ? 'dan' : 'and'} <code className="text-frost">Ten Hours.pdf</code>.
          </p>
        </div>
      </section>

      {/* 02. My Documented Contribution */}
      <section id="section-contribution" className="scroll-mt-24 space-y-6 pt-8 border-t border-steel-midnight/50">
        <div className="flex items-center gap-2 font-mono text-xs text-laser-violet uppercase tracking-widest">
          <span>02</span>
          <span className="w-4 h-[1px] bg-laser-violet" />
          <span>{isId ? 'Kontribusi Terdokumentasi Saya' : 'My Documented Contribution'}</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-serif text-frost font-light">
          {isId ? 'Rekayasa & Integrasi Alur Kerja Mandiri' : 'Independent Workflow Engineering & Integration'}
        </h3>

        <div className="p-4 rounded-lg border border-steel-midnight bg-obsidian-dark text-xs text-silver-muted leading-relaxed">
          <span className="text-icy-lilac font-mono uppercase block mb-1">
            {isId ? 'Kepemilikan Arsitektur:' : 'Architecture Ownership:'}
          </span>
          {isId
            ? 'Proyek ini digagas, dirancang, dibangun, dan diuji secara independen oleh saya sendiri. Saya mengonfigurasi lingkungan n8n, mengintegrasikan Google Cloud API, menyusun system prompt untuk Google Gemini, dan memverifikasi kualitas terjemahan akhir di seluruh dokumen pengujian.'
            : 'This project was independently conceived, designed, built, and tested. I configured the n8n environment, integrated Google Cloud APIs, structured the system prompts for Google Gemini, and verified the output translation quality across test documents.'}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {project.myContribution.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-steel-midnight bg-navy-surface/30 flex items-start gap-3"
            >
              <CheckCircle2 className="w-4 h-4 text-electric-blue flex-shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-silver-ice font-sans leading-relaxed">
                {item}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 03. Workflow Architecture & Interactive Node Explorer */}
      <section id="section-process" className="scroll-mt-24 space-y-6 pt-8 border-t border-steel-midnight/50">
        <div className="flex items-center gap-2 font-mono text-xs text-arctic-cyan uppercase tracking-widest">
          <span>03</span>
          <span className="w-4 h-[1px] bg-arctic-cyan" />
          <span>{isId ? 'Arsitektur Workflow & Graf Node' : 'Workflow Architecture & Node Graph'}</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-serif text-frost font-light">
          {isId ? 'Pipeline Berbasis Event 7-Tahap' : '7-Stage Event-Driven Pipeline'}
        </h3>
        <p className="text-silver-ice text-sm sm:text-base leading-relaxed font-sans font-light">
          {isId
            ? 'Pipeline beroperasi secara sekuensial sebagai Directed Acyclic Graph (DAG) di n8n, menangani kueri pemicu terjadwal, pengunduhan biner, ekstraksi teks, translasi penjaga konteks, dan pemformatan dokumen tujuan.'
            : 'The pipeline operates sequentially as a Directed Acyclic Graph (DAG) in n8n, handling scheduled trigger queries, binary downloads, text parsing, context-preserving translation, and destination doc formatting.'}
        </p>

        {/* 📷 Real Screenshot 2: Full n8n Workflow Canvas */}
        <div className="p-4 sm:p-6 rounded-2xl border border-steel-midnight bg-obsidian-dark space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-silver-muted">
            <span className="text-laser-violet uppercase tracking-wider flex items-center gap-1.5 font-semibold">
              <ImageIcon className="w-4 h-4" />
              {isId ? '1. Alur Kerja Otomasi Translasi Dokumen AI' : '1. AI Document Translation Automation Workflow'}
            </span>
            <span className="text-[11px] text-silver-muted hidden sm:inline">Figure 1.0</span>
          </div>

          <div
            onClick={() => setActiveImageModal('/projects/translation/translation-workflow.jpg')}
            className="group relative rounded-xl overflow-hidden border border-steel-midnight bg-[#080d18] cursor-pointer"
          >
            <img
              src="/projects/translation/translation-workflow.jpg"
              alt="n8n Workflow Editor Diagram"
              className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-obsidian/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-mono text-white">
              <ZoomIn className="w-4 h-4 text-laser-violet" />
              <span>{isId ? 'Klik untuk melihat resolusi penuh' : 'Click to view high-resolution'}</span>
            </div>
          </div>
          <p className="text-[11px] font-sans text-silver-muted leading-relaxed">
            {isId
              ? 'Orkestrasi 7 node lengkap: Schedule Trigger → Search files and folders → Download file → Extract from File (PDF) → AI Agent (Google Gemini Chat Model) → Create a document1 → Update a document.'
              : 'The full 7-node orchestration: Schedule Trigger → Search files and folders → Download file → Extract from File (PDF) → AI Agent (Google Gemini Chat Model) → Create a document1 → Update a document.'}
          </p>
        </div>

        {/* Interactive n8n Node Map */}
        <div className="p-6 rounded-xl border border-steel-midnight bg-obsidian-dark space-y-6 mt-6">
          <div className="flex items-center justify-between text-xs font-mono text-silver-muted uppercase tracking-wider">
            <span>{isId ? 'Inspektur Node Alur Kerja Interaktif' : 'Interactive Workflow Node Inspector'}</span>
            <span className="text-electric-blue">
              {isId ? 'Klik node mana saja untuk memeriksa konfigurasinya' : 'Click any node to inspect configuration'}
            </span>
          </div>

          {/* Horizontal / Step-by-Step Node Chain */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {nodes.map((n, idx) => {
              const isSelected = activeNodeIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveNodeIndex(idx)}
                  className={`p-3 rounded-lg border text-left transition-all relative flex flex-col justify-between h-28 ${
                    isSelected
                      ? 'border-electric-blue bg-navy-surface shadow-signal-glow scale-[1.02]'
                      : 'border-steel-midnight bg-navy-deep/40 hover:border-steel-midnight/90'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-electric-blue">
                      0{idx + 1}
                    </span>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-arctic-cyan animate-pulse" />
                    )}
                  </div>
                  <div className="font-sans font-medium text-xs text-frost line-clamp-2">
                    {n.node}
                  </div>
                  <div className="text-[10px] font-mono text-silver-muted truncate">
                    {idx === 4 ? 'Gemini AI' : (isId ? 'Pipeline' : 'Pipeline')}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Node Detail Card */}
          {selectedNode && (
            <div className="p-4 sm:p-5 rounded-xl border border-steel-midnight bg-navy-surface/40 space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-steel-midnight/50 pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-electric-blue font-bold">Node 0{activeNodeIndex + 1}:</span>
                  <span className="text-frost font-sans font-semibold text-sm">
                    {selectedNode.node}
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded bg-electric-blue/10 text-arctic-cyan text-[10px]">
                  {selectedNode.purpose}
                </span>
              </div>
              <div className="pt-2 text-silver-ice font-sans">
                <span className="text-silver-muted font-mono block text-xs mb-1">
                  {isId ? 'Konfigurasi & Alur Data Node Aktif:' : 'Active Node Configuration & Dataflow:'}
                </span>
                <p className="font-mono text-xs text-icy-lilac bg-obsidian-dark p-3 rounded border border-steel-midnight">
                  {selectedNode.configuration}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Prompt Engineering Code Viewer */}
        {project.implementation.codeSnippet && (
          <div className="space-y-2 pt-4">
            <div className="text-xs font-mono text-silver-muted uppercase tracking-wider">
              {isId ? 'Instruksi Sistem Gemini & Aturan Terjemahan' : 'Gemini System Instruction & Translation Rules'}
            </div>
            <CodeViewer
              code={project.implementation.codeSnippet.code}
              filename={project.implementation.codeSnippet.filename}
              language={project.implementation.codeSnippet.language}
            />
          </div>
        )}
      </section>

      {/* 04. Results & Verification */}
      <section id="section-results" className="scroll-mt-24 space-y-6 pt-8 border-t border-steel-midnight/50">
        <div className="flex items-center gap-2 font-mono text-xs text-electric-blue uppercase tracking-widest">
          <span>04</span>
          <span className="w-4 h-[1px] bg-electric-blue" />
          <span>{isId ? 'Hasil & Verifikasi Eksekusi' : 'Results & Execution Verification'}</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-serif text-frost font-light">
          {isId
            ? 'Ingesti Otomatis Menuju Output Bahasa Indonesia yang Rapi'
            : 'Automated Ingestion to Formatted Indonesian Output'}
        </h3>

        {/* 📷 Real Screenshot 3: AI Translation Execution Log & Output */}
        <div className="p-4 sm:p-6 rounded-2xl border border-steel-midnight bg-obsidian-dark space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-silver-muted">
            <span className="text-arctic-cyan uppercase tracking-wider flex items-center gap-1.5 font-semibold">
              <ImageIcon className="w-4 h-4" />
              {isId
                ? '3. Eksekusi Translasi AI (Telemetri & Log Langsung)'
                : '3. AI Translation Execution (Live Telemetry & Logs)'}
            </span>
            <span className="text-[11px] text-silver-muted hidden sm:inline">Figure 3.0</span>
          </div>

          <div
            onClick={() => setActiveImageModal('/projects/translation/translation-execution.jpg')}
            className="group relative rounded-xl overflow-hidden border border-steel-midnight bg-[#080d18] cursor-pointer"
          >
            <img
              src="/projects/translation/translation-execution.jpg"
              alt="n8n Execution Log and Gemini Output"
              className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-obsidian/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-mono text-white">
              <ZoomIn className="w-4 h-4 text-arctic-cyan" />
              <span>{isId ? 'Klik untuk melihat resolusi penuh' : 'Click to view high-resolution'}</span>
            </div>
          </div>
          <p className="text-[11px] font-sans text-silver-muted leading-relaxed">
            {isId
              ? 'Log eksekusi memverifikasi penyelesaian end-to-end dalam 30,601 detik (node AI Agent: 18,04 detik, 4.966 token terpakai) dengan aliran output bahasa Indonesia yang alami dan profesional.'
              : 'Execution logs verify end-to-end completion in 30.601s (AI Agent node: 18.04s, 4,966 tokens consumed) with natural, professional Indonesian output stream.'}
          </p>
        </div>

        {/* 📷 Real Screenshot 4: Output Documents in Google Drive */}
        <div className="p-4 sm:p-6 rounded-2xl border border-steel-midnight bg-obsidian-dark space-y-3 mt-6">
          <div className="flex items-center justify-between text-xs font-mono text-silver-muted">
            <span className="text-electric-blue uppercase tracking-wider flex items-center gap-1.5 font-semibold">
              <ImageIcon className="w-4 h-4" />
              {isId
                ? '4. Hasil Terjemahan Otomatis (Google Drive: Dokumen_Hasil_Terjemahan)'
                : '4. Automated Translation Output (Google Drive: Dokumen_Hasil_Terjemahan)'}
            </span>
            <span className="text-[11px] text-silver-muted hidden sm:inline">Figure 4.0</span>
          </div>

          <div
            onClick={() => setActiveImageModal('/projects/translation/translation-output-docs.jpg')}
            className="group relative rounded-xl overflow-hidden border border-steel-midnight bg-[#080d18] cursor-pointer"
          >
            <img
              src="/projects/translation/translation-output-docs.jpg"
              alt="Google Drive Output Documents"
              className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-obsidian/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-mono text-white">
              <ZoomIn className="w-4 h-4 text-electric-blue" />
              <span>{isId ? 'Klik untuk melihat resolusi penuh' : 'Click to view high-resolution'}</span>
            </div>
          </div>
          <p className="text-[11px] font-sans text-silver-muted leading-relaxed">
            {isId
              ? 'Direktori target tujuan terverifikasi dengan 3 Google Docs yang baru terbuat: '
              : 'Target destination directory verified with 3 newly created Google Docs: '}
            <code className="text-frost">Terjemahan_Ten Hours</code>, <code className="text-frost">Terjemahan_The Colour of Love</code>, {isId ? 'dan' : 'and'} <code className="text-frost">Terjemahan_The Charming Crystal Ball</code>.
          </p>
        </div>

        {/* Honest Limitations */}
        <div className="p-5 rounded-xl border border-steel-midnight bg-navy-surface/30 space-y-3 mt-6">
          <div className="text-xs font-mono text-icy-lilac uppercase tracking-wider flex items-center gap-2">
            <Sliders className="w-3.5 h-3.5" />
            <span>{isId ? 'Batasan Operasional & Pembelajaran' : 'Operational Constraints & Lessons Learned'}</span>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-silver-muted font-sans list-disc list-inside">
            {project.results.honestLimitations.map((lim, idx) => (
              <li key={idx} className="leading-relaxed">
                {lim}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 05. Documentation and Resources */}
      <section id="section-resources" className="scroll-mt-24 space-y-6 pt-8 border-t border-steel-midnight/50">
        <div className="flex items-center gap-2 font-mono text-xs text-arctic-cyan uppercase tracking-widest">
          <span>05</span>
          <span className="w-4 h-[1px] bg-arctic-cyan" />
          <span>{isId ? 'Dokumentasi & Artefak Cetak Biru' : 'Documentation & Blueprint Artifacts'}</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-serif text-frost font-light">
          {isId ? 'Ekspor Workflow & Catatan Konfigurasi' : 'Workflow Export & Configuration Records'}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {project.resources.artifacts.map((art, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-steel-midnight bg-obsidian-dark hover:border-electric-blue/40 transition-colors"
            >
              <div className="flex items-center justify-between text-xs font-mono text-silver-muted mb-2">
                <span className="uppercase text-electric-blue">{art.type}</span>
                <span className="text-[10px] text-silver-muted">{art.status}</span>
              </div>
              <h4 className="text-sm font-sans font-medium text-frost">{art.title}</h4>
              <p className="mt-1 text-xs text-silver-muted font-sans leading-relaxed">
                {art.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* High-Resolution Fullscreen Image Viewer Modal */}
      {activeImageModal && (
        <div
          role="dialog"
          onClick={() => setActiveImageModal(null)}
          className="fixed inset-0 z-50 bg-obsidian-dark/95 backdrop-blur-xl p-4 sm:p-8 flex items-center justify-center cursor-zoom-out animate-fadeIn"
        >
          <div className="relative max-w-5xl max-h-[90vh] rounded-2xl overflow-hidden border border-steel-midnight bg-obsidian p-2 shadow-2xl">
            <img
              src={activeImageModal}
              alt="n8n Translation Diagram High Resolution"
              className="w-full h-full object-contain max-h-[85vh] rounded-xl"
            />
            <div className="absolute top-4 right-4 bg-obsidian/80 px-3 py-1 rounded-full text-xs font-mono text-silver-ice border border-steel-midnight">
              {isId ? 'Klik di mana saja untuk menutup' : 'Click anywhere to close'}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
