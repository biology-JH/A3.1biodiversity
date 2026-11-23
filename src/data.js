export const IMAGES = {
  dogs: '/manus-storage/img-02_a9bcb6e9.png',
  lion: '/manus-storage/img-02_442cc92e.jpg',
  jaguar: '/manus-storage/img-03_827e0ff9.jpg',
  tiger: '/manus-storage/panthera-tigris-bengal_f758e19f.jpg',
  chromatogram: '/manus-storage/img-02_4b2df534.jpg',
  centromeres: '/manus-storage/img-02_31c0d8d7.png',
  fusion: '/manus-storage/img-02_f9506d8d.png',
  chromosomeNumbers: '/manus-storage/img-02_f5b792eb.png',
  karyogram: '/manus-storage/img-02_ff837d2e.png',
  donkey: '/manus-storage/img-02_32670674.jpg',
  equineKaryotypes: '/manus-storage/img-02_414bf035.png',
  genomeChart: '/manus-storage/img-02_f2617966.png',
  helix: '/manus-storage/img-04_d91290b8.png',
  transfer: '/manus-storage/img-02_96c9002a.png',
  repeatImages: [
    '/manus-storage/img-02_8eac2865.png',
    '/manus-storage/img-03_8c5eea93.png',
    '/manus-storage/img-04_0d65e416.png',
    '/manus-storage/img-05_6d0f27c0.png',
  ],
  frogRomeri: '/manus-storage/img-02_2ac5f3d5.jpg',
  frogCascade: '/manus-storage/img-03_90289f96.jpg',
  barcode: '/manus-storage/img-02_8951a274.png',
  water: '/manus-storage/img-02_99f40f13.jpg',
  filtration: '/manus-storage/img-03_9e927655.jpg',
  pcr: '/manus-storage/img-04_1e34c9f3.jpg',
  database: '/manus-storage/img-05_78646ede.png',
  dolphin: '/manus-storage/img-02_e446e01d.jpg',
  birds: {
    magpie: '/manus-storage/oriental-magpie-robin_26b479ab.jpg',
    sparrow: '/manus-storage/eurasian-tree-sparrow_807ed83c.jpg',
    dove: '/manus-storage/spotted-dove_997501d3.jpg',
    bulbul: '/manus-storage/red-whiskered-bulbul_4880ab58.jpg',
  },
};

export const FLASHCARDS = [
  {
    term: 'Biological species concept',
    tag: 'A3.1.4',
    image: IMAGES.dogs,
    alt: 'Domestic dogs showing a wide range of body sizes and forms',
    front: 'What makes populations one species?',
    back: 'A species is a group of actually or potentially interbreeding natural populations that produce viable, fertile offspring and are reproductively isolated from other groups. It fits fossils and obligate asexual organisms poorly.',
  },
  {
    term: 'Single-nucleotide polymorphism',
    tag: 'A3.1.8',
    image: IMAGES.chromatogram,
    alt: 'Sanger sequencing chromatogram with overlapping peaks at two positions',
    front: 'What is a SNP?',
    back: 'A single-nucleotide polymorphism is a difference at one DNA base among individuals. A double peak in a chromatogram can indicate two bases at the same position in a heterozygous sample.',
  },
  {
    term: 'C-value paradox',
    tag: 'A3.1.10',
    image: IMAGES.genomeChart,
    alt: 'Genome-size comparison chart extracted from the lesson slides',
    front: 'Does more DNA mean greater complexity?',
    back: 'No. Total DNA content does not reliably predict organismal complexity or protein-coding gene count. Repeats, transposons, introns and whole-genome duplication can add DNA.',
  },
  {
    term: 'Karyogram',
    tag: 'A3.1.7',
    image: IMAGES.karyogram,
    alt: 'Human and chimpanzee karyotypes arranged for comparison',
    front: 'How are chromosomes organised?',
    back: 'A karyogram arranges chromosomes into homologous pairs, commonly using length, centromere position and reproducible banding patterns.',
  },
  {
    term: 'Horizontal gene transfer',
    tag: 'A3.1.12',
    image: IMAGES.transfer,
    alt: 'Bacteria exchanging genetic material through direct cell contact',
    front: 'How can bacteria gain genes from other lineages?',
    back: 'Conjugation transfers DNA by direct contact, transformation takes up environmental DNA, and transduction moves DNA by bacteriophages. These routes blur simple branching ancestry.',
  },
  {
    term: 'Environmental DNA',
    tag: 'A3.1.15',
    image: IMAGES.water,
    alt: 'Field collection of an environmental water sample',
    front: 'What can habitat water reveal?',
    back: 'Environmental DNA is genetic material shed into a habitat by organisms. Researchers collect and analyse samples to detect species without capturing or directly observing them.',
  },
];

export const BINOMIAL_SPECIES = [
  {name: 'Panthera leo', common: 'Lion', image: IMAGES.lion, source: 'Part 1, slide 21'},
  {name: 'Panthera onca', common: 'Jaguar', image: IMAGES.jaguar, source: 'Part 1, slide 21'},
  {name: 'Panthera tigris', common: 'Tiger', image: IMAGES.tiger, source: 'Public-domain Bengal tiger reference photo'},
];

export const GENOME_DATA = [
  {id: 'yeast', name: 'Saccharomyces cerevisiae', common: 'Budding yeast', mbp: 12, geneCount: 6021, geneSource: 'https://www.ncbi.nlm.nih.gov/assembly/285498', complexityTier: 1, organization: 'Unicellular eukaryote'},
  {id: 'arabidopsis', name: 'Arabidopsis thaliana', common: 'Thale cress', mbp: 135, geneCount: 27549, geneSource: 'https://www.ncbi.nlm.nih.gov/assembly/1733481', complexityTier: 2, organization: 'Multicellular plant'},
  {id: 'drosophila', name: 'Drosophila melanogaster', common: 'Fruit fly', mbp: 140, geneCount: 13986, geneSource: 'https://flybase.org/docs/releasenotes.tx', complexityTier: 3, organization: 'Multicellular animal'},
  {id: 'human', name: 'Homo sapiens', common: 'Human', mbp: 3200, geneCount: 19890, geneSource: 'https://www.ncbi.nlm.nih.gov/genome/annotation_euk/Homo_sapiens/GCF_000001405.40-RS_2025_08.html', complexityTier: 3, organization: 'Multicellular animal'},
  {id: 'paris', name: 'Paris japonica', common: 'Japanese canopy plant', mbp: 149000, geneCount: null, complexityTier: 2, organization: 'Multicellular plant'},
  {id: 'amoeba', name: 'Amoeba proteus', common: 'Amoeba', mbp: 290000, geneCount: null, complexityTier: 1, organization: 'Unicellular eukaryote'},
];

export const QUIZ = [
  {
    id: 'species-concept',
    type: 'choice',
    source: 'Part 2, slides 3–4',
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
    source: 'Part 2, slides 20–21',
    prompt: 'Humans have about 3,200 Mbp and 20,000 genes; Arabidopsis has about 135 Mbp and 27,000 genes. What does this demonstrate?',
    options: [
      'Arabidopsis is more evolutionarily complex than humans',
      'Genome size does not determine gene count or organism complexity',
      'Humans have an unusually high proportion of coding exons',
      'Plant genomes contain no repetitive non-coding DNA',
    ],
    answer: 1,
    explanation: 'Arabidopsis has a much smaller genome but more protein-coding genes in the lesson comparison. Total DNA mass is not a direct measure of gene number or complexity.',
  },
  {
    id: 'fusion-testability',
    type: 'truefalse',
    source: 'Part 1, slides 35–36',
    prompt: 'The hypothesis that human chromosome 2 formed by end-to-end fusion of two ancestral primate chromosomes is scientifically testable.',
    answer: true,
    explanation: 'The fusion hypothesis makes falsifiable predictions, including internal telomere-repeat sequences and a vestigial centromere. These markers can be tested by cytogenetics and DNA sequencing.',
  },
  {
    id: 'prokaryote-bsc',
    type: 'truefalse',
    source: 'Part 2, slides 28–29',
    prompt: 'The biological species concept reliably defines every species across Bacteria and Archaea.',
    answer: false,
    explanation: 'Many prokaryotes reproduce by binary fission rather than interbreeding, and horizontal gene transfer moves genes across lineages. Reproductive compatibility is therefore not a universal boundary.',
  },
  {
    id: 'key-order',
    type: 'order',
    source: 'Part 2, slides 36–37',
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
    source: 'Part 2, slides 41–42',
    prompt: 'Match each term to its definition.',
    pairs: [
      {term: 'eDNA survey', answer: 'Direct detection of genetic material shed into habitats'},
      {term: 'SNP', answer: 'Single-base polymorphic variation within shared genomes'},
      {term: 'COI gene', answer: 'Mitochondrial locus used for standard animal DNA barcoding'},
      {term: 'Dichotomous key', answer: 'Sequential couplets of paired diagnostic choices'},
    ],
    explanation: 'eDNA surveys detect environmental traces, SNPs describe one-base variants, animal barcodes commonly use mitochondrial COI, and dichotomous keys use paired choices.',
  },
];

export const IMAGE_CREDITS = {
  magpie: {credit: 'JJ Harrison · CC BY-SA 3.0', url: 'https://commons.wikimedia.org/wiki/File:Copsychus_saularis_-_Ang_Khang.jpg'},
  sparrow: {credit: 'Laitche · Public domain', url: 'https://commons.wikimedia.org/wiki/File:Tree_Sparrow_August_2007_Osaka_Japan.jpg'},
  dove: {credit: 'Shantanu Kuveskar · CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:Spotted_Dove_(Streptopelia_chinensis)_Photograph_by_Shantanu_Kuveskar.jpg'},
  bulbul: {credit: 'Davidvraju · CC BY 4.0', url: 'https://commons.wikimedia.org/wiki/File:Red_whiskered_bulbul_-_1.jpg'},
  tiger: {credit: 'John and Karen Hollingsworth / U.S. Fish and Wildlife Service; retouched by Zwoenitzer; public domain', url: 'https://commons.wikimedia.org/wiki/File:Panthera_tigris_tigris.jpg'},
};

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
      clues: 'Male has bold black-and-white plumage, conspicuous white wing patches, and a long tail.', keyClue: 'black-and-white plumage with white wing patches',
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
