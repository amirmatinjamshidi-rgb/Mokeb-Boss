"use client";

import type { ReactNode } from "react";

import { PanelGate } from "@admin-kit/layouts/PanelGate";
import { PanelShell } from "@admin-kit/layouts/PanelShell";

export function AdminPanelLayoutClient({ children }: { children: ReactNode }) {
  return (
    <PanelGate>
      <PanelShell>{children}</PanelShell>
    </PanelGate>
  );
}

/** @deprecated Use AdminPanelLayoutClient */
export const BossPanelLayoutClient = AdminPanelLayoutClient;
