"use client";

import { DownloadObserverActions } from "@/features/components/AddKarevan/step4/downloadObserver";
import { ReserveSuccessMessage } from "@/features/components/AddKarevan/step4/succesMessage";
import { useReservationCapacityStore } from "@/features/components/AddKarevan/useReservationCapacityStore";
import { cn } from "@/features/lib/utils";

type Props = {
  className?: string;
};

export function AddKarvanConfirmationStep({ className }: Props) {
  const reserveCode =
    useReservationCapacityStore((s) => s.registrationConfirmation?.reserveCode) ??
    "TRK-9876";

  return (
    <div
      className={cn("flex w-full flex-col gap-3", className)}
      dir="rtl"
    >
      <ReserveSuccessMessage reserveCode={reserveCode} />
      <DownloadObserverActions />
    </div>
  );
}
