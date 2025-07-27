import {
  LayoutDashboard,
  Users,
  Receipt,
  Wallet,
  StickyNote,
  Megaphone,
  Settings,
  Truck,
  Banknote,
  Boxes,
  Bell,
  Brain,
  ShoppingCart,
  Briefcase,
  AppWindow,
  Smile
} from "lucide-react";

const url = "/dashboard/";

export const sidebarItems = [
  {
    title: "Dashboard",
    url: `${url}`,
    icon: LayoutDashboard,
  },
  {
    title: "Staff",
    url: `${url}staff`,
    icon: Users,
  },
  {
    title: "Payment Voucher",
    url: `${url}departments`,
    icon: Receipt,
  },
  {
    title: "Payroll",
    url: `${url}payroll`,
    icon: Wallet,
  },
  {
    title: "Memo",
    url: `${url}memos`,
    icon: StickyNote,
  },
  {
    title: "Circulars",
    url: `${url}circulars`,
    icon: Megaphone,
  },
  {
    title: "Settings",
    url: `${url}settings`,
    icon: Settings,
  },
  {
    title: "Logistics",
    url: `${url}logistics`,
    icon: Truck,
  },
  {
    title: "Office Budget",
    url: `${url}finance`,
    icon: Banknote,
  },
  {
    title: "Stocks and Inventory",
    url: `${url}stocks`,
    icon: Boxes,
  },
  {
    title: "Notifications",
    url: `${url}notifications`,
    icon: Bell,
  },
  {
    title: "Capacity Building",
    url: `${url}capacity`,
    icon: Brain,
  },
  {
    title: "Procurements",
    url: `${url}procurements`,
    icon: ShoppingCart,
  },
];

export const otherIcons = [
  {
    title: "Projects",
    url: `${url}projects`,
    icon: Briefcase,
  },
  {
    title: "Application",
    url: `${url}application`,
    icon: AppWindow,
  },
  {
    title: "Happy Workplace",
    url: `${url}happy`,
    icon: Smile,
  },
];
