# PULSE dashboard posting kit

Separate desktop and mobile dashboard artwork based on the website's product previews.

| Image | Size | Use |
| --- | --- | --- |
| `pulse-desktop-dashboard-post.png` | 1920 × 1440 | Desktop dashboard on a navy posting canvas |
| `pulse-mobile-dashboard-post.png` | 1080 × 1350 | Portrait mobile dashboard post |
| `pulse-desktop-dashboard-transparent.png` | 2400 × 1776 | Standalone desktop dashboard with transparent rounded corners |
| `pulse-mobile-dashboard-transparent.png` | 1080 × 2280 | Standalone phone with transparent outer corners |

Each PNG has a matching outlined SVG master. Text is rendered from the bundled Poppins fonts, so the SVGs do not require font installation. The font license is included as `Poppins-OFL.txt`.

These are deterministic vector exports. The website now embeds the exact same desktop and mobile artwork as these files and the 1500 × 500 banner. Each platform has one canonical design: identical layout, logo, typography, labels, amounts, statuses and transaction order everywhere. Only the surrounding posting canvas and scale differ. They are not AI-generated interface approximations.

All payments and sample people/businesses are illustrative. PULSE is a fictional concept by Nightfall; these images do not represent a live financial service.

To regenerate: install `sharp` and `fontkit` in a separate tools directory, set `PULSE_ASSET_TOOLS` to that absolute directory, and run `node scripts/export-dashboard-assets.cjs` after installing the project dependencies. This updates the website SVGs, every posting image, the banner/social preview, the standalone logo, and `consistency.json` together. Data and CTA coordinates live in `src/data/product-demo.json`; the mark and Poppins font files also come directly from this project.

Run `npm run check:product` to verify matching source/file hashes and exact reuse of both canonical SVG drawings inside every SVG composition. The build runs this check automatically and fails if artwork has become stale.
