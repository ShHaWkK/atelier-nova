import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Clock, Calendar, Tag } from 'lucide-react'
import { getBlogPostBySlug, getPublishedPosts } from '@/data/blog-posts'
import { formatDate } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getPublishedPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) return { title: 'Article introuvable' }
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) notFound()

  const allPosts = getPublishedPosts()
  const related = allPosts.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 2)

  // Parse markdown-ish content
  const contentHtml = post.content
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^/g, '<p>')
    .replace(/$/g, '</p>')

  return (
    <>
      {/* Back */}
      <div className="pt-24 pb-4 bg-background">
        <div className="container mx-auto max-w-[860px]">
          <Link href="/blog" className="inline-flex items-center gap-2 text-body-s text-text-tertiary hover:text-text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
            Retour au blog
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="pb-10 bg-background">
        <div className="container mx-auto max-w-[860px]">
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="text-caption font-medium text-accent bg-accent-soft px-2.5 py-1 rounded">
                {post.category}
              </span>
              <div className="flex items-center gap-1.5 text-text-tertiary">
                <Clock className="w-3.5 h-3.5" strokeWidth={1.5} />
                <span className="text-caption">{post.readingTime} min de lecture</span>
              </div>
              <div className="flex items-center gap-1.5 text-text-tertiary">
                <Calendar className="w-3.5 h-3.5" strokeWidth={1.5} />
                <span className="text-caption">{formatDate(post.publishedAt)}</span>
              </div>
            </div>

            <h1 className="text-display-l font-display text-text-primary mb-5 text-balance">
              {post.title}
            </h1>

            <p className="text-body-l text-text-secondary leading-relaxed mb-6">{post.excerpt}</p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-signature flex items-center justify-center flex-shrink-0">
                <span className="text-white font-display font-bold text-sm">
                  {post.author.split(' ').map((n) => n[0]).join('')}
                </span>
              </div>
              <div>
                <p className="text-[14px] font-semibold text-text-primary">{post.author}</p>
                <p className="text-caption text-text-tertiary">{post.authorRole}</p>
              </div>
            </div>
          </div>

          {/* Banner */}
          <div className="h-56 rounded-xl bg-gradient-hero flex items-center justify-center relative overflow-hidden mb-8">
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'repeating-linear-gradient(45deg, rgba(107,92,231,0.4) 0, rgba(107,92,231,0.4) 1px, transparent 1px, transparent 30px)'
              }}
            />
            <div className="relative z-10 text-center">
              <span className="font-serif italic text-3xl text-white/70">"{post.title.split(' ').slice(0, 6).join(' ')}..."</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16 bg-background">
        <div className="container mx-auto max-w-[860px]">
          <div className="grid lg:grid-cols-[1fr_240px] gap-10">
            <div className="prose-nova">
              {post.content.split('\n\n').map((block, idx) => {
                if (block.startsWith('## ')) {
                  return <h2 key={idx} className="text-heading-m font-display text-text-primary mt-10 mb-4">{block.replace('## ', '')}</h2>
                }
                if (block.startsWith('### ')) {
                  return <h3 key={idx} className="text-heading-s font-display text-text-primary mt-7 mb-3">{block.replace('### ', '')}</h3>
                }
                if (block.startsWith('- ')) {
                  const items = block.split('\n').filter((l) => l.startsWith('- '))
                  return (
                    <ul key={idx} className="space-y-2 mb-5 pl-5 list-disc">
                      {items.map((item, i) => (
                        <li key={i} className="text-text-secondary">
                          <span dangerouslySetInnerHTML={{ __html: item.replace('- ', '').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') }} />
                        </li>
                      ))}
                    </ul>
                  )
                }
                return (
                  <p key={idx} className="mb-5 leading-[1.8] text-text-secondary" dangerouslySetInnerHTML={{
                    __html: block.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-text-primary">$1</strong>')
                  }} />
                )
              })}
            </div>

            {/* Sticky sidebar */}
            <div className="hidden lg:block">
              <div className="sticky top-24 space-y-5">
                <div className="bg-surface border border-border rounded-xl p-5">
                  <p className="text-label text-text-tertiary uppercase tracking-wider mb-3">Tags</p>
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span key={tag} className="flex items-center gap-1 text-caption text-text-secondary bg-background px-2.5 py-1 rounded border border-border">
                        <Tag className="w-3 h-3" strokeWidth={1.5} />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-signature rounded-xl p-5 text-white">
                  <p className="text-[13px] font-semibold mb-2">Intéressé par ce sujet ?</p>
                  <p className="text-caption text-white/65 mb-4">Discutons de votre projet en 30 minutes.</p>
                  <Button asChild size="sm" className="w-full justify-center bg-white text-accent hover:bg-white/90">
                    <Link href="/booking">Prendre RDV</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-background-secondary">
        <div className="container mx-auto max-w-[860px]">
          <div className="bg-primary rounded-xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 noise">
            <div>
              <p className="text-heading-s font-display text-white mb-1">Besoin d'un coup de main ?</p>
              <p className="text-body-s text-white/55">
                Atelier Nova construit exactement ce type de solution pour vos clients.
              </p>
            </div>
            <Button asChild size="md" className="bg-white text-accent hover:bg-white/90 flex-shrink-0" rightIcon={<ArrowRight className="w-4 h-4" strokeWidth={1.5} />}>
              <Link href="/quote">Demander un devis</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-12 bg-background">
          <div className="container mx-auto max-w-[860px]">
            <h2 className="text-heading-l font-display text-text-primary mb-6">Articles similaires</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {related.map((p) => (
                <Link key={p.id} href={`/blog/${p.slug}`} className="group block bg-surface border border-border rounded-xl p-5 hover:border-accent/30 hover:-translate-y-1 transition-all duration-300">
                  <span className="text-caption font-medium text-accent bg-accent-soft px-2 py-0.5 rounded mb-3 inline-block">
                    {p.category}
                  </span>
                  <h3 className="text-heading-s font-display text-text-primary group-hover:text-accent transition-colors text-balance line-clamp-2">
                    {p.title}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-3 text-caption text-text-tertiary">
                    <Clock className="w-3 h-3" strokeWidth={1.5} />
                    {p.readingTime} min
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
