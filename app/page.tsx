'use client'
import React from 'react'
import { motion } from 'framer-motion'
import ProjectsBlock from './components/projectsBlock'
import { AboutBlock, Footer, HeaderBlock } from './components/detailsBlock'

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900 px-4 py-12 text-zinc-50">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <ProjectsBlock />
        <AboutBlock />
      </motion.div>
      <Footer />
    </div>
  )
}
