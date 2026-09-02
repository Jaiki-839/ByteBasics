import Link from "next/link";
import { SearchX } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function TopicNotFound() {
  return (
    <Container className="flex flex-col items-center py-24 text-center">
      <SearchX size={40} className="text-muted" />
      <h1 className="mt-4 font-display text-2xl font-semibold text-ink">Topic not found</h1>
      <p className="mt-2 max-w-sm text-sm text-muted">
        That topic doesn&apos;t exist yet, or the link is broken. Try the module
        roadmap to find what you&apos;re looking for.
      </p>
      <Button href="/modules" className="mt-6">
        Browse Modules
      </Button>
      <Link href="/" className="mt-3 text-xs text-muted hover:text-ink">
        Back to home
      </Link>
    </Container>
  );
}
