import Meditation from './components/Meditation';
import React from 'react';
import './App.css';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <nav>
        <div className="logo">CogniCare</div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">MindPlay</a></li>
          <li><a href="#">CalmSpace</a></li>
          <li><a href="#">MyProgress</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <header>
        <h1>Welcome to CogniCare</h1>
        <p>Your mental health companion</p>
      </header>

      <Welcome />
      <Meditation />
    </div>
  );
}

export default App;
