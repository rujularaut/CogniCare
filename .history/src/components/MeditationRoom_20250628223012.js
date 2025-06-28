import { Link } from 'react-router-dom'; 
import React from 'react';
import SplashCursor from './SplashCursor';
import './MeditationRoom.css';


const MeditationRoom = () => {
  return (
    <div className="meditation-room">
      <SplashCursor />
      
      {}
    <Link to="/#calmspace-section" className="back-btn-small">← Back</Link>
    </div>
  );
};

export default MeditationRoom;
