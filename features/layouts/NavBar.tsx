import { Bell, Search } from "lucide-react";
import profile from "@/public/profile-panel.png";
import Image from "next/image";
export function NavBar() {
  return (
    <div className="flex justify-between items-center px-10">
      <div className="relative cursor-pointer">
        <input
          type={"Search"}
          placeholder="جستجو"
          className="text-gray-500 border rounded-xl cursor-pointer pl-10 pr-14 py-2.5"
        />

        <Search className="text-gray-500 size-5 absolute top-3 right-4" />
      </div>
      <div className="flex items-center gap-x-7">
        <Bell className="text-gray-600 cursor-pointer" />

        <div className="flex items-center gap-x-1">
          <p className="text-gray-500 text-xs">آقای محمد زارعی</p>
          <div>
            <Image src={profile} alt="Profile Panel" />
          </div>
        </div>
      </div>
    </div>
  );
}
