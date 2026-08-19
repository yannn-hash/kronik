import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Map, Clock, BookOpen, ArrowRight, Compass, BrainCircuit } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Animations";
import { DailyFactComponent } from "@/components/home/DailyFact";

export default function HomePage() {
  const t = useTranslations();

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="absolute inset-0 vintage-bg opacity-50" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-32 lg:py-40">
          <div className="text-center">
            <FadeIn delay={0.1}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
                <Compass className="h-4 w-4" />
                <span>{t("hero.tagline")}</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {t("hero.title")}
              </h1>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {t("hero.subtitle")}
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/peta"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg"
                >
                  {t("hero.cta")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/timeline"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-base font-semibold text-foreground transition-all hover:bg-muted"
                >
                  {t("hero.ctaSecondary")}
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Daily Fact Section */}
      <DailyFactComponent locale={t("hero.cta") === "Mulai Jelajahi" ? "id" : "en"} />

      {/* Features Section */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <FadeIn delay={0.1}>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t("features.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              {t("features.subtitle")}
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Map Feature */}
          <StaggerItem className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg">
            <div className="mb-4 inline-flex rounded-lg bg-era-ancient/10 p-3 transition-colors group-hover:bg-era-ancient/20">
              <Map className="h-6 w-6 text-era-ancient" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">
              {t("features.map.title")}
            </h3>
            <p className="mt-2 text-muted-foreground">
              {t("features.map.description")}
            </p>
          </StaggerItem>

          {/* Timeline Feature */}
          <StaggerItem className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg">
            <div className="mb-4 inline-flex rounded-lg bg-era-medieval/10 p-3 transition-colors group-hover:bg-era-medieval/20">
              <Clock className="h-6 w-6 text-era-medieval" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">
              {t("features.timeline.title")}
            </h3>
            <p className="mt-2 text-muted-foreground">
              {t("features.timeline.description")}
            </p>
          </StaggerItem>

          {/* Articles Feature */}
          <StaggerItem className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg">
            <div className="mb-4 inline-flex rounded-lg bg-era-modern/10 p-3 transition-colors group-hover:bg-era-modern/20">
              <BookOpen className="h-6 w-6 text-era-modern" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">
              {t("features.articles.title")}
            </h3>
            <p className="mt-2 text-muted-foreground">
              {t("features.articles.description")}
            </p>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-muted/50">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center">
          <FadeIn delay={0.1}>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              {t("cta.title")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t("cta.subtitle")}
            </p>
            <Link
              href="/peta"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg hover:scale-105 active:scale-95"
            >
              {t("cta.button")}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
