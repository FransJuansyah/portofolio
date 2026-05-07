const IconExt = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

const frontendProjects = [
  {
    id:1, featured:true,
    title:'SIMAK UNSRI — Sistem Informasi Akademik',
    sub:'Full-stack Web Application',
    year:'Feb – Apr 2023',
    desc:'Built the academic information system for Sriwijaya University. Handles student academic data, grade management, course scheduling, and faculty administration. Powered by Laravel with a clean and responsive interface.',
    tags:['Laravel','Livewire','Tailwind','MySQL','PHP','Web App'],
    link:'https://simak-unsri.infinityfreeapp.com/',
    img:'/assets/works/simak_unsri.png',
    color:'#7C6AF7',
    highlights:['Laravel 11 Backend','Livewire Realtime','Role-based Auth','Responsive UI'],
  },
  {
    id:2, featured:true,
    title:'Personal Portfolio Website',
    sub:'Frontend · React + Vite',
    year:'2025 – 2026',
    desc:'Designed and built a personal portfolio website showcasing all creative and technical works. Features smooth scroll, animated sections, dark cinematic theme, and multi-category project gallery.',
    tags:['React','Vite','CSS','JavaScript','Responsive'],
    link:'https://ananditha.vercel.app/',
    img:'',
    color:'#F472B6',
    highlights:['React + Vite','Dark Cinematic UI','Multi-category','Deployed on Vercel'],
  },
  {
    id:3, featured:false,
    title:'SIMASTI — IT Asset Management',
    sub:'Frontend · Diskominfo Palembang',
    year:'Feb – Apr 2022',
    desc:'Frontend system for managing IT assets at Diskominfo Kota Palembang. Features inventory management, borrowing tracking, maintenance logs, and analytics dashboard with charts.',
    tags:['React','Vite','Recharts','Dashboard','Government'],
    link:'https://simasti-diskominfo-palembang.vercel.app/',
    img:'',
    color:'#2DD4BF',
    highlights:['7 Full Pages','Recharts Analytics','Role Access','Clean Gov UI'],
  },
  {
    id:4, featured:false,
    title:'AgeSell — Digital Pulsa Counter',
    sub:'Frontend · React',
    year:'2025',
    desc:'Frontend portfolio project for a digital pulsa counter platform. Glassmorphism UI with dark theme, animated backgrounds, and complete transaction flow for all major telecom operators.',
    tags:['React','Vite','Glassmorphism','Dark Theme','UI/UX'],
    link:'https://agess-cell.vercel.app/',
    img:'',
    color:'#A78BFA',
    highlights:['8 Full Pages','Glassmorphism','React Router','Dark Animated UI'],
  },
]

export default function Frontend() {
  const featured = frontendProjects.filter(p => p.featured)
  const others   = frontendProjects.filter(p => !p.featured)

  return (
    <section id="frontend" className="sec" style={{ borderTop:'1px solid rgba(255,255,255,0.05)' }}>
      <div className="wrap">

        {/* Header */}
        <div className="fu" style={{ marginBottom:48 }}>
          <div className="slabel">01 — Specialized</div>
          <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', flexWrap:'wrap', gap:16 }}>
            <div>
              <h2 style={{ fontSize:'clamp(28px,4vw,48px)', fontWeight:800, letterSpacing:'-1px', lineHeight:1.05 }}>
                Frontend <span className="gt">Development</span>
              </h2>
              <p style={{ fontSize:14, color:'rgba(255,255,255,0.35)', marginTop:10, maxWidth:520, lineHeight:1.7 }}>
                Building robust web applications with the <strong style={{ color:'#a5b4fc' }}>TALL Stack</strong> (Tailwind, Alpine.js, Laravel, Livewire), React, and Node.js — crafting experiences that are fast, scalable, and beautiful.
              </p>
            </div>
            <div style={{ display:'flex', gap:8 }}>
              {['Laravel','React','Livewire','Tailwind','Node.js'].map(t => (
                <span key={t} className="tag tp">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Featured projects — full width */}
        <div style={{ display:'flex', flexDirection:'column', gap:14, marginBottom:14 }}>
          {featured.map((p, i) => (
            <div key={p.id} className="fu" style={{
              background:'linear-gradient(135deg,'+p.color+'12,'+p.color+'05)',
              border:'1px solid '+p.color+'25',
              borderRadius:20, padding:'30px 32px',
              display:'grid', gridTemplateColumns: p.img ? '1fr 280px' : '1fr',
              gap:32, alignItems:'center', transition:'all 0.3s',
              animationDelay: i*0.08+'s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow='0 20px 50px '+p.color+'18' }}
              onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='none' }}
            >
              <div>
                <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:14 }}>
                  <span style={{ fontSize:11, fontWeight:700, padding:'3px 10px', borderRadius:99, background:p.color+'20', color:p.color, border:'1px solid '+p.color+'35' }}>FEATURED PROJECT</span>
                  <span style={{ fontSize:11, color:'rgba(255,255,255,0.25)' }}>{p.year}</span>
                </div>
                <h3 style={{ fontSize:22, fontWeight:800, color:'#fff', letterSpacing:'-0.3px', marginBottom:4 }}>{p.title}</h3>
                <p style={{ fontSize:13, color:p.color, fontWeight:600, marginBottom:12 }}>{p.sub}</p>
                <p style={{ fontSize:14, color:'rgba(255,255,255,0.45)', lineHeight:1.75, maxWidth:560, marginBottom:18 }}>{p.desc}</p>
                <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginBottom:20 }}>
                  {p.tags.map(t => <span key={t} className="tag tp">{t}</span>)}
                </div>
                <a href={p.link} target="_blank" rel="noreferrer" className="btn btn-p btn-sm">
                  <IconExt /> View Project
                </a>
              </div>
              {/* Highlights */}
              <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
                {p.highlights.map((h,j) => (
                  <div key={j} style={{ display:'flex', alignItems:'center', gap:10, background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:10, padding:'10px 14px' }}>
                    <div style={{ width:6, height:6, borderRadius:'50%', background:p.color, flexShrink:0 }} />
                    <span style={{ fontSize:12, fontWeight:600, color:'rgba(255,255,255,0.6)' }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Other projects */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
          {others.map((p,i) => (
            <div key={p.id} className="fu gc" style={{
              padding:'22px 24px', animationDelay:(i+2)*0.08+'s',
              border:'1px solid rgba(255,255,255,0.07)',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.borderColor=p.color+'40'; e.currentTarget.style.boxShadow='0 16px 36px '+p.color+'12' }}
              onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.07)'; e.currentTarget.style.boxShadow='none' }}
            >
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:12 }}>
                <div style={{ width:38, height:38, borderRadius:10, background:p.color+'18', border:'1px solid '+p.color+'30', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth="2" strokeLinecap="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                </div>
                <a href={p.link} target="_blank" rel="noreferrer" style={{ width:30, height:30, borderRadius:8, background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.09)', display:'flex', alignItems:'center', justifyContent:'center', color:'rgba(255,255,255,0.35)', textDecoration:'none', transition:'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background=p.color+'18'; e.currentTarget.style.color=p.color }}
                  onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.05)'; e.currentTarget.style.color='rgba(255,255,255,0.35)' }}
                ><IconExt /></a>
              </div>
              <p style={{ fontSize:11, color:'rgba(255,255,255,0.25)', marginBottom:4 }}>{p.year} · {p.sub}</p>
              <h3 style={{ fontSize:16, fontWeight:700, color:'#fff', marginBottom:8, letterSpacing:'-0.2px' }}>{p.title}</h3>
              <p style={{ fontSize:13, color:'rgba(255,255,255,0.4)', lineHeight:1.65, marginBottom:14 }}>{p.desc}</p>
              <div style={{ display:'flex', flexWrap:'wrap', gap:5 }}>
                {p.tags.map(t => <span key={t} className="tag tp">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
