"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { DynamicMap } from "@/components/map/DynamicMap";
import { Timeline } from "@/components/timeline/Timeline";
import { HISTORICAL_EVENTS } from "@/data/events";
import { TAG_TRANSLATIONS } from "@/data/tags";
import { useLocale } from "next-intl";
import { cn } from "@/lib/utils";
import { Tag } from "lucide-react";

export function PetaView() {
  const [selectedEra, setSelectedEra] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const locale = useLocale() as "id" | "en";

  const [isTagsOpen, setIsTagsOpen] = useState(false);
  
  // Animation states
  const [activeEventId, setActiveEventId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const stopAnimation = () => {
    setIsPlaying(false);
    if (timerRef.current) clearInterval(timerRef.current);
    // Optional: we leave the activeEventId as is, so the popup stays open
  };

  const startAnimation = () => {
    setIsPlaying(true);
    // Find where we are currently
    let currentIndex = activeEventId 
      ? HISTORICAL_EVENTS.findIndex(e => e.id === activeEventId)
      : -1;
      
    if (currentIndex === -1 || currentIndex >= HISTORICAL_EVENTS.length - 1) {
      currentIndex = 0;
    }
    
    const playNext = (index: number) => {
      const event = HISTORICAL_EVENTS[index];
      // Select era to highlight timeline
      setSelectedEra(event.era);
      // Select event to fly map and open popup
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
    }, 4500); // 4.5s gives time to read and fly
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
    setActiveEventId(null); // clear specific event when manually clicking era
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
    // When playing animation, we actually want ALL events in the current era to show up,
    // so we don't break the standard filter logic. 
    // activeEventId will just be highlighted among the era's events.
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
        <DynamicMap events={filteredEvents} activeEventId={activeEventId} />
      </div>

      {/* Floating Tag Filter */}
      <div className="absolute top-4 right-4 z-10">
        <div className="bg-card/90 backdrop-blur-md rounded-xl shadow-lg border border-border p-3 transition-all duration-300 w-full sm:max-w-[300px]">
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
            <div className="flex flex-wrap gap-1.5 mt-3 max-h-[250px] overflow-y-auto scrollbar-hide">
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
