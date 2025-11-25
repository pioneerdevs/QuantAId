"use client";

import React from "react";

export default function WhyBlockDAG() {
  return (
    <section className="py-16 px-6 bg-[rgba(139,92,246,0.03)]">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-8">
        <div className="flex-1 text-center lg:text-left">
          <div className="w-40 h-40 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#00f2ff] flex items-center justify-center text-black font-bold text-xl">BlockDAG</div>
          <p className="mt-6 text-white text-3xl font-bold">15K+ TPS</p>
        </div>

        <div className="flex-1">
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <span className="text-[#a78bff] mt-1">✔</span>
              <div>
                <div className="text-white font-semibold">Massive throughput</div>
                <div className="text-gray-300 text-sm">High-performance finality for proofs</div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-[#a78bff] mt-1">✔</span>
              <div>
                <div className="text-white font-semibold">Low cost proofs</div>
                <div className="text-gray-300 text-sm">Economical for high-volume ML workflows</div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-[#a78bff] mt-1">✔</span>
              <div>
                <div className="text-white font-semibold">Censorship resistant</div>
                <div className="text-gray-300 text-sm">Decentralized integrity guarantees</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
