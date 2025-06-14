'use client';

import { useEffect } from 'react';
import { ErrorState } from '@/components/common/error-state';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error('Agent Page Error:', error);
    // Optionally send to logging service here
  }, [error]);

  return (
    <ErrorState
      title="Error Loading Agents"
      description="Something went wrong while loading the agents. Please try again."
      actionLabel="Retry"
      onAction={reset}
    />
  );
}
