import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import './globals.css';

import { fraktionMono } from '@/assets/FraktionMono';
import { cn } from '@/utils';
import { fellix } from '@/assets/Fellix';

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
        className={cn(fellix.className, fellix.variable, fraktionMono.variable)}
      >
        <main className="flex min-h-screen flex-col gap-8">{children}</main>
      </body>
    </html>
  );
}
