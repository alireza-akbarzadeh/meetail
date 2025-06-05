import React, { PropsWithChildren } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { DashboardNavbar, DashboardViews } from '@/modules/dashboard';

export default function DashboardLayout(props: PropsWithChildren) {
  const { children } = props;
  return (
    <SidebarProvider>
      <DashboardViews />
      <main className="bg-muted flex h-screen w-screen flex-col">
        <DashboardNavbar />
        {children}
      </main>
    </SidebarProvider>
  );
}
