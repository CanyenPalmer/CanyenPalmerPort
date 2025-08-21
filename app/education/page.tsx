import GolfStep from '@/components/GolfStep';

export default function EducationPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Education</h1>
        <p className="opacity-80">Schools, programs, and highlights.</p>
      </header>

      {/* Golf step: Green to Cup → /connect */}
      <GolfStep stage="green" nextHref="/connect" />

      {/* Replace with real education */}
      <div className="rounded-2xl p-5 bg-white/80 dark:bg-zinc-900/70 shadow mt-8">
        <div className="font-semibold">Degree / Program — School</div>
        <div className="text-sm opacity-80">Year • Honors</div>
        <p className="mt-2 text-sm opacity-90">Relevant coursework or achievements.</p>
      </div>
    </main>
  );
}

