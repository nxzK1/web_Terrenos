/** @type {import('tailwindcss').Config} */
module.exports = {
  // Tailwind escanea estos archivos para purgar CSS no usado en producción
  content: ['./index.html', './dist/index.html', './script.js'],
  theme: {
    extend: {
      colors: {
        verde: '#10B981',
        'verde-dark': '#059669',
        arena: '#F59E0B',
        'arena-dark': '#D97706',
        cielo: '#0EA5E9',
        oscuro: '#1E293B',
        cream: '#F8F6F1',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '3rem',
      },
    },
  },
  plugins: [],
};
