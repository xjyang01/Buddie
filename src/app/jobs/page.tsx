import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import TagPill from '@/components/TagPill'
import { formatDistanceToNow } from 'date-fns'

export default async function JobsPage() {
  const supabase = await createClient()

  const { data: jobs } = await supabase
    .from('job_postings')
    .select('*')
    .eq('status', 'active')
    .order('created_at', { ascending: false })

  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <h1 className="text-2xl font-bold">Jobs 💼</h1>
        <Link href="/jobs/post"
          className="px-4 py-2 rounded-xl text-sm font-semibold text-white hover:opacity-90 transition"
          style={{ background: 'var(--primary)' }}>
          + Post a Job
        </Link>
      </div>
      <p className="text-sm mb-6" style={{ color: '#9ca3af' }}>
        Opportunities posted by verified employers
      </p>

      {jobs && jobs.length > 0 ? (
        <div className="flex flex-col gap-4">
          {jobs.map((job) => (
            <div key={job.id} className="card p-5 flex flex-col gap-3 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-semibold text-lg">{job.title}</p>
                  <p className="text-sm font-medium" style={{ color: 'var(--primary)' }}>{job.company}</p>
                  <p className="text-xs mt-0.5" style={{ color: '#9ca3af' }}>
                    {job.location} · {job.job_type} · {formatDistanceToNow(new Date(job.created_at), { addSuffix: true })}
                  </p>
                </div>
                {job.apply_url ? (
                  <a href={job.apply_url} target="_blank" rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl text-sm font-semibold text-white shrink-0 hover:opacity-90 transition"
                    style={{ background: 'var(--primary)' }}>
                    Apply
                  </a>
                ) : (
                  <span className="px-4 py-2 rounded-xl text-sm font-semibold shrink-0"
                    style={{ background: 'var(--muted)', color: '#9ca3af' }}>
                    See description
                  </span>
                )}
              </div>
              <p className="text-sm" style={{ color: '#6b7280' }}>{job.description}</p>
              {job.tags && job.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {job.tags.map((tag: string) => <TagPill key={tag} tag={tag} />)}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="card p-12 text-center">
          <p className="text-3xl mb-3">💼</p>
          <p className="font-semibold mb-1">No job listings yet</p>
          <p className="text-sm mb-4" style={{ color: '#9ca3af' }}>Be the first verified employer to post a job on Buddie</p>
          <Link href="/jobs/post"
            className="inline-block px-6 py-2 rounded-xl text-sm font-semibold text-white hover:opacity-90 transition"
            style={{ background: 'var(--primary)' }}>
            Post a Job →
          </Link>
        </div>
      )}
    </div>
  )
}
