/* Export the existing website logo as lossless, high-resolution PNGs.
 * Requires sharp and fontkit, resolved from PULSE_ASSET_TOOLS or this project.
 * Example: $env:PULSE_ASSET_TOOLS = 'C:/Users/HP/.codex/asset-tools'
 *          node scripts/export-brand-assets.cjs
 */
const fs = require('node:fs/promises');
const path = require('node:path');
const { createRequire } = require('node:module');
const assetRequire = process.env.PULSE_ASSET_TOOLS
  ? createRequire(path.join(process.env.PULSE_ASSET_TOOLS, 'package.json'))
  : require;
const sharp = assetRequire('sharp');
const fontkit = assetRequire('fontkit');

async function main() {
  const root = path.resolve(__dirname, '..');
  const output = path.join(root, 'brand-assets');
  await fs.mkdir(output, { recursive: true });
  const source = await fs.readFile(path.join(root, 'public/pulse-symbol.svg'), 'utf8');
  const mark = source.match(/<path\b[^>]+\/>/g).join('');
  const font = fontkit.openSync(path.join(root, 'node_modules/@fontsource/poppins/files/poppins-latin-700-normal.woff'));
  const layout = font.layout('PULSE');
  const letterSpacing = 60;
  let advance = 0;
  const glyphs = layout.glyphs.map((glyph, i) => {
    const position = layout.positions[i];
    const result = `<path transform="translate(${advance + position.xOffset} ${position.yOffset})" d="${glyph.path.toSVG()}"/>`;
    advance += position.xAdvance + letterSpacing;
    return result;
  }).join('');
  const scale = Math.min(1700 / (advance - letterSpacing), 390 / font.capHeight);
  const textTop = 500 - font.capHeight * scale / 2;
  const baseline = textTop + font.capHeight * scale;

  const svg = (width, height, content) => `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">${content}</svg>`;
  const render = async (name, contents) => {
    await fs.writeFile(path.join(output, `${name}.svg`), contents);
    await sharp(Buffer.from(contents)).png().toFile(path.join(output, `${name}.png`));
  };
  const symbol = color => mark.replaceAll('#B6FF00', color);
  for (const [name, color] of [['pulse-symbol-lime', '#B6FF00'], ['pulse-symbol-navy', '#0A0F2D']]) {
    await render(name, svg(2048, 2048, `<g transform="translate(320 320) scale(11)">${symbol(color)}</g>`));
  }
  const lockup = (markColor, textColor, background = '') => svg(3000, 1000,
    `${background ? `<rect width="3000" height="1000" fill="${background}"/>` : ''}<g transform="translate(220 218) scale(4.4)">${symbol(markColor)}</g><g fill="${textColor}" transform="translate(920 ${baseline}) scale(${scale} ${-scale})">${glyphs}</g>`);
  await render('pulse-wordmark-light', lockup('#B6FF00', '#FFFFFF'));
  await render('pulse-wordmark-dark', lockup('#0A0F2D', '#0A0F2D'));
  await render('pulse-wordmark-on-navy', lockup('#B6FF00', '#FFFFFF', '#0A0F2D'));
  await render('pulse-avatar-navy', svg(2048, 2048, `<rect width="2048" height="2048" fill="#0A0F2D"/><g transform="translate(320 320) scale(11)">${symbol('#B6FF00')}</g>`));
  console.log('Exported six PNG logos and six outlined SVG masters.');
}

main().catch(error => { console.error(error); process.exitCode = 1; });
