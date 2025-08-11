import { FiArrowRight } from 'react-icons/fi'
import Block from './block'
import Link from 'next/link'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { FaGithub, FaLinkedin, FaUserCircle } from 'react-icons/fa'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { SiGmail } from 'react-icons/si'

export const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <FaUserCircle size={50} className="my-2" />
    <h1 className="mb-12 text-xl leading-tight font-medium">
      Hi, I&#39;m Gilson de Almeida.{' '}
      <span className="text-zinc-400">
        I&#39;m a full-stack developer with a strong foundation in React and
        Node.js, committed to building thoughtful and efficient web
        applications.
      </span>
    </h1>
    <Popover>
      <PopoverTrigger className="flex cursor-pointer items-center gap-1 text-red-300 hover:underline">
        <p>Contact me </p>
        <FiArrowRight />
      </PopoverTrigger>
      <PopoverContent
        side="top"
        className="flex w-[9rem] items-center justify-center gap-3 rounded-xl border-zinc-700 bg-zinc-900 shadow-md"
      >
        <Link href={'https://github.com/Gilson96'}>
          <Tooltip>
            <TooltipTrigger className="cursor-pointer">
              <FaGithub size={30} className="text-white" />
            </TooltipTrigger>
            <TooltipContent>
              <p>My Github</p>
            </TooltipContent>
          </Tooltip>
        </Link>

        <Link href={'https://www.linkedin.com/in/gilson-de-almeida'}>
          <Tooltip>
            <TooltipTrigger className="cursor-pointer">
              <FaLinkedin size={30} className="text-blue-500" />
            </TooltipTrigger>
            <TooltipContent>
              <p>My LinkedIn</p>
            </TooltipContent>
          </Tooltip>
        </Link>

        <Link href={'mailto:grafael99@gmail.com'}>
          <Tooltip>
            <TooltipTrigger className="cursor-pointer">
              <SiGmail size={30} className="bg-white fill-red-500 rounded-lg" />
            </TooltipTrigger>
            <TooltipContent>
              <p>My Email</p>
            </TooltipContent>
          </Tooltip>
        </Link>
      </PopoverContent>
    </Popover>
  </Block>
)

export const AboutBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug">
    <p className="text-xl">
      My passion is learn and put in practice.{' '}
      <span className="text-xl text-zinc-400">
        Over time, I&#39;ve invested in honing my skills through self-directed
        learning, online courses, and hands-on personal projects. I&#39;m always
        eager to contribute to meaningful work, collaborate with inspiring
        teams, and continue growing as a developer.
      </span>
    </p>
  </Block>
)

export const Footer = () => {
  return (
    <footer className="mt-12">
      <p className="text-center text-zinc-400">
        Made with passion by{' '}
        <Link
          href={'https://www.linkedin.com/in/gilson-de-almeida/'}
          className="text-red-300 hover:underline"
        >
          Gilson de Almeida
        </Link>
      </p>
    </footer>
  )
}
