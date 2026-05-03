const CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSJuJce5_6A5Yd0xbYLhb4OZRZ4dyvi0oArF2a_Ks1U_dvGflru_lb8XLgLVs6NApu6cJUS_C6GYU71/pub?gid=842464760&single=true&output=csv";

const configStructure = {
  B0: [{ id: "M1" }, { id: "M2" }, { id: "M3" }],
  B1: [
    { id: "M1" },
    { id: "M2" },
    { id: "M3" },
    { id: "M4" },
    { id: "M5" },
    { id: "M6" },
    { id: "M7" },
    { id: "M8" },
    { id: "M9" },
    { id: "M10" },
    { id: "M11" },
    { id: "M12" },
    { id: "M13" },
    { id: "M14" },
  ],
  B2: [
    { id: "M1" },
    { id: "M2" },
    { id: "M3" },
    { id: "M4" },
    { id: "M5" },
    { id: "M6" },
    { id: "M7" },
    { id: "M8" },
    { id: "M9" },
  ],
  B3: [
    { id: "M1" },
    { id: "M2" },
    { id: "M3" },
    { id: "M4" },
    { id: "M5" },
    { id: "M6" },
    { id: "M7" },
    { id: "M8" },
    { id: "M9" },
    { id: "M10" },
    { id: "M11" },
    { id: "M12" },
  ],
  B4: [{ id: "M1" }, { id: "M2" }, { id: "M3" }, { id: "M4" }, { id: "M5" }],
};

let database = [];
let progressRes = JSON.parse(localStorage.getItem("paia_p_v10")) || {};
let favorites = JSON.parse(localStorage.getItem("paia_favorites")) || [];
let currentBloc = "ALL";
let currentMod = "ALL";
let currentMediaFilter = "ALL";

window.onload = () => {
  updateWelcomeMessage();
  window.updateLockIcon();

  Papa.parse(CSV_URL, {
    download: true,
    header: true,
    skipEmptyLines: true,
    complete: (results) => {
      database = results.data;
      document.getElementById("loader").style.display = "none";
      window.filtrerBloc("ALL");
    },
  });
};

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
  if (activeBtn)
    activeBtn.className =
      "tab-btn bg-paia-blue text-white border-paia-blue px-5 py-2.5 rounded-xl font-bold text-sm shadow-md";
  window.afficherModules(document.getElementById("searchInput").value, true);
};

window.afficherModules = function (filtre = "", anim = true) {
  const list = document.getElementById("listContainer");
  if (!list) return;
  list.innerHTML = "";

  let vueCount = 0,
    totalCount = 0;
  const finalFiltre = filtre.toLowerCase();

  database.forEach((item) => {
    if (!item.Code) return;
    if (currentBloc !== "ALL" && !item.Code.includes(`_${currentBloc}_`))
      return;
    if (
      finalFiltre &&
      !item.Titre.toLowerCase().includes(finalFiltre) &&
      !item.Code.toLowerCase().includes(finalFiltre)
    )
      return;

    totalCount++;
    const card = document.createElement("div");
    card.className =
      "card-3d bg-white p-6 rounded-[28px] border border-white shadow-sm mb-6 flex flex-col md:flex-row items-center gap-6";
    card.innerHTML = `
            <div class="flex-grow">
                <span class="bg-paia-blue text-white px-3 py-1 rounded-lg text-[10px] font-black">${item.Code}</span>
                <h3 class="text-xl font-display font-black text-paia-blue mt-2">${item.Titre}</h3>
                <div class="flex gap-3 mt-4">
                    <a href="${item.Cours}" target="_blank" class="btn-resource bg-pdf">📄</a>
                    <a href="${item.Audio}" target="_blank" class="btn-resource bg-audio">🎧</a>
                    <a href="${item.Vidéo}" target="_blank" class="btn-resource bg-video">🎬</a>
                </div>
            </div>`;
    list.appendChild(card);
  });

  const pct = totalCount > 0 ? Math.round((vueCount / totalCount) * 100) : 0;
  document.getElementById("progressText").innerText = pct + "%";
  document.getElementById("progressBar").style.width = pct + "%";
};

function updateWelcomeMessage() {
  const userName = localStorage.getItem("paia_username") || "Mathilde";
  document.getElementById("welcome-text").innerText =
    `Bonjour ${userName} ! 👋`;
}

window.updateLockIcon = () => {};
window.toggleMobileMenu = () => {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
  menu.classList.toggle("translate-x-full");
};
