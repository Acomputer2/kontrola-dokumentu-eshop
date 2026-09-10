import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#071A3A',
        'primary-blue': '#155EEF',
        accent: '#4F8CFF',
        background: '#F7F9FC',
        white: '#FFFFFF',
        text: '#0F172A',
        'text-muted': '#64748B',
        border: '#E2E8F0',
        success: '#16A34A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['76px', { lineHeight: '88px', fontWeight: '700' }],
        'display-lg': ['64px', { lineHeight: '76px', fontWeight: '700' }],
        'display-md': ['56px', { lineHeight: '66px', fontWeight: '700' }],
        'h1': ['64px', { lineHeight: '76px', fontWeight: '700' }],
        'h2': ['48px', { lineHeight: '58px', fontWeight: '700' }],
        'h3': ['32px', { lineHeight: '40px', fontWeight: '700' }],
        'h4': ['28px', { lineHeight: '36px', fontWeight: '700' }],
        'h5': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'body': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-sm': ['17px', { lineHeight: '26px', fontWeight: '400' }],
        'caption': ['15px', { lineHeight: '24px', fontWeight: '400' }],
        'caption-sm': ['14px', { lineHeight: '21px', fontWeight: '400' }],
      },
      spacing: {
        'container': '1280px',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
      },
      screens: {
        'sm': '320px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.4s ease-out',
      },
      keyframes: {
        fadeUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          'from': {
            opacity: '0',
          },
          'to': {
            opacity: '1',
          },
        },
      },
      transitionDuration: {
        '200': '200ms',
        '250': '250ms',
      },
    },
  },
  plugins: [],
};

export default config;
