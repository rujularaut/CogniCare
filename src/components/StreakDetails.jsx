import React, { useEffect, useState } from 'react';
import './StreakDetails.css';

const StreakDetails = () => {
  const [streakData, setStreakData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch('/api/streak-details', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => setStreakData(data))
      .catch(err => console.error('Error fetching streak data:', err));
  }, []);

  if (!streakData) return <div>Loading streak details...</div>;

  return (
    <div className="streak-details">
      <h2>Consistency Streak</h2>
      <p>You’ve maintained a streak for <strong>{streakData.totalDays}</strong> days.</p>
      <ul>
        {streakData.history.map((entry, idx) => (
          <li key={idx}>{entry.date} - {entry.played ? '✅ Played' : '❌ Missed'}</li>
        ))}
      </ul>
    </div>
  );
};

export default StreakDetails;
