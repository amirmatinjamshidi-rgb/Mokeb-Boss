import { create } from "zustand";
import type { PilgrimFormValues, RegistrationFormValues } from "./FormSchemas";

export type ReservationStep = 0 | 1 | 2 | 3;

export type RegistrationConfirmation = {
  maleCount: number;
  femaleCount: number;
  supervisorName: string;
  reserveCode: string;
  pilgrims: PilgrimFormValues[];
};

export type ReservationCapacityState = {
  activeStep: ReservationStep;
  guests: number;
  entryDate: string;
  exitDate: string;
  capacityAvailable: boolean | null;
  registrationConfirmation: RegistrationConfirmation | null;
  /** Last submitted step‑0 form (سرپرست) for مرحلهٔ بررسی */
  registrationDraft: RegistrationFormValues | null;
  setActiveStep: (step: ReservationStep) => void;
  setGuests: (n: number) => void;
  setEntryDate: (isoDate: string) => void;
  setExitDate: (isoDate: string) => void;
  resetCapacityCheck: () => void;
  checkCapacity: (guests: number, entryDate: string, exitDate: string) => void;
  setRegistrationDraft: (draft: RegistrationFormValues | null) => void;
  continueReservation: () => void;
  completeGuestRegistration: (payload: RegistrationConfirmation) => void;
};

export const useReservationCapacityStore = create<ReservationCapacityState>(
  (set) => ({
    activeStep: 0,
    guests: 1,
    entryDate: "",
    exitDate: "",
    capacityAvailable: null,
    registrationConfirmation: null,
    registrationDraft: null,
    setActiveStep: (step) => set({ activeStep: step }),
    setGuests: (guests) =>
      set({ guests: Math.min(5, Math.max(1, Math.round(guests))) }),
    setEntryDate: (entryDate) => set({ entryDate }),
    setExitDate: (exitDate) => set({ exitDate }),
    resetCapacityCheck: () => set({ capacityAvailable: null }),
    checkCapacity: (guests, entryDate, exitDate) =>
      set({
        guests: Math.min(5, Math.max(1, Math.round(guests))),
        entryDate,
        exitDate,
        capacityAvailable: true,
      }),
    setRegistrationDraft: (draft) => set({ registrationDraft: draft }),
    continueReservation: () =>
      set((s) =>
        s.activeStep === 0
          ? {
              activeStep: 1 as ReservationStep,
              capacityAvailable: true,
            }
          : s,
      ),
    completeGuestRegistration: (payload) =>
      set({
        registrationConfirmation: payload,
        activeStep: 2,
      }),
  }),
);
