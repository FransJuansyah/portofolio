const IconPhone = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <rect x="5" y="2" width="14" height="20" rx="2"/>
    <line x1="12" y1="18" x2="12.01" y2="18"/>
  </svg>
)
const IconLayers = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
  </svg>
)
const IconMonitor = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
)
const IconExternal = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

const projects = [
  {
    id: 1,
    title: 'SIMAK UNSRI Mobile Redesign',
    subtitle: 'UI/UX Design · Design Thinking',
    period: 'Feb - Apr 2023',
    description: "Redesigned the mobile version of Sriwijaya University's academic information system using the Design Thinking framework. Conducted user research, usability testing, and delivered an improved UI prototype focusing on clarity and accessibility.",
    tags: ['Figma', 'Design Thinking', 'User Research', 'Usability Testing', 'Mobile UI', 'Prototype'],
    color: '#6366F1',
    gradient: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.1))',
    border: 'rgba(99,102,241,0.3)',
    link: '#',
    Icon: IconPhone,
    highlights: ['User Research & Persona', 'Wireframing & Prototyping', 'Usability Testing', 'Mobile-first Design'],
    featured: true,
  },
  {
    id: 2,
    title: 'AgeSell — Konter Digital',
    subtitle: 'Frontend Development · React',
    period: '2025',
    description: 'Full frontend portfolio project for a digital pulsa counter platform. Built with React + Vite featuring a modern glassmorphism UI with dark theme and complete transaction flow.',
    tags: ['React', 'Vite', 'Glassmorphism', 'UI/UX', 'JavaScript', 'CSS'],
    color: '#EC4899',
    gradient: 'linear-gradient(135deg, rgba(236,72,153,0.2), rgba(168,85,247,0.1))',
    border: 'rgba(236,72,153,0.3)',
    link: '#',
    Icon: IconLayers,
    highlights: ['8 Halaman Lengkap', 'Glassmorphism UI', 'React Router', 'Interactive Dashboard'],
    featured: false,
  },
  {
    id: 3,
    title: 'SIMASTI — Diskominfo Palembang',
    subtitle: 'Frontend Development · React',
    period: 'Feb - Apr 2022',
    description: 'Sistem Manajemen Aset Teknologi Informasi untuk Diskominfo Kota Palembang. Mengelola inventaris IT, peminjaman aset, maintenance, manajemen user, dan laporan analisis.',
    tags: ['React', 'Vite', 'Recharts', 'Government', 'Dashboard', 'IT Inventory'],
    color: '#2DD4BF',
    gradient: 'linear-gradient(135deg, rgba(45,212,191,0.2), rgba(99,102,241,0.1))',
    border: 'rgba(45,212,191,0.3)',
    link: '#',
    Icon: IconMonitor,
    highlights: ['7 Halaman Lengkap', 'Data Aset IT', 'Chart & Laporan', 'Role-based Access'],
    featured: false,
  },
]

export default function Projects() {
  const featured = projects.find(p => p.featured)
  const others = projects.filter(p => !p.featured)

  return (
    <section id="projects" style={{ background:'rgba(255,255,255,0.015)', borderTop:'1px solid rgba(255,255,255,0.05)', borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
      <div className="section">
        <div className="fade-up" style={{ textAlign:'center', marginBottom:60 }}>
          <div className="section-label" style={{ justifyContent:'center' }}>Projects</div>
          <h2 style={{ fontSize:'clamp(28px,4vw,42px)', fontWeight:800, letterSpacing:'-0.8px' }}>
            Things I have <span className="grad-text">Built</span>
          </h2>
          <p style={{ fontSize:15, color:'rgba(255,255,255,0.4)', marginTop:12, maxWidth:480, margin:'12px auto 0' }}>
            A selection of projects showcasing my skills in UI/UX design and frontend development
          </p>
        </div>

        {featured && (
          <div className="fade-up d1" style={{ marginBottom:20 }}>
            <div style={{
              background: featured.gradient,
              border: '1px solid ' + featured.border,
              borderRadius: 24, padding: '36px 40px',
              display: 'grid', gridTemplateColumns: '1fr auto',
              gap: 40, alignItems: 'center',
              transition: 'all 0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='0 24px 60px ' + featured.color + '20' }}
              onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='none' }}
            >
              <div>
                <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:16 }}>
                  <div style={{ width:44, height:44, borderRadius:12, background:featured.color + '20', border:'1px solid ' + featured.color + '40', display:'flex', alignItems:'center', justifyContent:'center', color:featured.color }}>
                    <featured.Icon />
                  </div>
                  <div>
                    <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                      <span style={{ fontSize:11, fontWeight:700, padding:'2px 10px', borderRadius:99, background:featured.color + '20', color:featured.color, border:'1px solid ' + featured.color + '30' }}>FEATURED</span>
                      <span style={{ fontSize:11, color:'rgba(255,255,255,0.3)', fontWeight:500 }}>{featured.period}</span>
                    </div>
                    <h3 style={{ fontSize:22, fontWeight:800, color:'#fff', marginTop:4, letterSpacing:'-0.3px' }}>{featured.title}</h3>
                  </div>
                </div>
                <p style={{ fontSize:14, color:'rgba(255,255,255,0.5)', lineHeight:1.75, maxWidth:580, marginBottom:20 }}>{featured.description}</p>
                <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginBottom:24 }}>
                  {featured.tags.map(t => <span key={t} className="tag tag-purple">{t}</span>)}
                </div>
                <a href={featured.link} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
                  <IconExternal /> View Project
                </a>
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:8, minWidth:200 }}>
                {featured.highlights.map((h, i) => (
                  <div key={i} style={{ display:'flex', alignItems:'center', gap:10, background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:10, padding:'10px 14px' }}>
                    <div style={{ width:6, height:6, borderRadius:'50%', background:featured.color, flexShrink:0 }} />
                    <span style={{ fontSize:12, fontWeight:600, color:'rgba(255,255,255,0.65)' }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
          {others.map((p, i) => (
            <div key={p.id} className={'fade-up d' + (i+2)} style={{
              background: p.gradient,
              border: '1px solid ' + p.border,
              borderRadius: 20, padding: '28px 28px',
              transition: 'all 0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='0 20px 40px ' + p.color + '18' }}
              onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='none' }}
            >
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:16 }}>
                <div style={{ width:42, height:42, borderRadius:11, background:p.color + '20', border:'1px solid ' + p.color + '40', display:'flex', alignItems:'center', justifyContent:'center', color:p.color }}>
                  <p.Icon />
                </div>
                <a href={p.link} target="_blank" rel="noreferrer" style={{
                  width:34, height:34, borderRadius:9,
                  background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.12)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  color:'rgba(255,255,255,0.5)', textDecoration:'none', transition:'all 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background=p.color + '20'; e.currentTarget.style.color=p.color }}
                  onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.06)'; e.currentTarget.style.color='rgba(255,255,255,0.5)' }}
                >
                  <IconExternal />
                </a>
              </div>
              <p style={{ fontSize:11, color:'rgba(255,255,255,0.3)', fontWeight:500, marginBottom:4 }}>{p.period} · {p.subtitle}</p>
              <h3 style={{ fontSize:18, fontWeight:700, color:'#fff', marginBottom:10, letterSpacing:'-0.2px' }}>{p.title}</h3>
              <p style={{ fontSize:13, color:'rgba(255,255,255,0.45)', lineHeight:1.7, marginBottom:18 }}>{p.description}</p>
              <div style={{ display:'flex', flexWrap:'wrap', gap:5, marginBottom:16 }}>
                {p.tags.slice(0,4).map(t => (
                  <span key={t} className="tag" style={{ fontSize:'10px', background:p.color + '12', color:p.color, borderColor:p.color + '30' }}>{t}</span>
                ))}
              </div>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'6px 14px' }}>
                {p.highlights.map((h, j) => (
                  <div key={j} style={{ display:'flex', alignItems:'center', gap:5 }}>
                    <div style={{ width:4, height:4, borderRadius:'50%', background:p.color }} />
                    <span style={{ fontSize:11, color:'rgba(255,255,255,0.4)', fontWeight:500 }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
