import React from 'react';
import './Welcome.css';
import welcomeImg from '../assets/welcome.png'; // we'll move the image here
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <section className="welcome">
      <div className="welcome-content">
        <img src={welcomeImg} alt="Welcome Illustration" className="welcome-img" />
        <a href="/login" className="start-btn">Get Started</a>
      </div>
    </section>
  );
};

export default Welcome;
