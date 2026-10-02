import { Mail, Phone, Terminal } from "lucide-react"

const Footer = () => {
    
  return (
    <footer className="bg-base-200/25 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6">

        <a
          href="#home"
          className="flex items-center text-2xl font-bold"
        >
          <Terminal className="mr-1" />

          AKAMME <span className="text-sky-500">DEV</span>
        </a>

        <nav className="flex flex-wrap justify-center gap-6">
          <a href="#home" className="link link-hover">Accueil</a>
          <a href="#about" className="link link-hover">À Propos</a>
          <a href="#experiences" className="link link-hover">Expériences</a>
          <a href="#projects" className="link link-hover">Projets</a>
        </nav>

        <nav className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">

          <a
            href="mailto:ezechiel.akesse@epitech.eu"
            className="flex items-center gap-2 link link-hover"
          >
            <Mail className="h-4 w-4" />

            ezechiel.akesse@epitech.eu
          </a>
          <a
            href="tel:+2250758974943"
            className="flex items-center gap-2 link link-hover"
          >
            <Phone className="h-4 w-4" />
            +225 07 58 97 49 43

          </a>
        </nav>

        <aside className="text-center text-sm opacity-70">

          © {new Date().getFullYear()} AKESSE Kamenan Guy Ezechiel — Tous droits réservés
        </aside>

      </div>
    </footer>
  )
}

export default Footer