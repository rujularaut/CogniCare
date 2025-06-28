import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Welcome from './components/Welcome';
import Meditation from './components/Meditation';
import Login from './components/Login'; // Import Login

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <div className="logo">CogniCare</div>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">MindPlay</a></li>
            <li><a href="#">CalmSpace</a></li>
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
              <Meditation />
            </>
          } />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
