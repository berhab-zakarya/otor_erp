import OtorButton from '@/components/layout/button'
import React from 'react'
import FilterStaff from './FilterStaff'
import OtorSearchInput from '@/components/layout/search-input'

function StaffControls() {
    return (
        <div className='mt-[40px] h-[150px] bg-white rounded-[10px] py-6 px-[20px] flex justify-between items-center'>
            <div className='flex flex-col gap-2'>
                <h1 className='text-[#121212] text-sm'>Quick search staff</h1>

                <OtorSearchInput
                    width='w-[350px]'
                    type='text'
                    placeholder='Enter search word'
                    name='search'

                />
            </div>

            <div className='flex flex-col'>
                <h3 className="text-2xl font-extrabold">
                    {/* {countStaff} */}
                    250
                </h3>
                <p className="text-sm font-light">
                    Total number of staff
                </p>

            </div>

            <div className='flex flex-col gap-2'>
                <h1 className='text-[#121212] text-sm'>Filter Staff</h1>
                <FilterStaff />
            </div>

            <OtorButton
                title="Add New Staff"
                width='w-[180px]'
            />
        </div>
    )
}

export default StaffControls