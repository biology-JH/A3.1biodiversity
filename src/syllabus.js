const svg = (title, desc, body) => {
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const content = body
    .replaceAll('url(#arrow)', `url(#arrow-${id})`)
    .replaceAll('url(#leaf)', `url(#leaf-${id})`);
  return `<svg viewBox="0 0 900 440" role="img" aria-label="${title}" xmlns="http://www.w3.org/2000/svg"><title>${title}</title><desc>${desc}</desc><defs><marker id="arrow-${id}" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="#17856c"/></marker><linearGradient id="leaf-${id}" x1="0" x2="1"><stop stop-color="#d5ed7a"/><stop offset="1" stop-color="#78c75b"/></linearGradient></defs><rect width="900" height="440" rx="26" fill="#f5f8f5"/>${content}</svg>`;
};
const text = (x,y,value,size=24,weight=500,fill='#24483d') => {
  const formatted = String(value).replace(/\b(Panthera (?:leo|onca|tigris)|Homo sapiens|Pan troglodytes|Saccharomyces cerevisiae|Arabidopsis thaliana|Drosophila melanogaster|Paris japonica|Amoeba proteus|Liuixalus romeri|Amolops hongkongensis|Sousa chinensis|H\. sapiens|rbcL|matK)\b/g, '<tspan font-style="italic">$1</tspan>');
  return `<text x="${x}" y="${y}" font-family="system-ui,sans-serif" font-size="${size}" font-weight="${weight}" fill="${fill}">${formatted}</text>`;
};
const box = (x,y,w,h,fill='#e8f1ec',stroke='#b7d2c2',r=18) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${stroke}" stroke-width="2"/>`;
const line = (x1,y1,x2,y2) => `<path d="M${x1} ${y1}L${x2} ${y2}" fill="none" stroke="#17856c" stroke-width="4" marker-end="url(#arrow)"/>`;

export const DIAGRAMS = {
  variation: svg('Continuous and discontinuous variation', 'Human height forms a continuous range; ABO blood groups are discontinuous classes. Dog breeds show striking inherited variation within one species.',
    `${text(45,48,'VARIATION WITHIN ONE SPECIES',20,700,'#17856c')}${box(35,70,400,320)}${text(65,112,'Continuous · human height',25,700)}${text(65,148,'many genes + environment',20)}<path d="M70 310 C120 306 145 277 190 245 C230 216 278 212 320 245 C358 275 380 306 405 310" fill="none" stroke="#17856c" stroke-width="7"/><path d="M70 315H405" stroke="#9baba2" stroke-width="2"/>${text(85,356,'short',18)}${text(340,356,'tall',18)}${box(465,70,400,320)}${text(495,112,'Discontinuous · ABO',25,700)}${text(495,148,'one locus · distinct groups',20)}${['A','B','AB','O'].map((a,i)=>`<rect x="${500+i*82}" y="220" width="60" height="80" rx="10" fill="url(#leaf)"/>${text(520+i*82,270,a,24,700)}`).join('')}${text(490,350,'dog breeds: striking form, same species',19,700)}`),
  morphology: svg('Morphological species concept and limitations', 'Sexes of one species may differ; cryptic lineages may look alike; environment can alter phenotype; unrelated lineages may evolve similar traits.',
    `${box(28,42,844,100,'#e8f1ec')}${text(55,84,'Linnaeus: group organisms by shared structural traits',24,700)}${text(55,119,'Useful for fossils · field identification · asexual organisms',20)}${[['Sexual dimorphism','one species; sexes look different'],['Cryptic species','distinct lineages; similar form'],['Plasticity','environment alters phenotype'],['Convergence','unrelated species evolve alike']].map((a,i)=>{const x=30+(i%2)*425,y=170+Math.floor(i/2)*112;return `${box(x,y,405,90,'#fff','#cbdcd0')}${text(x+18,y+34,a[0],22,700)}${text(x+18,y+67,a[1],18)}`}).join('')}${text(54,410,'Appearance is evidence—not a universal species boundary.',19,700,'#7b5130')}`),
  binomial: svg('Binomial nomenclature', 'A scientific species name consists of a genus and specific epithet. Capitalize the genus, lowercase the epithet and italicize both in print.',
    `${text(48,58,'GENUS + SPECIFIC EPITHET',20,700,'#17856c')}${box(48,90,350,210)}${text(78,145,'Panthera',42,700)}${text(78,198,'leo',42,500)}${text(78,258,'Two words form one species name',21)}${line(420,190,485,190)}${box(520,90,330,210,'#e7f1dc','#b3ca8f')}${text(550,145,'Panthera leo',36,700)}${text(550,198,'Panthera onca',29)}${text(550,242,'Panthera tigris',29)}${text(80,350,'Typed: italicise both · handwritten: underline both',21,700)}${text(80,390,'After first use: H. sapiens · genus initial stays capitalised',19)}`),
  speciation: svg('Speciation continuum and ring species', 'Gene flow in a connected population can be reduced by a barrier. Divergence accumulates and reproductive isolation may evolve.',
    `${['Gene flow','Barrier','Divergence','Isolation'].map((a,i)=>{const x=30+i*220;return `${box(x,72,180,92,i===3?'#f7e7df':'#e8f1ec')}${text(x+16,112,a,22,700)}${text(x+16,145,['shared alleles','flow reduced','differences build','separate species'][i],16)}`}).join('')}${[210,430,650].map(x=>line(x,118,x+25,118)).join('')}${text(45,235,'RING SPECIES · populations around a geographic barrier',21,700,'#17856c')}<path d="M210 330 C260 270 370 265 440 320 C510 375 620 360 675 300" fill="none" stroke="#78c75b" stroke-width="17" stroke-linecap="round"/><path d="M210 330 C150 380 95 365 80 325" fill="none" stroke="#17856c" stroke-width="17" stroke-linecap="round"/><path d="M675 300 C735 250 790 265 810 310" fill="none" stroke="#17856c" stroke-width="17" stroke-linecap="round"/><circle cx="450" cy="330" r="90" fill="none" stroke="#cbdcd0" stroke-width="2" stroke-dasharray="7 9"/>${text(345,430,'Terminal populations may not interbreed',19,700)}`),
  fusion: svg('Shared primate ancestor: chromosome-2 fusion evidence', 'Banding correspondences link chimpanzee chromosomes 12 and 13 with human chromosome 2. Internal telomeric repeats and an inactive centromere remnant support an end-to-end fusion in the human lineage.',
    `${text(40,55,'SHARED PRIMATE ANCESTOR',20,700,'#17856c')}${box(65,90,300,95)}${text(95,132,'chr 12',28,700)}${text(230,132,'chr 13',28,700)}${line(370,137,465,137)}${box(495,90,340,95,'#e7f1dc','#b3ca8f')}${text(535,132,'HUMAN chr 2',26,700)}${text(50,238,'Banding patterns align end-to-end',21,700)}<path d="M90 295H810" stroke="#78a66a" stroke-width="22" stroke-linecap="round"/><rect x="427" y="278" width="11" height="34" rx="5" fill="#bb5346"/><ellipse cx="610" cy="295" rx="20" ry="13" fill="#34444e"/><text x="394" y="350" font-size="19" fill="#24483d">2q13 · inverted TTAGGG repeats</text><text x="580" y="390" font-size="19" fill="#24483d">2q21 · vestigial centromere</text>${text(60,415,'Predicted markers support a testable, falsifiable hypothesis.',18,700)}`),
  snp: svg('SNP, indel and heterozygous Sanger peaks', 'A SNP is a common single-base variant; an indel inserts or deletes bases. Two Sanger peaks at one site can indicate heterozygosity in one diploid sample.',
    `${text(38,55,'SHARED GENOME · VARIABLE SITES',20,700,'#17856c')}${box(30,80,400,145)}${text(55,120,'Reference',19,700)}${text(55,166,'A C G T A C G T A C',24,700)}${text(55,207,'A C G/A T A C G T/C A C',22,700,'#a24a3a')}${box(470,80,400,145,'#fff','#cbdcd0')}${text(495,120,'Variant types',22,700)}${text(495,164,'SNP: one base differs',20)}${text(495,201,'Indel: base(s) inserted/deleted',20)}${text(40,275,'SANGER TRACE · overlapping peaks can indicate two alleles',20,700,'#17856c')}<path d="M60 390H840" stroke="#9baaa2" stroke-width="2"/><path d="M110 390 Q130 380 145 310 Q160 230 175 390 M280 390 Q300 380 315 290 Q330 240 345 390 M460 390 Q480 385 495 290 Q510 230 525 390 M495 390 Q515 380 530 300 Q545 255 560 390 M700 390 Q720 380 735 290 Q750 230 765 390 M735 390 Q755 380 770 300 Q785 250 800 390" fill="none" stroke="#17856c" stroke-width="5"/>${text(465,425,'G/A',18,700)}${text(705,425,'T/C',18,700)}${text(45,425,'Population frequency—not one chromatogram—defines an SNP',18)}`),
  genome: svg('Genome size variation and C-value paradox', 'Genome sizes vary greatly and do not directly measure gene number or organismal complexity. Repeats, transposons, polyploidy and introns can increase DNA content.', `${text(35,48,'GENOME SIZE (Mbp) · LOGARITHMIC COMPARISON',20,700,'#17856c')}${[['Saccharomyces cerevisiae',12],['Arabidopsis thaliana',135],['Drosophila melanogaster',140],['Homo sapiens',3200],['Paris japonica',149000],['Amoeba proteus',290000]].map((a,i)=>{let y=88+i*42,w=Math.log10(a[1]+1)*58;return `${text(24,y+21,a[0],18,600)}<rect x="340" y="${y}" width="${w}" height="25" rx="8" fill="url(#leaf)"/>${text(352+w,y+20,`${a[1].toLocaleString()} Mbp`,17,700)}`}).join('')}${text(40,382,'C-value paradox: DNA amount ≠ gene number ≠ organismal complexity',20,700,'#7b5130')}${text(40,415,'Repeats, transposons, introns and polyploidy can expand genomes.',18)}`),
  sequencing: svg('Whole-genome sequencing: speed, cost and applications', 'Sequencing methods have become generally faster and less costly. Whole-genome comparisons support evolutionary relationships and outbreak tracing; precision medicine is an application area.',
    `${text(35,48,'SEQUENCING · SPEED INCREASES, COST DECREASES',20,700,'#17856c')}${line(145,165,750,165)}${[['1990s','Early genomes','slow · costly'],['Later','Faster sequencing','lower cost'],['Current','More genomes','broader comparisons']].map((a,i)=>{let x=95+i*300;return `<circle cx="${x+45}" cy="165" r="14" fill="#17856c"/>${box(x,205,220,115)}${text(x+16,245,a[0],19,700)}${text(x+16,280,a[1],21)}${text(x+16,305,a[2],16)}`}).join('')}${['Evolutionary relationships','Outbreak tracing','Personalized medicine*'].map((a,i)=>`${box(45+i*280,355,250,55,'#e7f1dc','#b3ca8f')}${text(60+i*280,390,a,18,700)}`).join('')}${text(50,430,'*Potential future application',16)}`),
  hgt: svg('Binary fission and horizontal gene transfer', 'Binary fission produces lineages through vertical inheritance. Conjugation, transformation and transduction transfer DNA across lineages, creating a reticulate history.',
    `${text(35,48,'VERTICAL INHERITANCE + CROSS-LINEAGE TRANSFER',20,700,'#17856c')}${box(40,100,165,90)}${text(65,148,'cell 1',23,700)}${line(210,145,270,145)}${box(285,85,120,65,'#e7f1dc')}${box(285,155,120,65,'#e7f1dc')}${text(282,255,'Binary fission',20,700)}${text(465,100,'HORIZONTAL TRANSFER ROUTES',19,700,'#17856c')}${[['Conjugation','cell contact'],['Transformation','environmental DNA'],['Transduction','phage vector']].map((a,i)=>`${box(465,125+i*78,185,60)}${text(480,153+i*78,a[0],18,700)}${text(480,177+i*78,a[1],14)}`).join('')}${box(705,180,160,100,'#f7e7df','#dfb7a6')}${text(720,220,'R plasmid',20,700)}${text(720,252,'resistance',18)}${line(655,155,705,205)}${line(655,235,705,230)}${line(655,310,705,250)}${text(55,355,'Vertical inheritance branches',18,600)}<path d="M80 375 C200 420 280 420 345 360 M95 373 C200 400 260 390 345 360 M520 380 C620 415 750 355 790 290" fill="none" stroke="#17856c" stroke-width="4" stroke-dasharray="8 7"/>${text(455,420,'HGT links branches → reticulate network',19,700)}`),
  mule: svg('Horse donkey and mule chromosome pairing', 'Horse gametes contribute 32 chromosomes and donkey gametes contribute 31. The mule has 63 chromosomes; unmatched homologues disrupt meiosis and usually cause sterility.',
    `${[['Horse','2n = 64','n = 32'],['Donkey','2n = 62','n = 31']].map((a,i)=>`${box(35+i*250,75,210,105)}${text(60+i*250,112,a[0],24,700)}${text(60+i*250,145,a[1],20)}${text(60+i*250,170,a[2],18)}`).join('')}${line(480,128,555,128)}${box(575,75,260,105,'#f7e7df','#dfb7a6')}${text(605,114,'Mule',25,700)}${text(605,149,'2n = 63 · hybrid',20)}${text(45,245,'MEIOSIS I · homologues should pair as bivalents',20,700,'#17856c')}${Array.from({length:8},(_,i)=>{let x=75+i*92;return `<path d="M${x} 300v70 M${x+14} 300v70" stroke="#78a66a" stroke-width="8" stroke-linecap="round"/>${i===5?`<path d="M${x+35} 300v70" stroke="#bd5849" stroke-width="8" stroke-dasharray="8 7"/>`:''}`}).join('')}${text(55,410,'Mismatched homologues → unstable pairing → disrupted meiosis',18,700)}`),
  key: svg('Dichotomous key: observable paired traits', 'A dichotomous key uses pairs of mutually exclusive choices based on observable, specific traits. Each choice leads to another couplet or an identification; uncertain evidence should remain inconclusive.',
    `${box(280,35,340,70,'#e8f1ec')}${text(310,78,'OBSERVABLE TRAIT?',23,700)}${line(370,110,230,175)}${line(530,110,670,175)}${box(40,180,350,75,'#fff')}${text(62,224,'Dark X mark + <2.5 cm?',21,700)}${box(510,180,350,75,'#fff')}${text(532,224,'Olive granular skin + >4 cm?',20,700)}${line(195,258,160,325)}${line(300,258,355,325)}${line(665,258,610,325)}${line(745,258,790,325)}${[['Liuixalus romeri',45],['Check another clue',245],['Amolops hongkongensis',460],['Check another clue',680]].map(a=>`${box(a[1],330,190,65,'#e7f1dc','#b3ca8f')}${text(a[1]+10,370,a[0],16,700)}`).join('')}${text(110,425,'Two exclusive choices at each step; test every specimen.',17,700)}`),
  barcode: svg('DNA barcodes and environmental DNA workflow', 'Short DNA barcode sequences are matched to references. Environmental DNA from a habitat is collected, filtered, amplified and identified using a database.',
    `${text(35,52,'STANDARD BARCODE LOCI',20,700,'#17856c')}${[['Animals','mitochondrial COI'],['Plants','chloroplast rbcL · matK'],['Fungi','nuclear ITS']].map((a,i)=>`${box(35+i*285,75,260,78)}${text(55+i*285,108,a[0],21,700)}${text(55+i*285,138,a[1],17)}`).join('')}${text(35,210,'eDNA · SAMPLE → FILTER → AMPLIFY → IDENTIFY',20,700,'#17856c')}${['Sample water','Filter traces','PCR barcode','Database match'].map((a,i)=>{let x=30+i*220;return `${box(x,245,190,95,i===3?'#e7f1dc':'#fff')}${text(x+14,285,a,18,700)}${text(x+14,317,['shed cells/mucus','capture DNA','COI / marker','reference library'][i],15)}`}).join('')}${[220,440,660].map(x=>line(x,292,x+14,292)).join('')}${text(40,390,'DNA detection supports presence—not abundance at a precise site.',18,700)}`),
};

export const DIAGRAM_IMAGES = {
  variation: {
    src: 'assets/study-guide/variation-within-species-examples.png',
    alt: 'Study-guide figure showing continuous human-height variation, discontinuous ABO blood groups, and variation among dog breeds within one species.',
  },
  fusion: {
    src: 'assets/study-guide/shared-primate-ancestor-chromosomes.png',
    alt: 'Study-guide comparison of chimpanzee chromosome 12 and 13 banding with human chromosome 2, including the active centromere, internal telomeric repeats and vestigial centromere.',
  },
  sequencing: {
    src: 'assets/study-guide/sequencing-speed-cost-applications.png',
    alt: 'Study-guide illustration of whole-genome, short-read and long-read sequencing, showing generally faster and less costly sequencing over time and applications in evolutionary research, outbreak tracing and precision medicine.',
  },
  key: {
    src: 'assets/study-guide/frog-observable-traits-key.png',
    alt: 'Study-guide frog comparison for a dichotomous key: a small frog with a dark X-shaped mark versus a larger frog with granular olive skin.',
  },
};

const cite = (label) => `<a class="slide-cite" href="assets/SLIDE_TEXT_INDEX.md" target="_blank" rel="noopener">${label} · slide text ↗</a>`;
const note = (heading, points, source) => ({heading, copy: points, source});

export const SYLLABUS_MODULES = [
  {id:'module-1', title:'Variation, species concepts & scientific names', points:'A3.1.1–5 · A3.1.8', notes:[
    note('A3.1.1 · Variation within and between species',[
      'Variation is the difference in traits among individuals. Individuals of one species share many features but are not identical; variation provides evidence for describing and comparing organisms.',
      'Differences are generally greater between species than within one species. Close relatives such as humans and chimpanzees share more features than distantly related organisms.',
      'Continuous variation forms a range (for example, height); discontinuous variation falls into distinct classes (for example, ABO groups). Genes, environment and their interaction can influence phenotype; variation alone does not define a species.'
    ], 'Part 1 · printed pp. 105, 107; Part 2 · slides 2–6, 10–11'),
    note('A3.1.2 · Morphological species concept',[
      'Linnaeus grouped organisms by shared morphology: outward form and internal structure.',
      'Morphology is useful for fossils and field identification when breeding cannot be observed.',
      'Sexual dimorphism: males and females of one species can look different. Plasticity: the same genotype can produce different phenotypes in different environments; neither difference alone proves separate species.',
      'Cryptic species are distinct lineages with similar forms. Convergence occurs when unrelated lineages independently evolve similar traits; both can hide species differences from morphology.'
    ], 'Part 1 · printed p. 105; Part 2 · slides 14–16'),
    note('A3.1.3 · Binomial naming system',[
      'A complete scientific name has two parts: a capitalized genus and a lowercase specific epithet. Members of one genus share traits; the epithet distinguishes species within that genus.',
      'Italicize both words when typed and underline them when handwritten. After first use, abbreviate the genus only: <i>Homo sapiens</i> → <i>H. sapiens</i>.',
      'A binomial avoids confusion among local names and can be used consistently across languages.'
    ], 'Part 1 · printed p. 105; Part 2 · slide 7'),
    note('A3.1.4 · Biological species concept (BSC)',[
      'A species is a group of natural populations that actually or potentially interbreed and produce viable, fertile offspring. Reproductive isolation limits gene flow with other groups.',
      'Interbreeding cannot be tested in fossils, and the concept does not fit obligately asexual organisms. Some distinct species hybridize; occasional hybrids do not by themselves erase species boundaries.',
      'Use other species concepts when interbreeding cannot be assessed; no single concept fits every organism.'
    ], 'Part 1 · printed p. 105; Part 2 · slides 3–4, 8')
  ], diagrams:['variation','morphology','binomial','speciation']},
  {id:'module-2', title:'Genome unity, SNPs & sequence reading', points:'A3.1.8–9', notes:[
    note('A3.1.8 · Genome unity and diversity',[
      'A genome is the complete genetic information of an organism. Members of one species share most genes and their arrangement, but alleles can differ in DNA sequence.',
      'By a common convention, a SNP is a one-nucleotide difference present in at least 1% of a population. This cutoff describes population frequency, not a different kind of DNA change.',
      'Homozygous: the two alleles at a locus are the same. Heterozygous: they differ. A diploid child can inherit the same or different base variants from the two parents.',
      'An insertion or deletion (indel) adds or removes one or more nucleotides. A coding indel not divisible by three can shift the reading frame.'
    ], 'Part 1 · printed p. 107; Part 2 · slides 13–15'),
    note('Reading Sanger chromatograms',[
      'Each clear fluorescent peak usually marks one base. Two differently coloured peaks at one site can indicate two alleles (for example, A/G) in a heterozygous diploid sample.',
      'A double peak is not proof: poor trace quality, sequencing noise, contamination or mixed DNA can look similar. Check the trace and repeat if needed; one chromatogram cannot establish population frequency.'
    ], 'Part 1 · printed pp. 107–108; Part 2 · slides 13–14')
  ], diagrams:['snp']},
  {id:'module-3', title:'Chromosome numbers, karyograms & meiosis', points:'A3.1.6–7 · A3.1.13', notes:[
    note('A3.1.6 · Chromosome number and karyograms',[
      'Chromosome numbers vary among species. Humans have 2n = 46; chimpanzees have 2n = 48. A chromosome count is useful evidence, not a complete species definition.',
      'Karyotype means chromosome number and type. A karyogram is an ordered image of chromosomes arranged as homologous pairs, usually by decreasing length.',
      'To prepare a karyogram: select a clear mitotic metaphase spread with condensed, non-overlapping chromosomes; stain to reveal bands; photograph; then pair by banding pattern, length and centromere position.',
      'The centromere separates the short p arm from the long q arm. Position can be metacentric, submetacentric or acrocentric.'
    ], 'Part 1 · printed p. 106; Part 2 · slides 9–10'),
    note('A3.1.7 · Human chromosome 2 fusion hypothesis',[
      'Hypothesis: two ancestral ape chromosomes fused end-to-end in the human lineage after the lineages diverged. Chimpanzee chromosomes 12 and 13 remain separate; their corresponding regions occur in order on human chromosome 2.',
      'Matching G-band order supports this predicted arrangement: regions from two chromosomes appear along one human chromosome.',
      'Telomeres normally cap chromosome ends. Inverted TTAGGG repeats inside human 2q13 fit the prediction that two ancestral ends met at an internal fusion site.',
      'Each ancestral chromosome had a centromere. Human chromosome 2 has one active centromere and an inactive remnant at 2q21, consistent with fusion. Together, banding and both internal markers support the hypothesis; chromosome count alone does not prove it.'
    ], 'Part 1 · printed pp. 106–107; Part 2 · slide 10'),
    note('A3.1.13 HL · Chromosome pairing and hybrid fertility',[
      'If parental chromosome numbers or structures differ, hybrid chromosomes may lack homologous partners. Pairing and segregation in meiosis can fail, making viable gametes less likely.',
      'Example: horse 2n = 64 produces n = 32 gametes; donkey 2n = 62 produces n = 31. Their mule has 2n = 63 and is usually sterile because meiosis is disrupted—not merely because the total is odd.'
    ], 'Part 1 · printed pp. 106, 109; Part 2 · slides 30–32')
  ], diagrams:['fusion','mule']},
  {id:'module-4', title:'Genome size, C-value paradox & sequencing', points:'A3.1.9–11', notes:[
    note('A3.1.9 · Genome-size variation',[
      'C-value (1C) is the DNA amount in one haploid genome, measured as mass (1 pg = 10⁻¹² g) or sequence length (1 Mbp = 10⁶ bp). It measures DNA, not gene number.',
      'The C-value paradox is that genome size does not reliably predict organismal complexity or protein-coding gene number. Repeats, transposons, introns and polyploidy can increase DNA without proportionally increasing distinct protein-coding genes.',
      'Study-guide comparison (approximate): thale cress has 135 Mbp and about 27,000 protein-coding genes; humans have 3,200 Mbp and about 20,000. A smaller genome can have more annotated genes; estimates depend on annotation.'
    ], 'Part 1 · printed pp. 107–108; Part 2 · slides 15–21'),
    note('A3.1.10 · Application skill: compare genome sizes in databases',[
      'Find genome-size data for at least two taxonomic groups in the Kew C-values database or the Animal Genome Size Database. Record the organism, value, unit, source and database release/date.',
      'Compare genome size with organismal complexity. Explain why a larger DNA amount does not necessarily mean more genes or greater complexity; check whether each value refers to a haploid nuclear genome.'
    ], 'Part 1 · printed p. 108; database links below'),
    note('A3.1.11 · Whole-genome sequencing',[
      'Whole-genome sequencing reads DNA across a genome. The field has progressed from Sanger to short- and long-read methods, which are generally faster and less costly.',
      'Genome comparisons support research on evolutionary relationships and outbreak tracing. Precision or personalized medicine may use an individual’s variants, but sequence data require careful interpretation.'
    ], 'Part 1 · printed p. 108; Part 2 · slides 22–23, 26')
  ], diagrams:['genome','sequencing']},
  {id:'module-5', title:'Prokaryotic lineages & species identification keys', points:'A3.1.12 · A3.1.14 HL', notes:[
    note('A3.1.12 HL · Asexual reproduction and horizontal gene transfer',[
      'The BSC relies on interbreeding, so it fits poorly for organisms that reproduce only asexually and for bacteria with horizontal gene transfer (HGT).',
      'Asexual reproduction can produce clonal descendants; mutations accumulate between clones. HGT moves genes between lineages, so prokaryotic ancestry is not always a simple branching tree.',
      'Extension mechanisms: conjugation transfers DNA by cell contact; transformation takes up environmental DNA; transduction is mediated by bacteriophages.'
    ], 'Part 1 · printed p. 108; Part 2 · slides 25–29'),
    note('A3.1.14 HL · Construct a dichotomous key',[
      'A dichotomous key is a series of numbered couplets, each with two mutually exclusive choices based on observable, specific and reliable traits. Each choice leads to another couplet or an identification.',
      'Use contrasting, measurable features rather than vague impressions. Test every specimen; if a trait is hidden or the alternatives are ambiguous, record an inconclusive result and revise the couplet.'
    ], 'Part 1 · printed p. 109; Part 2 · slides 33–37'),
    note('Worked local example · frog key',[
      '<i>Liuixalus romeri</i> has a dark X-shaped dorsal mark, small adult size and toe pads. <i>Amolops hongkongensis</i> has granular olive skin; use several traits, not one impression.',
      'If a feature is hidden or cannot be judged, record the identification as inconclusive rather than forcing a branch. Observe wildlife without handling it.'
    ], 'Part 2 · slides 34–37')
  ], diagrams:['hgt','key']},
  {id:'module-6', title:'DNA barcoding & environmental DNA', points:'A3.1.15 HL', notes:[
    note('A3.1.15 HL · Identify species from environmental DNA',[
      'A DNA barcode is a short, informative sequence matched to a reference database. Common loci: animal mitochondrial COI; land-plant chloroplast rbcL and matK; fungal nuclear ITS.',
      'Environmental DNA (eDNA) is DNA shed into water, soil or air. Workflow: sample habitat → filter traces → extract and amplify a barcode → sequence → compare with reference sequences.',
      'A reliable reference-library match supports presence in or near the sampled habitat. Contamination, DNA degradation, primer bias and incomplete databases can affect identification; detection or read count alone does not measure abundance.'
    ], 'Part 1 · printed p. 109; Part 2 · slides 38–43'),
    note('Field example · Pearl River Estuary',[
      'Water samples can reveal traces of the Indo-Pacific humpback dolphin (<i>Sousa chinensis</i>) and other organisms without directly observing them.',
      'Oxford’s guide gives a separate example: DNA barcodes detected Gouldian finches at Australian waterholes. In both cases, eDNA helps investigate habitat biodiversity.'
    ], 'Part 2 · slides 40, 43, 46–47; Oxford Biology Study Guide, printed p. 109')
  ], diagrams:['barcode']},
  {id:'module-7', title:'Exam check & syllabus map', points:'A3.1.1–15 · SL & HL', notes:[
    note('Syllabus coverage map',[
      'A3.1.1–5: variation, morphology, binomial names, the biological species concept and speciation.',
      'A3.1.6–9: chromosome number, karyograms, fusion evidence, genomes, SNPs and within-/between-species variation.',
      'A3.1.10–11: compare genome size using databases; explain sequencing speed/cost trends, evolutionary research and potential personalized medicine.',
      'A3.1.12–15 HL: BSC limits for asexual/HGT organisms, chromosome effects on hybrid fertility, construct a dichotomous key, identify species using eDNA barcodes.'
    ], '2025 IB Biology Guide · A3.1 · syllabus pp. 41–44; supplied Oxford guide · printed pp. 105–109'),
    note('Revision checks',[
      'Distinguish phenotype from species identity, chromosome count from a full species diagnosis, and genome size from gene number or complexity.',
      'For karyograms, describe metaphase selection, staining, photography and pairing criteria. For fusion evidence, state the hypothesis and predicted observations.',
      'For database and eDNA questions, name the source or barcode, state units or workflow, and include one limit on interpretation.'
    ], 'Part 1 · printed pp. 105–109; Part 2 · slides 14, 17–20, 33, 43, 47')
  ], diagrams:[]},
];
