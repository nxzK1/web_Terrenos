// Navbar shrink
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    navbar.classList.add('navbar--shrink');
  } else {
    navbar.classList.remove('navbar--shrink');
  }
});

// Scroll top button
const scrollTopBtn = document.getElementById('scroll-top-btn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    scrollTopBtn.classList.add('scroll-top-btn--visible');
  } else {
    scrollTopBtn.classList.remove('scroll-top-btn--visible');
  }
});
if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Cerrar menú móvil al click enlace (opcional)
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = mobileMenu?.querySelectorAll('a');
mobileLinks?.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu?.classList.add('hidden');
  });
});
