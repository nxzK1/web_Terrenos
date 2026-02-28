/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './*.js'],
  safelist: [
    // Proteger TODOS los colores custom con sus variantes de opacidad
    // Esto evita que Tailwind purgue clases que no detecta correctamente
    { pattern: /^bg-(verde|arena|cielo|oscuro|cream)(-(dark))?$/ },
    { pattern: /^bg-(verde|arena|cielo|oscuro|cream)(-(dark))?\/\d+$/ },
    { pattern: /^text-(verde|arena|cielo|oscuro|cream)(-(dark))?$/ },
    { pattern: /^text-(verde|arena|cielo|oscuro|cream)(-(dark))?\/\d+$/ },
    { pattern: /^border-(verde|arena|cielo|oscuro|cream)(-(dark))?$/ },
    { pattern: /^border-(verde|arena|cielo|oscuro|cream)(-(dark))?\/\d+$/ },
    // Variantes de opacidad sobre blanco y negro (text-white/X, bg-white/X)
    { pattern: /^(bg|text|border)-white\/\d+$/ },
    { pattern: /^(bg|text|border)-black\/\d+$/ },
    // Gradientes con colores custom
    { pattern: /^from-(verde|arena|cielo|oscuro|cream)(-(dark))?\/\d+$/ },
    { pattern: /^to-(verde|arena|cielo|oscuro|cream)(-(dark))?\/\d+$/ },
    // Clases de componentes custom
    'navbar',
    'navbar-inner',
    'navbar-brand',
    'navbar--scrolled',
    'nav-link',
    'ham-bar',
    'mobile-link',
    'hero-section',
    'hero-bg',
    'hero-overlay',
    'hero-eyebrow',
    'hero-line-1',
    'hero-line-2',
    'hero-sub',
    'hero-ctas',
    'hero-scroll',
    'scroll-dot',
    'stat-item',
    'project-card',
    'card-img',
    'feature-shuffler',
    'feature-chip',
    'typewriter-cursor',
    'process-step',
    'step-dot',
    'philosophy-section',
    'philosophy-bg',
    'phil-eyebrow',
    'phil-q1',
    'phil-divider',
    'phil-q2',
    'phil-body',
    'phil-cta',
    'nosotros-img',
    'nosotros-content',
    'trust-pill',
    'map-wrap',
    'noise-overlay',
    'magnetic-btn',
    'whatsapp-fab',
    'scroll-top-btn',
    'scroll-top-btn--visible',
    'process-step',
    'active',
  ],
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
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      },
    },
  },
  plugins: [],
};
