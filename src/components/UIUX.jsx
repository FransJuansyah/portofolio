const IconExt = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)
const IconFigma = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/>
    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/>
    <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/>
    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/>
    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/>
  </svg>
)

const uiuxProjects = [
  {
    id:1, featured:true,
    title:'IDLIX Mobile Redesign',
    sub:'Unofficial UI/UX Redesign · 2025',
    desc:'Redesigned the mobile interface of IDLIX movie streaming app. Improved user flow, homepage layout, search experience, and watchlist organization. Created high-fidelity mockups using Figma applying modern design principles and mobile usability standards.',
    tags:['Figma','Mobile UI','UX Research','High-fidelity','Streaming App','User Flow'],
    link:'https://www.figma.com/proto/ZLAjvfNNdVXIEH4KaaTuiJ/Untitled?page-id=0%3A1&node-id=24-137&viewport=188%2C252%2C0.24&t=EJgIylokTkflJEbq-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=3%3A125',
    img:'/assets/works/idlix.png',
    color:'#F472B6',
    linkLabel:'Try Prototype',
    highlights:['User Flow Redesign','Modern Dark UI','High-fidelity Figma','Mobile Usability'],
  },
  {
    id:2, featured:true,
    title:'SIMAK UNSRI Mobile App',
    sub:'Thesis Project · Feb – Apr 2023',
    desc:'Redesigned the academic information system of Sriwijaya University using Design Thinking methodology. Conducted user research, persona creation, usability testing, and built an improved mobile prototype focused on clarity, accessibility, and student-centered experience.',
    tags:['Figma','Design Thinking','User Research','Usability Testing','Mobile UI','Prototype'],
    link:'https://www.figma.com/proto/Zqev8RmQhbe9AUI9NV2REY/Untitled?page-id=0%3A1&node-id=480-309&viewport=198%2C314%2C0.07&t=XJ60z3u0iP6tGzLX-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=480%3A309&show-proto-sidebar=1',
    img:'/assets/works/simak_unsri.png',
    color:'#7C6AF7',
    linkLabel:'Try Prototype',
    highlights:['Design Thinking','User Persona','Usability Testing','Mobile-first'],
  },
  {
    id:3, featured:false,
    title:'Microland App',
    sub:'UI/UX Design · 2023',
    desc:'Designed a clean and professional app interface for Microland. Focused on brand alignment, visual hierarchy, and responsive layout to communicate business values effectively.',
    tags:['Figma','App Design','UI/UX','Branding','Prototype'],
    link:'https://www.figma.com/proto/sxzDrGNBLYiCMUfzXBOgTz/Untitled?page-id=0%3A1&node-id=1-2&viewport=328%2C184%2C0.16&t=Aw0JwSLJz3pkVb7q-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=9%3A79',
    img:'/assets/works/microland.png',
    color:'#2DD4BF', linkLabel:'Try Prototype',
  },
  {
    id:4, featured:false,
    title:'Barangku App',
    sub:'UX Certification Project · Mar 2024',
    desc:'Mobile app prototype created as part of UX Design certification (Dicoding). Included user persona creation, wireframing, prototyping, and iterative design cycles using Figma.',
    tags:['Figma','Wireframing','Prototyping','User Persona','UX Cert'],
    link:'https://www.figma.com/proto/OPkBpLVVs8BVYychbwf8YP/Untitled?page-id=0%3A1&team_id=1078872398353487581&node-id=58-232&starting-point-node-id=13%3A4&t=OnOoS7FyPhnlHX5I-1',
    img:'/assets/works/barangku.png',
    color:'#FBBF24', linkLabel:'Try Prototype',
  },
]

export default function UIUX() {
  const featured = uiuxProjects.filter(p => p.featured)
  const others   = uiuxProjects.filter(p => !p.featured)

  return (
    <section id="uiux" className="sec" style={{ background:'rgba(255,255,255,0.015)', borderTop:'1px solid rgba(255,255,255,0.05)', borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
      <div className="wrap">

        {/* Header */}
        <div className="fu" style={{ marginBottom:48 }}>
          <div className="slabel">02 — Specialized</div>
          <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', flexWrap:'wrap', gap:16 }}>
            <div>
              <h2 style={{ fontSize:'clamp(28px,4vw,48px)', fontWeight:800, letterSpacing:'-1px', lineHeight:1.05 }}>
                UI/UX <span className="gt">Design</span>
              </h2>
              <p style={{ fontSize:14, color:'rgba(255,255,255,0.35)', marginTop:10, maxWidth:520, lineHeight:1.7 }}>
                Designing user-centered interfaces and high-fidelity prototypes with <strong style={{ color:'#f9a8d4' }}>Figma</strong>. From research and wireframes to polished interactive prototypes — every pixel is intentional.
              </p>
            </div>
            <div style={{ display:'flex', gap:8 }}>
              {['Figma','Design Thinking','Prototyping','User Research'].map(t => (
                <span key={t} className="tag tpk">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Featured — 2 column */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14, marginBottom:14 }}>
          {featured.map((p,i) => (
            <div key={p.id} className="fu" style={{
              background:'linear-gradient(135deg,'+p.color+'12,'+p.color+'04)',
              border:'1px solid '+p.color+'25', borderRadius:20, overflow:'hidden',
              transition:'all 0.3s', animationDelay:i*0.08+'s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='0 20px 50px '+p.color+'18' }}
              onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='none' }}
            >
              {/* Image */}
              <div style={{ height:180, overflow:'hidden', background:p.color+'10', position:'relative' }}>
                <img src={p.img} alt={p.title} style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.4s' }}
                  onMouseEnter={e => e.target.style.transform='scale(1.05)'}
                  onMouseLeave={e => e.target.style.transform='scale(1)'}
                  onError={e => e.target.style.display='none'}
                />
                <div style={{ position:'absolute', top:12, left:12, background:'rgba(6,8,16,0.75)', backdropFilter:'blur(8px)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:99, padding:'3px 10px', fontSize:10, fontWeight:700, color:'rgba(255,255,255,0.75)' }}>FEATURED</div>
              </div>
              <div style={{ padding:'20px 22px' }}>
                <p style={{ fontSize:11, color:'rgba(255,255,255,0.25)', marginBottom:4 }}>{p.sub}</p>
                <h3 style={{ fontSize:17, fontWeight:700, color:'#fff', marginBottom:10, letterSpacing:'-0.2px' }}>{p.title}</h3>
                <p style={{ fontSize:13, color:'rgba(255,255,255,0.42)', lineHeight:1.7, marginBottom:14 }}>{p.desc}</p>
                <div style={{ display:'flex', flexWrap:'wrap', gap:5, marginBottom:16 }}>
                  {p.tags.map(t => <span key={t} className="tag tpk">{t}</span>)}
                </div>
                <a href={p.link} target="_blank" rel="noreferrer" className="btn btn-p btn-sm">
                  <IconFigma /> {p.linkLabel}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Others */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
          {others.map((p,i) => (
            <div key={p.id} className="fu gc" style={{ overflow:'hidden', animationDelay:(i+2)*0.08+'s', border:'1px solid rgba(255,255,255,0.07)' }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.borderColor=p.color+'40' }}
              onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.07)' }}
            >
              {p.img && (
                <div style={{ height:140, overflow:'hidden', background:p.color+'08' }}>
                  <img src={p.img} alt={p.title} style={{ width:'100%', height:'100%', objectFit:'cover' }}
                    onError={e => e.target.style.display='none'}
                  />
                </div>
              )}
              <div style={{ padding:'18px 20px' }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:8 }}>
                  <div>
                    <p style={{ fontSize:11, color:'rgba(255,255,255,0.25)', marginBottom:3 }}>{p.sub}</p>
                    <h3 style={{ fontSize:16, fontWeight:700, color:'#fff', letterSpacing:'-0.2px' }}>{p.title}</h3>
                  </div>
                  <a href={p.link} target="_blank" rel="noreferrer" style={{ width:30, height:30, borderRadius:8, background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.09)', display:'flex', alignItems:'center', justifyContent:'center', color:'rgba(255,255,255,0.35)', textDecoration:'none', transition:'all 0.2s', flexShrink:0 }}
                    onMouseEnter={e => { e.currentTarget.style.background=p.color+'18'; e.currentTarget.style.color=p.color }}
                    onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.05)'; e.currentTarget.style.color='rgba(255,255,255,0.35)' }}
                  ><IconExt /></a>
                </div>
                <p style={{ fontSize:13, color:'rgba(255,255,255,0.4)', lineHeight:1.65, marginBottom:12 }}>{p.desc}</p>
                <div style={{ display:'flex', flexWrap:'wrap', gap:5 }}>
                  {p.tags.map(t => <span key={t} className="tag tpk">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
