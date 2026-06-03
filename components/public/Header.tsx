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
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const isHero = pathname === '/'

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  React.useEffect(() => { setMobileOpen(false) }, [pathname])

  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const darkMode = isHero && !scrolled

  return (
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-[#E8E5F0] shadow-[0_1px_20px_rgba(15,15,26,0.06)]'
            : isHero
            ? 'bg-transparent'
            : 'bg-white/90 backdrop-blur-md border-b border-transparent'
        )}
      >
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <div className="flex items-center h-[68px] gap-8">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#6B5CE7] to-[#4F46E5]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Zap className="w-4.5 h-4.5 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <span className={cn(
                'font-display font-bold text-[17px] tracking-tight transition-colors duration-150',
                darkMode ? 'text-white' : 'text-[#0F0F1A]'
              )}>
                Atelier Nova
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5 flex-1">
              {navLinks.map((link) => {
                const active = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'px-4 py-2 rounded-lg text-[14px] font-medium transition-all duration-150',
                      active
                        ? darkMode
                          ? 'bg-white/15 text-white'
                          : 'bg-[#EDE9FF] text-[#6B5CE7]'
                        : darkMode
                        ? 'text-white/70 hover:text-white hover:bg-white/10'
                        : 'text-[#4A4A6A] hover:text-[#0F0F1A] hover:bg-[#F0EDE8]'
                    )}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            {/* CTA desktop */}
            <div className="hidden lg:flex items-center gap-3 ml-auto">
              <Link
                href="/booking"
                className={cn(
                  'text-[14px] font-medium transition-colors duration-150',
                  darkMode ? 'text-white/65 hover:text-white' : 'text-[#4A4A6A] hover:text-[#0F0F1A]'
                )}
              >
                Prendre RDV
              </Link>
              <Button
                asChild
                size="md"
                className={cn(
                  'text-[14px] font-semibold shadow-[0_2px_12px_rgba(107,92,231,0.3)]',
                  darkMode
                    ? 'bg-white text-[#6B5CE7] hover:bg-white/90'
                    : 'bg-[#6B5CE7] text-white hover:bg-[#5A4BD1]'
                )}
                rightIcon={<ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />}
              >
                <Link href="/quote">Demander un devis</Link>
              </Button>
            </div>

            {/* Mobile burger */}
            <button
              type="button"
              className={cn(
                'lg:hidden ml-auto p-2 rounded-xl transition-colors',
                darkMode
                  ? 'text-white hover:bg-white/10'
                  : 'text-[#4A4A6A] hover:bg-[#F0EDE8]'
              )}
              onClick={() => setMobileOpen(true)}
              aria-label="Ouvrir le menu de navigation"
            >
              <Menu className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 bottom-0 z-50 w-[300px] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] lg:hidden',
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between px-5 h-[68px] border-b border-[#E8E5F0]">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#6B5CE7] to-[#4F46E5] flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-display font-bold text-[16px] text-[#0F0F1A]">Atelier Nova</span>
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Fermer le menu"
            className="p-2 rounded-xl text-[#8888A8] hover:bg-[#F0EDE8] hover:text-[#0F0F1A] transition-colors"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'flex items-center px-4 py-3 rounded-xl text-[15px] font-medium transition-all',
                  active
                    ? 'bg-[#EDE9FF] text-[#6B5CE7]'
                    : 'text-[#4A4A6A] hover:bg-[#F8F7F4] hover:text-[#0F0F1A]'
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 space-y-2.5 border-t border-[#E8E5F0]">
          <Button asChild size="md" className="w-full justify-center bg-[#6B5CE7] text-white hover:bg-[#5A4BD1]">
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
