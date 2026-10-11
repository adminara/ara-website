# PRD — Company Profile Perusahaan Payung

Status: Draft untuk persetujuan konten  
Diperbarui: 6 Oktober 2026  
Nama kerja: PT Arunika Rucifan Adikarya

## 1. Ringkasan

Website satu halaman berbahasa Indonesia untuk memperkenalkan perusahaan payung, menunjukkan lini usaha yang dinaungi, dan menyediakan tautan menuju website resmi masing-masing lini. Fungsi utama adalah informasi perusahaan, bukan perolehan lead atau penjualan layanan.

Lini aktif berdasarkan informasi pengguna:

- **Era Baru Akademi:** jasa bimbingan belajar dan pelatihan.
- **Sahiva Halal Indonesia:** konsultasi halal, layanan terkait sertifikasi halal, pendampingan halal, dan pelatihan konsep halal.

Contoh lini masa depan tetap tersedia sebagai data dummy berlabel jelas. Tidak ada CMS, admin, formulir, atau backend. Dokumen ini hanya mendefinisikan kebutuhan, bukan implementasi.

### Perubahan dari draft sebelumnya

- Hapus CTA konsultasi, pesan WhatsApp per lini, fallback nomor, serta kewajiban nomor kontak sebelum rilis.
- Hapus bagian Kontak tersendiri dan tombol promosi pada hero. Kontak perusahaan opsional, cukup di footer.
- Ganti alur konversi dengan direktori lini usaha dan tautan website resmi.
- Ringkas konten layanan; detail program, proses sertifikasi, dan konsultasi menjadi tanggung jawab website masing-masing lini.
- Hapus target skor Lighthouse dan pengujian berulang sebagai syarat rilis; pertahankan pemeriksaan performa, aksesibilitas, serta fungsi dasar.
- Tidak mewajibkan skema data kompleks, framework, atau pipeline build khusus untuk halaman sederhana.

## 2. Masalah dan konteks

Pengunjung membutuhkan jawaban singkat: perusahaan ini siapa, menaungi usaha apa saja, dan di mana informasi tiap usaha dapat ditemukan. Situs perusahaan payung tidak perlu menduplikasi situs masing-masing lini atau mendorong konsultasi.

Nama PT Arunika Rucifan Adikarya berasal dari nama folder dan dokumen proyek, belum diverifikasi melalui isi dokumen legal. Direktori proyek juga memuat berkas internal dan akses akun; berkas tersebut bukan materi publik.

## 3. Target pengguna

- Calon mitra dan pihak yang memeriksa identitas serta cakupan usaha perusahaan.
- Pengunjung yang mencari hubungan perusahaan payung dengan Era Baru Akademi atau Sahiva Halal Indonesia.
- Pengunjung yang ingin melanjutkan pencarian informasi ke website resmi lini terkait.

Segmentasi ini merupakan asumsi produk, bukan hasil riset pengguna.

## 4. Tujuan dan metrik keberhasilan

- Identitas perusahaan dan hubungan dengan dua lini usaha jelas dalam satu halaman.
- Seluruh acceptance criteria SEO pada bagian 9 lolos sebelum rilis; status pengindeksan dipantau setelah rilis. Kelayakan indeks tidak menjamin indeks atau peringkat mesin pencari.
- Kedua lini aktif memiliki nama, bidang usaha, ringkasan, dan tautan resmi jika tersedia.
- Seluruh tautan website yang ditampilkan sudah disetujui pemilik dan diuji menuju lini yang benar.
- Tidak ada tautan palsu, fakta rekaan, atau dummy yang tampak sebagai usaha aktif.
- Konten dan tautan dapat diakses dengan keyboard, tanpa JavaScript, serta tanpa overflow horizontal pada lebar 320, 375, 768, dan 1440 CSS px.

Keberhasilan dinilai dari kelengkapan dan ketepatan informasi, bukan jumlah klik, lead, atau percakapan WhatsApp. Analytics tidak diperlukan pada versi awal. Belum ada hasil pengukuran atau riset pengguna.

## 5. Scope dan non-goals

### Termasuk

- Satu halaman: pembuka, Tentang Perusahaan, Lini Usaha, Profil Pendiri, contoh Pengembangan, dan footer.
- Navigasi anchor sederhana ke Tentang, Lini Usaha, dan Pendiri; tidak perlu menu kompleks.
- Ringkasan dua lini aktif beserta tautan website resmi.
- Tiga contoh lini masa depan dengan label dummy.
- Layout responsif, aksesibilitas, SEO teknis, dan konten yang mudah diperbarui pengembang.

### Tidak termasuk

- CTA kuat, tombol WhatsApp mengambang, popup promosi, atau alur konsultasi.
- CMS, admin, login, database, formulir, pembayaran, dan pendaftaran kelas.
- Halaman detail lini, katalog layanan lengkap, blog, chatbot, analytics, dan integrasi CRM.
- Testimoni, statistik, logo mitra, visi-misi, atau sejarah perusahaan tanpa materi resmi. Bagian tersebut tidak wajib ditambahkan sekadar mengisi halaman.
- Klaim “anak perusahaan” atau “holding” dalam arti hukum sebelum struktur legal dikonfirmasi; gunakan “perusahaan payung” dan “lini usaha”.

## 6. Struktur halaman dan konten

### Pembuka

Nama perusahaan menjadi H1, diikuti pengantar singkat. Usulan narasi:

> PT Arunika Rucifan Adikarya menaungi lini usaha di bidang pendidikan dan layanan terkait halal.

Narasi perlu persetujuan pemilik. Tidak memerlukan slogan besar, tombol konsultasi, atau hero setinggi layar; awal daftar lini usaha sebaiknya mudah dijangkau tanpa pembuka panjang.

### Tentang Perusahaan

Satu hingga dua paragraf mengenai identitas dan hubungan perusahaan dengan lini usahanya. Bagian ini menjelaskan perusahaan payung, bukan mengulang daftar layanan. Jangan mengarang tahun berdiri, skala usaha, legalitas, alamat, atau pencapaian.

### Lini Usaha

Bagian utama halaman. Setiap lini memuat nama/logo resmi jika tersedia, bidang usaha, ringkasan singkat, dan tautan teks website. Tidak perlu tombol penjualan atau daftar layanan terperinci.

| Lini | Bidang | Usulan ringkasan | Website |
| --- | --- | --- | --- |
| Era Baru Akademi | Pendidikan dan pelatihan | Penyedia jasa bimbingan belajar dan pelatihan untuk mendukung kebutuhan belajar serta pengembangan kemampuan. | URL resmi belum diberikan |
| Sahiva Halal Indonesia | Konsultasi dan pendampingan halal | Layanan konsultasi halal, pendampingan proses sertifikasi halal, serta pelatihan terkait konsep halal. | URL resmi belum diberikan |

Gunakan tautan seperti **“Website Era Baru Akademi”** dan **“Website Sahiva Halal Indonesia”**, bukan “Daftar Sekarang” atau “Konsultasi Gratis”. Tautan bersifat informatif, dengan penekanan visual lebih rendah daripada nama lini.

Untuk layanan halal, gunakan frasa “pendampingan proses sertifikasi halal” sampai kewenangan layanan dikonfirmasi. Jangan mengklaim penerbitan sertifikat, jaminan kelulusan, akreditasi, atau afiliasi lembaga tanpa bukti.

### Profil Pendiri

Bagian ringkas setelah Lini Usaha agar informasi bisnis tetap menjadi fokus utama. Memuat:

- Nama lengkap dan peran sebagai pendiri; jabatan operasional hanya jika terkonfirmasi. Pendiri tidak otomatis disebut direktur atau CEO.
- Bio singkat, sekitar 2–3 kalimat, mengenai latar belakang relevan dan peran dalam pendirian perusahaan.
- Foto opsional yang disetujui untuk publikasi; tanpa foto, gunakan layout berbasis teks, bukan foto stok sebagai identitas pendiri.

Tidak perlu halaman bio terpisah, riwayat hidup panjang, kontak pribadi, atau CTA. Jika ada lebih dari satu pendiri, gunakan pola profil yang sama untuk masing-masing; jumlah dan identitas belum diberikan. Nama, bio, gelar, serta pengalaman harus terverifikasi dan disetujui untuk publikasi. Data dummy hanya untuk lini pengembangan, bukan profil pendiri.

### Contoh Pengembangan — dummy

Bagian ringkas setelah Profil Pendiri, tanpa tautan website atau CTA. Teks pembuka:

> Nama dan bidang berikut hanya contoh ilustratif, bukan bisnis aktif atau pengumuman peluncuran.

| Nama contoh | Bidang ilustratif | Label pada setiap entri |
| --- | --- | --- |
| Arunika Digital Kreasi | Layanan digital | Dummy — Belum Beroperasi |
| Arunika Niaga Nusantara | Perdagangan dan distribusi | Dummy — Belum Beroperasi |
| Arunika Mitra Usaha | Pendampingan usaha | Dummy — Belum Beroperasi |

Nama contoh bukan klaim merek terdaftar atau rencana bisnis resmi. Dummy tersedia di preview; penampilannya pada situs publik membutuhkan persetujuan pemilik. Jika tidak disetujui, hilangkan seluruh bagian dari produksi. Tidak perlu membuat URL contoh.

### Footer

Nama perusahaan dan tahun. Alamat, email, atau WhatsApp umum boleh ditambahkan sebagai informasi sekunder hanya jika tersedia dan disetujui; ketiadaannya tidak menghalangi rilis. Tidak perlu bagian Kontak tersendiri.

### Arah visual

Profesional, tenang, dan ringkas. Identitas perusahaan payung dominan; nama serta identitas masing-masing lini tetap terbaca jelas. Gunakan ruang kosong dan tipografi sebagai pembeda, bukan banyak tombol atau efek. Warna mengikuti aset merek yang disetujui. Logo belum tersedia: gunakan nama berbasis teks. Tidak membutuhkan carousel, video autoplay, atau animasi dekoratif.

## 7. User journey

1. Pengunjung membaca nama dan pengantar perusahaan.
2. Pengunjung memahami hubungan perusahaan dengan lini usaha melalui profil singkat.
3. Pengunjung melihat Era Baru Akademi dan Sahiva Halal Indonesia beserta bidangnya.
4. Jika ingin informasi lebih lanjut, pengunjung membuka tautan website resmi lini terkait.

Pengunjung juga dapat membaca Profil Pendiri untuk mengenali sosok di balik perusahaan. Membaca profil tanpa mengeklik apa pun tetap merupakan penggunaan yang berhasil.

## 8. Kebutuhan fungsional dan acceptance criteria

ID disusun ulang untuk scope revisi ini; menggantikan daftar FR draft sebelumnya.

| ID | Kebutuhan | Acceptance criteria |
| --- | --- | --- |
| FR-001 | Identitas perusahaan | Nama terkonfirmasi tampil pada header/pembuka dan footer; satu H1; profil menjelaskan hubungan dengan lini usaha tanpa fakta rekaan. |
| FR-002 | Navigasi satu halaman | Anchor menuju bagian yang benar dan tidak tertutup header; navigasi dapat digunakan dengan keyboard serta pada layar kecil. |
| FR-003 | Informasi lini aktif | Kedua lini tampil dengan nama, bidang, dan ringkasan yang disetujui; tidak ada CTA konsultasi atau katalog layanan terperinci. |
| FR-004 | Tautan website lini | URL yang ditampilkan merupakan HTTPS resmi, telah dikonfirmasi pemilik dan diuji manual; teks tautan menyebut nama lini. Default membuka tab yang sama. Jika tab baru dipilih, perilaku diinformasikan dan `rel="noopener noreferrer"` digunakan. |
| FR-005 | Website belum tersedia | Jika URL kosong, tidak valid, atau belum diverifikasi, profil lini tetap tampil dengan teks “Website belum tersedia”; tidak ada tautan `#`, domain tebakan, atau pengalihan ke WhatsApp. |
| FR-006 | Data dummy | Tiga contoh tersedia di preview, terpisah dari lini aktif, masing-masing berlabel “Dummy — Belum Beroperasi”, tanpa tautan website; publikasi hanya setelah persetujuan pemilik. |
| FR-007 | Penambahan lini | Pengembang dapat menambah entri mengikuti pola yang sama tanpa mengubah struktur halaman; layout menyesuaikan jumlah lini. Tidak membutuhkan CMS, filter, atau pencarian. |
| FR-008 | Metadata dan aset | HTML awal memuat konten utama, `lang="id"`, title, dan meta description. Nama serta ringkasan tetap terbaca ketika gambar gagal; tidak ada URL metadata placeholder. |
| FR-009 | Profil pendiri | Bagian Pendiri memuat nama, peran pendiri, dan bio singkat yang terverifikasi serta disetujui untuk publikasi; foto opsional. Navigasi Pendiri menuju bagian yang benar. Jika foto tidak tersedia atau gagal dimuat, nama dan bio tetap terbaca. Tidak ada identitas rekaan, jabatan asumsi, atau kontak pribadi tanpa persetujuan. |

## 9. Kebutuhan nonfungsional

### Aksesibilitas dan responsivitas

- HTML semantik, heading terurut, skip link, fokus terlihat, dan tanpa keyboard trap.
- Kontras minimal 4,5:1 untuk teks normal, 3:1 untuk teks besar serta komponen antarmuka yang relevan.
- Tautan utama mudah disentuh; target area interaksi minimal 44 × 44 CSS px.
- Teks tidak terpotong pada zoom 200%; layout reflow pada lebar 320 CSS px.
- Status dummy dibedakan lewat teks, bukan warna saja. Gambar informatif memiliki alt yang tepat; dekorasi memakai alt kosong.
- Konten dan tautan tetap berfungsi tanpa JavaScript. Hormati `prefers-reduced-motion` jika ada animasi.

### Teknis dan performa

- Stack disepakati: **Astro + TypeScript + CSS native**, output statis, hosting **Vercel**. Konten dikelola melalui file data lokal dan komponen Astro; tidak memerlukan CMS atau backend.
- Astro menghasilkan HTML saat build sehingga konten tersedia tanpa JavaScript browser. TypeScript membantu konsistensi data lini usaha; CSS native cukup untuk layout responsif. Node.js diperlukan saat build, bukan sebagai server aplikasi produksi.
- Tidak menggunakan Next.js, React, database, Tailwind, atau library animasi untuk scope awal. Adapter `@astrojs/vercel` tidak diperlukan untuk output statis; pertimbangkan ulang hanya jika kelak ada kebutuhan rendering on-demand.
- Optimalkan ukuran gambar dan tetapkan dimensinya agar layout tidak bergeser; lazy loading hanya untuk gambar di bawah fold.
- Periksa tampilan desktop dan mobile pada browser modern; catat lingkungan yang diuji. Lighthouse boleh digunakan sebagai diagnosis, bukan target skor wajib.
- SEO teknis wajib memenuhi persyaratan berikut; tidak membutuhkan plugin berbayar, blog, atau halaman tambahan.

### Konfigurasi deployment Vercel

| Pengaturan | Keputusan |
| --- | --- |
| Framework Preset | `Astro` |
| Build Command | `npm run build`; script `build` menjalankan `astro build` |
| Output Directory | `dist` |
| Output Astro | `static` — default Astro |
| Node.js | Versi LTS yang didukung versi Astro terpilih dan Vercel; tetapkan saat implementasi |
| Domain | Satu domain produksi HTTPS; nilai `site` Astro memakai URL domain tersebut |

- Canonical, sitemap, Open Graph, dan ID structured data memakai domain produksi, bukan URL preview `*.vercel.app`. Metadata serta JSON-LD dikelola di Astro tanpa plugin SEO berbayar.
- Konfigurasikan redirect permanen domain alternatif ke domain utama. Sediakan halaman 404 statis dan verifikasi status HTTP 404; jangan rewrite semua URL ke `/`.
- Lindungi preview internal memakai kontrol akses yang tersedia pada paket Vercel terpilih; `noindex` hanya lapisan tambahan. Periksa opsi perlindungan sebelum mengunggah materi nonpublik.
- Periksa ketentuan dan harga Vercel terbaru sebelum rilis; gunakan paket yang mengizinkan penggunaan komersial. Jangan mengasumsikan paket Hobby sesuai untuk website perusahaan.
- Repositori atau source yang dikirim ke Vercel hanya memuat kebutuhan website. Jangan sertakan dokumen internal, kredensial, atau kode cadangan. Pemilihan output `dist` tidak mencegah kebocoran berkas yang telanjur masuk repositori atau konteks build.
- Acceptance deployment: build produksi berhasil, `dist` hanya berisi aset publik, URL utama merespons 200, URL tidak dikenal merespons 404, dan redirect domain tidak membentuk loop. Konfigurasi SEO tetap mengikuti SEO-001–SEO-007; pilihan hosting bukan jaminan peringkat.

### SEO teknis dan acceptance criteria

Fokus pencarian: identitas perusahaan payung, nama pendiri yang disetujui untuk publikasi, dan hubungan dengan lini usaha. Pencarian layanan terperinci diarahkan ke website masing-masing lini, bukan diduplikasi di situs perusahaan payung. Halaman satu halaman memiliki satu URL yang dapat diindeks; anchor bukan halaman SEO terpisah.

| ID | Kebutuhan | Acceptance criteria |
| --- | --- | --- |
| SEO-001 | HTML dapat dirayapi | Respons awal URL utama berstatus HTTP 200 dan memuat profil, lini usaha, profil pendiri yang disetujui, serta tautan `<a href>` tanpa menunggu JavaScript. Gunakan HTML statis atau prerender; SSR tidak wajib. |
| SEO-002 | Metadata dan struktur konten | Produksi memiliki title deskriptif yang memuat nama perusahaan, meta description sesuai isi, `lang="id"`, dan meta viewport. Satu H1 serta H2/H3 mengikuti hierarki konten. Tidak ada keyword stuffing, teks tersembunyi untuk mesin pencari, atau meta keywords. |
| SEO-003 | URL utama dan canonical | Satu canonical absolut HTTPS menunjuk URL produksi yang mengembalikan 200. Variasi HTTP dan host alternatif yang dikonfigurasi diarahkan permanen dengan 301/308 ke URL utama; tidak ada loop. URL tidak dikenal mengembalikan 404, bukan halaman utama dengan status 200. |
| SEO-004 | Robots dan sitemap | `robots.txt` produksi dapat diakses, tidak memblokir halaman utama atau aset render, serta menunjuk `sitemap.xml`. Sitemap valid memuat hanya URL canonical yang dapat diindeks, tanpa anchor, preview, atau website eksternal. `lastmod` hanya diisi bila tanggal perubahan konten nyata diketahui. Produksi tidak memiliki meta robots atau `X-Robots-Tag: noindex`. |
| SEO-005 | Structured data faktual | JSON-LD Schema.org `Organization` memuat `name`, `url`, dan `@id` stabil berdasarkan domain final. Tambahkan logo, `sameAs`, dan `founder` bertipe `Person` hanya jika data terverifikasi, relevan dengan konten publik, serta disetujui. Website lini bukan `sameAs` perusahaan payung. Jangan mengasumsikan hubungan `subOrganization`, status LocalBusiness, rating, atau sertifikasi. Lolos Schema Markup Validator tanpa error; tidak menjanjikan rich result. |
| SEO-006 | Metadata berbagi | Open Graph memuat title, description, URL canonical, dan tipe `website`. Gambar berbagi hanya dipakai bila aset publik tersedia, URL absolut dapat diakses, serta memiliki alternatif teks; jangan gunakan placeholder. Open Graph mendukung pratinjau berbagi, bukan jaminan peringkat. |
| SEO-007 | Verifikasi pascarilis | Penanggung jawab memiliki akses Google Search Console, memverifikasi domain, mengirim sitemap, dan menjalankan URL Inspection pada URL utama. Catat status kelayakan indeks dan kendala yang ditemukan; tunggu proses mesin pencari tanpa menjanjikan waktu indeks. Tidak membutuhkan script analytics pengunjung. |

**Performa pencarian:** target Core Web Vitals lapangan pada persentil ke-75: LCP ≤2,5 detik, INP ≤200 ms, CLS ≤0,1. Target dievaluasi saat data pengguna nyata tersedia; ketiadaan data pada situs baru bukan kegagalan rilis. Sebelum rilis, lakukan pengujian mobile dengan Lighthouse/PageSpeed Insights, catat lingkungan dan hasil LCP/CLS serta diagnosis interaksi. TBT hanya indikator laboratorium, bukan pengganti pengukuran INP. Perbaiki temuan penghambat render dan pergeseran layout; skor Lighthouse bukan jaminan SEO.

**Preview dan dummy:** preview memakai kontrol akses; `noindex` menjadi lapisan tambahan, bukan pengaman dokumen. Data dummy tidak masuk title, description, atau structured data sebagai usaha nyata. Rekomendasi: dummy hanya di preview. Jika pemilik tetap menyetujui dummy publik, label harus jelas dan pemilik memahami bahwa bagian tersebut masih dapat diindeks; tidak ada `noindex` per bagian halaman. Jangan memakai `robots.txt` sebagai perlindungan data rahasia.

### Pemeriksaan implementasi
- Jika implementasi memakai data terstruktur atau logika validasi nontrivial, sertakan satu pemeriksaan runnable untuk field wajib, status, URL HTTPS, dan ketiadaan tautan dummy. Tidak perlu pipeline khusus hanya untuk konten statis.

### Keamanan dan privasi

- Deploy hanya artefak website publik. Jangan menjadikan root proyek sebagai direktori publik karena berisi dokumen internal dan berkas akses.
- Jangan menyalin kredensial, kode cadangan, data pajak, atau dokumen internal ke source publik maupun hasil deploy.
- Gunakan HTTPS. URL lini harus diparse dan dibatasi ke skema HTTPS sebelum dirender; persetujuan domain resmi tetap dilakukan manual. Jangan merender konten sebagai HTML mentah tak tepercaya.
- Tidak ada penyimpanan data pengunjung, cookie nonesensial, tracker, atau embed pihak ketiga pada scope awal.

## 10. Kondisi gagal dan edge case

| Kondisi | Perilaku |
| --- | --- |
| URL resmi belum diberikan | Tampilkan nama dan ringkasan dengan “Website belum tersedia”; konfirmasi kondisi tersebut sebelum rilis. |
| Website lini sedang tidak dapat diakses saat QA | Minta pemilik memverifikasi URL; jika belum terselesaikan, jangan tampilkan tautan sampai tujuan dikonfirmasi. Tidak perlu pemantauan otomatis. |
| Nama atau deskripsi panjang | Teks membungkus tanpa terpotong atau menyebabkan overflow. |
| Logo tidak ada atau gagal dimuat | Nama lini tetap terlihat; jangan bergantung pada gambar sebagai identitas tunggal. |
| Data pendiri belum disetujui | Preview menandai konten belum lengkap, tanpa identitas rekaan; materi profil wajib disetujui sebelum rilis dengan scope ini. |
| Jumlah lini bertambah atau berkurang | Layout tetap rapi; tidak hardcode batas dua kartu. |
| Dummy tidak disetujui untuk publik | Hilangkan bagian dummy sepenuhnya pada produksi, bukan hanya menghapus labelnya. |
| JavaScript gagal | Profil, navigasi anchor, dan tautan website tetap dapat digunakan. |

## 11. Dependensi dan risiko

| Dependensi/risiko | Penanganan |
| --- | --- |
| Nama dan hubungan legal belum diverifikasi | Pemilik menyetujui nama publik serta istilah hubungan lini usaha. |
| URL website kedua lini belum tersedia | Minta URL resmi; jangan menebak domain berdasarkan nama usaha. |
| Klaim layanan halal berlebihan | Batasi ringkasan pada layanan yang terverifikasi; detail berada di website lini. |
| Dummy dianggap usaha nyata | Label eksplisit, bagian terpisah, dan persetujuan sebelum publikasi. |
| Aset merek belum tersedia | Gunakan identitas teks; hanya gunakan aset dengan hak penggunaan jelas. |
| Kebocoran dokumen proyek | Periksa daftar file hasil deploy; hanya materi publik boleh diterbitkan. |
| Domain dan paket Vercel belum ditentukan | Hosting ditetapkan Vercel; konfirmasi domain, paket yang mengizinkan penggunaan komersial, biaya, serta perlindungan preview sebelum rilis. |

## 12. Rencana peluncuran

1. Setujui nama perusahaan, profil singkat, materi Profil Pendiri beserta izin publikasi, ringkasan lini, URL resmi atau status belum tersedia, dan penggunaan dummy.
2. Implementasikan satu halaman dengan Astro static, TypeScript, dan CSS native; konfigurasi build Vercel sesuai bagian 9. Pembaruan konten melalui pengembang tanpa admin.
3. Periksa FR-001–FR-009 dan SEO-001–SEO-006, tautan, keyboard, reflow, performa mobile, serta daftar file deploy. Preview internal harus dilindungi jika memuat materi nonpublik; `noindex` bukan kontrol akses.
4. Rilis setelah konten dan artefak lolos pemeriksaan. Verifikasi kembali halaman, canonical, robots, sitemap, serta tautan pada domain produksi; jalankan SEO-007 dan pantau laporan pengindeksan.

Belum ada jadwal atau biaya yang disepakati. Nomor WhatsApp bukan syarat peluncuran.

## 13. Fakta, asumsi, dan pertanyaan terbuka

### Fakta dan keputusan pengguna

- Website untuk perusahaan payung dengan dua lini aktif: Era Baru Akademi dan Sahiva Halal Indonesia.
- Lini masa depan menggunakan data dummy.
- Format satu halaman, tanpa admin.
- Sertakan profil pendiri perusahaan.
- SEO teknis yang baik merupakan kebutuhan wajib, bukan hanya metadata dasar.
- Stack ditetapkan Astro static + TypeScript + CSS native, dengan hosting Vercel.
- Arahan terbaru: tidak perlu CTA kuat; fokus profil, daftar lini usaha, dan website masing-masing. Arahan ini menggantikan fokus kontak WhatsApp pada draft awal.

### Asumsi draft

- Nama kerja PT Arunika Rucifan Adikarya berasal dari nama dokumen, belum diverifikasi secara legal.
- Bahasa Indonesia dan pembaruan konten oleh pengembang mencukupi kebutuhan awal.
- Tiga dummy merupakan contoh desain, bukan rencana ekspansi resmi.
- Kontak umum bersifat opsional di footer, bukan fungsi utama.

### Informasi yang masih dibutuhkan

- Nama publik dan profil singkat perusahaan yang disetujui.
- Jumlah pendiri, nama lengkap, peran, bio singkat, serta foto opsional yang disetujui untuk publikasi.
- URL website resmi Era Baru Akademi dan Sahiva Halal Indonesia, atau konfirmasi bahwa website belum tersedia.
- Logo/identitas visual resmi perusahaan dan tiap lini jika ada.
- Persetujuan ringkasan layanan halal serta publikasi data dummy.
- Domain canonical final, akun/paket Vercel untuk penggunaan komersial, serta penanggung jawab deployment dan persetujuan konten.
- Akses pengelolaan domain dan penanggung jawab Google Search Console; logo serta profil resmi untuk structured data jika tersedia.

## 14. Status validasi

PRD ditinjau dan direvisi mengikuti fokus profil serta tautan website lini. Hanya dokumentasi yang diubah; belum ada implementasi atau pengujian aplikasi. URL resmi belum diberikan sehingga tujuan tautan belum dapat diverifikasi.
