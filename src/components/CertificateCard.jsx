import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'

function CertificateCard({ certificate, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group border border-ash-dark hover:border-ash transition-colors"
    >
      <div className="aspect-[4/3] bg-base-charcoal overflow-hidden flex items-center justify-center">
        {certificate.image ? (
          <img src={certificate.image} alt={certificate.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
        ) : (
          <Award size={40} className="text-ash-dark" />
        )}
      </div>

      <div className="p-4">
        <p className="text-ash text-[10px] uppercase tracking-widest mb-1">
          {certificate.issuer}
        </p>

        <h3 className="text-offwhite text-sm font-semibold mb-2 line-clamp-2">
          {certificate.title}
        </h3>

        <p className="text-ash text-xs leading-relaxed mb-3 line-clamp-2">
          {certificate.description}
        </p>

        {certificate.image && (
          <a href={certificate.image} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-ash hover:text-offwhite text-xs transition-colors w-fit">
            <ExternalLink size={14} /> View Certificate
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default CertificateCard