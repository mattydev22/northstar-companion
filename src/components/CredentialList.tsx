import { Credential } from "@/types/credential";
import CredentialCard from "./CredentialCard";

interface CredentialListProps {
  credentials: Credential[];
}

export default function CredentialList({ credentials }: CredentialListProps) {
  return (
    <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
      <p className="text-zinc-500 font-mono text-xs mb-4">
        // {credentials.length} credential{credentials.length !== 1 ? "s" : ""} staged · sorted by last accessed
      </p>
      {credentials.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 gap-3">
          <span className="text-zinc-600 text-3xl">◈</span>
          <p className="text-zinc-600 font-mono text-sm">// No credentials staged.</p>
          <p className="text-zinc-700 font-mono text-xs">Use &quot;+ Add New&quot; to stage your first credential.</p>
        </div>
      )}
      {credentials.map((cred) => (
        <CredentialCard
          key={cred.id}
          serviceName={cred.serviceName}
          username={cred.username}
          icon={cred.icon}
        />
      ))}
    </div>
  );
}
