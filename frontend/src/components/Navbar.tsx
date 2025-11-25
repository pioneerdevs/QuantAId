"use client";

import React from "react";
import { useAccount } from "wagmi";
import ConnectButton from "@/components/ConnectButton";

export default function Navbar() {
  const { address, isConnected } = useAccount();

  const short = (addr: string | undefined) =>
    addr ? `${addr.slice(0, 6)}…${addr.slice(-4)}` : "";

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-6 sm:px-12">
      <nav className="backdrop-blur-md bg-[rgba(11,11,31,0.36)]/60 border border-[rgba(255,255,255,0.04)] rounded-xl py-3 px-6 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="text-white font-extrabold tracking-widest text-lg select-none" style={{letterSpacing: '0.12em'}}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] via-[#a78bff] to-[#8b5cf6] drop-shadow-[0_6px_18px_rgba(167,139,255,0.12)]">QUANTAID</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a className="text-sm text-gray-300 hover:text-white transition">How it Works</a>
          <a className="text-sm text-gray-300 hover:text-white transition">Why BlockDAG</a>
          <div>
            {isConnected ? (
              <button className="flex items-center gap-2 bg-[linear-gradient(90deg,#8b5cf6,#a78bff)]/10 text-white px-4 py-2 rounded-lg border border-[rgba(167,139,255,0.12)] hover:scale-[1.02] transition-transform">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 1L3 5v6c0 5 3.8 9.6 9 11 5.2-1.4 9-6 9-11V5l-9-4z" stroke="#fff" strokeWidth="0.8" strokeOpacity="0.9"/></svg>
                <span className="text-sm">Dashboard • {short(address)}</span>
              </button>
            ) : (
              <ConnectButton className="px-4 py-2 rounded-lg text-sm" />
            )}
          </div>
        </div>

        <div className="md:hidden">
          {isConnected ? (
            <div className="bg-[linear-gradient(90deg,#8b5cf6,#a78bff)]/10 px-3 py-2 rounded-md text-white text-sm">{short(address)}</div>
          ) : (
            <ConnectButton className="px-3 py-2 rounded-md text-sm" />
          )}
        </div>
      </nav>
    </header>
  );
}
