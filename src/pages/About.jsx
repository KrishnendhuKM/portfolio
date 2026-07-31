import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

function About() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'REST APIs'],
    },
    {
      title: 'Database & Tools',
      skills: ['MongoDB', 'Git', 'GitHub', 'VS Code'],
    },
  ]

  const stats = [
    { number: '4+', label: 'Projects Built' },
    { number: '2+', label: 'Years Learning' },
    { number: '10+', label: 'Technologies' },
  ]

  return (
    <section className="px-8 md:px-16 py-20">
      {/* Heading + Image */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-16">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-ash text-sm uppercase tracking-widest mb-4"
          >
            Get to know me
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-offwhite text-4xl md:text-6xl font-bold"
          >
            About Me
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0 flex items-center justify-center"
        >
          {/* White Blob */}
          <div className="absolute w-full h-full bg-offwhite/10 blob-shape animate-blob -translate-x-8 -translate-y-4" />

          {/* Gradient Blob */}
          <div className="absolute w-full h-full bg-gradient-to-br from-ash-dark to-base-charcoal blob-shape animate-blob translate-x-4 translate-y-4" />

          {/* Rotating Rings */}
          <div className="absolute w-[110%] h-[110%] border border-ash-dark blob-shape animate-spin-slow" />
          <div className="absolute w-[120%] h-[120%] border border-offwhite/30 blob-shape animate-spin-slow-reverse" />

          {/* Photo */}
          <img
            src="/images/krish.png"
            alt="Krishnendhu KM"
            className="relative w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500 blob-shape animate-blob"
          />
        </motion.div>
      </div>

      {/* Bio */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-4xl mb-16"
      >
        <p className="text-ash-light text-lg leading-relaxed mb-6">
          I'm Krishnendhu KM, a Full Stack Developer who enjoys building clean,
          functional web applications from scratch. I work primarily with the
          MERN stack, and I'm always looking to sharpen my skills with new
          tools and technologies.
        </p>

        <p className="text-ash leading-relaxed">
          I believe good software isn't just about writing code that works —
          it's about writing code that's easy to understand, maintain, and
          build on. Whether it's the frontend experience or the backend logic,
          I care about getting the details right.
        </p>
      </motion.div>

      {/* Education + Skills */}
      <div className="grid md:grid-cols-2 gap-16 mb-16">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-offwhite text-lg font-semibold mb-6 uppercase tracking-wide">
            Education
          </h3>

          <div className="flex flex-col gap-6">
            <div className="border-l-2 border-ash-dark pl-6">
              <p className="text-offwhite font-semibold">
                Master of Computer Applications (MCA)
              </p>
              <p className="text-ash text-sm mt-1">
                Mangalam College of Engineering, Kottayam, Kerala
              </p>
              <p className="text-ash text-xs mt-1 uppercase tracking-wide">
                2023 – 2025
              </p>
            </div>

            <div className="border-l-2 border-ash-dark pl-6">
              <p className="text-offwhite font-semibold">
                Bachelor of Computer Applications (BCA)
              </p>
              <p className="text-ash text-sm mt-1">
                Fr. Porukkara CMI College of Advanced Studies, Alappuzha
              </p>
              <p className="text-ash text-xs mt-1 uppercase tracking-wide">
                2020 – 2023
              </p>
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          {skillCategories.map((category) => (
            <div key={category.title} className="mb-8">
              <h3 className="text-offwhite text-lg font-semibold mb-4 uppercase tracking-wide">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-ash-light text-sm border border-ash-dark px-4 py-2 hover:border-ash hover:text-offwhite transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Resume Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <a
          href="/documents/resume.pdf"
          download
          className="inline-flex items-center gap-2 bg-offwhite text-base-black px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-ash-light transition-colors"
        >
          Download Resume <Download size={16} />
        </a>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="flex gap-10 mt-12"
      >
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-offwhite text-4xl font-bold">{stat.number}</p>
            <p className="text-ash text-sm mt-1">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  )
}

export default About