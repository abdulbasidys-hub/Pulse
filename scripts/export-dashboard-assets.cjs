/* Vector-based posting exports of the website's desktop/mobile dashboard.
 * Uses the same Poppins fonts, symbol, icon paths, palette and transaction data.
 * Requires sharp/fontkit via PULSE_ASSET_TOOLS, as in export-brand-assets.cjs.
 */
const fs = require('node:fs/promises');
const path = require('node:path');
const { createRequire } = require('node:module');
const assetRequire = process.env.PULSE_ASSET_TOOLS
  ? createRequire(path.join(process.env.PULSE_ASSET_TOOLS, 'package.json')) : require;
const sharp = assetRequire('sharp');
const fontkit = assetRequire('fontkit');

const C = { navy: '#0A0F2D', lime: '#B6FF00', blue: '#3B5BFF', ink: '#111936', muted: '#727D96', line: '#E6EAF2', pale: '#F8F9FD' };
const fonts = {};
let symbol;
let rows;
const esc = value => String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
const rect = (x, y, w, h, r, fill, stroke = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}"${stroke ? ` stroke="${stroke}"` : ''}/>`;
const line = (x1, y1, x2, y2, color = C.line) => `<path d="M${x1} ${y1}H${x2}" stroke="${color}"${y1 !== y2 ? ` transform="rotate(${Math.atan2(y2-y1,x2-x1)*180/Math.PI} ${x1} ${y1})"` : ''}/>`;
const group = (x, y, scale, contents) => `<g transform="translate(${x} ${y}) scale(${scale})">${contents}</g>`;

function text(value, x, y, size = 14, fill = C.navy, weight = 400, align = 'left') {
  const font = fonts[weight];
  const run = font.layout(String(value));
  const scale = size / font.unitsPerEm;
  const width = run.positions.reduce((sum, p) => sum + p.xAdvance, 0) * scale;
  let offset = 0;
  const glyphs = run.glyphs.map((glyph, i) => {
    const position = run.positions[i];
    const result = `<path transform="translate(${offset + position.xOffset} ${position.yOffset})" d="${glyph.path.toSVG()}"/>`;
    offset += position.xAdvance;
    return result;
  }).join('');
  const left = align === 'right' ? x - width : align === 'center' ? x - width / 2 : x;
  return `<g aria-label="${esc(value)}" fill="${fill}" transform="translate(${left} ${y}) scale(${scale} ${-scale})">${glyphs}</g>`;
}

const textWidth = (value, size, weight = 400) => fonts[weight].layout(value).positions.reduce((sum, p) => sum + p.xAdvance, 0) * size / fonts[weight].unitsPerEm;

const iconPaths = {
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  activity: '<path d="M2 12h5l3-8 4 16 3-8h5"/>',
  link: '<path d="m10 13 4-4M8 16l-1 1a4 4 0 0 1-6-6l5-5a4 4 0 0 1 6 0m0 2 1-1a4 4 0 0 1 6 6l-5 5a4 4 0 0 1-6 0" transform="translate(2 1)"/>',
  wallet: '<path d="M20 8V5a2 2 0 0 0-2-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14V8H6a2 2 0 0 1 0-4M20 12h-6v5h6M16 14.5h.01"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  arrow: '<path d="M4 12h16M14 6l6 6-6 6"/>',
  bell: '<path d="M6 8a6 6 0 0 1 12 0v7l2 3H4l2-3ZM10 21h4"/>',
  search: '<circle cx="10" cy="10" r="6"/><path d="m15 15 5 5"/>',
};
const icon = (name, x, y, size = 20, color = C.muted) => group(x, y, size / 24, `<g fill="none" stroke="${color}" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${iconPaths[name]}</g>`);
const mark = (x, y, size = 32) => group(x, y, size / 128, symbol);
const logo = (x, y, size = 24, color = C.navy) => mark(x, y - size + 1, size + 2) + text('PULSE', x + size + 10, y, size, color, 700);
const avatar = (initials, x, y, size = 36, color = 'lavender') => {
  const colors = { lavender: ['#EAE7FC', '#7960B0'], peach: ['#FFEade', '#BC7D53'], mint: ['#DCF2E9', '#468E79'] };
  const [bg, fg] = colors[color];
  return rect(x, y, size, size, size * .25, bg) + text(initials, x + size/2, y + size*.64, size*.28, fg, 500, 'center');
};

function desktop() {
  let svg = rect(0, 0, 1000, 740, 18, C.pale);
  svg += '<defs><clipPath id="desktop-clip"><rect width="1000" height="740" rx="18"/></clipPath></defs><g clip-path="url(#desktop-clip)">';
  svg += rect(0, 0, 205, 740, 0, '#111737');
  svg += logo(26, 56, 24, '#FFFFFF');
  const nav = [['grid', 'Overview'], ['activity', 'Transactions'], ['link', 'Payment links']];
  nav.forEach(([name, label], i) => {
    const y = 117 + i * 58;
    if (!i) svg += rect(17, y, 171, 45, 7, '#1B2737', '#33412E');
    svg += icon(name, 31, y + 13, 19, !i ? C.lime : '#8F98B5') + text(label, 62, y + 29, 13, !i ? C.lime : '#8F98B5', 400);
  });
  svg += avatar('JD', 25, 672, 32) + text('Jamie Davis', 68, 687, 11, '#CED1DF', 500) + text('Personal workspace', 68, 703, 8, '#939DB6');
  svg += line(205, 70, 1000, 70) + text('Workspace', 240, 41, 11, '#939BAD') + text('/', 327, 41, 11, '#B8BBCA') + text('Overview', 348, 41, 11, '#50566D', 500);
  svg += icon('search', 870, 25, 18) + icon('bell', 912, 25, 18) + avatar('JD', 951, 20, 28);
  svg += text('Your money, in motion.', 243, 121, 24, C.navy, 600) + text("Here's your payment activity at a glance.", 243, 145, 11, C.muted);
  svg += rect(912, 103, 46, 21, 4, '#EAEefa') + text('DEMO', 935, 117, 8, '#6374A4', 500, 'center');
  svg += rect(243, 172, 715, 145, 12, C.ink) + text('Total received', 270, 203, 12, '#A0A9C3') + icon('wallet', 380, 189, 17, '#A0A9C3');
  svg += text('8,450', 270, 262, 48, '#FFFFFF', 500) + text('.00', 270 + textWidth('8,450', 48, 500), 262, 36, '#8A94AD', 500) + text('USDC', 493, 258, 13, '#B3BBCF');
  svg += '<circle cx="274" cy="291" r="3" fill="#B6FF00"/>' + text('All-time demo activity', 285, 295, 9, '#A1A9C1');
  svg += `<g opacity=".12">${mark(820, 190, 110)}</g>`;
  svg += rect(243, 335, 348, 104, 9, '#FFFFFF', C.line) + rect(610, 335, 348, 104, 9, '#FFFFFF', C.line);
  svg += text('Incoming payments', 263, 361, 11, C.muted) + text('850.00', 263, 395, 26, C.navy, 500) + text('USDC', 366, 393, 10, C.muted);
  svg += '<circle cx="266" cy="419" r="3" fill="#DEBA70"/>' + text('1 payment pending', 277, 423, 9, '#AA935E');
  svg += text('Payment links', 630, 361, 11, C.muted) + text('03', 630, 395, 26, C.navy, 500) + text('active links', 677, 393, 10, C.muted);
  svg += icon('link', 630, 412, 12, '#7386CE') + text('Ready to share', 648, 423, 9, '#7386CE');
  svg += text('Recent activity', 243, 476, 14, C.navy, 600) + text('Illustrative data', 958, 476, 9, C.muted, 400, 'right');
  rows.forEach((t, i) => {
    const y = 496 + i * 57;
    svg += avatar(t.initials, 243, y + 2, 34, t.color) + text(t.name, 293, y + 16, 12, C.navy, 500) + text(t.note, 293, y + 33, 9, C.muted);
    svg += text(t.amount, 909, y + 15, 12, C.navy, 500, 'right') + text('USDC', 958, y + 15, 9, C.muted, 400, 'right');
    svg += text(t.status, 958, y + 34, 9, t.status === 'Received' ? '#37866B' : '#9A762D', 400, 'right');
    if (t.status === 'Received') svg += icon('check', 958 - textWidth(t.status, 9) - 13, y + 26, 10, '#37866B');
    svg += line(243, y + 48, 958, y + 48);
  });
  svg += rect(763, 687, 195, 34, 6, C.lime) + icon('plus', 780, 696, 15, C.navy) + text('Create payment link', 806, 709, 11, C.navy, 500);
  return svg + '</g>';
}

function mobile() {
  let svg = rect(1, 1, 358, 758, 36, '#252E4C', '#65708B');
  svg += '<defs><clipPath id="mobile-clip"><rect x="8" y="8" width="344" height="744" rx="29"/></clipPath></defs><g clip-path="url(#mobile-clip)">';
  svg += rect(8, 8, 344, 744, 28, C.pale) + text('9:41', 30, 32, 10, C.navy, 600) + rect(141, 17, 78, 20, 12, '#0B1028');
  [5, 8, 11].forEach((h, i) => { svg += rect(292 + i * 5, 33 - h, 3, h, 1, C.navy); });
  svg += rect(315, 23, 17, 9, 2, 'none', C.navy) + rect(317, 25, 11, 5, 1, C.navy);
  svg += logo(26, 77, 17) + rect(138, 62, 40, 18, 4, '#E9EDF9') + text('DEMO', 158, 74, 7, '#5365A0', 500, 'center') + avatar('JD', 305, 55, 29);
  svg += text('Welcome back, Jamie', 26, 116, 10, '#70788F') + text('Your work. In motion.', 26, 145, 21, C.navy, 600);
  svg += rect(26, 166, 308, 134, 15, C.ink) + text('Total received', 44, 195, 10, '#ADB7CD');
  svg += text('8,450', 44, 247, 35, '#FFFFFF', 500) + text('.00', 44 + textWidth('8,450', 35, 500), 247, 27, '#929EB8', 500);
  svg += rect(44, 268, 40, 18, 5, '#1C2A32', '#3B5438') + text('USDC', 64, 280, 8, C.lime, 400, 'center') + text('All-time demo activity', 94, 280, 8, '#A4B0CA');
  svg += `<g opacity=".09">${mark(240, 185, 100)}</g>`;
  svg += rect(26, 312, 308, 46, 9, C.lime) + icon('plus', 42, 326, 18, C.navy) + text('Create payment link', 70, 340, 11, C.navy, 500) + icon('arrow', 302, 327, 17, C.navy);
  svg += rect(26, 375, 149, 94, 10, '#FFFFFF', '#E4E8F1') + rect(185, 375, 149, 94, 10, '#FFFFFF', '#E4E8F1');
  svg += text('Incoming', 36, 397, 9, '#697084') + text('850.00', 36, 428, 18, C.navy, 500) + text('USDC', 111, 427, 7, '#7C859C');
  svg += '<circle cx="38" cy="451" r="2" fill="#CFAA56"/>' + text('1 pending payment', 45, 454, 7, '#956D25');
  svg += text('Payment links', 195, 397, 9, '#697084') + text('03', 195, 428, 18, C.navy, 500) + text('active', 229, 427, 7, '#7C859C');
  svg += icon('link', 195, 444, 11, '#526CB7') + text('Ready to share', 211, 454, 7, '#526CB7');
  svg += text('Recent activity', 26, 500, 12, C.navy, 500) + text('Demo data', 334, 500, 8, '#727D96', 400, 'right');
  rows.forEach((t, i) => {
    const y = 516 + i * 55;
    svg += avatar(t.initials, 26, y, 30, t.color) + text(t.name, 65, y + 11, 10, C.navy, 500) + text(t.note, 65, y + 27, 8, '#697084');
    svg += text(t.amount, 334, y + 11, 11, C.navy, 500, 'right') + text(t.status, 334, y + 27, 8, t.status === 'Received' ? '#37866B' : '#9A762D', 400, 'right');
    if (t.status === 'Received') svg += icon('check', 334 - textWidth(t.status, 8) - 12, y + 19, 10, '#37866B');
    if (i < 2) svg += line(26, y + 43, 334, y + 43);
  });
  svg += rect(8, 687, 344, 65, 0, '#FFFFFF') + line(8, 687, 352, 687);
  [['grid', 'Home'], ['activity', 'Activity'], ['link', 'Links'], ['wallet', 'Payments']].forEach(([name, label], i) => {
    const x = 52 + i * 84;
    const color = !i ? C.blue : '#8B93A7';
    svg += icon(name, x - 9.5, 700, 19, color) + text(label, x, 732, 7, color, 400, 'center');
  });
  svg += rect(136, 744, 88, 4, 2, '#171E37');
  return svg + '</g>';
}

const svgDocument = (w, h, body, label) => `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(label)}"><title>${esc(label)}</title>${body}</svg>`;

async function main() {
  const root = path.resolve(__dirname, '..');
  const output = path.join(root, 'dashboard-assets');
  await fs.mkdir(output, { recursive: true });
  for (const weight of [400, 500, 600, 700]) fonts[weight] = fontkit.openSync(path.join(root, `node_modules/@fontsource/poppins/files/poppins-latin-${weight}-normal.woff`));
  symbol = (await fs.readFile(path.join(root, 'public/pulse-symbol.svg'), 'utf8')).match(/<path\b[^>]+\/>/g).join('');
  const source = await fs.readFile(path.join(root, 'src/components/Dashboard.jsx'), 'utf8');
  rows = [...source.matchAll(/initials: '([^']+)', name: '([^']+)', note: '([^']+)', amount: '([^']+)', status: '([^']+)', color: '([^']+)'/g)].map(m => ({ initials: m[1], name: m[2], note: m[3], amount: m[4], status: m[5], color: m[6] }));
  if (rows.length !== 3) throw new Error('The dashboard transaction data changed; update the exporter.');
  const desktopArt = desktop();
  const mobileArt = mobile();
  const save = async (name, w, h, body, label) => {
    const content = svgDocument(w, h, body, label);
    await fs.writeFile(path.join(output, `${name}.svg`), content);
    await sharp(Buffer.from(content)).png().toFile(path.join(output, `${name}.png`));
  };
  await save('pulse-desktop-dashboard-transparent', 2400, 1776, group(0, 0, 2.4, desktopArt), 'PULSE desktop dashboard concept — illustrative demo data');
  await save('pulse-mobile-dashboard-transparent', 1080, 2280, group(0, 0, 3, mobileArt), 'PULSE mobile dashboard concept — illustrative demo data');
  const desktopPost = rect(0, 0, 1920, 1440, 0, C.navy) + logo(100, 117, 35, '#FFFFFF') + text('DESKTOP EXPERIENCE', 1820, 111, 17, '#A1ACC4', 500, 'right') + group(210, 200, 1.5, desktopArt) + text('A concept project by Nightfall · Illustrative demo data', 960, 1373, 17, '#9CA6C0', 400, 'center');
  await save('pulse-desktop-dashboard-post', 1920, 1440, desktopPost, 'PULSE desktop dashboard — concept project by Nightfall');
  const mobilePost = rect(0, 0, 1080, 1350, 0, C.navy) + logo(65, 95, 28, '#FFFFFF') + text('MOBILE EXPERIENCE', 1015, 90, 13, '#A1ACC4', 500, 'right') + group(288, 145, 1.4, mobileArt) + text('A concept project by Nightfall', 540, 1275, 15, '#9CA6C0', 400, 'center') + text('Illustrative demo data', 540, 1302, 12, '#9CA6C0', 400, 'center');
  await save('pulse-mobile-dashboard-post', 1080, 1350, mobilePost, 'PULSE mobile dashboard — concept project by Nightfall');
  console.log('Exported four dashboard PNGs and four outlined SVG masters.');
}

main().catch(error => { console.error(error); process.exitCode = 1; });
