'use client';
import React from 'react';
import { useTRPC } from '@/trpc/client';
import { useSuspenseQuery } from '@tanstack/react-query';
import { meetingColumns } from '@/modules/meetings/ui/meeting-columns';
import { DataPagination } from '@/components/common/data-pagination';
import { EmptyState } from '@/components/common/empty-state';
import { useMeetingFilter } from '@/modules/meetings/hooks/useMeetingFilter';
import { DataTable } from '@/components/common/data-table';

export function MeetingsView() {
  const trpc = useTRPC();
  const [filters, setFilters] = useMeetingFilter();
  const { data } = useSuspenseQuery(trpc.meetings.getMany.queryOptions({ ...filters }));
  return (
    <div className="flex flex-1 flex-col px-4 pb-4 md:px-8">
      <DataTable columns={meetingColumns} data={data.items} />
      <DataPagination
        page={filters.page}
        totalPage={data.totalPages}
        onPageChange={(page) => setFilters({ page })}
      />
      {data.items.length === 0 && (
        <EmptyState title="Create your first meeting" description="Create an instant meeting." />
      )}
    </div>
  );
}
