import type { Metadata } from 'next'
import Link from 'next/link'
import { Search, ArrowRight, Clock } from 'lucide-react'
import { getPublishedPosts, categories } from '@/data/blog-posts'
import { formatDate } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Articles sur la création web, le SEO, la conversion et la maintenance pour les PME.',
}

export default function BlogPage() {
  const posts = getPublishedPosts()
  const featured = posts.filter((p) => p.featured)
  const rest = posts.filter((p) => !p.featured)

  return (
    <>
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto max-w-[1200px]">
          <div className="max-w-[680px] mb-10">
            <span className="inline-flex items-center gap-2 text-caption font-semibold uppercase tracking-widest text-accent mb-4">
              <span className="w-4 h-px bg-accent" />
              Blog
            </span>
            <h1 className="text-display-xl font-display text-text-primary mb-5 text-balance">
              Ressources pour les entreprises ambitieuses.
            </h1>
            <p className="text-body-l text-text-secondary leading-relaxed">
              Conseils pratiques sur la création web, la conversion, le SEO et la gestion de votre présence digitale.
            </p>
          </div>

          {/* Categories filter */}
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 rounded-full bg-accent text-white text-body-s font-medium">
              Tous
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 rounded-full bg-surface border border-border text-text-secondary text-body-s font-medium hover:border-accent/40 hover:text-accent transition-colors"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      {featured.length > 0 && (
        <section className="pb-16 bg-background">
          <div className="container mx-auto max-w-[1200px]">
            <div className="grid md:grid-cols-2 gap-6">
              {featured.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group block bg-surface border border-border rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                >
                  {/* Visual header */}
                  <div className="h-48 bg-gradient-hero flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: 'repeating-linear-gradient(45deg, rgba(107,92,231,0.3) 0, rgba(107,92,231,0.3) 1px, transparent 1px, transparent 30px)'
                      }}
                    />
                    <div className="relative z-10 text-center px-6">
                      <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-caption text-white font-medium mb-3">
                        ★ Article mis en avant
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-caption font-medium text-accent bg-accent-soft px-2.5 py-1 rounded">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-text-tertiary">
                        <Clock className="w-3.5 h-3.5" strokeWidth={1.5} />
                        <span className="text-caption">{post.readingTime} min</span>
                      </div>
                    </div>
                    <h2 className="text-heading-m font-display text-text-primary mb-2.5 group-hover:text-accent transition-colors text-balance">
                      {post.title}
                    </h2>
                    <p className="text-body-s text-text-secondary leading-relaxed line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-gradient-signature flex items-center justify-center">
                          <span className="text-[11px] font-bold text-white">
                            {post.author.split(' ').map((n) => n[0]).join('')}
                          </span>
                        </div>
                        <span className="text-caption text-text-secondary">{post.author}</span>
                      </div>
                      <span className="text-caption text-text-tertiary">{formatDate(post.publishedAt)}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All posts */}
      <section className="pb-24 bg-background-secondary">
        <div className="container mx-auto max-w-[1200px]">
          <h2 className="text-heading-xl font-display text-text-primary mb-8">Tous les articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block bg-surface border border-border rounded-xl p-6 hover:-translate-y-1 hover:shadow-md hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-caption font-medium text-accent bg-accent-soft px-2 py-0.5 rounded">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-text-tertiary">
                    <Clock className="w-3 h-3" strokeWidth={1.5} />
                    <span className="text-caption">{post.readingTime} min</span>
                  </div>
                </div>
                <h3 className="text-heading-s font-display text-text-primary mb-2 group-hover:text-accent transition-colors text-balance line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-body-s text-text-secondary leading-relaxed line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-caption text-text-tertiary">{post.author}</span>
                  <span className="text-caption text-text-tertiary">{formatDate(post.publishedAt)}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
