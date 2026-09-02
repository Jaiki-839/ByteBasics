"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { CircuitBoard } from "lucide-react";

const HeroScene = dynamic(() => import("./HeroScene").then((m) => m.HeroScene), {
  ssr: false,
  loading: () => <SceneFallback />,
});

function SceneFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="animate-float text-accent">
        <CircuitBoard size={64} strokeWidth={1.2} />
      </div>
    </div>
  );
}

export function HeroCanvas() {
  const [isCapable, setIsCapable] = useState(true);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const narrow = window.innerWidth < 640;
    setIsCapable(!reduceMotion && !narrow);
  }, []);

  if (!isCapable) return <SceneFallback />;

  return (
    <div className="h-full w-full">
      <HeroScene />
    </div>
  );
}
