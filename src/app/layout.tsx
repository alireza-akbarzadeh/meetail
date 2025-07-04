import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';
import { TRPCReactProvider } from '@/trpc/client';
import { Toaster } from '@/components/ui/sonner';
import { NuqsAdapter } from 'nuqs/adapters/next';
import { ThemeProvider } from '@/providers/theme-providers';

const inter = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Meet.Ai',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NuqsAdapter>
      <TRPCReactProvider>
        <html
          lang='en'
          suppressHydrationWarning
        >
          <body className={`${inter.variable} antialiased`}>
            <ThemeProvider
              attribute='class'
              defaultTheme='system'
              enableSystem
              disableTransitionOnChange
            >
              <Toaster />
              {children}
            </ThemeProvider>
          </body>
        </html>
      </TRPCReactProvider>
    </NuqsAdapter>
  );
}
