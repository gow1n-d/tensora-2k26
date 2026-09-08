/**
 * TENSORA 2026 - Interactive Multi-Step Team Registration Wizard
 */

const INNOVATION_TRACKS = [
  { id: "track-education", name: "AI for Education & Adaptive Learning", icon: "fa-solid fa-graduation-cap" },
  { id: "track-mobility", name: "Intelligent Mobility & Transport", icon: "fa-solid fa-train-subway" },
  { id: "track-healthcare", name: "AI for Health & Wellbeing", icon: "fa-solid fa-heart-pulse" },
  { id: "track-climate", name: "Sustainable Energy & Climate Solutions", icon: "fa-solid fa-solar-panel" },
  { id: "track-agriculture", name: "AgriTech & Rural Innovation", icon: "fa-solid fa-seedling" }
];

let currentStep = 1;
let registrationData = {
  teamSize: 3,
  teamName: '',
  institution: '',
  city: '',
  state: '',
  leader: {},
  members: [],
  track1: '',
  track2: '',
  approachSummary: '',
  regId: ''
};

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSca6LaVMwjD99GuWNA_cbKprjUCKUn7OVdA8V9fW3o_5U5fmA/viewform?usp=publish-editor";

function openRegisterModal(preselectedTrackId = null) {
  window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer');
}

function closeRegisterModal() {
  const modal = document.getElementById('registerModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function populateTrackDropdowns() {
  const sel1 = document.getElementById('regTrack1');
  const sel2 = document.getElementById('regTrack2');
  if (!sel1 || !sel2) return;

  const optionsHtml = '<option value="">-- Select an Innovation Track --</option>' +
    INNOVATION_TRACKS.map(t => `<option value="${t.id}">${t.name}</option>`).join('');

  const currentVal1 = sel1.value;
  const currentVal2 = sel2.value;

  sel1.innerHTML = optionsHtml;
  sel2.innerHTML = optionsHtml;

  if (currentVal1) sel1.value = currentVal1;
  if (currentVal2) sel2.value = currentVal2;
}

function updateMemberInputs() {
  const sizeSelect = document.getElementById('regTeamSize');
  const size = parseInt(sizeSelect ? sizeSelect.value : '3', 10);
  registrationData.teamSize = size;

  const container = document.getElementById('additionalMembersContainer');
  if (!container) return;

  let html = '';
  for (let i = 2; i <= size; i++) {
    html += `
      <div class="member-roster-card" style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-card); border-radius: var(--radius-md); padding: 1.35rem; margin-bottom: 1.35rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
          <h5 style="color: #ffffff;"><i class="fa-solid fa-user-astronaut" style="color: var(--neon-cyan);"></i> Member 0${i} Information</h5>
          <span style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--neon-cyan); background: rgba(0,242,254,0.15); padding: 0.2rem 0.5rem; border-radius: 4px;">Co-Innovator</span>
        </div>
        <div class="form-grid">
          <div class="form-group">
            <label>Full Name *</label>
            <input type="text" id="member${i}Name" class="form-control" placeholder="e.g. Priyadharshini K." required>
          </div>
          <div class="form-group">
            <label>Institutional Email *</label>
            <input type="email" id="member${i}Email" class="form-control" placeholder="priya@college.edu" required>
          </div>
          <div class="form-group">
            <label>Mobile Number *</label>
            <input type="tel" id="member${i}Mobile" class="form-control" placeholder="+91 98765 43210" required>
          </div>
          <div class="form-group">
            <label>Primary Technical Role *</label>
            <select id="member${i}Role" class="form-control" required>
              <option value="AI/ML Engineer">AI / ML Engineer</option>
              <option value="Data Scientist">Data Scientist</option>
              <option value="Backend Architect">Backend / API Architect</option>
              <option value="Frontend Developer">Frontend / Web Developer</option>
              <option value="UI/UX Designer">UI/UX & Product Designer</option>
              <option value="Cloud/DevOps">Cloud / DevOps Engineer</option>
            </select>
          </div>
          <div class="form-group">
            <label>GitHub Profile / Portfolio (Optional)</label>
            <input type="url" id="member${i}Github" class="form-control" placeholder="https://github.com/username">
          </div>
          <div class="form-group">
            <label>Department & Year</label>
            <input type="text" id="member${i}Dept" class="form-control" placeholder="e.g. CSE / 3rd Year">
          </div>
        </div>
      </div>
    `;
  }
  container.innerHTML = html;
}

function showStep(stepNumber) {
  currentStep = stepNumber;
  document.querySelectorAll('.wizard-step-pane').forEach((pane, idx) => {
    pane.classList.toggle('active', idx + 1 === stepNumber);
  });

  document.querySelectorAll('.wizard-progress-step').forEach((stepEl, idx) => {
    stepEl.classList.toggle('active', idx + 1 === stepNumber);
    stepEl.classList.toggle('completed', idx + 1 < stepNumber);
  });

  const stepTitle = document.getElementById('wizardStepTitle');
  const stepTitles = [
    "Step 1: Team & Institution Info",
    "Step 2: Team Roster & Skill Matrix",
    "Step 3: Innovation Track Preference",
    "Step 4: Review & Fee Breakdown",
    "Step 5: Official Confirmation Pass"
  ];
  if (stepTitle) stepTitle.textContent = stepTitles[stepNumber - 1] || "Registration";

  if (stepNumber === 4) {
    populateReviewSummary();
  }
}

function validateStep(stepNumber) {
  if (stepNumber === 1) {
    const teamName = document.getElementById('regTeamName').value.trim();
    const inst = document.getElementById('regInstitution').value.trim();
    const city = document.getElementById('regCity').value.trim();
    const state = document.getElementById('regState').value.trim();

    if (!teamName || !inst || !city || !state) {
      showToast("Please fill in all required team and institution fields.", "error");
      return false;
    }
    registrationData.teamName = teamName;
    registrationData.institution = inst;
    registrationData.city = city;
    registrationData.state = state;
    return true;
  }

  if (stepNumber === 2) {
    const leaderName = document.getElementById('regLeaderName').value.trim();
    const leaderEmail = document.getElementById('regLeaderEmail').value.trim();
    const leaderMobile = document.getElementById('regLeaderMobile').value.trim();
    const leaderRole = document.getElementById('regLeaderRole').value;
    const leaderDept = document.getElementById('regLeaderDept').value.trim();
    const leaderGithub = document.getElementById('regLeaderGithub').value.trim();

    if (!leaderName || !leaderEmail || !leaderMobile) {
      showToast("Please complete all required team leader details.", "error");
      return false;
    }

    registrationData.leader = {
      name: leaderName,
      email: leaderEmail,
      mobile: leaderMobile,
      role: leaderRole,
      dept: leaderDept,
      github: leaderGithub
    };

    registrationData.members = [];
    for (let i = 2; i <= registrationData.teamSize; i++) {
      const name = document.getElementById(`member${i}Name`)?.value.trim();
      const email = document.getElementById(`member${i}Email`)?.value.trim();
      const mobile = document.getElementById(`member${i}Mobile`)?.value.trim();
      const role = document.getElementById(`member${i}Role`)?.value || 'AI/ML Engineer';
      const dept = document.getElementById(`member${i}Dept`)?.value.trim() || '';
      const github = document.getElementById(`member${i}Github`)?.value.trim() || '';

      if (!name || !email || !mobile) {
        showToast(`Please complete the required details for Member 0${i}.`, "error");
        return false;
      }

      registrationData.members.push({ name, email, mobile, role, dept, github });
    }
    return true;
  }

  if (stepNumber === 3) {
    const t1 = document.getElementById('regTrack1').value;
    const t2 = document.getElementById('regTrack2').value;
    const approach = document.getElementById('regApproachSummary').value.trim();

    if (!t1) {
      showToast("Please select at least your Primary Innovation Track.", "error");
      return false;
    }

    registrationData.track1 = t1;
    registrationData.track2 = t2;
    registrationData.approachSummary = approach;
    return true;
  }

  return true;
}

function nextStep() {
  if (validateStep(currentStep)) {
    if (currentStep < 5) {
      showStep(currentStep + 1);
    }
  }
}

function prevStep() {
  if (currentStep > 1) {
    showStep(currentStep - 1);
  }
}

function populateReviewSummary() {
  const container = document.getElementById('regReviewSummary');
  if (!container) return;

  const trk1Obj = INNOVATION_TRACKS.find(t => t.id === registrationData.track1);
  const trk2Obj = INNOVATION_TRACKS.find(t => t.id === registrationData.track2);

  container.innerHTML = `
    <div class="review-grid">
      <div class="review-box">
        <h5><i class="fa-solid fa-users"></i> Team Summary</h5>
        <p><strong>Team Name:</strong> ${registrationData.teamName}</p>
        <p><strong>Institution:</strong> ${registrationData.institution}</p>
        <p><strong>Location:</strong> ${registrationData.city}, ${registrationData.state}</p>
        <p><strong>Total Members:</strong> ${registrationData.teamSize}</p>
      </div>

      <div class="review-box">
        <h5><i class="fa-solid fa-crown" style="color: #ffb703;"></i> Team Leader</h5>
        <p><strong>Name:</strong> ${registrationData.leader.name}</p>
        <p><strong>Email:</strong> ${registrationData.leader.email}</p>
        <p><strong>Mobile:</strong> ${registrationData.leader.mobile}</p>
        <p><strong>Role:</strong> ${registrationData.leader.role}</p>
      </div>

      <div class="review-box full-width">
        <h5><i class="fa-solid fa-list-check"></i> Roster Breakdown</h5>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
          <span style="background: rgba(0,242,254,0.12); border: 1px solid rgba(0,242,254,0.3); padding: 0.35rem 0.75rem; border-radius: 9999px; font-size: 0.85rem; color: #ffffff;"><i class="fa-solid fa-crown" style="color: #ffb703;"></i> ${registrationData.leader.name} (${registrationData.leader.role})</span>
          ${registrationData.members.map(m => `<span style="background: rgba(255,255,255,0.06); border: 1px solid var(--border-card); padding: 0.35rem 0.75rem; border-radius: 9999px; font-size: 0.85rem; color: var(--text-secondary);"><i class="fa-solid fa-user"></i> ${m.name} (${m.role})</span>`).join('')}
        </div>
      </div>

      <div class="review-box full-width">
        <h5><i class="fa-solid fa-shapes"></i> Selected Innovation Tracks</h5>
        <p><strong>Primary Track:</strong> ${trk1Obj ? trk1Obj.name : 'None'}</p>
        <p><strong>Secondary Track:</strong> ${trk2Obj ? trk2Obj.name : 'None'}</p>
        <p style="font-size: 0.82rem; color: var(--neon-cyan); margin-top: 0.4rem;"><i class="fa-solid fa-lock"></i> Exact problem statements will be revealed on 20 Sept 2026 at 5:00 PM IST.</p>
      </div>

      <div class="review-box full-width fee-box">
        <div class="fee-row">
          <span>Registration Fee (Per Team):</span>
          <span class="fee-amount">₹499 <small style="font-size: 0.75rem; color: var(--text-muted); font-weight: normal;">(Proposed Standard Pricing)</small></span>
        </div>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.5rem; margin-bottom: 0;"><i class="fa-solid fa-shield-halved"></i> Includes 24h sprint access, evaluation, jury mentorship, certificates & hospitality at KLNCE.</p>
      </div>
    </div>
  `;
}

function submitRegistration() {
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  registrationData.regId = `TNS26-${randomNum}`;

  const regIdDisplay = document.getElementById('confirmedRegId');
  const teamDisplay = document.getElementById('confirmedTeamName');
  const emailDisplay = document.getElementById('confirmedLeaderEmail');
  const trkDisplay = document.getElementById('confirmedTrack');

  if (regIdDisplay) regIdDisplay.textContent = registrationData.regId;
  if (teamDisplay) teamDisplay.textContent = registrationData.teamName;
  if (emailDisplay) emailDisplay.textContent = registrationData.leader.email;
  
  const trkObj = INNOVATION_TRACKS.find(t => t.id === registrationData.track1);
  if (trkDisplay) trkDisplay.textContent = `Track: ${trkObj ? trkObj.name : 'Registered'}`;

  showStep(5);
  showToast(`Team ${registrationData.teamName} Registered Successfully! [${registrationData.regId}]`, 'success');
}

function downloadRegistrationPass() {
  const trkObj = INNOVATION_TRACKS.find(t => t.id === registrationData.track1);
  const passContent = `=====================================================
TENSORA 2026 - OFFICIAL REGISTRATION CONFIRMATION PASS
National Level AI Innovation Hackathon | KLN College of Engineering
=====================================================

REGISTRATION ID : ${registrationData.regId}
TEAM NAME       : ${registrationData.teamName}
INSTITUTION     : ${registrationData.institution}
LOCATION        : ${registrationData.city}, ${registrationData.state}
TEAM SIZE       : ${registrationData.teamSize} Members
EVENT DATES     : 20.09.2026 to 22.09.2026

PRIMARY TRACK   : ${trkObj ? trkObj.name : 'All Tracks'}

TEAM LEADER:
- ${registrationData.leader.name} (${registrationData.leader.role})
  Email: ${registrationData.leader.email} | Mobile: ${registrationData.leader.mobile}

TEAM MEMBERS:
${registrationData.members.map((m, i) => `${i + 2}. ${m.name} (${m.role}) - ${m.email}`).join('\n')}

MASTER EVENT SCHEDULE:
- 20.09.2026, 05:00 PM IST : Problem Statements Revealed
- 20.09.2026, 06:00 PM IST : 24-Hour Online Build Sprint Begins
- 21.09.2026, 06:00 PM IST : Submission Deadline
- 22.09.2026, 09:00 AM IST : Offline Grand Finale at KLNCE

VENUE:
K.L.N. College of Engineering, Pottapalayam, Sivaganga, Tamil Nadu
=====================================================
`;

  const blob = new Blob([passContent], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `TENSORA2026_Pass_${registrationData.regId}.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  showToast("Registration Pass Downloaded!", "success");
}

function generateGoogleCalendarUrl() {
  const title = encodeURIComponent("TENSORA 2026 — AI Innovation Hackathon");
  const details = encodeURIComponent("TENSORA 2026 National Level AI Hackathon (20.09.2026 to 22.09.2026). 24h Online Build (20-21 Sept) + Offline Grand Finale at KLN College of Engineering (22 Sept). Reg ID: " + registrationData.regId);
  const location = encodeURIComponent("K.L.N. College of Engineering, Pottapalayam, Sivaganga, Tamil Nadu");
  const start = "20260920T113000Z";
  const end = "20260922T130000Z";
  
  const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
  window.open(url, '_blank');
}

function initRegistration() {
  const modal = document.getElementById('registerModal');
  const closeBtn = document.getElementById('closeRegisterModalBtn');
  const sizeSelect = document.getElementById('regTeamSize');

  if (closeBtn) closeBtn.addEventListener('click', closeRegisterModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeRegisterModal();
    });
  }

  if (sizeSelect) {
    sizeSelect.addEventListener('change', updateMemberInputs);
  }

  document.querySelectorAll('[data-open-register]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const trackId = btn.getAttribute('data-track-id');
      openRegisterModal(trackId);
    });
  });
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { initRegistration, openRegisterModal, closeRegisterModal, nextStep, prevStep, submitRegistration };
}
