import './globals.css';
import '@/styles/tokens.css';
import '@/styles/themes.css';
import '@/styles/utilities.css';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { AppProviders } from './providers';

export const metadata: Metadata = {
  title: 'scaffold.fast',
  description: 'Reusable production-ready boilerplate',
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
};

export default RootLayout;
