
import { DashboardHeader } from '@/components/dashboard/home/DashboardHeader'
import { ArrowUp, UsersIcon } from 'lucide-react'
import React from 'react'

export default function Dashboard() {


    return (
        <main className='min-h-screen flex flex-col px-[30px] '>
            <DashboardHeader />
            <div className='flex justify-between items-center'>
                <div className="h-[150px] w-[350px] bg-white rounded-[20px] mt-4 px-[20px] py-[24px] flex justify-between">
                    <div>
                        <h2 className='font-extrabold text-[28px]'>250</h2>
                        <p className='text-[16px] tracking-[-0.075rem] m-0'>Total number of staff</p>
                        <div className='mt-4' />
                        <div className='flex items-center gap-0.5'>
                            <ArrowUp width={12} height={14} className='text-[#10A142]' />
                            <p className='text-[12px] tracking-tighter'>12 more than last quarter</p>
                        </div>
                    </div>
                    <div>
                        <div className='bg-[#FFF4E8] flex justify-center items-center p-[5px] rounded-full w-[50px] h-[50px] '>
                            <UsersIcon className='text-[#F29425]' width={31} height={21} />
                        </div>
                    </div>
                </div>
           <div className="h-[150px] w-[350px] bg-white rounded-[20px] mt-4 px-[20px] py-[24px] flex justify-between">
                    <div>
                        <h2 className='font-extrabold text-[28px]'>250</h2>
                        <p className='text-[16px] tracking-[-0.075rem] m-0'>Total number of staff</p>
                        <div className='mt-4' />
                        <div className='flex items-center gap-0.5'>
                            <ArrowUp width={12} height={14} className='text-[#10A142]' />
                            <p className='text-[12px] tracking-tighter'>12 more than last quarter</p>
                        </div>
                    </div>
                    <div>
                        <div className='bg-[#FFF4E8] flex justify-center items-center p-[5px] rounded-full w-[50px] h-[50px] '>
                            <UsersIcon className='text-[#F29425]' width={31} height={21} />
                        </div>
                    </div>
                </div>
                           <div className="h-[150px] w-[350px] bg-white rounded-[20px] mt-4 px-[20px] py-[24px] flex justify-between">
                    <div>
                        <h2 className='font-extrabold text-[28px]'>250</h2>
                        <p className='text-[16px] tracking-[-0.075rem] m-0'>Total number of staff</p>
                        <div className='mt-4' />
                        <div className='flex items-center gap-0.5'>
                            <ArrowUp width={12} height={14} className='text-[#10A142]' />
                            <p className='text-[12px] tracking-tighter'>12 more than last quarter</p>
                        </div>
                    </div>
                    <div>
                        <div className='bg-[#FFF4E8] flex justify-center items-center p-[5px] rounded-full w-[50px] h-[50px] '>
                            <UsersIcon className='text-[#F29425]' width={31} height={21} />
                        </div>
                    </div>
                </div>
                           <div className="h-[150px] w-[350px] bg-white rounded-[20px] mt-4 px-[20px] py-[24px] flex justify-between">
                    <div>
                        <h2 className='font-extrabold text-[28px]'>250</h2>
                        <p className='text-[16px] tracking-[-0.075rem] m-0'>Total number of staff</p>
                        <div className='mt-4' />
                        <div className='flex items-center gap-0.5'>
                            <ArrowUp width={12} height={14} className='text-[#10A142]' />
                            <p className='text-[12px] tracking-tighter'>12 more than last quarter</p>
                        </div>
                    </div>
                    <div>
                        <div className='bg-[#FFF4E8] flex justify-center items-center p-[5px] rounded-full w-[50px] h-[50px] '>
                            <UsersIcon className='text-[#F29425]' width={31} height={21} />
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}
