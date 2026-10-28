/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#05070C',
          dark: '#030408',
          light: '#0A0E18',
        },
        navy: {
          deep: '#10182D',
          surface: '#121C35',
          card: 'rgba(16, 24, 45, 0.75)',
        },
        steel: {
          midnight: '#1B2948',
          border: 'rgba(27, 41, 72, 0.65)',
          subtle: 'rgba(27, 41, 72, 0.35)',
        },
        electric: {
          blue: '#3568FF',
          glow: 'rgba(53, 104, 255, 0.35)',
        },
        laser: {
          violet: '#8B5CFF',
          glow: 'rgba(139, 92, 255, 0.3)',
        },
        arctic: {
          cyan: '#36DDF2',
          glow: 'rgba(54, 221, 242, 0.25)',
        },
        icy: {
          lilac: '#C6A8FF',
        },
        silver: {
          ice: '#D5E0F8',
          muted: '#8D9CB8',
        },
        frost: {
          white: '#F5F7FF',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        widest_editorial: '0.22em',
        relaxed_editorial: '0.12em',
      },
      boxShadow: {
        'signal-glow': '0 0 25px -5px rgba(53, 104, 255, 0.25)',
        'laser-glow': '0 0 25px -5px rgba(139, 92, 255, 0.25)',
        'cyan-glow': '0 0 20px -5px rgba(54, 221, 242, 0.3)',
        'card-subtle': '0 10px 30px -10px rgba(5, 7, 12, 0.8)',
      },
      backgroundImage: {
        'radial-eclipse': 'radial-gradient(circle at 85% 20%, rgba(53, 104, 255, 0.12) 0%, rgba(139, 92, 255, 0.05) 35%, transparent 70%)',
        'subtle-grid': 'radial-gradient(circle, rgba(27, 41, 72, 0.25) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}

