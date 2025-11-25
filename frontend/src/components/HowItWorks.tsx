"use client";

import React from "react";

export default function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-[rgba(11,11,31,0.02)]">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl sm:text-4xl text-white font-bold mb-10 text-center">How it works: simple, provable, post quantum</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="flex flex-col gap-6">
            <div className="bg-[rgba(139,92,246,0.04)] rounded-3xl p-8 shadow-lg hover:scale-[1.02] transition transform">
              <div className="text-4xl mb-4">🤖</div>
              <h4 className="text-2xl text-white font-semibold">Drag, drop & AI scan</h4>
              <p className="text-gray-300 mt-3">Upload files, run automatic AI risk scanning, and surface PII/labels before encryption.</p>
            </div>

            <div className="bg-[rgba(0,242,255,0.04)] rounded-3xl p-8 shadow-lg hover:scale-[1.02] transition transform">
              <div className="text-4xl mb-4">🛡️</div>
              <h4 className="text-2xl text-white font-semibold">Kyber 1024 encryption (NIST PQC)</h4>
              <p className="text-gray-300 mt-3">Client-side post-quantum encryption ensures your raw data never leaves your control.</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-[rgba(167,139,255,0.04)] rounded-3xl p-8 shadow-lg hover:scale-[1.02] transition transform">
              <div className="text-4xl mb-4">⛓️</div>
              <h4 className="text-2xl text-white font-semibold">Proof on chain in &lt;2 sec</h4>
              <p className="text-gray-300 mt-3">Immutable, timestamped proofs are published to BlockDAG with negligible latency.</p>
            </div>

            <div className="bg-[rgba(34,197,94,0.04)] rounded-3xl p-8 shadow-lg hover:scale-[1.02] transition transform">
              <div className="text-4xl mb-4">✅</div>
              <h4 className="text-2xl text-white font-semibold">Compliance report & explorer link</h4>
              <p className="text-gray-300 mt-3">Get a downloadable report with compliance metadata and a link to the on-chain proof.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
