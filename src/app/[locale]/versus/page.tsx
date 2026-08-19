"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { HISTORICAL_EVENTS } from "@/data/events";
import { ERAS } from "@/data/eras";
import { TAG_TRANSLATIONS } from "@/data/tags";
import { Calendar, MapPin, ArrowRight, ArrowLeftRight, ChevronsUpDown, Orbit, Milestone, Tags } from "lucide-react";
import { FadeIn } from "@/components/ui/Animations";
import { ConfidenceBadge } from "@/components/article/ConfidenceBadge";

export default function VersusPage() {
  const t = useTranslations("versus");
  const commonT = useTranslations("common");
  const locale = useLocale() as "id" | "en";

  const [event1Id, setEvent1Id] = useState<string>(HISTORICAL_EVENTS[0].id);
  const [event2Id, setEvent2Id] = useState<string>(HISTORICAL_EVENTS[1].id);

  const event1 = HISTORICAL_EVENTS.find(e => e.id === event1Id)!;
  const event2 = HISTORICAL_EVENTS.find(e => e.id === event2Id)!;

  const sortedEventsList = [...HISTORICAL_EVENTS].sort((a, b) => a.title[locale].localeCompare(b.title[locale]));

  // Utils
  const formatYear = (year: number) => {
    return Math.abs(year) + (year < 0 ? (locale === "id" ? " SM" : " BCE") : (locale === "id" ? " M" : " CE"));
  };

  const getEraName = (eraId: string) => {
    return ERAS.find(e => e.id === eraId)?.label[locale] || eraId;
  };

  const getTranslatedTag = (tag: string) => {
    return TAG_TRANSLATIONS[tag]?.[locale] || tag;
  };

  // Calculations for Insight Panel
  const timeGap = Math.abs(event1.year - event2.year);
  
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
              Math.sin(dLon/2) * Math.sin(dLon/2); 
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    return Math.round(R * c);
  };
  const distanceKm = calculateDistance(event1.location.lat, event1.location.lng, event2.location.lat, event2.location.lng);
  
  const sharedTags = event1.tags.filter(tag => event2.tags.includes(tag));

  const EventSelector = ({ 
    selectedId, 
    onSelect, 
    label
  }: { 
    selectedId: string, 
    onSelect: (id: string) => void,
    label: string
  }) => {
    return (
      <div className="flex flex-col gap-2 w-full">
        <label className="text-sm font-medium text-muted-foreground">{label}</label>
        <div className="relative">
          <select
            value={selectedId}
            onChange={(e) => onSelect(e.target.value)}
            className="w-full appearance-none rounded-lg border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary shadow-sm"
          >
            {sortedEventsList.map((e) => (
              <option key={e.id} value={e.id}>
                {e.title[locale]}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">
            <ChevronsUpDown className="h-4 w-4" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      {/* Header */}
      <FadeIn>
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
            {t("title")}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>
      </FadeIn>

      {/* Selectors */}
      <FadeIn delay={0.1}>
        <div className="flex flex-col md:flex-row items-end gap-6 mb-8 p-1">
          <EventSelector 
            label={t("firstEvent")}
            selectedId={event1Id} 
            onSelect={setEvent1Id} 
          />
          
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary md:mx-4 mx-auto mb-1 md:mb-0">
            <ArrowLeftRight className="h-6 w-6" />
          </div>
          
          <EventSelector 
            label={t("secondEvent")}
            selectedId={event2Id} 
            onSelect={setEvent2Id} 
          />
        </div>
      </FadeIn>

      {/* INSIGHT PANEL (The Engine) */}
      <FadeIn delay={0.2}>
        <div className="mb-12 rounded-2xl border border-border bg-gradient-to-br from-card to-muted/30 p-6 md:p-8 shadow-sm">
          <h2 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
            <Orbit className="h-5 w-5 text-primary" />
            {t("analysis")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Time Gap */}
            <div className="flex flex-col gap-2 p-4 rounded-xl bg-background/50 border border-border/50">
              <div className="flex items-center gap-2 text-muted-foreground mb-1">
                <Calendar className="h-4 w-4" />
                <span className="text-sm font-medium uppercase tracking-wider">{t("timeGap")}</span>
              </div>
              <div className="text-3xl font-extrabold text-foreground">
                {timeGap.toLocaleString(locale)} <span className="text-lg font-normal text-muted-foreground">{t("timeGapDesc")}</span>
              </div>
            </div>

            {/* Distance */}
            <div className="flex flex-col gap-2 p-4 rounded-xl bg-background/50 border border-border/50">
              <div className="flex items-center gap-2 text-muted-foreground mb-1">
                <Milestone className="h-4 w-4" />
                <span className="text-sm font-medium uppercase tracking-wider">{t("distance")}</span>
              </div>
              <div className="text-3xl font-extrabold text-foreground">
                {distanceKm.toLocaleString(locale)} <span className="text-lg font-normal text-muted-foreground">{t("distanceDesc")}</span>
              </div>
            </div>

            {/* Shared Tags */}
            <div className="flex flex-col gap-2 p-4 rounded-xl bg-background/50 border border-border/50">
              <div className="flex items-center gap-2 text-muted-foreground mb-1">
                <Tags className="h-4 w-4" />
                <span className="text-sm font-medium uppercase tracking-wider">{t("sharedTraits")}</span>
              </div>
              {sharedTags.length > 0 ? (
                <div className="flex flex-wrap gap-2 mt-1">
                  {sharedTags.map(tag => (
                    <span key={tag} className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {getTranslatedTag(tag)}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="text-lg font-medium text-muted-foreground mt-1">
                  {t("noSharedTraits")}
                </div>
              )}
            </div>

          </div>
        </div>
      </FadeIn>

      {/* Comparison Matrix */}
      <FadeIn delay={0.3}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          
          {/* Card 1 */}
          <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent opacity-50" />
            <div className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">{event1.title[locale]}</h2>
              <div className="space-y-6">
                
                <div>
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">{t("year")}</h3>
                  <div className="flex items-center gap-2 text-lg font-medium">
                    <Calendar className="h-5 w-5 text-primary/70" />
                    {formatYear(event1.year)}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">{t("location")}</h3>
                  <div className="flex items-center gap-2 text-lg font-medium">
                    <MapPin className="h-5 w-5 text-primary/70" />
                    {event1.location.name[locale]}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">{t("era")}</h3>
                  <div className="text-lg font-medium">
                    {getEraName(event1.era)}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">{t("evidenceLevel")}</h3>
                  <ConfidenceBadge level={event1.confidence} locale={locale} />
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">{t("summary")}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {event1.summary[locale]}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <Link 
                    href={{ pathname: "/artikel/[slug]", params: { slug: event1.slug[locale] } }}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    {commonT("readMore")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow relative">
            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-primary to-transparent opacity-50" />
            <div className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">{event2.title[locale]}</h2>
              <div className="space-y-6">
                
                <div>
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">{t("year")}</h3>
                  <div className="flex items-center gap-2 text-lg font-medium">
                    <Calendar className="h-5 w-5 text-primary/70" />
                    {formatYear(event2.year)}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">{t("location")}</h3>
                  <div className="flex items-center gap-2 text-lg font-medium">
                    <MapPin className="h-5 w-5 text-primary/70" />
                    {event2.location.name[locale]}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">{t("era")}</h3>
                  <div className="text-lg font-medium">
                    {getEraName(event2.era)}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">{t("evidenceLevel")}</h3>
                  <ConfidenceBadge level={event2.confidence} locale={locale} />
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">{t("summary")}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {event2.summary[locale]}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <Link 
                    href={{ pathname: "/artikel/[slug]", params: { slug: event2.slug[locale] } }}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    {commonT("readMore")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </FadeIn>
    </div>
  );
}
