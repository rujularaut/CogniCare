import React from 'react';
import SplashCursor from './SplashCursor';
import './MeditationRoom.css';

const MeditationRoom = () => {
  return (
    <div className="meditation-room">
      <SplashCursor />
      <h1>Welcome to your meditation space 🧘‍♀️</h1>
      {/* Add your relaxing UI or animations here */}
    </div>
  );
};

export default MeditationRoom;
