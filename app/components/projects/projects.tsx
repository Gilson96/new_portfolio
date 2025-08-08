import { projects } from '@/app/projects'
import Project from './project'
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNextdotjs,
  SiPrisma,
} from 'react-icons/si'
import { FaFire, FaNodeJs, FaPlus } from 'react-icons/fa'
import { FcAndroidOs, FcPhoneAndroid } from 'react-icons/fc'
import { Skills } from './skills'

function Projects() {
  const projectsfiltered = (id: number) => {
    return projects.filter((project) => project.id === id)
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="pb-[1rem] text-2xl font-bold text-white text-shadow-neutral-500 text-shadow-sm">
        Projects & Skills
      </p>
      <div className="grid grid-cols-2 gap-4 md:w-[20rem]">
        {projectsfiltered(1).map((project) => (
          <Project mobileProject={false} key={project.id} project={project}>
            <SiMongodb size={30} fill="oklch(62.7% 0.194 149.214)" />
            <SiExpress size={30} fill="oklch(70.4% 0.191 22.216)" />
            <SiReact size={30} fill="var(--color-blue-500) " />
            <FaNodeJs size={30} fill="oklch(76.8% 0.233 130.85)" />
          </Project>
        ))}
        {projectsfiltered(3).map((project) => (
          <Project mobileProject={true} key={project.id} project={project}>
            <FcPhoneAndroid size={30} />
            <FaPlus size={15} fill="white" />
            <FcAndroidOs size={30} />
            <FaPlus size={15} fill="white" />
            <FaFire size={30} fill={'orange'} />
          </Project>
        ))}
        {projectsfiltered(2).map((project) => (
          <Project mobileProject={false} key={project.id} project={project}>
            <SiNextdotjs size={30} fill="#737373" />
            <div className="px-0.5"></div>
            <FaPlus size={15} fill="white" />
            <div className="px-0.5"></div>
            <SiPrisma size={30} fill="white" />
          </Project>
        ))}
        <Skills />
      </div>
    </div>
  )
}

export default Projects
