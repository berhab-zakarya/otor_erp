
import { DashboardHeader } from '@/components/dashboard/home/DashboardHeader'
import DashboardStatisticsDetailed from '@/components/dashboard/home/DashboardStatisticsDetailed'
import {  DashboardStatisticsMini } from '@/components/dashboard/home/DashboardStatisticsMini'

import React from 'react'

export default function Dashboard() {


    return (
        <main className='min-h-screen flex flex-col px-[30px] mb-8 '>
            <DashboardHeader />
            <DashboardStatisticsMini />
            <DashboardStatisticsDetailed/>
        </main>
    )
}
