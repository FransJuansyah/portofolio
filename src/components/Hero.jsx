const IconArr = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
)

const skills = [
  { label:'Frontend Dev', color:'#7C6AF7', bg:'rgba(124,106,247,0.15)' },
  { label:'UI/UX Design', color:'#F472B6', bg:'rgba(244,114,182,0.15)' },
  { label:'Graphic Design', color:'#2DD4BF', bg:'rgba(45,212,191,0.15)' },
  { label:'Video Editing', color:'#FBBF24', bg:'rgba(251,191,36,0.15)' },
  { label:'Content Creator', color:'#A78BFA', bg:'rgba(167,139,250,0.15)' },
]

export default function Hero() {
  return (
    <section style={{ minHeight:'100vh', display:'flex', alignItems:'center', position:'relative', overflow:'hidden' }}>
      {/* BG */}
      <div style={{ position:'absolute', inset:0, zIndex:0, pointerEvents:'none' }}>
        <div style={{ position:'absolute', width:700, height:700, borderRadius:'50%', background:'radial-gradient(circle, rgba(124,106,247,0.13) 0%, transparent 65%)', top:'-15%', left:'-10%', animation:'float 9s ease-in-out infinite' }} />
        <div style={{ position:'absolute', width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle, rgba(244,114,182,0.09) 0%, transparent 65%)', top:'20%', right:'-5%', animation:'float 11s ease-in-out infinite 2s' }} />
        <div style={{ position:'absolute', width:350, height:350, borderRadius:'50%', background:'radial-gradient(circle, rgba(45,212,191,0.07) 0%, transparent 65%)', bottom:'5%', left:'38%', animation:'float 8s ease-in-out infinite 1s' }} />
        <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(124,106,247,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(124,106,247,0.025) 1px, transparent 1px)', backgroundSize:'64px 64px' }} />
      </div>

      <div className="wrap" style={{ position:'relative', zIndex:1, paddingTop:110, paddingBottom:70, width:'100%' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 360px', gap:64, alignItems:'center' }}>

          {/* LEFT */}
          <div>
            <div className="fu" style={{ display:'inline-flex', alignItems:'center', gap:8, background:'rgba(124,106,247,0.1)', border:'1px solid rgba(124,106,247,0.25)', borderRadius:99, padding:'5px 14px', marginBottom:26 }}>
              <div style={{ width:7, height:7, borderRadius:'50%', background:'#7C6AF7', animation:'pulse 2s infinite' }} />
              <span style={{ fontSize:12, fontWeight:600, color:'#a5b4fc' }}>Open for Freelance & Full-time · 2026</span>
            </div>

            <h1 className="fu d1" style={{ fontSize:'clamp(36px,5vw,66px)', fontWeight:800, lineHeight:1.07, letterSpacing:'-1.5px', marginBottom:18 }}>
              Hi, I'm <span className="gt">Frans</span><br />
              <span style={{ color:'rgba(255,255,255,0.88)' }}>Juansyah</span>
            </h1>

            <p className="fu d2" style={{ fontSize:'clamp(16px,2vw,20px)', fontWeight:600, color:'rgba(255,255,255,0.55)', letterSpacing:'-0.2px', marginBottom:12 }}>
              Frontend-End Web Developer & UI/UX Designer
            </p>
            <p className="fu d2" style={{ fontSize:14, color:'rgba(255,255,255,0.38)', lineHeight:1.8, maxWidth:500, marginBottom:32 }}>
              Graduated from <span style={{ color:'#a5b4fc', fontWeight:600 }}>Universitas Sriwijaya</span> (GPA 3.67) — bridging complex technical logic with compelling visual narratives. Specialized in the <span style={{ color:'#5eead4', fontWeight:600 }}>TALL Stack</span> (Tailwind, Alpine.js, Laravel, Livewire) and crafting digital experiences that are functional, scalable, and visually stunning.
            </p>

            {/* Skill pills */}
            <div className="fu d3" style={{ display:'flex', flexWrap:'wrap', gap:8, marginBottom:32 }}>
              {skills.map(s => (
                <span key={s.label} style={{ padding:'7px 16px', borderRadius:99, fontSize:12, fontWeight:700, background:s.bg, color:s.color, border:'1px solid '+s.color+'30', fontFamily:"'Space Grotesk',sans-serif" }}>{s.label}</span>
              ))}
            </div>

            <div className="fu d4" style={{ display:'flex', gap:10, flexWrap:'wrap', marginBottom:40 }}>
              <a href="#frontend" className="btn btn-p">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                View My Work
              </a>
              <a href="#about" className="btn btn-o">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                About Me
              </a>
            </div>

            {/* Socials */}
            <div className="fu d5" style={{ display:'flex', alignItems:'center', gap:12 }}>
              <span style={{ fontSize:11, fontWeight:600, color:'rgba(255,255,255,0.18)', letterSpacing:'0.1em', textTransform:'uppercase' }}>Find me</span>
              <div style={{ height:1, width:18, background:'rgba(255,255,255,0.1)' }} />
              {[
                { label:'YouTube',   href:'https://www.youtube.com/@kuhaku5800',          icon:<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#060810"/></svg> },
                { label:'GitHub',    href:'https://github.com/FransJuansyah',              icon:<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg> },
                { label:'TikTok',    href:'https://www.tiktok.com/@kuhaku5800',            icon:<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.01a8.16 8.16 0 0 0 4.77 1.52V7.07a4.85 4.85 0 0 1-1-.38z"/></svg> },
                { label:'LinkedIn',  href:'https://www.linkedin.com/in/frans-juansyah-riolando-30074532b/',   icon:<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
                { label:'Instagram', href:'https://www.instagram.com/fransjuansyah/',     icon:<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" title={s.label} style={{ width:36, height:36, borderRadius:9, background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.08)', display:'flex', alignItems:'center', justifyContent:'center', color:'rgba(255,255,255,0.4)', textDecoration:'none', transition:'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background='rgba(124,106,247,0.15)'; e.currentTarget.style.color='#a5b4fc'; e.currentTarget.style.borderColor='rgba(124,106,247,0.4)' }}
                  onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.05)'; e.currentTarget.style.color='rgba(255,255,255,0.4)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.08)' }}
                >{s.icon}</a>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="fu d2" style={{ display:'flex', flexDirection:'column', gap:12 }}>
            <div style={{ position:'relative', alignSelf:'center', marginBottom:4 }}>
              <div style={{ width:200, height:200, borderRadius:'50%', overflow:'hidden', border:'2px solid rgba(124,106,247,0.3)', boxShadow:'0 0 60px rgba(124,106,247,0.18)', animation:'float 6s ease-in-out infinite', background:'linear-gradient(135deg,rgba(124,106,247,0.2),rgba(244,114,182,0.15))' }}>
                <img src="/assets/profile.png" alt="Frans Juansyah" style={{ width:'100%', height:'100%', objectFit:'cover' }}
                  onError={e => { e.target.style.display='none'; e.target.parentNode.innerHTML='<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:60px;font-weight:800;color:rgba(255,255,255,0.1);font-family:Space Grotesk,sans-serif">FJ</div>' }}
                />
              </div>
              <div style={{ position:'absolute', inset:-10, borderRadius:'50%', border:'1px dashed rgba(124,106,247,0.18)', animation:'spin 25s linear infinite' }} />
            </div>

            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:9 }}>
              {[
                { val:'3+',    label:'Years Creating',   color:'#a5b4fc' },
                { val:'3.67',  label:'GPA Sriwijaya',    color:'#5eead4' },
                { val:'15+',   label:'Projects Done',    color:'#f9a8d4' },
                { val:'2+',    label:'Certifications',   color:'#fde68a' },
              ].map(s => (
                <div key={s.label} style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:12, padding:'12px 14px', textAlign:'center' }}>
                  <p style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:22, fontWeight:700, color:s.color }}>{s.val}</p>
                  <p style={{ fontSize:11, fontWeight:600, color:'rgba(255,255,255,0.28)', marginTop:2 }}>{s.label}</p>
                </div>
              ))}
            </div>

            {/* Tech stack */}
            <div style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:12, padding:'13px 14px' }}>
              <p style={{ fontSize:10, fontWeight:700, color:'rgba(255,255,255,0.2)', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:9 }}>Tech Stack</p>
              <div style={{ display:'flex', flexWrap:'wrap', gap:5 }}>
                {['Laravel','Livewire','Alpine.js','Tailwind','React','Node.js','MySQL','Figma','Premiere Pro'].map(t => (
                  <span key={t} className="tag tp">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
