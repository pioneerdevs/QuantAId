"use client";

import React from "react";

const step = (num: number, title: string, desc: string, icon: React.ReactNode) => (
  <div className="flex-1 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)] rounded-2xl p-6 text-center">
    <div className="mx-auto w-16 h-16 flex items-center justify-center mb-4 rounded-md bg-gradient-to-br from-[#8b5cf6]/20 to-[#00f2ff]/6">
      {icon}
    </div>
    <h4 className="text-white font-semibold">{title}</h4>
    <p className="text-gray-300 mt-2 text-sm">{desc}</p>
  </div>
);

export default function HowItWorks() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl text-white font-bold mb-8 text-center">How It Works</h3>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
          {step(1, "Drag, drop & AI scan", "Upload files, get instant risk analysis", <span>🤖</span>)}
          {step(2, "Kyber-1024 encryption (NIST PQC)", "Client-side post-quantum encryption", <span>🛡️</span>)}
          {step(3, "Proof on-chain in <2 sec", "Immutable proof published to BlockDAG", <span>⛓️</span>)}
          {step(4, "Compliance report & explorer link", "PDF report with on-chain proof link", <span>✅</span>)}
        </div>
      </div>
    </section>
  );
}
