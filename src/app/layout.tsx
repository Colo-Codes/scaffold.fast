import './globals.css';
import '@/styles/tokens.css';
import '@/styles/themes.css';
import '@/styles/utilities.css';

import type { Metadata } from 'next';
import { Geist } from "next/font/google";
import type { ReactNode } from 'react';

import { cn } from "@/lib/utils";

import { AppProviders } from './providers';

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: 'scaffold.fast',
  description: 'Reusable production-ready boilerplate',
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <body className="bg-background text-foreground antialiased">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
};

export default RootLayout;
