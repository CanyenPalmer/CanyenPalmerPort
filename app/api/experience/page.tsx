import GolfStep from '@/components/GolfStep';

export default function ExperiencePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Professional Experience</h1>
        <p className="opacity-80">Roles, impact, and what I shipped.</p>
      </header>

      {/* Golf step: Bunker to Green → /education */}
      <GolfStep stage="bunker" nextHref="/education" />

      {/* Replace with real experience */}
      <div className="space-y-4 mt-8">
        <div className="rounded-2xl p-5 bg-white/80 dark:bg-zinc-900/70 shadow">
          <div className="font-semibold">Role @ Company</div>
          <div className="text-sm opacity-80">Dates • City/Remote</div>
          <ul className="list-disc ml-5 mt-2 text-sm opacity-90">
            <li>Impact bullet — results, metrics, tech.</li>
            <li>Impact bullet — collaboration, cross‑functional work.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

