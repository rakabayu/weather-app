"use client";

export default function WeatherCardSkeleton() {
  return (
    <div className="rounded-xl bg-white p-4 shadow-sm animate pulse">
      <div className="flex items-center gap-8">
        <div className="flex-1 space-y-1">
          <div className="h-3 w-24 bg-slate-200 rounded"></div>
          <h3 className="h-5 w-40 bg-slate-200 rounded"></h3>
        </div>
        <div className="flex text-center">
          <h3 className="h-10 w-10 bg-slate-200 rounded"></h3>
        </div>
        <div className="space-y-1">
          <div className="h-10 w-10 bg-slate-200 rounded" />
          <div className="h-3 w-24 bg-slate-200 rounded"></div>
        </div>
      </div>
    </div>
  );
}
