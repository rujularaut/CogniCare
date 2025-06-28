import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

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
  return (
    <>
      <ScrollToSection />
      const location = useLocation();
const showFloatingNav = location.hash === '#mindplay';

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
