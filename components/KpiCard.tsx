import React from "react";

export default function KpiCard({ label, value, delta }: {label:string; value:number; delta:number}) {
  const sign = delta > 0 ? "+" : "";
  const tone = delta > 0 ? "text-green-600" : delta < 0 ? "text-red-600" : "text-zinc-500";
  return (
    <div className="rounded-2xl p-5 bg-white/70 dark:bg-zinc-900/60 shadow">
      <div className="text-sm text-zinc-500">{label}</div>
      <div className="mt-1 text-2xl font-semibold">{typeof value === 'number' ? value.toLocaleString() : value}</div>
      <div className={`mt-1 text-sm ${tone}`}>{sign}{delta}</div>
    </div>
  );
}

