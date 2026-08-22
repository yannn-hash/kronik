"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { DynamicMap } from "@/components/map/DynamicMap";
import { Timeline } from "@/components/timeline/Timeline";
import { HISTORICAL_EVENTS } from "@/data/events";
import { TAG_TRANSLATIONS } from "@/data/tags";
import { useLocale } from "next-intl";
import { cn } from "@/lib/utils";
import { Tag, Layers } from "lucide-react";

export function PetaView() {
  const [selectedEra, setSelectedEra] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [showCivilizations, setShowCivilizations] = useState(true);
  const locale = useLocale() as "id" | "en";

  const [isTagsOpen, setIsTagsOpen] = useState(false);
  
  // Animation states
  const [activeEventId, setActiveEventId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const stopAnimation = () => {
    setIsPlaying(false);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const startAnimation = () => {
    setIsPlaying(true);
    let currentIndex = activeEventId 
      ? HISTORICAL_EVENTS.findIndex(e => e.id === activeEventId)
      : -1;
      
    if (currentIndex === -1 || currentIndex >= HISTORICAL_EVENTS.length - 1) {
      currentIndex = 0;
    }
    
    const playNext = (index: number) => {
      const event = HISTORICAL_EVENTS[index];
      setSelectedEra(event.era);
      setActiveEventId(event.id);
    };
    
    playNext(currentIndex);

    timerRef.current = setInterval(() => {
      currentIndex++;
      if (currentIndex >= HISTORICAL_EVENTS.length) {
        stopAnimation();
      } else {
        playNext(currentIndex);
      }
    }, 4500);
  };

  const toggleAnimation = () => {
    if (isPlaying) stopAnimation();
    else startAnimation();
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleEraSelect = (eraId: string | null) => {
    stopAnimation();
    setSelectedEra(eraId);
    setActiveEventId(null);
  };

  const handleTagSelect = (tag: string | null) => {
    stopAnimation();
    setSelectedTag(tag);
    setIsTagsOpen(false);
    setActiveEventId(null);
  };

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    HISTORICAL_EVENTS.forEach(event => {
      event.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  // Filter events based on selected era and selected tag
  const filteredEvents = useMemo(() => {
    let result = HISTORICAL_EVENTS;
    if (selectedEra) {
      result = result.filter(e => e.era === selectedEra);
    }
    if (selectedTag) {
      result = result.filter(e => e.tags.includes(selectedTag));
    }
    return result;
  }, [selectedEra, selectedTag]);

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] relative">
      <div className="flex-1 relative z-0">
        <DynamicMap 
          events={filteredEvents} 
          activeEventId={activeEventId}
          showCivilizations={showCivilizations}
          selectedEra={selectedEra}
        />
      </div>

      {/* Floating Control Bar: Tags & Civilization Layer */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-3 items-end">
        {/* Civilization Layer Toggle Button (Icon Only) */}
        <button
          onClick={() => setShowCivilizations(!showCivilizations)}
          className={cn(
            "flex items-center justify-center p-3 rounded-xl shadow-lg backdrop-blur-md border transition-all duration-200 relative group",
            showCivilizations
              ? "bg-primary text-primary-foreground border-primary shadow-primary/20"
              : "bg-card/90 text-muted-foreground border-border hover:text-foreground hover:bg-card"
          )}
          title={locale === "id" ? "Beralih Lapisan Wilayah Kekaisaran" : "Toggle Empire Boundaries Overlay"}
        >
          <Layers className="h-5 w-5" />
          <span className={cn(
            "absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full",
            showCivilizations ? "bg-white animate-pulse" : "hidden"
          )}></span>
        </button>

        {/* Floating Tag Filter (Minimized/Expanded) */}
        <div className={cn(
          "bg-card/90 backdrop-blur-md rounded-xl shadow-lg border border-border transition-all duration-300 overflow-hidden",
          isTagsOpen ? "p-3 w-[260px] sm:w-[280px]" : "p-0 w-auto"
        )}>
          {isTagsOpen ? (
            <>
              <button 
                onClick={() => setIsTagsOpen(false)}
                className="flex items-center justify-between w-full text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Tag className="h-4 w-4" />
                  {locale === "id" ? "Filter Topik" : "Topic Filter"}
                  {selectedTag && (
                    <span className="ml-1 text-xs font-normal text-muted-foreground capitalize">
                      ({TAG_TRANSLATIONS[selectedTag]?.[locale] || selectedTag.replace("-", " ")})
                    </span>
                  )}
                </div>
                <span className="text-muted-foreground font-bold">×</span>
              </button>
              
              <div className="flex flex-wrap gap-1.5 mt-3 max-h-[220px] overflow-y-auto scrollbar-hide">
                <button
                  onClick={() => handleTagSelect(null)}
                  className={cn(
                    "px-2.5 py-1 text-xs font-medium rounded-full transition-colors",
                    selectedTag === null
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  )}
                >
                  {locale === "id" ? "Semua" : "All"}
                </button>
                {allTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => handleTagSelect(tag)}
                    className={cn(
                      "px-2.5 py-1 text-xs font-medium rounded-full transition-colors capitalize",
                      selectedTag === tag
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    )}
                  >
                    {TAG_TRANSLATIONS[tag]?.[locale] || tag.replace("-", " ")}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <button 
              onClick={() => setIsTagsOpen(true)}
              className={cn(
                "flex items-center justify-center p-3 text-muted-foreground hover:text-foreground transition-colors relative",
                selectedTag && "text-primary"
              )}
              title={locale === "id" ? "Filter Topik" : "Topic Filter"}
            >
              <Tag className="h-5 w-5" />
              {selectedTag && (
                <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              )}
            </button>
          )}
        </div>
      </div>

      <div className="shrink-0 relative z-10">
        <Timeline 
          selectedEra={selectedEra} 
          onSelectEra={handleEraSelect}
          isPlaying={isPlaying}
          onTogglePlay={toggleAnimation} 
        />
      </div>
    </div>
  );
}
