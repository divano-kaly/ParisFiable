

/********************************************
 * 1. GESTION DES DRAPEAUX + GOOGLE TRANSLATE
 ********************************************/

// Langues disponibles avec leurs drapeaux
const languages = [
    { code: "en", flag: "https://flagcdn.com/w20/gb.png" }, // Anglais
    { code: "fr", flag: "https://flagcdn.com/w20/fr.png" }, // Français
    { code: "ar", flag: "https://flagcdn.com/w20/sa.png" }  // Arabe
  ];
  
  let currentLangIndex = 0; // Par défaut anglais
  const flagBtn = document.getElementById("flag-btn");
  
  // Fonction pour changer la langue via Google Translate
  function changeLanguage(langCode) {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event("change"));
    }
  }
  
  // Fonction pour mettre à jour le drapeau visible
  function updateFlag() {
    flagBtn.src = languages[currentLangIndex].flag;
  }
  
  // Quand on clique sur le drapeau
  flagBtn.addEventListener("click", () => {
    currentLangIndex = (currentLangIndex + 1) % languages.length;
    const langCode = languages[currentLangIndex].code;
    changeLanguage(langCode);
    updateFlag();
  });
  
  // Initialisation au chargement
  document.addEventListener("DOMContentLoaded", () => {
    updateFlag();
  });
  
  
  /********************************************
   * 2. SÉLECTION DATE DE NAISSANCE (JOUR/MOIS/ANNÉE)
   ********************************************/
  
  // Remplir les listes déroulantes pour la date
  function populateDateSelectors() {
    const daySelect = document.getElementById("day");
    const monthSelect = document.getElementById("month");
    const yearSelect = document.getElementById("year");
  
    // --- Jours ---
    for (let d = 1; d <= 31; d++) {
      const option = document.createElement("option");
      option.value = d;
      option.textContent = d;
      daySelect.appendChild(option);
    }
  
    // --- Mois ---
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    months.forEach((m, index) => {
      const option = document.createElement("option");
      option.value = index + 1;
      option.textContent = m;
      monthSelect.appendChild(option);
    });
  
    // --- Années (1900 → année actuelle) ---
    const currentYear = new Date().getFullYear();
    for (let y = currentYear; y >= 1900; y--) {
      const option = document.createElement("option");
      option.value = y;
      option.textContent = y;
      yearSelect.appendChild(option);
    }
  }
  
  document.addEventListener("DOMContentLoaded", populateDateSelectors);
  
  