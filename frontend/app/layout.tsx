import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WagmiProvider } from "wagmi";
import { wagmiConfig } from "../config/wagmi";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/layout/navbar"), {
  ssr: false,
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ForgeX – Multi-vault DeFi on Base",
  description: "Build, track, and automate ERC-4626 vaults with ForgeX. Protocol allocations and real-time yield tracking on Base mainnet.",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
        <WagmiProvider config={wagmiConfig}>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-black focus:shadow-lg">
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
        </WagmiProvider>
      </body>
    </html>
  );
}
