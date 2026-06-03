'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2',
    'font-display font-semibold text-[15px] leading-none',
    'rounded-md border border-transparent',
    'transition-all duration-200 ease-standard',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-45',
    'select-none whitespace-nowrap',
    'active:scale-[0.98]',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-accent text-white',
          'shadow-accent',
          'hover:bg-accent-hover hover:-translate-y-px hover:shadow-accent-lg',
        ],
        secondary: [
          'bg-transparent text-text-secondary border-border',
          'hover:border-accent hover:text-accent hover:bg-accent-soft',
        ],
        ghost: [
          'bg-transparent text-accent',
          'hover:bg-accent-soft',
        ],
        dark: [
          'bg-primary text-white',
          'hover:bg-primary-hover hover:-translate-y-px',
        ],
        danger: [
          'bg-danger text-white',
          'hover:bg-red-600 hover:-translate-y-px',
        ],
        'outline-white': [
          'bg-transparent text-white border-white/30',
          'hover:bg-white/10 hover:border-white/60',
        ],
        'ghost-dark': [
          'bg-transparent text-gray-400',
          'hover:bg-white/8 hover:text-white',
        ],
        link: [
          'text-accent underline-offset-4 hover:underline p-0 h-auto',
        ],
      },
      size: {
        sm: 'h-8 px-3 text-[13px] rounded',
        md: 'h-10 px-5',
        lg: 'h-12 px-7 text-base',
        xl: 'h-14 px-8 text-base',
        icon: 'h-10 w-10 p-0',
        'icon-sm': 'h-8 w-8 p-0',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      leftIcon,
      rightIcon,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const buttonClass = cn(buttonVariants({ variant, size }), className)

    const iconLeft = loading ? (
      <Loader2 className="h-4 w-4 animate-spin flex-shrink-0" strokeWidth={1.5} />
    ) : leftIcon ? (
      <span className="flex-shrink-0">{leftIcon}</span>
    ) : null

    const iconRight = !loading && rightIcon ? (
      <span className="flex-shrink-0">{rightIcon}</span>
    ) : null

    // When asChild, Slot requires exactly ONE React element child.
    // Inject icons inside the child element by cloning it.
    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{ className?: string; children?: React.ReactNode }>
      return (
        <Slot
          ref={ref}
          className={buttonClass}
          aria-disabled={disabled || loading}
          {...props}
        >
          {React.cloneElement(child, {
            children: (
              <>
                {iconLeft}
                {child.props.children}
                {iconRight}
              </>
            ),
          })}
        </Slot>
      )
    }

    return (
      <button
        ref={ref}
        className={buttonClass}
        disabled={disabled || loading}
        {...props}
      >
        {iconLeft}
        {children}
        {iconRight}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }
