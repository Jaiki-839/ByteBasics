"use client";

import { motion } from "framer-motion";
import { RotateCcw, BookOpen, ArrowRight } from "lucide-react";
import { recordQuizScore } from "@/lib/progress";
import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export function QuizResult({
  total,
  correctCount,
  elapsedMs,
  onRetry,
  moduleId,
}: {
  total: number;
  correctCount: number;
  elapsedMs: number;
  onRetry: () => void;
  moduleId: number;
}) {
  const score = Math.round((correctCount / total) * 100);
  const seconds = Math.round(elapsedMs / 1000);

  useEffect(() => {
    recordQuizScore(moduleId, score);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-border bg-surface p-8 text-center"
    >
      <p className="text-sm text-muted">Your Score</p>
      <p className="mt-1 font-display text-6xl font-semibold text-accent">{score}%</p>

      <div className="mx-auto mt-6 grid max-w-sm grid-cols-3 gap-4 text-sm">
        <div>
          <p className="font-display text-xl font-semibold text-ink">{correctCount}</p>
          <p className="text-xs text-muted">Correct</p>
        </div>
        <div>
          <p className="font-display text-xl font-semibold text-ink">{total - correctCount}</p>
          <p className="text-xs text-muted">Incorrect</p>
        </div>
        <div>
          <p className="font-display text-xl font-semibold text-ink">{seconds}s</p>
          <p className="text-xs text-muted">Time</p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button variant="secondary" onClick={onRetry}>
          <RotateCcw size={15} /> Retry Quiz
        </Button>
        <Button href="/modules" variant="secondary">
          <BookOpen size={15} /> Review Topics
        </Button>
        <Button href="/learn">
          Back to Learning <ArrowRight size={15} />
        </Button>
      </div>
    </motion.div>
  );
}
