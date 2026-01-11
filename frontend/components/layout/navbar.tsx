"use client";
import Link from "next/link";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

export default function Navbar() {
  const { address, isConnected } = useAccount();
  const { connect, connectors, isPending } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  return (
    <header className="w-full border-b border-neutral-200 dark:border-neutral-800">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-semibold">ForgeX</Link>
          <div className="hidden gap-4 md:flex">
            <Link href="/" className="text-sm text-neutral-600 dark:text-neutral-300">Home</Link>
            <Link href="/dashboard" className="text-sm text-neutral-600 dark:text-neutral-300">Dashboard</Link>
          </div>
        </div>
        <div>
          {isConnected ? (
            <div className="flex items-center gap-3">
              <span className="text-sm font-mono">
                {address?.slice(0, 6)}...{address?.slice(-4)}
              </span>
              <button
                className="rounded bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700"
                onClick={() => disconnect()}
              >
                Disconnect
              </button>
            </div>
          ) : (
            <button
              className="rounded bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700"
              onClick={() => connect()}
              disabled={isPending}
            >
              {isPending ? "Connecting..." : "Connect Wallet"}
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
