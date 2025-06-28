import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useInView } from 'framer-motion';
import { FaHome, FaBrain, FaSpa, FaChartBar, FaEnvelope } from 'react-icons/fa';


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
    const fromMeditationRoom = document.referrer.includes('/meditationroom');
    const hasHash = location.hash;

    if (hasHash && fromMeditationRoom) {
      const section = document.querySelector(location.hash);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 0);
      }
    }
  }, [location]);

  return null;
}

function AppContent() {
  
  const mindplayRef = useRef(null);
  const calmspaceRef = useRef(null);

  const isMindplayInView = useInView(mindplayRef, { amount: 0.3 });
  const isCalmspaceInView = useInView(calmspaceRef, { amount: 0.3 });

const showFloatingNav = isMindplayInView || isCalmspaceInView;

  return (
    <>
      <ScrollToSection />

      {/* 🌟 Floating nav shown if MindPlay OR CalmSpace is in view */}
      {showFloatingNav && (
  <div className="floating-nav-vertical">
    <a href="/"><FaHome /> Home</a>
    <a href="#mindplay"><FaBrain /> MindPlay</a>
    <a href="#calmspace-section"><FaSpa /> CalmSpace</a>
    <a href="#"><FaChartBar /> MyProgress</a>
    <a href="#"><FaEnvelope /> Contact</a>
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
            <div ref={mindplayRef} id="mindplay">
              <MindPlay />
            </div>
            <div ref={calmspaceRef} id="calmspace-section">
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
