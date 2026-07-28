import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { ExternalLink, Code2 } from 'lucide-react'

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group border border-ash-dark hover:border-ash transition-colors"
    >
      <div className="aspect-video bg-base-charcoal overflow-hidden flex items-center justify-center">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
        ) : (
          <Code2 size={40} className="text-ash-dark" />
        )}
      </div>

      <div className="p-4">
        <h3 className="text-offwhite text-base font-semibold mb-1">
          {project.title}
        </h3>

        <p className="text-ash text-xs leading-relaxed mb-3 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tech.map((t) => (
            <span key={t} className="text-ash-light text-[10px] border border-ash-dark px-2 py-0.5">
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-ash hover:text-offwhite text-xs transition-colors">
              <FaGithub size={14} /> Code
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-ash hover:text-offwhite text-xs transition-colors">
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard