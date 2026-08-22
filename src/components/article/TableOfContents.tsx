"use client";

import { useEffect, useState } from "react";
import { List, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeadingItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  locale?: "id" | "en";
}

export function TableOfContents({ locale = "id" }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<HeadingItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Find all h2 and h3 elements within the article content
    const elements = Array.from(
      document.querySelectorAll("article h2, article h3")
    );

    const items: HeadingItem[] = elements.map((el, index) => {
      // Ensure element has an ID
      if (!el.id) {
        const generatedId =
          el.textContent
            ?.toLowerCase()
            .replace(/[^a-z0-9\s-]/g, "")
            .trim()
            .replace(/\s+/g, "-") || `heading-${index}`;
        el.id = generatedId;
      }
      return {
        id: el.id,
        text: el.textContent || "",
        level: el.tagName.toLowerCase() === "h2" ? 2 : 3,
      };
    });

    setHeadings(items);

    if (items.length > 0) {
      setActiveId(items[0].id);
    }

    // Setup intersection observer for scroll-spy
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0% -60% 0%",
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  if (headings.length === 0) return null;

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
      setActiveId(id);
    }
  };

  return (
    <aside className="space-y-3">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
        <List className="h-4 w-4 text-primary" />
        <span>{locale === "id" ? "Daftar Isi" : "Table of Contents"}</span>
      </div>

      <nav className="space-y-1 text-sm border-l-2 border-border pl-3">
        {headings.map((heading) => {
          const isActive = activeId === heading.id;
          return (
            <button
              key={heading.id}
              onClick={() => scrollToHeading(heading.id)}
              className={cn(
                "group flex items-start text-left w-full transition-all duration-200 py-1",
                heading.level === 3 && "pl-3 text-xs",
                isActive
                  ? "font-semibold text-primary -ml-[13px] border-l-2 border-primary pl-3"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <span className="line-clamp-2">{heading.text}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
