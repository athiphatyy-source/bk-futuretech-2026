# CLAUDE.md — BK FutureTech 2026

> อ่านไฟล์นี้ทุกครั้งก่อนเริ่มทำงาน เพื่อเข้าใจ constraints ของโปรเจกต์

---

## Project Overview

**BK FutureTech 2026** — Interactive Platform Prototype สำหรับงาน Bang Khen Agri-Food & Environmental Tech Festival 2026 (24–25 มิถุนายน 2569) จัดโดย มหาวิทยาลัยเกษตรศาสตร์

- สถานะ: **Prototype / Demo** (ข้อมูลทั้งหมดเป็น mock data)
- Deploy: GitHub Pages → `https://athiphatyy-source.github.io/bk-futuretech-2026/`
- ทีม: 1 คน + Claude Code

---

## Tech Stack — ข้อจำกัดสำคัญมาก

```
React 18.3.1  (UMD/CDN — ไม่มี build step, ไม่มี npm, ไม่มี node_modules)
Babel Standalone 7.29.0 (transpile JSX ใน browser ณ runtime)
CSS ล้วน (ไม่มี Tailwind, ไม่มี CSS Modules)
```

### ❌ ห้ามทำ
- ห้ามใช้ `import` / `export` / `require()` — ไม่มี module bundler
- ห้ามแนะนำ npm install / yarn add / vite / webpack
- ห้ามใช้ TypeScript syntax
- ห้ามใช้ JSX inline `gridTemplateColumns` สำหรับ layout ที่ต้องการ responsive
  → ใช้ CSS class + media query แทนเสมอ (inline style ถูก override โดย media query ไม่ได้)

### ✅ Pattern ที่ถูกต้อง
```jsx
// ❌ ผิด — inline style ไม่ responsive
<div style={{display:'grid', gridTemplateColumns:'1fr 1fr'}}>

// ✅ ถูก — ใช้ class แล้ว override ใน media query
<div className="my-grid">
// จากนั้นใส่ CSS: .my-grid { grid-template-columns: 1fr 1fr; }
// และใส่ใน @media (max-width: 768px) { .my-grid { grid-template-columns: 1fr; } }
```

---

## File Structure

```
repo/
├── index.html          ← Production (ดึง React/Babel จาก CDN — ต้องมีอินเทอร์เน็ต)
├── index-local.html    ← Local dev (ใช้ vendor/ — ทำงาน offline ได้)
├── vendor/             ← react.development.js, react-dom.development.js, babel.min.js
│
├── app.jsx             ← Root: state หลัก, routing, ScreenJumper FAB
├── components.jsx      ← Shared: TopNav, SiteFooter, Icon, ImgPH, Sparkline, Donut, BarChart
├── tweaks-panel.jsx    ← Dev panel (ไม่ต้องแก้)
│
├── pages-home.jsx      ← HomePage
├── pages-auth.jsx      ← LoginPage, RegisterPage, AuthLeftPanel
├── pages-other.jsx     ← CataloguePage, DetailPage, SubmitPage, KnowledgePage
├── pages-user.jsx      ← AboutPage, MatchingPage, EventsPage, PitchingPage,
│                          NewsPage, DownloadsPage, ContactPage, AccountPage
├── pages-admin.jsx     ← AdminDashboardContent (dashboard หลัก)
├── pages-admin2.jsx    ← AdminLayout + Admin screens ทั้งหมด
│
├── styles.css          ← Styles หลัก + responsive breakpoints (user/public pages)
├── styles-2.css        ← Styles เพิ่มเติม (about, news, account, admin)
└── CLAUDE.md           ← ไฟล์นี้
```

---

## Screen Routing

### User Screens — `setScreen('id')`
| screen id | Component | File |
|-----------|-----------|------|
| `home` | HomePage | pages-home.jsx |
| `about` | AboutPage | pages-user.jsx |
| `catalogue` | CataloguePage | pages-other.jsx |
| `detail` | DetailPage | pages-other.jsx |
| `submit` | SubmitPage | pages-other.jsx |
| `knowledge` | KnowledgePage | pages-other.jsx |
| `matching` | MatchingPage | pages-user.jsx |
| `events` | EventsPage | pages-user.jsx |
| `pitching` | PitchingPage | pages-user.jsx |
| `news` | NewsPage | pages-user.jsx |
| `downloads` | DownloadsPage | pages-user.jsx |
| `contact` | ContactPage | pages-user.jsx |
| `account` | AccountPage | pages-user.jsx |
| `login` | LoginPage | pages-auth.jsx |
| `register` | RegisterPage | pages-auth.jsx |

### Admin Screens — `setScreen('admin')` + `setAdminScreen('id')`
| adminScreen id | Component | File |
|----------------|-----------|------|
| `dash` | AdminDashboardContent | pages-admin.jsx |
| `sub` | AdminSubmissions | pages-admin2.jsx |
| `review` | AdminReview | pages-admin2.jsx |
| `inno` | AdminInnovations | pages-admin2.jsx |
| `biz` | AdminBizMatch | pages-admin2.jsx |
| `usr` | AdminUsers | pages-admin2.jsx |
| `org` | AdminOrgs | pages-admin2.jsx |
| `evt` | AdminEvents | pages-admin2.jsx |
| `news` | AdminNews | pages-admin2.jsx |
| `know` | AdminKnowledge | pages-admin2.jsx |
| `rpt` | AdminReports | pages-admin2.jsx |
| `log` | AdminAuditLogs | pages-admin2.jsx |
| `set` | AdminSettings | pages-admin2.jsx |

### Navigation ใน Dev
- **ScreenJumper FAB** — ปุ่มกลมสีเขียว bottom-left → คลิกเพื่อเปลี่ยน screen
- **TopNav** — hamburger menu บน mobile

---

## Shared Components (components.jsx)

```jsx
<TopNav screen={screen} setScreen={setScreen} isAuthed={isAuthed}
        signOut={signOut} lang={lang} setLang={setLang} />

<SiteFooter setScreen={setScreen} />

<ImgPH kind="agri|food|env|tech|bio" label="TEXT" />  // placeholder image

<Sparkline data={[...numbers]} color="#hex" />

<Donut segments={[{value, color, label}]} total={n} label="Text" size={170} />

<BarChart data={[...numbers]} labels={[...strings]} maxY={n} />
```

### Icon Object
ใช้ผ่าน `Icon.Name` — ตัวอย่าง:
```jsx
<Icon.Plus size={16} />   <Icon.Doc size={16} />    <Icon.User size={16} />
<Icon.Edit size={16} />   <Icon.Trash size={16} />  <Icon.Search size={16} />
<Icon.Download size={16}/><Icon.Upload size={16} />  <Icon.Filter size={16} />
<Icon.Handshake size={16}/><Icon.Leaf size={16} />  <Icon.TrendUp size={16} />
<Icon.Stack size={16} />  <Icon.Bookmark size={16}/> <Icon.ChevronRight size={16} />
```
→ ดู Icon object ทั้งหมดใน components.jsx

---

## CSS Architecture

### Responsive Breakpoints
```css
@media (max-width: 1100px) { /* tablet landscape */ }
@media (max-width: 768px)  { /* tablet portrait */ }
@media (max-width: 480px)  { /* mobile */ }
```

### CSS Variables สำคัญ
```css
--ku-green: #00C26E      /* สีหลัก */
--navy: #0F2233          /* สีเข้ม */
--tech-blue: #0057B8
--gold: #F4B400
--ink: #1A2733           /* text หลัก */
--ink-2: #3A5068         /* text รอง */
--ink-3: #6A8098         /* text อ่อน */
--bg-soft: #F0F4F8
--line: #DDE4EA          /* border */
--r-lg: 16px             /* border-radius ใหญ่ */
```

### Classes ที่ใช้บ่อย
```css
/* Buttons */
.btn .btn-primary .btn-outline .btn-sm .btn-lg .btn-solid-green

/* Layout */
.container          /* max-width: 1200px, padding: 0 20px */
.section            /* padding: 80px 0 */
.admin-shell        /* grid: sidebar + main */
.admin-grid-4       /* 4-col grid (→ 2-col @768px, 1-col @480px) */
.admin-grid-3       /* 3-col grid (→ 1-col @768px) */
.admin-kpi-4        /* 4-col KPI row (→ 2-col @768px, 1-col @480px) */
.admin-dash-grid    /* 2-col dashboard (→ 1-col @768px) */
.table-scroll       /* horizontal scroll wrapper สำหรับ <table> */

/* Status pills */
.status-pill .status-review .status-approved .status-rejected .status-new

/* Category pills */
.pill .pill-agri .pill-food .pill-env .pill-bio
```

### กฎเกี่ยวกับ Table
ทุก `<table className="data">` ต้องครอบด้วย:
```jsx
<div className="table-scroll">
  <table className="data">...</table>
</div>
```

---

## Global State (app.jsx)

```jsx
const [screen, setScreen] = useState('home');       // user screen
const [adminScreen, setAdminScreen] = useState('dash'); // admin sub-screen
const [isAuthed, setIsAuthed] = useState(false);    // login state
const [lang, setLang] = useState('th');             // 'th' | 'en'
```

React ใช้แบบ global (UMD) — destructure จาก React object:
```jsx
const { useState, useEffect, useRef } = React;
```

---

## Known Issues / Decisions

- **ข้อมูลทั้งหมดเป็น mock** — ไม่มี API, ไม่มี database จริง
- **Bilingual** — lang switcher มีใน TopNav แต่แปลเฉพาะ UI labels ไม่ใช่ body content
- **PDPA** อยู่ใน Submit Step 6 (Preview & Confirm) ตาม TOR 4.1.3
- **`html, body { overflow-x: hidden }`** — ตั้งไว้เพื่อป้องกัน horizontal scroll บน mobile
- **Grid children** ที่อยู่ใน grid container ต้องมี `min-width: 0` ถ้า content กว้างกว่า column

---

## Deploy

```bash
# Push to GitHub → GitHub Pages auto-deploy
git add <files>
git commit -m "message"
git push -u origin main
```

GitHub Pages ใช้ branch `main`, root directory `/`
URL: `https://athiphatyy-source.github.io/bk-futuretech-2026/`

---

## ห้ามแก้ไข

- `vendor/` — อย่าลบหรือแก้ไขไฟล์ใน vendor/
- `tweaks-panel.jsx` — dev panel, ไม่เกี่ยวกับ feature หลัก
- `index.html` (ระวัง) — CDN integrity hash ต้องตรงกับ version ที่ pin ไว้
