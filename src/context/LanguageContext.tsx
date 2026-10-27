
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

import { en } from '../i18n/en'
import { es } from '../i18n/es'

export type Language = 'en' | 'es'

const translations = { en, es }

interface LanguageContextValue {
  language: Language
  toggleLanguage: () => void
  t: typeof en | typeof es
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({
  children,
}: {
  children: ReactNode
}) {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      return localStorage.getItem('portfolio-language') === 'es'
        ? 'es'
        : 'en'
    } catch {
      return 'en'
    }
  })

  const toggleLanguage = () => {
    setLanguage((current) => (current === 'en' ? 'es' : 'en'))
  }

  useEffect(() => {
    document.documentElement.lang = language

    try {
      localStorage.setItem('portfolio-language', language)
    } catch {
      // The website still works if storage is unavailable.
    }
  }, [language])

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error(
      'useLanguage must be used inside LanguageProvider'
    )
  }

  return context
}
