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
- `public/pulse-symbol.svg`: scalable vector recreation based on the supplied PULSE symbol.

Poppins is bundled locally. The supplied banner is used as the social preview. The original reference files are preserved.

## Scope

PULSE is fictional. All sample names, amounts, statuses, links, and payment activity are illustrative. The demo runs in memory; no backend, accounts, wallets, financial information collection, or real payment processing is included. `pulse.example` is an intentionally non-operational illustrative address.
