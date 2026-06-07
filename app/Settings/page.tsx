"use client";

import { useState } from "react";
import { Bolt } from "lucide-react";
import {
  SettingsSections,
  type SettingsSectionId,
} from "@/features/components/Settings/SettingsSections";
import UserInfo from "@/features/components/Settings/UserInfo";
import ModiriatKarvan from "@/features/components/Settings/modiriatKarvan";
export default function SettingsPage() {
  const [section, setSection] = useState<SettingsSectionId>("caravan");

  return (
    <div className="flex w-full flex-col gap-16">
      <h1 className="flex w-full items-center gap-2 text-2xl font-bold text-gray-500 sm:text-3xl">
        <Bolt className="size-7 sm:size-8" />
        تنظیمات
      </h1>

      <SettingsSections
        value={section}
        onValueChange={setSection}
        className="w-full self-center"
      />

      <div
        role="tabpanel"
        aria-labelledby={`settings-tab-${section}`}
        className="min-h-[200px] w-full max-w-[1108px] max-h-[258px] self-center rounded-xl border border-gray-200 shadow-xs shadow-[#00000024] bg-white p-6 text-sm text-gray-500"
      >
        {section === "caravan" ? (
         <div className="flex flex-col gap-10">
          <UserInfo/>
      
         
         <ModiriatKarvan/></div>
        ) : section === "user" ? (
          <p>محتوای اطلاعات کاربری (به‌زودی)</p>
        ) : (
          <p>محتوای مستندات و قرارداد (به‌زودی)</p>
        )}
      </div>
    </div>
  );
}
