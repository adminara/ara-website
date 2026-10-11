# Website PT Arunika Rucifan Adikarya

Astro (static) + TypeScript + CSS native. Spesifikasi: `docs/PRD.md`.

```sh
npm install
npm run dev      # http://localhost:4321
npm run check    # validasi data src/data/site.ts
npm run build    # output: dist/
```

Konten (perusahaan, lini usaha, pendiri) ada di `src/data/site.ts`. Foto pendiri ada di `src/assets/founders/`, dirujuk lewat nama file (`photo.file`).

## Environment

| Variabel | Fungsi |
| --- | --- |
| `SITE_URL` | Domain produksi HTTPS: `https://www.arunikarucifanadikarya.com` (host utama; apex `arunikarucifanadikarya.com` redirect 308 ke sini). Mengaktifkan canonical, `og:url`, `og:image`, JSON-LD, dan sitemap. Tanpa ini build dianggap preview: `noindex`. |

Lokal: salin `.env.example` ke `.env` (gitignored). `astro.config.mjs` memuatnya otomatis; env yang sudah di-set tidak ditimpa.

Build gagal jika `VERCEL_ENV=production` dan `SITE_URL` kosong, supaya produksi tidak diam-diam `noindex`.

## Vercel

Root Directory: root repo (kosongkan), preset `Astro`, build `npm run build`, output `dist`, Node `24.x`.

Set `SITE_URL` hanya di environment **Production** (Settings > Environment Variables). `.env` tidak ikut ter-deploy. Redirect apex ke `www` sudah aktif (308) di dashboard Vercel.

## SEO

- `robots.txt` dan `sitemap.xml` dibuat saat build dari `src/pages/robots.txt.ts` dan `src/pages/sitemap.xml.ts`.
- `public/og-image.png` (1200x630) dipakai `og:image` dan `twitter:card`. Ganti file ini untuk mengubah pratinjau berbagi.
- Ikon: `favicon.svg`, `favicon.ico`, `apple-touch-icon.png` di `public/`.
- Halaman 404 `noindex`.

## Sebelum rilis

- Data pendiri di `founders` sudah disetujui untuk publikasi (juga dipakai di JSON-LD).
- Isi `url` lini usaha dengan URL HTTPS resmi (atau biarkan `null` = "Website belum tersedia").
- Set `SITE_URL=https://www.arunikarucifanadikarya.com` di Vercel Production.
- Setelah rilis: verifikasi Google Search Console, kirim sitemap, jalankan URL Inspection (PRD SEO-007).
