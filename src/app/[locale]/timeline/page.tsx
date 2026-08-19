"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { HISTORICAL_EVENTS } from "@/data/events";
import { ERAS } from "@/data/eras";
import { Calendar, MapPin, ArrowRight, ArrowDown } from "lucide-react";
import { StaggerContainer, StaggerItem, FadeIn } from "@/components/ui/Animations";
import { ConfidenceBadge } from "@/components/article/ConfidenceBadge";

export default function TimelinePage() {
  const t = useTranslations();
  const locale = useLocale() as "id" | "en";

  // Sort events chronologically (oldest to newest)
  const sortedEvents = [...HISTORICAL_EVENTS].sort((a, b) => a.year - b.year);

  const formatYear = (year: number) => {
    return Math.abs(year) + (year < 0 ? (locale === "id" ? " SM" : " BCE") : (locale === "id" ? " M" : " CE"));
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:py-24">
      {/* Header */}
      <div className="mb-20 text-center">
        <FadeIn>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl mb-6">
            {t("timelinePage.title")}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {t("timelinePage.subtitle")}
          </p>
          <div className="mt-10 flex justify-center text-muted-foreground animate-bounce">
            <ArrowDown className="h-8 w-8" />
          </div>
        </FadeIn>
      </div>

      {/* Vertical Timeline */}
      <div className="relative">
        {/* The central line - hidden on small screens, visible on md+ */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" />

        <StaggerContainer className="flex flex-col gap-12 md:gap-24">
          {sortedEvents.map((event, index) => {
            const era = ERAS.find(e => e.id === event.era);
            const isEven = index % 2 === 0;

            return (
              <StaggerItem 
                key={event.id} 
                className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-8`}
              >
                {/* Node Dot on the timeline */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-background border-4 z-10 -translate-x-[7px] md:-translate-x-1/2 mt-6 md:mt-0" style={{ borderColor: era?.color || '#3b82f6' }} />

                {/* Content Card */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 text-left'}`}>
                  <div className="group rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm transition-all hover:border-primary/40 hover:shadow-md relative overflow-hidden">
                    {/* Subtle Era Background Glow */}
                    <div 
                      className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-10 blur-2xl pointer-events-none transition-opacity group-hover:opacity-20"
                      style={{ backgroundColor: era?.color || '#3b82f6' }}
                    />

                    {/* Meta Info */}
                    <div className={`flex flex-wrap items-center gap-3 mb-4 text-sm font-medium text-muted-foreground ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted">
                        <Calendar className="h-4 w-4" />
                        {formatYear(event.year)}
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted">
                        <MapPin className="h-4 w-4" />
                        {event.location.name[locale]}
                      </div>
                      <ConfidenceBadge level={event.confidence} locale={locale} />
                    </div>

                    {/* Title & Summary */}
                    <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {event.title[locale]}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                      {event.summary[locale]}
                    </p>

                    {/* Action */}
                    <Link 
                      href={{ pathname: "/artikel/[slug]", params: { slug: event.slug } }}
                      className={`inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors ${isEven ? 'md:flex-row-reverse' : ''}`}
                    >
                      {t("common.readMore")}
                      <ArrowRight className={`h-4 w-4 ${isEven ? 'md:rotate-180' : ''}`} />
                    </Link>
                  </div>
                </div>

                {/* Empty Space for the other side (Desktop only) */}
                <div className="hidden md:block md:w-1/2" />
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
      
      <div className="mt-20 text-center text-muted-foreground pb-10">
        <FadeIn>
          <p>
            {locale === 'id' 
              ? 'Lebih banyak sejarah sedang ditulis...' 
              : 'More history is being written...'}
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
