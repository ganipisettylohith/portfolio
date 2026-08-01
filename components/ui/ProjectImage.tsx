"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Cpu, ShieldCheck, Database, Layers, BarChart3, LineChart, Server } from "lucide-react";

export default function ProjectImage({ src, alt }: { src?: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);

  // If real screenshot is not provided, render a designed abstract UI dashboard wireframe
  if (!src) {
    const isMedical = alt.toLowerCase().includes("medivision");
    const isNetwork = alt.toLowerCase().includes("nettrack");

    const accentColor = isMedical
      ? "from-teal-500/20 to-emerald-500/10 border-teal-500/30 text-teal-400"
      : isNetwork
      ? "from-sky-500/20 to-indigo-500/10 border-sky-500/30 text-sky-400"
      : "from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-400";

    const badgeColor = isMedical
      ? "bg-teal-500/20 text-teal-300 border-teal-500/30"
      : isNetwork
      ? "bg-sky-500/20 text-sky-300 border-sky-500/30"
      : "bg-amber-500/20 text-amber-300 border-amber-500/30";

    return (
      <div className="w-full aspect-[16/10] bg-stone-950 rounded-xl border border-white/10 overflow-hidden flex flex-col justify-between p-4 relative select-none font-mono text-[11px]">
        {/* Abstract Top Navigation Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${badgeColor}`}>
              {isMedical ? "DICOM ANALYZER v2.4" : isNetwork ? "PACKET SNIFFER v1.8" : "MULTI-AGENT ENGINE"}
            </span>
            <span className="text-stone-500 hidden sm:inline">• Live Dashboard</span>
          </div>
          <div className="flex items-center gap-3 text-stone-400">
            <span className="flex items-center gap-1"><Cpu size={12} /> 12% CPU</span>
            <span className="flex items-center gap-1"><Activity size={12} /> 18ms Latency</span>
          </div>
        </div>

        {/* Abstract Main Dashboard Content Grid */}
        <div className="grid grid-cols-12 gap-3 my-auto py-2 h-full">
          {/* Left Sidebar Wireframe */}
          <div className="col-span-3 bg-stone-900/80 rounded-lg p-2.5 border border-white/5 space-y-2 hidden sm:flex flex-col justify-between">
            <div className="space-y-1.5">
              <div className="h-2 w-16 bg-stone-700/80 rounded" />
              <div className="h-2 w-20 bg-stone-800 rounded" />
              <div className="h-2 w-14 bg-stone-800 rounded" />
            </div>
            <div className="space-y-1 pt-2 border-t border-white/5">
              <div className="h-1.5 w-12 bg-stone-700/60 rounded" />
              <div className="h-1.5 w-16 bg-stone-800/60 rounded" />
            </div>
          </div>

          {/* Right Main Analytics Workspace */}
          <div className="col-span-12 sm:col-span-9 flex flex-col justify-between space-y-2.5">
            {/* Top Metric Cards Row */}
            <div className="grid grid-cols-3 gap-2">
              <div className={`p-2.5 rounded-lg bg-gradient-to-br ${accentColor} border`}>
                <span className="text-[9px] text-stone-400 block uppercase">
                  {isMedical ? "Scans Analyzed" : isNetwork ? "Packets / sec" : "Active Agents"}
                </span>
                <span className="text-sm font-bold text-white block mt-0.5">
                  {isMedical ? "1,420" : isNetwork ? "18,400" : "4 Specialized"}
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-stone-900/90 border border-white/5">
                <span className="text-[9px] text-stone-400 block uppercase">Confidence Score</span>
                <span className="text-sm font-bold text-emerald-400 block mt-0.5">98.4%</span>
              </div>
              <div className="p-2.5 rounded-lg bg-stone-900/90 border border-white/5">
                <span className="text-[9px] text-stone-400 block uppercase">Vector Store</span>
                <span className="text-sm font-bold text-stone-200 block mt-0.5">pgvector HNSW</span>
              </div>
            </div>

            {/* Main Visual Chart Block Wireframe */}
            <div className="bg-stone-900/90 rounded-lg p-3 border border-white/5 flex-1 flex flex-col justify-between relative overflow-hidden">
              <div className="flex items-center justify-between text-[10px] text-stone-400 mb-2">
                <span className="font-semibold text-stone-300">
                  {isMedical ? "Grad-CAM Activation Heatmap Overlay" : isNetwork ? "Real-Time Traffic Protocol Distribution" : "Agent Intent Routing Matrix"}
                </span>
                <BarChart3 size={14} />
              </div>

              {/* Wireframe Bar Graph Lines */}
              <div className="flex items-end justify-between h-20 gap-1.5 pt-2">
                {[40, 65, 30, 85, 95, 60, 75, 50, 90, 70, 80, 60].map((h, i) => (
                  <div key={i} className="flex-1 bg-stone-800 rounded-t overflow-hidden h-full flex flex-col justify-end">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 0.8, delay: i * 0.05 }}
                      className={`w-full bg-gradient-to-t ${
                        isMedical ? "from-teal-600 to-emerald-400" : isNetwork ? "from-sky-600 to-indigo-400" : "from-amber-600 to-orange-400"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Abstract Footer Bar */}
        <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] text-stone-500">
          <span>SYSTEM READY • STABLE</span>
          <span>UI PREVIEW MOCKUP</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-stone-900">
      <AnimatePresence>
        {!loaded && (
          <motion.div exit={{ opacity: 0 }} className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-10 h-10 rounded-full border-2 border-white/10 border-t-amber-500"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
