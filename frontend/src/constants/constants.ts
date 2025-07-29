import { ChartConfig } from "@/components/ui/chart";
import { MemoItem, PaymentVoucher, StaffItem, StatDashboardCardData, StatisticsCount, StatisticsPie } from "@/types/statistics";
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
  Smile,
  ArrowDown,
  ArrowUp
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


export const statsData: StatDashboardCardData[] = [
  {
    value: '250',
    title: 'Total number of staff',
    trend: {
      direction: 'up',
      value: '12 more than last quarter',
      Icon: ArrowUp,
      color: 'text-[#10A142]',
    },
    icon: Users,
    iconBgColor: 'bg-[#FFF4E8]',
    iconColor: 'text-[#F29425]',
  },
  {
    value: '100',
    title: 'Total application',
    trend: {
      direction: 'down',
      value: '0.2% lower than last quarter',
      Icon: ArrowDown,
      color: 'text-[#ED3237]',
    },
    icon: AppWindow,
    iconBgColor: 'bg-[#E8F5FF]',
    iconColor: 'text-[#248CD8]',
  },
  {
    value: '10',
    title: 'Total projects',
    trend: {
      direction: 'up',
      value: '2% more than last quarter',
      Icon: ArrowUp,
      color: 'text-[#10A142]',
    },
    icon: Briefcase,
    iconBgColor: 'bg-[#F9EFFF]',
    iconColor: 'text-[#A601FF]',
  },
  {
    value: '10',
    title: 'Total departement',
    icon: Receipt,
    iconBgColor: 'bg-[#ECFFF2]',
    iconColor: 'text-[#10A142]',
  },
];


// constants.ts

export const memoData: MemoItem[] = [
  { id: 1, title: "Meeting Schedule", sentFrom: "Ahmed", sentTo: "All Staff", status: "approved", color: "#10A142" },
  { id: 2, title: "Project Update", sentFrom: "Sara", sentTo: "Management", status: "pending", color: "#F29425" },
  { id: 3, title: "Holiday Notice", sentFrom: "HR Dept", sentTo: "All Employees", status: "approved", color: "#10A142" },
  { id: 4, title: "Budget Approval", sentFrom: "Finance", sentTo: "Board", status: "rejected", color: "#E54F53" },
];

export const staffData: StaffItem[] = [
  { id: 1, name: "Ahmed Yusuf", role: "Manager", designation: "Operations Head" },
  { id: 2, name: "Fatima Zahra", role: "Developer", designation: "Frontend Engineer" },
  { id: 3, name: "Yacine B.", role: "Designer", designation: "UI/UX Designer" },
  { id: 4, name: "Khadija L.", role: "HR", designation: "Recruitment Officer" },
];

export const paymentVouchers: PaymentVoucher[] = [
  { id: 1, subject: "Office Supplies", date: "2025-07-01", status: "approved", amount: 25000, color: "#10A142" },      // أخضر
  { id: 2, subject: "Travel Reimbursement", date: "2025-07-05", status: "pending", amount: 48000, color: "#F29425" }, // برتقالي
  { id: 3, subject: "Software License", date: "2025-07-10", status: "approved", amount: 150000, color: "#10A142" },
  { id: 4, subject: "Team Lunch", date: "2025-07-15", status: "rejected", amount: 12000, color: "#E54F53" },     // أحمر
];

export const countStatistics:StatisticsCount={
  approved:10,
  pending:30,
  rejected:90
}

export const chartData:StatisticsPie[] = [
  { status: "pending", count: countStatistics.pending, fill: "#F29421" },
  { status: "approved", count: countStatistics.approved, fill: "#10A142" },
  { status: "rejected", count: countStatistics.rejected, fill: "#E54F53" },
]

export const chartConfig = {

    pending: {
        label: "Pending",
        color: "#ff0000",
    },
    approved: {
        label: "Approved",
        color: "#ff0000",
    },
    rejected: {
        label: "Rejected",
        color: "#ff0000",
    },

} satisfies ChartConfig


export  const columnsMemo = ['S/N', 'Memo Title', 'Sent From', 'Sent To', 'Status'];

export   const columnsStaffList = ['S/N', 'Staff Name', 'Staff Role', 'Designation'];
export   const columnsPaymetVouchers = ['S/N', 'Subject', 'Date', 'Status'];

