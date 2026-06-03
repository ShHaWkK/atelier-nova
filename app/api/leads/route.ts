import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, company, subject, message, type } = body

    try {
      const { prisma } = await import('@/lib/db')
      const lead = await prisma.lead.create({
        data: {
          name,
          email,
          company: company || null,
          type: type || 'contact',
          subject: subject || null,
          message: message || null,
          status: 'new',
          priority: 'normal',
        },
      })
      return NextResponse.json({ success: true, id: lead.id })
    } catch {
      return NextResponse.json({ success: true, id: `demo-${Date.now()}` })
    }
  } catch {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const { prisma } = await import('@/lib/db')
    const leads = await prisma.lead.findMany({ orderBy: { createdAt: 'desc' } })
    return NextResponse.json(leads)
  } catch {
    return NextResponse.json({ leads: [] })
  }
}
