import { motion } from 'framer-motion'
import GridBackground from '../components/GridBackground'
import { AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

function Home() {
    const roles = ['Full Stack Developer', 'Web Designer', 'Software Developer', 'MERN Stack Developer']
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])
  return (
    <section className="relative min-h-[90vh] flex flex-col md:flex-row items-center px-8 md:px-16 overflow-hidden">
      <GridBackground />

      <div className="flex-1 z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-ash text-sm uppercase tracking-widest mb-4"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-offwhite text-5xl md:text-7xl font-bold leading-tight"
        >
          Krishnendhu KM
        </motion.h1>

        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-ash-light text-2xl md:text-3xl font-medium mt-4 h-10 overflow-hidden relative"
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={roleIndex}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="absolute left-0"
          >
            {roles[roleIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-ash max-w-xl mt-6 text-base md:text-lg leading-relaxed"
        >
          I build clean, functional web applications using the MERN stack —
          turning ideas into fast, reliable digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex gap-4 mt-8"
        >
          <a href="/projects" className="bg-offwhite text-base-black px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-ash-light transition-colors">
            View My Work
          </a>
          <a href="/contact" className="border border-ash-dark text-offwhite px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:border-ash transition-colors">
            Contact Me
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative w-[380px] h-[380px] md:w-[520px] md:h-[520px] flex-shrink-0 flex items-center justify-center z-10"
      >
        {/* Decorative small blob behind, offset */}
        <div className="absolute w-full h-full bg-ash-dark/40 blob-shape animate-blob translate-x-6 translate-y-6" />

        {/* Rotating dashed ring */}
        <div className="absolute w-[105%] h-[105%] border border-dashed border-ash-dark rounded-full animate-spin-slow" />

        {/* Main gradient backing */}
        <div className="absolute w-full h-full bg-gradient-to-br from-ash-dark to-base-charcoal blob-shape animate-blob" />

        {/* Photo */}
        <img
          src="/images/krish.png"
          alt="Krish"
          className="relative w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500 blob-shape animate-blob"
        />
      </motion.div>
    </section>
  )
}

export default Home