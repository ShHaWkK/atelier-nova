'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { AlertCircle } from 'lucide-react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
  optional?: boolean
  leftAddon?: React.ReactNode
  rightAddon?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, hint, optional, leftAddon, rightAddon, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-label text-text-secondary font-sans"
          >
            {label}
            {optional && (
              <span className="ml-1.5 text-caption text-text-tertiary font-normal">(optionnel)</span>
            )}
          </label>
        )}
        <div className="relative flex items-center">
          {leftAddon && (
            <div className="absolute left-3.5 text-text-tertiary pointer-events-none">
              {leftAddon}
            </div>
          )}
          <input
            id={inputId}
            ref={ref}
            className={cn(
              'w-full h-11 px-4 py-2.5',
              'bg-surface border border-border-medium rounded-md',
              'font-sans text-body-m text-text-primary placeholder:text-text-tertiary',
              'transition-all duration-180 ease-standard',
              'focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/12',
              error && 'border-danger focus:border-danger focus:ring-danger/10',
              leftAddon && 'pl-10',
              rightAddon && 'pr-10',
              className
            )}
            aria-invalid={!!error}
            aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
            {...props}
          />
          {rightAddon && (
            <div className="absolute right-3.5 text-text-tertiary pointer-events-none">
              {rightAddon}
            </div>
          )}
        </div>
        {hint && !error && (
          <p id={`${inputId}-hint`} className="text-caption text-text-tertiary">
            {hint}
          </p>
        )}
        {error && (
          <p
            id={`${inputId}-error`}
            className="flex items-center gap-1.5 text-caption text-danger animate-fade-in"
          >
            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={1.5} />
            {error}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  hint?: string
  optional?: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, hint, optional, id, ...props }, ref) => {
    const textareaId = id ?? label?.toLowerCase().replace(/\s+/g, '-')

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={textareaId} className="text-label text-text-secondary font-sans">
            {label}
            {optional && (
              <span className="ml-1.5 text-caption text-text-tertiary font-normal">(optionnel)</span>
            )}
          </label>
        )}
        <textarea
          id={textareaId}
          ref={ref}
          className={cn(
            'w-full min-h-[120px] px-4 py-3',
            'bg-surface border border-border-medium rounded-md',
            'font-sans text-body-m text-text-primary placeholder:text-text-tertiary',
            'resize-y transition-all duration-180 ease-standard',
            'focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/12',
            error && 'border-danger focus:border-danger focus:ring-danger/10',
            className
          )}
          aria-invalid={!!error}
          {...props}
        />
        {hint && !error && (
          <p className="text-caption text-text-tertiary">{hint}</p>
        )}
        {error && (
          <p className="flex items-center gap-1.5 text-caption text-danger animate-fade-in">
            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={1.5} />
            {error}
          </p>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  hint?: string
  optional?: boolean
  placeholder?: string
  options: { value: string; label: string }[]
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, hint, optional, placeholder, options, id, ...props }, ref) => {
    const selectId = id ?? label?.toLowerCase().replace(/\s+/g, '-')

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={selectId} className="text-label text-text-secondary font-sans">
            {label}
            {optional && (
              <span className="ml-1.5 text-caption text-text-tertiary font-normal">(optionnel)</span>
            )}
          </label>
        )}
        <div className="relative">
          <select
            id={selectId}
            ref={ref}
            className={cn(
              'w-full h-11 pl-4 pr-10 py-2.5 appearance-none',
              'bg-surface border border-border-medium rounded-md',
              'font-sans text-body-m text-text-primary',
              'transition-all duration-180 ease-standard cursor-pointer',
              'focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/12',
              error && 'border-danger',
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-text-tertiary">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        {hint && !error && (
          <p className="text-caption text-text-tertiary">{hint}</p>
        )}
        {error && (
          <p className="flex items-center gap-1.5 text-caption text-danger animate-fade-in">
            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={1.5} />
            {error}
          </p>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'

export { Input, Textarea, Select }
