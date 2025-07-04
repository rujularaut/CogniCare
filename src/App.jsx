import React, { useRef, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useInView } from 'framer-motion';
import { FaHome, FaBrain, FaSpa, FaChartBar } from 'react-icons/fa';

import './App.css';

// Lazily loaded components (code splitting)
const Welcome = lazy(() => import('./components/Welcome'));
const Meditation = lazy(() => import('./components/Meditation'));
//const Signup = lazy(() => import('./components/Signup'));
const Login = lazy(() => import('./components/Login'));
const SignupStepper = lazy(() => import('./components/SignupStepper'));
const MeditationRoom = lazy(() => import('./components/MeditationRoom'));
const MindPlay = lazy(() => import('./components/MindPlay'));
const Progress = lazy(() => import('./components/Progress'));
const RecallGame = lazy(() => import('./components/RecallGame'));
const ReactionGame = lazy(() => import('./components/ReactionGame'));

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
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
  const location = useLocation();
  const hash = location.hash;

  const isProgressInView = useInView(progressRef, { amount: 0.3 });
  const isWelcomeInView = useInView(welcomeRef, { amount: 0.6 });
  const isMindplayInView = useInView(mindplayRef, { amount: 0.3 });
  const isCalmspaceInView = useInView(calmspaceRef, { amount: 0.3 });

  const isOnHomePage = location.pathname === '/';
  const isGameRoute = location.pathname === '/recall' || location.pathname === '/reaction';

  const showFloatingNav = isOnHomePage &&
    !isWelcomeInView &&
    (isMindplayInView || isCalmspaceInView || isProgressInView ||
      hash === '#mindplay' || hash === '#calmspace-section' || hash === '#myprogress');

  useEffect(() => {
    const shouldLockScroll = ['/meditationroom', '/reaction', '/recall'].includes(location.pathname);
    document.body.style.overflow = shouldLockScroll ? 'hidden' : 'auto';
    document.documentElement.style.overflow = shouldLockScroll ? 'hidden' : 'auto';
  }, [location.pathname]);

  useEffect(() => {
    const unlockScroll = () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
    window.addEventListener('reactionQuit', unlockScroll);
    window.addEventListener('meditationQuit', unlockScroll);
    return () => {
      window.removeEventListener('reactionQuit', unlockScroll);
      window.removeEventListener('meditationQuit', unlockScroll);
    };
  }, []);

  return (
    <>
      <ScrollToSection />

      {!isGameRoute && showFloatingNav && (
        <div className="floating-nav-vertical">
          <a href="/" data-tooltip="Home"><FaHome /></a>
          <a href="#mindplay" data-tooltip="MindPlay"><FaBrain /></a>
          <a href="#calmspace-section" data-tooltip="CalmSpace"><FaSpa /></a>
          <a href="#myprogress" data-tooltip="Progress"><FaChartBar /></a>
        </div>
      )}

      {!isGameRoute && (
        <nav>
          <div className="logo">CogniCare</div>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#mindplay">MindPlay</a></li>
            <li><a href="#calmspace-section">CalmSpace</a></li>
            <li><a href="#myprogress">MyProgress</a></li>
          </ul>
        </nav>
      )}

      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Routes>
          <Route path="/" element={
            <>
              {!isGameRoute && (
                <header>
                  <h1>Welcome to CogniCare</h1>
                  <p>Your mental health companion</p>
                </header>
              )}
              <div ref={welcomeRef}><Welcome /></div>
              <div ref={mindplayRef} id="mindplay"><MindPlay /></div>
              <div ref={calmspaceRef} id="calmspace-section"><Meditation /></div>
              <div ref={progressRef} id="myprogress"><Progress /></div>
            </>
          } />
          <Route path="/signup" element={<SignupStepper />} />
          <Route path="/login" element={<Login />} />
          <Route path="/meditationroom" element={<MeditationRoom />} />
          <Route path="/recall" element={<RecallGame />} />
          <Route path="/reaction" element={<ReactionGame />} />
        </Routes>
      </Suspense>
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
