import { ArrowRight, Compass } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroCanvas } from "@/components/3d/SceneCanvas";
import { ArchitectureDiagram } from "@/components/diagrams/ArchitectureDiagram";
import { modules, TOTAL_TOPIC_COUNT } from "@/data/modules";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-texture border-b border-border">
        <Container className="grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs text-muted">
              {TOTAL_TOPIC_COUNT} topics · 10 modules
            </span>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl">
              Understand Computers. Build Digital Knowledge.
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
              A structured and interactive guide to Computer Fundamentals — from
              basic concepts to architecture, software, networking and cybersecurity.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/topics/what-is-a-computer">
                Start Learning <ArrowRight size={15} />
              </Button>
              <Button href="/modules" variant="secondary">
                <Compass size={15} /> Explore Topics
              </Button>
            </div>
          </div>

          <div className="h-[340px] sm:h-[420px]">
            <HeroCanvas />
          </div>
        </Container>
      </section>

      {/* Architecture preview */}
      <section className="border-b border-border py-16">
        <Container>
          <p className="font-mono text-xs uppercase tracking-wide text-accent">Interactive diagram</p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">
            See how a computer actually processes data
          </h2>
          <p className="mt-2 max-w-xl text-sm text-muted">
            Click through the input, CPU, memory, and output stages below.
          </p>
          <div className="mt-8">
            <ArchitectureDiagram />
          </div>
        </Container>
      </section>

      {/* Roadmap teaser */}
      <section className="py-16">
        <Container>
          <div className="flex items-end justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-accent">Curriculum</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">
                Ten modules, start to finish
              </h2>
            </div>
            <Button href="/modules" variant="ghost" className="hidden sm:inline-flex">
              View all <ArrowRight size={14} />
            </Button>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((m) => (
              <div key={m.id} className="rounded-2xl border border-border bg-surface p-5">
                <p className="font-mono text-xs text-accent">Module {String(m.id).padStart(2, "0")}</p>
                <p className="mt-1 font-display text-base font-semibold text-ink">{m.title}</p>
                <p className="mt-1 text-xs text-muted">{m.topicTitles.length} topics</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
