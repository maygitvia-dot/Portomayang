import React, { useState } from 'react';
import { ProjectData } from '../../types/portfolio';
import { CodeViewer } from '../ui/CodeViewer';
import { ScovisSimulator } from './ScovisSimulator';
import { ScovisMLOps } from './ScovisMLOps';
import { useLanguage } from '../../context/LanguageContext';
import {
  AlertCircle,
  CheckCircle2,
  Image as ImageIcon,
  Sliders,
  ZoomIn
} from 'lucide-react';

interface ScovisCaseStudyProps {
  project: ProjectData;
  activeSection?: string;
}

export const ScovisCaseStudy: React.FC<ScovisCaseStudyProps> = ({
  project,
}) => {
  const [activeImageModal, setActiveImageModal] = useState<string | null>(null);
  const { lang } = useLanguage();
  const isId = lang === 'id';

  return (
    <div className="space-y-16 py-8">
      {/* 01. Problem & Key Challenges */}
      <section id="section-problem" className="scroll-mt-24 space-y-6">
        <div className="flex items-center gap-2 font-mono text-xs text-electric-blue uppercase tracking-widest">
          <span>01</span>
          <span className="w-4 h-[1px] bg-electric-blue" />
          <span>{isId ? 'Masalah & Tujuan Penelitian' : 'The Problem & Objectives'}</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-serif text-frost font-light">
          {isId
            ? 'Evaluasi manual jawaban esai tulisan tangan memakan waktu, subjektif, dan tidak konsisten.'
            : 'Manual evaluation of handwritten essay answers is time-consuming, subjective, and inconsistent.'}
        </h3>
        <p className="text-silver-ice text-sm sm:text-base leading-relaxed font-sans font-light">
          {project.problem.statement}
        </p>

        {/* Key Challenges Badges */}
        <div className="pt-2">
          <div className="text-xs font-mono text-silver-muted uppercase tracking-wider mb-3">
            {isId ? 'Tantangan Utama yang Dihadapi' : 'Key Challenges Addressed'}
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

        {/* Dataset Context Callout */}
        <div className="p-4 sm:p-5 rounded-xl border border-steel-midnight bg-navy-deep/40 font-mono text-xs">
          <div className="text-electric-blue font-semibold uppercase tracking-wider mb-2">
            {isId ? 'Konteks & Sumber Dataset' : 'Dataset Context & Source'}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-silver-ice font-sans pt-1">
            <div>
              <span className="block text-frost font-mono text-base font-medium">1,560</span>
              <span className="text-silver-muted text-xs">{isId ? 'Sampel Citra' : 'Image Samples'}</span>
            </div>
            <div>
              <span className="block text-frost font-mono text-base font-medium">{isId ? '65 Mahasiswa' : '65 Students'}</span>
              <span className="text-silver-muted text-xs">{isId ? 'Variasi Tulisan Tangan' : 'Handwriting Variance'}</span>
            </div>
            <div>
              <span className="block text-frost font-mono text-base font-medium">{isId ? '4 Soal Ujian' : '4 Exam Questions'}</span>
              <span className="text-silver-muted text-xs">{isId ? 'Seksi a–f (24 Seksi)' : 'Sections a–f (24 Sections)'}</span>
            </div>
            <div>
              <span className="block text-frost font-mono text-base font-medium">{isId ? 'Steganografi' : 'Steganography'}</span>
              <span className="text-silver-muted text-xs">{isId ? 'Ujian Mata Kuliah' : 'Course Examination'}</span>
            </div>
          </div>
        </div>

        {/* 📷 Real Diagram: Dataset & Preprocessing Pipeline */}
        <div className="p-4 sm:p-6 rounded-2xl border border-steel-midnight bg-obsidian-dark space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-silver-muted">
            <span className="text-electric-blue uppercase tracking-wider flex items-center gap-1.5 font-semibold">
              <ImageIcon className="w-4 h-4" />
              {isId
                ? 'Struktur Dataset & Sampel Preprocessing Tulisan Tangan'
                : 'Dataset Structure & Handwriting Preprocessing Sample'}
            </span>
            <span className="text-[11px] text-silver-muted hidden sm:inline">Figure 1.0</span>
          </div>

          <div
            onClick={() => setActiveImageModal('/projects/scovis/scovis-dataset-preprocessing.jpg')}
            className="group relative rounded-xl overflow-hidden border border-steel-midnight bg-[#080d18] cursor-pointer"
          >
            <img
              src="/projects/scovis/scovis-dataset-preprocessing.jpg"
              alt="SCOVIS Dataset Structure and Preprocessing"
              className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-obsidian/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-mono text-white">
              <ZoomIn className="w-4 h-4 text-electric-blue" />
              <span>{isId ? 'Klik untuk melihat resolusi penuh' : 'Click to view high-resolution'}</span>
            </div>
          </div>
          <p className="text-[11px] font-sans text-silver-muted leading-relaxed">
            {isId
              ? 'Akuisisi data mencakup 24 seksi ujian (4 Soal × 6 Seksi) yang menghasilkan 1.560 rekaman citra, dievaluasi dengan rasio 80:20 train/validation split. Panel bawah menampilkan potongan tulisan tangan mahasiswa nyata sebelum dan sesudah filtering OpenCV adaptif.'
              : 'Data acquisition across 24 exam sections (4 Questions × 6 Sections) resulting in 1,560 image records, evaluated with an 80:20 train/validation split. Bottom panel displays actual student handwriting crop before and after adaptive OpenCV filtering.'}
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
          {isId ? 'Fokus individual dalam riset tim akademik' : 'Individual focus within the team research project'}
        </h3>

        {/* Honest role boundary card */}
        <div className="p-4 rounded-lg border border-steel-midnight bg-obsidian-dark text-xs text-silver-muted leading-relaxed">
          <span className="text-icy-lilac font-mono uppercase block mb-1">
            {isId ? 'Integritas Cakupan Riset:' : 'Scope Integrity:'}
          </span>
          {isId
            ? 'SCOVIS dikembangkan secara kolaboratif bersama tim akademik (Kelompok 6). Kontribusi teknis terdokumentasi saya berpusat pada pengumpulan citra, anotasi dataset, pra-pemrosesan khusus model, perancangan & evaluasi arsitektur deep learning MobileNetV2 + BiLSTM, serta skrip inferensi. Saya tidak mengklaim pembuatan independen dari keseluruhan web app backend, basis data, atau kerangka UI.'
            : 'SCOVIS was developed collaboratively with an academic team. My documented technical contributions were concentrated on image collection, dataset labeling, model-specific preprocessing, developing and evaluating the MobileNetV2 + BiLSTM deep learning architecture, and inference scripting. I do not claim independent creation of the full web app backend, database, or UI framework.'}
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

      {/* 03. Technical Process & Pipeline */}
      <section id="section-process" className="scroll-mt-24 space-y-6 pt-8 border-t border-steel-midnight/50">
        <div className="flex items-center gap-2 font-mono text-xs text-arctic-cyan uppercase tracking-widest">
          <span>03</span>
          <span className="w-4 h-[1px] bg-arctic-cyan" />
          <span>{isId ? 'Proses Teknis & Arsitektur' : 'Technical Process & Architecture'}</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-serif text-frost font-light">
          {isId ? 'Arsitektur Hibrida Konvolusional & Rekuren' : 'Hybrid Convolutional & Recurrent Architecture'}
        </h3>
        <p className="text-silver-ice text-sm sm:text-base leading-relaxed font-sans font-light">
          {project.technicalProcess.overview}
        </p>

        {/* 📷 Real Diagram: End-to-End System Pipeline */}
        <div className="p-4 sm:p-6 rounded-2xl border border-steel-midnight bg-obsidian-dark space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-silver-muted">
            <span className="text-electric-blue uppercase tracking-wider flex items-center gap-1.5 font-semibold">
              <ImageIcon className="w-4 h-4" />
              {isId ? 'Alur Penilaian Sistem End-to-End' : 'End-to-End System Assessment Flow'}
            </span>
            <span className="text-[11px] text-silver-muted hidden sm:inline">Figure 2.0</span>
          </div>

          <div
            onClick={() => setActiveImageModal('/projects/scovis/scovis-pipeline.jpg')}
            className="group relative rounded-xl overflow-hidden border border-steel-midnight bg-[#080d18] cursor-pointer"
          >
            <img
              src="/projects/scovis/scovis-pipeline.jpg"
              alt="SCOVIS System Architecture Pipeline"
              className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-obsidian/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-mono text-white">
              <ZoomIn className="w-4 h-4 text-electric-blue" />
              <span>{isId ? 'Klik untuk melihat resolusi penuh' : 'Click to view high-resolution'}</span>
            </div>
          </div>
          <p className="text-[11px] font-sans text-silver-muted leading-relaxed">
            {isId
              ? 'Pipeline inferensi lima tahap tanpa OCR perantara: Citra Jawaban Masuk → Preprocessing 24 Seksi → Ekstraksi Fitur CNN-BiLSTM → Rekomendasi Skor AI → Tinjauan Akhir Dosen (Human-in-the-Loop).'
              : 'Five-stage inference pipeline without intermediate OCR: Answer Image Input → 24 Section Preprocessing → CNN-BiLSTM Feature Extraction → AI Score Recommendation → Lecturer Final Human-in-the-Loop Review.'}
          </p>
        </div>

        {/* 📷 Real Diagram: 10-Layer MobileNetV2 + BiLSTM Architecture */}
        <div className="p-4 sm:p-6 rounded-2xl border border-steel-midnight bg-obsidian-dark space-y-3 mt-6">
          <div className="flex items-center justify-between text-xs font-mono text-silver-muted">
            <span className="text-laser-violet uppercase tracking-wider flex items-center gap-1.5 font-semibold">
              <ImageIcon className="w-4 h-4" />
              {isId
                ? 'Arsitektur Neural Network 10-Tahap (MobileNetV2 + BiLSTM)'
                : '10-Stage Neural Network Architecture (MobileNetV2 + BiLSTM)'}
            </span>
            <span className="text-[11px] text-silver-muted hidden sm:inline">Figure 3.0</span>
          </div>

          <div
            onClick={() => setActiveImageModal('/projects/scovis/scovis-architecture.jpg')}
            className="group relative rounded-xl overflow-hidden border border-steel-midnight bg-[#080d18] cursor-pointer"
          >
            <img
              src="/projects/scovis/scovis-architecture.jpg"
              alt="MobileNetV2 and BiLSTM Layer Diagram"
              className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-obsidian/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-mono text-white">
              <ZoomIn className="w-4 h-4 text-laser-violet" />
              <span>{isId ? 'Klik untuk melihat resolusi penuh' : 'Click to view high-resolution'}</span>
            </div>
          </div>
          <p className="text-[11px] font-sans text-silver-muted leading-relaxed">
            {isId
              ? 'Alur jaringan detail: Input (224×224×3) → Backbone MobileNetV2 pra-latih (7×7×1280) → Bottleneck Conv2D 1×1 (7×7×256) → Reshape spasial (49×256) → Ekstraktor sekuens BiLSTM 2-layer (128 unit/arah) dengan Dropout → Dense 128 (reg L2 = 10⁻⁴) → Klasifikasi Softmax.'
              : 'Detailed network flow: Input (224×224×3) → Pretrained MobileNetV2 backbone (7×7×1280) → 1×1 Conv2D Bottleneck (7×7×256) → Spatial Reshape (49×256) → 2-layer BiLSTM sequence extractor (128 units/dir) with Dropouts → Dense 128 (L2 reg = 10⁻⁴) → Softmax Classification.'}
          </p>
        </div>

        {/* Python Inference Code Snippet */}
        {project.implementation.codeSnippet && (
          <div className="space-y-2 pt-4">
            <div className="text-xs font-mono text-silver-muted uppercase tracking-wider">
              {isId ? 'Implementasi Inferensi Terdokumentasi' : 'Documented Inference Implementation'}
            </div>
            <CodeViewer
              code={project.implementation.codeSnippet.code}
              filename={project.implementation.codeSnippet.filename}
              language={project.implementation.codeSnippet.language}
            />
          </div>
        )}
      </section>

      {/* 04. Results & Honest Model Comparison */}
      <section id="section-results" className="scroll-mt-24 space-y-6 pt-8 border-t border-steel-midnight/50">
        <div className="flex items-center gap-2 font-mono text-xs text-electric-blue uppercase tracking-widest">
          <span>04</span>
          <span className="w-4 h-[1px] bg-electric-blue" />
          <span>{isId ? 'Hasil & Evaluasi' : 'Results & Evaluation'}</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-serif text-frost font-light">
          {isId ? 'Tolok Ukur Validasi Lintas Arsitektur' : 'Validation Benchmarks Across Architectures'}
        </h3>

        {/* Explicit Validation Notice Banner */}
        <div className="p-4 rounded-xl border border-laser-violet/40 bg-laser-violet/10 text-xs font-sans text-frost flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-icy-lilac flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-mono font-semibold uppercase text-icy-lilac block">
              {isId ? 'Catatan Hasil Validasi' : 'Validation Result Notice'}
            </span>
            {project.results.validationNotice}
          </div>
        </div>

        {/* 📷 Real Chart 1: Mean Validation Performance Across 24 Sections */}
        <div className="p-4 sm:p-6 rounded-2xl border border-steel-midnight bg-obsidian-dark space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-silver-muted">
            <span className="text-arctic-cyan uppercase tracking-wider flex items-center gap-1.5 font-semibold">
              <ImageIcon className="w-4 h-4" />
              {isId
                ? 'Performa Rata-rata Validasi Lintas 24 Seksi (Split Tetap 80:20)'
                : 'Mean Validation Performance Across 24 Sections (Fixed 80:20 Split)'}
            </span>
            <span className="text-[11px] text-silver-muted hidden sm:inline">{isId ? 'Grafik Benchmark' : 'Benchmark Chart'}</span>
          </div>

          <div
            onClick={() => setActiveImageModal('/projects/scovis/scovis-validation-performance.jpg')}
            className="group relative rounded-xl overflow-hidden border border-steel-midnight bg-[#080d18] cursor-pointer"
          >
            <img
              src="/projects/scovis/scovis-validation-performance.jpg"
              alt="Validation Performance Across Architectures"
              className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-obsidian/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-mono text-white">
              <ZoomIn className="w-4 h-4 text-arctic-cyan" />
              <span>{isId ? 'Klik untuk melihat resolusi penuh' : 'Click to view high-resolution'}</span>
            </div>
          </div>
          <p className="text-[11px] font-sans text-silver-muted leading-relaxed">
            {isId
              ? 'Metrik validasi lintas backbone: MobileNetV2-BiLSTM meraih Akurasi Validasi Rata-rata tertinggi (55,45%) dan Weighted F1 tertinggi (0,5191), sedangkan InceptionV3-BiLSTM meraih Macro F1 tertinggi (0,3369).'
              : 'Validation metrics across backbones: MobileNetV2-BiLSTM achieved the highest Mean Validation Accuracy (55.45%) and highest Weighted F1 (0.5191), while InceptionV3-BiLSTM achieved the highest Macro F1 (0.3369).'}
          </p>
        </div>

        {/* 📷 Real Chart 2: Train/Test Ratio Accuracy Benchmark */}
        <div className="p-4 sm:p-6 rounded-2xl border border-steel-midnight bg-obsidian-dark space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-silver-muted">
            <span className="text-electric-blue uppercase tracking-wider flex items-center gap-1.5 font-semibold">
              <ImageIcon className="w-4 h-4" />
              {isId
                ? 'Akurasi Validasi untuk Berbagai Rasio Pembagian Dataset'
                : 'Validation Accuracy for Different Dataset Split Ratios'}
            </span>
            <span className="text-[11px] text-silver-muted hidden sm:inline">{isId ? 'Benchmark Rasio' : 'Ratio Benchmark'}</span>
          </div>

          <div
            onClick={() => setActiveImageModal('/projects/scovis/scovis-ratio-benchmark.jpg')}
            className="group relative rounded-xl overflow-hidden border border-steel-midnight bg-[#080d18] cursor-pointer"
          >
            <img
              src="/projects/scovis/scovis-ratio-benchmark.jpg"
              alt="Validation Accuracy across Ratios"
              className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-obsidian/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-mono text-white">
              <ZoomIn className="w-4 h-4 text-electric-blue" />
              <span>{isId ? 'Klik untuk melihat resolusi penuh' : 'Click to view high-resolution'}</span>
            </div>
          </div>
          <p className="text-[11px] font-sans text-silver-muted leading-relaxed">
            {isId
              ? 'Pengujian benchmark empiris dari rasio 90:10 (57,14%) hingga 10:90 (39,84%). Rasio 80:20 memberikan keseimbangan statistik paling kokoh (55,45%) untuk model spesifik-seksi.'
              : 'Empirical benchmark testing split ratios from 90:10 (57.14%) down to 10:90 (39.84%). The 80:20 split provided the most robust statistical balance (55.45%) for section-specific models.'}
          </p>
        </div>

        {/* Honest Limitations Section */}
        <div className="p-5 rounded-xl border border-steel-midnight bg-navy-surface/30 space-y-3">
          <div className="text-xs font-mono text-icy-lilac uppercase tracking-wider flex items-center gap-2">
            <Sliders className="w-3.5 h-3.5" />
            <span>{isId ? 'Evaluasi Jujur & Batasan Sistem' : 'Honest Evaluation & System Limitations'}</span>
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

      {/* 05-A. Interactive Pipeline Simulator */}
      <section id="section-simulator" className="scroll-mt-24 space-y-6 pt-8 border-t border-steel-midnight/50">
        <div className="flex items-center gap-2 font-mono text-xs text-laser-violet uppercase tracking-widest">
          <span>05A</span>
          <span className="w-4 h-[1px] bg-laser-violet" />
          <span>{isId ? 'Simulator Inferensi Interaktif' : 'Interactive Inference Simulator'}</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-serif text-frost font-light">
          {isId ? 'Coba Jalankan Pipeline Sendiri' : 'Try the Pipeline Yourself'}
        </h3>
        <ScovisSimulator />
      </section>

      {/* 05-B. Production MLOps Blueprint */}
      <section id="section-mlops" className="scroll-mt-24 space-y-6 pt-8 border-t border-steel-midnight/50">
        <div className="flex items-center gap-2 font-mono text-xs text-arctic-cyan uppercase tracking-widest">
          <span>05B</span>
          <span className="w-4 h-[1px] bg-arctic-cyan" />
          <span>{isId ? 'Cetak Biru Produksi & MLOps' : 'Production & MLOps Blueprint'}</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-serif text-frost font-light">
          {isId ? 'Dari Riset Menuju REST API Siap Produksi' : 'From Research to Production API'}
        </h3>
        <ScovisMLOps />
      </section>

      {/* 06. Documentation and Resources */}
      <section id="section-resources" className="scroll-mt-24 space-y-6 pt-8 border-t border-steel-midnight/50">
        <div className="flex items-center gap-2 font-mono text-xs text-arctic-cyan uppercase tracking-widest">
          <span>06</span>
          <span className="w-4 h-[1px] bg-arctic-cyan" />
          <span>{isId ? 'Dokumentasi & Artefak' : 'Documentation & Artifacts'}</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-serif text-frost font-light">
          {isId ? 'Artefak Proyek & Catatan Teknis' : 'Project Artifacts & Technical Records'}
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
              alt="SCOVIS Diagram High Resolution"
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
