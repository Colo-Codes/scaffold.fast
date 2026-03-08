import type { ReactNode } from 'react';

type AppLayoutProps = {
  children: ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  return <section className="bg-background min-h-screen">{children}</section>;
};

export default AppLayout;
