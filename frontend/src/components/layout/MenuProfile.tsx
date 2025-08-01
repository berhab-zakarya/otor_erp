import React from 'react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ChevronDown, LogOut,  SettingsIcon, UserIcon } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
const MenuProfile = () => {
    const userName = "Zakarya Berhab";
    const jobName = "HR Office";
    return (

        <DropdownMenu>
            <DropdownMenuTrigger asChild>

                <button
                    type="button"
                    className="flex items-center gap-2 rounded-lg cursor-pointer  py-2 transition-colors group outline-0"
                >
                    <div className="flex items-center gap-2">
                        <Avatar className="bg-primary w-10 h-10 flex justify-center items-center">
                            <AvatarFallback className="text-black font-black">
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
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56  ">
                <DropdownMenuLabel className='flex items-center gap-2 py-4 cursor-pointer hover:bg-[#F8F9FD]'>
                    <UserIcon className='w-4 h-4' /> <p className='font-extralight'>Profile</p>
                </DropdownMenuLabel>
                <DropdownMenuLabel className='flex items-center gap-2 py-4  cursor-pointer hover:bg-[#F8F9FD]'>
                    <SettingsIcon className='w-4 h-4' /> <p className='font-extralight '>Settings</p>
                </DropdownMenuLabel>
                <DropdownMenuLabel className='flex items-center gap-2 py-4 cursor-pointer hover:bg-[#F8F9FD]'>
                    <LogOut className='w-4 h-4' /> <p className='font-extralight'>Logout</p>
                </DropdownMenuLabel>

            </DropdownMenuContent>
        </DropdownMenu>

    )
}

export default MenuProfile