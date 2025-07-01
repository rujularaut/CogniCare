import React from 'react';
import ChromaGrid from './ChromaGrid';
import calmImg from '../assets/calm.png';
import breatheImg from '../assets/breathe.png';


const items = [
  {
    image: calmImg,
    title: 'Cosmic Touch',
    subtitle: 'Move your cursor. Paint with light. Flow with your energy',
    borderColor: '#8B5CF6',
    gradient: 'linear-gradient(145deg, #8B5CF6, #000)',
    url: '/splash'
  },
  {
    image: breatheImg,
    title: 'Meditation Room',
    subtitle: 'Choose your sound. Set your space. Begin your inner journey',
    borderColor: '#10B981',
    gradient: 'linear-gradient(145deg, #10B981, #000)',
    url: '/blank'
  }
];


const MeditationOptions = () => {
  return (
    <div style={{ height: '82vh', background: '#1b1b2f', paddingTop: '80px' }}>
      <ChromaGrid
        items={items}
        radius={300}
        damping={0.45}
        fadeOut={0.6}
        ease="power3.out"
      />
    </div>
  );
};

export default MeditationOptions;
