"use client"
import { IconCloud } from "@/components/ui/icon-cloud";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";

const slugs = [
  "typescript", "javascript", "dart", "java", "react", "flutter",
  "android", "html5", "css3", "nodedotjs", "express", "nextdotjs",
  "prisma", "amazonaws", "postgresql", "firebase", "nginx", "vercel",
  "testinglibrary", "jest", "cypress", "docker", "git",
  "github", "gitlab", "visualstudiocode", "androidstudio", "sonarqube", "figma",
  "unity","php","laravel", "vue.js", "tailwindcss", "nestjs", "mongodb", "mysql", "wordpress"
];

const Home = () => {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div
      className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10 gap-10 px-4 overflow-x-hidden"
      id="Home"
    >

      <Terminal className="w-full max-w-3xl text-base shrink-0">
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

 
      <div className="relative flex items-center justify-center shrink-0">
        <IconCloud images={images} size={600} iconSize={60} />
      </div>
    </div>
  );
};

export default Home;