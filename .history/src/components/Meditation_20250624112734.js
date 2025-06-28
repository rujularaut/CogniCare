import React from 'react';
import Particles from './Particles';
import './Meditation.css';

const Meditation = () => {
  return (
    <section className="meditation-section">
      <Particles
        particleColors={['#ffffff', '#a9b0ff']}
        particleCount={180}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={false}
        alphaParticles={false}
      />
      <div className="meditation-content">
        <h2>Meditation Space</h2>
        <p>Find calm, breathe deep, and center your mind.</p>
        <button className="meditate-btn">Begin Meditation</button>
      </div>
    </section>
  );
};

export default Meditation;
