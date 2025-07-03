import React, { useEffect } from 'react';
import './MeditationRoom.css';
import { Link } from 'react-router-dom';

const MeditationRoom = () => {

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      // Dispatch quit event
      window.parent.dispatchEvent(new Event("meditationQuit"));

      // Restore scroll
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="meditation-room">
      <Link to="/#calmspace-section" className="back-btn-small">← Back</Link>
    </div>
  );
};

export default MeditationRoom;
