const IconSmile = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
  </svg>
)
const IconCode = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
)
const IconTool = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
)
const IconCert = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
  </svg>
)

const skillGroups = [
  {
    label: 'UI/UX & Design',
    color: '#6366F1',
    bg: 'rgba(99,102,241,0.1)',
    border: 'rgba(99,102,241,0.2)',
    Icon: IconSmile,
    skills: [
      { name: 'Figma',           level: 90 },
      { name: 'Wireframing',     level: 85 },
      { name: 'Prototyping',     level: 85 },
      { name: 'User Research',   level: 80 },
      { name: 'Usability Test',  level: 75 },
      { name: 'Design Thinking', level: 85 },
    ],
  },
  {
    label: 'Frontend Development',
    color: '#2DD4BF',
    bg: 'rgba(45,212,191,0.1)',
    border: 'rgba(45,212,191,0.2)',
    Icon: IconCode,
    skills: [
      { name: 'React.js',    level: 75 },
      { name: 'JavaScript',  level: 70 },
      { name: 'HTML & CSS',  level: 85 },
      { name: 'Vite',        level: 70 },
      { name: 'Git',         level: 70 },
      { name: 'Responsive',  level: 80 },
    ],
  },
  {
    label: 'IT Support & Tools',
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.1)',
    border: 'rgba(245,158,11,0.2)',
    Icon: IconTool,
    skills: [
      { name: 'Troubleshooting', level: 85 },
      { name: 'Network Basics',  level: 75 },
      { name: 'Hardware Setup',  level: 80 },
      { name: 'MS Office',       level: 90 },
      { name: 'Looker Studio',   level: 70 },
      { name: 'Photoshop',       level: 75 },
    ],
  },
]

const certifications = [
  { name: 'UX Design Certificate', issuer: 'Dicoding Indonesia', date: 'Mar 2024', color: '#6366F1' },
  { name: 'DevOps Certificate',    issuer: 'Dicoding Indonesia', date: 'Nov 2023', color: '#2DD4BF' },
]

const allTools = ['Figma','Adobe Photoshop','CorelDRAW','React.js','Vite','Git','GitHub','Microsoft Office','Looker Studio','VS Code','HTML5','CSS3','JavaScript']

export default function Skills() {
  return (
    <section id="skills">
      <div className="section">
        <div className="fade-up" style={{ textAlign:'center', marginBottom:60 }}>
          <div className="section-label" style={{ justifyContent:'center' }}>Skills</div>
          <h2 style={{ fontSize:'clamp(28px,4vw,42px)', fontWeight:800, letterSpacing:'-0.8px' }}>
            What I <span className="grad-text">Bring</span>
          </h2>
          <p style={{ fontSize:15, color:'rgba(255,255,255,0.4)', marginTop:12, maxWidth:440, margin:'12px auto 0' }}>
            A blend of design sensibility and technical capability
          </p>
        </div>

        <div className="fade-up d1" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16, marginBottom:24 }}>
          {skillGroups.map(g => (
            <div key={g.label} style={{
              background: g.bg, border: '1px solid ' + g.border,
              borderRadius: 20, padding: '24px 22px', transition: 'all 0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='0 20px 40px ' + g.color + '15' }}
              onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='none' }}
            >
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:20 }}>
                <div style={{ width:36, height:36, borderRadius:10, background:g.color + '20', border:'1px solid ' + g.color + '40', display:'flex', alignItems:'center', justifyContent:'center', color:g.color }}>
                  <g.Icon />
                </div>
                <p style={{ fontSize:13, fontWeight:700, color:'#fff' }}>{g.label}</p>
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
                {g.skills.map(s => (
                  <div key={s.name}>
                    <div style={{ display:'flex', justifyContent:'space-between', marginBottom:5 }}>
                      <span style={{ fontSize:12, fontWeight:600, color:'rgba(255,255,255,0.65)' }}>{s.name}</span>
                      <span style={{ fontSize:11, fontWeight:700, color:g.color, fontFamily:"'Space Grotesk',sans-serif" }}>{s.level}%</span>
                    </div>
                    <div style={{ height:4, borderRadius:99, background:'rgba(255,255,255,0.07)' }}>
                      <div style={{ height:'100%', borderRadius:99, background:'linear-gradient(90deg, ' + g.color + ', ' + g.color + '99)', width:s.level + '%', transition:'width 1s ease' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="fade-up d2" style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:16, padding:'20px 24px', marginBottom:16 }}>
          <p style={{ fontSize:11, fontWeight:700, color:'rgba(255,255,255,0.3)', letterSpacing:'0.08em', textTransform:'uppercase', marginBottom:14 }}>Tools & Technologies</p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
            {allTools.map(t => <span key={t} className="tag tag-purple">{t}</span>)}
          </div>
        </div>

        <div className="fade-up d3" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
          {certifications.map(c => (
            <div key={c.name} style={{
              background: c.color + '08', border: '1px solid ' + c.color + '25',
              borderRadius: 14, padding: '16px 20px',
              display: 'flex', alignItems: 'center', gap: 14,
            }}>
              <div style={{ width:40, height:40, borderRadius:10, background:c.color + '15', border:'1px solid ' + c.color + '30', display:'flex', alignItems:'center', justifyContent:'center', color:c.color, flexShrink:0 }}>
                <IconCert />
              </div>
              <div style={{ flex:1 }}>
                <p style={{ fontSize:13, fontWeight:700, color:'#fff' }}>{c.name}</p>
                <p style={{ fontSize:11, color:'rgba(255,255,255,0.4)', marginTop:2 }}>{c.issuer} · {c.date}</p>
              </div>
              <span style={{ fontSize:10, fontWeight:700, padding:'3px 9px', borderRadius:99, background:c.color + '15', color:c.color, border:'1px solid ' + c.color + '25' }}>Verified</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
