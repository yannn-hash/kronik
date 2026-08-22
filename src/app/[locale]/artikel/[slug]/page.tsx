import { notFound } from "next/navigation";
import { HISTORICAL_EVENTS } from "@/data/events";
import { ConfidenceBadge } from "@/components/article/ConfidenceBadge";
import { References } from "@/components/article/References";
import { RelatedArticles } from "@/components/article/RelatedArticles";
import { Link } from "@/i18n/routing";
import { TextToSpeech } from "@/components/article/TextToSpeech";
import { QuizWrapper } from "@/components/article/QuizWrapper";
import { ReadingProgressBar } from "@/components/article/ReadingProgressBar";
import { TableOfContents } from "@/components/article/TableOfContents";
import { ArrowLeft, Calendar, MapPin, Clock } from "lucide-react";

interface ArticlePageProps {
  params: Promise<{ locale: string; slug: string }>;
}

function FallbackArticle({ locale }: { locale: string }) {
  return (
    <div className="py-10 text-center">
      <p className="text-muted-foreground">
        {locale === "id"
          ? "Artikel ini sedang dalam proses penulisan. Silakan kembali lagi nanti!"
          : "This article is currently being written. Please check back later!"}
      </p>
    </div>
  );
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { locale, slug } = await params;
  const validLocale = locale as "id" | "en";
  
  // Find event metadata by comparing the current slug with the localized slug
  const event = HISTORICAL_EVENTS.find((e) => e.slug[validLocale] === slug);
  
  if (!event) {
    notFound();
  }

  // Dynamically load the MDX component
  let MDXContent = null;
  try {
    const mdxModule = await import(`@/content/articles/${locale}/${slug}.mdx`);
    MDXContent = mdxModule.default;
  } catch (error) {
    console.error("MDX import error:", error);
  }

  const displayYear = Math.abs(event.year) + (event.year < 0 ? (locale === 'id' ? ' SM' : ' BCE') : (locale === 'id' ? ' M' : ' CE'));

  return (
    <>
      <ReadingProgressBar />
      
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        {/* Back button */}
        <div className="mb-8">
          <Link 
            href="/peta" 
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {locale === "id" ? "Kembali ke Peta" : "Back to Map"}
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] xl:grid-cols-[1fr_300px] gap-10 items-start">
          {/* Main Article Content */}
          <article className="min-w-0">
            {/* Header */}
            <header className="mb-10">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <ConfidenceBadge level={event.confidence} locale={validLocale} />
                <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  {displayYear}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  {event.location.name[validLocale]}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  <Clock className="h-3.5 w-3.5" />
                  {validLocale === "id" ? "±4 menit baca" : "±4 min read"}
                </span>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-6">
                {event.title[validLocale]}
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed border-l-4 border-primary pl-4 font-serif italic">
                {event.summary[validLocale]}
              </p>
            </header>

            {/* Mobile Table of Contents */}
            <div className="lg:hidden mb-8 p-4 rounded-xl border border-border bg-card/60">
              <TableOfContents locale={validLocale} />
            </div>

            {/* Audio Player */}
            <div className="mb-8">
              <TextToSpeech locale={validLocale} title={event.title[validLocale]} />
            </div>

            {/* MDX Content */}
            <div className="prose prose-stone dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:leading-relaxed prose-p:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-xl">
              {MDXContent ? (
                <MDXContent components={{ QuizWrapper }} />
              ) : (
                <FallbackArticle locale={validLocale} />
              )}
            </div>

            {/* References */}
            <References references={event.references} locale={validLocale} />

            {/* Related Articles */}
            <RelatedArticles currentEvent={event} locale={validLocale} />
          </article>

          {/* Desktop Floating Sidebar Table of Contents */}
          <div className="hidden lg:block sticky top-24 space-y-6">
            <div className="rounded-2xl border border-border bg-card/80 backdrop-blur-md p-5 shadow-sm">
              <TableOfContents locale={validLocale} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
