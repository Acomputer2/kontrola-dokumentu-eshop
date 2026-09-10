'use client';

import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

interface UrlInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  error?: string;
  isLoading?: boolean;
  disabled?: boolean;
  placeholder?: string;
}

const UrlInput: React.FC<UrlInputProps> = ({
  value,
  onChange,
  onSubmit,
  error,
  isLoading = false,
  disabled = false,
  placeholder = 'https://www.vas-eshop.cz',
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit(e as unknown as React.FormEvent);
    }
  };

  return (
    <div className="space-y-3">
      <label htmlFor="eshop-url" className="block text-caption font-semibold text-text">
        URL vašeho e-shopu
      </label>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          id="eshop-url"
          type="url"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={disabled || isLoading}
          className={clsx(
            'flex-1 px-5 py-3 rounded-lg border transition-all duration-250',
            'bg-white text-text placeholder-text-muted',
            'focus:outline-none focus:ring-2 focus:ring-offset-0',
            error
              ? 'border-red-500 focus:ring-red-500 focus:ring-opacity-30'
              : 'border-border focus:ring-primary-blue focus:ring-opacity-30',
            disabled && 'bg-background cursor-not-allowed opacity-60',
            isFocused && !error && 'border-primary-blue shadow-md'
          )}
          aria-describedby={error ? 'url-error' : undefined}
          aria-invalid={!!error}
        />
        <button
          type="submit"
          onClick={onSubmit}
          disabled={disabled || isLoading}
          className={clsx(
            'px-6 py-3 rounded-lg font-semibold transition-all duration-250',
            'text-white bg-primary-blue hover:bg-opacity-90',
            'disabled:opacity-70 disabled:cursor-not-allowed',
            'active:scale-95',
            isLoading && 'cursor-wait',
            'whitespace-nowrap'
          )}
          aria-busy={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
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
              Kontroluji…
            </span>
          ) : (
            'Zkontrolovat'
          )}
        </button>
      </div>
      {error && (
        <p
          id="url-error"
          className="text-caption text-red-600 flex items-center gap-2 animate-fade-up"
          role="alert"
        >
          <svg
            className="w-4 h-4 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
};

export default UrlInput;
