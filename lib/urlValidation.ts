'use client';

import React from 'react';

interface UrlValidationResult {
  isValid: boolean;
  error?: string;
}

export const validateUrl = (url: string): UrlValidationResult => {
  const trimmedUrl = url.trim();

  if (!trimmedUrl) {
    return {
      isValid: false,
      error: 'Zadejte prosím URL vašeho e-shopu',
    };
  }

  try {
    const urlWithProtocol = trimmedUrl.startsWith('http')
      ? trimmedUrl
      : `https://${trimmedUrl}`;
    new URL(urlWithProtocol);
    return { isValid: true };
  } catch {
    return {
      isValid: false,
      error: 'Zadejte prosím platnou URL adresu (např. https://www.vas-eshop.cz)',
    };
  }
};

export const normalizeUrl = (url: string): string => {
  const trimmed = url.trim();
  return trimmed.startsWith('http') ? trimmed : `https://${trimmed}`;
};

export const extractDomain = (url: string): string => {
  try {
    const normalizedUrl = normalizeUrl(url);
    const urlObj = new URL(normalizedUrl);
    return urlObj.hostname;
  } catch {
    return url;
  }
};
