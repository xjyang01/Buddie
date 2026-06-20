export default function Loading() {
  return (
    <div className="animate-pulse">
      <div className="flex items-center justify-between mb-6">
        <div className="h-7 w-24 rounded-lg" style={{ background: 'var(--muted)' }} />
        <div className="h-9 w-28 rounded-xl" style={{ background: 'var(--muted)' }} />
      </div>
      <div className="flex flex-col gap-4">
        {[1,2,3].map(i => (
          <div key={i} className="card p-5 flex flex-col gap-3">
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-2">
                <div className="h-5 w-48 rounded" style={{ background: 'var(--muted)' }} />
                <div className="h-4 w-32 rounded" style={{ background: 'var(--muted)' }} />
                <div className="h-3 w-40 rounded" style={{ background: 'var(--muted)' }} />
              </div>
              <div className="h-9 w-16 rounded-xl" style={{ background: 'var(--muted)' }} />
            </div>
            <div className="h-3 w-full rounded" style={{ background: 'var(--muted)' }} />
          </div>
        ))}
      </div>
    </div>
  )
}
