"use client";

import React, { useEffect, useRef } from "react";

export default function QuantumLattice({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.clientWidth * devicePixelRatio);
    let height = (canvas.height = canvas.clientHeight * devicePixelRatio);

    let t = 0;
    const particles: { x: number; y: number; r: number; v: number }[] = [];
    for (let i = 0; i < 40; i++) {
      particles.push({ x: Math.random() * width, y: Math.random() * height, r: 0.6 + Math.random() * 1.5, v: 0.2 + Math.random() * 0.6 });
    }

    function resize() {
      width = canvas.width = canvas.clientWidth * devicePixelRatio;
      height = canvas.height = canvas.clientHeight * devicePixelRatio;
    }

    window.addEventListener("resize", resize);

    function draw() {
      if (!ctx) return;
      t += 0.005;
      ctx.clearRect(0, 0, width, height);

      // subtle moving gradient lines
      for (let i = 0; i < 6; i++) {
        const phase = t * (0.2 + i * 0.06) + i;
        ctx.beginPath();
        ctx.moveTo(0, height * 0.5 + Math.sin(phase) * height * 0.08);
        for (let x = 0; x < width; x += 40) {
          const y = height * 0.5 + Math.sin((x / width) * Math.PI * 2 + phase) * height * 0.08 * (1 + i * 0.05);
          ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(138,92,246,${0.04 + i * 0.01})`;
        ctx.lineWidth = 1.2 * devicePixelRatio;
        ctx.stroke();
      }

      // particles
      particles.forEach((p, idx) => {
        p.x += Math.cos(t + idx) * p.v;
        p.y += Math.sin(t + idx * 1.3) * p.v * 0.6;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * devicePixelRatio * 8);
        g.addColorStop(0, "rgba(167,139,255,0.14)");
        g.addColorStop(1, "rgba(10,10,32,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * devicePixelRatio * 6, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className={`absolute inset-0 -z-10 pointer-events-none ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
