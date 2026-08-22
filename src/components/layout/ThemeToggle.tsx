"use client";

import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { Sun, Moon, Scroll, Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type Theme = "sepia" | "light" | "dark";

interface ThemeToggleProps {
  locale?: "id" | "en";
}

export function ThemeToggle({ locale = "id" }: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>("sepia");
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("kronik-theme") as Theme | null;
    
    if (!savedTheme) {
      // First time visitor
      setShowOnboarding(true);
      setTheme("sepia"); // Default temporary background
      document.documentElement.setAttribute("data-theme", "sepia");
    } else {
      // Returning visitor
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("kronik-theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    setIsOpen(false);
    
    if (showOnboarding) {
      setShowOnboarding(false);
    }
  };

  const themes: { id: Theme; label: { id: string; en: string }; desc: { id: string; en: string }; icon: typeof Sun }[] = [
    { id: "sepia", label: { id: "Parchment (Sepia)", en: "Parchment (Sepia)" }, desc: { id: "Tema klasik yang hangat dan nyaman", en: "Warm and cozy classic theme" }, icon: Scroll },
    { id: "light", label: { id: "Mode Terang", en: "Light Mode" }, desc: { id: "Tampilan putih bersih nan modern", en: "Clean and modern white look" }, icon: Sun },
    { id: "dark", label: { id: "Mode Gelap", en: "Dark Mode" }, desc: { id: "Teduh di mata untuk malam hari", en: "Easy on the eyes for night reading" }, icon: Moon },
  ];

  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-lg border border-border bg-card/50" />
    );
  }

  const ActiveIcon = theme === "dark" ? Moon : theme === "light" ? Sun : Scroll;

  return (
    <>
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "inline-flex items-center justify-center h-9 w-9 rounded-lg border border-border bg-card/60 backdrop-blur-md text-foreground transition-all hover:bg-muted hover:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20",
            isOpen && "ring-2 ring-primary/30 border-primary"
          )}
          aria-label={locale === "id" ? "Pilih Tema Tampilan" : "Choose Display Theme"}
          title={locale === "id" ? "Ganti Tema Tampilan" : "Switch Theme"}
        >
          <ActiveIcon className="h-4 w-4 text-primary transition-transform duration-300 hover:rotate-12" />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 rounded-xl border border-border bg-card/95 backdrop-blur-md p-1.5 shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="px-2.5 py-1.5 text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
              {locale === "id" ? "Tema Tampilan" : "Theme Style"}
            </div>
            <div className="space-y-0.5">
              {themes.map(({ id, label, icon: Icon }) => {
                const isSelected = theme === id;
                return (
                  <button
                    key={id}
                    onClick={() => changeTheme(id)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-xs font-medium transition-colors",
                      isSelected
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-foreground hover:bg-muted"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className={cn("h-3.5 w-3.5", isSelected ? "text-primary" : "text-muted-foreground")} />
                      <span>{label[locale]}</span>
                    </div>
                    {isSelected && <Check className="h-3.5 w-3.5 text-primary" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {showOnboarding && typeof document !== 'undefined' && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/80 backdrop-blur-sm animate-in fade-in duration-300 p-4">
          <div className="bg-card w-full max-w-lg rounded-3xl shadow-2xl border border-border p-6 sm:p-8 flex flex-col items-center text-center animate-in zoom-in-95 duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              {locale === "id" ? "Pilih Tampilan Anda" : "Choose Your Experience"}
            </h2>
            <p className="text-sm text-muted-foreground mb-8 max-w-sm">
              {locale === "id" 
                ? "Bagaimana Anda ingin menikmati perjalanan sejarah ini? Anda bisa mengubahnya kapan saja nanti." 
                : "How would you like to experience this historical journey? You can always change it later."}
            </p>
            
            <div className="w-full flex flex-col gap-3">
              {themes.map(({ id, label, desc, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => changeTheme(id)}
                  className="flex items-center gap-4 w-full p-4 rounded-2xl border-2 border-transparent bg-muted hover:bg-primary/5 hover:border-primary/30 transition-all group text-left"
                >
                  <div className="w-10 h-10 rounded-xl bg-background shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-foreground">{label[locale]}</span>
                    <span className="text-xs text-muted-foreground">{desc[locale]}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
