"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import { QuizQuestion } from "@/lib/types";
import { QuizResult } from "./QuizResult";

export function QuizEngine({
  questions,
  moduleId,
  onFinish,
}: {
  questions: QuizQuestion[];
  moduleId: number;
  onFinish?: (scorePercent: number) => void;
}) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [finished, setFinished] = useState(false);
  const [startTime] = useState(() => Date.now());

  const current = questions[index];
  const isLast = index === questions.length - 1;

  function selectOption(i: number) {
    if (selected !== null) return; // lock after first pick
    setSelected(i);
  }

  function next() {
    const newAnswers = [...answers, selected];
    setAnswers(newAnswers);
    setSelected(null);
    if (isLast) {
      const correct = newAnswers.filter((a, i) => a === questions[i].correctIndex).length;
      const score = Math.round((correct / questions.length) * 100);
      onFinish?.(score);
      setFinished(true);
    } else {
      setIndex((i) => i + 1);
    }
  }

  function retry() {
    setIndex(0);
    setSelected(null);
    setAnswers([]);
    setFinished(false);
  }

  if (finished) {
    const correctCount = answers.filter((a, i) => a === questions[i].correctIndex).length;
    return (
      <QuizResult
        total={questions.length}
        correctCount={correctCount}
        elapsedMs={Date.now() - startTime}
        onRetry={retry}
        moduleId={moduleId}
      />
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <div className="mb-6 flex items-center justify-between text-xs text-muted">
        <span>
          Question {String(index + 1).padStart(2, "0")} / {questions.length}
        </span>
        <div className="h-1.5 w-32 overflow-hidden rounded-full bg-surface2">
          <div
            className="h-full rounded-full bg-accent transition-[width] duration-300"
            style={{ width: `${((index + (selected !== null ? 1 : 0)) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -12 }}
          transition={{ duration: 0.15 }}
        >
          <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">
            {current.question}
          </h3>

          <div className="mt-5 flex flex-col gap-3">
            {current.options.map((opt, i) => {
              const isCorrect = i === current.correctIndex;
              const isPicked = selected === i;
              const revealed = selected !== null;

              let stateClasses = "border-border hover:border-accent/50";
              if (revealed && isCorrect) stateClasses = "border-teal bg-teal/10";
              else if (revealed && isPicked && !isCorrect) stateClasses = "border-danger bg-danger/10";

              return (
                <button
                  key={i}
                  onClick={() => selectOption(i)}
                  disabled={revealed}
                  className={`flex items-center justify-between rounded-xl border px-4 py-3 text-left text-sm text-ink transition-colors ${stateClasses}`}
                >
                  <span>
                    <span className="mr-2 text-muted">{String.fromCharCode(65 + i)}.</span>
                    {opt}
                  </span>
                  {revealed && isCorrect && <CheckCircle2 size={16} className="text-teal" />}
                  {revealed && isPicked && !isCorrect && <XCircle size={16} className="text-danger" />}
                </button>
              );
            })}
          </div>

          {selected !== null && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 rounded-xl bg-surface2 p-4"
            >
              <p className="text-sm font-medium text-ink">
                {selected === current.correctIndex ? "Correct!" : "Not quite."}
              </p>
              <p className="mt-1 text-sm text-muted">{current.explanation}</p>
              <button
                onClick={next}
                className="mt-3 inline-flex items-center rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-hover"
              >
                {isLast ? "See Results" : "Next Question"}
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
