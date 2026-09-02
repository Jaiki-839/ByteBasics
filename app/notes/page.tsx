"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { getAllTopics } from "@/data/topics";

function toNotesText(title: string, points: string[]) {
  return `${title}\n${points.map((p) => `• ${p}`).join("\n")}`;
}

export default function NotesPage() {
  const topics = getAllTopics();
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);
  const [reviewed, setReviewed] = useState<Set<string>>(new Set());

  function copy(slug: string, title: string, points: string[]) {
    navigator.clipboard.writeText(toNotesText(title, points));
    setCopiedSlug(slug);
    setTimeout(() => setCopiedSlug(null), 1500);
  }

  function toggleReviewed(slug: string) {
    setReviewed((prev) => {
      const next = new Set(prev);
      next.has(slug) ? next.delete(slug) : next.add(slug);
      return next;
    });
  }

  return (
    <Container className="py-12">
      <p className="font-mono text-xs uppercase tracking-wide text-accent">Exam mode</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-ink">Quick Notes</h1>
      <p className="mt-2 max-w-xl text-sm text-muted">
        Condensed, revision-ready summaries — significantly shorter than the full lessons.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {topics.map((t) => {
          const isReviewed = reviewed.has(t.slug);
          return (
            <div key={t.slug} className="rounded-2xl border border-border bg-surface p-5">
              <h2 className="font-display text-base font-semibold text-ink">{t.title}</h2>
              <ul className="mt-2 flex flex-col gap-1">
                {t.keyPoints.slice(0, 3).map((p, i) => (
                  <li key={i} className="text-xs leading-relaxed text-muted">
                    · {p}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex items-center gap-3">
                <button
                  onClick={() => copy(t.slug, t.title, t.keyPoints)}
                  className="flex items-center gap-1.5 text-xs text-muted hover:text-ink"
                >
                  {copiedSlug === t.slug ? <Check size={13} /> : <Copy size={13} />}
                  {copiedSlug === t.slug ? "Copied" : "Copy Notes"}
                </button>
                <button
                  onClick={() => toggleReviewed(t.slug)}
                  className={`text-xs ${isReviewed ? "text-teal" : "text-muted hover:text-ink"}`}
                >
                  {isReviewed ? "✓ Reviewed" : "Mark as Reviewed"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
