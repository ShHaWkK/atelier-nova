'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowRight, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Réalisations' },
  { href: '/pricing', label: 'Tarifs' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  React.useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  React.useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isHomeDark = pathname === '/'

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          isScrolled
            ? 'bg-surface/95 backdrop-blur-md border-b border-border shadow-xs'
            : isHomeDark
            ? 'bg-transparent'
            : 'bg-surface/80 backdrop-blur-sm border-b border-transparent'
        )}
      >
        <div className="container mx-auto max-w-[1200px]">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-signature flex items-center justify-center shadow-accent flex-shrink-0">
                <Zap className="w-4 h-4 text-white" strokeWidth={2} />
              </div>
              <span
                className={cn(
                  'font-display font-bold text-[17px] tracking-tight transition-colors',
                  isScrolled || !isHomeDark ? 'text-text-primary' : 'text-white'
                )}
              >
                Atelier Nova
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-3.5 py-2 rounded-lg text-[14px] font-medium font-sans transition-all duration-150',
                    pathname === link.href
                      ? isScrolled || !isHomeDark
                        ? 'text-accent bg-accent-soft'
                        : 'text-white bg-white/15'
                      : isScrolled || !isHomeDark
                      ? 'text-text-secondary hover:text-text-primary hover:bg-background-secondary'
                      : 'text-white/75 hover:text-white hover:bg-white/10'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                asChild
                variant={isScrolled || !isHomeDark ? 'primary' : 'outline-white'}
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4" strokeWidth={1.5} />}
              >
                <Link href="/quote">Demander un devis</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className={cn(
                'md:hidden p-2 rounded-lg transition-colors',
                isScrolled || !isHomeDark
                  ? 'text-text-primary hover:bg-background-secondary'
                  : 'text-white hover:bg-white/10'
              )}
              onClick={() => setMobileOpen(true)}
              aria-label="Ouvrir le menu"
            >
              <Menu className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-primary/50 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={cn(
          'fixed top-0 left-0 bottom-0 z-50 w-[300px] bg-surface shadow-xl md:hidden',
          'transition-transform duration-300 ease-enter',
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-signature flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" strokeWidth={2} />
            </div>
            <span className="font-display font-bold text-[17px] text-text-primary">Atelier Nova</span>
          </Link>
          <button
            className="p-2 rounded-lg text-text-secondary hover:bg-background-secondary transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        <nav className="px-3 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'flex items-center gap-3 px-3.5 py-3 rounded-lg text-[15px] font-medium font-sans transition-all',
                pathname === link.href
                  ? 'bg-accent-soft text-accent font-semibold'
                  : 'text-text-secondary hover:bg-background-secondary hover:text-text-primary'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-border space-y-3">
          <Button asChild variant="primary" size="md" className="w-full justify-center">
            <Link href="/quote">Demander un devis</Link>
          </Button>
          <Button asChild variant="secondary" size="md" className="w-full justify-center">
            <Link href="/booking">Prendre rendez-vous</Link>
          </Button>
        </div>
      </div>
    </>
  )
}
