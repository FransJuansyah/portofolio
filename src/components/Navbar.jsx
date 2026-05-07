import { useState, useEffect } from 'react'

const links = [
  { label:'Frontend',  href:'#frontend' },
  { label:'UI/UX',     href:'#uiux' },
  { label:'Graphic',   href:'#graphic' },
  { label:'Video',     href:'#video' },
  { label:'Creator',   href:'#creator' },
  { label:'About',     href:'#about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav style={{
      position:'fixed', top:0, left:0, right:0, zIndex:100,
      height:62, display:'flex', alignItems:'center', justifyContent:'space-between',
      padding:'0 40px',
      background: scrolled ? 'rgba(6,8,16,0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      transition:'all 0.3s',
    }}>
      <a href="#" style={{ textDecoration:'none', display:'flex', alignItems:'center', gap:9 }}>
        <div style={{ width:32, height:32, borderRadius:9, background:'linear-gradient(135deg,#7C6AF7,#F472B6)', display:'flex', alignItems:'center', justifyContent:'center' }}>
          <span style={{ fontSize:14, fontWeight:800, color:'#fff', fontFamily:"'Space Grotesk',sans-serif" }}>K</span>
        </div>
        <span style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:17, fontWeight:700, color:'#fff', letterSpacing:'-0.2px' }}>
          Kuhaku<span style={{ color:'#7C6AF7' }}>.</span>
        </span>
      </a>

      <div style={{ display:'flex', alignItems:'center', gap:2 }}>
        {links.map(l => (
          <a key={l.href} href={l.href} style={{ padding:'6px 13px', borderRadius:8, fontSize:13, fontWeight:600, color:'rgba(255,255,255,0.5)', textDecoration:'none', transition:'all 0.15s' }}
            onMouseEnter={e => { e.target.style.color='#fff'; e.target.style.background='rgba(255,255,255,0.07)' }}
            onMouseLeave={e => { e.target.style.color='rgba(255,255,255,0.5)'; e.target.style.background='transparent' }}
          >{l.label}</a>
        ))}
        <a href="mailto:difajuansyah@gmail.com" className="btn btn-p btn-sm" style={{ marginLeft:10 }}>Hire Me</a>
      </div>
    </nav>
  )
}
