"use client";

import { useEffect, useState } from "react";
import { RotateCcw } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { DashboardStats, ContinueLearningCard } from "@/components/learning/DashboardStats";
import { ProgressBar } from "@/components/learning/ProgressBar";
import { loadProgress, touchStreak, resetProgress, ProgressState } from "@/lib/progress";
import { TOTAL_TOPIC_COUNT } from "@/data/modules";

export default function LearnPage() {
  const [progress, setProgress] = useState<ProgressState | null>(null);

  useEffect(() => {
    setProgress(touchStreak());
  }, []);

  if (!progress) {
    return (
      <Container className="py-16">
        <p className="text-sm text-muted">Loading your progress…</p>
      </Container>
    );
  }

  const percent = Math.round((progress.completedSlugs.length / TOTAL_TOPIC_COUNT) * 100);

  return (
    <Container className="py-12">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-wide text-accent">Your dashboard</p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-ink">
            Overall Progress: {percent}%
          </h1>
        </div>
        <button
          onClick={() => setProgress(resetProgress())}
          className="flex items-center gap-1.5 text-xs text-muted hover:text-danger"
        >
          <RotateCcw size={13} /> Reset progress
        </button>
      </div>

      <div className="mt-4 max-w-xl">
        <ProgressBar percent={percent} />
      </div>

      <div className="mt-8">
        <DashboardStats progress={progress} />
      </div>

      <div className="mt-6">
        <ContinueLearningCard progress={progress} />
      </div>
    </Container>
  );
}
