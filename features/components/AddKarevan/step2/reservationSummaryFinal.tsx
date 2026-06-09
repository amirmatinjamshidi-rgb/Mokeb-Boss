"use client";



import Divider from "@mui/material/Divider";

import { cn } from "@/features/lib/utils";

export type ReservationSummaryFinalProps = {
  guestCount: number;
  checkInDate: string;
  checkOutDate: string;
  checkInTime?: string;
  checkOutTime?: string;
  supervisorName?: string;
  reserveCode?: string;
  className?: string;
};



const dash = "—";



export default function ReservationSummaryFinal({
  guestCount,
  checkInDate,
  checkInTime = dash,
  checkOutDate,
  checkOutTime = dash,
  reserveCode,
  supervisorName = dash,
  className,
}: ReservationSummaryFinalProps) {

  return (

    <div

      dir="rtl"

      className={cn(

        "flex w-full flex-col items-stretch justify-center gap-3 rounded-3xl bg-white px-4 py-3 shadow-[0px_2px_4px_0px_#0000001F] sm:gap-4 sm:px-8 sm:py-4 md:flex-row md:items-center md:gap-6 md:px-10",

        className,

      )}

    >

      <span className="sr-only">{`تعداد نفرات رزرو: ${guestCount} نفر، تاریخ ورود: ${checkInDate}`}</span>



      <div className="flex min-w-0 flex-1 flex-col gap-2 sm:gap-3">

        <InfoRow label="کد درخواست :" value={reserveCode || dash} />

        <InfoRow label="تاریخ ثبت درخواست :" value={checkInTime} />

        <InfoRow

          label="مدیر کاروان :"

          value={supervisorName}

        />

      </div>



      <Divider

        orientation="vertical"

        flexItem

        className="hidden border-[#E5E7EB] md:block"

      />

      <Divider className="border-[#E5E7EB] md:hidden" />



      <div className="flex min-w-0 flex-1 flex-col gap-2 sm:gap-3">

        <InfoRow label="نوع رزرو :" value={checkOutDate || dash} />

        <InfoRow label="تاریخ ورود درخواستی : " value={checkOutTime} />

        <InfoRow label="اعضای کاروان :" value={supervisorName} />

      </div>

    </div>

  );

}



function InfoRow({ label, value }: { label: string; value: string }) {

  return (

    <div className="flex min-h-12 w-full items-center justify-between gap-3">

      <span className="shrink-0 text-sm text-[#61756F]">{label}</span>

      <span className="min-w-0 text-end text-sm font-medium text-[#1F2937]">

        {value}

      </span>

    </div>

  );

}

