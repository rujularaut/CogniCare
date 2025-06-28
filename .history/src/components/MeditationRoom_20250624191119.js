import { Link } from 'react-router-dom'; 
import React from 'react';
import SplashCursor from './SplashCursor';
import './MeditationRoom.css';


const MeditationRoom = () => {
  return (
    <div className="meditation-room">
      <SplashCursor />
      
      {/* Add your relaxing UI or animations here */}
    </div>
  );
};

export default MeditationRoom;
