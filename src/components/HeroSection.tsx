import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
        <div className="p-4 relative z-10 w-full text-center hide">
            <Spotlight
        className="-top-40 left-[-50px] md:left-60 md:-top-20 hidden md:block"
        fill="rgb(270 270 270 / 0.7)"
      />
            <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text 
            text-transparent bg-gradient-to-b from-neutral-50 to-neutral-800">Master the art of Music</h1>
            <p className="mt-4 font-normal text-base md:text-lg text-neutral-300
            max-w-lg mx-auto">Dive into our comprehensive music courses and transform your musicl journey today.
                Whether you're a beginner or looking to refine your skills, joi us to unlock your true potential.
            </p>
            <div className="mt-4">
                <Link href={'/Courses'}>
                <Button className="hover:bg-gray-900">Explore courses</Button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HeroSection