import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const cardVariants = cva(
  'rounded-lg border bg-card text-card-foreground shadow-sm',
  {
    variants: {
      state: {
        default: '',
        loading: 'opacity-70 pointer-events-none',
        error: 'border-red-500 shadow-red-100',
        hover: 'shadow-md border-primary/50 cursor-pointer',
        selected: 'ring-2 ring-primary border-primary',
      },
    },
    defaultVariants: {
      state: 'default',
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  loading?: boolean;
  error?: string;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    { className, state, header, footer, children, loading, error, ...props },
    ref
  ) => {
    // Determine state based on props
    const currentState = loading
      ? 'loading'
      : error
        ? 'error'
        : state;

    return (
      <div
        ref={ref}
        className={cn(cardVariants({ state: currentState }), className)}
        {...props}
      >
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/50 rounded-lg">
            <div className="animate-spin h-6 w-6 border-2 border-primary border-t-transparent rounded-full" />
          </div>
        )}
        {header && (
          <div className="flex flex-col space-y-1.5 p-6">
            {header}
          </div>
        )}
        <div className="p-6 pt-0">{children}</div>
        {footer && <div className="flex items-center p-6 pt-0">{footer}</div>}
        {error && (
          <div className="px-6 pb-4">
            <p className="text-sm text-red-500">{error}</p>
          </div>
        )}
      </div>
    );
  }
);
Card.displayName = 'Card';

export { Card, cardVariants };
