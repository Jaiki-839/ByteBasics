"use client";

import Link from "next/link";
import { ArrowRight, Flame, CheckCircle2, ListTodo, Trophy } from "lucide-react";
import { ProgressState } from "@/lib/progress";
import { TOTAL_TOPIC_COUNT, modules, getModule } from "@/data/modules";
import { getTopicBySlug } from "@/data/topics";
import { ProgressBar } from "./ProgressBar";

export function DashboardStats({ progress }: { progress: ProgressState }) {
  const completed = progress.completedSlugs.length;
  const remaining = TOTAL_TOPIC_COUNT - completed;
  const avgScore = progress.quizScores.length
    ? Math.round(
        progress.quizScores.reduce((sum, q) => sum + q.score, 0) / progress.quizScores.length
      )
    : null;

  const stats = [
    { icon: CheckCircle2, label: "Topics completed", value: completed },
    { icon: ListTodo, label: "Topics remaining", value: remaining },
    { icon: Trophy, label: "Avg. quiz score", value: avgScore !== null ? `${avgScore}%` : "—" },
    { icon: Flame, label: "Day streak", value: progress.streakDays },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="rounded-2xl border border-border bg-surface p-5">
          <s.icon size={18} className="text-accent" />
          <p className="mt-3 font-display text-2xl font-semibold text-ink">{s.value}</p>
          <p className="mt-1 text-xs text-muted">{s.label}</p>
        </div>
      ))}
    </div>
  );
}

export function ContinueLearningCard({ progress }: { progress: ProgressState }) {
  const currentTopic = progress.currentSlug ? getTopicBySlug(progress.currentSlug) : undefined;
  const percent = Math.round((progress.completedSlugs.length / TOTAL_TOPIC_COUNT) * 100);

  if (!currentTopic) {
    return (
      <div className="rounded-2xl border border-border bg-surface p-6">
        <p className="font-display text-lg font-semibold text-ink">Ready to start?</p>
        <p className="mt-1 text-sm text-muted">
          Jump into Module 01 and build your foundation in Computer Fundamentals.
        </p>
        <Link
          href="/topics/what-is-a-computer"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent"
        >
          Start Learning <ArrowRight size={14} />
        </Link>
      </div>
    );
  }

  const mod = getModule(currentTopic.moduleId);

  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-wide text-muted">
            Continue · {mod?.title}
          </p>
          <p className="mt-1 font-display text-xl font-semibold text-ink">{currentTopic.title}</p>
        </div>
        <Link
          href={`/topics/${currentTopic.slug}`}
          className="inline-flex items-center gap-1.5 rounded-xl bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-hover"
        >
          Continue Learning <ArrowRight size={14} />
        </Link>
      </div>
      <div className="mt-4 flex items-center gap-3">
        <div className="flex-1">
          <ProgressBar percent={percent} />
        </div>
        <span className="font-mono text-xs text-muted">{percent}%</span>
      </div>
    </div>
  );
}
