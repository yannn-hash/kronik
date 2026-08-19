import { type HistoricalEvent } from "@/types/history";
import { Link } from "@/i18n/routing";
import { HISTORICAL_EVENTS } from "@/data/events";
import { ArrowRight, BookOpen } from "lucide-react";

interface RelatedArticlesProps {
  currentEvent: HistoricalEvent;
  locale: "id" | "en";
}

export function RelatedArticles({ currentEvent, locale }: RelatedArticlesProps) {
  // Find related events
  const related = HISTORICAL_EVENTS
    .filter(e => e.id !== currentEvent.id)
    .map(e => {
      // Calculate relevance score
      let score = 0;
      // 1 point for each shared tag
      const sharedTags = e.tags.filter(t => currentEvent.tags.includes(t));
      score += sharedTags.length * 2;
      // 1 point for same era
      if (e.era === currentEvent.era) score += 1;
      
      return { event: e, score };
    })
    .filter(item => item.score > 0) // Must have at least some relation
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(item => item.event);

  if (related.length === 0) return null;

  return (
    <div className="mt-16 border-t border-border pt-12">
      <h3 className="mb-6 flex items-center gap-2 text-2xl font-bold text-foreground">
        <BookOpen className="h-6 w-6 text-primary" />
        {locale === "id" ? "Artikel Terkait" : "Related Articles"}
      </h3>
      
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {related.map((event) => (
          <Link
            key={event.id}
            href={{ pathname: "/artikel/[slug]", params: { slug: event.slug[locale] } }}
            className="group flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
                {locale === 'id' ? event.era : event.era} {/* Can be localized further if era labels are mapped */}
              </span>
              <span className="text-xs font-medium text-muted-foreground">
                {Math.abs(event.year)} {event.year < 0 ? (locale === 'id' ? 'SM' : 'BCE') : (locale === 'id' ? 'M' : 'CE')}
              </span>
            </div>
            
            <h4 className="mb-2 font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {event.title[locale]}
            </h4>
            
            <p className="mb-4 text-sm text-muted-foreground line-clamp-2 flex-grow">
              {event.summary[locale]}
            </p>
            
            <div className="mt-auto flex items-center gap-1 text-sm font-semibold text-primary">
              {locale === "id" ? "Baca selengkapnya" : "Read more"}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
