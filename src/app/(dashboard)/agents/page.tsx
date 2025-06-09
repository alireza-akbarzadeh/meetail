import React, { Suspense } from 'react';
import { AgentListHeader, AgentsView } from '@/modules/agents';
import { getQueryClient, trpc } from '@/trpc/server';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { LoadingState } from '@/components/common/loading-state';

export default async function AgentsPage() {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.agents.geMany.queryOptions());

  return (
    <>
      <AgentListHeader />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense
          fallback={
            <LoadingState title="Loading Agents" description="This may take a few seconds." />
          }
        >
          <AgentsView />
        </Suspense>
      </HydrationBoundary>
    </>
  );
}
