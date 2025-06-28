import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useInView } from 'framer-motion';

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
  return (
    <>
      <ScrollToSection />

      {/*  Floating nav always visible while MindPlay is in view */}
      {isMindplayInView && (
        <div className="floating-nav">
          <a href="#mindplay">Top</a>
          <a href="/">Home</a>
          <a href="#calmspace-section">CalmSpace</a>
        
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
