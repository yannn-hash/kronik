"use client";

import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { HISTORICAL_EVENTS } from "@/data/events";
import { ERAS } from "@/data/eras";
import { Calendar, MapPin, ArrowRight, ArrowDown, ArrowUp, Globe, RotateCcw } from "lucide-react";
import { ConfidenceBadge } from "@/components/article/ConfidenceBadge";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const BATCH_SIZE = 6;

export default function TimelinePage() {
  const t = useTranslations();
  const locale = useLocale() as "id" | "en";

  const [selectedEra, setSelectedEra] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const sentinelRef = useRef<HTMLDivElement>(null);

  // Sort events chronologically (oldest to newest)
  const allSortedEvents = useMemo(() => {
    return [...HISTORICAL_EVENTS].sort((a, b) => a.year - b.year);
  }, []);

  // Filter events based on selected era
  const filteredEvents = useMemo(() => {
    if (!selectedEra) return allSortedEvents;
    return allSortedEvents.filter((e) => e.era === selectedEra);
  }, [allSortedEvents, selectedEra]);

  const visibleEvents = filteredEvents.slice(0, visibleCount);
  const hasMore = visibleCount < filteredEvents.length;

  const handleEraSelect = (eraId: string | null) => {
    setSelectedEra(eraId);
    setVisibleCount(BATCH_SIZE);
  };

  const loadMore = useCallback(() => {
    if (isLoadingMore || !hasMore) return;
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, filteredEvents.length));
      setIsLoadingMore(false);
    }, 450);
  }, [isLoadingMore, hasMore, filteredEvents.length]);

  // Intersection Observer for Infinite Scroll
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoadingMore) {
          loadMore();
        }
      },
      { rootMargin: "250px" }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [hasMore, isLoadingMore, loadMore]);

  const formatYear = (year: number) => {
    return (
      Math.abs(year) +
      (year < 0
        ? locale === "id"
          ? " SM"
          : " BCE"
        : locale === "id"
        ? " M"
        : " CE")
    );
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:py-24">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl mb-4">
          {t("timelinePage.title")}
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
          {t("timelinePage.subtitle")}
        </p>

        {/* Era Quick Jump / Filter Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => handleEraSelect(null)}
            className={cn(
              "rounded-full px-4 py-1.5 text-xs font-semibold transition-all border",
              selectedEra === null
                ? "bg-primary text-primary-foreground border-primary shadow-xs"
                : "bg-card text-muted-foreground border-border hover:bg-muted hover:text-foreground"
            )}
          >
            {locale === "id" ? "Semua Era" : "All Eras"} ({allSortedEvents.length})
          </button>

          {ERAS.map((era) => {
            const isSelected = selectedEra === era.id;
            const count = allSortedEvents.filter((e) => e.era === era.id).length;

            return (
              <button
                key={era.id}
                onClick={() => handleEraSelect(era.id)}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold transition-all border",
                  isSelected
                    ? "bg-primary text-primary-foreground border-primary shadow-xs"
                    : "bg-card text-muted-foreground border-border hover:bg-muted hover:text-foreground"
                )}
              >
                <span
                  className="h-2 w-2 rounded-full shrink-0"
                  style={{ backgroundColor: era.color }}
                />
                <span>{era.label[locale]}</span>
                <span className="opacity-70 text-[10px]">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Vertical Timeline */}
      <div className="relative">
        {/* The central line - left aligned on mobile, center aligned on desktop */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" />

        <div className="flex flex-col gap-10 md:gap-16">
          <AnimatePresence mode="popLayout">
            {visibleEvents.map((event, index) => {
              const era = ERAS.find((e) => e.id === event.era);
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={event.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: Math.min((index % BATCH_SIZE) * 0.05, 0.3) }}
                  className={`relative flex items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col md:gap-8`}
                >
                  {/* Node Dot on the timeline */}
                  <div
                    className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-background border-4 z-10 -translate-x-[7px] md:-translate-x-1/2 mt-6 md:mt-0 shadow-xs transition-transform duration-300 hover:scale-125"
                    style={{ borderColor: era?.color || "#92400e" }}
                  />

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                      isEven ? "md:pr-12 md:text-right" : "md:pl-12 text-left"
                    }`}
                  >
                    <div className="group rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xs transition-all hover:border-primary/40 hover:shadow-md relative overflow-hidden">
                      {/* Subtle Era Background Glow */}
                      <div
                        className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-10 blur-2xl pointer-events-none transition-opacity group-hover:opacity-20"
                        style={{ backgroundColor: era?.color || "#92400e" }}
                      />

                      {/* Meta Info */}
                      <div
                        className={`flex flex-wrap items-center gap-2.5 mb-3.5 text-xs font-medium text-muted-foreground ${
                          isEven ? "md:justify-end" : "justify-start"
                        }`}
                      >
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-muted font-semibold">
                          <Calendar className="h-3.5 w-3.5 text-primary" />
                          {formatYear(event.year)}
                        </span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-muted font-medium">
                          <MapPin className="h-3.5 w-3.5" />
                          {event.location.name[locale]}
                        </span>
                        <ConfidenceBadge level={event.confidence} locale={locale} />
                      </div>

                      {/* Title & Summary */}
                      <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2.5 group-hover:text-primary transition-colors leading-snug">
                        {event.title[locale]}
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3">
                        {event.summary[locale]}
                      </p>

                      {/* Action Link */}
                      <div className={`flex ${isEven ? "md:justify-end" : "justify-start"}`}>
                        <Link
                          href={{
                            pathname: "/artikel/[slug]",
                            params: { slug: event.slug[locale] },
                          }}
                          className={`inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors ${
                            isEven ? "md:flex-row-reverse" : ""
                          }`}
                        >
                          <span>{t("common.readMore")}</span>
                          <ArrowRight
                            className={`h-3.5 w-3.5 transition-transform group-hover:translate-x-1 ${
                              isEven ? "md:rotate-180 md:group-hover:-translate-x-1" : ""
                            }`}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Empty Space for the other side (Desktop only) */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Skeleton Loading Card Indicator */}
          {isLoadingMore && (
            <div className="relative flex items-center md:flex-row flex-col md:gap-8 animate-pulse">
              {/* Pulsing Node */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-muted border-4 border-primary/50 z-10 -translate-x-[7px] md:-translate-x-1/2 mt-6 md:mt-0" />

              <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-12">
                <div className="rounded-2xl border border-border bg-card/60 p-6 md:p-8 space-y-4">
                  <div className="flex gap-2">
                    <div className="h-6 w-20 bg-muted rounded-full" />
                    <div className="h-6 w-24 bg-muted rounded-full" />
                  </div>
                  <div className="h-6 w-3/4 bg-muted rounded-lg" />
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-muted/80 rounded" />
                    <div className="h-4 w-4/5 bg-muted/80 rounded" />
                  </div>
                </div>
              </div>
              <div className="hidden md:block md:w-1/2" />
            </div>
          )}
        </div>

        {/* Sentinel Anchor for Intersection Observer */}
        <div ref={sentinelRef} className="h-4 w-full" />
      </div>

      {/* Timeline End Milestone & Scroll to Top */}
      <div className="mt-16 text-center space-y-4">
        {!hasMore && (
          <div className="inline-flex flex-col items-center gap-3 rounded-2xl border border-border bg-card/70 backdrop-blur-md p-6 max-w-md mx-auto shadow-xs">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Globe className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">
                {locale === "id"
                  ? "Anda telah mencapai akhir lini masa sejarah"
                  : "You have reached the end of the historical timeline"}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {locale === "id"
                  ? `Seluruh ${filteredEvents.length} peristiwa penting dalam era ini telah ditampilkan.`
                  : `All ${filteredEvents.length} key events in this era have been displayed.`}
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-2 inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground hover:bg-muted hover:text-primary transition-colors"
            >
              <ArrowUp className="h-3.5 w-3.5" />
              <span>{locale === "id" ? "Kembali ke Awal Timeline" : "Back to Top"}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

