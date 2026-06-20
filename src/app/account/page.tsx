import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function AccountPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">My Account</h1>

      <div className="card p-6 mb-4">
        <h2 className="font-semibold mb-4">Verification Status</h2>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Company Email</p>
              <p className="text-xs" style={{ color: '#9ca3af' }}>{profile?.company_email}</p>
            </div>
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
              profile?.email_verified ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
            }`}>
              {profile?.email_verified ? '✓ Verified' : 'Pending'}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Phone Number</p>
              <p className="text-xs" style={{ color: '#9ca3af' }}>{profile?.phone || 'Not set'}</p>
            </div>
            {profile?.phone_verified ? (
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-100 text-green-700">✓ Verified</span>
            ) : (
              <Link href="/account/verify-phone"
                className="text-xs font-semibold px-3 py-1 rounded-full bg-orange-100 text-orange-700 hover:bg-orange-200 transition">
                Verify now →
              </Link>
            )}
          </div>
        </div>

        {profile?.can_post ? (
          <div className="mt-4 p-3 rounded-xl text-sm text-center font-medium" style={{ background: '#dcfce7', color: '#16a34a' }}>
            ✓ Fully verified — you can post job listings
          </div>
        ) : (
          <div className="mt-4 p-3 rounded-xl text-sm text-center" style={{ background: 'var(--muted)', color: '#6b7280' }}>
            Complete both verifications to post jobs
          </div>
        )}
      </div>

      {profile?.can_post && (
        <Link href="/jobs/post"
          className="block w-full text-center py-3 rounded-xl font-semibold text-white hover:opacity-90 transition"
          style={{ background: 'var(--primary)' }}>
          + Post a Job
        </Link>
      )}
    </div>
  )
}
