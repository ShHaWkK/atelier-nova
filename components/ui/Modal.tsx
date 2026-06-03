'use client'

import * as React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title?: string
  description?: string
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  footer?: React.ReactNode
}

const sizeClasses = {
  sm: 'max-w-[480px]',
  md: 'max-w-[600px]',
  lg: 'max-w-[800px]',
}

function Modal({ open, onOpenChange, title, description, children, size = 'md', footer }: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            'fixed inset-0 z-50 bg-primary/50 backdrop-blur-sm',
            'data-[state=open]:animate-in data-[state=closed]:animate-out',
            'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'
          )}
        />
        <Dialog.Content
          className={cn(
            'fixed left-1/2 top-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2',
            'bg-surface rounded-xl shadow-xl',
            'data-[state=open]:animate-in data-[state=closed]:animate-out',
            'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
            'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
            'data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]',
            'data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
            'duration-200',
            sizeClasses[size],
            'mx-4'
          )}
        >
          {(title || description) && (
            <div className="flex items-start justify-between px-7 pt-6 pb-0 border-b border-border mb-0">
              <div className="pb-5">
                {title && (
                  <Dialog.Title className="text-heading-s font-display text-text-primary">
                    {title}
                  </Dialog.Title>
                )}
                {description && (
                  <Dialog.Description className="text-body-s text-text-secondary mt-1">
                    {description}
                  </Dialog.Description>
                )}
              </div>
              <Dialog.Close
                className={cn(
                  'rounded-lg p-1.5 text-text-tertiary transition-colors',
                  'hover:bg-background-secondary hover:text-text-primary',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
                  'ml-4 flex-shrink-0'
                )}
              >
                <X className="w-5 h-5" strokeWidth={1.5} />
                <span className="sr-only">Fermer</span>
              </Dialog.Close>
            </div>
          )}

          <div className={cn('px-7 py-6', !title && 'relative')}>
            {!title && (
              <Dialog.Close
                className={cn(
                  'absolute right-4 top-4 rounded-lg p-1.5 text-text-tertiary transition-colors',
                  'hover:bg-background-secondary hover:text-text-primary z-10',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent'
                )}
              >
                <X className="w-5 h-5" strokeWidth={1.5} />
              </Dialog.Close>
            )}
            {children}
          </div>

          {footer && (
            <div className="px-7 pb-6 pt-2 border-t border-border flex items-center justify-end gap-3">
              {footer}
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export { Modal }
