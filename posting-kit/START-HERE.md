# PULSE posting kit

Everything here is the current, consistent version of the project artwork. Use this folder when posting, rather than older downloads.

## Ready-to-post images

| File in `images/` | Size | Best use |
| --- | --- | --- |
| `01-pulse-banner.png` | 1500 × 500 | Project banner or wide cover |
| `02-desktop-dashboard.png` | 1920 × 1440 | Desktop product showcase |
| `03-mobile-dashboard.png` | 1080 × 1350 | Portrait mobile product showcase |
| `04-logo-alone.png` | 2048 × 2048 | Lime symbol alone, transparent; place on a dark background |
| `05-profile-avatar.png` | 2048 × 2048 | Navy square with lime symbol; ready for a profile image |

The posting banner uses the logo symbol without the PULSE wordmark. Its headline and credit have no full stops; the supporting sentence keeps its full stop because it contains commas. The dashboard artwork remains identical to the other product images.

The desktop and mobile posts have different aspect ratios. Post them separately to preserve their full composition; if combining them in a carousel, check the crop before publishing. All dashboard layouts and demo data match the website and banner.

## Copy and context

- `CAPTIONS.md`: ready-to-copy LinkedIn, short-post and Instagram captions, plus a portfolio description.
- `ALT-TEXT.md`: image descriptions for accessible posts.
- `PROJECT-DETAILS.md`: project summary, features, stack, colors, credits and links.
- `editable/`: outlined SVG masters and transparent dashboard PNGs for making your own layouts.
- `ASSET-MANIFEST.json`: identifies the source of every copied asset and records its checksum.

Suggested order: introduce the project with the banner, follow with the desktop dashboard, then show the mobile experience. Use the same product name, colors and concept wording throughout.

PULSE is a fictional portfolio concept by Nightfall. Sample payments are illustrative; the prototype does not process real payments. The hosted preview is currently private, so captions do not include a public demo link.

To refresh this folder after product artwork changes, run `node scripts/prepare-posting-kit.cjs`. It verifies the canonical artwork first and copies the latest files without redrawing the dashboards.
