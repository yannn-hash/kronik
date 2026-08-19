"use client";

import { useTranslations } from "next-intl";
import { Award, Lock, BookOpen, BrainCircuit, Landmark, Flame, Compass, Castle, ScrollText, Palette, Anchor, Factory, Flag, Hammer } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";

const BADGES = [
  { id: "b1", icon: BrainCircuit, color: "text-amber-500", bg: "bg-amber-500/10", title: { id: "Ahli Mesir Kuno", en: "Ancient Egypt Expert" } },
  { id: "b2", icon: Award, color: "text-blue-500", bg: "bg-blue-500/10", title: { id: "Saksi Revolusi", en: "Revolution Witness" } },
  { id: "b3", icon: ScrollText, color: "text-yellow-600", bg: "bg-yellow-600/10", title: { id: "Pakar Mesopotamia", en: "Mesopotamia Expert" } },
  { id: "b4", icon: BookOpen, color: "text-purple-500", bg: "bg-purple-500/10", title: { id: "Filsuf Yunani", en: "Greek Philosopher" } },
  { id: "b5", icon: Landmark, color: "text-red-500", bg: "bg-red-500/10", title: { id: "Kaisar Romawi", en: "Roman Emperor" } },
  { id: "b6", icon: Compass, color: "text-emerald-500", bg: "bg-emerald-500/10", title: { id: "Penjelajah Gurun", en: "Desert Explorer" } },
  { id: "b7", icon: Flame, color: "text-orange-500", bg: "bg-orange-500/10", title: { id: "Ksatria Mongol", en: "Mongol Knight" } },
  { id: "b8", icon: Palette, color: "text-pink-500", bg: "bg-pink-500/10", title: { id: "Seniman Renaisans", en: "Renaissance Artist" } },
  { id: "b9", icon: Anchor, color: "text-cyan-500", bg: "bg-cyan-500/10", title: { id: "Navigator Samudra", en: "Ocean Navigator" } },
  { id: "b10", icon: Factory, color: "text-slate-500", bg: "bg-slate-500/10", title: { id: "Pionir Industri", en: "Industry Pioneer" } },
  { id: "b11", icon: Flag, color: "text-red-600", bg: "bg-red-600/10", title: { id: "Pahlawan Merdeka", en: "Freedom Hero" } },
  { id: "b12", icon: Hammer, color: "text-stone-500", bg: "bg-stone-500/10", title: { id: "Peruntuh Tembok", en: "Wall Breaker" } },
  { id: "b13", icon: Castle, color: "text-green-600", bg: "bg-green-600/10", title: { id: "Ahli Indus", en: "Indus Expert" } },
  { id: "b14", icon: Award, color: "text-red-500", bg: "bg-red-500/10", title: { id: "Naga Shang", en: "Shang Dragon" } },
  { id: "b15", icon: Landmark, color: "text-orange-600", bg: "bg-orange-600/10", title: { id: "Singa Maurya", en: "Mauryan Lion" } },
  { id: "b16", icon: BookOpen, color: "text-cyan-600", bg: "bg-cyan-600/10", title: { id: "Sarjana Islam", en: "Islamic Scholar" } },
  { id: "b17", icon: Flame, color: "text-emerald-600", bg: "bg-emerald-600/10", title: { id: "Prajurit Aztec", en: "Aztec Warrior" } },
  { id: "b18", icon: Compass, color: "text-amber-700", bg: "bg-amber-700/10", title: { id: "Pembangun Inca", en: "Inca Builder" } },
  { id: "b19", icon: Anchor, color: "text-blue-700", bg: "bg-blue-700/10", title: { id: "Armada Ming", en: "Ming Fleet" } },
  { id: "b20", icon: Flag, color: "text-gray-600", bg: "bg-gray-600/10", title: { id: "Veteran PD 1", en: "WWI Veteran" } },
  { id: "b21", icon: Flame, color: "text-red-800", bg: "bg-red-800/10", title: { id: "Veteran PD 2", en: "WWII Veteran" } },
  { id: "b22", icon: BrainCircuit, color: "text-slate-800", bg: "bg-slate-800/10", title: { id: "Astronot Apollo", en: "Apollo Astronaut" } },
];

export function BadgeGallery() {
  const t = useTranslations("nav");
  const locale = t("home") === "Beranda" ? "id" : "en";
  
  const [unlockedBadgeIds, setUnlockedBadgeIds] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    async function fetchBadges() {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        const { data, error } = await supabase
          .from("user_badges")
          .select("badge_id")
          .eq("user_id", session.user.id);
          
        if (!error && data) {
          setUnlockedBadgeIds(new Set(data.map(b => b.badge_id)));
        }
      }
      setLoading(false);
    }
    fetchBadges();
  }, [supabase]);

  if (loading) {
    return (
      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm flex items-center justify-center h-48 animate-pulse">
        <p className="text-muted-foreground">{locale === "id" ? "Memuat lencana..." : "Loading badges..."}</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-foreground">
        <Award className="h-6 w-6 text-primary" />
        {locale === "id" ? "Koleksi Lencana (Achievements)" : "Badge Collection (Achievements)"}
      </h3>
      
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {BADGES.map((badge) => {
          const Icon = badge.icon;
          const isUnlocked = unlockedBadgeIds.has(badge.id);
          
          return (
            <div 
              key={badge.id}
              className={cn(
                "relative overflow-hidden flex flex-col items-center text-center p-6 rounded-xl border-2 transition-all",
                isUnlocked 
                  ? "border-primary/20 bg-background hover:border-primary/50" 
                  : "border-border/50 bg-muted/30 grayscale"
              )}
            >
              {!isUnlocked && (
                <div className="absolute right-3 top-3">
                  <Lock className="h-4 w-4 text-muted-foreground" />
                </div>
              )}
              
              <div className={cn("mb-4 rounded-full p-4", isUnlocked ? badge.bg : "bg-muted")}>
                <Icon className={cn("h-8 w-8", isUnlocked ? badge.color : "text-muted-foreground")} />
              </div>
              <h4 className="font-semibold text-foreground">{badge.title[locale]}</h4>
              <p className="mt-1 text-xs text-muted-foreground">
                {isUnlocked 
                  ? (locale === "id" ? "Terbuka!" : "Unlocked!") 
                  : (locale === "id" ? "Terkunci" : "Locked")}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
