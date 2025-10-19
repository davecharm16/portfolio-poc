/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      keyframes: {
        'gradient': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'slide-in-from-bottom-4': {
          from: { transform: 'translateY(1rem)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-in-from-top-4': {
          from: { transform: 'translateY(-1rem)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-in-from-left-4': {
          from: { transform: 'translateX(-1rem)', opacity: '0' },
          to: { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-in-from-right-4': {
          from: { transform: 'translateX(1rem)', opacity: '0' },
          to: { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-in-from-bottom-4': 'slide-in-from-bottom-4 0.6s ease-out',
        'slide-in-from-top-4': 'slide-in-from-top-4 0.6s ease-out',
        'slide-in-from-left-4': 'slide-in-from-left-4 0.6s ease-out',
        'slide-in-from-right-4': 'slide-in-from-right-4 0.6s ease-out',
      },
    },
  },
  plugins: [],
};
