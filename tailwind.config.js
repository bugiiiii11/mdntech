/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Matrix Green - Primary Brand Color
        'primary-green': '#00FF41',
        'primary-green-dark': '#00CC34',
        'primary-green-light': '#39FF6C',
        'primary-green-glow': 'rgba(0, 255, 65, 0.5)',

        // Black - Background & Text
        'black-pure': '#000000',
        'black-soft': '#0A0A0A',
        'black-elevated': '#141414',
        'black-card': '#1A1A1A',

        // White - Text & Accents
        'white-pure': '#FFFFFF',
        'white-soft': '#F5F5F5',
        'white-muted': '#B3B3B3',
        'white-dim': '#666666',

        // Functional Colors
        'success': '#00FF41',
        'error': '#FF0040',
        'warning': '#FFB800',
        'info': '#00E5FF',
      },
      fontFamily: {
        primary: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        secondary: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      fontSize: {
        // Desktop Typography
        'hero': '72px',
        'h1': '56px',
        'h2': '40px',
        'h3': '32px',
        'h4': '24px',
        'body-large': '20px',
        'body': '16px',
        'small': '14px',
        'tiny': '12px',
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '24px',
        '6': '32px',
        '7': '48px',
        '8': '64px',
        '9': '96px',
        '10': '128px',
        '11': '192px',
        '12': '256px',
      },
      backgroundImage: {
        'gradient-matrix': 'linear-gradient(135deg, #00FF41 0%, #00CC34 100%)',
        'gradient-dark-overlay': 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)',
        'gradient-glow': 'radial-gradient(circle, rgba(0,255,65,0.2) 0%, rgba(0,255,65,0) 70%)',
      },
      boxShadow: {
        'green-glow': '0 0 20px rgba(0, 255, 65, 0.3)',
        'green-glow-lg': '0 0 40px rgba(0, 255, 65, 0.6)',
        'green-glow-sm': '0 0 30px rgba(0, 255, 65, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-green': 'pulseGreen 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGreen: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 255, 65, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 255, 65, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
