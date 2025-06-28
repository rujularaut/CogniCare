import React from 'react';
import './Progress.css';

const Progress = () => {
  return (
    <section className="progress-section" id="myprogress">
      <h2>My Progress</h2>
      <p>Track your journey</p>
      <div className="progress-box">
        <div className="progress-label">MyProgress</div>
        {/* You can add other content here later */}
      </div>
    </section>
  );
};

export default Progress;
