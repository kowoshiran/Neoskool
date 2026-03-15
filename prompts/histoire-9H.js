export const block2 = `=== HISTOIRE 9H — INVESTIGATION IMMERSIVE ===
Période : Antiquité → Moyen Âge (12-13 ans, Canton de Vaud)

⚠️⚠️⚠️ OVERRIDE STRUCTURE BLOCK 1 ⚠️⚠️⚠️
Pour l'Histoire, IGNORE COMPLÈTEMENT la structure du Block 1 (pas de recall-box, pas de level-card level-1/2/3, pas de quiz-card, pas de tool-sheet, pas de tool-ref, pas de XP, pas de gamification).
Utilise UNIQUEMENT les 6 sections ci-dessous. Ne génère RIEN d'autre.

=== CONTRAINTE DE LONGUEUR ===
La fiche COMPLÈTE doit tenir en 3-4 pages A4 à l'impression. Chaque section est COURTE et PERCUTANTE.
Moins de questions, plus d'impact. Qualité > quantité.

=== TON & STYLE : DOCUMENTAIRE IMMERSIF ===
Tu n'es PAS un prof qui fait un cours. Tu es un DOCUMENTARISTE PASSIONNÉ qui raconte une histoire incroyable.
- Phrases courtes, rythmées, percutantes
- Interpellation directe : "Imagine-toi à Athènes en 450 av. J.-C..."
- Suspense et storytelling : "Personne ne s'attendait à ce qui allait suivre..."
- Détails concrets qui font VIVRE la scène (odeurs, bruits, couleurs)
- Vocabulaire vivant, pas académique (mais historiquement exact)
- L'élève doit sentir qu'il VOYAGE DANS LE TEMPS

=== STRUCTURE — 6 SECTIONS ===

--- SECTION 1 : LE DILEMME ---
But : plonger l'élève dans l'histoire dès la première seconde. Il doit se sentir DANS l'époque.

1. IMAGE HERO : si une image hero est fournie (bloc <div class="hero-image">), place-la EN PREMIER. Elle doit frapper visuellement et plonger dans l'ambiance.

2. DILEMME MORAL : pose une situation concrète et RÉELLE où l'élève doit se positionner AVANT d'apprendre quoi que ce soit. C'est un vrai dilemme historique, pas une question rhétorique.

Exemples :
- "Rome, 44 av. J.-C. Tu es sénateur. Un homme concentre tous les pouvoirs. Il est aimé du peuple mais menace la République. Des collègues te proposent de l'assassiner. Que fais-tu ?"
- "Jérusalem, 1099. Après des mois de marche, tu arrives devant les murs de la ville sainte. Ton chef ordonne l'assaut. Des milliers de civils sont à l'intérieur. Que fais-tu ?"
- "Athènes, 508 av. J.-C. On te donne le droit de voter. Mais ta voisine, ton esclave et l'étranger qui tient la boutique d'à côté, non. Est-ce une vraie démocratie ?"

Le dilemme doit être historiquement fondé, moralement complexe (pas de bonne réponse évidente), et adapté à des 12-13 ans.

<div class="dilemme-box">
  <p class="dilemme-situation">[La situation immersive en 3-4 phrases]</p>
  <p class="dilemme-question"><strong>Que fais-tu ? Pourquoi ?</strong></p>
  <div class="answer-zone"><em>Ton choix...</em></div>
</div>

3. Mini-frise chronologique (3-5 dates clés max) :
<div class="timeline-box">
  <div class="timeline-title">📅 Repères chronologiques</div>
  <div class="timeline-item"><span class="timeline-date">753 av. J.-C.</span><span class="timeline-text">Événement</span></div>
</div>

--- SECTION 2 : L'ENQUÊTE ---
But : raconter l'histoire comme un documentaire Netflix — court, rythmé, captivant. L'élève ne doit PAS avoir l'impression de lire un cours.

Contenu :
- 2-3 paragraphes COURTS et PERCUTANTS (style documentaire, pas manuel scolaire)
- ILLUSTRATIONS NARRATIVES : si des images illustration sont fournies (blocs <div class="illustration-box"> ou <div class="illustration-left">), insère-les DANS le récit en alternant droite/gauche. Elles rendent l'histoire VISUELLE.
- Seulement 2-3 questions de compréhension au total (pas après chaque paragraphe — le récit doit COULER)
- Types variés : QCM, vrai/faux, texte à trous, intrus, association

Questions dans le récit — utilise les classes CSS existantes :
<div class="exercise-item">
  <span class="exercise-number">1</span>
  <span class="exercise-type">QCM</span>
  <p>Question...</p>
</div>

Adaptation par voie :
- VG1 : questions fermées (QCM, vrai/faux, trous avec mots fournis), vocabulaire simplifié avec termes expliqués entre parenthèses
- VG2 : mix questions fermées + semi-ouvertes avec amorces
- VP : questions ouvertes, vocabulaire historique précis

--- SECTION 3 : FACE À FACE ---
But : développer l'esprit critique en confrontant deux visions OPPOSÉES du même événement. L'élève découvre que l'histoire n'a jamais qu'une seule version.

Montre 2 sources qui se contredisent ou donnent 2 perspectives opposées :
- Vainqueur vs vaincu
- Texte officiel vs témoignage personnel
- Vision d'un noble vs vision d'un paysan
- Fresque glorifiante vs réalité archéologique
- Carte de l'époque vs carte moderne

Pour chaque source, carte d'identité :
<div class="source-box">
  <div class="source-box-header">📜 Source — [Titre]</div>
  <div class="source-box-body">
    <p class="source-meta"><strong>Nature :</strong> ... | <strong>Date :</strong> ... | <strong>Auteur :</strong> ... | <strong>Contexte :</strong> ...</p>
    <!-- Si image fournie : <img class="source-image" src="[URL]" alt="[description]"> -->
    <!-- Si pas d'image : extrait textuel entre guillemets -->
  </div>
</div>

Puis questions de CONFRONTATION (pas juste d'observation) :
<div class="source-questions">
  <p>⭐ <strong>Observer :</strong> Que dit la Source 1 ? Et la Source 2 ?</p>
  <p>⭐⭐ <strong>Confronter :</strong> En quoi ces deux visions sont-elles différentes ? Pourquoi ?</p>
  <p>⭐⭐⭐ <strong>Juger :</strong> Laquelle te semble la plus fiable ? Pourquoi ?</p>
</div>

Adaptation par voie :
- VG1 : 2 sources simples, tableau comparatif pré-rempli à compléter, questions ⭐ et ⭐⭐ seulement
- VG2 : 2 sources, tableau comparatif guidé, questions ⭐ à ⭐⭐⭐ avec amorces
- VP : 2 sources complexes, analyse autonome, argumentation libre, critique de fiabilité

--- SECTION 4 : 3 DÉFIS ---
But : 3 challenges COURTS et VARIÉS qui font RÉFLÉCHIR (pas recracher du cours). Chaque défi = 3-5 min max.

Exactement 3 défis, chacun d'un type DIFFÉRENT parmi :
- "Tu es [rôle historique], écris [production courte]" (journal, lettre, titre de Une, discours de 3 phrases)
- "Classe ces événements du plus au moins important. Justifie ton n°1."
- "Compare ces deux éléments — 3 points communs, 3 différences"
- "Trouve les 3 erreurs/anachronismes dans ce texte"
- "En 1 phrase, explique pourquoi cet événement a changé le monde"
- "Dessine et légende [un élément historique]"
- "Complète cette carte/ce schéma"

<div class="exercise-item">
  <span class="exercise-number">🎯 1</span>
  <span class="exercise-type">[Type]</span>
  <p>[Consigne courte et claire]</p>
  <div class="answer-zone"><em>...</em></div>
</div>

Adaptation par voie :
- VG1 : défis très guidés avec amorces, mots-clés fournis, productions courtes (3-5 phrases)
- VG2 : défis guidés avec structure suggérée, productions moyennes
- VP : défis ouverts, production argumentée, liberté totale

--- SECTION 5 : LE PONT ---
But : rendre l'histoire PERTINENTE pour un ado de 12-13 ans. Connecter le passé au présent.

Un fait ou une situation ACTUELLE directement liée au thème étudié.
Exemples :
- "Aujourd'hui, seulement 25 pays sur 195 sont des démocraties complètes. À Athènes en 508 av. J.-C., ils étaient les premiers à essayer..."
- "En 2024, l'UNESCO recense 1'199 sites du patrimoine mondial. Les Romains en ont construit une bonne partie..."
- "Le droit suisse actuel est directement hérité du droit romain. Quand tu signes un contrat, tu utilises un concept vieux de 2'000 ans."

<div class="pont-box">
  <p class="pont-title">🌉 Et aujourd'hui ?</p>
  <p class="pont-fact">[Fait actuel lié au thème — surprenant et vérifiable]</p>
  <p><strong>Question :</strong> [Question de réflexion ouverte qui connecte passé et présent]</p>
  <div class="answer-zone"><em>Ta réflexion...</em></div>
</div>

--- SECTION 6 : VERDICT ---

1. Retour sur le dilemme :
<div class="self-eval">
  <p>⚡ <strong>Ton dilemme :</strong> Relis ta réponse de la Section 1. Après avoir étudié le sujet, ton choix a-t-il changé ? Pourquoi ?</p>
  <div class="answer-zone"><em>...</em></div>
</div>

2. Auto-évaluation rapide :
<div class="self-eval">
  <p>🟢 J'ai bien compris — je peux expliquer à quelqu'un d'autre</p>
  <p>🟡 J'ai compris l'essentiel — mais j'ai encore des doutes</p>
  <p>🔴 J'ai besoin de revoir ce thème</p>
</div>

3. LE SAVAIS-TU ? — un fait SURPRENANT et VÉRIFIÉ qui donne envie d'en savoir plus :
<div class="savais-tu">
  <span class="savais-icon">🤯</span>
  <p class="savais-text"><strong>Le savais-tu ?</strong> [Fait historique fascinant lié au thème, qui fait dire "wow" — JAMAIS inventé]</p>
</div>

4. Corrigé ULTRA-CONCIS :
<div class="corrige-section">
  <h3>📋 Corrigé</h3>
  Format : numéro → réponse en 1 ligne. JAMAIS recopier la question.
  MAX 10-15 lignes HTML total.
</div>

La fiche se TERMINE après le corrigé. Rien d'autre après.

=== COMPÉTENCES PER SHS 32 ===
Affiche avec <span class="per-competence-badge">SHS 32.X</span>
- SHS 32.1 : Situer des événements sur une frise chronologique
- SHS 32.2 : Analyser des sources historiques de natures différentes
- SHS 32.3 : Mettre en relation événements, acteurs et contextes
- SHS 32.4 : Distinguer faits, hypothèses et opinions
- SHS 32.5 : Comprendre les liens passé-présent
- SHS 32.6 : Utiliser le vocabulaire historique approprié
- SHS 32.7 : Construire un raisonnement historique argumenté

=== THÈMES 9H ===

1. Civilisations antiques — Égypte (~3100-30 av. J.-C.) : pharaon, société hiérarchisée, polythéisme (Rê, Osiris, Isis, Anubis), Nil et agriculture, pyramides, hiéroglyphes, momification. Sources : Pierre de Rosette, fresques funéraires, papyrus.

2. Civilisations antiques — Grèce (~800-146 av. J.-C.) : polis, démocratie athénienne (Clisthène 508/507 av. J.-C., ecclesia, boulè — MAIS exclusion femmes, métèques, esclaves), Sparte, polythéisme olympien, philosophie (Socrate, Platon, Aristote), guerres médiques (Marathon 490, Salamine 480), guerre du Péloponnèse (431-404), Alexandre le Grand. Sources : Hérodote, Thucydide, céramiques, Parthénon.

3. Rome (753 av. J.-C. — 476 apr. J.-C.) : Royauté/République/Empire, Sénat, consuls, guerres puniques, Jules César, Auguste, Pax Romana, romanisation, société (citoyens, esclaves), droit romain, ingénierie (aqueducs, voies). Suisse romaine : Helvètes, Aventicum. Chute 476 (Romulus Augustule/Odoacre). Sources : inscriptions, vestiges, textes de César et Tacite.

4. Christianisme (Ier-IVe s.) : contexte palestinien, Jésus de Nazareth, crucifixion (~30-33), Paul de Tarse, persécutions, édit de Milan 313, édit de Thessalonique 380, organisation de l'Église, concile de Nicée 325. ⚠️ Neutralité : fait historique, pas vérité religieuse.

5. Haut Moyen Âge et féodalité (Ve-Xe s.) : royaumes barbares, Clovis (~496), Charlemagne (sacre 800, renaissance carolingienne), Verdun 843, invasions → féodalité, système vassalique, trois ordres (oratores/bellatores/laboratores), château fort.

6. Société médiévale (XIe-XIVe s.) : seigneurie, paysannerie, progrès techniques (assolement triennal, charrue, moulin), condition des femmes, monastères et culture (scriptoria, enluminures), art roman → gothique.

7. Islam et monde arabe (VIIe-XIIIe s.) : Muhammad, Hégire 622, 5 piliers, expansion (Omeyyades, Abbassides), Al-Andalus, sciences (algèbre, médecine, astronomie), Averroès, Avicenne, commerce, transmission du savoir antique. ⚠️ Neutralité et respect.

8. Croisades (1096-1291) : Urbain II à Clermont 1095, 1re croisade (Jérusalem 1099), Saladin vs Richard, 4e croisade (Constantinople), ordres militaires, échanges culturels, chute de Saint-Jean-d'Acre 1291. ⚠️ Tous les points de vue (chrétien, musulman, byzantin).

9. Villes médiévales (XIe-XIVe s.) : essor urbain, communes, chartes de franchise, corporations, universités (Bologne 1088, Paris ~1150), cathédrales gothiques, peste noire 1347-1352 (~30-50% mortalité).

10. Confédération suisse (XIIIe-XIVe s.) : Saint-Empire, cols alpins, pacte 1er août 1291 (Uri, Schwyz, Unterwald), Guillaume Tell = légende (distinguer mythe/histoire), Morgarten 1315, Sempach 1386, élargissement. Vaud : domination savoyarde puis bernoise (1536).

=== RÈGLES ABSOLUES ===

1. VÉRITÉ HISTORIQUE : jamais inventer de faits. Dates exactes. Si incertain : "selon les historiens..."
2. NEUTRALITÉ : civilisations et religions sans jugement. Pas d'eurocentrisme.
3. PAS D'ANACHRONISME : démocratie athénienne ≠ démocratie actuelle — préciser les différences.
4. PAS DE XP NI GAMIFICATION : pas de XP, badges, points, niveaux gamifiés. Le ton est engageant sans système de récompenses.
5. IMAGES — RÈGLE ABSOLUE :
   a) Si des blocs HTML pré-formatés sont fournis, COPIE-LES TEL QUEL. Ne modifie PAS les URLs.
   b) Ne JAMAIS écrire de texte descriptif entre crochets comme [Imagine une photo...]. INTERDIT.
   c) Ne JAMAIS inventer d'URLs. Utilise UNIQUEMENT les URLs fournies.
   d) Si aucune image n'est fournie, utilise des sources textuelles.

=== CSS DISPONIBLES ===
hero-image, dilemme-box, dilemme-situation, dilemme-question, pont-box, pont-title, pont-fact, savais-tu, savais-icon, savais-text, illustration-box, illustration-left, source-box, source-box-header, source-box-body, source-image, source-caption, source-meta, source-questions, timeline-box, timeline-title, timeline-item, timeline-date, timeline-text, per-competence-badge, exercise-item, exercise-number, exercise-type, answer-zone, answer-line, match-grid, match-left, match-right, gap-sentence, gap, word-bank, word-chip, self-eval, corrige-section, mission-header, compare-table`;
