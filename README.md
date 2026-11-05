# PULSE landing page

A responsive React + JavaScript portfolio concept for a fictional stablecoin payment platform, designed and built from `build.md` and the supplied PULSE assets.

## Run locally

```sh
npm install
npm run dev
```

Open the Local URL printed by Vite (normally http://localhost:5173).

```sh
npm run lint
npm run build
npm run preview
```

## Structure

- `src/App.jsx`: page sections and navigation.
- `src/components/Dashboard.jsx`: illustrative product preview.
- `src/components/DemoModal.jsx`: accessible native-dialog prototype payment-link interaction.
- `src/components/Brand.jsx`, `Icon.jsx`: shared brand and interface assets.
- `src/styles.css`: brand system and responsive styles.
- `src/smartphone.css`: phone-specific layouts up to 767px, readable dashboard, touch targets, and mobile demo form.
- `src/product-preview.css`: separate mobile app and desktop dashboard previews; CSS switches at 768px without browser detection or a page reload. Both designs share the same illustrative transactions.
- `public/pulse-symbol.svg`: scalable vector recreation based on the supplied PULSE symbol.

Poppins is bundled locally. The social preview uses the current project banner built from the canonical product artwork. The original reference files are preserved.

## Scope

PULSE is fictional. All sample names, amounts, statuses, links, and payment activity are illustrative. The demo runs in memory; no backend, accounts, wallets, financial information collection, or real payment processing is included. `pulse.example` is an intentionally non-operational illustrative address.

## Brand assets

For posting, start with [`posting-kit/START-HERE.md`](posting-kit/START-HERE.md). That folder contains the current ready-to-post images, standalone logo, captions, alt text, project details, and editable assets. Run `node scripts/prepare-posting-kit.cjs` to refresh its asset copies after regenerating the product artwork.

The downloadable artwork is in [`brand-assets/`](brand-assets/README.md): an exact 1500 × 500 project banner, an enhanced original logo, transparent website wordmarks, symbols, avatars, and outlined SVG masters. The website UI and original supplied reference files are preserved.

Separate desktop/mobile dashboard posting images and transparent cutouts are in [`dashboard-assets/`](dashboard-assets/README.md), with editable SVG masters and a repeatable vector export script.

The website, banner, social preview and posting images share the exact SVG masters in `public/product/`. Demo data and CTA coordinates live in `src/data/product-demo.json`. The build runs `npm run check:product` to prevent stale or inconsistent product artwork. To change the product presentation, update the shared data/renderer and regenerate all exports with `scripts/export-dashboard-assets.cjs`; do not edit the individual images.

The standalone logo is [`brand-assets/pulse-logo-alone.png`](brand-assets/pulse-logo-alone.png), a transparent 2048 × 2048 symbol with no wording.

## Verification

ESLint, the production build, and a server-side React runtime render check pass. The local development server returns HTTP 200. Browser visual and interaction QA at 360, 430, 768, and 1440px remains unverified because the browser automation connection was unavailable. Responsive layouts for those sizes are implemented.

The production dependency audit reports no vulnerabilities. The full development audit reports six moderate findings in ESLint's dependency chain; the package manager currently offers no compatible automatic fix.
