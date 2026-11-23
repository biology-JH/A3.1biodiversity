# TODO

- [x] **Extract and map slide visuals** — Extract all relevant images, diagrams, karyograms, chromatograms, charts, and species photographs from both attached `.pptx` files by unzipping `ppt/media/`. Save them locally in `/assets` (or embed them cleanly), map them to their source slides, and link them throughout the website so every module uses the exact visuals from the supplied slides rather than generic placeholders.

- [x] **Module 1: Flashcards and binomial nomenclature** — Create clickable 3D flip-cards for Biological Species Concept, SNP, C-value paradox, karyogram, horizontal gene transfer, and eDNA. Pair each card with its corresponding slide illustration, including the SNP DNA figure, karyogram, and HGT mechanisms. Add an interactive fill-in-the-blank checker for genus, species epithet, and italics rules, featuring the Panthera leo / Panthera onca / Panthera tigris slide images.

- [x] **Module 2: Chromatogram and SNP base-caller** — Display the Sanger chromatogram image from Part 2 slide 1 showing heterozygous double peaks G/A at position 140 and T/C at position 246. Add clickable hotspots over both peaks so students can inspect how overlapping fluorescence peaks reveal SNPs.

- [x] **Module 3: Human chromosome 2 fusion explorer** — Use the human-vs-chimpanzee karyogram and chromosome-fusion diagram (Chr 2A + Chr 2B → human Chr 2). Add clickable markers on the fused chromosome for G-banding homology, internal telomeric repeats at 2q13, and the vestigial centromere at 2q21. Include a toggleable horse (2n=64) × donkey (2n=62) → mule (2n=63) hybrid-sterility comparison using the slide's equine/karyotype and meiotic visuals where available.

- [x] **Module 4: Genome-size and C-value lab** — Build an interactive bar chart for *S. cerevisiae* (12 Mbp), *A. thaliana* (135 Mbp), *D. melanogaster* (140 Mbp), *H. sapiens* (3,200 Mbp), *P. japonica* (149,000 Mbp), and *Amoeba proteus* (290,000 Mbp). Allow sorting by genome size, protein-coding gene count, and organism complexity. Support the lesson with the slide's genome-size chart, Amoeba visual where present, and non-coding DNA examples: transposons, tandem repeats, polyploidy, and introns.

- [x] **Module 5: Hong Kong fauna dichotomous-key simulator** — Provide Mode A for *Liuixalus romeri* vs. *Amolops hongkongensis*, using the exact frog photographs from the slides; and Mode B for Eurasian Tree Sparrow, Spotted Dove, Red-whiskered Bulbul, and Oriental Magpie Robin. Show a mystery specimen photo with field traits, let students choose paired, mutually exclusive couplets, and give instant feedback and an identification. If the supplied slides lack bird photographs, use accurately identified and attributed supplemental images rather than passing them off as slide extracts.

- [x] **Module 6: Pearl River Estuary eDNA and barcoding lab** — Create an interactive four-step workflow: water sampling → filtration → PCR amplification → database match. Use the slide visuals for sampling, filtration, lab equipment, results/heatmap, and the Indo-Pacific humpback dolphin (*Sousa chinensis*) where available.

- [x] **Module 7: Self-grading IB exam and score tracker** — Convert all multiple-choice, true/false, ordering, and matching questions from both decks into an interactive quiz with a live score counter in the header, instant explanations, and an end summary screen.

- [ ] **Responsive visual design and live deployment** — Use a clean modern scientific/biodiversity aesthetic with emerald green, slate dark-mode accents, and crisp white cards. Build with responsive HTML, Tailwind CSS, and vanilla JavaScript; support desktop and mobile browsers; deploy the finished site to a live shareable link.
