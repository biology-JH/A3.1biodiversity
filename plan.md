# BioAtlas expanded implementation plan

## Product approach

Extend the existing static, single-page IB Biology A3.1 website into a comprehensive SL/HL study guide covering every syllabus point A3.1.1–A3.1.15. Preserve the seven interactive modules and their existing source-slide visuals. Add detailed, expandable lesson notes with examples, qualifications and source links instead of replacing the existing concise explanations. Keep the app client-only; quiz and activity state remain in the browser session.

## Syllabus coverage and interactions

1. **Species, variation and naming:** Teach continuous and discontinuous intraspecific variation, dog-breed divergence without speciation, the morphological species concept and its limits, formal binomial naming, Mayr’s biological species concept, its limits and the speciation continuum including ring species. Retain flashcards and the binomial rule trainer. Include the HL prokaryote/HGT explanation where reproductive species criteria do not transfer cleanly.
2. **Genome unity and SNPs:** Explain conserved genes, the ≥1% population-frequency convention for a SNP, approximate human SNP spacing, coding and non-coding effects, indels, chromatogram double peaks, and mechanisms that alter genome size. Retain both clickable chromatogram hotspots.
3. **Chromosome evidence:** Teach diploid/haploid notation, karyogram anatomy and banding, the human/chimpanzee chromosome counts, chromosome-2 fusion evidence, and the horse–donkey–mule pairing problem. Retain evidence markers and the mule toggle.
4. **C-value and sequencing:** Preserve all six lesson genome-size values, add annotation-specific counts with release notes and citations, discuss the C-value paradox, explain sequencing-platform history from Sanger to short-read and long-read methods, and connect whole-genome sequencing to phylogenomics, outbreak investigation and precision medicine. Retain sorting controls and repeat/non-coding-DNA visuals.
5. **Dichotomous keys:** Explain paired, mutually exclusive, objective observable traits and provide interactive frog and bird identification paths, with uncertainty for sex, age and natural variation.
6. **Barcoding and eDNA:** Teach standard animal, plant and fungal barcode loci; extend the four-step eDNA workflow and Pearl River Estuary dolphin case; compare morphology-led identification with DNA metabarcoding and explain limitations.
7. **Exam check:** Expand the self-marking question bank to exercise each syllabus area through multiple choice, true/false, ordering and matching, with immediate explanations and a final score summary.

## Teaching-content format

Add structured syllabus-note data in `src/syllabus.js`, grouped by module and syllabus code. Render it inside each corresponding module as accessible expandable note cards. Every external scientific claim has an adjacent source link; keep the citation list in `assets/SOURCES.md` and the genome annotation details in `assets/GENOME_COUNTS.md`. Treat genome-size and gene-count snapshots as source/release-specific. Never invent counts where no annotated reference count is supported.

## Design and accessibility

Preserve the emerald/slate/warm-white BioAtlas visual system, botanical/sequence motifs, Tailwind CDN utilities and the hand-authored responsive CSS. Set primary instructional reading text to **24 px**, keeping labels, metadata and captions intentionally smaller. Increase the display size of chromatograms, karyograms, fusion diagrams, source charts, taxonomy photos and workflow figures. Preserve aspect ratios and avoid cropping meaningful diagram labels. On narrow viewports, allow text to wrap and stack figures rather than shrinking labels below readability. Keep high contrast, keyboard-operable controls, alt text and reduced-motion handling.

## Project layout

- `index.html`: semantic one-page shell, seven module mounts and dedicated syllabus-note mounts.
- `src/main.js`: rendering and interaction handlers, including updated quiz scoring.
- `src/data.js`: images, existing flashcards, genome comparison, fauna keys and question bank.
- `src/syllabus.js`: complete source-linked notes grouped by module and syllabus point.
- `src/styles.css`: responsive design, 24-pixel teaching type, larger diagrams and accessible states.
- `assets/part1/` and `assets/part2/`: extracted, slide-mapped visuals; `assets/asset-manifest.json` maps each placement.
- `assets/SOURCES.md` and `assets/GENOME_COUNTS.md`: media credits and annotation-specific gene-count provenance.
- `public/manus-routes.json`: declared single-page route.
- `package.json`: dependency-free static build script; Webdev publishes `dist/`.

## Build and deployment

Reuse the currently configured managed static build and port-3000 development server. Validate build output, route manifest, syntax, source-image paths, narrow/mobile layout and expanded notes. Update the same public project by fetching and integrating current `origin/main`, pushing the intended checkpoint, then publish that checkpoint and verify its public URL.
