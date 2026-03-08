import type { ButtonHTMLAttributes } from 'react';

import { cx } from '@/utils/strings';

type ButtonVariant = 'primary' | 'ghost';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variantClassMap: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-primary-foreground hover:opacity-90',
  ghost: 'bg-transparent text-foreground hover:bg-muted',
};

export const Button = ({
  className,
  variant = 'primary',
  type = 'button',
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={cx(
        'border-border inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition-colors',
        variantClassMap[variant],
        className,
      )}
      {...props}
    />
  );
};
