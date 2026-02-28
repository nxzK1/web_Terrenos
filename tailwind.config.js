/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './*.js', './src/**/*.css'],
  theme: {
    extend: {
      colors: {
        verde: {
          DEFAULT: 'rgb(16 185 129 / <alpha-value>)',
          dark: 'rgb(5 150 105 / <alpha-value>)',
        },
        arena: {
          DEFAULT: 'rgb(245 158 11 / <alpha-value>)',
          dark: 'rgb(217 119 6 / <alpha-value>)',
        },
        cielo: {
          DEFAULT: 'rgb(14 165 233 / <alpha-value>)',
        },
        oscuro: {
          DEFAULT: 'rgb(30 41 59 / <alpha-value>)',
        },
        cream: {
          DEFAULT: 'rgb(248 246 241 / <alpha-value>)',
        },
        rojo: {
          DEFAULT: 'rgb(239 68 68 / <alpha-value>)',
        },
        morado: {
          DEFAULT: 'rgb(101 15 182 / <alpha-value>)',
        },
        amarillo: {
          DEFAULT: 'rgb(243 239 8 / <alpha-value>)',
        },
        rosado: {
          DEFAULT: 'rgb(212 23 212 / <alpha-value>)',
        },
        aqua: {
          DEFAULT: 'rgb(28 204 145 / <alpha-value>)',
        },
      },
    },
  },
  theme: {
    extend: {
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
