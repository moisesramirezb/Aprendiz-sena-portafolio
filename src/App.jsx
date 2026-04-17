import { ThemeProvider } from './theme'
import { I18nProvider } from './i18n'
import Header from './components/Header'
import Hero from './components/Hero'
import SobreMi from './components/SobreMi'
import Proyectos from './components/Proyectos'
import Habilidades from './components/Habilidades'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import SocialFloat from './components/SocialFloat'

export default function App() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <Header />
        <main>
          <Hero />
          <SobreMi />
          <Proyectos />
          <Habilidades />
          <Contacto />
        </main>
        <Footer />
        <SocialFloat />
      </I18nProvider>
    </ThemeProvider>
  )
}