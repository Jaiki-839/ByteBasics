import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto max-w-6xl px-5", className)}>{children}</div>;
}

export function Badge({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "accent" | "teal" }) {
  const tones = {
    default: "border-border text-muted",
    accent: "border-accent/30 text-accent bg-accent/5",
    teal: "border-teal/30 text-teal bg-teal/5",
  };
  return (
    <span className={cn("inline-flex items-center rounded-full border px-2.5 py-1 text-xs", tones[tone])}>
      {children}
    </span>
  );
}
