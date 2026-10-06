import Title from "./Title"
import img2 from "../assets/projects/avea.png"
import img3 from "../assets/projects/movies.png"
import img4 from "../assets/projects/post-it.png"
import img1 from "../assets/projects/portfolio.png"
import { Code, ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "AVEA — Aller Vivre en Afrique",
    description:
      "Site permettant aux personnes de facilité leurs installation en Côte d'Ivoire. Conception de l'interface responsive, intégration WordPress et personnalisation du thème selon les besoins du client.",
    technologies: ["WordPress", "Ionos", "PHP"],
    demoLink: "https://allervivreenafrique.com/",
    image: img2,
  },

  {
    id: 2,
    title: "Portfolio Personnel",
    description:
      "Mon prémier portfolio développé avec Next.js et Tailwind CSS. Interface moderne avec animations, terminal interactif, particules, et design responsive. Déployé sur Vercel.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    demoLink: "https://portfolio-guyezechiel.vercel.app/",
    repoLink: "https://github.com/Meliodas-le-vide/Portfolio", 
    image: img1,
  },

  {
    id: 3,
    title: "My Post-it — Gestion de Notes",
    description:
      "Application de gestion de notes façon Post-it. Interface responsive avec Vue.js et Tailwind CSS, connectée à une API REST via Axios pour créer, modifier et supprimer des notes en temps réel.",
    technologies: ["Vue.js", "Tailwind CSS", "TypeScript", "REST API"],
    demoLink: "https://my-postit-iota.vercel.app/",
    repoLink: "#", 
    image: img4,
  },

  {
    id: 4,
    title: "GorgeMovie — Streaming",
    description:
      "Application de streaming connectée à l'API TMDB. Frontend Next.js + Tailwind, backend NestJS avec modélisation MongoDB. Développement en méthode Agile avec API REST sécurisée.",
    technologies: ["Next.js", "NestJS", "MongoDB", "TMDB API", "Tailwind CSS"],
    demoLink: "https://gorge-movie.vercel.app/",
    repoLink: "#", 
    image: img3,
  },
]

export const Projects = () => {
  return (
    <section id="projects" className="relative w-full px-4 py-16 md:py-24">
      <Title title="Mes projets" />

      <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group flex h-full flex-col overflow-hidden rounded-2xl bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >

            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

   
            <div className="flex flex-1 flex-col p-5">

              <h3 className="mb-2 text-lg font-bold md:text-xl">
                {project.title}
              </h3>

              <p className="mb-4 text-sm leading-relaxed opacity-80">
                {project.description}
              </p>

         
              <div className="mb-4 flex flex-wrap gap-2">

                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-full border border-base-300 bg-base-200/60 px-2.5 py-0.5 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

         
              <div className="mt-auto flex gap-2">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-primary flex-1"
                >
                  Demo
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-neutral flex-1"
                >
                  Code
                  <Code className="h-4 w-4" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}