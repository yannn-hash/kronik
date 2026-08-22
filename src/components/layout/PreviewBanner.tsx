"use client";

import { useEffect, useState } from "react";
import { AlertCircle, X, GitBranch } from "lucide-react";
import { useTranslations } from "next-intl";

export function PreviewBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [branchName, setBranchName] = useState<string | null>(null);
  const t = useTranslations("banner");

  useEffect(() => {
    // Check if we are running in a Vercel Preview deployment
    // We only rely on NEXT_PUBLIC_VERCEL_ENV === "preview" 
    // to prevent false positives in production when domain is .vercel.app
    const isVercelPreview = process.env.NEXT_PUBLIC_VERCEL_ENV === "preview";

    if (isVercelPreview) {
      setIsVisible(true);
      setBranchName(process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || "preview");
    }
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Preview Environment Notice"
      className="relative z-50 flex items-center justify-between border-b border-amber-500/30 bg-amber-500/10 px-4 py-2 text-xs sm:text-sm text-amber-600 dark:text-amber-400 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center gap-2 font-medium">
        <AlertCircle className="h-4 w-4 shrink-0" />
        <span>
          <strong>{t("previewTitle")}</strong> {t("previewDesc")}
        </span>
        {branchName && (
          <span className="hidden sm:inline-flex items-center gap-1 rounded-md bg-amber-500/20 px-2 py-0.5 font-mono text-xs">
            <GitBranch className="h-3 w-3" />
            {branchName}
          </span>
        )}
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="rounded p-1 hover:bg-amber-500/20 transition-colors"
        aria-label={t("closeTitle")}
      >
        <X className="h-4 w-4" />
      </button>
    </aside>
  );
}
