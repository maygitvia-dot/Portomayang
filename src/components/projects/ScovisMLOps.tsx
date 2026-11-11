import React from 'react';
import { Server, Box, Zap, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const PIPELINE_NODES = [
  { label: 'Client Upload', desc: 'HTTP multipart/form-data', color: 'border-electric-blue text-electric-blue' },
  { label: 'FastAPI Gateway', desc: 'POST /v1/predict-essay', color: 'border-laser-violet text-laser-violet' },
  { label: 'OpenCV Worker', desc: 'Adaptive Threshold + Resize', color: 'border-icy-lilac text-icy-lilac' },
  { label: 'ONNX Runtime', desc: 'MobileNetV2 + BiLSTM', color: 'border-arctic-cyan text-arctic-cyan' },
  { label: 'JSON Response', desc: 'score + confidence + tier', color: 'border-electric-blue text-electric-blue' },
];

export const ScovisMLOps: React.FC = () => {
  const { lang } = useLanguage();
  const isId = lang === 'id';

  return (
    <div className="p-5 sm:p-6 rounded-2xl border border-steel-midnight bg-obsidian-dark/60 space-y-5">
      <div>
        <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-icy-lilac mb-1">
          <Server className="w-3 h-3" />
          {isId ? 'Cetak Biru MLOps Siap Produksi' : 'Production MLOps Blueprint'}
        </div>
        <h4 className="text-sm sm:text-base font-serif text-frost font-medium">
          {isId ? 'Arsitektur Deployment FastAPI + Docker' : 'FastAPI + Docker Deployment Architecture'}
        </h4>
        <p className="text-[11px] text-silver-muted font-sans mt-1 leading-relaxed">
          {isId
            ? 'Jalur produksi konseptual yang memperlihatkan bagaimana model SCOVIS bertransisi dari prototipe riset menjadi layanan REST API terkontainerisasi — siap untuk penskalaan horizontal.'
            : 'Conceptual production pathway demonstrating how the SCOVIS model transitions from research prototype to containerised REST API service — ready for horizontal scaling.'}
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
            {isId ? 'Lapisan API' : 'API Layer'}
          </div>
          <div className="text-xs font-sans text-frost font-medium">FastAPI REST Endpoint</div>
          <div className="text-[10px] font-mono text-silver-muted space-y-0.5">
            <div>POST /v1/predict-essay</div>
            <div>{isId ? 'Validasi skema Pydantic' : 'Pydantic schema validation'}</div>
            <div>{isId ? 'Handler inferensi asinkron' : 'Async inference handler'}</div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl border border-steel-midnight bg-navy-surface/20 space-y-1">
          <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-laser-violet">
            <Box className="w-3 h-3" />
            {isId ? 'Kontainerisasi' : 'Containerization'}
          </div>
          <div className="text-xs font-sans text-frost font-medium">Docker + ONNX Runtime</div>
          <div className="text-[10px] font-mono text-silver-muted space-y-0.5">
            <div>python:3.11-slim base image</div>
            <div>{isId ? 'Serialisasi model ONNX' : 'ONNX model serialization'}</div>
            <div>{isId ? 'Ukuran image kontainer ~350 MB' : '~350 MB container image'}</div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl border border-steel-midnight bg-navy-surface/20 space-y-1">
          <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-arctic-cyan">
            <Server className="w-3 h-3" />
            {isId ? 'Target Inferensi' : 'Inference Target'}
          </div>
          <div className="text-xs font-sans text-frost font-medium">TFLite / ONNX Runtime</div>
          <div className="text-[10px] font-mono text-silver-muted space-y-0.5">
            <div>{isId ? 'Latensi rata-rata ~42 ms (CPU)' : '~42 ms avg latency (CPU)'}</div>
            <div>{isId ? '24 model spesifik-seksi' : '24 section-specific models'}</div>
            <div>{isId ? 'Manifes confidence JSON' : 'JSON confidence manifest'}</div>
          </div>
        </div>
      </div>

      <div className="font-mono text-[10px] text-silver-muted/60 leading-relaxed border-t border-steel-midnight pt-3">
        {isId
          ? 'ℹ Ini merepresentasikan arsitektur produksi konseptual. Implementasi riset saat ini berjalan pada lingkungan notebook Google Colab. Kontainerisasi dan eksposur API REST merupakan tonggak rekayasa berikutnya.'
          : 'ℹ This represents a conceptual production architecture. The current research implementation runs in a Jupyter/Colab environment. Containerisation and API exposure is the proposed next engineering milestone.'}
      </div>
    </div>
  );
};

