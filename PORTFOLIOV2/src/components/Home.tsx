"use client"
import { useEffect, useState } from "react"
import { IconCloud } from "@/components/ui/icon-cloud"
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal"

const slugs = [
  "typescript", "javascript", "dart", "react", "flutter",
  "html5", "css3", "nodedotjs", "express", "nextdotjs",
  "prisma", "amazonaws", "postgresql", "firebase", "vercel",
  "docker", "git", "github", "gitlab", "visualstudiocode",
  "androidstudio", "figma", "php", "laravel", "vue.js", "tailwindcss",
  "nestjs", "mongodb", "mysql", "wordpress",
]

const Home = () => {
  const [cloudSize, setCloudSize] = useState(300)

  useEffect(() => {
    const updateSize = () => {
      const w = window.innerWidth
      if (w < 400) setCloudSize(260)
      else if (w < 640) setCloudSize(320)
      else if (w < 768) setCloudSize(380)
      else if (w < 1024) setCloudSize(450)
      else setCloudSize(600)
    }
    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}`)
  const iconSize = Math.round(cloudSize * 0.1) 

  return (
    <div
      className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10 gap-10 px-4 overflow-x-hidden w-full"
      id="Home"
    >
      <Terminal className="w-full max-w-3xl text-sm sm:text-base shrink-0">
        <TypingAnimation>&gt; whoami</TypingAnimation>
        <AnimatedSpan className="text-green-500">
          AKESSE KAMENAN GUY EZECHIEL
        </AnimatedSpan>

        <TypingAnimation>&gt; role</TypingAnimation>
        <AnimatedSpan className="text-blue-500">
          DEVELOPPEUR FULLSTACK JUNIOR
        </AnimatedSpan>

        <TypingAnimation>&gt; about</TypingAnimation>
        <AnimatedSpan>
          Passionné par l'écosystème web et mobile, je crée des applications
        </AnimatedSpan>
        <AnimatedSpan>
          fluides, robustes et centrées sur l'utilisateur.
        </AnimatedSpan>
        <AnimatedSpan>
          Mon objectif : allier qualité du code et expérience numérique impeccable.
        </AnimatedSpan>

        <TypingAnimation>&gt; skills</TypingAnimation>
        <AnimatedSpan className="text-orange-400">
          Frontend    Next.js - React - Vue.js - Tailwind CSS - wordpress
        </AnimatedSpan>
        <AnimatedSpan className="text-orange-400">
          Backend     NestJS - Laravel - Node.js - PHP
        </AnimatedSpan>
        <AnimatedSpan className="text-orange-400">
          Mobile       Flutter - React Native
        </AnimatedSpan>
        <AnimatedSpan className="text-orange-400">
          Database     MySQL - MongoDB - REST API - PostgreSQL - Firebase
        </AnimatedSpan>
        <AnimatedSpan className="text-orange-400">
          Tools        Git - GitHub - Figma - Postman
        </AnimatedSpan>

        <TypingAnimation>&gt; goal</TypingAnimation>
        <AnimatedSpan>
          Évoluer vers un rôle FullStack confirmé en contribuant à des
          projets à impact.
        </AnimatedSpan>

        <TypingAnimation className="text-muted-foreground">
          &gt; status: ready_to_build_
        </TypingAnimation>
      </Terminal>

      <div
        className="relative flex items-center justify-center shrink-0"
        style={{ width: cloudSize, height: cloudSize }}
      >
        <IconCloud
          images={images}
          size={cloudSize}
          iconSize={iconSize}
          showControl={false}
        />
      </div>
    </div>
  )
}

export default Home