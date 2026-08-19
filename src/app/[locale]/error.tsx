"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center p-4 text-center">
      <div className="mb-6 inline-flex rounded-full bg-destructive/10 p-4">
        <AlertTriangle className="h-12 w-12 text-destructive" />
      </div>
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        Terjadi Kesalahan Sejarah!
      </h2>
      <p className="mb-8 max-w-md text-muted-foreground">
        Sepertinya ada paradoks waktu atau gangguan pada sistem kami saat mencoba memuat halaman ini.
      </p>
      <button
        onClick={() => reset()}
        className="rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground shadow transition-colors hover:bg-primary/90"
      >
        Coba Lagi
      </button>
    </div>
  );
}
