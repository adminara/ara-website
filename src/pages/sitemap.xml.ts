import type { APIRoute } from 'astro';

// Satu halaman = satu URL canonical. lastmod sengaja tidak diisi (PRD SEO-004).
export const GET: APIRoute = ({ site }) => {
  const url = site ? `  <url><loc>${new URL('/', site).href}</loc></url>\n` : '';
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${url}</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
