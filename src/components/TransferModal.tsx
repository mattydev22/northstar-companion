"use client";

import ProgressRing from "./ProgressRing";

interface TransferModalProps {
  onCancel: () => void;
}

export default function TransferModal({ onCancel }: TransferModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl max-w-md w-full mx-4 p-8 flex flex-col items-center gap-6">
        {/* Header */}
        <div className="text-center">
          <p className="text-green-400 font-mono text-xs tracking-widest uppercase mb-1">
            // Secure Data Transfer
          </p>
          <h2 className="text-zinc-100 font-mono text-lg font-bold">
            NorthStar Hardware Sync
          </h2>
        </div>

        {/* Beam graphic */}
        <div className="flex items-center gap-2 w-full">
          <div className="flex flex-col items-center gap-1 flex-shrink-0">
            <span className="text-zinc-400 text-2xl">⬜</span>
            <span className="text-zinc-500 font-mono text-xs">PC</span>
          </div>
          <div className="flex-1 h-0.5 bg-gradient-to-r from-green-500/20 via-green-500 to-green-500/20 animate-pulse" />
          <div className="flex flex-col items-center gap-1 flex-shrink-0">
            <span className="text-green-400 text-2xl">🔒</span>
            <span className="text-zinc-500 font-mono text-xs">ENC</span>
          </div>
          <div className="flex-1 h-0.5 bg-gradient-to-r from-green-500/20 via-green-500 to-green-500/20 animate-pulse" />
          <div className="flex flex-col items-center gap-1 flex-shrink-0">
            <span className="text-green-400 text-2xl">▭</span>
            <span className="text-zinc-500 font-mono text-xs">NSA</span>
          </div>
        </div>

        {/* Progress ring */}
        <div className="flex flex-col items-center gap-2">
          <ProgressRing progress={85} />
          <p className="text-zinc-400 font-mono text-xs">// Encrypting &amp; Pushing...</p>
        </div>

        {/* Protocol info */}
        <div className="bg-zinc-950 border border-zinc-800 rounded px-4 py-3 w-full">
          <p className="text-zinc-500 font-mono text-xs text-center leading-relaxed">
            Protocol: AES-256-GCM // Zero-Knowledge Tunnel Active.
            <br />
            <span className="text-yellow-500/70">Do not unplug.</span>
          </p>
        </div>

        {/* Cancel button */}
        <button
          onClick={onCancel}
          className="border border-zinc-700 hover:border-red-500/50 text-zinc-400 hover:text-red-400 font-mono px-6 py-2 rounded transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
