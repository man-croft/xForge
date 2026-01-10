import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
              <main className="min-h-screen">
                {/* Navbar */}
                <div className="sticky top-0 z-50">
                  {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                  {/* Using component directly to avoid import churn in the template */}
                </div>
                <section className="mx-auto max-w-5xl px-4 py-10">
                  <h1 className="text-3xl font-semibold">Welcome to ForgeX</h1>
                  <p className="mt-2 text-neutral-600 dark:text-neutral-300">
                    Connect your wallet to start creating ERC-4626 vaults.
                  </p>
                </section>
              </main>
            or the{" "}
