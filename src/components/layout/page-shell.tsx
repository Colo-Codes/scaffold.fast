import type { ReactNode } from 'react';

type PageShellProps = {
  children: ReactNode;
};

export const PageShell = ({ children }: PageShellProps) => {
  return <div className="container-page">{children}</div>;
};
