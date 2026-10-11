
export type Logo = { src: string; width: number; height: number };

export type Business = {
  name: string;
  field: string;
  summary: string;
  /** URL HTTPS resmi yang sudah dikonfirmasi pemilik; null = "Website belum tersedia". */
  url: string | null;
  logo?: Logo;
};

export type Founder = {
  name: string;
  role: string;
  bio: string;
  /** Nama file di src/assets/founders/. */
  photo?: { file: string; alt: string };
};

export const company = {
  name: 'PT Arunika Rucifan Adikarya',
  whatsapp: {
    number: '6285199699734',
    label: '0851-9969-9734',
    businessText:
      'Halo PT Arunika Rucifan Adikarya, saya ingin menjajaki kerja sama bisnis.\n\nNama: \nInstansi/Perusahaan: \nKeperluan: \n\nTerima kasih.',
  },
  contact: { business: 'bisnis@arunikarucifanadikarya.com', info: 'info@arunikarucifanadikarya.com' },
  title: 'PT Arunika Rucifan Adikarya',
  description:
    'PT Arunika Rucifan Adikarya menaungi lini usaha di bidang pendidikan dan layanan terkait halal: Era Baru Akademi dan Sahiva Halal Indonesia.',
  intro:
    'PT Arunika Rucifan Adikarya menaungi lini usaha di bidang pendidikan dan layanan terkait halal.',
  about: [
    'PT Arunika Rucifan Adikarya adalah perusahaan payung yang menjadi wadah bagi beberapa lini usaha. Setiap lini memiliki identitas, bidang, dan kanal informasinya sendiri.',
    'Saat ini perusahaan menaungi dua lini usaha aktif: satu di bidang pendidikan dan pelatihan, satu lagi di bidang konsultasi dan pendampingan halal. Informasi layanan terperinci tersedia melalui website resmi masing-masing lini.',
  ],
};

export const businesses: Business[] = [
  {
    name: 'Era Baru Akademi',
    field: 'Pendidikan dan pelatihan',
    summary:
      'Penyedia jasa bimbingan belajar dan pelatihan untuk mendukung kebutuhan belajar serta pengembangan kemampuan.',
    url: 'https://www.erabaruakademi.com',
    logo: { src: '/logo/EBA_Symbol.svg', width: 175, height: 175 },
  },
  {
    name: 'Sahiva Halal Indonesia',
    field: 'Konsultasi dan pendampingan halal',
    summary:
      'Layanan konsultasi halal, pendampingan proses sertifikasi halal, serta pelatihan terkait konsep halal.',
    url: 'https://www.sahivahalal.com',
    logo: { src: '/logo/SHI_Symbol.svg', width: 175, height: 175 },
  },
];

export const founders: Founder[] = [
  {
    name: 'Rudi Tri Hartanto, S.Pd.',
    role: 'Pendiri',
    bio: 'Lulusan S1 Pendidikan Matematika Universitas Negeri Jakarta (UNJ) dengan pengalaman lebih dari 15 tahun di dunia pendidikan. Sejak 2011, aktif mengajar di berbagai lembaga bimbingan belajar dan sekolah, dengan fokus pada penguatan kompetensi akademik, pendampingan belajar, serta persiapan seleksi ke jenjang pendidikan lanjutan.\n\nSaat ini menjabat sebagai Wakil Kepala Sekolah sekaligus mengembangkan layanan bimbingan belajar EBA (Era Baru Akademi) dan les privat. Melalui pendampingan yang disesuaikan dengan kebutuhan siswa, turut mendukung para lulusan untuk melanjutkan pendidikan ke sekolah unggulan, perguruan tinggi negeri (PTN), dan sekolah kedinasan.\n\nBerkomitmen menghadirkan pendampingan pendidikan yang terarah, personal, dan berorientasi pada hasil, agar setiap siswa dapat mengembangkan potensinya secara optimal dan meraih masa depan akademik yang diharapkan.',
    photo: {
      file: 'rudi-tri-hartanto.webp',
      alt: 'Foto Pendiri Rudi Tri Hartanto',
    },
  },
  {
    name: 'Cakap Bagus Tulodo, S.T.',
    role: 'Pendiri',
    bio: 'Berawal dari seorang profesional di bidang IT kemudian bertransformasi dengan membawa pengalaman dan keterampilan ke dunia pendidikan. Beliau sekarang menjadi bagian dari dunia pendidikan dan praktisi teknologi yang berkomitmen mengembangkan sumber daya manusia melalui pendidikan berkualitas dan pemanfaatan teknologi digital.\n\nKetertarikannya pada teknologi informasi, pemrograman, dan pengembangan solusi digital mendorongnya untuk mengintegrasikan teknologi dalam pembelajaran, pengelolaan lembaga pendidikan, serta pengembangan layanan digital. Melalui Era Baru Akademi (EBA) dan berbagai inisiatif di bidang pendidikan dan teknologi, ia turut menghadirkan layanan pembelajaran yang inovatif, adaptif, dan relevan dengan kebutuhan generasi masa kini.',
    photo: {
      file: 'cakap-bagus-tulodo.webp',
      alt: 'Foto Pendiri Cakap Bagus Tulodo',
    },
  },
  {
    name: 'Irfansyah Rahmatullah Ramadhan, S.Pd.I.',
    role: 'Pendiri',
    bio: 'Profesional di bidang pendampingan dan pengawasan halal, dengan peran sebagai Penyelia Halal yang diakui oleh Badan Penyelenggara Jaminan Produk Halal (BPJPH) serta Mitra Halal Officer LPH LPPOM. Beliau menempuh pendidikan keislaman di Ma’had Aly Imam Syafi’i Cilacap (MAIS) dan meraih gelar sarjana (S1) dari STAI PTDII Jakarta.\n\nBerbekal pendidikan keislaman dan pengalaman dalam layanan halal, beliau berkomitmen mendukung penerapan standar jaminan produk halal serta pendampingan pelaku usaha dalam memenuhi persyaratan sertifikasi halal sesuai dengan regulasi yang berlaku di Indonesia.',
    photo: {
      file: 'irfansyah-rahmatullah-ramadhan.webp',
      alt: 'Foto Pendiri Irfansyah Rahmatullah Ramadhan',
    },
  },
];

/** Bangun link wa.me, opsional dengan teks template ter-encode. */
export function waUrl(number: string, text?: string): string {
  return text ? `https://wa.me/${number}?text=${encodeURIComponent(text)}` : `https://wa.me/${number}`;
}

/** Kembalikan URL ternormalisasi hanya jika valid dan berskema HTTPS. */
export function httpsUrl(value: string | null | undefined): string | null {
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === 'https:' ? url.href : null;
  } catch {
    return null;
  }
}

export function initials(name: string): string {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? '')
    .join('');
}
