import { ComicText } from "./ui/comic-text"
// import { SparklesText } from "./ui/sparkles-text"

interface TitleProps {
    title: string
}

const Title = ({title} : TitleProps) => {
  return ( 
               <h1 >
                  {/* <SparklesText className="font-bold  uppercase text-3xl text-center text-sky-500"> {title} </SparklesText> */}
                   <ComicText  className="font-bold  uppercase text-2xl text-center text-sky-500" fontSize={4}>{title}</ComicText>
               </h1>  
  )
}

export default Title