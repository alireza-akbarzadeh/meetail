// app/not-found.tsx
'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Ghost } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="bg-background flex min-h-screen flex-col items-center justify-center px-4 py-10 text-center">
      <div className="flex flex-col items-center gap-y-6">
        <div className="bg-muted rounded-full p-4">
          <Ghost className="text-primary h-10 w-10" />
        </div>

        <h1 className="text-foreground text-4xl font-bold tracking-tight sm:text-5xl">
          404 – Page Not Found
        </h1>
        <p className="text-muted-foreground max-w-md text-sm sm:text-base">
          Oops! The page you’re looking for doesn’t exist. It might have been moved or deleted.
        </p>

        <Link href="/">
          <Button variant="default" className="mt-4 text-sm">
            ← Back to Home
          </Button>
        </Link>
      </div>
    </main>
  );
}
