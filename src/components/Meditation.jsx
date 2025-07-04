import React, { lazy, Suspense, useRef } from 'react';
import { useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Meditation.css';


// Lazy load Particles
const Particles = lazy(() => import('./Particles'));

const Meditation = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section className="meditation-section" ref={sectionRef}>
      {isInView && (
        <Suspense fallback={null}>
          <Particles
            particleColors={['#cdd0fc', '#a9b0ff']}
            particleCount={200}
            particleSpread={11}
            speed={0.03}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={false}
          />
        </Suspense>
      )}
      <div className="meditation-content">
        <h2>CalmSpace</h2>
        <p>Find calm, breathe deep, and center your mind.</p>
        <a href="/relax-zone.html" className="meditate-btn">Begin Meditation</a>
      </div>
    </section>
  );
};

export default Meditation;
