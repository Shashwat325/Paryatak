import { useState } from 'react'
import { packages } from '../data/mockData'

export default function Contact({ showToast }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', package: '', people: '2', date: '', budget: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.name || !form.email) { showToast('Please fill in your name and email.'); return }
    setSubmitted(true)
    showToast('Enquiry sent! Our team will contact you within 2 hours. ✈')
  }

  return (
    <div className="page-enter">
      <div style={{ background: 'var(--dark)', padding: '4rem 0 3rem' }}>
        <div className="container">
          <div className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.4)' }}>Let's Talk Travel</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px,5vw,52px)', color: '#fff', fontWeight: 400 }}>
            Plan Your <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Dream Trip</em>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, fontWeight: 300, marginTop: '0.5rem' }}>
            Our travel experts respond within 2 hours, 7 days a week.
          </p>
        </div>
      </div>

      <div className="section-sm">
        <div className="container">
          <div className="contact-grid">
            {/* LEFT: INFO */}
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, marginBottom: '1.5rem' }}>Get in Touch</div>
              {[
                { icon: '📍', label: 'Office Address', value: 'Ward no.7  Radhika Colony Airport Road Khajuraho Distt, Chhatarpur Madhya Pradesh India 471606' },
                { icon: '📞', label: 'Phone / WhatsApp', value: '+91 8109085766,+91 755085766' },
                { icon: '✉️', label: 'Email', value: 'tourmaharajatravel@gmail.com' },
                { icon: '🕐', label: 'Working Hours', value: 'Monday–Saturday, 9:00 AM – 7:00 PM IST' },
              ].map(item => (
                <div key={item.label} className="contact-info-item">
                  
                  <div>
                    <div style={{ fontSize: 11, color: 'var(--text-hint)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 3 }}>{item.label}</div>
                    <div style={{ fontSize: 14, fontWeight: 500 }}>{item.value}</div>
                  </div>
                </div>
              ))}

              <div style={{ background: 'var(--surface2)', borderRadius: 12, padding: '1.25rem', marginTop: '1rem', border: '1px solid var(--border)' }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', marginBottom: 10 }}>POPULAR ENQUIRIES RIGHT NOW</div>
                {['Bali 7N/8D • from ₹32,500', 'Switzerland 10D • from ₹89,000', 'Maldives 5D • from ₹1,25,000', 'Kerala Backwaters 5D • from ₹18,500'].map(p => (
                  <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, marginBottom: 8, color: 'var(--text-muted)' }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--brand)', display: 'inline-block', flexShrink: 0 }} />
                    {p}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: FORM */}
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem', background: 'var(--surface2)', borderRadius: 16, border: '1px solid var(--border)' }}>
                <div style={{ fontSize: 64, marginBottom: '1rem' }}>🎉</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, marginBottom: '0.75rem' }}>Enquiry Sent!</div>
                <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  Thank you, <strong>{form.name}</strong>! Our travel expert will call or email you at <strong>{form.email}</strong> within 2 hours with a personalised itinerary.
                </p>
                <button className="btn-primary" onClick={() => setSubmitted(false)}>Send Another Enquiry</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 16, padding: '2rem' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, marginBottom: '1.5rem' }}>Enquiry Form</div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input className="form-input" name="name" placeholder="Rahul Sharma" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input className="form-input" name="phone" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input className="form-input" name="email" type="email" placeholder="rahul@email.com" value={form.email} onChange={handleChange} required />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Interested Package</label>
                    <select className="form-input" name="package" value={form.package} onChange={handleChange}>
                      <option value="">— Select a package —</option>
                      {packages.map(p => <option key={p.id} value={p.title}>{p.title}</option>)}
                      <option value="custom">Custom Itinerary</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Number of Travellers</label>
                    <select className="form-input" name="people" value={form.people} onChange={handleChange}>
                      {[1,2,3,4,5,6,8,10,15,20].map(n => <option key={n} value={n}>{n} {n === 1 ? 'person' : 'people'}</option>)}
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Preferred Travel Date</label>
                    <input className="form-input" name="date" type="date" value={form.date} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Budget Per Person</label>
                    <select className="form-input" name="budget" value={form.budget} onChange={handleChange}>
                      <option value="">— Select budget —</option>
                      <option>Under ₹25,000</option>
                      <option>₹25,000 – ₹50,000</option>
                      <option>₹50,000 – ₹1,00,000</option>
                      <option>Above ₹1,00,000</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Message / Special Requests</label>
                  <textarea className="form-input" name="message" placeholder="Tell us about your travel dreams, special occasions, dietary needs..." value={form.message} onChange={handleChange} />
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '13px' }}>
                  Send Enquiry ✈
                </button>
                <div style={{ fontSize: 12, color: 'var(--text-hint)', textAlign: 'center', marginTop: '0.75rem' }}>
                  We respond within 2 hours · No spam, ever
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
