import { LucideIcon } from "lucide-react";

export interface StatDashboardCardData {
  value: string;
  title: string;
  // Optional trend information (for cards that show change)
  trend?: {
    direction: 'up' | 'down';
    value: string;
    Icon: LucideIcon;
    color: string;
  };
  icon: LucideIcon;
  iconBgColor: string;
  iconColor: string;

  
}


export type MemoStatus = 'pending' | 'approved' | 'rejected';

export interface MemoItem {
  id: number;
  title: string;
  sentFrom: string;
  sentTo: string;
  status: MemoStatus;
  color: string; // اللون المرافق للحالة
}

export interface StaffItem {
  id: number;
  name: string;
  role: string;
  designation: string;
}

export type VoucherStatus = 'pending' | 'approved' | 'rejected';

export interface PaymentVoucher {
  id: number;
  subject: string;
  date: string;
  status: VoucherStatus;
  amount: number;
  color: string; // اللون المرتبط بالحالة
}
