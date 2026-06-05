import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa'
export default function Footer({ setActivePage }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">Maharaja Tour and Travels</div>
            <p className="footer-desc">Curating unforgettable journeys to the world's most breathtaking destinations since 2010.</p>
            <div style={{ marginTop: '1.25rem', display: 'flex', gap: '0.75rem' }}>
              {[
                { icon: <FaFacebook size={16} />, href: 'https://facebook.com' },
                { icon: <FaInstagram size={16} />, href: 'https://instagram.com' },
                { icon: <FaTwitter size={16} />, href: 'https://twitter.com' },
                { icon: <FaLinkedin size={16} />, href: 'https://linkedin.com' },
              ].map(({ icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noreferrer"
                  style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.5)', transition: 'background 0.2s, color 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.18)'; e.currentTarget.style.color = '#fff' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)' }}
                >
                  {icon}
                </a>
              ))}
            </div>

          </div>
          <div>
            <div className="footer-col-title">Quick Links</div>
            {['Home', 'Packages', 'Destinations', 'Blog', 'Contact'].map(l => (
              <span key={l} className="footer-link" onClick={() => setActivePage(l)}>{l}</span>
            ))}
          </div>
          <div>
            <div className="footer-col-title">Popular</div>
            {['Bali Packages', 'Switzerland Tours', 'Maldives Deals', 'Kerala Backwaters', 'Japan Sakura'].map(l => (
              <span key={l} className="footer-link">{l}</span>
            ))}
          </div>
          <div>
            <div className="footer-col-title">Contact</div>
            <span className="footer-link">Ward no.7  Radhika Colony Airport Road Khajuraho Distt, Chhatarpur Madhya Pradesh India 471606</span>
            <span className="footer-link"> +91 8109085766,+91 755085766</span>
            <span className="footer-link"> <a href="tourmaharajatravel@gmail.com">tourmaharajatravel@gmail.com</a></span>
            <span className="footer-link"> Mon–Sat, 9AM–7PM</span>
          </div>
        </div>
        
      </div>
    </footer>
  )
}
