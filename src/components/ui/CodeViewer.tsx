import React, { useState } from 'react';
import { Check, Copy, Terminal } from 'lucide-react';

interface CodeViewerProps {
  code: string;
  language?: string;
  filename?: string;
}

export const CodeViewer: React.FC<CodeViewerProps> = ({
  code,
  language = 'python',
  filename,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg border border-steel-midnight bg-obsidian-dark overflow-hidden font-mono text-xs shadow-card-subtle">
      <div className="flex items-center justify-between px-4 py-2.5 bg-navy-deep/80 border-b border-steel-midnight">
        <div className="flex items-center gap-2 text-silver-muted">
          <Terminal className="w-3.5 h-3.5 text-electric-blue" />
          <span className="text-silver-ice font-mono">{filename || `snippet.${language}`}</span>
        </div>
        <button
          onClick={handleCopy}
          aria-label="Copy code to clipboard"
          className="flex items-center gap-1.5 text-xs text-silver-muted hover:text-frost transition-colors py-1 px-2 rounded hover:bg-steel-midnight/50"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-arctic-cyan" />
              <span className="text-arctic-cyan">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <div className="p-4 overflow-x-auto text-silver-ice leading-relaxed max-h-96">
        <pre className="font-mono text-xs">
          <code>
            {code.split('\n').map((line, idx) => (
              <div key={idx} className="table-row">
                <span className="table-cell select-none pr-4 text-steel-midnight text-right">
                  {idx + 1}
                </span>
                <span className="table-cell whitespace-pre">{line}</span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
};

