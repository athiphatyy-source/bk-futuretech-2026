/* eslint-disable no-undef */
// User-facing additional pages: About, Matching, Events, Pitching, News, Downloads, Contact, Account

// ============ About ============
function AboutPage({ setScreen }) {
  return (
    <div data-screen-label="10 About">
      <div className="about-hero">
        <div className="container">
          <div style={{fontFamily:'var(--font-en)', fontSize:12, letterSpacing:3, fontWeight:600, color:'#00C26E', marginBottom:14}}>
            ABOUT THE FESTIVAL
          </div>
          <h1>เกี่ยวกับ <span className="gr">Bang Khen Agri-Food &amp; Env Tech Festival 2026</span></h1>
          <p>มหกรรมนวัตกรรมระดับชาติด้านเกษตร อาหาร และสิ่งแวดล้อม จัดโดยมหาวิทยาลัยเกษตรศาสตร์
          ร่วมกับย่านนวัตกรรมบางเขน (Bang Khen Innovation District) และเครือข่ายพันธมิตร
          ระหว่างวันที่ 24–25 มิถุนายน 2569</p>
        </div>
      </div>

      <div className="container">
        <div className="about-pillars">
          {[
            { ic: <Icon.Leaf size={26}/>, ttl: 'ศาสตร์แห่งแผ่นดิน', d: 'นำเสนอผลงานวิจัยจากมหาวิทยาลัยเกษตรศาสตร์และเครือข่ายพันธมิตร RUN' },
            { ic: <Icon.Network size={26}/>, ttl: 'เชื่อมโยงระบบนิเวศ', d: 'เชื่อมโยงนักวิจัย ผู้ประกอบการ นักลงทุน และภาครัฐในเวทีเดียว' },
            { ic: <Icon.TrendUp size={26}/>, ttl: 'พัฒนาที่ยั่งยืน', d: 'มุ่งสู่การใช้ประโยชน์เชิงพาณิชย์และการพัฒนาที่ยั่งยืน (SDGs)' },
          ].map((p,i) => (
            <div key={i} className="pillar-card">
              <div className="ic">{p.ic}</div>
              <h3>{p.ttl}</h3>
              <p>{p.d}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="about-section">
        <div className="container">
          <div className="about-2col">
            <div>
              <div className="eyebrow">CONCEPT</div>
              <h2>“ศาสตร์แห่งแผ่นดิน เพื่อการพัฒนาที่ยั่งยืน”</h2>
              <p>BK FutureTech 2026 รวบรวมผลงานวิจัยและนวัตกรรมกว่า <strong>300 ชิ้น</strong>
              ที่ระดับความพร้อมของเทคโนโลยี (TRL) ระดับ 4–6 และความพร้อมทางสังคม (SRL)
              เพื่อสร้างโอกาสต่อยอดเชิงพาณิชย์และเชื่อมโยงเครือข่ายระหว่างผู้ที่เกี่ยวข้องทุกภาคส่วน</p>
              <p>กิจกรรมเสริม ได้แก่ Pitching Workshop, Showcase, Investor Panel,
              Industry Reverse Pitch และ Business Matching เพื่อบูรณาการระบบนิเวศนวัตกรรม</p>
              <div style={{display:'flex', gap:12, marginTop:18}}>
                <button className="btn btn-primary" onClick={() => setScreen('register')}>ลงทะเบียนเข้าร่วม <Icon.ArrowRight /></button>
                <button className="btn btn-outline" onClick={() => setScreen('downloads')}>ดาวน์โหลด Brief</button>
              </div>
            </div>
            <div className="visual">
              <ImgPH kind="agri" label={`EVENT KEY VISUAL\n2,000 + ATTENDEES`} style={{whiteSpace:'pre-line'}} />
            </div>
          </div>
        </div>
      </section>

      <section className="about-section" style={{background:'#fff', paddingTop: 48, paddingBottom: 48}}>
        <div className="container">
          <div className="section-eyebrow">ROADMAP</div>
          <h2 className="section-title">เส้นทางสู่งาน</h2>
          <div className="timeline">
            {[
              { w: 'JAN 2026', t: 'เปิดรับสมัคร', d: 'เปิดรับผลงานนวัตกรรมเข้าสู่ระบบ' },
              { w: 'APR 2026', t: 'พิจารณาผลงาน', d: 'คณะกรรมการตรวจสอบและให้คะแนน TRL/SRL' },
              { w: 'MAY 2026', t: 'ประกาศผล', d: 'แจ้งผลและจับคู่ Business Matching' },
              { w: '24–25 JUN 2026', t: 'จัดงานจริง', d: 'อาคารจักรพันธ์เพ็ญศิริ ม.เกษตรศาสตร์' },
            ].map((s,i) => (
              <div key={i} className="tl-step">
                <span className="dot" />
                <div className="when">{s.w}</div>
                <div className="ttl">{s.t}</div>
                <div className="desc">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="section-eyebrow">ORGANIZING COMMITTEE</div>
          <h2 className="section-title">คณะกรรมการจัดงาน</h2>
          <div className="committee-grid">
            {[
              { n: 'รศ.ดร. สมพร อนันต์', r: 'ประธานคณะกรรมการ', o: 'มหาวิทยาลัยเกษตรศาสตร์', i:'สอ' },
              { n: 'ดร. ปิยะ สุขสันต์', r: 'รองประธาน', o: 'BID Bang Khen', i:'ปส' },
              { n: 'รศ.ดร. มาลี รุ่งโรจน์', r: 'ฝ่ายนิทรรศการ', o: 'คณะวิทยาศาสตร์', i:'มร' },
              { n: 'ผศ.ดร. ธีรพล กิตติ', r: 'ฝ่ายเทคโนโลยี', o: 'คณะวิศวกรรมศาสตร์', i:'ธก' },
            ].map((c,i) => (
              <div key={i} className="committee-card">
                <div className="avatar">{c.i}</div>
                <div className="name">{c.n}</div>
                <div className="role">{c.r}</div>
                <div className="org">{c.o}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section" style={{background:'#fff'}}>
        <div className="container">
          <div className="section-eyebrow">PARTNERS &amp; SPONSORS</div>
          <h2 className="section-title">พันธมิตรและผู้สนับสนุน</h2>
          <div className="partner-grid">
            {['KU', 'BID', 'บพข.', 'สวก.', 'RUN', 'กทม.', 'NSTDA', 'มจธ.', 'มจ.', 'มอ.', 'มข.', 'RMUT'].map((p,i) => (
              <div key={i} className="partner-logo">{p}</div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter setScreen={setScreen} />
    </div>
  );
}

// ============ Business Matching ============
function MatchingPage({ setScreen }) {
  const [view, setView] = useState('list'); // list | book
  const [day, setDay] = useState(0);
  const [slot, setSlot] = useState(null);

  const partners = [
    { i:'CP', name:'Charoen Innovation Co.', t:'Industry · Food', d:'สนใจเทคโนโลยีการแปรรูปอาหารและโปรตีนทางเลือก', needs:['Plant-based protein','Food packaging','Cold-chain IoT'] },
    { i:'GR', name:'Green Future Ventures', t:'Investor · Series A/B', d:'นักลงทุนด้าน climate-tech และ agri-tech ทุน 5–50M USD', needs:['Climate-tech','Sustainability','SDG Impact'] },
    { i:'KU', name:'KU Innovation Center', t:'Research · Agri-Food', d:'หาผู้ร่วมพัฒนาเทคโนโลยีการเกษตรอัจฉริยะและฟาร์มแม่นยำ', needs:['Precision farming','Sensor','AI/ML'] },
    { i:'BE', name:'Bangkok Energy Group', t:'Industry · Environment', d:'หาเทคโนโลยี waste-to-energy และระบบบำบัดน้ำขั้นสูง', needs:['Waste-to-energy','Water treatment','Bio-gas'] },
    { i:'TS', name:'Thai Smart Farm', t:'Startup · Series A', d:'มองหาเทคโนโลยี IoT และ AI สำหรับฟาร์มผักไฮโดรโพนิกส์', needs:['IoT','Hydroponics','Computer Vision'] },
  ];

  const slots = ['09:00','09:30','10:00','10:30','11:00','11:30','13:00','13:30','14:00','14:30','15:00','15:30'];
  const booked = [2, 5, 9];

  return (
    <div data-screen-label="11 Business Matching">
      <div className="match-hero">
        <div className="container">
          <div style={{fontFamily:'var(--font-en)', fontSize:12, letterSpacing:3, fontWeight:600, color:'#00C26E', marginBottom:8}}>
            BUSINESS MATCHING
          </div>
          <h1 style={{margin:'0 0 8px', fontSize:32, fontWeight: 600, color:'#fff'}}>จับคู่ธุรกิจ</h1>
          <p style={{color:'#B7C8D7', maxWidth:640, fontSize:15, margin:0}}>
            ค้นหาคู่ทางธุรกิจที่เหมาะสม จองคิวนัดหมายล่วงหน้า ระหว่าง 24–25 มิถุนายน 2569 ณ Business Matching Hall
          </p>
        </div>
      </div>

      <div className="container">
        <div className="match-shell">
          {/* Filters */}
          <aside className="cat-filters" style={{position:'static'}}>
            <h4>ประเภทคู่ค้า</h4>
            <div className="filter-group" style={{paddingTop: 0}}>
              {['Industry / SME', 'Investor / VC', 'Research Institute', 'Government', 'Startup'].map((f,i) => (
                <label key={i} className="filter-check">
                  <input type="checkbox" defaultChecked={i < 2} />
                  <span>{f}</span>
                </label>
              ))}
            </div>
            <div className="filter-group">
              <h4>สาขาที่สนใจ</h4>
              {['Agri-Tech','Food-Tech','Env-Tech','Bio-Tech','Deep Tech'].map((f,i) => (
                <label key={i} className="filter-check">
                  <input type="checkbox" defaultChecked={i < 2} />
                  <span>{f}</span>
                </label>
              ))}
            </div>
            <div className="filter-group">
              <h4>ระดับ TRL ที่สนใจ</h4>
              {['TRL 4–6 (Lab/Pilot)','TRL 7–9 (Market-ready)'].map((f,i) => (
                <label key={i} className="filter-check">
                  <input type="checkbox" defaultChecked />
                  <span>{f}</span>
                </label>
              ))}
            </div>
          </aside>

          <div>
            <div style={{display:'flex', alignItems:'center', gap:12, marginBottom: 18}}>
              <div style={{fontSize: 13.5, color:'var(--ink-3)'}}>พบ <strong style={{color:'var(--ink)'}}>{partners.length}</strong> คู่ค้าที่ตรงกับความสนใจของคุณ</div>
              <select style={{marginLeft:'auto', padding:'8px 12px', border:'1px solid var(--line-2)', borderRadius:8, fontFamily:'inherit', fontSize:13}}>
                <option>เรียงตาม: ความเข้ากันได้</option>
                <option>เรียงตาม: ชื่อ</option>
                <option>เรียงตาม: ขนาดองค์กร</option>
              </select>
            </div>

            <div style={{display:'flex', flexDirection:'column', gap:14}}>
              {partners.map((p,i) => (
                <div key={i} className="match-card">
                  <div className="org-avatar">{p.i}</div>
                  <div>
                    <h4>{p.name}</h4>
                    <div className="org-type">{p.t}</div>
                    <div className="desc">{p.d}</div>
                    <div className="needs">
                      {p.needs.map(n => <span key={n}>{n}</span>)}
                    </div>
                  </div>
                  <div style={{display:'flex', flexDirection:'column', gap:8, alignItems:'flex-end'}}>
                    <div style={{display:'flex', alignItems:'center', gap:6, fontSize:12, color:'var(--inno-green)'}}>
                      <span style={{width:8, height:8, borderRadius:'50%', background:'var(--inno-green)'}}></span>
                      {92 - i*3}% Match
                    </div>
                    <button className="btn btn-solid-green btn-sm" onClick={() => setView('book')}>จองนัดหมาย</button>
                    <button className="btn btn-outline btn-sm">ดูข้อมูล</button>
                  </div>
                </div>
              ))}
            </div>

            {view === 'book' && (
              <div style={{
                position:'fixed', inset:0, background:'rgba(15,34,51,0.6)',
                display:'grid', placeItems:'center', zIndex: 200,
              }} onClick={() => setView('list')}>
                <div onClick={e => e.stopPropagation()} style={{
                  background:'#fff', borderRadius: 16, padding: 28, width: 640, maxWidth:'90vw',
                }}>
                  <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom: 18}}>
                    <h3 style={{margin:0, fontSize:18}}>จองนัดหมาย Business Matching</h3>
                    <button className="bm-btn" onClick={() => setView('list')} style={{fontSize:22}}>×</button>
                  </div>
                  <div style={{fontSize:13.5, color:'var(--ink-3)', marginBottom: 18}}>
                    กับ <strong style={{color:'var(--ink)'}}>Charoen Innovation Co.</strong> · Business Matching Hall
                  </div>

                  <div className="slot-day-tabs">
                    {['24 มิ.ย. 2026','25 มิ.ย. 2026'].map((d, i) => (
                      <button key={i} className={day === i ? 'active' : ''} onClick={() => setDay(i)}>{d}</button>
                    ))}
                  </div>
                  <div className="slot-grid">
                    {slots.map((s, i) => (
                      <div
                        key={i}
                        className={`slot ${booked.includes(i) ? 'booked' : ''} ${slot === i ? 'selected' : ''}`}
                        onClick={() => !booked.includes(i) && setSlot(i)}
                      >{s}</div>
                    ))}
                  </div>
                  <div style={{display:'flex', gap:10, marginTop:22, justifyContent:'flex-end'}}>
                    <button className="btn btn-outline" onClick={() => setView('list')}>ยกเลิก</button>
                    <button className="btn btn-primary" disabled={slot === null} onClick={() => { setView('list'); setSlot(null); }}>
                      ยืนยันการจอง <Icon.ArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <SiteFooter setScreen={setScreen} />
    </div>
  );
}

// ============ Events Schedule + Registration ============
function EventsPage({ setScreen }) {
  const [day, setDay] = useState(0);
  const [showTicket, setShowTicket] = useState(false);

  const Day1 = [
    { t: '09.00', main:{ttl:'พิธีเปิดงาน + Keynote Speech', m:'Main Stage', cls:''}, pitch:{ttl:'Investor Briefing', m:'Pitching Hall', cls:'blue'}, work:null },
    { t: '10.30', main:{ttl:'เสวนา: นวัตกรรมเกษตรแห่งอนาคต', m:'Main Stage', cls:''}, pitch:{ttl:'Pitching: Agri-Tech (Track 1)', m:'Pitching Hall', cls:'blue'}, work:{ttl:'Workshop: TRL/SRL Self-Assessment', m:'Room 201', cls:'gold'} },
    { t: '13.30', main:{ttl:'Showcase Tour A', m:'Exhibition Hall', cls:''}, pitch:{ttl:'Pitching: Food-Tech', m:'Pitching Hall', cls:'blue'}, work:{ttl:'Workshop: Design Thinking', m:'Room 202', cls:'gold'} },
    { t: '15.00', main:{ttl:'Industry Reverse Pitch', m:'Main Stage', cls:''}, pitch:null, work:{ttl:'Business Matching Round 1', m:'Matching Hall', cls:'gold'} },
  ];
  const Day2 = [
    { t: '09.00', main:{ttl:'เสวนา: ESG และความยั่งยืน', m:'Main Stage', cls:''}, pitch:{ttl:'Pitching: Env-Tech', m:'Pitching Hall', cls:'blue'}, work:{ttl:'Workshop: Pitch Coaching', m:'Room 201', cls:'gold'} },
    { t: '10.30', main:{ttl:'Investor Panel', m:'Main Stage', cls:''}, pitch:{ttl:'Pitching: Bio-Tech', m:'Pitching Hall', cls:'blue'}, work:null },
    { t: '13.30', main:{ttl:'Showcase Tour B', m:'Exhibition Hall', cls:''}, pitch:null, work:{ttl:'Business Matching Round 2', m:'Matching Hall', cls:'gold'} },
    { t: '15.00', main:{ttl:'Award Ceremony + พิธีปิด', m:'Main Stage', cls:''}, pitch:null, work:null },
  ];
  const cur = day === 0 ? Day1 : Day2;

  return (
    <div data-screen-label="12 Events & Schedule">
      <div className="event-hero">
        <div className="container">
          <div style={{fontFamily:'var(--font-en)', fontSize:12, letterSpacing:3, fontWeight:600, color:'#00C26E', marginBottom:8}}>EVENT SCHEDULE</div>
          <h1 style={{margin:'0 0 8px', fontSize:32, fontWeight: 600, color:'#fff'}}>ตารางกิจกรรมและลงทะเบียน</h1>
          <p style={{color:'#B7C8D7', maxWidth:640, fontSize:15, margin:0}}>
            24–25 มิถุนายน 2569 · อาคารจักรพันธ์เพ็ญศิริ ม.เกษตรศาสตร์ บางเขน
          </p>
        </div>
      </div>

      <div className="container">
        <div className="day-tabs">
          {[
            { l: 'วันที่ 24 มิ.ย.', d: 'DAY 1' },
            { l: 'วันที่ 25 มิ.ย.', d: 'DAY 2' },
          ].map((t, i) => (
            <button key={i} className={`day-tab ${day === i ? 'active' : ''}`} onClick={() => setDay(i)}>
              <span className="ddate">{t.d}</span> · {t.l}
            </button>
          ))}
          <button className="btn btn-primary" style={{marginLeft:'auto', alignSelf:'center'}} onClick={() => setShowTicket(true)}>
            <Icon.Calendar size={14}/> ลงทะเบียน + รับ QR Ticket
          </button>
        </div>

        <div className="schedule-grid">
          <div className="sched-head">เวลา</div>
          <div className="sched-head">Main Stage</div>
          <div className="sched-head">Pitching Hall</div>
          <div className="sched-head">Workshop Room</div>
          {cur.map((row, i) => (
            <React.Fragment key={i}>
              <div className="sched-time">{row.t}</div>
              <div className="sched-cell">
                {row.main && (
                  <div className={`sched-event ${row.main.cls}`}>
                    <div className="e-ttl">{row.main.ttl}</div>
                    <div className="e-meta"><Icon.MapPin /> {row.main.m}</div>
                  </div>
                )}
              </div>
              <div className="sched-cell">
                {row.pitch && (
                  <div className={`sched-event ${row.pitch.cls}`}>
                    <div className="e-ttl">{row.pitch.ttl}</div>
                    <div className="e-meta"><Icon.MapPin /> {row.pitch.m}</div>
                  </div>
                )}
              </div>
              <div className="sched-cell">
                {row.work && (
                  <div className={`sched-event ${row.work.cls}`}>
                    <div className="e-ttl">{row.work.ttl}</div>
                    <div className="e-meta"><Icon.MapPin /> {row.work.m}</div>
                  </div>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>

        <div style={{padding: '40px 0'}}>
          <h2 style={{fontSize: 22, fontWeight: 600, marginBottom: 16}}>บัตรเข้างานของฉัน</h2>
          <div className="qr-ticket">
            <div className="left">
              <span className="badge-type">VISITOR · GENERAL ADMISSION</span>
              <h2>BK FutureTech 2026</h2>
              <div style={{fontSize: 13.5, color:'#B7C8D7', marginBottom: 18}}>Bang Khen Agri-Food &amp; Env Tech Festival</div>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap: 16, fontSize: 13}}>
                <div>
                  <div style={{color:'#94A8BA', fontSize: 11, letterSpacing: 1, fontFamily:'var(--font-en)'}}>ATTENDEE</div>
                  <div style={{fontWeight: 600, marginTop: 4}}>คุณ ธนพล สิทธิ์ชัย</div>
                </div>
                <div>
                  <div style={{color:'#94A8BA', fontSize: 11, letterSpacing: 1, fontFamily:'var(--font-en)'}}>DATE</div>
                  <div style={{fontWeight: 600, marginTop: 4}}>24–25 JUN 2026</div>
                </div>
                <div>
                  <div style={{color:'#94A8BA', fontSize: 11, letterSpacing: 1, fontFamily:'var(--font-en)'}}>VENUE</div>
                  <div style={{fontWeight: 600, marginTop: 4}}>Chakraphan Phen Siri Hall</div>
                </div>
                <div>
                  <div style={{color:'#94A8BA', fontSize: 11, letterSpacing: 1, fontFamily:'var(--font-en)'}}>HOST</div>
                  <div style={{fontWeight: 600, marginTop: 4}}>Kasetsart University</div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="qr-block">
                {/* simple QR placeholder */}
                <svg viewBox="0 0 100 100" width="180" height="180">
                  <rect width="100" height="100" fill="#fff"/>
                  {Array.from({length: 144}).map((_,i) => {
                    const x = (i % 12) * 8 + 2;
                    const y = Math.floor(i/12) * 8 + 2;
                    const on = (i*17 + 3) % 7 < 4;
                    return on ? <rect key={i} x={x} y={y} width="6" height="6" fill="#0F2233" /> : null;
                  })}
                  <rect x="2" y="2" width="22" height="22" fill="#fff" stroke="#0F2233" strokeWidth="3"/>
                  <rect x="76" y="2" width="22" height="22" fill="#fff" stroke="#0F2233" strokeWidth="3"/>
                  <rect x="2" y="76" width="22" height="22" fill="#fff" stroke="#0F2233" strokeWidth="3"/>
                  <rect x="9" y="9" width="8" height="8" fill="#0F2233"/>
                  <rect x="83" y="9" width="8" height="8" fill="#0F2233"/>
                  <rect x="9" y="83" width="8" height="8" fill="#0F2233"/>
                </svg>
              </div>
              <div style={{fontSize: 13.5, color:'var(--ink-3)', marginBottom: 4}}>Scan to check in</div>
              <div className="ticket-id">BK-2026-V-001834</div>
              <button className="btn btn-outline btn-sm" style={{marginTop: 14}}>
                <Icon.Doc size={14}/> Download Ticket (PDF)
              </button>
            </div>
          </div>
        </div>
      </div>
      <SiteFooter setScreen={setScreen} />
    </div>
  );
}

// ============ Pitching Application ============
function PitchingPage({ setScreen }) {
  const [track, setTrack] = useState(0);

  return (
    <div data-screen-label="13 Pitching">
      <div style={{background:'var(--gradient-hero)', color:'#fff', padding:'56px 0'}}>
        <div className="container">
          <div style={{fontFamily:'var(--font-en)', fontSize:12, letterSpacing:3, fontWeight:600, color:'#00C26E', marginBottom:8}}>PITCHING APPLICATION</div>
          <h1 style={{margin:'0 0 8px', fontSize:32, fontWeight: 600, color:'#fff'}}>สมัครเข้าร่วมเวที Pitching</h1>
          <p style={{color:'#B7C8D7', maxWidth:640, fontSize:15, margin:0}}>
            นำเสนอนวัตกรรมต่อหน้านักลงทุนและพันธมิตรกว่า 150 องค์กร · เปิดรับสมัครถึง 31 พฤษภาคม 2569
          </p>
        </div>
      </div>

      <div className="container" style={{padding: '40px 0'}}>
        <div className="pitch-step-card">
          <h2 style={{margin:'0 0 6px', fontSize: 22, fontWeight: 600}}>1. เลือก Track</h2>
          <p style={{color:'var(--ink-3)', fontSize:13.5, margin:'0 0 18px'}}>เลือก Track ที่ตรงกับผลงานของคุณ</p>
          <div className="pitch-track">
            {[
              { ic: <Icon.Leaf size={20}/>, ttl:'Agri-Tech Track', d:'นวัตกรรมเกษตรอัจฉริยะ ฟาร์มแม่นยำ และเทคโนโลยีการผลิต' },
              { ic: <Icon.Drop size={20}/>, ttl:'Food-Tech Track', d:'อาหารแห่งอนาคต โปรตีนทางเลือก และระบบบรรจุภัณฑ์' },
              { ic: <Icon.Network size={20}/>, ttl:'Env-Tech Track', d:'เทคโนโลยีสิ่งแวดล้อม พลังงาน และเศรษฐกิจหมุนเวียน' },
              { ic: <Icon.TrendUp size={20}/>, ttl:'Deep Tech / Bio-Tech', d:'ไบโอเทค ดีพเทค และเทคโนโลยีฐาน' },
            ].map((t, i) => (
              <div key={i} className={`pitch-option ${track === i ? 'selected' : ''}`} onClick={() => setTrack(i)}>
                <div className="head">
                  <div className="ic">{t.ic}</div>
                  <h4>{t.ttl}</h4>
                </div>
                <div className="desc">{t.d}</div>
              </div>
            ))}
          </div>

          <h2 style={{margin:'24px 0 6px', fontSize: 18, fontWeight: 600}}>2. รายละเอียดผลงาน</h2>
          <div className="row-2">
            <div className="field">
              <label>ชื่อผลงาน <span className="req">*</span></label>
              <div className="input-wrap no-icon"><input style={{paddingLeft: 14}} placeholder="ชื่อนวัตกรรมที่ต้องการนำเสนอ" /></div>
            </div>
            <div className="field">
              <label>ระดับ TRL ปัจจุบัน <span className="req">*</span></label>
              <div className="input-wrap no-icon"><select style={{paddingLeft: 14}}>
                <option>TRL 1–3</option><option>TRL 4–6</option><option>TRL 7–9</option>
              </select></div>
            </div>
          </div>
          <div className="field">
            <label>Elevator Pitch (1 ประโยค) <span className="req">*</span></label>
            <div className="input-wrap no-icon"><input style={{paddingLeft: 14}} placeholder="อธิบายผลงานของคุณภายใน 1 ประโยค" /></div>
          </div>
          <div className="field">
            <label>Pitch Deck (PDF / PPT)</label>
            <div className="uploader">
              <Icon.Doc size={20}/>
              <div style={{marginTop: 8}}>ลากไฟล์มาวางที่นี่ หรือ <a style={{color:'var(--ku-green)'}}>เลือกไฟล์</a></div>
              <div style={{fontSize: 11.5, color:'var(--ink-4)', marginTop: 4}}>ไม่เกิน 20 หน้า · 50 MB</div>
            </div>
          </div>
          <div className="field">
            <label>Demo Video (3 นาที, YouTube link)</label>
            <div className="input-wrap no-icon"><input style={{paddingLeft: 14}} placeholder="https://youtube.com/..." /></div>
          </div>

          <h2 style={{margin:'24px 0 6px', fontSize: 18, fontWeight: 600}}>3. ข้อมูลธุรกิจ</h2>
          <div className="row-2">
            <div className="field">
              <label>ระยะการลงทุนที่ต้องการ</label>
              <div className="input-wrap no-icon"><select style={{paddingLeft: 14}}>
                <option>{'Pre-seed (< 5M THB)'}</option>
                <option>Seed (5–20M THB)</option>
                <option>Series A (20–100M THB)</option>
                <option>Series B+ (100M+ THB)</option>
              </select></div>
            </div>
            <div className="field">
              <label>มูลค่าตลาดเป้าหมาย (TAM)</label>
              <div className="input-wrap no-icon"><input style={{paddingLeft: 14}} placeholder="เช่น 500M USD" /></div>
            </div>
          </div>

          <div className="action-row">
            <a className="draft">บันทึกฉบับร่าง</a>
            <button className="btn btn-primary btn-lg" onClick={() => setScreen('account')}>
              ส่งใบสมัคร Pitching <Icon.ArrowRight />
            </button>
          </div>
        </div>
      </div>
      <SiteFooter setScreen={setScreen} />
    </div>
  );
}

// ============ News & Media ============
function NewsPage({ setScreen }) {
  const [tab, setTab] = useState('all');

  const featured = { cat: 'ANNOUNCEMENT', t: 'เปิดรับผลงานนวัตกรรม BK FutureTech 2026 แล้ววันนี้!', d: 'ส่งผลงานนวัตกรรมเข้าร่วมประกวด ชิงรางวัลและโอกาสต่อยอดเชิงพาณิชย์ภายในงาน 24–25 มิ.ย. 2569 ที่อาคารจักรพันธ์เพ็ญศิริ', date: '15 มิ.ย. 2026', kind: 'tech' };

  const news = [
    { cat: 'NEWS', t: '10 สตาร์ทอัพเกษตรไทยน่าจับตามองในปี 2026', d: '10 มิ.ย. 2026', k: 'tech' },
    { cat: 'NEWS', t: 'เทคโนโลยีอาหารแห่งอนาคตที่เอเชียกำลังพัฒนา', d: '08 มิ.ย. 2026', k: 'food' },
    { cat: 'EVENT', t: 'สรุปงานเสวนา Green Innovation for Sustainable Future', d: '05 มิ.ย. 2026', k: 'env' },
    { cat: 'ANNOUNCEMENT', t: 'เปิดให้จองบัตร Business Matching แล้ว', d: '01 มิ.ย. 2026', k: 'tech' },
    { cat: 'MEDIA', t: 'ภาพบรรยากาศงานแถลงข่าวเปิดตัว BK FutureTech 2026', d: '28 พ.ค. 2026', k: 'agri' },
    { cat: 'NEWS', t: 'KU จับมือ บพข. เปิดตัวระบบจัดการนวัตกรรมใหม่', d: '25 พ.ค. 2026', k: 'env' },
    { cat: 'EVENT', t: 'Workshop ฟรี: TRL/SRL Self-Assessment สำหรับนักวิจัย', d: '20 พ.ค. 2026', k: 'tech' },
    { cat: 'NEWS', t: 'งานวิจัยข้าวทนแล้งคว้ารางวัลนวัตกรรมแห่งปี', d: '18 พ.ค. 2026', k: 'agri' },
    { cat: 'MEDIA', t: 'รวมคลิปวิดีโอ Pitch ที่ดีที่สุดจากปี 2025', d: '15 พ.ค. 2026', k: 'food' },
  ];

  return (
    <div data-screen-label="14 News & Media">
      <div style={{background:'var(--gradient-hero)', color:'#fff', padding:'56px 0'}}>
        <div className="container">
          <div style={{fontFamily:'var(--font-en)', fontSize:12, letterSpacing:3, fontWeight:600, color:'#00C26E', marginBottom:8}}>NEWS &amp; MEDIA</div>
          <h1 style={{margin:'0 0 8px', fontSize:32, fontWeight: 600, color:'#fff'}}>ข่าวสารและประกาศ</h1>
          <p style={{color:'#B7C8D7', maxWidth:640, fontSize:15, margin:0}}>
            ติดตามข่าวสาร ความเคลื่อนไหว และอัปเดตล่าสุดของ BK FutureTech 2026
          </p>
        </div>
      </div>

      <div className="container" style={{padding: '40px 0'}}>
        <div className="news-hero-card">
          <div className="cover">
            <ImgPH kind={featured.kind} label="FEATURED NEWS" />
          </div>
          <div className="body">
            <div className="cat">{featured.cat}</div>
            <h2>{featured.t}</h2>
            <p>{featured.d}</p>
            <div style={{display:'flex', alignItems:'center', gap:14, marginTop:14, fontSize:13, color:'#94A8BA'}}>
              <span>{featured.date}</span>
              <span>·</span>
              <span>3 นาทีในการอ่าน</span>
              <button className="btn btn-solid-green btn-sm" style={{marginLeft:'auto'}}>อ่านต่อ <Icon.ArrowRight /></button>
            </div>
          </div>
        </div>

        <div className="news-tabs">
          {[
            { id: 'all', l: 'ทั้งหมด' },
            { id: 'ann', l: 'ประกาศ' },
            { id: 'news', l: 'ข่าวสาร' },
            { id: 'event', l: 'กิจกรรม' },
            { id: 'media', l: 'สื่อ / วิดีโอ' },
          ].map(t => (
            <div key={t.id} className={`news-tab ${tab === t.id ? 'active' : ''}`} onClick={() => setTab(t.id)}>
              {t.l}
            </div>
          ))}
        </div>

        <div className="news-grid">
          {news.map((n, i) => (
            <div key={i} className="news-card">
              <div className="cover"><ImgPH kind={n.k} label={n.cat} /></div>
              <div className="body">
                <div className="cat">{n.cat}</div>
                <h4>{n.t}</h4>
                <div className="meta">
                  <Icon.Calendar size={12}/> {n.d}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{display:'flex', justifyContent:'center', marginTop: 28}}>
          <button className="btn btn-outline">โหลดเพิ่มเติม <Icon.ChevronDown /></button>
        </div>
      </div>
      <SiteFooter setScreen={setScreen} />
    </div>
  );
}

// ============ Downloads ============
function DownloadsPage({ setScreen }) {
  const files = [
    { c: 'BRIEF', l: 'BK FutureTech 2026 Event Brief', m: 'PDF · 4.2 MB', t: 'pdf', cat: 'general' },
    { c: 'BRIEF', l: 'TOR — Interactive Online Platform', m: 'PDF · 2.8 MB', t: 'pdf', cat: 'general' },
    { c: 'BROCHURE', l: 'Catalogue: 300 Innovations Showcase', m: 'PDF · 28 MB', t: 'pdf', cat: 'general' },
    { c: 'BROCHURE', l: 'Floor Plan & Exhibition Map', m: 'PDF · 6.1 MB', t: 'pdf', cat: 'general' },
    { c: 'GUIDE', l: 'TRL/SRL Self-Assessment Guidelines', m: 'PDF · 1.4 MB', t: 'pdf', cat: 'knowledge' },
    { c: 'GUIDE', l: 'Pitching Application — Submission Guide', m: 'DOCX · 320 KB', t: 'docx', cat: 'submission' },
    { c: 'TEMPLATE', l: 'Bulk Upload Template (Excel)', m: 'XLSX · 92 KB', t: 'xlsx', cat: 'submission' },
    { c: 'TEMPLATE', l: 'Pitch Deck Template (PPT)', m: 'PPTX · 4.6 MB', t: 'docx', cat: 'submission' },
    { c: 'PRESS', l: 'Press Kit — Logos & Brand Assets', m: 'ZIP · 38 MB', t: 'zip', cat: 'press' },
    { c: 'PRESS', l: 'Press Release (Thai + English)', m: 'DOCX · 480 KB', t: 'docx', cat: 'press' },
    { c: 'REPORT', l: 'BK FutureTech 2025 — Final Report', m: 'PDF · 12.3 MB', t: 'pdf', cat: 'general' },
    { c: 'REPORT', l: 'Innovation Trend Report Q1/2026', m: 'PDF · 5.5 MB', t: 'pdf', cat: 'knowledge' },
  ];

  return (
    <div data-screen-label="15 Downloads">
      <div style={{background:'var(--gradient-hero)', color:'#fff', padding:'56px 0'}}>
        <div className="container">
          <div style={{fontFamily:'var(--font-en)', fontSize:12, letterSpacing:3, fontWeight:600, color:'#00C26E', marginBottom:8}}>DOWNLOAD CENTER</div>
          <h1 style={{margin:'0 0 8px', fontSize:32, fontWeight: 600, color:'#fff'}}>ดาวน์โหลดเอกสาร</h1>
          <p style={{color:'#B7C8D7', maxWidth:640, fontSize:15, margin:0}}>สูจิบัตร, Catalogue, Press Kit, แบบฟอร์ม และเอกสารทั้งหมดของงาน</p>
        </div>
      </div>

      <div className="container" style={{padding: '40px 0'}}>
        <div className="news-tabs" style={{marginTop:0}}>
          {['ทั้งหมด','สูจิบัตร / Brief','Catalogue','คู่มือ TRL/SRL','แบบฟอร์ม','Press Kit'].map((t, i) => (
            <div key={i} className={`news-tab ${i === 0 ? 'active' : ''}`}>{t}</div>
          ))}
        </div>

        <div className="dl-grid">
          {files.map((f,i) => (
            <div key={i} className="dl-card">
              <div className={`ftype ${f.t}`}>{f.t.toUpperCase()}</div>
              <div>
                <div style={{fontSize:11, color:'var(--ku-green)', fontWeight:600, letterSpacing:1, fontFamily:'var(--font-en)'}}>{f.c}</div>
                <h4>{f.l}</h4>
                <div className="meta">{f.m}</div>
              </div>
              <button>
                <Icon.ArrowRight /> ดาวน์โหลด
              </button>
            </div>
          ))}
        </div>
      </div>
      <SiteFooter setScreen={setScreen} />
    </div>
  );
}

// ============ Contact ============
function ContactPage({ setScreen }) {
  return (
    <div data-screen-label="16 Contact">
      <div style={{background:'var(--gradient-hero)', color:'#fff', padding:'56px 0'}}>
        <div className="container">
          <div style={{fontFamily:'var(--font-en)', fontSize:12, letterSpacing:3, fontWeight:600, color:'#00C26E', marginBottom:8}}>CONTACT US</div>
          <h1 style={{margin:'0 0 8px', fontSize:32, fontWeight: 600, color:'#fff'}}>ติดต่อเรา</h1>
          <p style={{color:'#B7C8D7', maxWidth:640, fontSize:15, margin:0}}>
            สอบถามข้อมูล แจ้งปัญหาการใช้งาน หรือเสนอแนะกิจกรรมที่สนใจ
          </p>
        </div>
      </div>

      <div className="container">
        <div className="contact-shell">
          <div>
            <div className="contact-info-card">
              <div className="ic-wrap"><Icon.MapPin /></div>
              <div>
                <h4>สำนักงานโครงการ</h4>
                <p>ย่านนวัตกรรมบางเขน (BID)<br/>
                อาคารวิจัยและพัฒนา ม.เกษตรศาสตร์<br/>
                50 ถนนงามวงศ์วาน แขวงลาดยาว เขตจตุจักร กรุงเทพฯ 10900</p>
              </div>
            </div>
            <div className="contact-info-card">
              <div className="ic-wrap"><Icon.Phone /></div>
              <div>
                <h4>โทรศัพท์ &amp; โทรสาร</h4>
                <p>โทร: 02 942 8888 ต่อ 1234<br/>โทรสาร: 02 942 8889</p>
              </div>
            </div>
            <div className="contact-info-card">
              <div className="ic-wrap"><Icon.Mail /></div>
              <div>
                <h4>อีเมล</h4>
                <p>info@bkfuturetech2026.ku.ac.th<br/>support@bkfuturetech2026.ku.ac.th</p>
              </div>
            </div>
            <div className="contact-info-card">
              <div className="ic-wrap"><Icon.Calendar /></div>
              <div>
                <h4>เวลาทำการ</h4>
                <p>จันทร์ – ศุกร์ 09.00 – 18.00 น.<br/>(ยกเว้นวันหยุดราชการ)</p>
              </div>
            </div>
          </div>

          <div>
            <div className="map-frame">
              <svg width="100%" height="100%" viewBox="0 0 400 250">
                <rect width="400" height="250" fill="#E8EEF2"/>
                <g stroke="#C4D2DF" strokeWidth="1">
                  <line x1="0" y1="80" x2="400" y2="60"/>
                  <line x1="0" y1="160" x2="400" y2="180"/>
                  <line x1="120" y1="0" x2="140" y2="250"/>
                  <line x1="260" y1="0" x2="280" y2="250"/>
                </g>
                <rect x="40" y="100" width="60" height="40" fill="#C8D5DD"/>
                <rect x="170" y="40" width="80" height="50" fill="#C8D5DD"/>
                <rect x="200" y="180" width="50" height="40" fill="#C8D5DD"/>
                <rect x="310" y="100" width="60" height="60" fill="#C8D5DD"/>
                <circle cx="200" cy="125" r="14" fill="#006C4F"/>
                <circle cx="200" cy="125" r="6" fill="#fff"/>
                <text x="200" y="160" textAnchor="middle" fontSize="11" fontFamily="Montserrat, sans-serif" fontWeight="700" fill="#0F2233">KU BANG KHEN</text>
              </svg>
            </div>
            <div style={{background:'#fff', borderRadius:'var(--r-lg)', border:'1px solid var(--line)', padding: 24, marginTop: 16}}>
              <h4 style={{margin:'0 0 14px', fontSize:16, fontWeight:600}}>ส่งข้อความถึงเรา</h4>
              <div className="row-2">
                <div className="field"><label>ชื่อ-นามสกุล</label><div className="input-wrap no-icon"><input style={{paddingLeft:14}} /></div></div>
                <div className="field"><label>อีเมล</label><div className="input-wrap no-icon"><input style={{paddingLeft:14}} /></div></div>
              </div>
              <div className="field"><label>หัวข้อ</label><div className="input-wrap no-icon"><input style={{paddingLeft:14}} /></div></div>
              <div className="field"><label>ข้อความ</label><textarea style={{paddingLeft:14, paddingRight:14, minHeight: 120}} /></div>
              <button className="btn btn-primary" style={{width:'100%'}}>ส่งข้อความ <Icon.ArrowRight /></button>
            </div>
          </div>
        </div>
      </div>
      <SiteFooter setScreen={setScreen} />
    </div>
  );
}

// ============ My Account ============
function AccountPage({ setScreen }) {
  const [tab, setTab] = useState('overview');

  const items = {
    overview: 'ภาพรวม',
    subs: 'ผลงานของฉัน',
    regs: 'การลงทะเบียน',
    matching: 'การจอง Matching',
    notif: 'การแจ้งเตือน',
    profile: 'โปรไฟล์',
  };

  const myInnovations = [
    { id: 'INN-2026-0312', t: 'ระบบ AI วิเคราะห์โรคพืชจากภาพถ่าย', s: 'In Review', sc: 'status-review', d: '20 พ.ค. 2026', trl: 7 },
    { id: 'INN-2026-0299', t: 'เซ็นเซอร์ตรวจวัดดินอัจฉริยะ', s: 'Approved', sc: 'status-approved', d: '12 พ.ค. 2026', trl: 8 },
    { id: 'INN-2026-0287', t: 'ระบบจัดการน้ำในไร่ด้วย IoT', s: 'Need Revision', sc: 'status-rejected', d: '05 พ.ค. 2026', trl: 6 },
  ];

  return (
    <div data-screen-label="17 My Account">
      <div className="container">
        <div className="acc-shell">
          <aside className="acc-side">
            <div className="profile">
              <div className="avatar">ธพ</div>
              <div style={{fontWeight: 600, fontSize: 15}}>คุณ ธนพล สิทธิ์ชัย</div>
              <div style={{fontSize: 12, color:'var(--ink-3)', marginTop: 2}}>นักวิจัย · KU</div>
              <div style={{fontSize: 11, color:'var(--ku-green)', marginTop: 6}}>VERIFIED</div>
            </div>
            <div style={{padding: 8}}>
              {Object.entries(items).map(([id, l]) => (
                <div key={id} className={`nav-row ${tab === id ? 'active' : ''}`} onClick={() => setTab(id)}>
                  {id === 'overview' && <Icon.Stack size={16}/>}
                  {id === 'subs' && <Icon.Doc size={16}/>}
                  {id === 'regs' && <Icon.Calendar size={16}/>}
                  {id === 'matching' && <Icon.Handshake size={16}/>}
                  {id === 'notif' && <Icon.Bell size={16}/>}
                  {id === 'profile' && <Icon.User size={16}/>}
                  <span>{l}</span>
                  {id === 'notif' && <span className="badge">3</span>}
                </div>
              ))}
            </div>
          </aside>

          <div>
            <h1 style={{margin:'0 0 8px', fontSize: 26, fontWeight: 600}}>สวัสดี, คุณธนพล 👋</h1>
            <p style={{margin: '0 0 24px', color:'var(--ink-3)', fontSize: 14}}>
              ภาพรวมกิจกรรมและผลงานของคุณบนแพลตฟอร์ม BK FutureTech 2026
            </p>

            <div className="acc-stats">
              <div className="acc-stat"><div className="lbl">ผลงานทั้งหมด</div><div className="val">3</div><div className="sub">↑ 1 จากเดือนก่อน</div></div>
              <div className="acc-stat"><div className="lbl">อนุมัติแล้ว</div><div className="val" style={{color:'var(--ku-green)'}}>1</div><div className="sub">33% ของทั้งหมด</div></div>
              <div className="acc-stat"><div className="lbl">การจอง Matching</div><div className="val">5</div><div className="sub">2 รอยืนยัน</div></div>
              <div className="acc-stat"><div className="lbl">กิจกรรมที่ลงทะเบียน</div><div className="val">7</div><div className="sub">2 วันนี้</div></div>
            </div>

            {tab === 'overview' && (
              <>
                <div className="panel" style={{marginBottom: 16}}>
                  <div className="panel-head">
                    <h3>ผลงานล่าสุด</h3>
                    <div className="sub">ผลงานที่คุณส่งเข้าระบบ</div>
                  </div>
                  <table className="data">
                    <thead><tr><th>ID</th><th>ชื่อผลงาน</th><th>TRL</th><th>สถานะ</th><th>วันที่ส่ง</th><th></th></tr></thead>
                    <tbody>
                      {myInnovations.map((r,i) => (
                        <tr key={i}>
                          <td style={{fontFamily:'var(--font-en)', fontWeight:500}}>{r.id}</td>
                          <td>{r.t}</td>
                          <td style={{fontWeight: 600}}>{r.trl}</td>
                          <td><span className={`status-pill ${r.sc}`}>{r.s}</span></td>
                          <td style={{color:'var(--ink-3)'}}>{r.d}</td>
                          <td><a style={{color:'var(--ku-green)', cursor:'pointer', fontSize:12.5, fontWeight:500}} onClick={() => setScreen('detail')}>ดู →</a></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="panel-foot"><a onClick={() => setScreen('submit')}>+ ส่งผลงานใหม่</a></div>
                </div>

                <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:16}}>
                  <div className="panel">
                    <div className="panel-head">
                      <h3>การจอง Business Matching</h3>
                      <div className="sub">นัดหมายของคุณ</div>
                    </div>
                    {[
                      { who: 'Charoen Innovation Co.', when: '24 มิ.ย. · 10:00', s: 'ยืนยัน' },
                      { who: 'Green Future Ventures', when: '24 มิ.ย. · 14:00', s: 'รอยืนยัน' },
                      { who: 'Thai Smart Farm', when: '25 มิ.ย. · 09:30', s: 'ยืนยัน' },
                    ].map((m,i) => (
                      <div key={i} className="activity-row">
                        <div className="activity-ic"><Icon.Handshake size={16}/></div>
                        <div>
                          <div className="ttl">{m.who}</div>
                          <div className="sub">{m.when}</div>
                        </div>
                        <span className={`status-pill ${m.s === 'ยืนยัน' ? 'status-approved' : 'status-review'}`} style={{fontSize:11}}>{m.s}</span>
                      </div>
                    ))}
                  </div>
                  <div className="panel">
                    <div className="panel-head">
                      <h3>การแจ้งเตือนล่าสุด</h3>
                      <div className="sub">3 รายการที่ยังไม่อ่าน</div>
                    </div>
                    {[
                      { ic: <Icon.TrendUp size={16}/>, t: 'ผลงาน INN-2026-0299 ได้รับการอนุมัติแล้ว', w: '10 นาทีที่แล้ว' },
                      { ic: <Icon.Handshake size={16}/>, t: 'Charoen Innovation Co. ยืนยันการนัดหมาย', w: '2 ชม. ที่แล้ว' },
                      { ic: <Icon.Doc size={16}/>, t: 'กรรมการขอข้อมูลเพิ่มเติม สำหรับ INN-2026-0287', w: 'เมื่อวาน' },
                    ].map((n,i) => (
                      <div key={i} className="activity-row">
                        <div className="activity-ic">{n.ic}</div>
                        <div>
                          <div className="ttl">{n.t}</div>
                          <div className="sub">{n.w}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {tab === 'subs' && (
              <div className="panel">
                <div className="adm-toolbar">
                  <div className="search">
                    <span className="ic"><Icon.Search size={14}/></span>
                    <input placeholder="ค้นหาผลงาน..." />
                  </div>
                  <select><option>สถานะทั้งหมด</option></select>
                  <button className="btn btn-primary btn-sm" style={{marginLeft:'auto'}} onClick={() => setScreen('submit')}>
                    <Icon.Plus size={14}/> ส่งผลงานใหม่
                  </button>
                </div>
                <table className="data">
                  <thead><tr><th>ID</th><th>ชื่อผลงาน</th><th>TRL</th><th>สถานะ</th><th>วันที่ส่ง</th><th></th></tr></thead>
                  <tbody>
                    {myInnovations.map((r,i) => (
                      <tr key={i}>
                        <td style={{fontFamily:'var(--font-en)', fontWeight:500}}>{r.id}</td>
                        <td>{r.t}</td>
                        <td style={{fontWeight: 600}}>{r.trl}</td>
                        <td><span className={`status-pill ${r.sc}`}>{r.s}</span></td>
                        <td style={{color:'var(--ink-3)'}}>{r.d}</td>
                        <td><a style={{color:'var(--ku-green)', cursor:'pointer', fontSize:12.5, fontWeight:500}} onClick={() => setScreen('detail')}>ดู / แก้ไข</a></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {tab !== 'overview' && tab !== 'subs' && (
              <div className="panel" style={{textAlign:'center', padding: 60}}>
                <Icon.Stack size={36} style={{color:'var(--ink-4)', marginBottom: 12}} />
                <h3 style={{margin:'0 0 6px'}}>{items[tab]}</h3>
                <p style={{color:'var(--ink-3)', fontSize: 13.5}}>หน้านี้แสดงรายละเอียดของ {items[tab]} — ตัวอย่าง UI ในตำแหน่งนี้</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <SiteFooter setScreen={setScreen} />
    </div>
  );
}

Object.assign(window, { AboutPage, MatchingPage, EventsPage, PitchingPage, NewsPage, DownloadsPage, ContactPage, AccountPage });
