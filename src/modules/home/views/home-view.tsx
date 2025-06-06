'use client';
import { useTRPC } from '@/trpc/client';
import { useQuery } from '@tanstack/react-query';

export function HomeView() {
  const trpc = useTRPC();
  const { data } = useQuery(trpc.hello.queryOptions({ text: 'hello form the alireza' }));

  return <div className="mx-auto flex max-w-lg flex-col gap-4">{data?.greeting}</div>;
}
