import { useI18n } from '../i18n'
import './SobreMi.css'

export default function SobreMi() {
  const { t } = useI18n()

  const tags = t('sobreMi.tags')

  return (
    <section id="sobre-mi" className="sobre-mi">
      <div className="container">
        <h2 className="section-title">{t('sobreMi.titulo')}</h2>
        <div className="sobre-mi-content">
          <p>{t('sobreMi.parrafo1')}</p>
          <p>{t('sobreMi.parrafo2')}</p>
          <div className="sobre-mi-tags">
            {tags.map((tag, i) => (
              <span key={i} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}