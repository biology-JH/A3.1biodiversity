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
      title: 'Species, variation and names',
      intro: 'Figures reproduced from the attached study guide, paired with the species and variation notes.',
      figures: [
        figure('tiger-forest.jpg', 'A tiger walking through dense green forest vegetation.', 'Tiger moving through a wooded habitat.'),
        figure('peacock-display.jpg', 'A peacock displaying its iridescent train beside a peahen in grass.', 'Peacock courtship plumage illustrates visible variation within a species.'),
        figure('variation-within-species.png', 'Infographic comparing continuous human-height variation, ABO blood groups and different domestic dog breeds.', 'Continuous and discontinuous variation, with dog-breed differences that do not by themselves demonstrate speciation.', 'diagram'),
        figure('dog-breed-diversity.jpg', 'A group of domestic dogs with a wide range of coat colours and body forms.', 'Domestic dogs show striking phenotypic diversity within one species.'),
        figure('lion-savanna.jpg', 'A lion walking across an open, dry grassland habitat.', 'Lion (Panthera leo), an example of the genus Panthera.'),
        figure('tiger-profile.jpg', 'A tiger walking across a rocky surface.', 'Tiger (Panthera tigris), a second species in the genus Panthera.'),
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
      title: 'Reading nucleotide traces',
      intro: 'The guide’s sequence figures complement the interactive chromatogram and its cautions about population frequency.',
      figures: [
        figure('sanger-sequence-trace.png', 'Sanger chromatogram showing coloured nucleotide peaks and base calls along a sequence.', 'Example Sanger sequence trace: each coloured peak contributes to a base call.', 'diagram'),
        figure('overlapping-sanger-peaks.png', 'Chromatogram with overlapping coloured peaks marked at a nucleotide position.', 'Overlapping peaks can be consistent with two alleles in one diploid sample; one trace alone does not establish population frequency.', 'diagram'),
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
    galleries: [
      {
        title: 'Karyogram preparation and chromosome 2',
        intro: 'The guide’s chromosome figures show how pairing criteria and predicted fusion markers are evaluated.',
        figures: [
          figure('chromosome-2-fusion-overview.png', 'Diagram comparing two banded ancestral chromosomes with one human chromosome 2 and marking internal chromosome features.', 'Overview of the proposed ancestral chromosome fusion and the internal features tested by the hypothesis.', 'diagram'),
          figure('karyogram-criteria.png', 'Infographic identifying chromosome arms and centromere positions and listing karyogram matching criteria.', 'Karyograms pair chromosomes by length, centromere position and banding pattern.', 'diagram'),
          figure('metaphase-spread.png', 'Microscope image of a stained metaphase spread with condensed chromosomes.', 'A metaphase spread provides condensed chromosomes for karyogram preparation.'),
          figure('chromosome-2-banding-homology.png', 'Banding comparison showing human chromosome 2 aligned with chimpanzee chromosomes 2A and 2B.', 'G-banding correspondence supports the predicted end-to-end relationship.', 'diagram'),
          figure('internal-telomeric-repeats.png', 'Schematic marking inverted telomeric repeats within human chromosome 2 at 2q13.', 'Internal inverted telomeric repeats at 2q13 are a predicted fusion-site marker.', 'diagram'),
          figure('vestigial-centromere.png', 'Human chromosome 2 diagram marking the active centromere and the inactive vestigial centromere at 2q21.', 'A vestigial centromere and alphoid satellite DNA are marked at 2q21.', 'diagram'),
          figure('ancestral-chromosomes-2a-2b.png', 'Diagram arranging ancestral chromosomes 2A and 2B end-to-end alongside human chromosome 2.', 'Ancestral chromosomes 2A and 2B align with human chromosome 2 in the fusion model.', 'diagram'),
          figure('chromosome-2-evidence-summary.png', 'Simplified chromosome diagram summarising banding homology, internal telomeres and a vestigial centromere.', 'Summary of the three evidence types: banding homology, internal telomeres and a vestigial centromere.', 'diagram'),
        ],
      },
      {
        title: 'Horse, donkey and mule comparison',
        intro: 'These equid photographs accompany the chromosome-pairing explanation; the mechanism is meiotic pairing, not odd number alone.',
        figures: [
          figure('horse-field.jpg', 'A horse standing in a grassy field.', 'Horse, with a diploid chromosome number of 64.'),
          figure('equid-group.jpg', 'Several equids photographed together outdoors for a horse, donkey and mule comparison.', 'Equids shown alongside the horse–donkey–mule chromosome comparison.'),
        ],
      },
    ],
  },
  'module-4': {
    title: 'Whole-genome sequencing, genome size and C-value',
    terms: [
      ['Whole-genome sequencing', '全基因組測序'],
      ['C-value', 'C值'],
      ['C-value paradox', 'C值悖論'],
    ],
    galleries: [
      {
        title: 'Sequencing in the laboratory',
        intro: 'The attached guide places sequencing technology in the context of real laboratory work.',
        figures: [
          figure('sequencing-laboratory.jpg', 'Automated DNA sequencing equipment in a modern laboratory.', 'Automated sequencing equipment used to read DNA.'),
          figure('sequencing-researcher.jpg', 'A researcher operating laboratory equipment used for DNA analysis.', 'A researcher working with DNA-analysis equipment.'),
        ],
      },
      {
        title: 'Genome-size comparisons',
        intro: 'Compare the guide’s chart and organism images with C-value, annotation-specific gene counts and the complexity caveat.',
        figures: [
          figure('c-value-genome-size-chart.png', 'Horizontal chart comparing genome sizes for several eukaryotic organisms.', 'The comparison spans many orders of magnitude in DNA content.', 'diagram'),
          figure('paris-japonica-habitat.jpg', 'Small white flowers of Paris japonica growing among forest vegetation.', 'Japanese canopy plant (Paris japonica), with a genome much larger than the human genome.'),
          figure('arabidopsis-flowering-plant.jpg', 'Close view of small white flowers on a thale cress plant.', 'Thale cress (Arabidopsis thaliana), a model plant with a comparatively small genome.'),
          figure('amoeba-proteus-micrograph.jpg', 'Microscope image of an Amoeba proteus cell with an irregular outline.', 'Amoeba proteus illustrates that very large genomes do not directly measure organismal complexity.'),
          figure('drosophila-melanogaster.jpg', 'Close-up image of a fruit fly with red compound eyes and translucent wings.', 'Fruit fly (Drosophila melanogaster), one of the genome-size comparison organisms.'),
        ],
      },
    ],
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
        title: 'Frog observations and the dichotomous key',
        intro: 'Use visible, paired diagnostic traits; when a photograph hides a feature, keep the result inconclusive.',
        figures: [
          figure('frog-field-observation.jpg', 'A small frog shown close-up against a person’s hand.', 'Close-up frog reference image; wildlife should be observed without handling or disturbance.'),
          figure('romers-tree-frog-leaf.jpg', 'A small brown frog resting on a green leaf.', 'Tree-frog reference photograph for comparing visible field characters.'),
          figure('tree-frog-closeup.jpg', 'Close view of a dark, patterned frog on a leafy surface.', 'A close view helps inspect body pattern and skin texture without assuming every diagnostic trait is visible.'),
          figure('frog-key-traits.png', 'Illustrated comparison of frog dorsal markings and a sequence of observable identification checks.', 'Frog-key decisions should use clear, observable traits rather than vague impressions.', 'diagram'),
        ],
      },
      {
        title: 'Horizontal gene transfer and prokaryote ancestry',
        intro: 'Conjugation, transformation and transduction add cross-lineage connections to otherwise branching histories.',
        figures: [
          figure('hgt-pathways.png', 'Diagram comparing conjugation, transformation and transduction as DNA-transfer pathways between prokaryotes.', 'Three horizontal-transfer mechanisms: direct contact, environmental DNA uptake and bacteriophage-mediated transfer.', 'diagram'),
          figure('prokaryote-lineages-1.png', 'Illustration of prokaryotic cells and cross-lineage genetic transfer.', 'Cell-level representation of gene exchange between prokaryotic lineages.', 'diagram'),
          figure('prokaryote-lineages-2.png', 'Diagram of prokaryote lineages with horizontal links between otherwise branching groups.', 'Horizontal transfer makes a strictly branching ancestry model incomplete.', 'diagram'),
          figure('bacteriophage-micrograph.jpg', 'Electron micrograph of bacteriophage particles.', 'Bacteriophages can mediate transduction by moving DNA between bacterial cells.'),
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
      intro: 'The guide connects a local dolphin case with barcode markers, field sampling and reference-library matching.',
      figures: [
        figure('indo-pacific-humpback-dolphin.jpg', 'An Indo-Pacific humpback dolphin swimming in coastal water.', 'Indo-Pacific humpback dolphin (Sousa chinensis), the local eDNA case-study species.'),
        figure('pearl-river-estuary-map.jpg', 'Map showing the Pearl River Estuary and surrounding Hong Kong western waters.', 'The Pearl River Estuary provides the geographic context for non-invasive eDNA monitoring.', 'diagram'),
        figure('dna-barcode-loci.png', 'Infographic listing animal COI, plant rbcL and matK, and fungal ITS barcode loci.', 'Common barcode markers differ among animals, plants and fungi.', 'diagram'),
        figure('edna-workflow.png', 'Workflow illustration showing water collection, filtration, DNA analysis and sequence comparison.', 'eDNA workflow: collect water, filter traces, extract and amplify DNA, sequence, and compare with a reference database.', 'diagram'),
      ],
    }],
  },
};
