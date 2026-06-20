import { NextRequest, NextResponse } from 'next/server'
import { createClient, createServiceClient } from '@/lib/supabase/server'
import twilio from 'twilio'

const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)

export async function POST(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { phone } = await req.json()
  if (!phone || !phone.startsWith('+')) {
    return NextResponse.json({ error: 'Phone number must include country code (e.g. +15141234567)' }, { status: 400 })
  }

  // Generate 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString()
  const expires = new Date(Date.now() + 10 * 60 * 1000).toISOString() // 10 min

  const service = await createServiceClient()

  // Check phone not already used by another account
  const { data: existing } = await service
    .from('profiles')
    .select('id')
    .eq('phone', phone)
    .eq('phone_verified', true)
    .neq('id', user.id)
    .single()

  if (existing) {
    return NextResponse.json({ error: 'This phone number is already registered to another account' }, { status: 400 })
  }

  // Store OTP
  await service.from('profiles').update({
    phone,
    phone_otp: otp,
    phone_otp_expires_at: expires,
  }).eq('id', user.id)

  // Send SMS
  try {
    await twilioClient.messages.create({
      body: `Your Buddie verification code is: ${otp}. Valid for 10 minutes.`,
      from: process.env.TWILIO_PHONE_NUMBER!,
      to: phone,
    })
  } catch (err: any) {
    return NextResponse.json({ error: 'Failed to send SMS: ' + err.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
