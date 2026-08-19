import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["id", "en"],
  defaultLocale: "id",
  pathnames: {
    "/": "/",
    "/peta": {
      id: "/peta",
      en: "/map",
    },
    "/timeline": "/timeline",
    "/artikel": {
      id: "/artikel",
      en: "/articles",
    },
    "/tentang": {
      id: "/tentang",
      en: "/about",
    },
    "/artikel/[slug]": {
      id: "/artikel/[slug]",
      en: "/articles/[slug]",
    },
    "/profil": {
      id: "/profil",
      en: "/profile",
    },
    "/statistik": {
      id: "/statistik",
      en: "/statistics",
    },
    "/versus": {
      id: "/versus",
      en: "/versus",
    },
  },
});

export type Locale = (typeof routing.locales)[number];
export type Pathnames = keyof typeof routing.pathnames;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
