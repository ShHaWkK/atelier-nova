import { Header } from '@/components/public/Header'
import { Footer } from '@/components/public/Footer'
import { ToastContainer } from '@/components/ui/Toast'

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <ToastContainer />
    </>
  )
}
