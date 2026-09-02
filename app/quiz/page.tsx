"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { QuizEngine } from "@/components/quiz/QuizEngine";
import { modules } from "@/data/modules";
import { getTopicsByModule } from "@/data/topics";

export default function QuizPage() {
  const quizableModules = modules.filter((m) => m.availableSlugs.length > 0);
  const [moduleId, setModuleId] = useState<number>(quizableModules[0]?.id ?? 1);
  const [key, setKey] = useState(0); // remount QuizEngine on module switch

  const questions = getTopicsByModule(moduleId).flatMap((t) => t.quizQuestions);
  const mod = modules.find((m) => m.id === moduleId);

  return (
    <Container className="py-12">
      <p className="font-mono text-xs uppercase tracking-wide text-accent">Test yourself</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-ink">Quiz</h1>
      <p className="mt-2 max-w-xl text-sm text-muted">
        Pick a module and work through its questions. You'll get instant feedback after every answer.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {modules.map((m) => {
          const available = m.availableSlugs.length > 0;
          return (
            <button
              key={m.id}
              disabled={!available}
              onClick={() => {
                setModuleId(m.id);
                setKey((k) => k + 1);
              }}
              className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                m.id === moduleId
                  ? "border-accent bg-accent/10 text-accent"
                  : available
                  ? "border-border text-muted hover:text-ink"
                  : "cursor-not-allowed border-border text-muted/40"
              }`}
            >
              M{m.id}: {m.title}
            </button>
          );
        })}
      </div>

      {questions.length > 0 ? (
        <div className="mt-8 max-w-xl">
          <QuizEngine key={key} questions={questions} moduleId={moduleId} />
        </div>
      ) : (
        <p className="mt-8 text-sm text-muted">
          This module doesn't have a quiz yet — check back once its content ships.
        </p>
      )}
    </Container>
  );
}
