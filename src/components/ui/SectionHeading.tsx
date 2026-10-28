import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  number: string;
  label: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  label,
  title,
  description,
  align = 'left',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}`}
    >
      <div className={`inline-flex items-center gap-3 text-xs tracking-widest_editorial uppercase font-mono text-silver-muted mb-3 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="text-electric-blue font-semibold">{number}</span>
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-8 h-[1px] bg-gradient-to-r from-electric-blue to-steel-midnight origin-left"
        />
        <span className="text-icy-lilac">{label}</span>
      </div>
      <h2 className="text-3xl md:text-5xl font-serif text-frost font-light tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-silver-ice text-sm md:text-base leading-relaxed font-sans font-light">
          {description}
        </p>
      )}
    </motion.div>
  );
};
