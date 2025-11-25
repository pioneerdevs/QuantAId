"use client";

import React from "react";

const card = (emoji: string, title: string, desc: string) => (
  <div className="w-80 sm:w-72 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)] rounded-2xl p-6 transform -rotate-2 hover:rotate-0 hover:scale-105 transition">
    <div className="text-3xl mb-4">{emoji}</div>
    <h3 className="text-white font-semibold">{title}</h3>
    <p className="text-gray-300 mt-2 text-sm">{desc}</p>
  </div>
);

export default function StatsCards() {
  return (
    <section className="py-12 flex justify-center">
      <div className="flex gap-6 flex-col sm:flex-row items-center">
        {card("🔓", "Clearview AI – $50M fine 2025", "Data misuse penalties highlight the need for private training vaults")}
        {card("📰", "McDonald’s AI leak – millions exposed", "Public breaches continue to cost trust and money")}
        {card("🧪", "2030: Today’s encryption dies", "Post-quantum threats require proactive encryption like Kyber-1024")}
      </div>
    </section>
  );
}
