import { useState } from 'react'

function getBadgeClass(tag) {
  const map = { Bestseller: 'badge-green', 'Hot Deal': 'badge-amber', Premium: 'badge-blue', Elite: 'badge-blue', New: 'badge-brand', Popular: 'badge-brand', Seasonal: 'badge-rose', Romantic: 'badge-rose' }
  return map[tag] || 'badge-brand'
}

export function PackageCard({ pkg, onBook }) {
  const [liked, setLiked] = useState(false)
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="pkg-card"
      onClick={() => onBook(pkg)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* IMAGE / BACKGROUND */}
      <div className="pkg-card-bg">
        {pkg.image
          ? <img src={pkg.image} alt={pkg.title} className="pkg-card-bg-img" />
          : <div className="pkg-card-bg-emoji" style={{ background: pkg.color }}>
              <span>{pkg.emoji}</span>
            </div>
        }
        {/* dark overlay that gets stronger on hover */}
        <div className={`pkg-card-overlay${hovered ? ' active' : ''}`} />
      </div>

      {/* BADGE + FAV always visible */}
      <div className="pkg-card-tag">
        <span className={`badge ${getBadgeClass(pkg.tag)}`}>{pkg.tag}</span>
      </div>
      <button
        className={`pkg-card-fav${liked ? ' liked' : ''}`}
        onClick={e => { e.stopPropagation(); setLiked(!liked) }}
        title={liked ? 'Remove from wishlist' : 'Add to wishlist'}
      >
        {liked ? '♥' : '♡'}
      </button>

      {/* DESTINATION NAME — always visible at bottom */}
      <div className={`pkg-card-dest-label${hovered ? ' hidden' : ''}`}>
        <div className="pkg-card-dest-name">📍 {pkg.destination}</div>
        <div className="pkg-card-dest-title">{pkg.title}</div>
      </div>

      {/* DETAILS — slide up on hover */}
      <div className={`pkg-card-details${hovered ? ' visible' : ''}`}>
        <div className="pkg-card-dest" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 4 }}>
          <span></span> {pkg.destination}
        </div>
        <div className="pkg-card-title" style={{ color: '#fff', marginBottom: 10 }}>{pkg.title}</div>

        <div className="pkg-card-meta" style={{ color: 'rgba(255,255,255,0.75)', marginBottom: 10 }}>
          <span> {pkg.duration} days</span>
          <span> Max {pkg.maxPeople}</span>
          <span> {pkg.type}</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 14 }}>
          
          
        </div>

        <div className="pkg-card-footer" style={{ borderColor: 'rgba(255,255,255,0.15)' }}>
          <div>
            <div className="pkg-price" style={{ color: '#fff' }}>₹{pkg.price.toLocaleString('en-IN')}</div>
            <div className="pkg-price-sub" style={{ color: 'rgba(255,255,255,0.5)' }}>per person</div>
          </div>
          <button
            className="btn-primary"
            style={{ padding: '8px 16px', fontSize: '13px' }}
            onClick={e => { e.stopPropagation(); onBook(pkg) }}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}

export function PackageModal({ pkg, onClose, onEnquire }) {
  if (!pkg) return null
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()} style={{ position: 'relative' }}>
        <div className="modal-hero" style={{ background: pkg.color }}>
          {pkg.image
    ? <img src={pkg.image} alt={pkg.title}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    : <span style={{ fontSize: 80 }}>{pkg.emoji}</span>
  }
        </div>
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-body">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
            <span className={`badge ${getBadgeClass(pkg.tag)}`}>{pkg.tag}</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span className="stars">{'★'.repeat(Math.floor(pkg.rating))}</span>
              <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{pkg.rating} · {pkg.reviews} reviews</span>
            </div>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginBottom: 4 }}>{pkg.title}</h2>
          <p style={{ color: 'var(--brand)', fontSize: 14, fontWeight: 500, marginBottom: '1rem' }}> {pkg.destination}</p>
          <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '1.5rem' }}>{pkg.description}</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-hint)', marginBottom: 10 }}>Highlights</div>
              {pkg.highlights.map(h => (
                <div key={h} style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 6, display: 'flex', gap: 8 }}>
                  <span style={{ color: 'var(--brand)' }}>✓</span> {h}
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-hint)', marginBottom: 10 }}>What's Included</div>
              {pkg.included.map(i => (
                <div key={i} style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 6, display: 'flex', gap: 8 }}>
                  <span style={{ color: 'var(--accent)' }}>★</span> {i}
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: 'var(--surface2)', borderRadius: 10, padding: '1rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Starting from</div>
              <div style={{ fontSize: 28, fontWeight: 700, color: 'var(--brand)' }}>₹{pkg.price.toLocaleString('en-IN')}</div>
              <div style={{ fontSize: 12, color: 'var(--text-hint)' }}>per person · {pkg.duration} days</div>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button className="btn-outline" onClick={onClose}>Close</button>
              <button className="btn-primary" onClick={() => onEnquire(pkg)}>Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
