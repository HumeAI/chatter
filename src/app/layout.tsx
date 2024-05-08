import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

import { fellix } from '@/assets/Fellix';
import { fraktionMono } from '@/assets/FraktionMono';
import { cn } from '@/utils';

export const metadata: Metadata = {
  title: 'Chatter',
  description: 'Chatter Hackathon',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'overflow-hidden',
          fellix.className,
          fellix.variable,
          fraktionMono.variable,
        )}
      >
        <main className="flex min-h-svh w-screen flex-col">{children}</main>
      </body>
    </html>
  );
}
