import StaffControls from '@/components/dashboard/staff/StaffControls'
import { StaffHeader } from '@/components/dashboard/staff/StaffHeader'
import StaffTable from '@/components/dashboard/staff/StaffTable'
import React from 'react'

const page = () => {
  return (
    <main className='min-h-screen flex flex-col px-[30px] mb-8 '>
      <StaffHeader />
      <StaffControls/>
      <StaffTable/>

    </main>
  )
}

export default page