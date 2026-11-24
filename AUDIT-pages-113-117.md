

## Verified implementation and layout

- PDF pages 113–117 in the earlier supplied Oxford study guide correspond to printed pages 105–109; the A3.1 page mapping and source links above record that distinction. New user-supplied guide page 1 also provides the panorama used as the site hero image, extracted at 1232 × 544 px and recorded in `assets/study-guide/asset-manifest.json`.
- Added the A3.1.10 database-comparison exercise and the A3.1.14 construct-and-test key prompt. Added explicit between/within species variation comparisons and homozygous/heterozygous allele definitions; corrected ICTV species nomenclature wording and chromosome-label mapping.
- The hero panorama loads at its original aspect ratio with `object-fit: contain`; desktop overlays the title over a dark gradient, while tablet/mobile place the full image above a light copy panel. No header-image crop was observed at 1400, 820 or 390 px.
- `npm run build` succeeded. Chromium reported seven modules, 17 quiz questions, no JavaScript errors, and all 39 rendered images loaded. `git diff --check` passed. Page width matched viewport at 1400, 820 and 390 px. All six first-module flashcards kept 20 px text and measured zero paragraph or face overflow at each width.
- GitHub CLI is authenticated as `biology-JH` and `origin` is the requested repository. The Vercel MCP is unauthenticated in this session and no Vercel CLI is installed; deployment identity/status cannot be verified through the Vercel account until its OAuth session is restored. The existing public alias previously returned HTTP 200, but that does not prove the new commit has deployed.

## Implementation status

Local edits and verification are complete. GitHub push and post-deployment alias verification remain pending; do not mark them complete until the pushed commit and Ready deployment are confirmed.
