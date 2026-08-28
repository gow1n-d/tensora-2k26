/**
 * TENSORA 2026 - Project Submission Portal Component
 */

function openSubmissionModal() {
  const modal = document.getElementById('submissionModal');
  if (!modal) return;

  const trkSelect = document.getElementById('subTrack');
  if (trkSelect && trkSelect.options.length <= 1) {
    trkSelect.innerHTML = '<option value="">-- Select Innovation Track Solved --</option>' +
      INNOVATION_TRACKS.map(t => `<option value="${t.id}">${t.name}</option>`).join('');
  }

  const formPane = document.getElementById('submissionFormPane');
  const successPane = document.getElementById('submissionSuccessPane');
  if (formPane) formPane.style.display = 'block';
  if (successPane) successPane.style.display = 'none';

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

  document.querySelectorAll('[data-open-submission]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openSubmissionModal();
    });
  });
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { initSubmission, openSubmissionModal, closeSubmissionModal, validateAndSubmitProject };
}
