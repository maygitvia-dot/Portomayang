import React from 'react';
import { Server, Box, Zap, ArrowRight } from 'lucide-react';

const PIPELINE_NODES = [
  { label: 'Client Upload', desc: 'HTTP multipart/form-data', color: 'border-electric-blue text-electric-blue' },
  { label: 'FastAPI Gateway', desc: 'POST /v1/predict-essay', color: 'border-laser-violet text-laser-violet' },
  { label: 'OpenCV Worker', desc: 'Adaptive Threshold + Resize', color: 'border-icy-lilac text-icy-lilac' },
  { label: 'ONNX Runtime', desc: 'MobileNetV2 + BiLSTM', color: 'border-arctic-cyan text-arctic-cyan' },
  { label: 'JSON Response', desc: 'score + confidence + tier', color: 'border-electric-blue text-electric-blue' },
];

export const ScovisMLOps: React.FC = () => (
  <div className="p-5 sm:p-6 rounded-2xl border border-steel-midnight bg-obsidian-dark/60 space-y-5">
    <div>
      <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-icy-lilac mb-1">
        <Server className="w-3 h-3" />
        Production MLOps Blueprint
      </div>
      <h4 className="text-sm sm:text-base font-serif text-frost font-medium">
        FastAPI + Docker Deployment Architecture
      </h4>
      <p className="text-[11px] text-silver-muted font-sans mt-1 leading-relaxed">
        Conceptual production pathway demonstrating how the SCOVIS model transitions from research prototype to containerised REST API service — ready for horizontal scaling.
      </p>
    </div>

    {/* Pipeline Flow */}
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 overflow-x-auto pb-1">
      {PIPELINE_NODES.map((node, i) => (
        <React.Fragment key={node.label}>
          <div className={`flex-shrink-0 p-3 rounded-xl border bg-obsidian-dark/80 min-w-[110px] ${node.color}`}>
            <div className="text-[10px] font-sans font-medium leading-tight">{node.label}</div>
            <div className="text-[9px] font-mono text-silver-muted mt-0.5 leading-tight">{node.desc}</div>
          </div>
          {i < PIPELINE_NODES.length - 1 && (
            <ArrowRight className="w-3.5 h-3.5 text-steel-midnight flex-shrink-0 hidden sm:block" />
          )}
        </React.Fragment>
      ))}
    </div>

    {/* Tech Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      <div className="p-3.5 rounded-xl border border-steel-midnight bg-navy-surface/20 space-y-1">
        <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-electric-blue">
          <Zap className="w-3 h-3" />
          API Layer
        </div>
        <div className="text-xs font-sans text-frost font-medium">FastAPI REST Endpoint</div>
        <div className="text-[10px] font-mono text-silver-muted space-y-0.5">
          <div>POST /v1/predict-essay</div>
          <div>Pydantic schema validation</div>
          <div>Async inference handler</div>
        </div>
      </div>

      <div className="p-3.5 rounded-xl border border-steel-midnight bg-navy-surface/20 space-y-1">
        <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-laser-violet">
          <Box className="w-3 h-3" />
          Containerization
        </div>
        <div className="text-xs font-sans text-frost font-medium">Docker + ONNX Runtime</div>
        <div className="text-[10px] font-mono text-silver-muted space-y-0.5">
          <div>python:3.11-slim base image</div>
          <div>ONNX model serialization</div>
          <div>~350 MB container image</div>
        </div>
      </div>

      <div className="p-3.5 rounded-xl border border-steel-midnight bg-navy-surface/20 space-y-1">
        <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-arctic-cyan">
          <Server className="w-3 h-3" />
          Inference Target
        </div>
        <div className="text-xs font-sans text-frost font-medium">TFLite / ONNX Runtime</div>
        <div className="text-[10px] font-mono text-silver-muted space-y-0.5">
          <div>~42 ms avg latency (CPU)</div>
          <div>24 section-specific models</div>
          <div>JSON confidence manifest</div>
        </div>
      </div>
    </div>

    <div className="font-mono text-[10px] text-silver-muted/60 leading-relaxed border-t border-steel-midnight pt-3">
      ℹ This represents a conceptual production architecture. The current research implementation runs in a Jupyter/Colab environment. Containerisation and API exposure is the proposed next engineering milestone.
    </div>
  </div>
);

