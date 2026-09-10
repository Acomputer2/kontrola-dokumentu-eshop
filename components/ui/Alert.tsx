import React from 'react';
import clsx from 'clsx';

interface AlertProps {
  variant: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  message: string;
  icon?: React.ReactNode;
  onClose?: () => void;
  className?: string;
}

const Alert: React.FC<AlertProps> = ({
  variant,
  title,
  message,
  icon,
  onClose,
  className,
}) => {
  const variantStyles = {
    success: 'bg-success bg-opacity-10 border border-success border-opacity-30 text-success',
    error: 'bg-red-500 bg-opacity-10 border border-red-500 border-opacity-30 text-red-600',
    warning: 'bg-yellow-400 bg-opacity-10 border border-yellow-400 border-opacity-30 text-yellow-600',
    info: 'bg-primary-blue bg-opacity-10 border border-primary-blue border-opacity-30 text-primary-blue',
  };

  const iconContent =
    icon ||
    (variant === 'success' && (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
    ));

  return (
    <div
      className={clsx(
        'rounded-lg p-4 flex gap-3 animate-fade-up',
        variantStyles[variant],
        className
      )}
      role="alert"
    >
      {iconContent && <div className="flex-shrink-0 mt-0.5">{iconContent}</div>}
      <div className="flex-1">
        {title && <p className="font-semibold mb-1">{title}</p>}
        <p className="text-sm leading-relaxed">{message}</p>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="flex-shrink-0 text-current opacity-70 hover:opacity-100 transition-opacity"
          aria-label="Zavřít"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Alert;
