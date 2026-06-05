import { useState, useEffect } from 'react'
import About from '../pages/About'
export default function Navbar({ activePage, setActivePage }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Home', 'Packages', 'Destinations', 'Contact', 'About']

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        <div className="nav-logo" onClick={() => setActivePage('Home')} style={{ cursor: 'pointer' }}>
         Paryatak
        </div>
        <div className="nav-links">
          {links.map(l => (
            <button
              key={l}
              className={`nav-link${activePage === l ? ' active' : ''}`}
              onClick={() => setActivePage(l)}
            >
              {l}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <button className="btn-outline" style={{ padding: '8px 18px', fontSize: '13px' }}>
            Sign In
          </button>
          <button className="btn-primary" style={{ padding: '8px 18px', fontSize: '13px' }}
            onClick={() => setActivePage('Contact')}>
            Book Now
          </button>
        </div>
      </div>
    </nav>
  )
}
