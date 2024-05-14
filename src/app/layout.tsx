import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

import { fellix } from '@/assets/Fellix';
import { fraktionMono } from '@/assets/FraktionMono';
import { cn } from '@/utils';
import { DatadogInit } from '@/utils/analytics';

export const metadata: Metadata = {
  title: 'Chatter • Hume AI',
  description: 'Chatter: An interactive podcast experience',
  metadataBase: new URL(
    `https://${process.env.VERCEL_URL ?? `localhost:${process.env.PORT ?? '4444'}`}`,
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(fellix.className, fellix.variable, fraktionMono.variable)}
      >
        <main className="flex min-h-svh w-screen flex-col overflow-hidden">
          <DatadogInit />
          {children}
        </main>
      </body>
    </html>
  );
}
