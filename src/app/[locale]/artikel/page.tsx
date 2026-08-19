import { useTranslations } from "next-intl";

export default function ArticlesPage() {
  const t = useTranslations();

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground">
          {t("features.articles.title")}
        </h1>
        <p className="mt-2 text-muted-foreground">Segera hadir...</p>
      </div>
    </div>
  );
}
