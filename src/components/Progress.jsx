import React, { useEffect, useState } from 'react';
import './Progress.css';
import ProgressChart from './ProgressChart';

const Progress = () => {
  const [progressData, setProgressData] = useState([]);
  const [trendMessage, setTrendMessage] = useState(null);

  useEffect(() => {
    const email = localStorage.getItem('userEmail');
    if (!email) return;

    fetch(`http://localhost:5000/api/progress?email=${email}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setProgressData(data.data);

          // Calculate average score per week (excluding "week" key)
          const calculateWeekAverage = (weekObj) => {
            const scores = Object.entries(weekObj)
              .filter(([key]) => key !== 'week')
              .map(([, value]) => value);
            const total = scores.reduce((sum, score) => sum + score, 0);
            return scores.length > 0 ? total / scores.length : 0;
          };

          if (data.data.length >= 2) {
            const lastWeekAvg = calculateWeekAverage(data.data[data.data.length - 1]);
            const prevWeekAvg = calculateWeekAverage(data.data[data.data.length - 2]);

            if (lastWeekAvg > prevWeekAvg) {
              setTrendMessage("🎯 You're improving perfectly! Keep it up!");
            } else if (lastWeekAvg < prevWeekAvg) {
              setTrendMessage("⚠️ This week's progress is less than last week. Try to focus more!");
            } else {
              setTrendMessage("📊 Your performance is consistent.");
            }
          }
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

        {trendMessage && (
          <div className="trend-message">
            {trendMessage}
          </div>
        )}
      </div>
    </section>
  );
};

export default Progress;
