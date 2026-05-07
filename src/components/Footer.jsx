export default function Footer() {
  return (
    <footer style={{ borderTop:'1px solid rgba(255,255,255,0.06)', padding:'28px 40px', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:14 }}>
      <div style={{ display:'flex', alignItems:'center', gap:10 }}>
        <div style={{ width:28, height:28, borderRadius:8, background:'linear-gradient(135deg,#7C6AF7,#F472B6)', display:'flex', alignItems:'center', justifyContent:'center' }}>
          <span style={{ fontSize:12, fontWeight:800, color:'#fff', fontFamily:"'Space Grotesk',sans-serif" }}>K</span>
        </div>
        <span style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:15, fontWeight:700, color:'#fff' }}>Kuhaku<span style={{ color:'#7C6AF7' }}>.</span></span>
        <span style={{ fontSize:12, color:'rgba(255,255,255,0.18)' }}>— Frans Juansyah Riolando</span>
      </div>
      <p style={{ fontSize:12, color:'rgba(255,255,255,0.15)', fontWeight:500 }}>
        2026 · Frontend-End Dev & UI/UX Designer
      </p>
      <div style={{ display:'flex', gap:6 }}>
        {[
          { label:'GitHub',    href:'https://github.com/FransJuansyah' },
          { label:'LinkedIn',  href:'https://www.linkedin.com/in/frans-juansyah-riolando-30074532b//' },
          { label:'YouTube',   href:'https://www.youtube.com/@kuhaku5800' },
          { label:'Instagram', href:'https://www.instagram.com/fransjuansyah/' },
        ].map(s => (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer" style={{ fontSize:12, fontWeight:600, color:'rgba(255,255,255,0.25)', textDecoration:'none', padding:'5px 10px', borderRadius:7, transition:'all 0.15s' }}
            onMouseEnter={e => { e.target.style.color='#a5b4fc'; e.target.style.background='rgba(124,106,247,0.1)' }}
            onMouseLeave={e => { e.target.style.color='rgba(255,255,255,0.25)'; e.target.style.background='transparent' }}
          >{s.label}</a>
        ))}
      </div>
    </footer>
  )
}
