"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface UnitInfo {
  id: string;
  label: string;
  title: string;
  body: string;
}

const UNITS: Record<string, UnitInfo> = {
  input: {
    id: "input",
    label: "Input",
    title: "Input Unit",
    body: "Accepts raw data and instructions from the outside world — a keyboard press, a mouse click, a scanned document — and converts it into a form the CPU can process.",
  },
  cu: {
    id: "cu",
    label: "CU",
    title: "Control Unit",
    body: "Directs the operation of the whole processor: it fetches instructions, decodes what they mean, and coordinates the ALU, registers, and memory to carry them out — without doing the arithmetic itself.",
  },
  alu: {
    id: "alu",
    label: "ALU",
    title: "Arithmetic Logic Unit",
    body: "Performs every arithmetic operation (addition, subtraction) and every logical comparison (equal to, greater than) the processor needs to carry out.",
  },
  registers: {
    id: "registers",
    label: "Registers",
    title: "Registers",
    body: "Extremely small, extremely fast storage locations built directly into the CPU, used to hold the data and instructions currently being worked on.",
  },
  memory: {
    id: "memory",
    label: "Memory",
    title: "Memory",
    body: "Temporarily holds data and instructions that are actively in use, so the CPU can fetch and access them far faster than pulling from long-term storage.",
  },
  output: {
    id: "output",
    label: "Output",
    title: "Output Unit",
    body: "Converts the CPU's processed results back into a form people can use — text on a screen, sound from a speaker, a printed page.",
  },
};

export function ArchitectureDiagram() {
  const [active, setActive] = useState<string | null>(null);
  const info = active ? UNITS[active] : null;

  const nodeClass = (id: string) =>
    `cursor-pointer rounded-xl border px-4 py-3 text-center text-sm transition-colors ${
      active === id
        ? "border-accent bg-accent/10 text-accent"
        : "border-border bg-surface text-ink hover:border-accent/50"
    }`;

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-2xl border border-border bg-surface p-6">
        <div className="flex flex-col items-center gap-3">
          <button className={nodeClass("input")} onClick={() => setActive("input")}>
            Input
          </button>

          <Arrow />

          <div className="w-full rounded-2xl border-2 border-dashed border-border p-4">
            <p className="mb-3 text-center text-xs uppercase tracking-wide text-muted">Central Processing Unit</p>
            <div className="grid grid-cols-3 gap-3">
              <button className={nodeClass("cu")} onClick={() => setActive("cu")}>
                Control Unit
              </button>
              <button className={nodeClass("alu")} onClick={() => setActive("alu")}>
                ALU
              </button>
              <button className={nodeClass("registers")} onClick={() => setActive("registers")}>
                Registers
              </button>
            </div>
          </div>

          <Arrow />

          <button className={nodeClass("memory")} onClick={() => setActive("memory")}>
            Memory
          </button>

          <Arrow />

          <button className={nodeClass("output")} onClick={() => setActive("output")}>
            Output
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-surface p-6">
        <AnimatePresence mode="wait">
          {info ? (
            <motion.div
              key={info.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.15 }}
            >
              <p className="font-mono text-xs uppercase tracking-wide text-accent">{info.label}</p>
              <h3 className="mt-1 font-display text-xl font-semibold text-ink">{info.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{info.body}</p>
            </motion.div>
          ) : (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-muted"
            >
              Click a unit on the diagram to see what it does.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <svg width="24" height="20" viewBox="0 0 24 20" className="text-accent">
      <line
        x1="12"
        y1="0"
        x2="12"
        y2="14"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="4 3"
        className="animate-data-flow"
      />
      <path d="M6 12 L12 20 L18 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
