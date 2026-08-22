"use client";

import dynamic from "next/dynamic";
import { useLocale } from "next-intl";
import { type HistoricalEvent } from "@/types/history";

function MapLoading() {
  const locale = useLocale();
  return (
    <div className="h-full w-full bg-muted flex items-center justify-center animate-pulse">
      <div className="text-muted-foreground font-medium">
        {locale === "id" ? "Memuat Peta..." : "Loading Map..."}
      </div>
    </div>
  );
}

// Dynamically import the map component with ssr disabled
// Leaflet uses the window object which is not available during SSR
const Map = dynamic(() => import("./Map"), { 
  ssr: false,
  loading: () => <MapLoading />
});

interface DynamicMapProps {
  events: HistoricalEvent[];
  activeEventId?: string | null;
  showCivilizations?: boolean;
  selectedEra?: string | null;
}

export function DynamicMap({ events, activeEventId, showCivilizations, selectedEra }: DynamicMapProps) {
  return (
    <Map 
      events={events} 
      activeEventId={activeEventId} 
      showCivilizations={showCivilizations}
      selectedEra={selectedEra}
    />
  );
}
