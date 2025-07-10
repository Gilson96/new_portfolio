import { ProjectsTypes } from '@/app/projects'
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { LinkIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import { BsGithub } from 'react-icons/bs'

function Project({
  project,
  children,
}: {
  children: ReactNode
  project: ProjectsTypes
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="flex h-40 w-40 cursor-pointer flex-col items-center justify-center gap-2 rounded-3xl bg-neutral-800 shadow-xs shadow-white transition hover:shadow-lg hover:shadow-white/40">
        <div className="flex items-center justify-center">{children}</div>
        <p className="text-sm font-bold text-white w-[90%] text-shadow-sm text-shadow-neutral-500">
          {project.tech}
        </p>
      </AlertDialogTrigger>

      <AlertDialogContent className="max-h-[90vh] overflow-y-auto rounded-xl p-6">
        <AlertDialogHeader>
          <AlertDialogTitle className="mb-4">
            <div className="relative max-h-60 w-full overflow-auto rounded-lg shadow">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                width={800}
                height={600}
                className="rounded-lg object-cover"
              />
            </div>
          </AlertDialogTitle>

          <AlertDialogDescription className="flex flex-col gap-4 text-sm text-gray-800">
            <p className='text-xl font-bold'>{project.title}</p>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-black">Skills:</span>
              <span>{project.skills.join(', ')}</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-semibold text-black">Overview:</span>
              <p className="text-justify leading-relaxed">
                {project.description}
              </p>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
<hr className='w-full h-[1px] bg-black'/>
        <AlertDialogFooter>
          <div className="flex w-full items-center justify-between">
            <div className="flex w-full items-center gap-1">
              <p className="font-semibold text-black">Links: </p>
              <div className="flex gap-2 w-[50%] lg:w-[70%] items-center">
                <div className="flex w-full items-center justify-center gap-2 rounded-full border p-[2%] shadow-md transition-transform duration-200 hover:-translate-y-1 hover:underline hover:shadow-lg">
                  <LinkIcon size={15} />
                  <Link
                    href={project.live}
                    className="font-medium text-blue-500"
                  >
                    live demo
                  </Link>
                </div>
                <div className="flex w-full items-center justify-center gap-2 rounded-full border p-[2%] shadow-md transition-transform duration-200 hover:-translate-y-1 hover:underline hover:shadow-lg">
                  <BsGithub size={15} />
                  <Link
                    href={project.github}
                    className="font-medium text-blue-500"
                  >
                    github
                  </Link>
                </div>
              </div>
            </div>
            <AlertDialogCancel className="cursor-pointer rounded-md bg-gray-100 px-4 py-2 font-medium text-gray-700 shadow-md transition-transform duration-200 hover:-translate-y-1 hover:bg-gray-200 hover:shadow-lg">
              Close
            </AlertDialogCancel>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default Project
