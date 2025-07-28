"use client"
import { SkeletonCard } from "@/components/loading/shimmer/dashboard/DashboardStatisticsShimmer";
import { statsData } from "@/constants/constants";
import { StatDashboardCardData } from "@/types/statistics";
import { useEffect, useState } from "react";


interface StatCardProps {
  data: StatDashboardCardData;
}
const StatCard: React.FC<StatCardProps> = ({ data }) => {
  const { value, title, trend, icon: Icon, iconBgColor, iconColor } = data;

  return (
    <div className="flex-grow h-[150px] w-full max-w-sm sm:w-auto bg-white rounded-2xl px-5 py-6 flex justify-between items-start ">
      <div className="flex flex-col h-full justify-between">
        {/* Top section: Value and Title */}
        <div>
          <h2 className="font-extrabold text-3xl text-gray-800">{value}</h2>
          <p className="text-base font-extralight m-0">{title}</p>
        </div>
        
        {/* Bottom section: Trend Information (only rendered if it exists) */}
        {trend && (
          <div className="flex items-center gap-1">
            <trend.Icon width={12} height={14} className={trend.color} />
            <p className="text-xs text-gray-500">{trend.value}</p>
          </div>
        )}
      </div>
      
      {/* Right section: Icon */}
      <div>
        <div className={`flex justify-center items-center p-2 rounded-full w-12 h-12 ${iconBgColor}`}>
          <Icon className={iconColor} width={28} height={28} />
        </div>
      </div>
    </div>
  );
};

export const DashboardStatisticsMini: React.FC = () => {
  const [data, setData] = useState<StatDashboardCardData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // محاكاة جلب بيانات مع تأخير 2 ثانية مثلاً
    const timer = setTimeout(() => {
      setData(statsData);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-wrap justify-center lg:justify-between items-center gap-6">
      {loading
        ? // عرض 3 كروت وهمية أثناء التحميل
          [1, 2, 3,4].map((_, i) => <SkeletonCard key={i} />)
        : data.map((stat, index) => <StatCard key={index} data={stat} />)}
    </div>
  );
};
