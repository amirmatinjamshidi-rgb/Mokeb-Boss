import { Bell, Bolt, Search } from "lucide-react";
import profile from "@/public/profile-panel.jpg";
import Image from "next/image";
export function NavBar() {
  return (
    <div
      dir="rtl"
      className="flex justify-between  items-center px-10 bg-white h-16 rounded-tl-2xl w-full sticky rounded-tr-2xl shadow-xs shadow-gray-300"
    >
      <div className="relative cursor-pointer">
        <input
          type={"Search"}
          placeholder="جستجو"
          className="text-gray-500 border rounded-xl cursor-pointer pl-10 pr-14 py-2.5"
        />

        <Search className="text-gray-500 size-5 absolute top-3 right-4" />
      </div>
      <div className="flex items-center gap-x-7">
        <Bolt stroke="#61756F" />
        <Bell className="text-[#61756F] cursor-pointer" />
        <div className="flex items-center gap-x-3">
          <p className="text-gray-500 text-xs">آقای محمد زارعی</p>

          <Image
            src={profile}
            alt="Profile Panel"
            sizes="32"
            className="rounded-full object-cover size-8"
          />
        </div>
      </div>
    </div>
  );
}
