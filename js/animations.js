/**
 * TENSORA 2026 - Master Interactive Animations & Motion Engine
 * Delivers buttery smooth 60fps scroll reveals, number counters, 3D spotlights & particle aura.
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. SCROLL REVEAL OBSERVER ENGINE
  // --------------------------------------------------------------------------
  function initScrollReveal() {
    const revealTargets = document.querySelectorAll(`
      .section-header,
      .glance-card,
      .pipeline-step,
      .theme-card-3d,
      .track-card,
      .timeline-item,
      .podium-card,
      .special-award-card,
      .pillar-card,
      .rubric-card,
      .mandatory-alert-card,
      .organizer-turing-hero,
      .footer-top-grid > div
    `);

    revealTargets.forEach((el, index) => {
      if (!el.classList.contains('reveal-init')) {
        el.classList.add('reveal-init');
      }
    });

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.12
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;

          // Stagger children inside grid or sibling lists
          const parent = el.parentElement;
          if (parent) {
            const siblings = Array.from(parent.children).filter(child => child.classList.contains('reveal-init'));
            const siblingIndex = siblings.indexOf(el);
            if (siblingIndex > 0) {
              el.style.transitionDelay = `${Math.min(siblingIndex * 85, 450)}ms`;
            }
          }

          el.classList.add('revealed');
          observer.unobserve(el);
        }
      });
    }, observerOptions);

    revealTargets.forEach(el => revealObserver.observe(el));
  }

  // --------------------------------------------------------------------------
  // 2. ANIMATED NUMBER & METRIC COUNTERS
  // --------------------------------------------------------------------------
  function initNumberCounters() {
    const counterElements = document.querySelectorAll('.counter-animate, [data-counter-target]');

    if (counterElements.length === 0) return;

    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-counter-target'), 10) || 0;
          const prefix = el.getAttribute('data-counter-prefix') || '';
          const suffix = el.getAttribute('data-counter-suffix') || '';
          const duration = 1800; // ms
          const startTime = performance.now();

          function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out quad function
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(easeOut * target);

            el.textContent = `${prefix}${currentVal.toLocaleString()}${suffix}`;

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              el.textContent = `${prefix}${target.toLocaleString()}${suffix}`;
            }
          }

          requestAnimationFrame(updateCounter);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.3 });

    counterElements.forEach(el => counterObserver.observe(el));
  }

  // --------------------------------------------------------------------------
  // 3. RUBRIC ANIMATED SCORE BARS
  // --------------------------------------------------------------------------
  function initRubricAnimations() {
    const rubricFills = document.querySelectorAll('.rubric-bar-fill');
    
    rubricFills.forEach(fill => {
      const initialWidth = fill.style.width || fill.getAttribute('style')?.match(/width:\s*([^;]+)/)?.[1] || '0%';
      fill.setAttribute('data-target-width', initialWidth);
      fill.style.width = '0%';
    });

    const rubricObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const card = entry.target;
          const fills = card.querySelectorAll('.rubric-bar-fill');
          fills.forEach((fill, idx) => {
            const targetWidth = fill.getAttribute('data-target-width') || '0%';
            setTimeout(() => {
              fill.style.width = targetWidth;
            }, idx * 120);
          });
          observer.unobserve(card);
        }
      });
    }, { threshold: 0.2 });

    const rubricCards = document.querySelectorAll('.rubric-card, #rubric');
    rubricCards.forEach(card => rubricObserver.observe(card));
  }

  // --------------------------------------------------------------------------
  // 4. HOLOGRAPHIC MOUSE SPOTLIGHT (3D CARD GLOW)
  // --------------------------------------------------------------------------
  function initCardSpotlights() {
    const cards = document.querySelectorAll(`
      .theme-card-3d,
      .card-3d,
      .podium-card,
      .pillar-card,
      .special-award-card,
      .timeline-card,
      .rubric-card,
      .glance-card
    `);

    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });
  }

  // --------------------------------------------------------------------------
  // 5. LIGHTWEIGHT CYBER PARTICLE CANVAS LAYER
  // --------------------------------------------------------------------------
  function initCyberParticles() {
    // Only init if not on reduced motion
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let canvas = document.getElementById('cyberParticleCanvas');
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.id = 'cyberParticleCanvas';
      document.body.prepend(canvas);
    }

    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }, { passive: true });

    // Particle pool
    const particleCount = Math.min(Math.floor((width * height) / 28000), 45);
    const particles = [];
    const colors = ['rgba(230, 36, 41, ', 'rgba(255, 215, 0, ', 'rgba(0, 240, 255, '];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        size: Math.random() * 2 + 1,
        colorBase: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.005
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }, { passive: true });

    function drawParticles() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse avoidance / pull
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const angle = Math.atan2(dy, dx);
          p.x -= Math.cos(angle) * 0.8;
          p.y -= Math.sin(angle) * 0.8;
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.colorBase}${p.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `${p.colorBase}0.8)`;
        ctx.fill();

        // Draw subtle interconnecting energy lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist2 = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist2 < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 215, 0, ${0.15 * (1 - dist2 / 110)})`;
            ctx.lineWidth = 0.6;
            ctx.shadowBlur = 0;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(drawParticles);
    }

    requestAnimationFrame(drawParticles);
  }

  // --------------------------------------------------------------------------
  // INITIALIZATION ON DOM READY
  // --------------------------------------------------------------------------
  function initAllAnimations() {
    initScrollReveal();
    initRubricAnimations();
    initCardSpotlights();
    initNumberCounters();
    initCyberParticles();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAllAnimations);
  } else {
    initAllAnimations();
  }
})();
