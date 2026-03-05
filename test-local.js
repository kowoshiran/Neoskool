/**
 * Test local de generation de fiche Neoskool
 *
 * Usage: node test-local.js
 *
 * Prerequis: definir ANTHROPIC_API_KEY en variable d'environnement
 *   Windows: set ANTHROPIC_API_KEY=sk-ant-...
 *   Bash:    export ANTHROPIC_API_KEY=sk-ant-...
 */

import { block1 } from './prompts/block1.js';
import { block2 as allemand9H } from './prompts/allemand-9H.js';
import { block2 as francais9H } from './prompts/francais-9H.js';
import { block2 as maths9H } from './prompts/maths-9H.js';

// === CONFIGURATION DU TEST ===
const TEST_CONFIG = {
  matiere: 'Allemand',
  block2: allemand9H,
  degre: '9H (12-13 ans)',
  voie: 'VG niveau 1 (exigences de base)',
  difficulte: 'Initiés',
  chapitre: '3',
  sujet: 'Décrire sa famille et sa maison',
  theme: '',
};
// Pour tester francais: matiere:'Français', block2:francais9H, sujet:'Les classes grammaticales'
// Pour tester maths: matiere:'Mathématiques', block2:maths9H, sujet:'Les fractions'

const API_KEY = process.env.ANTHROPIC_API_KEY;
if (!API_KEY) {
  console.error('ERREUR: Variable ANTHROPIC_API_KEY non definie.');
  console.error('  Windows: set ANTHROPIC_API_KEY=sk-ant-...');
  console.error('  Bash:    export ANTHROPIC_API_KEY=sk-ant-...');
  process.exit(1);
}

// Build user message
const { matiere, degre, voie, difficulte, chapitre, sujet, theme } = TEST_CONFIG;
let userMessage = `Profil : Enseignant\nFormat : Impression (fiche exercice + fiche outil séparée, sans aides cliquables)`;
userMessage += `\nMatière : ${matiere}\nDegré : ${degre}`;
if (voie) userMessage += `\nVoie : ${voie}`;
if (difficulte) userMessage += `\nNiveau de la classe : ${difficulte}`;
if (chapitre) userMessage += `\nChapitre : ${chapitre}`;
userMessage += `\nObjectif : ${sujet}`;
if (theme) userMessage += `\nThème / Vocabulaire visé : ${theme}`;

console.log('=== TEST NEOSKOOL LOCAL ===');
console.log(`Matiere: ${matiere} | Degre: ${degre} | Voie: ${voie}`);
console.log(`Difficulte: ${difficulte} | Chapitre: ${chapitre}`);
console.log(`Sujet: ${sujet}`);
console.log('');
console.log(`Block1: ${block1.length} chars`);
console.log(`Block2: ${TEST_CONFIG.block2.length} chars`);
console.log('');
console.log('Appel API en cours...');
const startTime = Date.now();

const response = await fetch('https://api.anthropic.com/v1/messages', {
  method: 'POST',
  headers: {
    'x-api-key': API_KEY,
    'anthropic-version': '2023-06-01',
    'content-type': 'application/json',
  },
  body: JSON.stringify({
    model: 'claude-sonnet-4-5-20250929',
    max_tokens: 12288,
    system: [
      { type: 'text', text: block1 },
      { type: 'text', text: TEST_CONFIG.block2 },
    ],
    messages: [{ role: 'user', content: userMessage }],
  }),
});

if (!response.ok) {
  const err = await response.text();
  console.error(`Erreur API ${response.status}:`, err);
  process.exit(1);
}

const result = await response.json();
const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
const content = result.content[0].text;
const usage = result.usage;

console.log(`\nGeneration terminee en ${elapsed}s`);
console.log(`Tokens input: ${usage.input_tokens} (cache read: ${usage.cache_read_input_tokens || 0})`);
console.log(`Tokens output: ${usage.output_tokens}`);
console.log(`Stop reason: ${result.stop_reason}`);

// Cost calculation
const inputCost = ((usage.input_tokens - (usage.cache_read_input_tokens || 0)) * 3 / 1000000) +
                  ((usage.cache_read_input_tokens || 0) * 0.3 / 1000000);
const outputCost = usage.output_tokens * 15 / 1000000;
console.log(`Cout estime: $${(inputCost + outputCost).toFixed(4)} (input: $${inputCost.toFixed(4)}, output: $${outputCost.toFixed(4)})`);

if (result.stop_reason === 'max_tokens') {
  console.log('\n*** ATTENTION: Fiche COUPEE (max_tokens atteint) ***');
} else {
  console.log('\nFiche COMPLETE (end_turn)');
}

// Check structure
const requiredClasses = ['recall-box', 'level-card level-1', 'level-card level-2', 'level-card level-3',
                          'quiz-card', 'self-eval', 'corrige-section', 'tool-sheet', 'per-footer'];
console.log('\nVerification structure:');
for (const cls of requiredClasses) {
  const found = content.includes(cls);
  console.log(`  ${found ? 'OK' : 'MANQUE'} ${cls}`);
}

// Save output
const fs = await import('fs');
fs.writeFileSync('test-output.html', content);
console.log('\nHTML sauvegarde dans test-output.html');
console.log(`Taille: ${content.length} chars`);
