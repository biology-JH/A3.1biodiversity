# BioAtlas implementation plan

## Product approach

Build a static, single-page educational application for IB Biology Topic A3.1 with seven navigable modules. Use semantic HTML, responsive CSS, Tailwind utility styling, and vanilla JavaScript. Keep the app client-only: no login, server, database, or user data persistence is required. The quiz score and activity state remain in the browser session.

## Content and interactions

Organize all lesson content, genome chart values, quiz questions, species-key traits, and image references as small data objects consumed by module-rendering functions. Provide a sticky module navigator, responsive lesson header, live quiz score, active quiz feedback, flashcard flips, validated nomenclature exercise, chromatogram hotspots, chromosome evidence markers and mule comparison toggle, selectable/sortable genome chart, specimen-key branching, eDNA stepper, and a self-scoring quiz summary.

## Source imagery

Extract embedded media from both uploaded PPTX archives. Preserve an asset manifest that maps each extracted visual to the deck part, slide number, and original media path. Include the slide-specific image placements under the web project's `assets/` directory and reference authentic visuals from the relevant sections. Prioritize the source chromatogram, chromosome-2 fusion graphic, human/chimpanzee karyogram, genome-size chart, frog photographs, eDNA workflow, laboratory visuals, and dolphin visual. Where the deck does not contain its four bird-key photos, use accurately identified, attributed supplement images and label them as supplemental rather than implying they were in the slides.

## Design

Use a clean scientific biodiversity aesthetic in emerald, slate, and warm white. Make content cards crisp, high-contrast, and readable on mobile; use subtle botanical/sequence motifs, compact labels, and direct interaction feedback. Preserve the original slide figures without drawing replacement lookalikes. The brand mark can reuse a small source DNA image.

## Project layout

- `index.html`: one-page shell, landmarks, global header, and module mounts.
- `src/main.js`: module rendering and all interaction handlers.
- `src/data.js`: lesson facts, chart dataset, question set, keys, and image map.
- `src/styles.css`: responsive design system and accessible interaction states.
- `assets/part1/` and `assets/part2/`: slide-mapped visual extracts used by the app.
- `public/manus-routes.json`: declared route set for the single-page site.
- `scripts/build.sh`: dependency-free static build that assembles `dist/`.
- `dist/`: publication output containing `index.html`, sources, and assets.

## Build and deployment

Run a lightweight declared development command on the configured project port. Build a static output directory with a self-contained copy script and configure Webdev static publishing to serve `dist/`. Keep the route manifest synchronized with the one-page route. Inspect responsive visual previews and ensure the browser console/source checks have no blocking errors, then push the intended changes to the canonical main branch for a recorded checkpoint and publish the requested live site.
