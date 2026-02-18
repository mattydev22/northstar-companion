"use client";

import { useState } from "react";
import Dashboard from "@/components/Dashboard";
import TransferModal from "@/components/TransferModal";
import AddCredentialModal from "@/components/AddCredentialModal";
import { Credential, INITIAL_CREDENTIALS } from "@/types/credential";

export default function VaultPage() {
  const [credentials, setCredentials] = useState<Credential[]>(INITIAL_CREDENTIALS);
  const [isTransferring, setIsTransferring] = useState(false);
  const [isAddingNew, setIsAddingNew] = useState(false);

  function handleAdd(cred: Omit<Credential, "id">) {
    setCredentials((prev) => [
      ...prev,
      { ...cred, id: String(Date.now()) },
    ]);
    setIsAddingNew(false);
  }

  return (
    <>
      <Dashboard
        credentials={credentials}
        onInitiateSync={() => setIsTransferring(true)}
        onAddNew={() => setIsAddingNew(true)}
      />
      {isTransferring && (
        <TransferModal onCancel={() => setIsTransferring(false)} />
      )}
      {isAddingNew && (
        <AddCredentialModal
          onAdd={handleAdd}
          onCancel={() => setIsAddingNew(false)}
        />
      )}
    </>
  );
}
