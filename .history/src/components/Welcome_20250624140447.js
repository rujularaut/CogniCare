import React from 'react';
import './Welcome.css';
import welcomeImg from '../assets/welcome.png';
import { Link } from 'react-router-dom'; // ✅ Import Link

const Welcome = () => {
  return (
    <section className="welcome">
      <div className="welcome-content">
        <img src={welcomeImg} alt="Welcome Illustration" className="welcome-img" />
        <Link to="/login" className="start-btn">Get Started</Link> {/* ✅ Fixed */}
      </div>
    </section>
  );
};

export default Welcome;
