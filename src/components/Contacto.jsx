import { useState } from 'react'
import { useI18n } from '../i18n'
import './Contacto.css'

const CONTACTO = {
  email: 'moisesacces@gmail.com',
  linkedin: 'https://www.linkedin.com/in/moises-ramirez-brito-482459272/',
  github: 'https://github.com/moisesramirezb'
}

export default function Contacto() {
  const [enviado, setEnviado] = useState(false)
  const { t } = useI18n()

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const nombre = form.nombre.value
    const mensaje = form.mensaje.value
    
    const subject = encodeURIComponent(`Portafolio - Contacto de ${nombre}`)
    const body = encodeURIComponent(`Nombre: ${nombre}\n\nMensaje:\n${mensaje}`)
    
    window.location.href = `mailto:${CONTACTO.email}?subject=${subject}&body=${body}`
    setEnviado(true)
  }

  return (
    <section id="contacto" className="contacto">
      <div className="container">
        <h2 className="section-title">{t('contacto.titulo')}</h2>
        <div className="contacto-content">
          <p className="contacto-text">
            {t('contacto.descripcion')}
          </p>
          
          {enviado ? (
            <div className="contacto-exito">
              <p>{t('contacto.enviado')}</p>
              <button onClick={() => setEnviado(false)} className="btn-secondary">
                {t('contacto.enviarOtro')}
              </button>
            </div>
          ) : (
            <form className="contacto-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="nombre" 
                  placeholder={t('contacto.nombrePlaceholder')} 
                  required 
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="mensaje" 
                  placeholder={t('contacto.mensajePlaceholder')} 
                  required 
                  className="form-input form-textarea"
                  rows={4}
                />
              </div>
              <button type="submit" className="btn-primary">
                {t('contacto.enviar')}
              </button>
            </form>
          )}

          <div className="contacto-links">
            <a href={CONTACTO.linkedin} target="_blank" rel="noopener noreferrer" className="contacto-social">
              {t('contacto.linkedin')}
            </a>
            <a href={CONTACTO.github} target="_blank" rel="noopener noreferrer" className="contacto-social">
              {t('contacto.github')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}