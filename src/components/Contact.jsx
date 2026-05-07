export default function Contact() {
  return (
    <section id="contact" className="sec" style={{ borderTop:'1px solid rgba(255,255,255,0.05)' }}>
      <div className="wrap">
        <div className="fu" style={{ textAlign:'center', marginBottom:52 }}>
          <div className="slabel" style={{ justifyContent:'center' }}>Contact</div>
          <h2 style={{ fontSize:'clamp(28px,4vw,48px)', fontWeight:800, letterSpacing:'-1px' }}>
            Let's Build <span className="gt">Something</span>
          </h2>
          <p style={{ fontSize:14, color:'rgba(255,255,255,0.35)', marginTop:12, maxWidth:420, margin:'12px auto 0', lineHeight:1.75 }}>
            Open for UI/UX projects, frontend-end web development, freelance gigs, or full-time opportunities in 2026.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:20, maxWidth:860, margin:'0 auto' }}>
          <div className="fu d1" style={{ display:'flex', flexDirection:'column', gap:10 }}>
            {[
              { icon:'📧', label:'Email',     value:'difajuansyah@gmail.com',          href:'mailto:difajuansyah@gmail.com',                color:'#7C6AF7' },
              { icon:'💬', label:'WhatsApp',  value:'+62 813 6641 2499',                href:'https://wa.me/6281366412499',                   color:'#2DD4BF' },
              { icon:'💼', label:'LinkedIn',  value:'linkedin.com/in/fransjuansyah',   href:'https://www.linkedin.com/in/frans-juansyah-riolando-30074532b/',   color:'#FBBF24' },
              { icon:'🐙', label:'GitHub',    value:'github.com/FransJuansyah',        href:'https://github.com/FransJuansyah',             color:'#A78BFA' },
              { icon:'▶️', label:'YouTube',   value:'@kuhaku5800',                     href:'https://www.youtube.com/@kuhaku5800',          color:'#F87171' },
            ].map(c => (
              <a key={c.label} href={c.href} target={c.href.startsWith('http')?'_blank':undefined} rel="noreferrer" style={{
                display:'flex', alignItems:'center', gap:12,
                background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)',
                borderRadius:12, padding:'12px 16px', textDecoration:'none', transition:'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.background=c.color+'0D'; e.currentTarget.style.borderColor=c.color+'35'; e.currentTarget.style.transform='translateX(4px)' }}
                onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.07)'; e.currentTarget.style.transform='translateX(0)' }}
              >
                <div style={{ width:36, height:36, borderRadius:9, background:c.color+'15', border:'1px solid '+c.color+'25', display:'flex', alignItems:'center', justifyContent:'center', fontSize:15, flexShrink:0 }}>{c.icon}</div>
                <div>
                  <p style={{ fontSize:10, fontWeight:700, color:'rgba(255,255,255,0.25)', letterSpacing:'0.07em', textTransform:'uppercase', marginBottom:1 }}>{c.label}</p>
                  <p style={{ fontSize:13, fontWeight:600, color:'rgba(255,255,255,0.7)' }}>{c.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="fu d2" style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:18, padding:'26px 22px' }}>
            <h3 style={{ fontSize:15, fontWeight:700, color:'#fff', marginBottom:18 }}>Send a Message</h3>
            <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>
                {['Your Name','Your Email'].map(p => (
                  <input key={p} placeholder={p} style={{ width:'100%', padding:'10px 13px', borderRadius:9, background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.08)', color:'#fff', fontSize:13, fontFamily:"'Sora',sans-serif", outline:'none', transition:'border-color 0.2s' }}
                    onFocus={e => e.target.style.borderColor='rgba(124,106,247,0.5)'}
                    onBlur={e => e.target.style.borderColor='rgba(255,255,255,0.08)'}
                  />
                ))}
              </div>
              <input placeholder="Subject" style={{ width:'100%', padding:'10px 13px', borderRadius:9, background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.08)', color:'#fff', fontSize:13, fontFamily:"'Sora',sans-serif", outline:'none', transition:'border-color 0.2s' }}
                onFocus={e => e.target.style.borderColor='rgba(124,106,247,0.5)'}
                onBlur={e => e.target.style.borderColor='rgba(255,255,255,0.08)'}
              />
              <textarea placeholder="Your message..." rows={5} style={{ width:'100%', padding:'10px 13px', borderRadius:9, background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.08)', color:'#fff', fontSize:13, fontFamily:"'Sora',sans-serif", outline:'none', resize:'vertical', transition:'border-color 0.2s' }}
                onFocus={e => e.target.style.borderColor='rgba(124,106,247,0.5)'}
                onBlur={e => e.target.style.borderColor='rgba(255,255,255,0.08)'}
              />
              <button className="btn btn-p" style={{ width:'100%', justifyContent:'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
