"use client";

import React from "react";

export default function WhyBlockDAG() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[rgba(139,92,246,0.03)] to-[rgba(11,11,31,0.02)]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 flex flex-col items-center lg:items-start">
          <div className="relative w-56 h-56 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#00f2ff] flex items-center justify-center text-black font-bold text-2xl shadow-xl">
            <div>BlockDAG</div>
          </div>
          <div className="mt-6 text-white text-4xl font-extrabold">15K+ TPS</div>
          <div className="mt-3 text-gray-300 max-w-md">High throughput and low cost make BlockDAG ideal for publishing proofs at scale.</div>
        </div>

        <div className="flex-1">
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[linear-gradient(90deg,#8b5cf6,#00f2ff)] flex items-center justify-center text-black font-bold">✔</div>
              <div>
                <div className="text-white font-semibold text-lg">Massive throughput</div>
                <div className="text-gray-300 text-sm">High-performance finality for proofs</div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[linear-gradient(90deg,#8b5cf6,#a78bff)] flex items-center justify-center text-black font-bold">✔</div>
              <div>
                <div className="text-white font-semibold text-lg">Low cost proofs</div>
                <div className="text-gray-300 text-sm">Economical for high-volume ML workflows</div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[linear-gradient(90deg,#00f2ff,#8b5cf6)] flex items-center justify-center text-black font-bold">✔</div>
              <div>
                <div className="text-white font-semibold text-lg">Censorship resistant</div>
                <div className="text-gray-300 text-sm">Decentralized integrity guarantees</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
