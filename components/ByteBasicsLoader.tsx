"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function ByteBasicsLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#050505]"
        >
          {/* Background Grid */}
          <div className="absolute inset-0 opacity-[0.08]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          {/* Glow */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-72 w-72 rounded-full bg-cyan-500/20 blur-[100px]"
          />

          <div className="relative flex flex-col items-center">
            {/* Brand */}
            <div className="relative overflow-hidden">
              <motion.h1
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                }}
                className="text-4xl font-black tracking-[0.2em] text-white sm:text-6xl"
              >
                BYTE
                <span className="text-cyan-400">BASICS</span>
              </motion.h1>

              {/* Scan Line */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{
                  duration: 1.1,
                  delay: 0.3,
                  ease: "easeInOut",
                }}
                className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              />
            </div>

            {/* Terminal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-5 flex items-center gap-2 font-mono text-xs text-zinc-500"
            >
              <span className="text-cyan-400">&gt;</span>

              <span>initializing knowledge</span>

              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                }}
              >
                _
              </motion.span>
            </motion.div>

            {/* Loading Bar */}
            <div className="mt-7 h-[2px] w-52 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 1.6,
                  ease: "easeInOut",
                }}
                className="h-full bg-cyan-400"
              />
            </div>

            {/* Percentage */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-3 font-mono text-[10px] tracking-[0.3em] text-zinc-600"
            >
              SYSTEM READY
            </motion.div>
          </div>

          {/* Corner Decorations */}
          <div className="absolute left-6 top-6 h-8 w-8 border-l border-t border-cyan-400/30" />
          <div className="absolute right-6 top-6 h-8 w-8 border-r border-t border-cyan-400/30" />
          <div className="absolute bottom-6 left-6 h-8 w-8 border-b border-l border-cyan-400/30" />
          <div className="absolute bottom-6 right-6 h-8 w-8 border-b border-r border-cyan-400/30" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

