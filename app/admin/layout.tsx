'use client'

import * as React from 'react'
import { Sidebar } from '@/components/admin/Sidebar'
import { TopBar } from '@/components/admin/TopBar'
import { ToastContainer } from '@/components/ui/Toast'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar mobileOpen={mobileOpen} onMobileClose={() => setMobileOpen(false)} />

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 lg:ml-[240px] transition-all duration-300">
        <TopBar onMenuClick={() => setMobileOpen(true)} />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>

      <ToastContainer />
    </div>
  )
}
