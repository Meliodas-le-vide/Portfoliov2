import { ComicText } from "./ui/comic-text"

interface TitleProps {
  title: string
}

const Title = ({ title }: TitleProps) => {
  return (
    <div className="flex w-full justify-center">
      <ComicText
        className="text-center font-bold uppercase tracking-wide text-sky-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
        fontSize={4}
      >
        {title}
      </ComicText>
    </div>
  )
}

export default Title