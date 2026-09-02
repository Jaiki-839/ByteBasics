"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Lightbulb, BookMarked } from "lucide-react";
import { Topic } from "@/lib/types";
import { KeyPointCard, TermCard } from "./TermCard";
import { QuickCheck } from "./QuickCheck";
import { markTopicComplete, setCurrentTopic } from "@/lib/progress";
import { TOTAL_TOPIC_COUNT, getModule } from "@/data/modules";
import { getAdjacentTopics } from "@/data/topics";

export function TopicLayout({ topic }: { topic: Topic }) {
  const { prev, next } = getAdjacentTopics(topic.slug);
  const mod = getModule(topic.moduleId);

  useEffect(() => {
    setCurrentTopic(topic.slug);
  }, [topic.slug]);

  return (
    <article className="mx-auto max-w-3xl px-5 py-10">
      <p className="font-mono text-xs uppercase tracking-wide text-accent">
        {mod?.title} · Topic {topic.id} / {TOTAL_TOPIC_COUNT}
      </p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">{topic.title}</h1>
      <p className="mt-3 text-base leading-relaxed text-muted">{topic.description}</p>

      <Section title="Definition">
        <p className="rounded-xl border-l-2 border-accent bg-surface2 px-5 py-4 text-sm leading-relaxed text-ink">
          {topic.definition}
        </p>
      </Section>

      <Section title="Simple Explanation">
        <p className="text-sm leading-relaxed text-ink">{topic.explanation}</p>
      </Section>

      <Section title="Key Points">
        <div className="grid gap-3 sm:grid-cols-2">
          {topic.keyPoints.map((p, i) => (
            <KeyPointCard key={i} point={p} index={i} />
          ))}
        </div>
      </Section>

      <Section title="Real-World Examples">
        <ul className="flex flex-col gap-2.5">
          {topic.examples.map((ex, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {ex}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Important Terms">
        <div className="grid gap-3 sm:grid-cols-2">
          {topic.importantTerms.map((t) => (
            <TermCard key={t.term} term={t} />
          ))}
        </div>
      </Section>

      <Section title="Remember This">
        <div className="flex gap-3 rounded-xl border border-amber/30 bg-amber/5 p-4">
          <Lightbulb size={18} className="mt-0.5 shrink-0 text-amber" />
          <p className="text-sm leading-relaxed text-ink">{topic.rememberThis}</p>
        </div>
      </Section>

      <Section title="Quick Check">
        <QuickCheck questions={topic.quizQuestions} />
      </Section>

      {topic.relatedTopics.length > 0 && (
        <Section title="Related Topics">
          <div className="flex flex-wrap gap-2">
            {topic.relatedTopics.map((r) => (
              <Link
                key={r.slug}
                href={`/topics/${r.slug}`}
                className="rounded-full border border-border px-3.5 py-1.5 text-sm text-ink hover:border-accent/50 hover:text-accent"
              >
                {r.title}
              </Link>
            ))}
          </div>
        </Section>
      )}

      <button
        onClick={() => markTopicComplete(topic.slug)}
        className="mt-10 inline-flex items-center gap-2 rounded-xl bg-teal px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
      >
        <BookMarked size={15} /> Mark topic as complete
      </button>

      <nav className="mt-10 flex items-center justify-between border-t border-border pt-6">
        {prev ? (
          <Link href={`/topics/${prev.slug}`} className="flex items-center gap-2 text-sm text-muted hover:text-ink">
            <ArrowLeft size={15} /> {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/topics/${next.slug}`} className="flex items-center gap-2 text-sm text-muted hover:text-ink">
            {next.title} <ArrowRight size={15} />
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-9">
      <h2 className="mb-3 font-display text-lg font-semibold text-ink">{title}</h2>
      {children}
    </section>
  );
}
