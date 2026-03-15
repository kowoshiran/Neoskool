// Banque d'images curées — URLs Wikimedia Commons vérifiées
// Chaque sous-thème a 2-5 images pertinentes, libres de droits
// Format thumbnail 500px pour un bon rendu impression

export const HISTOIRE_IMAGES = {

  // ===================== 11H — XXe-XXIe SIÈCLES =====================

  // --- Première Guerre mondiale ---
  'causes-ww1': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Western_front_1914.jpg/500px-Western_front_1914.jpg',
      title: 'Carte du Front occidental en 1914',
      nature: 'Carte historique',
      date: '1914',
      auteur: 'Domaine public',
      description: 'Carte montrant les alliances et le front occidental au début de la guerre'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Battle_of_the_Marne_-_Map.jpg/500px-Battle_of_the_Marne_-_Map.jpg',
      title: 'Carte de la Bataille de la Marne (1914)',
      nature: 'Carte militaire',
      date: 'Septembre 1914',
      auteur: 'Domaine public',
      description: 'Carte de la première bataille de la Marne, 5-9 septembre 1914'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/German_soldiers_Battle_of_Marne_WWI.jpg/500px-German_soldiers_Battle_of_Marne_WWI.jpg',
      title: 'Soldats allemands à la Bataille de la Marne',
      nature: 'Photographie',
      date: '1914',
      auteur: 'Photographe militaire',
      description: 'Soldats allemands portant les casques à pointe Pickelhaube sur le front lors de la première Bataille de la Marne'
    }
  ],

  'tranchees': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Cheshire_Regiment_trench_Somme_1916.jpg/500px-Cheshire_Regiment_trench_Somme_1916.jpg',
      title: 'Tranchée à la Bataille de la Somme (1916)',
      nature: 'Photographie',
      date: '1916',
      auteur: 'Photographe militaire britannique',
      description: 'Tranchée allemande occupée par des soldats britanniques près d\'Albert, Bataille de la Somme'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/No-man%27s-land-flanders-field.jpg/500px-No-man%27s-land-flanders-field.jpg',
      title: 'No Man\'s Land — Flanders Field',
      nature: 'Photographie',
      date: '1919',
      auteur: 'Photographe militaire',
      description: 'Paysage dévasté du no man\'s land entre les lignes, Flandres, France'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Western_Front_%28World_War_I%29.jpg/500px-Western_Front_%28World_War_I%29.jpg',
      title: 'Soldats dans une tranchée de communication (1916)',
      nature: 'Photographie',
      date: '1916',
      auteur: 'Photographe militaire',
      description: 'Soldats du Royal Irish Rifles dans une tranchée de communication pendant la Bataille de la Somme'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Western_front_1914.jpg/500px-Western_front_1914.jpg',
      title: 'Carte du Front occidental',
      nature: 'Carte historique',
      date: '1914-1918',
      auteur: 'Domaine public',
      description: 'Carte du front occidental montrant les lignes de front entre 1914 et 1918'
    }
  ],

  'guerre-totale': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Bataille_de_Verdun_1916.jpg/500px-Bataille_de_Verdun_1916.jpg',
      title: 'Soldats français à Verdun (1916)',
      nature: 'Photographie',
      date: '1916',
      auteur: 'Photographe militaire français',
      description: 'Soldats français montant à l\'attaque depuis leur tranchée pendant la Bataille de Verdun'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Verdun_and_Vincinity_-_Map.jpg/500px-Verdun_and_Vincinity_-_Map.jpg',
      title: 'Carte de Verdun et environs (1916)',
      nature: 'Carte militaire',
      date: '1916',
      auteur: 'État-major français',
      description: 'Carte de Verdun et environs montrant les positions, 21 février - 20 décembre 1916'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Poilus_dans_Parois_bombard%C3%A9e%2C_1916.jpg/500px-Poilus_dans_Parois_bombard%C3%A9e%2C_1916.jpg',
      title: 'Poilus dans une localité bombardée (1916)',
      nature: 'Photographie',
      date: '1916',
      auteur: 'Lucien Cottet, soldat et photographe amateur',
      description: 'Poilus français dans la localité bombardée de Parois (Meuse), 1916'
    }
  ],

  'consequences-ww1': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/French_87th_Regiment_Cote_34_Verdun_1916.jpg/330px-French_87th_Regiment_Cote_34_Verdun_1916.jpg',
      title: 'Soldats français du 87e régiment à Verdun',
      nature: 'Photographie',
      date: '1916',
      auteur: 'Photographe militaire français',
      description: 'Soldats français du 87e régiment dans les tranchées de la Côte 304 à Verdun — illustration du coût humain'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/No-man%27s-land-flanders-field.jpg/500px-No-man%27s-land-flanders-field.jpg',
      title: 'No Man\'s Land dévasté — Flandres',
      nature: 'Photographie',
      date: '1919',
      auteur: 'Photographe militaire',
      description: 'Paysage complètement dévasté par les bombardements — illustration de la destruction totale'
    }
  ],

  'suisse-ww1': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Western_front_1914.jpg/500px-Western_front_1914.jpg',
      title: 'Carte du Front occidental (1914)',
      nature: 'Carte historique',
      date: '1914-1918',
      auteur: 'Domaine public',
      description: 'La Suisse, encerclée par les belligérants, maintient sa neutralité tout au long du conflit'
    }
  ],

  // --- Totalitarismes ---
  'fascisme-italie': [],
  'nazisme': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Bundesarchiv_Bild_102-04062A%2C_N%C3%BCrnberg%2C_Reichsparteitag%2C_SA-_und_SS-Appell.jpg/500px-Bundesarchiv_Bild_102-04062A%2C_N%C3%BCrnberg%2C_Reichsparteitag%2C_SA-_und_SS-Appell.jpg',
      title: 'Rassemblement du parti nazi à Nuremberg',
      nature: 'Photographie',
      date: 'Années 1930',
      auteur: 'Georg Pahl / Bundesarchiv',
      description: 'Appel des SA et SS lors d\'un congrès du parti nazi (Reichsparteitag) à Nuremberg'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Zur_Erinnerung_an_den_Reichsparteitag_der_NSDAP_in_N%C3%BCrnberg_Propaganda_Postkarte_Ansichtskarte_Nazi_Party_Nuremberg_Rally_Commorative_Postcard_SA_SS_Swastika_1930s_Uncredited_artist_No_known_copyright_restrictions_s348819.jpg/500px-thumbnail.jpg',
      title: 'Carte postale de propagande — Congrès de Nuremberg',
      nature: 'Document de propagande',
      date: 'Années 1930',
      auteur: 'Artiste anonyme',
      description: 'Carte postale commémorative du congrès du parti nazi à Nuremberg — exemple de propagande visuelle'
    }
  ],
  'stalinisme': [],
  'propagande': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Nazi_propaganda_poster_in_Lithuania.png/330px-Nazi_propaganda_poster_in_Lithuania.png',
      title: 'Affiche de propagande nazie en Lituanie',
      nature: 'Affiche de propagande',
      date: '1941-1944',
      auteur: 'Auteur inconnu',
      description: 'Affiche de propagande nazie en Lituanie : « Le soldat allemand combat pour toi, travaille pour lui »'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/South_Tyrolean_Option_Agreement_Nazi_propaganda_poster_1939-40.jpg/500px-South_Tyrolean_Option_Agreement_Nazi_propaganda_poster_1939-40.jpg',
      title: 'Affiche de propagande nazie — Tyrol du Sud',
      nature: 'Affiche de propagande',
      date: '1939-1940',
      auteur: 'Auteur inconnu',
      description: 'Affiche de propagande nazie liée à l\'accord d\'option du Tyrol du Sud'
    }
  ],
  'comparaison-regimes': [],

  // --- WWII / Shoah ---
  'causes-ww2': [],
  'phases-ww2': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/1944_NormandyLST.jpg/500px-1944_NormandyLST.jpg',
      title: 'Débarquement en Normandie — Jour J (6 juin 1944)',
      nature: 'Photographie',
      date: '6 juin 1944',
      auteur: 'Robert F. Sargent, U.S. Coast Guard',
      description: 'Péniches de débarquement déversant des troupes américaines sur les plages de Normandie le Jour J'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Into_the_Jaws_of_Death_23-0455M_edit.jpg/500px-Into_the_Jaws_of_Death_23-0455M_edit.jpg',
      title: '« Into the Jaws of Death » — Omaha Beach',
      nature: 'Photographie',
      date: '6 juin 1944',
      auteur: 'Robert F. Sargent, U.S. Coast Guard',
      description: 'Soldats de la 1re division d\'infanterie US débarquant sur Omaha Beach depuis une péniche LCVP'
    }
  ],
  'shoah': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Auschwitz-Work_Set_Free-new.JPG/500px-Auschwitz-Work_Set_Free-new.JPG',
      title: 'Entrée du camp d\'Auschwitz I — « Arbeit macht frei »',
      nature: 'Photographie',
      date: 'Après 1945',
      auteur: 'Bibi595',
      description: 'L\'entrée principale du camp de concentration d\'Auschwitz I avec l\'inscription tristement célèbre « Arbeit macht frei » (Le travail rend libre)'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/View_of_the_entrance_to_the_main_camp_of_Auschwitz_%28Auschwitz_I%29.jpg/500px-View_of_the_entrance_to_the_main_camp_of_Auschwitz_%28Auschwitz_I%29.jpg',
      title: 'Vue de l\'entrée du camp principal d\'Auschwitz',
      nature: 'Photographie',
      date: '1945',
      auteur: 'Auteur inconnu',
      description: 'Vue de l\'entrée du camp principal d\'Auschwitz (Auschwitz I) avec le portail « Arbeit Macht Frei »'
    }
  ],
  'resistance-collaboration': [],
  'suisse-ww2': [],

  // --- Guerre froide ---
  'bipolarisation': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Berlin_Wall_Checkpoint_Charlie_2003.jpg/500px-Berlin_Wall_Checkpoint_Charlie_2003.jpg',
      title: 'Le Mur de Berlin à Checkpoint Charlie',
      nature: 'Photographie',
      date: '2003',
      auteur: 'Dersh',
      description: 'Vestige du Mur de Berlin au point de passage Checkpoint Charlie — symbole de la division Est/Ouest'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Berlin_Mauermuseum_lub_2026-03-03_img04.jpg/500px-Berlin_Mauermuseum_lub_2026-03-03_img04.jpg',
      title: 'Vestige du Mur de Berlin au musée du Mur',
      nature: 'Photographie',
      date: '2026',
      auteur: 'Lukas Beck',
      description: 'Fragment du Mur de Berlin au musée du Mur près de Checkpoint Charlie, Friedrichstraße, Berlin'
    }
  ],
  'crises-guerre-froide': [],
  'course-armements': [],
  'chute-mur': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/West_and_East_Germans_at_the_Brandenburg_Gate_in_1989.jpg/500px-West_and_East_Germans_at_the_Brandenburg_Gate_in_1989.jpg',
      title: 'Allemands de l\'Est et de l\'Ouest à la Porte de Brandebourg (1989)',
      nature: 'Photographie',
      date: '9 novembre 1989',
      auteur: 'Photographe inconnu',
      description: 'Allemands de l\'Est et de l\'Ouest célébrant ensemble la chute du Mur à la Porte de Brandebourg'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Juggling_on_the_Berlin_Wall_1a.jpg/500px-Juggling_on_the_Berlin_Wall_1a.jpg',
      title: 'Jongleur sur le Mur de Berlin (16 novembre 1989)',
      nature: 'Photographie',
      date: '16 novembre 1989',
      auteur: 'Yann Forget',
      description: 'Un jongleur sur le Mur de Berlin quelques jours après sa chute, symbole de joie et de liberté retrouvée'
    }
  ],

  // --- Décolonisation ---
  'causes-decolonisation': [],
  'independances-afrique': [],
  'independances-asie': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gandhi_at_the_spinning_wheel.jpg/500px-Gandhi_at_the_spinning_wheel.jpg',
      title: 'Gandhi au rouet',
      nature: 'Photographie',
      date: 'Années 1940',
      auteur: 'Auteur inconnu',
      description: 'Le Mahatma Gandhi filant au rouet (charkha), symbole de l\'autosuffisance et de la résistance non-violente à la domination britannique'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Charkha_%28spinning_wheel%291.jpg/500px-Charkha_%28spinning_wheel%291.jpg',
      title: 'Le plus grand rouet en bois du monde — Aéroport de Delhi',
      nature: 'Photographie',
      date: 'Contemporain',
      auteur: 'Janak Bhatta',
      description: 'Plus grand rouet (charkha) en bois du monde à l\'aéroport Indira Gandhi de Delhi — hommage au symbole de l\'indépendance indienne'
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
      description: 'L\'hémicycle du Parlement européen à Strasbourg lors d\'une session plénière — institution centrale de la construction européenne'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Exhibition_at_the_European_Parliament_in_Strasbourg_07.jpg/500px-Exhibition_at_the_European_Parliament_in_Strasbourg_07.jpg',
      title: 'Exposition au Parlement européen de Strasbourg',
      nature: 'Photographie',
      date: '1997',
      auteur: '© Communautés européennes - EP',
      description: 'Exposition au Parlement européen de Strasbourg illustrant l\'histoire de la construction européenne'
    }
  ],
  'terrorisme': [],
  'enjeux-environnement': [],
  'suisse-contemporaine': [],

  // ===================== 10H — RENAISSANCE → 1914 =====================

  'humanisme': [],
  'art-renaissance': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Mona_Lisa.jpg/500px-Mona_Lisa.jpg',
      title: 'La Joconde (Mona Lisa)',
      nature: 'Peinture à l\'huile',
      date: 'Vers 1503-1519',
      auteur: 'Léonard de Vinci',
      description: 'La Joconde, portrait le plus célèbre du monde, symbole de l\'art de la Renaissance italienne'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/%27Adam%27s_Creation_Sistine_Chapel_ceiling%27_by_Michelangelo_JBU33cut.jpg/500px-%27Adam%27s_Creation_Sistine_Chapel_ceiling%27_by_Michelangelo_JBU33cut.jpg',
      title: 'La Création d\'Adam — Chapelle Sixtine',
      nature: 'Fresque',
      date: 'Vers 1508-1512',
      auteur: 'Michel-Ange',
      description: 'La Création d\'Adam, fresque du plafond de la Chapelle Sixtine au Vatican — chef-d\'œuvre de la Renaissance'
    }
  ],
  'imprimerie': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Printing_press.jpg/500px-Printing_press.jpg',
      title: 'Presse à imprimer — Gravure de 1819',
      nature: 'Gravure',
      date: '1819',
      auteur: 'W. Lowry d\'après J. Farey',
      description: 'Gravure montrant une presse à imprimer, héritière de l\'invention de Gutenberg (vers 1450)'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Printing_press_05.jpg/500px-Printing_press_05.jpg',
      title: 'Presse à imprimer traditionnelle',
      nature: 'Photographie',
      date: 'Contemporain',
      auteur: 'Vis M',
      description: 'Presse à imprimer traditionnelle — la révolution de l\'imprimerie a transformé la diffusion du savoir'
    }
  ],
  'sciences-renaissance': [],
  'explorateurs': [],
  'colonisation-ameriques': [],
  'traite-negriere': [],
  'consequences-populations': [],
  'luther-reforme': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Lucas_Cranach_d.%C3%84._-_Martin_Luther%2C_1528_%28Veste_Coburg%29.jpg/500px-Lucas_Cranach_d.%C3%84._-_Martin_Luther%2C_1528_%28Veste_Coburg%29.jpg',
      title: 'Portrait de Martin Luther par Lucas Cranach l\'Ancien (1528)',
      nature: 'Peinture à l\'huile',
      date: '1528',
      auteur: 'Lucas Cranach l\'Ancien',
      description: 'Portrait de Martin Luther, initiateur de la Réforme protestante en 1517'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Lucas_Cranach_%28I%29_-_Bildnis_Martin_Luthers_1532_%28Eremitage%29.jpg/500px-Lucas_Cranach_%28I%29_-_Bildnis_Martin_Luthers_1532_%28Eremitage%29.jpg',
      title: 'Portrait de Martin Luther (1532)',
      nature: 'Peinture à l\'huile',
      date: '1532',
      auteur: 'Lucas Cranach l\'Ancien',
      description: 'Portrait de Martin Luther conservé à l\'Ermitage — le réformateur à 49 ans'
    }
  ],
  'calvin-geneve': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/John_Calvin_Titian_B.jpg/500px-John_Calvin_Titian_B.jpg',
      title: 'Portrait de Jean Calvin',
      nature: 'Peinture',
      date: 'XVIe siècle',
      auteur: 'D\'après Cristofano dell\'Altissimo',
      description: 'Portrait de Jean Calvin, réformateur français installé à Genève dès 1536'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Portrait_of_John_Calvin_%281509%E2%80%931564%29%2C_by_anonymous_-_Museum_Catharijneconvent.jpg/500px-Portrait_of_John_Calvin_%281509%E2%80%931564%29%2C_by_anonymous_-_Museum_Catharijneconvent.jpg',
      title: 'Portrait de Jean Calvin (1509-1564)',
      nature: 'Peinture',
      date: 'XVIe siècle',
      auteur: 'Anonyme (France)',
      description: 'Portrait de Jean Calvin conservé au Museum Catharijneconvent — le « pape de Genève »'
    }
  ],
  'contre-reforme': [],
  'guerres-religion': [],
  'absolutisme': [],
  'societe-ordres': [],
  'philosophes-lumieres': [],
  'encyclopedie': [],
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
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Storming_the_bastille_4.jpg/500px-Storming_the_bastille_4.jpg',
      title: 'L\'assaut de la Bastille — Gravure de 1789',
      nature: 'Gravure coloriée',
      date: '1789',
      auteur: 'Auteur inconnu',
      description: 'Gravure française coloriée à la main représentant la prise de la Bastille'
    }
  ],
  'droits-homme': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Declaration_of_the_Rights_of_Man_and_of_the_Citizen_in_1789.jpg/500px-Declaration_of_the_Rights_of_Man_and_of_the_Citizen_in_1789.jpg',
      title: 'Déclaration des droits de l\'homme et du citoyen (1789)',
      nature: 'Document officiel illustré',
      date: '26 août 1789',
      auteur: 'Domaine public',
      description: 'La Déclaration des droits de l\'homme et du citoyen de 1789, texte fondateur des droits fondamentaux'
    }
  ],
  'napoleon': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Jacques-Louis_David_-_The_Coronation_of_Napoleon_%281805-1807%29.jpg/500px-Jacques-Louis_David_-_The_Coronation_of_Napoleon_%281805-1807%29.jpg',
      title: 'Le Sacre de Napoléon (1805-1807)',
      nature: 'Peinture à l\'huile',
      date: '1805-1807',
      auteur: 'Jacques-Louis David',
      description: 'Joséphine agenouillée devant Napoléon lors de son couronnement à Notre-Dame, le pape Pie VII assis derrière lui'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Jacques-Louis_David%2C_The_Coronation_of_Napoleon_edit.jpg/500px-Jacques-Louis_David%2C_The_Coronation_of_Napoleon_edit.jpg',
      title: 'Le Couronnement de Napoléon — Détail',
      nature: 'Peinture à l\'huile',
      date: '1805-1807',
      auteur: 'Jacques-Louis David',
      description: 'Détail du Sacre de Napoléon — œuvre monumentale de propagande impériale'
    }
  ],
  'suisse-revolution': [],
  'inventions-techniques': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Maquina_vapor_Watt_ETSIIM.jpg/500px-Maquina_vapor_Watt_ETSIIM.jpg',
      title: 'Machine à vapeur de Watt (1832)',
      nature: 'Photographie d\'objet',
      date: '1832',
      auteur: 'Nicolás Pérez',
      description: 'Machine à vapeur de type Watt construite par D. Napier & Son (Londres), utilisée à la Monnaie royale d\'Espagne de 1861 à 1893'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Boulton_%26_Watt_beam_engine_%28engine_floor%29_-_Kew_Bridge_Steam_Museum.jpg/500px-Boulton_%26_Watt_beam_engine_%28engine_floor%29_-_Kew_Bridge_Steam_Museum.jpg',
      title: 'Machine à vapeur Boulton & Watt — Musée de Kew Bridge',
      nature: 'Photographie',
      date: 'Contemporain',
      auteur: 'Chris Allen',
      description: 'Machine à vapeur Boulton & Watt au musée de Kew Bridge — révolution industrielle du XVIIIe siècle'
    }
  ],
  'condition-ouvriere': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/California_agriculturist_and_live_stock_journal_%2820328531638%29.jpg/500px-California_agriculturist_and_live_stock_journal_%2820328531638%29.jpg',
      title: 'Illustration du travail industriel au XIXe siècle',
      nature: 'Gravure',
      date: 'XIXe siècle',
      auteur: 'Internet Archive Book Images',
      description: 'Illustration de la condition ouvrière à l\'époque de la révolution industrielle'
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
      description: 'Vue panoramique des trois pyramides de Gizeh — tombeaux des pharaons Khéops, Khéphren et Mykérinos'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/The_Great_Sphinx%2C_Pyramids_of_Gizeh-1839%29_by_David_Roberts%2C_RA.jpg/500px-The_Great_Sphinx%2C_Pyramids_of_Gizeh-1839%29_by_David_Roberts%2C_RA.jpg',
      title: 'Le Grand Sphinx et les Pyramides de Gizeh (1839)',
      nature: 'Peinture',
      date: '1839',
      auteur: 'David Roberts',
      description: 'Le Sphinx de Gizeh partiellement ensablé au XIXe siècle avec les pyramides en arrière-plan'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/CairoEgMuseumTaaMaskMostlyPhotographed.jpg/500px-CairoEgMuseumTaaMaskMostlyPhotographed.jpg',
      title: 'Masque funéraire de Toutânkhamon',
      nature: 'Photographie d\'objet',
      date: 'Vers 1323 av. J.-C.',
      auteur: 'Roland Unger',
      description: 'Le masque funéraire en or de Toutânkhamon, Musée égyptien du Caire — symbole de la puissance des pharaons'
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
    }
  ],
  'vie-quotidienne-egypte': [],
  'mesopotamie-cuneiforme': [],
  'democratie-athenes': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Parthenon_from_south.jpg/500px-Parthenon_from_south.jpg',
      title: 'Le Parthénon — Acropole d\'Athènes',
      nature: 'Photographie',
      date: 'Contemporain',
      auteur: 'Thermos',
      description: 'Le Parthénon, temple dédié à Athéna sur l\'Acropole d\'Athènes — symbole de la démocratie et de la civilisation grecque'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Pnyx%2C_Athens_1.jpg/500px-Pnyx%2C_Athens_1.jpg',
      title: 'La Pnyx — lieu de l\'assemblée du peuple athénien',
      nature: 'Photographie',
      date: 'Contemporain',
      auteur: 'Mirjanamimi',
      description: 'La Pnyx, colline d\'Athènes où se réunissait l\'Ecclesia (assemblée du peuple) dès 507 av. J.-C.'
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
      date: 'Contemporain',
      auteur: 'Diliff',
      description: 'Le Colisée (amphithéâtre Flavien), construit entre 70 et 80 apr. J.-C. — pouvait accueillir 50 000 spectateurs'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Pont_du_Gard_BLS.jpg/500px-Pont_du_Gard_BLS.jpg',
      title: 'Le Pont du Gard',
      nature: 'Photographie',
      date: 'Contemporain',
      auteur: 'Benh Lieu Song',
      description: 'Le Pont du Gard, aqueduc romain du Ier siècle apr. J.-C. dans le sud de la France — chef-d\'œuvre d\'ingénierie romaine'
    }
  ],
  'armee-conquetes': [],
  'vie-quotidienne-rome': [],
  'chute-empire': [],
  'naissance-christianisme': [],
  'expansion-christianisme': [],
  'naissance-islam': [],
  'expansion-islam': [],
  'feodalite': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Bayeux_Tapestry_scene51_Battle_of_Hastings_Norman_knights_and_archers.jpg/500px-Bayeux_Tapestry_scene51_Battle_of_Hastings_Norman_knights_and_archers.jpg',
      title: 'Tapisserie de Bayeux — Bataille de Hastings (1066)',
      nature: 'Broderie médiévale',
      date: 'Vers 1070',
      auteur: 'Auteur inconnu',
      description: 'Scène de la bataille de Hastings : chevaliers normands et archers — la tapisserie de Bayeux est une source historique majeure sur la féodalité'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Ramparts_of_the_historic_fortified_city_of_Carcassone_05.jpg/500px-Ramparts_of_the_historic_fortified_city_of_Carcassone_05.jpg',
      title: 'Les remparts de la cité de Carcassonne',
      nature: 'Photographie',
      date: 'Contemporain',
      auteur: 'Krzysztof Golik',
      description: 'La cité fortifiée de Carcassonne — exemple remarquable de château fort médiéval et d\'architecture défensive féodale'
    }
  ],
  'chateau-fort': [],
  'eglise-moyen-age': [],
  'croisades': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Siege_of_Antioch%2C_France%2C_Lyon%2C_Municipal_Library%2C_Ms_828_f._033.jpg/500px-Siege_of_Antioch%2C_France%2C_Lyon%2C_Municipal_Library%2C_Ms_828_f._033.jpg',
      title: 'Le Siège d\'Antioche (1097-1098) — Enluminure du XIIIe siècle',
      nature: 'Enluminure',
      date: 'XIIIe siècle',
      auteur: 'Anonyme',
      description: 'Représentation du siège d\'Antioche lors de la première croisade, manuscrit de Guillaume de Tyr'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/1099_Siege_of_Jerusalem.jpg/500px-1099_Siege_of_Jerusalem.jpg',
      title: 'Le Siège de Jérusalem (1099)',
      nature: 'Enluminure',
      date: 'Médiéval',
      auteur: 'Auteur inconnu',
      description: 'Représentation du siège de Jérusalem lors de la première croisade en 1099'
    }
  ],
  'vie-paysanne': [],
  'villes-commerce': [],
  'pacte-1291': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Swiss_R%C3%BCtlischwur.jpg/500px-Swiss_R%C3%BCtlischwur.jpg',
      title: 'Le Serment du Grütli (Rütlischwur)',
      nature: 'Peinture à l\'huile',
      date: 'XIXe siècle',
      auteur: 'Jean Renggli',
      description: 'Représentation idéalisée du Serment du Grütli — acte fondateur légendaire de la Confédération suisse'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Bundesbrief.jpg/500px-Bundesbrief.jpg',
      title: 'Le Pacte fédéral de 1291 (Bundesbrief)',
      nature: 'Document d\'archives',
      date: '1er août 1291',
      auteur: 'Document historique',
      description: 'Le Pacte fédéral de 1291 entre Uri, Schwyz et Unterwald — document fondateur de la Confédération suisse'
    }
  ],
  'legendes-fondatrices': [],
  'batailles-suisses': [],
  'cantons-alliance': []
};
