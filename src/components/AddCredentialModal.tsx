"use client";

import { useState } from "react";
import { Credential, ICON_OPTIONS } from "@/types/credential";

interface AddCredentialModalProps {
  onAdd: (cred: Omit<Credential, "id">) => void;
  onCancel: () => void;
}

export default function AddCredentialModal({ onAdd, onCancel }: AddCredentialModalProps) {
  const [serviceName, setServiceName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(ICON_OPTIONS[0].char);

  const canSubmit = serviceName.trim() !== "" && username.trim() !== "";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    onAdd({ serviceName: serviceName.trim(), username: username.trim(), icon: selectedIcon });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl max-w-md w-full mx-4 p-6 flex flex-col gap-5">
        {/* Header */}
        <div>
          <p className="text-green-400 font-mono text-xs tracking-widest uppercase mb-1">
            // Stage New Credential
          </p>
          <h2 className="text-zinc-100 font-mono text-lg font-bold">Add to Local Vault</h2>
          <p className="text-zinc-500 font-mono text-xs mt-1">
            Data is encrypted before sync. Nothing is sent until you initiate.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Icon picker */}
          <div>
            <label className="text-zinc-400 font-mono text-xs block mb-2">// Select Icon</label>
            <div className="grid grid-cols-6 gap-1.5">
              {ICON_OPTIONS.map((opt) => (
                <button
                  key={opt.char}
                  type="button"
                  onClick={() => setSelectedIcon(opt.char)}
                  title={opt.label}
                  className={`h-9 rounded border font-mono text-base transition-colors ${
                    selectedIcon === opt.char
                      ? "border-green-500 bg-green-500/10 text-green-400"
                      : "border-zinc-700 bg-zinc-800 text-zinc-400 hover:border-zinc-500"
                  }`}
                >
                  {opt.char}
                </button>
              ))}
            </div>
          </div>

          {/* Service name */}
          <div>
            <label className="text-zinc-400 font-mono text-xs block mb-1.5">
              // Service Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
              placeholder="e.g. GitHub, AWS, Hospital Portal"
              className="w-full bg-zinc-800 border border-zinc-700 focus:border-green-500 rounded px-3 py-2.5 text-zinc-100 font-mono text-sm outline-none transition-colors placeholder:text-zinc-600"
            />
          </div>

          {/* Username */}
          <div>
            <label className="text-zinc-400 font-mono text-xs block mb-1.5">
              // Username / Email <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="e.g. you@example.com"
              className="w-full bg-zinc-800 border border-zinc-700 focus:border-green-500 rounded px-3 py-2.5 text-zinc-100 font-mono text-sm outline-none transition-colors placeholder:text-zinc-600"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-zinc-400 font-mono text-xs block mb-1.5">
              // Password
              <span className="text-zinc-600 ml-2">(stored encrypted on device)</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-zinc-800 border border-zinc-700 focus:border-green-500 rounded px-3 py-2.5 pr-16 text-zinc-100 font-mono text-sm outline-none transition-colors placeholder:text-zinc-600"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 font-mono text-xs transition-colors"
              >
                {showPassword ? "HIDE" : "SHOW"}
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-1">
            <button
              type="submit"
              disabled={!canSubmit}
              className="flex-1 bg-green-500 hover:bg-green-400 disabled:bg-zinc-700 disabled:text-zinc-500 disabled:cursor-not-allowed text-black font-bold font-mono py-3 rounded transition-colors"
            >
              STAGE CREDENTIAL
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="border border-zinc-700 hover:border-zinc-500 text-zinc-400 hover:text-zinc-200 font-mono px-5 py-3 rounded transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
