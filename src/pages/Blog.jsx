import { blogPosts } from '../data/mockData'

const allPosts = [
  ...blogPosts,
  { id: 5, title: "Budget Travel: Explore Southeast Asia for ₹50,000", category: "Adventure", readTime: "7 min", emoji: "💰", color: "#d5f5e3", excerpt: "Yes, a full Southeast Asia trip is possible on a tight budget. Here's the exact breakdown." },
  { id: 6, title: "Honeymoon Destinations in India Under ₹1 Lakh", category: "Romantic", readTime: "6 min", emoji: "💑", color: "#fce4ec", excerpt: "From Kerala to Kashmir — the most romantic Indian getaways that won't break the bank." },
  { id: 7, title: "A Foodie's Guide to Eating Your Way Through Japan", category: "Cultural", readTime: "9 min", emoji: "🍜", color: "#fff9c4", excerpt: "Ramen, sushi, tempura, yakitori — the definitive eat-everything guide to Japan." },
  { id: 8, title: "Travel Photography: Capture Stunning Shots Anywhere", category: "Tips", readTime: "5 min", emoji: "📸", color: "#e8eaf6", excerpt: "Practical tips from professional travel photographers to instantly elevate your photos." },
]

export default function Blog() {
  const featured = allPosts[0]
  const rest = allPosts.slice(1)

  return (
    <div className="page-enter">
      <div style={{ background: 'var(--dark)', padding: '4rem 0 3rem' }}>
        <div className="container">
          <div className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.4)' }}>Travel Stories & Tips</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px,5vw,52px)', color: '#fff', fontWeight: 400 }}>
             Paryatak <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Journal</em>
          </h1>
        </div>
      </div>

      <div className="section-sm">
        <div className="container">
          {/* FEATURED POST */}
          <div style={{ background: featured.color, borderRadius: 16, padding: '2.5rem', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '2rem', marginBottom: '3rem', cursor: 'pointer', border: '1px solid var(--border)' }}
            className="pkg-card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 80 }}>
              {featured.emoji}
            </div>
            <div>
              <span className="badge badge-brand" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>Featured</span>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 600, lineHeight: 1.25, marginBottom: '0.75rem' }}>{featured.title}</div>
              <div style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>{featured.excerpt}</div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <span className="badge badge-green">{featured.category}</span>
                <span style={{ fontSize: 12, color: 'var(--text-hint)' }}>⏱ {featured.readTime} read</span>
              </div>
            </div>
          </div>

          {/* BLOG GRID */}
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, marginBottom: '1.5rem' }}>Latest Articles</div>
          <div className="blog-grid">
            {rest.map(post => (
              <div key={post.id} className="blog-card">
                <div className="blog-card-top" style={{ background: post.color }}>{post.emoji}</div>
                <div className="blog-card-body">
                  <div className="blog-card-cat">{post.category}</div>
                  <div className="blog-card-title">{post.title}</div>
                  <div className="blog-card-excerpt">{post.excerpt}</div>
                  <div className="blog-card-read">⏱ {post.readTime} read</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
