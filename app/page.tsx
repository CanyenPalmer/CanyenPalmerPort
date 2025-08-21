import KpiCard from "@/components/KpiCard";
import Globe from "@/components/Globe";

async function fetcher(path:string){
  const r = await fetch(path, { cache: 'no-store' });
  return r.json();
}

export default async function Page(){
  const [summary, metrics, locations] = await Promise.all([
    fetcher('/api/report/summary'),
    fetcher('/api/report/metrics'),
    fetcher('/api/report/locations'),
  ]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 to-amber-50 dark:from-zinc-950 dark:to-zinc-900 text-zinc-900 dark:text-zinc-100">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{summary.title}</h1>
          <p className="mt-4 max-w-2xl text-lg opacity-80">{summary.subtitle}</p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {summary.hero_stats.map((s:any)=> <KpiCard key={s.label} {...s} delta={0}/>) }
          </div>
        </div>
      </section>

      {/* GLOBE */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Learners around the world</h2>
        <p className="mt-2 text-sm opacity-80">Each dot marks a city with active sessions in the last 30 days.</p>
        <div className="mt-6 rounded-2xl bg-white/60 dark:bg-zinc-900/60 shadow p-2">
          <Globe points={locations} />
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-2xl p-8 bg-white/70 dark:bg-zinc-900/70 shadow flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">Stay in the loop</h3>
            <p className="text-sm opacity-80">Monthly insights on growth, experiments, and motion studies.</p>
          </div>
          <form action="/api/newsletter" method="post" className="flex gap-2">
            <input required name="email" type="email" placeholder="you@example.com" className="px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800"/>
            <button className="px-4 py-2 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900">Subscribe</button>
          </form>
        </div>
      </section>

      <footer className="py-12 text-center text-sm opacity-70">© {new Date().getFullYear()} Canyen Palmer. All rights reserved.</footer>
    </main>
  );
}

