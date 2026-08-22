"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { type HistoricalEvent, type ConfidenceLevel } from "@/types/history";
import { ERAS } from "@/data/eras";
import { ConfidenceBadge } from "@/components/article/ConfidenceBadge";
import { Link } from "@/i18n/routing";
import { Search, X, Calendar, MapPin, ArrowRight, ChevronDown, CheckCircle2, RotateCcw, HelpCircle, AlertTriangle, ShieldCheck, ShieldAlert, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ArticlesExplorerProps {
  events: HistoricalEvent[];
  locale: "id" | "en";
}

const PAGE_SIZE = 9;

export function ArticlesExplorer({ events, locale }: ArticlesExplorerProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEra, setSelectedEra] = useState<string | null>(null);
  const [confidenceFilter, setConfidenceFilter] = useState<ConfidenceLevel | "all">("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const confidenceOptions = [
    { id: "all", label: { id: "Semua Status", en: "All Statuses" }, icon: Shield, color: "text-foreground" },
    { id: "verified", label: { id: "Terverifikasi", en: "Verified" }, icon: ShieldCheck, color: "text-green-600 dark:text-green-400" },
    { id: "probable", label: { id: "Kemungkinan Besar", en: "Probable" }, icon: ShieldAlert, color: "text-blue-600 dark:text-blue-400" },
    { id: "disputed", label: { id: "Diperdebatkan", en: "Disputed" }, icon: HelpCircle, color: "text-orange-600 dark:text-orange-400" },
  ] as const;

  // Filter events based on search query, selected era, and confidence
  const filteredEvents = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return events.filter((event) => {
      // Confidence filter
      if (confidenceFilter !== "all" && event.confidence !== confidenceFilter) {
        return false;
      }

      // Era filter
      if (selectedEra && event.era !== selectedEra) {
        return false;
      }

      // Search query filter
      if (query) {
        const titleMatch = event.title[locale]?.toLowerCase().includes(query);
        const summaryMatch = event.summary[locale]?.toLowerCase().includes(query);
        const locationMatch = event.location?.name[locale]?.toLowerCase().includes(query);
        const tagMatch = event.tags?.some((tag) => tag.toLowerCase().includes(query));

        if (!titleMatch && !summaryMatch && !locationMatch && !tagMatch) {
          return false;
        }
      }

      return true;
    });
  }, [events, searchQuery, selectedEra, confidenceFilter, locale]);

  // Reset pagination when filter or search changes
  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setVisibleCount(PAGE_SIZE);
  };

  const handleEraSelect = (eraId: string | null) => {
    setSelectedEra(eraId);
    setVisibleCount(PAGE_SIZE);
  };

  const handleConfidenceSelect = (val: ConfidenceLevel | "all") => {
    setConfidenceFilter(val);
    setVisibleCount(PAGE_SIZE);
    setDropdownOpen(false);
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedEra(null);
    setConfidenceFilter("all");
    setVisibleCount(PAGE_SIZE);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + PAGE_SIZE);
  };

  const displayedEvents = filteredEvents.slice(0, visibleCount);
  const hasMore = visibleCount < filteredEvents.length;
  const progressPercent = Math.min(
    100,
    Math.round((displayedEvents.length / (filteredEvents.length || 1)) * 100)
  );

  const activeConfidence = confidenceOptions.find(o => o.id === confidenceFilter)!;
  const ActiveIcon = activeConfidence.icon;

  return (
    <div className="w-full min-w-0 space-y-8">
      {/* Search Input Bar & Confidence Filter */}
      <div className="w-full min-w-0 flex flex-col sm:flex-row items-center gap-4">
        <div className="relative w-full flex-1 min-w-0">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder={
              locale === "id"
                ? "Cari artikel, tokoh, atau lokasi..."
                : "Search articles, figures, or locations..."
            }
            className="w-full min-w-0 rounded-2xl border-2 border-primary/40 bg-card/95 backdrop-blur-2xl pl-12 pr-12 py-4 text-sm sm:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-xl hover:shadow-2xl hover:border-primary/60"
          />
          {searchQuery && (
            <button
              onClick={() => handleSearchChange("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-1.5 rounded-full bg-muted/50 hover:bg-muted transition-colors shrink-0"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        
        {/* Verification Dropdown */}
        <div className="relative shrink-0 w-full sm:w-auto" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex w-full sm:w-48 items-center justify-between gap-3 rounded-2xl border-2 border-border bg-card/95 px-4 py-4 text-sm font-semibold text-foreground transition-all hover:bg-muted focus:outline-none focus:border-primary/50"
          >
            <div className="flex items-center gap-2 truncate">
              <ActiveIcon className={cn("h-4 w-4 shrink-0", activeConfidence.color)} />
              <span className="truncate">{activeConfidence.label[locale]}</span>
            </div>
            <ChevronDown className={cn("h-4 w-4 shrink-0 transition-transform", dropdownOpen && "rotate-180")} />
          </button>
          
          {dropdownOpen && (
            <div className="absolute right-0 top-full mt-2 w-full sm:w-48 rounded-xl border border-border bg-card shadow-xl p-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
              {confidenceOptions.map((option) => {
                const isSelected = confidenceFilter === option.id;
                const OptIcon = option.icon;
                return (
                  <button
                    key={option.id}
                    onClick={() => handleConfidenceSelect(option.id as ConfidenceLevel | "all")}
                    className={cn(
                      "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors mb-0.5 last:mb-0",
                      isSelected
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-foreground hover:bg-muted"
                    )}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <OptIcon className={cn("h-4 w-4 shrink-0", option.color)} />
                      <span className="truncate">{option.label[locale]}</span>
                    </div>
                    {isSelected && <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Era Filter Pills (Normal Flow) */}
      <div className="w-full min-w-0 rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-4 sm:p-5 shadow-sm">
        <div className="flex flex-wrap items-center gap-2 w-full">
          <button
            onClick={() => handleEraSelect(null)}
            className={cn(
              "shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-all",
              selectedEra === null
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
            )}
          >
            {locale === "id" ? "Semua Era" : "All Eras"}
          </button>

          {ERAS.map((era) => {
            const isSelected = selectedEra === era.id;
            return (
              <button
                key={era.id}
                onClick={() => handleEraSelect(era.id)}
                className={cn(
                  "shrink-0 inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-all border",
                  isSelected
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-card text-muted-foreground border-border hover:bg-muted hover:text-foreground"
                )}
              >
                <span
                  className="h-2 w-2 rounded-full shrink-0"
                  style={{ backgroundColor: era.color }}
                />
                <span>{era.label[locale]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Header Counter & Progress Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-1">
        <div className="text-sm font-medium text-muted-foreground">
          {locale === "id" ? (
            <>
              Menampilkan{" "}
              <strong className="text-foreground">{displayedEvents.length}</strong> dari{" "}
              <strong className="text-foreground">{filteredEvents.length}</strong> artikel sejarah
            </>
          ) : (
            <>
              Showing{" "}
              <strong className="text-foreground">{displayedEvents.length}</strong> of{" "}
              <strong className="text-foreground">{filteredEvents.length}</strong> historical articles
            </>
          )}
        </div>

        {/* Progress percent indicator */}
        <div className="flex items-center gap-2.5 sm:w-48">
          <div className="h-1.5 flex-1 rounded-full bg-muted overflow-hidden">
            <motion.div
              className="h-full bg-primary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <span className="text-xs font-semibold text-muted-foreground shrink-0">
            {progressPercent}%
          </span>
        </div>
      </div>

      {/* Empty State */}
      {filteredEvents.length === 0 && (
        <div className="rounded-2xl border border-dashed border-border bg-card/50 p-12 text-center space-y-4">
          <div className="mx-auto h-12 w-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
            <Search className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-foreground">
              {locale === "id" ? "Tidak ada artikel ditemukan" : "No articles found"}
            </h3>
            <p className="text-sm text-muted-foreground mt-1 max-w-sm mx-auto">
              {locale === "id"
                ? `Tidak ada artikel yang cocok dengan kriteria pencarian "${searchQuery}". Coba kata kunci lain atau ubah filter era.`
                : `No articles match your search criteria "${searchQuery}". Try different keywords or change the era filter.`}
            </p>
          </div>
          <button
            onClick={handleResetFilters}
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-4 py-2 text-xs font-semibold text-primary hover:bg-primary/20 transition-colors"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>{locale === "id" ? "Reset Filter" : "Reset Filters"}</span>
          </button>
        </div>
      )}

      {/* Article Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {displayedEvents.map((event, index) => {
            const displayYear =
              Math.abs(event.year) +
              (event.year < 0
                ? locale === "id"
                  ? " SM"
                  : " BCE"
                : locale === "id"
                ? " M"
                : " CE");

            return (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: Math.min((index % PAGE_SIZE) * 0.04, 0.4) }}
              >
                <Link
                  href={{
                    pathname: "/artikel/[slug]",
                    params: { slug: event.slug[locale] },
                  }}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs transition-all hover:border-primary/50 hover:shadow-md hover:-translate-y-0.5"
                >
                  <div>
                    <div className="mb-4 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {displayYear}
                      </span>
                      <ConfidenceBadge level={event.confidence} locale={locale} />
                    </div>

                    <h2 className="mb-2 text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                      {event.title[locale]}
                    </h2>

                    <p className="mb-4 line-clamp-3 text-sm text-muted-foreground leading-relaxed">
                      {event.summary[locale]}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground truncate max-w-[170px]">
                      <MapPin className="h-3 w-3 shrink-0" />
                      <span className="truncate">{event.location.name[locale]}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:underline">
                      {locale === "id" ? "Baca" : "Read"}{" "}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Pagination Actions: Load More / End State */}
      {filteredEvents.length > 0 && (
        <div className="mt-12 text-center pb-8">
          {hasMore ? (
            <div className="space-y-3">
              <button
                onClick={handleLoadMore}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg hover:scale-105 active:scale-95"
              >
                <span>
                  {locale === "id"
                    ? `Muat 9 Artikel Berikutnya`
                    : `Load Next 9 Articles`}
                </span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <p className="text-xs text-muted-foreground">
                {locale === "id"
                  ? `Masih ada ${filteredEvents.length - displayedEvents.length} artikel tersisa`
                  : `${filteredEvents.length - displayedEvents.length} articles remaining`}
              </p>
            </div>
          ) : (
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-2 text-xs font-medium text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>
                {locale === "id"
                  ? `Seluruh ${filteredEvents.length} artikel telah ditampilkan`
                  : `All ${filteredEvents.length} articles have been loaded`}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
