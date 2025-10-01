

/* ===== DATE DE NAISSANCE (sélection + affichage formaté) ===== */
function populateBirthdate() {
    const daySelect = document.getElementById("day");
    const monthSelect = document.getElementById("month");
    const yearSelect = document.getElementById("year");
    const birthInput = document.getElementById("birthdate");
  
    // remplir jours
    for (let i = 1; i <= 31; i++) {
      let opt = document.createElement("option");
      opt.value = i.toString().padStart(2, "0"); // "01", "02"
      opt.textContent = i;
      daySelect.appendChild(opt);
    }
  
    // remplir mois
    for (let m = 1; m <= 12; m++) {
      let opt = document.createElement("option");
      opt.value = m.toString().padStart(2, "0"); // "01", "02"
      opt.textContent = m;
      monthSelect.appendChild(opt);
    }
  
    // remplir années (2005 directement visible sans scroller de 2025 → 2005)
    const currentYear = new Date().getFullYear();
    for (let y = currentYear; y >= 1900; y--) {
      let opt = document.createElement("option");
      opt.value = y;
      opt.textContent = y;
      yearSelect.appendChild(opt);
    }
  
    // fonction de mise à jour
    function updateBirthInput() {
      const d = daySelect.value;
      const m = monthSelect.value;
      const y = yearSelect.value;
      if (d && m && y) {
        birthInput.value = `${d}/${m}/${y}`;
      }
    }
  
    // écouteurs
    [daySelect, monthSelect, yearSelect].forEach(sel => {
      sel.addEventListener("change", updateBirthInput);
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    populateBirthdate();
  });
  
  
  