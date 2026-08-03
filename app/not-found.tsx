"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-slate-900 flex flex-col items-center justify-center p-4 relative overflow-hidden select-none">
      
      {/* Background glow meshes */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-[var(--accent-primary)]/5 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[var(--accent-secondary)]/5 blur-3xl -z-10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center max-w-md w-full bg-white/50 backdrop-blur-md border border-white/80 p-8 sm:p-12 rounded-3xl shadow-xl flex flex-col items-center"
      >
        <span className="text-xs font-mono font-bold tracking-widest text-[var(--accent-primary)] uppercase mb-2">
          ERROR 404
        </span>
        <h1 className="text-6xl font-black text-slate-900 tracking-tight mb-4">
          Lost?
        </h1>
        <p className="text-slate-600 text-sm font-medium leading-relaxed mb-8">
          The routing index returned no matches. The page you are looking for has been relocated or doesn't exist.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-3 w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white rounded-full font-bold text-xs sm:text-sm transition-colors cursor-pointer shadow-md"
          >
            <Home size={15} /> Return Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
