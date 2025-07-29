"use client"
import { StatisticsTable,StatisticsChart } from '@/components/layout/statistics-widgets'
import { columnsMemo, columnsPaymetVouchers, columnsStaffList, countStatistics, memoData } from '@/constants/constants'
import React, { useEffect, useState } from 'react'

const DashboardStatisticsDetailed = () => {
    const [count,setCount] = useState(0);
    useEffect(()=>{
        setCount(countStatistics.approved + countStatistics.pending + countStatistics.rejected);
    },[]);
    return (

        <div className=' grid h-[327px] mt-[20px] grid-cols-2 gap-[20px]'>

            <StatisticsTable
                title="Memo"
                data={memoData}
                columns={columnsMemo}
            />

            <StatisticsTable
                title="StaffList"
                data={memoData}
                columns={columnsStaffList}
            />

            <StatisticsTable
                title="Payment Vouchers"
                data={memoData}
                columns={columnsPaymetVouchers}
            />

            <StatisticsChart
                title="Staf Applications Card"
                data={countStatistics}
                description={`${count} Total Applications`}
            />

        </div>

    )
}

export default DashboardStatisticsDetailed