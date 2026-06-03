import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { meetingType, date, time, name, email, phone, message } = body

    try {
      const { prisma } = await import('@/lib/db')
      const booking = await prisma.booking.create({
        data: {
          clientName: name,
          email,
          phone: phone || null,
          meetingType,
          date: new Date(date).toISOString().split('T')[0],
          time,
          message: message || null,
          status: 'planned',
        },
      })
      return NextResponse.json({ success: true, id: booking.id })
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
    const bookings = await prisma.booking.findMany({ orderBy: { createdAt: 'desc' } })
    return NextResponse.json(bookings)
  } catch {
    return NextResponse.json({ bookings: [] })
  }
}
