import assert from 'node:assert/strict';
import { businesses, company, founders, httpsUrl } from '../src/data/site.ts';

assert.equal(httpsUrl('https://contoh.id'), 'https://contoh.id/');
for (const bad of ['http://contoh.id', 'javascript:alert(1)', '#', '', 'contoh.id', null]) {
  assert.equal(httpsUrl(bad), null, `harus ditolak: ${bad}`);
}

assert.ok(company.name && company.title && company.description, 'identitas perusahaan wajib');
assert.match(company.whatsapp.number, /^62\d{8,13}$/, 'WhatsApp harus format 62xxxxxxxx');
assert.equal('62' + company.whatsapp.label.replace(/\D/g, '').slice(1), company.whatsapp.number, 'label WhatsApp tidak cocok dengan nomor');
assert.match(company.contact.business, /^[^@\s]+@[^@\s]+\.[^@\s]+$/, 'email bisnis tidak valid');
assert.match(company.contact.info, /^[^@\s]+@[^@\s]+\.[^@\s]+$/, 'email info tidak valid');
assert.ok(businesses.length > 0, 'minimal satu lini aktif');

for (const b of businesses) {
  assert.ok(b.name && b.field && b.summary, `field wajib kosong: ${b.name}`);
  if (b.url !== null) assert.ok(httpsUrl(b.url), `URL ${b.name} harus HTTPS valid`);
}

for (const f of founders) assert.ok(f.name && f.role && f.bio, `data pendiri tidak lengkap: ${f.name}`);

if (!founders.length) console.warn('Peringatan: data pendiri kosong — wajib diisi sebelum rilis produksi.');
for (const b of businesses) if (!b.url) console.warn(`Peringatan: ${b.name} belum punya URL resmi.`);
console.log('Data OK');
