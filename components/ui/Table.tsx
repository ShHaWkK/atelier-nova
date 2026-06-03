import * as React from 'react'
import { cn } from '@/lib/utils'
import { ChevronUp, ChevronDown, ChevronsUpDown } from 'lucide-react'

function Table({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) {
  return (
    <div className="w-full overflow-auto rounded-lg border border-border bg-surface shadow-xs">
      <table
        className={cn('w-full caption-bottom text-sm', className)}
        {...props}
      />
    </div>
  )
}

function TableHeader({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <thead
      className={cn('bg-background border-b border-border', className)}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody className={cn('divide-y divide-[#F0EDE8]', className)} {...props} />
}

function TableRow({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) {
  return (
    <tr
      className={cn(
        'transition-colors duration-100 hover:bg-background/60',
        className
      )}
      {...props}
    />
  )
}

function TableHead({ className, sortable, sort, onSort, ...props }: React.ThHTMLAttributes<HTMLTableCellElement> & {
  sortable?: boolean
  sort?: 'asc' | 'desc' | null
  onSort?: () => void
}) {
  return (
    <th
      className={cn(
        'px-5 py-3 text-left text-caption text-text-tertiary font-semibold uppercase tracking-wider',
        sortable && 'cursor-pointer select-none hover:text-text-secondary',
        className
      )}
      onClick={sortable ? onSort : undefined}
      {...props}
    >
      <span className="inline-flex items-center gap-1">
        {props.children}
        {sortable && (
          <span className="text-text-tertiary">
            {sort === 'asc' ? (
              <ChevronUp className="w-3.5 h-3.5 text-accent" strokeWidth={2} />
            ) : sort === 'desc' ? (
              <ChevronDown className="w-3.5 h-3.5 text-accent" strokeWidth={2} />
            ) : (
              <ChevronsUpDown className="w-3.5 h-3.5 opacity-40" strokeWidth={1.5} />
            )}
          </span>
        )}
      </span>
    </th>
  )
}

function TableCell({ className, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) {
  return (
    <td
      className={cn('px-5 py-4 align-middle', className)}
      {...props}
    />
  )
}

function TableCaption({ className, ...props }: React.HTMLAttributes<HTMLTableCaptionElement>) {
  return (
    <caption
      className={cn('mt-4 text-caption text-text-tertiary text-center pb-4', className)}
      {...props}
    />
  )
}

// Empty state for tables
function TableEmptyState({
  title = 'Aucun résultat',
  description,
  action,
  icon,
}: {
  title?: string
  description?: string
  action?: React.ReactNode
  icon?: React.ReactNode
}) {
  return (
    <tr>
      <td colSpan={100}>
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
          {icon && (
            <div className="w-12 h-12 rounded-xl bg-background-secondary flex items-center justify-center mb-4 text-text-tertiary">
              {icon}
            </div>
          )}
          <p className="text-[15px] font-semibold text-text-primary font-display">{title}</p>
          {description && (
            <p className="text-body-s text-text-tertiary mt-1.5 max-w-sm">{description}</p>
          )}
          {action && <div className="mt-5">{action}</div>}
        </div>
      </td>
    </tr>
  )
}

// Pagination
interface PaginationProps {
  page: number
  totalPages: number
  total: number
  perPage: number
  onPageChange: (page: number) => void
}

function TablePagination({ page, totalPages, total, perPage, onPageChange }: PaginationProps) {
  const start = (page - 1) * perPage + 1
  const end = Math.min(page * perPage, total)

  return (
    <div className="flex items-center justify-between px-5 py-3 border-t border-border bg-background/40">
      <p className="text-caption text-text-tertiary">
        {start}–{end} sur {total} résultats
      </p>
      <div className="flex items-center gap-1">
        <button
          onClick={() => onPageChange(page - 1)}
          disabled={page <= 1}
          className={cn(
            'h-8 w-8 flex items-center justify-center rounded text-caption font-medium',
            'transition-colors duration-100',
            page <= 1
              ? 'text-text-tertiary opacity-40 cursor-not-allowed'
              : 'text-text-secondary hover:bg-background-secondary hover:text-text-primary'
          )}
        >
          ←
        </button>
        {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            className={cn(
              'h-8 w-8 flex items-center justify-center rounded text-caption font-medium',
              'transition-colors duration-100',
              p === page
                ? 'bg-accent-soft text-accent font-semibold'
                : 'text-text-secondary hover:bg-background-secondary hover:text-text-primary'
            )}
          >
            {p}
          </button>
        ))}
        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page >= totalPages}
          className={cn(
            'h-8 w-8 flex items-center justify-center rounded text-caption font-medium',
            'transition-colors duration-100',
            page >= totalPages
              ? 'text-text-tertiary opacity-40 cursor-not-allowed'
              : 'text-text-secondary hover:bg-background-secondary hover:text-text-primary'
          )}
        >
          →
        </button>
      </div>
    </div>
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
  TableEmptyState,
  TablePagination,
}
