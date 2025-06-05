"use client"
import React from 'react'
import {BotIcon, StarIcon, VideoIcon} from "lucide-react";
import {
    Sidebar,
    SidebarContent, SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu, SidebarMenuButton, SidebarMenuItem
} from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import {Separator} from "@/components/ui/separator";
import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";
import {DashboardUserButton} from "@/modules/dashboard/ui/dashboard-user-button";

const firstSection = [
    {
        icon: VideoIcon,
        label: 'Meetings',
        href: '/meetings'
    },
    {
        icon: BotIcon,
        label: 'Agents',
        href: '/agents'
    }
];

const secondSection = [
    {
        icon: StarIcon,
        label: 'Upgrade',
        href: '/upgrade'
    }
];

export function DashboardSidebar() {
    const pathName=usePathname();
    return (
        <Sidebar>
            <SidebarHeader className='text-sidebar-accent-foreground'>
                <Link href='/' className='flex items-center gap-2 px-2 pt-2'>
                    <Image src='/logo.svg' alt='logo' width={36} height={36}/>
                    <p className='text-2xl font-semibold'>Meet.AI</p>
                </Link>
            </SidebarHeader>
            <div className="px-4 py-2">
                <Separator className='opacity-10 text-[#5D6B68]'/>
            </div>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {firstSection.map(({icon:Icon, label, href}) => (
                                <SidebarMenuItem key={href}>
                                    <SidebarMenuButton
                                        isActive={href === pathName}
                                        asChild className={cn('h-10 hover:bg-linear-to-r/oklch border border-transparent hover:border-[#5D6B68] from-sidebar-accent from-5% via-30% via-sidebar/50 to-sidebar/50]',pathName === href && 'bg-linear-to-r/oklch border border-[#5D6B68]/10 from-sidebar-accent from-5% via-30% via-sidebar/50 to-sidebar/50')}>
                                        <Link href={href} className='flex items-center gap-'>
                                            {<Icon className='size-5'  />}
                                            <span className='text-sm font-medium tracking-tight'>
                                              {label}
                                            </span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <div className="px-4 py-2">
                    <Separator className='opacity-10 text-[#5D6B68]'/>
                </div>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {secondSection.map(({icon:Icon, label, href}) => (
                                <SidebarMenuItem key={href}>
                                    <SidebarMenuButton
                                        isActive={href === pathName}
                                        asChild className={cn('h-10 hover:bg-linear-to-r/oklch border border-transparent hover:border-[#5D6B68] from-sidebar-accent from-5% via-30% via-sidebar/50 to-sidebar/50]',pathName === href && 'bg-linear-to-r/oklch border border-[#5D6B68]/10 from-sidebar-accent from-5% via-30% via-sidebar/50 to-sidebar/50')}>
                                        <Link href={href} className='flex items-center gap-'>
                                            {<Icon className='size-5'  />}
                                            <span className='text-sm font-medium tracking-tight'>
                                              {label}
                                            </span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className='text-white'>
                <DashboardUserButton/>
            </SidebarFooter>
        </Sidebar>
    )
}
