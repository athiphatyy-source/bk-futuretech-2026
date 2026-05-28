/* eslint-disable no-undef */
// Admin Dashboard CONTENT (shell is provided by AdminLayout in pages-admin2.jsx)

function AdminDashboardContent() {
  const subRows = [
    { id: 'INN-2026-0312', title: 'ระบบ AI วิเคราะห์โรคพืชจากภาพถ่าย', org: 'Kasetsart University', cat: 'Agri-Tech', catCls: 'pill-agri', trl: 7, status: 'In Review', stCls: 'status-review', date: '20 พ.ค. 2026' },
    { id: 'INN-2026-0311', title: 'โปรตีนจากพืชทางเลือกใหม่', org: 'Kasetsart University', cat: 'Food-Tech', catCls: 'pill-food', trl: 6, status: 'Approved', stCls: 'status-approved', date: '19 พ.ค. 2026' },
    { id: 'INN-2026-0310', title: 'ระบบบำบัดน้ำเสียแบบอัจฉริยะ', org: 'KU Innovation Center', cat: 'Env-Tech', catCls: 'pill-env', trl: 8, status: 'In Review', stCls: 'status-review', date: '19 พ.ค. 2026' },
    { id: 'INN-2026-0309', title: 'วัสดุชีวภาพย่อยสลายได้', org: 'Mahidol University', cat: 'Bio-Tech', catCls: 'pill-bio', trl: 5, status: 'New', stCls: 'status-new', date: '18 พ.ค. 2026' },
    { id: 'INN-2026-0308', title: 'โดรนเพื่อการเกษตรแม่นยำ', org: 'Private Sector', cat: 'Agri-Tech', catCls: 'pill-agri', trl: 7, status: 'Approved', stCls: 'status-approved', date: '18 พ.ค. 2026' },
  ];

  const activities = [
    { ic: <Icon.Doc size={16}/>, ttl: 'มีการส่งผลงานใหม่', sub: 'INN-2026-0312 โดย Kasetsart University', when: '10:30 น.' },
    { ic: <Icon.TrendUp size={16}/>, ttl: 'ผลงานได้รับการอนุมัติ', sub: 'INN-2026-0311 ได้รับการอนุมัติ', when: '09:45 น.' },
    { ic: <Icon.Handshake size={16}/>, ttl: 'มีการจับคู่ธุรกิจใหม่', sub: 'Matching #MCH-2026-0156', when: '09:20 น.' },
    { ic: <Icon.User size={16}/>, ttl: 'ผู้ใช้ใหม่สมัครเข้าระบบ', sub: 'คุณวิทยา จาก ABC Company', when: '08:50 น.' },
    { ic: <Icon.Calendar size={16}/>, ttl: 'อัปเดตข้อมูลกิจกรรม', sub: 'Pitching Stage: Agri & Food Tech', when: '08:30 น.' },
  ];

  return (
    <>
      <div className="page-head">
        <div>
          <h1>Dashboard</h1>
          <div className="sub">ภาพรวมระบบ BK FutureTech 2026</div>
        </div>
        <div className="range-pill">
          <Icon.Calendar size={14}/>
          1 ม.ค. 2026 – 31 ธ.ค. 2026
          <Icon.ChevronDown size={12} />
        </div>
      </div>

      <div className="kpi-row">
        <div className="kpi-card">
          <div className="kpi-head"><div className="kpi-ic g1"><Icon.Doc size={20}/></div><div className="kpi-label">Submissions</div></div>
          <div className="kpi-value">312</div>
          <div className="kpi-trend">↑ 12.5% <small>จากเดือนที่แล้ว</small></div>
          <Sparkline data={[10,18,12,24,18,30,28,36,32,40,38,46]} color="#00C26E" />
        </div>
        <div className="kpi-card">
          <div className="kpi-head"><div className="kpi-ic g2"><Icon.User size={20}/></div><div className="kpi-label">Reviewed</div></div>
          <div className="kpi-value">86</div>
          <div className="kpi-trend">↑ 18.3% <small>จากเดือนที่แล้ว</small></div>
          <Sparkline data={[8,10,14,12,18,16,22,20,28,24,32,30]} color="#0057B8" />
        </div>
        <div className="kpi-card">
          <div className="kpi-head"><div className="kpi-ic g3"><Icon.Target size={20}/></div><div className="kpi-label">Matched</div></div>
          <div className="kpi-value">196</div>
          <div className="kpi-trend">↑ 22.1% <small>จากเดือนที่แล้ว</small></div>
          <Sparkline data={[5,8,12,10,18,22,18,28,32,30,42,48]} color="#00B8D9" />
        </div>
        <div className="kpi-card">
          <div className="kpi-head"><div className="kpi-ic g4"><Icon.Network size={20}/></div><div className="kpi-label">Total Users</div></div>
          <div className="kpi-value">1,248</div>
          <div className="kpi-trend">↑ 15.7% <small>จากเดือนที่แล้ว</small></div>
          <Sparkline data={[100,120,130,150,170,180,210,240,280,320,360,400]} color="#6B4FCF" />
        </div>
        <div className="kpi-card">
          <div className="kpi-head"><div className="kpi-ic g5"><Icon.Stack size={20}/></div><div className="kpi-label">Organizations</div></div>
          <div className="kpi-value">420</div>
          <div className="kpi-trend">↑ 11.2% <small>จากเดือนที่แล้ว</small></div>
          <Sparkline data={[40,55,52,60,72,68,80,82,90,98,108,118]} color="#F4B400" />
        </div>
      </div>

      <div className="cards-row-3">
        <div className="panel">
          <div className="panel-head">
            <h3>Submission Overview</h3>
            <div className="sub">สถานะการส่งผลงานนวัตกรรม</div>
          </div>
          <div className="donut-row">
            <Donut
              total={312}
              segments={[
                { value: 120, color: '#0057B8' },
                { value: 86, color: '#00B8D9' },
                { value: 56, color: '#00C26E' },
                { value: 50, color: '#E64646' },
              ]}
            />
            <div className="legend">
              <div className="legend-row"><span className="sw" style={{background:'#0057B8'}}/><span className="lbl">● New</span><span className="val">120 (38.5%)</span></div>
              <div className="legend-row"><span className="sw" style={{background:'#00B8D9'}}/><span className="lbl">● In Review</span><span className="val">86 (27.6%)</span></div>
              <div className="legend-row"><span className="sw" style={{background:'#00C26E'}}/><span className="lbl">● Approved</span><span className="val">56 (17.9%)</span></div>
              <div className="legend-row"><span className="sw" style={{background:'#E64646'}}/><span className="lbl">● Rejected</span><span className="val">50 (16.0%)</span></div>
            </div>
          </div>
          <div className="panel-foot"><a>ดูรายละเอียด →</a></div>
        </div>

        <div className="panel">
          <div className="panel-head">
            <h3>TRL Distribution</h3>
            <div className="sub">การกระจายตามระดับ TRL</div>
          </div>
          <BarChart
            data={[18, 25, 45, 78, 120, 210, 160, 100, 35]}
            labels={['TRL 1','TRL 2','TRL 3','TRL 4','TRL 5','TRL 6','TRL 7','TRL 8','TRL 9']}
          />
          <div className="panel-foot"><a>ดูรายละเอียด →</a></div>
        </div>

        <div className="panel">
          <div className="panel-head">
            <h3>Innovation Categories</h3>
            <div className="sub">สัดส่วนตามหมวดหมู่นวัตกรรม</div>
          </div>
          <div className="donut-row">
            <Donut
              total={312}
              segments={[
                { value: 111, color: '#00C26E' },
                { value: 89, color: '#F4B400' },
                { value: 69, color: '#00B8D9' },
                { value: 27, color: '#6B4FCF' },
                { value: 16, color: '#8A9CAE' },
              ]}
            />
            <div className="legend">
              <div className="legend-row"><Icon.Leaf size={14} style={{color:'#00C26E'}}/><span className="lbl">Agri-Tech</span><span className="val">35.6% (111)</span></div>
              <div className="legend-row"><Icon.Drop size={14} style={{color:'#F4B400'}}/><span className="lbl">Food-Tech</span><span className="val">28.5% (89)</span></div>
              <div className="legend-row"><Icon.Drop size={14} style={{color:'#00B8D9'}}/><span className="lbl">Env-Tech</span><span className="val">22.1% (69)</span></div>
              <div className="legend-row"><Icon.Network size={14} style={{color:'#6B4FCF'}}/><span className="lbl">Bio-Tech</span><span className="val">8.7% (27)</span></div>
              <div className="legend-row"><Icon.Stack size={14} style={{color:'#8A9CAE'}}/><span className="lbl">Others</span><span className="val">5.1% (16)</span></div>
            </div>
          </div>
          <div className="panel-foot"><a>ดูรายละเอียด →</a></div>
        </div>
      </div>

      <div className="admin-dash-grid" style={{display:'grid', gridTemplateColumns:'2fr 1fr', gap: 16}}>
        <div className="tbl-panel">
          <div className="tbl-head-row">
            <div>
              <h3>Recent Submissions</h3>
              <div className="sub">ผลงานล่าสุด</div>
            </div>
            <div className="right">
              <button className="btn btn-outline btn-sm">ดูทั้งหมด</button>
            </div>
          </div>
          <div className="table-scroll">
          <table className="data">
            <thead>
              <tr>
                <th>ID</th><th>ชื่อผลงาน</th><th>ผู้ส่งผลงาน</th><th>หมวดหมู่</th>
                <th>TRL</th><th>สถานะ</th><th>วันที่ส่ง</th>
              </tr>
            </thead>
            <tbody>
              {subRows.map((r,i) => (
                <tr key={i}>
                  <td style={{fontFamily:'var(--font-en)', fontWeight:500}}>{r.id}</td>
                  <td>{r.title}</td>
                  <td style={{color:'var(--ink-3)'}}>{r.org}</td>
                  <td><span className={`pill ${r.catCls}`}>{r.cat}</span></td>
                  <td style={{fontWeight:600}}>{r.trl}</td>
                  <td><span className={`status-pill ${r.stCls}`}>{r.status}</span></td>
                  <td style={{color:'var(--ink-3)'}}>{r.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          <div className="panel-foot"><a>ดูทั้งหมด →</a></div>
        </div>

        <div className="panel">
          <div className="panel-head">
            <h3>System Activities</h3>
            <div className="sub">กิจกรรมล่าสุดในระบบ</div>
          </div>
          <div className="activity-list">
            {activities.map((a, i) => (
              <div key={i} className="activity-row">
                <div className="activity-ic">{a.ic}</div>
                <div>
                  <div className="ttl">{a.ttl}</div>
                  <div className="sub">{a.sub}</div>
                </div>
                <div className="when">{a.when}</div>
              </div>
            ))}
          </div>
          <div className="panel-foot"><a>ดูทั้งหมด →</a></div>
        </div>
      </div>

      <div style={{textAlign:'center', color:'var(--ink-3)', fontSize: 12, padding: '24px 0 8px'}}>
        © 2026 BK FutureTech 2026. All Rights Reserved. <span style={{marginLeft: 16}}>v1.0.0</span>
      </div>
    </>
  );
}

Object.assign(window, { AdminDashboardContent });
