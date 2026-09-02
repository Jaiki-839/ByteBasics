"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export function EasterEggs() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log(
      "%cByteBasics",
      "font-weight: 700; font-size: 16px; color: #2F6FED;",
      "\nHello, World! Curious how this was built? The source is data-driven — check /data/topics."
    );

    let buffer: string[] = [];
    function onKeyDown(e: KeyboardEvent) {
      buffer = [...buffer, e.key].slice(-KONAMI.length);
      if (buffer.join(",") === KONAMI.join(",")) {
        setShow(true);
        setTimeout(() => setShow(false), 3500);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-xl border border-accent bg-surface px-5 py-3 font-mono text-sm text-accent shadow-lg"
        >
          01000111 01000101 01000101 01001011 — nice find.
        </motion.div>
      )}
    </AnimatePresence>
  );
}
