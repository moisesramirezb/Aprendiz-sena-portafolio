import { useI18n } from '../i18n'
import './Footer.css'

export default function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          &copy; {year} Moises Ramirez. {t('footer.derechos')}
        </p>
      </div>
    </footer>
  )
}