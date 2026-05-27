/* eslint-disable no-undef */
// Admin sub-pages: Submissions, Reviewer panel, Users, Organizations, Events CMS, News CMS, Reports, Settings

// Shared admin layout wrapper
function AdminLayout({ active, setActive, setScreen, signOut, label, children }) {
  const navItems = [{ id: 'dash', label: 'Dashboard', ic: <Icon.Stack size={18}/> }];
  const manage = [
    { id: 'sub', label: 'Submissions', ic: <Icon.Doc size={18}/> },
    { id: 'review', label: 'Review & Evaluation', ic: <Icon.Target size={18}/> },
    { id: 'inno', label: 'Innovations', ic: <Icon.Leaf size={18}/> },
    { id: 'biz', label: 'Business Matching', ic: <Icon.Handshake size={18}/> },
    { id: 'usr', label: 'Users', ic: <Icon.User size={18}/> },
    { id: 'org', label: 'Organizations', ic: <Icon.Network size={18}/> },
    { id: 'evt', label: 'Events', ic: <Icon.Calendar size={18}/> },
    { id: 'news', label: 'News & Announcements', ic: <Icon.Bell size={18}/> },
    { id: 'know', label: 'Knowledge Center', ic: <Icon.Book size={18}/> },
  ];
  const analytics = [
    { id: 'rpt', label: 'Reports & Analytics', ic: <Icon.TrendUp size={18}/> },
    { id: 'log', label: 'Audit Logs', ic: <Icon.Doc size={18}/> },
  ];
  const system = [
    { id: 'set', label: 'Settings', ic: <Icon.Refresh size={18}/> },
  ];

  return (
    <div data-screen-label={label} className="admin-shell">
      <aside className="admin-side">
        <div className="admin-brand">
          <LogoMark size={42} withTagline={false} />
          <div>
            <div style={{fontFamily:'var(--font-en)', fontWeight:700, fontSize:14, color:'var(--ink)'}}>FUTURETECH</div>
            <div className="label">MASTER PLATFORM</div>
          </div>
        </div>
        <nav className="admin-nav">
          {navItems.map(n => (
            <div key={n.id} className={`nav-item ${active === n.id ? 'active' : ''}`} onClick={() => setActive(n.id)}>
              {n.ic} <span>{n.label}</span>
            </div>
          ))}
          <div className="grp-label">MANAGE</div>
          {manage.map(n => (
            <div key={n.id} className={`nav-item ${active === n.id ? 'active' : ''}`} onClick={() => setActive(n.id)}>
              {n.ic} <span>{n.label}</span>
            </div>
          ))}
          <div className="grp-label">ANALYTICS</div>
          {analytics.map(n => (
            <div key={n.id} className={`nav-item ${active === n.id ? 'active' : ''}`} onClick={() => setActive(n.id)}>
              {n.ic} <span>{n.label}</span>
            </div>
          ))}
          <div className="grp-label">SYSTEM</div>
          {system.map(n => (
            <div key={n.id} className={`nav-item ${active === n.id ? 'active' : ''}`} onClick={() => setActive(n.id)}>
              {n.ic} <span>{n.label}</span>
            </div>
          ))}
        </nav>
        <div className="admin-user" onClick={signOut}>
          <div className="avatar">AD</div>
          <div className="who">
            <div className="name">Admin</div>
            <div className="role">Super Administrator</div>
          </div>
          <Icon.ChevronRight size={14} />
        </div>
      </aside>

      <div className="admin-main">
        <div className="admin-top">
          <div className="admin-search">
            <span className="ic"><Icon.Search size={16}/></span>
            <input placeholder="ค้นหา..." />
          </div>
          <div className="right">
            <button className="icon-btn" onClick={() => setScreen('home')} title="กลับสู่หน้าเว็บ">
              <Icon.Globe size={16} />
            </button>
            <div className="notif-bell"><Icon.Bell size={18} /><span className="badge">12</span></div>
            <div className="admin-user-mini">
              <div className="avatar">AD</div>
              <div>
                <div className="name">Admin</div>
                <div className="role">Super Administrator</div>
              </div>
              <Icon.ChevronDown size={14} style={{color:'var(--ink-3)'}} />
            </div>
          </div>
        </div>
        <div className="admin-body">
          {children}
        </div>
      </div>
    </div>
  );
}

// G4: Bulk upload modal component (reused in AdminSubmissions toolbar)
function BulkUploadBtn() {
  const [open, setOpen] = useState(false);
  const [dragging, setDragging] = useState(false);
  return (
    <>
      <button className="btn btn-outline btn-sm" onClick={() => setOpen(true)}>
        <Icon.Upload size={14}/> นำเข้า Excel/CSV
      </button>
      {open && (
        <div style={{position:'fixed', inset:0, background:'rgba(0,0,0,0.4)', zIndex:300, display:'flex', alignItems:'center', justifyContent:'center'}} onClick={() => setOpen(false)}>
          <div style={{background:'#fff', borderRadius:16, padding:32, width:480, boxShadow:'0 24px 60px rgba(0,0,0,0.2)'}} onClick={e => e.stopPropagation()}>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:20}}>
              <h3 style={{margin:0, fontSize:17}}>นำเข้าผลงานจากไฟล์</h3>
              <button style={{background:'none', border:'none', fontSize:18, cursor:'pointer', color:'var(--ink-3)'}} onClick={() => setOpen(false)}>✕</button>
            </div>
            <div
              onDragOver={e => { e.preventDefault(); setDragging(true); }}
              onDragLeave={() => setDragging(false)}
              onDrop={e => { e.preventDefault(); setDragging(false); }}
              style={{
                border: `2px dashed ${dragging ? 'var(--ku-green)' : 'var(--line-2)'}`,
                borderRadius:12, padding:'36px 24px', textAlign:'center',
                background: dragging ? 'var(--inno-green-soft)' : '#FAFBFC',
                transition:'all .2s', marginBottom:16
              }}
            >
              <div style={{fontSize:32, marginBottom:8}}>📂</div>
              <div style={{fontWeight:600, marginBottom:4}}>ลากไฟล์มาวางที่นี่</div>
              <div style={{fontSize:13, color:'var(--ink-3)', marginBottom:14}}>รองรับ .xlsx, .xls, .csv (ขนาดไม่เกิน 5 MB)</div>
              <button className="btn btn-outline btn-sm">เลือกไฟล์</button>
            </div>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
              <a style={{fontSize:13, color:'var(--ku-green)', cursor:'pointer', textDecoration:'underline'}}>
                <Icon.Doc size={12}/> ดาวน์โหลด Template (.xlsx)
              </a>
              <div style={{display:'flex', gap:8}}>
                <button className="btn btn-outline btn-sm" onClick={() => setOpen(false)}>ยกเลิก</button>
                <button className="btn btn-primary btn-sm">นำเข้าข้อมูล</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ============ Submissions ============
function AdminSubmissions() {
  const rows = [
    { id: 'INN-2026-0312', t: 'ระบบ AI วิเคราะห์โรคพืชจากภาพถ่าย', o: 'Kasetsart University', c: 'Agri-Tech', cls: 'pill-agri', trl: 7, s: 'In Review', sc: 'status-review', a: 'ดร.วิทยา ส.', d: '20 พ.ค. 2026' },
    { id: 'INN-2026-0311', t: 'โปรตีนจากพืชทางเลือกใหม่', o: 'Kasetsart University', c: 'Food-Tech', cls: 'pill-food', trl: 6, s: 'Approved', sc: 'status-approved', a: 'ดร.สมหญิง ก.', d: '19 พ.ค. 2026' },
    { id: 'INN-2026-0310', t: 'ระบบบำบัดน้ำเสียแบบอัจฉริยะ', o: 'KU Innovation', c: 'Env-Tech', cls: 'pill-env', trl: 8, s: 'In Review', sc: 'status-review', a: 'ดร.วิทยา ส.', d: '19 พ.ค. 2026' },
    { id: 'INN-2026-0309', t: 'วัสดุชีวภาพย่อยสลายได้', o: 'Mahidol University', c: 'Bio-Tech', cls: 'pill-bio', trl: 5, s: 'New', sc: 'status-new', a: '-', d: '18 พ.ค. 2026' },
    { id: 'INN-2026-0308', t: 'โดรนเพื่อการเกษตรแม่นยำ', o: 'Private Sector', c: 'Agri-Tech', cls: 'pill-agri', trl: 7, s: 'Approved', sc: 'status-approved', a: 'ดร.วิทยา ส.', d: '18 พ.ค. 2026' },
    { id: 'INN-2026-0307', t: 'เครื่องดื่มฟังก์ชันจากสมุนไพร', o: 'KMUTT', c: 'Food-Tech', cls: 'pill-food', trl: 6, s: 'Need Revision', sc: 'status-rejected', a: 'ดร.สมหญิง ก.', d: '17 พ.ค. 2026' },
    { id: 'INN-2026-0306', t: 'ระบบฟาร์มอัจฉริยะในเมือง', o: 'KU', c: 'Agri-Tech', cls: 'pill-agri', trl: 8, s: 'Approved', sc: 'status-approved', a: 'ดร.วิทยา ส.', d: '16 พ.ค. 2026' },
    { id: 'INN-2026-0305', t: 'เซ็นเซอร์คุณภาพอากาศ', o: 'RUN Network', c: 'Env-Tech', cls: 'pill-env', trl: 7, s: 'In Review', sc: 'status-review', a: 'ดร.เอก พ.', d: '15 พ.ค. 2026' },
  ];

  return (
    <>
      <div className="page-head">
        <div>
          <h1>Submissions</h1>
          <div className="sub">จัดการผลงานนวัตกรรมที่ส่งเข้ามาในระบบ</div>
        </div>
        <button className="btn btn-primary"><Icon.Plus size={14}/> เพิ่มผลงานใหม่</button>
      </div>

      <div className="kpi-row" style={{gridTemplateColumns:'repeat(4, 1fr)'}}>
        <div className="kpi-card">
          <div className="kpi-head"><div className="kpi-ic g1"><Icon.Doc size={20}/></div><div className="kpi-label">ทั้งหมด</div></div>
          <div className="kpi-value">312</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-head"><div className="kpi-ic g2"><Icon.Refresh size={20}/></div><div className="kpi-label">รอตรวจสอบ</div></div>
          <div className="kpi-value" style={{color:'#A87600'}}>86</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-head"><div className="kpi-ic g1"><Icon.Target size={20}/></div><div className="kpi-label">อนุมัติแล้ว</div></div>
          <div className="kpi-value" style={{color:'var(--ku-green)'}}>156</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-head"><div className="kpi-ic g5"><Icon.Clipboard size={20}/></div><div className="kpi-label">ขอแก้ไข</div></div>
          <div className="kpi-value" style={{color:'#B82828'}}>70</div>
        </div>
      </div>

      <div className="tbl-panel">
        <div className="adm-toolbar">
          <div className="search">
            <span className="ic"><Icon.Search size={14}/></span>
            <input placeholder="ค้นหา ID, ชื่อผลงาน, หน่วยงาน..." />
          </div>
          <select><option>หมวดทั้งหมด</option><option>Agri-Tech</option><option>Food-Tech</option></select>
          <select><option>สถานะทั้งหมด</option><option>New</option><option>In Review</option><option>Approved</option></select>
          <select><option>TRL ทั้งหมด</option></select>
          <button className="btn btn-outline btn-sm"><Icon.Doc size={14}/> Export</button>
          {/* G4: Bulk upload */}
          <BulkUploadBtn />
        </div>
        <table className="data">
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>ID</th><th>ชื่อผลงาน</th><th>ผู้ส่ง</th><th>หมวด</th>
              <th>TRL</th><th>สถานะ</th><th>Reviewer</th><th>วันที่ส่ง</th><th></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r,i) => (
              <tr key={i}>
                <td><input type="checkbox"/></td>
                <td style={{fontFamily:'var(--font-en)', fontWeight:500}}>{r.id}</td>
                <td>{r.t}</td>
                <td style={{color:'var(--ink-3)'}}>{r.o}</td>
                <td><span className={`pill ${r.cls}`}>{r.c}</span></td>
                <td style={{fontWeight:600}}>{r.trl}</td>
                <td><span className={`status-pill ${r.sc}`}>{r.s}</span></td>
                <td style={{color:'var(--ink-3)'}}>{r.a}</td>
                <td style={{color:'var(--ink-3)'}}>{r.d}</td>
                <td><a style={{color:'var(--tech-blue)', cursor:'pointer', fontSize:12.5}}>···</a></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', paddingTop:16, marginTop:12, borderTop:'1px solid var(--line)'}}>
          <div style={{fontSize:13, color:'var(--ink-3)'}}>แสดง 1–8 จาก 312 รายการ</div>
          <div style={{display:'flex', gap: 4}}>
            {['‹','1','2','3','...','39','›'].map((p,i) => (
              <button key={i} className={i === 1 ? 'btn btn-solid-green btn-sm' : 'btn btn-outline btn-sm'} style={{minWidth:36}}>{p}</button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// ============ Reviewer Panel ============
function AdminReview() {
  const [score, setScore] = useState({ tech: 4, market: 3, impact: 5, team: 4 });
  const [trl, setTrl] = useState(7);

  return (
    <>
      <div className="page-head">
        <div>
          <h1>Review & Evaluation</h1>
          <div className="sub">ประเมินผลงาน INN-2026-0312 · ระบบ AI วิเคราะห์โรคพืชจากภาพถ่าย</div>
        </div>
        <div style={{display:'flex', gap:10}}>
          <button className="btn btn-outline btn-sm">‹ ก่อนหน้า</button>
          <button className="btn btn-outline btn-sm">ถัดไป ›</button>
        </div>
      </div>

      <div className="rev-shell">
        <div className="panel">
          <div style={{display:'flex', alignItems:'center', gap:12, marginBottom:18}}>
            <span className="pill pill-agri">AGRI-TECH</span>
            <span style={{fontFamily:'var(--font-en)', fontSize: 12, color:'var(--ink-3)'}}>INN-2026-0312</span>
            <span className="status-pill status-review" style={{marginLeft:'auto'}}>In Review</span>
          </div>
          <h2 style={{margin:'0 0 8px', fontSize: 20, fontWeight: 600}}>ระบบ AI วิเคราะห์โรคพืชจากภาพถ่าย</h2>
          <p style={{margin:'0 0 18px', color:'var(--ink-3)', fontSize: 13.5}}>โดย Kasetsart University · ส่งเมื่อ 20 พ.ค. 2026</p>
          <div style={{aspectRatio:'16/9', borderRadius: 10, overflow:'hidden', marginBottom: 18}}>
            <ImgPH kind="agri" label="AGRI · AI CROP DIAGNOSIS" />
          </div>

          <h3 style={{fontSize: 14, fontWeight: 600, margin:'0 0 8px'}}>บทคัดย่อ</h3>
          <p style={{fontSize:13.5, color:'var(--ink-2)', lineHeight:1.7, margin:'0 0 18px'}}>
            ระบบ AI สำหรับการวิเคราะห์โรคพืชจากภาพถ่ายของเกษตรกร โดยใช้ Deep Learning จากภาพตัวอย่างมากกว่า 50,000 ภาพ
            ครอบคลุม 28 ชนิดของโรคในพืชเศรษฐกิจหลักของประเทศไทย ความแม่นยำในการวินิจฉัยโรคพืช 92.4%
          </p>

          <h3 style={{fontSize: 14, fontWeight: 600, margin:'0 0 8px'}}>ผู้ส่งระบุ TRL</h3>
          <div style={{display:'flex', alignItems:'center', gap:10, marginBottom: 18}}>
            <div style={{fontFamily:'var(--font-en)', fontWeight:700, fontSize: 28, color:'var(--ku-green)'}}>7</div>
            <div style={{fontSize: 13, color:'var(--ink-2)'}}>System Prototype Demonstration in Operational Environment</div>
          </div>

          <h3 style={{fontSize: 14, fontWeight: 600, margin:'0 0 8px'}}>เอกสารแนบ</h3>
          {['Technical_Brief_v2.pdf', 'Demo_Video.mp4', 'Patent_Document.pdf'].map(f => (
            <div key={f} style={{padding:'8px 12px', background:'var(--bg-soft)', borderRadius: 8, fontSize: 13, display:'flex', alignItems:'center', gap:10, marginBottom: 6}}>
              <Icon.Doc size={14} style={{color:'var(--tech-blue)'}}/> {f}
              <a style={{marginLeft:'auto', color:'var(--ku-green)', cursor:'pointer'}}>ดู →</a>
            </div>
          ))}
        </div>

        <div className="panel">
          <h3 style={{margin:'0 0 16px', fontSize: 16, fontWeight: 600}}>แบบประเมิน Reviewer</h3>

          {[
            { k: 'tech', l: 'ความสมบูรณ์ทางเทคนิค', d: 'หลักการ การออกแบบ ผลการทดสอบ' },
            { k: 'market', l: 'ศักยภาพทางการตลาด', d: 'ขนาดตลาด การประยุกต์ใช้' },
            { k: 'impact', l: 'ผลกระทบเชิงสังคม/สิ่งแวดล้อม', d: 'SDGs และคุณค่าที่สร้าง' },
            { k: 'team', l: 'ทีมงานและความพร้อม', d: 'ประสบการณ์ ความสามารถ' },
          ].map(s => (
            <div key={s.k} className="rev-score-block">
              <div className="ttl">{s.l}</div>
              <div className="desc">{s.d}</div>
              <div className="rev-stars">
                {[1,2,3,4,5].map(n => (
                  <div key={n}
                    className={`star ${n <= score[s.k] ? 'on' : ''}`}
                    onClick={() => setScore({...score, [s.k]: n})}
                  >{n}</div>
                ))}
              </div>
            </div>
          ))}

          <div className="field" style={{marginTop: 16}}>
            <label>ระดับ TRL ที่เหมาะสม (Reviewer assess)</label>
            <div style={{display:'grid', gridTemplateColumns:'repeat(9, 1fr)', gap: 4}}>
              {[1,2,3,4,5,6,7,8,9].map(i => (
                <div key={i} onClick={() => setTrl(i)} style={{
                  padding:'10px 0', textAlign:'center', borderRadius: 6,
                  border: '1.5px solid var(--line-2)', cursor:'pointer',
                  ...(i === trl ? {background:'var(--ku-green)', borderColor:'var(--ku-green)', color:'#fff'} : {})
                }}>
                  <div style={{fontFamily:'var(--font-en)', fontWeight:700, fontSize:14}}>{i}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="field">
            <label>ความเห็นเชิงคุณภาพ <span className="req">*</span></label>
            <textarea style={{paddingLeft:14, paddingRight:14, minHeight:120}} placeholder="ระบุข้อเสนอแนะและความเห็นต่อผลงาน" />
          </div>

          <div className="field">
            <label>คะแนนรวม</label>
            <div style={{padding:'12px 16px', background:'var(--inno-green-soft)', borderRadius: 8, fontFamily:'var(--font-en)', fontWeight:700, fontSize: 24, color:'var(--ku-green)'}}>
              {((score.tech + score.market + score.impact + score.team) / 4).toFixed(2)} / 5.00
            </div>
          </div>

          <div style={{display:'flex', gap:8, marginTop:18}}>
            <button className="btn btn-outline" style={{flex:1}}>ขอแก้ไข</button>
            <button className="btn btn-primary" style={{flex:2}}><Icon.Target size={14}/> อนุมัติผลงาน</button>
          </div>
        </div>
      </div>
    </>
  );
}

// ============ Users ============
function AdminUsers() {
  const users = [
    { i: 'ธพ', n: 'คุณ ธนพล สิทธิ์ชัย', e: 'thanapol@ku.ac.th', r: 'Innovator', org: 'Kasetsart University', s: 'Active', sc: 'status-approved', d: '15 พ.ค. 2026' },
    { i: 'มร', n: 'รศ.ดร. มาลี รุ่งโรจน์', e: 'malee.r@ku.ac.th', r: 'Reviewer', org: 'คณะวิทยาศาสตร์', s: 'Active', sc: 'status-approved', d: '10 พ.ค. 2026' },
    { i: 'WT', n: 'William Tan', e: 'william@greenfuture.vc', r: 'Investor', org: 'Green Future Ventures', s: 'Active', sc: 'status-approved', d: '08 พ.ค. 2026' },
    { i: 'AS', n: 'Alex Santos', e: 'alex@cpinno.com', r: 'Industry', org: 'Charoen Innovation', s: 'Pending', sc: 'status-review', d: '05 พ.ค. 2026' },
    { i: 'ปส', n: 'ดร. ปิยะ สุขสันต์', e: 'piya.s@ku.ac.th', r: 'Admin', org: 'BID Bang Khen', s: 'Active', sc: 'status-approved', d: '02 พ.ค. 2026' },
    { i: 'นจ', n: 'นาย นรินทร์ จันทรา', e: 'narin@thaismartfarm.co', r: 'Innovator', org: 'Thai Smart Farm', s: 'Suspended', sc: 'status-rejected', d: '01 พ.ค. 2026' },
  ];

  return (
    <>
      <div className="page-head">
        <div>
          <h1>Users</h1>
          <div className="sub">จัดการผู้ใช้งานทั้งหมดในระบบ · 1,248 บัญชี</div>
        </div>
        <button className="btn btn-primary"><Icon.Plus size={14}/> เพิ่มผู้ใช้</button>
      </div>

      <div className="kpi-row" style={{gridTemplateColumns:'repeat(5, 1fr)'}}>
        {[
          { l: 'ทั้งหมด', v: '1,248', c: 'g1', i: <Icon.User size={20}/> },
          { l: 'Innovator', v: '842', c: 'g2', i: <Icon.Leaf size={20}/> },
          { l: 'Reviewer', v: '64', c: 'g3', i: <Icon.Target size={20}/> },
          { l: 'Investor', v: '186', c: 'g4', i: <Icon.TrendUp size={20}/> },
          { l: 'Admin', v: '12', c: 'g5', i: <Icon.User size={20}/> },
        ].map((s,i) => (
          <div key={i} className="kpi-card">
            <div className="kpi-head">
              <div className={`kpi-ic ${s.c}`}>{s.i}</div>
              <div className="kpi-label">{s.l}</div>
            </div>
            <div className="kpi-value">{s.v}</div>
          </div>
        ))}
      </div>

      <div className="tbl-panel">
        <div className="adm-toolbar">
          <div className="search">
            <span className="ic"><Icon.Search size={14}/></span>
            <input placeholder="ค้นหาผู้ใช้..." />
          </div>
          <select><option>Role ทั้งหมด</option><option>Innovator</option><option>Reviewer</option><option>Admin</option></select>
          <select><option>สถานะทั้งหมด</option></select>
          <button className="btn btn-outline btn-sm" style={{marginLeft:'auto'}}><Icon.Doc size={14}/> Export</button>
        </div>
        <table className="data">
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>ผู้ใช้</th><th>อีเมล</th><th>Role</th><th>หน่วยงาน</th>
              <th>สถานะ</th><th>วันที่เข้าร่วม</th><th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((u,i) => (
              <tr key={i}>
                <td><input type="checkbox"/></td>
                <td>
                  <div className="admin-user-mini" style={{background:'transparent', padding:0}}>
                    <div className="avatar" style={{width:32, height:32, fontSize:12}}>{u.i}</div>
                    <div>
                      <div className="name">{u.n}</div>
                    </div>
                  </div>
                </td>
                <td style={{color:'var(--ink-3)', fontFamily:'var(--font-en)', fontSize:12.5}}>{u.e}</td>
                <td><span className="pill" style={{background:'var(--bg-soft)', color:'var(--ink-2)'}}>{u.r}</span></td>
                <td>{u.org}</td>
                <td><span className={`status-pill ${u.sc}`}>{u.s}</span></td>
                <td style={{color:'var(--ink-3)'}}>{u.d}</td>
                <td><a style={{color:'var(--tech-blue)', cursor:'pointer'}}>···</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

// ============ Organizations ============
function AdminOrgs() {
  const orgs = [
    { i: 'KU', n: 'Kasetsart University', t: 'Academic', m: 128, c: 'pill-agri' },
    { i: 'MU', n: 'Mahidol University', t: 'Academic', m: 42, c: 'pill-bio' },
    { i: 'CP', n: 'Charoen Innovation Co.', t: 'Industry', m: 18, c: 'pill-food' },
    { i: 'GV', n: 'Green Future Ventures', t: 'Investor', m: 8, c: 'pill-env' },
    { i: 'KT', n: 'KMUTT', t: 'Academic', m: 36, c: 'pill-deep' },
    { i: 'BE', n: 'Bangkok Energy Group', t: 'Industry', m: 14, c: 'pill-env' },
    { i: 'TS', n: 'Thai Smart Farm', t: 'Startup', m: 6, c: 'pill-agri' },
    { i: 'RN', n: 'RUN Network Universities', t: 'Academic', m: 58, c: 'pill-bio' },
  ];

  return (
    <>
      <div className="page-head">
        <div>
          <h1>Organizations</h1>
          <div className="sub">จัดการองค์กรที่เข้าร่วมแพลตฟอร์ม · 420 องค์กร</div>
        </div>
        <button className="btn btn-primary"><Icon.Plus size={14}/> เพิ่มองค์กร</button>
      </div>

      <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 16}}>
        {orgs.map((o,i) => (
          <div key={i} className="panel" style={{padding: 22}}>
            <div style={{display:'flex', alignItems:'center', gap:12, marginBottom: 14}}>
              <div className="admin-user-mini" style={{background:'transparent', padding:0}}>
                <div className="avatar" style={{width:48, height:48, borderRadius: 12, fontSize: 16}}>{o.i}</div>
              </div>
              <div style={{flex:1}}>
                <div style={{fontWeight:600, fontSize: 14}}>{o.n}</div>
                <div><span className={`pill ${o.c}`}>{o.t}</span></div>
              </div>
            </div>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap: 10, fontSize: 12}}>
              <div>
                <div style={{color:'var(--ink-3)'}}>สมาชิก</div>
                <div style={{fontWeight:600, fontSize:18, marginTop:2}}>{o.m}</div>
              </div>
              <div>
                <div style={{color:'var(--ink-3)'}}>ผลงาน</div>
                <div style={{fontWeight:600, fontSize:18, marginTop:2}}>{o.m * 2}</div>
              </div>
            </div>
            <div style={{marginTop: 14, paddingTop: 14, borderTop: '1px solid var(--line)', display:'flex', gap:8}}>
              <button className="btn btn-outline btn-sm" style={{flex:1}}>ดู</button>
              <button className="btn btn-outline btn-sm" style={{flex:1}}>แก้ไข</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

// ============ Events CMS ============
function AdminEvents() {
  const events = [
    { d: '24', m: 'JUN', t: '09.00 – 12.00', n: 'พิธีเปิดงาน + Keynote', p: 'Main Stage', s: 'Published', sc: 'status-approved', a: 240 },
    { d: '24', m: 'JUN', t: '13.30 – 16.30', n: 'Pitching Stage: Agri & Food Tech', p: 'Pitching Hall', s: 'Published', sc: 'status-approved', a: 120 },
    { d: '25', m: 'JUN', t: '09.00 – 12.00', n: 'เสวนา: ESG และความยั่งยืน', p: 'Main Stage', s: 'Published', sc: 'status-approved', a: 180 },
    { d: '25', m: 'JUN', t: '13.30 – 16.30', n: 'Workshop: Design Thinking', p: 'Workshop Room', s: 'Draft', sc: 'status-review', a: 35 },
    { d: '25', m: 'JUN', t: '15.00 – 17.00', n: 'Award Ceremony', p: 'Main Stage', s: 'Published', sc: 'status-approved', a: 300 },
  ];

  return (
    <>
      <div className="page-head">
        <div>
          <h1>Events</h1>
          <div className="sub">จัดการกิจกรรมและตารางงาน Bang Khen Festival 2026</div>
        </div>
        <button className="btn btn-primary"><Icon.Plus size={14}/> เพิ่มกิจกรรม</button>
      </div>

      <div className="tbl-panel">
        <div className="adm-toolbar">
          <div className="search">
            <span className="ic"><Icon.Search size={14}/></span>
            <input placeholder="ค้นหากิจกรรม..." />
          </div>
          <select><option>วันทั้งหมด</option><option>24 มิ.ย.</option><option>25 มิ.ย.</option></select>
          <select><option>สถานะทั้งหมด</option><option>Published</option><option>Draft</option></select>
        </div>
        <table className="data">
          <thead><tr><th></th><th>วัน</th><th>เวลา</th><th>ชื่อกิจกรรม</th><th>สถานที่</th><th>ผู้ลงทะเบียน</th><th>สถานะ</th><th></th></tr></thead>
          <tbody>
            {events.map((e,i) => (
              <tr key={i}>
                <td><input type="checkbox"/></td>
                <td>
                  <div className="event-date" style={{padding:'6px 0', width: 48, fontSize: 14}}>{e.d}<small>{e.m}</small></div>
                </td>
                <td style={{fontFamily:'var(--font-en)', fontSize: 12.5}}>{e.t}</td>
                <td style={{fontWeight: 500}}>{e.n}</td>
                <td style={{color:'var(--ink-3)'}}>{e.p}</td>
                <td><strong>{e.a}</strong> <span style={{color:'var(--ink-3)', fontSize:12}}>คน</span></td>
                <td><span className={`status-pill ${e.sc}`}>{e.s}</span></td>
                <td><a style={{color:'var(--tech-blue)', cursor:'pointer'}}>···</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

// ============ News CMS ============
function AdminNews() {
  const posts = [
    { t: 'เปิดรับผลงานนวัตกรรม BK FutureTech 2026', c: 'Announcement', s: 'Published', sc: 'status-approved', v: '12,486', d: '15 มิ.ย. 2026' },
    { t: '10 สตาร์ทอัพเกษตรไทยน่าจับตามอง', c: 'News', s: 'Published', sc: 'status-approved', v: '8,243', d: '10 มิ.ย. 2026' },
    { t: 'เทคโนโลยีอาหารแห่งอนาคต', c: 'News', s: 'Published', sc: 'status-approved', v: '5,612', d: '08 มิ.ย. 2026' },
    { t: 'สรุปเสวนา Green Innovation', c: 'Event', s: 'Published', sc: 'status-approved', v: '3,820', d: '05 มิ.ย. 2026' },
    { t: 'เปิดจอง Business Matching', c: 'Announcement', s: 'Scheduled', sc: 'status-new', v: '—', d: '01 มิ.ย. 2026' },
    { t: 'รวมคลิป Pitch ที่ดีที่สุดจากปี 2025', c: 'Media', s: 'Draft', sc: 'status-review', v: '—', d: '—' },
  ];

  return (
    <>
      <div className="page-head">
        <div>
          <h1>News & Announcements</h1>
          <div className="sub">จัดการข่าวสาร ประกาศ และสื่อมัลติมีเดีย</div>
        </div>
        <button className="btn btn-primary"><Icon.Plus size={14}/> สร้างโพสต์</button>
      </div>

      <div className="tbl-panel">
        <div className="adm-toolbar">
          <div className="search">
            <span className="ic"><Icon.Search size={14}/></span>
            <input placeholder="ค้นหา..." />
          </div>
          <select><option>หมวดทั้งหมด</option></select>
          <select><option>สถานะทั้งหมด</option></select>
        </div>
        <table className="data">
          <thead><tr><th></th><th>หัวข้อ</th><th>หมวด</th><th>ผู้เข้าชม</th><th>สถานะ</th><th>วันที่</th><th></th></tr></thead>
          <tbody>
            {posts.map((p,i) => (
              <tr key={i}>
                <td><input type="checkbox"/></td>
                <td style={{fontWeight: 500}}>{p.t}</td>
                <td><span className="pill" style={{background:'var(--bg-soft)', color:'var(--ink-2)'}}>{p.c}</span></td>
                <td style={{fontFamily:'var(--font-en)', fontWeight:500}}>{p.v}</td>
                <td><span className={`status-pill ${p.sc}`}>{p.s}</span></td>
                <td style={{color:'var(--ink-3)'}}>{p.d}</td>
                <td>
                  <a style={{color:'var(--tech-blue)', cursor:'pointer', marginRight: 12}}>แก้ไข</a>
                  <a style={{color:'#B82828', cursor:'pointer'}}>ลบ</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

// ============ Reports & Analytics ============
function AdminReports() {
  return (
    <>
      <div className="page-head">
        <div>
          <h1>Reports & Analytics</h1>
          <div className="sub">รายงานสถิติเชิงลึกของแพลตฟอร์ม BK FutureTech 2026</div>
        </div>
        <div style={{display:'flex', gap:8}}>
          <button className="btn btn-outline btn-sm"><Icon.Doc size={14}/> Export PDF</button>
          <button className="btn btn-outline btn-sm"><Icon.Doc size={14}/> Export Excel</button>
        </div>
      </div>

      <div className="cards-row-3">
        <div className="panel">
          <div className="panel-head">
            <h3>Submissions Trend</h3>
            <div className="sub">การส่งผลงานรายเดือน</div>
          </div>
          <BarChart data={[14, 22, 28, 42, 56, 68, 84]} labels={['ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.']} />
        </div>
        <div className="panel">
          <div className="panel-head">
            <h3>Approval Rate</h3>
            <div className="sub">อัตราการอนุมัติ</div>
          </div>
          <div className="donut-row">
            <Donut total={312} segments={[{value:156,color:'#00C26E'},{value:70,color:'#E64646'},{value:86,color:'#F4B400'}]}/>
            <div className="legend">
              <div className="legend-row"><span className="sw" style={{background:'#00C26E'}}/><span className="lbl">Approved</span><span className="val">50.0%</span></div>
              <div className="legend-row"><span className="sw" style={{background:'#F4B400'}}/><span className="lbl">Pending</span><span className="val">27.6%</span></div>
              <div className="legend-row"><span className="sw" style={{background:'#E64646'}}/><span className="lbl">Rejected</span><span className="val">22.4%</span></div>
            </div>
          </div>
        </div>
        <div className="panel">
          <div className="panel-head">
            <h3>User Growth</h3>
            <div className="sub">การเติบโตของผู้ใช้</div>
          </div>
          <Sparkline data={[100,140,180,240,300,380,460,560,680,820,1000,1248]} color="#0057B8" />
          <div style={{marginTop:12, display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, fontSize:12}}>
            <div><div style={{color:'var(--ink-3)'}}>ทั้งหมด</div><div style={{fontFamily:'var(--font-en)', fontWeight:700, fontSize:20}}>1,248</div></div>
            <div><div style={{color:'var(--ink-3)'}}>30 วันล่าสุด</div><div style={{fontFamily:'var(--font-en)', fontWeight:700, fontSize:20, color:'var(--ku-green)'}}>+428</div></div>
          </div>
        </div>
      </div>

      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:16}}>
        <div className="tbl-panel">
          <h3 style={{margin:'0 0 16px', fontSize: 16, fontWeight: 600}}>Top Organizations</h3>
          <table className="data">
            <thead><tr><th>#</th><th>องค์กร</th><th>ผลงาน</th><th>อนุมัติ</th><th>%</th></tr></thead>
            <tbody>
              {[
                ['Kasetsart University', 128, 92],
                ['RUN Network', 58, 41],
                ['Mahidol University', 42, 28],
                ['KMUTT', 36, 24],
                ['Private Sector', 38, 22],
              ].map(([n, s, a], i) => (
                <tr key={i}>
                  <td style={{fontWeight: 600}}>{i+1}</td>
                  <td>{n}</td>
                  <td>{s}</td>
                  <td style={{color:'var(--ku-green)', fontWeight: 600}}>{a}</td>
                  <td>
                    <div style={{display:'flex', alignItems:'center', gap:6}}>
                      <div style={{width: 60, height: 6, background:'var(--bg-soft)', borderRadius: 3, overflow:'hidden'}}>
                        <div style={{width: `${(a/s)*100}%`, height: '100%', background:'var(--ku-green)'}}/>
                      </div>
                      {((a/s)*100).toFixed(0)}%
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="tbl-panel">
          <h3 style={{margin:'0 0 16px', fontSize: 16, fontWeight: 600}}>Activity Logs (Audit)</h3>
          <table className="data">
            <thead><tr><th>เวลา</th><th>ผู้ใช้</th><th>การกระทำ</th></tr></thead>
            <tbody>
              {[
                ['11:32', 'Admin', 'อนุมัติผลงาน INN-2026-0312'],
                ['11:18', 'ดร.วิทยา', 'ให้คะแนนผลงาน INN-2026-0310 (4.5/5)'],
                ['10:54', 'System', 'Backup ฐานข้อมูลรายวัน (สำเร็จ)'],
                ['10:30', 'thanapol@ku.ac.th', 'ส่งผลงาน INN-2026-0312'],
                ['09:45', 'Admin', 'แก้ไขข้อมูลกิจกรรม Pitching Stage'],
                ['09:12', 'malee.r@ku.ac.th', 'เข้าสู่ระบบ (จากกรุงเทพฯ)'],
              ].map((r,i) => (
                <tr key={i}>
                  <td style={{fontFamily:'var(--font-en)', fontSize:12, color:'var(--ink-3)'}}>{r[0]}</td>
                  <td>{r[1]}</td>
                  <td style={{color:'var(--ink-2)'}}>{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

// ============ Settings ============
function AdminSettings() {
  const [s1, setS1] = useState(true), [s2, setS2] = useState(true), [s3, setS3] = useState(false), [s4, setS4] = useState(true);
  const Switch = ({on, set}) => <div className={`switch ${on ? 'on' : ''}`} onClick={() => set(!on)} />;

  return (
    <>
      <div className="page-head">
        <div>
          <h1>Settings</h1>
          <div className="sub">การตั้งค่าระบบและการรักษาความปลอดภัย</div>
        </div>
      </div>

      <div className="settings-grid">
        <div className="settings-card">
          <h4>การแจ้งเตือน</h4>
          <div className="setting-row">
            <div className="lbl">ส่งอีเมลแจ้งเตือนผู้ใช้
              <div className="sub">ส่งอีเมลเมื่อมีการเปลี่ยนสถานะผลงาน</div>
            </div>
            <Switch on={s1} set={setS1}/>
          </div>
          <div className="setting-row">
            <div className="lbl">LINE Notify
              <div className="sub">เชื่อมต่อกับ LINE Official Account</div>
            </div>
            <Switch on={s2} set={setS2}/>
          </div>
          <div className="setting-row">
            <div className="lbl">SMS Gateway
              <div className="sub">ส่ง SMS แจ้งเตือนสำคัญ</div>
            </div>
            <Switch on={s3} set={setS3}/>
          </div>
        </div>

        <div className="settings-card">
          <h4>ความปลอดภัย</h4>
          <div className="setting-row">
            <div className="lbl">Multi-Factor Authentication (MFA)
              <div className="sub">บังคับใช้ MFA สำหรับ Admin / Reviewer</div>
            </div>
            <Switch on={s4} set={setS4}/>
          </div>
          <div className="setting-row">
            <div className="lbl">Rate Limiting
              <div className="sub">จำกัด requests ต่อ IP / นาที</div>
            </div>
            <Switch on={true} set={()=>{}}/>
          </div>
          <div className="setting-row">
            <div className="lbl">CAPTCHA สำหรับฟอร์มสาธารณะ
              <div className="sub">ใช้ reCAPTCHA v3</div>
            </div>
            <Switch on={true} set={()=>{}}/>
          </div>
          <div className="setting-row">
            <div className="lbl">PDPA Audit Mode
              <div className="sub">บันทึก consent logs ทุกการเข้าถึงข้อมูลส่วนบุคคล</div>
            </div>
            <Switch on={true} set={()=>{}}/>
          </div>
        </div>

        <div className="settings-card">
          <h4>SMTP Configuration</h4>
          <div className="field" style={{marginBottom: 12}}><label>SMTP Host</label><div className="input-wrap no-icon"><input style={{paddingLeft:14}} defaultValue="smtp.gmail.com"/></div></div>
          <div className="row-2">
            <div className="field"><label>Port</label><div className="input-wrap no-icon"><input style={{paddingLeft:14}} defaultValue="587"/></div></div>
            <div className="field"><label>Encryption</label><div className="input-wrap no-icon"><select style={{paddingLeft:14}}><option>TLS</option><option>SSL</option></select></div></div>
          </div>
          <div className="field"><label>Sender Email</label><div className="input-wrap no-icon"><input style={{paddingLeft:14}} defaultValue="noreply@bkfuturetech2026.ku.ac.th"/></div></div>
        </div>

        <div className="settings-card">
          <h4>Backup & Maintenance</h4>
          <div className="setting-row">
            <div className="lbl">Daily Database Backup
              <div className="sub">เริ่มล่าสุด: 27 พ.ค. 2026 03:00 น.</div>
            </div>
            <span className="status-pill status-approved">Active</span>
          </div>
          <div className="setting-row">
            <div className="lbl">Anti-malware Scan
              <div className="sub">สแกนไฟล์อัปโหลดทุกชิ้น (ClamAV)</div>
            </div>
            <span className="status-pill status-approved">On</span>
          </div>
          <div className="setting-row">
            <div className="lbl">Encryption at Rest
              <div className="sub">AES-256 สำหรับข้อมูลส่วนบุคคล</div>
            </div>
            <span className="status-pill status-approved">Enabled</span>
          </div>
          <div style={{display:'flex', gap:10, marginTop: 14}}>
            <button className="btn btn-outline btn-sm" style={{flex:1}}>สำรองข้อมูลทันที</button>
            <button className="btn btn-outline btn-sm" style={{flex:1}}>กู้คืน</button>
          </div>
        </div>

        {/* G5: Banner & Popup CMS (TOR 4.2.4) */}
        <div className="settings-card" style={{gridColumn:'1 / -1'}}>
          <h4 style={{marginBottom:16}}>จัดการ Banner &amp; Pop-up (CMS)</h4>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:16}}>
            {[
              { title:'Banner หน้าแรก', items:['BK FutureTech 2026 — เปิดรับสมัครแล้ว!', 'ร่วมงาน 24–25 มิ.ย. 2569 ที่ ม.เกษตรศาสตร์'] },
              { title:'Pop-up ประกาศ', items:['หมดเขตส่งผลงาน 31 พ.ค. 2569', 'ลงทะเบียนล่วงหน้าเต็มแล้ว — แจ้งรายชื่อสำรอง'] },
              { title:'Slider ข่าว', items:['นวัตกรรม Agri-Tech 2026 ประกาศผลแล้ว', 'เพิ่มวงเงินสนับสนุน Business Matching รอบ 2'] },
            ].map(({ title, items }, ci) => (
              <div key={ci} style={{border:'1px solid var(--line)', borderRadius:10, padding:14}}>
                <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:10}}>
                  <strong style={{fontSize:13}}>{title}</strong>
                  <button className="btn btn-primary btn-sm" style={{fontSize:11, padding:'3px 10px'}}>
                    <Icon.Plus size={11}/> เพิ่ม
                  </button>
                </div>
                {items.map((txt, ti) => (
                  <div key={ti} style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'7px 0', borderBottom: ti < items.length-1 ? '1px solid var(--line)' : 'none', fontSize:12.5}}>
                    <span style={{color:'var(--ink-2)', flex:1, marginRight:8, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>{txt}</span>
                    <div style={{display:'flex', gap:6, flexShrink:0}}>
                      <button style={{background:'none', border:'1px solid var(--line)', borderRadius:6, padding:'2px 8px', fontSize:11, cursor:'pointer', color:'var(--ink-3)'}}>แก้ไข</button>
                      <button style={{background:'none', border:'1px solid #ECC', borderRadius:6, padding:'2px 8px', fontSize:11, cursor:'pointer', color:'#B82828'}}>ลบ</button>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="settings-card">
          <h4>API & Integrations</h4>
          <div className="setting-row">
            <div className="lbl">Google Analytics 4
              <div className="sub" style={{fontFamily:'var(--font-en)', fontSize:11}}>G-XXXXXX12345</div>
            </div>
            <Switch on={true} set={()=>{}}/>
          </div>
          <div className="setting-row">
            <div className="lbl">ORCID SSO
              <div className="sub">รองรับ login ด้วย ORCID</div>
            </div>
            <Switch on={true} set={()=>{}}/>
          </div>
          <div className="setting-row">
            <div className="lbl">Open API (พันธมิตร)
              <div className="sub">เปิดให้พันธมิตร เช่น app.rinmp.com</div>
            </div>
            <Switch on={false} set={()=>{}}/>
          </div>
        </div>

        <div className="settings-card">
          <h4>System Information</h4>
          {[
            ['Version', '1.0.0 (build 2026.05.27)'],
            ['Environment', 'Production'],
            ['Database', 'PostgreSQL 15.4'],
            ['Server', 'AWS EC2 · ap-southeast-1'],
            ['Uptime', '99.97% (last 30 days)'],
            ['Last Deploy', '25 พ.ค. 2026 14:30'],
          ].map(([k,v],i) => (
            <div key={i} className="setting-row" style={{padding:'8px 0'}}>
              <div className="lbl" style={{fontSize:13}}>{k}</div>
              <div style={{fontSize:13, color:'var(--ink-2)', fontFamily: k==='Version' || k==='Database' ? 'var(--font-en)' : 'inherit'}}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// ============ Innovations & Knowledge & BizMatch (admin) ============
function AdminInnovations() {
  return (
    <>
      <div className="page-head">
        <div>
          <h1>Innovations</h1>
          <div className="sub">นวัตกรรมที่เผยแพร่บน Catalogue · 156 ผลงาน</div>
        </div>
        <button className="btn btn-primary"><Icon.Plus size={14}/> Featured</button>
      </div>
      <div className="cat-grid" style={{gridTemplateColumns:'repeat(4, 1fr)'}}>
        {[
          { tag: 'AGRI-TECH', tagClass: '', title: 'ระบบ AI วิเคราะห์โรคพืช', trl: 7, org: 'KU', cover: 'agri', label: 'AGRI · AI', f: true },
          { tag: 'FOOD-TECH', tagClass: 'food', title: 'โปรตีนจากพืชทางเลือกใหม่', trl: 6, org: 'KU', cover: 'food', label: 'FOOD' },
          { tag: 'ENV-TECH', tagClass: 'env', title: 'ระบบบำบัดน้ำเสียอัจฉริยะ', trl: 8, org: 'KU', cover: 'env', label: 'ENV', f: true },
          { tag: 'AGRI-TECH', tagClass: '', title: 'โดรนเพื่อการเกษตรแม่นยำ', trl: 7, org: 'Private', cover: 'tech', label: 'DRONE' },
          { tag: 'BIO-TECH', tagClass: '', title: 'วัสดุชีวภาพย่อยสลายได้', trl: 5, org: 'Mahidol', cover: 'env', label: 'BIO' },
          { tag: 'FOOD-TECH', tagClass: 'food', title: 'เครื่องดื่มฟังก์ชันจากสมุนไพร', trl: 6, org: 'KMUTT', cover: 'food', label: 'FOOD' },
          { tag: 'AGRI-TECH', tagClass: '', title: 'ระบบฟาร์มอัจฉริยะในเมือง', trl: 8, org: 'KU', cover: 'agri', label: 'AGRI · VERTICAL', f: true },
          { tag: 'ENV-TECH', tagClass: 'env', title: 'เซ็นเซอร์คุณภาพอากาศ IoT', trl: 7, org: 'RUN', cover: 'env', label: 'ENV' },
        ].map((it,i) => (
          <div key={i} className="inno-card">
            <div className="cover">
              <ImgPH kind={it.cover} label={it.label} />
              <span className={`tag ${it.tagClass}`}>{it.tag}</span>
              {it.f && <span style={{position:'absolute', top:10, right:10, background:'var(--gold)', color:'#2A2105', padding:'3px 8px', borderRadius:6, fontSize:10, fontWeight:700, letterSpacing:1}}>FEATURED</span>}
            </div>
            <div className="body">
              <h4>{it.title}</h4>
              <div className="meta">
                <span className="trl">TRL {it.trl}</span>
                <span>· {it.org}</span>
                <div style={{marginLeft:'auto', display:'flex', gap:6}}>
                  <a style={{color:'var(--tech-blue)', cursor:'pointer', fontSize:12}}>แก้ไข</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function AdminBizMatch() {
  return (
    <>
      <div className="page-head">
        <div>
          <h1>Business Matching</h1>
          <div className="sub">196 การจับคู่ · 84 รอยืนยัน</div>
        </div>
      </div>
      <div className="tbl-panel">
        <table className="data">
          <thead><tr><th>ID</th><th>Innovation</th><th>Partner</th><th>Slot</th><th>สถานะ</th><th></th></tr></thead>
          <tbody>
            {[
              ['MCH-0156', 'AI Plant Disease', 'Charoen Innovation', '24/06 10:00', 'ยืนยัน', 'status-approved'],
              ['MCH-0155', 'Plant-based Protein', 'Green Future VC', '24/06 11:00', 'ยืนยัน', 'status-approved'],
              ['MCH-0154', 'Vertical Farm', 'Thai Smart Farm', '24/06 14:00', 'รอยืนยัน', 'status-review'],
              ['MCH-0153', 'Water Treatment IoT', 'Bangkok Energy', '25/06 09:30', 'ยืนยัน', 'status-approved'],
              ['MCH-0152', 'Bio-degradable Material', 'CP All', '25/06 13:00', 'ยกเลิก', 'status-rejected'],
            ].map((r,i) => (
              <tr key={i}>
                <td style={{fontFamily:'var(--font-en)', fontWeight:500}}>{r[0]}</td>
                <td>{r[1]}</td>
                <td>{r[2]}</td>
                <td style={{fontFamily:'var(--font-en)', fontSize:12.5}}>{r[3]}</td>
                <td><span className={`status-pill ${r[5]}`}>{r[4]}</span></td>
                <td><a style={{color:'var(--tech-blue)', cursor:'pointer'}}>···</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function AdminKnowledge() {
  return (
    <>
      <div className="page-head">
        <div>
          <h1>Knowledge Center</h1>
          <div className="sub">จัดการเอกสาร TRL/SRL และคำถาม Self-Assessment</div>
        </div>
        <button className="btn btn-primary"><Icon.Plus size={14}/> เพิ่มเนื้อหา</button>
      </div>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap: 16}}>
        <div className="panel">
          <h3 style={{margin:'0 0 14px', fontSize: 16, fontWeight: 600}}>เอกสาร TRL/SRL</h3>
          {[
            'TRL 1–9 Definition (Thai/Eng)',
            'SRL Framework — Updated 2026',
            'Self-Assessment Methodology',
            'TRL Mapping for Agri-Food',
          ].map((d,i) => (
            <div key={i} style={{padding:'12px 14px', border:'1px solid var(--line)', borderRadius: 10, marginBottom: 8, display:'flex', alignItems:'center', gap:10, fontSize:13.5}}>
              <Icon.Doc size={16} style={{color:'var(--tech-blue)'}}/>
              <span style={{flex:1}}>{d}</span>
              <span style={{color:'var(--ink-3)', fontSize:12}}>PDF</span>
              <a style={{color:'var(--tech-blue)', cursor:'pointer', fontSize:12.5}}>แก้ไข</a>
            </div>
          ))}
        </div>
        <div className="panel">
          <h3 style={{margin:'0 0 14px', fontSize: 16, fontWeight: 600}}>คำถาม Self-Assessment</h3>
          {[
            { q: 'ผลงานของคุณอยู่ในขั้นใด?', n: 5, t: 'TRL' },
            { q: 'ระดับการทดสอบกับผู้ใช้จริง', n: 5, t: 'TRL' },
            { q: 'สถานะของทรัพย์สินทางปัญญา', n: 5, t: 'TRL' },
            { q: 'การยอมรับจากชุมชน', n: 4, t: 'SRL' },
            { q: 'ผลกระทบเชิงสังคม', n: 5, t: 'SRL' },
          ].map((q,i) => (
            <div key={i} style={{padding:'12px 14px', border:'1px solid var(--line)', borderRadius: 10, marginBottom: 8, display:'flex', alignItems:'center', gap:10, fontSize:13.5}}>
              <span style={{padding:'2px 8px', background: q.t === 'TRL' ? 'var(--inno-green-soft)' : '#E0F4F8', color: q.t === 'TRL' ? 'var(--ku-green)' : '#006B7F', borderRadius: 6, fontWeight: 600, fontSize: 11}}>{q.t}</span>
              <span style={{flex:1}}>{q.q}</span>
              <span style={{color:'var(--ink-3)', fontSize:12}}>{q.n} options</span>
              <a style={{color:'var(--tech-blue)', cursor:'pointer', fontSize:12.5}}>แก้ไข</a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function AdminAuditLogs() {
  return (
    <>
      <div className="page-head">
        <div>
          <h1>Audit Logs</h1>
          <div className="sub">บันทึกการเข้าระบบ การแก้ไขข้อมูล และการเปลี่ยนสถานะผลงาน</div>
        </div>
        <button className="btn btn-outline btn-sm"><Icon.Doc size={14}/> Export CSV</button>
      </div>
      <div className="tbl-panel">
        <div className="adm-toolbar">
          <div className="search">
            <span className="ic"><Icon.Search size={14}/></span>
            <input placeholder="ค้นหาเหตุการณ์..." />
          </div>
          <select><option>ประเภททั้งหมด</option><option>Login</option><option>Edit</option><option>Status Change</option></select>
          <select><option>วันนี้</option><option>7 วันที่ผ่านมา</option><option>30 วัน</option></select>
        </div>
        <table className="data">
          <thead><tr><th>Timestamp</th><th>User</th><th>IP</th><th>Action</th><th>Target</th><th>Result</th></tr></thead>
          <tbody>
            {[
              ['2026-05-27 11:32:14', 'Admin', '202.28.180.45', 'APPROVE', 'INN-2026-0312', 'success'],
              ['2026-05-27 11:18:02', 'malee.r@ku.ac.th', '202.28.180.78', 'SCORE', 'INN-2026-0310', 'success'],
              ['2026-05-27 10:54:31', 'system', '127.0.0.1', 'BACKUP', 'database (1.2 GB)', 'success'],
              ['2026-05-27 10:30:05', 'thanapol@ku.ac.th', '171.6.226.18', 'CREATE', 'INN-2026-0312', 'success'],
              ['2026-05-27 09:45:50', 'Admin', '202.28.180.45', 'EDIT', 'Event #EVT-0024', 'success'],
              ['2026-05-27 09:12:18', 'malee.r@ku.ac.th', '202.28.180.78', 'LOGIN', '—', 'success'],
              ['2026-05-27 08:55:01', 'unknown', '198.51.100.7', 'LOGIN', '—', 'failed'],
              ['2026-05-27 08:43:22', 'piya.s@ku.ac.th', '202.28.180.45', 'EDIT', 'User #U-0892', 'success'],
            ].map((r,i) => (
              <tr key={i}>
                <td style={{fontFamily:'var(--font-en)', fontSize:12, color:'var(--ink-3)'}}>{r[0]}</td>
                <td style={{fontSize: 13}}>{r[1]}</td>
                <td style={{fontFamily:'var(--font-en)', fontSize:12, color:'var(--ink-3)'}}>{r[2]}</td>
                <td><span className="pill" style={{background: r[5] === 'failed' ? '#FBE7E7' : 'var(--bg-soft)', color: r[5] === 'failed' ? '#B82828' : 'var(--ink-2)'}}>{r[3]}</span></td>
                <td style={{fontSize: 13}}>{r[4]}</td>
                <td><span className={`status-pill ${r[5] === 'failed' ? 'status-rejected' : 'status-approved'}`}>{r[5]}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

Object.assign(window, {
  AdminLayout, AdminSubmissions, AdminReview, AdminUsers, AdminOrgs,
  AdminEvents, AdminNews, AdminReports, AdminSettings,
  AdminInnovations, AdminBizMatch, AdminKnowledge, AdminAuditLogs,
});
