import React, {PropsWithChildren} from 'react'
import {SidebarProvider} from "@/components/ui/sidebar";
import {DashboardSidebar} from "@/modules/dashboard/ui/dashboard-sidebar";

export default function DashboardLayout(props:PropsWithChildren) {
    const {children} = props;
    return (
        <SidebarProvider>
            <DashboardSidebar/>
            <main className='flex flex-col h-screen w-screen bg-muted'>
                {children}
            </main>
        </SidebarProvider>
    )
}
