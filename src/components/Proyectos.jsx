import { useI18n } from '../i18n'
import './Proyectos.css'

const PROYECTOS = [
  {
    id: 1,
    nombre: 'Burbuja',
    descripcion: 'Chat en tiempo real con salas públicas y privadas. Sistema de roles, invitaciones y código de acceso para salas privadas.',
    tecnologias: ['Node.js', 'Socket.IO', 'React', 'Supabase', 'PostgreSQL'],
    github: 'https://github.com/moisesramirezb/Burbuja---plataforma-gratuita-de-comunicaci-n.',
    demo: 'https://burbuja-plataforma-gratuita-de-comu.vercel.app/',
    preview: '/burbuja.jpg'
  }
]

export default function Proyectos() {
  const { t } = useI18n()

  return (
    <section id="proyectos" className="proyectos">
      <div className="container">
        <h2 className="section-title">{t('proyectos.titulo')}</h2>
        <div className="proyectos-grid">
          {PROYECTOS.map(proyecto => (
            <article key={proyecto.id} className="proyecto-card">
              {proyecto.preview && (
                <div className="proyecto-preview">
                  <img src={proyecto.preview} alt={proyecto.nombre} />
                </div>
              )}
              <div className="proyecto-header">
                <h3 className="proyecto-titulo">{proyecto.nombre}</h3>
                <div className="proyecto-links">
                  {proyecto.github && (
                    <a href={proyecto.github} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  )}
                  {proyecto.demo && (
                    <a href={proyecto.demo} target="_blank" rel="noopener noreferrer" className="demo-link">
                      Ver Demo
                    </a>
                  )}
                </div>
              </div>
              <p className="proyecto-desc">{proyecto.descripcion}</p>
              <div className="proyecto-tech">
                {proyecto.tecnologias.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}