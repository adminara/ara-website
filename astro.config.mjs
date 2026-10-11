import { defineConfig } from 'astro/config';

// SITE_URL = domain produksi HTTPS. Tanpa SITE_URL, build dianggap preview:
// noindex, tanpa canonical/og:url/JSON-LD.
// .env lokal (gitignored) dimuat jika ada; env yang sudah di-set (Vercel) tidak ditimpa.
try {
  process.loadEnvFile('.env');
} catch {}
const site = process.env.SITE_URL || undefined;
if (site && new URL(site).protocol !== 'https:') {
  throw new Error(`SITE_URL harus HTTPS: ${site}`);
}

// Produksi Vercel tanpa SITE_URL = situs diam-diam noindex. Gagalkan build.
if (!site && process.env.VERCEL_ENV === 'production') {
  throw new Error('SITE_URL wajib di environment Production');
}

export default defineConfig({ site });
