import React, { Suspense } from 'react';
import { MeetingsView } from '@/modules/meetings';
import { getQueryClient, trpc } from '@/trpc/server';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { LoadingState } from '@/components/common/loading-state';

export default function MeetingsPage() {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.meetings.getMany.queryOptions({}));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense
        fallback={
          <LoadingState title="Loading meeting page" description="This may take a few seconds." />
        }
      >
        <MeetingsView />
      </Suspense>
    </HydrationBoundary>
  );
}
