import GolfStep from '@/components/GolfStep';

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Canyen Palmer</h1>
        <p className="mt-3 text-lg opacity-80 max-w-2xl mx-auto">
          Developer & designer. Play the hole to explore my work—each shot reveals the next section.
        </p>
      </header>

      <GolfStep stage="tee" nextHref="/projects" />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">Overview</h2>
        <p className="opacity-80">
          Quick intro about who you are, your focus, and what this interactive site demonstrates.
        </p>
      </section>
    </main>
  );
}

