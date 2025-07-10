import { Button } from '@/components/ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { BiLogoPostgresql, BiLogoTypescript } from 'react-icons/bi'
import { FaNodeJs, FaFire } from 'react-icons/fa'
import { FcPhoneAndroid, FcAndroidOs } from 'react-icons/fc'
import { RiTailwindCssFill } from 'react-icons/ri'
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiTypescript,
} from 'react-icons/si'
import { TbBrandRedux } from 'react-icons/tb'

export function Skills() {
  const stringSkills = '<Skills />'
  return (
    <HoverCard>
      <HoverCardTrigger
        className="rounded-5xl flex h-40 w-40 cursor-pointer flex-col items-center justify-center gap-2 bg-neutral-800 shadow-xs shadow-white transition hover:shadow-lg hover:shadow-white/40"
        asChild
      >
        <Button
          variant="link"
          className="text-2xl font-bold text-white text-shadow-neutral-500 text-shadow-sm"
        >
          {stringSkills}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 lg:relative lg:right-[6rem] top-[4rem]">
        <div className="flex flex-wrap justify-around gap-4" >
          <BiLogoTypescript size={50} fill="oklch(80.9% 0.105 251.813)" />
          <SiMongodb size={50} fill="oklch(62.7% 0.194 149.214)" />
          <SiExpress size={50} fill="oklch(70.4% 0.191 22.216)" />
          <SiReact size={50} fill="var(--color-blue-500) " />
          <FaNodeJs size={50} fill="oklch(76.8% 0.233 130.85)" />
          <FcAndroidOs size={50} />
          <FaFire size={50} fill={'orange'} />
          <SiNextdotjs size={50} fill="#737373" />
          <SiPrisma size={50} fill="black" />
          <RiTailwindCssFill size={50} fill="oklch(84.5% 0.143 164.978)" />
          <TbBrandRedux size={50} className='text-purple-700' />
          <BiLogoPostgresql size={50} fill='oklch(49.6% 0.265 301.924)' />

        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
