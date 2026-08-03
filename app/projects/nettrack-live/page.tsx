"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NetTrackRedirectPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/projects/geotraffic-live");
  }, [router]);

  return (
    <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center font-mono text-xs text-slate-500">
      Redirecting to GeoTrafficLive case study...
    </div>
  );
}
