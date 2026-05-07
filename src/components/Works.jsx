import { useState } from 'react'

const IconExt = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

const works = [
  {
    id:1, title:'SIMAK UNSRI Mobile Redesign',
    category:'UI/UX Design', year:'Feb – Apr 2023',
    desc:'Redesigned Sriwijaya University academic information system using Design Thinking. Conducted user research, usability testing, and delivered high-fidelity mobile prototype with improved navigation and UX.',
    tags:['Figma','Design Thinking','User Research','Usability Testing','Mobile UI'],
    img:'/assets/works/simak_unsri.png',
    link:'#', color:'#7C6AF7', tagClass:'tp',
  },
  {
    id:2, title:'Brangku — UX Certification Project',
    category:'UI/UX Design', year:'Mar 2024',
    desc:'Mobile application prototype created as part of UX Design certification. Included user persona creation, wireframing, prototyping, and iterative design using Figma.',
    tags:['Figma','Wireframing','Prototyping','User Persona','UX Design'],
    img:'/assets/works/barangku.png',
    link:'#', color:'#F472B6', tagClass:'tpk',
  },
  {
    id:3, title:'IDLIX Mobile — Unofficial UI/UX Redesign',
    category:'UI/UX Design', year:'Mar 2025',
    desc:'Redesigned the mobile interface of IDLIX movie streaming app. Improved user flow, homepage layout, search experience, and watchlist organization using modern design principles.',
    tags:['Figma','Mobile UI','UX Design','High-fidelity','Streaming App'],
    img:'/assets/works/idlix.png',
    link:'#', color:'#2DD4BF', tagClass:'tt',
  },
  {
    id:4, title:'Microland — Company Profile Website',
    category:'UI/UX Design', year:'2023',
    desc:'Designed a clean and professional company profile website for Microland. Focused on brand identity, visual hierarchy, and responsive layout to communicate business values effectively.',
    tags:['Figma','Web Design','Company Profile','Responsive','Branding'],
    img:'/assets/works/microland.png',
    link:'#', color:'#FBBF24', tagClass:'ta',
  },
  {
    id:5, title:'Lestari — Eco Brand Design',
    category:'UI/UX Design', year:'2023',
    desc:'UI/UX design for an eco-friendly brand platform. Focused on green aesthetic, sustainability messaging, and user-friendly interface to promote environmental products.',
    tags:['Figma','Branding','Web Design','Eco Design','UI'],
    img:'/assets/works/lestari.png',
    link:'#', color:'#22C55E', tagClass:'tg',
  },
  {
    id:6, title:'Vi Dev — Developer Portfolio',
    category:'UI/UX Design', year:'2023',
    desc:'Designed a sleek personal portfolio website for a developer. Focused on dark theme aesthetics, clean typography, and showcasing technical projects in an engaging way.',
    tags:['Figma','Portfolio','Dark Theme','Web Design','UI'],
    img:'/assets/works/vi-dev.png',
    link:'#', color:'#7C6AF7', tagClass:'tp',
  },
  {
    id:7, title:'BGZoom — Background Tools App',
    category:'UI/UX Design', year:'2023',
    desc:'UI/UX design for a background zoom and enhancement tool application. Designed intuitive controls, preview features, and smooth editing workflow for end users.',
    tags:['Figma','App Design','UI/UX','Tools App','Mobile'],
    img:'/assets/works/bgzoom.png',
    link:'#', color:'#F472B6', tagClass:'tpk',
  },
  {
    id:8, title:'Arsitektur Jaringan — Network Infographic',
    category:'Graphic Design', year:'2022',
    desc:'Created detailed network architecture infographic for Diskominfo Kota Palembang internship. Visualized complex network topology in a clean and easy-to-understand diagram.',
    tags:['CorelDRAW','Infographic','Network','Government','Visual Design'],
    img:'/assets/works/arsitektur-jaringan.png',
    link:'#', color:'#2DD4BF', tagClass:'tt',
  },
  {
    id:9, title:'SIMASTI — IT Asset Management System',
    category:'Frontend Dev', year:'Feb – Apr 2022',
    desc:'Full frontend system for managing IT assets at Diskominfo Palembang. Features inventory management, borrowing system, maintenance tracking, user management, and analytics dashboard.',
    tags:['React','Vite','Recharts','Government','Dashboard','IT Inventory'],
    img:'', link:'#', color:'#7C6AF7', tagClass:'tp',
  },
  {
    id:10, title:'AgeSell — Digital Pulsa Counter',
    category:'Frontend Dev', year:'2025',
    desc:'Frontend portfolio project for a digital pulsa counter. Built with React + Vite featuring glassmorphism UI, animated dark theme, and complete transaction flow for all major operators.',
    tags:['React','Vite','Glassmorphism','UI/UX','JavaScript'],
    img:'', link:'#', color:'#F472B6', tagClass:'tpk',
  },
]

const cats = ['All','UI/UX Design','Graphic Design','Frontend Dev']

export default function Works() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? works : works.filter(w => w.category === active)

  return (
    <section id="works" className="sec" style={{ borderTop:'1px solid rgba(255,255,255,0.05)' }}>
      <div className="wrap">
        {/* Header */}
        <div className="fu" style={{ marginBottom:48 }}>
          <div className="slabel">My Works</div>
          <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', flexWrap:'wrap', gap:20 }}>
            <h2 style={{ fontSize:'clamp(28px,4vw,44px)', fontWeight:800, letterSpacing:'-0.8px', lineHeight:1.1 }}>
              Selected <span className="gt">Projects</span>
            </h2>
            {/* Filter tabs */}
            <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>
              {cats.map(c => (
                <button key={c} onClick={() => setActive(c)} style={{
                  padding:'7px 16px', borderRadius:99, fontSize:12, fontWeight:700,
                  cursor:'pointer', border:'1px solid', transition:'all 0.2s', fontFamily:"'Sora',sans-serif",
                  background: active===c ? 'rgba(124,106,247,0.2)' : 'transparent',
                  color: active===c ? '#a5b4fc' : 'rgba(255,255,255,0.4)',
                  borderColor: active===c ? 'rgba(124,106,247,0.4)' : 'rgba(255,255,255,0.1)',
                }}>{c}</button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:16 }}>
          {filtered.map((w, i) => (
            <div key={w.id} className="fu gc" style={{
              animationDelay: (i % 4) * 0.08 + 's',
              overflow:'hidden', cursor:'default',
              border:'1px solid rgba(255,255,255,0.07)',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = w.color + '40'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 40px ' + w.color + '14' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              {/* Image */}
              <div style={{ height:200, overflow:'hidden', position:'relative', background:'linear-gradient(135deg,' + w.color + '15,' + w.color + '05)' }}>
                {w.img ? (
                  <img src={w.img} alt={w.title} style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.4s ease' }}
                    onMouseEnter={e => e.target.style.transform='scale(1.05)'}
                    onMouseLeave={e => e.target.style.transform='scale(1)'}
                    onError={e => { e.target.style.display='none' }}
                  />
                ) : (
                  <div style={{ width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center' }}>
                    <span style={{ fontSize:48, fontWeight:800, color: w.color + '30', fontFamily:"'Space Grotesk',sans-serif" }}>{w.title.slice(0,2).toUpperCase()}</span>
                  </div>
                )}
                {/* Category badge */}
                <div style={{ position:'absolute', top:14, left:14, background:'rgba(6,8,16,0.75)', backdropFilter:'blur(10px)', border:'1px solid rgba(255,255,255,0.12)', borderRadius:99, padding:'4px 12px', fontSize:11, fontWeight:700, color:'rgba(255,255,255,0.8)' }}>
                  {w.category}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding:'20px 22px' }}>
                <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:10, marginBottom:8 }}>
                  <h3 style={{ fontSize:16, fontWeight:700, color:'#F1F5F9', letterSpacing:'-0.2px', lineHeight:1.3 }}>{w.title}</h3>
                  <a href={w.link} target="_blank" rel="noreferrer" style={{
                    width:30, height:30, borderRadius:8, flexShrink:0,
                    background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.09)',
                    display:'flex', alignItems:'center', justifyContent:'center',
                    color:'rgba(255,255,255,0.4)', textDecoration:'none', transition:'all 0.2s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = w.color + '20'; e.currentTarget.style.color = w.color }}
                    onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.05)'; e.currentTarget.style.color='rgba(255,255,255,0.4)' }}
                  ><IconExt /></a>
                </div>
                <p style={{ fontSize:11, color:'rgba(255,255,255,0.3)', fontWeight:500, marginBottom:10 }}>{w.year}</p>
                <p style={{ fontSize:13, color:'rgba(255,255,255,0.45)', lineHeight:1.65, marginBottom:14 }}>{w.desc}</p>
                <div style={{ display:'flex', flexWrap:'wrap', gap:5 }}>
                  {w.tags.map(t => <span key={t} className={'tag ' + w.tagClass}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
