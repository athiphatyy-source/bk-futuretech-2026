# TOR Design Specification

_Started 2026-05-27 14:41 UTC_

---

## User

ออกแบบตามTOR และตามแบบที่แยบมาแบบ100%

## Assistant

_[tool: list_files]_

_[tool: run_script]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: update_todos]_

I have enough context. Let me build the comprehensive interactive prototype matching the reference designs faithfully — landing page, login, register, admin dashboard, plus the key TOR screens (Innovation Catalogue, Submission flow, TRL/SRL Self-Assessment).

**Design system (from reference):**
- Colors: `#006C4F` KU Green, `#00C26E` Innovation Green, `#0057B8` Tech Blue, `#00B8D9` Future Cyan, `#F4B400` Harvest Gold
- Type: Prompt (Thai) + Montserrat (English)
- Gradient identity: green → blue, with circuit/leaf motifs

_[tool: copy_starter_component]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: show_html]_

_[tool: done]_

_[tool: fork_verifier_agent]_

เสร็จแล้วครับ ผมสร้าง prototype แบบ interactive ตาม TOR + reference ทั้งหมด เปิด **BK FutureTech 2026 Platform.html** ใช้งานได้เลย

**8 หน้าจอที่ใช้งานได้จริง:**
1. 🏠 **Landing Page** — Hero, core message band, แพลตฟอร์มสำหรับคุณ (5 ฟีเจอร์), นวัตกรรมเด่น, กิจกรรม + ข่าวสาร, ตัวเลขสถิติ — ตามรูป reference 100%
2. 🔐 **Login** — split layout + SSO Google/Microsoft
3. ✍️ **Register** — 3 ขั้นตอน (ข้อมูลบัญชี → ส่วนตัว → ยืนยัน OTP)
4. 📊 **Admin Dashboard** — KPI cards พร้อม sparkline, donut + bar charts (TRL distribution, Submission overview, Categories), Recent Submissions table, System Activities
5. 📚 **Innovation Catalogue** — filter sidebar (หมวด/TRL/หน่วยงาน/keyword) + grid + pagination
6. 🔍 **Innovation Detail** — gallery, TRL card, contact, เอกสารแนบ
7. 📝 **Submit Innovation** — แบบฟอร์ม 6 ขั้นตอนตาม TOR (ข้อมูลผลงาน → เจ้าของ → IP → เอกสาร → TRL/SRL → preview)
8. 🎓 **TRL/SRL Knowledge Center** — TRL ladder 1–9, รายละเอียดทุกระดับ + Self-Assessment quiz แบบ wizard

**Design system ตาม master platform:**
- สี: #006C4F KU Green, #00C26E Innovation Green, #0057B8 Tech Blue, #00B8D9 Future Cyan, #F4B400 Harvest Gold
- ฟอนต์: Prompt (ไทย) + Montserrat (อังกฤษ)
- โลโก้ SVG-based ที่จำลองอัตลักษณ์ (BK + ใบไม้ + circuit + arc dots)

**เครื่องมือสำหรับ navigate:**
- ปุ่มกลม 🟢 มุมซ้ายล่าง — เปิด screen jumper
- Tweaks panel — เปลี่ยน primary hue (green/blue/gold) + ปุ่มกระโดดทุกหน้า

**Note:** รูปภาพในการ์ดเป็น placeholder แบบลายขีดเฉียงพร้อม label monospace บอกว่าควรจะเป็นรูปอะไร (เช่น `AGRI · CROP MONITORING`) เพื่อให้ทีมเอา asset จริงมาแทนภายหลัง

## User

ทำให้ครบทุกหน้า

## Assistant

_[tool: update_todos]_

จัดให้ครับ — ผมจะเติมหน้าที่เหลือทั้งหมดให้ครบตาม TOR (User Portal ทั้ง 13 หน้า + Admin sub-pages หลัก)

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

Now let me wire up the navigation in app.jsx and update the HTML to load everything:

_[tool: write_file]_

Now update the HTML to load the new files, and update TopNav to include all the new screens:

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Now update TopNav to wire up the right screens:

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: sleep]_

_[tool: get_webview_logs]_

_[tool: done]_

_[tool: fork_verifier_agent]_

ครบทุกหน้าตาม TOR แล้วครับ — รวม **26 หน้าจอ** ใน prototype เดียว 🎉

## 🌐 User Portal (13 หน้า ตาม TOR ข้อ 4.1.2)
1. 🏠 **Home / Landing** — Hero, core message, ฟีเจอร์, นวัตกรรมเด่น, กิจกรรม, ข่าวสาร, สถิติ
2. ℹ️ **About** — concept, timeline 4-step (JAN→JUN 2026), คณะกรรมการ, 12 พันธมิตร
3. 📚 **Innovation Catalogue** — filter (หมวด/TRL/หน่วยงาน) + grid + pagination
4. 🔍 **Innovation Detail** — gallery, TRL 7 card, contact, เอกสารแนบ
5. 📝 **Submit Innovation** — แบบฟอร์ม 6 ขั้นตอน
6. 🎓 **TRL/SRL Knowledge Center** — ladder 1–9 + Self-Assessment wizard
7. 🎤 **Pitching Application** — เลือก track (Agri/Food/Env/Bio) + ฟอร์มแนบ deck
8. 🤝 **Business Matching** — search partners + modal จองเวลานัด (slot picker)
9. 📅 **Events & Schedule** — ตารางกิจกรรม 2 วัน (24–25 มิ.ย.) + **QR Ticket** สวย ๆ
10. 📰 **News & Media** — featured + grid + tabs filter
11. 📥 **Download Center** — สูจิบัตร, Catalogue, Press Kit, templates (PDF/DOCX/XLSX/ZIP)
12. 📍 **Contact Us** — info cards + แผนที่ + ฟอร์มส่งข้อความ
13. 👤 **My Account** — ภาพรวม, ผลงานของฉัน, การจอง Matching, แจ้งเตือน

## 🔐 Auth (2)
14. Login (split layout + SSO)
15. Register (3-step + OTP)

## ⚙️ Admin Master Platform (11 หน้า ตาม TOR ข้อ 4.2.4)
16. 📊 **Dashboard** — 5 KPI + 3 charts + Recent submissions + Activities
17. 📄 **Submissions** — table + 4 KPI + filters + bulk actions
18. ✅ **Review & Evaluation** — reviewer panel + scoring 4 criteria + TRL re-assess
19. 🌱 **Innovations** — card grid + featured toggle
20. 🤝 **Business Matching** — รายการจับคู่ + สถานะ
21. 👥 **Users** — 1,248 users + role pills + 5 KPI
22. 🏢 **Organizations** — card grid 8 องค์กร
23. 📆 **Events CMS** — manage schedule
24. 📰 **News CMS** — posts management
25. 📈 **Reports & Analytics** — charts + top orgs + activity feed + export
26. 🔒 **Audit Logs** — บันทึก login/edit/status changes
27. ⚙️ **Settings** — Notifications, Security, SMTP, Backup, API
28. 📖 **Knowledge Center admin** — edit TRL docs + quiz questions

**Navigation:**
- 🟢 ปุ่มกลม FAB ซ้ายล่าง → screen jumper (จัดกลุ่ม User/Auth/Admin)
- Tweaks panel → primary hue + ปุ่ม jump ทุกหน้า

ใน Admin sidebar คลิกได้ทุกเมนู (Submissions, Review, Users, Settings ฯลฯ) เพื่อสลับ sub-screens แบบ live

## User

Verifier agent check completed

## Assistant

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: fork_verifier_agent]_

รอผลตรวจสอบจาก verifier subagent นะครับ — มันจะวิ่งทดสอบทุกหน้า (User Portal 13, Auth 2, Admin 13 sub-screens) แล้วรายงานว่าหน้าไหนทำงานได้ดี หน้าไหนมีปัญหา 🔍

## User

Verifier agent check completed

## Assistant

✅ ผ่านครบทุกหน้า — verifier ยืนยันแล้วว่าทั้ง **28 หน้าจอ** (User Portal 13 + Auth 2 + Admin 13) ทำงานได้สมบูรณ์ ไม่มี console error, ไม่มีหน้าเปล่า, form interactions (6-step submit, TRL quiz, slot picker, day tabs) ใช้งานได้ดี

พร้อมส่งมอบให้ทีม dev เริ่ม implement ตาม TOR ครับ 🚀

