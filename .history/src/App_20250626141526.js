import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

import './App.css';
import Welcome from './components/Welcome';
import Meditation from './components/Meditation';
import Signup from './components/Signup';
import Login from './components/Login';
import SignupStepper from './components/SignupStepper';
import MeditationRoom from './components/MeditationRoom';
import MindPlay from './components/MindPlay';
import Dock from './components/Dock';

import { VscHome, VscArchive, VscAccount, VscSettingsGear } from 'react-icons/vsc';

function ScrollToSection() {
  const location = useLocation();

  React.useEffect(() => {
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
  const { ref: mindplayRef, inView: mindplayInView } = useInView({ threshold: 0.4 });
  const { ref: calmspaceRef, inView: calmspaceInView } = useInView({ threshold: 0.4 });

  const showDock = mindplayInView || calmspaceInView;

  const dockItems = [
    {
      icon: <VscHome size={18} />,
      label: 'Home',
      onClick: () => window.location.href = '/'
    },
    {
      icon: <VscArchive size={18} />,
      label: 'MindPlay',
      onClick: () => window.location.href = '/#mindplay'
    },
    {
      icon: <VscAccount size={18} />,
      label: 'Profile',
      onClick: () => alert('Profile!')
    },
    {
      icon: <VscSettingsGear size={18} />,
      label: 'Settings',
      onClick: () => alert('Settings!')
    }
  ];

  return (
    <>
      <ScrollToSection />

      {showDock && (
        <Dock
          items={dockItems}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
        />
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
