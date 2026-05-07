const experiences = [
  {
    role: 'IT Support & UI/UX Design Intern',
    company: 'Diskominfo Kota Palembang',
    period: 'Feb 2022 – Apr 2022',
    type: 'Onsite · Palembang',
    color: '#6366F1',
    bg: 'rgba(99,102,241,0.1)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a5b4fc" strokeWidth="2" strokeLinecap="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    points: [
      'Provided technical support for day-to-day issues — troubleshooting hardware/software problems on employee workstations.',
      'Designed visual content for government social media channels to support public information campaigns.',
      'Collaborated with internal staff to test and validate user interface improvements.',
      'Assisted in configuration and maintenance of basic network and server setups.',
    ],
    tags: ['IT Support','UI/UX Design','Network','Troubleshooting','Government'],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="section">
        <div className="fade-up" style={{ textAlign:'center', marginBottom:60 }}>
          <div className="section-label" style={{ justifyContent:'center' }}>Experience</div>
          <h2 style={{ fontSize:'clamp(28px,4vw,42px)', fontWeight:800, letterSpacing:'-0.8px' }}>
            Where I've <span className="grad-text">Worked</span>
          </h2>
          <p style={{ fontSize:15, color:'rgba(255,255,255,0.4)', marginTop:12, maxWidth:440, margin:'12px auto 0' }}>
            Hands-on experience building real-world skills in technology and design
          </p>
        </div>

        <div style={{ maxWidth:780, margin:'0 auto' }}>
          {experiences.map((exp, i) => (
            <div key={i} className="fade-up d1" style={{ display:'grid', gridTemplateColumns:'auto 1fr', gap:24 }}>
              {/* Timeline */}
              <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:0 }}>
                <div style={{ width:44, height:44, borderRadius:12, background:exp.bg, border:`1px solid ${exp.color}40`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                  {exp.icon}
                </div>
                <div style={{ width:2, flex:1, background:'linear-gradient(to bottom, rgba(99,102,241,0.3), transparent)', marginTop:8, minHeight:20 }} />
              </div>

              {/* Card */}
              <div style={{ paddingBottom:40 }}>
                <div style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:16, padding:'22px 24px', transition:'all 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.background='rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor='rgba(99,102,241,0.25)' }}
                  onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.07)' }}
                >
                  <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', marginBottom:16, flexWrap:'wrap', gap:8 }}>
                    <div>
                      <h3 style={{ fontSize:18, fontWeight:700, color:'#fff', marginBottom:4 }}>{exp.role}</h3>
                      <p style={{ fontSize:14, fontWeight:600, color:'#a5b4fc' }}>{exp.company}</p>
                      <p style={{ fontSize:12, color:'rgba(255,255,255,0.35)', marginTop:2 }}>{exp.type}</p>
                    </div>
                    <div style={{ background:'rgba(99,102,241,0.12)', border:'1px solid rgba(99,102,241,0.25)', borderRadius:99, padding:'5px 14px', fontSize:12, fontWeight:700, color:'#a5b4fc', whiteSpace:'nowrap' }}>
                      {exp.period}
                    </div>
                  </div>

                  <ul style={{ display:'flex', flexDirection:'column', gap:8, marginBottom:18, paddingLeft:0, listStyle:'none' }}>
                    {exp.points.map((p, j) => (
                      <li key={j} style={{ display:'flex', gap:10, fontSize:13, color:'rgba(255,255,255,0.55)', lineHeight:1.6 }}>
                        <div style={{ width:5, height:5, borderRadius:'50%', background:'#6366F1', flexShrink:0, marginTop:8 }} />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
                    {exp.tags.map(t => <span key={t} className="tag tag-purple">{t}</span>)}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Education mini card */}
          <div className="fade-up d2" style={{ display:'grid', gridTemplateColumns:'auto 1fr', gap:24 }}>
            <div style={{ display:'flex', flexDirection:'column', alignItems:'center' }}>
              <div style={{ width:44, height:44, borderRadius:12, background:'rgba(45,212,191,0.1)', border:'1px solid rgba(45,212,191,0.3)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5eead4" strokeWidth="2" strokeLinecap="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              </div>
            </div>
            <div style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:16, padding:'22px 24px' }}>
              <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', flexWrap:'wrap', gap:8 }}>
                <div>
                  <h3 style={{ fontSize:18, fontWeight:700, color:'#fff', marginBottom:4 }}>Bachelor of Science — Information Systems</h3>
                  <p style={{ fontSize:14, fontWeight:600, color:'#5eead4' }}>Universitas Sriwijaya</p>
                  <p style={{ fontSize:12, color:'rgba(255,255,255,0.35)', marginTop:2 }}>Palembang, Indonesia</p>
                </div>
                <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-end', gap:6 }}>
                  <div style={{ background:'rgba(45,212,191,0.12)', border:'1px solid rgba(45,212,191,0.25)', borderRadius:99, padding:'5px 14px', fontSize:12, fontWeight:700, color:'#5eead4' }}>
                    Graduated Jun 2023
                  </div>
                  <div style={{ background:'rgba(99,102,241,0.12)', border:'1px solid rgba(99,102,241,0.25)', borderRadius:99, padding:'5px 14px', fontSize:12, fontWeight:700, color:'#a5b4fc' }}>
                    GPA 3.67 / 4.00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}