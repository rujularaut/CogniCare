import React, { useEffect, useState } from 'react';
import './Progress.css';
import ProgressChart from './ProgressChart';

const Progress = () => {
  const [progressData, setProgressData] = useState([]);

  useEffect(() => {
    const email = localStorage.getItem('userEmail'); // Make sure this matches your login saving logic
    if (!email) return;

    fetch(`http://localhost:5000/api/progress?email=${email}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setProgressData(data.data); // Use the backend chart data
        } else {
          console.error('Error from backend:', data.error);
        }
      })
      .catch(err => console.error('Network error:', err));
  }, []);

  return (
    <section className="progress-section" id="myprogress">
      <div className="progress-box">
        <div className="progress-header">
          <h2>My Progress</h2>
        </div>

        <div className="progress-content">
          <div className="main-area">
            <ProgressChart data={progressData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;
