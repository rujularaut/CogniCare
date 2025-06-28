import React from 'react';
import './Progress.css';
import welcomeImg from '../assets/welcome.png';
import { Link } from 'react-router-dom'; 

const Progress = () => {
  return (
    <section className="MyProgress">
      <div className="progress-content">
        <img src={welcomeImg} alt="Welcome Illustration" className="welcome-img" />
      </div>
    </section>
  );
};

export default Progress;
