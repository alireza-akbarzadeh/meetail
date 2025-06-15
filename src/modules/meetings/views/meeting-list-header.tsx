'use client';
import { Button } from '@/components/ui/button';
import { PlusIcon, X } from 'lucide-react';
import { useState } from 'react';
import { NewAgentDialog } from '@/modules/agents/ui/new-agent-dialog';
import { useAgentFilter } from '@/modules/agents/hooks/useAgentFilter';
import { AgentSearchFilter } from '@/modules/agents/ui/agent-search-filter';
import { DEFAULT_PAGE_NUMBER } from '@/constant';

export function AgentListHeader() {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [filters, setFilters] = useAgentFilter();
  const isAnyFilterModified = !!filters.search;
  const onClearFilters = () => setFilters({ search: '', page: DEFAULT_PAGE_NUMBER });
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
        <div className="flex items-center gap-x-2 p-1">
          <AgentSearchFilter />
          {isAnyFilterModified && (
            <Button variant="outline" size="sm" onClick={onClearFilters}>
              <X />
              Clear
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
