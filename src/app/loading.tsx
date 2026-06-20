export default function Loading() {
  return (
    <div className="flex flex-col gap-8 animate-pulse">
      {/* Hero skeleton */}
      <div className="rounded-2xl h-40" style={{ background: 'linear-gradient(135deg, #fed7aa, #fef3c7)' }} />
      {/* News skeleton */}
      <div className="flex flex-col gap-3">
        <div className="h-5 w-32 rounded-lg" style={{ background: 'var(--muted)' }} />
        {[1,2,3].map(i => (
          <div key={i} className="card p-4 flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl shrink-0" style={{ background: 'var(--muted)' }} />
            <div className="flex-1 flex flex-col gap-2">
              <div className="h-4 w-3/4 rounded" style={{ background: 'var(--muted)' }} />
              <div className="h-3 w-full rounded" style={{ background: 'var(--muted)' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
