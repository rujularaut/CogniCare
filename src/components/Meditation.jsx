import React from 'react';
import Particles from './Particles';
import './Meditation.css';
import { Link } from 'react-router-dom';
import './MeditationRoom.css';


const Meditation = () => {
  return (
    <section className="meditation-section">
      <Particles
        particleColors={['#cdd0fc', '#a9b0ff']}
        particleCount={200}
        particleSpread={11}
        speed={0.03}
        particleBaseSize={100}
        moveParticlesOnHover={false}
        alphaParticles={false}
      />
      <div className="meditation-content">
        <h2>CalmSpace</h2>
        <p>Find calm, breathe deep, and center your mind.</p>
        <Link to="/meditation" className="meditate-btn">Begin Meditation</Link>
      </div>
    </section>
  );
};

export default Meditation;

