const IconYT = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#060810"/>
  </svg>
)

const contents = [
  { id:1, title:'G-Necklace — Arena Breakout: Infinite [TV Station]',              sub:'Content Creation · Gaming', img:'/assets/creator/g-necklace.png', link:'https://youtu.be/Kzx2WigosKo',    color:'#7C6AF7', tags:['Gaming','Content','Arena Breakout','TV Station'] },
  { id:2, title:'#07 Try Hard With Dream Team — Arena Breakout [TV Station]',       sub:'Content Creation · Gaming', img:'/assets/creator/dreamteam.png',  link:'https://youtu.be/O9Q8KxQWfOM',   color:'#F472B6', tags:['Gaming','Team Content','Arena Breakout','Series'] },
  { id:3, title:'#06 Try Hard With Dream Team — Arena Breakout [TV Station]',       sub:'Content Creation · Gaming', img:'/assets/creator/music.png',      link:'https://youtu.be/-_8LDO7HnXA',   color:'#2DD4BF', tags:['Gaming','Content','Arena Breakout','Series'] },
  { id:4, title:'Combo Duo with NahidaLover — Arena Breakout: Infinite [TVStation]',sub:'Content Creation · Gaming', img:'/assets/creator/orang.png',      link:'https://youtu.be/hJ0tqoPYzJM',   color:'#FBBF24', tags:['Gaming','Duo Content','Arena Breakout','Collab'] },
]

export default function Creator() {
  return (
    <section id="creator" className="sec" style={{ borderTop:'1px solid rgba(255,255,255,0.05)' }}>
      <div className="wrap">
        <div className="fu" style={{ marginBottom:48 }}>
          <div className="slabel">05 — Creative</div>
          <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', flexWrap:'wrap', gap:16 }}>
            <div>
              <h2 style={{ fontSize:'clamp(28px,4vw,48px)', fontWeight:800, letterSpacing:'-1px', marginBottom:10 }}>
                Content <span className="gt">Creator</span>
              </h2>
              <p style={{ fontSize:14, color:'rgba(255,255,255,0.35)', maxWidth:520, lineHeight:1.7 }}>
                Crafting viral gaming stories for a global audience through consistent visual narratives on <strong style={{ color:'#a5b4fc' }}>YouTube</strong> and <strong style={{ color:'#a5b4fc' }}>TikTok</strong> under the alias <strong style={{ color:'#a5b4fc' }}>@kuhaku5800</strong>. Started in 2023.
              </p>
            </div>
            <div style={{ display:'flex', gap:8 }}>
              <a href="https://www.youtube.com/@kuhaku5800" target="_blank" rel="noreferrer" className="btn btn-o btn-sm"><IconYT /> YouTube</a>
              <a href="https://www.tiktok.com/@kuhaku5800" target="_blank" rel="noreferrer" className="btn btn-o btn-sm">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.01a8.16 8.16 0 0 0 4.77 1.52V7.07a4.85 4.85 0 0 1-1-.38z"/></svg>
                TikTok
              </a>
            </div>
          </div>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:14 }}>
          {contents.map((c,i) => (
            <a key={c.id} href={c.link} target="_blank" rel="noreferrer" className="fu" style={{
              animationDelay:i*0.08+'s',
              borderRadius:16, overflow:'hidden',
              background:'rgba(255,255,255,0.03)',
              border:'1px solid rgba(255,255,255,0.07)',
              textDecoration:'none', display:'block',
              transition:'all 0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.borderColor=c.color+'40'; e.currentTarget.style.boxShadow='0 16px 40px '+c.color+'14' }}
              onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.07)'; e.currentTarget.style.boxShadow='none' }}
            >
              <div style={{ height:180, overflow:'hidden', background:'linear-gradient(135deg,'+c.color+'18,'+c.color+'06)', position:'relative' }}>
                <img src={c.img} alt={c.title} style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.4s' }}
                  onMouseEnter={e => e.target.style.transform='scale(1.06)'}
                  onMouseLeave={e => e.target.style.transform='scale(1)'}
                  onError={e => e.target.style.display='none'}
                />
                <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', background:'rgba(6,8,16,0.3)', opacity:0, transition:'opacity 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.opacity='1'}
                  onMouseLeave={e => e.currentTarget.style.opacity='0'}
                >
                  <div style={{ width:44, height:44, borderRadius:'50%', background:'rgba(255,0,0,0.85)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  </div>
                </div>
                <div style={{ position:'absolute', top:12, right:12, background:'rgba(255,0,0,0.85)', borderRadius:6, padding:'3px 8px', display:'flex', alignItems:'center', gap:4 }}>
                  <IconYT /><span style={{ fontSize:10, fontWeight:700, color:'#fff' }}>YouTube</span>
                </div>
              </div>
              <div style={{ padding:'16px 18px' }}>
                <p style={{ fontSize:11, color:'rgba(255,255,255,0.25)', marginBottom:4 }}>{c.sub}</p>
                <h3 style={{ fontSize:14, fontWeight:700, color:'rgba(255,255,255,0.85)', lineHeight:1.45, marginBottom:10 }}>{c.title}</h3>
                <div style={{ display:'flex', flexWrap:'wrap', gap:5 }}>
                  {c.tags.map(t => <span key={t} className="tag tp">{t}</span>)}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
