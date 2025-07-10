import AboutMe from './components/aboutMe/aboutMe'
import Projects from './components/projects/projects'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-neutral-800 gap-6 p-[4%] lg:flex lg:h-screen lg:w-screen lg:flex-row lg:gap-[20rem] ">
      <AboutMe />
      <Projects />
    </div>
  )
}
