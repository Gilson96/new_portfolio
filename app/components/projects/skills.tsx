import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
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

export function Skills() {
  const stringSkills = '<Skills />'

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button  className="flex h-[8rem] w-[8rem] md:h-40 md:w-40 cursor-pointer flex-col items-center justify-center gap-2 rounded-3xl bg-neutral-800 shadow-xs shadow-white transition hover:shadow-lg hover:shadow-white/40">
          <p className="w-[90%] text-base font-bold text-white text-shadow-neutral-500 text-shadow-sm">
           {stringSkills}
          </p>
        </button>
      </PopoverTrigger>

      <PopoverContent className="relative top-[7rem] w-[20rem] rounded-xl border-none bg-neutral-950 shadow-md max-[640px]:right-[1.5rem] max-[425px]:h-full max-[425px]:w-[30%] max-[375px]:left-[0.2rem] md:right-[2rem] lg:relative lg:right-[6rem] lg:h-[20rem] lg:w-[25rem]">
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
