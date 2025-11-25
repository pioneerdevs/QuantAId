"use client";

import React from "react";
import QuantumLattice from "@/components/QuantumLattice";
import { useAccount } from "wagmi";
import ConnectButton from "@/components/ConnectButton";

export default function Hero() {
  const { isConnected } = useAccount();

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center text-center overflow-hidden">
      <QuantumLattice />

      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="mb-6">
          <p className="text-sm text-cyan-400/60 tracking-wide">AI risk scan • Kyber-1024 encryption • Immutable proof</p>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          Your AI training data. <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8b5cf6] to-[#a78bff]">Quantum-proof forever.</span>
        </h1>

        <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg sm:text-xl">
          AI risk scan • Kyber-1024 encryption in your browser • Immutable proof on BlockDAG in &lt;2 seconds.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center">
          <ConnectButton className="px-8 py-4 text-lg sm:text-xl font-semibold shadow-[0_8px_40px_rgba(139,92,246,0.16)] rounded-xl bg-gradient-to-r from-[#8b5cf6] to-[#a78bff] hover:scale-[1.02] transition-transform" />

          <button className="px-6 py-3 rounded-lg border border-[rgba(167,139,255,0.12)] text-white text-sm hover:bg-[rgba(255,255,255,0.02)] transition">Watch 45-sec Demo</button>
        </div>
      </div>
    </section>
  );
}
