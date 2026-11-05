# PULSE dashboard posting kit

Separate desktop and mobile dashboard artwork based on the website's product previews.

| Image | Size | Use |
| --- | --- | --- |
| `pulse-desktop-dashboard-post.png` | 1920 × 1440 | Desktop dashboard on a navy posting canvas |
| `pulse-mobile-dashboard-post.png` | 1080 × 1350 | Portrait mobile dashboard post |
| `pulse-desktop-dashboard-transparent.png` | 2400 × 1776 | Standalone desktop dashboard with transparent rounded corners |
| `pulse-mobile-dashboard-transparent.png` | 1080 × 2280 | Standalone phone with transparent outer corners |

Each PNG has a matching outlined SVG master. Text is rendered from the bundled Poppins fonts, so the SVGs do not require font installation. The font license is included as `Poppins-OFL.txt`.

These are deterministic vector-based artwork exports, not browser screenshots or AI-generated interface recreations. They preserve the website's desktop/mobile layout, logo, typography, palette, labels and illustrative transactions, with spacing adapted for high-resolution posting. The browser capture connection was unavailable. The website itself is unchanged.

All payments and sample people/businesses are illustrative. PULSE is a fictional concept by Nightfall; these images do not represent a live financial service.

To regenerate: install `sharp` and `fontkit` in a separate tools directory, set `PULSE_ASSET_TOOLS` to that absolute directory, and run `node scripts/export-dashboard-assets.cjs` after installing the project dependencies. Transaction rows are read from `src/components/Dashboard.jsx`; the mark and Poppins font files also come directly from this project.
