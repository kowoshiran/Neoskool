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

=== OBJECTIFS PER MATHS (MSN) ===
MSN 31 Modéliser le plan et l'espace | MSN 32 Nombres réels | MSN 33 Problèmes numériques et algébriques | MSN 34 Mesure et grandeurs | MSN 35 Modéliser des phénomènes

=== MATRICE DE COMPÉTENCES — 11H MATHÉMATIQUES ===

Légende : ✅=enseigné | ✅°=sensibilisation | 🔶=consolidation | ❌=pas au programme

--- NOMBRES (MSN 32) ---
Passage décimal-fraction avancé (0,222...=2/9) : VG1 ❌ | VG2 ❌ | VP ✅
Suites géométriques, cubes : VG1 ❌ | VG2 ❌ | VP ✅
Calcul mental puissances avancées (40³; (−2)⁵) : VG1 ❌ | VG2 ✅ | VP ✅
Calcul mental fractions Q+ (+−×÷) VP : VG1 ❌ | VG2 ❌ | VP ✅
Propriétés racines (rac(a)*rac(b), rac(a²*b)=a*rac(b)) : VG1 ❌ | VG2 ❌ | VP ✅
Raisonnement probabiliste : VG1 ❌ | VG2 ❌ | VP ✅

--- ALGÈBRE (MSN 33) ---
Réduction polynômes deg1 consolidation VG1 : VG1 🔶 | VG2 ❌ | VP ❌
Conventions algébriques consolidation VG1 : VG1 ✅ | VG2 🔶 | VP 🔶
Polynômes consolidation : VG1 ❌ | VG2 🔶 | VP 🔶
Identités remarquables (a+b)², (a−b)², (a+b)(a−b) : VG1 ❌ | VG2 ❌ | VP ✅
Factorisation polynômes : VG1 ❌ | VG2 ❌ | VP ✅
Calcul littéral preuve : VG1 ❌ | VG2 ❌ | VP ✅
Équation 1er degré consolidation : tous 🔶
Système 2 équations 2 inconnues : VG1 ❌ | VG2 ❌ | VP ✅
Équation 2ème degré (Viète) : VG1 ❌ | VG2 ❌ | VP ✅
Formules avancées : VG1 ❌ | VG2 ❌ | VP ✅
Exprimer variable consolidation : VG1 ❌ | VG2 🔶 | VP 🔶

--- FONCTIONS (MSN 33) ---
Graphique -> expression fonctionnelle (a,b dans Z) : VG1 ❌ | VG2 ❌ | VP ✅
Fonctions avancées x->a/x, x->x³, x->ax²+bx+c : VG1 ❌ | VG2 ❌ | VP ✅°
Débit : VG1 ❌ | VG2 ❌ | VP ✅

--- GÉOMÉTRIE (MSN 31) ---
Tangente cercle : VG1 ❌ | VG2 ❌ | VP ✅
Cercle de Thalès : VG1 ❌ | VG2 ❌ | VP ✅
Angle au centre/inscrit : VG1 ❌ | VG2 ✅° | VP ✅
Similitude : VG1 ❌ | VG2 ❌ | VP ✅°
Raisonnement déductif : VG1 ❌ | VG2 ❌ | VP ✅

--- GRANDEURS/MESURES (MSN 34) ---
Vitesse consolidation : VG1 ✅ | VG2 🔶 | VP 🔶
Débit/masse volumique : VG1 ✅° | VG2 ✅ | VP ✅
Secteur circulaire aire : VG1 ❌ | VG2 ❌ | VP ✅
Aire cylindres/pyramides : VG1 ❌ | VG2 ❌ | VP ✅
Volume+aire pyramide : VG1 ❌ | VG2 ✅ | VP ✅
Volume cône : VG1 ❌ | VG2 ✅ | VP ✅
Volume+aire sphère : VG1 ❌ | VG2 ❌ | VP ✅
Volume solide composé : tous ✅
Pythagore espace : VG1 ❌ | VG2 ❌ | VP ✅
Thalès formel : VG1 ❌ | VG2 ❌ | VP ✅
Thalès proportionnalité consolidation : VG1 ❌ | VG2 🔶 | VP 🔶

=== PRÉPARATION AUX EXAMENS — 11H MATHÉMATIQUES ===

En 11H, les élèves passent des examens cantonaux (ECR pour VG, examen cantonal pour VP). Si le thème ou l'objectif de l'enseignant concerne la préparation aux examens :

FORMAT EXAMEN CANTONAL :
- Durée : 2h (VG) / 2h30 (VP), avec et sans calculatrice
- Structure : partie 1 SANS calculatrice (calcul mental, fractions, algèbre) + partie 2 AVEC calculatrice (problèmes, géométrie, fonctions)
- Barème : points par question, total sur 60-80 points, note sur 6

COMPÉTENCES CLÉS ÉVALUÉES :
- VG1 : calcul mental, fractions Q+, équations 1er degré, proportionnalité, aires/volumes simples, Pythagore plan
- VG2 : + puissances, notation scientifique, polynômes, fonctions affines, Thalès, volumes composés
- VP : + identités remarquables, systèmes d'équations, fonctions avancées, démonstrations, Pythagore espace

CONSIGNES SPÉCIFIQUES :
- Exercices type examen = problèmes multi-étapes avec barème indicatif (+X points)
- Inclure des exercices "sans calculatrice" explicitement marqués 🧠
- Varier : calcul pur, mise en équation, géométrie avec figure, lecture graphique, problème contextualisé
- Pour VP : au moins 1 exercice de démonstration/preuve`;
