'use client'

import * as React from 'react'
import { Calendar, Eye, Check, X, Clock } from 'lucide-react'
import { StatusBadge } from '@/components/ui/Badge'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableEmptyState } from '@/components/ui/Table'
import { Modal } from '@/components/ui/Modal'
import { Button } from '@/components/ui/Button'
import { toast } from '@/components/ui/Toast'
import { mockBookings, type Booking } from '@/data/admin-mock'
import { formatDate } from '@/lib/utils'

export default function BookingsPage() {
  const [bookings, setBookings] = React.useState<Booking[]>(mockBookings)
  const [selected, setSelected] = React.useState<Booking | null>(null)
  const [detailOpen, setDetailOpen] = React.useState(false)
  const [statusFilter, setStatusFilter] = React.useState('')

  const filtered = statusFilter ? bookings.filter((b) => b.status === statusFilter) : bookings

  function updateStatus(id: string, status: Booking['status']) {
    setBookings((prev) => prev.map((b) => b.id === id ? { ...b, status } : b))
    if (selected?.id === id) setSelected((b) => b ? { ...b, status } : b)
    toast({ variant: 'success', title: 'Statut mis à jour' })
  }

  return (
    <div className="space-y-5 max-w-[1300px]">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-heading-xl font-display text-text-primary">Rendez-vous</h1>
          <p className="text-body-s text-text-secondary mt-1">{bookings.length} rendez-vous au total</p>
        </div>
      </div>

      {/* Status tabs */}
      <div className="flex items-center gap-1 bg-background-secondary p-1 rounded-lg w-fit flex-wrap">
        {['', 'planned', 'confirmed', 'cancelled', 'completed'].map((s) => {
          const labels: Record<string, string> = { '': 'Tous', planned: 'Prévu', confirmed: 'Confirmé', cancelled: 'Annulé', completed: 'Terminé' }
          const count = s ? bookings.filter((b) => b.status === s).length : bookings.length
          return (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-3 py-1.5 rounded text-body-s font-medium transition-all ${
                statusFilter === s ? 'bg-surface text-text-primary shadow-xs' : 'text-text-tertiary hover:text-text-secondary'
              }`}
            >
              {labels[s]} {count > 0 && <span className="ml-1 text-caption">({count})</span>}
            </button>
          )
        })}
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date & Heure</TableHead>
            <TableHead>Client</TableHead>
            <TableHead className="hidden md:table-cell">Type</TableHead>
            <TableHead>Statut</TableHead>
            <TableHead className="hidden lg:table-cell">Notes</TableHead>
            <TableHead className="w-24">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filtered.length === 0 ? (
            <TableEmptyState title="Aucun rendez-vous" icon={<Calendar className="w-5 h-5" strokeWidth={1.5} />} />
          ) : filtered.map((booking) => (
            <TableRow key={booking.id} className="cursor-pointer" onClick={() => { setSelected(booking); setDetailOpen(true) }}>
              <TableCell>
                <div>
                  <p className="text-[13px] font-semibold text-text-primary">
                    {new Date(booking.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <Clock className="w-3 h-3 text-text-tertiary" strokeWidth={1.5} />
                    <span className="text-caption text-text-tertiary">{booking.time}</span>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <p className="text-[13px] font-medium text-text-primary">{booking.clientName}</p>
                  <p className="text-caption text-text-tertiary">{booking.email}</p>
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <span className="text-body-s text-text-secondary">{booking.meetingType}</span>
              </TableCell>
              <TableCell>
                <StatusBadge status={booking.status} />
              </TableCell>
              <TableCell className="hidden lg:table-cell">
                <span className="text-caption text-text-tertiary truncate max-w-[200px] block">
                  {booking.notes ?? '—'}
                </span>
              </TableCell>
              <TableCell onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center gap-1">
                  <button
                    className="w-8 h-8 flex items-center justify-center rounded-lg text-text-tertiary hover:bg-background hover:text-accent transition-all"
                    onClick={() => { setSelected(booking); setDetailOpen(true) }}
                  >
                    <Eye className="w-4 h-4" strokeWidth={1.5} />
                  </button>
                  {booking.status === 'planned' && (
                    <button
                      className="w-8 h-8 flex items-center justify-center rounded-lg text-text-tertiary hover:bg-success-soft hover:text-success transition-all"
                      onClick={() => updateStatus(booking.id, 'confirmed')}
                      title="Confirmer"
                    >
                      <Check className="w-4 h-4" strokeWidth={2} />
                    </button>
                  )}
                  {(booking.status === 'planned' || booking.status === 'confirmed') && (
                    <button
                      className="w-8 h-8 flex items-center justify-center rounded-lg text-text-tertiary hover:bg-danger-soft hover:text-danger transition-all"
                      onClick={() => updateStatus(booking.id, 'cancelled')}
                      title="Annuler"
                    >
                      <X className="w-4 h-4" strokeWidth={2} />
                    </button>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Detail modal */}
      <Modal
        open={detailOpen}
        onOpenChange={setDetailOpen}
        title={selected?.clientName ?? ''}
        description={`${selected?.meetingType} · ${selected?.time}`}
        size="sm"
        footer={
          <div className="flex items-center gap-2">
            {selected?.status === 'planned' && (
              <>
                <Button size="sm" variant="primary" leftIcon={<Check className="w-4 h-4" strokeWidth={2} />} onClick={() => selected && updateStatus(selected.id, 'confirmed')}>
                  Confirmer
                </Button>
                <Button size="sm" variant="danger" onClick={() => selected && updateStatus(selected.id, 'cancelled')}>
                  Annuler
                </Button>
              </>
            )}
            {selected?.status === 'confirmed' && (
              <Button size="sm" variant="dark" onClick={() => selected && updateStatus(selected.id, 'completed')}>
                Marquer terminé
              </Button>
            )}
            <Button size="sm" variant="secondary" onClick={() => setDetailOpen(false)}>Fermer</Button>
          </div>
        }
      >
        {selected && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-background rounded-lg">
                <p className="text-caption text-text-tertiary mb-0.5">Date</p>
                <p className="text-body-s font-medium text-text-primary">
                  {new Date(selected.date).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}
                </p>
              </div>
              <div className="p-3 bg-background rounded-lg">
                <p className="text-caption text-text-tertiary mb-0.5">Heure</p>
                <p className="text-body-s font-medium text-text-primary">{selected.time}</p>
              </div>
              <div className="p-3 bg-background rounded-lg col-span-2">
                <p className="text-caption text-text-tertiary mb-0.5">Email</p>
                <p className="text-body-s font-medium text-text-primary">{selected.email}</p>
              </div>
            </div>
            {selected.notes && (
              <div className="p-4 bg-background-secondary rounded-lg border border-border">
                <p className="text-caption text-text-tertiary mb-1.5">Notes</p>
                <p className="text-body-s text-text-secondary">{selected.notes}</p>
              </div>
            )}
            <div className="flex items-center gap-2">
              <p className="text-body-s text-text-secondary">Statut :</p>
              <StatusBadge status={selected.status} />
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}
