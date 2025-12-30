"use client";

import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import Link from "next/link";

type Props = {
  className?: string;
  showAddress?: boolean; // show address in button (only navbar should)
};

export default function ConnectButton({ className, showAddress = false }: Props) {
  const { address, isConnected } = useAccount();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // During initial mount/hydration show a disabled Connect Wallet button
  // so the UI isn't empty while we determine connection state.
  if (!mounted) {
    return (
      <button
        disabled
        aria-disabled="true"
        title="Checking wallet state"
        className={`${className || ""} inline-flex items-center gap-3 px-4 py-2 rounded-lg border border-[rgba(167,139,255,0.06)] text-white/80 bg-[linear-gradient(90deg,#8b5cf6,#a78bff)]/6 cursor-not-allowed`}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 1L3 5v6c0 5 3.8 9.6 9 11 5.2-1.4 9-6 9-11V5l-9-4z" stroke="#fff" strokeWidth="0.8" strokeOpacity="0.6"/></svg>
        <span className="text-sm">Connect Wallet</span>
      </button>
    );
  }

  if (isConnected) {
    const short = address ? `${address.slice(0, 6)}…${address.slice(-4)}` : "";
    return (
      <Link href="/dashboard" className={`${className || ""} inline-flex items-center gap-3 bg-[linear-gradient(90deg,#8b5cf6,#a78bff)]/10 text-white px-4 py-2 rounded-lg border border-[rgba(167,139,255,0.12)] hover:scale-[1.02] transition-transform`}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 1L3 5v6c0 5 3.8 9.6 9 11 5.2-1.4 9-6 9-11V5l-9-4z" stroke="#fff" strokeWidth="0.8" strokeOpacity="0.9"/></svg>
        <span className="text-sm">Go to Dashboard{showAddress ? ` • ${short}` : ''}</span>
      </Link>
    );
  }

  // Not connected: render the appkit web component which opens the modal
  // forward className for styling
  // @ts-expect-error web component
  return <appkit-button className={className} />;
}
