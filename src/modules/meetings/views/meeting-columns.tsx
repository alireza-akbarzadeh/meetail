'use client';

import { ColumnDef } from '@tanstack/react-table';
import GenerateAvatar from '@/components/common/generate-avatar';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns/format';
import { MeetingGetOne } from '@/modules/meetings/types';

export const meetingColumns: ColumnDef<MeetingGetOne>[] = [
  {
    accessorKey: 'name',
    header: 'Agent Name',
    cell: ({ row }) => (
      <div className="flex items-center gap-x-2">
        <GenerateAvatar seed={row.original.name} variants="bottsNeutral" className="size-6" />
        <span className="font-semibold capitalize">{row.original.name}</span>
      </div>
    ),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => <Badge variant="outline">{row.original.status}</Badge>,
  },
  {
    accessorKey: 'transcriptUrl',
    header: 'Transcript URL',
    cell: ({ row }) => <div>{row.original.transcriptUrl}</div>,
  },
  {
    accessorKey: 'summary',
    header: 'Summary',
    cell: ({ row }) => <div>{row.original.summary}</div>,
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
  {
    accessorKey: 'startedAt',
    header: 'Started At',
    cell: ({ row }) => <div>{format(new Date(row.original.startedAt), 'yyyy-MM-dd')}</div>,
  },
  {
    accessorKey: 'endedAt',
    header: 'Ended At',
    cell: ({ row }) => <div>{format(new Date(row.original.endedAt), 'yyyy-MM-dd')}</div>,
  },
];
