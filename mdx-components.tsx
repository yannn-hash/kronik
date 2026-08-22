import type { MDXComponents } from "mdx/types";
import { QuizWrapper } from "@/components/article/QuizWrapper";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    QuizWrapper,
    h1: ({ children }) => {
      const id = typeof children === "string" ? children.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-") : undefined;
      return (
        <h1 id={id} className="mt-8 text-3xl font-bold tracking-tight text-foreground scroll-mt-24">
          {children}
        </h1>
      );
    },
    h2: ({ children }) => {
      const id = typeof children === "string" ? children.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-") : undefined;
      return (
        <h2 id={id} className="mt-8 text-2xl font-bold tracking-tight text-foreground scroll-mt-24 border-b border-border/40 pb-2">
          {children}
        </h2>
      );
    },
    h3: ({ children }) => {
      const id = typeof children === "string" ? children.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-") : undefined;
      return (
        <h3 id={id} className="mt-6 text-xl font-semibold text-foreground scroll-mt-24">
          {children}
        </h3>
      );
    },
    p: ({ children }) => (
      <p className="mt-3 leading-relaxed text-muted-foreground">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="mt-3 list-disc space-y-1 pl-6 text-muted-foreground">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="mt-3 list-decimal space-y-1 pl-6 text-muted-foreground">
        {children}
      </ol>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-4 border-l-4 border-primary/30 pl-4 italic text-muted-foreground">
        {children}
      </blockquote>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary"
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
    ...components,
  };
}
