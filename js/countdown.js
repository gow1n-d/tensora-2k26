/**
 * TENSORA 2026 - Phase-Aware Dynamic Event Countdown Engine
 * Automatically steps through:
 * 1. Problem Statements Drop (21 Sept 2026, 5:00 PM IST)
 * 2. Hackathon Sprint Starts (21 Sept 2026, 6:00 PM IST)
 * 3. 24h Submission Deadline (22 Sept 2026, 6:00 PM IST)
 * 4. Offline Grand Finale (23 Sept 2026, 9:00 AM IST)
 * 5. Awards & Results (23 Sept 2026, 5:30 PM IST)
 */

const EVENT_PHASES = [
  {
    name: "Problem Statements Drop In",
    badge: "PHASE 1: CHALLENGE REVEAL",
    timeStr: "21 Sept 2026, 5:00 PM IST",
    targetDate: new Date("2026-09-21T17:00:00+05:30").getTime(),
    description: "The 20 official problem statements will be revealed online."
  },
  {
    name: "24-Hour Hackathon Begins In",
    badge: "PHASE 2: BUILD SPRINT",
    timeStr: "21 Sept 2026, 6:00 PM IST",
    targetDate: new Date("2026-09-21T18:00:00+05:30").getTime(),
    description: "The 24-hour remote development sprint officially commences."
  },
  {
    name: "Submission Deadline In",
    badge: "PHASE 3: SUBMISSION CLOSING",
    timeStr: "22 Sept 2026, 6:00 PM IST",
    targetDate: new Date("2026-09-22T18:00:00+05:30").getTime(),
    description: "GitHub repositories, demo videos, and technical reports must be locked."
  },
  {
    name: "Grand Finale Begins In",
    badge: "PHASE 4: OFFLINE PITCH AT KLNCE",
    timeStr: "23 Sept 2026, 9:00 AM IST",
    targetDate: new Date("2026-09-23T09:00:00+05:30").getTime(),
    description: "Shortlisted teams assemble at K.L.N. College of Engineering for live defense."
  },
  {
    name: "Awards Ceremony In",
    badge: "PHASE 5: RESULTS & AWARDS",
    timeStr: "23 Sept 2026, 5:30 PM IST",
    targetDate: new Date("2026-09-23T17:30:00+05:30").getTime(),
    description: "Winners of TENSORA 2026 and category awards are announced."
  }
];

let countdownInterval = null;

function initCountdown() {
  const phaseTitleEl = document.getElementById('countdownPhaseTitle');
  const phaseBadgeEl = document.getElementById('countdownPhaseBadge');
  const phaseTargetEl = document.getElementById('countdownPhaseTarget');
  
  const daysEl = document.getElementById('cdDays');
  const hoursEl = document.getElementById('cdHours');
  const minutesEl = document.getElementById('cdMinutes');
  const secondsEl = document.getElementById('cdSeconds');
  const liveIstClockEl = document.getElementById('liveIstClock');

  function updateClock() {
    const now = new Date();
    
    // Update live IST clock
    if (liveIstClockEl) {
      const istOptions = { timeZone: 'Asia/Kolkata', hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' };
      liveIstClockEl.textContent = `${now.toLocaleTimeString('en-US', istOptions)} IST`;
    }

    const nowTime = now.getTime();
    
    // Find active target phase
    let activePhase = null;
    for (let i = 0; i < EVENT_PHASES.length; i++) {
      if (EVENT_PHASES[i].targetDate > nowTime) {
        activePhase = EVENT_PHASES[i];
        break;
      }
    }

    if (!activePhase) {
      // All phases completed
      if (phaseTitleEl) phaseTitleEl.textContent = "TENSORA 2026 Concluded!";
      if (phaseBadgeEl) phaseBadgeEl.textContent = "EVENT COMPLETED";
      if (phaseTargetEl) phaseTargetEl.textContent = "Thank you to all participant innovators and organizers.";
      if (daysEl) daysEl.textContent = "00";
      if (hoursEl) hoursEl.textContent = "00";
      if (minutesEl) minutesEl.textContent = "00";
      if (secondsEl) secondsEl.textContent = "00";
      return;
    }

    // Set active phase info
    if (phaseTitleEl) phaseTitleEl.textContent = activePhase.name;
    if (phaseBadgeEl) phaseBadgeEl.textContent = activePhase.badge;
    if (phaseTargetEl) phaseTargetEl.textContent = `Target: ${activePhase.timeStr}`;

    const distance = activePhase.targetDate - nowTime;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateClock();
  if (countdownInterval) clearInterval(countdownInterval);
  countdownInterval = setInterval(updateClock, 1000);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { initCountdown, EVENT_PHASES };
}
