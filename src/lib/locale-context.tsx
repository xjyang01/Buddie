'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Locale, translations, t as tFn } from './i18n'

interface LocaleContextValue {
  locale: Locale
  setLocale: (l: Locale) => void
  t: (key: string) => string
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: 'en',
  setLocale: () => {},
  t: (key) => translations['en'][key] ?? key,
})

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')

  useEffect(() => {
    const saved = localStorage.getItem('buddie_locale') as Locale | null
    if (saved && ['en', 'fr', 'zh'].includes(saved)) setLocaleState(saved)
  }, [])

  function setLocale(l: Locale) {
    setLocaleState(l)
    localStorage.setItem('buddie_locale', l)
  }

  const t = (key: string) => tFn(locale, key)

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  return useContext(LocaleContext)
}
