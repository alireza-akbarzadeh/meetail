'use client';

import { ColumnDef } from '@tanstack/react-table';
import { AgentGetOne } from '@/modules/agents/types';
import GenerateAvatar from '@/components/common/generate-avatar';
import { CornerDownRightIcon, VideoIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns/format';

export const agentColumns: ColumnDef<AgentGetOne>[] = [
  {
    accessorKey: 'name',
    header: 'Agent Name',
    cell: ({ row }) => (
      <div className="flex flex-col gap-y-1">
        <div className="flex items-center gap-x-2">
          <GenerateAvatar seed={row.original.name} variants="bottsNeutral" className="size-6" />
          <span className="font-semibold capitalize">{row.original.name}</span>
        </div>
        <div className="flex items-center gap-x-2">
          <CornerDownRightIcon className="text-muted-foreground size-3" />
          <span className="text-muted-foreground max-w-[200px] truncate text-sm capitalize">
            {row.original.instructions}
          </span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: 'meetingCount',
    header: 'Meetings',
    cell: ({ row }) => (
      <Badge variant="outline" className="flex items-center gap-x-2 [&>svg]:size-4">
        <VideoIcon className="text=blue-700" />
        {row.original.meetingCount}
        {row.original.meetingCount > 1 ? ' meetings' : ' meeting'}
      </Badge>
    ),
  },
  {
    accessorKey: 'createdAt',
    header: 'created at',
    cell: ({ row }) => <div>{format(new Date(row.original.createdAt), 'yyyy-MM-dd')}</div>,
  },
  {
    accessorKey: 'updatedAt',
    header: 'updated at',
    cell: ({ row }) => <div>{format(new Date(row.original.updatedAt), 'yyyy-MM-dd')}</div>,
  },
];
