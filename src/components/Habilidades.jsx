import { useI18n } from '../i18n'
import './Habilidades.css'

const HABILIDADES = [
  'javascript',
  'react',
  'node.js',
  'express',
  'socketdotio',
  'postgresql',
  'mongodb',
  'supabase',
  'git',
  'html5',
  'css3'
]

export default function Habilidades() {
  const { t } = useI18n()

  return (
    <section id="habilidades" className="habilidades">
      <div className="container">
        <h2 className="section-title">{t('habilidades.titulo')}</h2>
        <div className="habilidades-grid">
          {HABILIDADES.map(icon => (
            <div key={icon} className="habilidad-card">
              <img
                src={`https://cdn.simpleicons.org/${icon}`}
                alt={icon}
                className="habilidad-icon"
              />
              <span className="habilidad-nombre">
                {icon === 'node.js' ? 'Node.js' : 
                 icon === 'socketdotio' ? 'Socket.IO' :
                 icon === 'html5' ? 'HTML' :
                 icon === 'css3' ? 'CSS' : icon}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}