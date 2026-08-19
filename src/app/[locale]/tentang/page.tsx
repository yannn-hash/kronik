import { BookOpen, Code2, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-bold text-foreground">Tentang Kronik</h1>
      <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
        <p>
          <strong className="text-foreground">Kronik</strong> adalah website
          edukatif open-source yang bertujuan menyajikan sejarah dunia secara
          interaktif, visual, dan terverifikasi. Kami percaya bahwa belajar
          sejarah seharusnya menyenangkan dan mudah diakses oleh semua orang.
        </p>

        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-foreground">
            <BookOpen className="h-5 w-5" />
            Sumber & Referensi
          </h2>
          <p className="mt-3">
            Setiap artikel di Kronik dilengkapi dengan referensi dari sumber
            akademis terpercaya seperti Encyclopaedia Britannica, World History
            Encyclopedia, dan jurnal-jurnal peer-reviewed. Kami menggunakan
            sistem badge kepercayaan:
          </p>
          <ul className="mt-3 space-y-2">
            <li className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-green-500" />
              <strong className="text-foreground">Terverifikasi</strong> —
              Konsensus akademis kuat, 2+ sumber konsisten
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-yellow-500" />
              <strong className="text-foreground">Debatable</strong> — Ada
              variasi interpretasi antar sumber
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-red-500" />
              <strong className="text-foreground">Spekulatif</strong> — Bukti
              terbatas, diberi label jelas
            </li>
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-foreground">
            <Heart className="h-5 w-5" />
            Open Source
          </h2>
          <p className="mt-3">
            Kronik adalah proyek open-source. Kode sumber dilisensikan di bawah
            MIT License, dan konten artikel dilisensikan di bawah Creative
            Commons CC BY-SA 4.0.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-foreground">
            <Code2 className="h-5 w-5" />
            Kontribusi
          </h2>
          <p className="mt-3">
            Kami menyambut kontribusi dari siapa saja! Baik itu perbaikan konten,
            penambahan artikel baru, atau peningkatan fitur website.
          </p>
        </div>
      </div>
    </div>
  );
}
