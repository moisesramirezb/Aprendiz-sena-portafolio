import { createContext, useContext, useState, useEffect } from 'react'
import es from './es.json'
import en from './en.json'

const translations = { es, en }

const I18nContext = createContext()

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('lang') || 'es'
  })

  useEffect(() => {
    localStorage.setItem('lang', lang)
  }, [lang])

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[lang]
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
  }

  const toggleLang = () => {
    setLang(prev => prev === 'es' ? 'en' : 'es')
  }

  return (
    <I18nContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  return useContext(I18nContext)
}