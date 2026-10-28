import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface Profile3DCardProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Profile3DCard: React.FC<Profile3DCardProps> = ({
  className = '',
  size = 'md',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for smooth 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for realistic physics
  const springConfig = { damping: 24, stiffness: 280, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const sizeClasses = {
    sm: 'w-[260px] h-[350px]',
    md: 'w-[300px] sm:w-[340px] h-[410px] sm:h-[470px]',
    lg: 'w-[320px] sm:w-[380px] h-[440px] sm:h-[510px]',
  };

  return (
    <div
      style={{ perspective: 1200 }}
      className={`relative select-none flex items-center justify-center ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* 🌌 VISIBLY MOVING AURORA LIGHTS (Flowing Celestial Ribbons) */}
      <div className="absolute -inset-10 pointer-events-none overflow-visible">
        {/* Aurora Stream 1: Dynamic moving cyan/emerald wave */}
        <motion.div
          animate={{
            x: [-35, 45, -20, -35],
            y: [-25, 20, -30, -25],
            scale: [1, 1.25, 1.1, 1],
            opacity: [0.55, 0.85, 0.6, 0.55],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-6 -left-8 w-80 h-80 rounded-full bg-gradient-to-tr from-arctic-cyan/45 via-[#22c55e]/30 to-transparent blur-3xl"
        />

        {/* Aurora Stream 2: Dynamic moving violet/electric blue wave */}
        <motion.div
          animate={{
            x: [40, -30, 25, 40],
            y: [30, -25, 15, 30],
            scale: [1.15, 0.95, 1.2, 1.15],
            opacity: [0.5, 0.8, 0.65, 0.5],
          }}
          transition={{
            duration: 7.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-8 -right-8 w-84 h-84 rounded-full bg-gradient-to-bl from-laser-violet/50 via-electric-blue/40 to-transparent blur-3xl"
        />

        {/* Aurora Stream 3: Floating central horizontal light wave */}
        <motion.div
          animate={{
            x: [-60, 60, -60],
            y: [15, -15, 15],
            scaleY: [0.85, 1.3, 0.85],
            opacity: [0.35, 0.7, 0.35],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-x-0 top-1/3 h-48 bg-gradient-to-r from-transparent via-arctic-cyan/40 to-transparent blur-2xl"
        />
      </div>

      {/* 🖼️ CLEAN 3D TILTED PORTRAIT CARD */}
      <motion.div
        ref={cardRef}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className={`relative ${sizeClasses[size]} rounded-[26px] border bg-obsidian-dark overflow-hidden shadow-2xl transition-all duration-500 ${
          isHovered
            ? 'shadow-signal-glow border-electric-blue/70 scale-[1.01]'
            : 'border-steel-midnight shadow-card-subtle'
        }`}
      >
        {/* High-Resolution Clean Photo (Clean lighting, slightly dimmed when unhovered, normal crisp on hover) */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-obsidian">
          <img
            src="/mayang-portrait.png"
            alt="Mayang Gita Oktafia"
            className={`w-full h-full object-cover object-top transition-all duration-500 ease-out ${
              isHovered
                ? 'opacity-100 brightness-100 contrast-100 scale-105'
                : 'opacity-85 brightness-90 contrast-[1.04] scale-100'
            }`}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/profile.jpg';
            }}
          />
        </div>

        {/* Clean Vignette: Soft dark fade at the bottom only for clean text integration */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent pointer-events-none" />

        {/* Thin Luxury Hairline Border */}
        <div
          className={`absolute inset-0 rounded-[26px] border transition-colors duration-300 pointer-events-none ${
            isHovered ? 'border-electric-blue/60' : 'border-steel-midnight/60'
          }`}
        />

        {/* Clean Minimalist Bottom Label (Unobtrusive & Clean) */}
        <div
          style={{ transform: 'translateZ(25px)' }}
          className="absolute bottom-4 inset-x-4 z-10 flex items-center justify-between p-3 rounded-xl bg-obsidian/85 backdrop-blur-md border border-steel-midnight/60 pointer-events-none"
        >
          <div className="flex flex-col text-left">
            <span className="text-frost font-serif text-sm sm:text-base font-light tracking-wide">
              Mayang Gita Oktafia
            </span>
            <span className="text-[10px] font-mono tracking-widest text-silver-muted uppercase mt-0.5">
              AI / ML Engineer
            </span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-navy-surface border border-steel-midnight text-[10px] font-mono text-arctic-cyan">
            <span className="w-1.5 h-1.5 rounded-full bg-electric-blue animate-pulse" />
            <span>PORTFOLIO</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
