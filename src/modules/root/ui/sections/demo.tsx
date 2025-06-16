import React from 'react';

export function Demo() {
  return (
    <section id="demo" aria-labelledby="demo-heading" className="px-6 py-20 text-center">
      <h2 id="demo-heading" className="mb-6 text-3xl font-semibold">
        See It In Action
      </h2>
      <p className="text-muted-foreground mx-auto mb-6 max-w-xl">
        Try a simulated meeting to see how the AI assistant collaborates with you in real-time.
      </p>
      <div className="mx-auto max-w-3xl rounded-xl border p-6">
        {/* Replace this with real embedded demo later */}
        <p className="text-muted-foreground italic">[ AI Demo Placeholder ]</p>
      </div>
    </section>
  );
}
