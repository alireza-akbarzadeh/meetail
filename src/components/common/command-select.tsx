import React, { useState } from 'react';
import {
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
  CommandResponsiveDialog,
} from '@/components/ui/command';
import { Button } from '@/components/ui/button';
import { ChevronsUpDownIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CommandSelectProps {
  options: Array<{
    id: string;
    value: string;
    children?: React.ReactNode;
  }>;
  onSelect: (value: string) => void;
  onSearch: (value: string) => void;
  value: string;
  placeholder?: string;
  isSearchable?: boolean;
  className?: string;
}

export function CommandSelect(props: CommandSelectProps) {
  const { options, onSelect, placeholder, className, isSearchable, value, onSearch } = props;
  const [open, setOpen] = useState<boolean>(false);
  const selectedOptions = props.options.find((option) => option.value === value);

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          'h-9 justify-between px-2 font-normal',
          !selectedOptions && 'text-muted-foreground',
          className,
        )}
        onClick={() => setOpen(true)}
      >
        <div>{selectedOptions?.children ?? placeholder}</div>
        <ChevronsUpDownIcon />
      </Button>
      <CommandResponsiveDialog shouldFilter={!onSearch} open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search..." onValueChange={onSearch} />
        <CommandList>
          <CommandEmpty>
            <span className="text-muted-foreground">No Options found</span>
          </CommandEmpty>
          {options.map((option) => (
            <CommandItem
              key={option.id}
              onSelect={() => {
                onSelect(option.value);
                setOpen(false);
              }}
            >
              {option.children}
            </CommandItem>
          ))}
        </CommandList>
      </CommandResponsiveDialog>
    </>
  );
}
