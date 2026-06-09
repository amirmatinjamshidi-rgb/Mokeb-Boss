import {
  LogOut,
  Settings,
  User,
  Users2,
  FilePenLine,
  Receipt,
} from "lucide-react";

import type { NavItem } from "@admin-kit/shared/types";

/**
 * Default admin-panel sidebar links.
 * Update `href` values to match routes in your new repo.
 */
export const ADMIN_PANEL_NAV: NavItem[] = [
  {
    href: "/Karvan-Management",
    label: " مدیریت نماینده کاروان",
    icon: User,
  },
  {
    href: "/Add-Karvan",
    label: "ثبت رزرو کاروان",
    icon: FilePenLine,
  },
  {
    href: "/Karvan-reservations",
    label: "رزرو های کاروان",
    icon: Receipt,
  },
  {
    href: "/Manage-Guests",
    label: " مدیریت زائران کاروان",
    icon: Users2,
  },
  {
    href: "/Settings",
    label: " تنظیمات",
    icon: Settings,
  },
  {
    href: "/Home",
    label: "خروج از پنل",
    icon: LogOut,
  },
];

/** @deprecated Use ADMIN_PANEL_NAV — kept for drop-in compatibility */
export const USER_PANEL_NAV = ADMIN_PANEL_NAV;
