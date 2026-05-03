const CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTkqT90s2eYR3uo7-sKh2GCDmpsKLD03N10pQbj77sqaQSShANVYINjg__6cwzW2jQj1UHs1aGvt4IR/pub?gid=0&single=true&output=csv";

const configStructure = {
  B0: [{ id: "M1" }, { id: "M2" }, { id: "M3" }, { id: "M4" }, { id: "M5" }],
  B1: [
    { id: "M1" },
    { id: "M2" },
    { id: "M3" },
    { id: "M4" },
    { id: "M5" },
    { id: "M6" },
    { id: "M7" },
  ],
  B2: [{ id: "M1" }, { id: "M2" }, { id: "M3" }, { id: "M4" }],
  B3: [{ id: "M1" }, { id: "M2" }, { id: "M3" }, { id: "M4" }, { id: "M5" }],
};

let database = [];
let progressRes = JSON.parse(localStorage.getItem("paia_p_v10")) || {};
let favorites = JSON.parse(localStorage.getItem("paia_favorites")) || [];
let isVoice = false;
let currentBloc = "ALL";
let currentMod = "ALL";
let currentMediaFilter = "ALL";

// Initialisation
window.onload = () => {
  updateWelcomeMessage();
  window.updateLockIcon();

  if (!localStorage.getItem("paia_username")) {
    window.askForName();
  }

  Papa.parse(CSV_URL, {
    download: true,
    header: false,
    skipEmptyLines: true,
    complete: (results) => {
      database = results.data
        .slice(1)
        .map((row) => ({
          Programme: row[0] || "",
          Audio: row[1] || "",
          Cours: row[2] || "",
          Infographie: row[3] || "",
          Présentation: row[4] || "",
          Vidéo: row[5] || "",
          NoteBook_LM: row[6] || "",
          Lien_Studi: row[7] || "",
          MJA: row[8] || "",
          Date_MJA: row[9] || "",
          MAJ_2: row[10] || "",
          Date_MAJ_2: row[11] || "",
        }))
        .filter((item) => item.Programme.trim() !== "");

      document.getElementById("loader").style.display = "none";
      window.filtrerBloc("ALL");
      window.checkDailyRevisions();
    },
  });
};

// Fonctions Globales (extraites de ton index.html)
window.filtrerBloc = function (bloc) {
  currentBloc = bloc;
  currentMod = "ALL";
  document
    .querySelectorAll(".tab-btn")
    .forEach(
      (btn) =>
        (btn.className =
          "tab-btn bg-white/60 text-gray-500 border border-gray-200 px-5 py-2.5 rounded-xl font-bold text-sm shadow-sm"),
    );
  const activeBtn = document.getElementById("tab-" + bloc);
  if (activeBtn) {
    activeBtn.className =
      "tab-btn bg-paia-blue text-white border-paia-blue px-5 py-2.5 rounded-xl font-bold text-sm shadow-md transform -translate-y-0.5";
  }
  window.renderSubTabs();
  window.afficherModules(document.getElementById("searchInput").value, true);
};

window.afficherModules = function (filtre = "", anim = true) {
  const list = document.getElementById("listContainer");
  if (!list) return;
  list.innerHTML = "";

  let vueCount = 0,
    totalCount = 0;
  const finalFiltre = filtre.toLowerCase();

  database.forEach((itemObj) => {
    const parts = itemObj.Programme.split("-");
    let id = parts[0].trim();
    let titre =
      parts.length > 1 ? parts.slice(1).join("-").trim() : "Sans titre";
    const safeId = id.toUpperCase();

    // Filtres
    if (
      !id.toLowerCase().includes(finalFiltre) &&
      !titre.toLowerCase().includes(finalFiltre)
    )
      return;
    if (currentBloc !== "ALL" && !safeId.includes(`_${currentBloc}_`)) return;

    // Calcul stats
    totalCount++;
    if (progressRes[`${id}-audio`] || progressRes[`${id}-pdf`]) vueCount++; // Simplifié pour l'exemple

    const card = document.createElement("div");
    card.className =
      "card-3d reveal bg-white/90 p-6 rounded-[28px] border border-white shadow-sm mb-6";
    card.innerHTML = `
            <div class="flex justify-between items-center">
                <div>
                    <span class="bg-paia-blue text-white px-3 py-1 rounded-lg text-[10px] font-black">${id}</span>
                    <h3 class="text-xl font-display font-black text-paia-blue mt-2">${titre}</h3>
                </div>
                <div class="flex gap-2">
                    <a href="${itemObj.Cours}" target="_blank" class="btn-resource bg-pdf">📄</a>
                    <a href="${itemObj.Vidéo}" target="_blank" class="btn-resource bg-video">🎬</a>
                </div>
            </div>`;
    list.appendChild(card);
  });

  // Update Progress
  const pct = totalCount > 0 ? Math.round((vueCount / totalCount) * 100) : 0;
  document.getElementById("progressText").innerText = pct + "%";
  document.getElementById("progressBar").style.width = pct + "%";
};

// ... Ajoute ici toutes les autres fonctions (toggleFavorite, checkDailyRevisions, etc.) présentes dans ton script d'origine.
// Je les ai omises ici pour ne pas saturer le message, mais elles doivent être copiées-collées de ton fichier d'origine vers ce app.js.

function updateWelcomeMessage() {
  const userName = localStorage.getItem("paia_username") || "Mathilde";
  document.getElementById("welcome-text").innerText =
    `Bonjour ${userName} ! 👋`;
}
