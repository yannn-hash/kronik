# Kronik - Atlas Sejarah Dunia 🌍⏳

Kronik adalah platform edukatif interaktif yang bertujuan untuk membuat pembelajaran sejarah dunia menjadi lebih menarik, mudah dipahami, dan dapat diandalkan. Proyek ini menggabungkan peta interaktif, timeline, dan artikel-artikel mendalam.

## Fitur Utama ✨
- **Peta Interaktif (TimeLine Atlas):** Jelajahi peristiwa sejarah langsung di atas peta dunia.
- **Timeline Dinamis:** Filter peristiwa berdasarkan era (Kuno, Klasik, Pertengahan, Modern Awal, Modern).
- **Artikel Terpercaya:** Artikel sejarah lengkap dengan *Confidence Badge* (tingkat verifikasi sejarah) dan sumber referensi.
- **Multibahasa (i18n):** Tersedia dalam Bahasa Indonesia dan Bahasa Inggris.
- **UI/UX Menawan:** Desain bertema *Vintage-Modern* dengan animasi transisi yang halus.

## Tech Stack 🛠️
- **Framework:** Next.js 15 (App Router)
- **Bahasa:** TypeScript
- **Styling:** Tailwind CSS v4
- **Peta:** Leaflet & React-Leaflet
- **Animasi:** Framer Motion
- **Konten:** MDX (@next/mdx)
- **I18n:** next-intl
- **Ikon:** Lucide React

## Cara Menjalankan di Lokal 🚀

1. Pastikan Anda telah menginstal Node.js (direkomendasikan v20+).
2. Clone repositori ini.
3. Instal semua dependensi:
   ```bash
   npm install
   ```
4. Jalankan server pengembangan:
   ```bash
   npm run dev
   ```
5. Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## Kontribusi 🤝
Karena proyek ini 100% *open source*, kontribusi dari komunitas sangat dinantikan! Mulai dari penambahan artikel sejarah baru (dalam format MDX), perbaikan *typo*, hingga peningkatan fitur.
Silakan buat *Pull Request* atau ajukan *Issue* di repositori ini.

## Lingkungan Deployment 🌐
- **Production (`master`):** Menyajikan versi rilis resmi untuk publik.
- **Pre-Production Preview (`staging`):** Lingkungan uji coba otomatis (Vercel Preview) untuk pengujian fitur sebelum digabungkan ke produksi.

## Lisensi 📄
- **Kode Sumber (Source Code):** Dilindungi di bawah [MIT License](LICENSE).
- **Konten Artikel & Data:** Didistribusikan di bawah [Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/).
