

## Verified implementation and layout

- PDF pages 113–117 in the earlier supplied Oxford study guide correspond to printed pages 105–109; the A3.1 page mapping and source links above record that distinction. New user-supplied guide page 1 also provides the panorama used as the site hero image, extracted at 1232 × 544 px and recorded in `assets/study-guide/asset-manifest.json`.
- Added the A3.1.10 database-comparison exercise and the A3.1.14 construct-and-test key prompt. Added explicit between/within species variation comparisons and homozygous/heterozygous allele definitions; corrected ICTV species nomenclature wording and chromosome-label mapping.
- The hero panorama loads at its original aspect ratio with `object-fit: contain`; desktop overlays the title over a dark gradient, while tablet/mobile place the full image above a light copy panel. No header-image crop was observed at 1400, 820 or 390 px.
- `npm run build` succeeded. Chromium reported seven modules, 17 quiz questions, no JavaScript errors, and all 39 rendered images loaded. `git diff --check` passed. Page width matched viewport at 1400, 820 and 390 px. All six first-module flashcards kept 20 px text and measured zero paragraph or face overflow at each width.
- GitHub CLI is authenticated as `biology-JH`; `origin` is the requested repository; commit `20d355f5a07dbffd5130310965d8ce62001fe097` is on `origin/main`. On 2026-11-24, `https://biodiversity31.vercel.app/` returned HTTP 200 (`x-vercel-cache: HIT`); its HTML referenced `assets/study-guide/a31-diversity-cover.jpg` and included A3.1.10/A3.1.14 content markers. The referenced image also returned HTTP 200 as a 1232 × 544 JPEG. This confirms that the public alias is serving the revised site and header asset. However, Vercel API lookups in the authenticated Joyce team returned no matching project, deployment SHA or alias, and the earlier deployment hostname was not found; therefore the exact deployment SHA and Vercel control-plane `Ready` state could not be independently confirmed. The owning Vercel account/team needs to be identified for that final check.

## Implementation status

Implementation, build, local responsive checks, GitHub push and public-alias content verification are complete. The deployment control-plane check remains open because the authenticated Vercel team exposes no project/deployment record or alias mapping for this site. Do not claim an independently verified `Ready` deployment or exact Vercel deployment SHA until access to the owning Vercel scope is available.
