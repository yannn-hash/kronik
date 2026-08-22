import { getTranslations } from "next-intl/server";
import { HISTORICAL_EVENTS } from "@/data/events";
import { ArticlesExplorer } from "@/components/article/ArticlesExplorer";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  return {
    title: t("articles"),
  };
}

export default async function ArticlesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const validLocale = locale as "id" | "en";
  const t = await getTranslations({ locale, namespace: "features.articles" });

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {t("title")}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          {t("description")}
        </p>
      </div>

      <ArticlesExplorer events={HISTORICAL_EVENTS} locale={validLocale} />
    </div>
  );
}
