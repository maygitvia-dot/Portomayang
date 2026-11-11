import React, { createContext, useContext, useState, useCallback } from 'react';

export type Language = 'en' | 'id';

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const useLanguage = (): LanguageContextType => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};

// ──────────────────────────────────────────────────────────
//  TRANSLATIONS  –  EN / ID
// ──────────────────────────────────────────────────────────
const translations: Record<string, Record<Language, string>> = {
  // ── Navbar ──
  'nav.about': { en: 'ABOUT', id: 'TENTANG' },
  'nav.projects': { en: 'PROJECTS', id: 'PROYEK' },
  'nav.skills': { en: 'SKILLS', id: 'KEAHLIAN' },
  'nav.experience': { en: 'EXPERIENCE', id: 'PENGALAMAN' },
  'nav.contact': { en: 'CONTACT', id: 'KONTAK' },
  'nav.connect': { en: 'CONNECT', id: 'HUBUNGI' },
  'nav.downloadCv': { en: 'Download CV', id: 'Unduh CV' },
  'nav.openToWork': { en: 'Open to Work', id: 'Terbuka untuk Bekerja' },
  'nav.letsConnect': { en: "LET'S CONNECT →", id: 'MARI TERHUBUNG →' },
  'nav.openToWorkFull': { en: 'Open to Work · Jakarta / Hybrid / Remote', id: 'Terbuka untuk Bekerja · Jakarta / Hybrid / Remote' },
  'nav.subtitle': { en: 'AI / ML Engineer', id: 'AI / ML Engineer' },

  // ── Hero ──
  'hero.headline1': { en: 'Intelligence,', id: 'Kecerdasan,' },
  'hero.headline2': { en: 'with intention.', id: 'dengan niat.' },
  'hero.subtitle': { en: 'Building practical AI solutions through machine learning, computer vision, and thoughtful engineering.', id: 'Membangun solusi AI praktis melalui machine learning, computer vision, dan teknik yang penuh pertimbangan.' },
  'hero.downloadResume': { en: 'Download Resume', id: 'Unduh Resume' },
  'hero.exploreWork': { en: 'Explore My Work', id: 'Lihat Karya Saya' },
  'hero.signal': { en: 'SIGNAL → INTELLIGENCE', id: 'SINYAL → KECERDASAN' },
  'hero.university': { en: 'Telkom University S1 Engineering', id: 'S1 Teknik Telkom University' },
  'hero.location': { en: 'Bandung, Indonesia', id: 'Bandung, Indonesia' },
  'hero.portfolio': { en: 'PORTFOLIO / 2026', id: 'PORTOFOLIO / 2026' },
  'hero.scrollExplore': { en: 'SCROLL TO EXPLORE', id: 'GULIR UNTUK EKSPLORASI' },
  'hero.orbitalSignal': { en: 'ORBITAL SIGNAL', id: 'SINYAL ORBITAL' },
  'hero.portrait3d': { en: '3D PORTRAIT', id: 'POTRET 3D' },

  // ── About ──
  'about.label': { en: 'SPLIT NARRATIVE', id: 'NARASI TERBAGI' },
  'about.title': { en: 'The Thinking Behind the Work', id: 'Pemikiran di Balik Karya' },
  'about.description': { en: 'Connecting telecommunications signal rigor with applied artificial intelligence and machine learning.', id: 'Menghubungkan kekuatan sinyal telekomunikasi dengan kecerdasan buatan dan machine learning terapan.' },
  'about.tab.me': { en: 'ABOUT ME', id: 'TENTANG SAYA' },
  'about.tab.approach': { en: 'MY APPROACH', id: 'PENDEKATAN SAYA' },
  'about.tab.beyond': { en: 'BEYOND TECH', id: 'DI LUAR TEKNIS' },
  'about.me.title': { en: 'Turning curiosity into real-world solutions.', id: 'Mengubah keingintahuan menjadi solusi nyata.' },
  'about.me.p1': { en: "I'm Mayang, an AI / Machine Learning Engineer with an S1 degree in Telecommunications Engineering from Telkom University. I explore how artificial intelligence can solve concrete challenges—from assessing handwritten exams with computer vision to orchestrating autonomous document processing pipelines.", id: 'Saya Mayang, seorang AI / Machine Learning Engineer lulusan S1 Teknik Telekomunikasi Telkom University. Saya mengeksplorasi bagaimana kecerdasan buatan dapat menyelesaikan tantangan nyata—dari menilai ujian tulisan tangan dengan computer vision hingga mengorkestrasi pipeline pemrosesan dokumen otomatis.' },
  'about.me.p2': { en: 'My telecommunications foundation provides an intuitive understanding of signal noise, filtering, data transformations, and system constraints. In AI, these map directly to feature extraction, tensor operations, and model deployment reality.', id: 'Fondasi telekomunikasi saya memberikan pemahaman intuitif tentang noise sinyal, filtering, transformasi data, dan batasan sistem. Dalam AI, ini langsung terhubung ke ekstraksi fitur, operasi tensor, dan realitas deployment model.' },
  'about.approach.title': { en: 'Precision, baseline first, verified metrics.', id: 'Presisi, baseline dulu, metrik terverifikasi.' },
  'about.approach.p1': { en: 'I approach machine learning with engineering discipline: understand the raw data first, test preprocessing hypotheses thoroughly, and report validation results transparently without inflating claims.', id: 'Saya mendekati machine learning dengan disiplin teknik: pahami data mentah terlebih dahulu, uji hipotesis preprocessing secara menyeluruh, dan laporkan hasil validasi secara transparan tanpa melebih-lebihkan klaim.' },
  'about.approach.dataFocus': { en: 'DATA FOCUS', id: 'FOKUS DATA' },
  'about.approach.dataDesc': { en: '1,560 samples curated & hand-labeled in SCOVIS.', id: '1.560 sampel dikurasi & dilabeli manual di SCOVIS.' },
  'about.approach.automation': { en: 'AUTOMATION', id: 'OTOMASI' },
  'about.approach.automationDesc': { en: 'End-to-end 7-node DAG orchestration in n8n.', id: 'Orkestrasi DAG 7-node end-to-end di n8n.' },
  'about.beyond.title': { en: 'Leadership, communication, and team cadence.', id: 'Kepemimpinan, komunikasi, dan irama tim.' },
  'about.beyond.p1': { en: 'Beyond algorithms, I value clear communication and organizational accountability. Serving as General Treasurer for INTI PARLEMEN DPA HMTT taught me fiscal governance, transparency, and collaboration with diverse stakeholders.', id: 'Di luar algoritma, saya menghargai komunikasi yang jelas dan akuntabilitas organisasi. Menjabat sebagai Bendahara Umum INTI PARLEMEN DPA HMTT mengajarkan saya tata kelola fiskal, transparansi, dan kolaborasi dengan berbagai pemangku kepentingan.' },
  'about.beyond.internship': { en: 'INTERNSHIP EXPERIENCE', id: 'PENGALAMAN MAGANG' },
  'about.beyond.internshipDesc': { en: 'Practical telecommunications exposure at PT Kereta Api Indonesia (Persero) Divisi Sintelis Daop 3 Cirebon.', id: 'Pengalaman telekomunikasi praktis di PT Kereta Api Indonesia (Persero) Divisi Sintelis Daop 3 Cirebon.' },
  'about.corePillars': { en: 'CORE PILLARS', id: 'PILAR UTAMA' },
  'about.active': { en: 'ACTIVE', id: 'AKTIF' },
  'about.expand': { en: 'EXPAND', id: 'BUKA' },
  'about.telkom': { en: 'Telkom University', id: 'Telkom University' },
  'about.telkomDesc': { en: 'S1 Telecommunications Engineering graduate focused on computer vision & deep learning solutions.', id: 'Lulusan S1 Teknik Telekomunikasi fokus pada solusi computer vision & deep learning.' },
  'about.pillar.0.title': { en: 'Problem Solver', id: 'Pemecah Masalah' },
  'about.pillar.0.headline': { en: 'Formulating real questions before picking algorithms.', id: 'Merumuskan pertanyaan nyata sebelum memilih algoritma.' },
  'about.pillar.0.desc': { en: 'Every model is only as effective as the problem it is formulated to solve. Starting from raw physical inputs—whether scanned essay handwriting or high-volume PDF documents—I focus on isolating the true constraint before architecting pipelines.', id: 'Setiap model hanya seefektif masalah yang dirumuskan untuk diselesaikannya. Dimulai dari input fisik mentah—baik tulisan tangan esai yang dipindai maupun dokumen PDF bervolume tinggi—saya fokus mengisolasi kendala sebenarnya sebelum merancang pipeline.' },
  'about.pillar.1.title': { en: 'Continuous Learner', id: 'Pembelajar Berkelanjutan' },
  'about.pillar.1.headline': { en: 'Bridging telecommunication fundamentals with frontier AI.', id: 'Menjembatani dasar telekomunikasi dengan frontier AI.' },
  'about.pillar.1.desc': { en: 'My academic background in Telecommunications Engineering instilled rigorous mathematical discipline in signal paths, noise, and systems. Transitioning into AI means applying that same analytical rigor to neural weights, feature spaces, and generative agents.', id: 'Latar belakang akademis saya di Teknik Telekomunikasi menanamkan disiplin matematika yang ketat dalam jalur sinyal, derau, dan sistem. Beralih ke AI berarti menerapkan ketelitian analitis yang sama pada bobot neural, ruang fitur, dan agen generatif.' },
  'about.pillar.2.title': { en: 'Impact Driven', id: 'Berorientasi Dampak' },
  'about.pillar.2.headline': { en: 'Building practical tools that deliver measurable utility.', id: 'Membangun alat praktis yang memberikan kegunaan terukur.' },
  'about.pillar.2.desc': { en: 'Rather than theoretical experiments that never leave a notebook, I prioritize end-to-end viability: manageable parameter counts (MobileNetV2), verifiable validation metrics, and automated workflows (n8n) that reliably save human time.', id: 'Daripada eksperimen teoretis yang tidak pernah keluar dari notebook, saya memprioritaskan kelayakan end-to-end: jumlah parameter yang efisien (MobileNetV2), metrik validasi yang dapat diverifikasi, dan alur kerja otomatis (n8n) yang menghemat waktu kerja nyata.' },

  // ── Projects ──
  'projects.label': { en: 'FEATURED SOLUTIONS', id: 'SOLUSI UNGGULAN' },
  'projects.title': { en: 'Selected Works &', id: 'Karya Pilihan &' },
  'projects.titleSpan': { en: 'Projects', id: 'Proyek' },
  'projects.description': { en: 'Kumpulan implementasi deep learning, computer vision, dan sistem otomatisasi AI berbasis performa tinggi.', id: 'Kumpulan implementasi deep learning, computer vision, dan sistem otomatisasi AI berbasis performa tinggi.' },
  'projects.viewCaseStudy': { en: 'View Case Study', id: 'Lihat Studi Kasus' },

  // ── Skills ──
  'skills.label': { en: 'SIGNAL → PROFICIENCY', id: 'SINYAL → KEMAHIRAN' },
  'skills.title': { en: 'Skills & Technologies', id: 'Keahlian & Teknologi' },
  'skills.description': { en: 'Factual technical proficiencies grounded in actual project execution and academic research.', id: 'Kemampuan teknis faktual yang didasarkan pada pelaksanaan proyek aktual dan penelitian akademis.' },
  'skills.core': { en: 'Core', id: 'Inti' },
  'skills.coreSkills': { en: 'Skills', id: 'Keahlian' },
  'skills.appliedCompetencies': { en: 'Applied Competencies', id: 'Kompetensi Terapan' },
  'skills.techWork': { en: 'Technologies I work with', id: 'Teknologi yang saya gunakan' },
  'skills.categoryBreakdown': { en: 'Category Breakdown', id: 'Rincian Kategori' },
  'skills.documentedSkills': { en: 'Documented Skills', id: 'Keahlian Terdokumentasi' },
  'skills.disclaimer': { en: 'Grounded in practical implementation: Technologies shown represent hands-on toolsets utilized in academic research and automated pipelines, not hypothetical ratings.', id: 'Berdasarkan implementasi praktis: Teknologi yang ditampilkan merupakan perangkat yang digunakan dalam penelitian akademis dan pipeline otomatis, bukan penilaian hipotetis.' },

  // ── Experience ──
  'exp.label': { en: 'TRAJECTORY', id: 'LINTASAN' },
  'exp.title': { en: 'Experience & Education', id: 'Pengalaman & Pendidikan' },
  'exp.description': { en: 'Telecommunications engineering infrastructure grounding complemented by academic training and leadership.', id: 'Fondasi infrastruktur teknik telekomunikasi dilengkapi pelatihan akademis dan kepemimpinan.' },
  'exp.telecomInternship': { en: 'Telecommunications Internship', id: 'Magang Telekomunikasi' },
  'exp.supervisedExposure': { en: 'Supervised Practical Exposure & Hands-On Tasks:', id: 'Paparan Praktis Terbimbing & Tugas Langsung:' },
  'exp.techPracticed': { en: 'Technical Systems & Tools Practiced', id: 'Sistem & Alat Teknis yang Dipraktikkan' },
  'exp.completedEdu': { en: 'Completed Education', id: 'Pendidikan yang Diselesaikan' },
  'exp.thesisProject': { en: 'Final Academic Thesis / Project:', id: 'Tugas Akhir / Proyek Akademik:' },
  'exp.keyCoursework': { en: 'Key Coursework Grounding', id: 'Landasan Mata Kuliah Utama' },
  'exp.leadership': { en: 'Selected Leadership & Student Roles', id: 'Peran Kepemimpinan & Mahasiswa Terpilih' },
  'exp.leadershipDesc': { en: 'Active campus leadership demonstrating budgetary management, public relations, and cross-functional team coordination.', id: 'Kepemimpinan kampus aktif yang menunjukkan manajemen anggaran, hubungan masyarakat, dan koordinasi tim lintas fungsi.' },

  // ── Contact ──
  'contact.label': { en: 'DISTINCT CLOSURE', id: 'PENUTUP' },
  'contact.title1': { en: "Let's build", id: 'Mari bangun' },
  'contact.title2': { en: 'something meaningful.', id: 'sesuatu yang bermakna.' },
  'contact.description': { en: "I'm open to entry-level AI/ML Engineer opportunities, graduate programs, research collaborations, or a thoughtful conversation about practical machine learning.", id: 'Saya terbuka untuk peluang AI/ML Engineer entry-level, program pascasarjana, kolaborasi penelitian, atau diskusi mendalam tentang machine learning praktis.' },
  'contact.dispatcher': { en: 'Direct Message Dispatcher', id: 'Pengirim Pesan Langsung' },
  'contact.sendNote': { en: 'Send a note directly to my inbox', id: 'Kirim pesan langsung ke inbox saya' },
  'contact.yourName': { en: 'Your Name', id: 'Nama Anda' },
  'contact.namePlaceholder': { en: 'e.g. Hiring Manager / Collaborator', id: 'cth. HRD / Kolaborator' },
  'contact.subject': { en: 'Subject / Topic', id: 'Subjek / Topik' },
  'contact.subjectPlaceholder': { en: 'e.g. [Job Inquiry] - Regarding AI/ML Opportunities', id: 'cth. [Lowongan Kerja] - Terkait Peluang AI/ML' },
  'contact.message': { en: 'Message', id: 'Pesan' },
  'contact.messagePlaceholder': { en: 'Write your note or question here...', id: 'Tulis pesan atau pertanyaan Anda di sini...' },
  'contact.sendBtn': { en: 'Compose & Send via Email', id: 'Tulis & Kirim via Email' },
  'contact.sendInfo': { en: 'Opens your mail client directly with your drafted inquiry.', id: 'Membuka aplikasi email Anda langsung dengan draf pesan yang sudah dibuat.' },
  'contact.backToTop': { en: 'BACK TO TOP', id: 'KEMBALI KE ATAS' },
  'contact.copied': { en: 'Copied', id: 'Tersalin' },

  // ── Footer ──
  'footer.builtWith': { en: 'Built with precision and intention.', id: 'Dibangun dengan presisi dan niat.' },
  'footer.signal': { en: 'Telecommunications Engineering → Applied Artificial Intelligence', id: 'Teknik Telekomunikasi → Kecerdasan Buatan Terapan' },

  // ── Case Study Modal ──
  'modal.back': { en: 'BACK TO OVERVIEW', id: 'KEMBALI KE RINGKASAN' },
  'modal.index': { en: 'CASE STUDY INDEX', id: 'INDEKS STUDI KASUS' },
  'modal.problem': { en: 'The Problem', id: 'Masalah & Tujuan' },
  'modal.contribution': { en: 'My Contribution', id: 'Kontribusi Saya' },
  'modal.implementation': { en: 'Implementation', id: 'Implementasi & Alur' },
  'modal.results': { en: 'Results', id: 'Hasil & Evaluasi' },
  'modal.resources': { en: 'Resources', id: 'Dokumentasi & Artefak' },
  'modal.scope': { en: 'Project Scope:', id: 'Cakupan Proyek:' },
  'modal.status': { en: 'Status:', id: 'Status:' },
  'modal.verified': { en: 'Documented & Verified', id: 'Terdokumentasi & Terverifikasi' },
};

// Provider component
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>(() => {
    // Persist preference
    const saved = typeof window !== 'undefined' ? localStorage.getItem('portfolio-lang') : null;
    return (saved === 'id' ? 'id' : 'en') as Language;
  });

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === 'en' ? 'id' : 'en';
      localStorage.setItem('portfolio-lang', next);
      return next;
    });
  }, []);

  const handleSetLang = useCallback((newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('portfolio-lang', newLang);
  }, []);

  const t = useCallback(
    (key: string): string => {
      const entry = translations[key];
      if (!entry) return key;
      return entry[lang] || entry['en'] || key;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, setLang: handleSetLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

