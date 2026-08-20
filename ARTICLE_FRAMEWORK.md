# Kerangka Standar Artikel Kronik (Master Framework)

Dokumen ini adalah standarisasi penulisan konten edukasi sejarah untuk platform Kronik. Panduan ini dapat digunakan langsung sebagai *system prompt* atau acuan instruksi pada model AI (Claude, ChatGPT, Gemini) maupun penulis manusia untuk menghasilkan artikel sejarah yang mendalam, terstruktur, dan konsisten.

---

## 1. Spesifikasi Teknis Konten

- **Panjang Artikel**: 1.200 – 2.000 kata per bahasa (~6 - 10 menit waktu membaca).
- **Format File**: MDX (`.mdx`).
- **Gaya Bahasa**: Edukatif, mengalir, analitis, mendalam, dan bebas dari ornamen emoji/ikon informal.
- **Dua Bahasa (Bilingual)**: Setiap topik wajib memiliki versi Bahasa Indonesia (`id`) dan Bahasa Inggris (`en`).
- **Komponen Penutup**: Wajib menyertakan komponen `<QuizWrapper slug="..." locale="..." />` di baris terakhir file MDX.

---

## 2. Struktur Anatomi 7 Bagian Artikel

Setiap artikel MDX wajib mengikuti 7 bagian berurutan berikut:

### 1. Paragraf Pembuka ("The Hook")
- 1 paragraf padat (4-6 kalimat).
- Langsung menarik minat pembaca dengan menonjolkan esensi dramatis, pertanyaan fundamental, atau signifikansi peradaban.
- Menetapkan latar waktu, lokasi, dan mengapa peristiwa ini mengubah jalannya sejarah dunia.

### 2. Latar Belakang Sejarah (`## Latar Belakang Sejarah` / `## Historical Background`)
- Panjang: 250 - 400 kata.
- Menjelaskan kondisi geopolitik, tatanan sosial, ekonomi, dan pergeseran kekuasaan sebelum peristiwa mencapai puncaknya.
- Mengurai faktor pemicu (kausalitas) mengapa peristiwa ini terjadi pada masa tersebut.

### 3. Kronologi & Titik Balik Peristiwa (`## Kronologi Peristiwa` / `## Chronology of Events`)
- Panjang: 350 - 550 kata.
- Inti narasi sejarah yang disusun secara kronologis atau tematis terstruktur.
- Menggunakan penomoran atau poin terstruktur untuk menandai fase-fase kritis atau titik balik (*turning points*).

### 4. Tokoh-Tokoh Kunci (`## Tokoh-Tokoh Kunci` / `## Key Historical Figures`)
- Panjang: 200 - 350 kata.
- Profil mendalam 2-4 figur penting yang memegang peranan krusial.
- Menjelaskan motivasi, keputusan strategis, serta kontribusi konkret mereka.

### 5. Dampak dan Warisan Jangka Panjang (`## Dampak dan Warisan` / `## Impact and Legacy`)
- Panjang: 250 - 400 kata.
- Pengaruh langsung pasca-peristiwa serta warisan institusional, filosofis, atau teknologi yang bertahan hingga era modern.

### 6. Fakta Sejarah Penting (`## Fakta Menarik` / `## Historical Insights`)
- 4-6 butir wawasan mendalam atau temuan riset arkeologi/historiografi yang jarang diketahui khalayak umum.
- Ditulis dalam bentuk daftar poin (*bullet list*) tanpa emoji.

### 7. Refleksi & Kutipan Sejarah (`## Catatan Sejarah` / `## Historical Records`)
- 1 blok kutipan bersejarah (*blockquote*) dari sumber primer atau sejarawan terkemuka, disertai analisis singkat mengenai makna kutipan tersebut.

---

## 3. Standar Kuis Interaktif (Minimal 3 Pertanyaan)

Disimpan pada `src/data/quizzes.ts` dengan ketentuan:
- **Pertanyaan 1 (Fakta/Kronologi Dasar)**: Menguji pemahaman pembaca terhadap waktu, lokasi, atau tokoh utama.
- **Pertanyaan 2 (Analisis & Mekanisme)**: Menguji pemahaman konseptual (misal: sistem politik, strategi perang, inovasi pertanian).
- **Pertanyaan 3 (Dampak & Evaluasi)**: Menguji pemahaman terhadap konsekuensi sejarah atau faktor keruntuhan/kejayaan.
- **Format Pilihan**: 4 opsi jawaban dengan 1 kunci jawaban pasti dan 1 penjelasan (*explanation*) edukatif 2-3 kalimat.

---

## 4. Standar Referensi Akademis (Minimal 3 Sumber)

Disimpan pada entri `references` di `src/data/events.ts` dengan komposisi:
1. **Buku Akademis/Monograf Sejarah**: Karya sejarawan bereputasi atau terbitan universitas terkemuka.
2. **Katalog/Jurnal Arkeologi atau Ensiklopedia**: Publikasi terakreditasi atau entri Britannica/UNESCO.
3. **Arsip Primer / Sumber Digital Terpercaya**: Manuskrip, museum daring, atau dokumen primer bersejarah.

---

## 5. Master Prompt Siap Pakai (Untuk Generate Artikel Baru)

Salin prompt di bawah ini untuk menghasilkan artikel kapan saja dari model AI:

```markdown
Anda adalah sejarawan akademis dan penulis edukasi untuk platform sejarah digital "Kronik".
Tugas Anda adalah menulis artikel sejarah yang mendalam, kaya analisis, dan mengalir untuk topik: [MASUKKAN NAMA TOPIK] dalam [Bahasa Indonesia / English].

Instruksi Penulisan:
1. Target Panjang: 1.200 - 1.800 kata.
2. Gaya Penulisan: Naratif-edukatif, analitis, objektif, tanpa emoji/ikon visual.
3. Struktur Wajib:
   - Paragraf Pembuka (Hook & Konteks)
   - ## Latar Belakang Sejarah (Kausalitas & Konteks Zaman)
   - ## Kronologi Peristiwa (Fase Kritis & Titik Balik)
   - ## Tokoh-Tokoh Kunci (Profil 2-4 Tokoh Utama)
   - ## Dampak dan Warisan (Pengaruh Jangka Pendek & Modern)
   - ## Fakta Menarik (4-6 Poin Wawasan Mendalam)
   - ## Catatan Sejarah (Kutipan Primer dalam format blockquote)
4. Sisipkan pemanggil kuis di akhir artikel:
   import { QuizWrapper } from "@/components/article/QuizWrapper";
   <QuizWrapper slug="[SLUG_ARTIKEL]" locale="[id/en]" />

Sertakan juga:
A. 3 Pertanyaan Kuis bilingual (Q1: Fakta Dasar, Q2: Analisis Konsep, Q3: Dampak/Warisan) dengan 4 opsi, indeks jawaban benar, dan penjelasan komprehensif.
B. 3 Referensi akademis (Penulis, Judul, Penerbit/Jurnal, Tahun, URL bila ada).
```
