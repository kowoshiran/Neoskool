export const block2 = `=== ENSEIGNEMENT DES MATHÉMATIQUES ===

Quand la matière est MATHÉMATIQUES :
- Source : Mathématiques 9-10-11, Éditions LEP (Manuel officiel romand)
- Alignement : PER Cycle 3 (MSN 31, 32, 33, 34)
- Progressions par voie : VG1 (base) / VG2 (élevé) / VP (prégymnasiale)
- Consignes et énoncés TOUJOURS en français
- Contextes suisses obligatoires (CHF, CFF, cantons, Alpes, lac Léman, TVA 8.1%)
- AUCUNE traduction ni langue étrangère — tout est en français
- Encourager le RAISONNEMENT, pas juste le résultat
- Chaque exercice doit indiquer : 🧠 (sans calculatrice) ou 🔢 (avec calculatrice) ou 📐 (matériel géométrie)

=== TYPES D'EXERCICES MATHÉMATIQUES ===

Types disponibles (varier dans chaque fiche, minimum 3 types différents) :

1. CALCUL MENTAL / SPEEDRUN : série de calculs chronométrés, difficulté croissante. Toujours 🧠.
   HTML : <div class="exercise-card"><h3>⚡ Speedrun — Calcul mental</h3><p class="instruction">Résous le plus vite possible, SANS calculatrice.</p>...items...</div>

2. EXERCICE POSÉ : algorithme, calcul structuré, opérations à poser.
   HTML : <div class="exercise-card"><h3>📝 Exercice — [titre]</h3>...

3. PROBLÈME CONTEXTUALISÉ : situation réelle suisse (courses, voyage CFF, recette, sport, bricolage). Nécessite modélisation.
   HTML : <div class="exercise-card"><h3>🧩 Problème — [titre]</h3>...

4. GÉOMÉTRIE / CONSTRUCTION : figures à tracer, mesures, propriétés à identifier. Utilise SVG inline.
   HTML : <div class="exercise-card"><h3>📐 Construction — [titre]</h3><div class="svg-container">[SVG inline]</div>...

5. LECTURE DE GRAPHIQUE : interpréter un diagramme, tableau de valeurs, fonction. Utilise SVG inline.
   HTML : <div class="exercise-card"><h3>📊 Graphique — [titre]</h3><div class="svg-container">[SVG inline]</div>...

6. VRAI OU FAUX : affirmations mathématiques à évaluer et justifier.
   HTML : <div class="exercise-card"><h3>✅❌ Vrai ou Faux</h3>...

7. QCM STRATÉGIQUE : 4 choix dont distracteurs = erreurs classiques. L'élève doit JUSTIFIER.
   HTML : <div class="exercise-card"><h3>🎯 QCM — [titre]</h3>...

8. DÉMONSTRATION / PREUVE (VP uniquement) : utiliser propriétés pour prouver un résultat.
   HTML : <div class="exercise-card"><h3>🔍 Démonstration</h3>...

=== COMPOSANTS SVG MATHÉMATIQUES ===

⚠️ RÈGLE CRITIQUE SVG : Les SVG consomment beaucoup de tokens. OPTIMISE :
- Maximum 8 éléments SVG par figure (lignes, textes, cercles)
- Privilégie des figures SIMPLES avec peu de détails décoratifs
- Pas de grille/quadrillage sauf si l'exercice l'exige explicitement
- Un repère cartésien = axes + labels + points, PAS de grille complète
- Si la fiche contient 2+ SVG, réduis à 1 exercice par niveau au lieu de 2

Pour la géométrie et les graphiques, génère du SVG INLINE directement dans le HTML.

RÈGLES SVG :
- Toujours viewBox adapté, width="100%" max-width="400px"
- Couleurs : #6C5CE7 (violet), #00B894 (vert), #FDCB6E (jaune), #FF6B6B (rouge), #74B9FF (bleu)
- Texte lisible : font-size minimum 12px, labels sur axes/points/mesures
- Style : stroke-width="2" traits principaux, "1" pour grilles
- Pour impression : pas de fond coloré, traits foncés

TYPES SVG fréquents :
- AXE GRADUÉ : droite numérique (relatifs, fractions, décimaux)
- REPÈRE CARTÉSIEN : grille, axes, points ou courbes
- FIGURE COTÉE : triangle/quadrilatère avec dimensions (aires, Pythagore)
- FIGURE À CONSTRUIRE : figure partielle (symétrie, rotation, homothétie)
- DIAGRAMME : colonnes, circulaire, cartésien
- QUADRILLAGE : transformations géométriques

Exemple SVG repère :
<svg viewBox="0 0 300 300" width="100%" style="max-width:300px"><g stroke="#e0e0e0" stroke-width="0.5"><line x1="0" y1="50" x2="300" y2="50"/><line x1="0" y1="100" x2="300" y2="100"/><line x1="0" y1="200" x2="300" y2="200"/><line x1="0" y1="250" x2="300" y2="250"/><line x1="50" y1="0" x2="50" y2="300"/><line x1="100" y1="0" x2="100" y2="300"/><line x1="200" y1="0" x2="200" y2="300"/><line x1="250" y1="0" x2="250" y2="300"/></g><line x1="150" y1="0" x2="150" y2="300" stroke="#333" stroke-width="2"/><line x1="0" y1="150" x2="300" y2="150" stroke="#333" stroke-width="2"/><circle cx="200" cy="100" r="4" fill="#6C5CE7"/><text x="210" y="95" font-size="12" fill="#6C5CE7">A(1;1)</text></svg>

=== CALCULATRICE ET MATÉRIEL ===

Badge obligatoire par exercice :
- 🧠 Sans calculatrice : calcul mental, priorités, fractions simples, puissances simples
- 🔢 Avec calculatrice : problèmes contextualisés, volumes complexes, notation scientifique
- 📐 Matériel géométrie : constructions, mesures d'angles, tracer des figures
HTML : <span class="calc-badge">🧠</span> ou <span class="calc-badge">🔢</span> ou <span class="calc-badge">📐</span>

=== ERREURS CLASSIQUES À EXPLOITER ===

Utilise comme distracteurs QCM et pièges dans les aides 💡 :
NOMBRES : (−3)×(−2)=−6 au lieu de +6 | ½+⅓=2/5 au lieu de 5/6 | 2³=6 au lieu de 8 | 10⁻²=−100 au lieu de 0,01
ALGÈBRE : 2(x+3)=2x+3 au lieu de 2x+6 | 4x−x=4 au lieu de 3x | (a+b)²=a²+b² au lieu de a²+2ab+b²
GÉOMÉTRIE : somme angles triangle pas 180° | 1m²=100cm² au lieu de 10000cm² | diamètre au lieu de rayon dans πr²
MESURES : Pythagore sans vérifier hypoténuse | confondre périmètre/aire | 4,25h=4h25min au lieu de 4h15min

=== FORMULES ESSENTIELLES (FICHE OUTIL) ===

La Fiche Outil maths contient les formules pertinentes au thème. Sélectionne parmi :
AIRES : rectangle A=l*L | triangle A=b*h/2 | parallélogramme A=b*h | trapèze A=(B+b)*h/2 | disque A=πr²
VOLUMES : prisme V=Abase*h | cylindre V=πr²h | pyramide V=Abase*h/3 | cône V=πr²h/3 | sphère V=4πr³/3
THÉORÈMES : Pythagore a²+b²=c² | Thalès (proportionnalité segments)
ALGÈBRE : (a+b)²=a²+2ab+b² | (a−b)²=a²−2ab+b² | (a+b)(a−b)=a²−b²
FONCTIONS : linéaire y=ax | affine y=ax+b
Ne mets QUE les formules utiles pour le thème demandé.

=== CONTEXTES SUISSES OBLIGATOIRES ===

Au moins 1 problème contextualisé par fiche :
- Argent : CHF, budget, rabais, TVA 8.1%, EUR/CHF
- Transport : CFF, Lausanne-Genève 60km, Lausanne-Berne 100km
- Géo : lac Léman 582km², Cervin 4478m, Jura vaudois
- Sport : piscine 50m, terrain foot, piste 400m
- Cuisine : recettes (proportionnalité), g/kg/dl/l
- École : notes sur 6, moyenne, cours 45min

=== OBJECTIFS PER — PLAN D'ÉTUDES ROMAND CYCLE 3 ===

Après la fiche outil, ajoute une section PER :
<div class="per-footer"><div class="per-footer-title">📋 Objectifs PER — Cycle 3</div><div class="per-objective primary"><span class="per-dot">●</span><span class="per-code">CODE</span><span class="per-label">Description</span></div></div>

Objectifs MSN disponibles :
MSN 31 — Modéliser le plan et l'espace
MSN 32 — Structurer des représentations des nombres réels
MSN 33 — Résoudre des problèmes numériques et algébriques
MSN 34 — Mobiliser la mesure pour comparer des grandeurs
MSN 35 — Modéliser des phénomènes
● = objectif principal | ○ = secondaire. 2-4 objectifs max.

=== MATRICE DE COMPÉTENCES — 9H MATHÉMATIQUES ===

Légende : ✅=enseigné | ✅°=sensibilisation | ❌=pas encore

--- NOMBRES (MSN 32) ---
Critères divisibilité (2,3,5,9,10,25,100) : tous ✅
PPMC/PGDC simples : VG1 ❌ | VG2 ✅ | VP ✅
Décomposition facteurs premiers : VG1 ❌ | VG2 ✅ | VP ✅
Entiers Z comparaison/ordre/droite : tous ✅
Décimaux Q comparaison/encadrement : tous ✅
Fractions Q+ simplifier/amplifier/comparer : tous ✅
Fractions Q négatifs : VG1 ❌ | VG2 ❌ | VP ✅
Passage décimal-fraction-% simples : tous ✅
Puissance a^b (a dans Q+, b dans N) : tous ✅
Puissance a^b (a dans Q) : VG1 ❌ | VG2 ❌ | VP ✅
Notation scientifique n dans N : VG1 ✅° | VG2 ❌ | VP ❌
Dénombrement/situations aléatoires : tous ✅
Systèmes numération historiques : tous ✅

--- CALCULS (MSN 32) ---
Priorité opérations + parenthèses : tous ✅
Calcul mental décimaux positifs (+−×÷) : tous ✅
Calcul mental relatifs (+−×÷) : VG1 ❌ | VG2 ✅ | VP ✅
Calcul mental relatifs (+) seul : VG1 ✅ | VG2 ❌ | VP ❌
Calcul mental fractions Q+ (+−) : VG1 ❌ | VG2 ✅ | VP ✅
Algorithmes décimaux <10000 (+−×÷) : tous ✅
Algorithmes fractions Q+ (+−) : tous ✅
Propriétés opérations : tous ✅

--- PROPORTIONNALITÉ (MSN 33) ---
Prix/poids/devises : tous ✅
Agrandissement/réduction : tous ✅
Échelle : tous ✅
Pourcentage : tous ✅

--- FONCTIONS/DIAGRAMMES (MSN 33) ---
Lecture tableaux/graphiques : tous ✅
Représentation graphique : tous ✅
x->b, x->ax, x->ax+b (a,b dans Z) -> graphique : tous ✅
Reconnaissance fonctions sans formalisation : VG1 ✅ | VG2 ❌ | VP ❌
Reconnaissance fonctions avec expression : VG1 ❌ | VG2 ✅ | VP ✅
Diagramme cartésien/colonnes : tous ✅
Diagramme circulaire/barres : VG1 ✅° | VG2 ✅ | VP ✅

--- ALGÈBRE (MSN 33) ---
Substitution expressions simples : VG1 ✅ | VG2 ❌ | VP ❌
Conventions écriture algébrique : VG1 ❌ | VG2 ✅° | VP ✅°
Élaboration expressions (depuis énoncés) : VG1 ✅° | VG2 ❌ | VP ❌
Élaboration (depuis figures) : VG1 ❌ | VG2 ✅° | VP ✅°
Mise en équation 1er degré : VG1 ✅° | VG2 ❌ | VP ✅

--- GÉOMÉTRIE (MSN 31) ---
Droites parallèles/perpendiculaires, angles, triangles, quadrilatères, cercles : tous ✅
Somme angles triangle=180° : tous ✅
Médiatrice, bissectrice : tous ✅
Angles aigu/obtus/droit/plat : tous ✅
Polygones réguliers : VG1 ✅° | VG2 ✅ | VP ✅
Croquis + dessin à l'échelle : tous ✅
Solides reconnaître/nommer : tous ✅
Développement cube/parallélépipède : tous ✅
Développement prisme droit : VG1 ❌ | VG2 ✅ | VP ✅
Perspective : tous ✅
Isométries reconnaître/nommer : tous ✅
Construire image par isométrie : tous ✅
Axes de symétrie : tous ✅
Frises/pavages : tous ✅
Repérage placer points : tous ✅

--- GRANDEURS/MESURES (MSN 34) ---
Longueur/masse/aire : estimation, mesure, conversions : tous ✅
Angle mesure degrés : tous ✅
Volume/capacité : VG1 ✅° | VG2 ✅ | VP ✅
Temps : VG1 ✅° | VG2 ✅ | VP ✅
Périmètre polygone : tous ✅
Aires carré/rectangle/triangle/parallélogramme/losange : tous ✅
Périmètre+aire disque : tous ✅
Volume cube/parallélépipède : tous ✅`;



















