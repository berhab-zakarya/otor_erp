import StatisticsTable from '@/components/layout/statistics-table'
import { columnsMemo, columnsPaymetVouchers, columnsStaffList, memoData } from '@/constants/constants'
import React from 'react'

const DashboardStatisticsDetailed = () => {

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

            {/* <StatisticsTable
                title="Memo"
                data={memoData}
                columns={columns}
            /> */}

        </div>

    )
}

export default DashboardStatisticsDetailed