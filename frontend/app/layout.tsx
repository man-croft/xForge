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
  title: "ForgeX",
  description: "ForgeX – multi-vault DeFi interface built on Base",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <WagmiProvider config={wagmiConfig}>
          <Navbar />
          {children}
        </WagmiProvider>
      </body>
    </html>
  );
}
