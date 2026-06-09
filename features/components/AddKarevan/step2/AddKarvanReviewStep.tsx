"use client";

import { useMemo } from "react";

import ReservationSummaryFinal from "@/features/components/AddKarevan/step2/reservationSummaryFinal";
import { SendSucces } from "@/features/components/AddKarevan/step2/SendSucces";
import { useReservationCapacityStore } from "@/features/components/AddKarevan/useReservationCapacityStore";
import { cn } from "@/features/lib/utils";
import Button from "@/features/UI/button";

type Props = {
  className?: string;
};

function buildSupervisorName(p: {
  firstName?: string;
  lastName?: string;
}): string {
  return [p.firstName, p.lastName].filter(Boolean).join(" ").trim() || "—";
}

export function AddKarvanReviewStep({ className }: Props) {
  const registrationDraft = useReservationCapacityStore((s) => s.registrationDraft);
  const guests = useReservationCapacityStore((s) => s.guests);
  const entryDate = useReservationCapacityStore((s) => s.entryDate);
  const exitDate = useReservationCapacityStore((s) => s.exitDate);
  const setActiveStep = useReservationCapacityStore((s) => s.setActiveStep);

  const p0 = registrationDraft?.pilgrims[0];

  const supervisorName = useMemo(
    () => (p0 ? buildSupervisorName(p0) : "—"),
    [p0],
  );

  const reserveCode = "REQ-PENDING";

  const dash = "—";
  const submittedAt =
    typeof window !== "undefined"
      ? new Intl.DateTimeFormat("fa-IR", {
          dateStyle: "medium",
        }).format(new Date())
      : dash;

  if (!registrationDraft || !p0) {
    return (
      <div
        className={cn(
          "mt-4 w-full text-center text-sm text-[#61756F]",
          className,
        )}
        dir="rtl"
      >
        ابتدا اطلاعات سرپرست را در مرحلهٔ قبل تکمیل کنید.
        <div className="mt-2">
          <Button
            type="button"
            color="darkGreen"
            text="white"
            radius="md"
            border="none"
            size="md"
            width="auto"
            onClick={() => setActiveStep(0)}
          >
            بازگشت به مرحلهٔ قبل
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex w-full flex-col gap-4",
        className,
      )}
      dir="rtl"
    >
      <h2 className="text-lg font-semibold text-[#175E47] sm:text-xl">
        بررسی درخواست
      </h2>

      <div className="flex w-full flex-col gap-3">
        <SendSucces reserveCode={reserveCode} />
        <ReservationSummaryFinal
          className="w-full"
          guestCount={guests}
          checkInDate={entryDate || dash}
          checkOutDate={exitDate || dash}
          checkInTime={submittedAt}
          checkOutTime={dash}
          reserveCode={reserveCode}
          supervisorName={supervisorName}
        />
      </div>

   
   
    </div>
  );
}
