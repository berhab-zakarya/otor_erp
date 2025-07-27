"use client"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarHeader,
} from "@/components/ui/sidebar"
import { sidebarItems } from "@/constants/constants"
import { getLogo } from "@/utils/icons"
import { usePathname } from "next/navigation"
import React from 'react'
import clsx from "clsx"

export function AppSidebar() {
    const pathname = usePathname();

    return (
        <Sidebar>
            <SidebarHeader className="flex justify-center items-center h-[181px]">
                <Header />
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup className="p-0">
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {sidebarItems.map((item) => {
                                const isDashboard = item.title === "Dashboard";
                                const isActive = isDashboard
                                    ? pathname === "/dashboard"
                                    : pathname.startsWith(item.url);

                                return (
                                    <SidebarMenuItem className="h-[50px]" key={item.title}>
                                        <div className="flex h-full items-center">
                                            {isActive && (
                                                <span className="w-[6px] rounded-r-full h-full bg-primary mr-1" />
                                            )}
                                            <SidebarMenuButton
                                                className={clsx(
                                                    "h-full rounded-none  w-full flex items-center gap-2 px-3",
                                                    isActive ? "text-primary bg-primary-foreground" : "text-texts-black"
                                                )}
                                                asChild
                                            >
                                                <a href={item.url} className="flex items-center gap-2 w-full">
                                                    <item.icon className={clsx("w-5 h-5", isActive ? "text-primary" : "text-texts-black")} />
                                                    <span className={clsx(isActive ? "text-primary" : "text-texts-black")}>
                                                        {item.title}
                                                    </span>
                                                </a>
                                            </SidebarMenuButton>
                                        </div>
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            {getLogo({ height: 35.5, width: 35.5 })}
            <div className="flex flex-col justify-center items-center">
                <p className="text-primary-gradient text-sm font-bold my-1 p-0 leading-none">UiUxOtor</p>
                <p className="m-0 p-0 text-[13px] text-[#272525] leading-none">ERP System</p>
            </div>
        </div>
    )
}
