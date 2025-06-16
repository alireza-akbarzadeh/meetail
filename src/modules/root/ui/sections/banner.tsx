import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

export function RootBanner() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <h1 id="hero-heading" className="text-4xl font-bold tracking-tight md:text-6xl">
        Talk to People. Talk to AI. In Real Time.
      </h1>
      <p className="text-muted-foreground mt-4 max-w-xl text-lg">
        EchoMeet is the next-gen meeting platform that lets you collaborate with teammates and AI in
        the same room — using your voice.
      </p>
      <div className="mt-6 flex gap-4">
        <Button asChild size="lg">
          <Link href="#demo">Try Live Demo</Link>
        </Button>
        <Button variant="outline" asChild size="lg">
          <Link href="#features">Explore Features</Link>
        </Button>
      </div>
    </section>
  );
}
