'use client';
import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';
import { useState } from 'react';
import { NewAgentDialog } from '@/modules/agents/ui/new-agent-dialog';

export function AgentListHeader() {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  return (
    <>
      <NewAgentDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      <div className="flex flex-col px-4 py-4 md:px-8">
        <div className="flex items-center justify-between">
          <h5 className="text-xl font-medium">My Agents</h5>
          <Button onClick={() => setIsDialogOpen(true)}>
            <PlusIcon />
            Create Agent
          </Button>
        </div>
      </div>
    </>
  );
}
