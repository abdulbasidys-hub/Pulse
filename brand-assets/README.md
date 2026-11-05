# PULSE brand kit

## Banner

- `pulse-banner-1500x500.png` — exactly **1500 × 500 px**, opaque navy background, project tagline and the exact desktop/mobile artwork embedded by the website and posting exports. A matching outlined SVG is included.
- `pulse-posting-banner-1500x500.png` — the posting-kit variant, also **1500 × 500 px**, with symbol-only branding and no full stops on the headline or credit. The supporting sentence retains its period because it contains commas. The product artwork is identical to the standard banner. A matching SVG is included.

## Single logo image

- **`pulse-logo-alone.png`** — **2048 × 2048 px**, the Pulse symbol alone, electric lime, genuine transparent background. No text, tagline, dashboard or frame. The matching SVG is included.

## Enhanced original logo

- `pulse-original-logo-hd.png` — **2172 × 724 px**, original futuristic wordmark and “PAYMENTS • FREEDOM • GLOBAL” line on navy. Restored with the built-in image generation tool; this is a raster interpretation of the supplied original.

## Website logo exports

These preserve the website's vector symbol and Poppins Bold wordmark, without a full stop. They are exported directly from vector paths, with no AI reconstruction or upscaling of the low-resolution source.

| File | Dimensions | Background / usage |
| --- | --- | --- |
| `pulse-wordmark-light.png` | 3000 × 1000 | Transparent; lime symbol and white type, for dark backgrounds |
| `pulse-wordmark-dark.png` | 3000 × 1000 | Transparent; navy symbol and type, for light backgrounds |
| `pulse-wordmark-on-navy.png` | 3000 × 1000 | Navy background; lime symbol and white type |
| `pulse-symbol-lime.png` | 2048 × 2048 | Transparent; standalone lime symbol |
| `pulse-symbol-navy.png` | 2048 × 2048 | Transparent; standalone navy symbol |
| `pulse-avatar-navy.png` | 2048 × 2048 | Navy square with lime symbol; profile / avatar use |

Each website export also includes a matching `.svg` master. Wordmark lettering is outlined, so recipients do not need to install Poppins. The font license is included in `Poppins-OFL.txt`.

## Production notes

The current banner is generated directly from the canonical product artwork by `scripts/export-dashboard-assets.cjs`. Its dashboard drawings are identical to `public/product/desktop-dashboard.svg` and `public/product/mobile-dashboard.svg`, not AI approximations. `public/social-preview.png` is the same banner. The original-logo restoration used the built-in image generation tool; historical prompts are recorded in [`prompts.md`](prompts.md). Sample payment data is illustrative; PULSE is a fictional concept by Nightfall.

Run `npm run check:product` to verify that the site, banner, social preview and all posting files remain consistent. Do not edit exported dashboard images individually; update the shared data or renderer and regenerate them together.

`scripts/export-brand-assets.cjs` regenerates the six website PNGs and SVG masters. It uses `sharp` and `fontkit` as optional artwork tools, not website dependencies. Install them in a separate tools directory with `npm install --prefix <tools-directory> sharp fontkit`, set the `PULSE_ASSET_TOOLS` environment variable to that absolute directory, then run `node scripts/export-brand-assets.cjs` from the repository after `npm install`.
