import { useI18n } from '../i18n'
import './Hero.css'

export default function Hero() {
  const { t } = useI18n()

  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero-title">
          {t('hero.saludo')} <span className="highlight">{t('hero.nombre')}</span>
        </h1>
        <p className="hero-subtitle">
          {t('hero.cargo')} | {t('hero.carrera')}
        </p>
        <p className="hero-text">
          {t('hero.descripcion')}
        </p>
        <div className="hero-cta">
          <a href="#proyectos" className="btn-primary">
            {t('hero.verProyectos')}
          </a>
          <a href="#contacto" className="btn-secondary">
            {t('hero.contactarme')}
          </a>
        </div>
      </div>
    </section>
  )
}