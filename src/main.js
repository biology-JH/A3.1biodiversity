import { BINOMIAL_SPECIES, FAUNA, FLASHCARDS, GENOME_DATA, IMAGE_CREDITS, IMAGES, QUIZ } from './data.js';

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const state = {
  faunaMode: 'amphibians',
  specimenIndex: 0,
  coupletStep: 0,
  ednaStep: 0,
  answers: {},
  score: 0,
  answered: 0,
  questionOrder: {},
};

function setImage(element, src, alt = '') {
  if (!element) return;
  element.src = src;
  element.alt = alt;
}

function renderFlashcards() {
  const host = $('#flashcards');
  host.innerHTML = FLASHCARDS.map((card, index) => `
    <div class="flash-card" data-flash-card="${index}">
      <button class="flash-flip" type="button" aria-pressed="false" aria-label="Flip ${card.term} card">
        <div class="flash-inner">
          <div class="flash-face flash-front">
            <img src="${card.image}" alt="${card.alt}" loading="lazy">
            <div class="flash-front-copy"><div class="flash-topline"><span class="eyebrow">${card.tag}</span><span class="pill">FLIP ↻</span></div><h3>${card.term}</h3><p class="flip-hint">${card.front}</p></div>
          </div>
          <div class="flash-face flash-back"><div><span class="eyebrow">${card.tag} · KEY IDEA</span><h3>${card.term}</h3><p>${card.back}</p></div><span class="flip-hint">Tap to turn back ↺</span></div>
        </div>
      </button>
    </div>`).join('');
  $$('.flash-card').forEach(card => {
    const button = $('.flash-flip', card);
    button.addEventListener('click', () => {
      const flipped = card.classList.toggle('is-flipped');
      button.setAttribute('aria-pressed', String(flipped));
    });
  });
}

function renderBinomialTrainer() {
  const form = $('#nomenclature-form');
  form.innerHTML = `
    <span>In a binomial, the first word is the</span>
    <select id="genus-choice" aria-label="Choose the first part of a binomial"><option value="">Choose…</option><option>genus</option><option>family</option><option>specific epithet</option></select>
    <span>; the second is the</span>
    <select id="epithet-choice" aria-label="Choose the second part of a binomial"><option value="">Choose…</option><option>genus</option><option>family</option><option>specific epithet</option></select>
    <span>. When typed, both are written in</span>
    <select id="format-choice" aria-label="Choose the correct scientific name formatting"><option value="">Choose…</option><option>italics</option><option>bold</option><option>underline</option></select>
    <button type="button" id="check-binomial" class="button button-primary">Check rule <span>→</span></button>`;
  $('#check-binomial').addEventListener('click', () => {
    const correct = $('#genus-choice').value === 'genus' && $('#epithet-choice').value === 'specific epithet' && $('#format-choice').value === 'italics';
    const message = $('#nomenclature-feedback');
    message.className = `feedback ${correct ? 'is-success' : 'is-error'}`;
    message.textContent = correct ? 'Correct. Capitalise the genus; keep the specific epithet lowercase; italicise both when typed.' : 'Not quite. The order is genus + specific epithet, with only the genus capitalised; typed names are italicised.';
  });
  $('#panthera-gallery').innerHTML = BINOMIAL_SPECIES.map(species => `
    <article class="panthera-card"><img src="${species.image}" alt="${species.common}" loading="lazy"><div><strong>${species.common}</strong><em>${species.name}</em><small>${species.source}</small></div></article>`).join('');
}

function renderChromatogram() {
  setImage($('#chromatogram-image'), IMAGES.chromatogram, 'Sanger chromatogram with double peaks labelled G/A at position 140 and T/C at position 246');
  $$('.hotspot').forEach(button => button.addEventListener('click', () => {
    const position = button.dataset.snp;
    const bases = position === '140' ? 'G/A' : 'T/C';
    $('#chrom-feedback').innerHTML = `<span class="callout-icon">⌖</span><span><strong>Position ${position}: ${bases}.</strong> Two superimposed fluorescence signals indicate two nucleotide calls at this locus, consistent with a heterozygous SNP in a diploid sample.</span>`;
    $$('.hotspot').forEach(item => item.classList.toggle('is-selected', item === button));
  }));
}

const fusionEvidence = {
  band: {title: '1 · G-banding homology', text: 'The banding order along human chromosome 2 matches chimpanzee chromosomes 2A and 2B arranged end-to-end. This is the structural pattern expected after fusion.'},
  telomere: {title: '2 · Internal telomeric repeats · 2q13', text: 'Inverted TTAGGG telomere-repeat arrays lie inside chromosome 2 at 2q13. Telomere sequences at an internal site are predicted by an ancestral end-to-end fusion.'},
  centromere: {title: '3 · Vestigial centromere · 2q21', text: 'A second, inactive centromere remnant with alphoid satellite DNA lies at 2q21. One chromosome retains the active centromere; the other site is vestigial.'},
};
function setFusionEvidence(key) {
  const item = fusionEvidence[key];
  if (!item) return;
  $('#fusion-feedback').innerHTML = `<strong>${item.title}</strong><br>${item.text}`;
  $$('.fusion-pin').forEach(button => button.classList.toggle('is-selected', button.dataset.evidence === key));
}
function renderChromosomeExplorer() {
  setImage($('#karyogram-image'), IMAGES.karyogram, 'Human and chimpanzee karyograms showing the chromosome-number difference');
  setImage($('#fusion-image'), IMAGES.fusion, 'Slide diagram: chimpanzee chromosomes 2A and 2B correspond to human chromosome 2');
  $$('.fusion-pin').forEach(button => button.addEventListener('click', () => setFusionEvidence(button.dataset.evidence)));
  const evidenceHost = $('#fusion-evidence-list');
  evidenceHost.innerHTML = Object.entries(fusionEvidence).map(([key, item]) => `<button class="evidence-card" type="button" data-evidence-card="${key}"><strong>${item.title}</strong><p>${item.text}</p></button>`).join('');
  $$('[data-evidence-card]').forEach(button => button.addEventListener('click', () => setFusionEvidence(button.dataset.evidenceCard)));
  const muleToggle = $('#mule-toggle');
  muleToggle.addEventListener('click', () => {
    const content = $('#mule-content');
    const open = content.hidden;
    content.hidden = !open;
    muleToggle.setAttribute('aria-expanded', String(open));
    muleToggle.innerHTML = open ? 'Close comparison <span>−</span>' : 'Open comparison <span>＋</span>';
    if (open && !content.dataset.rendered) {
      content.innerHTML = `
        <div class="mule-grid"><div>
          <p class="body-copy">A horse gamete contributes 32 chromosomes and a donkey gamete contributes 31. The mule has 63. Many chromosomes lack a matching homologous partner, so meiosis cannot form balanced pairs reliably.</p>
          <div class="mule-facts"><div class="mule-fact"><strong>64</strong><small>Horse · 2n</small></div><div class="mule-fact"><strong>62</strong><small>Donkey · 2n</small></div><div class="mule-fact"><strong>63</strong><small>Mule · 2n</small></div></div>
          <p class="micro-note">Unpaired chromosomes disrupt synapsis during meiosis; functional gametes are not produced in most mules.</p>
        </div><div><img src="${IMAGES.equineKaryotypes}" alt="Slide karyotype comparison of horse, donkey and mule chromosomes"><img src="${IMAGES.donkey}" alt="Donkey photograph from the lesson slides" loading="lazy"></div></div>`;
      content.dataset.rendered = 'true';
    }
  });
}

const repeatLabels = [
  {title: 'Transposons', detail: 'Mobile DNA copies insert into new sites.', source: IMAGES.repeatImages[0]},
  {title: 'Tandem repeats', detail: 'Repeated sequence blocks add non-coding DNA.', source: IMAGES.repeatImages[1]},
  {title: 'Polyploidy', detail: 'Whole-genome duplication is common in plants.', source: IMAGES.repeatImages[2]},
  {title: 'Introns', detail: 'Long non-coding regions can enlarge genomes.', source: IMAGES.repeatImages[3]},
];
function formatNumber(value) {
  return new Intl.NumberFormat('en-US').format(value);
}
function renderGenomeChart() {
  const mode = $('#genome-sort').value;
  const values = [...GENOME_DATA];
  if (mode === 'genome') values.sort((a, b) => a.mbp - b.mbp);
  if (mode === 'genes') values.sort((a, b) => (a.geneCount ?? -1) - (b.geneCount ?? -1));
  if (mode === 'complexity') values.sort((a, b) => a.complexityTier - b.complexityTier || a.mbp - b.mbp);
  const max = mode === 'genome' ? Math.max(...values.map(item => item.mbp)) : mode === 'genes' ? Math.max(1, ...values.map(item => item.geneCount ?? 0)) : 3;
  const chart = $('#genome-chart');
  chart.innerHTML = values.map(item => {
    let width = 0;
    let valueText = '';
    if (mode === 'genome') {
      width = Math.max(3, Math.log10(item.mbp + 1) / Math.log10(max + 1) * 100);
      valueText = `${formatNumber(item.mbp)} Mbp`;
    } else if (mode === 'genes') {
      width = item.geneCount ? Math.max(3, item.geneCount / max * 100) : 0;
      valueText = item.geneCount ? formatNumber(item.geneCount) : 'not reported';
    } else {
      width = item.complexityTier / max * 100;
      valueText = item.organization;
    }
    const geneSource = item.geneSource ? `<a class="gene-source" href="${item.geneSource}" target="_blank" rel="noopener">annotation ↗</a>` : '';
    return `<div class="genome-row" role="listitem"><div class="genome-label"><strong>${item.common}</strong><em>${item.name}</em>${mode === 'complexity' ? `<span class="complexity-chip">${item.organization}</span>` : ''}</div><div class="bar-track" aria-label="${mode === 'genome' ? `${item.mbp} megabase pairs` : mode === 'genes' ? (item.geneCount ? `${item.geneCount} protein-coding genes` : 'gene count not reported') : item.organization}"><div class="bar-fill" style="width:${width}%"></div></div><div class="bar-value">${valueText} ${geneSource}</div></div>`;
  }).join('');
  const sourceNote = $('#gene-note');
  sourceNote.innerHTML = mode === 'genes'
    ? '<strong>Annotation-specific snapshot</strong><span>Counts depend on genome assembly and annotation release. Four supported counts are shown; Paris japonica and Amoeba proteus remain unavailable rather than guessed.</span>'
    : '<strong>Gene-count view</strong><span>Gene totals depend on the genome annotation and release. Missing values are shown as unavailable, not estimated from DNA mass.</span>';
  $('#complexity-note').innerHTML = '<strong>Complexity view</strong><span>Organisation is a qualitative grouping—unicellular eukaryotes, multicellular plants, and multicellular animals—not a universal measure of biological complexity.</span>';
}
function renderRepeatFigures() {
  $('#source-genome-chart').src = IMAGES.genomeChart;
  $('#repeat-grid').innerHTML = repeatLabels.map(item => `<article class="repeat-card"><img src="${item.source}" alt="Slide illustration for ${item.title}" loading="lazy"><strong>${item.title}</strong><span>${item.detail}</span></article>`).join('');
  $('#genome-sort').addEventListener('change', renderGenomeChart);
  renderGenomeChart();
}

const birdCouplets = [
  {question: 'Does the bird show bold black-and-white plumage with clear white wing patches and a long tail?', yes: 'magpie', no: 'continue'},
  {question: 'Does it have a strong black crest with a red cheek patch and red vent?', yes: 'bulbul', no: 'continue'},
  {question: 'Does its grey-brown neck show a black patch marked with white spots?', yes: 'dove', no: 'sparrow'},
];
function currentSpecimens() {
  return FAUNA[state.faunaMode];
}
function currentSpecimen() {
  return currentSpecimens()[state.specimenIndex % currentSpecimens().length];
}
function getBirdExpected(specimen) {
  if (state.coupletStep === 0) return specimen.id === 'magpie' ? 'yes' : 'no';
  if (state.coupletStep === 1) return specimen.id === 'bulbul' ? 'yes' : 'no';
  return specimen.id === 'dove' ? 'yes' : 'no';
}
function renderSpecimen() {
  const specimen = currentSpecimen();
  const source = state.faunaMode === 'birds' ? IMAGE_CREDITS[specimen.id] : {credit: 'Extracted lesson photograph', url: ''};
  const credit = source?.url ? `<a href="${source.url}" target="_blank" rel="noopener">${source.credit} · source ↗</a>` : '<span>Source: Part 2, slide 34</span>';
  $('#fauna-specimen').innerHTML = `<img src="${specimen.image}" alt="Mystery specimen photo: ${state.faunaMode === 'birds' ? 'Hong Kong bird reference' : 'Hong Kong native frog'}" loading="lazy"><div class="specimen-info"><span class="eyebrow">MYSTERY SPECIMEN · ${state.faunaMode === 'birds' ? 'BIRD KEY' : 'AMPHIBIAN KEY'}</span><h3>What did you observe?</h3><p>${state.faunaMode === 'birds' ? 'Inspect the crest, wing patches, nape markings and body colour.' : 'Inspect the dorsal pattern, skin texture, toe pads and apparent size.'}</p><p class="image-credit">${credit}</p></div>`;
  $('#fauna-feedback').className = 'feedback';
  $('#fauna-feedback').textContent = '';
  $('#fauna-result').className = 'key-result';
  $('#fauna-result').innerHTML = '';
  renderCouplet();
}
function renderCouplet() {
  const specimen = currentSpecimen();
  const isFrog = state.faunaMode === 'amphibians';
  const step = state.coupletStep;
  let question;
  let choices;
  if (isFrog) {
    question = 'Which paired diagnostic choice fits the specimen?';
    choices = [
      {side: 'yes', text: "A distinct dark X-shaped dorsal mark; adult smaller than 2.5 cm; toe pads visible."},
      {side: 'no', text: 'Granular olive skin; larger adult over 4 cm, with a suction-disc tadpole stage.'},
    ];
  } else {
    const node = birdCouplets[Math.min(step, birdCouplets.length - 1)];
    question = node.question;
    choices = step === 0
      ? [{side: 'yes', text: 'Yes — those black-and-white wing patches and long tail are visible.'}, {side: 'no', text: 'No — the plumage is not predominantly black-and-white.'}]
      : step === 1
        ? [{side: 'yes', text: 'Yes — a black crest and red cheek/vent markings are visible.'}, {side: 'no', text: 'No — it lacks that crest-and-red-mark combination.'}]
        : [{side: 'yes', text: 'Yes — the nape has a black patch with white spots.'}, {side: 'no', text: 'No — it has a chestnut crown and a black cheek spot instead.'}];
  }
  $('#fauna-couplet').innerHTML = `<span class="couplet-step">Couplet ${step + 1} · choose one</span><h3>${question}</h3><div class="choice-stack">${choices.map((choice, index) => `<button type="button" class="trait-choice" data-trait-side="${choice.side}"><span class="choice-letter">${index === 0 ? 'A' : 'B'}</span><span>${choice.text}</span></button>`).join('')}</div>`;
  $$('.trait-choice').forEach(button => button.addEventListener('click', () => selectTrait(button.dataset.traitSide)));
}
function selectTrait(side) {
  const specimen = currentSpecimen();
  const expected = state.faunaMode === 'amphibians' ? specimen.side : getBirdExpected(specimen);
  const feedback = $('#fauna-feedback');
  if (side !== expected) {
    feedback.className = 'feedback is-error';
    feedback.textContent = `Recheck the photo. Look for ${specimen.keyClue}; the selected branch is not the best match.`;
    return;
  }
  feedback.className = 'feedback is-success';
  feedback.textContent = 'Good observation. This couplet matches the visible diagnostic traits.';
  if (state.faunaMode === 'amphibians' || (state.faunaMode === 'birds' && (side === 'yes' || state.coupletStep === 2))) {
    showIdentification(specimen);
    return;
  }
  state.coupletStep += 1;
  renderCouplet();
}
function showIdentification(specimen) {
  $('#fauna-couplet').innerHTML = `<span class="couplet-step">KEY PATH COMPLETE</span><h3>Identification reached</h3><p class="body-copy">Diagnostic clue: ${specimen.keyClue}.</p>`;
  $('#fauna-result').className = 'key-result is-found';
  $('#fauna-result').innerHTML = `<strong>${specimen.common}</strong><em>${specimen.scientific}</em><span>Key clue: ${specimen.keyClue}.</span>`;
}
function setFaunaMode(mode) {
  state.faunaMode = mode;
  state.specimenIndex = 0;
  state.coupletStep = 0;
  $$('[data-fauna-mode]').forEach(button => {
    const active = button.dataset.faunaMode === mode;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  renderSpecimen();
}
function renderFaunaLab() {
  $$('[data-fauna-mode]').forEach(button => button.addEventListener('click', () => setFaunaMode(button.dataset.faunaMode)));
  $('#new-specimen').addEventListener('click', () => {
    state.specimenIndex = (state.specimenIndex + 1) % currentSpecimens().length;
    state.coupletStep = 0;
    renderSpecimen();
  });
  renderSpecimen();
}

const ednaSteps = [
  {title: '1 · Water sampling', short: 'Collect', text: 'Collect water from the habitat. Cells, mucus, faeces and other traces can contribute environmental DNA to the sample.', image: IMAGES.water, alt: 'Slide photograph of a field water-sampling location'},
  {title: '2 · Filtration', short: 'Filter', text: 'Pass the sample through a filter to capture cells and genetic material in the water. Use clean equipment to reduce contamination.', image: IMAGES.filtration, alt: 'Slide image of a filtration manifold'},
  {title: '3 · PCR amplification', short: 'Amplify', text: 'Extract DNA and amplify a barcode region with polymerase chain reaction. Animal surveys often use the mitochondrial COI marker.', image: IMAGES.pcr, alt: 'Slide lab workflow diagram related to DNA analysis'},
  {title: '4 · Database match', short: 'Identify', text: 'Compare the barcode sequence with a curated reference database. Reliable identification depends on the sample and accurate references.', image: IMAGES.database, alt: 'Slide image of genomic analysis on a computer'},
];
function setEdnaStep(index) {
  state.ednaStep = index;
  const step = ednaSteps[index];
  $$('.step-tab').forEach((button, i) => {
    const active = i === index;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-selected', String(active));
  });
  $$('.edna-visual').forEach((figure, i) => figure.classList.toggle('is-active', i === index));
  $('#edna-active-step').innerHTML = `<strong>${step.title}</strong><p>${step.text}</p>`;
}
function renderEdnaLab() {
  $('#edna-steps').innerHTML = ednaSteps.map((step, index) => `<button type="button" class="step-tab ${index === 0 ? 'is-active' : ''}" role="tab" aria-selected="${index === 0}" data-edna-step="${index}"><span>STEP 0${index + 1}</span><strong>${step.short}</strong></button>`).join('');
  $('#edna-visual-strip').innerHTML = ednaSteps.map((step, index) => `<figure class="edna-visual ${index === 0 ? 'is-active' : ''}"><img src="${step.image}" alt="${step.alt}" loading="lazy"><figcaption>${step.title}</figcaption></figure>`).join('');
  $$('.step-tab').forEach(button => button.addEventListener('click', () => setEdnaStep(Number(button.dataset.ednaStep))));
  setImage($('#dolphin-image'), IMAGES.dolphin, 'Illustration of Indo-Pacific humpback dolphins from Part 2, slide 40');
  setEdnaStep(0);
}

function answerQuestion(question, correct, host) {
  if (Object.hasOwn(state.answers, question.id)) return;
  state.answers[question.id] = Boolean(correct);
  state.answered += 1;
  if (correct) state.score += 1;
  const explanation = document.createElement('div');
  explanation.className = 'question-explanation';
  explanation.textContent = `${correct ? 'Correct.' : 'Review this one.'} ${question.explanation}`;
  host.append(explanation);
  updateScore();
}
function updateScore() {
  $('#score-live').textContent = `${state.score} / ${QUIZ.length}`;
  $('#quiz-score-inline').textContent = String(state.score);
  $('#quiz-answered').textContent = `${state.answered} / ${QUIZ.length} answered`;
  $('#quiz-progress-label').textContent = 'questions correct';
  $('#quiz-meter-fill').style.width = `${state.answered / QUIZ.length * 100}%`;
}
function renderChoiceQuestion(question, host) {
  const options = question.type === 'truefalse' ? ['True', 'False'] : question.options;
  const correctIndex = question.type === 'truefalse' ? (question.answer ? 0 : 1) : question.answer;
  const list = document.createElement('div');
  list.className = 'answer-options';
  options.forEach((option, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'answer-option';
    button.textContent = option;
    button.addEventListener('click', () => {
      if (Object.hasOwn(state.answers, question.id)) return;
      const correct = index === correctIndex;
      button.classList.add(correct ? 'is-correct' : 'is-wrong');
      $$('.answer-option', list).forEach((item, i) => {
        item.disabled = true;
        if (i === correctIndex) item.classList.add('is-correct');
      });
      answerQuestion(question, correct, host);
    });
    list.append(button);
  });
  host.append(list);
}
function renderOrderQuestion(question, host) {
  const order = [2, 0, 3, 1];
  state.questionOrder[question.id] = order.map(index => index);
  const list = document.createElement('div');
  list.className = 'order-list';
  function draw() {
    list.innerHTML = state.questionOrder[question.id].map((originalIndex, position) => `
      <div class="order-row"><span class="order-num">${position + 1}</span><span>${question.items[originalIndex]}</span><button type="button" data-move="up" aria-label="Move item up" ${position === 0 ? 'disabled' : ''}>↑</button><button type="button" data-move="down" aria-label="Move item down" ${position === question.items.length - 1 ? 'disabled' : ''}>↓</button></div>`).join('');
    $$('.order-row button', list).forEach((button, position) => button.addEventListener('click', () => {
      if (Object.hasOwn(state.answers, question.id)) return;
      const move = button.dataset.move === 'up' ? -1 : 1;
      const arr = state.questionOrder[question.id];
      [arr[position], arr[position + move]] = [arr[position + move], arr[position]];
      draw();
    }));
  }
  draw();
  const submit = document.createElement('button');
  submit.type = 'button';
  submit.className = 'check-answer';
  submit.textContent = 'Check order';
  submit.addEventListener('click', () => {
    if (Object.hasOwn(state.answers, question.id)) return;
    const correct = state.questionOrder[question.id].every((value, index) => value === index);
    answerQuestion(question, correct, host);
    submit.disabled = true;
    submit.textContent = correct ? 'Correct order' : 'Order checked';
    $$('.order-row button', list).forEach(button => button.disabled = true);
  });
  host.append(list, submit);
}
function renderMatchQuestion(question, host) {
  const options = question.pairs.map(pair => pair.answer);
  const wrap = document.createElement('div');
  wrap.className = 'match-list';
  question.pairs.forEach((pair, index) => {
    const row = document.createElement('label');
    row.className = 'match-row';
    const selectOptions = options.map(option => `<option value="${option}">${option}</option>`).join('');
    row.innerHTML = `<strong>${pair.term}</strong><select aria-label="Definition for ${pair.term}"><option value="">Choose a definition…</option>${selectOptions}</select>`;
    wrap.append(row);
  });
  const submit = document.createElement('button');
  submit.type = 'button';
  submit.className = 'check-answer';
  submit.textContent = 'Check matches';
  submit.addEventListener('click', () => {
    if (Object.hasOwn(state.answers, question.id)) return;
    const selects = $$('select', wrap);
    const correct = selects.every((select, index) => select.value === question.pairs[index].answer) && new Set(selects.map(select => select.value)).size === question.pairs.length;
    selects.forEach((select, index) => {
      select.disabled = true;
      select.classList.add(select.value === question.pairs[index].answer ? 'is-correct' : 'is-wrong');
    });
    submit.disabled = true;
    submit.textContent = correct ? 'All matched' : 'Matches checked';
    answerQuestion(question, correct, host);
  });
  host.append(wrap, submit);
}
function renderQuiz() {
  const host = $('#quiz-container');
  host.innerHTML = '';
  QUIZ.forEach((question, index) => {
    const article = document.createElement('article');
    article.className = 'quiz-question';
    article.innerHTML = `<div class="quiz-question-head"><div><span class="eyebrow">CHECKPOINT 0${index + 1} · ${question.type === 'choice' ? 'MULTIPLE CHOICE' : question.type === 'truefalse' ? 'TRUE / FALSE' : question.type === 'order' ? 'ORDERING' : 'MATCHING'}</span><h4>${question.prompt}</h4></div><span class="question-source">${question.source}</span></div>`;
    if (question.type === 'choice' || question.type === 'truefalse') renderChoiceQuestion(question, article);
    if (question.type === 'order') renderOrderQuestion(question, article);
    if (question.type === 'match') renderMatchQuestion(question, article);
    host.append(article);
  });
  state.answers = {};
  state.score = 0;
  state.answered = 0;
  state.questionOrder = {};
  $('#quiz-summary').hidden = true;
  updateScore();
}
function finishQuiz() {
  const summary = $('#quiz-summary');
  const percent = state.answered ? Math.round(state.score / state.answered * 100) : 0;
  const misses = QUIZ.filter(question => state.answers[question.id] === false).map(question => question.source);
  const advice = misses.length ? `Revisit ${[...new Set(misses)].join(' and ')} before trying again.` : 'Strong work—review the evidence markers and data notes to reinforce the reasoning.';
  summary.hidden = false;
  summary.innerHTML = `<h3>Field check complete</h3><p><strong>${state.score} correct</strong> out of ${state.answered} answered (${percent}%). ${state.answered < QUIZ.length ? `${QUIZ.length - state.answered} checkpoint(s) were left unanswered. ` : ''}${advice}</p><button type="button" id="restart-quiz">Try the questions again</button>`;
  $('#restart-quiz').addEventListener('click', renderQuiz);
  summary.scrollIntoView({behavior: 'smooth', block: 'center'});
}
function renderThemeToggle() {
  const button = $('#theme-toggle');
  button.addEventListener('click', () => {
    const dark = document.body.classList.toggle('dark-mode');
    button.setAttribute('aria-pressed', String(dark));
    button.querySelector('.theme-label').textContent = dark ? 'Dark' : 'Theme';
  });
}
function renderModuleProgress() {
  const sections = $$('.module-section');
  if (!('IntersectionObserver' in window)) return;
  const seen = new Set();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) seen.add(entry.target.id);
    });
    const count = seen.size;
    $('#module-progress-fill').style.width = `${count / sections.length * 100}%`;
    $('#module-progress-label').textContent = `${count} of ${sections.length} modules explored`;
  }, {threshold: .18});
  sections.forEach(section => observer.observe(section));
}
function revealToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('is-visible');
  window.clearTimeout(revealToast.timer);
  revealToast.timer = window.setTimeout(() => toast.classList.remove('is-visible'), 2200);
}

function init() {
  renderFlashcards();
  renderBinomialTrainer();
  renderChromatogram();
  renderChromosomeExplorer();
  renderRepeatFigures();
  renderFaunaLab();
  renderEdnaLab();
  renderQuiz();
  renderThemeToggle();
  renderModuleProgress();
  $('#finish-quiz').addEventListener('click', finishQuiz);
  document.addEventListener('error', event => {
    const element = event.target;
    if (element instanceof HTMLImageElement) {
      element.classList.add('image-unavailable');
      element.alt = `${element.alt} (image unavailable)`;
    }
  }, true);
}

init();
