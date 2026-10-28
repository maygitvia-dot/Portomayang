import React, { useState } from 'react';
import { ProjectData } from '../../types/portfolio';
import { CodeViewer } from '../ui/CodeViewer';
import {
  CheckCircle2,
  Sliders
} from 'lucide-react';

interface TranslationCaseStudyProps {
  project: ProjectData;
  activeSection?: string;
}

export const TranslationCaseStudy: React.FC<TranslationCaseStudyProps> = ({
  project,
}) => {
  const [activeNodeIndex, setActiveNodeIndex] = useState<number>(4); // Default to AI Agent node

  const nodes = project.implementation.workflowNodes || [];
  const selectedNode = nodes[activeNodeIndex] || nodes[0];

  return (
    <div className="space-y-16 py-8">
      {/* 01. Problem & Key Objectives */}
      <section id="section-problem" className="scroll-mt-24 space-y-6">
        <div className="flex items-center gap-2 font-mono text-xs text-electric-blue uppercase tracking-widest">
          <span>01</span>
          <span className="w-4 h-[1px] bg-electric-blue" />
          <span>The Problem & Objectives</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-serif text-frost font-light">
          Manual technical translation between cloud repositories is repetitive, disjointed, and time-intensive.
        </h3>
        <p className="text-silver-ice text-sm sm:text-base leading-relaxed font-sans font-light">
          {project.problem.statement}
        </p>

        {/* Key Challenges Badges */}
        <div className="pt-2">
          <div className="text-xs font-mono text-silver-muted uppercase tracking-wider mb-3">
            Core Bottlenecks Addressed
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

        {/* Test Result Verification Card */}
        <div className="p-4 sm:p-5 rounded-xl border border-electric-blue/30 bg-electric-blue/5 font-mono text-xs">
          <div className="text-electric-blue font-semibold uppercase tracking-wider mb-2 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-arctic-cyan" />
            <span>Documented Verification Proof</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-silver-ice font-sans pt-1">
            <div>
              <span className="block text-frost font-mono text-base font-medium">3 PDFs</span>
              <span className="text-silver-muted text-xs">Input English Documents</span>
            </div>
            <div>
              <span className="block text-frost font-mono text-base font-medium">3 Google Docs</span>
              <span className="text-silver-muted text-xs">Generated Indonesian Output</span>
            </div>
            <div>
              <span className="block text-frost font-mono text-base font-medium">100% Autonomous</span>
              <span className="text-silver-muted text-xs">Zero Manual Steps</span>
            </div>
            <div>
              <span className="block text-frost font-mono text-base font-medium">7 Stages</span>
              <span className="text-silver-muted text-xs">Connected n8n DAG</span>
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
          Independent Workflow Engineering & Integration
        </h3>

        <div className="p-4 rounded-lg border border-steel-midnight bg-obsidian-dark text-xs text-silver-muted leading-relaxed">
          <span className="text-icy-lilac font-mono uppercase block mb-1">Architecture Ownership:</span>
          This project was independently conceived, designed, built, and tested. I configured the n8n environment, integrated Google Cloud APIs, structured the system prompts for Google Gemini, and verified the output translation quality across test documents.
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
          <span>Workflow Architecture & Node Graph</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-serif text-frost font-light">
          7-Stage Event-Driven Pipeline
        </h3>
        <p className="text-silver-ice text-sm sm:text-base leading-relaxed font-sans font-light">
          The pipeline operates sequentially as a Directed Acyclic Graph (DAG) in n8n, handling scheduled trigger queries, binary downloads, text parsing, context-preserving translation, and destination doc formatting.
        </p>

        {/* Interactive n8n Node Map */}
        <div className="p-6 rounded-xl border border-steel-midnight bg-obsidian-dark space-y-6">
          <div className="flex items-center justify-between text-xs font-mono text-silver-muted uppercase tracking-wider">
            <span>Interactive Workflow Node Inspector</span>
            <span className="text-electric-blue">Click any node to inspect configuration</span>
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
                    {idx === 4 ? 'Gemini AI' : 'Pipeline'}
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
                  Active Node Configuration & Dataflow:
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
          <div className="space-y-2">
            <div className="text-xs font-mono text-silver-muted uppercase tracking-wider">
              Gemini System Instruction & Translation Rules
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
          <span>Results & Evaluation</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-serif text-frost font-light">
          Automated Ingestion to Formatted Indonesian Output
        </h3>

        {/* 3 Test Runs Detail Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-steel-midnight bg-obsidian-dark font-mono text-xs space-y-2">
            <div className="text-electric-blue font-semibold uppercase">Document Test Run #1</div>
            <div className="text-frost font-sans font-medium">Technical Specification PDF</div>
            <p className="text-silver-muted font-sans text-xs">
              Successfully extracted multi-column text; translated to Bahasa Indonesia maintaining technical nomenclature.
            </p>
            <div className="text-arctic-cyan text-[11px] pt-1">Status: Google Doc Generated</div>
          </div>

          <div className="p-4 rounded-xl border border-steel-midnight bg-obsidian-dark font-mono text-xs space-y-2">
            <div className="text-laser-violet font-semibold uppercase">Document Test Run #2</div>
            <div className="text-frost font-sans font-medium">Academic Research Excerpt</div>
            <p className="text-silver-muted font-sans text-xs">
              Extracted formal academic prose; translated preserving citation flow and section heading structure.
            </p>
            <div className="text-arctic-cyan text-[11px] pt-1">Status: Google Doc Generated</div>
          </div>

          <div className="p-4 rounded-xl border border-steel-midnight bg-obsidian-dark font-mono text-xs space-y-2">
            <div className="text-arctic-cyan font-semibold uppercase">Document Test Run #3</div>
            <div className="text-frost font-sans font-medium">Software User Manual Guide</div>
            <p className="text-silver-muted font-sans text-xs">
              Extracted bulleted procedure guidelines; formatted output into clean readable Indonesian numbered lists.
            </p>
            <div className="text-arctic-cyan text-[11px] pt-1">Status: Google Doc Generated</div>
          </div>
        </div>

        {/* Honest Limitations */}
        <div className="p-5 rounded-xl border border-steel-midnight bg-navy-surface/30 space-y-3">
          <div className="text-xs font-mono text-icy-lilac uppercase tracking-wider flex items-center gap-2">
            <Sliders className="w-3.5 h-3.5" />
            <span>Operational Constraints & Lessons Learned</span>
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
          <span>Documentation & Blueprint Artifacts</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-serif text-frost font-light">
          Workflow Export & Configuration Records
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
