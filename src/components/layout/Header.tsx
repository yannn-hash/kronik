"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { Menu, X, Globe, Scroll } from "lucide-react";
import { AuthButton } from "@/components/auth/AuthButton";

const navItems = [
  { href: "/" as const, key: "home" },
  { href: "/peta" as const, key: "map" },
  { href: "/timeline" as const, key: "timeline" },
  { href: "/statistik" as const, key: "stats" },
  { href: "/artikel" as const, key: "articles" },
  { href: "/versus" as const, key: "versus" },
  { href: "/tentang" as const, key: "about" },
  { href: "/profil" as const, key: "profil" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale() as "id" | "en";
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const switchLocale = () => {
    const newLocale = locale === "id" ? "en" : "id";
    router.replace(pathname as any, { locale: newLocale });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Scroll className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold tracking-tight text-foreground">
            Kronik
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                pathname === item.href
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        {/* Language Switcher + Auth Button + Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <AuthButton locale={locale} />
          <button
            onClick={switchLocale}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Switch language"
          >
            <Globe className="h-4 w-4" />
            <span className="uppercase">{locale === "id" ? "EN" : "ID"}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-3 text-muted-foreground hover:bg-muted md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="border-t border-border bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {t(item.key)}
              </Link>
            ))}
            <div className="mt-2 pt-2 border-t border-border">
              <AuthButton locale={locale} />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
