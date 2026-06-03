import * as React from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  accent?: boolean
  featured?: boolean
}

function Card({ className, hover = false, accent = false, featured = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'bg-surface border border-border rounded-lg p-8',
        'shadow-sm',
        hover && 'transition-all duration-300 ease-standard hover:-translate-y-1 hover:shadow-md cursor-pointer',
        accent && 'border-l-[3px] border-l-accent hover:border-accent',
        featured && 'bg-gradient-signature border-0 text-white shadow-accent-lg',
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mb-4', className)} {...props} />
}

function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn('text-heading-s text-text-primary font-display font-semibold', className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('text-body-s text-text-secondary mt-1.5 leading-relaxed', className)} {...props} />
  )
}

function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('', className)} {...props} />
}

function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('mt-6 pt-5 border-t border-border flex items-center justify-between', className)}
      {...props}
    />
  )
}

// Stat card for admin dashboard
interface StatCardProps {
  label: string
  value: string | number
  change?: string
  changeType?: 'up' | 'down' | 'neutral'
  icon?: React.ReactNode
  iconBg?: string
  className?: string
}

function StatCard({ label, value, change, changeType = 'neutral', icon, iconBg, className }: StatCardProps) {
  const changeColor =
    changeType === 'up' ? 'text-success' : changeType === 'down' ? 'text-danger' : 'text-text-tertiary'

  const changePrefix = changeType === 'up' ? '+' : changeType === 'down' ? '' : ''

  return (
    <Card className={cn('p-6', className)}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-label text-text-tertiary uppercase tracking-wider">{label}</p>
          <p className="text-3xl font-display font-bold text-text-primary mt-2 tracking-tight">
            {value}
          </p>
          {change && (
            <p className={cn('text-caption mt-1.5 font-medium', changeColor)}>
              {changePrefix}{change}
            </p>
          )}
        </div>
        {icon && (
          <div
            className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: iconBg ?? '#EDE9FF' }}
          >
            {icon}
          </div>
        )}
      </div>
    </Card>
  )
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, StatCard }
