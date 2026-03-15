export const block2 = `=== HISTOIRE 9H — ANTIQUITÉ → MOYEN ÂGE ===

=== STRUCTURE V3 DE LA FICHE ===

Génère une fiche d'histoire en 6 sections exactement dans cet ordre. Chaque section a un rôle cognitif précis. Ne saute aucune section, n'en ajoute aucune (pas de fiche outil, pas de prétest séparé).

--- SECTION 1 : ACCROCHE ---

Commence par un fait historique SURPRENANT, une question-mystère ou une situation concrète qui donne envie d'en savoir plus.
- Doit être historiquement exact et fascinant (pas un cliché — cherche l'angle inattendu)
- Ton : "Wow, vraiment ?!" — captiver un ado de 12-13 ans dès la première phrase
- Ensuite, une mini-frise chronologique avec 3-5 dates-clés maximum :

<div class="timeline-box">
  <h3 class="timeline-title">📅 Repères chronologiques</h3>
  <div class="timeline-item"><span class="timeline-date">753 av. J.-C.</span><span class="timeline-text">Fondation de Rome</span></div>
  <!-- 3-5 items max -->
</div>

--- SECTION 2 : PRÉDICTION ---

AVANT tout texte explicatif, pose 1-2 questions de prédiction :
- "Selon toi, pourquoi... ?" / "Que va-t-il se passer si... ?" / "À ton avis, comment... ?"
- L'élève écrit sa prédiction dans une zone de réponse
- But : activer les connaissances antérieures et créer la curiosité (elaborative interrogation)

<div class="exercise-item">
  <span class="exercise-number">🔮</span>
  <span class="exercise-type">Prédiction</span>
  <p>[Question de prédiction]</p>
  <div class="answer-zone"><em>Écris ta prédiction ici...</em></div>
</div>

--- SECTION 3 : DÉCOUVERTE GUIDÉE (interpolated retrieval practice) ---

Un récit VIVANT en 2-3 paragraphes. PAS un texte de manuel scolaire — fais vivre l'histoire avec des détails concrets, des personnages réels, des anecdotes. L'élève doit sentir qu'il y était.

RÈGLE CRITIQUE : après CHAQUE paragraphe, insère 1-2 questions de compréhension rapides AVANT de passer au paragraphe suivant. C'est du "retrieval practice intercalé" — l'élève vérifie sa compréhension au fil de la lecture.

Types de questions variés (utiliser les classes CSS existantes) :
- QCM : <div class="exercise-item"> avec options a) b) c)
- Vrai/Faux : affirmation + <div class="answer-zone">
- Texte à trous : <div class="gap-sentence">Le pharaon est le <span class="gap">___</span> de l'Égypte.</div> + <div class="word-bank"><span class="word-chip">roi</span><span class="word-chip">prêtre</span></div>
- Associer : <div class="match-grid"> avec match-left / match-right
- Intrus : "Trouve l'intrus parmi ces éléments"

Adaptation par voie :
- VG1 : questions fermées uniquement (QCM, vrai/faux, trous avec mots fournis), vocabulaire simplifié (termes historiques expliqués entre parenthèses)
- VG2 : mix questions fermées + semi-ouvertes avec amorces ("Ce texte montre que..."), vocabulaire standard avec définition à la première occurrence
- VP : questions ouvertes sans guidage, vocabulaire historique précis sans définition

--- SECTION 4 : ANALYSE DE SOURCES ---

Choisis la ou les sources les plus pertinentes pour le thème. Pour chaque source :

1. Carte d'identité du document :
<div class="source-box">
  <div class="source-box-header">📜 Source — [Titre]</div>
  <div class="source-box-body">
    <p class="source-meta"><strong>Nature :</strong> [Fresque/Mosaïque/Texte/Enluminure/Carte/Sculpture...] | <strong>Date :</strong> [...] | <strong>Auteur :</strong> [...] | <strong>Contexte :</strong> [...]</p>
    [Si image fournie : <img class="source-image" src="[URL]" alt="[description]" />]
    [Si pas d'image : extrait textuel de la source entre guillemets, ou description détaillée]
  </div>
</div>

2. Questions progressives (3 niveaux) :
<div class="source-questions">
  <p>⭐ <strong>Observer :</strong> Que vois-tu / lis-tu ? Décris précisément...</p>
  <p>⭐⭐ <strong>Comprendre :</strong> Pourquoi... ? Dans quel contexte... ? Que signifie... ?</p>
  <p>⭐⭐⭐ <strong>Interpréter :</strong> Qu'en déduis-tu ? Que nous apprend ce document sur... ?</p>
</div>

3. Multiperspectivité : ajoute au moins une question de changement de point de vue ("Comment un [paysan/noble/esclave/marchand] voyait-il cela ?")

Adaptation par voie :
- VG1 : 1 source unique, carte d'identité pré-remplie partiellement (l'élève complète les trous), questions ⭐ et ⭐⭐ seulement (observer + comprendre), pas de critique de source
- VG2 : 2 sources à comparer, carte d'identité à remplir avec guidage, questions ⭐ à ⭐⭐⭐, amorces de phrases fournies pour l'interprétation
- VP : 2-3 sources de natures différentes, analyse autonome, critique de source (fiabilité, partialité, limites), argumentation libre

--- SECTION 5 : MISSION HISTORIEN ---

Une mini-mission concrète et FUN où l'élève endosse un rôle historique. Il doit PRODUIRE quelque chose (texte, lettre, article, discours, dessin légendé...).

Exemples de missions :
- "Tu es journaliste à Rome en 44 av. J.-C. Écris un article sur l'assassinat de César."
- "Tu es un moine copiste au XIIe siècle. Décris ta journée dans le scriptorium."
- "Tu es un marchand sur la route de la soie. Écris une lettre à ta famille."
- "Tu es un citoyen athénien. Prépare ton discours pour l'Ecclesia."

La mission doit être historiquement fondée (pas de fantaisie) et adaptée au thème demandé.

Adaptation par voie :
- VG1 : mission très guidée avec amorces de phrases et mots-clés fournis, production courte (5-8 phrases)
- VG2 : mission avec consignes structurantes (plan suggéré), production moyenne (10-15 phrases)
- VP : mission libre avec contraintes historiques (citer des faits précis, utiliser le vocabulaire d'époque), production longue

<div class="level-card level-3">
  <div class="level-banner">🏆 Mission Historien</div>
  <div class="level-body">
    <div class="exercise-item">
      <span class="exercise-number">🎭</span>
      <span class="exercise-type">Production</span>
      <p>[Consigne de la mission]</p>
      <div class="answer-zone" style="min-height:120px"><em>Ta mission commence ici...</em></div>
    </div>
  </div>
</div>

--- SECTION 6 : AUTO-ÉVALUATION + CORRIGÉ ---

1. Retour sur la prédiction :
<div class="self-eval">
  <p>🔮 <strong>Ta prédiction était-elle juste ?</strong> Relis ta prédiction de la Section 2. Que sais-tu maintenant que tu ne savais pas avant ?</p>
  <div class="answer-zone"><em>Compare ta prédiction avec ce que tu as appris...</em></div>
</div>

2. Auto-évaluation 3 smileys :
<div class="self-eval">
  <p>Comment te sens-tu sur ce thème ?</p>
  <p>🟢 Je maîtrise — je peux expliquer à quelqu'un d'autre</p>
  <p>🟡 Je comprends — mais j'ai encore des doutes</p>
  <p>🔴 J'ai besoin d'aide — je dois revoir certaines notions</p>
</div>

3. Corrigé compact :
<div class="corrige-section">
  [Réponses de TOUTES les questions des sections 2-5, numérotées et organisées]
</div>

=== COMPÉTENCES PER SHS 32 ===

Affiche la compétence PER travaillée avec : <span class="per-competence-badge">SHS 32.X</span>

Compétences disponibles :
- SHS 32.1 : Situer des événements sur une frise chronologique
- SHS 32.2 : Analyser des sources historiques de natures différentes
- SHS 32.3 : Mettre en relation événements, acteurs et contextes
- SHS 32.4 : Distinguer faits, hypothèses et opinions
- SHS 32.5 : Comprendre les liens passé-présent
- SHS 32.6 : Utiliser le vocabulaire historique approprié
- SHS 32.7 : Construire un raisonnement historique argumenté

Choisis 1-2 compétences pertinentes pour le thème traité et affiche-les dans le header de la fiche.

=== 4 DIMENSIONS D'ANALYSE ===

Chaque fiche doit mobiliser AU MOINS 2 de ces 4 dimensions :
1. Sociale/culturelle : modes de vie, hiérarchies, art, éducation
2. Économique : commerce, agriculture, monnaie, routes
3. Politique : gouvernement, lois, conquêtes, institutions
4. Religieuse : croyances, pratiques, rapports religion/pouvoir

Mentionne explicitement les dimensions travaillées dans la fiche.

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

1. VÉRITÉ HISTORIQUE : jamais inventer de faits. Dates exactes (753 av. J.-C., pas "vers 750"). Si incertain, le signaler ("selon les historiens...").
2. NEUTRALITÉ : civilisations et religions sans jugement. Éviter l'eurocentrisme. Diversité des points de vue.
3. PAS D'ANACHRONISME : ne pas plaquer des concepts modernes sur des réalités anciennes (ex : démocratie athénienne ≠ démocratie actuelle — préciser les différences).
4. TON VIVANT : l'histoire doit être FASCINANTE. Détails concrets, personnages réels, anecdotes surprenantes. Pas de prose de manuel.
5. ANCRAGE ADO : comparaisons passé/présent, liens avec la Suisse/Vaud, enquêtes historiques, récits immersifs.
6. PAS DE FICHE OUTIL : ne pas générer de section "fiche outil" ou "méthode" séparée. La méthode d'analyse est intégrée dans la section Analyse de sources.

=== CSS DISPONIBLES ===
source-box, source-box-header, source-box-body, source-image, source-caption, source-meta, source-questions, timeline-box, timeline-title, timeline-item, timeline-date, timeline-text, per-competence-badge, recall-box, level-card, level-banner, level-body, exercise-item, exercise-number, exercise-type, answer-zone, answer-line, answer-blank, match-grid, match-left, match-right, match-arrow, gap-sentence, gap, word-bank, word-chip, trap-box, quiz-card, quiz-banner, quiz-body, quiz-item, self-eval, corrige-section, mission-header, compare-table`;
