import React from 'react';
import clsx from 'clsx';

interface BadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  size = 'md',
  children,
  className,
}) => {
  const variantStyles = {
    default: 'bg-background text-text border border-border',
    success: 'bg-success bg-opacity-10 text-success border border-success border-opacity-20',
    warning: 'bg-yellow-400 bg-opacity-10 text-yellow-600 border border-yellow-400 border-opacity-20',
    error: 'bg-red-500 bg-opacity-10 text-red-600 border border-red-500 border-opacity-20',
    info: 'bg-primary-blue bg-opacity-10 text-primary-blue border border-primary-blue border-opacity-20',
  };

  const sizeStyles = {
    sm: 'px-2 py-1 text-xs font-medium rounded',
    md: 'px-3 py-1.5 text-sm font-medium rounded-md',
    lg: 'px-4 py-2 text-base font-semibold rounded-lg',
  };

  return (
    <span className={clsx(variantStyles[variant], sizeStyles[size], className)}>
      {children}
    </span>
  );
};

export default Badge;
