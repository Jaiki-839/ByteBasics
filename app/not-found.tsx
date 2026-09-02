import Link from "next/link";
import { CircuitBoard } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center py-24 text-center">
      <CircuitBoard size={40} className="text-muted" />
      <h1 className="mt-4 font-display text-2xl font-semibold text-ink">Page not found</h1>
      <p className="mt-2 max-w-sm text-sm text-muted">
        This page doesn&apos;t exist. Head back to the homepage or browse the
        module roadmap.
      </p>
      <Button href="/" className="mt-6">
        Back to Home
      </Button>
      <Link href="/modules" className="mt-3 text-xs text-muted hover:text-ink">
        Browse Modules
      </Link>
    </Container>
  );
}
