import React from 'react';
import './Progress.css';
import progress from '../assets/progress.png';


const Progress = () => {
  return (
    <section className="progress-section" id="myprogress">
     
      <div className="progress-box">
  <img src={img} alt="Progress Background" className="progress-image" />

  <div className="progress-header">
    <h2>My Progress</h2>
  </div>

  <div className="progress-content">
    <div className="left-panel">
      {/* other content */}
    </div>
    <div className="main-area">
      {/* other content */}
    </div>
  </div>
</div>

    </section>
  );
};

export default Progress;
