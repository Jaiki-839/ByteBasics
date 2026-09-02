import { Container } from "@/components/ui/Container";
import { TOTAL_TOPIC_COUNT, modules } from "@/data/modules";

export default function AboutPage() {
  return (
    <Container className="py-12">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_280px]">
        {/* Left Content */}
        <div>
          <p className="font-mono text-xs uppercase tracking-wide text-accent">
            About the Project
          </p>

          <h1 className="mt-2 font-display text-3xl font-semibold text-ink">
            ByteBasics
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            ByteBasics is an interactive Computer Fundamentals learning
            platform designed to make computer concepts easier to understand,
            explore, and remember. It combines the simplicity of a textbook
            with the experience of a modern learning dashboard and interactive
            laboratory.
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            The platform covers{" "}
            <span className="font-medium text-ink">
              {TOTAL_TOPIC_COUNT} topics
            </span>{" "}
            across{" "}
            <span className="font-medium text-ink">
              {modules.length} modules
            </span>
            , starting from basic computer concepts and moving through
            hardware, software, operating systems, computer architecture,
            networking, cybersecurity, and other essential fundamentals.
          </p>

          {/* What You Get */}
          <div className="mt-8">
            <h2 className="font-display text-lg font-semibold text-ink">
              What You Get
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
              Each topic is structured to help you learn without getting
              overwhelmed. You get clear definitions, simple explanations,
              important points, real-world examples, key terminology, and
              quick checks to test your understanding.
            </p>

            <ul className="mt-4 grid max-w-2xl gap-2 text-sm text-muted sm:grid-cols-2">
              <li>• Easy-to-understand explanations</li>
              <li>• Real-world examples</li>
              <li>• Important terms & key points</li>
              <li>• Interactive learning experience</li>
              <li>• Quick knowledge checks</li>
              <li>• Computer fundamentals from basics to advanced concepts</li>
            </ul>
          </div>

          {/* Project */}
          <div className="mt-8">
            <h2 className="font-display text-lg font-semibold text-ink">
             Behind This Project
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
              ByteBasics is a project given by{" "}
              <span className="font-medium text-ink">Bikesh Sir</span> with
              the goal of creating a useful and engaging platform for learning
              Computer Fundamentals. The idea is not just to present
              information, but to turn the learning process into something
              structured, interactive, and enjoyable.
            </p>
          </div>

          {/* Builder */}
          <div className="mt-8">
            <h2 className="font-display text-lg font-semibold text-ink">
              Who Built ByteBasics?
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
              ByteBasics is designed and developed by{" "}
              <span className="font-medium text-ink">Jaiki Kushwaha</span>, a
              frontend web developer and creator focused on building modern,
              interactive web experiences. The project brings together
              frontend development, UI design, educational content, and
              interactive components into one learning platform.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
              The goal is simple: build something that feels less like a
              traditional textbook and more like a place where you can
              actually explore, understand, and experiment with computer
              fundamentals.
            </p>
          </div>

          <p className="mt-10 text-xs text-muted">
            Built with curiosity, code, and the goal of making Computer
            Fundamentals easier to learn.
          </p>
        </div>

       
       
      </div>
    </Container>
  );
}


