function initAll() {
  setupNavbar();
  setupMobileMenu();
  setupSmoothScroll();
  setupScrollTop();
  animateHero();
  animateStats();
  animateProjects();
  animatePhilosophy();
  animateNosotros();
  animateMap();
  initFeatureShuffler();
  initTypewriter();
}

// NAVBAR — Transparent Hero → Glassmorphic Pill
function setupNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const onScroll = () => {
    navbar.classList.toggle('navbar--scrolled', window.scrollY > 60);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// MENU MOVIL
function setupMobileMenu() {
  var toggleBtn = document.getElementById('menu-toggle');
  var menu = document.getElementById('mobile-menu');
  if (!toggleBtn || !menu) return;

  // Abrir / cerrar menu
  toggleBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    var isOpen = !menu.classList.contains('hidden');
    if (isOpen) {
      menu.classList.add('hidden');
      toggleBtn.setAttribute('aria-expanded', 'false');
    } else {
      menu.classList.remove('hidden');
      toggleBtn.setAttribute('aria-expanded', 'true');
    }
  });

  document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !toggleBtn.contains(e.target)) {
      menu.classList.add('hidden');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

// DESPLAZAMIENTO SUAVE
function setupSmoothScroll() {
  var NAV_HEIGHT = 80;

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (!href || href === '#') return;

      var target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      e.stopPropagation();

      // Cerrar menú móvil inmediatamente
      var menu = document.getElementById('mobile-menu');
      var toggleBtn = document.getElementById('menu-toggle');
      if (menu) menu.classList.add('hidden');
      if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');

      // Scroll suave con mejor compatibilidad en móvil
      setTimeout(function () {
        var targetTop = target.offsetTop - NAV_HEIGHT;
        window.scrollTo({
          top: targetTop,
          behavior: 'smooth',
        });
      }, 100);
    });
  });
}

// BOTON VOLVER AL TOP
function setupScrollTop() {
  var btn = document.getElementById('scroll-top-btn');
  if (!btn) return;

  window.addEventListener(
    'scroll',
    function () {
      if (window.scrollY > 450) {
        btn.classList.add('scroll-top-btn--visible');
      } else {
        btn.classList.remove('scroll-top-btn--visible');
      }
    },
    { passive: true },
  );

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ================================================================
// GSAP - Hero
// ================================================================
function animateHero() {
  var elements = [
    '.hero-eyebrow',
    '.hero-line-1',
    '.hero-line-2',
    '.hero-sub',
    '.hero-ctas',
    '.hero-scroll',
  ];

  elements.forEach(function (sel) {
    var el = document.querySelector(sel);
    if (el) gsap.set(el, { opacity: 0, y: 35 });
  });

  var tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.2 });
  tl.to('.hero-eyebrow', { opacity: 1, y: 0, duration: 0.8 })
    .to('.hero-line-1', { opacity: 1, y: 0, duration: 0.9 }, '-=0.45')
    .to('.hero-line-2', { opacity: 1, y: 0, duration: 0.9 }, '-=0.60')
    .to('.hero-sub', { opacity: 1, y: 0, duration: 0.7 }, '-=0.45')
    .to('.hero-ctas', { opacity: 1, y: 0, duration: 0.7 }, '-=0.35')
    .to('.hero-scroll', { opacity: 1, y: 0, duration: 0.6 }, '-=0.2');
}

// ================================================================
// GSAP - Stats counter
// ================================================================
function animateStats() {
  var items = document.querySelectorAll('.stat-item');
  if (!items.length) return;

  gsap.set('.stat-item', { opacity: 0, y: 20 });

  ScrollTrigger.create({
    trigger: '.stat-item',
    start: 'top 88%',
    once: true,
    onEnter: function () {
      gsap.to('.stat-item', {
        opacity: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.12,
        ease: 'power2.out',
      });
      document.querySelectorAll('[data-count]').forEach(animateCounter);
    },
  });
}

function animateCounter(el) {
  var target = parseInt(el.getAttribute('data-count'), 10);
  var duration = 1400;
  var start = null;

  function step(ts) {
    if (!start) start = ts;
    var prog = Math.min((ts - start) / duration, 1);
    var eased = 1 - Math.pow(1 - prog, 3);
    el.textContent = Math.round(eased * target);
    if (prog < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// ================================================================
// GSAP - Projects
// ================================================================
function animateProjects() {
  if (!document.querySelector('.projects-label')) return;

  gsap.set('.projects-label', { opacity: 0, x: -20 });
  gsap.set('.projects-title', { opacity: 0, y: 28 });
  gsap.set('.project-card', { opacity: 0, y: 40 });

  ScrollTrigger.create({
    trigger: '#terrenos',
    start: 'top 72%',
    once: true,
    onEnter: function () {
      gsap.to('.projects-label', {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: 'power2.out',
      });
      gsap.to('.projects-title', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.1,
        ease: 'power3.out',
      });
      gsap.to('.project-card', {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        delay: 0.2,
        ease: 'power3.out',
      });
    },
  });
}

// ================================================================
// GSAP - Philosophy
// ================================================================
function animatePhilosophy() {
  var items = [
    '.phil-eyebrow',
    '.phil-q1',
    '.phil-divider',
    '.phil-q2',
    '.phil-body',
    '.phil-cta',
  ];

  items.forEach(function (sel) {
    if (document.querySelector(sel)) gsap.set(sel, { opacity: 0, y: 28 });
  });

  ScrollTrigger.create({
    trigger: '.philosophy-section',
    start: 'top 62%',
    once: true,
    onEnter: function () {
      items.forEach(function (sel, i) {
        gsap.to(sel, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay: i * 0.16,
          ease: 'power3.out',
        });
      });
    },
  });

  var parallaxImg = document.getElementById('parallax-img');
  if (parallaxImg) {
    gsap.to(parallaxImg, {
      yPercent: -18,
      ease: 'none',
      scrollTrigger: {
        trigger: '.philosophy-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  }
}

// ================================================================
// GSAP - Nosotros
// ================================================================
function animateNosotros() {
  var img = document.querySelector('.nosotros-img');
  var content = document.querySelector('.nosotros-content');
  var pills = document.querySelectorAll('.trust-pill');

  if (img) gsap.set('.nosotros-img', { opacity: 0, x: -40 });
  if (content) gsap.set('.nosotros-content', { opacity: 0, x: 40 });
  if (pills.length) gsap.set('.trust-pill', { opacity: 0, x: 20 });

  ScrollTrigger.create({
    trigger: '#nosotros',
    start: 'top 65%',
    once: true,
    onEnter: function () {
      if (img)
        gsap.to('.nosotros-img', {
          opacity: 1,
          x: 0,
          duration: 1.0,
          ease: 'power3.out',
        });
      if (content)
        gsap.to('.nosotros-content', {
          opacity: 1,
          x: 0,
          duration: 1.0,
          delay: 0.18,
          ease: 'power3.out',
        });
      if (pills.length)
        gsap.to('.trust-pill', {
          opacity: 1,
          x: 0,
          duration: 0.65,
          stagger: 0.12,
          delay: 0.5,
          ease: 'power2.out',
        });
    },
  });
}

// ================================================================
// GSAP - Map
// ================================================================
function animateMap() {
  if (!document.querySelector('.map-wrap')) return;

  gsap.set('.map-wrap', { opacity: 0, y: 24 });

  ScrollTrigger.create({
    trigger: '.map-wrap',
    start: 'top 82%',
    once: true,
    onEnter: function () {
      gsap.to('.map-wrap', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      });
    },
  });
}

// MICRO-UI: Feature Shuffler (Todas las tarjetas de características en proyectos, con texto e ícono rotativo)
function initFeatureShuffler() {
  const shufflers = document.querySelectorAll('.feature-shuffler');
  if (!shufflers.length) return;

  shufflers.forEach((shuffler) => {
    const track = shuffler.querySelector('.flex');
    if (!track) return;

    const CHIP_H = 46;
    const TOTAL = 8;
    let offset = 0;

    setInterval(() => {
      offset += CHIP_H;

      track.style.transition =
        'transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1)';
      track.style.transform = `translateY(-${offset}px)`;

      if (offset >= CHIP_H * TOTAL) {
        setTimeout(() => {
          track.style.transition = 'none';
          track.style.transform = 'translateY(0)';
          offset = 0;
        }, 100);
      }
    }, 1800);
  });
}

// DOM — setup que no depende de librerías externas
document.addEventListener('DOMContentLoaded', () => {
  setupNavbar();
  setupMobileMenu();
  setupSmoothScroll();
  setupScrollTop();
  initFeatureShuffler();

  // GSAP — opcional, mejora la experiencia si carga
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    animateHero();
    animateStats();
    animateProjects();
    animatePhilosophy();
    animateNosotros();
    animateMap();
  }
});

// Swiper viene del CDN y puede llegar despues de DOMContentLoaded
window.addEventListener('load', () => {
  initSwipers();
});

// SWIPERS — Carrusel de imagenes en cards de proyectos
function initSwipers() {
  if (typeof Swiper === 'undefined') {
    console.warn('Swiper no disponible — reintentando en 500ms');
    setTimeout(initSwipers, 500);
    return;
  }

  var config = {
    loop: true,
    speed: 350,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    grabCursor: true,
    threshold: 10,
    touchAngle: 45,
    keyboard: { enabled: true },
  };

  new Swiper('.swiper-maitenes', config);
  new Swiper('.swiper-quillayes', config);
  new Swiper('.swiper-mahuida', config);
}
