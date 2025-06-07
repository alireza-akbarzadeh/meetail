'use client';
import { useTRPC } from '@/trpc/client';
import { useSuspenseQuery } from '@tanstack/react-query';
import { ResponsiveDialog } from '@/components/common/responsive-dialog';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export function AgentsView() {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.agents.geMany.queryOptions());
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <Button onClick={() => setOpen((open) => !open)}>open dialog</Button>
      <ResponsiveDialog
        title={'title test'}
        description={'description test'}
        open={open}
        onOpenChange={setOpen}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eaque est perspiciatis
          sequi ut.
        </p>
      </ResponsiveDialog>
      {JSON.stringify(data, null, 2)}
    </div>
  );
}
