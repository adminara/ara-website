# Website PT Arunika Rucifan Adikarya

Astro (static) + TypeScript + CSS native. Spesifikasi: `../docs/PRD.md`.

```sh
npm install
npm run dev      # http://localhost:4321
npm run check    # validasi data src/data/site.ts
npm run build    # output: dist/
```

Konten (perusahaan, lini usaha, pendiri) ada di `src/data/site.ts`.

## Environment

| Variabel | Fungsi |
| --- | --- |
| `SITE_URL` | Domain produksi HTTPS, mis. `https://domain-final.id`. Mengaktifkan canonical, `og:url`, JSON-LD, dan sitemap. Tanpa ini build dianggap preview: `noindex`. |


## Vercel

Root Directory `WEB`, preset `Astro`, build `npm run build`, output `dist`, Node `24.x`.
Set `SITE_URL` hanya di environment **Production**. Redirect domain alternatif diatur di dashboard Vercel.

## Sebelum rilis

- Isi `founders` dengan data terverifikasi.
- Isi `url` lini usaha dengan URL HTTPS resmi (atau biarkan `null` = "Website belum tersedia").
- Setujui teks draft di `src/data/site.ts`.
