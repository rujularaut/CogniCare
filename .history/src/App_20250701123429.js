import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useInView } from 'framer-motion';
import { FaHome, FaBrain, FaSpa, FaChartBar, FaEnvelope } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';

import './App.css';
import Welcome from './components/Welcome';
import Meditation from './components/Meditation';
import Signup from './components/Signup';
import Login from './components/Login';
import SignupStepper from './components/SignupStepper';
import MeditationRoom from './components/MeditationRoom';
import MindPlay from './components/MindPlay';
import Progress from './components/Progress';
import RecallGame from './components/RecallGame';
import ReactionGame from './components/ReactionGame';
import MeditationOptions from './components/MeditationOptions';
import Breathing from './components/Breathing';

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    const hasHash = location.hash;
    if (hasHash) {
      const section = document.querySelector(hasHash);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return null;
}

function AppContent() {
  const mindplayRef = useRef(null);
  const calmspaceRef = useRef(null);
  const welcomeRef = useRef(null);
  const progressRef = useRef(null);

  const isWelcomeInView = useInView(welcomeRef, { amount: 0.6 });
  const isMindplayInView = useInView(mindplayRef, { amount: 0.3 });
  const isCalmspaceInView = useInView(calmspaceRef, { amount: 0.3 });
  const isProgressInView = useInView(progressRef, { amount: 0.3 });

const [showProfileBox, setShowProfileBox] = useState(false);

  const location = useLocation();
  const hash = location.hash;
  const isOnHomePage = location.pathname === '/';

  const showFloatingNav = isOnHomePage &&
    !isWelcomeInView &&
    (isMindplayInView || isCalmspaceInView || isProgressInView ||
     hash === '#mindplay' || hash === '#calmspace-section' || hash === '#myprogress');

  return (
    <>
      <ScrollToSection />

      {/* ✅ Floating side nav — hidden during welcome */}
      {showFloatingNav && (
        <div className="floating-nav-vertical">
          <a href="/" data-tooltip="Home"><FaHome /></a>
          <a href="#mindplay" data-tooltip="MindPlay"><FaBrain /></a>
          <a href="#calmspace-section" data-tooltip="CalmSpace"><FaSpa /></a>
          <a href="#myprogress" data-tooltip="Progress"><FaChartBar /></a>
          <a href="#" data-tooltip="Contact"><FaEnvelope /></a>
        </div>
      )}

      {/* ✅ Top nav — always visible */}
      <nav>
        <div className="logo">CogniCare</div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#mindplay">MindPlay</a></li>
          <li><a href="#calmspace-section">CalmSpace</a></li>
          <li><a href="#myprogress">MyProgress</a></li>
          <li style={{ position: 'relative' }}>
  <button
    onClick={() => setShowProfileBox(prev => !prev)}
    style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff' }}
    title="Profile"
  >
    <FaUserCircle size={18} />
  </button>

  {}
  {showProfileBox && (
    <div style={{
      position: 'absolute',
      top: '30px',
      right: 0,
      backgroundColor: '#fff',
      color: '#3f1262',
      padding: '10px',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
      zIndex: 100
    }}>
      <p style={{ margin: '4px 0', fontWeight: 'bold' }}>Rujula Raut</p>
      <p style={{ margin: '4px 0', fontSize: '12px' }}>rujula@example.com</p>
      <button style={{
        marginTop: '8px',
        fontSize: '12px',
        background: '#e1c3f8',
        color: '#3f1262',
        border: 'none',
        borderRadius: '5px',
        padding: '4px 8px',
        cursor: 'pointer'
      }}>Logout</button>
    </div>
  )}
</li>

        </ul>
      </nav>

      <Routes>
        <Route path="/" element={
          <>
            <header>
              <h1>Welcome to CogniCare</h1>
              <p>Your mental health companion</p>
            </header>

            <div ref={welcomeRef}><Welcome /></div>
            <div ref={mindplayRef} id="mindplay"><MindPlay /></div>
            <div ref={calmspaceRef} id="calmspace-section"><Meditation /></div>
            <div ref={progressRef} id="myprogress"><Progress /></div>
          </>
        } />

        {/* 🔁 Auth & Games */}
        <Route path="/signup" element={<SignupStepper />} />
        <Route path="/login" element={<Login />} />
        <Route path="/meditationroom" element={<MeditationRoom />} />
        <Route path="/recall" element={<RecallGame />} />
        <Route path="/reaction" element={<ReactionGame />} />
        <Route path="/meditation" element={<MeditationOptions />} />
        <Route path="/breathing" element={<Breathing />} />
        <Route path="/meditation-options" element={<MeditationOptions />} />
        <Route path="/splash" element={<MeditationRoom />} />

      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <AppContent />
      </div>
    </Router>
  );
}

export default App;
