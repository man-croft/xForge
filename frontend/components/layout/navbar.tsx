"use client";
import Link from "next/link";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useSwitchChain,
  useChains,
} from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { walletConnect } from "wagmi/connectors";

export default function Navbar() {
  const chains = useChains();
  const baseChain = chains.find((c) => c.id === 8453);
  const { address, isConnected, chainId } = useAccount();
  const { connect, isPending } = useConnect({
    connectors: [
      new InjectedConnector(),
      walletConnect({ projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "" }),
    ],
  });
  const { disconnect } = useDisconnect();
  const { switchChain, isPending: isSwitching } = useSwitchChain();

  const isOnBase = chainId === 8453;

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
        <div className="flex flex-col items-end gap-2 text-sm">
          {isConnected ? (
            <>
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono">
                  {address?.slice(0, 6)}...{address?.slice(-4)}
                </span>
                {!isOnBase && baseChain ? (
                  <button
                    className="rounded bg-amber-500 px-3 py-1 text-xs font-semibold text-black hover:bg-amber-600"
                    onClick={() => switchChain({ chainId: baseChain.id })}
                    disabled={isSwitching}
                  >
                    {isSwitching ? "Switching..." : `Switch to ${baseChain.name}`}
                  </button>
                ) : null}
                <button
                  className="rounded bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700"
                  onClick={() => disconnect()}
                >
                  Disconnect
                </button>
              </div>
              <div className="text-neutral-600 dark:text-neutral-300">
                {isOnBase ? "Base Mainnet" : baseChain ? `Connected to chain ${chainId}` : "Network info unavailable"}
              </div>
            </>
          ) : (
            <div className="flex flex-wrap items-center gap-2">
              <button
                className="rounded bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700"
                onClick={() => connect({ connector: new InjectedConnector() })}
                disabled={isPending}
              >
                {isPending ? "Connecting..." : "Connect MetaMask"}
              </button>
              <button
                className="rounded border border-red-500 px-3 py-1 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30"
                onClick={() => connect({ connector: walletConnect({ projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "" }) })}
                disabled={isPending}
              >
                {isPending ? "Connecting..." : "WalletConnect"}
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
