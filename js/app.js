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

// Scroll spy for clean navbar with active underline indicator
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link, .drawer-link');
  const header = document.querySelector('.main-header');
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  function onScroll() {
    const scrollY = window.pageYOffset;

    if (header) {
      header.classList.toggle('scrolled', scrollY > 40);
    }

    if (scrollToTopBtn) {
      scrollToTopBtn.classList.toggle('visible', scrollY > 500);
    }

    let currentSectionId = 'home';
    sections.forEach(current => {
      const sectionTop = current.offsetTop - 140;
      if (scrollY >= sectionTop) {
        currentSectionId = current.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${currentSectionId}`);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
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
  init3DTilt();
  initKeyboardAccessibility();

  console.log("🚀 TENSORA 2026 - 3D Cyber Experience Active");
});
