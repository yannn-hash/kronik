"use client";

import { useState } from "react";
import { DynamicMap } from "@/components/map/DynamicMap";
import { Timeline } from "@/components/timeline/Timeline";
import { HISTORICAL_EVENTS } from "@/data/events";

export function PetaView() {
  const [selectedEra, setSelectedEra] = useState<string | null>(null);

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="flex-1 relative z-0">
        <DynamicMap events={HISTORICAL_EVENTS} selectedEra={selectedEra} />
      </div>
      <div className="shrink-0 relative z-10">
        <Timeline selectedEra={selectedEra} onSelectEra={setSelectedEra} />
      </div>
    </div>
  );
}
