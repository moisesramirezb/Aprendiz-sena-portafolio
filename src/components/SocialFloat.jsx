import './SocialFloat.css'

const SOCIALES = [
  { nombre: 'GitHub', url: 'https://github.com/moisesramirezb', icon: 'github' },
  { nombre: 'LinkedIn', url: 'www.linkedin.com/in/moises-ramirez-brito-482459272', icon: 'linkedin' }
]

export default function SocialFloat() {
  return (
    <div className="social-float">
      {SOCIALES.map(red => (
        <a
          key={red.nombre}
          href={red.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label={red.nombre}
        >
          <img 
            src={`https://api.iconify.design/simple-icons/${red.icon}.svg`} 
            alt={red.nombre}
            className="social-icon"
          />
        </a>
      ))}
    </div>
  )
}