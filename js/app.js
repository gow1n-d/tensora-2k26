/**
 * TENSORA 2026 - Main Application Controller with 3D Card Parallax & Interactive Controls
 */

function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast-pill toast-${type}`;
  
  let icon = 'fa-solid fa-circle-info';
  if (type === 'success') icon = 'fa-solid fa-circle-check';
  if (type === 'error') icon = 'fa-solid fa-triangle-exclamation';
  if (type === 'warning') icon = 'fa-solid fa-bell';

  toast.innerHTML = `
    <i class="${icon}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('show');
  }, 10);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentElement) toast.parentElement.removeChild(toast);
    }, 300);
  }, 4000);
}

// 3D Parallax Tilt Effect on Cards
function init3DTilt() {
  const cards = document.querySelectorAll('.theme-card-3d, .card-3d, .podium-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -7;
      const rotateY = ((x - centerX) / centerX) * 7;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// Scroll spy for clean floating navbar
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const header = document.querySelector('.main-header');
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  function onScroll() {
    const scrollY = window.pageYOffset;

    if (header) {
      header.classList.toggle('scrolled', scrollY > 50);
    }

    if (scrollToTopBtn) {
      scrollToTopBtn.classList.toggle('visible', scrollY > 500);
    }

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 140;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${sectionId}`);
        });
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
}

// Mobile drawer navigation
function initMobileNav() {
  const menuToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('mobileNavOverlay');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');

  if (!menuToggle || !mobileDrawer) return;

  function toggleMenu() {
    const isOpen = mobileDrawer.classList.contains('open');
    mobileDrawer.classList.toggle('open', !isOpen);
    if (overlay) overlay.classList.toggle('open', !isOpen);
    menuToggle.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
    document.body.style.overflow = !isOpen ? 'hidden' : '';
  }

  function closeMenu() {
    mobileDrawer.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  menuToggle.addEventListener('click', toggleMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeMenu);

  mobileDrawer.querySelectorAll('.drawer-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  mobileDrawer.querySelectorAll('[data-open-register], [data-open-submission]').forEach(btn => {
    btn.addEventListener('click', closeMenu);
  });
}

// Challenge reminder notify action
function notifyOnRelease() {
  showToast("You're subscribed! We'll alert you on 21 Sept, 12:00 PM IST when challenges unlock.", "success");
}

// Global keyboard listeners
function initKeyboardAccessibility() {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (typeof closeRegisterModal === 'function') closeRegisterModal();
      if (typeof closeSubmissionModal === 'function') closeSubmissionModal();
    }
  });

  const scrollBtn = document.getElementById('scrollToTopBtn');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// App initialization
document.addEventListener('DOMContentLoaded', () => {
  if (typeof initCountdown === 'function') initCountdown();
  if (typeof initRegistration === 'function') initRegistration();
  if (typeof initSubmission === 'function') initSubmission();
  if (typeof initFaq === 'function') initFaq();
  
  initScrollSpy();
  initMobileNav();
  init3DTilt();
  initKeyboardAccessibility();

  console.log("🚀 TENSORA 2026 - 3D Cyber Experience Active");
});
