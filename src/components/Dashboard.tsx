import { Credential } from "@/types/credential";
import TopBar from "./TopBar";
import CredentialList from "./CredentialList";
import BottomActionBar from "./BottomActionBar";

interface DashboardProps {
  credentials: Credential[];
  onInitiateSync: () => void;
  onAddNew: () => void;
}

export default function Dashboard({ credentials, onInitiateSync, onAddNew }: DashboardProps) {
  return (
    <div className="flex flex-col h-screen bg-zinc-950">
      <TopBar />
      <CredentialList credentials={credentials} />
      <BottomActionBar onInitiateSync={onInitiateSync} onAddNew={onAddNew} />
    </div>
  );
}
