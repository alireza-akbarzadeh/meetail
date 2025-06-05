'use client';
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { PanelLeftCloseIcon, PanelLeftIcon, SearchIcon } from 'lucide-react';
import { useSidebar } from '@/components/ui/sidebar';
import { DashboardCommand } from '@/modules/dashboard';

export function DashboardNavbar() {
  const { isMobile, state, toggleSidebar } = useSidebar();
  const [commandOpen, setCommandOpen] = useState<boolean>(false);

  useEffect(() => {
    const down = (event: KeyboardEvent) => {
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setCommandOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <>
      <DashboardCommand open={commandOpen} setOpen={setCommandOpen} />
      <nav className="bg-background flex items-center gap-x-2 border-b px-4 py-3">
        <Button className="size-9" variant="outline" onClick={toggleSidebar}>
          {state === 'collapsed' || isMobile ? (
            <PanelLeftIcon className="size-4" />
          ) : (
            <PanelLeftCloseIcon className="size-4" />
          )}
        </Button>
        <Button
          className="text-muted-foreground hover: hover:text-muted-foreground h-9 w-[240px] justify-start font-normal"
          variant="outline"
          size="sm"
          onClick={() => setCommandOpen((open) => !open)}
        >
          <SearchIcon />
          Search
          <kbd className="bg-muted text-muted-foreground pointer-events-none ml-auto inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium select-none">
            <span className="text-xs">&#8984;</span>K
          </kbd>
        </Button>
      </nav>
    </>
  );
}
