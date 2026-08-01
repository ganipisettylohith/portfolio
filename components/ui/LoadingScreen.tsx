"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F6F8FB]"
        >
          <div className="relative flex flex-col items-center">
            {/* Glowing Logo ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 rounded-full border-2 border-amber-200 border-t-[var(--accent-primary)] border-r-[var(--accent-tertiary)] shadow-lg shadow-amber-900/10"
            />
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-6 text-center"
            >
              <h2 className="text-xl font-bold tracking-tight text-slate-900">
                G. Lohith
              </h2>
              <p className="text-xs text-[var(--accent-primary)] font-medium tracking-wider uppercase mt-1">
                AI/ML Engineer • Full Stack Developer
              </p>
            </motion.div>

            {/* Progress line */}
            <div className="w-48 h-1 bg-stone-200 rounded-full mt-6 overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-[#C7622B] via-[#D9A441] to-[#2F6E5C] rounded-full"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
