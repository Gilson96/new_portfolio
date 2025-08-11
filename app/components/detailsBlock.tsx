import { Button } from '@/components/ui/button'
import Block from './block'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaUserCircle } from 'react-icons/fa'
import { ArrowDownToLine } from 'lucide-react'
import { CgMail } from 'react-icons/cg'

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
    <div className="flex gap-1">
      <Link href={'https://github.com/Gilson96'}>
        <Button className="cursor-pointer" variant="default" size="sm">
          <FaGithub /> Github
        </Button>
      </Link>
      <Link href={'https://www.linkedin.com/in/gilson-de-almeida/'}>
        <Button className="cursor-pointer" variant="default" size="sm">
          <FaLinkedin /> LinkedIn
        </Button>
      </Link>
      <Link href={'mailto:grafael99@gmail.com'}>
        <Button className="cursor-pointer" variant="default" size="sm">
          <CgMail /> Gmail
        </Button>
      </Link>
      <Link
        href="/Gilson_Rafael_CV.pdf"
        download="/Gilson_Rafael_CV.pdf"
        aria-label="Download CV (PDF)"
      >
        <Button className="cursor-pointer" variant="default" size="sm">
          Download CV <ArrowDownToLine />
        </Button>
      </Link>
    </div>
  </Block>
)

export const AboutBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug">
    <p className="text-xl">
      My passion is learn and putting in practice.{' '}
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
