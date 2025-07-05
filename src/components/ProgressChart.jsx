import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';

const COLORS = [
  "#7b4bff", "#82ca9d", "#ff6f61", "#00bcd4", "#ff9800", "#e91e63"
];

const ProgressChart = ({ data }) => {
  // Extract unique game names (excluding "week")
  const gameNames = data.length > 0
    ? Object.keys(data[0]).filter(key => key !== "week")
    : [];

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '1000px',
        height: 'auto',
        background: '#fff',
        borderRadius: '12px',
        padding: '16px',
        boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
        margin: '0 auto',
        marginBottom: '30px',
        flexGrow: 1
      }}
    >
      <div style={{ width: '100%', height: '60vh', minHeight: '300px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 30, right: 20, left: 0, bottom: 5 }}
          >
            <CartesianGrid stroke="#ccc" strokeDasharray="4 4" />
            <XAxis dataKey="week" stroke="#333" tick={{ fontSize: 12 }} />
            <YAxis stroke="#333" tick={{ fontSize: 12 }} />
            <Tooltip contentStyle={{
              backgroundColor: '#f4f4f4',
              color: '#000',
              borderRadius: '8px',
              fontSize: '14px'
            }} />
            <Legend verticalAlign="top" height={36} wrapperStyle={{ fontSize: '14px' }} />
            {gameNames.map((game, index) => (
              <Line
                key={game}
                type="monotone"
                dataKey={game}
                stroke={COLORS[index % COLORS.length]}
                strokeWidth={3}
                dot={{ r: 5, stroke: COLORS[index % COLORS.length], strokeWidth: 2, fill: '#fff' }}
                activeDot={{ r: 7 }}
                name={game}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProgressChart;
