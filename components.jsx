/* eslint-disable no-undef */
// =====================================================
// BK FutureTech 2026 — shared components & icons
// =====================================================

const { useState, useEffect, useRef, useMemo } = React;

// ---------- Logo (SVG-based, replicates the master mark) ----------
function LogoMark({ size = 38, withTagline = false, light = false }) {
  // A faithful but original logo: "BK" wordmark with arc-of-dots, leaf accent, tech circuit lines, then "FUTURETECH 2026"
  const h = size;
  const w = withTagline ? size * 3.2 : size * 2.1;
  return (
    <svg className="logo-svg" viewBox="0 0 320 100" width={w} height={h} aria-label="BK FutureTech 2026">
      <defs>
        <linearGradient id="lg-bk" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0E3550" />
          <stop offset="100%" stopColor="#006C4F" />
        </linearGradient>
        <linearGradient id="lg-ft" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0E3550" />
          <stop offset="100%" stopColor="#00A562" />
        </linearGradient>
        <linearGradient id="lg-2026" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#00A562" />
          <stop offset="100%" stopColor="#0078C0" />
        </linearGradient>
        <linearGradient id="lg-arc" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F4B400" />
          <stop offset="40%" stopColor="#00C26E" />
          <stop offset="100%" stopColor="#0057B8" />
        </linearGradient>
      </defs>
      {/* Arc of dots */}
      <path d="M 18 50 A 36 36 0 1 1 60 86" stroke="url(#lg-arc)" strokeWidth="1.5" fill="none" />
      <circle cx="18" cy="50" r="3.5" fill="#0057B8" />
      <circle cx="60" cy="14" r="3.5" fill="#00C26E" />
      <circle cx="34" cy="20" r="3.5" fill="#F4B400" />
      <circle cx="60" cy="86" r="3.5" fill="#0057B8" />

      {/* BK */}
      <text x="34" y="58" fontFamily="Montserrat, sans-serif" fontWeight="800" fontSize="42" fill="url(#lg-bk)" letterSpacing="-1">BK</text>

      {/* Leaf cluster + circuit */}
      <g transform="translate(96 16)">
        <path d="M 0 28 Q 12 -2 28 6 Q 22 26 0 28 Z" fill="#00C26E" opacity="0.95" />
        <path d="M 6 30 Q 18 14 28 22 Q 22 36 6 30 Z" fill="#006C4F" opacity="0.85" />
        {/* circuit */}
        <g stroke="#0089A3" strokeWidth="1.4" fill="none">
          <path d="M 28 14 L 40 14 L 44 18" />
          <path d="M 28 22 L 46 22" />
          <path d="M 28 30 L 42 30 L 46 34" />
        </g>
        <circle cx="44" cy="18" r="2.2" fill="#0089A3" />
        <circle cx="46" cy="22" r="2.2" fill="#0089A3" />
        <circle cx="46" cy="34" r="2.2" fill="#0089A3" />
      </g>

      {withTagline && (
        <>
          {/* FUTURETECH */}
          <text x="158" y="42" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="22" fill="url(#lg-ft)" letterSpacing="0.5">FUTURETECH</text>
          {/* 2026 */}
          <text x="158" y="76" fontFamily="Montserrat, sans-serif" fontWeight="800" fontSize="30" fill="url(#lg-2026)">2026</text>
          {/* festival */}
          <g transform="translate(248 56)" fill={light ? "#C4D2DF" : "#0E3550"}>
            <line x1="0" y1="-6" x2="0" y2="18" stroke="#0E3550" strokeWidth="1.5" />
            <text x="6" y="0" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="8.5">BANG  KHEN</text>
            <text x="6" y="10" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="8.5">AGRI-FOOD &amp;</text>
            <text x="6" y="20" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="8.5">ENV TECH FESTIVAL</text>
          </g>
        </>
      )}
    </svg>
  );
}

// ---------- Icons (single-source, stroked, KU-green by default) ----------
const Icon = {
  Search: (p) => <svg viewBox="0 0 24 24" width={p.size||18} height={p.size||18} fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" strokeLinecap="round" /></svg>,
  Globe: (p) => <svg viewBox="0 0 24 24" width={p.size||16} height={p.size||16} fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg>,
  Caret: (p) => <svg viewBox="0 0 24 24" width={p.size||12} height={p.size||12} fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  User: (p) => <svg viewBox="0 0 24 24" width={p.size||16} height={p.size||16} fill="none" stroke="currentColor" strokeWidth="1.7" {...p}><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-7 8-7s8 3 8 7" strokeLinecap="round" /></svg>,
  Mail: (p) => <svg viewBox="0 0 24 24" width={p.size||16} height={p.size||16} fill="none" stroke="currentColor" strokeWidth="1.7" {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>,
  Lock: (p) => <svg viewBox="0 0 24 24" width={p.size||16} height={p.size||16} fill="none" stroke="currentColor" strokeWidth="1.7" {...p}><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>,
  Phone: (p) => <svg viewBox="0 0 24 24" width={p.size||16} height={p.size||16} fill="none" stroke="currentColor" strokeWidth="1.7" {...p}><path d="M5 4h4l2 5-2 1a12 12 0 0 0 5 5l1-2 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></svg>,
  Eye: (p) => <svg viewBox="0 0 24 24" width={p.size||16} height={p.size||16} fill="none" stroke="currentColor" strokeWidth="1.7" {...p}><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /><path d="m3 3 18 18" /></svg>,
  Plus: (p) => <svg viewBox="0 0 24 24" width={p.size||18} height={p.size||18} fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M12 5v14M5 12h14" strokeLinecap="round" /></svg>,
  Leaf: (p) => <svg viewBox="0 0 24 24" width={p.size||24} height={p.size||24} fill="none" stroke="currentColor" strokeWidth="1.7" {...p}><path d="M5 19c0-8 5-13 14-14-1 9-6 14-14 14Z" /><path d="M5 19c3-3 7-5 9-9" /></svg>,
  Doc: (p) => <svg viewBox="0 0 24 24" width={p.size||24} height={p.size||24} fill="none" stroke="currentColor" strokeWidth="1.7" {...p}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5M9 13h6M9 17h6M9 9h2" strokeLinecap="round" /></svg>,
  Clipboard: (p) => <svg viewBox="0 0 24 24" width={p.size||24} height={p.size||24} fill="none" stroke="currentColor" strokeWidth="1.7" {...p}><rect x="6" y="4" width="12" height="18" rx="2"/><rect x="9" y="2" width="6" height="3" rx="1"/><path d="M9 11h6M9 15h6M9 19h4" strokeLinecap="round"/></svg>,
  Handshake: (p) => <svg viewBox="0 0 24 24" width={p.size||24} height={p.size||24} fill="none" stroke="currentColor" strokeWidth="1.7" {...p}><path d="M3 12h3l3-3 3 3 3-3 3 3h3"/><path d="m6 12 6 6 6-6"/><path d="M9 9V6M15 9V6"/></svg>,
  Calendar: (p) => <svg viewBox="0 0 24 24" width={p.size||24} height={p.size||24} fill="none" stroke="currentColor" strokeWidth="1.7" {...p}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4" /></svg>,
  Book: (p) => <svg viewBox="0 0 24 24" width={p.size||24} height={p.size||24} fill="none" stroke="currentColor" strokeWidth="1.7" {...p}><path d="M4 4h11a4 4 0 0 1 4 4v12H8a4 4 0 0 1-4-4z" /><path d="M4 16h15" /></svg>,
  Drop: (p) => <svg viewBox="0 0 24 24" width={p.size||24} height={p.size||24} fill="none" stroke="currentColor" strokeWidth="1.7" {...p}><path d="M12 3s7 7.5 7 12a7 7 0 0 1-14 0c0-4.5 7-12 7-12Z" /></svg>,
  Network: (p) => <svg viewBox="0 0 24 24" width={p.size||24} height={p.size||24} fill="none" stroke="currentColor" strokeWidth="1.7" {...p}><circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="12" cy="18" r="2.5"/><circle cx="12" cy="11" r="2"/><path d="m8 7 3 3M16 7l-3 3M12 13v3" /></svg>,
  Stack: (p) => <svg viewBox="0 0 24 24" width={p.size||24} height={p.size||24} fill="none" stroke="currentColor" strokeWidth="1.7" {...p}><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 13 9 5 9-5" /><path d="m3 17 9 5 9-5" /></svg>,
  TrendUp: (p) => <svg viewBox="0 0 24 24" width={p.size||24} height={p.size||24} fill="none" stroke="currentColor" strokeWidth="1.7" {...p}><path d="M3 17 9 11l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" /><path d="M14 4h7v7" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  Target: (p) => <svg viewBox="0 0 24 24" width={p.size||24} height={p.size||24} fill="none" stroke="currentColor" strokeWidth="1.7" {...p}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.6" fill="currentColor" /></svg>,
  Bell: (p) => <svg viewBox="0 0 24 24" width={p.size||18} height={p.size||18} fill="none" stroke="currentColor" strokeWidth="1.7" {...p}><path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4Z" /><path d="M10 21h4" /></svg>,
  Bookmark: (p) => <svg viewBox="0 0 24 24" width={p.size||16} height={p.size||16} fill="none" stroke="currentColor" strokeWidth="1.7" {...p}><path d="M6 4h12v17l-6-4-6 4z" /></svg>,
  ArrowRight: (p) => <svg viewBox="0 0 24 24" width={p.size||14} height={p.size||14} fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  Upload: (p) => <svg viewBox="0 0 24 24" width={p.size||16} height={p.size||16} fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeLinecap="round"/><polyline points="17 8 12 3 7 8" strokeLinecap="round" strokeLinejoin="round"/><line x1="12" y1="3" x2="12" y2="15" strokeLinecap="round"/></svg>,
  ChevronRight: (p) => <svg viewBox="0 0 24 24" width={p.size||16} height={p.size||16} fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="m9 5 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  ChevronLeft: (p) => <svg viewBox="0 0 24 24" width={p.size||16} height={p.size||16} fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="m15 5-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  ChevronDown: (p) => <svg viewBox="0 0 24 24" width={p.size||16} height={p.size||16} fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  Refresh: (p) => <svg viewBox="0 0 24 24" width={p.size||16} height={p.size||16} fill="none" stroke="currentColor" strokeWidth="1.7" {...p}><path d="M3 12a9 9 0 0 1 16-5l2-2v6h-6l3-3" /><path d="M21 12a9 9 0 0 1-16 5l-2 2v-6h6l-3 3" /></svg>,
  Facebook: (p) => <svg viewBox="0 0 24 24" width={p.size||16} height={p.size||16} fill="currentColor" {...p}><path d="M13 22v-8h3l1-4h-4V7.5c0-1 .3-1.5 1.7-1.5H17V2.2C16.6 2.1 15.6 2 14.4 2 11.8 2 10 3.7 10 6.8V10H7v4h3v8z"/></svg>,
  Twitter: (p) => <svg viewBox="0 0 24 24" width={p.size||16} height={p.size||16} fill="currentColor" {...p}><path d="M18 3h3l-7 8 8 10h-6l-5-6-5 6H3l7-8L2 3h6l4 5z" /></svg>,
  YT: (p) => <svg viewBox="0 0 24 24" width={p.size||16} height={p.size||16} fill="currentColor" {...p}><path d="M22 8a3 3 0 0 0-2-2c-2-.5-8-.5-8-.5s-6 0-8 .5a3 3 0 0 0-2 2c-.5 2-.5 4-.5 4s0 2 .5 4a3 3 0 0 0 2 2c2 .5 8 .5 8 .5s6 0 8-.5a3 3 0 0 0 2-2c.5-2 .5-4 .5-4s0-2-.5-4ZM10 15V9l5 3z"/></svg>,
  LinkedIn: (p) => <svg viewBox="0 0 24 24" width={p.size||16} height={p.size||16} fill="currentColor" {...p}><path d="M5 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3 9h4v12H3zM10 9h4v2c.7-1.3 2.2-2.3 4-2.3 3 0 4 2 4 5V21h-4v-6c0-1.5-.5-2.5-2-2.5s-2 1-2 2.5V21h-4z"/></svg>,
  MapPin: (p) => <svg viewBox="0 0 24 24" width={p.size||14} height={p.size||14} fill="none" stroke="currentColor" strokeWidth="1.7" {...p}><path d="M12 22s8-7 8-13a8 8 0 1 0-16 0c0 6 8 13 8 13Z" /><circle cx="12" cy="9" r="3" /></svg>,
};

// ---------- Top Nav ----------
function TopNav({ screen, setScreen, isAuthed, signOut, lang = 'th', setLang }) {
  const NAV_LABELS = {
    th: ['หน้าแรก', 'เกี่ยวกับงาน', 'โปรแกรม', 'นวัตกรรม', 'ส่งผลงาน', 'จับคู่ธุรกิจ', 'องค์ความรู้', 'ข่าวสาร'],
    en: ['Home', 'About', 'Schedule', 'Innovations', 'Submit', 'Matching', 'Knowledge', 'News'],
  };
  const ids = ['home', 'about', 'events', 'catalogue', 'submit', 'matching', 'knowledge', 'news'];
  const labels = NAV_LABELS[lang] || NAV_LABELS.th;
  const links = ids.map((id, i) => ({ id, label: labels[i] }));
  const isEn = lang === 'en';

  return (
    <header className="topnav">
      <div className="topnav-inner">
        <div className="brand-mark" onClick={() => setScreen('home')}>
          <LogoMark size={42} withTagline={true} />
        </div>
        <nav className="nav-links">
          {links.map((l, i) => (
            <a
              key={i}
              className={screen === l.id ? 'active' : ''}
              onClick={() => setScreen(l.id)}
            >{l.label}</a>
          ))}
        </nav>
        <div className="nav-right">
          <span className="lang-chip" onClick={() => setLang && setLang(isEn ? 'th' : 'en')} style={{cursor:'pointer', userSelect:'none'}} title={isEn ? 'Switch to Thai' : 'Switch to English'}>
            <Icon.Globe size={14} />
            {isEn ? 'EN' : 'TH'}
            <Icon.Caret size={10} />
          </span>
          <button className="icon-btn" aria-label="search">
            <Icon.Search size={16} />
          </button>
          {isAuthed ? (
            <>
              <button className="btn btn-outline btn-sm" onClick={() => setScreen('account')}>
                <Icon.User size={14} /> {isEn ? 'My Account' : 'บัญชีของฉัน'}
              </button>
              <button className="btn btn-solid-green btn-sm" onClick={() => setScreen('admin')}>
                Admin Panel
              </button>
            </>
          ) : (
            <>
              <button className="btn btn-outline btn-sm" onClick={() => setScreen('login')}>{isEn ? 'Sign In' : 'เข้าสู่ระบบ'}</button>
              <button className="btn btn-solid-green btn-sm" onClick={() => setScreen('register')}>{isEn ? 'Register' : 'ลงทะเบียน'}</button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

// ---------- Footer ----------
function SiteFooter({ setScreen }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <LogoMark size={48} withTagline={true} light={true} />
            <p style={{marginTop: 18}}>
              BK FutureTech 2026 คือแพลตฟอร์มกลางด้านนวัตกรรมเกษตร อาหาร
              และสิ่งแวดล้อม ที่เชื่อมโยงงานวิจัย เทคโนโลยี ภาคธุรกิจ
              นักลงทุน เพื่อขับเคลื่อนเศรษฐกิจและสังคมไทยอย่างยั่งยืน
            </p>
            <button className="btn btn-outline btn-sm" style={{background:'transparent', borderColor:'rgba(255,255,255,0.2)', color:'#fff'}}>
              อ่านเพิ่มเติม <Icon.ArrowRight />
            </button>
            <div className="footer-social">
              <a><Icon.Facebook /></a>
              <a><Icon.Twitter /></a>
              <a><Icon.YT /></a>
              <a><Icon.LinkedIn /></a>
              <a><Icon.Mail size={14} /></a>
            </div>
          </div>
          <div>
            <h5>ลิงก์สำคัญ</h5>
            <ul>
              <li onClick={() => setScreen('home')}>หน้าแรก</li>
              <li onClick={() => setScreen('events')}>โปรแกรม</li>
              <li onClick={() => setScreen('catalogue')}>นวัตกรรม</li>
              <li onClick={() => setScreen('pitching')}>สมัคร Pitching</li>
              <li onClick={() => setScreen('matching')}>จับคู่ธุรกิจ</li>
              <li onClick={() => setScreen('knowledge')}>องค์ความรู้</li>
            </ul>
          </div>
          <div>
            <h5>สำหรับผู้ใช้งาน</h5>
            <ul>
              <li onClick={() => setScreen('login')}>เข้าสู่ระบบ</li>
              <li onClick={() => setScreen('register')}>ลงทะเบียน</li>
              <li onClick={() => setScreen('downloads')}>ดาวน์โหลด</li>
              <li onClick={() => setScreen('news')}>ข่าวสาร</li>
              <li onClick={() => setScreen('contact')}>ติดต่อเรา</li>
            </ul>
          </div>
          <div>
            <h5>ติดตามข่าวสาร</h5>
            <p style={{margin:'0 0 14px'}}>รับข่าวสาร ความเคลื่อนไหวล่าสุด<br/>ของ BK FutureTech 2026</p>
            <div className="newsletter-form">
              <input placeholder="อีเมลของคุณ" />
              <button>ติดตาม</button>
            </div>
          </div>
        </div>
        <div className="footer-bar">
          <div>© 2026 BK FutureTech 2026. All Rights Reserved.</div>
          <div className="links">
            <span>นโยบายความเป็นส่วนตัว</span>
            <span>ข้อกำหนดการใช้งาน</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ---------- Image placeholder (subtly striped) ----------
function ImgPH({ kind = 'agri', label, style }) {
  return (
    <div className={`img-placeholder ${kind}`} style={style}>
      <div style={{opacity:0.9, fontWeight:600}}>{label}</div>
    </div>
  );
}

// ---------- Stat cell + sparkline ----------
function Sparkline({ data, color = '#00C26E' }) {
  const w = 200, h = 36;
  const max = Math.max(...data), min = Math.min(...data);
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - ((v - min) / (max - min || 1)) * h;
    return `${x},${y}`;
  }).join(' ');
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="kpi-spark" preserveAspectRatio="none" style={{width:'100%'}}>
      <polyline points={pts} fill="none" stroke={color} strokeWidth="2" />
      <polyline points={`0,${h} ${pts} ${w},${h}`} fill={color} opacity="0.12" />
    </svg>
  );
}

// ---------- Donut chart ----------
function Donut({ segments, total, label = 'Total', size = 170 }) {
  // segments: [{ value, color }]
  const r = size / 2 - 14;
  const C = 2 * Math.PI * r;
  let offset = 0;
  const cx = size / 2, cy = size / 2;
  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
      <circle cx={cx} cy={cy} r={r} stroke="#EEF2F4" strokeWidth="22" fill="none" />
      {segments.map((s, i) => {
        const len = (s.value / total) * C;
        const dash = `${len} ${C - len}`;
        const el = (
          <circle key={i} cx={cx} cy={cy} r={r}
            stroke={s.color} strokeWidth="22" fill="none"
            strokeDasharray={dash}
            strokeDashoffset={-offset}
            transform={`rotate(-90 ${cx} ${cy})`}
            strokeLinecap="butt"
          />
        );
        offset += len;
        return el;
      })}
      <text x={cx} y={cy - 2} textAnchor="middle" fontSize="22" fontWeight="700" fontFamily="Montserrat, sans-serif" fill="#0F2233">{total}</text>
      <text x={cx} y={cy + 16} textAnchor="middle" fontSize="11" fill="#5B7388">{label}</text>
    </svg>
  );
}

// ---------- Bar chart ----------
function BarChart({ data, labels, maxY }) {
  const w = 320, h = 180, pad = { l: 28, r: 8, t: 16, b: 28 };
  const innerW = w - pad.l - pad.r;
  const innerH = h - pad.t - pad.b;
  const max = maxY ?? Math.max(...data) * 1.1;
  const bw = innerW / data.length;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" preserveAspectRatio="xMidYMid meet" style={{maxWidth: '100%'}}>
      {[0, 0.25, 0.5, 0.75, 1].map((p, i) => {
        const y = pad.t + innerH * (1 - p);
        return (
          <g key={i}>
            <line x1={pad.l} x2={w - pad.r} y1={y} y2={y} stroke="#EEF2F4" strokeWidth="1" />
            <text x={pad.l - 6} y={y + 3} textAnchor="end" fontSize="9" fill="#8A9CAE">{Math.round(max * p)}</text>
          </g>
        );
      })}
      {data.map((v, i) => {
        const x = pad.l + bw * i + bw * 0.18;
        const bh = (v / max) * innerH;
        const y = pad.t + innerH - bh;
        return (
          <g key={i}>
            <rect x={x} y={y} width={bw * 0.64} height={bh} rx="3" fill="#00C26E" />
            <text x={x + bw * 0.32} y={y - 4} textAnchor="middle" fontSize="9" fontWeight="600" fill="#324A60">{v}</text>
            <text x={x + bw * 0.32} y={h - 8} textAnchor="middle" fontSize="9.5" fill="#5B7388">{labels[i]}</text>
          </g>
        );
      })}
    </svg>
  );
}

// ============ Export to window ============
Object.assign(window, {
  LogoMark, Icon, TopNav, SiteFooter, ImgPH, Sparkline, Donut, BarChart,
});
