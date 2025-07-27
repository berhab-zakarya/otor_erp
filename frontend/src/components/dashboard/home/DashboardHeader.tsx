import { Avatar, AvatarFallback } from '@radix-ui/react-avatar'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image';
import React from 'react'

export const DashboardHeader = () => {
     const userName = "Zakarya Berhab";
    const jobName = "HR Office";

    const today = new Date();

    const formattedDate = today.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });
    return (
        <header className="h-[100px] flex items-center justify-between px-[30px] p-[16px] ">
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
                    className="group p-2 hover:bg-[#F2F7FF] transition-colors cursor-pointer"
                    aria-label="Notifications"
                >
                    <Image
                        src="/icons/notifications.svg"
                        alt="notification"
                        width={15}
                        height={15}
                        className="transition-transform duration-200 group-hover:scale-110 group-hover:bg-[#F2F7FF]"
                    />
                </button>


                <button
                    type="button"
                    className="flex items-center gap-2 rounded-lg cursor-pointer hover:bg-[#F2F7FF] py-2 transition-colors group"
                >
                    <div className="flex items-center gap-2">
                        <Avatar className="bg-primary w-10 h-10 flex justify-center items-center">
                            <AvatarFallback className="text-white font-black">
                                {userName.charAt(0)}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col gap-0.5 text-left">
                            <p className="leading-none m-0 text-[14px]">{userName}</p>
                            <p className="leading-none m-0 text-[12px]">{jobName}</p>
                        </div>
                    </div>
                    <div>
                        <ChevronDown className="transition-transform group-hover:rotate-180" />
                    </div>
                </button>

            </div>
        </header>
    )
}
