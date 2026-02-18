interface CredentialCardProps {
  serviceName: string;
  username: string;
  icon: string;
}

export default function CredentialCard({ serviceName, username, icon }: CredentialCardProps) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 border-l-4 border-l-green-500 rounded-md px-4 py-3 flex items-center gap-4">
      <span className="text-green-400 text-lg w-6 text-center flex-shrink-0">{icon}</span>
      <div className="flex-1 min-w-0">
        <p className="text-zinc-100 font-mono text-sm font-semibold truncate">{serviceName}</p>
        <p className="text-zinc-400 font-mono text-xs truncate">{username}</p>
      </div>
      <span className="bg-green-500/10 text-green-400 border border-green-500/30 px-2 py-0.5 rounded text-xs font-mono flex-shrink-0">
        SECURE
      </span>
    </div>
  );
}
