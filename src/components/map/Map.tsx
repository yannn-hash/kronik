"use client";

import { MapContainer, TileLayer, Marker, Popup, Polygon, Tooltip, useMap, useMapEvents } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { useEffect, useRef, useState, useMemo } from "react";
import L from "leaflet";
import { type HistoricalEvent, type Civilization } from "@/types/history";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { ERAS } from "@/data/eras";
import { TAG_TRANSLATIONS } from "@/data/tags";
import { CIVILIZATIONS } from "@/data/civilizations";
import { ArrowRight, Landmark, MapPin } from "lucide-react";
import { ConfidenceBadge } from "@/components/article/ConfidenceBadge";

const createClusterCustomIcon = function (cluster: any) {
  const count = cluster.getChildCount();
  let radius = 36;
  if (count > 10) radius = 42;
  if (count > 50) radius = 50;

  return L.divIcon({
    html: `<div class="flex items-center justify-center rounded-full font-bold shadow-lg border-2 transition-all hover:scale-110" 
            style="background-color: var(--card); color: var(--foreground); border-color: var(--primary); 
                   width: ${radius}px; height: ${radius}px; font-size: ${radius > 40 ? '1rem' : '0.875rem'};">
             <span>${count}</span>
           </div>`,
    className: 'custom-marker-cluster bg-transparent',
    iconSize: L.point(radius, radius, true),
  });
};

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
      <Popup className="rounded-2xl overflow-hidden border-0 shadow-xl">
        <div className="flex flex-col p-4 max-w-[280px]">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: civ.color }}></span>
            <h3 className="font-bold text-sm text-foreground leading-tight">{civ.name[locale]}</h3>
          </div>
          <p className="text-xs text-primary font-semibold mb-2 bg-primary/10 px-2 py-0.5 rounded border border-primary/20 inline-block w-fit">
            {civ.yearPeak[locale]}
          </p>
          <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{civ.summary[locale]}</p>
          <div className="flex items-center gap-1.5 text-xs text-foreground border-t border-border pt-2 font-medium">
            <Landmark className="h-3.5 w-3.5 text-primary shrink-0" />
            <span>{locale === "id" ? "Ibu Kota: " : "Capital: "}<strong>{civ.capital.name[locale]}</strong></span>
          </div>
        </div>
      </Popup>
    </Polygon>
  );
}

function EventMarker({ 
  event, 
  isActive, 
  locale 
}: { 
  event: HistoricalEvent, 
  isActive: boolean, 
  locale: "id"|"en" 
}) {
  const markerRef = useRef<L.Marker>(null);
  
  useEffect(() => {
    if (isActive && markerRef.current) {
      markerRef.current.openPopup();
    }
  }, [isActive]);

  const displayYear =
    Math.abs(event.year) +
    (event.year < 0
      ? locale === "id"
        ? " SM"
        : " BCE"
      : locale === "id"
      ? " M"
      : " CE");

  return (
    <Marker 
      ref={markerRef}
      position={[event.location.lat, event.location.lng]}
      icon={eraIcons[event.era]}
    >
      <Popup 
        className="rounded-2xl overflow-hidden border-0 shadow-2xl"
        autoPan={true}
        autoPanPadding={L.point(25, 25)}
      >
        <div className="flex flex-col p-4 w-[280px] sm:w-[300px]">
          {/* Header with Confidence Badge & Year */}
          <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
            <ConfidenceBadge level={event.confidence} locale={locale} />
            <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-[11px] font-semibold text-muted-foreground">
              {displayYear}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-bold text-base mb-1.5 text-foreground leading-snug">
            {event.title[locale]}
          </h3>

          {/* Summary */}
          <p className="text-xs text-muted-foreground mb-3 leading-relaxed line-clamp-3">
            {event.summary[locale]}
          </p>

          {/* Location */}
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
            <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
            <span className="truncate font-medium">{event.location.name[locale]}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-3.5">
            {event.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] uppercase font-bold tracking-wider bg-primary/10 text-primary px-2 py-0.5 rounded-md"
              >
                {TAG_TRANSLATIONS[tag]?.[locale] || tag.replace("-", " ")}
              </span>
            ))}
          </div>

          {/* Direct Article CTA */}
          <div className="border-t border-border pt-3">
            <Link 
              href={{ pathname: "/artikel/[slug]", params: { slug: event.slug[locale] } }}
              className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold !text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:scale-[1.01] active:scale-[0.99]"
            >
              <span className="!text-primary-foreground">{locale === "id" ? "Buka Artikel Lengkap" : "Read Full Article"}</span>
              <ArrowRight className="h-3.5 w-3.5 !text-primary-foreground" />
            </Link>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}
function ZoomTracker({ onZoomChange }: { onZoomChange: (zoom: number) => void }) {
  const map = useMapEvents({
    zoomend: () => {
      onZoomChange(map.getZoom());
    },
  });
  
  useEffect(() => {
    onZoomChange(map.getZoom());
  }, [map, onZoomChange]);

  return null;
}

interface MapProps {
  events: HistoricalEvent[];
  activeEventId?: string | null;
  showCivilizations?: boolean;
  selectedEra?: string | null;
}

export default function Map({ events, activeEventId, showCivilizations = true, selectedEra }: MapProps) {
  const locale = useLocale() as "id" | "en";
  const [currentZoom, setCurrentZoom] = useState(3);

  // Filter events based on LOD (Level of Detail)
  const lodEvents = useMemo(() => {
    if (currentZoom <= 4) {
      // Skala benua/dunia: Hanya tampilkan verified
      return events.filter(e => e.confidence === "verified");
    } else if (currentZoom <= 6) {
      // Skala negara: Tampilkan verified & probable
      return events.filter(e => e.confidence === "verified" || e.confidence === "probable");
    } else {
      // Skala lokal/kota: Tampilkan semua
      return events;
    }
  }, [events, currentZoom]);

  const visibleCivilizations = showCivilizations && currentZoom < 7
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
        <ZoomTracker onZoomChange={setCurrentZoom} />
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
        <MarkerClusterGroup 
          chunkedLoading 
          iconCreateFunction={createClusterCustomIcon}
          maxClusterRadius={60}
          showCoverageOnHover={false}
          spiderfyOnMaxZoom={true}
        >
          {lodEvents.map((event) => (
            <EventMarker 
              key={event.id}
              event={event}
              isActive={activeEventId === event.id}
              locale={locale}
            />
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}
