import React, { useEffect, useState } from 'react';
import './TrendAnalysis.css';

const TrendAnalysis = () => {
  const [trend, setTrend] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch('/api/trend-analysis', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => setTrend(data))
      .catch(err => console.error('Error fetching trend:', err));
  }, []);

  if (!trend) return <div>Loading trend analysis...</div>;

  return (
    <div className="trend-analysis">
      <h2>Trend Analysis</h2>
      <p>{trend.message}</p>
      <ul>
        {trend.recentChanges.map((change, index) => (
          <li key={index}>{change}</li>
        ))}
      </ul>
    </div>
  );
};

export default TrendAnalysis;
