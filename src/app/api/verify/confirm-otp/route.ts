import { NextRequest, NextResponse } from 'next/server'
import { createClient, createServiceClient } from '@/lib/supabase/server'

export async function POST(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { phone, otp } = await req.json()
  if (!phone || !otp) return NextResponse.json({ error: 'Missing fields' }, { status: 400 })

  const service = await createServiceClient()
  const { data: profile } = await service
    .from('profiles')
    .select('phone_otp, phone_otp_expires_at, phone')
    .eq('id', user.id)
    .single()

  if (!profile) return NextResponse.json({ error: 'Profile not found' }, { status: 404 })

  if (profile.phone !== phone) {
    return NextResponse.json({ error: 'Phone number mismatch' }, { status: 400 })
  }

  if (profile.phone_otp !== otp) {
    return NextResponse.json({ error: 'Incorrect code' }, { status: 400 })
  }

  if (new Date(profile.phone_otp_expires_at) < new Date()) {
    return NextResponse.json({ error: 'Code has expired — please request a new one' }, { status: 400 })
  }

  await service.from('profiles').update({
    phone_verified: true,
    phone_otp: null,
    phone_otp_expires_at: null,
  }).eq('id', user.id)

  return NextResponse.json({ ok: true })
}
