import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

function Projects() {
  return (
    <section className="px-8 md:px-16 py-20">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-ash text-sm uppercase tracking-widest mb-4"
      >
        My Work
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-offwhite text-4xl md:text-6xl font-bold mb-14"
      >
        Projects
      </motion.h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Projects