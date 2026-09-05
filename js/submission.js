/**
 * TENSORA 2026 - Project Submission Portal Component
 * 
 * CONTROL TOGGLE:
 * Set `IS_SUBMISSION_PORTAL_OPEN = false` to keep submission portal closed.
 * Set `IS_SUBMISSION_PORTAL_OPEN = true` whenever you want to open submissions.
 */

// =========================================================================
// SUBMISSION PORTAL CONFIGURATION
// Change to true whenever you are ready to open submissions.
// =========================================================================
const IS_SUBMISSION_PORTAL_OPEN = false;

function openSubmissionModal() {
  const modal = document.getElementById('submissionModal');
  if (!modal) return;

  const formPane = document.getElementById('submissionFormPane');
  const successPane = document.getElementById('submissionSuccessPane');
  const closedPane = document.getElementById('submissionClosedPane');

  if (!IS_SUBMISSION_PORTAL_OPEN) {
    if (formPane) formPane.style.display = 'none';
    if (successPane) successPane.style.display = 'none';
    if (closedPane) closedPane.style.display = 'block';
  } else {
    const trkSelect = document.getElementById('subTrack');
    if (trkSelect && trkSelect.options.length <= 1 && typeof INNOVATION_TRACKS !== 'undefined') {
      trkSelect.innerHTML = '<option value="">-- Select Innovation Track Solved --</option>' +
        INNOVATION_TRACKS.map(t => `<option value="${t.id}">${t.name}</option>`).join('');
    }

    if (formPane) formPane.style.display = 'block';
    if (successPane) successPane.style.display = 'none';
    if (closedPane) closedPane.style.display = 'none';
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeSubmissionModal() {
  const modal = document.getElementById('submissionModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function validateAndSubmitProject(e) {
  if (e) e.preventDefault();

  if (!IS_SUBMISSION_PORTAL_OPEN) {
    showToast("Submission portal is currently closed. It will open during the 24-hour build sprint.", "warning");
    return;
  }

  const regId = document.getElementById('subRegId').value.trim();
  const email = document.getElementById('subEmail').value.trim();
  const track = document.getElementById('subTrack').value;
  const projectTitle = document.getElementById('subProjectTitle').value.trim();
  const github = document.getElementById('subGithub').value.trim();
  const video = document.getElementById('subVideo').value.trim();
  const deck = document.getElementById('subDeck').value.trim();
  
  const chkAi = document.getElementById('chkAiCore').checked;
  const chkOriginal = document.getElementById('chkOriginal').checked;
  const chkReadme = document.getElementById('chkReadme').checked;

  if (!regId || !email || !track || !projectTitle || !github || !video || !deck) {
    showToast("Please fill in all mandatory project submission fields.", "error");
    return;
  }

  if (!github.includes('github.com')) {
    showToast("Please provide a valid GitHub repository URL.", "error");
    return;
  }

  if (!chkAi || !chkOriginal || !chkReadme) {
    showToast("You must confirm all mandatory AI & originality declarations.", "error");
    return;
  }

  const formPane = document.getElementById('submissionFormPane');
  const successPane = document.getElementById('submissionSuccessPane');
  const subRefCode = document.getElementById('subRefCode');
  const subTeamDisplay = document.getElementById('subConfirmedId');

  const refCode = `SUB26-${Math.floor(100000 + Math.random() * 900000)}`;

  if (subRefCode) subRefCode.textContent = refCode;
  if (subTeamDisplay) subTeamDisplay.textContent = regId;

  if (formPane) formPane.style.display = 'none';
  if (successPane) successPane.style.display = 'block';

  showToast(`Project Locked & Submitted Successfully! [${refCode}]`, 'success');
}

function updateSubmissionButtonState() {
  document.querySelectorAll('[data-open-submission]').forEach(btn => {
    if (!IS_SUBMISSION_PORTAL_OPEN) {
      btn.setAttribute('title', 'Submissions currently closed (Opens during 24h Build Sprint)');
      // If no badge exists, add a subtle closed pill
      if (!btn.querySelector('.submission-closed-pill')) {
        const pill = document.createElement('span');
        pill.className = 'submission-closed-pill';
        pill.style.cssText = 'font-size: 0.68rem; font-family: var(--font-mono); font-weight: 700; margin-left: 0.4rem; padding: 0.15rem 0.45rem; border-radius: 9999px; background: rgba(230, 36, 41, 0.25); border: 1px solid rgba(230, 36, 41, 0.5); color: #ff9999; vertical-align: middle;';
        pill.textContent = 'Closed';
        btn.appendChild(pill);
      }
      const icon = btn.querySelector('i');
      if (icon) {
        icon.className = 'fa-solid fa-lock';
      }
    } else {
      btn.removeAttribute('title');
      const pill = btn.querySelector('.submission-closed-pill');
      if (pill) pill.remove();
      const icon = btn.querySelector('i');
      if (icon) {
        icon.className = 'fa-solid fa-code-commit';
      }
    }
  });
}

function initSubmission() {
  const modal = document.getElementById('submissionModal');
  const closeBtn = document.getElementById('closeSubmissionModalBtn');
  const form = document.getElementById('projectSubmissionForm');

  if (closeBtn) closeBtn.addEventListener('click', closeSubmissionModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeSubmissionModal();
    });
  }

  if (form) {
    form.addEventListener('submit', validateAndSubmitProject);
  }

  updateSubmissionButtonState();

  document.querySelectorAll('[data-open-submission]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openSubmissionModal();
    });
  });
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { 
    IS_SUBMISSION_PORTAL_OPEN,
    initSubmission, 
    openSubmissionModal, 
    closeSubmissionModal, 
    validateAndSubmitProject,
    updateSubmissionButtonState
  };
}
