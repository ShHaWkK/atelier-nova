'use client'

import * as React from 'react'
import { FileDown, Eye, Check, X, Send, Plus } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { StatusBadge } from '@/components/ui/Badge'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableEmptyState } from '@/components/ui/Table'
import { Modal } from '@/components/ui/Modal'
import { toast } from '@/components/ui/Toast'
import { mockQuotes, type Quote } from '@/data/admin-mock'
import { formatCurrency, formatDate } from '@/lib/utils'

const STATUS_ACTIONS: Record<Quote['status'], { label: string; next: Quote['status']; variant: 'primary' | 'secondary' | 'dark' | 'danger' }[]> = {
  draft: [{ label: 'Marquer "À envoyer"', next: 'to-send', variant: 'primary' }],
  'to-send': [{ label: 'Marquer "Envoyé"', next: 'sent', variant: 'dark' }],
  sent: [
    { label: 'Marquer "Accepté"', next: 'accepted', variant: 'primary' },
    { label: 'Marquer "Refusé"', next: 'refused', variant: 'danger' },
  ],
  accepted: [],
  refused: [{ label: 'Remettre en brouillon', next: 'draft', variant: 'secondary' }],
}

export default function QuotesPage() {
  const [quotes, setQuotes] = React.useState<Quote[]>(mockQuotes)
  const [selected, setSelected] = React.useState<Quote | null>(null)
  const [detailOpen, setDetailOpen] = React.useState(false)
  const [statusFilter, setStatusFilter] = React.useState('')

  const filtered = statusFilter ? quotes.filter((q) => q.status === statusFilter) : quotes

  function updateStatus(id: string, status: Quote['status']) {
    setQuotes((prev) => prev.map((q) => q.id === id ? { ...q, status } : q))
    if (selected?.id === id) setSelected((q) => q ? { ...q, status } : q)
    toast({ variant: 'success', title: 'Statut mis à jour' })
  }

  function generatePDF(quote: Quote) {
    toast({ variant: 'info', title: 'Génération PDF', description: `Devis ${quote.quoteNumber} — disponible avec la DB connectée` })
  }

  return (
    <div className="space-y-5 max-w-[1300px]">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-heading-xl font-display text-text-primary">Devis</h1>
          <p className="text-body-s text-text-secondary mt-1">{quotes.length} devis au total</p>
        </div>
      </div>

      {/* Status tabs */}
      <div className="flex items-center gap-1 bg-background-secondary p-1 rounded-lg w-fit flex-wrap">
        {['', 'draft', 'to-send', 'sent', 'accepted', 'refused'].map((s) => {
          const labels: Record<string, string> = { '': 'Tous', draft: 'Brouillon', 'to-send': 'À envoyer', sent: 'Envoyé', accepted: 'Accepté', refused: 'Refusé' }
          const count = s ? quotes.filter((q) => q.status === s).length : quotes.length
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
            <TableHead>Numéro</TableHead>
            <TableHead>Client</TableHead>
            <TableHead className="hidden md:table-cell">Projet</TableHead>
            <TableHead className="hidden lg:table-cell">Estimation</TableHead>
            <TableHead>Statut</TableHead>
            <TableHead className="hidden lg:table-cell">Date</TableHead>
            <TableHead className="w-24">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filtered.length === 0 ? (
            <TableEmptyState title="Aucun devis" description="Aucun devis pour ce statut." />
          ) : filtered.map((quote) => (
            <TableRow key={quote.id} className="cursor-pointer" onClick={() => { setSelected(quote); setDetailOpen(true) }}>
              <TableCell>
                <span className="font-mono text-caption text-text-secondary">{quote.quoteNumber}</span>
              </TableCell>
              <TableCell>
                <div>
                  <p className="text-[13px] font-medium text-text-primary">{quote.clientName}</p>
                  <p className="text-caption text-text-tertiary">{quote.company}</p>
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <span className="text-body-s text-text-secondary">{quote.projectType}</span>
              </TableCell>
              <TableCell className="hidden lg:table-cell">
                <span className="text-body-s font-medium text-text-primary">
                  {formatCurrency(quote.estimateMin)} – {formatCurrency(quote.estimateMax)}
                </span>
              </TableCell>
              <TableCell>
                <StatusBadge status={quote.status} />
              </TableCell>
              <TableCell className="hidden lg:table-cell">
                <span className="text-caption text-text-tertiary">{formatDate(quote.createdAt)}</span>
              </TableCell>
              <TableCell onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center gap-1">
                  <button
                    className="w-8 h-8 flex items-center justify-center rounded-lg text-text-tertiary hover:bg-background hover:text-accent transition-all"
                    onClick={() => { setSelected(quote); setDetailOpen(true) }}
                    title="Voir le détail"
                  >
                    <Eye className="w-4 h-4" strokeWidth={1.5} />
                  </button>
                  <button
                    className="w-8 h-8 flex items-center justify-center rounded-lg text-text-tertiary hover:bg-background hover:text-success transition-all"
                    onClick={() => generatePDF(quote)}
                    title="Générer PDF"
                  >
                    <FileDown className="w-4 h-4" strokeWidth={1.5} />
                  </button>
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
        title={`Devis ${selected?.quoteNumber ?? ''}`}
        description={selected?.clientName}
        size="lg"
        footer={
          <div className="flex items-center gap-2 flex-wrap">
            <Button
              variant="secondary"
              size="sm"
              leftIcon={<FileDown className="w-4 h-4" strokeWidth={1.5} />}
              onClick={() => selected && generatePDF(selected)}
            >
              Générer PDF
            </Button>
            {selected && STATUS_ACTIONS[selected.status].map((action) => (
              <Button
                key={action.next}
                variant={action.variant}
                size="sm"
                onClick={() => selected && updateStatus(selected.id, action.next)}
              >
                {action.label}
              </Button>
            ))}
          </div>
        }
      >
        {selected && (
          <div className="space-y-5">
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { label: 'Client', value: selected.clientName },
                { label: 'Entreprise', value: selected.company },
                { label: 'Email', value: selected.email },
                { label: 'Type de projet', value: selected.projectType },
                { label: 'Budget client', value: selected.budget },
                { label: 'Date', value: formatDate(selected.createdAt) },
              ].map(({ label, value }) => (
                <div key={label} className="p-3 bg-background rounded-lg">
                  <p className="text-caption text-text-tertiary mb-0.5">{label}</p>
                  <p className="text-body-s font-medium text-text-primary">{value}</p>
                </div>
              ))}
            </div>

            {/* Estimation */}
            <div className="p-4 bg-primary rounded-xl text-white">
              <p className="text-caption text-white/50 mb-1">Estimation</p>
              <p className="text-heading-m font-display">
                {formatCurrency(selected.estimateMin)} – {formatCurrency(selected.estimateMax)}
              </p>
            </div>

            {/* Features */}
            {selected.features.length > 0 && (
              <div>
                <p className="text-label text-text-tertiary uppercase tracking-wider mb-3">Fonctionnalités demandées</p>
                <div className="flex flex-wrap gap-2">
                  {selected.features.map((f) => (
                    <span key={f} className="px-2.5 py-1 bg-accent-soft text-accent text-caption rounded font-medium">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  )
}
