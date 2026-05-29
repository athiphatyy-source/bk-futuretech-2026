/* eslint-disable no-undef */
// Catalogue + Detail + Submit + Knowledge

// ============ Innovation Catalogue ============
function CataloguePage({ setScreen, lang = 'th' }) {
  const isEn = lang === 'en';
  const [filterOpen, setFilterOpen] = React.useState(false);
  const items = [
    { tag: 'AGRI-TECH', tagClass: '', title: 'ระบบ AI วิเคราะห์โรคพืชจากภาพถ่าย', desc: 'ใช้ Computer Vision และ Deep Learning ตรวจจับโรคพืชอัตโนมัติ', trl: 7, org: 'Kasetsart University', cover: 'agri', label: 'AGRI · AI VISION' },
    { tag: 'FOOD-TECH', tagClass: 'food', title: 'โปรตีนจากพืชทางเลือกใหม่', desc: 'นวัตกรรมอาหารเพื่อสุขภาพและความยั่งยืน', trl: 6, org: 'Kasetsart University', cover: 'food', label: 'FOOD · PLANT-BASED' },
    { tag: 'ENV-TECH', tagClass: 'env', title: 'ระบบบำบัดน้ำเสียแบบอัจฉริยะ', desc: 'IoT และ AI สำหรับติดตามและจัดการคุณภาพน้ำเรียลไทม์', trl: 8, org: 'KU Innovation', cover: 'env', label: 'ENV · WATER QUALITY' },
    { tag: 'AGRI-TECH', tagClass: '', title: 'โดรนเพื่อการเกษตรแม่นยำ', desc: 'โดรนพ่นยาและสำรวจแปลงอัตโนมัติ ลดต้นทุน เพิ่มประสิทธิภาพ', trl: 7, org: 'Private Sector', cover: 'tech', label: 'AGRI · DRONE' },
    { tag: 'BIO-TECH', tagClass: '', title: 'วัสดุชีวภาพย่อยสลายได้จากเปลือกข้าว', desc: 'พัฒนาวัสดุชีวภาพทดแทนพลาสติกสำหรับบรรจุภัณฑ์', trl: 5, org: 'Mahidol University', cover: 'env', label: 'BIO · BIOMATERIAL' },
    { tag: 'FOOD-TECH', tagClass: 'food', title: 'เครื่องดื่มฟังก์ชันจากสมุนไพร', desc: 'เครื่องดื่มเพื่อสุขภาพจากภูมิปัญญาไทยและงานวิจัย', trl: 6, org: 'KMUTT', cover: 'food', label: 'FOOD · FUNCTIONAL' },
    { tag: 'AGRI-TECH', tagClass: '', title: 'ระบบฟาร์มอัจฉริยะในเมือง', desc: 'Vertical Farming ครบวงจรสำหรับพื้นที่จำกัด ลดการใช้น้ำ 90%', trl: 8, org: 'KU', cover: 'agri', label: 'AGRI · VERTICAL FARM' },
    { tag: 'ENV-TECH', tagClass: 'env', title: 'เซ็นเซอร์ตรวจวัดคุณภาพอากาศ', desc: 'อุปกรณ์ IoT ติดตามคุณภาพอากาศและเตือนภัยมลพิษ', trl: 7, org: 'RUN Network', cover: 'env', label: 'ENV · AIR SENSOR' },
    { tag: 'AGRI-TECH', tagClass: '', title: 'พันธุ์ข้าวทนแล้งจากเทคโนโลยีชีวภาพ', desc: 'ปรับปรุงพันธุ์ข้าวให้ทนต่อสภาพแห้งแล้งและน้ำท่วม', trl: 9, org: 'KU', cover: 'agri', label: 'AGRI · CROP BREED' },
  ];

  return (
    <div data-screen-label="05 Catalogue">
      <div style={{background: 'var(--gradient-hero)', color:'#fff', padding:'56px 0 40px'}}>
        <div className="container">
          <div style={{fontFamily:'var(--font-en)', fontSize:12, letterSpacing:3, fontWeight:600, color:'#00C26E', marginBottom:8}}>INNOVATION CATALOGUE</div>
          <h1 style={{margin:'0 0 8px', fontSize: 36, fontWeight: 600}}>{isEn ? 'Innovations from BK FutureTech 2026' : 'นวัตกรรมจาก BK FutureTech 2026'}</h1>
          <p style={{color:'#B7C8D7', maxWidth: 640, fontSize: 15}}>
            {isEn ? 'Discover over 300 innovations from Kasetsart University and partner network — covering agriculture, food, environment, and biotechnology.' : 'ค้นพบผลงานนวัตกรรมกว่า 300 ชิ้นจากมหาวิทยาลัยเกษตรศาสตร์และเครือข่ายพันธมิตร ครอบคลุมด้านเกษตร อาหาร สิ่งแวดล้อม และเทคโนโลยีชีวภาพ'}
          </p>
        </div>
      </div>

      <div className="container">
        <div className="cat-shell">
          {/* ============ Filters ============ */}
          <button className="cat-filter-toggle" onClick={() => setFilterOpen(o => !o)}>
            <Icon.Filter size={15}/> ตัวกรอง {filterOpen ? '▲' : '▼'}
          </button>
          <aside className={`cat-filters${filterOpen ? ' open' : ''}`}>
            <h4>หมวดเทคโนโลยี</h4>
            <div className="filter-group" style={{paddingTop: 0}}>
              {[
                { l: 'Agri-Tech', c: 89 },
                { l: 'Food-Tech', c: 67 },
                { l: 'Env-Tech', c: 52 },
                { l: 'Bio-Tech', c: 38 },
                { l: 'Deep Tech', c: 24 },
                { l: 'Social Impact', c: 16 },
              ].map((f,i) => (
                <label key={i} className="filter-check">
                  <input type="checkbox" defaultChecked={i < 2} />
                  <span>{f.l}</span>
                  <span className="count">{f.c}</span>
                </label>
              ))}
            </div>
            <div className="filter-group">
              <h4>ระดับ TRL</h4>
              {['TRL 1–3 · Research', 'TRL 4–6 · Development', 'TRL 7–9 · Deployment'].map((f,i) => (
                <label key={i} className="filter-check">
                  <input type="checkbox" defaultChecked={i === 1} />
                  <span>{f}</span>
                </label>
              ))}
            </div>
            <div className="filter-group">
              <h4>หน่วยงาน</h4>
              {[
                { l: 'Kasetsart University', c: 128 },
                { l: 'Mahidol University', c: 42 },
                { l: 'KMUTT', c: 36 },
                { l: 'RUN Network', c: 58 },
                { l: 'Private Sector', c: 38 },
              ].map((f,i) => (
                <label key={i} className="filter-check">
                  <input type="checkbox" />
                  <span>{f.l}</span>
                  <span className="count">{f.c}</span>
                </label>
              ))}
            </div>
            <div className="filter-group">
              <h4>คำสำคัญ</h4>
              <div style={{display:'flex', flexWrap:'wrap', gap: 6}}>
                {['AI', 'IoT', 'Sustainability', 'Drone', 'Plant-based', 'Sensor'].map(t => (
                  <span key={t} style={{
                    padding:'4px 10px', border:'1px solid var(--line-2)', borderRadius:999,
                    fontSize:12, cursor:'pointer', color:'var(--ink-2)'
                  }}>{t}</span>
                ))}
              </div>
            </div>
            <button className="btn btn-outline btn-sm" style={{width:'100%', marginTop: 14}}>
              <Icon.Refresh /> ล้างตัวกรอง
            </button>
          </aside>

          {/* ============ Results ============ */}
          <div>
            <div className="cat-toolbar">
              <div className="search-input">
                <span className="ic"><Icon.Search size={16}/></span>
                <input placeholder="ค้นหานวัตกรรม..." />
              </div>
              <div className="count">แสดง <strong>9</strong> จาก <strong>312</strong> ผลงาน</div>
              <select>
                <option>เรียงตาม: ล่าสุด</option>
                <option>เรียงตาม: ระดับ TRL</option>
                <option>เรียงตาม: หน่วยงาน</option>
              </select>
            </div>
            <div className="cat-grid">
              {items.map((it,i) => (
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
            <div style={{display:'flex', justifyContent:'center', gap: 6, marginTop: 28}}>
              {['‹','1','2','3','4','...','35','›'].map((p,i) => (
                <button key={i} className={i===1 ? 'btn btn-solid-green btn-sm' : 'btn btn-outline btn-sm'} style={{minWidth: 36}}>
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <SiteFooter setScreen={setScreen} />
    </div>
  );
}

// ============ Innovation Detail ============
function DetailPage({ setScreen, lang = 'th' }) {
  const isEn = lang === 'en';
  const [thumb, setThumb] = useState(0);
  return (
    <div data-screen-label="06 Innovation Detail">
      <div className="container">
        <div style={{padding: '24px 0 0', color:'var(--ink-3)', fontSize: 13.5, display:'flex', gap:6, alignItems:'center'}}>
          <a onClick={() => setScreen('home')} style={{cursor:'pointer'}}>{isEn ? 'Home' : 'หน้าแรก'}</a>
          <Icon.ChevronRight size={12} />
          <a onClick={() => setScreen('catalogue')} style={{cursor:'pointer'}}>{isEn ? 'Innovations' : 'นวัตกรรม'}</a>
          <Icon.ChevronRight size={12} />
          <span style={{color:'var(--ink)'}}>ระบบ AI วิเคราะห์โรคพืชจากภาพถ่าย</span>
        </div>

        <div className="detail-shell">
          <div className="detail">
            <div className="detail-cover">
              <ImgPH kind={['agri','tech','env','food'][thumb]} label="AGRI · AI CROP DIAGNOSIS" />
            </div>
            <div className="detail-thumbs">
              {[0,1,2,3].map(i => (
                <div key={i} className={`detail-thumb ${thumb===i ? 'active' : ''}`} onClick={() => setThumb(i)}>
                  <ImgPH kind={['agri','tech','env','food'][i]} label={`IMG ${i+1}`} />
                </div>
              ))}
            </div>

            <div style={{display:'flex', alignItems:'center', gap:8, marginBottom:4}}>
              <span className="pill pill-agri">AGRI-TECH</span>
              <span style={{fontFamily:'var(--font-en)', fontSize: 12, color:'var(--ink-3)'}}>INN-2026-0312</span>
            </div>
            <h1>ระบบ AI วิเคราะห์โรคพืชจากภาพถ่าย</h1>
            <div className="sub-meta">โดย Kasetsart University · เผยแพร่ 20 พ.ค. 2026 · 2,486 ครั้งที่เข้าชม</div>

            <div className="tags">
              <span style={{padding:'4px 12px', background:'var(--bg-soft)', borderRadius:999, fontSize:12, color:'var(--ink-2)'}}># AI</span>
              <span style={{padding:'4px 12px', background:'var(--bg-soft)', borderRadius:999, fontSize:12, color:'var(--ink-2)'}}># Computer Vision</span>
              <span style={{padding:'4px 12px', background:'var(--bg-soft)', borderRadius:999, fontSize:12, color:'var(--ink-2)'}}># Plant Disease</span>
              <span style={{padding:'4px 12px', background:'var(--bg-soft)', borderRadius:999, fontSize:12, color:'var(--ink-2)'}}># Precision Agriculture</span>
            </div>

            <h3>บทคัดย่อ</h3>
            <p>
              ระบบ AI สำหรับการวิเคราะห์โรคพืชจากภาพถ่ายของเกษตรกร โดยใช้ Deep Learning
              จากภาพตัวอย่างมากกว่า 50,000 ภาพครอบคลุม 28 ชนิดของโรคในพืชเศรษฐกิจหลัก
              ของประเทศไทย ระบบสามารถระบุชนิดของโรคและให้คำแนะนำการดูแลรักษาได้แม่นยำ
              ไม่น้อยกว่า 92% ผ่านแอปพลิเคชันบนสมาร์ทโฟน
            </p>

            <h3>คุณลักษณะเด่น</h3>
            <ul style={{paddingLeft: 20, color:'var(--ink-2)', fontSize:14, lineHeight:1.85}}>
              <li>ความแม่นยำในการวินิจฉัยโรคพืช 92.4% (ทดสอบกับเกษตรกรจริง)</li>
              <li>รองรับพืชเศรษฐกิจ 12 ชนิด ครอบคลุมโรคพืช 28 ประเภท</li>
              <li>ทำงานแบบ Offline ผ่านโมเดล Edge AI</li>
              <li>เชื่อมต่อระบบให้คำแนะนำเฉพาะพื้นที่ผ่านฐานข้อมูลภูมิอากาศ</li>
              <li>สอดคล้องกับมาตรฐาน GAP และเกษตรอินทรีย์</li>
            </ul>

            <h3>การประยุกต์ใช้</h3>
            <p>
              เหมาะสำหรับเกษตรกรรายย่อย หน่วยงานส่งเสริมการเกษตร และวิสาหกิจชุมชน
              สามารถบูรณาการกับระบบเกษตรอัจฉริยะอื่น ๆ ได้ผ่าน Open API
            </p>

            <h3>ทรัพย์สินทางปัญญา</h3>
            <p>อนุสิทธิบัตรเลขที่ 12345 · เครื่องหมายการค้า KU AgriAI™</p>

            <div className="detail-actions">
              <button className="btn btn-primary btn-lg" style={{flex:1}}>
                <Icon.Handshake size={16}/> ขอเข้าร่วม Business Matching
              </button>
              <button className="btn btn-outline btn-lg">
                <Icon.Doc size={16}/> ดาวน์โหลด Brief
              </button>
              <button className="btn btn-outline btn-lg" style={{padding:'14px 16px'}}>
                <Icon.Bookmark size={16}/>
              </button>
            </div>
          </div>

          <aside className="detail-side">
            <div className="trl-card">
              <div className="lbl">TECHNOLOGY READINESS LEVEL</div>
              <div className="num">7</div>
              <div className="desc">System Prototype Demonstration in Operational Environment — ทดสอบในสภาพแวดล้อมจริงระดับนำร่อง</div>
              <div className="scale">
                {[1,2,3,4,5,6,7,8,9].map(i => <span key={i} className={i <= 7 ? 'on' : ''}/>)}
              </div>
              <div style={{marginTop: 10, fontSize: 11, color:'rgba(255,255,255,0.6)', display:'flex', justifyContent:'space-between'}}>
                <span>TRL 1</span><span>TRL 9</span>
              </div>
            </div>

            <div className="contact-card">
              <h4>ผู้พัฒนา / ติดต่อ</h4>
              <div className="row">
                <div className="admin-user-mini" style={{background:'transparent', padding: 0}}>
                  <div className="avatar">รศ</div>
                  <div>
                    <div className="name">ดร. สมชาย วิจัยพันธ์</div>
                    <div className="role">คณะเกษตร · ม.เกษตรศาสตร์</div>
                  </div>
                </div>
              </div>
              <div style={{height:1, background:'var(--line)', margin:'10px 0'}}/>
              <div className="row"><Icon.Mail size={14} className="ic" /> somchai.r@ku.ac.th</div>
              <div className="row"><Icon.Phone size={14} className="ic" /> 02 942 8888 ext. 1234</div>
              <div className="row"><Icon.MapPin /> คณะเกษตร ม.เกษตรศาสตร์ บางเขน</div>
            </div>

            <div className="contact-card">
              <h4>เอกสารที่เกี่ยวข้อง</h4>
              {[
                'Technical Brief (PDF, 2.3 MB)',
                'Demo Video (YouTube)',
                'Patent Document (PDF, 1.1 MB)',
                'User Testing Report (PDF, 850 KB)',
              ].map((d,i) => (
                <div key={i} className="row" style={{cursor:'pointer'}}>
                  <Icon.Doc size={14} className="ic" /> {d}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
      <SiteFooter setScreen={setScreen} />
    </div>
  );
}

// ============ Submit Innovation (Multi-step) ============
function SubmitPage({ setScreen, lang = 'th' }) {
  const isEn = lang === 'en';
  const [step, setStep] = useState(1);
  const totalSteps = 6;

  const steps = isEn ? [
    { n: 1, t: 'Innovation Info', s: 'Title, abstract, category' },
    { n: 2, t: 'Owner Info', s: 'Name, organization, contact' },
    { n: 3, t: 'IP Rights', s: 'Patent, petty patent' },
    { n: 4, t: 'Documents & Media', s: 'Images, video, PDF' },
    { n: 5, t: 'TRL/SRL Assessment', s: 'Self-assessment form' },
    { n: 6, t: 'Review & Submit', s: 'Preview & Submit' },
  ] : [
    { n: 1, t: 'ข้อมูลผลงาน', s: 'ชื่อผลงาน บทคัดย่อ หมวด' },
    { n: 2, t: 'ข้อมูลเจ้าของ', s: 'ชื่อ หน่วยงาน ติดต่อ' },
    { n: 3, t: 'ทรัพย์สินทางปัญญา', s: 'สิทธิบัตร อนุสิทธิบัตร' },
    { n: 4, t: 'เอกสารและสื่อแนบ', s: 'รูปภาพ วิดีโอ PDF' },
    { n: 5, t: 'ประเมิน TRL/SRL', s: 'แบบประเมินตนเอง' },
    { n: 6, t: 'ตรวจสอบและส่ง', s: 'Preview & Submit' },
  ];

  return (
    <div data-screen-label="07 Submit">
      <div style={{background: '#fff', borderBottom: '1px solid var(--line)', padding: '24px 0'}}>
        <div className="container">
          <h1 style={{margin:'0 0 4px', fontSize: 26, fontWeight: 600}}>{isEn ? 'Submit Innovation' : 'ส่งผลงานนวัตกรรม'}</h1>
          <p style={{margin:0, color:'var(--ink-3)', fontSize: 14}}>
            {isEn ? 'Submit your innovation to BK FutureTech 2026 and self-assess TRL/SRL levels.' : 'ยื่นเสนอผลงานเข้าสู่ระบบ BK FutureTech 2026 พร้อมระบุระดับ TRL/SRL ด้วยตนเอง'}
          </p>
        </div>
      </div>

      <div className="container">
        <div className="submit-shell">
          <aside className="submit-side">
            {steps.map(s => (
              <div key={s.n} className={`submit-step-row ${step === s.n ? 'active' : step > s.n ? 'complete' : ''}`} onClick={() => setStep(s.n)}>
                <div className="step-num">{s.n}</div>
                <div className="step-label">
                  <div className="ttl">{s.t}</div>
                  <div className="sub">{s.s}</div>
                </div>
              </div>
            ))}
            <div style={{padding:'14px 14px 4px', marginTop: 4, borderTop:'1px solid var(--line)'}}>
              <div style={{fontSize:12, color:'var(--ink-3)', marginBottom:6}}>ความคืบหน้า</div>
              <div className="quiz-progress"><div className="fill" style={{width: `${(step/totalSteps)*100}%`}}/></div>
              <div style={{fontSize:12, color:'var(--ink-3)', marginTop:6}}>ขั้นที่ {step} จาก {totalSteps}</div>
            </div>
          </aside>

          <div className="submit-main">
            {step === 1 && (<>
              <h2>1. ข้อมูลผลงาน</h2>
              <div className="sub">รายละเอียดเบื้องต้นของผลงานนวัตกรรม</div>
              <div className="field">
                <label>ชื่อผลงาน (ภาษาไทย) <span className="req">*</span></label>
                <div className="input-wrap no-icon"><input style={{paddingLeft: 14}} placeholder="ระบุชื่อผลงานภาษาไทย" /></div>
              </div>
              <div className="field">
                <label>ชื่อผลงาน (ภาษาอังกฤษ) <span className="req">*</span></label>
                <div className="input-wrap no-icon"><input style={{paddingLeft: 14}} placeholder="Innovation Title in English" /></div>
              </div>
              <div className="field">
                <label>บทคัดย่อ <span className="req">*</span></label>
                <textarea style={{paddingLeft: 14, paddingRight: 14}} placeholder="อธิบายผลงานนวัตกรรมโดยย่อ (250–500 คำ)"></textarea>
                <div className="hint">0 / 500 คำ</div>
              </div>
              <div className="row-2">
                <div className="field">
                  <label>หมวดเทคโนโลยี <span className="req">*</span></label>
                  <div className="input-wrap no-icon">
                    <select style={{paddingLeft: 14}}>
                      <option>-- เลือกหมวดเทคโนโลยี --</option>
                      <option>Agri-Tech</option>
                      <option>Food-Tech</option>
                      <option>Env-Tech</option>
                      <option>Bio-Tech</option>
                      <option>Deep Tech</option>
                      <option>Social Impact</option>
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label>ประเภทผลงาน <span className="req">*</span></label>
                  <div className="input-wrap no-icon">
                    <select style={{paddingLeft: 14}}>
                      <option>-- เลือกประเภท --</option>
                      <option>Research</option>
                      <option>Product / Prototype</option>
                      <option>Service / Platform</option>
                      <option>Process Innovation</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <label>คำสำคัญ (Keywords) <span className="req">*</span></label>
                <div className="input-wrap no-icon"><input style={{paddingLeft: 14}} placeholder="คั่นด้วยเครื่องหมายจุลภาค เช่น AI, IoT, Sustainability" /></div>
              </div>
            </>)}

            {step === 2 && (<>
              <h2>2. ข้อมูลเจ้าของผลงาน</h2>
              <div className="sub">รายชื่อนักวิจัย / ผู้ประดิษฐ์ / ทีมงาน</div>
              <div className="row-2">
                <div className="field">
                  <label>ชื่อ-นามสกุล (หัวหน้าทีม) <span className="req">*</span></label>
                  <div className="input-wrap no-icon"><input style={{paddingLeft: 14}} defaultValue="ดร. สมชาย วิจัยพันธ์" /></div>
                </div>
                <div className="field">
                  <label>ตำแหน่ง <span className="req">*</span></label>
                  <div className="input-wrap no-icon"><input style={{paddingLeft: 14}} defaultValue="รองศาสตราจารย์" /></div>
                </div>
              </div>
              <div className="row-2">
                <div className="field">
                  <label>หน่วยงาน <span className="req">*</span></label>
                  <div className="input-wrap no-icon"><input style={{paddingLeft: 14}} defaultValue="คณะเกษตร ม.เกษตรศาสตร์" /></div>
                </div>
                <div className="field">
                  <label>ORCID ID</label>
                  <div className="input-wrap no-icon"><input style={{paddingLeft: 14}} placeholder="0000-0000-0000-0000" /></div>
                </div>
              </div>
              <div className="row-2">
                <div className="field">
                  <label>อีเมล <span className="req">*</span></label>
                  <div className="input-wrap"><span className="input-icon"><Icon.Mail/></span><input defaultValue="somchai.r@ku.ac.th" /></div>
                </div>
                <div className="field">
                  <label>โทรศัพท์ <span className="req">*</span></label>
                  <div className="input-wrap"><span className="input-icon"><Icon.Phone/></span><input placeholder="02 xxx xxxx" /></div>
                </div>
              </div>
              <div className="field">
                <label>สมาชิกในทีม</label>
                <div style={{display:'flex', flexDirection:'column', gap: 8, marginTop: 6}}>
                  {['ดร. มาลี รุ่งโรจน์ — นักวิจัยร่วม', 'นาย ปิยะ สุขสันต์ — นักศึกษาปริญญาเอก'].map((m,i) => (
                    <div key={i} style={{padding:'10px 14px', border:'1px solid var(--line)', borderRadius: 10, display:'flex', alignItems:'center', gap:10, fontSize:13.5}}>
                      <div className="admin-user-mini" style={{background:'transparent', padding: 0}}>
                        <div className="avatar">{m.slice(3,5)}</div>
                      </div>
                      {m}
                      <button className="bm-btn" style={{marginLeft:'auto'}}>×</button>
                    </div>
                  ))}
                </div>
                <button className="btn btn-outline btn-sm" style={{marginTop: 10}}><Icon.Plus size={14}/> เพิ่มสมาชิก</button>
              </div>
            </>)}

            {step === 3 && (<>
              <h2>3. ทรัพย์สินทางปัญญา</h2>
              <div className="sub">ระบุสถานะการคุ้มครองทรัพย์สินทางปัญญา (ถ้ามี)</div>
              {[
                { l: 'สิทธิบัตร (Patent)', n: 'patent' },
                { l: 'อนุสิทธิบัตร (Petty Patent)', n: 'petty' },
                { l: 'เครื่องหมายการค้า (Trademark)', n: 'tm' },
                { l: 'ลิขสิทธิ์ (Copyright)', n: 'cr' },
              ].map((g,i) => (
                <div key={i} style={{padding: '16px 0', borderBottom: '1px solid var(--line)'}}>
                  <div style={{display:'flex', alignItems:'center', gap:12, marginBottom: 8}}>
                    <input type="checkbox" id={g.n} style={{accentColor:'var(--ku-green)'}} defaultChecked={i===1} />
                    <label htmlFor={g.n} style={{fontWeight: 500, fontSize: 14}}>{g.l}</label>
                  </div>
                  <div className="row-2" style={{marginLeft: 24}}>
                    <div className="field" style={{margin:0}}>
                      <label style={{fontSize: 12}}>เลขที่ / รหัสอ้างอิง</label>
                      <div className="input-wrap no-icon"><input style={{paddingLeft: 14}} defaultValue={i===1 ? '12345' : ''} placeholder="เลขที่..." /></div>
                    </div>
                    <div className="field" style={{margin:0}}>
                      <label style={{fontSize: 12}}>สถานะ</label>
                      <div className="input-wrap no-icon">
                        <select style={{paddingLeft: 14}}>
                          <option>-- เลือก --</option>
                          <option>อยู่ระหว่างยื่นคำขอ</option>
                          <option>ได้รับการคุ้มครองแล้ว</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>)}

            {step === 4 && (<>
              <h2>4. เอกสารและสื่อแนบ</h2>
              <div className="sub">อัปโหลดรูปภาพ วิดีโอ และเอกสารประกอบ</div>

              <div className="field">
                <label>รูปภาพปก <span className="req">*</span></label>
                <div className="uploader">
                  <Icon.Plus size={24} /><br/>
                  ลากไฟล์มาวางที่นี่ หรือ <a style={{color:'var(--ku-green)'}}>เลือกไฟล์</a><br/>
                  <span style={{fontSize: 11, color:'var(--ink-4)'}}>รองรับ JPG, PNG ขนาดไม่เกิน 10 MB</span>
                </div>
              </div>

              <div className="field">
                <label>รูปภาพประกอบ (สูงสุด 8 รูป)</label>
                <div className="admin-grid-4" style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 10}}>
                  {[0,1,2].map(i => (
                    <div key={i} style={{aspectRatio:'1/1', borderRadius:10, overflow:'hidden'}}>
                      <ImgPH kind={['agri','tech','env'][i]} label={`IMG ${i+1}`} />
                    </div>
                  ))}
                  <div style={{aspectRatio:'1/1', borderRadius:10, border:'2px dashed var(--line-2)', display:'grid', placeItems:'center', color:'var(--ink-3)', cursor:'pointer'}}>
                    <div style={{textAlign:'center', fontSize: 12}}>
                      <Icon.Plus size={20}/><div>เพิ่มรูปภาพ</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="field">
                <label>วิดีโอแนะนำผลงาน</label>
                <div className="input-wrap no-icon"><input style={{paddingLeft: 14}} placeholder="https://youtube.com/watch?v=..." /></div>
                <div className="hint">วาง YouTube URL หรืออัปโหลดไฟล์ MP4 ขนาดไม่เกิน 200 MB</div>
              </div>

              <div className="field">
                <label>เอกสารประกอบ (PDF)</label>
                <div className="uploader">
                  <Icon.Doc size={24} /><br/>
                  ลากไฟล์ PDF มาวางที่นี่ หรือ <a style={{color:'var(--ku-green)'}}>เลือกไฟล์</a><br/>
                  <span style={{fontSize: 11, color:'var(--ink-4)'}}>PDF ขนาดไม่เกิน 20 MB ต่อไฟล์</span>
                </div>
                <div style={{padding:'10px 14px', background: 'var(--bg-soft)', borderRadius: 10, marginTop: 10, display:'flex', alignItems:'center', gap: 12, fontSize: 13}}>
                  <Icon.Doc size={18} style={{color: 'var(--tech-blue)'}} />
                  <div style={{flex:1}}>
                    <div style={{fontWeight: 500}}>Technical_Brief_v2.pdf</div>
                    <div style={{fontSize: 11.5, color:'var(--ink-3)'}}>2.3 MB · อัปโหลดเมื่อ 14:25</div>
                  </div>
                  <button className="bm-btn">×</button>
                </div>
              </div>
            </>)}

            {step === 5 && (<>
              <h2>5. ประเมิน TRL / SRL ตนเอง</h2>
              <div className="sub">เลือกระดับความพร้อมของเทคโนโลยี (TRL) และสังคม (SRL) ที่ตรงกับผลงานของคุณ</div>

              <div style={{padding: '20px', background:'var(--inno-green-soft)', borderRadius: 12, marginBottom: 24, display:'flex', alignItems:'center', gap: 14}}>
                <div style={{width: 44, height: 44, borderRadius: 12, background:'var(--ku-green)', color:'#fff', display:'grid', placeItems:'center'}}>
                  <Icon.Target size={20} />
                </div>
                <div style={{flex:1}}>
                  <div style={{fontWeight: 600, marginBottom: 2}}>ยังไม่แน่ใจระดับ TRL/SRL ของคุณ?</div>
                  <div style={{fontSize: 13, color:'var(--ink-2)'}}>ลองทำแบบประเมินตนเองแบบ Wizard ที่จะแนะนำระดับที่เหมาะสมให้</div>
                </div>
                <button className="btn btn-solid-green btn-sm" onClick={() => setScreen('knowledge')}>
                  เริ่มประเมิน <Icon.ArrowRight />
                </button>
              </div>

              <div className="field">
                <label>ระดับความพร้อมของเทคโนโลยี (TRL) <span className="req">*</span></label>
                <div className="trl-picker-grid" style={{marginTop: 8}}>
                  {[1,2,3,4,5,6,7,8,9].map(i => (
                    <div key={i} style={{
                      padding:'14px 0', textAlign:'center', borderRadius: 8,
                      border: '1.5px solid var(--line-2)', cursor:'pointer',
                      ...(i === 7 ? {background:'var(--inno-green-soft)', borderColor:'var(--ku-green)', color:'var(--ku-green)'} : {})
                    }}>
                      <div style={{fontFamily:'var(--font-en)', fontWeight:700, fontSize:18}}>{i}</div>
                      <div style={{fontSize: 10}}>TRL</div>
                    </div>
                  ))}
                </div>
                <div className="hint" style={{marginTop: 10}}>
                  <strong style={{color:'var(--ku-green)'}}>TRL 7</strong> — System Prototype Demonstration in Operational Environment
                </div>
              </div>

              <div className="field">
                <label>ระดับความพร้อมทางสังคม (SRL)</label>
                <div className="trl-picker-grid" style={{marginTop: 8}}>
                  {[1,2,3,4,5,6,7,8,9].map(i => (
                    <div key={i} style={{
                      padding:'14px 0', textAlign:'center', borderRadius: 8,
                      border: '1.5px solid var(--line-2)', cursor:'pointer',
                      ...(i === 5 ? {background:'#E0F4F8', borderColor:'var(--cyan)', color:'#006B7F'} : {})
                    }}>
                      <div style={{fontFamily:'var(--font-en)', fontWeight:700, fontSize:18}}>{i}</div>
                      <div style={{fontSize: 10}}>SRL</div>
                    </div>
                  ))}
                </div>
                <div className="hint" style={{marginTop: 10}}>
                  <strong style={{color:'#006B7F'}}>SRL 5</strong> — Solution validated in real-life environment
                </div>
              </div>

            </>)}

            {step === 6 && (<>
              <h2>6. ตรวจสอบและส่งผลงาน</h2>
              <div className="sub">ตรวจทานข้อมูลอีกครั้งก่อนส่งเพื่อพิจารณา</div>
              {[
                { ttl: 'ข้อมูลผลงาน', items: [
                  ['ชื่อ', 'ระบบ AI วิเคราะห์โรคพืชจากภาพถ่าย'],
                  ['Title (EN)', 'AI-based Plant Disease Diagnosis System'],
                  ['หมวด', 'Agri-Tech'],
                  ['ประเภท', 'Service / Platform'],
                ]},
                { ttl: 'เจ้าของผลงาน', items: [
                  ['หัวหน้าทีม', 'ดร. สมชาย วิจัยพันธ์'],
                  ['หน่วยงาน', 'คณะเกษตร ม.เกษตรศาสตร์'],
                  ['ติดต่อ', 'somchai.r@ku.ac.th'],
                  ['ทีมร่วม', '2 คน'],
                ]},
                { ttl: 'ทรัพย์สินทางปัญญา', items: [
                  ['อนุสิทธิบัตร', 'เลขที่ 12345 (ได้รับการคุ้มครองแล้ว)'],
                ]},
                { ttl: 'เอกสารแนบ', items: [
                  ['รูปภาพ', '4 ไฟล์'],
                  ['วิดีโอ', '1 ลิงก์ YouTube'],
                  ['PDF', '1 ไฟล์ (Technical_Brief_v2.pdf)'],
                ]},
                { ttl: 'TRL / SRL', items: [
                  ['TRL', 'ระดับ 7 — Prototype Demo'],
                  ['SRL', 'ระดับ 5 — Validated in real-life'],
                ]},
              ].map((sec, i) => (
                <div key={i} style={{padding:'18px 0', borderBottom: i < 4 ? '1px solid var(--line)' : 0}}>
                  <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom: 10}}>
                    <strong style={{fontSize:14}}>{sec.ttl}</strong>
                    <a style={{fontSize:12.5, color:'var(--ku-green)', fontWeight:500, cursor:'pointer'}}>แก้ไข</a>
                  </div>
                  <div style={{display:'grid', gridTemplateColumns:'160px 1fr', rowGap:8, columnGap:16, fontSize:13.5}}>
                    {sec.items.map((it,j) => (
                      <React.Fragment key={j}>
                        <div style={{color:'var(--ink-3)'}}>{it[0]}</div>
                        <div style={{color:'var(--ink)'}}>{it[1]}</div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
              {/* G6: PDPA consent at step 6 (Preview & Confirm) per TOR 4.1.3 */}
              <div className="check-row" style={{marginTop: 16, padding:'16px', background:'var(--inno-green-soft)', borderRadius: 10, border:'1px solid var(--inno-green)'}}>
                <input type="checkbox" id="consent" defaultChecked />
                <label htmlFor="consent" style={{fontSize: 13.5}}>
                  ข้าพเจ้าให้ความยินยอมเปิดเผยข้อมูลผลงานนี้ตาม <a style={{color:'var(--ku-green)', fontWeight:600}}>พรบ. คุ้มครองข้อมูลส่วนบุคคล (PDPA)</a> เพื่อใช้ในการพิจารณาและเผยแพร่บนแพลตฟอร์ม BK FutureTech 2026
                </label>
              </div>
            </>)}

            <div className="action-row">
              {step > 1 ? (
                <button className="btn btn-outline" onClick={() => setStep(step - 1)}>
                  <Icon.ChevronLeft /> ย้อนกลับ
                </button>
              ) : <span/>}
              <div style={{display:'flex', alignItems:'center', gap: 16}}>
                <a className="draft">บันทึกฉบับร่าง</a>
                {step < totalSteps ? (
                  <button className="btn btn-primary" onClick={() => setStep(step + 1)}>
                    ถัดไป <Icon.ChevronRight />
                  </button>
                ) : (
                  <button className="btn btn-primary btn-lg" onClick={() => setScreen('home')}>
                    ส่งผลงาน <Icon.ArrowRight />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <SiteFooter setScreen={setScreen} />
    </div>
  );
}

// ============ TRL/SRL Knowledge Center + Self-Assessment ============
function KnowledgePage({ setScreen, lang = 'th' }) {
  const isEn = lang === 'en';
  const [tab, setTab] = useState('trl'); // trl | srl | quiz
  const [q, setQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const calcTRL = () => {
    const base = (answers[0] || 0) * 2 + 1;
    const adj = Math.round(((answers[1] || 0) + (answers[2] || 0) - 4) / 4);
    return Math.min(9, Math.max(1, base + adj));
  };
  const trlResult = showResult ? calcTRL() : null;

  const trlLevels = [
    { lvl: 1, ttl: 'หลักการพื้นฐาน', desc: 'การสังเกตและรายงานหลักการพื้นฐาน' },
    { lvl: 2, ttl: 'แนวคิดเทคโนโลยี', desc: 'จัดทำแนวคิดเทคโนโลยีและการใช้งาน' },
    { lvl: 3, ttl: 'พิสูจน์แนวคิด', desc: 'การวิเคราะห์เชิงทดลองและพิสูจน์แนวคิด' },
    { lvl: 4, ttl: 'ห้องปฏิบัติการ', desc: 'พิสูจน์ใช้งานในห้องปฏิบัติการ' },
    { lvl: 5, ttl: 'สภาพแวดล้อมจำลอง', desc: 'ทดสอบในสภาพแวดล้อมที่จำลองขึ้น' },
    { lvl: 6, ttl: 'ต้นแบบในระบบจำลอง', desc: 'ต้นแบบทำงานในระบบที่ใกล้เคียงสภาพจริง' },
    { lvl: 7, ttl: 'ต้นแบบในสภาพจริง', desc: 'สาธิตต้นแบบในสภาพแวดล้อมการใช้งานจริง' },
    { lvl: 8, ttl: 'พร้อมใช้งาน', desc: 'ระบบเสร็จสมบูรณ์และผ่านการทดสอบใช้งานจริง' },
    { lvl: 9, ttl: 'ใช้งานในตลาด', desc: 'ระบบใช้งานจริงในสภาพแวดล้อมการดำเนินงาน' },
  ];

  const quizQs = [
    {
      q: 'ผลงานของคุณอยู่ในขั้นใด?',
      d: 'เลือกข้อที่อธิบายสถานะปัจจุบันได้ดีที่สุด',
      opts: [
        'มีแนวคิดและเอกสารสนับสนุน แต่ยังไม่มีการทดลอง',
        'มีการทดลองพิสูจน์แนวคิดในห้องปฏิบัติการแล้ว',
        'มีต้นแบบ (Prototype) ที่ใช้งานได้บางส่วน',
        'มีต้นแบบที่ทดสอบในสภาพการใช้งานจริงแล้ว',
        'พร้อมจำหน่ายหรือใช้งานจริงในตลาด',
      ],
    },
    {
      q: 'ระดับการทดสอบกับผู้ใช้จริง',
      d: 'มีการทดสอบกับกลุ่มผู้ใช้เป้าหมายแล้วในระดับใด?',
      opts: [
        'ยังไม่ได้ทดสอบกับผู้ใช้',
        'ทดสอบกับผู้ใช้ในห้องปฏิบัติการ (Lab User Test)',
        'ทดสอบนำร่องกับผู้ใช้จริง 5–20 ราย',
        'ทดสอบในวงกว้าง (Pilot) กับผู้ใช้ 50+ ราย',
        'มีฐานผู้ใช้จริงที่ใช้งานต่อเนื่อง',
      ],
    },
    {
      q: 'สถานะของทรัพย์สินทางปัญญา',
      d: 'มีการคุ้มครองทรัพย์สินทางปัญญาในระดับใด?',
      opts: [
        'ยังไม่ได้ดำเนินการ',
        'อยู่ระหว่างการศึกษาความเป็นไปได้',
        'ยื่นคำขอจดสิทธิบัตร/อนุสิทธิบัตรแล้ว',
        'ได้รับสิทธิบัตร/อนุสิทธิบัตรแล้ว',
        'มีการอนุญาตให้ใช้สิทธิ์ (Licensing)',
      ],
    },
  ];

  return (
    <div data-screen-label="08 Knowledge Center">
      <div className="container">
        <div className="knowledge-hero">
          <div style={{display:'flex', alignItems:'center', gap:8, fontFamily:'var(--font-en)', fontSize:12, letterSpacing:3, fontWeight:600, color:'#00C26E', marginBottom: 12}}>
            <Icon.Book size={14} /> TRL / SRL KNOWLEDGE CENTER
          </div>
          <h1>{isEn ? <>Understanding Readiness Levels<br/><span className="gradient">of Technology and Society</span></> : <>เข้าใจระดับความพร้อม<br/><span className="gradient">ของเทคโนโลยีและสังคม</span></>}</h1>
          <p>{isEn ? 'Learn about TRL (Technology Readiness Level) and SRL (Social Readiness Level), with self-assessment tools to accurately identify your innovation\'s readiness.' : 'เรียนรู้แนวคิด TRL (Technology Readiness Level) และ SRL (Social Readiness Level) พร้อมเครื่องมือประเมินตนเองเพื่อระบุระดับความพร้อมของผลงานนวัตกรรมของคุณได้อย่างถูกต้อง'}</p>

          <div style={{display:'flex', gap:10, marginTop: 22}}>
            <button className={`btn ${tab==='trl' ? 'btn-solid-green' : 'btn-ghost-on-dark'}`} onClick={() => setTab('trl')}>
              <Icon.Stack size={16}/> TRL 1–9
            </button>
            <button className={`btn ${tab==='srl' ? 'btn-solid-green' : 'btn-ghost-on-dark'}`} onClick={() => setTab('srl')}>
              <Icon.Network size={16}/> SRL 1–9
            </button>
            <button className={`btn ${tab==='quiz' ? 'btn-solid-green' : 'btn-ghost-on-dark'}`} onClick={() => setTab('quiz')}>
              <Icon.Target size={16}/> {isEn ? 'Start Self-Assessment' : 'เริ่มประเมินตนเอง'}
            </button>
            <button className="btn btn-ghost-on-dark">
              <Icon.Doc size={16}/> {isEn ? 'Download Guide (PDF)' : 'ดาวน์โหลดเอกสาร (PDF)'}
            </button>
          </div>
        </div>

        {(tab === 'trl' || tab === 'srl') && (
          <>
            <div className="trl-ladder-wrap">
              <div className="trl-ladder">
                {trlLevels.map((l, i) => (
                  <div key={i} className="trl-step">
                    <div className="lvl">{tab === 'trl' ? 'TRL' : 'SRL'}</div>
                    <div className="num">{l.lvl}</div>
                    <div className="lbl">{l.ttl}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="admin-grid-3" style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 16, padding:'8px 0 40px'}}>
              {trlLevels.slice(0, 9).map((l, i) => (
                <div key={i} className="panel" style={{padding: 18}}>
                  <div style={{display:'flex', alignItems:'center', gap:12, marginBottom: 8}}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 10,
                      background: ['#EDF1F4','#E7F0F8','#DDEEF2','#D5EEF7','#D5E5F5','#D5EDE8','#D7F1E3','#CFF1DD','#FBF1D9'][i],
                      color: ['#6B7C8E','#4F8FB8','#0089A3','#00B8D9','#0057B8','#009A8B','#006C4F','#00A560','#A07700'][i],
                      display:'grid', placeItems:'center', fontWeight:700, fontFamily:'var(--font-en)',
                    }}>{l.lvl}</div>
                    <div>
                      <div style={{fontWeight: 600, fontSize: 14}}>{l.ttl}</div>
                      <div style={{fontSize: 11.5, color:'var(--ink-3)', fontFamily:'var(--font-en)', letterSpacing:1}}>
                        {tab === 'trl' ? `TRL ${l.lvl}` : `SRL ${l.lvl}`}
                      </div>
                    </div>
                  </div>
                  <div style={{fontSize: 13, color:'var(--ink-2)', lineHeight:1.6}}>{l.desc}</div>
                </div>
              ))}
            </div>
          </>
        )}

        {tab === 'quiz' && showResult && (
          <div className="trl-result-wrap">
            {/* Print header (hidden on screen) */}
            <div className="print-only trl-print-header">
              <div style={{fontFamily:'var(--font-en)', fontWeight:700, fontSize:20, color:'#0F2233'}}>BK FutureTech 2026</div>
              <div style={{fontSize:12, color:'#6A8098', letterSpacing:2}}>TRL / SRL SELF-ASSESSMENT RESULT</div>
            </div>

            <div className="trl-result-card">
              <div className="trl-result-badge">
                <div className="trl-num">{trlResult}</div>
                <div className="trl-label">TRL</div>
              </div>
              <div className="trl-result-body">
                <div className="trl-result-title">
                  {isEn ? 'Your Technology Readiness Level' : 'ระดับความพร้อมของเทคโนโลยีของคุณ'}
                </div>
                <div className="trl-result-name">
                  {trlLevels[trlResult - 1]?.ttl}
                </div>
                <div className="trl-result-desc">
                  {trlLevels[trlResult - 1]?.desc}
                </div>
                <div className="trl-result-rec">
                  {trlResult <= 3 && (isEn ? 'Still in concept stage — focus on building a prototype and laboratory testing.' : 'ยังอยู่ในขั้นแนวคิด — ควรพัฒนาต้นแบบและทดสอบในห้องปฏิบัติการ')}
                  {trlResult >= 4 && trlResult <= 6 && (isEn ? 'In development — test with real users and consider filing a patent.' : 'กำลังพัฒนา — ควรทดสอบกับผู้ใช้จริงและเตรียมจดสิทธิบัตร')}
                  {trlResult >= 7 && trlResult <= 8 && (isEn ? 'Nearly ready — pilot in real markets and seek commercial partners.' : 'เกือบพร้อม — ควรทดสอบในตลาดและหาพันธมิตรเชิงพาณิชย์')}
                  {trlResult === 9 && (isEn ? 'Market ready — suitable for commercialization and investment opportunities.' : 'พร้อมใช้งาน — เหมาะสมสำหรับการต่อยอดเชิงพาณิชย์และการลงทุน')}
                </div>
              </div>
            </div>

            <div className="trl-result-answers">
              <h4>{isEn ? 'Your Answers' : 'สรุปคำตอบของคุณ'}</h4>
              {quizQs.map((qs, i) => (
                <div key={i} className="trl-answer-row">
                  <div className="trl-answer-q">{qs.q}</div>
                  <div className="trl-answer-a">{qs.opts[answers[i]]}</div>
                </div>
              ))}
            </div>

            <div className="no-print" style={{display:'flex', gap:12, marginTop:24}}>
              <button className="btn btn-primary" onClick={() => window.print()}>
                <Icon.Download size={15}/> {isEn ? 'Print / Save PDF' : 'พิมพ์ / บันทึก PDF'}
              </button>
              <button className="btn btn-outline" onClick={() => { setShowResult(false); setQ(0); setAnswers({}); }}>
                {isEn ? 'Try Again' : 'ทำแบบประเมินใหม่'}
              </button>
              <button className="btn btn-outline" onClick={() => setShowResult(false)}>
                {isEn ? 'Back to Quiz' : 'กลับไปแก้คำตอบ'}
              </button>
            </div>
          </div>
        )}

        {tab === 'quiz' && !showResult && (
          <div className="quiz-shell">
            <div className="quiz-card">
              <div className="quiz-progress"><div className="fill" style={{width: `${((q+1)/quizQs.length)*100}%`}}/></div>
              <div className="q-num">คำถามที่ {q+1} / {quizQs.length}</div>
              <div className="q-title">{quizQs[q].q}</div>
              <div className="q-desc">{quizQs[q].d}</div>
              <div className="quiz-options">
                {quizQs[q].opts.map((o, i) => (
                  <div key={i} className={`quiz-option ${answers[q] === i ? 'selected' : ''}`}
                    onClick={() => setAnswers({...answers, [q]: i})}
                  >
                    <span className="dot" />
                    <span>{o}</span>
                  </div>
                ))}
              </div>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <button className="btn btn-outline" disabled={q===0} onClick={() => setQ(Math.max(0, q-1))}>
                  <Icon.ChevronLeft /> ย้อนกลับ
                </button>
                {q < quizQs.length - 1 ? (
                  <button className="btn btn-primary" disabled={answers[q] === undefined} onClick={() => setQ(q+1)}>
                    คำถามถัดไป <Icon.ChevronRight />
                  </button>
                ) : (
                  <button className="btn btn-primary" disabled={answers[q] === undefined}
                    onClick={() => setShowResult(true)}>
                    {isEn ? 'View Result' : 'ดูผลการประเมิน'} <Icon.ArrowRight />
                  </button>
                )}
              </div>
            </div>

            <aside className="quiz-side">
              <h4>เคล็ดลับการตอบ</h4>
              <div className="tip">
                เลือกข้อที่อธิบายสถานะ <strong>ปัจจุบัน</strong> ของผลงานของคุณได้แม่นยำที่สุด
                ไม่ใช่สถานะที่คุณตั้งใจจะไปถึง
              </div>
              <div style={{fontSize: 13, color:'var(--ink-3)', marginBottom: 10}}>คุณตอบไปแล้ว:</div>
              {quizQs.map((_, i) => (
                <div key={i} className="stat" style={{opacity: answers[i] !== undefined ? 1 : 0.5}}>
                  <span className="num">{i+1}</span>
                  <span>{answers[i] !== undefined ? `เลือก: ตัวเลือกที่ ${answers[i]+1}` : 'ยังไม่ตอบ'}</span>
                </div>
              ))}

              <div style={{marginTop: 22, padding: 16, background:'#fff', borderRadius: 12}}>
                <div style={{fontSize: 13, color:'var(--ink-3)', marginBottom: 6}}>ระดับ TRL คาดการณ์</div>
                <div style={{fontFamily:'var(--font-en)', fontSize:32, fontWeight:800, color:'var(--ku-green)'}}>
                  {answers[0] !== undefined ? (answers[0] * 2 + 1) : '—'}
                </div>
                <div style={{fontSize: 12, color:'var(--ink-3)'}}>* คำนวณจากคำตอบที่ผ่านมา</div>
                {/* G3: PDF export button */}
                {answers[0] !== undefined && (
                  <button className="btn btn-outline btn-sm no-print" style={{marginTop: 12, width:'100%'}} onClick={() => window.print()}>
                    <Icon.Doc size={13}/> พิมพ์ / บันทึก PDF
                  </button>
                )}
              </div>
            </aside>
          </div>
        )}
      </div>
      <SiteFooter setScreen={setScreen} />
    </div>
  );
}

Object.assign(window, { CataloguePage, DetailPage, SubmitPage, KnowledgePage });
