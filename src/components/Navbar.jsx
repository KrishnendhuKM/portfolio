import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b border-ash-dark">
      <Link to="/" className="text-offwhite text-xl font-bold tracking-wide">
        𝖪𝖬
      </Link>

      <div className="flex gap-8">
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
    </nav>
  )
}

export default Navbar