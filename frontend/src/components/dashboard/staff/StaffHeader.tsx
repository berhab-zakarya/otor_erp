
import Image from 'next/image';
import React from 'react'
import MenuProfile from '@/components/layout/MenuProfile';
import {  Users } from 'lucide-react';
import TitleHeader from '@/components/layout/title-header';

export const StaffHeader = () => {

    return (
        <header className="h-[100px] flex items-center justify-between  ">
          <TitleHeader title="All Staff" description="View, search for and add new staff" icon={Users}/>
            <div className="flex max-w-[232px] w-full justify-between items-center ">

                <button
                    type="button"
                    className="group p-2  transition-colors cursor-pointer"
                    aria-label="Notifications"
                >
                    <Image
                        src="/icons/notifications.svg"
                        alt="notification"
                        width={15}
                        height={15}
                        className="transition-transform duration-200 group-hover:scale-110 group-"
                    />
                </button>


                <MenuProfile />

            </div>
        </header>
    )
}
