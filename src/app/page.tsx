'use client';

import NextLink from 'next/link';
import { Link } from '@fluentui/react-components';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to MBTypaFriend</h1>
      <NextLink href="/component-playground" passHref legacyBehavior>
        <Link>Component Playground</Link>
      </NextLink>
    </main>
  );
}
