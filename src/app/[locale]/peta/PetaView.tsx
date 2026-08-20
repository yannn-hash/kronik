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
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 items-end">
        {/* Civilization Layer Toggle Button */}
        <button
          onClick={() => setShowCivilizations(!showCivilizations)}
          className={cn(
            "flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-xl shadow-lg backdrop-blur-md border transition-all duration-200",
            showCivilizations
              ? "bg-primary text-primary-foreground border-primary shadow-primary/20"
              : "bg-card/90 text-muted-foreground border-border hover:text-foreground"
          )}
          title={locale === "id" ? "Beralih Lapisan Wilayah Kekaisaran" : "Toggle Empire Boundaries Overlay"}
        >
          <Layers className="h-4 w-4" />
          <span>{locale === "id" ? "Lapisan Peradaban" : "Civilization Layer"}</span>
          <span className={cn(
            "w-2 h-2 rounded-full",
            showCivilizations ? "bg-white animate-pulse" : "bg-muted-foreground"
          )}></span>
        </button>

        {/* Floating Tag Filter */}
        <div className="bg-card/90 backdrop-blur-md rounded-xl shadow-lg border border-border p-3 transition-all duration-300 w-full sm:w-[280px]">
          <button 
            onClick={() => setIsTagsOpen(!isTagsOpen)}
            className="flex items-center justify-between w-full text-sm font-semibold text-foreground hover:text-primary transition-colors"
          >
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4" />
              {locale === "id" ? "Filter Topik" : "Topic Filter"}
              {selectedTag && (
                <span className="ml-2 text-xs font-normal text-muted-foreground capitalize">
                  ({TAG_TRANSLATIONS[selectedTag]?.[locale] || selectedTag.replace("-", " ")})
                </span>
              )}
            </div>
            <span className="text-muted-foreground text-xs">{isTagsOpen ? "−" : "+"}</span>
          </button>
          
          {isTagsOpen && (
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
