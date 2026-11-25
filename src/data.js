export const IMAGES = {
  dogs: 'assets/manus-storage/img-02_a9bcb6e9.png',
  chromatogram: 'assets/manus-storage/img-02_4b2df534.jpg',
  centromeres: 'assets/manus-storage/img-02_31c0d8d7.png',
  fusion: 'assets/user-provided/chromosome-2-fusion-evidence.png',
  chromosomeNumbers: 'assets/manus-storage/img-02_f5b792eb.png',
  karyogram: 'assets/manus-storage/img-02_ff837d2e.png',
  donkey: 'assets/manus-storage/img-02_32670674.jpg',
  equineKaryotypes: 'assets/manus-storage/img-02_414bf035.png',
  genomeChart: 'assets/manus-storage/img-02_f2617966.png',
  helix: 'assets/manus-storage/img-04_d91290b8.png',
  transfer: 'assets/manus-storage/img-02_96c9002a.png',
  repeatImages: [
    'assets/manus-storage/img-02_8eac2865.png',
    'assets/manus-storage/img-03_8c5eea93.png',
    'assets/manus-storage/img-04_0d65e416.png',
    'assets/manus-storage/img-05_6d0f27c0.png',
  ],
  frogRomeri: 'assets/manus-storage/img-02_2ac5f3d5.jpg',
  frogCascade: 'assets/manus-storage/img-03_90289f96.jpg',
  barcode: 'assets/manus-storage/img-02_8951a274.png',
  water: 'assets/manus-storage/img-02_99f40f13.jpg',
  filtration: 'assets/manus-storage/img-03_9e927655.jpg',
  pcr: 'assets/manus-storage/img-04_1e34c9f3.jpg',
  database: 'assets/manus-storage/img-05_78646ede.png',
  dolphin: 'assets/manus-storage/img-02_e446e01d.jpg',
  birds: {
    magpie: 'assets/owned/oriental-magpie-robin.jpg',
    sparrow: 'assets/manus-storage/eurasian-tree-sparrow_807ed83c.jpg',
    dove: 'assets/owned/spotted-dove.jpg',
    bulbul: 'assets/owned/red-whiskered-bulbul.jpg',
  },
};

export const FLASHCARDS = [
  {
    term: 'Biological species concept',
    tag: 'A3.1.4',
    image: IMAGES.dogs,
    alt: 'Domestic dogs showing a wide range of body sizes and forms',
    front: 'What makes populations one species?',
    back: 'Interbreeding natural populations produce viable, fertile offspring and are reproductively isolated from other groups. The BSC fits fossils and obligate asexual organisms poorly.',
  },
  {
    term: 'Single-nucleotide polymorphism',
    tag: 'A3.1.8',
    image: IMAGES.chromatogram,
    alt: 'Sanger sequencing chromatogram with overlapping peaks at two positions',
    front: 'What is a SNP?',
    back: 'A SNP is a one-base variant present in a population. Two Sanger peaks at one site can indicate two alleles in one diploid sample; one trace cannot establish population frequency.',
  },
  {
    term: 'C-value paradox',
    tag: 'A3.1.10',
    image: IMAGES.genomeChart,
    alt: 'Genome-size comparison chart for six eukaryotes',
    front: 'Does more DNA mean greater complexity?',
    back: '1C is DNA in one haploid genome. The C-value paradox: DNA amount does not predict gene number or complexity; repeats, transposons, introns and polyploidy can add DNA.',
  },
  {
    term: 'Karyogram',
    tag: 'A3.1.7',
    image: IMAGES.karyogram,
    alt: 'Human and chimpanzee karyotypes arranged for comparison',
    front: 'How are chromosomes organised?',
    back: 'Select a clear mitotic metaphase spread; stain to reveal bands, photograph, then pair chromosomes by length, centromere position and banding pattern.',
  },
  {
    term: 'Horizontal gene transfer',
    tag: 'A3.1.12',
    image: IMAGES.transfer,
    alt: 'Bacteria exchanging genetic material through direct cell contact',
    front: 'How can bacteria gain genes from other lineages?',
    back: 'Conjugation uses cell contact; transformation takes up environmental DNA; transduction uses bacteriophages. These horizontal transfers link otherwise branching lineages.',
  },
  {
    term: 'Environmental DNA',
    tag: 'A3.1.15',
    image: IMAGES.water,
    alt: 'Field collection of an environmental water sample',
    front: 'What can habitat water reveal?',
    back: 'Environmental DNA is genetic material shed into a habitat. Sampling can detect species without capturing or directly observing them; detection alone does not measure abundance.',
  },
];

export const GENOME_DATA = [
  {id: 'yeast', name: 'Saccharomyces cerevisiae', common: 'Budding yeast', mbp: 12, geneCount: 6021, complexityTier: 1, organization: 'Unicellular eukaryote'},
  {id: 'arabidopsis', name: 'Arabidopsis thaliana', common: 'Thale cress', mbp: 135, geneCount: 27549, complexityTier: 2, organization: 'Multicellular plant'},
  {id: 'drosophila', name: 'Drosophila melanogaster', common: 'Fruit fly', mbp: 140, geneCount: 13986, complexityTier: 3, organization: 'Multicellular animal'},
  {id: 'human', name: 'Homo sapiens', common: 'Human', mbp: 3200, geneCount: 19890, complexityTier: 3, organization: 'Multicellular animal'},
  {id: 'paris', name: 'Paris japonica', common: 'Japanese canopy plant', mbp: 149000, geneCount: null, complexityTier: 2, organization: 'Multicellular plant'},
  {id: 'amoeba', name: 'Amoeba proteus', common: 'Amoeba', mbp: 290000, geneCount: null, complexityTier: 1, organization: 'Unicellular eukaryote'},
];

export const QUIZ = [
  {
    id: 'species-concept',
    type: 'choice',
    prompt: 'According to the biological species concept, which criterion defines distinct species?',
    options: [
      'Possessing differing diets in shared habitats',
      'Living in entirely non-overlapping geographical ranges',
      'Differences in adult morphological body length',
      'Inability to interbreed and produce fertile offspring',
    ],
    answer: 3,
    explanation: 'The biological species concept focuses on reproductive isolation: members of different species do not interbreed in nature to produce viable, fertile offspring.',
  },
  {
    id: 'c-value',
    type: 'choice',
    prompt: 'Humans have about 3,200 Mbp and 20,000 genes; Arabidopsis has about 135 Mbp and 27,000 genes. What does this demonstrate?',
    options: [
      'Arabidopsis is more evolutionarily complex than humans',
      'Genome size does not determine gene count or organism complexity',
      'Humans have an unusually high proportion of coding exons',
      'Plant genomes contain no repetitive non-coding DNA',
    ],
    answer: 1,
    explanation: 'C-value (1C) is the DNA content of a haploid genome, measured as mass (pg) or sequence length (bp/Mbp). Arabidopsis has a much smaller genome but more protein-coding genes in the lesson comparison, showing that DNA amount is not a direct measure of gene number or complexity.',
  },
  {
    id: 'fusion-testability',
    type: 'truefalse',
    prompt: 'The hypothesis that human chromosome 2 formed by end-to-end fusion of two ancestral primate chromosomes is scientifically testable.',
    answer: true,
    explanation: 'The fusion hypothesis is a provisional explanation, not a fact proved beyond doubt. It makes falsifiable predictions, including internal telomere-repeat sequences and a vestigial centromere; cytogenetics and sequencing can test them, and contrary results could weaken or falsify the hypothesis.',
  },
  {
    id: 'prokaryote-bsc',
    type: 'truefalse',
    prompt: 'The biological species concept reliably defines every species across Bacteria and Archaea.',
    answer: false,
    explanation: 'Many prokaryotes reproduce by binary fission rather than interbreeding, and horizontal gene transfer moves genes across lineages. Reproductive compatibility is therefore not a universal boundary.',
  },
  {
    id: 'key-order',
    type: 'order',
    prompt: 'Place these dichotomous-key decisions from the broadest first step to the most specific final step.',
    items: [
      'Assess whether an internal bony vertebral column is present',
      'Determine whether the body surface has scales or hair',
      'Distinguish mammary glands from avian feathered plumage',
      'Use species-specific cranial dentition or limb morphology',
    ],
    explanation: 'Start with the broad vertebrate feature, narrow by body covering, distinguish major groups, and finish with species-level diagnostic traits.',
  },
  {
    id: 'method-match',
    type: 'match',
    prompt: 'Match each term to its definition.',
    pairs: [
      {term: 'eDNA survey', answer: 'Direct detection of genetic material shed into habitats'},
      {term: 'SNP', answer: 'Single-base polymorphic variation within shared genomes'},
      {term: 'COI gene', answer: 'Mitochondrial locus used for standard animal DNA barcoding'},
      {term: 'Dichotomous key', answer: 'Sequential couplets of paired diagnostic choices'},
    ],
    explanation: 'eDNA surveys detect environmental traces, SNPs describe one-base variants, animal barcodes commonly use mitochondrial COI, and dichotomous keys use paired choices.',
  },

  {
    id: 'variation-and-morphology', type: 'choice',
    prompt: 'Which statement best distinguishes continuous from discontinuous variation?',
    options: ['Height is usually polygenic and environmentally modified; ABO groups are discrete classes associated with one gene locus.', 'Both traits are controlled by one gene and form a continuous range.', 'Dog breed differences prove dogs are reproductively isolated species.', 'ABO groups form a continuous environmental gradient.'],
    answer: 0, explanation: 'Continuous traits such as height form a spectrum, while ABO blood groups are discrete. Dog breeds show that phenotypic divergence alone does not establish speciation.'
  },
  {
    id: 'binomial-format', type: 'choice',
    prompt: 'Which is correctly formatted after a species has been introduced in full?',
    options: ['panthera Leo', 'P. leo', 'Panthera Leo', 'p. Leo'],
    answer: 1, explanation: 'The genus begins with a capital and may be abbreviated to its capital initial; the epithet stays lowercase. Italicise both words when typed.'
  },
  {
    id: 'snp-frequency', type: 'truefalse',
    prompt: 'A double peak in one Sanger trace by itself proves that a base variant reaches the ≥1% population frequency convention for a SNP.',
    answer: false, explanation: 'A G/A or T/C double peak can be consistent with heterozygosity in that individual. The ≥1% criterion is a population frequency and needs population data.'
  },
  {
    id: 'mule-meiosis', type: 'choice',
    prompt: 'Why is a mule (2n = 63) usually sterile?',
    options: ['Its parents contribute identical chromosome sets.', 'Unpaired or mismatched chromosomes prevent stable homologous synapsis and balanced meiosis.', 'The mule has no chromosomes in its gametes.', 'Odd chromosome counts always prevent mitosis.'],
    answer: 1, explanation: 'Horse and donkey gametes contribute 32 and 31 chromosomes respectively. Their hybrid’s mismatched set disrupts meiotic pairing and gamete production.'
  },
  {
    id: 'karyogram-preparation', type: 'order',
    prompt: 'Put the main stages of karyogram preparation in order.',
    items: [
      'Select a mitotic metaphase spread with condensed, non-overlapping chromosomes',
      'Stain the spread to reveal chromosome-band patterns',
      'Photograph the chromosome spread',
      'Pair and arrange homologues by length, centromere position and banding'
    ],
    explanation: 'Metaphase chromosomes are condensed; an uncluttered spread is stained and imaged, then homologous pairs are matched using multiple chromosome features.'
  },
  {
    id: 'sequencing-applications', type: 'match',
    prompt: 'Match whole-genome sequencing applications to their use.',
    pairs: [
      {term: 'Phylogenomics', answer: 'Compare genomes to infer evolutionary relationships'},
      {term: 'Outbreak tracing', answer: 'Track pathogen transmission'},
      {term: 'Precision medicine', answer: 'Use genomic evidence to tailor care'}
    ],
    explanation: 'Genome comparisons can investigate ancestry, follow pathogen spread, and help tailor prevention or treatment. These are uses of sequencing data, not guaranteed outcomes.'
  },
  {
    id: 'edna-limits', type: 'choice',
    prompt: 'A species barcode is detected in a water sample. Which conclusion is best supported?',
    options: ['The species was detected in or near the sampled habitat, but the sequence count alone does not establish its abundance.', 'The species is the most abundant organism in the habitat.', 'The species was physically observed at the exact sampling point.', 'Every species absent from the database was absent from the habitat.'],
    answer: 0, explanation: 'eDNA detection can support presence in or near a sampled environment, but transport, shedding, degradation, primer bias and database coverage affect interpretation; read counts are not a direct abundance measure.'
  }
  ,{
    id: 'hgt-pathways', type: 'match',
    prompt: 'Match each horizontal gene-transfer route to its mechanism.',
    pairs: [
      {term: 'Conjugation', answer: 'DNA transfer through direct cell contact, often via a plasmid'},
      {term: 'Transformation', answer: 'Uptake of free DNA from the environment'},
      {term: 'Transduction', answer: 'DNA transfer mediated by a bacteriophage'}
    ],
    explanation: 'These three routes move DNA across prokaryotic lineages and contribute to reticulate evolutionary histories.'
  },
  {
    id: 'barcode-markers', type: 'match',
    prompt: 'Match standard DNA barcode loci to organism groups.',
    pairs: [
      {term: 'Animals', answer: 'Mitochondrial COI'},
      {term: 'Land plants', answer: 'Chloroplast rbcL and matK'},
      {term: 'Fungi', answer: 'Nuclear ITS'}
    ],
    explanation: 'Barcode loci are selected for useful amplification and discrimination; they are not universal across all life.'
  },
  {
    id: 'prokaryote-barcodes', type: 'choice',
    prompt: 'Why is a purely branching tree an incomplete model of prokaryotic ancestry?',
    options: ['Horizontal gene transfer can move DNA across lineages.', 'Prokaryotes lack DNA.', 'Binary fission always mixes unrelated genomes.', 'All prokaryotes interbreed sexually.'],
    answer: 0, explanation: 'Vertical descent branches, while horizontal gene transfer adds cross-links between lineages.'
  },
  {
    id: 'sequencing-methods', type: 'choice',
    prompt: 'Which is an appropriate application of whole-genome sequencing?',
    options: ['Infer evolutionary relationships by comparing many genomic regions.', 'Directly measure an organism’s body mass.', 'Guarantee a species identification even without reference sequences.', 'Prove that every sequence difference affects phenotype.'],
    answer: 0, explanation: 'Genome-wide comparisons support phylogenomics; conclusions still depend on suitable data and interpretation.'
  }

];


export const FAUNA = {
  amphibians: [
    {
      id: 'romeri', common: "Romer's tree frog", scientific: 'Liuixalus romeri',
      image: IMAGES.frogRomeri, side: 'yes',
      clues: 'Distinct dark X-shaped dorsal mark; adult snout–vent length below 2.5 cm; disc-shaped toe pads.',
      keyClue: 'the dark X-shaped mark and very small adult size',
    },
    {
      id: 'cascade', common: 'Hong Kong cascade frog', scientific: 'Amolops hongkongensis',
      image: IMAGES.frogCascade, side: 'no',
      clues: 'Granular olive skin; tadpoles have an expanded abdominal suction disc; adults exceed 4 cm.',
      keyClue: 'granular olive skin and the larger adult size',
    },
  ],
  birds: [
    {
      id: 'magpie', common: 'Oriental Magpie-Robin', scientific: 'Copsychus saularis', image: IMAGES.birds.magpie,
      clues: 'Adult males are boldly black-and-white; females are greyer. Both sexes have conspicuous white wing patches and a long tail, so use those traits together when plumage colour varies.', keyClue: 'clear white wing patches and a long tail (plumage colour differs by sex)',
    },
    {
      id: 'bulbul', common: 'Red-whiskered Bulbul', scientific: 'Pycnonotus jocosus', image: IMAGES.birds.bulbul,
      clues: 'Pointed black crest, white cheek, red cheek patch, and red vent.', keyClue: 'a black crest with red cheek and vent markings',
    },
    {
      id: 'dove', common: 'Spotted Dove', scientific: 'Spilopelia chinensis', image: IMAGES.birds.dove,
      clues: 'Grey-brown body and a black nape patch patterned with white spots.', keyClue: 'the black-and-white spotted nape patch',
    },
    {
      id: 'sparrow', common: 'Eurasian Tree Sparrow', scientific: 'Passer montanus', image: IMAGES.birds.sparrow,
      clues: 'Compact sparrow with chestnut crown and a black cheek spot.', keyClue: 'the chestnut crown and black cheek spot',
    },
  ],
};


export const SESSION_CHECKPOINTS = [
  {
    module: 'module-1',
    multipleChoice: {
      prompt: 'Which comparison is correct?',
      options: [
        'Human height is continuous variation; ABO blood groups are discontinuous classes.',
        'Height and ABO blood groups are both discontinuous classes.',
        'Variation within one species proves that speciation has occurred.',
      ],
      answer: 0,
      explanation: 'Height spans a range, whereas ABO groups fall into distinct classes. Both can vary within one species.',
    },
    openResponse: {
      prompt: 'State the biological species concept and give one situation where it is difficult to apply.',
      modelAnswer: 'The biological species concept defines a species as natural populations that can interbreed and produce viable, fertile offspring, with reproductive isolation limiting gene flow from other groups. It is difficult to apply to fossils and obligately asexual organisms.',
    },
  },
  {
    module: 'module-2',
    multipleChoice: {
      prompt: 'A diploid sample has two overlapping peaks at one Sanger-trace position. What is the best interpretation?',
      options: [
        'The variant definitely occurs in at least 1% of the population.',
        'The sample may be heterozygous at that site, but one trace does not establish population frequency.',
        'The sequence contains an insertion and a deletion at every allele.',
      ],
      answer: 1,
      explanation: 'Two base signals can be consistent with two alleles in one diploid sample. SNP frequency is a population-level property.',
    },
    openResponse: {
      prompt: 'Why can one chromatogram not establish the ≥1% population-frequency convention for an SNP?',
      modelAnswer: 'One chromatogram represents one sample and can support a genotype interpretation at a locus. Estimating whether a variant reaches ≥1% requires data from a population sample, not one individual trace.',
    },
  },
  {
    module: 'module-3',
    multipleChoice: {
      prompt: 'Which set of observations supports the human chromosome-2 fusion hypothesis?',
      options: [
        'Human chromosome 2 is longer than every other chromosome.',
        'Humans have a different chromosome count from other great apes, with no other evidence needed.',
        'Matching G-band order, internal telomeric repeats and a vestigial centromere occur in the predicted positions.',
      ],
      answer: 2,
      explanation: 'The fusion hypothesis predicts a specific end-to-end banding pattern, an internal telomere-repeat site and a second inactive centromere remnant.',
    },
    openResponse: {
      prompt: 'Name the main steps used to prepare and arrange a karyogram.',
      modelAnswer: 'Select a clear mitotic metaphase spread with condensed, non-overlapping chromosomes; stain it to reveal bands; photograph it; then pair and arrange chromosomes by length, centromere position and banding pattern.',
    },
  },
  {
    module: 'module-4',
    multipleChoice: {
      prompt: 'What does the C-value paradox show?',
      options: [
        'Genome size directly predicts organismal complexity.',
        'DNA amount does not reliably predict gene number or organismal complexity.',
        'Every larger genome contains proportionally more protein-coding genes.',
      ],
      answer: 1,
      explanation: 'Repeats, transposons, introns and polyploidy can increase DNA content without a matching increase in protein-coding genes or complexity.',
    },
    openResponse: {
      prompt: 'Name two features that can enlarge a genome without proportionally increasing protein-coding gene number.',
      modelAnswer: 'Examples include repetitive DNA, transposons, introns and whole-genome duplication (polyploidy). Genome comparisons should use haploid 1C values and consistent units.',
    },
  },
  {
    module: 'module-5',
    multipleChoice: {
      prompt: 'Which horizontal gene-transfer route typically uses direct cell contact?',
      options: ['Transformation', 'Conjugation', 'Transduction'],
      answer: 1,
      explanation: 'Conjugation transfers DNA through cell contact; transformation takes up environmental DNA, and transduction is mediated by bacteriophages.',
    },
    openResponse: {
      prompt: 'Why can horizontal gene transfer make a simple branching tree an incomplete model of prokaryotic ancestry?',
      modelAnswer: 'Binary fission creates vertical lineages, but conjugation, transformation and transduction can transfer genes across lineages. These cross-links create a reticulate history, so a gene history may differ from a cell-lineage history.',
    },
  },
  {
    module: 'module-6',
    multipleChoice: {
      prompt: 'A matching barcode is detected in an eDNA sample. Which conclusion is best supported?',
      options: [
        'The species is the most abundant organism at the exact sampling point.',
        'The species was detected in or near the sampled habitat; detection alone does not establish abundance.',
        'Every species missing from the reference library is absent from the habitat.',
      ],
      answer: 1,
      explanation: 'eDNA detection supports presence in or near a sampled habitat, but transport, degradation, bias and database coverage limit abundance claims.',
    },
    openResponse: {
      prompt: 'Outline the main steps in an environmental-DNA barcode survey.',
      modelAnswer: 'Collect a habitat sample, filter it, extract DNA, amplify a barcode region, sequence it and compare the result with reference sequences. Contamination, degradation, primer bias and incomplete references can affect identification.',
    },
  },
  {
    module: 'module-7',
    multipleChoice: {
      prompt: 'Which statement best separates an observation from a broader species conclusion?',
      options: [
        'A chromosome-count difference is useful evidence, but count alone does not define a species or prove a specific evolutionary event.',
        'Any visible difference proves two populations are separate species.',
        'A larger genome always means more genes and greater complexity.',
      ],
      answer: 0,
      explanation: 'Interpret evidence in context: chromosome count, appearance or DNA amount can inform a conclusion, but no single measure settles every species question.',
    },
    openResponse: {
      prompt: 'Give one example from this lesson where evidence supports an inference, and name one limitation.',
      modelAnswer: 'For example, overlapping Sanger peaks can support a heterozygous genotype in one diploid sample, but one chromatogram cannot establish a variant’s frequency in a population. Other valid examples should connect a method to a conclusion and state its limitation.',
    },
  },
];
