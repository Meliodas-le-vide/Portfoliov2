import Title from "./Title"
import moi from "../assets/moi.png"
import { Code2, Gamepad2, Server, Smartphone } from "lucide-react"

const aboutInfos = [
  {
    id: 1,
    title: "Frontend",
    description:
      "Je transforme des idées en interfaces modernes, responsives et intuitives avec React, VueJS, TypeScript et Tailwind CSS.",
    icon: <Code2 className="h-7 w-7 text-sky-500" />,
    accentColor: "border-sky-500",
    badges: ["React", "Vue.js", "TypeScript", "Tailwind"],
  },
  {
    id: 2,
    title: "Backend & APIs",
    description:
      "Je conçois des APIs REST et la logique serveur avec Node.js, PHP, Laravel, Express et NestJS, en travaillant avec PostgreSQL, MySQL et MongoDB.",
    icon: <Server className="h-7 w-7 text-emerald-500" />,
    accentColor: "border-emerald-500",
    badges: ["Node.js", "Laravel", "NestJS", "PostgreSQL"],
  },
  {
    id: 3,
    title: "Applications mobiles",
    description:
      "Je développe des applications mobiles multiplateformes avec Flutter et React Native, de l'interface jusqu'à la connexion avec le backend.",
    icon: <Smartphone className="h-7 w-7 text-violet-500" />,
    accentColor: "border-violet-500",
    badges: ["Flutter", "React Native", "Dart"],
  },
  {
    id: 4,
    title: "Développement de jeux",
    description:
      "Je découvre le développement de jeux vidéo avec Unity et j'apprends progressivement à créer des expériences interactives.",
    icon: <Gamepad2 className="h-7 w-7 text-amber-500" />,
    accentColor: "border-amber-500",
    badges: ["Unity", "C#"],
  },
]

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-linear-to-br from-base-100 via-base-200/40 to-base-100 px-4 py-16 md:py-24"
    >
      <div className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 md:h-96 md:w-96 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 md:h-96 md:w-96 rounded-full bg-sky-500/10 blur-3xl" />

      <Title title="À Propos" />

      <div className="relative mx-auto mt-12 flex max-w-6xl flex-col items-center gap-10 md:flex-row md:items-start md:gap-16">
        <div className="flex w-full shrink-0 justify-center md:w-auto md:sticky md:top-24">
          <div className="relative">
            <div className="absolute inset-0 -rotate-6 rounded-2xl bg-linear-to-br from-sky-500/40 to-sky-200/20 blur-sm" />

            <img
              src={moi}
              alt="Photo de AKESSE Kamenan Guy Ezechiel"
              loading="lazy"
              className="relative h-56 w-56 rounded-2xl object-cover shadow-xl ring-1 ring-base-300 transition-transform duration-300 hover:scale-[1.02] sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96"
            />

            <div className="absolute -bottom-3 -right-3 rounded-xl bg-base-100 px-3 py-1.5 text-xs font-semibold shadow-md ring-1 ring-base-300">
               Salut, moi c'est Guy
            </div>
          </div>
        </div>

      
        <div className="w-full max-w-2xl space-y-4">
          {aboutInfos.map((section) => (
            <div
              key={section.id}
              className={`group flex flex-col items-center gap-3 rounded-xl border-l-4 border-transparent bg-base-100 p-4 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:p-5 ${section.accentColor.replace(
                "border-",
                "hover:border-"
              )}`}
            >
              <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:items-start">
                <div className="shrink-0 rounded-lg bg-base-200/50 p-2 transition-transform duration-300 group-hover:scale-110">
                  {section.icon}
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <h3 className="mb-1 text-base font-bold sm:text-lg md:text-xl">
                    {section.title}
                  </h3>
                  <p className="text-sm leading-relaxed opacity-80">
                    {section.description}
                  </p>

                  <div className="mt-3 flex flex-wrap justify-center gap-2 sm:justify-start">
                    {section.badges.map((badge) => (
                      <span
                        key={badge}
                        className="rounded-full border border-base-300 bg-base-200/60 px-2.5 py-0.5 text-xs font-medium opacity-80"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About