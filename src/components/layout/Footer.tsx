import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Scroll, Heart } from "lucide-react";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <Scroll className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-foreground">Kronik</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              {t("description")}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              {t("navigation")}
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/peta"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {tNav("map")}
                </Link>
              </li>
              <li>
                <Link
                  href="/timeline"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {tNav("timeline")}
                </Link>
              </li>
              <li>
                <Link
                  href="/artikel"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {tNav("articles")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              {t("resources")}
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/tentang"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {t("references")}
                </Link>
              </li>
              <li>
                <Link
                  href="/tentang"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {t("methodology")}
                </Link>
              </li>
              <li>
                <Link
                  href="/tentang"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {t("contribute")}
                </Link>
              </li>
            </ul>
          </div>

          {/* License */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              {t("license")}
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              {t("copyright")}{" "}
              <a
                href="https://creativecommons.org/licenses/by-sa/4.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                CC BY-SA 4.0
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            {t("builtWith")}{" "}
            <Heart className="inline h-3.5 w-3.5 text-red-500" />
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Kronik. MIT License.
          </p>
        </div>
      </div>
    </footer>
  );
}
