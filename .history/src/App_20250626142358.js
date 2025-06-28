function AppContent() {
  const location = useLocation();
  const showFloatingNav = location.hash === '#mindplay';

  return (
    <>
      <ScrollToSection />

      {/* ✅ Floating mini-nav visible only on #mindplay */}
      {showFloatingNav && (
        <div className="floating-nav">
          <a href="#calmspace-section">CalmSpace</a>
          <a href="/">Home</a>
          <a href="#mindplay">Top</a>
        </div>
      )}

      <nav>
        <div className="logo">CogniCare</div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#mindplay">MindPlay</a></li>
          <li><a href="#calmspace-section">CalmSpace</a></li>
          <li><a href="#">MyProgress</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={
          <>
            <header>
              <h1>Welcome to CogniCare</h1>
              <p>Your mental health companion</p>
            </header>
            <Welcome />
            <div id="mindplay">
              <MindPlay />
            </div>
            <div id="calmspace-section">
              <Meditation />
            </div>
          </>
        } />
        <Route path="/signup" element={<SignupStepper />} />
        <Route path="/login" element={<Login />} />
        <Route path="/meditationroom" element={<MeditationRoom />} />
      </Routes>
    </>
  );
}
