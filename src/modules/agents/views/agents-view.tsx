'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { useTRPC } from '@/trpc/client';

import React from 'react';
import { agentColumns } from '@/modules/agents/ui/agent-columns';
import { EmptyState } from '@/components/common/empty-state';
import { useAgentFilter } from '@/modules/agents/hooks/useAgentFilter';
import { DataPagination } from '@/components/common/data-pagination';
import { useRouter } from 'next/navigation';
import { DataTable } from '@/components/common/data-table';

export function AgentsView() {
  const router = useRouter();
  const trpc = useTRPC();
  const [filters, setFilters] = useAgentFilter();
  const { data } = useSuspenseQuery(trpc.agents.getMany.queryOptions({ ...filters }));

  return (
    <div className="flex flex-1 flex-col px-4 pb-4 md:px-8">
      <DataTable
        onRowClick={(row) => router.push(`/agents/${row.id}`)}
        columns={agentColumns}
        data={data.items}
      />
      <DataPagination
        page={filters.page}
        totalPage={data.totalPages}
        onPageChange={(page) => setFilters({ page })}
      />
      {data.items.length === 0 && (
        <EmptyState
          title="Create your first agent"
          description="Create an agent to join your meetings. Each agent will follow your instructions and can interact with participants during the meeting."
        />
      )}
    </div>
  );
}
