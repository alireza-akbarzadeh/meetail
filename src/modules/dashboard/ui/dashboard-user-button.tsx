'use client';
import React from 'react';
import { authClient } from '@/lib/auth-client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import GenerateAvatar from '@/components/common/generate-avatar';
import { ChevronsUpDown, CreditCardIcon, LogOutIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function DashboardUserButton() {
  const { push } = useRouter();
  const { data, isPending } = authClient.useSession();

  const onLogout = () => {
    authClient.signOut({ fetchOptions: { onSuccess: () => push('/sign-in') } });
  };

  if (isPending || !data?.user) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border-border/10 flex w-full items-center justify-between gap-2 overflow-hidden rounded-lg border bg-white/5 p-3 hover:bg-white/10">
        {data.user.image ? (
          <Avatar>
            <AvatarImage src={data.user.image} alt={data.user.name} />
            <AvatarFallback className="text-muted-foreground" />
          </Avatar>
        ) : (
          <GenerateAvatar seed={data.user.name} variants="initials" className="mr-3 size-9" />
        )}
        <div className="flex min-w-0 flex-1 flex-col gap-0.5 overflow-hidden text-left">
          <p className="w-full truncate text-sm">{data.user.name}</p>
          <p className="w-full truncate text-xs">{data.user.email}</p>
        </div>
        <ChevronsUpDown className="size-4.5 shrink-0" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" side="right" className="w-72">
        <DropdownMenuLabel>
          <div className="flex flex-col gap-1">
            <span className="truncate font-medium">{data.user.name}</span>
            <span className="text-muted-foreground truncate text-sm font-normal">
              {data.user.email}
            </span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-sm font-medium">
          <CreditCardIcon className="size-4" />
          Billing
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onLogout} className="text-sm font-medium">
          <LogOutIcon className="size-4" />
          LogOut
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
