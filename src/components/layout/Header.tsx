"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { HISTORICAL_EVENTS } from "@/data/events";
import { cn } from "@/lib/utils";
import { Menu, X, Globe, Scroll, Search } from "lucide-react";
import { AuthButton } from "@/components/auth/AuthButton";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

import { Compass, ChevronDown } from "lucide-react";

const mainNavItems = [
  { href: "/" as const, key: "home" },
  { href: "/artikel" as const, key: "articles" },
  { href: "/tentang" as const, key: "about" },
] as const;

const exploreItems = [
  { href: "/peta" as const, key: "map" },
  { href: "/timeline" as const, key: "timeline" },
  { href: "/statistik" as const, key: "stats" },
  { href: "/versus" as const, key: "versus" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale() as "id" | "en";
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const exploreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (exploreRef.current && !exploreRef.current.contains(event.target as Node)) {
        setExploreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const switchLocale = () => {
    const newLocale = locale === "id" ? "en" : "id";
    const newParams = { ...params };

    if (pathname === "/artikel/[slug]" && params.slug) {
      const event = HISTORICAL_EVENTS.find((e) => e.slug[locale] === params.slug);
      if (event) {
        newParams.slug = event.slug[newLocale];
      }
    }

    // @ts-expect-error next-intl dynamic route params matching
    router.replace({ pathname, params: newParams }, { locale: newLocale });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md">
      <div className="flex h-16 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Scroll className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold tracking-tight text-foreground">
            Kronik
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 lg:flex absolute left-1/2 -translate-x-1/2">
          <Link
            href="/"
            className={cn(
              "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              pathname === "/" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            {t("home")}
          </Link>
          
          {/* Explore Dropdown */}
          <div className="relative" ref={exploreRef}>
            <button
              onClick={() => setExploreOpen(!exploreOpen)}
              className={cn(
                "flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                exploreItems.some(i => pathname === i.href) || exploreOpen
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Compass className="h-4 w-4" />
              {locale === "id" ? "Eksplorasi" : "Explore"}
              <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", exploreOpen && "rotate-180")} />
            </button>
            
            {exploreOpen && (
              <div className="absolute top-full mt-2 w-48 rounded-xl border border-border bg-card shadow-xl p-1.5 animate-in fade-in slide-in-from-top-2 duration-150">
                {exploreItems.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={() => setExploreOpen(false)}
                    className={cn(
                      "block w-full rounded-lg px-3 py-2 text-sm font-medium transition-colors mb-0.5 last:mb-0",
                      pathname === item.href
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    {t(item.key)}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <Link
            href="/artikel"
            className={cn(
              "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              pathname.includes("/artikel") ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            {t("articles")}
          </Link>
          
          <Link
            href="/tentang"
            className={cn(
              "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              pathname === "/tentang" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            {t("about")}
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <AnimatePresence>
            {isScrolled && pathname === "/artikel" && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8, width: 0, margin: 0 }}
                animate={{ opacity: 1, scale: 1, width: "auto", margin: "0 4px" }}
                exit={{ opacity: 0, scale: 0.8, width: 0, margin: 0 }}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setTimeout(() => {
                    const searchInput = document.querySelector('input[placeholder*="artikel"], input[placeholder*="articles"]') as HTMLInputElement;
                    if (searchInput) searchInput.focus();
                  }, 500);
                }}
                className="inline-flex items-center justify-center rounded-lg p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors overflow-hidden shrink-0"
                aria-label="Search articles"
                title={locale === "id" ? "Cari Artikel" : "Search Articles"}
              >
                <Search className="h-5 w-5 shrink-0" />
              </motion.button>
            )}
          </AnimatePresence>
          {/* Desktop/Tablet Utilities (Hidden on Mobile) */}
          <div className="hidden sm:flex items-center gap-2">
            <ThemeToggle locale={locale} />
            <AuthButton locale={locale} />
            <button
              onClick={switchLocale}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Switch language"
            >
              <Globe className="h-4 w-4" />
              <span className="uppercase">{locale === "id" ? "EN" : "ID"}</span>
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-muted-foreground hover:bg-muted lg:hidden ml-1"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="border-t border-border bg-background px-4 py-4 lg:hidden shadow-lg">
          <div className="flex flex-col gap-1">
            <div className="px-3 py-1 mt-2 mb-1 text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
              {locale === "id" ? "Menu Utama" : "Main Menu"}
            </div>
            {mainNavItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "rounded-lg px-4 py-3 text-base font-medium transition-colors",
                  pathname === item.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {t(item.key)}
              </Link>
            ))}
            
            <div className="px-3 py-1 mt-2 mb-1 text-[11px] font-bold text-muted-foreground uppercase tracking-wider border-t border-border pt-3">
              {locale === "id" ? "Eksplorasi" : "Explore"}
            </div>
            {exploreItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "rounded-lg px-4 py-3 text-base font-medium transition-colors",
                  pathname === item.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {t(item.key)}
              </Link>
            ))}
            
            {/* Mobile Utilities Section */}
            <div className="mt-4 flex flex-col gap-3 pt-4 border-t border-border">
              <div className="flex items-center justify-between px-2">
                <span className="text-sm font-medium text-muted-foreground">
                  {locale === "id" ? "Pengaturan" : "Settings"}
                </span>
                <div className="flex items-center gap-2">
                  <ThemeToggle locale={locale} />
                  <button
                    onClick={switchLocale}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    <Globe className="h-4 w-4" />
                    <span className="uppercase">{locale === "id" ? "EN" : "ID"}</span>
                  </button>
                </div>
              </div>
              <div className="px-2">
                <AuthButton locale={locale} />
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
