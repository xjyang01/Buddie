import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import JobPostForm from './JobPostForm'

export default async function PostJobPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: profile } = await supabase
    .from('profiles')
    .select('can_post, email_verified, phone_verified')
    .eq('id', user.id)
    .single()

  if (!profile?.can_post) {
    return (
      <div className="max-w-md mx-auto mt-12">
        <div className="card p-8 text-center">
          <div className="text-3xl mb-4">🔒</div>
          <h2 className="font-bold text-lg mb-2">Verification Required</h2>
          <p className="text-sm mb-4" style={{ color: '#6b7280' }}>
            You need to verify both your company email and phone number before posting jobs.
          </p>
          <div className="flex flex-col gap-2 text-sm mb-6">
            <div className="flex items-center gap-2">
              <span>{profile?.email_verified ? '✅' : '⏳'}</span>
              <span>Company email verified</span>
            </div>
            <div className="flex items-center gap-2">
              <span>{profile?.phone_verified ? '✅' : '⏳'}</span>
              <span>Phone number verified</span>
            </div>
          </div>
          <a href="/account"
            className="inline-block px-6 py-2 rounded-xl text-sm font-semibold text-white hover:opacity-90 transition"
            style={{ background: 'var(--primary)' }}>
            Complete Verification →
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">Post a Job</h1>
      <p className="text-sm mb-6" style={{ color: '#9ca3af' }}>
        Your listing will be visible immediately to all Buddie users.
      </p>
      <JobPostForm />
    </div>
  )
}
