import { Card, CardContent } from '@/components/ui/card';
import { EditIcon, MicIcon, TextIcon } from 'lucide-react';
import React from 'react';

export function Features() {
  return (
    <section id="features" aria-labelledby="features-heading" className="bg-muted px-6 py-20">
      <h2 id="features-heading" className="mb-12 text-center text-3xl font-semibold">
        What Makes EchoMeet Special?
      </h2>
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
        {[
          {
            title: 'AI Voice Assistant',
            icon: <MicIcon className="text-primary h-8 w-8" />,
            desc: 'Ask the AI to summarize, search, or take notes in real time.',
          },
          {
            title: 'Smart Transcripts',
            icon: <TextIcon className="text-primary h-8 w-8" />,
            desc: 'Live, accurate, and searchable transcripts for every call.',
          },
          {
            title: 'Collaborative Notes',
            icon: <EditIcon className="text-primary h-8 w-8" />,
            desc: 'AI-generated notes, editable and sharable after each session.',
          },
        ].map(({ title, icon, desc }) => (
          <Card key={title}>
            <CardContent className="space-y-4 p-6 text-center">
              {icon}
              <h3 className="text-xl font-medium">{title}</h3>
              <p className="text-muted-foreground text-sm">{desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
