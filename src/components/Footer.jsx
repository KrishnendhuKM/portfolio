import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { Mail, ArrowUp } from 'lucide-react'

function Footer() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/krishnendhu-km-517aaa2b9',
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/KrishnendhuKM',
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://www.instagram.com/krishnendhu.km',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:krishnendhukm10@gmail.com',
    },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-ash-dark px-8 md:px-16 py-10 mt-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-ash text-sm">
          © 2026 Krishnendhu KM. All rights reserved.
        </div>

        <div className="flex items-center gap-6">
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="text-ash hover:text-offwhite transition-colors">
                <Icon size={20} />
              </a>
            )
          })}
        </div>

        <button onClick={scrollToTop} aria-label="Scroll to top" className="flex items-center gap-2 text-ash hover:text-offwhite text-sm transition-colors border border-ash-dark hover:border-ash px-4 py-2">
          Back to top <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  )
}

export default Footer