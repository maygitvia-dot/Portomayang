import React, { useState } from 'react';
import { ProjectData } from '../../types/portfolio';
import { CodeViewer } from '../ui/CodeViewer';
import {
  AlertCircle,
  CheckCircle2,
  Image as ImageIcon,
  Sliders
} from 'lucide-react';

interface ScovisCaseStudyProps {
  project: ProjectData;
  activeSection?: string;
}

export const ScovisCaseStudy: React.FC<ScovisCaseStudyProps> = ({
  project,
}) => {
  const [imageFilterMode, setImageFilterMode] = useState<'raw' | 'preprocessed'>('preprocessed');

  return (
    <div className="space-y-16 py-8">
      {/* 01. Problem & Key Challenges */}
      <section id="section-problem" className="scroll-mt-24 space-y-6">
        <div className="flex items-center gap-2 font-mono text-xs text-electric-blue uppercase tracking-widest">
          <span>01</span>
          <span className="w-4 h-[1px] bg-electric-blue" />
          <span>The Problem & Objectives</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-serif text-frost font-light">
          Manual evaluation of handwritten essay answers is time-consuming, subjective, and inconsistent.
        </h3>
        <p className="text-silver-ice text-sm sm:text-base leading-relaxed font-sans font-light">
          {project.problem.statement}
        </p>

        {/* Key Challenges Badges matching Frame 05 */}
        <div className="pt-2">
          <div className="text-xs font-mono text-silver-muted uppercase tracking-wider mb-3">
            Key Challenges Addressed
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
            Dataset Context & Source
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-silver-ice font-sans pt-1">
            <div>
              <span className="block text-frost font-mono text-base font-medium">1,560</span>
              <span className="text-silver-muted text-xs">Image Samples</span>
            </div>
            <div>
              <span className="block text-frost font-mono text-base font-medium">65 Students</span>
              <span className="text-silver-muted text-xs">Handwriting Variance</span>
            </div>
            <div>
              <span className="block text-frost font-mono text-base font-medium">4 Exam Questions</span>
              <span className="text-silver-muted text-xs">Sections a–f</span>
            </div>
            <div>
              <span className="block text-frost font-mono text-base font-medium">Steganography</span>
              <span className="text-silver-muted text-xs">University Course Exam</span>
            </div>
          </div>
        </div>
      </section>

      {/* 02. My Documented Contribution */}
      <section id="section-contribution" className="scroll-mt-24 space-y-6 pt-8 border-t border-steel-midnight/50">
        <div className="flex items-center gap-2 font-mono text-xs text-laser-violet uppercase tracking-widest">
          <span>02</span>
          <span className="w-4 h-[1px] bg-laser-violet" />
          <span>My Documented Contribution</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-serif text-frost font-light">
          Individual focus within the team research project
        </h3>

        {/* Honest role boundary card */}
        <div className="p-4 rounded-lg border border-steel-midnight bg-obsidian-dark text-xs text-silver-muted leading-relaxed">
          <span className="text-icy-lilac font-mono uppercase block mb-1">Scope Integrity:</span>
          SCOVIS was developed collaboratively with an academic team. My documented technical contributions were concentrated on image collection, dataset labeling, model-specific preprocessing, developing and evaluating the MobileNetV2 + BiLSTM deep learning architecture, and inference scripting. I do not claim independent creation of the full web app backend, database, or UI framework.
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
          <span>Technical Process & Architecture</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-serif text-frost font-light">
          Hybrid Convolutional & Recurrent Architecture
        </h3>
        <p className="text-silver-ice text-sm sm:text-base leading-relaxed font-sans font-light">
          {project.technicalProcess.overview}
        </p>

        {/* Interactive Visual Pipeline Diagram */}
        <div className="p-5 sm:p-6 rounded-xl border border-steel-midnight bg-navy-deep/40 space-y-4">
          <div className="text-xs font-mono text-silver-muted uppercase tracking-wider">
            End-to-End Deep Learning Flow
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {project.technicalProcess.steps.map((st) => (
              <div
                key={st.step}
                className="p-3.5 rounded-lg border border-steel-midnight bg-navy-surface/50 font-mono flex flex-col justify-between"
              >
                <div>
                  <span className="text-electric-blue text-xs font-bold">{st.step}</span>
                  <h4 className="text-frost text-xs font-semibold mt-1 font-sans">{st.title}</h4>
                </div>
                <p className="text-[11px] text-silver-muted font-sans mt-2 leading-relaxed">
                  {st.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Image Preprocessing Demonstration Viewer */}
        <div className="p-6 rounded-xl border border-steel-midnight bg-obsidian-dark space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-electric-blue" />
              <span className="text-xs font-mono text-frost uppercase tracking-wider">
                Interactive Preprocessing Pipeline Preview
              </span>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs">
              <button
                onClick={() => setImageFilterMode('raw')}
                className={`px-3 py-1 rounded transition-colors ${
                  imageFilterMode === 'raw'
                    ? 'bg-electric-blue text-white'
                    : 'bg-navy-surface text-silver-muted hover:text-frost'
                }`}
              >
                Raw Handwriting Scan
              </button>
              <button
                onClick={() => setImageFilterMode('preprocessed')}
                className={`px-3 py-1 rounded transition-colors ${
                  imageFilterMode === 'preprocessed'
                    ? 'bg-laser-violet text-white'
                    : 'bg-navy-surface text-silver-muted hover:text-frost'
                }`}
              >
                OpenCV Filtered (Adaptive)
              </button>
            </div>
          </div>

          <div className="relative h-44 sm:h-52 rounded-lg border border-steel-midnight bg-[#0e1322] flex items-center justify-center overflow-hidden">
            {/* SVG Simulated Handwriting Sample */}
            <svg
              className={`w-full h-full max-w-lg transition-all duration-300 ${
                imageFilterMode === 'preprocessed' ? 'filter contrast-150 invert-0' : 'opacity-85'
              }`}
              viewBox="0 0 500 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Exam paper background grain */}
              {imageFilterMode === 'raw' && (
                <rect width="500" height="180" fill="#141c30" opacity="0.6" />
              )}
              {imageFilterMode === 'preprocessed' && (
                <rect width="500" height="180" fill="#04060a" />
              )}

              {/* Exam Lines */}
              <line x1="20" y1="50" x2="480" y2="50" stroke="#1f2c4a" strokeWidth="1" strokeDasharray="2 4" />
              <line x1="20" y1="100" x2="480" y2="100" stroke="#1f2c4a" strokeWidth="1" strokeDasharray="2 4" />
              <line x1="20" y1="150" x2="480" y2="150" stroke="#1f2c4a" strokeWidth="1" strokeDasharray="2 4" />

              {/* Simulated Cursive Handwriting Strokes */}
              <path
                d="M 40 45 Q 60 20, 80 45 T 120 40 T 160 48 T 210 35 T 260 46 T 310 40 T 370 45 T 440 38"
                stroke={imageFilterMode === 'raw' ? '#a0b2d6' : '#36DDF2'}
                strokeWidth={imageFilterMode === 'preprocessed' ? '2.5' : '1.8'}
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 45 95 Q 75 75, 105 95 T 150 90 T 200 98 T 255 85 T 305 96 T 360 90 T 420 95"
                stroke={imageFilterMode === 'raw' ? '#8a9ec2' : '#36DDF2'}
                strokeWidth={imageFilterMode === 'preprocessed' ? '2.5' : '1.8'}
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 42 145 Q 80 125, 120 145 T 170 140 T 230 148 T 290 135 T 350 146 T 410 140"
                stroke={imageFilterMode === 'raw' ? '#95a8cc' : '#36DDF2'}
                strokeWidth={imageFilterMode === 'preprocessed' ? '2.5' : '1.8'}
                strokeLinecap="round"
                fill="none"
              />

              {/* Bounding box crop overlay */}
              <rect x="25" y="15" width="450" height="150" stroke="#3568FF" strokeWidth="1" strokeDasharray="4 4" fill="none" opacity="0.5" />
            </svg>

            <div className="absolute bottom-2 right-3 font-mono text-[10px] text-silver-muted bg-obsidian/80 px-2 py-0.5 rounded">
              {imageFilterMode === 'raw' ? 'Original Grayscale Scan' : 'Adaptive Gaussian Thresholding (224×224)'}
            </div>
          </div>
        </div>

        {/* Python Inference Code Snippet */}
        {project.implementation.codeSnippet && (
          <div className="space-y-2">
            <div className="text-xs font-mono text-silver-muted uppercase tracking-wider">
              Documented Inference Implementation
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
          <span>Results & Evaluation</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-serif text-frost font-light">
          Validation Benchmarks Across Architectures
        </h3>

        {/* Explicit Validation Notice Banner */}
        <div className="p-4 rounded-xl border border-laser-violet/40 bg-laser-violet/10 text-xs font-sans text-frost flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-icy-lilac flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-mono font-semibold uppercase text-icy-lilac block">
              Validation Result Notice
            </span>
            {project.results.validationNotice}
          </div>
        </div>

        {/* Comparative Architecture Bar Chart / Table */}
        {project.results.comparisons && (
          <div className="p-6 rounded-xl border border-steel-midnight bg-obsidian-dark space-y-5">
            <div className="text-xs font-mono text-silver-muted uppercase tracking-wider flex items-center justify-between">
              <span>Model Comparison Table (Validation Set)</span>
              <span className="text-electric-blue">3 Evaluated Backbones</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs border-collapse">
                <thead>
                  <tr className="border-b border-steel-midnight text-silver-muted">
                    <th className="py-2.5 px-3">Architecture + Sequence</th>
                    <th className="py-2.5 px-3">Mean Val Accuracy</th>
                    <th className="py-2.5 px-3">Macro F1-Score</th>
                    <th className="py-2.5 px-3">Weighted F1-Score</th>
                    <th className="py-2.5 px-3 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-steel-midnight/50">
                  {project.results.comparisons.map((row, idx) => (
                    <tr
                      key={idx}
                      className={
                        row.isMainModel
                          ? 'bg-electric-blue/10 text-frost font-semibold'
                          : 'text-silver-ice hover:bg-navy-surface/30'
                      }
                    >
                      <td className="py-3 px-3 flex items-center gap-2">
                        {row.isMainModel && <span className="w-2 h-2 rounded-full bg-electric-blue" />}
                        <span>{row.name}</span>
                      </td>
                      <td className="py-3 px-3 font-semibold text-frost">
                        {row.valAccuracy.toFixed(2)}%
                      </td>
                      <td className="py-3 px-3 text-silver-ice">
                        {row.macroF1.toFixed(4)}
                      </td>
                      <td className="py-3 px-3 text-silver-ice">
                        {row.weightedF1.toFixed(4)}
                      </td>
                      <td className="py-3 px-3 text-right">
                        {row.isMainModel ? (
                          <span className="px-2 py-0.5 rounded bg-electric-blue/20 text-electric-blue border border-electric-blue/30 text-[10px]">
                            MY MODEL
                          </span>
                        ) : (
                          <span className="text-silver-muted text-[10px]">COMPARISON</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Visual Comparative Bars */}
            <div className="space-y-3 pt-2">
              <div className="text-[11px] font-mono text-silver-muted">
                Validation Accuracy Visual Comparison
              </div>
              {project.results.comparisons.map((row, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs font-mono text-silver-ice">
                    <span>{row.name}</span>
                    <span className="font-semibold text-frost">{row.valAccuracy}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-navy-deep overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${
                        row.isMainModel
                          ? 'bg-gradient-to-r from-electric-blue to-arctic-cyan'
                          : 'bg-steel-midnight'
                      }`}
                      style={{ width: `${row.valAccuracy}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Honest Limitations Section */}
        <div className="p-5 rounded-xl border border-steel-midnight bg-navy-surface/30 space-y-3">
          <div className="text-xs font-mono text-icy-lilac uppercase tracking-wider flex items-center gap-2">
            <Sliders className="w-3.5 h-3.5" />
            <span>Honest Evaluation & System Limitations</span>
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
          <span>Documentation & Artifacts</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-serif text-frost font-light">
          Project Artifacts & Technical Records
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
    </div>
  );
};
