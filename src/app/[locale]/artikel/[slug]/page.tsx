import { notFound } from "next/navigation";
import { HISTORICAL_EVENTS } from "@/data/events";
import { ConfidenceBadge } from "@/components/article/ConfidenceBadge";
import { References } from "@/components/article/References";
import { RelatedArticles } from "@/components/article/RelatedArticles";
import { Link } from "@/i18n/routing";
import { TextToSpeech } from "@/components/article/TextToSpeech";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";

interface ArticlePageProps {
  params: Promise<{ locale: string; slug: string }>;
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
  let MDXContent;
  try {
    const mdxModule = await import(`@/content/articles/${locale}/${slug}.mdx`);
    MDXContent = mdxModule.default;
  } catch (error) {
    console.error("MDX import error:", error);
    // Fallback if article not written yet
    MDXContent = () => (
      <div className="py-10 text-center">
        <p className="text-muted-foreground">
          {locale === "id" 
            ? "Artikel ini sedang dalam proses penulisan. Silakan kembali lagi nanti!" 
            : "This article is currently being written. Please check back later!"}
        </p>
      </div>
    );
  }

  const displayYear = Math.abs(event.year) + (event.year < 0 ? (locale === 'id' ? ' SM' : ' BCE') : (locale === 'id' ? ' M' : ' CE'));

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
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

      {/* Header */}
      <header className="mb-12">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <ConfidenceBadge level={event.confidence} locale={validLocale} />
          <span className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
            <Calendar className="h-4 w-4" />
            {displayYear}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
            <MapPin className="h-4 w-4" />
            {event.location.name[validLocale]}
          </span>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl mb-6">
          {event.title[validLocale]}
        </h1>

        {event.image && (
          <div className="mb-8 w-full overflow-hidden rounded-2xl aspect-video bg-muted relative border border-border shadow-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={event.image} 
              alt={event.title[validLocale]} 
              className="object-cover w-full h-full"
            />
          </div>
        )}
        
        <p className="text-xl text-muted-foreground leading-relaxed border-l-4 border-primary pl-4">
          {event.summary[validLocale]}
        </p>
      </header>

      {/* Audio Player */}
      <TextToSpeech locale={validLocale} title={event.title[validLocale]} />

      {/* MDX Content */}
      <article className="prose prose-sm sm:prose-base lg:prose-lg mx-auto mt-8 max-w-[65ch] dark:prose-invert prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-xl">
        <MDXContent />
      </article>

      {/* References */}
      <References references={event.references} locale={validLocale} />

      {/* Related Articles */}
      <RelatedArticles currentEvent={event} locale={validLocale} />
    </article>
  );
}
