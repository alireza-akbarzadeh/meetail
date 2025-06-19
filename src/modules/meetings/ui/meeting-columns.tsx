'use client';
import { ColumnDef } from '@tanstack/react-table';
import GenerateAvatar from '@/components/common/generate-avatar';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns/format';
import {
  CircleCheckIcon,
  CircleXIcon,
  ClockArrowUpIcon,
  ClockFadingIcon,
  LoaderIcon,
} from 'lucide-react';
import { MeetingGetMany } from '../types';
import { cn, formatDuration } from '@/lib/utils';

const statusIconMap = {
  upcoming: ClockArrowUpIcon,
  active: LoaderIcon,
  completed: CircleCheckIcon,
  processing: LoaderIcon,
  cancelled: CircleXIcon,
};
const statusColorMap = {
  upcoming: 'bg-yellow-500/20 text-yellow-800 border-yellow-800/50',
  active: 'bg-blue-500/20 text-blue-800 border-blue-800/50',
  completed: 'bg-emerald-500/20 text-emerald-800 border-emerald-800/50',
  processing: 'bg-gray-300/20 text-gray-800 border-gray-800/50',
  cancelled: 'bg-rose-500/20 text-rose-800 border-rose-800/50',
};

export const meetingColumns: ColumnDef<MeetingGetMany['items'][number]>[] = [
  {
    accessorKey: 'name',
    header: 'Meeting Name',
    cell: ({ row }) => (
      <div className="flex items-center gap-x-2">
        <GenerateAvatar seed={row.original.agent.name} variants="bottsNeutral" className="size-7" />
        <div className="flex flex-col gap-x-2 gap-y-1">
          <span className="font-semibold capitalize">{row.original.name}</span>
          <span className="font-semibold capitalize">{row.original.agent.name}</span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const Icon = statusIconMap[row.original.status];
      return (
        <Badge
          className={cn('text-muted-foreground py-2 capitalize [&>svg]:size-4', [
            statusColorMap[row.original.status],
          ])}
          variant="outline"
        >
          <Icon className={cn(row.original.status === 'processing' && 'animate-spin')} />
          {row.original.status}
        </Badge>
      );
    },
  },
  {
    accessorKey: 'duration',
    header: 'Duration',
    cell: ({ row }) => (
      <Badge variant="outline" className="flex items-center gap-x-2 capitalize [&>svg]:size-4">
        <ClockFadingIcon className="text-blue-700" />
        {row.original.duration ? formatDuration(row.original.duration) : ''}
      </Badge>
    ),
  },
  {
    accessorKey: 'createdAt',
    header: 'created at',
    cell: ({ row }) => (
      <div>{row.original.updatedAt ? format(new Date(row.original.createdAt), 'MMM d') : ''}</div>
    ),
  },
  {
    accessorKey: 'updatedAt',
    header: 'updated at',
    cell: ({ row }) => (
      <div className="text-sm font-medium">
        {row.original.updatedAt ? format(new Date(row.original.updatedAt), 'MMM d') : ''}
      </div>
    ),
  },
  {
    accessorKey: 'startedAt',
    header: 'Started At',
    cell: ({ row }) => (
      <div className="text-sm font-medium">
        {row.original.startedAt ? format(new Date(row.original.startedAt), 'MMM d') : ''}
      </div>
    ),
  },
  {
    accessorKey: 'endedAt',
    header: 'Ended At',
    cell: ({ row }) => (
      <div className="text-sm font-medium">
        {row.original.endedAt ? format(new Date(row.original.endedAt), 'MMM d') : ''}
      </div>
    ),
  },
];
