import { Search } from 'lucide-react';

import React from 'react';
import { Input } from '@/components/ui/input';
import { useAgentFilter } from '@/modules/agents/hooks/useAgentFilter';

export function AgentSearchFilter() {
  const [filters, setFilters] = useAgentFilter();
  return (
    <div className="relative">
      <Input
        placeholder="Filter by name"
        className="h-9 w-[200px] bg-white pl-8"
        value={filters.search}
        onChange={(e) => setFilters({ search: e.target.value })}
      />
      <Search className="text-muted-foreground absolute top-1/2 left-2 size-4 -translate-y-1/2" />
    </div>
  );
}
