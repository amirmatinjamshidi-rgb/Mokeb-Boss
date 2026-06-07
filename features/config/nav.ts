import { LogOut, Settings, User, Users2 } from "lucide-react";

import Edit from "@/public/Edit.svg";
import Receipt from "@/public/Receipt.svg";
import type { NavItem } from "../types";

export const USER_PANEL_NAV: NavItem[] = [
  {
    href: `/Karvan-Management`,
    label: " مدیریت نماینده کاروان",
    icon: User,
  },
  {
    href: `/Add-Karvan`,
    label: "ثبت رزرو کاروان",
    icon: Edit,
  },
  {
    href: `/Karvan-reservations`,
    label: "رزرو های کاروان",
    icon: Receipt,
  },
  {
    href: `/Manage-Guests`,
    label: " مدیریت زائران کاروان",
    icon: Users2,
  },
  {
    href: `/Settings`,
    label: " تنظیمات",
    icon: Settings,
  },
  {
    href: "/Home",
    label: "خروج از پنل",
    icon: LogOut,
  },
];
