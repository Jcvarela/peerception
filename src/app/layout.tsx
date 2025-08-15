import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import ClientProviders from './ClientProviders';

export const metadata: Metadata = {
  title: 'MBTypaFriend',
  description: 'Social footprint of friendships',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
