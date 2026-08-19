import { type Reference } from "@/types/history";
import { BookMarked, ExternalLink } from "lucide-react";

interface ReferencesProps {
  references: Reference[];
  locale: "id" | "en";
}

export function References({ references, locale }: ReferencesProps) {
  if (!references || references.length === 0) return null;

  return (
    <div className="mt-12 rounded-xl border border-border bg-muted/30 p-6">
      <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-foreground">
        <BookMarked className="h-5 w-5 text-primary" />
        {locale === "id" ? "Sumber & Referensi" : "Sources & References"}
      </h3>
      <ul className="space-y-3">
        {references.map((ref, index) => (
          <li key={index} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 text-sm text-muted-foreground">
            <span className="font-mono text-primary/50 shrink-0">[{index + 1}]</span>
            <div>
              <span className="font-semibold text-foreground mr-1">{ref.author}.</span>
              <span className="italic mr-1">{ref.title}.</span>
              {ref.publisher && <span>{ref.publisher},</span>}
              <span className="ml-1">{ref.year}.</span>
              
              {ref.url && (
                <a 
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 inline-flex items-center gap-1 text-primary hover:underline"
                >
                  {locale === "id" ? "Tautan luar" : "External link"}
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
