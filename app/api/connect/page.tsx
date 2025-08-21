export const metadata = {
  title: "Let's Connect — Canyen Palmer",
  description: "Contact Canyen Palmer",
};

export default function ConnectPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">Let’s Connect</h1>
      <p className="opacity-80 mb-8">I’m open to roles and collaborations. Reach me via any of the channels below.</p>

      <div className="space-y-4">
        <a href="mailto:you@example.com" className="block rounded-xl p-4 shadow bg-white/80 dark:bg-zinc-900/70 hover:shadow-md">
          <div className="text-sm opacity-70">Email</div>
          <div className="text-lg font-semibold">you@example.com</div>
        </a>
        <a href="https://www.linkedin.com/in/your-handle" target="_blank" className="block rounded-xl p-4 shadow bg-white/80 dark:bg-zinc-900/70 hover:shadow-md">
          <div className="text-sm opacity-70">LinkedIn</div>
          <div className="text-lg font-semibold">linkedin.com/in/your-handle</div>
        </a>
        <a href="https://github.com/your-handle" target="_blank" className="block rounded-xl p-4 shadow bg-white/80 dark:bg-zinc-900/70 hover:shadow-md">
          <div className="text-sm opacity-70">GitHub</div>
          <div className="text-lg font-semibold">github.com/your-handle</div>
        </a>
        <a href="tel:+1234567890" className="block rounded-xl p-4 shadow bg-white/80 dark:bg-zinc-900/70 hover:shadow-md">
          <div className="text-sm opacity-70">Phone</div>
          <div className="text-lg font-semibold">+1 (234) 567‑890</div>
        </a>
      </div>

      <div className="mt-10 text-sm opacity-70">Prefer email? I usually reply within 24 hours.</div>
    </main>
  );
}

