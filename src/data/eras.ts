import { type EraInfo } from "@/types/history";

export const ERAS: EraInfo[] = [
  {
    id: "ancient",
    label: { id: "Kuno", en: "Ancient" },
    color: "#C4A265",
    yearStart: -3500,
    yearEnd: -500,
  },
  {
    id: "classical",
    label: { id: "Klasik", en: "Classical" },
    color: "#8B4513",
    yearStart: -500,
    yearEnd: 500,
  },
  {
    id: "medieval",
    label: { id: "Pertengahan", en: "Medieval" },
    color: "#4A6741",
    yearStart: 500,
    yearEnd: 1500,
  },
  {
    id: "early-modern",
    label: { id: "Modern Awal", en: "Early Modern" },
    color: "#6B4C8A",
    yearStart: 1500,
    yearEnd: 1800,
  },
  {
    id: "modern",
    label: { id: "Modern", en: "Modern" },
    color: "#2C5F8A",
    yearStart: 1800,
    yearEnd: 2000,
  },
];

export function getEraByYear(year: number): EraInfo | undefined {
  return ERAS.find((era) => year >= era.yearStart && year < era.yearEnd);
}

export function getEraById(id: string): EraInfo | undefined {
  return ERAS.find((era) => era.id === id);
}
