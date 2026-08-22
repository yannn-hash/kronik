"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { Home, Map, Clock, BookOpen, User } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const mobileNavItems = [
  { href: "/" as const, key: "home", icon: Home },
  { href: "/peta" as const, key: "map", icon: Map },
  { href: "/timeline" as const, key: "timeline", icon: Clock },
  { href: "/artikel" as const, key: "articles", icon: BookOpen },
  { href: "/profil" as const, key: "profil", icon: User },
] as const;

export function BottomNav() {
  const t = useTranslations("nav");
  const pathname = usePathname();

  return (
    <div className="fixed bottom-3 inset-x-3 z-40 md:hidden pointer-events-none">
      <nav className="pointer-events-auto mx-auto max-w-md rounded-2xl border border-border/80 bg-card/85 backdrop-blur-xl p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
        <ul className="flex items-center justify-around">
          {mobileNavItems.map(({ href, key, icon: Icon }) => {
            const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));

            return (
              <li key={key} className="flex-1">
                <Link
                  href={href}
                  className={cn(
                    "relative flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-[10px] font-semibold transition-colors duration-200",
                    isActive
                      ? "text-primary font-bold"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeMobileNavTab"
                      className="absolute inset-0 bg-primary/10 rounded-xl"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <Icon
                    className={cn(
                      "h-5 w-5 mb-0.5 transition-transform duration-200",
                      isActive && "scale-110 text-primary"
                    )}
                  />
                  <span className="relative z-10 truncate max-w-[64px]">
                    {t(key)}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
