'use client'

import * as React from 'react'
import { Search, Filter, Download, Plus, MoreHorizontal, Trash2, Mail, Eye } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { StatusBadge } from '@/components/ui/Badge'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableEmptyState, TablePagination } from '@/components/ui/Table'
import { Modal } from '@/components/ui/Modal'
import { Input, Textarea, Select } from '@/components/ui/Input'
import { toast } from '@/components/ui/Toast'
import { mockLeads, type Lead } from '@/data/admin-mock'
import { formatDate } from '@/lib/utils'

const STATUS_OPTIONS = [
  { value: '', label: 'Tous les statuts' },
  { value: 'new', label: 'Nouveau' },
  { value: 'contacted', label: 'Contacté' },
  { value: 'waiting', label: 'En attente' },
  { value: 'converted', label: 'Converti' },
  { value: 'lost', label: 'Perdu' },
]

const PRIORITY_OPTIONS = [
  { value: '', label: 'Toutes les priorités' },
  { value: 'high', label: 'Haute' },
  { value: 'normal', label: 'Normale' },
  { value: 'low', label: 'Basse' },
]

const STATUS_UPDATE_OPTIONS = [
  { value: 'new', label: 'Nouveau' },
  { value: 'contacted', label: 'Contacté' },
  { value: 'waiting', label: 'En attente' },
  { value: 'converted', label: 'Converti' },
  { value: 'lost', label: 'Perdu' },
]

export default function LeadsPage() {
  const [leads, setLeads] = React.useState<Lead[]>(mockLeads)
  const [search, setSearch] = React.useState('')
  const [statusFilter, setStatusFilter] = React.useState('')
  const [priorityFilter, setPriorityFilter] = React.useState('')
  const [selectedLead, setSelectedLead] = React.useState<Lead | null>(null)
  const [detailOpen, setDetailOpen] = React.useState(false)
  const [page, setPage] = React.useState(1)
  const PER_PAGE = 6

  const filtered = leads.filter((l) => {
    const q = search.toLowerCase()
    const matchSearch = !q || l.name.toLowerCase().includes(q) || l.email.toLowerCase().includes(q) || l.company.toLowerCase().includes(q)
    const matchStatus = !statusFilter || l.status === statusFilter
    const matchPriority = !priorityFilter || l.priority === priorityFilter
    return matchSearch && matchStatus && matchPriority
  })

  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  function updateStatus(id: string, status: Lead['status']) {
    setLeads((prev) => prev.map((l) => l.id === id ? { ...l, status } : l))
    toast({ variant: 'success', title: 'Statut mis à jour' })
  }

  function deleteLead(id: string) {
    setLeads((prev) => prev.filter((l) => l.id !== id))
    setDetailOpen(false)
    toast({ variant: 'success', title: 'Lead supprimé' })
  }

  return (
    <div className="space-y-5 max-w-[1300px]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-heading-xl font-display text-text-primary">Leads</h1>
          <p className="text-body-s text-text-secondary mt-1">{leads.length} contacts au total</p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            size="sm"
            leftIcon={<Download className="w-4 h-4" strokeWidth={1.5} />}
            onClick={() => toast({ variant: 'info', title: 'Export CSV', description: 'Fonctionnalité disponible avec la base de données' })}
          >
            Export CSV
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary" strokeWidth={1.5} />
          <input
            type="text"
            placeholder="Rechercher un lead..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1) }}
            className="w-full h-10 pl-10 pr-4 bg-surface border border-border-medium rounded-md text-body-s text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/12"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => { setStatusFilter(e.target.value); setPage(1) }}
          className="h-10 pl-3 pr-8 bg-surface border border-border-medium rounded-md text-body-s text-text-secondary focus:outline-none focus:border-accent appearance-none"
        >
          {STATUS_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <select
          value={priorityFilter}
          onChange={(e) => { setPriorityFilter(e.target.value); setPage(1) }}
          className="h-10 pl-3 pr-8 bg-surface border border-border-medium rounded-md text-body-s text-text-secondary focus:outline-none focus:border-accent appearance-none"
        >
          {PRIORITY_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>

      {/* Table */}
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Contact</TableHead>
              <TableHead className="hidden md:table-cell">Type de demande</TableHead>
              <TableHead className="hidden lg:table-cell">Date</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead className="hidden lg:table-cell">Priorité</TableHead>
              <TableHead className="w-20">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginated.length === 0 ? (
              <TableEmptyState
                title="Aucun lead trouvé"
                description="Essayez de modifier vos filtres de recherche."
                icon={<Search className="w-5 h-5" strokeWidth={1.5} />}
              />
            ) : paginated.map((lead) => (
              <TableRow key={lead.id} className="cursor-pointer" onClick={() => { setSelectedLead(lead); setDetailOpen(true) }}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent-soft flex items-center justify-center flex-shrink-0">
                      <span className="text-accent font-bold text-xs">{lead.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="text-[13px] font-medium text-text-primary">{lead.name}</p>
                      <p className="text-caption text-text-tertiary">{lead.email}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <span className="text-body-s text-text-secondary">{lead.type}</span>
                </TableCell>
                <TableCell className="hidden lg:table-cell">
                  <span className="text-body-s text-text-tertiary">{formatDate(lead.date)}</span>
                </TableCell>
                <TableCell>
                  <StatusBadge status={lead.status} />
                </TableCell>
                <TableCell className="hidden lg:table-cell">
                  <StatusBadge status={lead.priority} />
                </TableCell>
                <TableCell onClick={(e) => e.stopPropagation()}>
                  <div className="flex items-center gap-1">
                    <button
                      className="w-8 h-8 flex items-center justify-center rounded-lg text-text-tertiary hover:bg-background hover:text-accent transition-all"
                      onClick={() => { setSelectedLead(lead); setDetailOpen(true) }}
                    >
                      <Eye className="w-4 h-4" strokeWidth={1.5} />
                    </button>
                    <button
                      className="w-8 h-8 flex items-center justify-center rounded-lg text-text-tertiary hover:bg-danger-soft hover:text-danger transition-all"
                      onClick={() => deleteLead(lead.id)}
                    >
                      <Trash2 className="w-4 h-4" strokeWidth={1.5} />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {filtered.length > PER_PAGE && (
          <TablePagination page={page} totalPages={Math.ceil(filtered.length / PER_PAGE)} total={filtered.length} perPage={PER_PAGE} onPageChange={setPage} />
        )}
      </div>

      {/* Detail modal */}
      <Modal
        open={detailOpen}
        onOpenChange={setDetailOpen}
        title={selectedLead?.name ?? ''}
        description={selectedLead?.email}
        size="md"
        footer={
          <>
            <Button
              variant="danger"
              size="sm"
              leftIcon={<Trash2 className="w-4 h-4" strokeWidth={1.5} />}
              onClick={() => selectedLead && deleteLead(selectedLead.id)}
            >
              Supprimer
            </Button>
            <Button variant="secondary" size="sm" onClick={() => setDetailOpen(false)}>Fermer</Button>
          </>
        }
      >
        {selectedLead && (
          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-background rounded-lg">
                <p className="text-caption text-text-tertiary mb-0.5">Entreprise</p>
                <p className="text-body-s font-medium text-text-primary">{selectedLead.company || '—'}</p>
              </div>
              <div className="p-3 bg-background rounded-lg">
                <p className="text-caption text-text-tertiary mb-0.5">Type de demande</p>
                <p className="text-body-s font-medium text-text-primary">{selectedLead.type}</p>
              </div>
              <div className="p-3 bg-background rounded-lg">
                <p className="text-caption text-text-tertiary mb-0.5">Date</p>
                <p className="text-body-s font-medium text-text-primary">{formatDate(selectedLead.date)}</p>
              </div>
              <div className="p-3 bg-background rounded-lg">
                <p className="text-caption text-text-tertiary mb-0.5">Priorité</p>
                <StatusBadge status={selectedLead.priority} />
              </div>
            </div>

            {selectedLead.notes && (
              <div className="p-4 bg-background-secondary rounded-lg border border-border">
                <p className="text-caption text-text-tertiary mb-1.5">Notes internes</p>
                <p className="text-body-s text-text-secondary">{selectedLead.notes}</p>
              </div>
            )}

            <div>
              <p className="text-label text-text-tertiary uppercase tracking-wider mb-2.5">Changer le statut</p>
              <div className="flex flex-wrap gap-2">
                {STATUS_UPDATE_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => updateStatus(selectedLead.id, opt.value as Lead['status'])}
                    className={`px-3 py-1.5 rounded-lg text-body-s font-medium border transition-all ${
                      selectedLead.status === opt.value
                        ? 'border-accent bg-accent-soft text-accent'
                        : 'border-border text-text-secondary hover:border-accent/40'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}
