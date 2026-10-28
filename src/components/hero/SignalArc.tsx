import React, { useEffect, useRef } from 'react';

export const SignalArc: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitalRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!orbitalRef.current) return;
      const { innerWidth, innerHeight } = window;
      const xNorm = (e.clientX / innerWidth - 0.5) * 12;
      const yNorm = (e.clientY / innerHeight - 0.5) * 12;

      orbitalRef.current.style.transform = `translate3d(${xNorm}px, ${yNorm}px, 0)`;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square max-w-[540px] mx-auto flex items-center justify-center select-none pointer-events-none"
    >
      {/* Outer ambient blur background glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-electric-blue/15 via-laser-violet/10 to-transparent blur-3xl opacity-70 transform -translate-y-4"></div>

      {/* Main Celestial Eclipse Body */}
      <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full overflow-hidden flex items-center justify-center">
        {/* Deep dark celestial sphere */}
        <div className="absolute inset-2 rounded-full bg-obsidian-dark border border-steel-midnight/50 shadow-2xl"></div>

        {/* Crescent rim light / planetary atmosphere glow */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              'radial-gradient(circle at 88% 22%, rgba(54, 221, 242, 0.45) 0%, rgba(53, 104, 255, 0.6) 20%, rgba(139, 92, 255, 0.35) 45%, rgba(5, 7, 12, 0.95) 70%, #05070C 100%)',
          }}
        />

        {/* Inner shadow mask creating the crescent crescent effect */}
        <div
          className="absolute inset-1 rounded-full bg-obsidian"
          style={{
            clipPath: 'polygon(0 0, 78% 0, 88% 30%, 75% 75%, 35% 100%, 0 100%)',
          }}
        />

        {/* Faint internal planetary texture/contour lines */}
        <svg
          ref={orbitalRef}
          className="absolute inset-0 w-full h-full transition-transform duration-700 ease-out"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Signal Orbit 1 */}
          <ellipse
            cx="200"
            cy="200"
            rx="160"
            ry="75"
            transform="rotate(-28 200 200)"
            stroke="url(#signalGradient1)"
            strokeWidth="1.2"
            strokeDasharray="4 6"
            className="opacity-70"
          />

          {/* Signal Orbit 2 */}
          <ellipse
            cx="200"
            cy="200"
            rx="185"
            ry="88"
            transform="rotate(35 200 200)"
            stroke="url(#signalGradient2)"
            strokeWidth="1"
            className="opacity-60"
          />

          {/* Focal Node Point (Signal receiver) */}
          <circle
            cx="320"
            cy="110"
            r="3.5"
            fill="#36DDF2"
            className="animate-pulse"
          />
          <circle
            cx="320"
            cy="110"
            r="8"
            stroke="#36DDF2"
            strokeWidth="0.8"
            className="opacity-50"
          />

          {/* Secondary Node */}
          <circle
            cx="80"
            cy="270"
            r="2.5"
            fill="#8B5CFF"
            className="opacity-80"
          />

          <defs>
            <linearGradient id="signalGradient1" x1="40" y1="200" x2="360" y2="200" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3568FF" stopOpacity="0.1" />
              <stop offset="0.6" stopColor="#3568FF" stopOpacity="0.8" />
              <stop offset="0.9" stopColor="#36DDF2" stopOpacity="1" />
              <stop offset="1" stopColor="#8B5CFF" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="signalGradient2" x1="15" y1="200" x2="385" y2="200" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8B5CFF" stopOpacity="0.1" />
              <stop offset="0.5" stopColor="#C6A8FF" stopOpacity="0.6" />
              <stop offset="1" stopColor="#3568FF" stopOpacity="0.0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Editorial statement overlay placed subtly on the bottom-right of the sphere */}
        <div className="absolute bottom-10 right-6 sm:right-10 text-right z-10">
          <p className="text-[10px] sm:text-xs font-mono tracking-widest text-silver-muted leading-tight uppercase">
            SAME<br />
            <span className="text-frost font-medium">CURIOSITY.</span><br />
            BIGGER<br />
            <span className="text-icy-lilac font-medium">POSSIBILITIES.</span>
          </p>
          <div className="w-8 h-[1px] bg-electric-blue/60 ml-auto mt-2"></div>
        </div>
      </div>
    </div>
  );
};

