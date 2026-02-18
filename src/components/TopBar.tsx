import Link from "next/link";

export default function TopBar() {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 flex-shrink-0">
      <Link href="/" className="text-green-500 font-bold text-xl font-mono hover:text-green-400 transition-colors">
        N*
      </Link>
      <div className="text-center">
        <p className="text-zinc-100 font-mono text-xs tracking-wider">NorthStar Companion</p>
        <p className="text-zinc-400 font-mono text-xs">// Local Vault Dashboard</p>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/faq" className="text-zinc-500 hover:text-zinc-300 font-mono text-xs transition-colors">
          // FAQ
        </Link>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-zinc-400 font-mono text-xs">Hardware: Connected (Secure)</span>
        </div>
      </div>
    </div>
  );
}
