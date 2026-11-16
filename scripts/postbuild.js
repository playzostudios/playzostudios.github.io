// GitHub Pages serves static files only. Pre-render each route to real HTML
// (so the content is readable without JavaScript, as Poki and Meta require)
// and write it to <route>/index.html so every URL returns HTTP 200 directly.
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const dist = 'dist';
const ssrDir = 'dist-ssr';
const template = readFileSync(join(dist, 'index.html'), 'utf8');
const { render } = await import(pathToFileURL(resolve(ssrDir, 'entry-server.js')).href);

const pages = [
  { url: '/', out: 'index.html', title: 'Playzo Games Studio' },
  { url: '/home', out: 'home/index.html', title: 'Playzo Games Studio' },
  { url: '/privacy-policy', out: 'privacy-policy/index.html', title: 'Privacy Policy | Playzo Games Studio' },
  { url: '/', out: '404.html', title: 'Playzo Games Studio' },
];

for (const { url, out, title } of pages) {
  const html = template
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace('<div id="root"></div>', `<div id="root">${render(url)}</div>`);
  const file = join(dist, out);
  mkdirSync(join(file, '..'), { recursive: true });
  writeFileSync(file, html);
}

writeFileSync(join(dist, '.nojekyll'), '');
rmSync(ssrDir, { recursive: true, force: true });
console.log(`postbuild: pre-rendered ${pages.map((p) => p.out).join(', ')}`);
