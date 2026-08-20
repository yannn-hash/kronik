"use client";

import { MapContainer, TileLayer, Marker, Popup, Polygon, Tooltip, useMap } from "react-leaflet";
import { useEffect, useRef } from "react";
import L from "leaflet";
import { type HistoricalEvent, type Civilization } from "@/types/history";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { ERAS } from "@/data/eras";
import { TAG_TRANSLATIONS } from "@/data/tags";
import { CIVILIZATIONS } from "@/data/civilizations";
import { ArrowRight, Landmark } from "lucide-react";

const createCustomIcon = (color: string) => {
  return L.divIcon({
    className: "custom-marker",
    html: `
      <div style="
        background-color: ${color};
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 3px 6px rgba(0,0,0,0.4);
        transition: transform 0.2s;
      " class="hover:scale-110"></div>
    `,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -12],
  });
};

const eraIcons = ERAS.reduce((acc, era) => {
  acc[era.id] = createCustomIcon(era.color);
  return acc;
}, {} as Record<string, L.DivIcon>);

// Helper component to auto-pan map when events change
function MapUpdater({ events, activeEventId }: { events: HistoricalEvent[], activeEventId?: string | null }) {
  const map = useMap();
  
  useEffect(() => {
    if (activeEventId) {
      const activeEvent = events.find(e => e.id === activeEventId);
      if (activeEvent) {
        map.flyTo([activeEvent.location.lat + 6, activeEvent.location.lng], 5, { duration: 1.5 });
      }
    } else {
      if (events.length === 0) return;
      
      if (events.length === 1) {
        map.flyTo([events[0].location.lat, events[0].location.lng], 5, { duration: 1.5 });
      } else {
        const bounds = L.latLngBounds(events.map(e => [e.location.lat, e.location.lng]));
        map.flyToBounds(bounds, { padding: [50, 50], duration: 1.5, maxZoom: 6 });
      }
    }
  }, [events, activeEventId, map]);
  
  return null;
}

function CivilizationOverlay({ civ, locale }: { civ: Civilization, locale: "id" | "en" }) {
  return (
    <Polygon
      positions={civ.boundaries}
      pathOptions={{
        color: civ.color,
        fillColor: civ.color,
        fillOpacity: 0.18,
        weight: 2,
        dashArray: "5, 5",
      }}
      eventHandlers={{
        mouseover: (e) => {
          const layer = e.target;
          layer.setStyle({
            fillOpacity: 0.35,
            weight: 3,
            dashArray: "",
          });
        },
        mouseout: (e) => {
          const layer = e.target;
          layer.setStyle({
            fillOpacity: 0.18,
            weight: 2,
            dashArray: "5, 5",
          });
        },
      }}
    >
      <Tooltip sticky className="rounded-lg shadow-lg border-0 bg-card/95 backdrop-blur-md p-2">
        <div className="text-xs font-sans">
          <p className="font-bold text-foreground flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: civ.color }}></span>
            {civ.name[locale]}
          </p>
          <p className="text-[11px] text-muted-foreground mt-0.5 font-medium">{civ.yearPeak[locale]}</p>
        </div>
      </Tooltip>
      <Popup className="rounded-xl overflow-hidden border-0 shadow-xl">
        <div className="flex flex-col -m-[13px] max-w-[280px] p-4">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: civ.color }}></span>
            <h3 className="font-bold text-sm text-slate-900 leading-tight">{civ.name[locale]}</h3>
          </div>
          <p className="text-xs text-amber-700 font-semibold mb-2 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 inline-block">
            {civ.yearPeak[locale]}
          </p>
          <p className="text-xs text-slate-600 mb-3 leading-relaxed">{civ.summary[locale]}</p>
          <div className="flex items-center gap-1.5 text-xs text-slate-700 border-t border-slate-200 pt-2 font-medium">
            <Landmark className="h-3.5 w-3.5 text-primary shrink-0" />
            <span>{locale === "id" ? "Ibu Kota: " : "Capital: "}<strong>{civ.capital.name[locale]}</strong></span>
          </div>
        </div>
      </Popup>
    </Polygon>
  );
}

function EventMarker({ event, isActive, locale }: { event: HistoricalEvent, isActive: boolean, locale: "id"|"en" }) {
  const markerRef = useRef<L.Marker>(null);
  
  useEffect(() => {
    if (isActive && markerRef.current) {
      markerRef.current.openPopup();
    }
  }, [isActive]);

  return (
    <Marker 
      ref={markerRef}
      position={[event.location.lat, event.location.lng]}
      icon={eraIcons[event.era]}
    >
      <Popup className="rounded-xl overflow-hidden border-0 shadow-xl">
        <div className="flex flex-col -m-[13px] max-w-[280px]">
          <div className={`px-4 pb-4 ${!event.image ? 'pt-4' : ''}`}>
            <h3 className="font-bold text-base mb-1 text-slate-900 leading-tight">{event.title[locale]}</h3>
            <p className="text-sm text-slate-600 mb-3 leading-snug">{event.summary[locale]}</p>
            <div className="flex flex-wrap gap-1 mb-3">
              {event.tags.map(tag => (
                <span key={tag} className="text-[10px] uppercase tracking-wider font-bold bg-primary/10 text-primary px-1.5 py-0.5 rounded-sm">
                  {TAG_TRANSLATIONS[tag]?.[locale] || tag.replace("-", " ")}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between border-t border-slate-200 pt-3">
              <span className="text-xs font-semibold bg-slate-100 px-2 py-1 rounded-md text-slate-700 border border-slate-200">
                {Math.abs(event.year)} {event.year < 0 ? (locale === 'id' ? 'SM' : 'BCE') : (locale === 'id' ? 'M' : 'CE')}
              </span>
              <Link 
                href={{ pathname: "/artikel/[slug]", params: { slug: event.slug[locale] } }}
                className="text-xs font-semibold text-primary flex items-center gap-1 hover:underline group"
              >
                Detail <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

interface MapProps {
  events: HistoricalEvent[];
  activeEventId?: string | null;
  showCivilizations?: boolean;
  selectedEra?: string | null;
}

export default function Map({ events, activeEventId, showCivilizations = true, selectedEra }: MapProps) {
  const locale = useLocale() as "id" | "en";

  const visibleCivilizations = showCivilizations
    ? selectedEra
      ? CIVILIZATIONS.filter(civ => civ.era === selectedEra)
      : CIVILIZATIONS
    : [];

  return (
    <div className="h-full w-full relative z-0">
      <MapContainer 
        center={[30, 10]} 
        zoom={3} 
        style={{ height: "100%", width: "100%", background: "#e5e5f7", zIndex: 0 }}
        minZoom={2}
        maxBounds={[[-90, -180], [90, 180]]}
        scrollWheelZoom={false}
      >
        <MapUpdater events={events} activeEventId={activeEventId} />
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />

        {/* Civilization Polygons Layer */}
        {visibleCivilizations.map(civ => (
          <CivilizationOverlay key={civ.id} civ={civ} locale={locale} />
        ))}

        {/* Historical Events Markers */}
        {events.map((event) => (
          <EventMarker 
            key={event.id}
            event={event}
            isActive={activeEventId === event.id}
            locale={locale}
          />
        ))}
      </MapContainer>
    </div>
  );
}
