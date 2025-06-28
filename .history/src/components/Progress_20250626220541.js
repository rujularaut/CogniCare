import React from 'react';
import './Progress.css';

const Progress = () => {
  return (
    <section className="progress-section" id="myprogress">
      <h2>My Progress</h2>
      <p>Track your journey</p>
      <div className="progress-box">
        <div className="left-panel">
          <div className="small-box">Box 1</div>
          <div className="small-box">Box 2</div>
        </div>
        <div className="main-area">
          {/* Optional: main progress content goes here */}
        </div>
      </div>
    </section>
  );
};

export default Progress;
