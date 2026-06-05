import { useState } from 'react'
import { destinations, packages } from '../data/mockData'

const REGIONS = ['All', 'Asia', 'Europe', 'Africa', 'Americas', 'Oceania']

export default function Destinations({ setActivePage }) {
  const [region, setRegion] = useState('All')

  const filtered = region === 'All' ? destinations : destinations.filter(d => d.country === region || d.name === region)

  return (
    <div className="page-enter">
      <div style={{ background: 'var(--dark)', padding: '4rem 0 3rem' }}>
        <div className="container">
          <div className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.4)' }}>Where to Next?</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px,5vw,52px)', color: '#fff', fontWeight: 400, marginBottom: '0.5rem' }}>
            Our <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Destinations</em>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, fontWeight: 300 }}>
            {destinations.length} destinations across 6 continents
          </p>
        </div>
      </div>

      <div className="section-sm">
        <div className="container">
          <div className="filter-chips" style={{ marginBottom: '2rem' }}>
            {REGIONS.map(r => (
              <button key={r} className={`chip${region === r ? ' active' : ''}`} onClick={() => setRegion(r)}>{r}</button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {destinations.map(d => (
              <div key={d.name} className="dest-card" onClick={() => setActivePage('Packages')}>
                <div
                  className="dest-card-top"
                  style={{
                    background: d.color,
                    height: 130,
                    fontSize: 56,
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {d.image
                    ? <img
                      src={d.image}
                      alt={d.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        position: 'absolute',
                        inset: 0
                      }}
                    />
                    : d.emoji
                  }
                </div>
                <div className="dest-card-body" style={{ padding: '1rem 1.1rem 1.1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <div className="dest-card-name" style={{ fontSize: 16 }}>{d.name}</div>
                      <div className="dest-card-country">{d.country}</div>
                    </div>
                    <span className="badge badge-brand">{d.packages} pkgs</span>
                  </div>
                  <div className="dest-card-tag" style={{ margin: '6px 0 10px' }}>{d.tag}</div>
                  <button className="btn-outline" style={{ width: '100%', fontSize: 12, padding: '7px 12px' }}>
                    View Packages →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* WORLD MAP PLACEHOLDER */}
          <div style={{ marginTop: '3rem', background: 'var(--surface2)', borderRadius: 16, padding: '3rem', textAlign: 'center', border: '1px solid var(--border)' }}>
            <div style={{ fontSize: 56, marginBottom: '1rem' }}>🗺️</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, marginBottom: '0.5rem' }}>Interactive World Map</div>
            <div style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: '1.5rem' }}>
              An interactive map showing all our destinations will be integrated here using Leaflet.js or Google Maps API.
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
              {destinations.slice(0, 6).map(d => (
                <div key={d.name} style={{ background: d.color, borderRadius: 20, padding: '6px 14px', fontSize: 13, fontWeight: 500 }}>
                  {d.emoji} {d.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
