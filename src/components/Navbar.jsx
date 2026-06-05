import { useState, useEffect } from 'react'

export default function Navbar({ activePage, setActivePage }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Home', 'Packages', 'Destinations', 'Contact', 'About']

  function handleNav(page) {
    setActivePage(page)
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        <div className="nav-logo" onClick={() => handleNav('Home')} style={{ cursor: 'pointer' }}>
          Maharaja Tour and Travels
        </div>
        <div className="nav-links">
          {links.map(l => (
            <button key={l} className={`nav-link${activePage === l ? ' active' : ''}`} onClick={() => handleNav(l)}>
              {l}
            </button>
          ))}
        </div>
        <div className="nav-actions">
          <button className="btn-outline" style={{ padding: '8px 18px', fontSize: '13px' }}>Sign In</button>
          <button className="btn-primary" style={{ padding: '8px 18px', fontSize: '13px' }} onClick={() => handleNav('Contact')}>Book Now</button>
        </div>
        <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="ham-line" />
          <span className="ham-line" />
          <span className="ham-line" />
        </button>
      </div>
      {menuOpen && (
        <div className="mobile-menu">
          {links.map(l => (
            <button key={l} className={`mobile-link${activePage === l ? ' active' : ''}`} onClick={() => handleNav(l)}>
              {l}
            </button>
          ))}
          <div style={{ display: 'flex', gap: '0.75rem', padding: '0.75rem 1.25rem 1.25rem' }}>
            <button className="btn-outline" style={{ flex: 1, justifyContent: 'center', color: 'var(--text)', borderColor: 'var(--border-mid)' }}>Sign In</button>
            <button className="btn-primary" style={{ flex: 1, justifyContent: 'center' }} onClick={() => handleNav('Contact')}>Book Now</button>
          </div>
        </div>
      )}
    </nav>
  )
}