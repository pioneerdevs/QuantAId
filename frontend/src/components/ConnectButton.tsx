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

  // During SSR/hydration return a stable placeholder to avoid mismatches
  if (!mounted) {
    return (
      <div className={`${className || ""} inline-block rounded-lg px-4 py-2`} aria-hidden>
        <span className="inline-block h-3 w-28 rounded-md bg-gradient-to-r from-[#8b5cf6] to-[#a78bff]/20" />
      </div>
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

  // Not connected: render the web3modal web component which opens the modal
  // forward className for styling
  // @ts-expect-error web component
  return <w3m-button className={className} />;
}
