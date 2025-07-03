import React, { useEffect, useState } from 'react';
import './Progress.css';
import progress from '../assets/progress.png';

const Progress = () => {
  const [progressData, setProgressData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    if (!userEmail) {
      setLoading(false);
      return;
    }
    setEmail(userEmail);

    const fetchProgress = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/progress', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: userEmail }),
        });

        const data = await res.json();
        if (data.success) setProgressData(data);
      } catch (error) {
        console.error('Error fetching progress:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProgress();
  }, []);

  const isLocked = !email || loading || !progressData;

  return (
    <div className="progress-wrapper">
      {isLocked && (
        <div className="progress-lock">
          <img src={progress} alt="lock" />
          <p>Track your journey — sign in!</p>
        </div>
      )}

      <div className={`progress-section ${isLocked ? 'blurred' : ''}`}>
        <div className="progress-header">
          <h2>My Progress</h2>
        </div>

        <div className="progress-content">
          <div className="left-panel">
            <div className="streak-box">
              <h3>Consistency Streak</h3>
              <div className="streak-count">{progressData?.streak || 0}</div>
              <p>{progressData?.days || 0} days active</p>
            </div>

            <div className="trend-box">
              <h3>Trend Analysis</h3>
              <p>{progressData?.trend || "You're improving steadily!"}</p>
            </div>
          </div>

          <div className="main-area">
            <div className="chart-placeholder">
              <h4>Progress Chart</h4>
              <p>Click below to view full progress chart</p>
              <button className="more-btn">More Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
