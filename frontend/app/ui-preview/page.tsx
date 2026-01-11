import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";

export default function UiPreviewPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-red-900 px-6 py-12 text-white">
      <section className="mx-auto flex max-w-5xl flex-col gap-8">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-200">
            UI Preview
          </p>
          <h1 className="text-3xl font-semibold">Buttons & cards</h1>
          <p className="max-w-2xl text-zinc-200">
            Quick preview of shared UI primitives. These components are ready for reuse across landing, dashboard, and vault pages.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button>Primary action</Button>
          <Button variant="ghost">Ghost action</Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card title="Vault snapshot" badge="demo">
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span>Total assets</span>
                <span className="font-semibold text-white">$42,300</span>
              </div>
              <div className="flex items-center justify-between">
                <span>APY</span>
                <span className="font-semibold text-white">+8.4%</span>
              </div>
            </div>
          </Card>
          <Card title="Next steps" badge="build">
            <ul className="list-disc space-y-1 pl-5 text-zinc-200">
              <li>Wire buttons to wallet connect once providers are added.</li>
              <li>Reuse cards for dashboard summaries and vault details.</li>
            </ul>
          </Card>
        </div>
      </section>
    </main>
  );
}
