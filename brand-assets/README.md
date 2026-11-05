# PULSE brand kit

## Banner

- `pulse-banner-1500x500.png` — exactly **1500 × 500 px**, opaque navy background, project tagline and illustrative desktop/mobile product previews.

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

The banner and original logo restoration used the built-in image generation tool. Final prompts are recorded in [`prompts.md`](prompts.md). The banner was resampled to 1500 × 500 without cropping; all headline text and both mockups remain within the canvas. Sample payment data is illustrative; PULSE is a fictional concept by Nightfall.

`scripts/export-brand-assets.cjs` regenerates the six website PNGs and SVG masters. It uses `sharp` and `fontkit` as optional artwork tools, not website dependencies. Install them in a separate tools directory with `npm install --prefix <tools-directory> sharp fontkit`, set the `PULSE_ASSET_TOOLS` environment variable to that absolute directory, then run `node scripts/export-brand-assets.cjs` from the repository after `npm install`.
