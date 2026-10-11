import { defineConfig } from 'astro/config';

// SITE_URL = domain produksi HTTPS. Tanpa SITE_URL, build dianggap preview:
// noindex, tanpa canonical/og:url/JSON-LD.
const site = process.env.SITE_URL || undefined;
if (site && new URL(site).protocol !== 'https:') {
  throw new Error(`SITE_URL harus HTTPS: ${site}`);
}

export default defineConfig({ site });
