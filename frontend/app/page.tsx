export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-red-900 px-6 py-16 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.05),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.06),transparent_25%)]" />
      <section className="relative mx-auto flex max-w-5xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-200">
            Multi-vault DeFi on Base
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Build, track, and automate ERC-4626 vaults with ForgeX.
          </h1>
          <p className="text-lg text-zinc-200">
            Launch compliant vaults, orchestrate allocations, and keep visibility on yield — all in one interface designed for Base.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Create a vault
            </a>
            <a
              href="#"
              className="rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
            >
              View dashboard
            </a>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-zinc-200">
            <div className="rounded-full border border-white/15 px-4 py-2">Base mainnet (Chain ID 8453)</div>
            <div className="rounded-full border border-white/15 px-4 py-2">ERC-4626 compliant</div>
            <div className="rounded-full border border-white/15 px-4 py-2">Protocol allocations</div>
          </div>
        </div>
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-red-200">Live snapshot</p>
              <h2 className="text-xl font-semibold">Vault performance</h2>
            </div>
            <span className="rounded-full bg-green-400/20 px-3 py-1 text-xs font-semibold text-green-200">
              +12.4% APY
            </span>
          </div>
          <div className="mt-6 space-y-4 text-sm text-zinc-200">
            <div className="flex items-center justify-between">
              <span>Total assets</span>
              <span className="font-semibold text-white">$128,400</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Vaults</span>
              <span className="font-semibold text-white">5 active</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Protocol split</span>
              <span className="font-semibold text-white">Aave / Compound / LP</span>
            </div>
          </div>
          <div className="mt-6 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <p className="mt-4 text-xs text-zinc-300">
            Demo data for layout preview. Connect your wallet to see real balances once integrations are enabled.
          </p>
        </div>
      </section>
    </main>
  );
}
