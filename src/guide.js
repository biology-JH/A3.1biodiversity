const figure = (asset, alt, caption, kind = 'photo') => ({ asset: `assets/study-guide/${asset}`, alt, caption, kind });

export const STUDY_GUIDE = {
  'module-1': {
    title: 'Species, variation and scientific names',
    terms: [
      ['Biological species concept', '生物學物種概念'],
      ['Morphological species concept', '形態學物種概念'],
      ['Sexual dimorphism', '雌雄異形'],
      ['Variation', '變異'],
      ['Gene flow', '基因流動'],
      ['Binomial nomenclature', '雙名法'],
    ],
    galleries: [{
      title: 'Variation and genus-level relationships',
      intro: 'These selected figures illustrate variation within one species and shared genus membership; appearance alone is not a species test.',
      figures: [
        figure('variation-within-species.png', 'Infographic comparing continuous human-height variation, discrete ABO blood groups and variation among domestic dog breeds.', 'Continuous and discontinuous variation occur within species; dog-breed differences do not by themselves demonstrate reproductive isolation.', 'diagram'),
        figure('peacock-display.jpg', 'A peacock displaying its iridescent train beside a peahen in grass.', 'Peacock and peahen appearance differs through sexual dimorphism, yet both belong to one species; visible differences alone do not define species boundaries.'),
        figure('lion-savanna.jpg', 'A lion walking across an open, dry grassland habitat.', 'The lion is <i>Panthera leo</i>. The capitalized genus name is shared with tiger and jaguar species.'),
        figure('tiger-profile.jpg', 'A tiger walking across a rocky surface.', 'The tiger is <i>Panthera tigris</i>, a different species in the genus <i>Panthera</i>; hybrid offspring do not automatically erase species boundaries.'),
      ],
    }],
  },
  'module-2': {
    title: 'Genome unity and sequence reading',
    terms: [
      ['Single-nucleotide polymorphism (SNP)', '單核苷酸多態性'],
      ['Insertion or deletion (indel)', '插入或缺失'],
      ['Sanger chromatogram', '色譜圖'],
    ],
    galleries: [{
      title: 'Heterozygous base calls',
      intro: 'One selected trace shows why overlapping peaks may indicate two alleles in a diploid sample, not a population-frequency estimate.',
      figures: [
        figure('overlapping-sanger-peaks.png', 'Sanger chromatogram with two overlapping coloured peaks marked at one nucleotide position.', 'Overlapping peaks at one base can be consistent with a heterozygous genotype. The ≥1% SNP convention concerns population frequency and cannot be established from one chromatogram.', 'diagram'),
      ],
    }],
  },
  'module-3': {
    title: 'Chromosomes, karyograms and fusion evidence',
    terms: [
      ['Karyogram', '染色體組型圖'],
      ['Diploid', '二倍體'],
      ['Haploid', '單倍體'],
    ],
    galleries: [{
      title: 'Karyogram criteria and chromosome-2 fusion',
      intro: 'Two distinct figures cover karyogram matching and the predicted fusion. The other banding and marker diagrams repeat evidence already available in the interactive case file.',
      figures: [
        figure('karyogram-criteria.png', 'Infographic identifying chromosome arms and centromere positions and listing karyogram matching criteria.', 'Pair condensed metaphase chromosomes by length, centromere position and banding pattern; label short p and long q arms.', 'diagram'),
        figure('chromosome-2-fusion-overview.png', 'Diagram comparing two banded ancestral chromosomes with one human chromosome 2 and marking internal chromosome features.', 'The fusion hypothesis predicts that chimpanzee chromosomes 12 and 13 (older site labels 2A/2B) correspond end-to-end with human chromosome 2; internal telomeres and a vestigial centromere provide further tests.', 'diagram'),
      ],
    }],
  },
  'module-4': {
    title: 'Whole-genome sequencing, genome size and C-value',
    terms: [
      ['Whole-genome sequencing', '全基因組測序'],
      ['C-value', 'C值'],
      ['C-value paradox', 'C值悖論'],
    ],
    galleries: [{
      title: 'Genome size is not a complexity scale',
      intro: 'The interactive chart already compares genome sizes; this single reference photo highlights an unusually large plant genome without repeating the chart.',
      figures: [
        figure('paris-japonica-habitat.jpg', 'Small white flowers of Paris japonica growing among forest vegetation.', 'The Japanese canopy plant, <i>Paris japonica</i>, has a very large genome. Genome size does not directly measure organismal complexity or protein-coding gene number.'),
      ],
    }],
  },
  'module-5': {
    title: 'Field identification and prokaryotic lineages',
    terms: [
      ['Dichotomous key', '二歧檢索表'],
      ['Horizontal gene transfer (HGT)', '水平基因轉移'],
      ['Conjugation', '結合'],
      ['Transformation', '轉化'],
      ['Transduction', '轉導'],
    ],
    galleries: [
      {
        title: 'Construct and test a dichotomous key',
        intro: 'Use observable, paired diagnostic traits; when a clue is hidden or ambiguous, do not force an identification.',
        figures: [
          figure('frog-key-traits.png', 'Illustrated comparison of frog dorsal markings and a sequence of observable identification checks.', 'A dichotomous key uses two mutually exclusive alternatives at each couplet. Test every specimen and revise unclear clues.', 'diagram'),
          figure('romers-tree-frog-leaf.jpg', 'A small brown frog resting on a green leaf.', 'Reference image for <i>Liuixalus romeri</i>; identify it using several observable traits such as the dorsal mark, toe pads and adult size.'),
        ],
      },
      {
        title: 'Horizontal gene transfer and prokaryote ancestry',
        intro: 'DNA exchange links otherwise branching lineages and can produce a reticulate evolutionary history.',
        figures: [
          figure('hgt-pathways.png', 'Diagram comparing conjugation, transformation and transduction as DNA-transfer pathways between prokaryotes.', 'Conjugation uses cell contact, transformation takes up environmental DNA, and transduction is mediated by bacteriophages.', 'diagram'),
          figure('prokaryote-lineages-2.png', 'Diagram of prokaryote lineages with horizontal links between otherwise branching groups.', 'Vertical descent branches; horizontal gene transfer adds cross-links, so a strictly branching tree is incomplete.', 'diagram'),
          figure('bacteriophage-micrograph.jpg', 'Electron micrograph of bacteriophage particles.', 'Bacteriophages can mediate transduction by moving DNA between bacterial cells; the image illustrates the vector, not a complete transfer event.'),
        ],
      },
    ],
  },
  'module-6': {
    title: 'DNA barcoding and environmental DNA',
    terms: [
      ['Environmental DNA (eDNA)', '環境DNA'],
      ['eDNA workflow', '環境 DNA 工作流程'],
      ['DNA barcoding', 'DNA條形碼鑑定'],
    ],
    galleries: [{
      title: 'Hong Kong waters: from eDNA to identification',
      intro: 'These figures connect the local dolphin example with sample location, marker choice and the identification workflow.',
      figures: [
        figure('indo-pacific-humpback-dolphin.jpg', 'An Indo-Pacific humpback dolphin swimming in coastal water.', 'Environmental DNA can detect traces of the Indo-Pacific humpback dolphin, <i>Sousa chinensis</i>, without capturing or directly observing it.'),
        figure('pearl-river-estuary-map.jpg', 'Map showing the Pearl River Estuary and surrounding Hong Kong western waters.', 'The map locates the coastal habitat where water samples are collected for non-invasive biodiversity monitoring.', 'diagram'),
        figure('dna-barcode-loci.png', 'Infographic listing animal COI, plant rbcL and matK, and fungal ITS barcode loci.', 'Reference barcode loci vary among groups: animal mitochondrial COI, plant chloroplast <i>rbcL</i> and <i>matK</i>, and fungal nuclear ITS.', 'diagram'),
        figure('edna-workflow.png', 'Workflow illustration showing water collection, filtration, DNA analysis and sequence comparison.', 'eDNA workflow: collect and filter a sample, extract and amplify DNA, then compare sequences with a reference database. Detection supports presence, not abundance.', 'diagram'),
      ],
    }],
  },
};
