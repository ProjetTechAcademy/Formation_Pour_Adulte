window.paia_unlocked = false;

      let pendingPdfUrl = "";
      let pendingPdfId = "";
      let pendingPdfTitre = "";

      const motivationalQuotes = [
          "« Le succès n'est pas final, l'échec n'est pas fatal : c'est le courage de continuer qui compte. »",
          "« La folie, c’est de faire toujours la même chose et de s’attendre à un résultat différent. »",
          "« Croyez en vous-même et en tout ce que vous êtes. »",
          "« Un voyage de mille lieues commence toujours par un premier pas. »",
          "« L'expert en tout a un jour été un débutant. »"
      ];

      // MAPPING ECF FINAL RESTAURÉ
      const ecfMapping = {
            "022_FPA_B1_M06_S002": ["AT1-Q1"],
            "040_FPA_B1_M09_S006": ["AT1-Q2"],
            "056_FPA_B1_M13_S006": ["AT1-Q3"],
            "098_FPA_B2_M08_S002": ["AT2-Q1"],
            "100_FPA_B2_M09_S001": ["AT2-Q1"],
            "050_FPA_B1_M12_S003": ["AT2-Q2"],
            "078_FPA_B2_M04_S002": ["AT2-Q2"],
            "087_FPA_B2_M05_S004": ["AT2-Q3"],
            "101_FPA_B2_M09_S002": ["AT2-Q4"],
            "106_FPA_B3_M02_S001": ["AT3-Q1"],
            "119_FPA_B3_M05_S003": ["AT3-Q2"],
            "121_FPA_B3_M06_S001": ["AT3-Q2"],
            "143_FPA_B3_M11_S006": ["AT3-Q3"],
            "124_FPA_B3_M07_S001": ["AT3-Q4"],
            "133_FPA_B3_M08_S006": ["AT3-Q4"],
            "141_FPA_B3_M11_S004": ["AT3-Q5"],
            "149_FPA_B4_M01_S003": ["AT4-Q1"],
            "162_FPA_B4_M03_S001": ["AT4-Q2"],
            "164_FPA_B4_M03_S003": ["AT4-Q3"],
            "165_FPA_B4_M03_S004": ["AT4-Q3"],
            "172_FPA_B4_M05_S004": ["AT4-Q4"]
      };

      // DONNÉES ECF FINAL RESTAURÉES
      const ecfData = [
          {
              at: "Activité Type 1 : Concevoir et préparer la formation",
              icon: "🏗️", color: "bg-paia-blue", border: "border-paia-blue", text: "text-paia-blue",
              questions: [
                  { q: "1. Détaillez au minimum 5 raisons importantes d’élaborer une progression pédagogique d’une formation multimodale.", links: [{ code: "022_FPA_B1_M06_S002", label: "022_FPA_B1_M06_S002 - La rédaction d'une progression pédagogique et d'un plan d'accompagnement", bloc: "B1" }] },
                  { q: "2. A partir du synopsis en annexe 1, rédigez le scénario pédagogique en utilisant le tableau de l’annexe 2.", links: [{ code: "040_FPA_B1_M09_S006", label: "040_FPA_B1_M09_S006 - La construction du scénario pédagogique", bloc: "B1" }] },
                  { q: "3. A partir de l’annexe 3, rédigez le contenu de la grille d’évaluation de mise en pratique sur le terrain de la formation « Prévenir les risques liés à la manutention dans l’aménagement paysager ».", links: [{ code: "056_FPA_B1_M13_S006", label: "056_FPA_B1_M13_S006 - Travailler sur des projets de conception d’activités d’apprentissage ou d’évaluation", bloc: "B1" }] }
              ]
          },
          {
              at: "Activité Type 2 : Animer une formation et évaluer les acquis des apprenants",
              icon: "🎤", color: "bg-paia-yellow", border: "border-paia-yellow", text: "text-paia-yellow",
              questions: [
                  { q: "1. Lors de la formation \"Prévenir les risques liés à la manutention dans l’aménagement paysager\", vous projetez un diaporama sur \"les principes ergonomiques\". Vous remarquez que les deux personnes allophones décrochent et ne vous écoutent plus. Proposez 5 actions minimum à mettre en place pour ces deux salariés.", links: [{ code: "098_FPA_B2_M08_S002", label: "098_FPA_B2_M08_S002 - Remédier aux difficultés d'apprentissage", bloc: "B2" }, { code: "100_FPA_B2_M09_S001", label: "100_FPA_B2_M09_S001 - L'adaptation de la formation en cas de difficultés individuelles", bloc: "B2" }] },
                  { q: "2. Pour anticiper et pallier la difficulté dessalariés allophones à suivre un diaporama sur \"les principes ergonomiques\" lors de cette formation, il est essentiel d'adapter les supports et méthodes dès la préparation. Décrivez 5 propositions concrètes d’amélioration de votre support de présentation.", links: [{ code: "050_FPA_B1_M12_S003", label: "050_FPA_B1_M12_S003 - La méthode FALC", bloc: "B1" }, { code: "078_FPA_B2_M04_S002", label: "078_FPA_B2_M04_S002 - Les difficultés individuelles et collectives d'apprentissage", bloc: "B2" }] },
                  { q: "3. Vous avez animé le module de formation \"Prévenir les risques liés à la manutention dans l’aménagement paysager\". Les deux évaluations proposées pour la partie théorie et pratique ne vous satisfont pas. Décrivez 5 propositions d’évaluation en prenant en considération les deux salariés allophones.", links: [{ code: "087_FPA_B2_M05_S004", label: "087_FPA_B2_M05_S004 - La réglementation sur l’adaptation des évaluations pour les apprenants en situation de handicap", bloc: "B2" }] },
                  { q: "4. Avec votre même groupe de salariés en insertion, vous devez travailler autour de la rédaction du CV. Un des salariés ne sait pas utiliser les outils informatiques. Explicitez 5 techniques vous permettant de l'accompagner et de l’impliquer dans la rédaction de son CV.", links: [{ code: "101_FPA_B2_M09_S002", label: "101_FPA_B2_M09_S002 - Les techniques de résolution de problème", bloc: "B2" }] }
              ]
          },
          {
              at: "Activité Type 3 : Accompagner les apprenants en formation",
              icon: "🤝", color: "bg-paia-bronze", border: "border-paia-bronze", text: "text-paia-bronze",
              questions: [
                  { q: "1. Lors d’un entretien de mi-parcours, un apprenant vous confie ses doutes quant à sa suite de parcours. Il a l’impression de ne pas être capable d’appliquer tout ce que vous avez abordé au préalable. À quoi allez-vous être vigilant durant cet entretien ? Citez au minimum 5 points de vigilance à avoir pour mener à bien votre entretien.", links: [{ code: "106_FPA_B3_M02_S001", label: "106_FPA_B3_M02_S001 - Les techniques d'entretien", bloc: "B3" }] },
                  { q: "2. Vous avez débuté le module \"rédiger efficacement son CV et sa lettre de motivation\", lors de la deuxième séance vous accueillez un nouvel apprenant. Indiquez les étapes à mettre en place pour son accueil et la co-construction de son parcours de formation ?", links: [{ code: "121_FPA_B3_M06_S001", label: "121_FPA_B3_M06_S001 - L'accueil individuel d'un apprenant en formation", bloc: "B3" }, { code: "119_FPA_B3_M05_S003", label: "119_FPA_B3_M05_S003 - La co-construction d'un parcours de formation", bloc: "B3" }] },
                  { q: "3. Un second apprenant, Martin, intègre la formation « Accompagner à l’emploi, les premières démarches pour intégrer une entreprise ». Martin émet le souhait de se diriger dans le domaine du service aux personnes. Détaillez, à partir du document en annexe 4, le plan général en 5 étapes, que vous proposeriez pour l’accompagner de manière structurée et personnalisée.", links: [{ code: "143_FPA_B3_M11_S006", label: "143_FPA_B3_M11_S006 - Les méthodes d'accompagnement au projet professionnel", bloc: "B3" }] },
                  { q: "4. Suite à la formation « Accompagner à l’emploi, les premières démarches pour intégrer une entreprise » vous effectuez le suivi pendant 3 mois des apprenants. Les rendez-vous de suivi se réalisent en distanciel. Définissez une stratégie de tutorat, en 5 points minimum, pour aider Octave dans son développement de projet professionnel de responsable de secteur en espaces verts.", links: [{ code: "133_FPA_B3_M08_S006", label: "133_FPA_B3_M08_S006 - Application - Tutorer les apprenants à distance", bloc: "B3" }, { code: "124_FPA_B3_M07_S001", label: "124_FPA_B3_M07_S001 - Fonctions tutorales et besoins de l'apprenant en formation à distance", bloc: "B3" }] },
                  { q: "5. En fin de formation, Martin a validé son projet professionnel d’aide à domicile. Vous avez identifié ses atouts (empathie, disponibilité, écoute) et ses freins (permis sans véhicule, absence de diplôme). Mettez en place un plan d’action post formation pour encourager Martin et suivre le développement de son projet professionnel.", links: [{ code: "141_FPA_B3_M11_S004", label: "141_FPA_B3_M11_S004 - Le suivi dans le développement professionnel des apprenants", bloc: "B3" }] }
              ]
          },
          {
              at: "Activité Type 4 : Inscrire sa pratique professionnelle dans une démarche de qualité et de responsabilité sociale des entreprises",
              icon: "🔎", color: "bg-paia-dark", border: "border-paia-dark", text: "text-paia-dark",
              questions: [
                  { q: "1. L’organisme TForm’ souhaite obtenir la certification Qualiopi, dressez une liste des critères de conformité pour la formation continue pour adultes et les documents de preuves à fournir.", links: [{ code: "149_FPA_B4_M01_S003", label: "149_FPA_B4_M01_S003 - Les réglementations Qualiopi", bloc: "B4" }] },
                  { q: "2. Élaborez une stratégie de veille professionnelle qui vous permettra de rester à la pointe dans le domaine de l’accompagnement à l’emploi (rédaction de CV, aide au recrutement, …) et d'intégrer les dernières innovations pédagogiques et technologiques dans vos formations.", links: [{ code: "162_FPA_B4_M03_S001", label: "162_FPA_B4_M03_S001 - La veille professionnelle", bloc: "B4" }] },
                  { q: "3. Pour réaliser votre veille de manière efficace,sur \"Accompagner à l’emploi, les premières démarches de manière efficace\" \"Rédiger un CV\", vous utilisez différentes sources. Citez au minimum cinq types de sources.", links: [{ code: "164_FPA_B4_M03_S003", label: "164_FPA_B4_M03_S003 - Méthodologies de recherche, de capitalisation d'informations et d'organisation de la veille", bloc: "B4" }, { code: "165_FPA_B4_M03_S004", label: "165_FPA_B4_M03_S004 - Les outils de surveillance et de recherche", bloc: "B4" }] },
                  { q: "4. En tant que formateur junior recruté chez TForm', vous effectuez régulièrement des analyses de votre pratique professionnelle. Proposez un processus d'auto-évaluation et de développement professionnel continu pour affiner et améliorer vos pratiques de formateur.", links: [{ code: "172_FPA_B4_M05_S004", label: "172_FPA_B4_M05_S004 - Analyser ses pratiques de formation", bloc: "B4" }] }
              ]
          }
      ];

      const configStructure = {
        B0: [{ id: "M01" }, { id: "M02" }, { id: "M03" }],
        B1: [{ id: "M01" }, { id: "M02" }, { id: "M03" }, { id: "M04" }, { id: "M05" }, { id: "M06" }, { id: "M07" }, { id: "M08" }, { id: "M09" }, { id: "M10" }, { id: "M11" }, { id: "M12" }, { id: "M13" }, { id: "M14" }],
        B2: [{ id: "M01" }, { id: "M02" }, { id: "M03" }, { id: "M04" }, { id: "M05" }, { id: "M06" }, { id: "M07" }, { id: "M08" }, { id: "M09" }],
        B3: [{ id: "M01" }, { id: "M02" }, { id: "M03" }, { id: "M04" }, { id: "M05" }, { id: "M06" }, { id: "M07" }, { id: "M08" }, { id: "M09" }, { id: "M10" }, { id: "M11" }, { id: "M12" }],
        B4: [{ id: "M01" }, { id: "M02" }, { id: "M03" }, { id: "M04" }, { id: "M05" }]
      };

      let progressRes = JSON.parse(localStorage.getItem("paia_p_v10")) || {};
      let isVoice = localStorage.getItem("paia_voice") === "true";
      let currentBloc = "ALL";
      let currentMod = "ALL";

      const dataProgram = {
            bloc0: { id: "bloc0", themeKey: "trans", title: "B0 : Socle", icon: "🧠", modules: [
                { title: "M01 : Méthodes & Jeux", sujets: [
                    "000_FPA_B0_M01_S001 - Présentation du module et auto positionnement",
                    "000_FPA_B0_M01_S002 - Plus de 15 jeux pédagogiques 1",
                    "000_FPA_B0_M01_S003 - Plus de 15 jeux pédagogiques 2",
                    "000_FPA_B0_M01_S004 - Plus de 10 scénarios pédagogiques",
                    "000_FPA_B0_M01_S005 - Panorama de plus de 40 techniques pédagogiques"
                ]},
                { title: "M02 : Classe Virtuelle", sujets: [
                    "000_FPA_B0_M02_S001 - Les usages de la classe virtuelle",
                    "000_FPA_B0_M02_S002 - Se lancer dans la classe virtuelle",
                    "000_FPA_B0_M02_S003 - Préparer l'animation d'une classe virtuelle",
                    "000_FPA_B0_M02_S004 - Animer une classe virtuelle",
                    "000_FPA_B0_M02_S005 - Les outils de la classe virtuelle"
                ]},
                { title: "M03 : Pédagogie Inversée", sujets: [
                    "000_FPA_B0_M03_S001 - Auto-positionnement pédagogie inversée",
                    "000_FPA_B0_M03_S002 - Qu'est-ce que la pédagogie inversée",
                    "000_FPA_B0_M03_S003 - Le Learning by Doing",
                    "000_FPA_B0_M03_S004 - Styles d'apprentissage et rôle du formateur",
                    "000_FPA_B0_M03_S005 - Les différents niveaux de la classe inversée",
                    "000_FPA_B0_M03_S006 - Quelques outils pour inverser sa classe"
                ]}
            ]},
            bloc1: { id: "bloc1", themeKey: "bloc1", title: "B1 : Concevoir", icon: "🏗️", modules: [
                { title: "M01 : Analyse demande", sujets: [
                    "000_FPA_B1_M01_S000 - Graduate Formateur pour adultes",
                    "001_FPA_B1_M01_S001 - L'analyse de la demande",
                    "002_FPA_B1_M01_S002 - La demande formelle ou informelle et les besoins en formation",
                    "003_ FPA_B1_M01_S003 - Les caractéristiques des publics"
                ]},
                { title: "M02 : Obligations légales", sujets: [
                    "004_FPA_B1_M02_S001 - Le cadre légal de la formation professionnelle",
                    "005_FPA_B1_M02_S002 - Le cadre règlementaires, législatif de l'activité de formation",
                    "006_FPA_B1_M02_S003 - Les obligations administratives des organismes de formation",
                    "007_FPA_B1_M02_S004 - La mise en œuvre des prestations"
                ]},
                { title: "M03 : Financements", sujets: [
                    "008_FPA_B1_M03_S001 - La gouvernance et le financement du système de la formation professionnelle",
                    "009_FPA_B1_M03_S002 - Les financements du public Travailleur Non Salarié",
                    "010_FPA_B1_M03_S003 - Les financements du public salarié",
                    "011_FPA_B1_M03_S004 - Le financement des demandeurs d'emploi",
                    "012_FPA_B1_M03_S005 - Le financement des autres publics",
                    "013_FPA_B1_M03_S006 - Le Compte Personnel de Formation"
                ]},
                { title: "M04 : Ingénierie", sujets: [
                    "014_FPA_B1_M04_S001 - Les référentiels en formation",
                    "015_FPA_B1_M04_S002 - La pédagogie des adultes",
                    "016_FPA_B1_M04_S003 - Les concepts de base de l'ingénierie et le vocabulaire de formation",
                    "017_FPA_B1_M04_S004 - Structurer sa formation en blocs de compétences"
                ]},
                { title: "M05 : Moyens", sujets: [
                    "018_FPA_B1_M05_S001 - Les modalités pédagogiques et les modalités d'accompagnement",
                    "019_FPA_B1_M05_S002 - Les situations d'apprentissage, d'accompagnement et d'évaluation",
                    "020_FPA_B1_M05_S003 - L'accompagnement pédagogique"
                ]},
                { title: "M06 : Progression", sujets: [
                    "021_FPA_B1_M06_S001 - Les étapes de la formation et de l'accompagnement et les durées associées",
                    "022_FPA_B1_M06_S002 - La rédaction d'une progression pédagogique et d'un plan d'accompagnement",
                    "023_FPA_B1_M06_S003 - L'organisation logistique des moyens pédagogiques",
                    "024_FPA_B1_M06_S004 - Application - Élaborer la progression pédagogique d’une formation multimodale à partir d'une demande"
                ]},
                { title: "M07 : Techniques", sujets: [
                    "025_FPA_B1_M07_S001 - Les méthodes pédagogiques",
                    "026_FPA_B1_M07_S002 - Les concepts, modalités et démarches pédagogiques",
                    "027_FPA_B1_M07_S003 - Les techniques pédagogiques",
                    "028_FPA_B1_M07_S004 - L'outillage pédagogique",
                    "029_FPA_B1_M07_S005 - Les strategies favorisant l'analyse réflexive, les pédagogies actives et l'apprentissage par les pairs",
                    "030_FPA_B1_M07_S006 - Les types d'évaluation et de positionnement",
                    "031_FPA_B1_M07_S007 - Les concepts de base de l'ingénierie pédagogique adaptée aux adultes"
                ]},
                { title: "M08 : Individualisation", sujets: [
                    "032_FPA_B1_M08_S001 - Les outils d'auto-formation et d'auto-évaluation",
                    "033_FPA_B1_M08_S002 - Les spécificités des formations individualisées",
                    "034_FPA_B1_M08_S003 - La formation en alternance et l'AFEST"
                ]},
                { title: "M09 : Scénarisation", sujets: [
                    "035_FPA_B1_M09_S001 - Les théories de l'apprentissage social et des outils collaboratifs",
                    "036_FPA_B1_M09_S002 - Les différents styles d'apprentissage",
                    "037_FPA_B1_M09_S003 - Les environnements et services numériques mobilisables",
                    "038_FPA_B1_M09_S004 - Les principales obligations des organismes de formation sur le handicap",
                    "039_FPA_B1_M09_S005 - Les étapes clés structurant un temps de formation",
                    "040_FPA_B1_M09_S006 - La construction du scénario pédagogique"
                ]},
                { title: "M10 : Scénario Tutoral", sujets: [
                    "041_FPA_B1_M10_S001 - Les types d'accompagnement et des outils de suivi associés",
                    "042_FPA_B1_M10_S002 - Les situations d'accueil et d'accompagnements des apprenants",
                    "043_FPA_B1_M10_S003 - La rédaction d'un scénario tutoral d'accompagnement"
                ]},
                { title: "M11 : Multimodalité", sujets: [
                    "044_FPA_B1_M11_S001 - La scénarisation d'un parcours",
                    "045_FPA_B1_M11_S002 - Scénariser ses parcours avec les blended-learning",
                    "046_FPA_B1_M11_S003 - La planification et l'accueil de nouveaux apprenants y compris dans les formations à entrées et sorties permanentes",
                    "047_FPA_B1_M11_S004 - Application - Concevoir un scénario pédagogique et d'accompagnement en intégrant la multimodalité"
                ]},
                { title: "M12 : Communication", sujets: [
                    "048_FPA_B1_M12_S001 - Capter l'attention grâce aux images et aux schémas",
                    "049_FPA_B1_M12_S002 - Les règles d'écriture d'une consigne, de communication et de conception graphique",
                    "050_FPA_B1_M12_S003 - La méthode FALC"
                ]},
                { title: "M13 : Conception", sujets: [
                    "051_FPA_B1_M13_S001 - La conception d'un support de formation et d'une activité d'apprentissage",
                    "052_FPA_B1_M13_S002 - La conception d'un support de formation et d'une activité d'apprentissage spécifique à l'autoformation",
                    "053_FPA_B1_M13_S003 - La digitalisation d'une formation",
                    "054_FPA_B1_M13_S004 - La réalisation d'un storyboard",
                    "055_FPA_B1_M13_S005 - Comment construire un questionnaire de satisfaction ?",
                    "056_FPA_B1_M13_S006 - Travailler sur des projets de conception d’activités d’apprentissage ou d’évaluation"
                ]},
                { title: "M14 : Veille", sujets: [
                    "057_FPA_B1_M14_S001 - Le concept de veille et sa méthodologie",
                    "058_FPA_B1_M14_S002 - Organiser un dispositif de veille efficace",
                    "059_FPA_B1_M14_S003 - La veille technologique - sources, référents, outils et bonnes pratiques",
                    "060_FPA_B1_M14_S004 - La synthèse des veilles",
                    "061_FPA_B1_M14_S005 - Application - Concevoir des activités d'apprentissage et d'évaluation"
                ]}
            ]},
            bloc2: { id: "bloc2", themeKey: "bloc2", title: "B2 : Animer", icon: "🎤", modules: [
                { title: "M01 : Facilitation", sujets: [
                    "062_FPA_B2_M01_S001 - La posture de facilitateur",
                    "063_FPA_B2_M01_S002 - La communication pédagogique",
                    "064_FPA_B2_M01_S003 - L'intelligence collective en formation",
                    "065_FPA_B2_M01_S004 - Les consignes de travail, la gestion du temps",
                    "066_FPA_B2_M01_S005 - La facilitation et l'exploitation des interventions des stagiaires"
                ]},
                { title: "M02 : Animation", sujets: [
                    "067_FPA_B2_M02_S001 - Préparer sa posture professionnelle et son animation",
                    "068_FPA_B2_M02_S002 - Démarrer une session de formation, plus de 15 ateliers de lancement",
                    "069_FPA_B2_M02_S003 - L’impact du démarrage et de la conclusion d’une formation",
                    "070_FPA_B2_M02_S004 - L'écoute active",
                    "071_FPA_B2_M02_S005 - Le lancement des séquences pédagogiques",
                    "072_FPA_B2_M02_S006 - La dynamique de groupe",
                    "073_FPA_B2_M02_S007 - Stimuler et canaliser les participants"
                ]},
                { title: "M03 : Digital", sujets: [
                    "074_FPA_B2_M03_S001 - Le digital Learning",
                    "075_FPA_B2_M03_S002 - Préparer l'animation d'une classe virtuelle",
                    "076_FPA_B2_M03_S003 - Animer une classe virtuelle"
                ]},
                { title: "M04 : Neurosciences", sujets: [
                    "077_FPA_B2_M04_S001 - L'individualisation",
                    "078_FPA_B2_M04_S002 - Les difficultés individuelles et collectives d'apprentissage",
                    "079_FPA_B2_M04_S003 - Désamorcer une situation conflictuelle",
                    "080_FPA_B2_M04_S004 - Les troubles DYS dans les apprentissages",
                    "081_FPA_B2_M04_S005 - Les autres types de handicaps et leurs conséquences en formation",
                    "082_FPA_B2_M04_S006 - Les mécanismes de l'attention, de la motivation et les neurosciences",
                    "083_FPA_B2_M04_S007 - Application - Animer une formation et faciliter les apprentissages selon différentes modalités"
                ]},
                { title: "M05 : Planif Eval.", sujets: [
                    "084_FPA_B2_M05_S001 - La planification et la mise en place d'une évaluation",
                    "085_FPA_B2_M05_S002 - Le dispositif d'évaluation",
                    "086_FPA_B2_M05_S003 - Les référentiels, les criteria et indicateurs de l'évaluation",
                    "087_FPA_B2_M05_S004 - La réglementation sur l’adaptation des évaluations pour les apprenants en situation de handicap",
                    "088_FPA_B2_M05_S005 - L'alignement pédagogique entre les objectifs d'apprentissage, les activités et l'évaluation"
                ]},
                { title: "M06 : Outils Eval.", sujets: [
                    "089_FPA_B2_M06_S001 - L'évaluation des acquis",
                    "090_FPA_B2_M06_S002 - Les outils d'évaluation",
                    "091_FPA_B2_M06_S003 - La construction d'activités et d'outils d'évaluation des acquis"
                ]},
                { title: "M07 : Restitution", sujets: [
                    "092_FPA_B2_M07_S001 - Les modalités de restitution d'une évaluation",
                    "093_FPA_B2_M07_S002 - L'exploitation des résultats en tant que situation d'apprentissage",
                    "094_FPA_B2_M07_S003 - La planification des temps d'évaluation, de correction, de restitution",
                    "095_FPA_B2_M07_S004 - La restitution de bilans pédagogiques individuels et collectifs",
                    "096_FPA_B2_M07_S005 - Application - Evaluer les acquis de formation des apprenants"
                ]},
                { title: "M08 : Difficultés", sujets: [
                    "097_FPA_B2_M08_S001 - Les difficultés et obstacles à l’apprentissage",
                    "098_FPA_B2_M08_S002 - Remédier aux difficultés d'apprentissage",
                    "099_FPA_B2_M08_S003 - Les indicateurs de décrochage et les stratégies de remédiation"
                ]},
                { title: "M09 : Stratégies", sujets: [
                    "100_FPA_B2_M09_S001 - L'adaptation de la formation en cas de difficultés individuelles",
                    "101_FPA_B2_M09_S002 - Les techniques de résolution de problème",
                    "102_FPA_B2_M09_S003 - La posture à adopter pour remédier aux difficultés individuelles d'apprentissage",
                    "103_FPA_B2_M09_S004 - Application - Remédier aux difficultés individuelles d'apprentissage"
                ]}
            ]},
            bloc3: { id: "bloc3", themeKey: "bloc3", title: "B3 : Accompagner", icon: "🤝", modules: [
                { title: "M01 : Diagnostiquer", sujets: [
                    "104_FPA_B3_M01_S001 - Les différents types de difficultés périphériques et besoin d'accompagnement",
                    "105_FPA_B3_M01_S002 - Les démarches diagnostiques"
                ]},
                { title: "M02 : Entretien", sujets: [
                    "106_FPA_B3_M02_S001 - Les techniques d'entretien",
                    "107_FPA_B3_M02_S002 - Les différents types d'entretien",
                    "108_FPA_B3_M02_S003 - Les outils de suivi et de bilan",
                    "109_FPA_B3_M02_S004 - Les outils d'accompagnement pédagogique"
                ]},
                { title: "M03 : Émotions", sujets: [
                    "110_FPA_B3_M03_S001 - L'intelligence émotionnelle - au coeur de l'être humain",
                    "111_FPA_B3_M03_S002 - La réadaptation d'un parcours de formation",
                    "112_FPA_B3_M03_S003 - Les acteurs de l'accompagnement",
                    "113_FPA_B3_M03_S004 - La communication de la situation d'un apprenant"
                ]},
                { title: "M04 : Gestion", sujets: [
                    "114_FPA_B3_M04_S001 - Les flux d'apprenants dans la gestion d'un parcours",
                    "115_FPA_B3_M04_S002 - Administrer et suivre un parcours de formation sur une plateforme numérique",
                    "116_FPA_B3_M04_S003 - Application - Accompagner les apprenants dans leurs parcours de formation"
                ]},
                { title: "M05 : Co-construction", sujets: [
                    "117_FPA_B3_M05_S001 - Le positionnement des apprenants",
                    "118_FPA_B3_M05_S002 - L'analyse et la restitution du résultat d'un positionnement",
                    "119_FPA_B3_M05_S003 - La co-construction d'un parcours de formation",
                    "120_FPA_B3_M05_S004 - La mise en place d'un protocole individuel de formation"
                ]},
                { title: "M06 : Accueil", sujets: [
                    "121_FPA_B3_M06_S001 - L'accueil individuel d'un apprenant en formation",
                    "122_FPA_B3_M06_S002 - L'analyse réflexive et l'auto-évaluation",
                    "123_FPA_B3_M06_S003 - Application - Accueillir un apprenant en formation et co-construire un parcours"
                ]},
                { title: "M07 : Distance", sujets: [
                    "124_FPA_B3_M07_S001 - Fonctions tutorales et besoins de l'apprenant en formation à distance",
                    "125_FPA_B3_M07_S002 - Les mécanismes motivationnels et attentionnels en formation à distance",
                    "126_FPA_B3_M07_S003 - Les leviers et freins aux apprentissages dans la relation à distance",
                    "127_FPA_B3_M07_S004 - La remédiation aux difficultés techniques"
                ]},
                { title: "M08 : Communautés", sujets: [
                    "128_FPA_B3_M08_S001 - Les principes de fonctionnement des communautés d'apprentissage",
                    "129_FPA_B3_M08_S002 - L'écriture pour les réseaux sociaux",
                    "130_FPA_B3_M08_S003 - Le feed-back dans une situation de formation à distance",
                    "131_FPA_B3_M08_S004 - La protection des données personnelles - Grands principes et lois informatique et Libertés",
                    "132_FPA_B3_M08_S005 - Les spécificités des apprenants dans le tutorat à distance",
                    "133_FPA_B3_M08_S006 - Application - Tutorer les apprenants à distance"
                ]},
                { title: "M09 : Alternance", sujets: [
                    "134_FPA_B3_M09_S001 - Les enjeux de l'alternance",
                    "135_FPA_B3_M09_S002 - Les contrats d'apprentissage et de professionnalisation",
                    "136_FPA_B3_M09_S003 - La reconversion ou promotion par l'alternance, le \"PRO-A\""
                ]},
                { title: "M10 : AFEST", sujets: [
                    "137_FPA_B3_M10_S001 - Le tutorat en entreprise"
                ]},
                { title: "M11 : Insertion", sujets: [
                    "138_FPA_B3_M11_S001 - L'insertion sociale et professionnelle",
                    "139_FPA_B3_M11_S002 - Les problématiques pouvant constituer des freins à la mise en œuvre du projet",
                    "140_FPA_B3_M11_S003 - La démarche HANDICAP",
                    "141_FPA_B3_M11_S004 - Le suivi dans le développement professionnel des apprenants",
                    "142_FPA_B3_M11_S005 - Les outils numériques d'accompagnement au projet professionnel et de recherche d'emploi",
                    "143_FPA_B3_M11_S006 - Les méthodes d'accompagnement au projet professionnel"
                ]},
                { title: "M12 : Emploi", sujets: [
                    "144_FPA_B3_M12_S001 - Les techniques de recherche d'emploi",
                    "145_FPA_B3_M12_S002 - Les mesures d'accès à la formation et à l'emploi",
                    "146_FPA_B3_M12_S003 - Application - Accompagner le développement des apprenants"
                ]}
            ]},
            bloc4: { id: "bloc4", themeKey: "bloc4", title: "B4 : Qualité", icon: "🔎", modules: [
                { title: "M01 : Réglementation", sujets: [
                    "147_FPA_B4_M01_S001 - Le cadre légale de l'activité de formation",
                    "148_FPA_B4_M01_S002 - La démarche Qualiopi",
                    "149_FPA_B4_M01_S003 - Les réglementations Qualiopi",
                    "150_FPA_B4_M01_S004 - Le bilan pédagogique et financier"
                ]},
                { title: "M02 : Prévention", sujets: [
                    "151_FPA_B4_M02_S001 - Les principes de l'égalité professionnelle appliquée à la formation professionnelle",
                    "152_FPA_B4_M02_S002 - La démarche de prévention appliquée à une activité de travail",
                    "153_FPA_B4_M02_S003 - Les risques liés à l'activité physique du métier",
                    "154_FPA_B4_M02_S004 - Les risques professionnels dans l'activité de travail",
                    "155_FPA_B4_M02_S005 - La démarche ergonomique",
                    "156_FPA_B4_M02_S006 - La charge mentale",
                    "157_FPA_B4_M02_S007 - Les risques psychosociaux et la qualité de vie au travail",
                    "158_FPA_B4_M02_S008 - Les réglementation sur l'hygiène, la santé et la sécurité de la FP",
                    "159_FPA_B4_M02_S009 - Les principes et enjeux de la RSE en formation",
                    "160_FPA_B4_M02_S010 - La lutte contre la discrimination en formation",
                    "161_FPA_B4_M02_S011 - Application - Respecter et faire respecter la réglementation en vigueur en formation et dans son domaine de spécialité"
                ]},
                { title: "M03 : Veille", sujets: [
                    "162_FPA_B4_M03_S001 - La veille professionnelle",
                    "163_FPA_B4_M03_S002 - Le cadre légal autour de la diffusion de ressources",
                    "164_FPA_B4_M03_S003 - Méthodologies de recherche, de capitalisation d'informations et d'organisation de la veille",
                    "165_FPA_B4_M03_S004 - Les outils de surveillance et de recherche"
                ]},
                { title: "M04 : Actualiser", sujets: [
                    "166_FPA_B4_M04_S001 - Le Code de la propriété intellectuelle",
                    "167_FPA_B4_M04_S002 - Actualiser son ingénierie, ses pratiques et ses supports de formation",
                    "168_FPA_B4_M04_S003 - Application - Respecter et faire respecter la réglementation en vigueur en formation et dans sa spécialité"
                ]},
                { title: "M05 : Analyse pratique", sujets: [
                    "169_FPA_B4_M05_S001 - L'analyse de pratique",
                    "170_FPA_B4_M05_S002 - L'analyse réflexive",
                    "171_FPA_B4_M05_S003 - Les axes d'amélioration du parcours",
                    "172_FPA_B4_M05_S004 - Analyser ses pratiques de formation",
                    "173_FPA_B4_M05_S005 - Application - Analyser ses pratiques professionnelles"
                ]}
            ]}
      };

      const dataEvaluations = {
            eval_ccp1: { id: "eval_ccp1", themeKey: "bloc1", title: "B1 : Concevoir", subtitle: "Évaluations du Bloc 1", icon: "🏗️", items: [
                { id: "e_c1_ecf_ent", title: "ECF d'entraînement - CCP1" }, { id: "e_c1_dt_d1", title: "Dossier technique Chap. 1 - Dépôt 1" }, { id: "e_c1_dt_d2", title: "Dossier technique Chap. 1 - Dépôt 2" }, { id: "e_c1_dt_df", title: "Dossier technique Chap. 1 - Dépôt final" }, { id: "e_c1_ecf_fin", title: "ECF Finale 2026 - CCP1" }
            ]},
            eval_ccp2: { id: "eval_ccp2", themeKey: "bloc2", title: "B2 : Animer", subtitle: "Évaluations du Bloc 2", icon: "🎤", items: [
                { id: "e_c2_ecf_ent", title: "ECF d'entraînement - CCP2" }, { id: "e_c2_dt_d1", title: "Dossier technique Chap. 2 - Dépôt 1" }, { id: "e_c2_dt_d2", title: "Dossier technique Chap. 2 - Dépôt 2" }, { id: "e_c2_dt_df", title: "Dossier technique Chap. 2 - Dépôt final" }, { id: "e_c2_ecf_fin", title: "ECF Finale 2026 - CCP2" }
            ]},
            eval_ccp3: { id: "eval_ccp3", themeKey: "bloc3", title: "B3 : Accompagner", subtitle: "Évaluations du Bloc 3", icon: "🤝", items: [
                { id: "e_c3_ecf_ent", title: "ECF d'entraînement - CCP3" }, { id: "e_c3_dt_d1", title: "Dossier technique Chap. 3 - Dépôt 1" }, { id: "e_c3_dt_d2", title: "Dossier technique Chap. 3 - Dépôt 2" }, { id: "e_c3_dt_df", title: "Dossier technique Chap. 3 - Dépôt final" }, { id: "e_c3_ecf_fin", title: "ECF Finale 2026 - CCP3" }
            ]},
            eval_ccp4: { id: "eval_ccp4", themeKey: "bloc4", title: "B4 : Qualité", subtitle: "Évaluations du Bloc 4", icon: "🔎", items: [
                { id: "e_c4_ecf_ent", title: "ECF d'entraînement - CCP4" }, { id: "e_c4_dt_d1", title: "Dossier technique Chap. 4 - Dépôt 1" }, { id: "e_c4_dt_d2", title: "Dossier technique Chap. 4 - Dépôt 2" }, { id: "e_c4_dt_df", title: "Dossier technique Chap. 4 - Dépôt final" }, { id: "e_c4_ecf_fin", title: "ECF Finale 2026 - CCP4" }
            ]},
            eval_trans: { id: "eval_trans", themeKey: "trans", title: "Évaluations Transverses", subtitle: "Dossier Pro & Examens Finaux", icon: "🏆", items: [
                { id: "e_tr_dp_grille", title: "Dossier Professionnel - Grille de validation" }, { id: "e_tr_dp_d1", title: "Dossier Professionnel - 1er dépôt" }, { id: "e_tr_dp_d2", title: "Dossier Professionnel - 2ème dépôt" }, { id: "e_tr_dp_df", title: "Dossier Professionnel - Dépôt final" }, { id: "e_tr_stage", title: "Grille de stage : évaluation du tuteur" }, { id: "e_tr_test", title: "Tester mes connaissances" }, { id: "e_tr_oral_q", title: "Entrainement au questionnement (Oral)" }, { id: "e_tr_oral_t", title: "Entraînement à l'oral de l'entretien technique" }, { id: "e_tr_ecf_glob", title: "Evaluation ECF Finale - Dépôt global (19/11/26)" }
            ]}
      };

      const themes = {
            bloc1: { bg: 'bg-paia-blue', text: 'text-paia-blue', border: 'border-paia-blue', light: 'bg-paia-blue/10', fill: 'bg-paia-blue', hex: '#0F2C48' },
            bloc2: { bg: 'bg-paia-yellow', text: 'text-paia-yellow', border: 'border-paia-yellow', light: 'bg-yellow-50', fill: 'bg-paia-yellow', hex: '#D9A526' },
            bloc3: { bg: 'bg-paia-bronze', text: 'text-paia-bronze', border: 'border-paia-bronze', light: 'bg-orange-50', fill: 'bg-paia-bronze', hex: '#B4792A' },
            bloc4: { bg: 'bg-paia-dark', text: 'text-paia-dark', border: 'border-paia-dark', light: 'bg-slate-100', fill: 'bg-paia-dark', hex: '#0f172a' },
            trans: { bg: 'bg-sky-600', text: 'text-sky-600', border: 'border-sky-600', light: 'bg-sky-50', fill: 'bg-sky-600', hex: '#0284c7' }
      };

      const progressState = {
            bloc0: { total: 0, completed: new Set() },
            bloc1: { total: 0, completed: new Set() },
            bloc2: { total: 0, completed: new Set() },
            bloc3: { total: 0, completed: new Set() },
            bloc4: { total: 0, completed: new Set() },
            evaluations: { total: 0, inProgress: new Set(), completed: new Set(), statuses: {}, dates: {}, returnDates: {} }
      };

      let chartInstance = null;

      function initProgressCounts() {
            Object.values(dataProgram).forEach(bloc => {
                let count = 0;
                bloc.modules.forEach(mod => { if (mod.sujets) count += mod.sujets.length; });
                progressState[bloc.id].total = count;
            });
            Object.values(dataEvaluations).forEach(col => {
                progressState.evaluations.total += col.items.length;
            });
      }

      function saveState() {
            const serialized = {
                bloc0: Array.from(progressState.bloc0.completed),
                bloc1: Array.from(progressState.bloc1.completed),
                bloc2: Array.from(progressState.bloc2.completed),
                bloc3: Array.from(progressState.bloc3.completed),
                bloc4: Array.from(progressState.bloc4.completed),
                evalInProgress: Array.from(progressState.evaluations.inProgress),
                evalCompleted: Array.from(progressState.evaluations.completed),
                evalStatuses: progressState.evaluations.statuses,
                evalDates: progressState.evaluations.dates,
                evalReturnDates: progressState.evaluations.returnDates
            };
            localStorage.setItem('paia_progression_complete', JSON.stringify(serialized));
      }

      function loadState() {
            const data = JSON.parse(localStorage.getItem('paia_progression_complete'));
            if (!data) return;
            if (data.bloc0) progressState.bloc0.completed = new Set(data.bloc0);
            if (data.bloc1) progressState.bloc1.completed = new Set(data.bloc1);
            if (data.bloc2) progressState.bloc2.completed = new Set(data.bloc2);
            if (data.bloc3) progressState.bloc3.completed = new Set(data.bloc3);
            if (data.bloc4) progressState.bloc4.completed = new Set(data.bloc4);
            if (data.evalInProgress) progressState.evaluations.inProgress = new Set(data.evalInProgress);
            if (data.evalCompleted) progressState.evaluations.completed = new Set(data.evalCompleted);
            if (data.evalStatuses) progressState.evaluations.statuses = data.evalStatuses;
            if (data.evalDates) progressState.evaluations.dates = data.evalDates;
            if (data.evalReturnDates) progressState.evaluations.returnDates = data.evalReturnDates;
      }

      function toggleMobileMenu() {
        const menu = document.getElementById('mobile-menu');
        const icon = document.getElementById('burger-icon');
        if(!menu || !icon) return;
        if (menu.classList.contains('hidden')) {
            menu.classList.remove('hidden');
            setTimeout(() => menu.classList.replace('translate-x-full', 'translate-x-0'), 10);
            icon.className = "fas fa-times";
        } else {
            menu.classList.replace('translate-x-0', 'translate-x-full');
            setTimeout(() => menu.classList.add('hidden'), 400);
            icon.className = "fas fa-bars";
        }
      }

      function switchCertifTab(tabId) {
            document.querySelectorAll('.certif-tab-btn').forEach(btn => { btn.classList.remove('active'); btn.classList.add('bg-white'); });
            const activeBtn = document.getElementById(`btn-${tabId}`);
            if(activeBtn) { activeBtn.classList.add('active'); activeBtn.classList.remove('bg-white'); }
            document.querySelectorAll('.certif-tab-content').forEach(content => content.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
            if (tabId === 'c2-dashboard') renderChart();
      }

      window.calculateReturnDate = function() {
            const inputVal = document.getElementById('calc-date-depot')?.value;
            const delayDaysEl = document.getElementById('calc-delai');
            const delayDays = delayDaysEl ? parseInt(delayDaysEl.value) : 10;
            if (!inputVal) return;
            const date = getWorkingDaysAdded(inputVal, delayDays);
            const resInput = document.getElementById('calc-resultat');
            if(resInput) resInput.value = date.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
            document.getElementById('calc-result-container')?.classList.remove('hidden');
      };

      function isHoliday(date) {
            const monthDay = String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0');
            const fullDate = date.toISOString().split('T')[0];
            const fixedHolidays = ['01-01', '05-01', '05-08', '07-14', '08-15', '11-01', '11-11', '12-25'];
            const mobileHolidays = ['2026-04-06', '2026-05-14', '2026-05-25', '2027-03-29', '2027-05-06', '2027-05-17'];
            return fixedHolidays.includes(monthDay) || mobileHolidays.includes(fullDate);
      }

      function getWorkingDaysAdded(dateStr, delayDays) {
            let date = new Date(dateStr); let addedDays = 0;
            while (addedDays < delayDays) {
                date.setDate(date.getDate() + 1);
                const dayOfWeek = date.getDay();
                if (dayOfWeek !== 0 && dayOfWeek !== 6 && !isHoliday(date)) addedDays++;
            }
            return date;
      }

      window.handleEvalDateChange = function(evalId, val, type) {
            if (type === 'depot') {
                progressState.evaluations.dates[evalId] = val;
                document.querySelectorAll(`.eval-date-input-${evalId}`).forEach(inp => {
                    if (inp.value !== val) inp.value = val;
                });

                if (val) {
                    const retDate = getWorkingDaysAdded(val, 10);
                    const retVal = retDate.toISOString().split('T')[0];
                    progressState.evaluations.returnDates[evalId] = retVal;
                    document.querySelectorAll(`.eval-date-retour-${evalId}`).forEach(inp => {
                        inp.value = retVal;
                    });
                }
            } else if (type === 'retour') {
                progressState.evaluations.returnDates[evalId] = val;
                document.querySelectorAll(`.eval-date-retour-${evalId}`).forEach(inp => {
                    if (inp.value !== val) inp.value = val;
                });
            }
            saveState();
            applyEvalStyles(evalId);
      };

      function generateEvalRowHtml(item, isAccordion) {
          const val = progressState.evaluations.dates[item.id] || '';
          const retVal = progressState.evaluations.returnDates?.[item.id] || '';
          const isChecked = progressState.evaluations.inProgress.has(item.id) || progressState.evaluations.completed.has(item.id) ? 'checked' : '';
          const isEcf = item.id.includes('_ecf_');
          const isDossier = item.id.includes('_dt_') || item.id.includes('_dp_');
          const dateLabel = isDossier || isEcf ? "Dépôt" : "Réa.";

          const status = progressState.evaluations.statuses[item.id];
          let watcherHtml = '';
          if (status === 'envoye' && retVal) {
              const today = new Date().toISOString().split('T')[0];
              const isLate = retVal < today;
              const dateObj = new Date(retVal);
              const formattedRetDate = dateObj.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });

              watcherHtml = `
                <div class="flex items-center gap-2 mt-1 px-3 py-1 bg-white/50 rounded-full border border-rose-100 animate-pulse">
                    <div class="w-2 h-2 rounded-full radar-active"></div>
                    <span class="text-[10px] font-black uppercase tracking-widest ${isLate ? 'text-red-600 animate-bounce' : 'text-rose-500'}">
                        Radar : Retour attendu le ${formattedRetDate} ${isLate ? ' (RETARD !)' : ''}
                    </span>
                </div>
              `;
          }

          let datesHtml = `
              <div class="flex items-center gap-2 shrink-0">
                  <div class="flex items-center gap-1">
                      <span class="text-[10px] font-black text-gray-400 uppercase tracking-tighter">${dateLabel}</span>
                      <input type="date" class="eval-date-input-${item.id} border-2 border-paia-blue rounded-lg px-2 text-[11px] h-8 outline-none text-[#0F2C48] focus:ring-2 focus:ring-paia-yellow" value="${val}" onchange="handleEvalDateChange('${item.id}', this.value, 'depot')">
                  </div>
                  ${(isDossier || isEcf) ? `
                  <div class="flex items-center gap-1">
                      <span class="text-[10px] font-black text-gray-400 uppercase tracking-tighter">Retour</span>
                      <input type="date" class="eval-date-retour-${item.id} border-2 border-paia-blue rounded-lg px-2 text-[11px] h-8 outline-none text-[#B4792A] focus:ring-2 focus:ring-paia-bronze" value="${retVal}" onchange="handleEvalDateChange('${item.id}', this.value, 'retour')">
                  </div>
                  ` : ''}
              </div>
          `;

          if (isAccordion) {
              return `
                  <div class="row-eval-${item.id} flex flex-col gap-1 p-4 mb-2 bg-white rounded-xl border-2 border-paia-blue shadow-[3px_3px_0px_#0F2C48] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_#0F2C48] transition-all">
                      <div class="flex items-center justify-between gap-3">
                          <div class="flex items-center gap-3 flex-1 min-w-0">
                              <input type="checkbox" class="chk-eval w-5 h-5 rounded-md text-paia-blue cursor-pointer shrink-0 border-2 border-paia-blue shadow-[2px_2px_0px_#0F2C48]" onchange="toggleEvalInProgress('${item.id}')" ${isChecked}>
                              <span class="text-sm font-black text-[#0F2C48] truncate" title="${item.title}">${item.title}</span>
                              <span class="badge-encours hidden text-[9px] font-black uppercase px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full border border-yellow-200 leading-none shadow-sm">En cours</span>
                          </div>
                          <div class="flex items-center gap-3 shrink-0">
                              <div class="main-actions flex gap-1.5 items-center shrink-0 w-[140px] justify-end"></div>
                              <div class="final-badge-container hidden flex items-center gap-1.5 shrink-0 w-[140px] justify-end">
                                  <div class="status-badge"></div>
                                  <div class="extra-actions"></div>
                              </div>
                          </div>
                      </div>
                      <div class="flex items-center justify-between mt-2 pl-8">
                          ${datesHtml}
                          ${watcherHtml}
                      </div>
                  </div>
              `;
          }

          return `
              <div class="row-eval-${item.id} flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 bg-white rounded-xl border-2 border-paia-blue shadow-[3px_3px_0px_#0F2C48] mb-4 transition-all">
                  <div class="flex items-center gap-3 flex-1 min-w-0">
                      <input type="checkbox" class="chk-eval w-5 h-5 rounded text-paia-blue cursor-pointer shrink-0 border-2 border-paia-blue" onchange="toggleEvalInProgress('${item.id}')" ${isChecked}>
                      <span class="text-sm font-bold text-[#0F2C48] truncate" title="${item.title}">${item.title}</span>
                      <span class="badge-encours hidden text-[9px] font-black uppercase px-2 py-1 bg-yellow-50 text-yellow-600 rounded border border-yellow-200 leading-none">En cours</span>
                  </div>
                  <div class="flex items-center gap-3 shrink-0 flex-wrap sm:flex-nowrap justify-between w-full sm:w-auto bg-gray-50/80 sm:bg-transparent p-2 sm:p-0 rounded-lg">
                      ${datesHtml}
                      <div class="main-actions flex gap-1.5 ml-auto sm:ml-0"></div>
                      <div class="final-badge-container hidden flex items-center gap-1.5 ml-auto sm:ml-0">
                          <div class="status-badge"></div>
                          <div class="extra-actions"></div>
                      </div>
                  </div>
                  ${watcherHtml ? `<div class="w-full sm:w-auto ml-8">${watcherHtml}</div>` : ''}
              </div>
          `;
      }

      window.toggleEvalInProgress = function(evalId) {
            const set = progressState.evaluations.inProgress;
            const chk = document.querySelector(`.row-eval-${evalId} .chk-eval`);
            if (chk && chk.checked) set.add(evalId); else set.delete(evalId);
            saveState();
            applyEvalStyles(evalId);
      };

      window.setEvalStatus = function(evalId, status) {
            progressState.evaluations.completed.add(evalId);
            progressState.evaluations.statuses[evalId] = status;
            applyEvalStyles(evalId);
            saveState();
            updateProgressUI();
            if (['valide', 'livret_recu', 'termine'].includes(status)) {
                if (typeof confetti === 'function') confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
                if (evalId.endsWith('_d1')) {
                    const d2Id = evalId.replace('_d1', '_d2');
                    progressState.evaluations.completed.add(d2Id);
                    progressState.evaluations.statuses[d2Id] = 'ignore';
                    applyEvalStyles(d2Id);
                    saveState();
                }
            }
      };

      window.resetEvalStatus = function(evalId) {
            progressState.evaluations.completed.delete(evalId);
            delete progressState.evaluations.statuses[evalId];
            saveState();
            applyEvalStyles(evalId); updateProgressUI();
      };

      function applyEvalStyles(evalId) {
            const lis = document.querySelectorAll('.row-eval-' + evalId);
            const isCompleted = progressState.evaluations.completed.has(evalId);
            const status = progressState.evaluations.statuses[evalId];
            const isInProgress = progressState.evaluations.inProgress.has(evalId);
            const isEcf = evalId.includes('_ecf_');
            const isDossier = evalId.includes('_dt_') || evalId.includes('_dp_');

            lis.forEach(row => {
                const statusBadge = row.querySelector('.status-badge');
                const actionBtns = row.querySelector('.main-actions');
                const finalBadgeContainer = row.querySelector('.final-badge-container');
                const extraActions = row.querySelector('.extra-actions');
                const badgeEnCours = row.querySelector('.badge-encours');
                const chk = row.querySelector('.chk-eval');

                if (chk) chk.checked = isInProgress || isCompleted;

                row.classList.remove('bg-blue-50', 'bg-teal-50', 'bg-pink-50', 'bg-yellow-50', 'bg-gray-100', 'opacity-50');

                let badgeHtml = '';
                let buttonsHtml = '';

                let isAccordion = false;
                if(actionBtns && actionBtns.parentElement) {
                    isAccordion = actionBtns.parentElement.classList.contains('w-[140px]');
                }

                if (isCompleted) {
                    if (actionBtns) actionBtns.classList.add('hidden');
                    if (finalBadgeContainer) finalBadgeContainer.classList.remove('hidden');
                    if (badgeEnCours) badgeEnCours.classList.add('hidden');
                    if (extraActions) extraActions.innerHTML = '';

                    if (status === 'valide' || status === 'termine') {
                        row.classList.add('bg-blue-50');
                        badgeHtml = '<span class="text-[10px] px-3 py-1 bg-blue-500 text-white font-black rounded-full uppercase shadow-[2px_2px_0px_#0F2C48] border border-paia-blue">Validé ✅</span>';
                    } else if (status === 'livret_recu') {
                        row.classList.add('bg-blue-50');
                        badgeHtml = '<span class="text-[10px] px-3 py-1 bg-blue-600 text-white font-black rounded-full uppercase shadow-[2px_2px_0px_#0F2C48] border border-paia-blue">Livret Reçu 📖✅</span>';
                    } else if (status === 'envoye') {
                        row.classList.add('bg-teal-50');
                        badgeHtml = '<span class="text-[10px] px-3 py-1 bg-teal-500 text-white font-black rounded-full uppercase shadow-[2px_2px_0px_#0F2C48] border border-paia-blue">Envoyé 🚀</span>';
                        if (isEcf && extraActions) {
                            extraActions.innerHTML = `<button onclick="setEvalStatus('${evalId}', 'livret_recu')" class="text-[10px] w-8 h-8 flex items-center justify-center bg-paia-yellow border-2 border-paia-blue text-[#0F2C48] font-bold rounded-lg shadow-[2px_2px_0px_#0F2C48] hover:translate-y-[-1px] transition-all" title="Marquer comme reçu" aria-label="Marquer comme reçu"><i class="fas fa-book-open"></i></button>`;
                        } else if (isDossier && extraActions) {
                            extraActions.innerHTML = `<button onclick="setEvalStatus('${evalId}', 'valide')" class="text-[10px] w-8 h-8 flex items-center justify-center bg-blue-500 border-2 border-paia-blue text-white font-bold rounded-lg shadow-[2px_2px_0px_#0F2C48] hover:translate-y-[-1px] transition-all" title="Valider définitivement" aria-label="Valider définitivement"><i class="fas fa-check"></i></button>`;
                        }
                    } else if (status === 'refaire') {
                        row.classList.add('bg-pink-50');
                        badgeHtml = '<span class="text-[10px] px-3 py-1 bg-pink-500 text-white font-black rounded-full uppercase shadow-[2px_2px_0px_#0F2C48] border border-paia-blue">À Refaire ❌</span>';
                        if (isEcf && extraActions) {
                            extraActions.innerHTML = `<button onclick="setEvalStatus('${evalId}', 'envoye')" class="text-[10px] w-8 h-8 flex items-center justify-center bg-[#0F2C48] border-2 border-paia-blue text-white font-bold rounded-lg hover:bg-blue-900 shadow-[2px_2px_0px_#0F2C48] transition-all" title="Renvoyer" aria-label="Renvoyer"><i class="fas fa-paper-plane"></i></button>`;
                        } else if (isDossier && extraActions) {
                            extraActions.innerHTML = `<button onclick="setEvalStatus('${evalId}', 'valide')" class="text-[10px] w-8 h-8 flex items-center justify-center bg-blue-500 border-2 border-paia-blue text-white font-bold rounded-lg hover:bg-blue-600 shadow-[2px_2px_0px_#0F2C48] transition-all" title="Re-Valider" aria-label="Re-Valider"><i class="fas fa-check"></i></button>`;
                        }
                    } else if (status === 'ignore') {
                        row.classList.add('bg-gray-100', 'opacity-50');
                        badgeHtml = '<span class="text-[10px] px-3 py-1 bg-gray-400 text-white font-bold rounded-full uppercase shadow-sm">Ignoré</span>';
                    }

                    if (extraActions) extraActions.innerHTML += `<button onclick="resetEvalStatus('${evalId}')" class="text-[10px] text-gray-400 hover:text-red-500 ml-1 transition-colors" title="Réinitialiser" aria-label="Réinitialiser l'évaluation"><i class="fas fa-undo"></i></button>`;
                    if (statusBadge) statusBadge.innerHTML = badgeHtml;

                } else {
                    if (actionBtns) actionBtns.classList.remove('hidden');
                    if (finalBadgeContainer) finalBadgeContainer.classList.add('hidden');

                    if (isInProgress) {
                        if (badgeEnCours) badgeEnCours.classList.remove('hidden');
                        row.classList.add('bg-yellow-50');
                    } else {
                        if (badgeEnCours) badgeEnCours.classList.add('hidden');
                    }

                    const btnBase = "text-[10px] px-3 py-1.5 font-black rounded-lg border-2 border-paia-blue shadow-[2px_2px_0px_#0F2C48] transition-all hover:translate-y-[-1px] active:translate-y-[1px] active:shadow-[0px_0px_0px_#0F2C48] ";
                    if (isEcf) {
                        buttonsHtml = `<button onclick="setEvalStatus('${evalId}', 'envoye')" class="${btnBase} bg-[#0F2C48] text-white uppercase tracking-wider">Envoyer</button>`;
                    } else if (isDossier) {
                        buttonsHtml = `
                            <button onclick="setEvalStatus('${evalId}', 'valide')" class="${btnBase} bg-blue-500 text-white" aria-label="Valider l'évaluation"><i class="fas fa-check"></i></button>
                            <button onclick="setEvalStatus('${evalId}', 'refaire')" class="${btnBase} bg-pink-500 text-white ml-1" aria-label="Marquer l'évaluation à refaire"><i class="fas fa-times"></i></button>
                        `;
                    } else {
                        buttonsHtml = `<button onclick="setEvalStatus('${evalId}', 'termine')" class="${btnBase} bg-emerald-500 text-white uppercase tracking-wider">Terminer</button>`;
                    }
                    if (actionBtns) actionBtns.innerHTML = buttonsHtml;
                }
            });
      }

      function updateProgressUI() {
            let globalTotal = 0; let globalCompleted = 0;
            Object.values(dataProgram).forEach(bloc => {
                const total = progressState[bloc.id].total;
                const completed = progressState[bloc.id].completed.size;
                const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);
                globalTotal += total; globalCompleted += completed;

                const dashBar = document.getElementById(`dash-prog-${bloc.id}`);
                const dashTxt = document.getElementById(`dash-txt-${bloc.id}`);
                if(dashBar) dashBar.style.width = `${percentage}%`;
                if(dashTxt) dashTxt.innerText = `${completed}/${total}`;

                const selectorBar = document.getElementById(`prog-bar-${bloc.id}`);
                const selectorTxt = document.getElementById(`prog-txt-${bloc.id}`);
                if(selectorBar) selectorBar.style.width = `${percentage}%`;
                if(selectorTxt) selectorTxt.innerText = `${percentage}% complété`;
            });

            let evalTotal = progressState.evaluations.total; let evalCompleted = 0;
            Object.values(dataEvaluations).forEach(col => {
                let colTotal = col.items.length; let colCompleted = 0;
                col.items.forEach(item => {
                    const st = progressState.evaluations.statuses[item.id];
                    if(['valide', 'livret_recu', 'termine', 'ignore'].includes(st)) colCompleted++;
                });
                const colBar = document.getElementById(`prog-eval-${col.id}`);
                if(colBar) colBar.style.width = `${colTotal === 0 ? 0 : Math.round((colCompleted / colTotal) * 100)}%`;
                evalCompleted += colCompleted;
            });

            const egc = document.getElementById('eval-global-completed');
            if (egc) egc.innerText = evalCompleted;
            const egt = document.getElementById('eval-global-total');
            if (egt) egt.innerText = evalTotal;

            globalTotal += evalTotal; globalCompleted += evalCompleted;
            const globalPercentage = globalTotal === 0 ? 0 : Math.round((globalCompleted / globalTotal) * 100);

            const gPerc = document.getElementById('global-percentage'); if(gPerc) gPerc.innerText = globalPercentage;
            const gCompCount = document.getElementById('global-completed-count'); if(gCompCount) gCompCount.innerText = globalCompleted;
            const gTotalCount = document.getElementById('global-total-count'); if(gTotalCount) gTotalCount.innerText = globalTotal;
      }

      window.switchEvalTab = function(evalId) {
            Object.values(dataEvaluations).forEach(col => {
                const btn = document.getElementById('btn-eval-' + col.id);
                if(btn) btn.className = `flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm border-2 bg-white ${themes[col.themeKey].text} hover:bg-paia-ivory border-paia-blue flex items-center gap-2 shadow-[3px_3px_0px_#0F2C48]`;
                const block = document.getElementById('block-eval-' + col.id);
                if(block) { block.classList.add('hidden'); block.classList.remove('block'); }
            });
            const activeBtn = document.getElementById('btn-eval-' + evalId);
            const activeCol = dataEvaluations[evalId];
            if(activeBtn) activeBtn.className = `flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-[1px_1px_0px_#0F2C48] transform translate-y-1 border-2 border-paia-blue ${themes[activeCol.themeKey].bg} text-white flex items-center gap-2`;
            const activeBlock = document.getElementById('block-eval-' + evalId);
            if(activeBlock) { activeBlock.classList.remove('hidden'); activeBlock.classList.add('block'); }
      };

      function renderDashboardBlocs() {
            const container = document.getElementById('dashboard-blocs-container');
            if(!container) return;
            container.innerHTML = '';
            Object.values(dataProgram).forEach(bloc => {
                const t = themes[bloc.themeKey];
                container.innerHTML += `
                    <div class="bg-white border-2 border-paia-blue p-5 rounded-2xl shadow-[4px_4px_0px_#0F2C48] flex flex-col justify-center transition-transform hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#0F2C48]">
                        <h3 class="text-sm font-black ${t.text} uppercase tracking-wider mb-2">${bloc.title}</h3>
                        <div class="w-full bg-paia-ivory rounded-full h-3 mb-2 border-2 border-paia-blue/20 overflow-hidden">
                            <div id="dash-prog-${bloc.id}" class="${t.bg} h-full transition-all duration-500" style="width: 0%"></div>
                        </div>
                        <p class="text-xs font-bold text-paia-blue/60 text-right"><span id="dash-txt-${bloc.id}">0/0</span> sujets</p>
                    </div>`;
            });
      }

      function selectBloc(blocId) {
            const bloc = dataProgram[blocId];
            const t = themes[bloc.themeKey];
            Object.values(dataProgram).forEach(b => {
                const btn = document.getElementById(`selector-${b.id}`);
                if(btn) {
                    btn.classList.remove('border-paia-blue', 'border-paia-yellow', 'border-paia-bronze', 'border-paia-dark', 'shadow-[4px_4px_0px_#0F2C48]');
                    if(b.id === blocId) btn.classList.add('border-paia-blue', 'shadow-[4px_4px_0px_#0F2C48]');
                }
            });
            const titleEl = document.getElementById('current-bloc-title');
            if(titleEl) titleEl.innerHTML = `<span class="mr-2">${bloc.icon}</span> ${bloc.title}`;

            const container = document.getElementById('modules-container');
            if(!container) return;
            container.innerHTML = '';
            bloc.modules.forEach((mod, idx) => {
                let sujetsHtml = '<ul class="mt-3 space-y-1">';
                mod.sujets.forEach(sujet => {
                    const parts = sujet.split(' - '); const code = parts[0]; const title = parts.slice(1).join(' - ');
                    const isChecked = progressState[bloc.id].completed.has(code) ? 'checked' : '';
                    sujetsHtml += `
                        <li class="flex items-start gap-3 p-2 hover:bg-paia-ivory rounded-xl border border-transparent hover:border-paia-blue/10 transition-colors">
                            <input type="checkbox" id="chk-${code}" class="sujet-checkbox mt-0.5 w-5 h-5 rounded-md text-paia-blue cursor-pointer border-2 border-paia-blue shadow-[1px_1px_0px_#0F2C48]" onclick="toggleSujet('${code}', '${bloc.id}')" ${isChecked}>
                            <label for="chk-${code}" class="text-sm text-paia-blue cursor-pointer font-medium select-none transition-all flex-1"><span class="font-black text-paia-bronze">${code}</span> - ${title}</label>
                        </li>`;
                });
                container.innerHTML += `
                    <div class="mb-6 bg-gray-50/80 p-5 rounded-xl border-2 border-gray-200 shadow-sm">
                        <p class="text-sm font-black text-paia-blue uppercase tracking-tight mb-2">${mod.title}</p>
                        ${sujetsHtml}</ul>
                    </div>`;
            });
      }

      function renderEvaluations() {
            const container = document.getElementById('eval-columns');
            if(!container) return;
            container.innerHTML = '';

            let subNavHtml = '<div class="flex space-x-3 overflow-x-auto mb-8 pb-3 hide-scrollbar pt-2 px-2">';
            Object.values(dataEvaluations).forEach((col, index) => {
                const t = themes[col.themeKey];
                const isActive = index === 0 ? `${t.bg} text-white border-paia-blue shadow-[1px_1px_0px_#0F2C48] transform translate-y-1` : `bg-white ${t.text} hover:bg-paia-ivory border-paia-blue shadow-[3px_3px_0px_#0F2C48]`;
                subNavHtml += `<button onclick="switchEvalTab('${col.id}')" id="btn-eval-${col.id}" class="flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-bold transition-all border-2 flex items-center gap-2 ${isActive}"><span class="text-lg">${col.icon}</span> ${col.title}</button>`;
            });
            subNavHtml += '</div>';

            let contentHtml = '<div class="relative w-full">';
            Object.values(dataEvaluations).forEach((col, index) => {
                const t = themes[col.themeKey];

                let itemsHtml = '<div class="flex flex-col gap-0">';
                col.items.forEach(item => {
                    itemsHtml += generateEvalRowHtml(item, false);
                });
                itemsHtml += '</div>';

                const displayClass = index === 0 ? 'block' : 'hidden';
                contentHtml += `
                    <div id="block-eval-${col.id}" class="${displayClass} animate-fade-in max-w-4xl mx-auto">
                        <div class="${t.light} rounded-3xl border-4 border-paia-blue overflow-hidden shadow-[8px_8px_0px_#0F2C48] mb-6">
                            <div class="${t.bg} border-b-4 border-paia-blue text-white p-6 text-center">
                                <span class="text-4xl block mb-2 drop-shadow-md">${col.icon}</span>
                                <h2 class="font-black text-2xl uppercase tracking-tight">${col.title}</h2>
                                <p class="text-white/90 text-sm font-bold mt-1">${col.subtitle}</p>
                                <div class="w-full h-2.5 bg-black/20 mt-5 rounded-full border border-white/20"><div id="prog-eval-${col.id}" class="h-full bg-white rounded-full transition-all" style="width: 0%"></div></div>
                            </div>
                            <div class="p-6 bg-white">${itemsHtml}</div>
                        </div>
                    </div>`;
            });
            contentHtml += '</div>';
            container.innerHTML = subNavHtml + contentHtml;

            Object.values(dataEvaluations).forEach(col => col.items.forEach(item => {
                applyEvalStyles(item.id);
            }));
      }

      function renderChart() {
            const ctx = document.getElementById('blocsChart')?.getContext('2d');
            if(!ctx) return;
            if(chartInstance) chartInstance.destroy();
            chartInstance = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['B0 : Socle', 'B1 : Concevoir', 'B2 : Animer', 'B3 : Accompagner', 'B4 : Qualité'],
                    datasets: [{
                        data: [
                            progressState.bloc0.total || 16,
                            progressState.bloc1.total || 62,
                            progressState.bloc2.total || 42,
                            progressState.bloc3.total || 43,
                            progressState.bloc4.total || 27
                        ],
                        backgroundColor: [themes.trans.hex, themes.bloc1.hex, themes.bloc2.hex, themes.bloc3.hex, themes.bloc4.hex],
                        borderWidth: 5, borderColor: '#ffffff', hoverOffset: 15
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                    plugins: { legend: { position: 'bottom', labels: { font: { weight: 'bold', size: 12 }, padding: 20 } } },
                    cutout: '70%'
                }
            });
      }

      // FONCTION POUR AFFICHER LE CONTENU ECF
      function renderEcfContainer() {
          const ecfCont = document.getElementById("ecfContainer");
          if (!ecfCont) return;
          ecfCont.innerHTML = `
            <div class="bg-gradient-to-br from-purple-600 to-indigo-800 rounded-3xl p-8 shadow-[8px_8px_0px_rgba(15,44,72,1)] border-2 border-paia-blue flex flex-col items-center justify-center text-center relative overflow-hidden mb-8">
                <div class="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                <h2 class="text-4xl font-black text-white mb-2 tracking-tight drop-shadow-md"><i class="fas fa-graduation-cap mr-2"></i> Préparation ECF Finale</h2>
                <p class="text-purple-100 text-sm font-medium max-w-2xl">Retrouvez ici toutes les questions de votre évaluation finale classées par Activité Type, avec des raccourcis directs vers les cours correspondants pour réviser efficacement.</p>
            </div>
          `;

          ecfData.forEach((atGroup, idx) => {
              let cardsHtml = '';
              atGroup.questions.forEach((qObj) => {
                  let linksHtml = '';
                  qObj.links.forEach(link => {
                      linksHtml += `
                        <button onclick="filtrerBloc('${link.bloc}'); document.getElementById('searchInput').value = '${link.code}'; afficherModules('${link.code}'); window.scrollTo({top: 0, behavior: 'smooth'});" class="bg-white hover:bg-gray-50 text-[10px] font-black text-paia-blue border-2 border-paia-blue px-3 py-1.5 rounded-lg shadow-[2px_2px_0px_#0F2C48] transition-all hover:-translate-y-1 flex items-center gap-1.5 shrink-0 max-w-full overflow-hidden text-left">
                            <i class="fas fa-external-link-alt shrink-0"></i> <span class="truncate block w-full whitespace-normal leading-tight">${link.label}</span>
                        </button>
                      `;
                  });

                  cardsHtml += `
                    <div class="bg-white border-2 border-paia-blue rounded-xl p-5 shadow-[4px_4px_0px_#0F2C48] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#0F2C48] transition-all flex flex-col gap-4">
                        <p class="text-sm font-bold text-[#0F2C48] leading-relaxed text-justify">${qObj.q}</p>
                        <div class="flex flex-col gap-2 pt-4 border-t-2 border-dashed border-gray-200">
                            <span class="text-[9px] font-black uppercase text-gray-400 tracking-widest flex items-center"><i class="fas fa-lightbulb text-paia-yellow mr-1"></i> Cours liés :</span>
                            <div class="flex flex-col items-start gap-2">${linksHtml}</div>
                        </div>
                    </div>
                  `;
              });

              ecfCont.innerHTML += `
                <div class="mb-8 w-full animate-slideIn" style="animation-delay: ${(idx+1)*0.1}s">
                    <div class="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                        <div class="w-12 h-12 shrink-0 rounded-xl ${atGroup.color} flex items-center justify-center text-white border-2 border-paia-blue shadow-[2px_2px_0px_#0F2C48]">
                            <span class="text-2xl">${atGroup.icon}</span>
                        </div>
                        <h2 class="font-black uppercase text-lg text-paia-blue tracking-tight">${atGroup.at}</h2>
                    </div>
                    <div class="flex flex-col gap-4 pl-0 md:pl-16">
                        ${cardsHtml}
                    </div>
                </div>
              `;
          });
      }

      window.onload = () => {
          document.getElementById("audioIcon").className = isVoice ? "fas fa-volume-up" : "fas fa-volume-mute";
          document.getElementById("audioLabel").innerText = isVoice ? "Audio ON" : "Audio OFF";
          updateLockBtnUI();

          Papa.parse(CSV_URL, {
              download: true, header: true, skipEmptyLines: true,
              complete: (results) => {
                  database = results.data;
                  const loaderEl = document.getElementById('loader');
                  if (loaderEl) {
                      loaderEl.style.opacity = '0';
                      setTimeout(() => loaderEl.style.display = 'none', 500);
                  }
                  filtrerBloc("ALL");
                  checkDailyRevisions();
              },
              error: (err) => {
                  console.error("Erreur chargement CSV:", err);
                  const loaderEl = document.getElementById('loader');
                  if (loaderEl) {
                      loaderEl.innerHTML = "<div class='p-4 text-center text-red-500 font-bold'>Erreur de chargement.</div>";
                  }
              }
          });

          document.getElementById("pinInput").addEventListener("keypress", function(event) {
              if (event.key === "Enter") { event.preventDefault(); verifyPin(); }
          });

          loadState();
          initProgressCounts();
          renderDashboardBlocs();

          const sel = document.getElementById('bloc-selectors');
          if (sel) {
              Object.values(dataProgram).forEach(b => {
                  const t = themes[b.themeKey];
                  sel.innerHTML += `
                      <button id="selector-${b.id}" onclick="selectBloc('${b.id}')" class="bg-white p-4 rounded-2xl border-2 border-gray-200 hover:border-paia-blue transition-all flex flex-col items-center group">
                          <span class="text-2xl mb-1">${b.icon}</span>
                          <div class="w-full h-1.5 bg-gray-100 mt-2 rounded-full overflow-hidden">
                              <div id="prog-bar-${b.id}" class="${t.bg} h-full transition-all" style="width:0%"></div>
                          </div>
                          <p id="prog-txt-${b.id}" class="text-[9px] font-black uppercase opacity-40 mt-1.5">0%</p>
                      </button>`;
              });
          }

          renderEvaluations();
          updateProgressUI();
      };

      window.toggleGroup = function (event, id, groupType) {
        event.stopPropagation();
        event.preventDefault();

        const itemObj = database.find(d => d.Code === id);
        if (!itemObj) return;

        const safeFileName = encodeURIComponent(`${id} - ${itemObj.Titre}`) + '.html';
        const resMap = { audio: itemObj.Audio, excel: itemObj.Excel, infog: itemObj.Infographie, slide: itemObj.Slides, video: itemObj.Vidéo, notebook: itemObj.NoteBook_LM, glo: `Glossaire/${safeFileName}`, map: `Carte Mentale/${safeFileName}`, quiz: `Quiz/${safeFileName}` };

        let checkableRids = [];
        if (groupType === 'core') checkableRids = ["audio", "excel", "infog", "slide", "video"];
        if (groupType === 'ext') checkableRids = ["glo", "map", "quiz"];
        if (groupType === 'note') checkableRids = ["notebook"];

        const validRids = checkableRids.filter(r => resMap[r] && resMap[r].trim() !== '');
        if (validRids.length === 0) return;

        const isGroupAll = validRids.every(r => progressRes[`${id}-${r}`]);

        validRids.forEach(r => { progressRes[`${id}-${r}`] = !isGroupAll; });
        localStorage.setItem("paia_p_v10", JSON.stringify(progressRes));

        const allCheckable = ["audio", "excel", "infog", "slide", "video", "notebook", "glo", "map", "quiz"];
        const allValidRids = allCheckable.filter(r => resMap[r] && resMap[r].trim() !== '');
        const isModuleAll = allValidRids.every(r => progressRes[`${id}-${r}`]);

        let blocKey = "bloc0";
        if(id.includes("_B1_")) blocKey = "bloc1";
        else if(id.includes("_B2_")) blocKey = "bloc2";
        else if(id.includes("_B3_")) blocKey = "bloc3";
        else if(id.includes("_B4_")) blocKey = "bloc4";

        if (isModuleAll) {
            progressState[blocKey].completed.add(id);
        } else {
            progressState[blocKey].completed.delete(id);
        }
        saveState();
        updateProgressUI();

        if (!isGroupAll && isModuleAll) {
          if (typeof confetti === 'function') confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
          const toastHtml = `
              <div class="flex flex-col gap-2 w-[300px]">
                <div class="text-sm font-black uppercase text-blue-600 tracking-widest mb-1 flex items-center gap-2">🏆 MODULE ACCOMPLI !</div>
                <div class="text-[12px] font-bold text-[#0F2C48] leading-snug">Félicitations ! Tu viens de franchir une étape majeure. La persévérance est la clé de la réussite.</div>
              </div>
          `;
          afficherToastCustom(toastHtml, '#3b82f6');
        }

        const searchInputEl = document.getElementById("searchInput");
        afficherModules(searchInputEl ? searchInputEl.value : "", false);
      };

      function afficherToastCustom(htmlContent, borderColorHex) {
        const c = document.getElementById("toastContainer");
        const t = document.createElement("div");
        t.className = `toast-msg p-5 bg-white/95 backdrop-blur-xl shadow-[6px_6px_0px_#0F2C48] border-2 border-paia-blue rounded-xl flex items-start gap-3 pointer-events-auto z-[7000] border-l-[8px]`;
        t.style.borderLeftColor = borderColorHex || '#3b82f6';
        t.innerHTML = htmlContent;
        c.appendChild(t);
        setTimeout(() => { t.style.opacity = '0'; setTimeout(() => t.remove(), 300); }, 9000);
      }

      function filtrerBloc(bloc) {
        currentBloc = bloc;
        currentMod = "ALL";

        // Style de base pour les onglets inactifs
        document.querySelectorAll(".tab-btn").forEach((btn) => {
            btn.className = "tab-btn bg-white/90 backdrop-blur-[10px] text-gray-500 border-2 border-gray-200 hover:border-paia-blue/30 hover:text-paia-blue transition-all rounded-xl px-4 py-2.5 font-black text-sm shadow-sm";
        });

        // Appliquer un style de couleur spécifique à l'onglet sélectionné
        const activeTabBtn = document.getElementById("tab-" + bloc);
        if (activeTabBtn) {
            let activeClass = "bg-paia-blue text-white border-paia-blue shadow-[3px_3px_0px_#0F2C48]";
            if (bloc === "ALL") activeClass = "bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white border-fuchsia-700 shadow-[3px_3px_0px_#4a044e]";
            if (bloc === "B0") activeClass = "bg-sky-500 text-white border-sky-600 shadow-[3px_3px_0px_#0284c7]";
            if (bloc === "B1") activeClass = "bg-paia-blue text-white border-blue-900 shadow-[3px_3px_0px_#0f172a]";
            if (bloc === "B2") activeClass = "bg-paia-yellow text-white border-yellow-600 shadow-[3px_3px_0px_#b45309]";
            if (bloc === "B3") activeClass = "bg-paia-bronze text-white border-orange-800 shadow-[3px_3px_0px_#7c2d12]";
            if (bloc === "B4") activeClass = "bg-paia-dark text-white border-black shadow-[3px_3px_0px_#000000]";
            if (bloc === "PAY") activeClass = "bg-purple-600 text-white border-purple-800 shadow-[3px_3px_0px_#4c1d95]";
            if (bloc === "ECF") activeClass = "bg-purple-600 text-white border-purple-800 shadow-[3px_3px_0px_#4c1d95]";

            activeTabBtn.className = `tab-btn active ${activeClass} transition-all rounded-xl px-4 py-2.5 font-black text-sm transform translate-y-[-2px]`;
        }

        const listContainer = document.getElementById('listContainer');
        const subTabsContainer = document.getElementById('subTabsContainer');
        const globalProgressHeader = document.getElementById('globalProgressHeader');
        const calendarContainer = document.getElementById('calendarContainer');
        const certifContainer = document.getElementById('certifContainer');
        const ecfContainer = document.getElementById('ecfContainer');

        if (bloc === 'CAL') {
            listContainer.classList.add('hidden');
            subTabsContainer.classList.add('hidden');
            globalProgressHeader.classList.add('hidden');
            certifContainer.classList.add('hidden');
            ecfContainer.classList.add('hidden');
            calendarContainer.classList.remove('hidden');
            renderCalendarView();
        } else if (bloc === 'CERTIF') {
            listContainer.classList.add('hidden');
            subTabsContainer.classList.add('hidden');
            globalProgressHeader.classList.add('hidden');
            calendarContainer.classList.add('hidden');
            ecfContainer.classList.add('hidden');
            certifContainer.classList.remove('hidden');
            if (!chartInstance) renderChart();
        } else if (bloc === 'ECF') {
            listContainer.classList.add('hidden');
            subTabsContainer.classList.add('hidden');
            globalProgressHeader.classList.add('hidden');
            calendarContainer.classList.add('hidden');
            certifContainer.classList.add('hidden');
            ecfContainer.classList.remove('hidden');
            renderEcfContainer();
        } else if (bloc === 'PAY') {
            listContainer.classList.add('hidden');
            subTabsContainer.classList.add('hidden');
            globalProgressHeader.classList.add('hidden');
            calendarContainer.classList.add('hidden');
            certifContainer.classList.add('hidden');
            ecfContainer.classList.add('hidden');
        } else {
            calendarContainer.classList.add('hidden');
            certifContainer.classList.add('hidden');
            ecfContainer.classList.add('hidden');
            listContainer.classList.remove('hidden');
            globalProgressHeader.classList.remove('hidden');
            renderSubTabs();
            const searchInputEl = document.getElementById("searchInput");
            afficherModules(searchInputEl ? searchInputEl.value : "", true);
        }
      }

      function checkDailyRevisions() {
          let savedRevisions = JSON.parse(localStorage.getItem('paia_revisions')) || [];
          const todayDate = new Date();
          const todayStr = todayDate.getFullYear() + "-" + String(todayDate.getMonth() + 1).padStart(2, '0') + "-" + String(todayDate.getDate()).padStart(2, '0');

          const dueRevisions = savedRevisions.filter(r => !r.done && r.dateStr <= todayStr && r.days > 0);

          if (dueRevisions.length > 0) {
              let html = '';
              dueRevisions.forEach(rev => {
                  const isLate = rev.dateStr < todayStr;
                  const tagClass = isLate ? "bg-red-100 text-red-600 border-red-200" : "bg-yellow-100 text-yellow-700 border-yellow-200";
                  const tagText = isLate ? "En retard" : "Aujourd'hui";

                  html += `
                      <div id="rev-item-${rev.id}" class="flex items-center justify-between bg-gray-50 border-2 border-paia-blue p-4 rounded-xl shadow-[3px_3px_0px_#0F2C48] transition-all mb-3">
                          <div class="flex flex-col pr-4">
                              <div class="flex items-center gap-2 mb-1">
                                  <span class="px-2 py-0.5 text-[9px] font-black uppercase rounded-md border ${tagClass}">${tagText}</span>
                                  <span class="text-[10px] font-black text-[#B4792A] uppercase">${rev.label}</span>
                              </div>
                              <span class="text-sm font-bold text-[#0F2C48] leading-tight">${rev.moduleId}</span>
                              <span class="text-xs text-gray-500 truncate max-w-[200px]">${rev.titre}</span>
                          </div>
                          <button onclick="markRevisionDone('${rev.id}', true)" class="shrink-0 bg-white border-2 border-paia-blue text-paia-blue hover:bg-emerald-400 hover:border-emerald-500 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-[2px_2px_0px_#0F2C48] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_#0F2C48]" aria-label="Marquer la révision comme faite">
                              <i class="fas fa-check"></i>
                          </button>
                      </div>
                  `;
              });

              document.getElementById('daily-revisions-list').innerHTML = html;
              document.getElementById('dailyRevisionsModal').style.display = 'flex';
              setTimeout(() => {
                  document.getElementById('dailyRevisionsContent').classList.remove('scale-95');
                  document.getElementById('dailyRevisionsContent').classList.add('scale-100');
              }, 10);
          }
      }

      window.markRevisionDone = function(id, fromPopup=false) {
          let savedRevisions = JSON.parse(localStorage.getItem('paia_revisions')) || [];
          let isNowDone = false;
          savedRevisions = savedRevisions.map(r => {
              if(r.id === id) { r.done = !r.done; isNowDone = r.done; }
              return r;
          });
          localStorage.setItem('paia_revisions', JSON.stringify(savedRevisions));

          if(fromPopup && isNowDone) {
              const el = document.getElementById(`rev-item-${id}`);
              if(el) { el.classList.add('opacity-0', 'scale-95'); setTimeout(() => { el.remove(); }, 300); }
          }

          if (isNowDone && !fromPopup) {
             if (typeof confetti === 'function') confetti({ particleCount: 30, spread: 40, origin: { y: 0.8 } });
          }

          if (currentBloc === 'CAL') {
              renderCalendarView();
          } else {
              const searchInputEl = document.getElementById("searchInput");
              afficherModules(searchInputEl ? searchInputEl.value : "", false);
          }
      };

      window.downloadICSForAll = function() {
          let savedRevisions = JSON.parse(localStorage.getItem('paia_revisions')) || [];
          const revs = savedRevisions.filter(r => !r.done);

          if(revs.length === 0) {
              afficherToastCustom("Aucune révision à exporter ! 🎉", "#10b981");
              return;
          }

          let icsContent = "BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//PAIA Hub//Smart Recall//FR\r\nCALSCALE:GREGORIAN\r\n";
          const appUrl = window.location.href.split('#')[0];

          revs.forEach(item => {
              const eventDate = new Date(item.datetime);
              const dateStr = eventDate.toISOString().replace(/-|:|\.\d\d\d/g, "");
              const endDate = new Date(eventDate.getTime() + 60*60*1000);
              const endDateStr = endDate.toISOString().replace(/-|:|\.\d\d\d/g, "");

              const uid = `${item.id}@paiahub.com`;
              const safeTitre = item.titre.replace(/,/g, '\\,');
              const summary = `Révision ${item.label} : ${item.moduleId} - ${safeTitre}`;
              const description = `Rappel d'apprentissage espacé (${item.label}).\\n\\nModule : ${item.moduleId} - ${safeTitre}\\nObjectif : Consolider la mémoire à long terme !\\n\\nAccès direct à la plateforme : ${appUrl}`;

              icsContent += "BEGIN:VEVENT\r\n";
              icsContent += `DTSTART:${dateStr}\r\n`;
              icsContent += `DTEND:${endDateStr}\r\n`;
              icsContent += `UID:${uid}\r\n`;
              icsContent += `SUMMARY:${summary}\r\n`;
              icsContent += `DESCRIPTION:${description}\r\n`;
              icsContent += "BEGIN:VALARM\r\nTRIGGER:-P1D\r\nACTION:DISPLAY\r\nDESCRIPTION:Rappel (1 jour avant)\r\nEND:VALARM\r\n";
              icsContent += "BEGIN:VALARM\r\nTRIGGER:-PT5M\r\nACTION:DISPLAY\r\nDESCRIPTION:Rappel (5 minutes avant)\r\nEND:VALARM\r\n";
              icsContent += "END:VEVENT\r\n";
          });

          icsContent += "END:VCALENDAR\r\n";

          const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
          const link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = `Toutes_Mes_Revisions_FPA.ics`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
      };

      window.openSpacedRepetitionModal = function(moduleId, moduleTitle) {
          document.getElementById('sr-module-id').innerText = moduleId;
          document.getElementById('sr-module-title').innerText = moduleTitle;

          const now = new Date();
          document.getElementById('sr-start-date').valueAsDate = now;
          document.getElementById('sr-start-time').value = String(now.getHours()).padStart(2, '0') + ":00";

          updateSRPreview(); // Met à jour l'aperçu dès l'ouverture

          document.getElementById('srModal').style.display = 'flex';
          setTimeout(() => {
              document.getElementById('srModalContent').classList.remove('scale-95');
              document.getElementById('srModalContent').classList.add('scale-100');
          }, 10);
      };

      window.closeSpacedRepetitionModal = function() {
          document.getElementById('srModalContent').classList.remove('scale-100');
          document.getElementById('srModalContent').classList.add('scale-95');
          setTimeout(() => { document.getElementById('srModal').style.display = 'none'; }, 200);
      };

      window.calculateAndSaveDates = function() {
          const moduleId = document.getElementById('sr-module-id').innerText;
          const moduleTitle = document.getElementById('sr-module-title').innerText;
          const startDateStr = document.getElementById('sr-start-date').value;
          const startTimeStr = document.getElementById('sr-start-time').value;

          if(!startDateStr || !startTimeStr) {
              alert("Veuillez sélectionner une date et une heure.");
              return;
          }

          const startDateTime = new Date(`${startDateStr}T${startTimeStr}`);
          const intervals = [0, 3, 7, 14, 30, 60];
          let savedRevisions = JSON.parse(localStorage.getItem('paia_revisions')) || [];

          // Supprimer les anciennes révisions pour ce module
          savedRevisions = savedRevisions.filter(r => r.moduleId !== moduleId);

          intervals.forEach((days, index) => {
              let revDate = new Date(startDateTime);
              revDate.setDate(revDate.getDate() + days);

              const yyyy = revDate.getFullYear();
              const mm = String(revDate.getMonth() + 1).padStart(2, '0');
              const dd = String(revDate.getDate()).padStart(2, '0');

              savedRevisions.push({
                  id: Math.random().toString(36).substr(2, 9),
                  moduleId: moduleId,
                  titre: moduleTitle,
                  dateStr: `${yyyy}-${mm}-${dd}`,
                  datetime: revDate.getTime(),
                  num: index + 1,
                  days: days,
                  label: days === 0 ? "J0" : `J+${days}`,
                  done: false
              });
          });

          localStorage.setItem('paia_revisions', JSON.stringify(savedRevisions));

          closeSpacedRepetitionModal();
          afficherToastCustom(`Programme de révision généré avec succès ! 🚀`, "#10b981");

          if (currentBloc === 'CAL') {
              renderCalendarView();
          } else {
              const searchInputEl = document.getElementById("searchInput");
              afficherModules(searchInputEl ? searchInputEl.value : "", false);
          }
      };

      window.updateSRPreview = function() {
          const startDateStr = document.getElementById('sr-start-date').value;
          if(!startDateStr) return;

          const startDateTime = new Date(startDateStr);
          const intervals = [0, 3, 7, 14, 30, 60];
          let html = '';

          intervals.forEach((days) => {
              let revDate = new Date(startDateTime);
              revDate.setDate(revDate.getDate() + days);
              const label = days === 0 ? "J0" : `J+${days}`;
              const dateStr = revDate.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });

              html += `<span class="bg-white px-2 py-1 rounded-md text-[10px] font-black border border-rose-200 text-rose-600 shadow-sm">${label} : ${dateStr}</span>`;
          });

          document.getElementById('sr-preview-list').innerHTML = html;
          document.getElementById('sr-preview').classList.remove('hidden');
      };

      window.updateBulkPreview = function() {
          const blocId = document.getElementById('bulk-bloc-select').value;
          const startStr = document.getElementById('bulk-start-date').value;
          const timeStr = document.getElementById('bulk-start-time').value;
          const excludeHolidays = document.getElementById('bulk-exclude-holidays').checked;

          if(!startStr || !timeStr) return;

          const allowedDaysMask = [
              document.getElementById('d-1').checked, document.getElementById('d-2').checked,
              document.getElementById('d-3').checked, document.getElementById('d-4').checked,
              document.getElementById('d-5').checked, document.getElementById('d-6').checked,
              document.getElementById('d-0').checked
          ];

          if (!allowedDaysMask.includes(true)) {
              document.getElementById('bulk-preview').classList.add('hidden');
              return;
          }

          const blocData = dataProgram[`bloc${blocId.replace('B','')}`];
          if (!blocData || !blocData.modules) return;

          let currentStartDate = new Date(`${startStr}T${timeStr}`);
          let previewHtml = '';

          // On calcule uniquement pour les 3 premiers sujets pour donner un exemple sans surcharger l'affichage
          let previewCount = 0;

          for (let i = 0; i < blocData.modules.length && previewCount < 3; i++) {
              for (let j = 0; j < blocData.modules[i].sujets.length && previewCount < 3; j++) {
                  let j0Date = getNextValidDate(currentStartDate, allowedDaysMask, excludeHolidays);
                  const dateStr = j0Date.toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' });

                  const sujetCode = blocData.modules[i].sujets[j].split(' - ')[0];

                  previewHtml += `<li class="flex gap-2 items-center"><span class="w-2 h-2 rounded-full bg-emerald-400"></span> <strong>${sujetCode}</strong> commencera le ${dateStr}</li>`;

                  currentStartDate = new Date(j0Date);
                  currentStartDate.setDate(currentStartDate.getDate() + 1);
                  previewCount++;
              }
          }

          if (previewCount > 0) {
             previewHtml += `<li class="flex gap-2 items-center text-emerald-600/70 italic mt-1">... et ainsi de suite pour tout le bloc.</li>`;
          }

          document.getElementById('bulk-preview-list').innerHTML = previewHtml;
          document.getElementById('bulk-preview').classList.remove('hidden');
      };

      window.openBulkPlanModal = function() {
          const now = new Date();
          document.getElementById('bulk-start-date').valueAsDate = now;
          document.getElementById('bulk-start-time').value = String(now.getHours()).padStart(2, '0') + ":00";

          updateBulkPreview(); // Met à jour l'aperçu dès l'ouverture

          document.getElementById('bulkPlanModal').style.display = 'flex';
          setTimeout(() => {
              document.getElementById('bulkPlanContent').classList.remove('scale-95');
              document.getElementById('bulkPlanContent').classList.add('scale-100');
          }, 10);
      };

      window.closeBulkPlanModal = function() {
          document.getElementById('bulkPlanContent').classList.remove('scale-100');
          document.getElementById('bulkPlanContent').classList.add('scale-95');
          setTimeout(() => { document.getElementById('bulkPlanModal').style.display = 'none'; }, 200);
      };

      function getNextValidDate(startDate, allowedDaysMask, excludeHolidays) {
          let d = new Date(startDate);
          let attempts = 0;
          while (attempts < 30) {
              let dayOfWeek = d.getDay(); // 0=Sun, 1=Mon, ..., 6=Sat
              let maskIndex = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // map to 0=Mon, ..., 6=Sun

              if (allowedDaysMask[maskIndex]) {
                  if (!excludeHolidays || !isHoliday(d)) {
                      return new Date(d);
                  }
              }
              d.setDate(d.getDate() + 1);
              attempts++;
          }
          return new Date(d); // Fail-safe
      }

      window.generateBulkPlanning = function() {
          const blocId = document.getElementById('bulk-bloc-select').value;
          const startStr = document.getElementById('bulk-start-date').value;
          const timeStr = document.getElementById('bulk-start-time').value;
          const excludeHolidays = document.getElementById('bulk-exclude-holidays').checked;

          if(!startStr || !timeStr) { alert("Veuillez choisir une date et une heure de début."); return; }

          // [Lun, Mar, Mer, Jeu, Ven, Sam, Dim]
          const allowedDaysMask = [
              document.getElementById('d-1').checked, document.getElementById('d-2').checked,
              document.getElementById('d-3').checked, document.getElementById('d-4').checked,
              document.getElementById('d-5').checked, document.getElementById('d-6').checked,
              document.getElementById('d-0').checked
          ];

          if (!allowedDaysMask.includes(true)) {
              alert("Veuillez sélectionner au moins un jour de travail."); return;
          }

          // Gather all subjects for the selected block
          const blocData = dataProgram[`bloc${blocId.replace('B','')}`];
          if (!blocData || !blocData.modules) return;

          let allSubjects = [];
          blocData.modules.forEach(mod => {
              mod.sujets.forEach(s => {
                  const parts = s.split(' - ');
                  allSubjects.push({ id: parts[0], titre: parts.slice(1).join(' - ') });
              });
          });

          if (allSubjects.length === 0) return;

          let currentStartDate = new Date(`${startStr}T${timeStr}`);
          const intervals = [0, 3, 7, 14, 30, 60];

          let savedRevisions = JSON.parse(localStorage.getItem('paia_revisions')) || [];

          // Nettoyer les révisions existantes pour ces modules (optionnel, mais propre)
          const subjectIds = allSubjects.map(s => s.id);
          savedRevisions = savedRevisions.filter(r => !subjectIds.includes(r.moduleId));

          let modulesCount = 0;

          // 1 module par jour ouvré valide
          allSubjects.forEach((subject) => {
              let j0Date = getNextValidDate(currentStartDate, allowedDaysMask, excludeHolidays);

              intervals.forEach((days, index) => {
                  let rawRevDate = new Date(j0Date);
                  rawRevDate.setDate(rawRevDate.getDate() + days);

                  // Pour J3, J7, etc., on ajuste au prochain jour ouvré si ça tombe mal
                  let validRevDate = getNextValidDate(rawRevDate, allowedDaysMask, excludeHolidays);

                  const yyyy = validRevDate.getFullYear();
                  const mm = String(validRevDate.getMonth() + 1).padStart(2, '0');
                  const dd = String(validRevDate.getDate()).padStart(2, '0');

                  savedRevisions.push({
                       id: Math.random().toString(36).substr(2, 9),
                       moduleId: subject.id,
                       titre: subject.titre,
                       dateStr: `${yyyy}-${mm}-${dd}`,
                       datetime: validRevDate.getTime(),
                       num: index + 1,
                       days: days,
                       label: days === 0 ? "J0" : `J+${days}`,
                       done: false
                  });
              });

              // Le module suivant commencera le jour ouvré suivant
              currentStartDate = new Date(j0Date);
              currentStartDate.setDate(currentStartDate.getDate() + 1);
              modulesCount++;
          });

          localStorage.setItem('paia_revisions', JSON.stringify(savedRevisions));

          closeBulkPlanModal();
          afficherToastCustom(`Planning de ${modulesCount} modules généré avec succès ! 🚀`, "#10b981");
          renderCalendarView();
      };

      function renderCalendarView() {
          const container = document.getElementById("calendarContainer");
          let savedRevisions = JSON.parse(localStorage.getItem('paia_revisions')) || [];

          let emptyHtml = `
              <div class="flex flex-col items-center justify-center py-20 bg-white/50 backdrop-blur-md rounded-3xl border-2 border-paia-blue shadow-[6px_6px_0px_#0F2C48]">
                  <div class="text-6xl mb-4 opacity-50">⏰</div>
                  <h2 class="text-xl font-black text-[#0F2C48] mb-2">Aucun planning pour le moment</h2>
                  <p class="text-sm text-gray-500 mb-6 text-center max-w-md">Retournez sur vos modules et cliquez sur le bouton Calendrier pour générer vos rappels d'ancrage mémoriel.</p>
                  <div class="flex gap-4">
                      <button onclick="filtrerBloc('ALL')" class="bg-white text-paia-blue px-6 py-3 rounded-xl border-2 border-paia-blue font-bold text-sm shadow-[4px_4px_0px_#0F2C48] hover:-translate-y-1 transition-transform">Explorer les modules</button>
                      <button onclick="openBulkPlanModal()" class="bg-emerald-500 text-white px-6 py-3 rounded-xl border-2 border-emerald-700 font-bold text-sm shadow-[4px_4px_0px_#047857] hover:-translate-y-1 transition-transform"><i class="fas fa-magic mr-2"></i>Générer un Bloc</button>
                  </div>
              </div>
          `;

          if (savedRevisions.length === 0) {
              container.innerHTML = emptyHtml;
              return;
          }

          let html = `
              <div class="bg-gradient-to-br from-pink-500 to-rose-600 rounded-3xl p-8 shadow-[8px_8px_0px_rgba(15,44,72,1)] border-2 border-paia-blue flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden mb-8">
                  <div class="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                  <div class="absolute -bottom-20 -left-20 w-48 h-48 bg-black/10 rounded-full blur-2xl"></div>

                  <div class="relative z-10 text-center md:text-left">
                      <h2 class="text-3xl font-black text-white mb-2 tracking-tight">Mon Planning de Révisions</h2>
                      <p class="text-rose-100 text-sm font-medium">Consolidez votre mémoire à long terme grâce à la méthode des J.</p>
                  </div>

                  <div class="relative z-10 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                      <button onclick="openBulkPlanModal()" class="bg-white text-emerald-600 px-6 py-4 rounded-xl font-black text-sm border-2 border-emerald-600 shadow-[4px_4px_0px_#047857] hover:shadow-[6px_6px_0px_#047857] hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                          <i class="fas fa-magic text-lg"></i> Planifier un Bloc
                      </button>
                      <button onclick="downloadICSForAll()" class="bg-white border-2 border-paia-blue text-rose-900 px-6 py-4 rounded-xl font-black text-sm shadow-[4px_4px_0px_#0F2C48] hover:shadow-[6px_6px_0px_#0F2C48] hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                          <i class="fas fa-calendar-plus text-lg text-rose-600"></i> TOUT EXPORTER
                      </button>
                  </div>
              </div>
          `;

          savedRevisions.sort((a, b) => a.datetime - b.datetime);

          const todayDate = new Date();
          const todayStr = todayDate.getFullYear() + "-" + String(todayDate.getMonth() + 1).padStart(2, '0') + "-" + String(todayDate.getDate()).padStart(2, '0');

          const urgentRevs = savedRevisions.filter(r => !r.done && r.dateStr <= todayStr);
          const upcomingRevs = savedRevisions.filter(r => !r.done && r.dateStr > todayStr);
          const doneRevs = savedRevisions.filter(r => r.done);

          const generateRow = (rev, isUrgent) => {
              const revDateObj = new Date(rev.datetime);
              const dayStr = revDateObj.toLocaleDateString('fr-FR', { weekday:'short', day:'numeric', month:'short' });

              const baseColor = rev.done ? 'emerald' : (isUrgent ? 'rose' : 'indigo');
              const bgColor = rev.done ? 'bg-emerald-50' : (isUrgent ? 'bg-rose-50' : 'bg-white');
              const borderColor = rev.done ? 'border-emerald-400' : (isUrgent ? 'border-rose-400' : 'border-paia-blue');

              const blocId = rev.moduleId.split('_')[1] || 'ALL';
              const goToModuleCode = `document.getElementById('searchInput').value = '${rev.moduleId}'; filtrerBloc('${blocId}');`;

              return `
                  <div class="flex items-center gap-3 p-3 rounded-2xl ${bgColor} border-2 ${borderColor} shadow-[3px_3px_0px_#0F2C48] transition-all hover:shadow-[5px_5px_0px_#0F2C48] hover:-translate-y-1 group">
                      <div class="w-14 h-14 shrink-0 rounded-xl bg-${baseColor}-100 flex flex-col items-center justify-center text-${baseColor}-700 border-2 border-${baseColor}-300">
                          <span class="text-[11px] font-black uppercase">${rev.label}</span>
                          <span class="text-[9px] font-bold opacity-80">${dayStr}</span>
                      </div>

                      <div class="flex-grow min-w-0 flex flex-col">
                          <div class="flex items-center gap-2 mb-0.5">
                              <button onclick="${goToModuleCode}" class="text-[10px] font-black text-[#0F2C48] bg-white border-2 border-paia-blue shadow-[1px_1px_0px_#0F2C48] px-1.5 py-0.5 rounded cursor-pointer hover:bg-[#0F2C48] hover:text-white transition-colors" title="Aller réviser ce cours" aria-label="Aller réviser ce cours">
                                  <i class="fas fa-external-link-alt text-[8px] mr-1"></i>${rev.moduleId}
                              </button>
                              ${isUrgent ? '<span class="text-[8px] font-black uppercase tracking-widest text-white bg-rose-500 px-1.5 py-0.5 rounded-full shadow-sm">À faire</span>' : ''}
                          </div>
                          <span onclick="${goToModuleCode}" class="text-xs font-bold text-gray-700 truncate cursor-pointer hover:text-indigo-600 transition-colors" title="Aller au cours">${rev.titre}</span>
                      </div>

                      <button onclick="markRevisionDone('${rev.id}')" class="shrink-0 w-10 h-10 rounded-full border-2 ${rev.done ? 'bg-emerald-400 text-white border-emerald-600' : 'bg-white text-paia-blue border-paia-blue shadow-[2px_2px_0px_#0F2C48] hover:bg-emerald-400 hover:border-emerald-600 hover:text-white hover:shadow-none'} flex items-center justify-center transition-all" aria-label="Valider la révision">
                          <i class="fas fa-check text-[12px]"></i>
                      </button>
                  </div>
              `;
          };

          if (urgentRevs.length > 0) {
              html += `
                  <div class="mt-6">
                      <h3 class="text-lg font-black text-rose-600 mb-4 flex items-center gap-2"><i class="fas fa-fire"></i> Urgent / Aujourd'hui</h3>
                      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                          ${urgentRevs.map(r => generateRow(r, true)).join('')}
                      </div>
                  </div>
              `;
          }

          if (upcomingRevs.length > 0) {
              html += `
                  <div class="mt-6">
                      <h3 class="text-lg font-black text-[#0F2C48] mb-4 flex items-center gap-2"><i class="fas fa-calendar-day text-indigo-500"></i> À venir</h3>
                      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                          ${upcomingRevs.map(r => generateRow(r, false)).join('')}
                      </div>
                  </div>
              `;
          }

          if (doneRevs.length > 0) {
              html += `
                  <div class="mt-10 pt-8 border-t-2 border-paia-blue/10">
                      <h3 class="text-sm font-black text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2"><i class="fas fa-history"></i> Historique (Terminé)</h3>
                      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                          ${doneRevs.reverse().slice(0, 10).map(r => generateRow(r, false)).join('')}
                      </div>
                  </div>
              `;
          }

          container.innerHTML = html;
      }

      window.closeDailyRevisionsModal = function() {
          const content = document.getElementById('dailyRevisionsContent');
          if (content) {
              content.classList.remove('scale-100');
              content.classList.add('scale-95');
          }
          setTimeout(() => {
              const modal = document.getElementById('dailyRevisionsModal');
              if (modal) modal.style.display = 'none';
          }, 200);
      };

      function updateLockBtnUI() {
          const isUnlocked = window.paia_unlocked === true;
          const btn = document.getElementById("lockBtn");
          if (!btn) return;
          if (isUnlocked) {
              btn.innerHTML = "🔓 Session Active (Fermer le cadenas)";
              btn.className = "text-blue-600 font-black text-[9px] uppercase hover:text-red-600 transition-colors";
          } else {
              btn.innerHTML = "🔒 Mode Privé";
              btn.className = "text-gray-400 font-black text-[9px] uppercase transition-colors cursor-default";
          }
      }

      window.toggleLockSession = function() {
          if (window.paia_unlocked === true) {
              window.paia_unlocked = false;
              afficherToastCustom("Fermeture sécurisée de la session 🔒", "#0f2c48");
              updateLockBtnUI();
              const searchInputEl = document.getElementById("searchInput");
              afficherModules(searchInputEl ? searchInputEl.value : "");
          }
      }

      window.toggleAudio = function() {
        isVoice = !isVoice;
        localStorage.setItem("paia_voice", isVoice);
        const icon = document.getElementById("audioIcon");
        if (icon) icon.className = isVoice ? "fas fa-volume-up" : "fas fa-volume-mute";
        const label = document.getElementById("audioLabel");
        if (label) label.innerText = isVoice ? "Audio ON" : "Audio OFF";
      }

      window.lire = function(txt) {
        if (!isVoice) return;
        window.speechSynthesis.cancel();
        const txtSansEmoji = txt.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, '');
        const u = new SpeechSynthesisUtterance(txtSansEmoji.trim());
        u.lang = "fr-FR";
        window.speechSynthesis.speak(u);
      }

      function convertDriveLink(url) {
          if (!url) return "";
          let fileId = "";
          if (url.includes("open?id=")) fileId = url.split("open?id=")[1].split("&")[0];
          else if (url.includes("/file/d/")) fileId = url.split("/file/d/")[1].split("/")[0];
          return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : url;
      }

      function getDriveThumbnailUrl(url) {
          if (!url) return '';
          let match = url.match(/\/d\/([a-zA-Z0-9_-]+)/) || url.match(/id=([a-zA-Z0-9_-]+)/);
          return match ? `https://drive.google.com/thumbnail?id=${match[1]}&sz=w800` : '';
      }

      function normalizeUrl(url) {
        if (!url) return "";
        if (url.includes("drive.google.com")) return convertDriveLink(url);
        if (url.includes("youtube.com/watch")) return url.replace("watch?v=", "embed/");
        if (url.includes("youtu.be/")) {
          const id = url.split("youtu.be/")[1];
          return `https://www.youtube.com/embed/${id}`;
        }
        return url;
      }

      // V3 : Plus de bouton "Ouvrir en grand", iframe prend toute la place
      function buildMiniPlayer(url, originalUrl, type, titre) {
        const finalUrl = normalizeUrl(url);
        let containerClass = "w-full full-page-media";
        let headerBg = "bg-white";
        let iconEmoji = "🎬";
        let titleText = "Lecteur Vidéo - " + titre;
        let pulseColor = "bg-[#3b82f6]";

        if (type === 'embed-pdf') {
            iconEmoji = "📄";
            titleText = "Document PDF - " + titre;
            pulseColor = "bg-[#0F2C48]";
        } else if (type === 'embed-presentation') {
            iconEmoji = "📽️";
            titleText = "Diaporama - " + titre;
            pulseColor = "bg-[#d83b01]";
        } else if (type === 'embed-image') {
            iconEmoji = "🖼️";
            titleText = "Infographie - " + titre;
            pulseColor = "bg-[#e81123]";
        } else if (type === 'embed-doc') {
            iconEmoji = "📊";
            titleText = "Document Excel - " + titre;
            pulseColor = "bg-[#2563eb]";
        } else if (type === 'embed-audio') {
            containerClass = "w-full h-[120px]";
            iconEmoji = "🎧";
            titleText = "Extrait Audio - " + titre;
            pulseColor = "bg-[#667eea]";
        } else if (type === 'embed-glo') {
            iconEmoji = "📚";
            titleText = "Lexique - " + titre;
            pulseColor = "bg-[#4a5568]";
        } else if (type === 'embed-map') {
            iconEmoji = "🧠";
            titleText = "Carte Mentale - " + titre;
            pulseColor = "bg-[#ffb900]";
        } else if (type === 'embed-video') {
            iconEmoji = "🎬";
            titleText = "Vidéo - " + titre;
            pulseColor = "bg-[#e52d27]";
        } else if (type === 'embed-quiz') {
            iconEmoji = "⚡";
            titleText = "Quiz - " + titre;
            pulseColor = "bg-[#b4792a]";
        }

        const iframeId = 'iframe-' + Math.random().toString(36).substr(2, 9);

        // Retrait du bouton 'Ouvrir en grand'
        return `
          <div class="mt-4 w-full rounded-[24px] overflow-hidden bg-paia-ivory border-2 border-paia-blue shadow-[6px_6px_0px_rgba(15,44,72,1)] animate-slideIn p-3 transition-all hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_rgba(15,44,72,1)]">
              <div class="flex items-center justify-between mb-3 px-4 pt-3 ${headerBg} rounded-xl pb-3 border-2 border-paia-blue shadow-[2px_2px_0px_#0F2C48]">
                  <div class="flex items-center gap-3">
                      <span class="text-xl drop-shadow-md">${iconEmoji}</span>
                      <span class="text-[11px] font-black uppercase tracking-widest text-paia-blue truncate max-w-[200px] md:max-w-full">
                          ${titleText}
                      </span>
                  </div>
                  <div class="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border-2 border-paia-blue shadow-[1px_1px_0px_#0F2C48]">
                      <div class="w-2 h-2 rounded-full ${pulseColor} animate-pulse"></div>
                      <span class="text-[9px] font-black uppercase tracking-widest text-paia-blue">Lecture en cours</span>
                  </div>
              </div>

              <div class="${containerClass} relative rounded-xl overflow-hidden border-2 border-paia-blue bg-white group">
                  <div id="loader-${iframeId}" class="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-gray-200 to-transparent skeleton-loader w-full h-full"></div>
                  <div id="icon-${iframeId}" class="absolute z-0 flex flex-col items-center justify-center opacity-50 inset-0 m-auto">
                      <i class="fas fa-circle-notch fa-spin text-3xl text-paia-blue mb-2"></i>
                      <span class="text-[9px] font-bold text-paia-blue uppercase tracking-widest">Connexion sécurisée...</span>
                  </div>
                  <iframe
                      id="${iframeId}"
                      onload="document.getElementById('loader-${iframeId}').style.opacity='0'; document.getElementById('icon-${iframeId}').style.opacity='0'; setTimeout(()=>{document.getElementById('loader-${iframeId}').style.display='none'; document.getElementById('icon-${iframeId}').style.display='none';}, 500);"
                      src="${finalUrl}"
                      class="absolute top-0 left-0 w-full h-full border-none z-10"
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                      allow="autoplay"
                      allowfullscreen
                  ></iframe>
              </div>
          </div>
        `;
      }

      window.toggleInlineContent = function(id, url, type, titre) {
          const container = document.getElementById(`inline-media-${id}`);
          if (!container || !url) return;

          if (!container.classList.contains('hidden') && container.dataset.currentUrl === url) {
              container.classList.add('hidden');
              container.innerHTML = '';
              container.dataset.currentUrl = '';
              return;
          }

          document.querySelectorAll('[id^="inline-media-"]').forEach(el => {
              el.innerHTML = '';
              el.classList.add('hidden');
              el.dataset.currentUrl = '';
          });

          // Seul l'audio utilise ce bloc désormais (les autres ont un target="_blank")
          if (type === 'embed-audio') {
              const comboHtml = `<div class="flex flex-col gap-4 mt-4 animate-slideIn">` +
                                buildMiniPlayer(url, url, 'embed-audio', titre) +
                                `</div>`;
              container.innerHTML = comboHtml;
              container.dataset.currentUrl = url;
              container.classList.remove('hidden');

              setTimeout(() => {
                  const y = container.getBoundingClientRect().top + window.scrollY - 180;
                  window.scrollTo({top: y, behavior: 'smooth'});
              }, 100);
          }
      };

      function getActionLink(url, titre, type, emoji, id) {
          if (!url || url.trim() === "") {
             return { tag: "div", action: `onclick="afficherTravaux('${(titre || "").replace(/'/g, "\\'")}')" style="cursor:pointer;"` };
          }
          let finalUrl = url;
          if (finalUrl.includes("drive.google.com")) {
              finalUrl = convertDriveLink(finalUrl);
          }
          const safeUrl = finalUrl.replace(/'/g, "\\'");
          const safeTitre = (titre || "").replace(/'/g, "\\'");
          const isUnlocked = window.paia_unlocked === true;

          if (type === 'embed-pdf' && !isUnlocked) {
              return { tag: "div", action: `onclick="handleProtectedClick('${safeUrl}', '${id}', '${safeTitre}')" style="cursor:pointer;"` };
          }

          if (type === 'embed-audio') {
              return { tag: "div", action: `onclick="event.stopPropagation(); toggleInlineContent('${id}', '${safeUrl}', '${type}', '${safeTitre}')" style="cursor:pointer;"` };
          }

          return { tag: "a", action: `href="${safeUrl}" target="_blank" style="cursor:pointer;"` };
      }

      window.handleProtectedClick = function(url, id, titre) {
          const isUnlocked = window.paia_unlocked === true;
          if (isUnlocked) {
              window.open(url, '_blank');
          } else {
              pendingPdfUrl = url;
              pendingPdfId = id;
              pendingPdfTitre = titre;
              document.getElementById('pinModal').style.display = 'flex';
              setTimeout(() => {
                  document.getElementById('pinModalContent').classList.remove('scale-95');
                  document.getElementById('pinModalContent').classList.add('scale-100');
                  document.getElementById('pinInput').value = '';
                  document.getElementById('pinInput').focus();
              }, 10);
          }
      };

      window.closePinModal = function() {
          document.getElementById('pinModalContent').classList.remove('scale-100');
          document.getElementById('pinModalContent').classList.add('scale-95');
          setTimeout(() => { document.getElementById('pinModal').style.display = 'none'; }, 200);
      }

      window.verifyPin = function() {
          const input = document.getElementById('pinInput').value;

          if (btoa(input) === ENCODED_PIN) {
              window.paia_unlocked = true;
              closePinModal();
              afficherToastCustom("Authentification réussie 🔓", "#3b82f6");
              updateLockBtnUI();
              const searchInputEl = document.getElementById("searchInput");
              if (typeof afficherModules === 'function') afficherModules(searchInputEl ? searchInputEl.value : "");

              if (pendingPdfUrl && pendingPdfId) {
                  window.open(pendingPdfUrl, '_blank');
                  pendingPdfUrl = ""; pendingPdfId = ""; pendingPdfTitre = "";
              } else if (pendingPdfUrl) {
                  window.open(pendingPdfUrl, '_blank');
                  pendingPdfUrl = "";
              }
          } else {
              const inputEl = document.getElementById('pinInput');
              inputEl.classList.add('border-red-500', 'bg-red-50', 'text-red-500');
              inputEl.value = '';
              setTimeout(() => { inputEl.classList.remove('border-red-500', 'bg-red-50', 'text-red-500'); }, 500);
          }
      };

      function renderSubTabs() {
        const sub = document.getElementById("subTabsContainer");
        if (!sub) return;
        sub.innerHTML = "";
        if (currentBloc === "ALL" || currentBloc === "CAL" || currentBloc === "CERTIF" || currentBloc === "ECF" || currentBloc === "PAY") { sub.classList.add("hidden"); return; }
        sub.classList.remove("hidden");
        const mods = configStructure[currentBloc] || [];

        const createBtn = (id, label) => {
            const btn = document.createElement("button");

            // Couleurs basées sur le bloc en cours (Pep's)
            let themeBg = 'bg-paia-blue';
            let themeBorder = 'border-paia-blue';
            if (currentBloc === 'B0') { themeBg = 'bg-sky-500'; themeBorder = 'border-sky-600'; }
            if (currentBloc === 'B1') { themeBg = 'bg-paia-blue'; themeBorder = 'border-blue-900'; }
            if (currentBloc === 'B2') { themeBg = 'bg-paia-yellow'; themeBorder = 'border-yellow-600'; }
            if (currentBloc === 'B3') { themeBg = 'bg-paia-bronze'; themeBorder = 'border-orange-800'; }
            if (currentBloc === 'B4') { themeBg = 'bg-paia-dark'; themeBorder = 'border-black'; }

            const isActive = currentMod === id;

            btn.className = `px-6 py-3 rounded-xl border-2 font-black text-[13px] md:text-sm uppercase transition-all flex-1 sm:flex-none text-center ${isActive ? themeBg + ' text-white ' + themeBorder + ' shadow-[3px_3px_0px_rgba(0,0,0,0.5)] transform translate-y-[-1px]' : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-700 shadow-sm'}`;

            btn.innerText = label;
            btn.onclick = () => { currentMod = id; renderSubTabs(); const searchInputEl = document.getElementById("searchInput"); afficherModules(searchInputEl ? searchInputEl.value : ""); };
            return btn;
        };

        sub.appendChild(createBtn("ALL", "Tout " + currentBloc));
        mods.forEach(m => sub.appendChild(createBtn(m.id, m.id)));
      }

      function afficherModules(filtre = "", anim = true) {
        const list = document.getElementById("listContainer");
        if (!list) return;
        list.innerHTML = "";
        let vueCount = 0, totalCount = 0, cardIdx = 0;
        const isUnlocked = window.paia_unlocked === true;
        let savedRevisions = JSON.parse(localStorage.getItem('paia_revisions')) || [];

        const searchInputEl = document.getElementById("searchInput");
        const search = searchInputEl?.value.toLowerCase() || "";
        const finalFiltre = filtre.toLowerCase() || search;

        // CERTIF ACCORDION IN MAIN LIST (Si pertinent)
        const evalMap = { 'B0': 'eval_trans', 'B1': 'eval_ccp1', 'B2': 'eval_ccp2', 'B3': 'eval_ccp3', 'B4': 'eval_ccp4' };
        const evalKey = evalMap[currentBloc];

        if (evalKey && dataEvaluations[evalKey] && currentMod === "ALL" && !finalFiltre) {
            const evalData = dataEvaluations[evalKey];
            const theme = themes[evalData.themeKey];
            let accordionId = 'eval-accordion-' + evalKey;

            let evalHtml = `
            <div class="mb-8 w-full animate-slideIn" style="animation-delay: 0s">
                <button onclick="document.getElementById('${accordionId}').classList.toggle('hidden'); document.getElementById('icon-${accordionId}').classList.toggle('rotate-180');"
                        class="w-full flex items-center justify-between px-6 py-4 rounded-2xl border-2 ${theme.border} bg-white shadow-[4px_4px_0px_#0F2C48] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#0F2C48] transition-all text-[#0F2C48] focus:outline-none">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-xl ${theme.bg} flex items-center justify-center text-white border-2 border-paia-blue shadow-[2px_2px_0px_#0F2C48]">
                            <i class="fas fa-award text-xl animate-pulse"></i>
                        </div>
                        <div class="text-left">
                            <span class="font-black uppercase tracking-[0.2em] text-[10px] ${theme.text} opacity-70">Certification Hub</span>
                            <h2 class="font-black uppercase text-sm tracking-widest block">${evalData.title}</h2>
                        </div>
                    </div>
                    <div class="flex items-center gap-4">
                        <div class="hidden sm:flex flex-col items-end">
                            <span class="text-[9px] font-black uppercase text-gray-400">Statut Livrables</span>
                            <span class="text-[11px] font-black text-[#0F2C48]">Suivi en temps réel</span>
                        </div>
                        <i id="icon-${accordionId}" class="fas fa-chevron-down text-paia-blue transition-transform duration-500 text-xl font-bold"></i>
                    </div>
                </button>
                <div id="${accordionId}" class="hidden mt-4 bg-paia-ivory border-4 border-paia-blue shadow-[6px_6px_0px_#0F2C48] rounded-2xl overflow-hidden p-3 flex flex-col gap-2">
            `;

            evalData.items.forEach(item => {
                evalHtml += generateEvalRowHtml(item, true);
            });

            evalHtml += `
                </div>
            </div>`;

            list.insertAdjacentHTML('beforeend', evalHtml);
        }

        database.forEach((itemObj) => {
          if (!itemObj.Code) return;

          const id = itemObj.Code;
          const titre = itemObj.Titre || "Sans titre";
          const fullItemName = `${id} - ${titre}`;
          const safeFileName = encodeURIComponent(fullItemName) + '.html';

          if (!fullItemName.toLowerCase().includes(finalFiltre)) return;
          if (currentBloc !== "ALL" && !id.includes(`_${currentBloc}_`)) return;
          if (currentMod !== "ALL" && !id.includes(`_${currentBloc}_${currentMod}`)) return;

          // MODIFICATION ICI : NoteBook_LM est retiré de resOfficiels
          const resOfficiels = [
            { id: "pdf", em: "📄", n: "Cours Officiel PDF", b: "bg-pdf", url: itemObj.Cours, type: "embed-pdf", color: "#0f2c48" },
            { id: "lien", em: "🎓", n: "Plateforme Studi", b: "bg-lien", url: itemObj.Lien_Studi, type: "external", color: "#0078d4" }
          ];

          // MODIFICATION ICI : Création d'un bloc distinct pour le NoteBook (retiré de resCore)
          const resCore = [
            { id: "audio", em: "🎧", n: "Audio", b: "bg-audio", url: itemObj.Audio, type: "embed-audio", color: "#667eea" },
            { id: "excel", em: "📊", n: "Excel", b: "bg-excel", url: itemObj.Excel, type: "embed-doc", color: "#2563eb" },
            { id: "infog", em: "🖼️", n: "Infographie", b: "bg-infog", url: itemObj.Infographie, type: "embed-image", color: "#e81123" },
            { id: "slide", em: "📽️", n: "Slide", b: "bg-slide", url: itemObj.Slides ? (itemObj.Slides.startsWith('http') ? itemObj.Slides : `Slides/${itemObj.Slides}`) : null, type: "embed-presentation", color: "#d83b01" },
            { id: "video", em: "🎬", n: "Vidéo", b: "bg-video", url: itemObj.Vidéo, type: "embed-video", color: "#e52d27" }
          ];

          const resExternes = [
            { id: "glo", em: "📚", n: "Lexique", b: "bg-glo", url: `Glossaire/${safeFileName}`, type: "embed-glo", color: "#4a5568" },
            { id: "map", em: "🧠", n: "Carte Mentale", b: "bg-map", url: `Carte Mentale/${safeFileName}`, type: "embed-map", color: "#ffb900" },
            { id: "quiz", em: "⚡", n: "Quiz", b: "bg-quiz", url: `Quiz/${safeFileName}`, type: "embed-quiz", color: "#b4792a" },
          ];

          // NOUVEAU BLOC : NoteBook dédié
          const resNote = [
            { id: "notebook", em: "📓", n: "NoteBook_LM", b: "bg-notebook", url: itemObj.NoteBook_LM, type: "external", color: "#d946ef" }
          ];

          let htmlOff = resOfficiels.map((r, index) => {
              let displayEmoji = r.em;
              let tooltipText = r.n;
              let btnClass = r.b;

              if (r.id === 'pdf' && !isUnlocked) {
                  displayEmoji = "🔒"; tooltipText = "Document Privé (Droits d'auteur)"; btnClass = "bg-locked";
              } else if (r.id === 'pdf' && isUnlocked) {
                  displayEmoji = "📄"; tooltipText = "Cours Officiel PDF"; btnClass = "bg-pdf";
              }

              const linkProps = getActionLink(r.url, titre, r.type, r.em, id);

              let extraDivClass = (!r.url || r.url.trim() === '') ? "opacity-40 grayscale pointer-events-none" : "";
              let colSpanClass = "flex justify-center";

              return `<div class="relative tooltip-container ${extraDivClass} ${colSpanClass}">
                          <${linkProps.tag} ${linkProps.action} aria-label="Ressource ${tooltipText}" class="btn-resource ${btnClass}" onmouseenter="lire('${tooltipText.replace(/'/g, "\\'")}')"><span>${displayEmoji}</span></${linkProps.tag}>
                          <span class="tooltip">${tooltipText}</span>
                      </div>`;
          }).join("");

          // trackableRes inclut maintenant resNote pour que cela soit comptabilisé dans le % global de Mon Parcours
          const trackableRes = [...resCore, ...resExternes, ...resNote];
          const validRids = trackableRes.filter(r => r.url && r.url.trim() !== '').map(r => r.id);
          totalCount += validRids.length;

          validRids.forEach(rid => { if (progressRes[`${id}-${rid}`]) vueCount++; });

          const buildTrackableHtml = (arr) => {
              return arr.map((r) => {
                const hasUrl = r.url && r.url.trim() !== '';
                const isV = hasUrl && progressRes[`${id}-${r.id}`];

                // Préfixe spécial pour le NoteBook_LM si on doit afficher la modale "en chantier"
                let displayTitre = titre || "";
                if (r.id === "notebook" && !hasUrl) {
                    displayTitre = "NoteBook_LM - " + displayTitre;
                }

                const linkProps = getActionLink(r.url, displayTitre, r.type, r.em, id);

                let checkC = "";
                let checkIcon = "";
                let badgeAction = "";
                let extraDivClass = "";

                if (!hasUrl) {
                    checkC = "bg-red-50 text-red-500 border-red-400 cursor-not-allowed";
                    checkIcon = "fas fa-times";
                    badgeAction = `onclick="afficherTravaux('${displayTitre.replace(/'/g, "\\'")}')"`;
                    extraDivClass = r.id === "notebook" ? "" : "opacity-60 grayscale-[30%]";
                } else {
                    checkC = isV ? "bg-[#3b82f6] text-white border-[#3b82f6]" : "bg-white text-gray-200 border-gray-200 hover:border-[#3b82f6] hover:text-[#3b82f6]";
                    checkIcon = "fas fa-check";
                    badgeAction = `onclick="toggleRes('${id}','${r.id}','${r.em}','${r.color}')"`;
                }

                return `<div class="relative tooltip-container ${extraDivClass}">
                            <${linkProps.tag} ${linkProps.action} aria-label="Ressource ${r.n}" class="btn-resource ${r.b}" onmouseenter="lire('${r.n.replace(/'/g, "\\'")}')"><span>${r.em}</span></${linkProps.tag}>
                            <button ${badgeAction} class="check-badge ${checkC}" aria-label="Marquer la ressource comme lue ou non lue"><i class="${checkIcon}"></i></button>
                            <span class="tooltip">${r.n}</span>
                        </div>`;
              }).join("");
          };

          let htmlCore = buildTrackableHtml(resCore);
          let htmlExt = buildTrackableHtml(resExternes);
          let htmlNote = buildTrackableHtml(resNote);

          const validRidsCore = resCore.filter(r => r.url && r.url.trim() !== '').map(r => r.id);
          let lineCheckedCore = 0;
          validRidsCore.forEach(rid => { if (progressRes[`${id}-${rid}`]) lineCheckedCore++; });
          const percentCore = validRidsCore.length > 0 ? Math.round((lineCheckedCore / validRidsCore.length) * 100) : 0;
          const isCoreFull = validRidsCore.length > 0 && lineCheckedCore === validRidsCore.length;

          const validRidsExt = resExternes.filter(r => r.url && r.url.trim() !== '').map(r => r.id);
          let lineCheckedExt = 0;
          validRidsExt.forEach(rid => { if (progressRes[`${id}-${rid}`]) lineCheckedExt++; });
          const percentExt = validRidsExt.length > 0 ? Math.round((lineCheckedExt / validRidsExt.length) * 100) : 0;
          const isExtFull = validRidsExt.length > 0 && lineCheckedExt === validRidsExt.length;

          const moduleRevs = savedRevisions.filter(r => r.moduleId === id);

          const nbTotal = moduleRevs.length > 0 ? moduleRevs.length : 6;
          const nbDone = moduleRevs.length > 0 ? moduleRevs.filter(r => r.done).length : 0;

          const badgeColorClass = moduleRevs.length > 0 ? "border-rose-700 bg-rose-500" : "border-gray-400 bg-gray-400 opacity-70";
          const btnCalendarClass = moduleRevs.length > 0 ? "bg-rose-500 text-white border-rose-700 shadow-[2px_2px_0px_#9f1239]" : "bg-white text-gray-400 border-gray-300 hover:text-rose-500 hover:border-rose-400 shadow-[2px_2px_0px_rgba(0,0,0,0.1)] transition-colors";

          let btnCalendarHTML = `
              <div class="relative tooltip-container">
                  <button onclick="openSpacedRepetitionModal('${id}', '${titre.replace(/'/g, "\\'")}')" class="btn-resource border-2 transition-all ${btnCalendarClass}" aria-label="Planifier les révisions de ce module">
                      <span>⏰</span>
                  </button>
                  <div class="cal-badge border-2 text-white ${badgeColorClass}">${nbDone}/${nbTotal}</div>
                  <span class="tooltip text-nowrap">${moduleRevs.length > 0 ? 'Modifier mon Planning' : 'Planifier Révisions'}</span>
              </div>
          `;

          const isFull = validRids.length > 0 && (lineCheckedCore + lineCheckedExt + (progressRes[`${id}-notebook`] ? 1 : 0)) === validRids.length;

          let offBlock = `
              <div class="flex flex-col gap-2 bg-slate-50 pt-3 pb-2 px-3 rounded-2xl border-2 border-slate-200 shadow-[2px_2px_0px_rgba(15,44,72,0.1)] shrink-0 relative transition-colors duration-500">
                  <div class="flex gap-2 z-10 w-full place-items-center justify-center">${htmlOff}</div>
                  <div class="flex items-center justify-center w-full px-1 z-10 mt-1 border-t-2 border-slate-200 pt-1 pb-1">
                      <span class="text-[8px] font-black uppercase text-slate-500 tracking-widest leading-none">Officiel</span>
                  </div>
              </div>`;

          let coreBlock = '';
          if (validRidsCore.length > 0) {
              coreBlock = `
              <div class="flex flex-col gap-2 ${isCoreFull ? 'bg-emerald-50 border-emerald-400' : 'bg-cyan-50 border-cyan-300'} pt-3 pb-2 px-3 rounded-2xl border-2 shadow-[2px_2px_0px_rgba(15,44,72,0.1)] shrink-0 relative transition-colors duration-500">
                  <div class="flex gap-2 z-10">${htmlCore}</div>
                  <div class="flex items-center justify-between w-full px-1 z-10 mt-1 border-t-2 ${isCoreFull ? 'border-emerald-200' : 'border-cyan-200'} pt-1 pb-1">
                      <span class="text-[8px] font-black uppercase ${isCoreFull ? 'text-emerald-600' : 'text-cyan-600'} tracking-widest leading-none transition-colors">Skill Up</span>
                      <button onclick="toggleGroup(event, '${id}', 'core')" class="text-[20px] ml-2 leading-none hover:scale-125 transition-transform ${isCoreFull ? 'text-emerald-500' : 'text-cyan-500 drop-shadow-sm'}" title="${isCoreFull ? 'Annuler' : 'Valider Skill Up'}" aria-label="${isCoreFull ? 'Annuler la validation du groupe Skill Up' : 'Valider tout le groupe Skill Up'}">${isCoreFull ? '✅' : '🚀'}</button>
                  </div>
                  <div class="absolute bottom-0 left-0 w-full h-[6px] bg-black/5 z-0 rounded-b-[14px] overflow-hidden">
                      <div class="absolute top-0 left-0 h-full ${isCoreFull ? 'bg-gradient-to-r from-emerald-400 to-emerald-500' : 'bg-gradient-to-r from-cyan-400 to-cyan-500'} transition-all duration-700 ease-out z-0" style="width: ${percentCore}%;"></div>
                  </div>
              </div>`;
          }

          let extBlock = '';
          if (validRidsExt.length > 0) {
              extBlock = `
              <div class="flex flex-col gap-2 ${isExtFull ? 'bg-emerald-50 border-emerald-400' : 'bg-amber-50 border-amber-300'} pt-3 pb-2 px-3 rounded-2xl border-2 shadow-[2px_2px_0px_rgba(15,44,72,0.1)] shrink-0 relative transition-colors duration-500">
                  <div class="flex gap-2 z-10">${htmlExt}</div>
                  <div class="flex items-center justify-between w-full px-1 z-10 mt-1 border-t-2 ${isExtFull ? 'border-emerald-200' : 'border-amber-200'} pt-1 pb-1">
                      <span class="text-[8px] font-black uppercase ${isExtFull ? 'text-emerald-600' : 'text-amber-600'} tracking-widest leading-none transition-colors">Créations</span>
                      <button onclick="toggleGroup(event, '${id}', 'ext')" class="text-[20px] ml-2 leading-none hover:scale-125 transition-transform ${isExtFull ? 'text-emerald-500' : 'text-amber-500 drop-shadow-sm'}" title="${isExtFull ? 'Annuler' : 'Valider Créations'}" aria-label="${isExtFull ? 'Annuler la validation des créations' : 'Valider toutes les créations'}">${isExtFull ? '✅' : '🚀'}</button>
                  </div>
                  <div class="absolute bottom-0 left-0 w-full h-[6px] bg-black/5 z-0 rounded-b-[14px] overflow-hidden">
                      <div class="absolute top-0 left-0 h-full ${isExtFull ? 'bg-gradient-to-r from-emerald-400 to-emerald-500' : 'bg-gradient-to-r from-amber-400 to-amber-500'} transition-all duration-700 ease-out z-0" style="width: ${percentExt}%;"></div>
                  </div>
              </div>`;
          }

          let noteBlock = '';
          if (resNote[0].url && resNote[0].url.trim() !== '') {
              noteBlock = `
              <div class="flex flex-col gap-2 bg-fuchsia-50 pt-3 pb-2 px-3 rounded-2xl border-2 border-fuchsia-200 shadow-[2px_2px_0px_rgba(15,44,72,0.1)] shrink-0 relative transition-colors duration-500">
                  <div class="flex justify-center z-10 w-full">${htmlNote}</div>
                  <div class="flex items-center justify-center w-full px-1 z-10 mt-1 border-t-2 border-fuchsia-200 pt-1 pb-1">
                      <span class="text-[8px] font-black uppercase text-fuchsia-600 tracking-widest leading-none">Notes</span>
                  </div>
              </div>`;
          }

          let calBlock = `
              <div class="flex flex-col gap-2 bg-rose-50 pt-3 pb-2 px-3 rounded-2xl border-2 border-rose-200 shadow-[2px_2px_0px_rgba(15,44,72,0.1)] shrink-0 relative transition-colors duration-500 h-full">
                  <div class="flex justify-center z-10">${btnCalendarHTML}</div>
                  <div class="flex items-center justify-center w-full px-1 z-10 mt-1 border-t-2 border-rose-200 pt-1 pb-1">
                      <span class="text-[8px] font-black uppercase text-rose-500 tracking-widest leading-none">Rappels</span>
                  </div>
              </div>`;

          let previewBlock = '';
          let audioUrl = itemObj.Audio;
          let infogUrl = itemObj.Infographie;
          let slideUrl = itemObj.Slides ? (itemObj.Slides.startsWith('http') ? itemObj.Slides : `Slides/${itemObj.Slides}`) : null;
          let hasAudio = audioUrl && audioUrl.trim() !== '';

          let visualUrlForThumb = infogUrl && infogUrl.trim() !== '' ? infogUrl : null;
          let visualType = 'embed-image';
          let visualLabel = 'Infographie';

          if (!visualUrlForThumb && slideUrl && slideUrl.trim() !== '') {
              visualUrlForThumb = slideUrl;
              visualType = 'embed-presentation';
              visualLabel = 'Diaporama';
          }

          if (visualUrlForThumb) {
              let thumbUrl = getDriveThumbnailUrl(visualUrlForThumb);
              let linkProps = getActionLink(visualUrlForThumb, titre, visualType, '🖼️', id);

              let audioInsideHtml = '';
              if (hasAudio) {
                  audioInsideHtml = `
                      <button class="absolute top-3 right-3 w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center border-2 border-paia-blue shadow-[3px_3px_0px_#0F2C48] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_#0F2C48] transition-all z-20" title="Écouter le podcast inline" aria-label="Écouter le podcast audio" onclick="event.stopPropagation(); toggleInlineContent('${id}', '${audioUrl.replace(/'/g, "\\'")}', 'embed-audio', '${titre.replace(/'/g, "\\'")}')">
                          <i class="fas fa-play text-[12px] ml-1"></i>
                      </button>
                  `;
              }

              previewBlock = `
              <div class="w-full lg:w-[35%] xl:w-[30%] max-w-[400px] shrink-0 h-full min-h-[220px] mt-4 lg:mt-0 lg:ml-auto">
                  <div class="relative w-full h-full rounded-[24px] border-2 border-paia-blue overflow-hidden bg-paia-blue group cursor-zoom-in shadow-[4px_4px_0px_#0F2C48] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#0F2C48] transition-all"
              onclick="event.stopPropagation(); window.open('${visualUrlForThumb.replace(/'/g, "\\'")}', '_blank')">
                      <div class="absolute inset-0 bg-gray-100 flex items-center justify-center">
                          <i class="fas fa-image text-gray-300 text-3xl"></i>
                      </div>

                      <img src="${thumbUrl}" alt="Aperçu" class="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 animate-slow-pan z-10" onerror="this.style.opacity='0'">

                      <div class="absolute inset-0 bg-gradient-to-t from-paia-blue/90 via-paia-blue/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity z-10"></div>

                      ${audioInsideHtml}

                      <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between z-20">
                          <div class="flex flex-col">
                              <span class="text-[9px] text-paia-yellow font-black uppercase tracking-[0.2em] drop-shadow-md mb-1">Aperçu interactif</span>
                              <span class="text-[13px] font-black uppercase text-white drop-shadow-md truncate tracking-wider">
                                  ${visualLabel}
                              </span>
                          </div>
                          <div class="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border-2 border-white/40 text-white group-hover:bg-paia-yellow group-hover:text-paia-blue group-hover:border-paia-blue transition-colors">
                              <i class="fas fa-expand text-[10px]"></i>
                          </div>
                      </div>
                  </div>
              </div>`;
          } else {
              let audioInsideHtml = '';
              if (hasAudio) {
                  audioInsideHtml = `
                      <button class="w-14 h-14 rounded-full bg-indigo-500 text-white flex items-center justify-center border-2 border-paia-blue shadow-[4px_4px_0px_#0F2C48] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#0F2C48] transition-all z-20 mb-3" title="Écouter le podcast" aria-label="Écouter le podcast audio" onclick="event.stopPropagation(); toggleInlineContent('${id}', '${audioUrl.replace(/'/g, "\\'")}', 'embed-audio', '${titre.replace(/'/g, "\\'")}')">
                          <i class="fas fa-play text-xl ml-1"></i>
                      </button>
                      <span class="text-[10px] font-black text-indigo-600 uppercase tracking-widest bg-indigo-100 px-3 py-1.5 rounded-xl border border-indigo-200">Podcast Audio</span>
                  `;
              }

              previewBlock = `
              <div class="w-full lg:w-[35%] xl:w-[30%] max-w-[400px] shrink-0 h-full min-h-[220px] mt-4 lg:mt-0 lg:ml-auto">
                  <div class="w-full h-full rounded-[24px] border-2 border-dashed border-gray-300 bg-gray-50 flex flex-col items-center justify-center p-4 hover:border-paia-blue hover:bg-white transition-colors">
                      ${hasAudio ? audioInsideHtml : `
                      <i class="fas fa-image mb-3 text-gray-300 text-3xl"></i>
                      <span class="text-[10px] font-black uppercase tracking-widest text-gray-400 bg-white px-4 py-2 rounded-xl border border-gray-200">Visuel à venir</span>
                      `}
                  </div>
              </div>`;
          }

          // CRÉATION DU BADGE ECF FINAL EN DESSOUS DU TITRE
          let ecfBadgeHtml = '';
          if (ecfMapping[id]) {
              ecfBadgeHtml = `<span class="bg-purple-100 text-purple-700 border-2 border-purple-300 text-[10px] font-black uppercase px-2.5 py-1 rounded-md shadow-[1px_1px_0px_rgba(107,33,168,0.5)] self-start tracking-wider flex items-center" title="Indispensable pour l'ECF Final"><i class="fas fa-bullseye mr-1.5"></i> Objectif ECF Final</span>`;
          }

          const card = document.createElement("div");
          card.className = `card-3d bg-white p-6 rounded-[32px] border-2 border-paia-blue shadow-[4px_4px_0px_#0F2C48] flex flex-col gap-6 items-stretch mb-6 ${isFull ? "bg-blue-50/30 border-paia-blue shadow-[4px_4px_0px_#3b82f6]" : ""} ${anim ? "card-animate" : ""}`;

          card.style.animationDelay = `${(cardIdx++) * 0.05}s`;

          card.innerHTML = `
            <div class="flex flex-col lg:flex-row gap-6 w-full h-full">
                <div class="flex-grow min-w-0 flex flex-col justify-between">
                    <div>
                        <div class="flex flex-wrap items-center gap-2 mb-3">
                            <span class="bg-paia-blue text-white text-[10px] font-black uppercase px-3 py-1.5 rounded-lg shadow-[2px_2px_0px_#D9A526] tracking-widest">${id}</span>
                            ${ecfBadgeHtml}
                        </div>
                        <h2 class="text-xl font-black text-paia-blue leading-tight mb-2 drop-shadow-sm">${titre}</h2>
                    </div>
                    <div class="flex flex-wrap items-stretch gap-3 mt-4 h-full">
                        ${offBlock}
                        ${coreBlock}
                        ${extBlock}
                        ${noteBlock}
                        ${calBlock}
                    </div>
                </div>
                ${previewBlock}
            </div>
            <div id="inline-media-${id}" class="hidden w-full transition-all duration-500" data-current-url=""></div>
          `;
          list.appendChild(card);
        });

        if (list.innerHTML === "") {
            list.innerHTML = `
                <div class="text-center py-20 bg-white/50 backdrop-blur-sm rounded-3xl border-2 border-paia-blue shadow-[6px_6px_0px_#0F2C48] animate-fade-in">
                    <div class="text-4xl mb-3 opacity-50">🔍</div>
                    <p class="text-paia-blue font-black uppercase tracking-widest text-lg">Aucun module trouvé</p>
                    <p class="text-gray-500 text-sm mt-2">Essayez de modifier votre recherche ou vos filtres.</p>
                </div>`;
        }

        const pctText = document.getElementById("progressText");
        const pctBar = document.getElementById("progressBar");
        const resVue = document.getElementById("compteurResVue");
        const resTot = document.getElementById("compteurResTotal");

        const progressPercent = totalCount === 0 ? 0 : Math.round((vueCount / totalCount) * 100);

        if(pctText) pctText.innerText = progressPercent + "%";
        if(pctBar) pctBar.style.width = progressPercent + "%";
        if(resVue) resVue.innerText = vueCount;
        if(resTot) resTot.innerText = totalCount;
      }

      window.afficherTravaux = function(titre) {
        const t = document.getElementById("modalTxt");
        if (t) t.innerText = titre;
        const m = document.getElementById("modalTravaux");
        if (m) m.style.display = "flex";
      }

      document.getElementById("searchInput")?.addEventListener("input", (e) => {
          afficherModules(e.target.value, false);
      });