
import Image from 'next/image';
import React from 'react'
import MenuProfile from './MenuProfile';

export const DashboardHeader = () => {
     const userName = "Zakarya Berhab";

    const today = new Date();

    const formattedDate = today.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });
    return (
        <header className="h-[100px] flex items-center justify-between  ">
            <div className="flex flex-col">
                <div className='flex items-center'>
                    <h3 className='mr-1 font-extrabold text-[20px]'>
                        Welcome Mr. {userName}
                    </h3>
                    <Image
                        src={"/icons/happy_emoji.svg"}
                        width={24}
                        height={24}
                        alt='emoji'
                    />
                </div>
                <div>
                    <p className="text-[12px] text-[#262626]/90">
                        Today is {formattedDate}
                    </p>
                </div>
            </div>
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


            <MenuProfile/>

            </div>
        </header>
    )
}
