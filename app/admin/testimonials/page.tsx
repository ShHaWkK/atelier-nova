'use client'

import * as React from 'react'
import { Plus, Edit3, Trash2, Star, Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { StatusBadge } from '@/components/ui/Badge'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/Table'
import { Modal } from '@/components/ui/Modal'
import { Input, Textarea, Select } from '@/components/ui/Input'
import { toast } from '@/components/ui/Toast'
import { testimonials as initialTestimonials, type Testimonial } from '@/data/testimonials'

export default function AdminTestimonialsPage() {
  const [items, setItems] = React.useState<Testimonial[]>(initialTestimonials)
  const [editOpen, setEditOpen] = React.useState(false)
  const [editItem, setEditItem] = React.useState<Partial<Testimonial> | null>(null)
  const [isNew, setIsNew] = React.useState(false)

  function openNew() {
    setEditItem({ name: '', role: '', company: '', sector: '', message: '', rating: 5, avatar: '', published: false, featured: false })
    setIsNew(true)
    setEditOpen(true)
  }

  function openEdit(item: Testimonial) {
    setEditItem({ ...item })
    setIsNew(false)
    setEditOpen(true)
  }

  function toggle(id: string, field: 'published' | 'featured') {
    setItems((prev) => prev.map((t) => t.id === id ? { ...t, [field]: !t[field] } : t))
    toast({ variant: 'success', title: 'Mis à jour' })
  }

  function deleteItem(id: string) {
    setItems((prev) => prev.filter((t) => t.id !== id))
    toast({ variant: 'success', title: 'Témoignage supprimé' })
  }

  function save() {
    if (!editItem?.name?.trim() || !editItem?.message?.trim()) {
      toast({ variant: 'error', title: 'Nom et message sont requis' })
      return
    }
    if (isNew) {
      const newItem: Testimonial = {
        id: String(Date.now()),
        name: editItem.name ?? '',
        role: editItem.role ?? '',
        company: editItem.company ?? '',
        sector: editItem.sector ?? '',
        message: editItem.message ?? '',
        rating: editItem.rating ?? 5,
        avatar: (editItem.name ?? 'X').split(' ').map((n: string) => n[0]).join('').slice(0, 2).toUpperCase(),
        published: editItem.published ?? false,
        featured: editItem.featured ?? false,
      }
      setItems((prev) => [newItem, ...prev])
      toast({ variant: 'success', title: 'Témoignage créé' })
    } else {
      setItems((prev) => prev.map((t) => t.id === editItem.id ? { ...t, ...editItem } as Testimonial : t))
      toast({ variant: 'success', title: 'Témoignage mis à jour' })
    }
    setEditOpen(false)
    setEditItem(null)
  }

  return (
    <div className="space-y-5 max-w-[1300px]">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-heading-xl font-display text-text-primary">Témoignages</h1>
          <p className="text-body-s text-text-secondary mt-1">{items.length} témoignages</p>
        </div>
        <Button variant="primary" size="sm" leftIcon={<Plus className="w-4 h-4" strokeWidth={2} />} onClick={openNew}>
          Ajouter
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Personne</TableHead>
            <TableHead className="hidden md:table-cell">Entreprise</TableHead>
            <TableHead className="hidden lg:table-cell">Note</TableHead>
            <TableHead>Publié</TableHead>
            <TableHead className="hidden lg:table-cell">Mis en avant</TableHead>
            <TableHead className="w-28">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-signature flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xs">{item.avatar}</span>
                  </div>
                  <div>
                    <p className="text-[13px] font-medium text-text-primary">{item.name}</p>
                    <p className="text-caption text-text-tertiary">{item.role}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <span className="text-body-s text-text-secondary">{item.company}</span>
              </TableCell>
              <TableCell className="hidden lg:table-cell">
                <div className="flex gap-0.5">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <StatusBadge status={item.published ? 'published' : 'unpublished'} />
              </TableCell>
              <TableCell className="hidden lg:table-cell">
                <span className={`text-caption font-medium ${item.featured ? 'text-accent' : 'text-text-tertiary'}`}>
                  {item.featured ? '★ Oui' : '—'}
                </span>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <button className="w-8 h-8 flex items-center justify-center rounded-lg text-text-tertiary hover:bg-background hover:text-accent transition-all" onClick={() => openEdit(item)}>
                    <Edit3 className="w-4 h-4" strokeWidth={1.5} />
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-lg text-text-tertiary hover:bg-background hover:text-warning transition-all" onClick={() => toggle(item.id, 'published')}>
                    {item.published ? <EyeOff className="w-4 h-4" strokeWidth={1.5} /> : <Eye className="w-4 h-4" strokeWidth={1.5} />}
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-lg text-text-tertiary hover:bg-danger-soft hover:text-danger transition-all" onClick={() => deleteItem(item.id)}>
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
        title={isNew ? 'Ajouter un témoignage' : 'Modifier'}
        size="md"
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
              <Input label="Nom" value={editItem.name ?? ''} onChange={(e) => setEditItem((p) => ({ ...p, name: e.target.value }))} />
              <Input label="Rôle" value={editItem.role ?? ''} onChange={(e) => setEditItem((p) => ({ ...p, role: e.target.value }))} optional />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input label="Entreprise" value={editItem.company ?? ''} onChange={(e) => setEditItem((p) => ({ ...p, company: e.target.value }))} optional />
              <Select
                label="Note"
                options={[5, 4, 3, 2, 1].map((n) => ({ value: String(n), label: `${n} étoile${n > 1 ? 's' : ''}` }))}
                value={String(editItem.rating ?? 5)}
                onChange={(e) => setEditItem((p) => ({ ...p, rating: parseInt(e.target.value) }))}
              />
            </div>
            <Textarea
              label="Message"
              value={editItem.message ?? ''}
              onChange={(e) => setEditItem((p) => ({ ...p, message: e.target.value }))}
              className="min-h-[120px]"
            />
            <div className="flex items-center gap-5">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={editItem.published ?? false}
                  onChange={(e) => setEditItem((p) => ({ ...p, published: e.target.checked }))}
                  className="w-4 h-4 accent-accent" />
                <span className="text-body-s text-text-secondary">Publié</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={editItem.featured ?? false}
                  onChange={(e) => setEditItem((p) => ({ ...p, featured: e.target.checked }))}
                  className="w-4 h-4 accent-accent" />
                <span className="text-body-s text-text-secondary">Mis en avant</span>
              </label>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}
