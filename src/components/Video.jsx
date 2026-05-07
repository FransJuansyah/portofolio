const IconYT = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#060810"/>
  </svg>
)

const videos = [
  { id:1, title:'Jujutsu Kaisen — VIVID VICE by Who-ya Extended',  sub:'AMV · Anime Edit',          img:'/assets/creator/jujutsu.png', link:'https://youtu.be/IaA0EeXq_Ts?si=NhNgT3AejWgvMFaQ', color:'#7C6AF7', tags:['AMV','Premiere Pro','Motion','Jujutsu Kaisen'] },
  { id:2, title:"Alia — かくれんぼ (Kakurenbo)",                   sub:'AMV · Character Study',     img:'/assets/creator/alia.png',    link:'https://youtu.be/K90u8WhmPks?si=EGr3--HDqsyX9y2m', color:'#F472B6', tags:['AMV','Character Edit','Cinematic','Premiere Pro'] },
  { id:3, title:'Memories of Attack on Titan — かくれんぼ',        sub:'AMV · Fan Edit',            img:'/assets/creator/aot.png',     link:'https://youtu.be/cnt9Lp3l8Lo?si=ieeNtSFXoZGFoHO0', color:'#2DD4BF', tags:['AMV','Attack on Titan','Fan Edit','Cinematic'] },
  { id:4, title:'Wuthering Waves — Dynasty',                       sub:'GMV · Game Montage',        img:'/assets/creator/wuwa.png',    link:'https://youtu.be/64Syva1yhgY',                       color:'#FBBF24', tags:['GMV','Wuthering Waves','Game Edit','Montage'] },
  { id:5, title:'Genshin Impact — ReoNa ANIMA',                   sub:'GMV · Anime Game Edit',     img:'/assets/creator/genshin.png', link:'https://youtu.be/nLJkYxeCM8M?si=jl5SztBzWlKQsJFC', color:'#A78BFA', tags:['GMV','Genshin Impact','ReoNa','Game Edit'] },
]

export default function Video() {
  return (
    <section id="video" className="sec" style={{ background:'rgba(255,255,255,0.015)', borderTop:'1px solid rgba(255,255,255,0.05)', borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
      <div className="wrap">
        <div className="fu" style={{ marginBottom:48 }}>
          <div className="slabel">04 — Creative</div>
          <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', flexWrap:'wrap', gap:16 }}>
            <div>
              <h2 style={{ fontSize:'clamp(28px,4vw,48px)', fontWeight:800, letterSpacing:'-1px', marginBottom:10 }}>
                Video <span className="gt3">Editing</span>
              </h2>
              <p style={{ fontSize:14, color:'rgba(255,255,255,0.35)', maxWidth:500, lineHeight:1.7 }}>
                Specializing in cinematic <strong style={{ color:'#fde68a' }}>AMV</strong> and <strong style={{ color:'#fde68a' }}>GMV</strong> — anime and game music videos with high-retention editing, motion syncing, and color grading using <strong style={{ color:'#fde68a' }}>Premiere Pro & After Effects</strong>.
              </p>
            </div>
            <a href="https://www.youtube.com/@kuhaku5800" target="_blank" rel="noreferrer" className="btn btn-o btn-sm">
              <IconYT /> @kuhaku5800
            </a>
          </div>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12 }}>
          {videos.map((v,i) => (
            <a key={v.id} href={v.link} target="_blank" rel="noreferrer" className="fu" style={{
              animationDelay:i*0.07+'s',
              borderRadius:14, overflow:'hidden',
              background:'rgba(255,255,255,0.03)',
              border:'1px solid rgba(255,255,255,0.07)',
              textDecoration:'none', display:'block',
              transition:'all 0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.borderColor=v.color+'40'; e.currentTarget.style.boxShadow='0 16px 40px '+v.color+'14' }}
              onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.07)'; e.currentTarget.style.boxShadow='none' }}
            >
              {/* Thumbnail */}
              <div style={{ height:160, overflow:'hidden', background:'linear-gradient(135deg,'+v.color+'18,'+v.color+'06)', position:'relative' }}>
                <img src={v.img} alt={v.title} style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.4s' }}
                  onMouseEnter={e => e.target.style.transform='scale(1.06)'}
                  onMouseLeave={e => e.target.style.transform='scale(1)'}
                  onError={e => e.target.style.display='none'}
                />
                {/* Play button */}
                <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', background:'rgba(6,8,16,0.3)', opacity:0, transition:'opacity 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.opacity='1'}
                  onMouseLeave={e => e.currentTarget.style.opacity='0'}
                >
                  <div style={{ width:44, height:44, borderRadius:'50%', background:'rgba(255,0,0,0.85)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  </div>
                </div>
                {/* YT badge */}
                <div style={{ position:'absolute', top:10, right:10, background:'rgba(255,0,0,0.85)', borderRadius:6, padding:'3px 8px', display:'flex', alignItems:'center', gap:4 }}>
                  <IconYT />
                  <span style={{ fontSize:10, fontWeight:700, color:'#fff' }}>YouTube</span>
                </div>
              </div>
              <div style={{ padding:'14px 16px' }}>
                <p style={{ fontSize:11, color:'rgba(255,255,255,0.25)', marginBottom:4 }}>{v.sub}</p>
                <h3 style={{ fontSize:13, fontWeight:700, color:'rgba(255,255,255,0.85)', lineHeight:1.4, marginBottom:10 }}>{v.title}</h3>
                <div style={{ display:'flex', flexWrap:'wrap', gap:4 }}>
                  {v.tags.map(t => <span key={t} className="tag ta">{t}</span>)}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
