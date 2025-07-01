import { Link } from 'react-router-dom'; 
import React from 'react';
import './MeditationRoom.css';

const MeditationRoom = () => {
  return (
    <div className="meditation-room">
      <Link to="/#calmspace-section" className="back-btn-small">← Back</Link>
    </div>
  );
};

export default MeditationRoom;
