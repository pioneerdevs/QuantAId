"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="py-6 text-center text-sm text-gray-400">
      <div>Built by ex OpenAI & DeepMind engineers for the BlockDAG Amazing Chain Race Further & Faster Track</div>
      <div className="mt-3 flex items-center justify-center gap-4">
        <a className="hover:text-white">Twitter</a>
        <span>•</span>
        <a className="hover:text-white">GitHub</a>
        <span>•</span>
        <a className="hover:text-white">BlockDAG</a>
      </div>
    </footer>
  );
}
