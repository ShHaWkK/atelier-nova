'use client'

import * as React from 'react'
import { Plus, Edit3, Trash2, Eye, EyeOff, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { StatusBadge } from '@/components/ui/Badge'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableEmptyState } from '@/components/ui/Table'
import { Modal } from '@/components/ui/Modal'
import { Input, Textarea, Select } from '@/components/ui/Input'
import { toast } from '@/components/ui/Toast'
import { blogPosts as initialPosts, categories, type BlogPost } from '@/data/blog-posts'
import { formatDate, slugify } from '@/lib/utils'

export default function AdminBlogPage() {
  const [posts, setPosts] = React.useState<BlogPost[]>(initialPosts)
  const [editOpen, setEditOpen] = React.useState(false)
  const [editPost, setEditPost] = React.useState<Partial<BlogPost> | null>(null)
  const [isNew, setIsNew] = React.useState(false)

  function openNew() {
    setEditPost({ title: '', excerpt: '', category: '', content: '', status: 'draft', featured: false })
    setIsNew(true)
    setEditOpen(true)
  }

  function openEdit(post: BlogPost) {
    setEditPost({ ...post })
    setIsNew(false)
    setEditOpen(true)
  }

  function togglePublish(id: string) {
    setPosts((prev) => prev.map((p) => p.id === id ? { ...p, status: p.status === 'published' ? 'draft' : 'published' } : p))
    toast({ variant: 'success', title: 'Statut mis à jour' })
  }

  function deletePost(id: string) {
    setPosts((prev) => prev.filter((p) => p.id !== id))
    toast({ variant: 'success', title: 'Article supprimé' })
  }

  function savePost() {
    if (!editPost?.title?.trim()) {
      toast({ variant: 'error', title: 'Le titre est requis' })
      return
    }
    if (isNew) {
      const newPost: BlogPost = {
        id: String(Date.now()),
        slug: slugify(editPost.title ?? ''),
        title: editPost.title ?? '',
        excerpt: editPost.excerpt ?? '',
        content: editPost.content ?? '',
        category: editPost.category ?? categories[0],
        author: 'Administrateur',
        authorRole: 'Atelier Nova',
        publishedAt: new Date().toISOString().split('T')[0],
        readingTime: Math.ceil((editPost.content?.split(' ').length ?? 100) / 200),
        featured: editPost.featured ?? false,
        status: editPost.status as 'published' | 'draft' ?? 'draft',
        tags: [],
      }
      setPosts((prev) => [newPost, ...prev])
      toast({ variant: 'success', title: 'Article créé' })
    } else {
      setPosts((prev) => prev.map((p) => p.id === editPost.id ? { ...p, ...editPost } as BlogPost : p))
      toast({ variant: 'success', title: 'Article mis à jour' })
    }
    setEditOpen(false)
    setEditPost(null)
  }

  return (
    <div className="space-y-5 max-w-[1300px]">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-heading-xl font-display text-text-primary">Blog</h1>
          <p className="text-body-s text-text-secondary mt-1">{posts.length} articles</p>
        </div>
        <Button
          variant="primary"
          size="sm"
          leftIcon={<Plus className="w-4 h-4" strokeWidth={2} />}
          onClick={openNew}
        >
          Nouvel article
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Titre</TableHead>
            <TableHead className="hidden md:table-cell">Catégorie</TableHead>
            <TableHead className="hidden lg:table-cell">Auteur</TableHead>
            <TableHead className="hidden lg:table-cell">Date</TableHead>
            <TableHead>Statut</TableHead>
            <TableHead className="w-28">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.length === 0 ? (
            <TableEmptyState
              title="Aucun article"
              description="Créez votre premier article de blog."
              icon={<BookOpen className="w-5 h-5" strokeWidth={1.5} />}
              action={<Button size="sm" variant="primary" onClick={openNew}>Créer un article</Button>}
            />
          ) : posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>
                <div>
                  <p className="text-[13px] font-medium text-text-primary line-clamp-1">{post.title}</p>
                  <p className="text-caption text-text-tertiary font-mono">/blog/{post.slug}</p>
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <span className="text-caption font-medium text-accent bg-accent-soft px-2 py-0.5 rounded">{post.category}</span>
              </TableCell>
              <TableCell className="hidden lg:table-cell">
                <span className="text-body-s text-text-secondary">{post.author}</span>
              </TableCell>
              <TableCell className="hidden lg:table-cell">
                <span className="text-caption text-text-tertiary">{formatDate(post.publishedAt)}</span>
              </TableCell>
              <TableCell>
                <StatusBadge status={post.status === 'published' ? 'published' : 'unpublished'} />
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <button
                    className="w-8 h-8 flex items-center justify-center rounded-lg text-text-tertiary hover:bg-background hover:text-accent transition-all"
                    onClick={() => openEdit(post)}
                    title="Modifier"
                  >
                    <Edit3 className="w-4 h-4" strokeWidth={1.5} />
                  </button>
                  <button
                    className="w-8 h-8 flex items-center justify-center rounded-lg text-text-tertiary hover:bg-background hover:text-warning transition-all"
                    onClick={() => togglePublish(post.id)}
                    title={post.status === 'published' ? 'Dépublier' : 'Publier'}
                  >
                    {post.status === 'published'
                      ? <EyeOff className="w-4 h-4" strokeWidth={1.5} />
                      : <Eye className="w-4 h-4" strokeWidth={1.5} />
                    }
                  </button>
                  <button
                    className="w-8 h-8 flex items-center justify-center rounded-lg text-text-tertiary hover:bg-danger-soft hover:text-danger transition-all"
                    onClick={() => deletePost(post.id)}
                    title="Supprimer"
                  >
                    <Trash2 className="w-4 h-4" strokeWidth={1.5} />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Edit modal */}
      <Modal
        open={editOpen}
        onOpenChange={setEditOpen}
        title={isNew ? 'Nouvel article' : 'Modifier l\'article'}
        size="lg"
        footer={
          <>
            <Button variant="secondary" size="sm" onClick={() => setEditOpen(false)}>Annuler</Button>
            <Button variant="primary" size="sm" onClick={savePost}>
              {isNew ? 'Créer l\'article' : 'Sauvegarder'}
            </Button>
          </>
        }
      >
        {editPost && (
          <div className="space-y-4">
            <Input
              label="Titre"
              placeholder="Titre de l'article"
              value={editPost.title ?? ''}
              onChange={(e) => setEditPost((p) => ({ ...p, title: e.target.value }))}
            />
            <div className="grid sm:grid-cols-2 gap-4">
              <Select
                label="Catégorie"
                options={categories.map((c) => ({ value: c, label: c }))}
                value={editPost.category ?? ''}
                onChange={(e) => setEditPost((p) => ({ ...p, category: e.target.value }))}
              />
              <Select
                label="Statut"
                options={[{ value: 'draft', label: 'Brouillon' }, { value: 'published', label: 'Publié' }]}
                value={editPost.status ?? 'draft'}
                onChange={(e) => setEditPost((p) => ({ ...p, status: e.target.value as 'draft' | 'published' }))}
              />
            </div>
            <Textarea
              label="Extrait"
              placeholder="Résumé court de l'article (affiché dans la liste)"
              value={editPost.excerpt ?? ''}
              onChange={(e) => setEditPost((p) => ({ ...p, excerpt: e.target.value }))}
              className="min-h-[80px]"
            />
            <Textarea
              label="Contenu"
              placeholder="Rédigez votre article ici... (Markdown supporté)"
              value={editPost.content ?? ''}
              onChange={(e) => setEditPost((p) => ({ ...p, content: e.target.value }))}
              className="min-h-[200px] font-mono text-sm"
            />
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="featured"
                checked={editPost.featured ?? false}
                onChange={(e) => setEditPost((p) => ({ ...p, featured: e.target.checked }))}
                className="w-4 h-4 accent-accent"
              />
              <label htmlFor="featured" className="text-body-s text-text-secondary cursor-pointer">
                Mettre en avant sur la liste du blog
              </label>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}
