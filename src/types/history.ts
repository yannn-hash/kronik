export type Era =
  | "ancient" // ~3500 SM - 500 SM
  | "classical" // 500 SM - 500 M
  | "medieval" // 500 M - 1500 M
  | "early-modern" // 1500 M - 1800 M
  | "modern"; // 1800 M - sekarang

export interface EraInfo {
  id: Era;
  label: { id: string; en: string };
  color: string;
  yearStart: number; // negative = SM/BCE
  yearEnd: number;
}

export type ConfidenceLevel = "verified" | "probable" | "disputed";

export interface HistoricalEvent {
  id: string;
  slug: string;
  title: { id: string; en: string };
  summary: { id: string; en: string };
  year: number; // negative = SM/BCE
  yearEnd?: number;
  era: Era;
  location: {
    name: { id: string; en: string };
    lat: number;
    lng: number;
  };
  image?: string;
  confidence: ConfidenceLevel;
  references: Reference[];
  tags: string[];
}

export interface Reference {
  title: string;
  author?: string;
  publisher?: string;
  year?: number;
  url?: string;
  type?: "book" | "journal" | "encyclopedia" | "archive" | "website";
  accessDate?: string;
}

export interface Article {
  slug: string;
  title: { id: string; en: string };
  summary: { id: string; en: string };
  era: Era;
  image?: string;
  confidence: ConfidenceLevel;
  references: Reference[];
  tags: string[];
  publishedAt: string;
  updatedAt?: string;
  readingTime: number; // minutes
}
