import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-red-900 px-6 py-12 text-white">
      <div className="max-w-xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-200">
          404 • Not Found
        </p>
        <h1 className="mt-3 text-3xl font-semibold leading-tight">
          The page you’re looking for isn’t here.
        </h1>
        <p className="mt-4 text-base text-zinc-200">
          It may have moved or no longer exists. Head back to the homepage to continue exploring ForgeX.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Go home
          </Link>
          <Link
            href="/"
            className="rounded-full border border-white/40 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
          >
            View dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
