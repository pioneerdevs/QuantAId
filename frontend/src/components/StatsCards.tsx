"use client";

import React from "react";

export default function StatsCards() {
  return (
    <section className="py-20 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-8">High-profile breaches that made headlines</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          <div className="relative bg-gradient-to-br from-[rgba(139,92,246,0.08)] to-[rgba(0,242,255,0.02)] rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)] hover:scale-[1.02] transition transform">
            <div className="text-5xl mb-6">🔓</div>
            <h3 className="text-2xl text-white font-bold">Clearview AI $50M fine 2025</h3>
            <p className="text-gray-300 mt-4">Data misuse penalties highlight the need for private training vaults and provable compliance.</p>
          </div>

          <div className="relative bg-gradient-to-br from-[rgba(0,242,255,0.04)] to-[rgba(139,92,246,0.03)] rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)] hover:scale-[1.02] transition transform">
            <div className="text-5xl mb-6">📰</div>
            <h3 className="text-2xl text-white font-bold">McDonald’s AI leak millions exposed</h3>
            <p className="text-gray-300 mt-4">Public breaches continue to cost trust and money. Protect your datasets before they leak.</p>
          </div>

          <div className="relative bg-gradient-to-br from-[rgba(167,139,255,0.06)] to-[rgba(0,0,0,0.02)] rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)] hover:scale-[1.02] transition transform">
            <div className="text-5xl mb-6">🧪</div>
            <h3 className="text-2xl text-white font-bold">2030: Today’s encryption dies</h3>
            <p className="text-gray-300 mt-4">Post-quantum threats require proactive encryption like Kyber-1024. Future-proof now.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
