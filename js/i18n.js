/**
 * TENSORA 2026 - Internationalization (EN / தமிழ்)
 */

const I18N_DATA = {
  en: {
    langBtn: "English",
    eventBadge: "20–22 SEPTEMBER 2026 | HYBRID | KLN COLLEGE OF ENGINEERING",
    heroHeadline: "BUILD INTELLIGENCE.<br><span class=\"gradient-text\">SOLVE REALITY.</span>",
    heroSubheadline: "TENSORA 2026 is a premier national-level AI innovation hackathon where ambitious student teams transform real-world challenges into working AI-powered solutions.",
    registerBtn: "Register Your Team",
    exploreBtn: "Explore Challenges",
    viewRulesBtn: "Official Rulebook",
    formatPill: "24-Hour Online Sprint + Offline Grand Finale",
    mandatoryPill: "AI Implementation is Mandatory",
    problemDropPill: "Problem Statements Drop: 20 Sept 2026, 5:00 PM IST",
    statDays: "20–22 Sept",
    statDaysLabel: "Master Event Dates",
    statHours: "24 Hours",
    statHoursLabel: "Online Build Sprint",
    statTeams: "2–4 Members",
    statTeamsLabel: "Team Capacity",
    statAi: "Mandatory AI",
    statAiLabel: "Core Evaluation Pillar",
    navHome: "Home",
    navAbout: "About",
    navFormat: "How It Works",
    navChallenges: "Challenges",
    navThemes: "Themes",
    navSchedule: "Schedule",
    navPrizes: "Prizes",
    navRules: "Rules",
    navFaq: "FAQ",
    navSponsors: "Sponsors",
    navTeam: "Organizers",
    navVenue: "Venue",
    navContact: "Contact",
    navSubmit: "Submit Project",
    venueTitle: "Grand Finale Venue",
    venueCollege: "K.L.N. College of Engineering",
    venueAddress: "Pottapalayam, Sivaganga, Tamil Nadu — 630612 (Near Madurai)",
    directionsBtn: "Get Directions"
  },
  ta: {
    langBtn: "தமிழ்",
    eventBadge: "20–22 செப்டம்பர் 2026 | நேரடி & இணையவழி | கே.எல்.என் பொறியியல் கல்லூரி",
    heroHeadline: "அறிவாற்றலை உருவாக்குங்கள்.<br><span class=\"gradient-text\">உண்மையை வெல்லுங்கள்.</span>",
    heroSubheadline: "டென்சோரா 2026 (TENSORA 2026) என்பது கல்லூரி மாணவர்கள் நிஜ உலகச் சவால்களை செயற்கை நுண்ணறிவு (AI) மூலம் தீர்க்கும் தேசிய அளவிலான ஹேக்கத்தான்.",
    registerBtn: "அணியைப் பதிவு செய்க",
    exploreBtn: "சவால்களைக் காண்க",
    viewRulesBtn: "விதிமுறைகள்",
    formatPill: "24 மணி நேர இணையவழி உருவாக்கம் + நேரடி இறுதிச்சுற்று",
    mandatoryPill: "செயற்கை நுண்ணறிவு (AI) கட்டாயம்",
    problemDropPill: "சிக்கல் அறிக்கைகள் வெளியீடு: 20 செப் 2026, மாலை 5:00 IST",
    statDays: "20–22 செப்டம்பர்",
    statDaysLabel: "நிகழ்வு நாட்கள்",
    statHours: "24 மணி நேரம்",
    statHoursLabel: "இணையவழி வடிவமைப்பு",
    statTeams: "2–4 உறுப்பினர்கள்",
    statTeamsLabel: "அணி அளவு",
    statAi: "AI கட்டாயம்",
    statAiLabel: "முதன்மைத் தகுதி",
    navHome: "முகப்பு",
    navAbout: "பற்றி",
    navFormat: "செயல்முறை",
    navChallenges: "சவால்கள்",
    navThemes: "துறைகள்",
    navSchedule: "அட்டவணை",
    navPrizes: "பரிசுகள்",
    navRules: "விதிகள்",
    navFaq: "கேள்விகள்",
    navSponsors: "ஆதரவாளர்கள்",
    navTeam: "குழு",
    navVenue: "இடம்",
    navContact: "தொடர்பு",
    navSubmit: "திட்டத்தைச் சமர்ப்பிக்க",
    venueTitle: "இறுதிப்போட்டி நடைபெறும் இடம்",
    venueCollege: "கே.எல்.என். பொறியியல் கல்லூரி",
    venueAddress: "பொட்டப்பாளையம், சிவகங்கை மாவட்டம், தமிழ்நாடு — 630612 (மதுரை அருகில்)",
    directionsBtn: "வழிகாட்டுதல் பெறுக"
  }
};

let currentLang = 'en';

function setLanguage(lang) {
  if (!I18N_DATA[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem('tensora_lang', lang);

  const data = I18N_DATA[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (data[key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = data[key];
      } else {
        el.innerHTML = data[key];
      }
    }
  });

  const toggleBtn = document.getElementById('langToggleBtn');
  if (toggleBtn) {
    toggleBtn.innerHTML = `<i class="fa-solid fa-globe"></i> ${lang === 'en' ? 'தமிழ்' : 'English'}`;
  }
}

function initLanguage() {
  const saved = localStorage.getItem('tensora_lang') || 'en';
  setLanguage(saved);
  
  const toggleBtn = document.getElementById('langToggleBtn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      setLanguage(currentLang === 'en' ? 'ta' : 'en');
    });
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { I18N_DATA, setLanguage, initLanguage };
}
