import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import useScreenSize from '@/lib/useScreenSize'
import { BiLogoPostgresql, BiLogoTypescript } from 'react-icons/bi'
import { FaNodeJs, FaFire } from 'react-icons/fa'
import { FcAndroidOs } from 'react-icons/fc'
import { RiTailwindCssFill } from 'react-icons/ri'
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiPrisma,
  SiReact,
} from 'react-icons/si'
import { TbBrandRedux } from 'react-icons/tb'
import Block from './block'

export function Skills() {
  const stringSkills = '<Skills />'
  const screenSize = useScreenSize()
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Block
          whileHover={{
            rotate: '2.5deg',
            scale: 1.1,
          }}
          className="col-span-6 flex w-full cursor-pointer items-center justify-center border border-zinc-700 bg-zinc-800 md:col-span-3"
        >
          <p className="text-base font-bold text-white text-shadow-neutral-500 text-shadow-sm">
            {stringSkills}
          </p>
        </Block>
      </PopoverTrigger>

      <PopoverContent
        side={screenSize.width < 767 ? 'top' : 'left'}
        className="w-[20rem] rounded-xl border-zinc-700 bg-zinc-900 shadow-md"
      >
        <div className="flex flex-wrap items-center justify-around gap-6">
          <div className="flex flex-col items-center justify-center">
            <BiLogoTypescript size={50} fill="oklch(80.9% 0.105 251.813)" />
            <p className="text-white">Typescript</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <SiMongodb size={50} fill="oklch(62.7% 0.194 149.214)" />
            <p className="text-white">MongoDB</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <SiExpress size={50} fill="oklch(70.4% 0.191 22.216)" />
            <p className="text-white">ExpressJs</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <SiReact size={50} fill="var(--color-blue-500)" />
            <p className="text-white">React</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <FaNodeJs size={50} fill="oklch(76.8% 0.233 130.85)" />
            <p className="text-white">NodeJs</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <FcAndroidOs size={50} />
            <p className="text-white">Android</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <FaFire size={50} fill="orange" />
            <p className="text-white">Firebase</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <SiNextdotjs size={50} fill="white" />
            <p className="text-white">Nextjs</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <SiPrisma size={50} fill="white" />
            <p className="text-white">Prisma</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <RiTailwindCssFill size={50} fill="oklch(84.5% 0.143 164.978)" />
            <p className="text-white">Tailwindcss</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <TbBrandRedux size={50} className="text-purple-700" />
            <p className="text-white">Redux</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <BiLogoPostgresql size={50} fill="oklch(49.6% 0.265 301.924)" />
            <p className="text-white">PostgreSQL</p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
