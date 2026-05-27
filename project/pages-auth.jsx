/* eslint-disable no-undef */
// Login + Register

function AuthLeftPanel({ withFeatures = false }) {
  return (
    <div className="auth-left">
      <LogoMark size={80} withTagline={true} />
      <div style={{marginTop: 14, display:'flex', alignItems:'center', gap: 14, color:'var(--ku-green)'}}>
        <span style={{height:1, width: 36, background:'var(--ku-green)'}} />
        <span style={{fontFamily:'var(--font-en)', fontSize: 12, letterSpacing: 2, fontWeight: 700}}>
          INNOVATION FOR A SUSTAINABLE FUTURE
        </span>
        <span style={{height:1, width: 36, background:'var(--ku-green)'}} />
      </div>
      <h2 style={{marginTop: 32}}>แพลตฟอร์มกลางด้านนวัตกรรม</h2>
      <p className="subtitle">เชื่อมโยงงานวิจัย เทคโนโลยี ภาคธุรกิจ และความยั่งยืน</p>

      {withFeatures ? (
        <div style={{
          display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap: 22,
          marginTop: 56, position:'absolute', bottom: 56, left: 56, right: 56,
        }}>
          {[
            { ic: <Icon.Plus size={20}/>, t:'ส่งผลงานนวัตกรรม', d:'ยื่นเสนอผลงานและระบุระดับ\nTRL/SRL ได้ด้วยตนเอง', c: 'var(--inno-green)' },
            { ic: <Icon.Clipboard size={20}/>, t:'ตรวจสอบสถานะ', d:'ติดตามสถานะการพิจารณา\nโดยคณะกรรมการ', c: 'var(--tech-blue)' },
            { ic: <Icon.Calendar size={20}/>, t:'ลงทะเบียนเข้าร่วมงาน', d:'ลงทะเบียนกิจกรรม Pitching,\nBusiness Matching และอื่น ๆ', c: 'var(--ku-green)' },
            { ic: <Icon.Book size={20}/>, t:'ศูนย์ความรู้ TRL/SRL', d:'เรียนรู้และประเมินระดับความพร้อม\nของเทคโนโลยีและสังคม', c: '#6B4FCF' },
            { ic: <Icon.Network size={20}/>, t:'เชื่อมต่อเครือข่าย', d:'พบปะนักวิจัย นักลงทุน และ\nพันธมิตรทางธุรกิจ', c: 'var(--gold)' },
            { ic: <Icon.TrendUp size={20}/>, t:'ขับเคลื่อนนวัตกรรม', d:'ร่วมขับเคลื่อนเศรษฐกิจและ\nสังคมอย่างยั่งยืน', c: 'var(--cyan)' },
          ].map((f, i) => (
            <div key={i}>
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: `${f.c}1A`, color: f.c,
                display:'grid', placeItems:'center', marginBottom: 10,
              }}>{f.ic}</div>
              <div style={{fontWeight: 600, fontSize: 14, marginBottom: 4}}>{f.t}</div>
              <div style={{fontSize: 12, color: 'var(--ink-3)', whiteSpace:'pre-line', lineHeight: 1.5}}>{f.d}</div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="scene">
            <div className="globe" />
            <svg viewBox="0 0 200 200" style={{position:'absolute', inset:'25%', width:'50%', height:'50%'}}>
              <defs>
                <linearGradient id="leaf-auth" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#00E37E" /><stop offset="100%" stopColor="#006C4F" />
                </linearGradient>
              </defs>
              <path d="M 100 184 Q 44 120 56 60 Q 100 36 100 100 Z" fill="url(#leaf-auth)" />
              <path d="M 100 184 Q 156 120 144 60 Q 100 36 100 100 Z" fill="url(#leaf-auth)" opacity="0.85" />
              <line x1="100" y1="100" x2="100" y2="184" stroke="#003D2A" strokeWidth="3" />
            </svg>
          </div>
          <div className="category-row">
            {[
              { l: 'AGRI-TECH', i: <Icon.Leaf size={20}/> },
              { l: 'FOOD-TECH', i: <Icon.Drop size={20}/> },
              { l: 'ENV-TECH', i: <Icon.Drop size={20}/> },
              { l: 'INNOVATION\nECOSYSTEM', i: <Icon.Network size={20}/> },
            ].map((c, i) => (
              <div className="cat-item" key={i}>
                <div className="ic">{c.i}</div>
                <div style={{whiteSpace:'pre-line'}}>{c.l}</div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function LoginPage({ setScreen, onLogin }) {
  const [show, setShow] = useState(false);
  return (
    <div data-screen-label="02 Login" className="auth-shell">
      <AuthLeftPanel />
      <div className="auth-right">
        <div className="auth-card">
          <h2>เข้าสู่ระบบ</h2>
          <p className="auth-sub">BK FutureTech 2026 Master Platform</p>
          <div className="auth-divider" />

          <div className="field">
            <label>อีเมล</label>
            <div className="input-wrap">
              <span className="input-icon"><Icon.Mail /></span>
              <input type="email" placeholder="กรอกอีเมลของท่าน" defaultValue="" />
            </div>
          </div>
          <div className="field">
            <label>รหัสผ่าน</label>
            <div className="input-wrap">
              <span className="input-icon"><Icon.Lock /></span>
              <input type={show ? 'text' : 'password'} placeholder="กรอกรหัสผ่าน" />
              <span className="input-suffix" onClick={() => setShow(!show)}><Icon.Eye /></span>
            </div>
          </div>
          <div className="forgot">ลืมรหัสผ่าน?</div>
          <button className="btn btn-primary" onClick={onLogin}>เข้าสู่ระบบ</button>

          <div className="or-divider">หรือเข้าสู่ระบบด้วย</div>
          <div className="sso-row">
            <button className="sso-btn">
              <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6 8-11.3 8a12 12 0 1 1 0-24c3 0 5.7 1.1 7.8 3l5.7-5.7C33.9 6.1 29.2 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.2-.1-2.4-.4-3.5"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C33.9 6.1 29.2 4 24 4 16.3 4 9.7 8.4 6.3 14.7"/><path fill="#4CAF50" d="M24 44c5.2 0 9.8-2 13.3-5.2l-6.2-5.2c-2 1.5-4.5 2.4-7.2 2.4-5.2 0-9.6-3.3-11.2-8l-6.5 5C9.5 39.5 16.2 44 24 44"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3a12 12 0 0 1-4.1 5.6l6.2 5.2C40.6 36 44 30.5 44 24c0-1.2-.1-2.4-.4-3.5"/></svg>
              Google
            </button>
            <button className="sso-btn">
              <svg width="18" height="18" viewBox="0 0 24 24"><rect width="10" height="10" x="2" y="2" fill="#F25022"/><rect width="10" height="10" x="12" y="2" fill="#7FBA00"/><rect width="10" height="10" x="2" y="12" fill="#00A4EF"/><rect width="10" height="10" x="12" y="12" fill="#FFB900"/></svg>
              Microsoft
            </button>
          </div>

          <div className="bottom-line">
            ยังไม่มีบัญชี? <a onClick={() => setScreen('register')}>ลงทะเบียนที่นี่</a>
          </div>
        </div>

        <div style={{marginTop: 32, fontSize: 12, color: 'var(--ink-3)', textAlign:'center', display:'flex', gap: 24}}>
          <span>© 2026 BK FutureTech 2026. All Rights Reserved.</span>
        </div>
        <div style={{marginTop: 8, fontSize: 12, color: 'var(--ink-3)', display:'flex', gap: 24}}>
          <span style={{cursor:'pointer'}}>นโยบายความเป็นส่วนตัว</span>
          <span style={{color:'var(--line-2)'}}>|</span>
          <span style={{cursor:'pointer'}}>ข้อกำหนดการใช้งาน</span>
        </div>
      </div>
    </div>
  );
}

function RegisterPage({ setScreen, onLogin }) {
  const [step, setStep] = useState(1);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const Steps = () => (
    <div className="stepper">
      <div className={`step ${step === 1 ? 'active' : step > 1 ? 'complete' : ''}`}>
        <span className="num">1</span><span>ข้อมูลบัญชี</span>
      </div>
      <span className={`step-divider ${step > 1 ? 'active' : ''}`} />
      <div className={`step ${step === 2 ? 'active' : step > 2 ? 'complete' : ''}`}>
        <span className="num">2</span><span>ข้อมูลส่วนตัว</span>
      </div>
      <span className={`step-divider ${step > 2 ? 'active' : ''}`} />
      <div className={`step ${step === 3 ? 'active' : ''}`}>
        <span className="num">3</span><span>ยืนยันตัวตน</span>
      </div>
    </div>
  );

  return (
    <div data-screen-label="03 Register" className="auth-shell">
      <AuthLeftPanel withFeatures={true} />
      <div className="auth-right" style={{padding: '40px 56px'}}>
        <div className="auth-card" style={{maxWidth: 540}}>
          <h2>สร้างบัญชีผู้ใช้</h2>
          <p className="auth-sub">เข้าร่วมเป็นส่วนหนึ่งของ BK FutureTech 2026</p>
          <Steps />

          {step === 1 && (
            <>
              <div className="field">
                <label>ประเภทผู้ใช้งาน <span className="req">*</span></label>
                <div className="input-wrap">
                  <span className="input-icon"><Icon.User /></span>
                  <select defaultValue=""><option value="" disabled>เลือกประเภทผู้ใช้งาน</option>
                    <option>นักวิจัย / ผู้ประดิษฐ์</option>
                    <option>ผู้ประกอบการ / สตาร์ทอัพ</option>
                    <option>นักลงทุน / พันธมิตรธุรกิจ</option>
                    <option>บุคคลทั่วไป / ผู้เข้าชมงาน</option>
                  </select>
                  <span className="input-suffix"><Icon.ChevronDown /></span>
                </div>
                <div className="hint">เลือกประเภทผู้ใช้งานที่ตรงกับบทบาทของคุณ</div>
              </div>

              <div className="row-2">
                <div className="field">
                  <label>อีเมล <span className="req">*</span></label>
                  <div className="input-wrap">
                    <span className="input-icon"><Icon.Mail /></span>
                    <input type="email" placeholder="name@example.com" />
                  </div>
                </div>
                <div className="field">
                  <label>รหัสผ่าน <span className="req">*</span></label>
                  <div className="input-wrap">
                    <span className="input-icon"><Icon.Lock /></span>
                    <input type={show ? 'text' : 'password'} placeholder="อย่างน้อย 8 ตัวอักษร" />
                    <span className="input-suffix" onClick={() => setShow(!show)}><Icon.Eye /></span>
                  </div>
                  <div className="hint">แนะนำ: ใช้ตัวอักษรพิมพ์ใหญ่ พิมพ์เล็ก ตัวเลข และอักขระพิเศษ</div>
                </div>
              </div>

              <div className="field">
                <label>ยืนยันรหัสผ่าน <span className="req">*</span></label>
                <div className="input-wrap">
                  <span className="input-icon"><Icon.Lock /></span>
                  <input type={show2 ? 'text' : 'password'} placeholder="ยืนยันรหัสผ่านอีกครั้ง" />
                  <span className="input-suffix" onClick={() => setShow2(!show2)}><Icon.Eye /></span>
                </div>
              </div>

              <div className="row-2">
                <div className="field">
                  <label>หมายเลขโทรศัพท์ <span className="req">*</span></label>
                  <div className="input-wrap">
                    <span className="input-icon"><Icon.Phone /></span>
                    <input type="tel" placeholder="081 234 5678" />
                  </div>
                </div>
                <div className="field">
                  <label>ชื่อ-นามสกุล <span className="req">*</span></label>
                  <div className="input-wrap">
                    <span className="input-icon"><Icon.User /></span>
                    <input type="text" placeholder="ระบุชื่อ-นามสกุล" />
                  </div>
                </div>
              </div>

              <div className="check-row">
                <input type="checkbox" id="agree" />
                <label htmlFor="agree">
                  ฉันได้อ่านและยอมรับ <a>ข้อกำหนดการใช้งาน</a> และ <a>นโยบายความเป็นส่วนตัว</a>
                </label>
              </div>

              <button className="btn btn-primary" style={{width:'100%'}} onClick={() => setStep(2)}>ถัดไป</button>
            </>
          )}

          {step === 2 && (
            <>
              <div className="row-2">
                <div className="field">
                  <label>หน่วยงาน / องค์กร <span className="req">*</span></label>
                  <div className="input-wrap no-icon">
                    <input style={{paddingLeft: 14}} placeholder="ชื่อหน่วยงาน" />
                  </div>
                </div>
                <div className="field">
                  <label>ตำแหน่ง</label>
                  <div className="input-wrap no-icon">
                    <input style={{paddingLeft: 14}} placeholder="ตำแหน่งหรืออาชีพ" />
                  </div>
                </div>
              </div>
              <div className="field">
                <label>ORCID ID (ถ้ามี)</label>
                <div className="input-wrap no-icon">
                  <input style={{paddingLeft: 14}} placeholder="0000-0000-0000-0000" />
                </div>
                <div className="hint">ระบุ ORCID เพื่อเชื่อมโยงผลงานวิจัยของคุณโดยอัตโนมัติ</div>
              </div>
              <div className="field">
                <label>ความสนใจหลัก <span className="req">*</span></label>
                <div style={{display:'flex', flexWrap:'wrap', gap:8}}>
                  {['Agri-Tech', 'Food-Tech', 'Env-Tech', 'Bio-Tech', 'Deep Tech', 'Social Impact'].map(t => (
                    <span key={t} style={{
                      padding:'7px 14px', border:'1px solid var(--line-2)', borderRadius:999,
                      fontSize:13, cursor:'pointer', color:'var(--ink-2)'
                    }}>{t}</span>
                  ))}
                </div>
              </div>
              <div style={{display:'flex', gap:12, marginTop:18}}>
                <button className="btn btn-outline" style={{flex:1}} onClick={() => setStep(1)}>ย้อนกลับ</button>
                <button className="btn btn-primary" style={{flex:2}} onClick={() => setStep(3)}>ถัดไป</button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div style={{textAlign:'center', padding:'8px 0 16px'}}>
                <div style={{
                  width: 64, height: 64, borderRadius:'50%',
                  background: 'var(--inno-green-soft)', color: 'var(--ku-green)',
                  display:'inline-grid', placeItems:'center', marginBottom: 14,
                }}>
                  <Icon.Mail size={28} />
                </div>
                <div style={{fontSize: 15, color: 'var(--ink)', fontWeight: 600, marginBottom: 4}}>
                  ตรวจสอบอีเมลของคุณ
                </div>
                <div style={{fontSize: 13, color: 'var(--ink-3)', maxWidth: 360, margin: '0 auto'}}>
                  เราได้ส่งรหัส OTP 6 หลักไปยังอีเมลของคุณ<br/>โปรดกรอกรหัสเพื่อยืนยันตัวตน
                </div>
              </div>
              <div className="field">
                <label>รหัส OTP <span className="req">*</span></label>
                <div style={{display:'flex', gap:8, justifyContent:'center'}}>
                  {[0,1,2,3,4,5].map(i => (
                    <input key={i} maxLength={1} style={{
                      width:48, height:56, textAlign:'center', fontSize:22, fontWeight:600,
                      padding:0, border:'1.5px solid var(--line-2)', borderRadius: 10,
                    }} />
                  ))}
                </div>
                <div className="hint text-center" style={{textAlign:'center', marginTop: 14}}>
                  ไม่ได้รับรหัส? <a style={{color:'var(--ku-green)', fontWeight:500, cursor:'pointer'}}>ส่งใหม่ใน 0:58</a>
                </div>
              </div>
              <div style={{display:'flex', gap:12, marginTop:18}}>
                <button className="btn btn-outline" style={{flex:1}} onClick={() => setStep(2)}>ย้อนกลับ</button>
                <button className="btn btn-primary" style={{flex:2}} onClick={onLogin}>ยืนยันและสร้างบัญชี</button>
              </div>
            </>
          )}

          <div className="or-divider">หรือสมัครด้วยบัญชีอื่น</div>
          <div className="sso-row">
            <button className="sso-btn">
              <svg width="16" height="16" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6 8-11.3 8a12 12 0 1 1 0-24c3 0 5.7 1.1 7.8 3l5.7-5.7C33.9 6.1 29.2 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.2-.1-2.4-.4-3.5"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C33.9 6.1 29.2 4 24 4 16.3 4 9.7 8.4 6.3 14.7"/><path fill="#4CAF50" d="M24 44c5.2 0 9.8-2 13.3-5.2l-6.2-5.2c-2 1.5-4.5 2.4-7.2 2.4-5.2 0-9.6-3.3-11.2-8l-6.5 5C9.5 39.5 16.2 44 24 44"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3a12 12 0 0 1-4.1 5.6l6.2 5.2C40.6 36 44 30.5 44 24c0-1.2-.1-2.4-.4-3.5"/></svg>
              สมัครด้วย Google
            </button>
            <button className="sso-btn">
              <svg width="16" height="16" viewBox="0 0 24 24"><rect width="10" height="10" x="2" y="2" fill="#F25022"/><rect width="10" height="10" x="12" y="2" fill="#7FBA00"/><rect width="10" height="10" x="2" y="12" fill="#00A4EF"/><rect width="10" height="10" x="12" y="12" fill="#FFB900"/></svg>
              สมัครด้วย Microsoft
            </button>
          </div>

          <div className="bottom-line">
            มีบัญชีอยู่แล้ว? <a onClick={() => setScreen('login')}>เข้าสู่ระบบ</a>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { LoginPage, RegisterPage });
