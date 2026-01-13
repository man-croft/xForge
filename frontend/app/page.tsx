export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-[#12060a] text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 lg:px-8">
          <section aria-labelledby="hero-heading" className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-300">Multi-vault DeFi on Base</p>
              <h1 id="hero-heading" className="text-4xl font-semibold leading-tight sm:text-5xl">Build, track, and automate ERC-4626 vaults with ForgeX.</h1>
              <p className="text-lg text-zinc-200">
                Launch compliant vaults, orchestrate allocations, and keep visibility on yield — all in one interface designed for Base.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#features"
                  className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  Explore features
                </a>
                <a
                  href="/dashboard"
                  className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  Go to dashboard
                </a>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-zinc-200" role="list">
                <span role="listitem" className="rounded-full border border-white/15 px-4 py-2">Base Mainnet · Chain ID 8453</span>
                <span role="listitem" className="rounded-full border border-white/15 px-4 py-2">ERC-4626 compliant</span>
                <span role="listitem" className="rounded-full border border-white/15 px-4 py-2">Protocol allocations</span>
              </div>
            </div>

            <aside aria-labelledby="snapshot-heading" className="glass-panel p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-red-300">Live snapshot</p>
                  <h2 id="snapshot-heading" className="text-xl font-semibold">Vault performance</h2>
                </div>
                <span className="rounded-full bg-green-400/20 px-3 py-1 text-xs font-semibold text-green-200" aria-label="Annual percentage yield">+12.4% APY</span>
              </div>
              <dl className="mt-6 space-y-3 text-sm text-zinc-200">
                <div className="flex items-center justify-between">
                  <dt>Total assets</dt>
                  <dd className="font-semibold text-white">$128,400</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt>Vaults</dt>
                  <dd className="font-semibold text-white">5 active</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt>Protocol split</dt>
                  <dd className="font-semibold text-white">Aave / Compound / LP</dd>
                </div>
              </dl>
              <div className="mt-6 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" role="separator" />
              <p className="mt-4 text-xs text-zinc-300">
                Demo data for layout preview. Connect your wallet to see real balances once integrations are enabled.
              </p>
            </aside>
          </section>

          <section id="features" aria-labelledby="features-heading" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <h2 id="features-heading" className="sr-only">Features</h2>
            {[
              {
                title: "Responsive by default",
                desc: "Layouts adapt from mobile to desktop with consistent spacing and readable typography.",
              },
              {
                title: "Accessible interactions",
                desc: "Focus-visible rings, semantic landmarks, and clear aria labels on interactive elements.",
              },
              {
                title: "Dark mode ready",
                desc: "Tokens and gradients tuned for both light and dark surfaces across the app.",
              },
            ].map((item) => (
              <article key={item.title} className="glass-panel p-5">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-zinc-200">{item.desc}</p>
              </article>
            ))}
          </section>
        </div>
      </div>
    </>
  );
}
