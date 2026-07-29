import { useState } from 'react'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import { Menu, X, Home, User, FolderKanban, Award, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'About', path: '/about', icon: User },
  { name: 'Projects', path: '/projects', icon: FolderKanban },
  { name: 'Certificates', path: '/certificates', icon: Award },
  { name: 'Contact', path: '/contact', icon: Mail },
]

const outerR = 100
const innerR = 38
const gapDeg = 4

function polarToCartesian(cx, cy, r, angleDeg) {
  const rad = (angleDeg - 90) * (Math.PI / 180)
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
}

function describeSegment(cx, cy, iR, oR, startAngle, endAngle) {
  const p1 = polarToCartesian(cx, cy, oR, endAngle)
  const p2 = polarToCartesian(cx, cy, oR, startAngle)
  const p3 = polarToCartesian(cx, cy, iR, startAngle)
  const p4 = polarToCartesian(cx, cy, iR, endAngle)
  const largeArc = endAngle - startAngle <= 180 ? '0' : '1'

  return [
    `M ${p1.x} ${p1.y}`,
    `A ${oR} ${oR} 0 ${largeArc} 0 ${p2.x} ${p2.y}`,
    `L ${p3.x} ${p3.y}`,
    `A ${iR} ${iR} 0 ${largeArc} 1 ${p4.x} ${p4.y}`,
    'Z',
  ].join(' ')
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hovered, setHovered] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()

  const size = outerR * 2
  const cx = outerR
  const cy = outerR
  const step = 360 / navLinks.length

  return (
    <nav className="relative flex items-center justify-between px-6 md:px-8 py-5 border-b border-ash-dark z-50">
      <Link to="/" className="text-offwhite text-xl font-bold tracking-wide z-50" onClick={() => setIsOpen(false)}>
        KM
      </Link>

      <div className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `text-sm uppercase tracking-wide transition-colors ${
                isActive ? 'text-offwhite' : 'text-ash hover:text-ash-light'
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-offwhite z-50 relative w-8 h-8 flex items-center justify-center"
        aria-label="Toggle menu"
      >
        <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-base-black/80 backdrop-blur-sm md:hidden z-40"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: -90 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="absolute top-16 right-6"
              style={{ width: size, height: size }}
              onClick={(e) => e.stopPropagation()}
            >
              <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                <defs>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {navLinks.map((link, index) => {
                  const start = index * step + gapDeg / 2
                  const end = (index + 1) * step - gapDeg / 2
                  const isActive = location.pathname === link.path
                  const isHovered = hovered === index
                  const lit = isActive || isHovered

                  return (
                    <path
                      key={link.path}
                      d={describeSegment(cx, cy, innerR, outerR, start, end)}
                      fill={lit ? '#F5F5F5' : '#1A1A1A'}
                      stroke={lit ? '#F5F5F5' : '#2A2A2A'}
                      strokeWidth={lit ? 1.5 : 1}
                      filter={lit ? 'url(#glow)' : 'none'}
                      className="cursor-pointer transition-all duration-300"
                      onMouseEnter={() => setHovered(index)}
                      onMouseLeave={() => setHovered(null)}
                      onClick={() => {
                        navigate(link.path)
                        setIsOpen(false)
                      }}
                    />
                  )
                })}

                {/* Small glowing dots at each segment's outer tip, like the particle network */}
                {navLinks.map((link, index) => {
                  const midAngle = index * step + step / 2
                  const dotPos = polarToCartesian(cx, cy, outerR + 8, midAngle)
                  return (
                    <circle
                      key={`dot-${link.path}`}
                      cx={dotPos.x}
                      cy={dotPos.y}
                      r="2.5"
                      fill="#C7C7C7"
                      filter="url(#glow)"
                      className="animate-pulse"
                    />
                  )
                })}
              </svg>

              {/* Icons only, centered in each segment */}
              {navLinks.map((link, index) => {
                const midAngle = index * step + step / 2
                const midR = (innerR + outerR) / 2
                const pos = polarToCartesian(cx, cy, midR, midAngle)
                const Icon = link.icon
                const isActive = location.pathname === link.path
                const isHovered = hovered === index
                const lit = isActive || isHovered

                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.06 }}
                    className="absolute pointer-events-none"
                    style={{ left: pos.x, top: pos.y, transform: 'translate(-50%, -50%)' }}
                  >
                    <Icon size={18} className={lit ? 'text-base-black' : 'text-ash-light'} />
                  </motion.div>
                )
              })}

              {/* Center hub */}
              <div
                className="absolute rounded-full bg-base-black border border-ash-dark flex items-center justify-center"
                style={{
                  width: innerR * 2 - 10,
                  height: innerR * 2 - 10,
                  left: cx,
                  top: cy,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <span className="text-offwhite font-bold text-xs">KM</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar