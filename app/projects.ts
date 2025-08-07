export type ProjectsTypes = {
  id: number
  title: string
  description: string
  image: string
  live: string
  github: string
  tech: string
  skills: string[]
}

export const projects: ProjectsTypes[] = [
  {
    id: 1,
    title: 'Mern-Foods',
    description:
      'MERN Foods is a full-stack food delivery web app inspired by Uber Eats, built using the MERN stack with modern frontend tools like TypeScript, Redux Toolkit, TailwindCSS, and Redux Persist.',
    image:
      'https://github.com/Gilson96/mern-food/blob/master/src/assets/screenshots/homePage.png?raw=true',

    live: 'https://mernfoods.netlify.app',
    github: 'https://github.com/Gilson96/mern-food/tree/master',
    skills: [
      'React, TypeScript, Redux, Redux-Tookit, Tailwindcss, Nodejs, Express, MongoDb',
    ],
    tech: 'Mern-Stack',
  },
  {
    id: 2,
    title: 'Nextbnb',
    description:
      'NextBnB is a full-stack, Airbnb-inspired booking platform featuring modern UI/UX design, JWT authentication, responsive layouts, Google Maps integration, and secure payment processing with Stripe. ',
    image:
      'https://github.com/Gilson96/nextbnb/blob/master/public/screenshots/Screenshot%20(7).png?raw=true',
    live: 'nextbnb-psi.vercel.app',
    github: 'https://github.com/Gilson96/nextbnb/tree/master',
    skills: [
      'Nextjs, Typescript, ShadcnUI',
      'Tailwindcss',
      'Zustand',
      'Prisma',
      'PostgreSQL',
    ],
    tech: 'Nextjs + Prisma',
  },
  {
    id: 3,
    title: 'NativeMDB',
    description:
      'NativeMDB is a React Native mobile application built using Expo, designed to provide an immersive experience for discovering movies and TV shows. Powered by TMDB API, it allows users to browse, filter, and manage their personal watchlists or favourites.',
    image:
      'https://github.com/Gilson96/nativeMDB/blob/master/assets/screenshots/home.png?raw=true',
    github: 'https://github.com/Gilson96/nativeMDB',
    tech: 'React-Native + Firebase',
    live: '',
    skills: [
      'React-Native',
      'Expo',
      'Typescript',
      'Redux',
      'TMDB API',
      'Firebase Auth',
      'Tailwindcss',
    ],
  },
]
