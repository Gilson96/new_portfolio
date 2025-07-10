'use client'

import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: '#ffffff',
          },
          shape: {
            type: 'circle',
          },
          opacity: {
            value: 0.2,
          },
          size: {
            value: 3,
          },
          move: {
            enable: true,
            speed: 1,
            outModes: {
              default: 'out',
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
        },
        background: {
          color: '#000000',
        },
      }}
    />
  )
}
