import type { MDXComponents } from "mdx/types";
import { QuizWrapper } from "@/components/article/QuizWrapper";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    QuizWrapper,
    h1: ({ children }) => (
      <h1 className="mt-8 text-3xl font-bold tracking-tight text-foreground">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-6 text-2xl font-semibold text-foreground">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-4 text-xl font-semibold text-foreground">{children}</h3>
    ),
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
