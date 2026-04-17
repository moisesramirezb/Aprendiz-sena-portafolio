import { useState } from 'react'
import { useTheme } from '../theme'
import { useI18n } from '../i18n'
import './Header.css'

const FOTO_PERFIL = '/perfil.jpeg'

export default function Header() {
  const { isDark, toggleTheme } = useTheme()
  const { t, lang, toggleLang } = useI18n()
  const [showPerfil, setShowPerfil] = useState(false)

  const navItems = [
    { href: '#sobre-mi', key: 'nav.sobreMi' },
    { href: '#proyectos', key: 'nav.proyectos' },
    { href: '#habilidades', key: 'nav.habilidades' },
    { href: '#contacto', key: 'nav.contacto' }
  ]

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="header-brand">
            <img 
              src={FOTO_PERFIL} 
              alt="Foto de perfil" 
              className="header-foto"
              onClick={() => setShowPerfil(true)}
            />
            <a href="#" className="logo">Moises Ramirez</a>
          </div>
          
          <nav className="nav">
            {navItems.map(item => (
              <a key={item.href} href={item.href} className="nav-link">
                {t(item.key)}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <button 
              className="lang-toggle" 
              onClick={toggleLang}
              aria-label="Cambiar idioma"
            >
              {lang.toUpperCase()}
            </button>
            <button 
              className="theme-toggle" 
              onClick={toggleTheme}
              aria-label={isDark ? 'Modo claro' : 'Modo oscuro'}
            >
              {isDark ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </header>

      {showPerfil && (
        <div className="perfil-modal" onClick={() => setShowPerfil(false)}>
          <div className="perfil-modal-content" onClick={e => e.stopPropagation()}>
            <button className="perfil-modal-close" onClick={() => setShowPerfil(false)}>×</button>
            <img src={FOTO_PERFIL} alt="Foto de perfil" className="perfil-modal-img" />
            <h3 className="perfil-modal-nombre">Moises Ramirez</h3>
            <p className="perfil-modal-especialidad">
              {lang === 'es' ? 'Analisis y Desarrollo de Software' : 'Analysis and Software Development'}
            </p>
          </div>
        </div>
      )}
    </>
  )
}