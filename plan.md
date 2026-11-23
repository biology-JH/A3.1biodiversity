# BioAtlas expanded implementation plan

## Product approach

Continue the existing static, single-page IB Biology A3.1 study guide covering syllabus points A3.1.1–A3.1.15. Integrate the newly supplied 17-page Word guide’s explanatory text, Traditional Chinese term glosses and every embedded picture into the matching SL or HL module. Preserve the seven interactive modules and their existing useful lesson visuals, citations and interactions. Enrich existing lessons rather than duplicating paragraphs already covered. Prefer the supplied guide’s lion/tiger photographs for the Panthera example and remove the older redundant photo gallery/supplemental tiger reference; retain functional slide evidence and diagrams that still teach distinct material. Do not source or fabricate replacement photos.

## Content and visual integration

1. **Species, variation and naming:** Include the guide’s tiger, peacock, variation infographic, dog group, lion and tiger figures; give the key species-concept and variation terms Traditional Chinese glosses.
2. **SNPs and sequencing:** Place the two nucleotide-sequence/chromatogram figures with the genome-unity explanation. Place laboratory and timeline figures in the whole-genome sequencing module.
3. **Chromosome evidence and meiosis:** Use all karyogram, metaphase, chromosome-2 fusion, internal telomere, vestigial-centromere, summary and equid figures alongside the corresponding karyogram/fusion/mule lessons.
4. **C-value and genomes:** Include the guide’s chart and organism photographs; retain source/release-specific gene-count explanations and distinctions between genome size, gene count and organismal complexity.
5. **HGT and keys:** Include all prokaryote-transfer figures, phage micrograph, four frog/key visuals, plus bilingual terms for transfer pathways and dichotomous keys.
6. **Barcoding and eDNA:** Include the dolphin, Pearl River Estuary map, barcode loci and full workflow figures; gloss eDNA and DNA barcoding.
7. **Assessment:** Preserve existing interactive flashcards, binomial trainer, evidence markers, data sorting, identification keys, workflow stepper and self-marking quiz.

Keep the supplied figures under `assets/study-guide/` with a machine-readable manifest; add a separate source-guide figure metadata module in `src/guide.js` for semantic paths, accurate alt text, captions and module placement. Render accessible, responsive galleries in the relevant modules. Preserve original proportions, show whole diagrams without cropping, and distinguish figures supplied in the guide from the lesson-slide assets already in the project.

## Design and accessibility

Preserve the BioAtlas emerald/slate/warm-white visual system, botanical/sequence motifs, Tailwind CDN utilities and hand-authored responsive CSS. Enforce a **20 px minimum for every visible text element throughout the blog**, including navigation, labels, metadata, credits, captions, controls, mobile views and SVG diagrams. Keep instructional text at 24 px or larger, headings clearly larger, and metadata visually subordinate through weight, colour and spacing rather than smaller type. Give the new figure galleries a calm editorial-card treatment with generous spacing and full, uncropped image display. On narrow screens, wrap content and stack figure cards; allow horizontal scrolling only for wide diagrams where necessary. Retain high contrast, keyboard operation, alt text and reduced-motion handling.

## Project layout

- `index.html`: semantic one-page shell, seven module mounts and global document metadata.
- `src/main.js`: rendering and interaction handlers, including study-note/glossary and guide-figure gallery rendering.
- `src/data.js`: current slide visuals, flashcards, genome data, fauna keys and quiz content.
- `src/guide.js`: the guide’s 37 image captions, alt text, module groupings and Traditional Chinese glossary entries.
- `src/syllabus.js`: comprehensive, source-linked notes grouped by module and syllabus point.
- `src/styles.css`: responsive BioAtlas styles with a 20 px global type floor, larger headings/body, figure cards and accessible states.
- `assets/study-guide/`: all 37 original embedded guide images plus a semantic asset manifest.
- `assets/part1/` and `assets/part2/`: existing slide-mapped visuals; `assets/asset-manifest.json` maps those placements.
- `assets/SOURCES.md` and `assets/GENOME_COUNTS.md`: existing media and annotation provenance, extended to record the user-provided study-guide figures without inventing original third-party credits.
- `public/manus-routes.json`: declared single-page route.
- `package.json`: dependency-free static build script; generated site output is `dist/`.

## Build and delivery

Reuse the existing static build and the existing GitHub `main` → Vercel deployment relationship. Build the site, inspect source syntax and image references, and verify the 20 px floor in desktop/mobile rules and SVG text. Preserve the project’s current repository history and use the authorized GitHub path to update `main`; verify the public alias if deployment access is available. No new Webdev project or identifier should be created for this repository.