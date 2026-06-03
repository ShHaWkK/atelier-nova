import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 px-2.5 py-1 rounded font-sans text-caption font-semibold leading-none',
  {
    variants: {
      variant: {
        default: 'bg-background-secondary text-text-secondary',
        accent: 'bg-accent-soft text-accent',
        primary: 'bg-primary/10 text-primary',

        // Lead statuses
        new: 'bg-info-soft text-info-text',
        contacted: 'bg-accent-soft text-[#5B21B6]',
        waiting: 'bg-warning-soft text-warning-text',
        converted: 'bg-success-soft text-success-text',
        lost: 'bg-[#F3F4F6] text-[#4B5563]',

        // Quote statuses
        draft: 'bg-[#F3F4F6] text-[#6B7280]',
        'to-send': 'bg-warning-soft text-warning-text',
        sent: 'bg-info-soft text-info-text',
        accepted: 'bg-success-soft text-success-text',
        refused: 'bg-danger-soft text-danger-text',

        // Booking statuses
        planned: 'bg-accent-soft text-[#4C1D95]',
        confirmed: 'bg-success-soft text-success-text',
        cancelled: 'bg-danger-soft text-danger-text',
        completed: 'bg-[#F3F4F6] text-[#374151]',

        // Priority
        high: 'bg-danger-soft text-[#B91C1C]',
        normal: 'bg-info-soft text-info-text',
        low: 'bg-[#F3F4F6] text-[#6B7280]',

        // Content
        published: 'bg-success-soft text-success-text',
        unpublished: 'bg-[#F3F4F6] text-[#6B7280]',

        // Misc
        success: 'bg-success-soft text-success-text',
        warning: 'bg-warning-soft text-warning-text',
        danger: 'bg-danger-soft text-danger-text',
        info: 'bg-info-soft text-info-text',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

const dotColors: Record<string, string> = {
  new: '#3B82F6',
  contacted: '#7C3AED',
  waiting: '#F59E0B',
  converted: '#10B981',
  lost: '#9CA3AF',
  draft: '#9CA3AF',
  'to-send': '#F59E0B',
  sent: '#3B82F6',
  accepted: '#10B981',
  refused: '#EF4444',
  planned: '#7C3AED',
  confirmed: '#10B981',
  cancelled: '#EF4444',
  completed: '#6B7280',
  high: '#B91C1C',
  normal: '#3B82F6',
  low: '#9CA3AF',
  published: '#10B981',
  unpublished: '#9CA3AF',
  success: '#10B981',
  warning: '#F59E0B',
  danger: '#EF4444',
  info: '#3B82F6',
  accent: '#6B5CE7',
}

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean
}

function Badge({ className, variant, dot = false, children, ...props }: BadgeProps) {
  const dotColor = variant ? dotColors[variant] : undefined

  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props}>
      {dot && dotColor && (
        <span
          className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
          style={{ backgroundColor: dotColor }}
        />
      )}
      {children}
    </span>
  )
}

const STATUS_LABELS: Record<string, string> = {
  new: 'Nouveau',
  contacted: 'Contacté',
  waiting: 'En attente',
  converted: 'Converti',
  lost: 'Perdu',
  draft: 'Brouillon',
  'to-send': 'À envoyer',
  sent: 'Envoyé',
  accepted: 'Accepté',
  refused: 'Refusé',
  planned: 'Prévu',
  confirmed: 'Confirmé',
  cancelled: 'Annulé',
  completed: 'Terminé',
  high: 'Haute',
  normal: 'Normale',
  low: 'Basse',
  published: 'Publié',
  unpublished: 'Brouillon',
}

export function StatusBadge({ status }: { status: string }) {
  return (
    <Badge variant={status as VariantProps<typeof badgeVariants>['variant']} dot>
      {STATUS_LABELS[status] ?? status}
    </Badge>
  )
}

export { Badge, badgeVariants }
