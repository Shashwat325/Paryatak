import { useState, useEffect } from 'react'
import { packages, destinations, testimonials } from '../data/mockData'
import { PackageCard, PackageModal } from '../components/PackageCard'
import img1 from '../heroimages/1.jpg'
import img2 from '../heroimages/2.webp'
import img3 from '../heroimages/3.webp'
import img4 from '../heroimages/4.webp'
import img5 from '../heroimages/5.webp'
const FILTERS = ['All', 'Beach', 'Adventure', 'Cultural', 'Luxury']

export default function Home({ setActivePage, showToast }) {
  const [filter, setFilter] = useState('All')
  const [selectedPkg, setSelectedPkg] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [region, setRegion] = useState('All Regions')
  const heroImages = [img1, img2, img3, img4, img5]
  const [currentImage, setCurrentImage] = useState(0);
  const featured = packages.filter(p => filter === 'All' || p.type === filter).slice(0, 4)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  function handleEnquire(pkg) {
    setSelectedPkg(null)
    setActivePage('Contact')
    showToast(`Enquiry started for "${pkg.title}"!`)
  }

  return (
    <div className="page-enter">
      <section className="hero-section">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className="hero-bg-slide"
            style={{
              backgroundImage: `url(${img})`,
              opacity: index === currentImage ? 1 : 0,
            }}
          />
        ))}
        <div />
        <div className="hero-pattern" />
        <div className="hero-content">

          <h1>
            Discover the World's<br /><em>Hidden Wonders</em>
          </h1>

          <div className="hero-ctas">
            <button className="btn-accent" onClick={() => setActivePage('Packages')} style={{ zIndex: 7 }}>
              Explore Packages ✈
            </button>
            <button className="btn-outline"
              onClick={() => setActivePage('Destinations')} style={{zIndex:7}}>
              View Destinations
            </button>
          </div>
          <div className="search-bar" >
            <div className="search-field" >
              <label>Where to?</label>
              <input
                placeholder="Search destination..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="search-field">
              <label>Region</label>
              <select value={region} onChange={e => setRegion(e.target.value)}>
                <option>All Regions</option>
                <option>Asia</option>
                <option>Europe</option>
                <option>Africa</option>
                <option>Americas</option>
              </select>
            </div>
            <div className="search-field" style={{ maxWidth: 130 }}>
              <label>Duration</label>
              <select defaultValue="">
                <option value="">Any</option>
                <option>3–5 Days</option>
                <option>6–9 Days</option>
                <option>10+ Days</option>
              </select>
            </div>
            <button className="search-btn" onClick={() => setActivePage('Packages')}>
               Search
            </button>
          </div>
        </div>
      </section>

      {/* FEATURED PACKAGES */}
      <section className=" section-featured">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
            <div className="section-header" style={{ textAlign: 'left', marginBottom: 0 }}>
              <div className="section-eyebrow">Handpicked For You</div>
              <div className="section-title">Featured <em>Packages</em></div>
            </div>
            <button className="btn-outline" onClick={() => setActivePage('Packages')}>View All →</button>
          </div>
          <div className="filter-chips">
            {FILTERS.map(f => (
              <button key={f} className={`chip${filter === f ? ' active' : ''}`} onClick={() => setFilter(f)}>{f}</button>
            ))}
          </div>
          <div className="pkg-grid">
            {featured.map(pkg => (
              <PackageCard key={pkg.id} pkg={pkg} onBook={setSelectedPkg} />
            ))}
          </div>
        </div>
      </section>

      {/* DESTINATIONS STRIP */}
      <section className="section-sm" style={{ background: 'var(--surface2)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Explore the Globe</div>
            <div className="section-title">Top <em>Destinations</em></div>
          </div>
          <div className="dest-grid">
            {destinations.slice(0, 8).map(d => (
              <div key={d.name} className="dest-card" onClick={() => setActivePage('Destinations')}>
                <div className="dest-card-top" style={{ background: d.color }}>
                  <img src={d.image} alt={d.name} />
                </div>
                <div className="dest-card-body" style={{ zIndex: 4, color: 'white' }}>
                  <div className="dest-card-name" style={{ zIndex: 4, color: 'white' }}>{d.name}</div>
                  <div className="dest-card-country" style={{ zIndex: 4, color: 'white' }}>{d.country}</div>
                  <div className="dest-card-tag" style={{ zIndex: 4, color: 'white' }}>{d.tag}</div>
                  <div className="dest-card-count" style={{ zIndex: 4, color: 'white' }}>{d.packages} packages</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">The Paryatak Difference</div>
            <div className="section-title">Why Travellers <em>Choose Us</em></div>
            <div className="section-sub">Everything you need for a perfect trip, handled by experts who care.</div>
          </div>
          <div className="why-grid">
            {[
              { icon: '🛡️', title: 'Fully Insured Trips', desc: 'Every package includes comprehensive travel insurance at no extra cost — complete peace of mind.' },
              { icon: '🎯', title: 'Expert Curation', desc: 'Handpicked itineraries by local experts who know each destination inside out, updated every season.' },
              { icon: '💬', title: '24/7 Support', desc: 'Our team is always available by phone, WhatsApp, or email — before, during, and after your journey.' },
              { icon: '💳', title: 'Flexible Payments', desc: 'Book with just 20% deposit. Pay the balance in easy EMIs with zero booking fees.' },
              { icon: '🌿', title: 'Sustainable Travel', desc: 'We partner with eco-certified operators and offset carbon for every trip we run.' },
              { icon: '⭐', title: '5-Star Rated', desc: 'Consistently rated 4.8+ across Google, TripAdvisor and Trustpilot by thousands of travellers.' },
            ].map(w => (
              <div key={w.title} className="why-card">
                <div className="why-icon">{w.icon}</div>
                <div className="why-title">{w.title}</div>
                <div className="why-desc">{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-sm" style={{ background: 'var(--surface2)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Reviews</div>
            <div className="section-title">What Our <em>Travellers Say</em></div>
          </div>
          <div className="testi-grid">
            {testimonials.slice(0, 3).map(t => (
              <div key={t.name} className="testi-card">
                <div className="testi-header">
                  <div style={{ display: 'flex', gap: 12 }}>
                    <div className="testi-avatar">{t.initials}</div>
                    <div>
                      <div className="testi-name">{t.name}</div>
                      <div className="testi-loc"> {t.location}</div>
                      <div className="testi-pkg">{t.package}</div>
                    </div>
                  </div>
                  <div className="stars">{'★'.repeat(t.rating)}</div>
                </div>
                <p className="testi-text">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <div className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>Limited Time</div>
            <h2>Ready for Your Next Adventure?</h2>
            <p>Get a personalised itinerary from our travel experts — completely free, no obligation.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button className="btn-accent" onClick={() => setActivePage('Contact')}>Get Free Consultation ✈</button>
              <button className="btn-outline"   
                onClick={() => setActivePage('Packages')}>Browse Packages</button>
            </div>
          </div>
        </div>
      </section>

      <PackageModal pkg={selectedPkg} onClose={() => setSelectedPkg(null)} onEnquire={handleEnquire} />
    </div>
  )
}
