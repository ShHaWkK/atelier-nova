import { cn } from '@/lib/utils'

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('skeleton rounded-md', className)}
      {...props}
    />
  )
}

function SkeletonText({ lines = 3, className }: { lines?: number; className?: string }) {
  return (
    <div className={cn('space-y-2', className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className="h-4"
          style={{ width: i === lines - 1 ? '60%' : '100%' }}
        />
      ))}
    </div>
  )
}

function SkeletonCard({ className }: { className?: string }) {
  return (
    <div className={cn('bg-surface border border-border rounded-lg p-6', className)}>
      <Skeleton className="h-6 w-3/4 mb-3" />
      <SkeletonText lines={3} />
    </div>
  )
}

export { Skeleton, SkeletonText, SkeletonCard }
