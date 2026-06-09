"use client";

import { AddKarvanConfirmationStep } from "@/features/components/AddKarevan/step4/AddKarvanConfirmationStep";
import { AddKarvanReviewStep } from "@/features/components/AddKarevan/step2/AddKarvanReviewStep";
import { AddKarvanSupervisorStep } from "@/features/components/AddKarevan/step1/AddKarvanSupervisorStep";
import { ReservationStepper } from "@/features/components/AddKarevan/ReservationStepper";
import { useReservationCapacityStore } from "@/features/components/AddKarevan/useReservationCapacityStore";

function StepPlaceholder({ title }: { title: string }) {
  return (
    <div
      className="rounded-xl border border-dashed border-[#175E47]/30 bg-white/90 px-6 py-8 text-center"
      dir="rtl"
    >
      <p className="text-base font-medium text-[#175E47]">{title}</p>
      <p className="mt-2 text-sm text-[#61756F]">
        این مرحله به‌زودی اضافه می‌شود.
      </p>
    </div>
  );
}

export default function AddKarvanPage() {
  const activeStep = useReservationCapacityStore((s) => s.activeStep);

  return (
    <div className="min-h-dvh w-full bg-[#F5F9F6] p-[20px]" dir="rtl">
      <div className="flex w-full flex-col gap-4">
        <ReservationStepper activeStep={activeStep} />

        <div className="w-full">
          {activeStep === 0 ? <AddKarvanSupervisorStep /> : null}
          {activeStep === 1 ? <AddKarvanReviewStep /> : null}
          {activeStep === 2 ? (
            <StepPlaceholder title="مرحلهٔ ۳ — اطلاعات زائران" />
          ) : null}
          {activeStep === 3 ? <AddKarvanConfirmationStep /> : null}
        </div>
      </div>
    </div>
  );
}
