import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import dynamic from 'next/dynamic';

import { DatadogInit } from '@/utils/analytics';

const DownloadAppBanner = dynamic(
  () => import('@/components/DownloadAppBanner'),
  {
    ssr: false,
  },
);

export const metadata: Metadata = {
  title: 'Chatter • Hume AI',
  description: 'Chatter: An interactive podcast experience',
  metadataBase: new URL(
    `https://${process.env.VERCEL_URL ?? `localhost:${process.env.PORT ?? '4444'}`}`,
  ),
  itunes: {
    appId: '6502917807',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <DownloadAppBanner />
        <div
          className={'relative grow overflow-auto [transform:translateZ(0px)]'}
        >
          <DatadogInit />
          {children}
        </div>
      </body>
    </html>
  );
}
