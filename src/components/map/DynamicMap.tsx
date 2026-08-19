"use client";

import dynamic from "next/dynamic";
import { type HistoricalEvent } from "@/types/history";

// Dynamically import the map component with ssr disabled
// Leaflet uses the window object which is not available during SSR
const Map = dynamic(() => import("./Map"), { 
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-muted flex items-center justify-center animate-pulse">
      <div className="text-muted-foreground font-medium">Memuat Peta...</div>
    </div>
  )
});

interface DynamicMapProps {
  events: HistoricalEvent[];
  selectedEra?: string | null;
}

export function DynamicMap({ events, selectedEra }: DynamicMapProps) {
  return <Map events={events} selectedEra={selectedEra} />;
}
