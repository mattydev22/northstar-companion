"use client";

interface BottomActionBarProps {
  onInitiateSync: () => void;
  onAddNew: () => void;
}

export default function BottomActionBar({ onInitiateSync, onAddNew }: BottomActionBarProps) {
  return (
    <div className="flex items-center gap-3 px-6 py-4 border-t border-zinc-800 flex-shrink-0">
      <button
        onClick={onInitiateSync}
        className="bg-green-500 hover:bg-green-400 text-black font-bold font-mono px-6 py-3 rounded transition-colors flex-1"
      >
        INITIATE SECURE SYNC &gt;
      </button>
      <button
        onClick={onAddNew}
        className="border border-zinc-700 text-zinc-400 hover:text-zinc-200 hover:border-zinc-500 font-mono px-4 py-3 rounded transition-colors"
      >
        + Add New
      </button>
    </div>
  );
}
