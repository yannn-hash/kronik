"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { HISTORICAL_EVENTS } from "@/data/events";
import { ERAS } from "@/data/eras";
import { Calendar, MapPin, ArrowRight, ArrowLeftRight, ChevronsUpDown } from "lucide-react";
import { FadeIn } from "@/components/ui/Animations";
import { ConfidenceBadge } from "@/components/article/ConfidenceBadge";
import { cn } from "@/lib/utils";

export default function VersusPage() {
  const t = useTranslations();
  const locale = useLocale() as "id" | "en";

  const [event1Id, setEvent1Id] = useState<string>(HISTORICAL_EVENTS[0].id);
  const [event2Id, setEvent2Id] = useState<string>(HISTORICAL_EVENTS[1].id);

  const event1 = HISTORICAL_EVENTS.find(e => e.id === event1Id)!;
  const event2 = HISTORICAL_EVENTS.find(e => e.id === event2Id)!;

  const formatYear = (year: number) => {
    return Math.abs(year) + (year < 0 ? (locale === "id" ? " SM" : " BCE") : (locale === "id" ? " M" : " CE"));
  };

  const getEraName = (eraId: string) => {
    return ERAS.find(e => e.id === eraId)?.label[locale] || eraId;
  };

  const sortedEventsList = [...HISTORICAL_EVENTS].sort((a, b) => a.title[locale].localeCompare(b.title[locale]));

  // Removed shared tags logic for simplicity

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
            className="w-full appearance-none rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground transition-colors hover:bg-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
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
            {locale === "id" ? "Perbandingan Peradaban" : "Civilization Comparison"}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {locale === "id" 
              ? "Pilih dua peristiwa atau peradaban untuk membandingkan rentang waktu, lokasi, dan dampaknya secara berdampingan." 
              : "Select two events or civilizations to compare their timeline, location, and impact side-by-side."}
          </p>
        </div>
      </FadeIn>

      {/* Selectors */}
      <FadeIn delay={0.1}>
        <div className="flex flex-col md:flex-row items-end gap-6 mb-12 bg-card p-6 rounded-2xl border border-border shadow-sm">
          <EventSelector 
            label={locale === "id" ? "Peristiwa Pertama" : "First Event"}
            selectedId={event1Id} 
            onSelect={setEvent1Id} 
          />
          
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary md:mx-4 mx-auto mb-2 md:mb-0">
            <ArrowLeftRight className="h-6 w-6" />
          </div>
          
          <EventSelector 
            label={locale === "id" ? "Peristiwa Kedua" : "Second Event"}
            selectedId={event2Id} 
            onSelect={setEvent2Id} 
          />
        </div>
      </FadeIn>

      {/* Comparison Matrix */}
      <FadeIn delay={0.2}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          
          {/* Card 1 */}
          <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">{event1.title[locale]}</h2>
              <div className="space-y-6">
                
                {/* Year */}
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    {locale === "id" ? "Tahun" : "Year"}
                  </h3>
                  <div className="flex items-center gap-2 text-lg font-medium">
                    <Calendar className="h-5 w-5 text-primary" />
                    {formatYear(event1.year)}
                  </div>
                </div>

                {/* Location */}
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    {locale === "id" ? "Lokasi" : "Location"}
                  </h3>
                  <div className="flex items-center gap-2 text-lg font-medium">
                    <MapPin className="h-5 w-5 text-primary" />
                    {event1.location.name[locale]}
                  </div>
                </div>

                {/* Era */}
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    {locale === "id" ? "Era" : "Era"}
                  </h3>
                  <div className="text-lg font-medium">
                    {getEraName(event1.era)}
                  </div>
                </div>

                {/* Confidence */}
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    {locale === "id" ? "Tingkat Bukti" : "Evidence Level"}
                  </h3>
                  <ConfidenceBadge level={event1.confidence} locale={locale} />
                </div>

                {/* Summary */}
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    {locale === "id" ? "Ringkasan Singkat" : "Brief Summary"}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {event1.summary[locale]}
                  </p>
                </div>
                
                {/* Action */}
                <div className="pt-4 border-t border-border">
                  <Link 
                    href={{ pathname: "/artikel/[slug]", params: { slug: event1.slug } }}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    {t("common.readMore")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">{event2.title[locale]}</h2>
              <div className="space-y-6">
                
                {/* Year */}
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    {locale === "id" ? "Tahun" : "Year"}
                  </h3>
                  <div className="flex items-center gap-2 text-lg font-medium">
                    <Calendar className="h-5 w-5 text-primary" />
                    {formatYear(event2.year)}
                  </div>
                </div>

                {/* Location */}
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    {locale === "id" ? "Lokasi" : "Location"}
                  </h3>
                  <div className="flex items-center gap-2 text-lg font-medium">
                    <MapPin className="h-5 w-5 text-primary" />
                    {event2.location.name[locale]}
                  </div>
                </div>

                {/* Era */}
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    {locale === "id" ? "Era" : "Era"}
                  </h3>
                  <div className="text-lg font-medium">
                    {getEraName(event2.era)}
                  </div>
                </div>

                {/* Confidence */}
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    {locale === "id" ? "Tingkat Bukti" : "Evidence Level"}
                  </h3>
                  <ConfidenceBadge level={event2.confidence} locale={locale} />
                </div>

                {/* Summary */}
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    {locale === "id" ? "Ringkasan Singkat" : "Brief Summary"}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {event2.summary[locale]}
                  </p>
                </div>
                
                {/* Action */}
                <div className="pt-4 border-t border-border">
                  <Link 
                    href={{ pathname: "/artikel/[slug]", params: { slug: event2.slug } }}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    {t("common.readMore")}
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
