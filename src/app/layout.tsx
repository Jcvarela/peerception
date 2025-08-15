'use client';

import './globals.css';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { FluentProvider, webLightTheme, webDarkTheme } from '@fluentui/react-components';
import { lightTheme, darkTheme } from '@/theme/theme';

export const metadata = {
  title: 'FriendPrint',
  description: 'Social footprint of friendships',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    setMode(mq.matches ? 'dark' : 'light');
    const handler = (e: MediaQueryListEvent) => setMode(e.matches ? 'dark' : 'light');
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const muiTheme = mode === 'dark' ? darkTheme : lightTheme;
  const fluentTheme = mode === 'dark' ? webDarkTheme : webLightTheme;

  return (
    <html lang="en">
      <body>
        <FluentProvider theme={fluentTheme}>
          <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
        </FluentProvider>
      </body>
    </html>
  );
}
