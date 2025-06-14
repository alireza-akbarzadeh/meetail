'use client';
import React, { useState } from 'react';
import { useTRPC } from '@/trpc/client';
import { useMutation, useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { SingleAgentHeader } from '@/modules/agents/ui/single-agent-header';
import GenerateAvatar from '@/components/common/generate-avatar';
import { Badge } from '@/components/ui/badge';
import { VideoIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useConfirm } from '@/hooks/useConfirm';
import { UpdateAgentDialog } from '@/modules/agents/ui/update-agent-dialog';

interface SingleAgentViewProps {
  agentId: string;
}

export function SingleAgentView(props: SingleAgentViewProps) {
  const { agentId } = props;
  const [updateAgentDialogOpen, setUpdateAgentDialogOpen] = useState<boolean>(false);
  const router = useRouter();
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.agents.getOne.queryOptions({ id: agentId }));
  const queryClient = useQueryClient();

  const onRemoveAgent = useMutation(
    trpc.agents.remove.mutationOptions({
      onSuccess: async () => {
        await queryClient.invalidateQueries(trpc.agents.getMany.queryOptions({}));
        router.push('/agents');
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }),
  );
  const [RemoveConfirmation, confirmRemove] = useConfirm({
    title: 'Are you sure?',
    description: `The following action will remove ${data.meetingCount}  associated meetings`,
  });

  const handleRemoveAgentMethod = async () => {
    const ok = await confirmRemove();
    if (!ok) return;
    onRemoveAgent.mutate({ id: agentId });
  };

  return (
    <>
      <RemoveConfirmation />
      <UpdateAgentDialog
        open={updateAgentDialogOpen}
        onOpenChange={setUpdateAgentDialogOpen}
        initialValues={data}
      />
      <div className="flex flex-1 flex-col gap-y-4 px-4 py-4 md:px-8">
        <SingleAgentHeader
          agentId={agentId}
          agentName={data.name}
          onEdit={() => setUpdateAgentDialogOpen(true)}
          onRemove={handleRemoveAgentMethod}
        />
        <div className="rounded-lg border bg-white">
          <div className="col-span-6 flex flex-col gap-y-5 px-4 py-5">
            <div className="flex items-center gap-x-2">
              <GenerateAvatar seed={data.name} className="size-10" variants="bottsNeutral" />
              <h2 className="text-2xl font-medium">{data.name}</h2>
            </div>
            <Badge className="flex items-center gap-x-2 [&>svg]:size-4" variant="outline">
              <VideoIcon className="size-4 text-blue-700" />
              {data.meetingCount} {data.meetingCount === 1 ? 'meeting' : 'meetings'}
            </Badge>
            <div className="flex flex-col gap-y-4">
              <p className="text-lg font-medium">Instructions:</p>
              <p className="text-neutral-800">{data.instructions}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
