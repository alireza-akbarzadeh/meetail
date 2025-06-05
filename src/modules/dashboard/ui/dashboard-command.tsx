import React from 'react';
import { CommandDialog, CommandInput, CommandItem, CommandList } from '@/components/ui/command';

interface DashboardCommandProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function DashboardCommand(props: DashboardCommandProps) {
  const { open, setOpen } = props;

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Find a meeting or agent" />
      <CommandList>
        <CommandItem>Test</CommandItem>
      </CommandList>
    </CommandDialog>
  );
}
