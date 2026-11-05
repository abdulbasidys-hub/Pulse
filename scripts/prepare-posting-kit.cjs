/* Assemble posting assets from the verified final artwork. No image edits. */
const fs = require('node:fs/promises');
const path = require('node:path');
const crypto = require('node:crypto');
const { execFileSync } = require('node:child_process');

const root = path.resolve(__dirname, '..');
const files = {
  'brand-assets/pulse-posting-banner-1500x500.png': 'images/01-pulse-banner.png',
  'dashboard-assets/pulse-desktop-dashboard-post.png': 'images/02-desktop-dashboard.png',
  'dashboard-assets/pulse-mobile-dashboard-post.png': 'images/03-mobile-dashboard.png',
  'brand-assets/pulse-logo-alone.png': 'images/04-logo-alone.png',
  'brand-assets/pulse-avatar-navy.png': 'images/05-profile-avatar.png',
  'brand-assets/pulse-posting-banner-1500x500.svg': 'editable/pulse-banner.svg',
  'brand-assets/pulse-logo-alone.svg': 'editable/pulse-logo-alone.svg',
  'dashboard-assets/pulse-desktop-dashboard-post.svg': 'editable/pulse-desktop-post.svg',
  'dashboard-assets/pulse-mobile-dashboard-post.svg': 'editable/pulse-mobile-post.svg',
  'dashboard-assets/pulse-desktop-dashboard-transparent.png': 'editable/pulse-desktop-transparent.png',
  'dashboard-assets/pulse-mobile-dashboard-transparent.png': 'editable/pulse-mobile-transparent.png',
  'dashboard-assets/pulse-desktop-dashboard-transparent.svg': 'editable/pulse-desktop-transparent.svg',
  'dashboard-assets/pulse-mobile-dashboard-transparent.svg': 'editable/pulse-mobile-transparent.svg',
  'brand-assets/Poppins-OFL.txt': 'editable/Poppins-OFL.txt',
};

async function main() {
  execFileSync(process.execPath, [path.join(__dirname, 'verify-product-consistency.cjs')], { cwd: root, stdio: 'inherit' });
  const output = path.join(root, 'posting-kit');
  const manifest = {};
  for (const [source, destination] of Object.entries(files)) {
    const target = path.join(output, destination);
    await fs.mkdir(path.dirname(target), { recursive: true });
    const data = await fs.readFile(path.join(root, source));
    const temporary = `${target}.refresh-${process.pid}`;
    await fs.writeFile(temporary, data);
    await fs.rename(temporary, target);
    const copied = await fs.readFile(target);
    if (!data.equals(copied)) throw new Error(`Asset copy mismatch: ${destination}`);
    manifest[destination] = { source, sha256: crypto.createHash('sha256').update(data).digest('hex') };
  }
  await fs.writeFile(path.join(output, 'ASSET-MANIFEST.json'), JSON.stringify(manifest, null, 2) + '\n');
  console.log(`Posting kit ready: ${Object.keys(manifest).length} verified asset files, with captions and posting notes.`);
}

main().catch(error => { console.error(error); process.exitCode = 1; });
