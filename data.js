</script>
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        paia: {
                            ivory: '#F6F2E8',
                            blue: '#0F2C48',
                            yellow: '#D9A526',
                            bronze: '#B4792A',
                            dark: '#0f172a'
                        }
                    },
                    fontFamily: {
                        sans: ['Roboto', 'sans-serif'],
                        mono: ['Space Mono', 'monospace'],
                    }
                }
            }
        }
    </script>

    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.4.1/papaparse.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet" />
    <script src="https://unpkg.com/@phosphor-icons/web"></script>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&family=Space+Mono&family=Open+Dyslexic&display=swap" rel="stylesheet" />

    <link rel="stylesheet" href="style.css">
  </head>
  <body class="relative">

    <div id="loader">
      <div class="spinner"></div>
      <p class="mt-4 font-black uppercase text-xs tracking-widest text-paia-blue">Synchronisation Base_FPA...</p>
      <p class="text-[10px] mt-2 opacity-50 font-bold text-paia-blue">MATHILDE MARTINE PAISLEY</p>
    </div>

    <div class="bg-animated-blob blob-1 fixed inset-0 pointer-events-none opacity-20"></div>

    <header class="bg-white/90 backdrop-blur-xl border-b-2 border-paia-blue h-[90px] flex items-center sticky top-0 z-[1000]">
      <div class="w-full max-w-[1600px] mx-auto px-6 flex items-center justify-between">
        <div class="flex items-center gap-4 cursor-pointer" onclick="location.reload()">
          <img src="https://projettechacademy.github.io/Projet_Python/Asset/2127845D-F95D-49C0-A22B-88C07817841B.png" alt="Logo" class="w-14 h-14 rounded-xl border-2 border-paia-blue object-cover shadow-[2px_2px_0px_#0F2C48]" />
          <div class="hidden sm:block">
            <h1 class="text-xl font-black uppercase text-paia-blue tracking-tighter">Mon Parcours FPA</h1>
            <p class="text-[10px] text-purple-600 font-bold uppercase tracking-widest">Évolution Premium V2.ECF</p>
          </div>
        </div>

        <nav class="hidden lg:flex items-center gap-4">
            <a href="Card.html" target="_blank" class="btn-nav-app group" title="Contact" aria-label="Contacter Mathilde">
              <i class="fa-solid fa-paper-plane text-paia-yellow"></i>
            </a>
            <a href="https://app.studi.fr/v3/blog" target="_blank" class="btn-nav-app group" title="Newsletter" aria-label="Consulter la newsletter Studi">
              <i class="fa-solid fa-bolt text-blue-400"></i>
            </a>
            <button onclick="filtrerBloc('CAL')" class="btn-nav-app group" title="Planning" aria-label="Ouvrir le calendrier et le planning">
              <i class="fa-solid fa-calendar-check text-emerald-400"></i>
            </button>
            <button onclick="filtrerBloc('CERTIF')" class="btn-nav-app group" title="Certification" aria-label="Ouvrir le hub des certifications">
              <i class="fa-solid fa-trophy text-paia-bronze"></i>
            </button>
            <a href="ECF_Finale.html" target="_blank" class="btn-nav-app group" title="Sujet ECF" aria-label="Consulter le Sujet ECF">
              <i class="fa-solid fa-file-signature text-purple-500"></i>
            </a>
            <a href="https://teams.live.com/l/community/FEAwwccidvd7W4wtgQ" target="_blank" class="btn-nav-app group" title="Communauté" aria-label="Rejoindre la communauté Teams">
              <i class="fa-brands fa-microsoft text-rose-400"></i>
            </a>
        </nav>

        <button onclick="toggleMobileMenu()" class="lg:hidden w-12 h-12 flex items-center justify-center border-2 border-paia-blue rounded-xl text-paia-blue text-xl bg-white shadow-[2px_2px_0px_#0F2C48] transition-all hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_#0F2C48]" aria-label="Ouvrir le menu mobile">
            <i id="burger-icon" class="fas fa-bars"></i>
        </button>
      </div>
    </header>

    <div id="mobile-menu" class="fixed inset-0 bg-paia-blue z-[900] hidden flex-col items-center justify-center gap-8 text-white p-10 transform translate-x-full transition-transform duration-300">
        <button onclick="toggleMobileMenu()" class="absolute top-8 right-8 text-4xl text-paia-ivory hover:scale-110 transition-transform" aria-label="Fermer le menu mobile"><i class="fas fa-times"></i></button>
        <a href="Card.html" class="text-2xl font-black uppercase tracking-widest hover:text-paia-yellow transition-colors"><i class="fas fa-paper-plane mr-4 text-paia-yellow"></i> Contact</a>
        <a href="https://app.studi.fr/v3/blog" class="text-2xl font-black uppercase tracking-widest hover:text-paia-yellow transition-colors"><i class="fas fa-bolt mr-4 text-blue-400"></i> Newsletter</a>
        <button onclick="filtrerBloc('CAL'); toggleMobileMenu()" class="text-2xl font-black uppercase tracking-widest hover:text-paia-yellow transition-colors"><i class="fas fa-calendar-check mr-4 text-emerald-400"></i> Planning</button>
        <button onclick="filtrerBloc('CERTIF'); toggleMobileMenu()" class="text-2xl font-black uppercase tracking-widest hover:text-paia-yellow transition-colors"><i class="fas fa-trophy mr-4 text-paia-bronze"></i> Certification</button>

        <button onclick="filtrerBloc('ECF'); toggleMobileMenu()" class="text-2xl font-black uppercase tracking-widest hover:text-purple-400 transition-colors"><i class="fas fa-graduation-cap mr-4 text-purple-400"></i> ECF Final</button>
        <a href="ECF_Finale.html" target="_blank" class="text-2xl font-black uppercase tracking-widest hover:text-purple-400 transition-colors"><i class="fas fa-file-signature mr-4 text-purple-500"></i> Sujet ECF</a>

        <a href="https://projettechacademy.github.io/Paie-MMPA/" target="_blank" class="text-2xl font-black uppercase tracking-widest hover:text-paia-yellow transition-colors"><i class="fas fa-credit-card mr-4 text-paia-yellow"></i> Pay</a>
        <a href="https://teams.live.com/l/community/FEAwwccidvd7W4wtgQ" target="_blank" class="text-2xl font-black uppercase tracking-widest hover:text-paia-yellow transition-colors"><i class="fa-brands fa-microsoft mr-4 text-rose-400"></i> Communauté</a>
    </div>

    <main class="flex-grow w-full max-w-[1600px] mx-auto px-4 md:px-6 py-6 md:py-8">

      <div class="tabs-sticky py-3 mb-8 flex flex-col xl:flex-row gap-4 justify-between items-center rounded-xl px-2 md:px-0">
          <div class="flex flex-wrap gap-3 w-full xl:w-auto" id="tabsMenu">
            <button class="tab-btn" id="tab-ALL" onclick="filtrerBloc('ALL')">Vue Globale</button>
            <button class="tab-btn" id="tab-B0" onclick="filtrerBloc('B0')">B0 : Socle</button>
            <button class="tab-btn" id="tab-B1" onclick="filtrerBloc('B1')">B1 : Concevoir</button>
            <button class="tab-btn" id="tab-B2" onclick="filtrerBloc('B2')">B2 : Animer</button>
            <button class="tab-btn" id="tab-B3" onclick="filtrerBloc('B3')">B3 : Accompagner</button>
            <button class="tab-btn" id="tab-B4" onclick="filtrerBloc('B4')">B4 : Qualité</button>

            <a href="https://projettechacademy.github.io/Paie-MMPA/" target="_blank" class="tab-btn" id="tab-PAY"><i class="fas fa-credit-card mr-1"></i> Pay</a>
          </div>
          <div class="relative w-full xl:max-w-sm mt-2 xl:mt-0">
            <i class="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-paia-blue/40 text-lg"></i>
            <input type="text" id="searchInput" placeholder="Rechercher un module..." class="w-full bg-white border-2 border-paia-blue rounded-xl py-3 pl-12 pr-3 text-paia-blue text-sm focus:outline-none focus:ring-4 focus:ring-paia-yellow focus:border-paia-blue shadow-[3px_3px_0px_#0F2C48] transition-all" />
          </div>
      </div>

      <div id="globalProgressHeader" class="bg-white rounded-3xl p-6 md:p-8 border-2 border-paia-blue shadow-[6px_6px_0px_rgba(15,44,72,1)] md:shadow-[8px_8px_0px_rgba(15,44,72,1)] mb-12 flex flex-col md:flex-row items-center gap-6 md:gap-10 transition-transform hover:-translate-y-1 mx-2 md:mx-0">
        <div class="text-center md:text-left">
          <span class="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Avancement Total</span>
          <div class="text-5xl font-black text-paia-blue" id="progressText">0%</div>
        </div>
        <div class="flex-grow w-full bg-paia-blue/5 h-6 rounded-full border-2 border-paia-blue p-1 overflow-hidden">
          <div id="progressBar" class="h-full bg-paia-blue rounded-full transition-all duration-1000" style="width: 0%"></div>
        </div>
        <div class="flex flex-col items-end hidden md:flex">
            <div class="text-2xl font-black text-paia-blue"><span id="compteurResVue">0</span><span class="text-gray-300 mx-1">/</span><span id="compteurResTotal" class="text-paia-bronze">0</span></div>
            <span class="text-[9px] font-black uppercase text-gray-400 tracking-widest">Ressources validées</span>
        </div>
      </div>

      <div id="subTabsContainer" class="hidden mb-10 flex-wrap gap-3 px-2 md:px-0"></div>

      <div id="listContainer" class="grid grid-cols-1 gap-6 pb-20 px-1 md:px-0"></div>

      <div id="ecfContainer" class="hidden flex-col gap-6 pb-20 px-1 md:px-0 animate-slideIn"></div>

      <div id="calendarContainer" class="hidden animate-slideIn px-2 md:px-0"></div>

      <div id="certifContainer" class="hidden flex-col gap-8 pb-12 w-full animate-slideIn px-2 md:px-0">
            <div class="mb-6 rounded-b-xl md:rounded-none">
                <div class="certif-tabs-container flex-col md:flex-row">
                    <button onclick="switchCertifTab('c2-dashboard')" id="btn-c2-dashboard" class="certif-tab-btn active w-full md:w-auto"><i class="fas fa-chart-pie mr-2 text-paia-yellow"></i>Vue d'ensemble</button>
                    <button onclick="switchCertifTab('c2-programme')" id="btn-c2-programme" class="certif-tab-btn bg-white w-full md:w-auto"><i class="fas fa-book-open mr-2 text-paia-bronze"></i>Ma Progression</button>
                    <button onclick="switchCertifTab('c2-evaluations')" id="btn-c2-evaluations" class="certif-tab-btn bg-white w-full md:w-auto"><i class="fas fa-clipboard-check mr-2 text-paia-yellow"></i>Mes Évaluations</button>
                </div>
            </div>

            <section id="c2-dashboard" class="certif-tab-content active">
                <header class="mb-8 border-b-2 border-paia-blue/10 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 class="text-3xl font-extrabold text-paia-blue mb-2">Avancement global</h1>
                        <p class="text-lg text-paia-blue/70">Formation FPA : <strong class="text-paia-bronze">Mathilde Martine PAISLEY</strong></p>
                    </div>
                    <div class="bg-white px-6 py-4 rounded-xl shadow-[4px_4px_0px_#0F2C48] border-2 border-paia-blue text-center w-full md:w-auto">
                        <p class="text-xs text-paia-bronze uppercase font-black tracking-wider mb-1">Progression Totale</p>
                        <p class="text-4xl font-black text-paia-blue"><span id="global-percentage">0</span>%</p>
                        <p class="text-xs font-bold text-paia-blue/50 mt-1"><span id="global-completed-count">0</span> / <span id="global-total-count">0</span> sujets</p>
                    </div>
                </header>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4" id="dashboard-blocs-container"></div>
                    <div class="bg-white rounded-2xl p-6 shadow-[6px_6px_0px_#0F2C48] border-2 border-paia-blue overflow-hidden">
                        <h2 class="text-xl font-black text-paia-blue text-center mb-4 uppercase tracking-wider">Volume de la formation</h2>
                        <div class="chart-container">
                            <canvas id="blocsChart"></canvas>
                        </div>
                    </div>
                </div>
            </section>

            <section id="c2-programme" class="certif-tab-content">
                <header class="mb-8 border-b-2 border-paia-blue/10 pb-6">
                    <h1 class="text-3xl font-extrabold text-paia-blue mb-2">Le Programme Détaillé</h1>
                    <p class="text-lg text-paia-blue/70">Cochez les cases au fur et à mesure de votre apprentissage sur la plateforme.</p>
                </header>

                <div class="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8" id="bloc-selectors"></div>

                <div class="bg-white rounded-2xl shadow-[6px_6px_0px_#0F2C48] border-2 border-paia-blue overflow-hidden flex flex-col">
                    <div class="bg-paia-ivory px-6 py-4 border-b-2 border-paia-blue flex justify-between items-center">
                        <h2 id="current-bloc-title" class="text-lg md:text-xl font-black text-paia-blue uppercase">Sélectionnez un bloc pédagogique</h2>
                    </div>
                    <div class="p-6 h-[550px] overflow-y-auto module-list bg-white" id="modules-container">
                        <div class="flex flex-col items-center justify-center h-full text-paia-blue/30">
                            <i class="fas fa-list-check text-5xl mb-4 animate-bounce"></i>
                            <p class="font-bold text-center">Cliquez sur un bloc pour révéler ses modules.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="c2-evaluations" class="certif-tab-content">
                <header class="mb-6 border-b-2 border-paia-blue/10 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 class="text-3xl font-extrabold text-paia-blue mb-2">Vos évaluations et Livrables</h1>
                        <p class="text-lg text-paia-blue/70">
                            Planifiez, cochez <strong class="text-paia-bronze">"En cours"</strong>, et validez pour célébrer ! 🎉
                        </p>
                    </div>
                    <div class="bg-white px-6 py-3 rounded-xl shadow-[4px_4px_0px_#0F2C48] border-2 border-paia-blue text-center w-full md:w-auto">
                        <p class="text-xs text-paia-bronze uppercase font-black tracking-wider mb-1">Rendus Validés</p>
                        <p class="text-3xl font-black text-paia-blue"><span id="eval-global-completed">0</span> / <span id="eval-global-total">0</span></p>
                    </div>
                </header>

                <div class="mb-8 bg-paia-ivory rounded-2xl shadow-[4px_4px_0px_#0F2C48] border-2 border-paia-blue p-6 relative overflow-hidden">
                    <div class="absolute left-0 top-0 h-full w-2 bg-paia-yellow"></div>
                    <h3 class="text-lg font-black text-paia-blue mb-4 flex items-center gap-2">
                        <i class="fas fa-stopwatch text-paia-yellow text-xl"></i> Simulateur de délai de correction (Studi)
                    </h3>

                    <div class="flex flex-col md:flex-row gap-4 items-end">
                        <div class="flex-1 w-full">
                            <label class="block text-sm font-bold text-paia-blue mb-1">Date de votre dépôt</label>
                            <input type="date" id="calc-date-depot" class="w-full border-2 border-paia-blue rounded-lg shadow-sm focus:border-paia-yellow focus:ring-paia-yellow p-2.5 bg-white font-bold text-paia-blue">
                        </div>
                        <div class="flex-1 w-full">
                            <label class="block text-sm font-bold text-paia-blue mb-1">Délai Studi (Jours ouvrés)</label>
                            <select id="calc-delai" class="w-full border-2 border-paia-blue rounded-lg shadow-sm focus:border-paia-yellow focus:ring-paia-yellow p-2.5 bg-white font-bold text-paia-blue cursor-pointer">
                                <option value="7">7 jours ouvrés</option>
                                <option value="10" selected>10 jours ouvrés</option>
                            </select>
                        </div>
                        <div class="w-full md:w-auto">
                            <button onclick="calculateReturnDate()" class="w-full md:w-auto bg-paia-yellow hover:bg-yellow-500 text-paia-blue font-black py-2.5 px-8 rounded-lg border-2 border-paia-blue shadow-[3px_3px_0px_#0F2C48] transition-all hover:-translate-y-1 uppercase tracking-wide">
                                Calculer
                            </button>
                        </div>
                    </div>

                    <div id="calc-result-container" class="mt-5 hidden animate-fade-in">
                        <div class="bg-white border-2 border-paia-blue rounded-lg p-4 flex flex-col md:flex-row items-start md:items-center gap-4 shadow-sm">
                            <label class="text-sm font-black text-paia-bronze uppercase tracking-wide whitespace-nowrap"><i class="fas fa-calendar-check mr-1"></i> Retour estimé :</label>
                            <input type="text" id="calc-resultat" readonly class="w-full md:max-w-md border border-paia-blue/10 rounded-md px-4 py-2 text-base font-black text-paia-blue capitalize bg-paia-ivory shadow-inner text-center cursor-not-allowed" placeholder="...">
                        </div>
                    </div>
                </div>

                <div id="eval-columns" class="w-full"></div>
            </section>
      </div>

    </main>

    <div id="bulkPlanModal" class="fixed inset-0 bg-paia-blue/95 backdrop-blur-md hidden items-center justify-center z-[10000] p-4">
        <div class="bg-white p-6 md:p-8 rounded-[30px] border-4 border-paia-blue shadow-[10px_10px_0px_rgba(0,0,0,1)] max-w-lg w-full transform scale-95 transition-transform duration-300 relative overflow-y-auto max-h-[90vh]" id="bulkPlanContent">
            <div class="w-16 h-16 bg-emerald-100 rounded-full mx-auto flex items-center justify-center shadow-inner mb-4 border-2 border-emerald-200">
                <span class="text-3xl text-emerald-600">🧠</span>
            </div>
            <h2 class="font-black text-center text-[#0F2C48] text-2xl mb-1 tracking-tight">Planificateur Intelligent</h2>
            <p class="text-[10px] text-center text-emerald-600 font-bold uppercase tracking-widest mb-6">Programmation par bloc</p>

            <div class="space-y-4">
                <div>
                    <label class="text-gray-600 text-xs font-bold mb-1 block">1. Sélectionner le Bloc à planifier :</label>
                    <select id="bulk-bloc-select" onchange="updateBulkPreview()" class="w-full bg-white border-2 border-paia-blue text-[#0F2C48] px-3 py-3 rounded-xl font-black text-sm shadow-[2px_2px_0px_#0F2C48] outline-none">
                        <option value="B0">B0 : Socle</option>
                        <option value="B1">B1 : Concevoir</option>
                        <option value="B2">B2 : Animer</option>
                        <option value="B3">B3 : Accompagner</option>
                        <option value="B4">B4 : Qualité</option>
                    </select>
                </div>
                <div class="flex gap-4">
                    <div class="flex-1">
                        <label class="text-gray-600 text-xs font-bold mb-1 block">2. Date de début :</label>
                        <input type="date" id="bulk-start-date" onchange="updateBulkPreview()" class="w-full bg-white border-2 border-paia-blue text-[#0F2C48] px-3 py-3 rounded-xl font-black text-sm shadow-[2px_2px_0px_#0F2C48] outline-none">
                    </div>
                    <div class="w-1/3">
                        <label class="text-gray-600 text-xs font-bold mb-1 block">Heure :</label>
                        <input type="time" id="bulk-start-time" value="09:00" class="w-full bg-white border-2 border-paia-blue text-[#0F2C48] px-3 py-3 rounded-xl font-black text-sm shadow-[2px_2px_0px_#0F2C48] outline-none">
                    </div>
                </div>
                <div>
                    <label class="text-gray-600 text-xs font-bold mb-2 block">3. Vos jours d'apprentissage réguliers :</label>
                    <div class="flex justify-between gap-1">
                        <input type="checkbox" id="d-1" class="day-cb" checked onchange="updateBulkPreview()"><label for="d-1">L</label>
                        <input type="checkbox" id="d-2" class="day-cb" checked onchange="updateBulkPreview()"><label for="d-2">M</label>
                        <input type="checkbox" id="d-3" class="day-cb" checked onchange="updateBulkPreview()"><label for="d-3">M</label>
                        <input type="checkbox" id="d-4" class="day-cb" checked onchange="updateBulkPreview()"><label for="d-4">J</label>
                        <input type="checkbox" id="d-5" class="day-cb" checked onchange="updateBulkPreview()"><label for="d-5">V</label>
                        <input type="checkbox" id="d-6" class="day-cb" onchange="updateBulkPreview()"><label for="d-6">S</label>
                        <input type="checkbox" id="d-0" class="day-cb" onchange="updateBulkPreview()"><label for="d-0">D</label>
                    </div>
                </div>
                <div class="bg-gray-50 p-3 rounded-xl border border-gray-200 mt-2">
                    <label class="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" id="bulk-exclude-holidays" checked onchange="updateBulkPreview()" class="w-5 h-5 rounded border-2 border-paia-blue text-paia-blue focus:ring-paia-blue cursor-pointer">
                        <span class="text-sm font-bold text-[#0F2C48]">Ignorer les jours fériés français</span>
                    </label>
                </div>
            </div>

            <div id="bulk-preview" class="text-[11px] font-medium text-emerald-800 bg-emerald-50 p-4 rounded-xl border-2 border-emerald-200 mt-4 hidden shadow-inner">
                <strong class="block mb-2 font-black uppercase tracking-wider text-emerald-600"><i class="fas fa-eye mr-1"></i> Aperçu du planning généré</strong>
                <ul id="bulk-preview-list" class="space-y-1 ml-1"></ul>
                <p class="text-[9px] mt-3 opacity-60 italic text-emerald-900">*Chaque module recevra automatiquement ses 6 rappels (J0, J3, J7, J14, J30, J60) à partir de sa date de début.</p>
            </div>

            <div class="mt-8 flex flex-col gap-3">
                <button onclick="generateBulkPlanning()" class="w-full bg-emerald-500 border-2 border-emerald-700 text-white px-4 py-4 rounded-xl font-black text-sm shadow-[4px_4px_0px_#047857] transition-all transform hover:-translate-y-1">
                    🚀 GÉNÉRER TOUT LE PLANNING
                </button>
                <button onclick="closeBulkPlanModal()" class="text-gray-400 text-xs font-bold hover:text-red-500 transition-colors underline text-center">Annuler</button>
            </div>
        </div>
    </div>

    <div id="pinModal" class="fixed inset-0 bg-paia-blue/95 backdrop-blur-md hidden items-center justify-center z-[10000]">
        <div class="bg-paia-ivory p-10 rounded-3xl border-4 border-paia-blue max-w-sm w-full mx-4 text-center shadow-[10px_10px_0px_rgba(0,0,0,1)] transition-transform transform scale-95" id="pinModalContent">
            <div class="w-20 h-20 bg-paia-blue text-white rounded-full mx-auto flex items-center justify-center text-3xl mb-6 shadow-xl"><i class="fas fa-lock"></i></div>
            <h2 class="text-2xl font-black uppercase mb-4 text-paia-blue">Accès Restreint</h2>
            <p class="text-gray-500 text-xs mb-8 font-medium">Document privé appartenant à la plateforme de formation. Non partagé pour des raisons de droits d'auteur.</p>
            <input type="password" id="pinInput" class="w-full bg-white border-4 border-paia-blue text-center text-4xl py-4 rounded-2xl mb-6 focus:ring-4 focus:ring-paia-yellow outline-none" maxlength="4" placeholder="••••">
            <div class="flex gap-4">
                <button onclick="closePinModal()" class="flex-1 font-bold text-gray-500 border-2 border-gray-300 rounded-xl py-3 hover:bg-gray-100 transition-colors">ANNULER</button>
                <button onclick="verifyPin()" class="flex-1 bg-paia-blue border-2 border-paia-blue text-white py-3 rounded-xl font-black shadow-[4px_4px_0px_#B4792A] hover:-translate-y-1 transition-transform">DÉVERROUILLER</button>
            </div>
        </div>
    </div>

    <div id="modalTravaux" class="fixed inset-0 bg-paia-blue/90 backdrop-blur-md hidden items-center justify-center z-[10000]">
      <div class="bg-white p-8 rounded-3xl border-4 border-paia-blue text-center max-w-sm w-full mx-4 shadow-[10px_10px_0px_rgba(0,0,0,1)]">
        <i class="fas fa-tools text-5xl text-paia-bronze mb-4"></i>
        <h2 class="font-black text-paia-blue text-xl uppercase mb-2">En chantier</h2>
        <p class="text-gray-500 text-sm mb-6">Le document pour <strong id="modalTxt"></strong> arrive bientôt.</p>
        <button onclick="document.getElementById('modalTravaux').style.display = 'none';" class="w-full bg-paia-blue border-2 border-paia-blue text-white py-3 rounded-xl font-black shadow-[4px_4px_0px_#B4792A] hover:-translate-y-1 transition-transform">RETOUR</button>
      </div>
    </div>

    <div id="srModal" class="fixed inset-0 bg-paia-blue/90 backdrop-blur-md hidden items-center justify-center z-[10000]">
      <div class="bg-white p-8 rounded-[30px] border-4 border-paia-blue shadow-[10px_10px_0px_rgba(0,0,0,1)] text-center max-w-md w-full mx-4 transform scale-95 transition-transform duration-300 relative overflow-hidden" id="srModalContent">
        <div id="sr-step-1">
            <div class="w-16 h-16 bg-rose-100 rounded-full mx-auto flex items-center justify-center shadow-inner mb-4 border-2 border-rose-200"><span class="text-3xl text-rose-600"><i class="fas fa-clock"></i></span></div>
            <h2 class="font-black text-[#0F2C48] text-2xl mb-1 tracking-tight">Ancrage Mémoriel</h2>
            <p class="text-[10px] text-rose-500 font-bold uppercase tracking-widest mb-4">Planification des révisions</p>

            <div class="bg-rose-50 text-rose-900 text-xs p-4 rounded-xl mb-6 text-left border border-rose-100">
                <p class="mb-2 font-bold text-sm"><i class="fas fa-brain mr-1"></i> La méthode des J</p>
                <p class="opacity-80 italic mb-2">"L'apprentissage ce n'est pas du bourrage de crâne, c'est l'art de la répétition espacée. L'objectif est d'ancrer l'information à long terme en revoyant les notions à des intervalles précis."</p>
                <p class="text-right font-black text-rose-600 mb-3">- Mathilde 💫</p>
                <p class="opacity-80">Générez vos 6 rappels automatiques d'apprentissage (J0, J3, J7, J14, J30, J60) pour :</p>
                <p class="font-black mt-2 text-[#0F2C48]" id="sr-module-title"></p>
                <span id="sr-module-id" class="hidden"></span>
            </div>

            <div class="text-left mb-6 flex gap-4">
              <div class="flex-1">
                  <label class="text-gray-600 text-xs font-bold mb-2 block">Jour 0 (Aujourd'hui) :</label>
                  <input type="date" id="sr-start-date" onchange="updateSRPreview()" class="w-full bg-white border-2 border-paia-blue text-[#0F2C48] px-3 py-3 rounded-xl font-black text-sm shadow-[2px_2px_0px_#0F2C48] outline-none">
              </div>
              <div class="w-1/3">
                  <label class="text-gray-600 text-xs font-bold mb-2 block">Horaire :</label>
                  <input type="time" id="sr-start-time" value="14:00" class="w-full bg-white border-2 border-paia-blue text-[#0F2C48] px-3 py-3 rounded-xl font-black text-sm shadow-[2px_2px_0px_#0F2C48] outline-none">
              </div>
            </div>

            <div id="sr-preview" class="text-left mb-6 bg-gray-50 border border-gray-200 p-3 rounded-xl hidden">
                <span class="text-[10px] font-black uppercase text-gray-500 tracking-wider mb-2 block"><i class="fas fa-eye mr-1"></i> Vos 6 rappels calculés :</span>
                <div id="sr-preview-list" class="flex flex-wrap gap-2"></div>
            </div>

            <button onclick="calculateAndSaveDates()" class="w-full bg-rose-500 border-2 border-rose-700 text-white px-4 py-3.5 rounded-xl font-black text-xs shadow-[4px_4px_0px_#9f1239] transition-all transform hover:-translate-y-1 mb-3">Générer mon programme !</button>
            <button onclick="closeSpacedRepetitionModal()" class="text-gray-400 text-xs font-bold hover:text-red-500 transition-colors underline">Annuler</button>
        </div>
      </div>
    </div>

    <div id="dailyRevisionsModal" class="fixed inset-0 bg-paia-blue/95 backdrop-blur-md hidden items-center justify-center z-[10000]">
      <div class="bg-white p-8 rounded-[30px] border-4 border-paia-blue shadow-[10px_10px_0px_rgba(0,0,0,1)] text-center max-w-lg w-full mx-4 transform scale-95 transition-transform duration-300 relative overflow-hidden" id="dailyRevisionsContent">
        <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-red-500"></div>
        <div class="w-20 h-20 bg-red-100 rounded-full mx-auto flex items-center justify-center shadow-inner mb-4 border-2 border-red-200 animate-bounce mt-2 text-red-500">
            <i class="fas fa-bell text-4xl"></i>
        </div>
        <h2 class="font-black text-[#0F2C48] text-2xl mb-1 tracking-tight">Rappels du jour !</h2>
        <p class="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-6">Avant de commencer de nouveaux cours...</p>
        <p class="text-sm font-medium text-gray-600 mb-4 px-4">L'art de l'apprentissage est la répétition. Voici les notions que vous devez revoir aujourd'hui pour les ancrer à long terme :</p>

        <div id="daily-revisions-list" class="flex flex-col gap-3 mb-8 max-h-[300px] overflow-y-auto pr-2 text-left"></div>

        <button onclick="closeDailyRevisionsModal()" class="w-full bg-[#0F2C48] text-white px-4 py-4 rounded-xl border-2 border-paia-blue font-black text-sm shadow-[4px_4px_0px_#B4792A] transition-all transform hover:-translate-y-1">C'est noté, je m'y mets ! 💪</button>
      </div>
    </div>

    <div id="toastContainer" class="fixed bottom-10 right-10 flex flex-col gap-3 pointer-events-none z-[11000]"></div>

    <div class="floating-side-menu">
      <button onclick="window.scrollTo({top: 0, behavior: 'smooth'})" class="btn-fab bg-gradient-to-br from-blue-400 to-blue-600 group border-2 border-white shadow-[2px_2px_0px_#0F2C48]" aria-label="Remonter en haut de la page">
        <i class="fas fa-arrow-up"></i>
        <span class="absolute right-full mr-3 bg-paia-blue text-white text-[10px] px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg font-bold pointer-events-none">Haut de page</span>
      </button>

      <button onclick="toggleAudio()" class="btn-fab bg-gradient-to-br from-purple-400 to-purple-600 group border-2 border-white shadow-[2px_2px_0px_#0F2C48]" aria-label="Contrôle de l'audio">
        <i id="audioIcon" class="fas fa-volume-mute"></i>
        <span id="audioLabel" class="absolute right-full mr-3 bg-paia-blue text-white text-[10px] px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg font-bold pointer-events-none">Audio OFF</span>
      </button>

      <button onclick="document.body.classList.toggle('dys-mode')" class="btn-fab bg-gradient-to-br from-emerald-400 to-emerald-600 group border-2 border-white shadow-[2px_2px_0px_#0F2C48]" aria-label="Mode Dyslexique">
        <i class="fas fa-glasses"></i>
        <span class="absolute right-full mr-3 bg-paia-blue text-white text-[10px] px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg font-bold pointer-events-none">Mode DYS</span>
      </button>

      <button onclick="document.body.classList.toggle('high-contrast')" class="btn-fab bg-gradient-to-br from-amber-400 to-orange-500 group border-2 border-white shadow-[2px_2px_0px_#0F2C48]" aria-label="Mode Haut Contraste">
        <i class="fas fa-adjust"></i>
        <span class="absolute right-full mr-3 bg-paia-blue text-white text-[10px] px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg font-bold pointer-events-none">Contraste</span>
      </button>

      <button onclick="window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})" class="btn-fab bg-gradient-to-br from-rose-400 to-rose-600 group border-2 border-white shadow-[2px_2px_0px_#0F2C48]" aria-label="Bas de page">
        <i class="fas fa-arrow-down"></i>
        <span class="absolute right-full mr-3 bg-paia-blue text-white text-[10px] px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg font-bold pointer-events-none">Bas de page</span>
      </button>
    </div>

    <footer class="py-12 flex flex-col items-center gap-5 bg-[#0F2C48]/5 backdrop-blur-md border-t border-paia-blue/10 mt-auto relative z-10">
      <img src="https://projettechacademy.github.io/Projet_Python/Asset/Logo_MMPA.jpeg" alt="Logo Mathilde Martine PAISLEY" class="w-16 h-16 rounded-full border-4 border-white shadow-lg object-cover" />
      <p class="text-[10px] font-bold opacity-60 uppercase tracking-widest text-center text-[#0F2C48] leading-relaxed">
        💫 PAIA ✨ Platform Automation & Intelligent Architecture | By Mathilde Martine PAISLEY - © 2026<br/>
        <span class="text-gray-500 text-[9px] mt-1 inline-block">Plateforme indépendante de révision et d'entraide créée par une apprenante. Non affiliée à l'organisme de formation officiel.</span>
      </p>

      <div class="flex gap-4 mt-2 bg-white px-6 py-3 rounded-xl border-2 border-paia-blue shadow-[4px_4px_0px_#0F2C48]">
          <button onclick="if (confirm('Êtes-vous sûre de vouloir réinitialiser tout votre parcours ?')) { localStorage.removeItem('paia_p_v10'); localStorage.removeItem('paia_progression_complete'); localStorage.removeItem('paia_revisions'); location.reload(); }" class="text-gray-500 font-black text-[9px] uppercase hover:text-red-500 transition-colors">Réinitialiser le parcours</button>
          <span class="text-paia-blue/30 text-[9px]">|</span>
          <button id="lockBtn" onclick="toggleLockSession()" class="text-gray-500 font-black text-[9px] uppercase hover:text-paia-blue transition-colors">Vérifier statut session</button>
      </div>
    </footer>

    <script>
      const CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSJuJce5_6A5Yd0xbYLhb4OZRZ4dyvi0oArF2a_Ks1U_dvGflru_lb8XLgLVs6NApu6cJUS_C6GYU71/pub?gid=842464760&single=true&output=csv";
      let database = [];

      const ENCODED_PIN = "MTQwMw=="; // 1403

      // Variable globale non sauvegardée. Disparaît au moindre rafraîchissement.