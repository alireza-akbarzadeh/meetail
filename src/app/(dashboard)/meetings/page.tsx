import React, { Suspense } from 'react';
import { MeetingsView } from '@/modules/meetings';
import { getQueryClient, trpc } from '@/trpc/server';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { LoadingState } from '@/components/common/loading-state';
import { MeetingListHeader } from '@/modules/meetings/ui/meeting-list-header';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function MeetingsPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    redirect('/sign-in');
  }

  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.meetings.getMany.queryOptions({}));

  return (
    <>
      <MeetingListHeader />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense
          fallback={
            <LoadingState title="Loading meeting page" description="This may take a few seconds." />
          }
        >
          <MeetingsView />
        </Suspense>
      </HydrationBoundary>
    </>
  );
}
