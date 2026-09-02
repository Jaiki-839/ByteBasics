import { CheckCircle2 } from "lucide-react";
import { ImportantTerm } from "@/lib/types";

export function KeyPointCard({ point, index }: { point: string; index: number }) {
  return (
    <div className="flex gap-3 rounded-xl border border-border bg-surface p-4">
      <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-accent" />
      <p className="text-sm leading-relaxed text-ink">{point}</p>
    </div>
  );
}

export function TermCard({ term }: { term: ImportantTerm }) {
  return (
    <div className="rounded-xl border border-border bg-surface2 p-4">
      <p className="font-mono text-sm font-medium text-accent">{term.term}</p>
      <p className="mt-1.5 text-sm text-muted">{term.definition}</p>
    </div>
  );
}
