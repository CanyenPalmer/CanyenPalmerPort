import GolfStep from '@/components/GolfStep';

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="opacity-80">A handful of things I’ve shipped and tinkered on.</p>
      </header>

      {/* Golf step: user hits from Trees to Bunker → navigate to /experience */}
      <GolfStep stage="trees" nextHref="/experience" />

      {/* Your real projects (edit later) */}
      <div className="grid gap-4 sm:grid-cols-2 mt-8">
        <div className="rounded-2xl p-5 bg-white/80 dark:bg-zinc-900/70 shadow">
          <h3 className="font-semibold">Project A</h3>
          <p className="text-sm opacity-80">Brief description, stack, outcomes.</p>
        </div>
        <div className="rounded-2xl p-5 bg-white/80 dark:bg-zinc-900/70 shadow">
          <h3 className="font-semibold">Project B</h3>
          <p className="text-sm opacity-80">Brief description, stack, outcomes.</p>
        </div>
      </div>
    </main>
  );
}

