"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { ModuleCard } from "@/components/learning/ModuleCard";
import { modules } from "@/data/modules";
import { loadProgress, ProgressState } from "@/lib/progress";
import { getTopicsByModule } from "@/data/topics";

export default function ModulesPage() {
  const [progress, setProgress] = useState<ProgressState | null>(null);

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  return (
    <Container className="py-12">
      <p className="font-mono text-xs uppercase tracking-wide text-accent">Learning roadmap</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-ink">
        Your journey through Computer Fundamentals
      </h1>
      <p className="mt-2 max-w-xl text-sm text-muted">
        Ten modules, in order — from the first idea of a computer to a final
        knowledge check.
      </p>

      <div className="relative mt-10 flex flex-col gap-6 sm:pl-8">
        <div className="absolute left-3 top-2 hidden h-[calc(100%-1rem)] w-px bg-border sm:block" />
        {modules.map((m) => {
          const moduleTopics = getTopicsByModule(m.id);
          const completedCount = progress
            ? moduleTopics.filter((t) => progress.completedSlugs.includes(t.slug)).length
            : 0;
          return (
            <div key={m.id} className="relative">
              <div className="absolute -left-8 top-6 hidden h-2.5 w-2.5 rounded-full border-2 border-accent bg-bg sm:block" />
              <ModuleCard module={m} completedCount={completedCount} />
            </div>
          );
        })}
      </div>
    </Container>
  );
}
