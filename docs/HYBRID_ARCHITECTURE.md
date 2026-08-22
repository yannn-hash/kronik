# Arsitektur Hybrid Kronik: MDX (Konten) + Database Supabase (Interaktivitas)

Dokumen ini mencatat keputusan arsitektur terkait manajemen konten artikel sejarah dan data dinamis pengguna pada platform Kronik.

---

## 1. Latar Belakang & Analisis

Konten sejarah pada platform Kronik bersifat **evergreen** (abadi, terverifikasi akademis, dan jarang berubah drastis setelah dipublikasikan). Di sisi lain, Kronik memiliki fitur interaktif berbasis pengguna seperti sistem autentikasi, profil, pengerjaan kuis, dan perolehan lencana (*badges*).

---

## 2. Arsitektur Hybrid

Kronik memisahkan tanggung jawab antara lapisan konten statis dan lapisan data interaktif pengguna:

```
┌─────────────────────────────────────────────────────────────┐
│                       KRONIK HYBRID                         │
├──────────────────────────────┬──────────────────────────────┤
│      KONTEN UTAMA (MDX)      │     INTERAKSI (SUPABASE)     │
├──────────────────────────────┼──────────────────────────────┤
│ • Naskah Lengkap Artikel     │ • Autentikasi Pengguna       │
│ • Komponen Kuis Interaktif   │ • Riwayat & Skor Kuis        │
│ • Referensi Akademis         │ • Bookmark / Favorit         │
│ • Data Peta & Koordinat      │ • Progress & Lencana         │
│ • Static Site Gen (SSG)      │ • Statistik Pembaca (Views)  │
└──────────────────────────────┴──────────────────────────────┘
```

---

## 3. Keunggulan Pendekatan

1. **Performa & SEO Maksimal**:
   - Artikel dikompilasi saat build (*SSG*) dan disajikan langsung melalui Edge CDN Vercel dengan TTFB (Time to First Byte) instan dan tanpa latensi query database.
2. **Kaya Format & Komponen Interaktif**:
   - Penulis artikel dapat menyematkan komponen React kustom (`<QuizWrapper />`, badge verifikasi, kutipan khusus) langsung di berkas `.mdx` tanpa memerlukan parser/WYSIWYG rumit.
3. **Audit Trail & Kontrol Versi (Git)**:
   - Seluruh revisi artikel terlacak aman di riwayat commit Git.
4. **Efisiensi Database**:
   - Supabase hanya menangani data dinamis per-pengguna (`user_bookmarks`, `user_quiz_attempts`, `user_achievements`), menjaga kuota database tetap ringan dan hemat biaya.

---

## 4. Skema Rencana Data Dinamis di Supabase (Masa Depan)

- `user_bookmarks`: Menyimpan relasi `user_id` dan `article_slug`.
- `user_quiz_attempts`: Menyimpan relasi `user_id`, `article_slug`, `score`, dan `completed_at`.
- `article_analytics`: Menyimpan jumlah pembaca (*view counter*) per `article_slug`.

---

*Catatan: Keputusan ini disepakati untuk mempertahankan ekosistem MDX lokal untuk penulisan artikel seluruh era, dan memanfaatkan Supabase saat mengimplementasikan fitur-fitur interaktif pengguna lanjutan.*
