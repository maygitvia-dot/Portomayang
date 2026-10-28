import React from 'react';

interface SignalBadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'violet' | 'cyan' | 'steel' | 'lilac';
  size?: 'sm' | 'md';
  className?: string;
}

export const SignalBadge: React.FC<SignalBadgeProps> = ({
  children,
  variant = 'steel',
  size = 'sm',
  className = '',
}) => {
  const variantStyles = {
    blue: 'bg-electric-blue/10 text-electric-blue border-electric-blue/30',
    violet: 'bg-laser-violet/10 text-laser-violet border-laser-violet/30',
    cyan: 'bg-arctic-cyan/10 text-arctic-cyan border-arctic-cyan/30',
    lilac: 'bg-icy-lilac/10 text-icy-lilac border-icy-lilac/30',
    steel: 'bg-navy-surface text-silver-ice border-steel-midnight',
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-1',
    md: 'text-sm px-3.5 py-1.5',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono rounded-full border transition-colors ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
      {children}
    </span>
  );
};

