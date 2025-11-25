"use client";

import React from "react";
import ConnectButton from "@/components/ConnectButton";
import { useAccount } from "wagmi";

export default function CTASection() {
  const { isConnected } = useAccount();

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-[#8b5cf6] via-[#a78bff] to-[#8b5cf6]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-black">Make your training data unbreakable today</h2>
        <p className="text-black/70 mt-4">Start encrypting and publishing proofs in seconds.</p>
        <div className="mt-8">
          <ConnectButton className="px-10 py-4 rounded-full text-lg shadow-lg bg-black/10 text-white" />
        </div>
      </div>
    </section>
  );
}
