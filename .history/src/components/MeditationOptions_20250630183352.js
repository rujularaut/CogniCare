import React from 'react';
import ChromaGrid from './ChromaGrid';

const items = [
  {
    image: '/assets/calm.png', // replace with your images
    title: 'Guided Meditation',
    subtitle: 'Relax your mind',
    handle: '@breathe',
    borderColor: '#8B5CF6',
    gradient: 'linear-gradient(145deg, #8B5CF6, #000)',
    url: '/splash' // go to splash screen
  },
  {
    image: '/assets/focus2.png',
    title: 'Nature Sounds',
    subtitle: 'Calming audio',
    handle: '@nature',
    borderColor: '#10B981',
    gradient: 'linear-gradient(145deg, #10B981, #000)',
    url: '/blank' // or another route
  }
];

const MeditationOptions = () => {
  return (
    <div style={{ height: '100vh', background: '#1b1b2f', paddingTop: '80px' }}>
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
