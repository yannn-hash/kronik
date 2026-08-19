"use client";

import { useState, useEffect, useMemo } from "react";
import { useLocale } from "next-intl";
import { HISTORICAL_EVENTS } from "@/data/events";
import { TAG_TRANSLATIONS } from "@/data/tags";
import { ERAS } from "@/data/eras";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell
} from "recharts";

export default function StatistikPage() {
  const locale = useLocale() as "id" | "en";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prepare tag data
  const tagData = useMemo(() => {
    const tagCounts: Record<string, number> = {};
    HISTORICAL_EVENTS.forEach(e => {
      e.tags.forEach(tag => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      });
    });
    return Object.entries(tagCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 7)
      .map(([tag, count]) => ({
        name: TAG_TRANSLATIONS[tag]?.[locale] || tag,
        count
      }));
  }, [locale]);

  // Prepare era data
  const eraData = useMemo(() => {
    const eraCounts: Record<string, number> = {};
    HISTORICAL_EVENTS.forEach(e => {
      eraCounts[e.era] = (eraCounts[e.era] || 0) + 1;
    });
    return ERAS.map(era => ({
      name: locale === "id" ? era.label.id : era.label.en,
      value: eraCounts[era.id] || 0,
      fill: era.color
    })).filter(e => e.value > 0);
  }, [locale]);

  // Prepare timeline data
  const timelineData = useMemo(() => {
    return HISTORICAL_EVENTS
      .sort((a, b) => a.year - b.year)
      .map(e => ({
        name: e.title[locale],
        year: e.year,
        era: ERAS.find(x => x.id === e.era)?.label[locale] || e.era
      }));
  }, [locale]);

  // Summary stats
  const totalEvents = HISTORICAL_EVENTS.length;
  const oldestEvent = HISTORICAL_EVENTS.reduce((a, b) => a.year < b.year ? a : b);
  const newestEvent = HISTORICAL_EVENTS.reduce((a, b) => a.year > b.year ? a : b);
  const uniqueTags = new Set(HISTORICAL_EVENTS.flatMap(e => e.tags)).size;

  const formatYear = (year: number) => {
    return Math.abs(year) + (year < 0 ? (locale === "id" ? " SM" : " BCE") : (locale === "id" ? " M" : " CE"));
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold mb-4">
          {locale === "id" ? "Statistik & Visualisasi Data" : "Statistics & Data Visualization"}
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {locale === "id"
            ? "Eksplorasi data sejarah dari seluruh peristiwa yang telah diverifikasi di dalam database Kronik melalui grafik interaktif."
            : "Explore historical data of all verified events in the Kronik database through interactive charts."}
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-card border border-border rounded-xl p-4 text-center shadow-sm">
          <p className="text-3xl font-bold text-primary">{totalEvents}</p>
          <p className="text-sm text-muted-foreground">{locale === "id" ? "Total Peristiwa" : "Total Events"}</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-4 text-center shadow-sm">
          <p className="text-3xl font-bold text-primary">{ERAS.length}</p>
          <p className="text-sm text-muted-foreground">{locale === "id" ? "Era Sejarah" : "Historical Eras"}</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-4 text-center shadow-sm">
          <p className="text-3xl font-bold text-primary">{uniqueTags}</p>
          <p className="text-sm text-muted-foreground">{locale === "id" ? "Kategori Topik" : "Topic Categories"}</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-4 text-center shadow-sm">
          <p className="text-xl font-bold text-primary leading-tight">{formatYear(oldestEvent.year)}</p>
          <p className="text-sm text-muted-foreground">{locale === "id" ? "Peristiwa Tertua" : "Oldest Event"}</p>
        </div>
      </div>

      {/* Charts - only render client-side */}
      {mounted ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Era Pie Chart */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-6">
              {locale === "id" ? "Distribusi Berdasarkan Era" : "Distribution by Era"}
            </h2>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={eraData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                    label={(props: any) => `${props.name || ''} ${((props.percent || 0) * 100).toFixed(0)}%`}
                  >
                    {eraData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ borderRadius: "8px", border: "1px solid #e2e8f0", backgroundColor: "rgba(255,255,255,0.95)" }}
                    itemStyle={{ color: "#0f172a" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Top Tags Bar Chart */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-6">
              {locale === "id" ? "Topik Sejarah Paling Populer" : "Most Popular Historical Topics"}
            </h2>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={tagData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" width={100} tick={{ fontSize: 12 }} />
                  <Tooltip
                    cursor={{ fill: "rgba(0,0,0,0.05)" }}
                    contentStyle={{ borderRadius: "8px", border: "1px solid #e2e8f0", backgroundColor: "rgba(255,255,255,0.95)" }}
                  />
                  <Bar dataKey="count" fill="#3b82f6" radius={[0, 4, 4, 0]} name={locale === "id" ? "Jumlah Artikel" : "Article Count"} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Timeline - simpler visual using bar chart */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm lg:col-span-2">
            <h2 className="text-xl font-bold mb-6">
              {locale === "id" ? "Garis Waktu Peristiwa Sejarah" : "Historical Events Timeline"}
            </h2>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={timelineData} margin={{ top: 5, right: 30, left: 20, bottom: 60 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis
                    dataKey="name"
                    angle={-45}
                    textAnchor="end"
                    height={80}
                    tick={{ fontSize: 10 }}
                    interval={0}
                  />
                  <YAxis
                    dataKey="year"
                    tickFormatter={(val) => formatYear(val)}
                  />
                  <Tooltip
                    contentStyle={{ borderRadius: "8px", border: "1px solid #e2e8f0", backgroundColor: "rgba(255,255,255,0.95)" }}
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-white border border-slate-200 p-3 rounded-lg shadow-md max-w-[250px]">
                            <p className="font-bold text-sm text-slate-900 mb-1">{data.name}</p>
                            <p className="text-xs text-blue-600 font-semibold">{formatYear(data.year)}</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar dataKey="year" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[600px] w-full flex items-center justify-center bg-card rounded-xl border border-border animate-pulse">
          <div className="text-muted-foreground font-medium">
            {locale === "id" ? "Memuat Visualisasi Data..." : "Loading Data Visualizations..."}
          </div>
        </div>
      )}
    </div>
  );
}
