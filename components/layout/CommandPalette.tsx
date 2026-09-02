"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, FileText, Layers, Tag } from "lucide-react";
import { useRouter } from "next/navigation";
import { search, SearchResult } from "@/lib/search";

const ICONS: Record<SearchResult["group"], typeof FileText> = {
  Topics: FileText,
  Terms: Tag,
  Modules: Layers,
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const results = search(query);

  function go(href: string) {
    setOpen(false);
    setQuery("");
    router.push(href);
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex h-9 items-center gap-2 rounded-lg border border-border px-3 text-sm text-muted transition-colors hover:bg-surface2"
      >
        <Search size={15} />
        <span className="hidden sm:inline">Search</span>
        <kbd className="hidden rounded border border-border bg-surface2 px-1.5 py-0.5 text-[10px] sm:inline">
          Ctrl K
        </kbd>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-start justify-center bg-ink/40 pt-24 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.16 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl"
            >
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <Search size={16} className="text-muted" />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search topics, terms, modules…"
                  className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-muted"
                />
                <kbd className="rounded border border-border px-1.5 py-0.5 text-[10px] text-muted">Esc</kbd>
              </div>

              <div className="max-h-80 overflow-y-auto scrollbar-thin py-2">
                {query && results.length === 0 && (
                  <p className="px-4 py-6 text-center text-sm text-muted">
                    No results for &ldquo;{query}&rdquo;.
                  </p>
                )}
                {results.map((r) => {
                  const Icon = ICONS[r.group];
                  return (
                    <button
                      key={r.group + r.title + r.href}
                      onClick={() => go(r.href)}
                      className="flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors hover:bg-surface2"
                    >
                      <Icon size={15} className="shrink-0 text-accent" />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm text-ink">{r.title}</span>
                        {r.subtitle && (
                          <span className="block truncate text-xs text-muted">{r.subtitle}</span>
                        )}
                      </span>
                      <span className="shrink-0 text-[10px] uppercase text-muted">{r.group}</span>
                    </button>
                  );
                })}
                {!query && (
                  <p className="px-4 py-6 text-center text-sm text-muted">
                    Try &ldquo;binary&rdquo;, &ldquo;CPU&rdquo;, or &ldquo;phishing&rdquo;.
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
