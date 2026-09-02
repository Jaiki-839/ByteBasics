"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, CircuitBoard } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { CommandPalette } from "./CommandPalette";
import { loadProgress } from "@/lib/progress";
import { TOTAL_TOPIC_COUNT } from "@/data/modules";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/learn", label: "Learn" },
  { href: "/modules", label: "Modules" },
  { href: "/lab", label: "3D Lab" },
  { href: "/notes", label: "Quick Notes" },
  { href: "/quiz", label: "Quiz" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setCompleted(loadProgress().completedSlugs.length);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
          <CircuitBoard size={20} className="text-accent" strokeWidth={2.2} />
          ByteBasics
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm transition-colors ${
                  active ? "bg-surface2 text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <CommandPalette />
          </div>
          <ThemeToggle />
          <Link
            href="/learn"
            className="hidden items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs text-muted sm:flex"
          >
            <span className="font-mono text-ink">{completed}</span>/{TOTAL_TOPIC_COUNT}
          </Link>
          <button
            className="grid h-9 w-9 place-items-center rounded-lg border border-border lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-border px-5 pb-4 lg:hidden">
          <div className="flex flex-col gap-1 pt-2">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-ink hover:bg-surface2"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
