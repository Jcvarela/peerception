import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'FriendPrint',
  description: 'Social footprint of friendships',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
