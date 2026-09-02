"use client";

import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";
import { ModuleMeta } from "@/lib/types";
import { ProgressBar } from "./ProgressBar";

export function ModuleCard({
  module,
  completedCount,
}: {
  module: ModuleMeta;
  completedCount: number;
}) {
  const total = module.topicTitles.length;
  const percent = total ? Math.round((completedCount / total) * 100) : 0;
  const hasContent = module.availableSlugs.length > 0;
  const firstSlug = module.availableSlugs[0];

  return (
    <div id={`module-${module.id}`} className="rounded-2xl border border-border bg-surface p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-wide text-accent">
            Module {String(module.id).padStart(2, "0")}
          </p>
          <h3 className="mt-1 font-display text-xl font-semibold text-ink">{module.title}</h3>
          <p className="mt-1.5 text-sm text-muted">{module.description}</p>
        </div>
        {!hasContent && (
          <span className="flex shrink-0 items-center gap-1 rounded-full border border-border px-2.5 py-1 text-xs text-muted">
            <Lock size={11} /> Soon
          </span>
        )}
      </div>

      <div className="mt-4 flex items-center gap-3 text-xs text-muted">
        <span>{total} topics</span>
        <span>·</span>
        <span>{percent}% complete</span>
      </div>
      <div className="mt-2">
        <ProgressBar percent={percent} />
      </div>

      {hasContent ? (
        <Link
          href={`/topics/${firstSlug}`}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent"
        >
          {completedCount > 0 ? "Continue module" : "Start module"}
          <ArrowRight size={14} />
        </Link>
      ) : (
        <p className="mt-5 text-sm text-muted">Content for this module is coming soon.</p>
      )}
    </div>
  );
}
