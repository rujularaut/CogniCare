import React from 'react';
import ChromaGrid from './ChromaGrid';

const items = [
  {
    image: '/assets/calm.png', // replace with your images
    title: 'Cosmic Touch',
    subtitle: 'Move your cursor. Paint with light. Flow with your energy',
    handle: none,
    borderColor: '#8B5CF6',
    gradient: 'linear-gradient(145deg, #8B5CF6, #000)',
    url: '/splash' // go to splash screen
  },
  {
    image: '/assets/breathe.png',
    title: 'Meditation Room',
    subtitle: 'Choose your sound. Set your space. Begin your inner journey',
    handle: '@nature',
    borderColor: '#10B981',
    gradient: 'linear-gradient(145deg, #10B981, #000)',
    url: '/blank' // or another route
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
