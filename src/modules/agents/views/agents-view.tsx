'use client';
import { useTRPC } from '@/trpc/client';
import { useQuery } from '@tanstack/react-query';

export function AgentsView() {
  const trpc = useTRPC();
  const { data, isLoading, isError } = useQuery(trpc.agents.geMany.queryOptions());

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error...</div>;
  }

  return <div>a{JSON.stringify(data, null, 2)}</div>;
}
