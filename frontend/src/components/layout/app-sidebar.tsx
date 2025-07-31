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
import { usePathname } from "next/navigation"
import React from 'react'
import clsx from "clsx"
import OtorLogo from "./logo"

export function AppSidebar() {
    const pathname = usePathname();

    return (
        <Sidebar>
            <SidebarHeader className="flex justify-center items-center h-[181px]">
                <OtorLogo />
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
                                                    isActive ? "text-primary bg-primary-foreground" : "text-texts-black tracking-wider "
                                                )}
                                                asChild
                                            >
                                                <a href={item.url} className={`flex items-center gap-2 w-full ${isActive? "pl-[20px]" : "pl-[30px]"}` }>
                                                    <item.icon className={clsx("w-5 h-5", isActive ? "text-primary" : "text-texts-black")} />
                                                    <span className={clsx(isActive ? "text-primary" : "text-texts-black","text-sm")}>
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

