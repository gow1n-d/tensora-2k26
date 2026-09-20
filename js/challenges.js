/**
 * TENSORA 2026 - Challenge Explorer & Track Fetching Logic
 * Dynamically renders and filters official problem statements by their respective tracks.
 */

let selectedThemeFilter = 'all';
let searchQuery = '';

const TRACK_LABELS = {
  all: 'All Innovation Tracks',
  transport: 'Transport',
  healthcare: 'Healthcare',
  education: 'Education',
  agriculture: 'Agriculture',
  sustainable: 'Sustainable'
};

/**
 * Filter problem statements by a specific track and smoothly scroll to the explorer
 * @param {string} trackId - 'all' | 'transport' | 'healthcare' | 'education' | 'agriculture' | 'sustainable'
 * @param {boolean} [shouldScroll=true]
 */
function filterByTrack(trackId, shouldScroll = true) {
  selectedThemeFilter = trackId || 'all';

  // Update active tab button
  document.querySelectorAll('.filter-tab-btn').forEach(btn => {
    const btnTheme = btn.dataset.theme || 'all';
    btn.classList.toggle('active', btnTheme === selectedThemeFilter);
  });

  renderChallenges();

  if (shouldScroll) {
    const explorerEl = document.getElementById('challengesExplorerSection');
    if (explorerEl) {
      explorerEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

/**
 * Render challenges based on current track filter and search query
 */
function renderChallenges() {
  const container = document.getElementById('challengesGrid');
  const countBadge = document.getElementById('challengeCountBadge');
  if (!container) return;

  if (typeof CHALLENGES_DATA === 'undefined' || !Array.isArray(CHALLENGES_DATA)) {
    console.error('CHALLENGES_DATA is not loaded');
    return;
  }

  const q = (searchQuery || '').toLowerCase().trim();

  const filtered = CHALLENGES_DATA.filter(item => {
    const matchesTheme = selectedThemeFilter === 'all' || item.theme === selectedThemeFilter;
    const matchesSearch = !q ||
      item.title.toLowerCase().includes(q) ||
      item.tagline.toLowerCase().includes(q) ||
      item.summary.toLowerCase().includes(q) ||
      item.id.toLowerCase().includes(q) ||
      item.themeName.toLowerCase().includes(q) ||
      (item.problemScope && item.problemScope.toLowerCase().includes(q)) ||
      (item.tags && item.tags.some(tag => tag.toLowerCase().includes(q)));

    return matchesTheme && matchesSearch;
  });

  if (countBadge) {
    const trackName = TRACK_LABELS[selectedThemeFilter] || 'Selected Track';
    if (selectedThemeFilter === 'all') {
      countBadge.innerHTML = `<i class="fa-solid fa-layer-group"></i> Showing <strong>${filtered.length}</strong> Problem Statements across all Tracks`;
    } else {
      countBadge.innerHTML = `<i class="fa-solid fa-filter"></i> Showing <strong>${filtered.length}</strong> Problem Statements for <strong>${trackName}</strong>`;
    }
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="no-challenges-state">
        <div class="no-challenges-icon"><i class="fa-solid fa-magnifying-glass"></i></div>
        <h3>No Matching Problem Statements</h3>
        <p>No challenges match your search "<strong>${escapeHtml(q)}</strong>" in <strong>${TRACK_LABELS[selectedThemeFilter]}</strong>.</p>
        <button class="btn btn-secondary btn-sm" onclick="resetChallengeFilters()">
          <i class="fa-solid fa-rotate-left"></i> Reset Search & Filters
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(challenge => `
    <div class="challenge-card theme-border-${challenge.theme}" data-id="${challenge.id}" data-theme="${challenge.theme}">
      <div class="challenge-card-header">
        <div class="challenge-id-badge badge-${challenge.theme}">
          <i class="${challenge.themeIcon}"></i>
          <span>${challenge.id}</span>
        </div>
        <span class="challenge-theme-pill pill-${challenge.theme}">${challenge.themeName}</span>
      </div>

      <h3 class="challenge-card-title">${challenge.title}</h3>
      <p class="challenge-card-tagline">${challenge.tagline}</p>
      
      <div class="challenge-desc-snippet">
        <p>${challenge.summary}</p>
      </div>

      <div class="challenge-tags">
        ${challenge.tags.slice(0, 4).map(tag => `<span class="tag-chip">${tag}</span>`).join('')}
        ${challenge.tags.length > 4 ? `<span class="tag-chip tag-more">+${challenge.tags.length - 4}</span>` : ''}
      </div>

      <div class="challenge-card-footer">
        <button class="btn-card-action primary-action" onclick="openChallengeModal('${challenge.id}')" aria-label="View Full Brief for ${challenge.id}">
          <i class="fa-solid fa-file-lines"></i> View Full Brief
        </button>
      </div>
    </div>
  `).join('');
}

/**
 * Open full-detail modal for a challenge
 * @param {string} challengeId
 */
function openChallengeModal(challengeId) {
  if (typeof CHALLENGES_DATA === 'undefined') return;
  const challenge = CHALLENGES_DATA.find(c => c.id === challengeId);
  if (!challenge) return;

  const modal = document.getElementById('challengeDetailModal');
  const modalBody = document.getElementById('challengeModalBody');
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div class="modal-challenge-header modal-header-${challenge.theme}">
      <div class="modal-meta-row">
        <span class="challenge-id-badge large badge-${challenge.theme}">
          <i class="${challenge.themeIcon}"></i> ${challenge.id}
        </span>
        <span class="challenge-theme-pill pill-${challenge.theme}">${challenge.themeName} Track</span>
      </div>
      <h2 class="modal-challenge-title">${challenge.title}</h2>
      <p class="modal-challenge-tagline">${challenge.tagline}</p>
    </div>

    <div class="modal-section highlight-box">
      <h4><i class="fa-solid fa-bullhorn"></i> Official Problem Statement</h4>
      <p class="modal-problem-text">${challenge.summary}</p>
    </div>

    <div class="modal-section">
      <h4><i class="fa-solid fa-crosshairs"></i> Real-World Problem Scope & Objectives</h4>
      <p>${challenge.problemScope || 'Formulate an end-to-end AI/ML solution addressing core bottlenecks in this domain.'}</p>
    </div>

    ${challenge.aiRequirements && challenge.aiRequirements.length > 0 ? `
      <div class="modal-section">
        <h4><i class="fa-solid fa-microchip"></i> Suggested AI / ML Technical Focus</h4>
        <ul class="modal-list">
          ${challenge.aiRequirements.map(req => `<li><i class="fa-solid fa-check"></i> <span>${req}</span></li>`).join('')}
        </ul>
      </div>
    ` : ''}

    ${challenge.deliverables && challenge.deliverables.length > 0 ? `
      <div class="modal-section">
        <h4><i class="fa-solid fa-box-archive"></i> Key Expected Deliverables</h4>
        <ul class="modal-list">
          ${challenge.deliverables.map(del => `<li><i class="fa-solid fa-cube"></i> <span>${del}</span></li>`).join('')}
        </ul>
      </div>
    ` : ''}

    ${challenge.sampleDatasets && challenge.sampleDatasets.length > 0 ? `
      <div class="modal-section">
        <h4><i class="fa-solid fa-database"></i> Relevant Datasets & Resources</h4>
        <div class="dataset-chips">
          ${challenge.sampleDatasets.map(ds => `<span class="dataset-chip"><i class="fa-solid fa-table"></i> ${ds}</span>`).join('')}
        </div>
      </div>
    ` : ''}

    <div class="modal-action-footer">
      <button class="btn btn-primary" onclick="copyChallengeDetails('${challenge.id}')">
        <i class="fa-regular fa-copy"></i> Copy Challenge Brief
      </button>
      <button class="btn btn-ghost" onclick="closeChallengeModal()">
        <i class="fa-solid fa-xmark"></i> Close
      </button>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

/**
 * Close challenge detail modal
 */
function closeChallengeModal() {
  const modal = document.getElementById('challengeDetailModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/**
 * Trigger team registration flow with preselected track context
 */
function selectChallengeForRegistration(challengeId) {
  closeChallengeModal();
  if (typeof showToast === 'function') {
    showToast(`Redirecting to registration for [${challengeId}]...`, 'info');
  }
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSca6LaVMwjD99GuWNA_cbKprjUCKUn7OVdA8V9fW3o_5U5fmA/viewform?usp=publish-editor";
  window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer');
}

/**
 * Copy formatted problem statement to clipboard
 */
function copyChallengeDetails(challengeId) {
  if (typeof CHALLENGES_DATA === 'undefined') return;
  const challenge = CHALLENGES_DATA.find(c => c.id === challengeId);
  if (!challenge) return;

  const text = `TENSORA 2026 Problem Statement [${challenge.id}]: ${challenge.title}\n` +
    `Track: ${challenge.themeName}\n` +
    `Problem Statement:\n${challenge.summary}\n\n` +
    `Problem Scope:\n${challenge.problemScope}\n\n` +
    `AI Requirements:\n- ${challenge.aiRequirements ? challenge.aiRequirements.join('\n- ') : 'N/A'}\n\n` +
    `Master Schedule: 20.09.2026 to 22.09.2026 | Department of AI & DS, KLN College of Engineering\n` +
    `Official Website: https://tensora2026.klnce.edu/`;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      if (typeof showToast === 'function') {
        showToast(`Copied Challenge [${challenge.id}] details to clipboard!`, 'success');
      }
    }).catch(() => {
      fallbackCopyText(text, challenge.id);
    });
  } else {
    fallbackCopyText(text, challenge.id);
  }
}

function fallbackCopyText(text, id) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    if (typeof showToast === 'function') {
      showToast(`Copied Challenge [${id}] details to clipboard!`, 'success');
    }
  } catch (err) {
    if (typeof showToast === 'function') {
      showToast('Please copy the text manually from the modal.', 'warning');
    }
  }
  document.body.removeChild(textarea);
}

/**
 * Reset all filters and search input
 */
function resetChallengeFilters() {
  selectedThemeFilter = 'all';
  searchQuery = '';
  const searchInput = document.getElementById('challengeSearchInput');
  if (searchInput) searchInput.value = '';

  document.querySelectorAll('.filter-tab-btn').forEach(btn => {
    btn.classList.toggle('active', (btn.dataset.theme || 'all') === 'all');
  });

  renderChallenges();
}

/**
 * Safe HTML escaping helper
 */
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Initialize Challenge Explorer
 */
function initChallenges() {
  // Bind track filter buttons
  document.querySelectorAll('.filter-tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const theme = btn.dataset.theme || 'all';
      filterByTrack(theme, false);
    });
  });

  // Bind live search input
  const searchInput = document.getElementById('challengeSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderChallenges();
    });
  }

  // Bind clear search button
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
      }
      searchQuery = '';
      renderChallenges();
    });
  }

  // Bind modal close buttons
  const modal = document.getElementById('challengeDetailModal');
  const closeBtn = document.getElementById('closeChallengeModalBtn');
  if (closeBtn) closeBtn.addEventListener('click', closeChallengeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeChallengeModal();
    });
  }

  // Initial render
  renderChallenges();
}

// Expose functions globally for inline HTML event handlers
window.filterByTrack = filterByTrack;
window.renderChallenges = renderChallenges;
window.openChallengeModal = openChallengeModal;
window.closeChallengeModal = closeChallengeModal;
window.selectChallengeForRegistration = selectChallengeForRegistration;
window.copyChallengeDetails = copyChallengeDetails;
window.resetChallengeFilters = resetChallengeFilters;
window.initChallenges = initChallenges;

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initChallenges,
    renderChallenges,
    filterByTrack,
    openChallengeModal,
    closeChallengeModal,
    copyChallengeDetails
  };
}
