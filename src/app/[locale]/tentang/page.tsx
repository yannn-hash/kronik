import { BookOpen, Code2, Heart } from "lucide-react";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("about");
  
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-bold text-foreground">{t("title")}</h1>
      <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
        <p>
          <strong className="text-foreground">Kronik</strong>{" "}
          {t("intro").startsWith("Kronik ") ? t("intro").substring(7) : t("intro")}
        </p>

        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-foreground">
            <BookOpen className="h-5 w-5" />
            {t("sourcesTitle")}
          </h2>
          <p className="mt-3">
            {t("sourcesDesc")}
          </p>
          <ul className="mt-3 space-y-2">
            <li className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-green-500" />
              <strong className="text-foreground">{t("badgeVerified")}</strong> —{" "}
              {t("badgeVerifiedDesc")}
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-yellow-500" />
              <strong className="text-foreground">{t("badgeDebatable")}</strong> —{" "}
              {t("badgeDebatableDesc")}
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-red-500" />
              <strong className="text-foreground">{t("badgeSpeculative")}</strong> —{" "}
              {t("badgeSpeculativeDesc")}
            </li>
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-foreground">
            <Heart className="h-5 w-5" />
            {t("openSourceTitle")}
          </h2>
          <p className="mt-3">
            {t("openSourceDesc")}
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-foreground">
            <Code2 className="h-5 w-5" />
            {t("contributeTitle")}
          </h2>
          <p className="mt-3">
            {t("contributeDesc")}
          </p>
        </div>
      </div>
    </div>
  );
}
