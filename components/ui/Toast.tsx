'use client'

import * as React from 'react'
import * as ToastPrimitive from '@radix-ui/react-toast'
import { CheckCircle2, AlertCircle, Info, X, AlertTriangle } from 'lucide-react'
import { cn } from '@/lib/utils'

const ToastProvider = ToastPrimitive.Provider
const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Viewport
    ref={ref}
    className={cn(
      'fixed bottom-0 right-0 z-[100] flex max-h-screen w-full flex-col-reverse gap-2 p-4 sm:max-w-[380px]',
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = 'ToastViewport'

type ToastVariant = 'success' | 'error' | 'warning' | 'info'

const toastConfig = {
  success: {
    icon: CheckCircle2,
    className: 'border-success/20 bg-success-soft',
    iconClass: 'text-success',
    titleClass: 'text-success-text',
  },
  error: {
    icon: AlertCircle,
    className: 'border-danger/20 bg-danger-soft',
    iconClass: 'text-danger',
    titleClass: 'text-danger-text',
  },
  warning: {
    icon: AlertTriangle,
    className: 'border-warning/20 bg-warning-soft',
    iconClass: 'text-warning',
    titleClass: 'text-warning-text',
  },
  info: {
    icon: Info,
    className: 'border-info/20 bg-info-soft',
    iconClass: 'text-info',
    titleClass: 'text-info-text',
  },
}

interface ToastProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  variant?: ToastVariant
  title: string
  description?: string
  duration?: number
}

function Toast({
  open,
  onOpenChange,
  variant = 'info',
  title,
  description,
  duration = 4000,
}: ToastProps) {
  const config = toastConfig[variant]
  const Icon = config.icon

  return (
    <ToastPrimitive.Root
      open={open}
      onOpenChange={onOpenChange}
      duration={duration}
      className={cn(
        'group pointer-events-auto relative flex w-full items-start gap-3 rounded-lg border p-4',
        'shadow-md transition-all',
        'data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)]',
        'data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[swipe=end]:animate-out data-[state=closed]:fade-out-80',
        'data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-bottom-full',
        config.className
      )}
    >
      <Icon className={cn('w-5 h-5 flex-shrink-0 mt-0.5', config.iconClass)} strokeWidth={1.5} />
      <div className="flex-1 min-w-0">
        <ToastPrimitive.Title
          className={cn('text-[13px] font-semibold font-display', config.titleClass)}
        >
          {title}
        </ToastPrimitive.Title>
        {description && (
          <ToastPrimitive.Description className="text-caption text-text-secondary mt-0.5">
            {description}
          </ToastPrimitive.Description>
        )}
      </div>
      <ToastPrimitive.Close className="text-text-tertiary hover:text-text-primary flex-shrink-0 transition-colors">
        <X className="w-4 h-4" strokeWidth={1.5} />
      </ToastPrimitive.Close>
    </ToastPrimitive.Root>
  )
}

// Toast hook
interface ToastData {
  id: string
  variant: ToastVariant
  title: string
  description?: string
}

const toastEventKey = 'atelier-nova-toast'

export function toast(data: Omit<ToastData, 'id'>) {
  const event = new CustomEvent(toastEventKey, {
    detail: { ...data, id: Math.random().toString(36).slice(2) },
  })
  window.dispatchEvent(event)
}

export function ToastContainer() {
  const [toasts, setToasts] = React.useState<ToastData[]>([])

  React.useEffect(() => {
    const handler = (e: Event) => {
      const data = (e as CustomEvent).detail as ToastData
      setToasts((prev) => [...prev, data])
    }
    window.addEventListener(toastEventKey, handler)
    return () => window.removeEventListener(toastEventKey, handler)
  }, [])

  return (
    <ToastProvider>
      {toasts.map((t) => (
        <Toast
          key={t.id}
          open={true}
          onOpenChange={(open) => {
            if (!open) setToasts((prev) => prev.filter((x) => x.id !== t.id))
          }}
          variant={t.variant}
          title={t.title}
          description={t.description}
        />
      ))}
      <ToastViewport />
    </ToastProvider>
  )
}

export { Toast, ToastProvider, ToastViewport }
