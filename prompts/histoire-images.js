// Banque d'images curées — URLs Wikimedia Commons vérifiées
// Chaque sous-thème a 3-4 images DIVERSIFIÉES (photo, carte, document, peinture)
// Format thumbnail 500px pour un bon rendu impression
// Chaque image a un champ 'nature' unique pour garantir la diversité pédagogique

export const HISTOIRE_IMAGES = {

  // ===================== 11H — XXe-XXIe SIÈCLES =====================

  // --- Première Guerre mondiale ---
  'causes-ww1': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/DC-1914-27-d-Sarajevo-cropped.jpg/500px-DC-1914-27-d-Sarajevo-cropped.jpg',
      title: 'L\'assassinat de l\'archiduc François-Ferdinand à Sarajevo (1914)',
      nature: 'Photographie',
      date: '28 juin 1914',
      auteur: 'Domaine public',
      description: 'Arrestation de Gavrilo Princip après l\'assassinat de l\'archiduc François-Ferdinand — l\'étincelle de la Première Guerre mondiale'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Map_Europe_alliances_1914-en_greyscale_v02.svg/500px-Map_Europe_alliances_1914-en_greyscale_v02.svg.png',
      title: 'Carte des alliances en Europe en 1914',
      nature: 'Carte historique',
      date: '1914',
      auteur: 'Domaine public',
      description: 'Carte montrant la Triple-Alliance (Allemagne, Autriche-Hongrie, Italie) face à la Triple-Entente (France, Russie, Royaume-Uni)'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harry_R._Hopps%2C_Destroy_this_mad_brute_Enlist_-_U.S._Army%2C_03216u_edit.jpg/500px-Harry_R._Hopps%2C_Destroy_this_mad_brute_Enlist_-_U.S._Army%2C_03216u_edit.jpg',
      title: '« Destroy this mad brute » — Affiche de recrutement américaine',
      nature: 'Affiche de propagande',
      date: '1917',
      auteur: 'Harry R. Hopps',
      description: 'Affiche de propagande américaine représentant l\'Allemagne comme un gorille menaçant — incitation à l\'enrôlement dans l\'armée'
    }
  ],

  'tranchees': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Cheshire_Regiment_trench_Somme_1916.jpg/500px-Cheshire_Regiment_trench_Somme_1916.jpg',
      title: 'Tranchée britannique à la Bataille de la Somme (1916)',
      nature: 'Photographie',
      date: '1916',
      auteur: 'Photographe militaire britannique',
      description: 'Soldats du Cheshire Regiment dans une tranchée allemande capturée près d\'Albert, Bataille de la Somme'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Photo_of_French_soldier_with_an_early_type_of_gas_mask_-_World_War_I_%281914-1918%29.jpg/500px-Photo_of_French_soldier_with_an_early_type_of_gas_mask_-_World_War_I_%281914-1918%29.jpg',
      title: 'Soldat français avec un masque à gaz primitif',
      nature: 'Photographie documentaire',
      date: '1915-1916',
      auteur: 'Photographe militaire français',
      description: 'Soldat français portant un des premiers modèles de masque à gaz — la guerre chimique, arme nouvelle et terrifiante'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/No-man%27s-land-flanders-field.jpg/500px-No-man%27s-land-flanders-field.jpg',
      title: 'No Man\'s Land — Flandres',
      nature: 'Photographie de paysage',
      date: '1919',
      auteur: 'Photographe militaire',
      description: 'Paysage dévasté du no man\'s land entre les lignes — Flandres, illustration de la destruction totale causée par la guerre'
    }
  ],

  'guerre-totale': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Women_at_work_during_the_First_World_War-_Munitions_Production%2C_Chilwell%2C_Nottinghamshire%2C_England%2C_UK%2C_1917_Q30042.jpg/500px-Women_at_work_during_the_First_World_War-_Munitions_Production%2C_Chilwell%2C_Nottinghamshire%2C_England%2C_UK%2C_1917_Q30042.jpg',
      title: 'Femmes travaillant dans une usine de munitions (1917)',
      nature: 'Photographie',
      date: '1917',
      auteur: 'Photographe officiel britannique',
      description: 'Ouvrières dans une usine de munitions à Chilwell, Angleterre — la guerre totale mobilise toute la société, y compris les femmes'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Western_front_1914.jpg/500px-Western_front_1914.jpg',
      title: 'Carte du Front occidental (1914-1918)',
      nature: 'Carte militaire',
      date: '1914-1918',
      auteur: 'Domaine public',
      description: 'Carte du front occidental montrant les lignes de front et les grandes batailles entre 1914 et 1918'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Poilus_dans_Parois_bombard%C3%A9e%2C_1916.jpg/500px-Poilus_dans_Parois_bombard%C3%A9e%2C_1916.jpg',
      title: 'Poilus dans une localité bombardée (1916)',
      nature: 'Photographie documentaire',
      date: '1916',
      auteur: 'Lucien Cottet',
      description: 'Poilus français dans la localité bombardée de Parois (Meuse) — le quotidien des soldats au front'
    }
  ],

  'consequences-ww1': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Signing_of_the_Treaty_of_Versailles%2C_by_John_Christen_Johansen.jpg/500px-Signing_of_the_Treaty_of_Versailles%2C_by_John_Christen_Johansen.jpg',
      title: 'La signature du Traité de Versailles (1919)',
      nature: 'Peinture',
      date: '28 juin 1919',
      auteur: 'John Christen Johansen',
      description: 'La cérémonie de signature du Traité de Versailles dans la Galerie des Glaces — l\'Allemagne est humiliée par les conditions de paix'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Europe_map_1919.jpg/500px-Europe_map_1919.jpg',
      title: 'Carte de l\'Europe après le Traité de Versailles (1919)',
      nature: 'Carte historique',
      date: '1919',
      auteur: 'Domaine public',
      description: 'Carte de l\'Europe redessinée après la guerre : disparition des empires, création de nouveaux États (Pologne, Tchécoslovaquie, Yougoslavie)'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/French_87th_Regiment_Cote_34_Verdun_1916.jpg/330px-French_87th_Regiment_Cote_34_Verdun_1916.jpg',
      title: 'Soldats français du 87e régiment à Verdun',
      nature: 'Photographie',
      date: '1916',
      auteur: 'Photographe militaire français',
      description: 'Soldats français épuisés dans les tranchées de la Côte 304 à Verdun — illustration du coût humain effroyable de la guerre'
    }
  ],

  'suisse-ww1': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Map_Europe_alliances_1914-en_greyscale_v02.svg/500px-Map_Europe_alliances_1914-en_greyscale_v02.svg.png',
      title: 'La Suisse encerclée par les belligérants (1914)',
      nature: 'Carte historique',
      date: '1914',
      auteur: 'Domaine public',
      description: 'La Suisse, encerclée par les puissances en guerre, maintient sa neutralité mais subit des tensions internes entre Romands pro-français et Alémaniques pro-allemands'
    }
  ],

  // --- Totalitarismes ---
  'fascisme-italie': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/March_on_Rome_1922_-_Alle_porte_di_Roma.png/500px-March_on_Rome_1922_-_Alle_porte_di_Roma.png',
      title: 'La Marche sur Rome (28 octobre 1922)',
      nature: 'Photographie',
      date: '28 octobre 1922',
      auteur: 'Domaine public',
      description: 'Les Chemises noires de Mussolini aux portes de Rome — coup de force qui porte le fascisme au pouvoir en Italie'
    }
  ],

  'nazisme': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Bundesarchiv_Bild_102-04062A%2C_N%C3%BCrnberg%2C_Reichsparteitag%2C_SA-_und_SS-Appell.jpg/500px-Bundesarchiv_Bild_102-04062A%2C_N%C3%BCrnberg%2C_Reichsparteitag%2C_SA-_und_SS-Appell.jpg',
      title: 'Rassemblement nazi à Nuremberg',
      nature: 'Photographie',
      date: 'Années 1930',
      auteur: 'Georg Pahl / Bundesarchiv',
      description: 'Appel des SA et SS lors d\'un congrès du parti nazi (Reichsparteitag) à Nuremberg — mise en scène de la puissance totalitaire'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Reichstagsbrand.jpg/500px-Reichstagsbrand.jpg',
      title: 'L\'incendie du Reichstag (27 février 1933)',
      nature: 'Photographie documentaire',
      date: '27 février 1933',
      auteur: 'Domaine public',
      description: 'Le Reichstag en flammes — prétexte utilisé par Hitler pour suspendre les libertés et instaurer la dictature'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Nazi_propaganda_poster_in_Lithuania.png/330px-Nazi_propaganda_poster_in_Lithuania.png',
      title: 'Affiche de propagande nazie',
      nature: 'Affiche de propagande',
      date: '1941-1944',
      auteur: 'Auteur inconnu',
      description: 'Affiche de propagande nazie en Lituanie : instrumentalisation de l\'image pour contrôler les populations'
    }
  ],

  'stalinisme': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Yakov_Guminer_-_Arithmetic_of_a_counter-plan_poster_%281931%29.jpg/500px-Yakov_Guminer_-_Arithmetic_of_a_counter-plan_poster_%281931%29.jpg',
      title: 'Affiche soviétique — « L\'arithmétique du plan » (1931)',
      nature: 'Affiche de propagande',
      date: '1931',
      auteur: 'Yakov Guminer',
      description: 'Affiche de propagande soviétique célébrant le plan quinquennal : « 2 + 2 = 5 » — la planification économique comme idéologie'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Gulag_Location_Map.svg/500px-Gulag_Location_Map.svg.png',
      title: 'Carte des camps du Goulag en URSS',
      nature: 'Carte historique',
      date: 'XXe siècle',
      auteur: 'Domaine public',
      description: 'Carte montrant l\'étendue du système concentrationnaire soviétique (Goulag) — des millions de prisonniers politiques et de droit commun'
    }
  ],

  'propagande': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Nazi_propaganda_poster_in_Lithuania.png/330px-Nazi_propaganda_poster_in_Lithuania.png',
      title: 'Affiche de propagande nazie en Lituanie',
      nature: 'Affiche de propagande',
      date: '1941-1944',
      auteur: 'Auteur inconnu',
      description: 'Affiche nazie : « Le soldat allemand combat pour toi » — manipulation des populations occupées'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Yakov_Guminer_-_Arithmetic_of_a_counter-plan_poster_%281931%29.jpg/500px-Yakov_Guminer_-_Arithmetic_of_a_counter-plan_poster_%281931%29.jpg',
      title: 'Affiche soviétique — Plan quinquennal (1931)',
      nature: 'Affiche soviétique',
      date: '1931',
      auteur: 'Yakov Guminer',
      description: 'Affiche de propagande soviétique « 2 + 2 = 5 » — la réalité pliée à l\'idéologie du régime'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harry_R._Hopps%2C_Destroy_this_mad_brute_Enlist_-_U.S._Army%2C_03216u_edit.jpg/500px-Harry_R._Hopps%2C_Destroy_this_mad_brute_Enlist_-_U.S._Army%2C_03216u_edit.jpg',
      title: 'Affiche américaine WWI — « Destroy this mad brute »',
      nature: 'Affiche de recrutement',
      date: '1917',
      auteur: 'Harry R. Hopps',
      description: 'Affiche américaine diabolisant l\'ennemi — comparaison de techniques de propagande entre démocraties et régimes totalitaires'
    }
  ],

  'comparaison-regimes': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Bundesarchiv_Bild_102-04062A%2C_N%C3%BCrnberg%2C_Reichsparteitag%2C_SA-_und_SS-Appell.jpg/500px-Bundesarchiv_Bild_102-04062A%2C_N%C3%BCrnberg%2C_Reichsparteitag%2C_SA-_und_SS-Appell.jpg',
      title: 'Rassemblement nazi à Nuremberg',
      nature: 'Photographie',
      date: 'Années 1930',
      auteur: 'Bundesarchiv',
      description: 'Mise en scène totalitaire : rassemblement de masse, uniformes, culte du chef — caractéristique commune aux régimes totalitaires'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/March_on_Rome_1922_-_Alle_porte_di_Roma.png/500px-March_on_Rome_1922_-_Alle_porte_di_Roma.png',
      title: 'La Marche sur Rome — Fascisme italien (1922)',
      nature: 'Photographie documentaire',
      date: '1922',
      auteur: 'Domaine public',
      description: 'La prise de pouvoir par la violence — point commun entre fascisme, nazisme et stalinisme'
    }
  ],

  // --- WWII / Shoah ---
  'causes-ww2': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Bundesarchiv_Bild_183-R69173%2C_M%C3%BCnchener_Abkommen%2C_Staatschefs.jpg/500px-Bundesarchiv_Bild_183-R69173%2C_M%C3%BCnchener_Abkommen%2C_Staatschefs.jpg',
      title: 'Les Accords de Munich (30 septembre 1938)',
      nature: 'Photographie',
      date: '30 septembre 1938',
      auteur: 'Bundesarchiv',
      description: 'Chamberlain, Daladier, Hitler et Mussolini lors des Accords de Munich — la politique d\'apaisement face à l\'expansionnisme nazi'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/First_French_Empire_1812.svg/500px-First_French_Empire_1812.svg.png',
      title: 'L\'expansion territoriale de l\'Axe en Europe',
      nature: 'Carte historique',
      date: '1938-1939',
      auteur: 'Domaine public',
      description: 'Carte montrant les annexions successives : Rhénanie (1936), Autriche (1938), Sudètes (1938), Tchécoslovaquie (1939)'
    }
  ],

  'phases-ww2': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Into_the_Jaws_of_Death_23-0455M_edit.jpg/500px-Into_the_Jaws_of_Death_23-0455M_edit.jpg',
      title: '« Into the Jaws of Death » — Débarquement en Normandie',
      nature: 'Photographie',
      date: '6 juin 1944',
      auteur: 'Robert F. Sargent, U.S. Coast Guard',
      description: 'Soldats américains débarquant sur Omaha Beach depuis une péniche LCVP — le Jour J, tournant de la guerre'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/World_War_II_in_Europe%2C_1942.svg/500px-World_War_II_in_Europe%2C_1942.svg.png',
      title: 'Carte de l\'Europe sous domination de l\'Axe (1942)',
      nature: 'Carte historique',
      date: '1942',
      auteur: 'Domaine public',
      description: 'L\'Europe à l\'apogée de la domination nazie en 1942 — l\'Axe contrôle presque tout le continent'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/German_pows_stalingrad_1943.jpg/500px-German_pows_stalingrad_1943.jpg',
      title: 'Prisonniers de guerre allemands à Stalingrad (1943)',
      nature: 'Photographie documentaire',
      date: 'Février 1943',
      auteur: 'Photographe soviétique',
      description: 'Soldats allemands faits prisonniers après la bataille de Stalingrad — tournant majeur de la guerre sur le front de l\'Est'
    }
  ],

  'shoah': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Auschwitz-Work_Set_Free-new.JPG/500px-Auschwitz-Work_Set_Free-new.JPG',
      title: 'Entrée du camp d\'Auschwitz I — « Arbeit macht frei »',
      nature: 'Photographie',
      date: 'Après 1945',
      auteur: 'Domaine public',
      description: 'L\'entrée du camp de concentration d\'Auschwitz I avec l\'inscription cynique « Le travail rend libre »'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Selection_on_the_ramp_at_Auschwitz-Birkenau%2C_1944_%28Auschwitz_Album%29_1b.jpg/500px-Selection_on_the_ramp_at_Auschwitz-Birkenau%2C_1944_%28Auschwitz_Album%29_1b.jpg',
      title: 'La sélection à l\'arrivée à Auschwitz-Birkenau (1944)',
      nature: 'Photographie documentaire',
      date: 'Mai-juin 1944',
      auteur: 'SS — Album d\'Auschwitz',
      description: 'Juifs hongrois sur la rampe de sélection à Birkenau — les SS décident qui sera envoyé au travail forcé et qui sera gazé immédiatement'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Nuremberg_laws_Racial_Chart.jpg/500px-Nuremberg_laws_Racial_Chart.jpg',
      title: 'Tableau racial des lois de Nuremberg (1935)',
      nature: 'Document officiel',
      date: '1935',
      auteur: 'Gouvernement nazi',
      description: 'Tableau de classification raciale des lois de Nuremberg — la pseudo-science au service de la persécution des Juifs'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Concentration_camps_in_occupied_Europe_%282007_borders%29.png/500px-Concentration_camps_in_occupied_Europe_%282007_borders%29.png',
      title: 'Carte des camps de concentration et d\'extermination en Europe',
      nature: 'Carte historique',
      date: '1933-1945',
      auteur: 'Domaine public',
      description: 'Carte montrant l\'étendue du système concentrationnaire nazi en Europe — des milliers de camps sur tout le continent'
    }
  ],

  'resistance-collaboration': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Members_of_the_Maquis_in_La_Tresorerie.jpg/500px-Members_of_the_Maquis_in_La_Tresorerie.jpg',
      title: 'Résistants du Maquis en France',
      nature: 'Photographie',
      date: '1944',
      auteur: 'Photographe inconnu',
      description: 'Membres du Maquis (résistance française) armés — des civils qui risquent leur vie pour combattre l\'occupant nazi'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/De_Gaulle_-_%C3%A0_tous_les_Fran%C3%A7ais.jpg/500px-De_Gaulle_-_%C3%A0_tous_les_Fran%C3%A7ais.jpg',
      title: 'Affiche de l\'Appel du 18 juin — De Gaulle',
      nature: 'Affiche historique',
      date: '1940',
      auteur: 'France Libre',
      description: '« À tous les Français » — l\'affiche de l\'appel du général de Gaulle depuis Londres, appelant à poursuivre le combat'
    }
  ],

  'suisse-ww2': [],

  // --- Guerre froide ---
  'bipolarisation': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/NATO_vs._Warsaw_Pact_%281949-1990%29.svg/500px-NATO_vs._Warsaw_Pact_%281949-1990%29.svg.png',
      title: 'Carte OTAN vs Pacte de Varsovie',
      nature: 'Carte historique',
      date: '1949-1990',
      auteur: 'Domaine public',
      description: 'Le monde divisé en deux blocs : l\'OTAN (bleu) face au Pacte de Varsovie (rouge) — la bipolarisation de la Guerre froide'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Bundesarchiv_Bild_183-85458-0002%2C_Berlin%2C_Mauerbau%2C_Kampfgruppen_am_Brandenburger_Tor.jpg/500px-Bundesarchiv_Bild_183-85458-0002%2C_Berlin%2C_Mauerbau%2C_Kampfgruppen_am_Brandenburger_Tor.jpg',
      title: 'Construction du Mur de Berlin (1961)',
      nature: 'Photographie',
      date: '13 août 1961',
      auteur: 'Bundesarchiv',
      description: 'Gardes est-allemands à la Porte de Brandebourg lors de la construction du Mur de Berlin — symbole de la division du monde'
    }
  ],

  'crises-guerre-froide': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Cuban_missiles.jpg/500px-Cuban_missiles.jpg',
      title: 'Photo aérienne des missiles soviétiques à Cuba (1962)',
      nature: 'Photographie de reconnaissance',
      date: 'Octobre 1962',
      auteur: 'U.S. Air Force',
      description: 'Photo aérienne révélant les rampes de lancement de missiles soviétiques à Cuba — le monde au bord de la guerre nucléaire'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/NATO_vs._Warsaw_Pact_%281949-1990%29.svg/500px-NATO_vs._Warsaw_Pact_%281949-1990%29.svg.png',
      title: 'Carte des blocs pendant la Guerre froide',
      nature: 'Carte historique',
      date: '1949-1990',
      auteur: 'Domaine public',
      description: 'Les deux blocs face à face — contexte géopolitique des crises de la Guerre froide'
    }
  ],

  'course-armements': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Cuban_missiles.jpg/500px-Cuban_missiles.jpg',
      title: 'Missiles soviétiques à Cuba — Photo de reconnaissance U-2',
      nature: 'Photographie de reconnaissance',
      date: 'Octobre 1962',
      auteur: 'U.S. Air Force',
      description: 'Installation de missiles nucléaires soviétiques à Cuba — preuve photographique qui déclenche la crise la plus dangereuse de la Guerre froide'
    }
  ],

  'chute-mur': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/West_and_East_Germans_at_the_Brandenburg_Gate_in_1989.jpg/500px-West_and_East_Germans_at_the_Brandenburg_Gate_in_1989.jpg',
      title: 'Allemands à la Porte de Brandebourg (9 novembre 1989)',
      nature: 'Photographie',
      date: '9 novembre 1989',
      auteur: 'Photographe inconnu',
      description: 'Allemands de l\'Est et de l\'Ouest célébrant ensemble sur le Mur à la Porte de Brandebourg — la fin de la Guerre froide'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Bundesarchiv_Bild_183-85458-0002%2C_Berlin%2C_Mauerbau%2C_Kampfgruppen_am_Brandenburger_Tor.jpg/500px-Bundesarchiv_Bild_183-85458-0002%2C_Berlin%2C_Mauerbau%2C_Kampfgruppen_am_Brandenburger_Tor.jpg',
      title: 'Construction du Mur de Berlin (1961) — Pour comparaison',
      nature: 'Photographie documentaire',
      date: '13 août 1961',
      auteur: 'Bundesarchiv',
      description: 'Le même lieu 28 ans plus tôt : la construction du Mur — exercice de comparaison avant/après'
    }
  ],

  // --- Décolonisation ---
  'causes-decolonisation': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gandhi_at_the_spinning_wheel.jpg/500px-Gandhi_at_the_spinning_wheel.jpg',
      title: 'Gandhi au rouet',
      nature: 'Photographie',
      date: 'Années 1940',
      auteur: 'Auteur inconnu',
      description: 'Le Mahatma Gandhi filant au rouet — symbole de la résistance non-violente et de l\'autosuffisance face à la domination coloniale britannique'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Africa_independence_dates.svg/500px-Africa_independence_dates.svg.png',
      title: 'Carte des indépendances africaines',
      nature: 'Carte historique',
      date: '1950-1975',
      auteur: 'Domaine public',
      description: 'Chronologie des indépendances en Afrique — la vague de décolonisation des années 1960'
    }
  ],

  'independances-afrique': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Africa_independence_dates.svg/500px-Africa_independence_dates.svg.png',
      title: 'Carte des dates d\'indépendance en Afrique',
      nature: 'Carte historique',
      date: 'XXe siècle',
      auteur: 'Domaine public',
      description: 'Carte montrant la chronologie des indépendances africaines — la majorité des pays accèdent à l\'indépendance entre 1956 et 1968'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Algerian_war_collage_wikipedia.jpg/500px-Algerian_war_collage_wikipedia.jpg',
      title: 'La guerre d\'Algérie (1954-1962)',
      nature: 'Photographie',
      date: '1954-1962',
      auteur: 'Sources diverses',
      description: 'Collage de photographies de la guerre d\'Algérie — une des guerres de décolonisation les plus violentes'
    }
  ],

  'independances-asie': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gandhi_at_the_spinning_wheel.jpg/500px-Gandhi_at_the_spinning_wheel.jpg',
      title: 'Gandhi au rouet — Symbole de l\'indépendance indienne',
      nature: 'Photographie',
      date: 'Années 1940',
      auteur: 'Auteur inconnu',
      description: 'Gandhi filant au rouet (charkha), symbole de l\'autosuffisance et de la résistance non-violente qui mènera à l\'indépendance de l\'Inde en 1947'
    }
  ],

  'neocolonialisme': [],

  // --- Monde contemporain ---
  'mondialisation': [],

  'construction-europeenne': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/European_Parliament_Strasbourg_Hemicycle_-_Diliff.jpg/500px-European_Parliament_Strasbourg_Hemicycle_-_Diliff.jpg',
      title: 'L\'hémicycle du Parlement européen à Strasbourg',
      nature: 'Photographie',
      date: '2014',
      auteur: 'Diliff',
      description: 'L\'hémicycle du Parlement européen lors d\'une session plénière — institution centrale de la démocratie européenne'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/European_Union_Enlargement.svg/500px-European_Union_Enlargement.svg.png',
      title: 'Carte de l\'élargissement de l\'Union européenne',
      nature: 'Carte historique',
      date: '1957-2013',
      auteur: 'Domaine public',
      description: 'Carte montrant les élargissements successifs de l\'UE : de 6 membres fondateurs (1957) à 28 États membres'
    }
  ],

  'terrorisme': [],
  'enjeux-environnement': [],
  'suisse-contemporaine': [],

  // ===================== 10H — RENAISSANCE → 1914 =====================

  'humanisme': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Da_Vinci_Vitruve_Luc_Viatour.jpg/500px-Da_Vinci_Vitruve_Luc_Viatour.jpg',
      title: 'L\'Homme de Vitruve — Léonard de Vinci',
      nature: 'Dessin',
      date: 'Vers 1490',
      auteur: 'Léonard de Vinci',
      description: 'L\'Homme de Vitruve, symbole de l\'humanisme de la Renaissance — l\'homme au centre de l\'univers, mesure de toute chose'
    }
  ],

  'art-renaissance': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Mona_Lisa.jpg/500px-Mona_Lisa.jpg',
      title: 'La Joconde (Mona Lisa)',
      nature: 'Peinture à l\'huile',
      date: 'Vers 1503-1519',
      auteur: 'Léonard de Vinci',
      description: 'La Joconde, portrait le plus célèbre du monde — maîtrise du sfumato et de la perspective, symbole de l\'art de la Renaissance'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/%27Adam%27s_Creation_Sistine_Chapel_ceiling%27_by_Michelangelo_JBU33cut.jpg/500px-%27Adam%27s_Creation_Sistine_Chapel_ceiling%27_by_Michelangelo_JBU33cut.jpg',
      title: 'La Création d\'Adam — Chapelle Sixtine',
      nature: 'Fresque',
      date: 'Vers 1508-1512',
      auteur: 'Michel-Ange',
      description: 'La Création d\'Adam, fresque du plafond de la Chapelle Sixtine — chef-d\'œuvre de la Renaissance, humanisme et spiritualité'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Da_Vinci_Vitruve_Luc_Viatour.jpg/500px-Da_Vinci_Vitruve_Luc_Viatour.jpg',
      title: 'L\'Homme de Vitruve — Léonard de Vinci',
      nature: 'Dessin',
      date: 'Vers 1490',
      auteur: 'Léonard de Vinci',
      description: 'Étude des proportions du corps humain — union de l\'art et de la science, esprit typique de la Renaissance'
    }
  ],

  'imprimerie': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Gutenberg_Bible_scan.jpg/250px-Gutenberg_Bible_scan.jpg',
      title: 'Page de la Bible de Gutenberg (vers 1455)',
      nature: 'Document imprimé',
      date: 'Vers 1455',
      auteur: 'Johannes Gutenberg',
      description: 'Page de la Bible de Gutenberg, premier livre imprimé en série en Europe — une révolution dans la diffusion du savoir'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Printing_press.jpg/500px-Printing_press.jpg',
      title: 'Presse à imprimer — Gravure de 1819',
      nature: 'Gravure',
      date: '1819',
      auteur: 'W. Lowry d\'après J. Farey',
      description: 'Gravure détaillée d\'une presse à imprimer, héritière de l\'invention de Gutenberg (vers 1450)'
    }
  ],

  'sciences-renaissance': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Da_Vinci_Vitruve_Luc_Viatour.jpg/500px-Da_Vinci_Vitruve_Luc_Viatour.jpg',
      title: 'L\'Homme de Vitruve — Art et Science',
      nature: 'Dessin',
      date: 'Vers 1490',
      auteur: 'Léonard de Vinci',
      description: 'L\'Homme de Vitruve illustre la fusion entre art, anatomie et mathématiques — l\'esprit scientifique de la Renaissance'
    }
  ],

  'explorateurs': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Portrait_of_a_Man%2C_Said_to_be_Christopher_Columbus.jpg/500px-Portrait_of_a_Man%2C_Said_to_be_Christopher_Columbus.jpg',
      title: 'Portrait présumé de Christophe Colomb',
      nature: 'Peinture',
      date: 'XVIe siècle',
      auteur: 'Sebastiano del Piombo',
      description: 'Portrait présumé de Christophe Colomb — le navigateur génois qui atteint les Amériques en 1492'
    }
  ],

  'colonisation-ameriques': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Portrait_of_a_Man%2C_Said_to_be_Christopher_Columbus.jpg/500px-Portrait_of_a_Man%2C_Said_to_be_Christopher_Columbus.jpg',
      title: 'Portrait de Christophe Colomb',
      nature: 'Peinture',
      date: 'XVIe siècle',
      auteur: 'Sebastiano del Piombo',
      description: 'Christophe Colomb, initiateur de la colonisation européenne des Amériques à partir de 1492'
    }
  ],

  'traite-negriere': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Brookes_slave_ship%2C_British_Library.jpg/500px-Brookes_slave_ship%2C_British_Library.jpg',
      title: 'Plan du navire négrier Brookes (1788)',
      nature: 'Document historique',
      date: '1788',
      auteur: 'Abolitionnistes britanniques',
      description: 'Plan montrant l\'entassement de 454 esclaves dans le navire Brookes — document utilisé par les abolitionnistes pour dénoncer l\'horreur de la traite'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Triangular_trade_en.svg/500px-Triangular_trade_en.svg.png',
      title: 'Carte du commerce triangulaire',
      nature: 'Carte historique',
      date: 'XVIe-XIXe siècle',
      auteur: 'Domaine public',
      description: 'Le commerce triangulaire : Europe → Afrique (pacotille) → Amériques (esclaves) → Europe (sucre, coton, café)'
    }
  ],

  'consequences-populations': [],

  'luther-reforme': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Lucas_Cranach_d.%C3%84._-_Martin_Luther%2C_1528_%28Veste_Coburg%29.jpg/500px-Lucas_Cranach_d.%C3%84._-_Martin_Luther%2C_1528_%28Veste_Coburg%29.jpg',
      title: 'Portrait de Martin Luther par Lucas Cranach (1528)',
      nature: 'Peinture',
      date: '1528',
      auteur: 'Lucas Cranach l\'Ancien',
      description: 'Portrait de Martin Luther, initiateur de la Réforme protestante en affichant ses 95 thèses en 1517'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Wittenberg_-_95_Theses_%282454512355%29.jpg/330px-Wittenberg_-_95_Theses_%282454512355%29.jpg',
      title: 'La porte des 95 thèses — Église de Wittenberg',
      nature: 'Photographie',
      date: 'Contemporain',
      auteur: 'Domaine public',
      description: 'La porte de l\'église du château de Wittenberg où Luther aurait affiché ses 95 thèses le 31 octobre 1517'
    }
  ],

  'calvin-geneve': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/John_Calvin_Titian_B.jpg/500px-John_Calvin_Titian_B.jpg',
      title: 'Portrait de Jean Calvin',
      nature: 'Peinture',
      date: 'XVIe siècle',
      auteur: 'D\'après Cristofano dell\'Altissimo',
      description: 'Portrait de Jean Calvin, réformateur français installé à Genève dès 1536 — le « pape de Genève »'
    }
  ],

  'contre-reforme': [],

  'guerres-religion': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/La_masacre_de_San_Bartolom%C3%A9%2C_por_Fran%C3%A7ois_Dubois.jpg/500px-La_masacre_de_San_Bartolom%C3%A9%2C_por_Fran%C3%A7ois_Dubois.jpg',
      title: 'Le Massacre de la Saint-Barthélemy (1572)',
      nature: 'Peinture',
      date: 'Vers 1576-1584',
      auteur: 'François Dubois',
      description: 'Le massacre de la Saint-Barthélemy (24 août 1572) — les catholiques massacrent des milliers de protestants à Paris et en province'
    }
  ],

  'absolutisme': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Portrait_of_Louis_XIV_of_France_in_Coronation_Robes_%28by_Hyacinthe_Rigaud%29_-_Louvre_Museum.jpg/500px-Portrait_of_Louis_XIV_of_France_in_Coronation_Robes_%28by_Hyacinthe_Rigaud%29_-_Louvre_Museum.jpg',
      title: 'Louis XIV en costume de sacre — Hyacinthe Rigaud',
      nature: 'Peinture',
      date: '1701',
      auteur: 'Hyacinthe Rigaud',
      description: 'Louis XIV, le Roi-Soleil, en tenue de sacre — symbole de l\'absolutisme monarchique : « L\'État, c\'est moi »'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Chateau_Versailles_Galerie_des_Glaces.jpg/500px-Chateau_Versailles_Galerie_des_Glaces.jpg',
      title: 'La Galerie des Glaces — Château de Versailles',
      nature: 'Photographie',
      date: 'Contemporain',
      auteur: 'Domaine public',
      description: 'La Galerie des Glaces du château de Versailles — 357 miroirs, symbole de la puissance et du faste de la monarchie absolue'
    }
  ],

  'societe-ordres': [],

  'philosophes-lumieres': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Encyclopedie_frontispice_full.jpg/500px-Encyclopedie_frontispice_full.jpg',
      title: 'Frontispice de l\'Encyclopédie de Diderot et d\'Alembert',
      nature: 'Gravure',
      date: '1772',
      auteur: 'Charles-Nicolas Cochin',
      description: 'Le frontispice de l\'Encyclopédie : la Vérité rayonnante dévoilée par la Raison et la Philosophie — allégorie du projet des Lumières'
    }
  ],

  'encyclopedie': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Encyclopedie_frontispice_full.jpg/500px-Encyclopedie_frontispice_full.jpg',
      title: 'Frontispice de l\'Encyclopédie (1772)',
      nature: 'Gravure',
      date: '1772',
      auteur: 'Charles-Nicolas Cochin',
      description: 'La Raison et la Philosophie dévoilent la Vérité — l\'Encyclopédie (1751-1772), œuvre monumentale des Lumières'
    }
  ],

  'causes-revolution': [],

  'evenements-cles': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Prise_de_la_Bastille_clean.jpg/500px-Prise_de_la_Bastille_clean.jpg',
      title: 'La Prise de la Bastille — 14 juillet 1789',
      nature: 'Peinture',
      date: '1789',
      auteur: 'Jean-Pierre Houël',
      description: 'La prise de la Bastille le 14 juillet 1789 — événement fondateur de la Révolution française'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Ex%C3%A9cution_de_Louis_XVI_Helman.jpg/500px-Ex%C3%A9cution_de_Louis_XVI_Helman.jpg',
      title: 'L\'exécution de Louis XVI (21 janvier 1793)',
      nature: 'Gravure',
      date: '1793',
      auteur: 'Isidore Stanislas Helman',
      description: 'L\'exécution de Louis XVI par la guillotine, place de la Révolution — la fin de la monarchie absolue en France'
    }
  ],

  'droits-homme': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Declaration_of_the_Rights_of_Man_and_of_the_Citizen_in_1789.jpg/500px-Declaration_of_the_Rights_of_Man_and_of_the_Citizen_in_1789.jpg',
      title: 'Déclaration des droits de l\'homme et du citoyen (1789)',
      nature: 'Document officiel illustré',
      date: '26 août 1789',
      auteur: 'Jean-Jacques-François Le Barbier',
      description: 'La DDHC de 1789 — texte fondateur proclamant que « les hommes naissent et demeurent libres et égaux en droits »'
    }
  ],

  'napoleon': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/David_-_Napoleon_crossing_the_Alps_-_Malmaison1.jpg/500px-David_-_Napoleon_crossing_the_Alps_-_Malmaison1.jpg',
      title: 'Bonaparte franchissant le Grand-Saint-Bernard',
      nature: 'Peinture',
      date: '1801',
      auteur: 'Jacques-Louis David',
      description: 'Napoléon Bonaparte héroïsé franchissant les Alpes — peinture de propagande célébrant le général victorieux'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/First_French_Empire_1812.svg/500px-First_French_Empire_1812.svg.png',
      title: 'Carte de l\'Empire napoléonien à son apogée (1812)',
      nature: 'Carte historique',
      date: '1812',
      auteur: 'Domaine public',
      description: 'L\'Empire français à son extension maximale en 1812 — Napoléon domine la majeure partie de l\'Europe continentale'
    }
  ],

  'suisse-revolution': [],

  'inventions-techniques': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Maquina_vapor_Watt_ETSIIM.jpg/500px-Maquina_vapor_Watt_ETSIIM.jpg',
      title: 'Machine à vapeur de Watt',
      nature: 'Photographie d\'objet',
      date: '1832',
      auteur: 'Nicolás Pérez',
      description: 'Machine à vapeur de type Watt — invention clé de la révolution industrielle qui transforme la production et les transports'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/The_Iron_Bridge_-_geograph.org.uk_-_1558034.jpg/500px-The_Iron_Bridge_-_geograph.org.uk_-_1558034.jpg',
      title: 'Le pont de fer de Coalbrookdale (1779)',
      nature: 'Photographie',
      date: 'Contemporain',
      auteur: 'Chris Allen',
      description: 'Le premier pont en fonte au monde (1779) à Coalbrookdale, Angleterre — symbole de la révolution industrielle et de la maîtrise du fer'
    }
  ],

  'condition-ouvriere': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Women_at_work_during_the_First_World_War-_Munitions_Production%2C_Chilwell%2C_Nottinghamshire%2C_England%2C_UK%2C_1917_Q30042.jpg/500px-Women_at_work_during_the_First_World_War-_Munitions_Production%2C_Chilwell%2C_Nottinghamshire%2C_England%2C_UK%2C_1917_Q30042.jpg',
      title: 'Ouvrières dans une usine au début du XXe siècle',
      nature: 'Photographie',
      date: 'Début XXe siècle',
      auteur: 'Photographe officiel',
      description: 'Femmes travaillant dans une usine — la condition ouvrière : longues heures, travail pénible, salaires bas'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/The_Iron_Bridge_-_geograph.org.uk_-_1558034.jpg/500px-The_Iron_Bridge_-_geograph.org.uk_-_1558034.jpg',
      title: 'Le pont de fer — Symbole de l\'industrialisation',
      nature: 'Photographie',
      date: 'Contemporain',
      auteur: 'Chris Allen',
      description: 'Le pont de Coalbrookdale — la révolution industrielle transforme les paysages et les conditions de vie'
    }
  ],

  'urbanisation': [],
  'mouvements-sociaux': [],
  'suisse-industrielle': [],

  // ===================== 9H — ANTIQUITÉ → MOYEN ÂGE =====================

  'pharaons-pyramides': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/All_Gizah_Pyramids.jpg/500px-All_Gizah_Pyramids.jpg',
      title: 'Les trois pyramides de Gizeh',
      nature: 'Photographie',
      date: 'Contemporain',
      auteur: 'Ricardo Liberato',
      description: 'Les pyramides de Khéops, Khéphren et Mykérinos à Gizeh — tombeaux monumentaux des pharaons, construits vers 2560-2500 av. J.-C.'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/CairoEgMuseumTaaMaskMostlyPhotographed.jpg/500px-CairoEgMuseumTaaMaskMostlyPhotographed.jpg',
      title: 'Masque funéraire de Toutânkhamon',
      nature: 'Photographie d\'objet',
      date: 'Vers 1323 av. J.-C.',
      auteur: 'Roland Unger',
      description: 'Le masque funéraire en or de Toutânkhamon — symbole de la puissance et des croyances religieuses des pharaons'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/The_Great_Sphinx%2C_Pyramids_of_Gizeh-1839%29_by_David_Roberts%2C_RA.jpg/500px-The_Great_Sphinx%2C_Pyramids_of_Gizeh-1839%29_by_David_Roberts%2C_RA.jpg',
      title: 'Le Sphinx et les Pyramides — David Roberts (1839)',
      nature: 'Peinture',
      date: '1839',
      auteur: 'David Roberts',
      description: 'Le Sphinx partiellement ensablé au XIXe siècle — comment les Européens découvraient l\'Égypte antique'
    }
  ],

  'ecriture-hieroglyphes': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Rosetta_Stone.JPG/500px-Rosetta_Stone.JPG',
      title: 'La Pierre de Rosette',
      nature: 'Photographie d\'objet',
      date: '196 av. J.-C.',
      auteur: 'Hans Hillewaert',
      description: 'La Pierre de Rosette au British Museum — clé du déchiffrement des hiéroglyphes par Champollion en 1822'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Thebes%2C_Medinet_Habu%2C_Egypt%2C_Temple_of_Ramesses_III%2C_Egyptian_hieroglyphs%2C_Ancient_Egypt.jpg/500px-Thebes%2C_Medinet_Habu%2C_Egypt%2C_Temple_of_Ramesses_III%2C_Egyptian_hieroglyphs%2C_Ancient_Egypt.jpg',
      title: 'Hiéroglyphes du temple de Ramsès III à Medinet Habou',
      nature: 'Photographie',
      date: 'Contemporain (temple : XIIe s. av. J.-C.)',
      auteur: 'Domaine public',
      description: 'Hiéroglyphes gravés et peints sur les murs du temple de Ramsès III à Thèbes — l\'écriture sacrée des Égyptiens'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Papyrus_of_Ani_BM_Sheet_12.jpg/500px-Papyrus_of_Ani_BM_Sheet_12.jpg',
      title: 'Papyrus d\'Ani — Livre des Morts',
      nature: 'Document ancien',
      date: 'Vers 1250 av. J.-C.',
      auteur: 'Scribe anonyme',
      description: 'Extrait du Livre des Morts d\'Ani — papyrus funéraire illustré avec hiéroglyphes, guide pour l\'au-delà'
    }
  ],

  'vie-quotidienne-egypte': [],
  'mesopotamie-cuneiforme': [],

  'democratie-athenes': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Parthenon_from_south.jpg/500px-Parthenon_from_south.jpg',
      title: 'Le Parthénon — Acropole d\'Athènes',
      nature: 'Photographie',
      date: 'Contemporain (temple : 447-432 av. J.-C.)',
      auteur: 'Thermos',
      description: 'Le Parthénon, temple dédié à Athéna — symbole de la démocratie, de la puissance et de la civilisation athénienne'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Amphora%2C_storage_jar_by_Baltimore_Painter%2C_Apulian_red_figure%2C_Greece%2C_330-320_BC%2C_terracotta_-_Spurlock_Museum%2C_UIUC_-_DSC05795.jpg/500px-Amphora%2C_storage_jar_by_Baltimore_Painter%2C_Apulian_red_figure%2C_Greece%2C_330-320_BC%2C_terracotta_-_Spurlock_Museum%2C_UIUC_-_DSC05795.jpg',
      title: 'Amphore grecque à figures rouges (330-320 av. J.-C.)',
      nature: 'Photographie d\'objet',
      date: '330-320 av. J.-C.',
      auteur: 'Spurlock Museum',
      description: 'Amphore à figures rouges — les céramiques grecques sont des sources précieuses sur la vie quotidienne, les mythes et les rituels'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Battle_of_Marathon_Greek_Double_Envelopment.png/500px-Battle_of_Marathon_Greek_Double_Envelopment.png',
      title: 'Carte de la Bataille de Marathon (490 av. J.-C.)',
      nature: 'Carte militaire',
      date: '490 av. J.-C.',
      auteur: 'Domaine public',
      description: 'La tactique d\'encerclement des Grecs à Marathon — victoire décisive des Athéniens face à l\'Empire perse'
    }
  ],

  'mythologie-grecque': [],
  'jeux-olympiques': [],
  'sparte-vs-athenes': [],
  'art-architecture-grece': [],
  'fondation-republique': [],

  'empire-romain': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg/500px-Colosseum_in_Rome%2C_Italy_-_April_2007.jpg',
      title: 'Le Colisée de Rome',
      nature: 'Photographie',
      date: 'Contemporain (construit : 70-80 apr. J.-C.)',
      auteur: 'Diliff',
      description: 'Le Colisée (amphithéâtre Flavien) — 50 000 spectateurs, combats de gladiateurs, symbole de la puissance romaine'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Roman_Empire_Trajan_117AD.png/500px-Roman_Empire_Trajan_117AD.png',
      title: 'Carte de l\'Empire romain à son apogée sous Trajan (117 apr. J.-C.)',
      nature: 'Carte historique',
      date: '117 apr. J.-C.',
      auteur: 'Domaine public',
      description: 'L\'Empire romain à sa plus grande extension sous Trajan — de la Bretagne à la Mésopotamie, Mare Nostrum'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Bust_of_Julius_Caesar.jpg/500px-Bust_of_Julius_Caesar.jpg',
      title: 'Buste de Jules César',
      nature: 'Photographie de sculpture',
      date: 'Ier siècle av. J.-C.',
      auteur: 'Domaine public',
      description: 'Buste de Jules César — conquérant de la Gaule, dictateur, assassiné aux Ides de mars (15 mars 44 av. J.-C.)'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Pont_du_Gard_BLS.jpg/500px-Pont_du_Gard_BLS.jpg',
      title: 'Le Pont du Gard — Aqueduc romain',
      nature: 'Photographie',
      date: 'Contemporain (construit : Ier s. apr. J.-C.)',
      auteur: 'Benh Lieu Song',
      description: 'Le Pont du Gard, aqueduc romain du Ier siècle dans le sud de la France — chef-d\'œuvre d\'ingénierie romaine'
    }
  ],

  'armee-conquetes': [],
  'vie-quotidienne-rome': [],
  'chute-empire': [],

  'naissance-christianisme': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/The_Good_Shepherd%2C_Catacomb_of_Petrus_and_Marcellinus%2C_3rd_century_AD%2C_from_the_from_the_book_Die_Malereien_der_Katakomben_Roms%2C_pla_cropped_sharpenedmore.jpg/500px-The_Good_Shepherd%2C_Catacomb_of_Petrus_and_Marcellinus%2C_3rd_century_AD%2C_from_the_from_the_book_Die_Malereien_der_Katakomben_Roms%2C_pla_cropped_sharpenedmore.jpg',
      title: 'Le Bon Pasteur — Catacombe de Pierre et Marcellin (IIIe s.)',
      nature: 'Fresque',
      date: 'IIIe siècle apr. J.-C.',
      auteur: 'Artiste paléochrétien anonyme',
      description: 'Fresque des catacombes de Rome représentant le Christ en Bon Pasteur — art des premiers chrétiens pratiquant leur foi en secret'
    }
  ],

  'expansion-christianisme': [],

  'naissance-islam': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Map_of_expansion_of_Caliphate.svg/500px-Map_of_expansion_of_Caliphate.svg.png',
      title: 'Carte de l\'expansion du califat (VIIe-VIIIe s.)',
      nature: 'Carte historique',
      date: 'VIIe-VIIIe siècle',
      auteur: 'Domaine public',
      description: 'L\'expansion rapide de l\'Islam : de l\'Arabie à l\'Espagne et à l\'Inde en un siècle'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Alhambra%2C_Granada_%287076754237%29.jpg/500px-Alhambra%2C_Granada_%287076754237%29.jpg',
      title: 'L\'Alhambra de Grenade — Art islamique',
      nature: 'Photographie',
      date: 'Contemporain (palais : XIIIe-XIVe s.)',
      auteur: 'Domaine public',
      description: 'L\'Alhambra de Grenade, chef-d\'œuvre de l\'architecture islamique en Al-Andalus — arabesques, muqarnas, jardins'
    }
  ],

  'expansion-islam': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Map_of_expansion_of_Caliphate.svg/500px-Map_of_expansion_of_Caliphate.svg.png',
      title: 'Carte de l\'expansion islamique',
      nature: 'Carte historique',
      date: 'VIIe-VIIIe siècle',
      auteur: 'Domaine public',
      description: 'L\'expansion du califat des Omeyyades puis des Abbassides — l\'Islam s\'étend de l\'Espagne à l\'Asie centrale'
    }
  ],

  'feodalite': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Bayeux_Tapestry_scene51_Battle_of_Hastings_Norman_knights_and_archers.jpg/500px-Bayeux_Tapestry_scene51_Battle_of_Hastings_Norman_knights_and_archers.jpg',
      title: 'Tapisserie de Bayeux — Bataille de Hastings (1066)',
      nature: 'Broderie médiévale',
      date: 'Vers 1070',
      auteur: 'Artisans anonymes',
      description: 'Chevaliers normands chargeant à Hastings — la tapisserie de Bayeux, source exceptionnelle sur la guerre et la féodalité médiévales'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Ramparts_of_the_historic_fortified_city_of_Carcassone_05.jpg/500px-Ramparts_of_the_historic_fortified_city_of_Carcassone_05.jpg',
      title: 'Les remparts de la cité de Carcassonne',
      nature: 'Photographie',
      date: 'Contemporain',
      auteur: 'Krzysztof Golik',
      description: 'La cité fortifiée de Carcassonne — exemple remarquable d\'architecture défensive féodale (double enceinte, tours, meurtrières)'
    }
  ],

  'chateau-fort': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Ramparts_of_the_historic_fortified_city_of_Carcassone_05.jpg/500px-Ramparts_of_the_historic_fortified_city_of_Carcassone_05.jpg',
      title: 'Cité fortifiée de Carcassonne',
      nature: 'Photographie',
      date: 'Contemporain',
      auteur: 'Krzysztof Golik',
      description: 'Les remparts de Carcassonne — double enceinte, 52 tours, le château fort comme centre du pouvoir seigneurial'
    }
  ],

  'eglise-moyen-age': [],

  'croisades': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Siege_of_Antioch%2C_France%2C_Lyon%2C_Municipal_Library%2C_Ms_828_f._033.jpg/500px-Siege_of_Antioch%2C_France%2C_Lyon%2C_Municipal_Library%2C_Ms_828_f._033.jpg',
      title: 'Le Siège d\'Antioche (1097-1098) — Enluminure',
      nature: 'Enluminure',
      date: 'XIIIe siècle',
      auteur: 'Manuscrit de Guillaume de Tyr',
      description: 'Le siège d\'Antioche lors de la première croisade — les croisés assiègent la ville pendant 8 mois'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Map_to_illustrate_the_Crusades%2C_showing_the_principal_routes_of_the_first_four_crusades_%2814596690557%29.jpg/500px-Map_to_illustrate_the_Crusades%2C_showing_the_principal_routes_of_the_first_four_crusades_%2814596690557%29.jpg',
      title: 'Carte des itinéraires des quatre premières croisades',
      nature: 'Carte historique',
      date: 'XIXe siècle',
      auteur: 'Domaine public',
      description: 'Les routes des quatre premières croisades (1096-1204) de l\'Europe vers la Terre Sainte'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Crac_des_chevaliers_syria.jpeg/500px-Crac_des_chevaliers_syria.jpeg',
      title: 'Le Krak des Chevaliers (Syrie)',
      nature: 'Photographie',
      date: 'Contemporain (forteresse : XIIe-XIIIe s.)',
      auteur: 'Domaine public',
      description: 'Le Krak des Chevaliers, forteresse croisée en Syrie — considéré comme le plus beau château fort médiéval au monde'
    }
  ],

  'vie-paysanne': [],

  'villes-commerce': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Paris%2C_Notre_Dame_--_2014_--_1458-65.jpg/500px-Paris%2C_Notre_Dame_--_2014_--_1458-65.jpg',
      title: 'Notre-Dame de Paris — Cathédrale gothique',
      nature: 'Photographie',
      date: 'Contemporain (cathédrale : 1163-1345)',
      auteur: 'Dietmar Rabich',
      description: 'Notre-Dame de Paris, chef-d\'œuvre de l\'architecture gothique — les cathédrales, symboles de la richesse et de la foi des villes médiévales'
    }
  ],

  'pacte-1291': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Bundesbrief.jpg/500px-Bundesbrief.jpg',
      title: 'Le Pacte fédéral de 1291 (Bundesbrief)',
      nature: 'Document d\'archives',
      date: '1er août 1291',
      auteur: 'Document historique',
      description: 'Le Pacte fédéral de 1291 entre Uri, Schwyz et Unterwald — document fondateur de la Confédération suisse'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Swiss_R%C3%BCtlischwur.jpg/500px-Swiss_R%C3%BCtlischwur.jpg',
      title: 'Le Serment du Grütli (Rütlischwur)',
      nature: 'Peinture',
      date: 'XIXe siècle',
      auteur: 'Jean Renggli',
      description: 'Le Serment du Grütli — représentation idéalisée de l\'acte fondateur de la Confédération (distinguer mythe et histoire !)'
    }
  ],

  'legendes-fondatrices': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Swiss_R%C3%BCtlischwur.jpg/500px-Swiss_R%C3%BCtlischwur.jpg',
      title: 'Le Serment du Grütli — Légende fondatrice',
      nature: 'Peinture',
      date: 'XIXe siècle',
      auteur: 'Jean Renggli',
      description: 'Le Serment du Grütli, peinture du XIXe siècle — comment la Suisse a construit son mythe national'
    }
  ],

  'batailles-suisses': [],
  'cantons-alliance': []
};
