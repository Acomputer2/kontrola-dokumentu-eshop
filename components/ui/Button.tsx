import React from 'react';
import clsx from 'clsx';

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      fullWidth = false,
      className,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      primary: 'bg-primary-blue text-white hover:bg-opacity-90 active:scale-95',
      secondary: 'bg-background text-text border border-border hover:bg-opacity-80',
      outline: 'bg-transparent text-primary-blue border border-primary-blue hover:bg-primary-blue hover:bg-opacity-5',
      ghost: 'bg-transparent text-text hover:bg-background',
    };

    const sizeStyles = {
      sm: 'px-3 py-1.5 text-sm font-medium rounded-md',
      md: 'px-4 py-2 text-base font-semibold rounded-lg',
      lg: 'px-6 py-3 text-lg font-bold rounded-lg',
    };

    return (
      <button
        ref={ref}
        className={clsx(
          'inline-flex items-center justify-center gap-2 transition-all duration-250',
          'focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2',
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && 'w-full',
          (disabled || isLoading) && 'opacity-60 cursor-not-allowed',
          className
        )}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        {...props}
      >
        {isLoading && (
          <svg
            className="w-4 h-4 animate-spin"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
