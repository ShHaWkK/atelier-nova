'use client'

import * as React from 'react'
import { Plus, Edit3, Trash2, Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { StatusBadge } from '@/components/ui/Badge'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/Table'
import { Modal } from '@/components/ui/Modal'
import { Input, Textarea, Select } from '@/components/ui/Input'
import { toast } from '@/components/ui/Toast'
import { projects as initialProjects, type Project } from '@/data/projects'

const SECTORS = [
  { value: 'Événementiel', label: 'Événementiel' },
  { value: 'Conseil & Stratégie', label: 'Conseil & Stratégie' },
  { value: 'Restauration', label: 'Restauration' },
  { value: 'Formation professionnelle', label: 'Formation professionnelle' },
  { value: 'Cybersécurité', label: 'Cybersécurité' },
  { value: 'Outil métier', label: 'Outil métier' },
  { value: 'Autre', label: 'Autre' },
]

export default function AdminProjectsPage() {
  const [items, setItems] = React.useState<Project[]>(initialProjects)
  const [editOpen, setEditOpen] = React.useState(false)
  const [editItem, setEditItem] = React.useState<Partial<Project> | null>(null)
  const [isNew, setIsNew] = React.useState(false)

  function openNew() {
    setEditItem({ title: '', client: '', sector: '', tagline: '', description: '', status: 'draft', featured: false })
    setIsNew(true)
    setEditOpen(true)
  }

  function openEdit(item: Project) {
    setEditItem({ ...item })
    setIsNew(false)
    setEditOpen(true)
  }

  function toggleStatus(id: string) {
    setItems((prev) => prev.map((p) => p.id === id ? { ...p, status: p.status === 'published' ? 'draft' : 'published' } : p))
    toast({ variant: 'success', title: 'Statut mis à jour' })
  }

  function deleteItem(id: string) {
    setItems((prev) => prev.filter((p) => p.id !== id))
    toast({ variant: 'success', title: 'Projet supprimé' })
  }

  function save() {
    if (!editItem?.title?.trim()) {
      toast({ variant: 'error', title: 'Le titre est requis' })
      return
    }
    if (isNew) {
      const newItem: Project = {
        id: String(Date.now()),
        slug: editItem.title?.toLowerCase().replace(/\s+/g, '-') ?? '',
        title: editItem.title ?? '',
        client: editItem.client ?? '',
        sector: editItem.sector ?? '',
        sectorIcon: '🏢',
        tagline: editItem.tagline ?? '',
        description: editItem.description ?? '',
        problem: '',
        solution: '',
        approach: '',
        features: [],
        stack: [],
        results: [],
        deliverables: [],
        duration: '',
        status: (editItem.status as 'published' | 'draft') ?? 'draft',
        featured: editItem.featured ?? false,
        color: '#6B5CE7',
        colorDark: '#4F46E5',
      }
      setItems((prev) => [newItem, ...prev])
      toast({ variant: 'success', title: 'Projet créé' })
    } else {
      setItems((prev) => prev.map((p) => p.id === editItem.id ? { ...p, ...editItem } as Project : p))
      toast({ variant: 'success', title: 'Projet mis à jour' })
    }
    setEditOpen(false)
    setEditItem(null)
  }

  return (
    <div className="space-y-5 max-w-[1300px]">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-heading-xl font-display text-text-primary">Projets</h1>
          <p className="text-body-s text-text-secondary mt-1">{items.length} projets</p>
        </div>
        <Button variant="primary" size="sm" leftIcon={<Plus className="w-4 h-4" strokeWidth={2} />} onClick={openNew}>
          Nouveau projet
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Projet</TableHead>
            <TableHead className="hidden md:table-cell">Client</TableHead>
            <TableHead className="hidden md:table-cell">Secteur</TableHead>
            <TableHead>Statut</TableHead>
            <TableHead className="hidden lg:table-cell">Mis en avant</TableHead>
            <TableHead className="w-28">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                    style={{ backgroundColor: `${item.color}15` }}>
                    {item.sectorIcon}
                  </div>
                  <div>
                    <p className="text-[13px] font-medium text-text-primary">{item.title}</p>
                    <p className="text-caption text-text-tertiary font-mono">/projects/{item.slug}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <span className="text-body-s text-text-secondary">{item.client}</span>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <span className="text-body-s text-text-secondary">{item.sector}</span>
              </TableCell>
              <TableCell>
                <StatusBadge status={item.status === 'published' ? 'published' : 'unpublished'} />
              </TableCell>
              <TableCell className="hidden lg:table-cell">
                <span className={`text-caption font-medium ${item.featured ? 'text-accent' : 'text-text-tertiary'}`}>
                  {item.featured ? '★ Oui' : '—'}
                </span>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <button
                    className="w-8 h-8 flex items-center justify-center rounded-lg text-text-tertiary hover:bg-background hover:text-accent transition-all"
                    onClick={() => openEdit(item)}
                  >
                    <Edit3 className="w-4 h-4" strokeWidth={1.5} />
                  </button>
                  <button
                    className="w-8 h-8 flex items-center justify-center rounded-lg text-text-tertiary hover:bg-background hover:text-warning transition-all"
                    onClick={() => toggleStatus(item.id)}
                  >
                    {item.status === 'published' ? <EyeOff className="w-4 h-4" strokeWidth={1.5} /> : <Eye className="w-4 h-4" strokeWidth={1.5} />}
                  </button>
                  <button
                    className="w-8 h-8 flex items-center justify-center rounded-lg text-text-tertiary hover:bg-danger-soft hover:text-danger transition-all"
                    onClick={() => deleteItem(item.id)}
                  >
                    <Trash2 className="w-4 h-4" strokeWidth={1.5} />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Modal
        open={editOpen}
        onOpenChange={setEditOpen}
        title={isNew ? 'Nouveau projet' : 'Modifier le projet'}
        size="lg"
        footer={
          <>
            <Button variant="secondary" size="sm" onClick={() => setEditOpen(false)}>Annuler</Button>
            <Button variant="primary" size="sm" onClick={save}>{isNew ? 'Créer' : 'Sauvegarder'}</Button>
          </>
        }
      >
        {editItem && (
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input label="Titre" value={editItem.title ?? ''} onChange={(e) => setEditItem((p) => ({ ...p, title: e.target.value }))} />
              <Input label="Client" value={editItem.client ?? ''} onChange={(e) => setEditItem((p) => ({ ...p, client: e.target.value }))} optional />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Select label="Secteur" options={SECTORS} value={editItem.sector ?? ''} onChange={(e) => setEditItem((p) => ({ ...p, sector: e.target.value }))} optional />
              <Select
                label="Statut"
                options={[{ value: 'draft', label: 'Brouillon' }, { value: 'published', label: 'Publié' }]}
                value={editItem.status ?? 'draft'}
                onChange={(e) => setEditItem((p) => ({ ...p, status: e.target.value as 'published' | 'draft' }))}
              />
            </div>
            <Input label="Tagline" value={editItem.tagline ?? ''} onChange={(e) => setEditItem((p) => ({ ...p, tagline: e.target.value }))} optional />
            <Textarea label="Description" value={editItem.description ?? ''} onChange={(e) => setEditItem((p) => ({ ...p, description: e.target.value }))} optional />
            <div className="flex items-center gap-3">
              <input type="checkbox" id="featured-project" checked={editItem.featured ?? false}
                onChange={(e) => setEditItem((p) => ({ ...p, featured: e.target.checked }))}
                className="w-4 h-4 accent-accent" />
              <label htmlFor="featured-project" className="text-body-s text-text-secondary cursor-pointer">
                Mettre en avant sur la homepage
              </label>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}
