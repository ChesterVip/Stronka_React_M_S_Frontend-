/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          100: '#fef7e0',
          200: '#feeaa7',
          300: '#fdcb6e',
          400: '#e17055',
          500: '#d63031',
          600: '#b71540',
          700: '#8b2635',
          800: '#6c1827',
          900: '#4a0e1b'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'pulse-glow': 'pulseGlow 2s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(253, 203, 110, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(253, 203, 110, 0.8)' }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}