"use client";

import { ERAS } from "@/data/eras";
import { useLocale } from "next-intl";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface TimelineProps {
  selectedEra: string | null;
  onSelectEra: (eraId: string | null) => void;
}

export function Timeline({ selectedEra, onSelectEra }: TimelineProps) {
  const locale = useLocale() as "id" | "en";

  return (
    <div className="bg-card border-t border-border p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-10 relative">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
          <h2 className="text-lg font-bold text-foreground">Timeline Peradaban</h2>
          
          <button
            onClick={() => onSelectEra(null)}
            className={cn(
              "text-sm font-medium px-4 py-1.5 rounded-full transition-colors",
              selectedEra === null 
                ? "bg-foreground text-background" 
                : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
            )}
          >
            {locale === "id" ? "Semua Era" : "All Eras"}
          </button>
        </div>

        <div className="relative">
          {/* Horizontal Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-muted -translate-y-1/2 rounded-full hidden md:block"></div>

          <div className="flex flex-wrap md:flex-nowrap justify-between gap-2 md:gap-4 relative z-10">
            {ERAS.map((era, index) => {
              const isSelected = selectedEra === era.id;
              
              return (
                <div key={era.id} className="flex-1 min-w-[120px] flex flex-col items-center group cursor-pointer" onClick={() => onSelectEra(era.id)}>
                  {/* Timeline Node */}
                  <div 
                    className={cn(
                      "w-4 h-4 rounded-full mb-3 border-4 bg-card transition-all duration-300 z-10 hidden md:block",
                      isSelected ? "scale-150 shadow-md" : "group-hover:scale-125"
                    )}
                    style={{ borderColor: era.color }}
                  ></div>

                  {/* Card */}
                  <div 
                    className={cn(
                      "w-full text-center p-3 rounded-lg border-2 transition-all duration-300",
                      isSelected 
                        ? "shadow-md bg-card/80 backdrop-blur-sm" 
                        : "border-border bg-muted/50 hover:border-primary/30"
                    )}
                    style={{ borderColor: isSelected ? era.color : undefined }}
                  >
                    <span className="block text-sm font-bold text-foreground mb-1">{era.label[locale]}</span>
                    <span className="block text-xs text-muted-foreground font-medium">
                      {Math.abs(era.yearStart)}{era.yearStart < 0 ? (locale === 'id' ? ' SM' : ' BCE') : (locale === 'id' ? ' M' : ' CE')} - 
                      {Math.abs(era.yearEnd)}{era.yearEnd < 0 ? (locale === 'id' ? ' SM' : ' BCE') : (locale === 'id' ? ' M' : ' CE')}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
