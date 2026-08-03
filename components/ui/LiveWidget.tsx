"use client";

import { useEffect, useState, useRef } from "react";
import { Activity, Clock, Server, CheckCircle2, AlertCircle } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@/hooks/useGSAP";

export default function LiveWidget() {
  const [status, setStatus] = useState<"loading" | "online" | "offline">("loading");
  const [latency, setLatency] = useState<number | null>(null);
  const [lastCheck, setLastCheck] = useState<string>("");
  const [reducedMotion, setReducedMotion] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);

    // Initialize from cache if present
    const cachedLatency = localStorage.getItem("live_widget_latency");
    const cachedTime = localStorage.getItem("live_widget_time");
    if (cachedLatency && cachedTime) {
      setLatency(parseInt(cachedLatency, 10));
      setLastCheck(cachedTime);
      setStatus("online");
    }

    const checkStatus = async () => {
      const startTime = performance.now();
      try {
        // Ping a fast, public endpoint to measure actual dynamic round-trip latency
        const response = await fetch("https://httpbin.org/get", { cache: "no-store", signal: AbortSignal.timeout(4000) });
        if (response.ok) {
          const endTime = performance.now();
          const calculatedLatency = Math.round(endTime - startTime);
          const timeString = new Date().toLocaleTimeString();

          setLatency(calculatedLatency);
          setLastCheck(timeString);
          setStatus("online");

          localStorage.setItem("live_widget_latency", calculatedLatency.toString());
          localStorage.setItem("live_widget_time", timeString);
        } else {
          throw new Error("Endpoint returned non-ok status");
        }
      } catch (err) {
        console.warn("Live status endpoint check failed, using cached values:", err);
        setStatus("offline");
        if (!localStorage.getItem("live_widget_latency")) {
          setLastCheck(new Date().toLocaleTimeString());
        }
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 12000); // Check status every 12 seconds
    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    if (reducedMotion || status === "loading") return;
    gsap.fromTo(
      widgetRef.current,
      { opacity: 0, scale: 0.96 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
    );
  }, [status, reducedMotion]);

  return (
    <div
      ref={widgetRef}
      className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-700/60 shadow-2xl backdrop-blur-md max-w-sm w-full mx-auto"
    >
      <div className="flex items-center justify-between mb-4 border-b border-slate-700/40 pb-2">
        <div className="flex items-center gap-2">
          <Server className="text-[var(--accent-secondary)]" size={16} />
          <span className="text-xs font-mono font-bold text-slate-350 tracking-wider">SYSTEM DEPLOY TELEMETRY</span>
        </div>
        <div className="flex items-center gap-1.5">
          {status === "online" ? (
            <>
              <span className={`w-2 h-2 rounded-full bg-emerald-500 ${!reducedMotion && "animate-pulse"}`} />
              <span className="text-[10px] font-mono font-bold text-emerald-500">LIVE</span>
            </>
          ) : status === "offline" ? (
            <>
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span className="text-[10px] font-mono font-bold text-amber-500">FALLBACK</span>
            </>
          ) : (
            <>
              <span className="w-2 h-2 rounded-full bg-slate-500 animate-pulse" />
              <span className="text-[10px] font-mono font-bold text-slate-400">CONNECTING</span>
            </>
          )}
        </div>
      </div>

      <div className="space-y-3">
        {status === "loading" && !latency ? (
          <div className="animate-pulse space-y-2">
            <div className="h-6 bg-slate-800 rounded w-3/4" />
            <div className="h-4 bg-slate-800 rounded w-1/2" />
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400">API Diagnostic Status:</span>
              <span className="flex items-center gap-1 text-xs font-bold text-white">
                {status === "online" ? (
                  <>
                    <CheckCircle2 size={13} className="text-emerald-500" /> System Stable
                  </>
                ) : (
                  <>
                    <AlertCircle size={13} className="text-amber-500" /> Offline / Cached
                  </>
                )}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400">Response Latency:</span>
              <span className="text-xs font-mono font-bold text-[var(--accent-primary)] flex items-center gap-1">
                <Activity size={12} className="opacity-80" />
                {latency ? `${latency} ms` : "N/A"}
              </span>
            </div>

            <div className="flex items-center justify-between border-t border-slate-700/30 pt-2 mt-2">
              <span className="text-[10px] font-mono font-bold text-slate-500 flex items-center gap-1">
                <Clock size={11} /> Last Checked:
              </span>
              <span className="text-[10px] font-mono font-bold text-slate-400">{lastCheck || "Calculating..."}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
