"use client";

import { useEffect, useState } from "react";
import { getFactOfTheDay, type DailyFact } from "@/data/facts";
import { Lightbulb, Quote, ExternalLink } from "lucide-react";
import { Link } from "@/i18n/routing";

interface DailyFactProps {
  locale: "id" | "en";
}

export function DailyFactComponent({ locale }: DailyFactProps) {
  const [fact, setFact] = useState<DailyFact | null>(null);

  useEffect(() => {
    setFact(getFactOfTheDay());
  }, []);

  if (!fact) return null; // Wait for client render to avoid hydration mismatch on date-based logic

  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <div className="relative overflow-hidden rounded-3xl bg-primary/5 px-6 py-10 sm:px-12 sm:py-16 border border-primary/10 shadow-sm">
        {/* Decorative elements */}
        <div className="absolute -right-8 -top-8 text-primary/10">
          <Quote className="h-32 w-32 rotate-12" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            <Lightbulb className="h-4 w-4" />
            {locale === "id" ? "Fakta Sejarah Hari Ini" : "History Fact of the Day"}
          </div>
          
          <p className="mb-8 max-w-2xl text-xl font-medium leading-relaxed text-foreground sm:text-2xl md:text-3xl">
            &ldquo;{fact.fact[locale]}&rdquo;
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <span className="font-semibold">{locale === "id" ? "Era:" : "Era:"}</span> {fact.era}
            </span>
            <span className="hidden sm:inline-block text-border">•</span>
            <span className="inline-flex items-center gap-1 italic">
              {locale === "id" ? "Sumber:" : "Source:"} {fact.source}
            </span>
          </div>

          <div className="mt-8">
            <Link 
              href="/peta" 
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline hover:underline-offset-4"
            >
              {locale === "id" ? "Eksplorasi Sejarah di Peta" : "Explore History on Map"}
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
