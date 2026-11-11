import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, ChevronRight, Cpu, Eye, Layers, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface SimSample {
  id: string;
  label: string;
  tier: string;
  score: number;
  confidence: number;
  rawDesc: string;
  preprocessDesc: string;
  predicted_class: string;
  backbone: string;
  latency_ms: number;
}

const SAMPLES_EN: SimSample[] = [
  {
    id: 'STG-011-A',
    label: 'Sample A — High Quality Writing',
    tier: 'Tier 1 — Excellent',
    score: 88,
    confidence: 87.4,
    rawDesc: 'Clean handwriting, consistent spacing, well-structured answer with clear mathematical notation.',
    preprocessDesc: 'Adaptive threshold removes background grain. Binarized strokes are sharp and well-separated — ideal for feature extraction.',
    predicted_class: 'Tier_1_Excellent',
    backbone: 'MobileNetV2_BiLSTM',
    latency_ms: 38,
  },
  {
    id: 'STG-042-B',
    label: 'Sample B — Average Writing',
    tier: 'Tier 2 — Competent',
    score: 68,
    confidence: 71.2,
    rawDesc: 'Moderate handwriting clarity. Some overcrowding in equations, occasional smudging near the margin.',
    preprocessDesc: 'Binarization reveals text structure, though some overlapping characters introduce mild noise in tensor regions.',
    predicted_class: 'Tier_2_Competent',
    backbone: 'MobileNetV2_BiLSTM',
    latency_ms: 42,
  },
  {
    id: 'STG-087-C',
    label: 'Sample C — Low Clarity Writing',
    tier: 'Tier 3 — Developing',
    score: 44,
    confidence: 54.8,
    rawDesc: 'Heavy pen pressure inconsistency, crowded layout, difficult to parse mathematical expressions.',
    preprocessDesc: 'Adaptive threshold isolates strokes but significant noise patches remain. Spatial feature map shows dense, poorly segmented regions.',
    predicted_class: 'Tier_3_Developing',
    backbone: 'MobileNetV2_BiLSTM',
    latency_ms: 47,
  },
];

const SAMPLES_ID: SimSample[] = [
  {
    id: 'STG-011-A',
    label: 'Sampel A — Tulisan Kualitas Tinggi',
    tier: 'Tingkat 1 — Sangat Baik',
    score: 88,
    confidence: 87.4,
    rawDesc: 'Tulisan tangan rapi, spasi konsisten, struktur jawaban jelas dengan notasi matematika teratur.',
    preprocessDesc: 'Threshold adaptif menghilangkan grain background. Guratan binarisasi tajam dan terpisah baik — ideal untuk ekstraksi fitur.',
    predicted_class: 'Tier_1_Excellent',
    backbone: 'MobileNetV2_BiLSTM',
    latency_ms: 38,
  },
  {
    id: 'STG-042-B',
    label: 'Sampel B — Tulisan Kualitas Cukup',
    tier: 'Tingkat 2 — Cukup Kompeten',
    score: 68,
    confidence: 71.2,
    rawDesc: 'Kejelasan tulisan sedang. Sedikit padat pada persamaan, sedikit noda di dekat margin.',
    preprocessDesc: 'Binarisasi memperlihatkan struktur teks, meski beberapa karakter bertumpuk memunculkan sedikit noise pada region tensor.',
    predicted_class: 'Tier_2_Competent',
    backbone: 'MobileNetV2_BiLSTM',
    latency_ms: 42,
  },
  {
    id: 'STG-087-C',
    label: 'Sampel C — Tulisan Kualitas Rendah',
    tier: 'Tingkat 3 — Perlu Peningkatan',
    score: 44,
    confidence: 54.8,
    rawDesc: 'Tekanan pena tidak konsisten, tata letak padat, ekspresi matematika sukar dipahami.',
    preprocessDesc: 'Threshold adaptif mengisolasi guratan namun bercak noise signifikan masih tersisa. Peta fitur spasial memperlihatkan region padat.',
    predicted_class: 'Tier_3_Developing',
    backbone: 'MobileNetV2_BiLSTM',
    latency_ms: 47,
  },
];

type SimStep = 'idle' | 'raw' | 'preprocess' | 'inference' | 'result';

const TIER_COLORS: Record<string, string> = {
  'Tier 1 — Excellent': 'text-arctic-cyan',
  'Tier 2 — Competent': 'text-electric-blue',
  'Tier 3 — Developing': 'text-icy-lilac',
  'Tingkat 1 — Sangat Baik': 'text-arctic-cyan',
  'Tingkat 2 — Cukup Kompeten': 'text-electric-blue',
  'Tingkat 3 — Perlu Peningkatan': 'text-icy-lilac',
};

export const ScovisSimulator: React.FC = () => {
  const { lang } = useLanguage();
  const isId = lang === 'id';
  const samples = isId ? SAMPLES_ID : SAMPLES_EN;

  const [selected, setSelected] = useState<SimSample | null>(null);
  const [step, setStep] = useState<SimStep>('idle');
  const [isRunning, setIsRunning] = useState(false);

  const runSimulation = (sample: SimSample) => {
    setSelected(sample);
    setStep('raw');
    setIsRunning(true);

    setTimeout(() => setStep('preprocess'), 1000);
    setTimeout(() => setStep('inference'), 2100);
    setTimeout(() => {
      setStep('result');
      setIsRunning(false);
    }, 3200);
  };

  const reset = () => {
    setSelected(null);
    setStep('idle');
    setIsRunning(false);
  };

  const steps: { key: SimStep; label: string; icon: React.ReactNode; color: string }[] = [
    { key: 'raw', label: isId ? 'Input Mentah' : 'Raw Input', icon: <Eye className="w-3 h-3" />, color: 'text-silver-ice' },
    { key: 'preprocess', label: isId ? 'Pra-pemrosesan OpenCV' : 'OpenCV Preprocess', icon: <Layers className="w-3 h-3" />, color: 'text-electric-blue' },
    { key: 'inference', label: isId ? 'Forward Pass Jaringan Saraf' : 'NN Forward Pass', icon: <Cpu className="w-3 h-3" />, color: 'text-laser-violet' },
    { key: 'result', label: isId ? 'Hasil Prediksi' : 'Prediction Output', icon: <CheckCircle2 className="w-3 h-3" />, color: 'text-arctic-cyan' },
  ];

  const stepIndex = steps.findIndex((s) => s.key === step);

  return (
    <div className="p-5 sm:p-6 rounded-2xl border border-laser-violet/40 bg-navy-surface/20 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-laser-violet mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-laser-violet animate-pulse" />
            {isId ? 'Simulator Pipeline Interaktif' : 'Interactive Pipeline Simulator'}
          </div>
          <h4 className="text-sm sm:text-base font-serif text-frost font-medium">
            {isId ? 'Playground Inferensi SCOVIS' : 'SCOVIS Inference Playground'}
          </h4>
          <p className="text-[11px] text-silver-muted font-sans mt-0.5">
            {isId
              ? 'Pilih sampel potongan tulisan tangan untuk menjalankan pipeline end-to-end (simulasi sisi klien).'
              : 'Select a handwriting sample to run the end-to-end preprocessing → inference pipeline (client-side mock).'}
          </p>
        </div>
        {step !== 'idle' && (
          <button
            onClick={reset}
            className="flex items-center gap-1.5 text-[10px] font-mono text-silver-muted hover:text-frost border border-steel-midnight px-2.5 py-1.5 rounded-lg hover:border-electric-blue/40 transition-all"
          >
            <RotateCcw className="w-3 h-3" />
            {isId ? 'Atur Ulang' : 'Reset'}
          </button>
        )}
      </div>

      {/* Sample Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        {samples.map((sample) => {
          const isActive = selected?.id === sample.id;
          return (
            <button
              key={sample.id}
              onClick={() => !isRunning && runSimulation(sample)}
              disabled={isRunning}
              className={`relative text-left p-3.5 rounded-xl border transition-all duration-300 ${
                isActive
                  ? 'border-laser-violet bg-laser-violet/10 shadow-laser-glow'
                  : 'border-steel-midnight bg-navy-deep/30 hover:border-electric-blue/50 hover:bg-navy-surface/30'
              } ${isRunning && !isActive ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              <div className="font-mono text-[9px] text-silver-muted uppercase tracking-wider mb-1">
                {sample.id}
              </div>
              <div className="text-xs font-sans font-medium text-frost leading-snug">{sample.label}</div>
              <div className={`text-[10px] font-mono mt-1.5 ${TIER_COLORS[sample.tier] ?? 'text-silver-ice'}`}>
                {sample.tier}
              </div>
              {isActive && (
                <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-laser-violet animate-pulse" />
              )}
            </button>
          );
        })}
      </div>

      {/* Pipeline Stage Tracker */}
      {step !== 'idle' && (
        <div className="flex items-center gap-1 overflow-x-auto pb-1">
          {steps.map((s, i) => {
            const isDone = stepIndex >= i;
            const isCurrent = stepIndex === i;
            return (
              <React.Fragment key={s.key}>
                <div
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-full border text-[10px] font-mono whitespace-nowrap transition-all ${
                    isDone
                      ? isCurrent && isRunning
                        ? 'border-laser-violet bg-laser-violet/15 text-icy-lilac'
                        : 'border-electric-blue/50 bg-electric-blue/10 text-arctic-cyan'
                      : 'border-steel-midnight text-silver-muted/50'
                  }`}
                >
                  {s.icon}
                  {s.label}
                  {isCurrent && isRunning && (
                    <span className="w-1 h-1 rounded-full bg-laser-violet animate-ping ml-1" />
                  )}
                </div>
                {i < steps.length - 1 && (
                  <ChevronRight className={`w-3 h-3 flex-shrink-0 ${isDone ? 'text-electric-blue' : 'text-steel-midnight'}`} />
                )}
              </React.Fragment>
            );
          })}
        </div>
      )}

      {/* Stage Content Panels */}
      <AnimatePresence mode="wait">
        {step === 'idle' && (
          <motion.div
            key="idle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-10 text-center gap-3"
          >
            <div className="w-12 h-12 rounded-full border border-steel-midnight flex items-center justify-center bg-navy-deep/50">
              <Play className="w-5 h-5 text-laser-violet ml-0.5" />
            </div>
            <p className="text-xs text-silver-muted font-mono">
              {isId ? 'Pilih salah satu sampel di atas untuk memulai simulasi' : 'Select a sample above to begin the simulation'}
            </p>
          </motion.div>
        )}

        {(step === 'raw' || step === 'preprocess') && selected && (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {/* Raw */}
            <div className={`p-4 rounded-xl border transition-all ${step === 'raw' ? 'border-electric-blue/60 bg-obsidian-dark' : 'border-steel-midnight bg-obsidian-dark/60'}`}>
              <div className="text-[10px] font-mono uppercase tracking-wider text-silver-muted mb-2 flex items-center gap-1.5">
                <Eye className="w-3 h-3" />
                {isId ? 'Langkah 1 — Input Mentah' : 'Step 1 — Raw Input'}
              </div>
              {/* Simulated handwriting image placeholder */}
              <div className="aspect-[4/3] rounded-lg bg-[#0a0f1d] border border-steel-midnight/60 flex items-center justify-center mb-2 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 18px, rgba(53,104,255,0.15) 18px, rgba(53,104,255,0.15) 19px)`,
                  }}
                />
                <div className="text-center px-4">
                  <div className="font-mono text-[10px] text-silver-muted mb-2">
                    {isId ? 'Potongan Esai Tulisan Tangan' : 'Handwritten Answer Crop'}
                  </div>
                  <div className="text-[9px] text-silver-muted/60 font-sans leading-relaxed italic">
                    {selected.rawDesc}
                  </div>
                </div>
              </div>
              <p className="text-[10px] font-sans text-silver-muted leading-relaxed">{selected.rawDesc}</p>
            </div>

            {/* Preprocessed */}
            <div className={`p-4 rounded-xl border transition-all ${step === 'preprocess' ? 'border-laser-violet/60 bg-obsidian-dark' : 'border-steel-midnight bg-obsidian-dark/40 opacity-50'}`}>
              <div className="text-[10px] font-mono uppercase tracking-wider text-silver-muted mb-2 flex items-center gap-1.5">
                <Layers className="w-3 h-3 text-laser-violet" />
                {isId ? 'Langkah 2 — Binarisasi OpenCV' : 'Step 2 — OpenCV Binarization'}
              </div>
              <div className="aspect-[4/3] rounded-lg border border-steel-midnight/60 flex items-center justify-center mb-2 relative overflow-hidden"
                style={{ background: '#f5f5f5' }}
              >
                {step === 'preprocess' ? (
                  <>
                    <div className="absolute inset-0 bg-white" />
                    <div className="text-center px-4 relative z-10">
                      <div className="font-mono text-[10px] text-gray-600 mb-2">
                        {isId ? 'Setelah Threshold Adaptif + Binarisasi' : 'After Adaptive Threshold + Binarization'}
                      </div>
                      <div className="text-[9px] text-gray-500 font-sans leading-relaxed italic">
                        {selected.preprocessDesc}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-[10px] font-mono text-silver-muted/40">
                    {isId ? 'Menunggu langkah 1...' : 'Awaiting step 1...'}
                  </div>
                )}
              </div>
              {step === 'preprocess' && (
                <div className="flex gap-2">
                  {['Grayscale', 'AdaptThresh', 'Binarize', 'Resize 224×224'].map((op) => (
                    <span key={op} className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-laser-violet/10 text-icy-lilac border border-laser-violet/20">
                      {op}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}

        {step === 'inference' && selected && (
          <motion.div
            key="inference"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="p-5 rounded-xl border border-laser-violet/50 bg-obsidian-dark text-center space-y-4"
          >
            <div className="text-[10px] font-mono uppercase tracking-wider text-laser-violet flex items-center justify-center gap-2">
              <Cpu className="w-3.5 h-3.5 animate-spin" />
              {isId ? 'Langkah 3 — Forward Pass Jaringan Saraf' : 'Step 3 — Neural Network Forward Pass'}
            </div>
            <div className="font-mono text-xs text-silver-muted space-y-1.5">
              <div className="flex justify-center gap-2 flex-wrap">
                {[
                  'Input (224×224×3)',
                  '→ MobileNetV2',
                  '→ 7×7×1280',
                  '→ BiLSTM×2',
                  '→ Dense 128',
                  '→ Softmax',
                ].map((node) => (
                  <span key={node} className="px-2 py-0.5 rounded bg-laser-violet/10 border border-laser-violet/20 text-icy-lilac text-[9px]">
                    {node}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ scaleY: [1, 1.8, 1] }}
                    transition={{ repeat: Infinity, delay: i * 0.15, duration: 0.6 }}
                    className="w-1 h-4 rounded-full bg-laser-violet origin-bottom"
                  />
                ))}
              </div>
              <span className="text-xs font-mono text-silver-muted">
                {isId ? 'Memproses tensor fitur...' : 'Processing tensor...'}
              </span>
            </div>
          </motion.div>
        )}

        {step === 'result' && selected && (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            {/* Result headline */}
            <div className="p-5 rounded-xl border border-arctic-cyan/40 bg-arctic-cyan/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-arctic-cyan mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3" />
                  {isId ? 'Langkah 4 — Hasil Prediksi' : 'Step 4 — Prediction Output'}
                </div>
                <div className={`text-lg font-serif font-medium ${TIER_COLORS[selected.tier] ?? 'text-frost'}`}>
                  {selected.tier}
                </div>
                <div className="text-xs font-mono text-silver-muted mt-0.5">
                  {isId ? 'Skor Ternormalisasi: ' : 'Normalized Score: '}
                  <span className="text-frost font-semibold">{selected.score} / 100</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-[10px] font-mono text-silver-muted uppercase">
                  {isId ? 'Kepercayaan (Confidence)' : 'Confidence'}
                </div>
                <div className="text-2xl font-mono font-semibold text-arctic-cyan">
                  {selected.confidence}%
                </div>
              </div>
            </div>

            {/* Confidence bar */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-[10px] font-mono text-silver-muted">
                <span>{isId ? 'Keyakinan Softmax' : 'Softmax Confidence'}</span>
                <span>{selected.confidence}%</span>
              </div>
              <div className="h-1.5 bg-steel-midnight rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${selected.confidence}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                  className="h-full rounded-full bg-gradient-to-r from-electric-blue to-arctic-cyan"
                />
              </div>
            </div>

            {/* JSON manifest */}
            <div className="rounded-xl border border-steel-midnight bg-obsidian-dark p-4 font-mono text-[11px] overflow-x-auto">
              <div className="text-[10px] uppercase tracking-wider text-silver-muted mb-2">
                {isId ? 'Manifes Inferensi JSON' : 'JSON Inference Manifest'}
              </div>
              <pre className="text-icy-lilac leading-relaxed whitespace-pre-wrap break-all">
{`{
  "sample_id": "${selected.id}",
  "predicted_class": "${selected.predicted_class}",
  "normalized_score": ${selected.score}.0,
  "confidence": ${selected.confidence},
  "backbone": "${selected.backbone}",
  "inference_latency_ms": ${selected.latency_ms}
}`}
              </pre>
            </div>

            <p className="text-[10px] font-sans text-silver-muted leading-relaxed">
              {isId
                ? '⚠ Ini adalah simulasi sisi klien menggunakan data tiruan representatif yang disesuaikan dengan karakteristik model SCOVIS sebenarnya. Inferensi nyata menjalankan pipeline MobileNetV2 + BiLSTM penuh pada runtime Keras/TensorFlow.'
                : '⚠ This is a client-side simulation using representative mock data aligned with actual SCOVIS model behaviour. Real inference runs the full MobileNetV2 + BiLSTM pipeline on the Keras/TF runtime.'}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

