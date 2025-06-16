import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import React from 'react';

export function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="bg-muted px-6 py-20">
      <h2 id="pricing-heading" className="mb-12 text-center text-3xl font-semibold">
        Simple & Transparent Pricing
      </h2>
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
        {[
          {
            plan: 'Free',
            price: '$0',
            features: ['1 AI assistant', '60 min/month', 'Live transcription'],
          },
          {
            plan: 'Pro',
            price: '$19/mo',
            features: ['Unlimited AI', 'Advanced transcripts', 'Priority support'],
          },
          {
            plan: 'Enterprise',
            price: 'Custom',
            features: ['Team access', 'Dedicated AI', 'Admin tools'],
          },
        ].map(({ plan, price, features }) => (
          <Card key={plan}>
            <CardContent className="space-y-4 p-6 text-center">
              <h3 className="text-xl font-medium">{plan}</h3>
              <p className="text-3xl font-bold">{price}</p>
              <ul className="text-muted-foreground space-y-1 text-sm">
                {features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <Button className="mt-4 w-full">Get Started</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
