export default function Loading() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] flex flex-col items-center justify-center p-6 relative overflow-hidden select-none">
      
      {/* Background glow meshes */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-[var(--accent-primary)]/5 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[var(--accent-secondary)]/5 blur-3xl -z-10 pointer-events-none" />

      {/* Loading Skeleton Panel */}
      <div className="w-full max-w-2xl bg-white/40 backdrop-blur-md border border-white/60 p-8 rounded-3xl shadow-lg space-y-6 animate-pulse">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-slate-200 rounded-2xl" />
          <div className="space-y-2 flex-1">
            <div className="h-4 bg-slate-200 rounded w-1/3" />
            <div className="h-3 bg-slate-250 rounded w-1/4" />
          </div>
        </div>

        <div className="space-y-3 pt-4 border-t border-slate-200/50">
          <div className="h-3 bg-slate-200 rounded w-full" />
          <div className="h-3 bg-slate-200 rounded w-5/6" />
          <div className="h-3 bg-slate-200 rounded w-4/6" />
        </div>

        <div className="grid grid-cols-3 gap-4 pt-6">
          <div className="h-16 bg-slate-200/80 rounded-2xl" />
          <div className="h-16 bg-slate-200/80 rounded-2xl" />
          <div className="h-16 bg-slate-200/80 rounded-2xl" />
        </div>
      </div>
    </div>
  );
}
