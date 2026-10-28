# Mayang Gita Oktafia — AI / ML Engineer Portfolio

> **Editorial Luxury Tech — Midnight Ice Bold**  
> An original, interactive personal portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion for **Mayang Gita Oktafia**, a fresh graduate in Telecommunications Engineering from Telkom University pursuing AI Engineering, Computer Vision, and Intelligent Automation.

---

## ✦ Design Concept: Signal → Intelligence

The portfolio is structured around the conceptual journey of transforming raw signals and physical data into structured intelligence:
- **Telecommunications Foundation:** Rigorous grounding in signal transmission, optical backbone networks, noise filtering, and communication systems.
- **Applied Artificial Intelligence:** Channeling signal processing principles into deep learning, computer vision (MobileNetV2, BiLSTM, OpenCV), and multi-agent workflow orchestration (n8n & Google Gemini).

---

## 🎨 Visual Identity & Palette

- **Obsidian Black (`#05070C`):** Primary editorial background.
- **Deep Navy (`#10182D`):** Secondary structural surfaces and panels.
- **Steel Midnight (`#1B2948`):** Restrained technical borders and grid dividers.
- **Electric Blue (`#3568FF`):** Signature interactive signal accent and active indicators.
- **Laser Violet (`#8B5CFF`):** Secondary gradient accent and sequence indicators.
- **Arctic Cyan (`#36DDF2`):** Technical highlight for metrics and active states.
- **Icy Lilac (`#C6A8FF`):** Highlighted editorial headings and metadata.
- **Silver Ice (`#D5E0F8`):** Readable secondary typography.
- **Frost White (`#F5F7FF`):** Main text and display headlines.

### Typography
- **Headlines & Display:** Cormorant Garamond (Refined Display Serif).
- **Body & Navigation:** Inter.
- **Technical Metrics & Code:** JetBrains Mono.

---

## 🚀 Key Interactive Features

1. **Hero ("The Signal"):** Asymmetrical editorial layout with interactive celestial crescent atmosphere and dynamic orbital signal arc reacting to mouse movement.
2. **About ("Split Narrative"):** 3-tab index (`01 ABOUT ME`, `02 MY APPROACH`, `03 BEYOND TECH`), architectural light-slit visual, and interactive core pillars (`Problem Solver`, `Continuous Learner`, `Impact Driven`).
3. **Projects ("The Signal Paths"):** Flagship non-grid interactive explorer. Desktop branching orbital paths with glowing nodes for `01 SCOVIS` and `02 AI Document Translation Automation`. Smooth transitions to project overviews and metrics.
4. **Deep-Dive Case Study Views:** Fullscreen modal with left sticky numeric navigation (`The Problem`, `My Contribution`, `Implementation`, `Results & Evaluation`, `Resources`).
   - **SCOVIS:** Transparent team contribution boundaries, 5-stage deep learning pipeline, interactive handwriting scan vs OpenCV adaptive threshold filter demo, Python inference loader snippet, and validation comparison table/charts (MobileNetV2+BiLSTM vs DenseNet121 vs InceptionV3).
   - **AI Document Translation:** 7-stage interactive DAG node explorer (Schedule Trigger → Search Files → Download → Extract → Gemini AI → Create Doc → Update Doc), system prompt template viewer, and 3-document test run verification records.
5. **Skills ("Radial / Minimal"):** Minimal orbital arc with interactive signal nodes. Clicking reveals applied, real-world context for each skill (no fake percentage bars).
6. **Experience & Education:** PT Kereta Api Indonesia (Persero) Divisi Sintelis Daop 3 Cirebon (fiber-optic fusion splicing, OTDR, VoIP Elastix), Telkom University S1 Telecommunications Engineering degree with relevant coursework, and student leadership roles (INTI PARLEMEN DPA HMTT, GATHRAK, BINDES).
7. **Contact & Closure:** Crescent atmosphere glow, one-click email copy button with toast feedback, direct mailto dispatcher form, and LinkedIn/GitHub connection points.

---

## 🛠️ Project Structure

```
c:\Users\Lenovo\Downloads\PORTOFOLIO\
├── index.html                   # HTML entry point with Google Fonts preconnected
├── package.json                 # Project dependencies & scripts
├── tailwind.config.js           # Midnight Ice color tokens and editorial typography
├── tsconfig.json                # TypeScript compiler configuration
├── vite.config.ts               # Vite configuration (Port 3000)
├── public/
│   └── favicon.svg              # Minimalist signal monogram favicon
└── src/
    ├── types/
    │   └── portfolio.ts         # TypeScript interfaces for data models
    ├── data/
    │   └── portfolioData.ts     # Factual project data, metrics & personal info
    ├── components/
    │   ├── ui/
    │   │   ├── SectionHeading.tsx
    │   │   ├── SignalBadge.tsx
    │   │   └── CodeViewer.tsx
    │   ├── layout/
    │   │   ├── SiteNavigation.tsx
    │   │   └── SiteFooter.tsx
    │   ├── hero/
    │   │   ├── HeroSection.tsx
    │   │   └── SignalArc.tsx
    │   ├── about/
    │   │   └── AboutSection.tsx
    │   ├── projects/
    │   │   ├── SignalProjectExplorer.tsx
    │   │   ├── ProjectCaseStudyModal.tsx
    │   │   ├── ScovisCaseStudy.tsx
    │   │   └── TranslationCaseStudy.tsx
    │   ├── skills/
    │   │   └── RadialSkillsSection.tsx
    │   ├── experience/
    │   │   └── ExperienceEducationSection.tsx
    │   └── contact/
    │       └── ContactSection.tsx
    ├── App.tsx                  # App root coordinating modal and scroll state
    ├── main.tsx                 # React entry mount
    └── index.css                # Tailwind base styles and custom utilities
```

---

## 💻 Local Development & Build

### 1. Requirements
- Node.js LTS (v18+ or v20+)
- npm or pnpm

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
The site will be accessible locally at `http://localhost:3000`.

### 4. Build for Production
```bash
npm run build
```
Generates a minified, production-ready static bundle inside the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment Instructions

### Deploy to Vercel
1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial editorial luxury tech portfolio"
   git branch -M main
   git remote add origin https://github.com/mayanggita/portfolio.git
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import the repository.
4. Framework Preset: **Vite**.
5. Build Command: `npm run build`.
6. Output Directory: `dist`.
7. Click **Deploy**.

### Deploy to Netlify
1. Log in to [Netlify](https://www.netlify.com/).
2. Select **Add new site** > **Import an existing project**.
3. Build command: `npm run build`.
4. Publish directory: `dist`.
5. Deploy site.

---

## 📝 Customization & Updating Content

All personal info, project documentation, metrics, and links are cleanly separated in `src/data/portfolioData.ts`:
- **Personal Details:** Update `PERSONAL_INFO` (`email`, `linkedin`, `github`, `location`).
- **Projects & Artifacts:** Add or edit entries in `PROJECTS_DATA` (`metrics`, `codeSnippet`, `artifacts`, `honestLimitations`).
- **Internship & Roles:** Update `EXPERIENCE_DATA` and `EDUCATION_DATA`.
- **Skills:** Add new applied tools in `SKILL_CATEGORIES`.

---

## 🔒 Confidentiality & Fact Integrity Notes

- All validation figures for SCOVIS (MobileNetV2: 55.45% val acc, 0.3156 macro F1, 0.5191 weighted F1) are explicitly attributed as validation results without independent test sets.
- Individual contributions are transparently scoped without claiming independent full-stack web application or database creation.
- PT Kereta Api Indonesia experience is documented accurately as telecommunications engineering exposure (fiber optics, OTDR, VoIP).
- No simulated backend APIs or fake form submissions are used. The contact dispatcher leverages client-validated direct email composition.

