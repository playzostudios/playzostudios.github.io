// GitHub Pages serves static files only. Copy the SPA entry so that
// /privacy-policy/ is a real page (HTTP 200, no redirect) as Meta's VRC
// requires, and add a 404.html fallback for any other client-side route.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const dist = 'dist';
const html = readFileSync(join(dist, 'index.html'), 'utf8');

const policyHtml = html
  .replace(/<title>.*?<\/title>/, '<title>Privacy Policy | Playzo Games Studio</title>')
  .replace(
    '<div id="root"></div>',
    '<div id="root"><noscript><h1>Privacy Policy</h1><p>Playzo Games Studio Privacy Policy. Please enable JavaScript to view the full policy.</p></noscript></div>'
  );

mkdirSync(join(dist, 'privacy-policy'), { recursive: true });
writeFileSync(join(dist, 'privacy-policy', 'index.html'), policyHtml);
writeFileSync(join(dist, '404.html'), html);
writeFileSync(join(dist, '.nojekyll'), '');
console.log('postbuild: wrote privacy-policy/index.html, 404.html, .nojekyll');
