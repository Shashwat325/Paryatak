import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

const team = [
  { name: 'Aarav Mehta', role: 'Founder & CEO', initials: 'AM', color: '#d4edda', desc: '15 years crafting luxury itineraries across 60+ countries.' },
  { name: 'Priya Nair', role: 'Head of Experiences', initials: 'PN', color: '#d6eaf8', desc: 'Former travel journalist turned experience designer.' },
  { name: 'Rohan Desai', role: 'Lead Travel Curator', initials: 'RD', color: '#fef3cd', desc: 'Specialist in offbeat destinations and adventure travel.' },
  { name: 'Sneha Kapoor', role: 'Customer Experience', initials: 'SK', color: '#fce4ec', desc: 'Ensures every traveller feels taken care of, 24/7.' },
]

const stats = [
  { num: '14+', label: 'Years of Experience' },
  { num: '12,000+', label: 'Happy Travellers' },
  { num: '60+', label: 'Destinations' },
  { num: '4.9★', label: 'Average Rating' },
]

const values = [
  { icon: '🌿', title: 'Sustainable Travel', desc: 'We partner with eco-certified operators and offset carbon for every trip we run — travel that gives back.' },
  { icon: '🎯', title: 'Curated Experiences', desc: 'No cookie-cutter tours. Every itinerary is handcrafted by local experts who know each destination inside out.' },
  { icon: '🤝', title: 'Trust & Transparency', desc: 'No hidden charges, no surprise costs. What you see is what you pay — always.' },
  { icon: '💬', title: '24/7 Support', desc: 'Our team is always a call or message away — before, during and after your journey.' },
  { icon: '🛡️', title: 'Fully Insured', desc: 'Every package includes comprehensive travel insurance at no extra cost.' },
  { icon: '✨', title: 'Memorable Moments', desc: "We don't just plan trips — we craft stories you'll be telling for the rest of your life." },
]

const milestones = [
  { year: '2010', title: 'Founded in Bhopal', desc: 'Started as a small boutique travel desk with a big dream.' },
  { year: '2013', title: 'First International Package', desc: 'Launched our flagship Bali itinerary — still our bestseller today.' },
  { year: '2016', title: '1,000 Travellers', desc: 'Crossed our first major milestone with a 4.8★ average rating.' },
  { year: '2019', title: 'Pan-India Expansion', desc: 'Opened offices in Mumbai, Delhi and Bangalore.' },
  { year: '2022', title: '10,000 Happy Travellers', desc: 'Featured in Times Travel and Condé Nast Traveller India.' },
  { year: '2025', title: 'Paryatak 2.0', desc: 'Relaunched with curated luxury experiences and a fully digital booking experience.' },
]

export default function About({ setActivePage }) {
  return (
    <div className="page-enter">

      {/* HERO */}
<div style={{
  backgroundImage: `url('/images/world.webp')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '70vh',
  position: 'relative',
  overflow: 'hidden'
}}>
  {/* dark overlay */}
  <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)' }} />
  {/* content */}
  <div className="container" style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <div className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.4)' }}>Our Story</div>
    <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px,5vw,56px)', color: '#fff', fontWeight: 400, marginBottom: '1rem', maxWidth: 640 }}>
      We Believe Travel <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Changes Lives</em>
    </h1>
    <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 17, fontWeight: 300, maxWidth: 520, lineHeight: 1.8, marginBottom: '2.5rem' }}>
      Paryatak was born from a simple belief — that everyone deserves to experience the wonder of this world. Since 2010, we've been turning that belief into unforgettable journeys.
    </p>
    <button className="btn-accent" onClick={() => setActivePage('Contact')}>
      Plan Your Trip ✈
    </button>
  </div>
</div>

      {/* STATS */}
      <div style={{ background: 'var(--dark)', padding: '2.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem', textAlign: 'center' }}>
            {stats.map(s => (
              <div key={s.label}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,4vw,40px)', color: '#fff', fontWeight: 600 }}>{s.num}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MISSION */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div className="section-eyebrow">Who We Are</div>
              <div className="section-title" style={{ textAlign: 'left', marginBottom: '1.25rem' }}>
                More Than a <em>Travel Agency</em>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.9, marginBottom: '1rem' }}>
                Paryatak is a Bhopal-born travel company that has grown into one of India's most trusted boutique travel brands. We specialise in handcrafted itineraries — not mass-market packages — for travellers who want something more meaningful.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.9, marginBottom: '2rem' }}>
                Every trip we design starts with a conversation. We listen, we understand, and then we build an experience around you — not the other way around.
              </p>
              <button className="btn-primary" onClick={() => setActivePage('Packages')}>
                Explore Our Packages →
              </button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { emoji: '🌏', label: 'Global Reach', sub: '60+ destinations worldwide' },
                { emoji: '🏆', label: 'Award Winning', sub: 'Condé Nast Traveller 2023' },
                { emoji: '🌱', label: 'Eco Certified', sub: 'Carbon offset on every trip' },
                { emoji: '❤️', label: 'Made in India', sub: 'Proudly based in Bhopal' },
              ].map(item => (
                <div key={item.label} className="why-card" style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 32, marginBottom: 8 }}>{item.emoji}</div>
                  <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>{item.label}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section-sm" style={{ background: 'var(--surface2)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">What Drives Us</div>
            <div className="section-title">Our <em>Core Values</em></div>
          </div>
          <div className="why-grid">
            {values.map(v => (
              <div key={v.title} className="why-card">
                <div className="why-icon">{v.icon}</div>
                <div className="why-title">{v.title}</div>
                <div className="why-desc">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">How We Got Here</div>
            <div className="section-title">Our <em>Journey</em></div>
          </div>
          <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
            {/* vertical line */}
            <div style={{ position: 'absolute', left: 72, top: 0, bottom: 0, width: 2, background: 'var(--border-mid)' }} />
            {milestones.map((m, i) => (
              <div key={m.year} style={{ display: 'flex', gap: '2rem', marginBottom: '2.5rem', position: 'relative' }}>
                <div style={{ minWidth: 64, textAlign: 'right' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600, color: 'var(--brand)' }}>{m.year}</span>
                </div>
                {/* dot */}
                <div style={{ position: 'absolute', left: 64, top: 4, width: 16, height: 16, borderRadius: '50%', background: 'var(--brand)', border: '3px solid var(--surface)', zIndex: 1 }} />
                <div style={{ paddingLeft: '1.5rem' }}>
                  <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>{m.title}</div>
                  <div style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.7 }}>{m.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section-sm" style={{ background: 'var(--surface2)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">The People Behind Paryatak</div>
            <div className="section-title">Meet the <em>Team</em></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {team.map(t => (
              <div key={t.name} className="testi-card" style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
                <div style={{
                  width: 72, height: 72, borderRadius: '50%',
                  background: t.color, display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: 22, fontWeight: 700,
                  color: 'var(--brand)', margin: '0 auto 1rem'
                }}>
                  {t.initials}
                </div>
                <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>{t.name}</div>
                <div style={{ fontSize: 12, color: 'var(--brand)', fontWeight: 500, marginBottom: 10 }}>{t.role}</div>
                <div style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.7 }}>{t.desc}</div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginTop: '1rem' }}>
                  {[FaLinkedin, FaTwitter].map((Icon, i) => (
                    <a key={i} href="#" style={{ color: 'var(--text-hint)', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--brand)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--text-hint)'}
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <div className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.4)' }}>Let's Go</div>
            <h2>Ready to Start Your Story?</h2>
            <p>Talk to our travel experts — free consultation, no obligation, just great travel ideas.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button className="btn-accent" onClick={() => setActivePage('Contact')}>Get Free Consultation ✈</button>
              <button className="btn-outline" 
                onClick={() => setActivePage('Packages')}>Browse Packages</button>
            </div>
          </div>
        </div>
      </section>

    </div>