'use client';
import React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { DashboardUserButton } from '@/modules/dashboard/ui/dashboard-user-button';
import { primarySection, secondSection } from '@/constant/menu';

export function DashboardViews() {
  const pathName = usePathname();
  return (
    <Sidebar>
      <SidebarHeader className="text-sidebar-accent-foreground">
        <Link href="/public" className="flex items-center gap-2 px-2 pt-2">
          <Image src="/logo.svg" alt="logo" width={36} height={36} />
          <p className="text-2xl font-semibold">Meet.AI</p>
        </Link>
      </SidebarHeader>
      <div className="px-4 py-2">
        <Separator className="text-[#5D6B68] opacity-10" />
      </div>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {primarySection.map(({ icon: Icon, label, href }) => (
                <SidebarMenuItem key={href}>
                  <SidebarMenuButton
                    isActive={href === pathName}
                    asChild
                    className={cn(
                      'from-sidebar-accent via-sidebar/50 to-sidebar/50] h-10 border border-transparent from-5% via-30% hover:border-[#5D6B68] hover:bg-linear-to-r/oklch',
                      pathName === href &&
                        'from-sidebar-accent via-sidebar/50 to-sidebar/50 border border-[#5D6B68]/10 bg-linear-to-r/oklch from-5% via-30%',
                    )}
                  >
                    <Link href={href} className="gap- flex items-center">
                      {<Icon className="size-5" />}
                      <span className="text-sm font-medium tracking-tight">{label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <div className="px-4 py-2">
          <Separator className="text-[#5D6B68] opacity-10" />
        </div>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {secondSection.map(({ icon: Icon, label, href }) => (
                <SidebarMenuItem key={href}>
                  <SidebarMenuButton
                    isActive={href === pathName}
                    asChild
                    className={cn(
                      'from-sidebar-accent via-sidebar/50 to-sidebar/50] h-10 border border-transparent from-5% via-30% hover:border-[#5D6B68] hover:bg-linear-to-r/oklch',
                      pathName === href &&
                        'from-sidebar-accent via-sidebar/50 to-sidebar/50 border border-[#5D6B68]/10 bg-linear-to-r/oklch from-5% via-30%',
                    )}
                  >
                    <Link href={href} className="gap- flex items-center">
                      {<Icon className="size-5" />}
                      <span className="text-sm font-medium tracking-tight">{label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="text-white">
        <DashboardUserButton />
      </SidebarFooter>
    </Sidebar>
  );
}
