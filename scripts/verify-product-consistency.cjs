const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');

const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file));
const text = file => read(file).toString('utf8');
const digest = value => crypto.createHash('sha256').update(value).digest('hex');
const manifest = JSON.parse(text('dashboard-assets/consistency.json'));
const product = JSON.parse(text('src/data/product-demo.json'));

try {
  for (const [file, expected] of Object.entries(manifest.sourceHashes)) {
    assert.equal(digest(text(file).replace(/\r\n/g, '\n').replace(/^\uFEFF/, '')), expected,
      `${file} changed. Regenerate artwork with scripts/export-dashboard-assets.cjs.`);
  }
  for (const [file, expected] of Object.entries(manifest.fileHashes)) {
    assert.equal(digest(read(file)), expected, `${file} is stale or modified. Regenerate the product artwork.`);
  }
  for (const variant of ['desktop', 'mobile']) {
    const view = product.views[variant];
    const masterPath = `public${view.asset}`;
    const master = text(masterPath);
    const start = master.indexOf(`<g id="pulse-${variant}-canonical">`);
    assert.ok(start > 0, `Missing ${variant} artwork identifier.`);
    const body = master.slice(start, master.lastIndexOf('</svg>'));
    assert.equal(digest(body), manifest.artworkHashes[variant], `Unexpected ${variant} master.`);
    for (const file of [
      `dashboard-assets/pulse-${variant}-dashboard-transparent.svg`,
      `dashboard-assets/pulse-${variant}-dashboard-post.svg`,
      'brand-assets/pulse-banner-1500x500.svg',
      'brand-assets/pulse-posting-banner-1500x500.svg',
    ]) assert.ok(text(file).includes(body), `${file} does not embed the identical ${variant} artwork.`);
    const button = view.requestButton;
    assert.ok(button.x >= 0 && button.y >= 0 && button.x + button.width <= view.width && button.y + button.height <= view.height,
      `${variant} demo button is outside the artwork.`);
  }
  assert.equal(digest(read('public/social-preview.png')), digest(read('brand-assets/pulse-banner-1500x500.png')),
    'The social preview must be the current banner.');
  const banner = read('brand-assets/pulse-banner-1500x500.png');
  assert.equal(banner.readUInt32BE(16), 1500);
  assert.equal(banner.readUInt32BE(20), 500);
  const postingBanner = text('brand-assets/pulse-posting-banner-1500x500.svg');
  const postingBranding = postingBanner.slice(0, postingBanner.indexOf('<g id="pulse-desktop-canonical">'));
  assert.ok(!postingBranding.includes('aria-label="PULSE"'), 'Posting banner must use the symbol without the wordmark.');
  for (const label of ['Your work is global', 'Your payments should be too', 'A concept project by Nightfall']) {
    assert.ok(postingBranding.includes(`aria-label="${label}"`), `Incorrect posting banner copy: ${label}`);
    assert.ok(!postingBranding.includes(`aria-label="${label}."`), `Unexpected full stop: ${label}`);
  }
  assert.ok(postingBranding.includes('aria-label="Request, receive, and track global payments."'),
    'Keep the full stop in the supporting sentence because it contains commas.');
  const solo = read('brand-assets/pulse-logo-alone.png');
  assert.equal(solo.readUInt32BE(16), 2048);
  assert.equal(solo.readUInt32BE(20), 2048);
  console.log('Product consistency passed: site, banner, social preview and posting files share identical desktop/mobile artwork. Logo: 2048 × 2048.');
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
