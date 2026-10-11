import Title from "./Title"
import imgHTML from "../assets/technologies/html.png"
import imgCSS from "../assets/technologies/css.png"
import imgPHP from "../assets/technologies/php.png"
import imgJS from "../assets/technologies/js.png"
import imgTAILWIND from "../assets/technologies/tailwind.png"
import imgREACT from "../assets/technologies/react.png"
import imgVUEJS from "../assets/technologies/vuejs.png"
import imgNEXTJS from "../assets/technologies/nextjs.png"
import imgLARAVEL from "../assets/technologies/laravel.png"
import imgNODEJS from "../assets/technologies/node.png"
import imgMYSQL from "../assets/technologies/mysql.png"
import imgPOSTGRESQL from "../assets/technologies/posgresql.png"
import imgMONGODB from "../assets/technologies/mongodb.png"
import imgFLUTTER from "../assets/technologies/flutter.png"
import imgGITHUB from "../assets/technologies/github.svg"
import imgFIGMA from "../assets/technologies/figma.png"
import imgNESTJS from "../assets/technologies/nestjs.png"
import imgPOSTMAN from "../assets/technologies/postman.png"
import imgWORDPRESS from "../assets/technologies/wordpress.png"

import weCodeImg from "../assets/compagnies/epitech.png"
import cercoImg from "../assets/compagnies/cerco.png"

const skills = [
  { id: 1, name: "HTML", image: imgHTML },
  { id: 2, name: "CSS", image: imgCSS },
  { id: 3, name: "PHP", image: imgPHP },
  { id: 4, name: "JavaScript", image: imgJS },
  { id: 5, name: "Tailwind CSS", image: imgTAILWIND },
  { id: 6, name: "React", image: imgREACT },
  { id: 7, name: "Vue.js", image: imgVUEJS },
  { id: 8, name: "Next.js", image: imgNEXTJS },
  { id: 9, name: "Laravel", image: imgLARAVEL },
  { id: 10, name: "Node.js", image: imgNODEJS },
  { id: 11, name: "NestJS", image: imgNESTJS },
  { id: 12, name: "MySQL", image: imgMYSQL },
  { id: 13, name: "PostgreSQL", image: imgPOSTGRESQL },
  { id: 14, name: "MongoDB", image: imgMONGODB },
  { id: 15, name: "Flutter", image: imgFLUTTER },
  { id: 16, name: "GitHub", image: imgGITHUB },
  { id: 17, name: "Figma", image: imgFIGMA },
  { id: 18, name: "Postman", image: imgPOSTMAN },
  { id: 19, name: "Wordpress", image: imgWORDPRESS },
]

const XP = [
  {
    id: 1,
    role: "Formation Développeur FullStack",
    company: "WeCode",
    period: "Janvier 2026 – Juin 2026",
    description: [
      "Cursus intensif de 6 mois en développement web et mobile, couvrant les technologies front-end et back-end, la gestion de bases de données, le déploiement d'applications et les bonnes pratiques de développement.",
      "Projets pratiques et travail en équipe pour renforcer les compétences techniques et la collaboration.",
      "Préparation à l'entrée sur le marché du travail avec des compétences recherchées par les employeurs.",
    ],
    image: weCodeImg,
  },
  {
    id: 2,
    role: "Étudiant en Licence 2 IDA",
    company: "Institut Cerco d'Abidjan",
    period: "Septembre 2023 – Juillet 2025",
    description: [
      "Design & UI/UX : réalisation de maquettes d'application et conception d'interfaces utilisateur modernes et fluides avec Flutter et Dart.",
      "Développement de jeux vidéo : création d'un prototype et reproduction des mécanismes du jeu Angry Birds avec Unity et C#.",
    ],
    image: cercoImg,
  },
]

const Experience = () => {
  return (
    <section
      id="experiences"
      className="relative w-full overflow-hidden px-4 py-16 md:py-24"
    >
      <Title title="Mes expériences" />

      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-stretch justify-center gap-12 lg:flex-row lg:items-start lg:gap-16">
        <div className="w-full lg:w-1/2">
          <h3 className="mb-6 text-center text-lg font-semibold opacity-80 lg:text-left">
            Technologies & outils
          </h3>

          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-5">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="group flex flex-col items-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-sky-500/70 p-1.5 transition-all duration-300 group-hover:scale-110 group-hover:border-sky-500 group-hover:shadow-lg group-hover:shadow-sky-500/30 sm:h-16 sm:w-16 sm:p-2 md:h-18 md:w-18 lg:h-16 lg:w-16 xl:h-20 xl:w-20">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    loading="lazy"
                    className="h-full w-full rounded-full object-contain"
                  />
                </div>

                <span className="mt-2 text-center text-[10px] font-medium opacity-80 sm:text-xs">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <h3 className="mb-6 text-center text-lg font-semibold opacity-80 lg:text-left">
            Expériences & Formations
          </h3>

          <div className="flex flex-col space-y-4">
            {XP.map((xp) => (
              <div
                key={xp.id}
                className="flex flex-col rounded-xl bg-base-100 p-4 shadow-md transition-shadow duration-300 hover:shadow-lg sm:p-5"
              >
                <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:items-center sm:text-left">
                  <img
                    src={xp.image}
                    alt={xp.company}
                    loading="lazy"
                    className="h-14 w-14 shrink-0 rounded-lg object-cover sm:h-16 sm:w-16"
                  />

                  <div className="sm:ml-4">
                    <h4 className="text-base font-bold text-orange-400 md:text-lg">
                      {xp.role}
                    </h4>
                    <p className="text-sm font-medium">{xp.company}</p>
                    <span className="text-xs opacity-70">{xp.period}</span>
                  </div>
                </div>

                <ul className="mt-3 list-disc space-y-1 pl-5 text-xs opacity-90 sm:ml-4 sm:pl-4 sm:text-sm">
                  {xp.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience