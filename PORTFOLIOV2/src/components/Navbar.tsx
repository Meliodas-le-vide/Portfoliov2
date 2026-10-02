import { Terminal } from "lucide-react";

export default function Navbar() {

  return (
    <div className="relative flex justify-center md:justify-between items-center p-4 bg-base-200/25">
      <a
        href="#home"
        className="flex items-center text-4xl font-bold md:text-xl"
      >
        <Terminal className="mr-2" />
        AKAMME <span className="text-sky-500 font-bold">DEV</span>
      </a>

      <ul className="hidden md:flex space-x-4">
        <li>
          <a href="#home" className="btn btn-md btn-ghost text-sm">
            Accueil
          </a>
        </li>

        <li>
          <a href="#about" className="btn btn-md btn-ghost text-sm">
            À Propos
          </a>
        </li>

        <li>
          <a href="#experiences" className="btn btn-md btn-ghost text-sm">
             Expériences
          </a>
        </li>

        <li>
          <a href="#projects" className="btn btn-md btn-ghost text-sm">
            Projets
          </a>
        </li>
      </ul>
    </div>
  )
}