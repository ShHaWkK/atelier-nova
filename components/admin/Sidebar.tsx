'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard, Users, FileText, Calendar, BookOpen,
  Briefcase, Star, Settings, LogOut, Zap, Menu, X,
  ChevronLeft,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/admin/leads', icon: Users, label: 'Leads' },
  { href: '/admin/quotes', icon: FileText, label: 'Devis' },
  { href: '/admin/bookings', icon: Calendar, label: 'Rendez-vous' },
  { href: '/admin/blog', icon: BookOpen, label: 'Blog' },
  { href: '/admin/projects', icon: Briefcase, label: 'Projets' },
  { href: '/admin/testimonials', icon: Star, label: 'Témoignages' },
  { href: '/admin/settings', icon: Settings, label: 'Paramètres' },
]

interface SidebarProps {
  mobileOpen: boolean
  onMobileClose: () => void
}

export function Sidebar({ mobileOpen, onMobileClose }: SidebarProps) {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = React.useState(false)

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={onMobileClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-0 bottom-0 z-50 flex flex-col',
          'bg-primary transition-all duration-300 ease-standard',
          // Desktop: collapsible
          collapsed ? 'lg:w-16' : 'lg:w-[240px]',
          // Mobile: drawer
          mobileOpen ? 'translate-x-0 w-[240px]' : '-translate-x-full lg:translate-x-0',
        )}
      >
        {/* Logo */}
        <div className="flex items-center h-16 px-4 border-b border-white/10 flex-shrink-0">
          <Link href="/admin/dashboard" className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-signature flex items-center justify-center flex-shrink-0 shadow-accent">
              <Zap className="w-4 h-4 text-white" strokeWidth={2} />
            </div>
            {!collapsed && (
              <span className="font-display font-bold text-[15px] text-white truncate">Atelier Nova</span>
            )}
          </Link>

          {/* Collapse toggle (desktop) */}
          <button
            className="hidden lg:flex ml-auto w-6 h-6 items-center justify-center rounded text-white/30 hover:text-white transition-colors"
            onClick={() => setCollapsed((c) => !c)}
          >
            <ChevronLeft className={cn('w-4 h-4 transition-transform', collapsed && 'rotate-180')} strokeWidth={1.5} />
          </button>

          {/* Mobile close */}
          <button
            className="lg:hidden ml-auto w-8 h-8 flex items-center justify-center rounded-lg text-white/50 hover:text-white transition-colors"
            onClick={onMobileClose}
          >
            <X className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-0.5">
          {navItems.map(({ href, icon: Icon, label }) => {
            const isActive = pathname === href || pathname.startsWith(href + '/')
            return (
              <Link
                key={href}
                href={href}
                onClick={onMobileClose}
                title={collapsed ? label : undefined}
                className={cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-medium transition-all duration-150',
                  isActive
                    ? 'bg-accent text-white shadow-accent'
                    : 'text-white/50 hover:bg-white/8 hover:text-white',
                  collapsed && 'justify-center px-2'
                )}
              >
                <Icon className="w-4.5 h-4.5 flex-shrink-0" strokeWidth={1.5} />
                {!collapsed && <span>{label}</span>}
              </Link>
            )
          })}
        </nav>

        {/* User + logout */}
        <div className="border-t border-white/10 p-3 flex-shrink-0">
          <div className={cn('flex items-center gap-3 px-2 mb-2', collapsed && 'justify-center')}>
            <div className="w-8 h-8 rounded-full bg-gradient-signature flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-xs">AD</span>
            </div>
            {!collapsed && (
              <div className="min-w-0">
                <p className="text-[12px] font-semibold text-white truncate">Administrateur</p>
                <p className="text-[11px] text-white/40 truncate">admin@atelier-nova.fr</p>
              </div>
            )}
          </div>
          <Link
            href="/admin/login"
            className={cn(
              'flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] text-white/40 hover:text-white hover:bg-white/8 transition-all',
              collapsed && 'justify-center px-2'
            )}
          >
            <LogOut className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
            {!collapsed && <span>Déconnexion</span>}
          </Link>
        </div>
      </aside>
    </>
  )
}
