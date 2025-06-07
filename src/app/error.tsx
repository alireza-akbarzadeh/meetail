'use client';

import { useEffect } from 'react';
import { ErrorState } from '@/components/common/error-state';

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error('Global App Error:', error);
  }, [error]);

  return (
    <ErrorState
      title="Something went wrong"
      description="We're experiencing an unexpected error. Please try again or contact support."
      actionLabel="Try Again"
      onAction={reset}
    />
  );
}
