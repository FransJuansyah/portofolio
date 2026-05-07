export default function About() {
  return (
    <section id="about" className="sec" style={{ background:'rgba(255,255,255,0.015)', borderTop:'1px solid rgba(255,255,255,0.05)', borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
      <div className="wrap">
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:72, alignItems:'center' }}>

          {/* LEFT */}
          <div className="fu">
            <div className="slabel">About Me</div>
            <h2 style={{ fontSize:'clamp(26px,3.5vw,42px)', fontWeight:800, lineHeight:1.12, letterSpacing:'-0.8px', marginBottom:20 }}>
              Code, Design, <span className="gt">and Story</span> — all in one.
            </h2>
            <p style={{ fontSize:14, color:'rgba(255,255,255,0.45)', lineHeight:1.85, marginBottom:14 }}>
              I'm <strong style={{ color:'rgba(255,255,255,0.8)' }}>Frans Juansyah Riolando</strong> — a Frontend-End Web Developer and UI/UX Designer based in Jakarta. I graduated from Universitas Sriwijaya with a GPA of 3.67 and have been building digital experiences since 2023 under the alias <strong style={{ color:'#a5b4fc' }}>Kuhaku</strong>.
            </p>
            <p style={{ fontSize:14, color:'rgba(255,255,255,0.45)', lineHeight:1.85, marginBottom:14 }}>
              I specialize in the <span style={{ color:'#5eead4', fontWeight:600 }}>TALL Stack</span> (Tailwind, Alpine.js, Laravel, Livewire) and <span style={{ color:'#f9a8d4', fontWeight:600 }}>UI/UX Design</span> with Figma. I don't just build websites — I craft digital experiences that are functional, scalable, and visually stunning.
            </p>
            <p style={{ fontSize:14, color:'rgba(255,255,255,0.45)', lineHeight:1.85, marginBottom:28 }}>
              Beyond development and design, I'm a creative — producing cinematic AMV/GMV content, gaming videos, and visual storytelling for my YouTube channel <span style={{ color:'#a5b4fc', fontWeight:600 }}>@kuhaku5800</span>.
            </p>

            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px 20px', marginBottom:28 }}>
              {[
                ['Alias',       'Kuhaku'],
                ['Location',    'Jakarta Barat, 11750'],
                ['Email',       'difajuansyah@gmail.com'],
                ['Phone',       '+62 813 6641 2499'],
                ['University',  'Universitas Sriwijaya'],
                ['Graduated',   'June 2023 · GPA 3.67'],
                ['Specialty',   'Frontend-End Web Dev + UI/UX'],
                ['Available',   'Freelance & Full-time · 2026'],
              ].map(([k,v]) => (
                <div key={k}>
                  <p style={{ fontSize:10, fontWeight:700, color:'rgba(255,255,255,0.2)', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:2 }}>{k}</p>
                  <p style={{ fontSize:13, fontWeight:600, color:'rgba(255,255,255,0.7)' }}>{v}</p>
                </div>
              ))}
            </div>

            <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
              <a href="mailto:difajuansyah@gmail.com" className="btn btn-p btn-sm">Get in Touch</a>
              <a href="https://github.com/FransJuansyah" target="_blank" rel="noreferrer" className="btn btn-o btn-sm">GitHub</a>
              <a href="https://www.linkedin.com/in/frans-juansyah-riolando-30074532b/" target="_blank" rel="noreferrer" className="btn btn-o btn-sm">LinkedIn</a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="fu d2" style={{ display:'flex', flexDirection:'column', gap:12 }}>
            {/* Education */}
            <div style={{ background:'rgba(124,106,247,0.07)', border:'1px solid rgba(124,106,247,0.18)', borderRadius:18, padding:'22px 22px' }}>
              <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:14 }}>
                <div style={{ width:38, height:38, borderRadius:10, background:'rgba(124,106,247,0.2)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a5b4fc" strokeWidth="2" strokeLinecap="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                </div>
                <div>
                  <p style={{ fontSize:14, fontWeight:700, color:'#fff' }}>Bachelor of Science</p>
                  <p style={{ fontSize:12, color:'#a5b4fc', fontWeight:600 }}>Computer Science — Information Systems</p>
                </div>
              </div>
              <p style={{ fontSize:12, color:'rgba(255,255,255,0.3)', marginBottom:10 }}>Universitas Sriwijaya · Palembang · Jun 2023</p>
              <div style={{ background:'rgba(255,255,255,0.05)', borderRadius:8, padding:'10px 12px', marginBottom:10 }}>
                <div style={{ display:'flex', justifyContent:'space-between', marginBottom:6 }}>
                  <span style={{ fontSize:12, color:'rgba(255,255,255,0.3)' }}>GPA</span>
                  <span style={{ fontSize:12, fontWeight:800, color:'#a5b4fc', fontFamily:"'Space Grotesk',sans-serif" }}>3.67 / 4.00</span>
                </div>
                <div style={{ height:4, borderRadius:99, background:'rgba(255,255,255,0.07)' }}>
                  <div style={{ height:'100%', borderRadius:99, width:'91.75%', background:'linear-gradient(90deg,#7C6AF7,#A78BFA)' }} />
                </div>
              </div>
              <p style={{ fontSize:12, color:'rgba(255,255,255,0.45)', lineHeight:1.6 }}>
                Thesis: Design Thinking in Redesigning UI/UX of SIMAK — Sriwijaya University Academic Information System (Mobile Platform)
              </p>
            </div>

            {/* Internship */}
            <div style={{ background:'rgba(45,212,191,0.07)', border:'1px solid rgba(45,212,191,0.18)', borderRadius:14, padding:'16px 18px' }}>
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:10 }}>
                <div style={{ width:34, height:34, borderRadius:9, background:'rgba(45,212,191,0.15)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5eead4" strokeWidth="2" strokeLinecap="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                </div>
                <div>
                  <p style={{ fontSize:13, fontWeight:700, color:'#fff' }}>IT Support & UI/UX Design Intern</p>
                  <p style={{ fontSize:11, color:'#5eead4', fontWeight:600 }}>Diskominfo Kota Palembang · Feb – Apr 2022</p>
                </div>
              </div>
              <div style={{ display:'flex', flexWrap:'wrap', gap:5 }}>
                {['IT Support','UI/UX Design','Network','Troubleshooting','Government'].map(t => <span key={t} className="tag tt">{t}</span>)}
              </div>
            </div>

            {/* Certifications */}
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>
              {[
                { name:'UX Design Certificate', org:'Dicoding Indonesia', date:'Mar 2024', color:'#7C6AF7', link:'https://drive.google.com/file/d/1JODTPe2dFzZ1Vul-p4USZ335kwmYcvF6/view' },
                { name:'DevOps Certificate',    org:'Dicoding Indonesia', date:'Nov 2023', color:'#2DD4BF', link:'https://drive.google.com/file/d/1NNHArGSvWCrJ01eRvHPlyliFV4gWf45v/view' },
              ].map(c => (
                <a key={c.name} href={c.link} target="_blank" rel="noreferrer" style={{ background:c.color+'08', border:'1px solid '+c.color+'20', borderRadius:12, padding:'14px', textDecoration:'none', display:'block' }}>
                  <div style={{ width:28, height:28, borderRadius:7, background:c.color+'18', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:8 }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={c.color} strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>
                  </div>
                  <p style={{ fontSize:12, fontWeight:700, color:'rgba(255,255,255,0.8)', marginBottom:2 }}>{c.name}</p>
                  <p style={{ fontSize:10, color:'rgba(255,255,255,0.3)' }}>{c.org}</p>
                  <p style={{ fontSize:10, color:c.color, fontWeight:600, marginTop:3 }}>{c.date}</p>
                </a>
              ))}
            </div>

            {/* What I do */}
            <div style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:12, padding:'14px 16px' }}>
              <p style={{ fontSize:10, fontWeight:700, color:'rgba(255,255,255,0.2)', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:10 }}>What I Do</p>
              <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
                {['Web Development','UI/UX Design','Graphic Design','Video Editing','Content Creation','AMV/GMV Editing'].map(t => (
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
