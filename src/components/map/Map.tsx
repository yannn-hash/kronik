"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";
import { type HistoricalEvent } from "@/types/history";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { ERAS } from "@/data/eras";
import { TAG_TRANSLATIONS } from "@/data/tags";
import { ArrowRight } from "lucide-react";

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
function MapUpdater({ events }: { events: HistoricalEvent[] }) {
  const map = useMap();
  
  useEffect(() => {
    if (events.length === 0) return;
    
    if (events.length === 1) {
      map.flyTo([events[0].location.lat, events[0].location.lng], 5, { duration: 1.5 });
    } else {
      const bounds = L.latLngBounds(events.map(e => [e.location.lat, e.location.lng]));
      map.flyToBounds(bounds, { padding: [50, 50], duration: 1.5, maxZoom: 6 });
    }
  }, [events, map]);
  
  return null;
}

interface MapProps {
  events: HistoricalEvent[];
}

export default function Map({ events }: MapProps) {
  const locale = useLocale() as "id" | "en";

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
        <MapUpdater events={events} />
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        {events.map((event) => (
          <Marker 
            key={event.id} 
            position={[event.location.lat, event.location.lng]}
            icon={eraIcons[event.era]}
          >
            <Popup className="rounded-lg overflow-hidden border-0 shadow-lg">
              <div className="p-1 max-w-[280px]">
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
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
