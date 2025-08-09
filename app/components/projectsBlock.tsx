import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNextdotjs,
  SiPrisma,
} from 'react-icons/si'
import Block from './block'
import Link from 'next/link'
import { FaFire, FaNodeJs, FaPlus } from 'react-icons/fa'
import { BiLogoPostgresql } from 'react-icons/bi'
import { FcAndroidOs } from 'react-icons/fc'
import { Skills } from './skills'

const ProjectsBlock = () => {
  const stringSkills = '<Skills />'

  return (
    <>
      <Block
        whileHover={{
          rotate: '2.5deg',
          scale: 1.1,
        }}
        className="col-span-6 border border-zinc-700 bg-zinc-800 md:col-span-3"
      >
        <Link
          href="https://github.com/Gilson96/mern-food"
          className="flex h-full flex-col items-center justify-center gap-1 text-3xl text-white"
        >
          <div className="flex items-center gap-1">
            <SiMongodb size={40} fill="oklch(62.7% 0.194 149.214)" />
            <SiExpress size={40} fill="oklch(70.4% 0.191 22.216)" />
            <SiReact size={40} fill="var(--color-blue-500) " />
            <FaNodeJs size={40} fill="oklch(76.8% 0.233 130.85)" />
          </div>
          <p className="text-sm">Mern-Stack</p>
        </Link>
      </Block>
      <Block
        whileHover={{
          rotate: '2.5deg',
          scale: 1.1,
        }}
        className="col-span-6 border border-zinc-700 bg-zinc-800 md:col-span-3"
      >
        <Link
          href="https://github.com/Gilson96/nextbnb"
          className="flex h-full flex-col items-center justify-center gap-1 text-3xl text-white"
        >
          <div className="flex items-center gap-1">
            <SiNextdotjs size={40} fill="#737373" />
            <FaPlus size={10} fill="white" />
            <SiPrisma size={40} fill="white" />
            <FaPlus size={10} fill="white" />
            <BiLogoPostgresql size={40} fill="oklch(49.6% 0.265 301.924)" />
          </div>
          <p className="text-sm">Nextjs &middot; Prisma &middot; PostgreSQL </p>
        </Link>
      </Block>
      <Block
        whileHover={{
          rotate: '2.5deg',
          scale: 1.1,
        }}
        className="col-span-6 border border-zinc-700 bg-zinc-800 md:col-span-3"
      >
        <Link
          href="https://github.com/Gilson96/nativeMDB"
          className="flex h-full flex-col items-center justify-center gap-1 text-3xl text-white"
        >
          <div className="flex items-center gap-1">
            <FcAndroidOs size={40} fill="#737373" />
            <FaPlus size={10} fill="white" />
            <FaFire size={40} fill="orange" />
          </div>
          <p className="text-sm">React-Native + Firebase </p>
        </Link>
      </Block>
      <Block
        whileHover={{
          rotate: '2.5deg',
          scale: 1.1,
        }}
        className="col-span-6 flex w-full cursor-pointer items-center justify-center border border-zinc-700 bg-zinc-800 md:col-span-3"
      >
        <Skills />
      </Block>
    </>
  )
}
export default ProjectsBlock
