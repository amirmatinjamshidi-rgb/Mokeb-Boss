"use client";

import { useMemo } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import PilgrimInfoForm from "@/features/components/AddKarevan/registerboxformComponents/addkarvanForminfo";
import { useReservationCapacityStore } from "@/features/components/AddKarevan/useReservationCapacityStore";
import {
  emptyPilgrim,
  pilgrimRegistrationSchema,
  type RegistrationFormValues,
} from "@/features/components/AddKarevan/FormSchemas";
import { cn } from "@/features/lib/utils";
import Button from "@/features/UI/button";

type Props = {
  className?: string;
};

export function AddKarvanSupervisorStep({ className }: Props) {
  const continueReservation = useReservationCapacityStore(
    (s) => s.continueReservation,
  );
  const setRegistrationDraft = useReservationCapacityStore(
    (s) => s.setRegistrationDraft,
  );
  const registrationDraft = useReservationCapacityStore(
    (s) => s.registrationDraft,
  );

  const schema = useMemo(() => pilgrimRegistrationSchema(1), []);

  const defaultValues = useMemo(
    () => registrationDraft ?? { pilgrims: [emptyPilgrim()] },
    [registrationDraft],
  );

  const methods = useForm<RegistrationFormValues>({
    resolver: zodResolver(schema),
    defaultValues,
  });
  const { control, handleSubmit } = methods;

  const onSubmit = (data: RegistrationFormValues) => {
    setRegistrationDraft(data);
    continueReservation();
  };

  return (
    <div className={cn("w-full", className)}>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-0 py-3 sm:py-4 md:py-5"
          dir="rtl"
          noValidate
        >
          <PilgrimInfoForm
            control={control}
            fieldPrefix="pilgrims.0"
            title="سرپرست"
          />

          <div className="mt-4 flex justify-end">
            <Button
              type="submit"
              color="darkGreen"
              text="white"
              radius="md"
              border="none"
              size="twoxl"
              width="auto"
              className="min-w-40 w-full max-w-[502px] font-semibold"
            >
              درخواست رزرو
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
