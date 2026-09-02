"use client";

import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { QuizQuestion } from "@/lib/types";

export function QuickCheck({ questions }: { questions: QuizQuestion[] }) {
  const [picked, setPicked] = useState<Record<string, number>>({});

  return (
    <div className="flex flex-col gap-5">
      {questions.map((q) => {
        const selected = picked[q.id];
        return (
          <div key={q.id} className="rounded-xl border border-border bg-surface p-4">
            <p className="text-sm font-medium text-ink">{q.question}</p>
            <div className="mt-3 flex flex-col gap-2">
              {q.options.map((opt, i) => {
                const revealed = selected !== undefined;
                const isCorrect = i === q.correctIndex;
                let cls = "border-border hover:border-accent/50";
                if (revealed && isCorrect) cls = "border-teal bg-teal/10";
                else if (revealed && selected === i && !isCorrect) cls = "border-danger bg-danger/10";
                return (
                  <button
                    key={i}
                    disabled={revealed}
                    onClick={() => setPicked((p) => ({ ...p, [q.id]: i }))}
                    className={`flex items-center justify-between rounded-lg border px-3 py-2 text-left text-sm text-ink transition-colors ${cls}`}
                  >
                    <span>{opt}</span>
                    {revealed && isCorrect && <CheckCircle2 size={14} className="text-teal" />}
                    {revealed && selected === i && !isCorrect && <XCircle size={14} className="text-danger" />}
                  </button>
                );
              })}
            </div>
            {selected !== undefined && (
              <p className="mt-2 text-xs text-muted">{q.explanation}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
