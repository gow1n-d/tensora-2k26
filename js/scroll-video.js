/**
 * TENSORA 2026 - Scroll-Driven Video Background Controller
 * Smoothly scrubs background video playback in sync with page scroll position.
 */

(function () {
  'use strict';

  function initScrollVideo() {
    const video = document.getElementById('scrollBgVideo');
    const backdrop = document.getElementById('scrollVideoBackdrop');

    if (!video) return;

    let targetTime = 0;
    let isReady = false;
    let isSeeking = false;
    let animFrameId = null;

    // Ensure video is muted and stopped from auto-advancing
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.pause();

    function getScrollProgress() {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
      const docHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
        document.documentElement.clientHeight
      );
      const maxScroll = Math.max(docHeight - window.innerHeight, 1);
      return Math.min(Math.max(scrollY / maxScroll, 0), 1);
    }

    function updateTargetTime() {
      if (!video.duration || Number.isNaN(video.duration)) return;
      const progress = getScrollProgress();
      // Keep slightly within bounds to avoid jumping to end
      const safeDuration = Math.max(video.duration - 0.05, 0.1);
      targetTime = progress * safeDuration;
    }

    // High performance render loop using requestAnimationFrame
    function renderLoop() {
      if (isReady && video.duration) {
        const current = video.currentTime;
        const diff = targetTime - current;

        // If difference is perceptible, scrub toward target
        if (Math.abs(diff) > 0.015) {
          // Adaptive lerping: faster when far, buttery smooth when close
          const step = Math.min(Math.max(Math.abs(diff) * 0.35, 0.02), 0.6);
          const nextTime = current + Math.sign(diff) * step;

          if (!isSeeking && isFinite(nextTime)) {
            try {
              video.currentTime = Math.min(Math.max(nextTime, 0), video.duration - 0.02);
            } catch (err) {
              // Ignore seek frame collisions
            }
          }
        }
      }

      animFrameId = requestAnimationFrame(renderLoop);
    }

    function onVideoReady() {
      if (isReady) return;
      isReady = true;
      video.pause();

      if (backdrop) {
        backdrop.classList.add('video-loaded');
      }

      updateTargetTime();
      if (video.duration && isFinite(targetTime)) {
        try {
          video.currentTime = targetTime;
        } catch (e) {}
      }
    }

    video.addEventListener('loadedmetadata', onVideoReady);
    video.addEventListener('canplaythrough', onVideoReady);
    video.addEventListener('loadeddata', onVideoReady);

    video.addEventListener('seeking', () => { isSeeking = true; });
    video.addEventListener('seeked', () => { isSeeking = false; });

    // If metadata is already cached / available
    if (video.readyState >= 1) {
      onVideoReady();
    }

    // Listen to scroll & window resizing
    window.addEventListener('scroll', updateTargetTime, { passive: true });
    window.addEventListener('resize', updateTargetTime, { passive: true });

    // Handle tab visibility to conserve GPU/battery
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        if (animFrameId) {
          cancelAnimationFrame(animFrameId);
          animFrameId = null;
        }
      } else {
        updateTargetTime();
        if (!animFrameId) {
          renderLoop();
        }
      }
    });

    // Start render loop
    updateTargetTime();
    renderLoop();
  }

  // Auto-init on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollVideo);
  } else {
    initScrollVideo();
  }
})();
