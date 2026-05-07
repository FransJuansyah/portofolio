const IconExt = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

const graphicProjects = [
  { id:1, title:'BSI UII Identity',      sub:'Brand Identity Design', year:'2023', desc:'Designed brand identity materials including logo, color system, and visual guidelines for BSI UII.',               tags:['Figma','Branding','Logo','Identity'],          img:'/assets/works/bgzoom.png',           link:'https://www.figma.com/design/HHZItpvLI9ThNDpE8GOT3X/Untitled?node-id=3-2&t=PyiHHi51knPLIVnQ-1', color:'#7C6AF7' },
  { id:2, title:'Flyer PT. Lestari',     sub:'Flyer & Print Design',  year:'2023', desc:'Created promotional flyer for PT. Lestari with eco-friendly visual concept and clean typographic layout.',        tags:['Figma','Flyer','Print','Eco Design'],          img:'/assets/works/lestari.png',          link:'https://www.figma.com/design/ytWYrk0IKzaTH5abIi8DmP/Untitled?node-id=2-26&t=2EbEMNx21wOyNFMI-1', color:'#22C55E' },
  { id:3, title:'Arsitektur Jaringan',   sub:'Network Infographic',   year:'2022', desc:'Created detailed network architecture infographic for Diskominfo Kota Palembang. Visualized complex network topology in a clean diagram for internal documentation.',   tags:['Figma','Infographic','Network','Gov'],         img:'/assets/works/arsitektur-jaringan.png', link:'https://www.figma.com/design/EFLcofjuvTG7vg58hv9Pf9/Untitled?node-id=24-8&t=YUaHOvfk27jn7zGI-1', color:'#2DD4BF' },
  { id:4, title:'VisionaryDev',          sub:'Web Visual Design',     year:'2023', desc:'Designed visual assets and layout concepts for VisionaryDev — a developer-focused brand with a sleek dark aesthetic.',  tags:['Figma','Web Design','Dark Theme','Visual'],   img:'/assets/works/vi-dev.png',           link:'https://www.figma.com/design/4etwdRgRCO3MQpvx6LkGQV/Untitled?node-id=1-311&t=oWw11jE9nmMCVnCO-1', color:'#F472B6' },
]

export default function Graphic() {
  return (
    <section id="graphic" className="sec" style={{ borderTop:'1px solid rgba(255,255,255,0.05)' }}>
      <div className="wrap">
        <div className="fu" style={{ marginBottom:48 }}>
          <div className="slabel">03 — Creative</div>
          <h2 style={{ fontSize:'clamp(28px,4vw,48px)', fontWeight:800, letterSpacing:'-1px', marginBottom:10 }}>
            Graphic <span className="gt2">Design</span>
          </h2>
          <p style={{ fontSize:14, color:'rgba(255,255,255,0.35)', maxWidth:500, lineHeight:1.7 }}>
            Creating impactful brand identities, print materials, infographics, and visual assets using <strong style={{ color:'#5eead4' }}>Figma</strong>, Photoshop, and CorelDRAW.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:14 }}>
          {graphicProjects.map((p,i) => (
            <div key={p.id} className="fu gc" style={{ overflow:'hidden', animationDelay:i*0.08+'s', border:'1px solid rgba(255,255,255,0.07)' }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.borderColor=p.color+'45'; e.currentTarget.style.boxShadow='0 16px 40px '+p.color+'12' }}
              onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.07)'; e.currentTarget.style.boxShadow='none' }}
            >
              <div style={{ height:180, overflow:'hidden', background:'linear-gradient(135deg,'+p.color+'14,'+p.color+'06)', position:'relative' }}>
                <img src={p.img} alt={p.title} style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.4s' }}
                  onMouseEnter={e => e.target.style.transform='scale(1.06)'}
                  onMouseLeave={e => e.target.style.transform='scale(1)'}
                  onError={e => e.target.style.display='none'}
                />
                <div style={{ position:'absolute', top:12, left:12, background:'rgba(6,8,16,0.7)', backdropFilter:'blur(8px)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:99, padding:'3px 10px', fontSize:10, fontWeight:700, color:'rgba(255,255,255,0.7)' }}>{p.sub}</div>
              </div>
              <div style={{ padding:'18px 20px' }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:8 }}>
                  <div>
                    <p style={{ fontSize:11, color:'rgba(255,255,255,0.25)', marginBottom:3 }}>{p.year}</p>
                    <h3 style={{ fontSize:16, fontWeight:700, color:'#fff', letterSpacing:'-0.2px' }}>{p.title}</h3>
                  </div>
                  <a href={p.link} target="_blank" rel="noreferrer" style={{ width:30, height:30, borderRadius:8, background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.09)', display:'flex', alignItems:'center', justifyContent:'center', color:'rgba(255,255,255,0.35)', textDecoration:'none', transition:'all 0.2s', flexShrink:0 }}
                    onMouseEnter={e => { e.currentTarget.style.background=p.color+'18'; e.currentTarget.style.color=p.color }}
                    onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.05)'; e.currentTarget.style.color='rgba(255,255,255,0.35)' }}
                  ><IconExt /></a>
                </div>
                <p style={{ fontSize:13, color:'rgba(255,255,255,0.4)', lineHeight:1.65, marginBottom:12 }}>{p.desc}</p>
                <div style={{ display:'flex', flexWrap:'wrap', gap:5 }}>
                  {p.tags.map(t => <span key={t} className="tag tt">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
