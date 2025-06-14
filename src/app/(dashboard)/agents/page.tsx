import React, { Suspense } from 'react';
import { AgentListHeader, AgentsView } from '@/modules/agents';
import { getQueryClient, trpc } from '@/trpc/server';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { LoadingState } from '@/components/common/loading-state';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { SearchParams } from 'nuqs';
import { loadSearchParams } from '@/modules/agents/params';

interface AgentsPageProps {
  searchParams: Promise<SearchParams>;
}

export default async function AgentsPage(props: AgentsPageProps) {
  const { searchParams } = props;
  const params = await loadSearchParams(searchParams);
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    redirect('/sign-in');
  }

  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.agents.getMany.queryOptions({ ...params }));

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
