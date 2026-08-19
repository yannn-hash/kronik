import { getTranslations } from "next-intl/server";
import { HISTORICAL_EVENTS } from "@/data/events";
import { Link } from "@/i18n/routing";
import { ConfidenceBadge } from "@/components/article/ConfidenceBadge";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
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
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          {t("title")}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-xl text-muted-foreground">
          {t("description")}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {HISTORICAL_EVENTS.map((event) => {
          const displayYear = Math.abs(event.year) + (event.year < 0 ? (locale === 'id' ? ' SM' : ' BCE') : (locale === 'id' ? ' M' : ' CE'));
          
          return (
            <Link 
              key={event.id}
              href={{ pathname: "/artikel/[slug]", params: { slug: event.slug[validLocale] } }}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
            >
              <div>
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {displayYear}
                  </span>
                  <ConfidenceBadge level={event.confidence} locale={validLocale} />
                </div>
                
                <h2 className="mb-2 text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {event.title[validLocale]}
                </h2>
                
                <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">
                  {event.summary[validLocale]}
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  {event.location.name[validLocale]}
                </span>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  {locale === "id" ? "Baca" : "Read"} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
