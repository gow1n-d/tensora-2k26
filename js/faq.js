/**
 * TENSORA 2026 - Interactive FAQ Accordion Component
 */

const FAQ_DATA = [
  {
    category: "eligibility",
    q: "Who is eligible to participate in TENSORA 2026?",
    a: "TENSORA 2026 is open to all currently enrolled undergraduate and postgraduate students from recognized colleges and universities in India. Any academic engineering discipline, computer science, data science, electronics, or allied domain is eligible."
  },
  {
    category: "eligibility",
    q: "How many members can a team have? Can we have cross-college teams?",
    a: "Each team must consist of <strong>2 to 4 registered members</strong>. Yes! Cross-college and cross-disciplinary teams (e.g. AI specialist + UI/UX designer + domain engineer) are actively encouraged."
  },
  {
    category: "eligibility",
    q: "Can a student be part of multiple teams?",
    a: "No. A participant may register and compete in only one team. Any duplicate registration across multiple rosters will lead to team disqualification."
  },
  {
    category: "ai",
    q: "Is AI/ML implementation mandatory for all problem statements?",
    a: "<strong>Yes. AI implementation is non-negotiable.</strong> Every solution must incorporate genuine machine learning, deep learning, NLP, computer vision, LLMs/GenAI, or reinforcement learning. Solutions with purely static rule-based or decorative AI will receive a zero in the AI technical evaluation criterion."
  },
  {
    category: "ai",
    q: "Can we use pre-trained open-source models and APIs?",
    a: "Yes. Teams are permitted to utilize open-source weights (Hugging Face, PyTorch Hub, OpenCV) and public cloud APIs (OpenAI, Gemini, Mistral, Groq), provided they are properly cited in the technical documentation and the core pipeline/adaptation logic was constructed during the hackathon."
  },
  {
    category: "ai",
    q: "Are AI coding assistants like ChatGPT, Claude, or GitHub Copilot allowed?",
    a: "Yes. AI coding assistants may be utilized for boilerplate generation and debugging. However, teams remain 100% accountable for the originality, logic, architectural soundness, and defense of their code before the jury."
  },
  {
    category: "submissions",
    q: "What are the exact master dates and timeline for TENSORA 2026?",
    a: "The master schedule is:<br>• <strong>21 Sept 2026, 12:00 PM IST:</strong> Problem statements dropped online.<br>• <strong>21 Sept 2026, 06:00 PM IST:</strong> 24-Hour Online Hackathon sprint begins.<br>• <strong>22 Sept 2026, 06:00 PM IST:</strong> 24-Hour Submission deadline.<br>• <strong>22–23 Sept:</strong> Shortlisting and jury assessment.<br>• <strong>23 Sept 2026, 09:00 AM – 06:30 PM:</strong> Offline Grand Finale & Awards at KLNCE."
  },
  {
    category: "submissions",
    q: "What materials must be submitted at the end of the 24-hour build phase?",
    a: "Teams must submit: (1) Public GitHub repository with clear setup README, (2) 3-minute video walkthrough demonstration, (3) Pitch slide deck (PDF/Google Slides), (4) Technical architecture summary report, and (5) Live deployed web/mobile link where applicable."
  },
  {
    category: "finale",
    q: "Do all participating teams need to travel to KLN College of Engineering?",
    a: "Only teams <strong>shortlisted after the 24-hour online hackathon evaluation</strong> will advance to the Offline Grand Finale at K.L.N. College of Engineering, Pottapalayam, Sivaganga (near Madurai, Tamil Nadu)."
  },
  {
    category: "finale",
    q: "What is the presentation format during the Grand Finale?",
    a: "Each shortlisted finalist team receives <strong>15 minutes</strong> on stage before the executive jury:<br>• <strong>7 Minutes:</strong> Solution & Business Case Presentation<br>• <strong>5 Minutes:</strong> Live Working Prototype Demonstration<br>• <strong>3 Minutes:</strong> Deep Technical Jury Q&A"
  },
  {
    category: "finale",
    q: "Is food and hospitality provided at the venue?",
    a: "Yes. Meals, high tea, refreshments, and workspace facilities will be provided for all registered finalists and faculty mentors on 23 September 2026 at KLN College of Engineering."
  },
  {
    category: "policy",
    q: "Who owns the Intellectual Property (IP) of the built project?",
    a: "<strong>Participants retain 100% intellectual property ownership</strong> of their source code and innovations. TENSORA and KLNCE receive a non-exclusive right to showcase project demos, screenshots, and team names for academic and promotional archives."
  },
  {
    category: "policy",
    q: "What are the primary grounds for immediate disqualification?",
    a: "Plagiarism, submission of pre-built proprietary projects built prior to the hackathon window, harassment, impersonation, falsified validation metrics, or failure to disclose third-party proprietary code."
  },
  {
    category: "policy",
    q: "What happens if there is severe weather or travel disruption?",
    a: "In the event of unforeseen regional disruptions, the organizing committee reserves the right to enable hybrid virtual defense sessions so that no deserving student team is disadvantaged."
  }
];

let activeFaqCategory = 'all';
let faqSearchQuery = '';

function renderFaq() {
  const container = document.getElementById('faqAccordionContainer');
  if (!container) return;

  const filtered = FAQ_DATA.filter(item => {
    const matchesCat = activeFaqCategory === 'all' || item.category === activeFaqCategory;
    const q = faqSearchQuery.toLowerCase().trim();
    const matchesSearch = !q || item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="no-challenges-state">
        <i class="fa-solid fa-circle-question"></i>
        <p>No matching questions found for "${faqSearchQuery}". Reach out to our helpdesk directly!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map((item, idx) => `
    <div class="faq-item ${idx === 0 && !faqSearchQuery ? 'active' : ''}" data-category="${item.category}">
      <button type="button" class="faq-question" aria-expanded="${idx === 0 && !faqSearchQuery ? 'true' : 'false'}" onclick="toggleFaq(this)">
        <span>${item.q}</span>
        <i class="fa-solid fa-chevron-down faq-icon"></i>
      </button>
      <div class="faq-answer">
        <div class="faq-answer-inner">
          <p>${item.a}</p>
        </div>
      </div>
    </div>
  `).join('');
}

function toggleFaq(btn) {
  const item = btn.closest('.faq-item') || btn.parentElement;
  if (!item) return;

  const isActive = item.classList.contains('active');
  
  // Close other open items in the same container
  document.querySelectorAll('.faq-item').forEach(el => {
    if (el !== item) {
      el.classList.remove('active');
      const b = el.querySelector('.faq-question');
      if (b) b.setAttribute('aria-expanded', 'false');
    }
  });

  item.classList.toggle('active', !isActive);
  btn.setAttribute('aria-expanded', !isActive ? 'true' : 'false');
}

function initFaq() {
  // Category tabs
  document.querySelectorAll('.faq-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.faq-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFaqCategory = btn.dataset.category || 'all';
      renderFaq();
    });
  });

  // Search input
  const searchInput = document.getElementById('faqSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      faqSearchQuery = e.target.value;
      renderFaq();
    });
  }

  renderFaq();
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { initFaq, renderFaq, toggleFaq };
}
