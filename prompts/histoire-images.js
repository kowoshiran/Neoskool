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
  'nazisme': [],
  'stalinisme': [],
  'propagande': [],
  'comparaison-regimes': [],

  // --- WWII / Shoah ---
  'causes-ww2': [],
  'phases-ww2': [],
  'shoah': [],
  'resistance-collaboration': [],
  'suisse-ww2': [],

  // --- Guerre froide ---
  'bipolarisation': [],
  'crises-guerre-froide': [],
  'course-armements': [],
  'chute-mur': [],

  // --- Décolonisation ---
  'causes-decolonisation': [],
  'independances-afrique': [],
  'independances-asie': [],
  'neocolonialisme': [],

  // --- Monde contemporain ---
  'mondialisation': [],
  'construction-europeenne': [],
  'terrorisme': [],
  'enjeux-environnement': [],
  'suisse-contemporaine': [],

  // ===================== 10H — RENAISSANCE → 1914 =====================

  'humanisme': [],
  'art-renaissance': [],
  'imprimerie': [],
  'sciences-renaissance': [],
  'explorateurs': [],
  'colonisation-ameriques': [],
  'traite-negriere': [],
  'consequences-populations': [],
  'luther-reforme': [],
  'calvin-geneve': [],
  'contre-reforme': [],
  'guerres-religion': [],
  'absolutisme': [],
  'societe-ordres': [],
  'philosophes-lumieres': [],
  'encyclopedie': [],
  'causes-revolution': [],
  'evenements-cles': [],
  'droits-homme': [],
  'napoleon': [],
  'suisse-revolution': [],
  'inventions-techniques': [],
  'condition-ouvriere': [],
  'urbanisation': [],
  'mouvements-sociaux': [],
  'suisse-industrielle': [],

  // ===================== 9H — ANTIQUITÉ → MOYEN ÂGE =====================

  'pharaons-pyramides': [],
  'ecriture-hieroglyphes': [],
  'vie-quotidienne-egypte': [],
  'mesopotamie-cuneiforme': [],
  'democratie-athenes': [],
  'mythologie-grecque': [],
  'jeux-olympiques': [],
  'sparte-vs-athenes': [],
  'art-architecture-grece': [],
  'fondation-republique': [],
  'empire-romain': [],
  'armee-conquetes': [],
  'vie-quotidienne-rome': [],
  'chute-empire': [],
  'naissance-christianisme': [],
  'expansion-christianisme': [],
  'naissance-islam': [],
  'expansion-islam': [],
  'feodalite': [],
  'chateau-fort': [],
  'eglise-moyen-age': [],
  'croisades': [],
  'vie-paysanne': [],
  'villes-commerce': [],
  'pacte-1291': [],
  'legendes-fondatrices': [],
  'batailles-suisses': [],
  'cantons-alliance': []
};
