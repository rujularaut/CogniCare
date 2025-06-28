import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Welcome from './components/Welcome';
import Meditation from './components/Meditation';
import Signup from './components/Signup'; 
import Login from './components/Login';
import SignupStepper from './components/SignupStepper';
import MeditationRoom from './components/MeditationRoom';

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
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

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <div className="logo">CogniCare</div>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">MindPlay</a></li>
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
                  <div id="calmspace-section">
                     <Meditation /> 
                  </div>
            </>
          } />
          <Route path="/signup" element={<SignupStepper />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/meditationroom" element={<MeditationRoom />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
