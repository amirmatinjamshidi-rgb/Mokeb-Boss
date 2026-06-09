"use client";

import { Download } from "lucide-react";
import { useRouter } from "next/navigation";

import { ROUTES } from "@/features/config/navigation";
import Button from "@/features/UI/button";

export function DownloadObserverActions() {
  const router = useRouter();

  return (
    <div
      dir="rtl"
      className="mx-auto flex w-full max-w-form-row flex-col gap-3 sm:flex-row sm:items-center sm:justify-center"
    >
      <Button
        type="button"
        color="white"
        border="green"
        text="none"
        radius="md"
        size="twoxl"
        width="auto"
        className="flex w-full min-w-0 items-center justify-center gap-2 border-[#175E47] px-4 !text-[#175E47] sm:w-auto sm:min-w-[148px]"
      >
        <Download className="size-5 shrink-0" aria-hidden />
        دانلود pdf
      </Button>

      <Button
        type="button"
        color="darkGreen"
        text="white"
        radius="md"
        border="none"
        size="twoxl"
        width="auto"
        className="w-full min-w-0 px-4 font-semibold sm:w-auto sm:min-w-[172px]"
        onClick={() => router.push(ROUTES.userPanel)}
      >
        رفتن به پنل کاربری
      </Button>
    </div>
  );
}
