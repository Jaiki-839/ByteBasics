"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { CircuitBoard } from "lucide-react";

const LabScene = dynamic(
  () =>
    import("@/components/3d/LabScene").then(
      (m) => m.LabScene
    ),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center">
        <div className="animate-float text-accent">
          <CircuitBoard size={56} strokeWidth={1.2} />
        </div>
      </div>
    ),
  }
);

interface LabComponentInfo {
  id: string;
  name: string;
  whatItDoes: string;
  whyItMatters: string;
  keySpecs: string[];
  relatedTopicSlug?: string;
  relatedTopicTitle?: string;
}

const LAB_COMPONENTS: LabComponentInfo[] = [
  {
    id: "cpu",
    name: "CPU",
    whatItDoes:
      "Executes instructions — the arithmetic, logic, and control operations that make software run.",
    whyItMatters:
      "Every calculation your device performs, from opening an app to rendering a game, passes through it.",
    keySpecs: ["Clock speed (GHz)", "Core count", "Cache size"],
    relatedTopicSlug: "what-is-a-computer",
    relatedTopicTitle: "What is a Computer?",
  },
  {
    id: "ram",
    name: "RAM",
    whatItDoes:
      "Temporarily holds data and instructions the CPU is actively using, for near-instant access.",
    whyItMatters:
      "More RAM means more programs can stay ready to use at once, without slowing down.",
    keySpecs: [
      "Capacity (GB)",
      "Speed (MHz)",
      "Volatile — cleared on power-off",
    ],
  },
  {
    id: "motherboard",
    name: "Motherboard",
    whatItDoes:
      "The main circuit board that connects the CPU, memory, storage, and every other component together.",
    whyItMatters:
      "It's the physical backbone that lets every other part communicate.",
    keySpecs: ["Form factor", "Chipset", "Expansion slots"],
  },
  {
    id: "gpu",
    name: "GPU",
    whatItDoes:
      "A specialised processor built for handling many calculations in parallel, especially for graphics.",
    whyItMatters:
      "Powers everything from smooth video playback to 3D games and AI model training.",
    keySpecs: ["VRAM", "Core count", "Parallel processing"],
  },
  {
    id: "ssd",
    name: "SSD",
    whatItDoes:
      "Stores data permanently using flash memory chips, with no moving parts.",
    whyItMatters:
      "Far faster than a traditional hard drive, which is why modern devices boot and load apps quickly.",
    keySpecs: ["Capacity", "Read/write speed", "Non-volatile storage"],
  },
  {
    id: "psu",
    name: "Power Supply",
    whatItDoes:
      "Converts electricity from the wall outlet into the specific voltages each component needs.",
    whyItMatters:
      "Every other component depends on it for stable, reliable power.",
    keySpecs: ["Wattage", "Efficiency rating", "Connector types"],
  },
];

export default function LabPage() {
  const [selected, setSelected] = useState<string | null>(null);

  const info = LAB_COMPONENTS.find(
    (component) => component.id === selected
  );

  return (
    <Container className="py-12">
      <p className="font-mono text-xs uppercase tracking-wide text-accent">
        3D Computer Lab
      </p>

      <h1 className="mt-2 font-display text-3xl font-semibold text-ink">
        Explore a computer, component by component
      </h1>

      <p className="mt-2 max-w-xl text-sm text-muted">
        Select a part on the model to see what it does and why it matters.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        {/* 3D Model */}
        <div className="h-[420px] rounded-2xl border border-border bg-surface">
          <LabScene
            onSelect={setSelected}
            selected={selected}
          />
        </div>

        {/* Component Information */}
        <div className="rounded-2xl border border-border bg-surface p-6">
          {info ? (
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-accent">
                {info.name}
              </p>

              <h2 className="mt-1 font-display text-xl font-semibold text-ink">
                What it does
              </h2>

              <p className="mt-1.5 text-sm text-muted">
                {info.whatItDoes}
              </p>

              <h3 className="mt-4 font-display text-base font-semibold text-ink">
                Why it matters
              </h3>

              <p className="mt-1.5 text-sm text-muted">
                {info.whyItMatters}
              </p>

              <h3 className="mt-4 font-display text-base font-semibold text-ink">
                Key concepts
              </h3>

              <ul className="mt-1.5 flex flex-col gap-1">
                {info.keySpecs.map((spec) => (
                  <li
                    key={spec}
                    className="text-sm text-muted"
                  >
                    · {spec}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="text-sm text-muted">
              Click a component in the model to see its details here.
            </p>
          )}
        </div>
      </div>

      {/* Component Selector */}
      <div className="mt-6 flex flex-wrap gap-2">
        {LAB_COMPONENTS.map((component) => (
          <button
            key={component.id}
            onClick={() => setSelected(component.id)}
            className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
              selected === component.id
                ? "border-accent bg-accent/10 text-accent"
                : "border-border text-muted hover:text-ink"
            }`}
          >
            {component.name}
          </button>
        ))}
      </div>
    </Container>
  );
}

