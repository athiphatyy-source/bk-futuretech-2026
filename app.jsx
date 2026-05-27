/* eslint-disable no-undef */
// Root app — screen router + tweaks panel

function App() {
  const [screen, setScreen] = useState('home');
  const [adminScreen, setAdminScreen] = useState('dash');
  const [isAuthed, setIsAuthed] = useState(false);

  // Tweaks
  const t = useTweaks(/*EDITMODE-BEGIN*/{
    "primaryHue": "green",
    "showCircuit": true,
    "denseHero": false,
    "navStyle": "centered"
  }/*EDITMODE-END*/);

  // Apply hue tweak via CSS vars
  useEffect(() => {
    const root = document.documentElement;
    if (t.primaryHue === 'blue') {
      root.style.setProperty('--ku-green', '#0057B8');
      root.style.setProperty('--inno-green', '#00B8D9');
      root.style.setProperty('--inno-green-soft', '#E0F4F8');
      root.style.setProperty('--gradient-brand', 'linear-gradient(135deg, #0057B8 0%, #00B8D9 45%, #00C26E 100%)');
    } else if (t.primaryHue === 'gold') {
      root.style.setProperty('--ku-green', '#A07700');
      root.style.setProperty('--inno-green', '#F4B400');
      root.style.setProperty('--inno-green-soft', '#FBF1D9');
      root.style.setProperty('--gradient-brand', 'linear-gradient(135deg, #A07700 0%, #F4B400 45%, #00C26E 100%)');
    } else {
      root.style.setProperty('--ku-green', '#006C4F');
      root.style.setProperty('--inno-green', '#00C26E');
      root.style.setProperty('--inno-green-soft', '#E6F8EF');
      root.style.setProperty('--gradient-brand', 'linear-gradient(135deg, #006C4F 0%, #00C26E 45%, #0057B8 100%)');
    }
  }, [t.primaryHue]);

  const showTopNav = !['admin', 'login', 'register'].includes(screen);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [screen, adminScreen]);

  const onLogin = () => {
    setIsAuthed(true);
    setScreen('admin');
    setAdminScreen('dash');
  };
  const signOut = () => {
    setIsAuthed(false);
    setScreen('home');
  };

  // Admin sub-screen renderer
  const renderAdmin = () => {
    const labels = {
      dash: '04 Admin · Dashboard',
      sub: '04 Admin · Submissions',
      review: '04 Admin · Review',
      inno: '04 Admin · Innovations',
      biz: '04 Admin · Business Matching',
      usr: '04 Admin · Users',
      org: '04 Admin · Organizations',
      evt: '04 Admin · Events',
      news: '04 Admin · News',
      know: '04 Admin · Knowledge',
      rpt: '04 Admin · Reports',
      log: '04 Admin · Audit Logs',
      set: '04 Admin · Settings',
    };
    return (
      <AdminLayout
        active={adminScreen}
        setActive={setAdminScreen}
        setScreen={setScreen}
        signOut={signOut}
        label={labels[adminScreen] || '04 Admin'}
      >
        {adminScreen === 'dash' && <AdminDashboardContent />}
        {adminScreen === 'sub' && <AdminSubmissions />}
        {adminScreen === 'review' && <AdminReview />}
        {adminScreen === 'inno' && <AdminInnovations />}
        {adminScreen === 'biz' && <AdminBizMatch />}
        {adminScreen === 'usr' && <AdminUsers />}
        {adminScreen === 'org' && <AdminOrgs />}
        {adminScreen === 'evt' && <AdminEvents />}
        {adminScreen === 'news' && <AdminNews />}
        {adminScreen === 'know' && <AdminKnowledge />}
        {adminScreen === 'rpt' && <AdminReports />}
        {adminScreen === 'log' && <AdminAuditLogs />}
        {adminScreen === 'set' && <AdminSettings />}
      </AdminLayout>
    );
  };

  return (
    <div className="app">
      {showTopNav && <TopNav screen={screen} setScreen={setScreen} isAuthed={isAuthed} signOut={signOut} />}

      {screen === 'home' && <HomePage setScreen={setScreen} />}
      {screen === 'about' && <AboutPage setScreen={setScreen} />}
      {screen === 'login' && <LoginPage setScreen={setScreen} onLogin={onLogin} />}
      {screen === 'register' && <RegisterPage setScreen={setScreen} onLogin={onLogin} />}
      {screen === 'catalogue' && <CataloguePage setScreen={setScreen} />}
      {screen === 'detail' && <DetailPage setScreen={setScreen} />}
      {screen === 'submit' && <SubmitPage setScreen={setScreen} />}
      {screen === 'knowledge' && <KnowledgePage setScreen={setScreen} />}
      {screen === 'matching' && <MatchingPage setScreen={setScreen} />}
      {screen === 'events' && <EventsPage setScreen={setScreen} />}
      {screen === 'pitching' && <PitchingPage setScreen={setScreen} />}
      {screen === 'news' && <NewsPage setScreen={setScreen} />}
      {screen === 'downloads' && <DownloadsPage setScreen={setScreen} />}
      {screen === 'contact' && <ContactPage setScreen={setScreen} />}
      {screen === 'account' && <AccountPage setScreen={setScreen} />}
      {screen === 'admin' && renderAdmin()}

      <ScreenJumper screen={screen} setScreen={setScreen} adminScreen={adminScreen} setAdminScreen={setAdminScreen} />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Visual">
          <TweakRadio
            label="Primary hue"
            value={t.primaryHue}
            options={[
              { value: 'green', label: 'Green' },
              { value: 'blue', label: 'Blue' },
              { value: 'gold', label: 'Gold' },
            ]}
            onChange={v => t.set('primaryHue', v)}
          />
        </TweakSection>
        <TweakSection title="User Portal">
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap: 6}}>
            {[
              { id:'home', l:'Home' },
              { id:'about', l:'About' },
              { id:'catalogue', l:'Catalogue' },
              { id:'detail', l:'Detail' },
              { id:'submit', l:'Submit' },
              { id:'knowledge', l:'Knowledge' },
              { id:'matching', l:'Matching' },
              { id:'events', l:'Events' },
              { id:'pitching', l:'Pitching' },
              { id:'news', l:'News' },
              { id:'downloads', l:'Downloads' },
              { id:'contact', l:'Contact' },
              { id:'account', l:'My Account' },
              { id:'login', l:'Login' },
              { id:'register', l:'Register' },
            ].map(s => (
              <button key={s.id} className={`btn btn-sm ${screen===s.id ? 'btn-solid-green' : 'btn-outline'}`} onClick={() => setScreen(s.id)} style={{padding:'5px 8px', fontSize: 11.5}}>
                {s.l}
              </button>
            ))}
          </div>
        </TweakSection>
        <TweakSection title="Admin Panel">
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap: 6}}>
            {[
              { id:'dash', l:'Dashboard' },
              { id:'sub', l:'Submissions' },
              { id:'review', l:'Review' },
              { id:'inno', l:'Innovations' },
              { id:'biz', l:'Matching' },
              { id:'usr', l:'Users' },
              { id:'org', l:'Orgs' },
              { id:'evt', l:'Events' },
              { id:'news', l:'News' },
              { id:'know', l:'Knowledge' },
              { id:'rpt', l:'Reports' },
              { id:'log', l:'Audit Logs' },
              { id:'set', l:'Settings' },
            ].map(s => (
              <button key={s.id}
                className={`btn btn-sm ${screen==='admin' && adminScreen===s.id ? 'btn-solid-green' : 'btn-outline'}`}
                onClick={() => { setScreen('admin'); setAdminScreen(s.id); }}
                style={{padding:'5px 8px', fontSize: 11.5}}
              >{s.l}</button>
            ))}
          </div>
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

// ============ Floating screen-jumper FAB ============
function ScreenJumper({ screen, setScreen, adminScreen, setAdminScreen }) {
  const [open, setOpen] = useState(false);
  const sections = [
    {
      title: 'USER PORTAL',
      screens: [
        { id:'home', l:'หน้าแรก' },
        { id:'about', l:'เกี่ยวกับงาน' },
        { id:'catalogue', l:'Innovation Catalogue' },
        { id:'detail', l:'Innovation Detail' },
        { id:'submit', l:'Submit Innovation' },
        { id:'knowledge', l:'TRL/SRL Knowledge' },
        { id:'matching', l:'Business Matching' },
        { id:'events', l:'Events & Schedule' },
        { id:'pitching', l:'Pitching Application' },
        { id:'news', l:'News & Media' },
        { id:'downloads', l:'Downloads' },
        { id:'contact', l:'Contact' },
        { id:'account', l:'My Account' },
      ],
    },
    {
      title: 'AUTH',
      screens: [
        { id:'login', l:'Login' },
        { id:'register', l:'Register' },
      ],
    },
    {
      title: 'ADMIN PANEL',
      admin: true,
      screens: [
        { id:'dash', l:'Dashboard' },
        { id:'sub', l:'Submissions' },
        { id:'review', l:'Review / Evaluate' },
        { id:'inno', l:'Innovations' },
        { id:'biz', l:'Business Matching' },
        { id:'usr', l:'Users' },
        { id:'org', l:'Organizations' },
        { id:'evt', l:'Events' },
        { id:'news', l:'News & Announcements' },
        { id:'know', l:'Knowledge Center' },
        { id:'rpt', l:'Reports' },
        { id:'log', l:'Audit Logs' },
        { id:'set', l:'Settings' },
      ],
    },
  ];

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        style={{
          position:'fixed', bottom: 20, left: 20, zIndex: 100,
          width: 48, height: 48, borderRadius:'50%',
          background:'var(--ku-green)', color:'#fff',
          boxShadow:'0 8px 22px rgba(0,108,79,0.4)',
          display:'grid', placeItems:'center', cursor:'pointer',
        }}
        title="Jump to screen"
      >
        <Icon.Stack size={20} />
      </button>
      {open && (
        <div style={{
          position:'fixed', bottom: 80, left: 20, zIndex: 100,
          background:'#fff', borderRadius: 14, boxShadow:'0 18px 40px rgba(15,34,51,0.18)',
          padding: 8, width: 280, border: '1px solid var(--line)',
          maxHeight: '80vh', overflowY: 'auto',
        }}>
          {sections.map((sec, si) => (
            <div key={si}>
              <div style={{fontSize:10.5, fontWeight:700, color:'var(--ink-4)', letterSpacing:1.5, padding: '10px 10px 4px'}}>{sec.title}</div>
              {sec.screens.map(s => {
                const active = sec.admin
                  ? (screen === 'admin' && adminScreen === s.id)
                  : (screen === s.id);
                return (
                  <div key={s.id}
                    onClick={() => {
                      if (sec.admin) { setScreen('admin'); setAdminScreen(s.id); }
                      else setScreen(s.id);
                      setOpen(false);
                    }}
                    style={{
                      display:'flex', alignItems:'center', gap:10,
                      padding:'7px 10px', borderRadius:6, cursor:'pointer',
                      fontSize:12.5, color: active ? 'var(--ku-green)' : 'var(--ink-2)',
                      background: active ? 'var(--inno-green-soft)' : 'transparent',
                      fontWeight: active ? 500 : 400,
                    }}
                  >
                    {s.l}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
