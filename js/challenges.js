/**
 * TENSORA 2026 - Challenge Explorer & Modal Component
 */

let selectedThemeFilter = 'all';
let searchQuery = '';

function renderChallenges() {
  const container = document.getElementById('challengesGrid');
  const countBadge = document.getElementById('challengeCountBadge');
  if (!container) return;

  const filtered = CHALLENGES_DATA.filter(item => {
    const matchesTheme = selectedThemeFilter === 'all' || item.theme === selectedThemeFilter;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || 
      item.title.toLowerCase().includes(q) ||
      item.tagline.toLowerCase().includes(q) ||
      item.summary.toLowerCase().includes(q) ||
      item.id.toLowerCase().includes(q) ||
      item.themeName.toLowerCase().includes(q) ||
      item.tags.some(tag => tag.toLowerCase().includes(q));

    return matchesTheme && matchesSearch;
  });

  if (countBadge) {
    countBadge.textContent = `${filtered.length} Challenge${filtered.length === 1 ? '' : 's'} Shown`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="no-challenges-state">
        <i class="fa-solid fa-magnifying-glass-chart"></i>
        <h3>No Problem Statements Found</h3>
        <p>Try searching for a different keyword like "Vision", "Time-Series", "OCR", or clear your filter.</p>
        <button class="btn btn-secondary btn-sm" onclick="resetChallengeFilters()">Reset Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(challenge => `
    <div class="challenge-card" data-id="${challenge.id}" data-theme="${challenge.theme}" onclick="openChallengeModal('${challenge.id}')">
      <div class="challenge-card-header">
        <div class="challenge-id-badge">
          <i class="${challenge.themeIcon}"></i>
          <span>${challenge.id}</span>
        </div>
        <span class="challenge-difficulty difficulty-${challenge.difficulty.toLowerCase()}">${challenge.difficulty}</span>
      </div>

      <h3 class="challenge-card-title">${challenge.title}</h3>
      <p class="challenge-card-tagline">${challenge.tagline}</p>

      <div class="challenge-tags">
        ${challenge.tags.slice(0, 3).map(tag => `<span class="tag-chip">${tag}</span>`).join('')}
        ${challenge.tags.length > 3 ? `<span class="tag-chip tag-more">+${challenge.tags.length - 3}</span>` : ''}
      </div>

      <div class="challenge-card-footer">
        <span class="ai-category"><i class="fa-solid fa-microchip"></i> ${challenge.aiCategory}</span>
        <span class="view-details-link">
          View Scope <i class="fa-solid fa-arrow-right"></i>
        </span>
      </div>
    </div>
  `).join('');
}

function openChallengeModal(challengeId) {
  const challenge = CHALLENGES_DATA.find(c => c.id === challengeId);
  if (!challenge) return;

  const modal = document.getElementById('challengeDetailModal');
  const modalBody = document.getElementById('challengeModalBody');
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div class="modal-challenge-header">
      <div class="modal-meta-row">
        <span class="challenge-id-badge large">
          <i class="${challenge.themeIcon}"></i> ${challenge.id}
        </span>
        <span class="theme-pill">${challenge.themeName}</span>
        <span class="challenge-difficulty difficulty-${challenge.difficulty.toLowerCase()}">${challenge.difficulty}</span>
      </div>
      <h2 class="modal-challenge-title">${challenge.title}</h2>
      <p class="modal-challenge-tagline">${challenge.tagline}</p>
    </div>

    <div class="modal-section">
      <h4><i class="fa-solid fa-circle-info"></i> Executive Summary</h4>
      <p>${challenge.summary}</p>
    </div>

    <div class="modal-section">
      <h4><i class="fa-solid fa-bullseye"></i> Real-World Problem Scope</h4>
      <p>${challenge.problemScope}</p>
    </div>

    <div class="modal-section highlight-box">
      <h4><i class="fa-solid fa-wand-magic-sparkles"></i> Mandatory AI Requirements</h4>
      <ul class="modal-list">
        ${challenge.aiRequirements.map(req => `<li><i class="fa-solid fa-check"></i> <span>${req}</span></li>`).join('')}
      </ul>
    </div>

    <div class="modal-section">
      <h4><i class="fa-solid fa-box-archive"></i> Expected Deliverables</h4>
      <ul class="modal-list">
        ${challenge.deliverables.map(del => `<li><i class="fa-solid fa-cube"></i> <span>${del}</span></li>`).join('')}
      </ul>
    </div>

    <div class="modal-section">
      <h4><i class="fa-solid fa-database"></i> Suggested Datasets & Benchmarks</h4>
      <div class="dataset-chips">
        ${challenge.sampleDatasets.map(ds => `<span class="dataset-chip"><i class="fa-solid fa-table"></i> ${ds}</span>`).join('')}
      </div>
    </div>

    <div class="modal-action-footer">
      <button class="btn btn-primary" onclick="selectChallengeForRegistration('${challenge.id}')">
        <i class="fa-solid fa-user-plus"></i> Select in Team Registration
      </button>
      <button class="btn btn-secondary" onclick="copyChallengeDetails('${challenge.id}')">
        <i class="fa-regular fa-copy"></i> Copy Challenge Brief
      </button>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeChallengeModal() {
  const modal = document.getElementById('challengeDetailModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function selectChallengeForRegistration(challengeId) {
  closeChallengeModal();
  openRegisterModal(challengeId);
}

function copyChallengeDetails(challengeId) {
  const challenge = CHALLENGES_DATA.find(c => c.id === challengeId);
  if (!challenge) return;

  const text = `TENSORA 2026 Problem Statement [${challenge.id}]: ${challenge.title}\nTheme: ${challenge.themeName}\nSummary: ${challenge.summary}\nAI Requirements: ${challenge.aiRequirements.join('; ')}\nMaster Schedule: 21-23 Sept 2026 | KLN College of Engineering`;
  
  navigator.clipboard.writeText(text).then(() => {
    showToast(`Copied Challenge [${challenge.id}] details to clipboard!`, 'success');
  }).catch(() => {
    showToast('Failed to copy to clipboard', 'error');
  });
}

function resetChallengeFilters() {
  selectedThemeFilter = 'all';
  searchQuery = '';
  const searchInput = document.getElementById('challengeSearchInput');
  if (searchInput) searchInput.value = '';
  
  document.querySelectorAll('.filter-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.theme === 'all');
  });

  renderChallenges();
}

function initChallenges() {
  // Theme filter buttons
  document.querySelectorAll('.filter-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedThemeFilter = btn.dataset.theme || 'all';
      renderChallenges();
    });
  });

  // Search input
  const searchInput = document.getElementById('challengeSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderChallenges();
    });
  }

  // Modal close events
  const modal = document.getElementById('challengeDetailModal');
  const closeBtn = document.getElementById('closeChallengeModalBtn');
  if (closeBtn) closeBtn.addEventListener('click', closeChallengeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeChallengeModal();
    });
  }

  renderChallenges();
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { initChallenges, renderChallenges, openChallengeModal, closeChallengeModal };
}
