/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C9A84C',
          light: '#D4B85C',
          dark: '#B8973C',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(201, 168, 76, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(201, 168, 76, 0.6)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        'neumorph': '12px 12px 24px #0a0a0a, -12px -12px 24px #1a1a1a',
        'neumorph-light': '8px 8px 16px #e0d6c8, -8px -8px 16px #ffffff',
        'neumorph-gold': '12px 12px 24px #0a0a0a, -12px -12px 24px #1a1a1a, 0 0 30px rgba(201, 168, 76, 0.1)',
        'inner-neumorph': 'inset 4px 4px 8px #0a0a0a, inset -4px -4px 8px #1a1a1a',
      },
    },
  },
  plugins: [],
}