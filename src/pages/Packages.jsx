import { useState, useMemo } from 'react'
import { packages } from '../data/mockData'
import { PackageCard, PackageModal } from '../components/PackageCard'

const TYPES = ['All', 'Beach', 'Adventure', 'Cultural', 'Luxury']
const REGIONS = ['All', 'Asia', 'Europe', 'Africa', 'Americas']
const SORT_OPTIONS = ['Popular', 'Price: Low to High', 'Price: High to Low', 'Duration', 'Top Rated']

export default function Packages({ setActivePage, showToast }) {
  const [typeFilter, setTypeFilter] = useState('All')
  const [regionFilter, setRegionFilter] = useState('All')
  const [sort, setSort] = useState('Popular')
  const [search, setSearch] = useState('')
  const [selectedPkg, setSelectedPkg] = useState(null)
  const [maxPrice, setMaxPrice] = useState(150000)

  const filtered = useMemo(() => {
    let list = [...packages]
    if (typeFilter !== 'All') list = list.filter(p => p.type === typeFilter)
    if (regionFilter !== 'All') list = list.filter(p => p.region === regionFilter)
    if (search) list = list.filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.destination.toLowerCase().includes(search.toLowerCase())
    )
    list = list.filter(p => p.price <= maxPrice)
    if (sort === 'Price: Low to High') list.sort((a, b) => a.price - b.price)
    else if (sort === 'Price: High to Low') list.sort((a, b) => b.price - a.price)
    else if (sort === 'Duration') list.sort((a, b) => a.duration - b.duration)
    else if (sort === 'Top Rated') list.sort((a, b) => b.rating - a.rating)
    return list
  }, [typeFilter, regionFilter, sort, search, maxPrice])

  function handleEnquire(pkg) {
    setSelectedPkg(null)
    setActivePage('Contact')
    showToast(`Enquiry started for "${pkg.title}"!`)
  }

  return (
    <div className="page-enter">
      {/* PAGE HERO */}
      <div style={{ background: 'var(--dark)', padding: '4rem 0 3rem' }}>
        <div className="container">
          <div className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.4)' }}>Our Packages</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px,5vw,52px)', color: '#fff', fontWeight: 400, marginBottom: '0.5rem' }}>
            Find Your Perfect <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Journey</em>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, fontWeight: 300 }}>{packages.length} curated packages across {new Set(packages.map(p => p.region)).size} regions</p>
        </div>
      </div>

      <div className="section-sm">
        <div className="container">
          {/* SEARCH + SORT ROW */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <input
              className="form-input"
              style={{ maxWidth: 300, flex: 1 }}
              placeholder="  Search packages or destinations..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <select className="form-input" style={{ width: 'auto' }} value={regionFilter} onChange={e => setRegionFilter(e.target.value)}>
              {REGIONS.map(r => <option key={r}>{r === 'All' ? 'All Regions' : r}</option>)}
            </select>
            <select className="form-input" style={{ width: 'auto' }} value={sort} onChange={e => setSort(e.target.value)}>
              {SORT_OPTIONS.map(s => <option key={s}>{s}</option>)}
            </select>
            <div style={{ marginLeft: 'auto', fontSize: 13, color: 'var(--text-muted)' }}>
              <strong style={{ color: 'var(--text)' }}>{filtered.length}</strong> packages found
            </div>
          </div>

          {/* TYPE CHIPS */}
          <div className="filter-chips">
            {TYPES.map(t => (
              <button key={t} className={`chip${typeFilter === t ? ' active' : ''}`} onClick={() => setTypeFilter(t)}>{t}</button>
            ))}
          </div>

          {/* PRICE RANGE */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', background: 'var(--surface2)', padding: '1rem 1.25rem', borderRadius: 10 }}>
            <span style={{ fontSize: 13, fontWeight: 500, whiteSpace: 'nowrap' }}>Max Budget:</span>
            <input
              type="range" min={10000} max={150000} step={5000}
              value={maxPrice}
              onChange={e => setMaxPrice(Number(e.target.value))}
              style={{ flex: 1, accentColor: 'var(--brand)' }}
            />
            <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--brand)', minWidth: 90 }}>
              ₹{maxPrice.toLocaleString('en-IN')}
            </span>
          </div>

          {/* GRID */}
          {filtered.length > 0 ? (
            <div className="pkg-grid">
              {filtered.map(pkg => (
                <PackageCard key={pkg.id} pkg={pkg} onBook={setSelectedPkg} />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
              <div style={{ fontSize: 48, marginBottom: '1rem' }}></div>
              <div style={{ fontSize: 18, fontWeight: 600, marginBottom: '0.5rem' }}>No packages found</div>
              <div style={{ fontSize: 14 }}>Try adjusting your filters or search query.</div>
              <button className="btn-outline" style={{ marginTop: '1.5rem' }} onClick={() => { setTypeFilter('All'); setRegionFilter('All'); setSearch(''); setMaxPrice(150000); }}>Reset Filters</button>
            </div>
          )}
        </div>
      </div>

      <PackageModal pkg={selectedPkg} onClose={() => setSelectedPkg(null)} onEnquire={handleEnquire} />
    </div>
  )
}
