import type { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        md: '2rem',
        lg: '2rem',
        xl: '2rem',
        '2xl': '2rem',
      },
    },
    extend: {
      colors: {
        background: '#F8F7F4',
        'background-secondary': '#F0EDE8',
        surface: '#FFFFFF',
        'surface-elevated': '#FDFCFB',

        primary: {
          DEFAULT: '#1A1A2E',
          hover: '#2D2D4E',
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#6B5CE7',
          hover: '#5A4BD1',
          soft: '#EDE9FF',
          foreground: '#FFFFFF',
        },

        text: {
          primary: '#0F0F1A',
          secondary: '#4A4A6A',
          tertiary: '#8888A8',
        },

        border: {
          DEFAULT: '#E8E5F0',
          medium: '#D4CEEE',
        },

        success: {
          DEFAULT: '#10B981',
          soft: '#D1FAE5',
          text: '#065F46',
        },
        warning: {
          DEFAULT: '#F59E0B',
          soft: '#FEF3C7',
          text: '#92400E',
        },
        danger: {
          DEFAULT: '#EF4444',
          soft: '#FEE2E2',
          text: '#991B1B',
        },
        info: {
          DEFAULT: '#3B82F6',
          soft: '#DBEAFE',
          text: '#1D4ED8',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-dm-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-jetbrains)', 'Consolas', 'monospace'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '800' }],
        'display-l': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '700' }],
        'display-m': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
        'heading-xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '700' }],
        'heading-l': ['1.875rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],
        'heading-m': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.008em', fontWeight: '600' }],
        'heading-s': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-l': ['1.125rem', { lineHeight: '1.7', fontWeight: '400' }],
        'body-m': ['1rem', { lineHeight: '1.65', fontWeight: '400' }],
        'body-s': ['0.875rem', { lineHeight: '1.6', fontWeight: '400' }],
        'label': ['0.8125rem', { lineHeight: '1.4', fontWeight: '600' }],
        'caption': ['0.75rem', { lineHeight: '1.4', fontWeight: '500', letterSpacing: '0.01em' }],
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '16px',
        xl: '20px',
        '2xl': '24px',
      },
      boxShadow: {
        xs: '0 1px 2px rgba(15,15,26,0.04)',
        sm: '0 1px 3px rgba(15,15,26,0.04), 0 4px 8px rgba(15,15,26,0.06)',
        md: '0 4px 6px rgba(15,15,26,0.04), 0 10px 20px rgba(15,15,26,0.08)',
        lg: '0 8px 16px rgba(15,15,26,0.06), 0 24px 48px rgba(15,15,26,0.10)',
        xl: '0 20px 40px rgba(15,15,26,0.10), 0 40px 80px rgba(15,15,26,0.08)',
        accent: '0 4px 14px rgba(107,92,231,0.25)',
        'accent-lg': '0 8px 24px rgba(107,92,231,0.30)',
        inset: 'inset 0 1px 2px rgba(15,15,26,0.06)',
      },
      backgroundImage: {
        'gradient-signature': 'linear-gradient(135deg, #6B5CE7 0%, #4F46E5 50%, #7C3AED 100%)',
        'gradient-subtle': 'linear-gradient(180deg, #F8F7F4 0%, #F0EDE8 100%)',
        'gradient-hero': 'linear-gradient(135deg, #1A1A2E 0%, #2D2D4E 60%, #1A1A3E 100%)',
        'gradient-card': 'linear-gradient(135deg, #FFFFFF 0%, #FDFCFB 100%)',
        'gradient-text': 'linear-gradient(135deg, #6B5CE7 0%, #4F46E5 50%, #7C3AED 100%)',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          from: { opacity: '0', transform: 'translateX(20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.96)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          from: { backgroundPosition: '-200% 0' },
          to: { backgroundPosition: '200% 0' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        'count-up': {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.4s cubic-bezier(0.4, 0, 0.2, 1) both',
        'fade-in-up': 'fade-in-up 0.5s cubic-bezier(0.4, 0, 0.2, 1) both',
        'slide-in-right': 'slide-in-right 0.3s cubic-bezier(0.4, 0, 0.2, 1) both',
        'scale-in': 'scale-in 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) both',
        shimmer: 'shimmer 2s linear infinite',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        'count-up': 'count-up 0.4s cubic-bezier(0.4, 0, 0.2, 1) both',
      },
      transitionTimingFunction: {
        standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
        enter: 'cubic-bezier(0, 0, 0.2, 1)',
        exit: 'cubic-bezier(0.4, 0, 1, 1)',
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [animate],
}

export default config
