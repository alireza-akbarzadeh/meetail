import React, { Suspense } from 'react';
import { getQueryClient, trpc } from '@/trpc/server';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { SingleAgentView } from '@/modules/agents';
import { LoadingState } from '@/components/common/loading-state';

interface SingleAgentPageProps {
  params: Promise<{ agentId: string }>;
}

export default async function SingleAgentPage(props: SingleAgentPageProps) {
  const { agentId } = await props.params;

  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.agents.getOne.queryOptions({ id: agentId }));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense
        fallback={
          <LoadingState title="Loading agent page" description="this may take a few seconds." />
        }
      >
        <SingleAgentView agentId={agentId} />
      </Suspense>
    </HydrationBoundary>
  );
}
