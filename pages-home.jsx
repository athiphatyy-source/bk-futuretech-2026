/* eslint-disable no-undef */
// Landing page (Home)

function HomePage({ setScreen }) {
  const features = [
    { ic: 'plus', label: 'ส่งผลงานนวัตกรรม', desc: 'ส่งผลงานวิจัย / นวัตกรรม\nเพื่อนำเสนอและเข้าร่วมประกวด', target: 'submit', color: 'green' },
    { ic: 'clip', label: 'ประเมิน TRL / SRL', desc: 'ตรวจสอบระดับความพร้อม\nของเทคโนโลยีและสังคมของคุณ', target: 'knowledge', color: 'blue' },
    { ic: 'shake', label: 'จับคู่ธุรกิจ', desc: 'เชื่อมโยงนักวิจัย นักลงทุน\nพันธมิตร และผู้ประกอบการ', target: 'matching', color: 'green' },
    { ic: 'cal', label: 'ลงทะเบียนเข้าร่วมงาน', desc: 'ลงทะเบียนเข้าร่วม\nกิจกรรมต่าง ๆ', target: 'register', color: 'green' },
    { ic: 'book', label: 'องค์ความรู้', desc: 'เข้าถึงเอกสาร วิดีโอ\nและเอกสารด้านนวัตกรรม', target: 'knowledge', color: 'green' },
  ];

  const innovations = [
    { tag: 'AGRI-TECH', tagClass: '', title: 'ระบบอัจฉริยะสำหรับการปลูกพืช', desc: 'AI ช่วยวิเคราะห์สภาพดิน น้ำ อากาศ เพื่อเพิ่มผลผลิตอย่างยั่งยืน', trl: 7, org: 'KU', cover: 'agri', label: 'AGRI · CROP MONITORING' },
    { tag: 'FOOD-TECH', tagClass: 'food', title: 'โปรตีนจากพืชทางเลือกใหม่', desc: 'นวัตกรรมอาหารเพื่อสุขภาพและความยั่งยืนจากโปรตีนพืช', trl: 6, org: 'Kasetsart University', cover: 'food', label: 'FOOD · PLANT-BASED' },
    { tag: 'ENV-TECH', tagClass: 'env', title: 'ระบบบำบัดน้ำเสียแบบอัจฉริยะ', desc: 'IoT และ AI สำหรับติดตามและจัดการคุณภาพน้ำแบบเรียลไทม์', trl: 8, org: 'KU', cover: 'env', label: 'ENV · WATER QUALITY' },
    { tag: 'AGRI-TECH', tagClass: '', title: 'โดรนเพื่อการเกษตรแม่นยำ', desc: 'โดรนพ่นยาและสำรวจแปลงเกษตรอัตโนมัติ ลดต้นทุน เพิ่มประสิทธิภาพ', trl: 7, org: 'Private Sector', cover: 'tech', label: 'AGRI · PRECISION DRONE' },
  ];

  const events = [
    { d: '24', m: 'JUN', time: '09.00 — 12.00', title: 'เสวนา: นวัตกรรมเกษตรแห่งอนาคต', place: 'Main Stage' },
    { d: '24', m: 'JUN', time: '13.30 — 16.30', title: 'Pitching Stage: Agri & Food Tech', place: 'Pitching Stage' },
    { d: '25', m: 'JUN', time: '09.00 — 12.00', title: 'เสวนา: ESG และความยั่งยืนของธุรกิจ', place: 'Main Stage' },
    { d: '25', m: 'JUN', time: '13.30 — 16.30', title: 'Workshop: Design Thinking for Innovation', place: 'Workshop Room' },
  ];

  return (
    <div data-screen-label="01 Home">
      {/* ==================== HERO ==================== */}
      <section className="hero">
        <div className="circuit-bg" />
        <div className="container">
          <div className="hero-grid">
            <div>
              <h1>
                เชื่อมโยงนวัตกรรม
                <span className="accent">สู่อนาคตที่ยั่งยืน</span>
              </h1>
              <p className="subhead">
                แพลตฟอร์มกลางด้านนวัตกรรมเกษตร อาหาร และสิ่งแวดล้อม<br/>
                เชื่อมโยงงานวิจัย เทคโนโลยี และภาคธุรกิจ สู่การใช้ประโยชน์จริง
              </p>
              <div className="hero-actions">
                <button className="btn btn-primary btn-lg" onClick={() => setScreen('register')}>
                  <Icon.User size={16} /> ลงทะเบียนเข้าร่วมงาน
                </button>
                <button className="btn btn-ghost-on-dark btn-lg" onClick={() => setScreen('catalogue')}>
                  ดูโปรแกรมงาน
                </button>
              </div>
              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="hero-stat-row"><Icon.Leaf size={16} style={{color:'#00C26E'}} /> 500+</div>
                  <div className="hero-stat-label">นวัตกรรมนำเสนอ</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-row"><Icon.User size={14} style={{color:'#00B8D9'}} /> 200+</div>
                  <div className="hero-stat-label">นักวิจัย &amp; ทีม</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-row"><Icon.Handshake size={16} style={{color:'#00C26E'}} /> 150+</div>
                  <div className="hero-stat-label">องค์กร &amp; บริษัท</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-row"><Icon.Network size={16} style={{color:'#F4B400'}} /> 10,000+</div>
                  <div className="hero-stat-label">ผู้เข้าร่วม</div>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="ring r2" />
              <div className="ring r1" />
              <div className="orb" />
              <div className="leaf-glow" />
              <svg className="leaves" viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="leaf-g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#00E37E" />
                    <stop offset="100%" stopColor="#006C4F" />
                  </linearGradient>
                </defs>
                <path d="M 50 92 Q 22 60 28 30 Q 50 18 50 50 Z" fill="url(#leaf-g)" />
                <path d="M 50 92 Q 78 60 72 30 Q 50 18 50 50 Z" fill="url(#leaf-g)" opacity="0.85" />
                <line x1="50" y1="50" x2="50" y2="92" stroke="#003D2A" strokeWidth="1.5" />
              </svg>
              <span className="dot d1" />
              <span className="dot d2" />
              <span className="dot d3" />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CORE MESSAGE BAND ==================== */}
      <section className="core-band">
        <div className="container">
          <div className="core-band-grid">
            <div className="core-msg">
              <div className="icon-wrap"><Icon.Leaf size={26} style={{color:'#fff'}} /></div>
              <div>
                <h4>INNOVATION</h4>
                <p>สร้างคุณค่าใหม่จากงานวิจัย<br/>และเทคโนโลยี</p>
              </div>
            </div>
            <div className="core-msg">
              <div className="icon-wrap"><Icon.Handshake size={26} style={{color:'#fff'}} /></div>
              <div>
                <h4>COLLABORATION</h4>
                <p>เชื่อมโยงเครือข่าย<br/>ทุกภาคส่วน</p>
              </div>
            </div>
            <div className="core-msg">
              <div className="icon-wrap"><Icon.Drop size={26} style={{color:'#fff'}} /></div>
              <div>
                <h4>SUSTAINABILITY</h4>
                <p>ขับเคลื่อนนวัตกรรม<br/>เพื่อความยั่งยืน</p>
              </div>
            </div>
            <div className="core-msg">
              <div className="icon-wrap"><Icon.TrendUp size={26} style={{color:'#fff'}} /></div>
              <div>
                <h4>IMPACT</h4>
                <p>ต่อยอดสู่การใช้ประโยชน์จริง<br/>สร้างผลกระทบเชิงบวก</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PLATFORM FOR YOU ==================== */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">แพลตฟอร์มสำหรับคุณ</h2>
          <div className="feature-grid">
            {features.map((f, i) => (
              <div key={i} className="feature-card" onClick={() => setScreen(f.target)}>
                <div className={`ic ${f.color === 'blue' ? 'alt-blue' : ''}`}>
                  {f.ic === 'plus' && <Icon.Plus size={28} />}
                  {f.ic === 'clip' && <Icon.Clipboard size={28} />}
                  {f.ic === 'shake' && <Icon.Handshake size={28} />}
                  {f.ic === 'cal' && <Icon.Calendar size={28} />}
                  {f.ic === 'book' && <Icon.Book size={28} />}
                </div>
                <h3>{f.label}</h3>
                <p style={{whiteSpace:'pre-line'}}>{f.desc}</p>
                <div className="more">รายละเอียด <Icon.ArrowRight /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FEATURED INNOVATIONS ==================== */}
      <section className="section-tight">
        <div className="container">
          <div className="section-head-row">
            <h2>นวัตกรรมเด่น</h2>
            <a className="see-all" onClick={() => setScreen('catalogue')}>ดูทั้งหมด <Icon.ArrowRight /></a>
          </div>
          <div className="inno-row-wrap">
            <div className="arrow left"><Icon.ChevronLeft /></div>
            <div className="inno-grid">
              {innovations.map((it, i) => (
                <div key={i} className="inno-card" onClick={() => setScreen('detail')}>
                  <div className="cover">
                    <ImgPH kind={it.cover} label={it.label} />
                    <span className={`tag ${it.tagClass}`}>{it.tag}</span>
                  </div>
                  <div className="body">
                    <h4>{it.title}</h4>
                    <p>{it.desc}</p>
                    <div className="meta">
                      <span className="trl">TRL {it.trl}</span>
                      <span>· {it.org}</span>
                      <button className="bm-btn"><Icon.Bookmark /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="arrow right"><Icon.ChevronRight /></div>
          </div>
        </div>
      </section>

      {/* ==================== EVENTS + NEWS ==================== */}
      <section className="section-tight">
        <div className="container">
          <div className="split">
            {/* Events */}
            <div>
              <div className="section-head-row">
                <h2>กิจกรรมไฮไลต์</h2>
                <a className="see-all">ดูทั้งหมด <Icon.ArrowRight /></a>
              </div>
              <div className="events-list">
                {events.map((e, i) => (
                  <div key={i} className="event-row">
                    <div className="event-date">{e.d}<small>{e.m}</small></div>
                    <div className="event-body">
                      <div className="time">{e.time}</div>
                      <div className="title">{e.title}</div>
                      <div className="place"><Icon.MapPin /> {e.place}</div>
                    </div>
                    <Icon.ChevronRight />
                  </div>
                ))}
              </div>
              <button className="btn btn-solid-blue" style={{width:'100%', marginTop: 14, padding: 14}}>
                ดูโปรแกรมทั้งหมด <Icon.ArrowRight />
              </button>
            </div>

            {/* News */}
            <div>
              <div className="section-head-row">
                <h2>ข่าวสารและอัปเดต</h2>
                <a className="see-all">ดูทั้งหมด <Icon.ArrowRight /></a>
              </div>
              <div className="news-feature">
                <div>
                  <span className="date-pill">15 JUN 2026</span>
                  <h3>เปิดรับผลงานนวัตกรรม<br/>BK FutureTech 2026 แล้ววันนี้!</h3>
                  <p>ส่งผลงานนวัตกรรมเข้าร่วมประกวด ชิงรางวัลและโอกาส<br/>ต่อยอดเชิงพาณิชย์</p>
                  <button className="btn btn-solid-green btn-sm">อ่านต่อ <Icon.ArrowRight /></button>
                  <div className="dots"><span className="on" /><span /><span /></div>
                </div>
                <div className="visual">
                  <ImgPH kind="tech" label={`NEWS · COVER\nSUBMISSION OPEN`} style={{whiteSpace:'pre-line'}} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECONDARY NEWS GRID ==================== */}
      <section className="section-tight" style={{paddingTop: 0}}>
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 16}}>
            {[
              { d: '10 JUN 2026', t: '10 สตาร์ทอัพเกษตรไทยน่าจับตามองในปี 2026', k: 'tech' },
              { d: '08 JUN 2026', t: 'เทคโนโลยีอาหารแห่งอนาคตที่เอเชียกำลังพัฒนา', k: 'food' },
              { d: '05 JUN 2026', t: 'สรุปงานเสวนา Green Innovation for Sustainable Future', k: 'env' },
            ].map((n, i) => (
              <div key={i} style={{display:'flex', gap:14, alignItems:'center', cursor:'pointer'}}>
                <div style={{width: 96, height: 72, borderRadius: 10, overflow:'hidden', flexShrink: 0}}>
                  <ImgPH kind={n.k} label="NEWS" />
                </div>
                <div>
                  <div style={{fontSize: 11.5, color:'var(--ink-3)'}}>{n.d}</div>
                  <div style={{fontSize: 13.5, fontWeight: 500, lineHeight: 1.45, marginTop: 4}}>{n.t}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SUCCESS STATS BAND ==================== */}
      <section className="section-tight">
        <div className="container">
          <div className="stats-band">
            <h3>ตัวเลขสะท้อนความสำเร็จปีที่ผ่านมา</h3>
            <div className="stats-row">
              <div className="stat-cell">
                <div className="ic"><Icon.User size={20} style={{color:'#00C26E'}}/></div>
                <div><div className="num">8,250+</div><div className="lbl">ผู้เข้าร่วมงาน</div></div>
              </div>
              <div className="stat-cell">
                <div className="ic"><Icon.Doc size={20} style={{color:'#00B8D9'}}/></div>
                <div><div className="num">420+</div><div className="lbl">ผลงานนวัตกรรมนำเสนอ</div></div>
              </div>
              <div className="stat-cell">
                <div className="ic"><Icon.Handshake size={20} style={{color:'#F4B400'}}/></div>
                <div><div className="num">180+</div><div className="lbl">นักลงทุน &amp; พันธมิตร</div></div>
              </div>
              <div className="stat-cell">
                <div className="ic"><Icon.Calendar size={20} style={{color:'#00C26E'}}/></div>
                <div><div className="num">95+</div><div className="lbl">กิจกรรม</div></div>
              </div>
              <div className="stat-cell">
                <div className="ic"><Icon.Search size={20} style={{color:'#00B8D9'}}/></div>
                <div><div className="num">35,000+</div><div className="lbl">การเข้าชมแพลตฟอร์ม</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter setScreen={setScreen} />
    </div>
  );
}

Object.assign(window, { HomePage });
