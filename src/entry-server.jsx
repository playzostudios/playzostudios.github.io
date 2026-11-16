// Used only at build time to pre-render each page to static HTML, so crawlers
// that don't run JavaScript (Poki, Meta, Google) see the full page content.
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App.jsx';

export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}
