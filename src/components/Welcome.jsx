import React from 'react';
import './Welcome.css';
import welcomeImg from '../assets/welcome.png';
import { Link } from 'react-router-dom'; 

const Welcome = () => (
  <section className="welcome">
    <div className="welcome-content">
      <img
        src={welcomeImg}
        alt="Welcome illustration"
        className="welcome-img"
        loading="lazy" // ⬅️ Improves performance
      />
      <Link to="/signup" className="start-btn">
        Get Started
      </Link>
    </div>
  </section>
);

export default Welcome;