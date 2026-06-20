'use client'
import { useLocale } from '@/lib/locale-context'
import { LOCALES } from '@/lib/i18n'

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale()

  return (
    <div className="flex items-center gap-1">
      {LOCALES.map(({ code, label, flag }) => (
        <button
          key={code}
          onClick={() => setLocale(code)}
          title={label}
          className="flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium transition"
          style={{
            background: locale === code ? 'var(--primary-light)' : 'transparent',
            color: locale === code ? 'var(--primary)' : 'var(--foreground)',
            opacity: locale === code ? 1 : 0.6,
          }}
        >
          <span>{flag}</span>
          <span className="hidden sm:inline">{label}</span>
        </button>
      ))}
    </div>
  )
}
