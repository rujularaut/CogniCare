import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useInView } from 'framer-motion';
import { FaHome, FaBrain, FaSpa, FaChartBar, FaEnvelope } from 'react-icons/fa';
import RecallGame from './components/RecallGame';
import ReactionGame from './components/ReactionGame';
import Progress from './components/Progress';

import './App.css';
import Welcome from './components/Welcome';
import Meditation from './components/Meditation';
import Signup from './components/Signup';
import Login from './components/Login';
import SignupStepper from './components/SignupStepper';
import MeditationRoom from './components/MeditationRoom';
import MindPlay from './components/MindPlay';

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
const isWelcomeInView = useInView(welcomeRef, { amount: 0.6 });

const isMindplayInView = useInView(mindplayRef, { amount: 0.3, once: false });
const isCalmspaceInView = useInView(calmspaceRef, { amount: 0.3, once: false });

const location = useLocation();
const hash = location.hash;
const isOnHomePage = location.pathname === '/';
const showFloatingNav = isOnHomePage &&
  !isWelcomeInView &&
  (isMindplayInView || isCalmspaceInView || hash === '#mindplay' || hash === '#calmspace-section' || hash === '#myprogress');


  return (
    <>
      <ScrollToSection />

      {/* 🌟 Floating nav shown if MindPlay OR CalmSpace is in view */}
      {showFloatingNav && (
  <div className="floating-nav-vertical">
  <a href="/" data-tooltip="Home"><FaHome /></a>
  <a href="#mindplay" data-tooltip="MindPlay"><FaBrain /></a>
  <a href="#calmspace-section" data-tooltip="CalmSpace"><FaSpa /></a>
  <a href="#" data-tooltip="Progress"><FaChartBar /></a>
  <a href="#" data-tooltip="Contact"><FaEnvelope /></a>
</div>

)}


      <nav>
        <div className="logo">CogniCare</div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#mindplay">MindPlay</a></li>
          <li><a href="#calmspace-section">CalmSpace</a></li>
          <li><a href="#myprogress">MyProgress</a></li>
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
            <div ref={mindplayRef} id="mindplay">
              <MindPlay />
            </div>
            <div ref={calmspaceRef} id="calmspace-section">
              <Meditation />
            </div>
            <div id="myprogress">
              <Progress />
</div>

          </>
        } />
        <Route path="/signup" element={<SignupStepper />} />
        <Route path="/login" element={<Login />} />
        <Route path="/meditationroom" element={<MeditationRoom />} />
        <Route path="/recall" element={<RecallGame />} />
        <Route path="/reaction" element={<ReactionGame />} />
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
