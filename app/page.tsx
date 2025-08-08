import AboutMe from './components/aboutMe/aboutMe'
import Projects from './components/projects/projects'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-neutral-800 gap-6 p-[4%] md:flex md:h-screen md:w-screen md:flex-row md:gap-0 md:justify-between">
      <div>
        <AboutMe />
      </div>
      <div>
        <Projects />
      </div>
    </div>
  )
}
