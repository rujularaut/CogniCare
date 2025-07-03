import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';

const COLORS = [
  "#7b4bff", "#82ca9d", "#ff6f61", "#00bcd4", "#ff9800", "#e91e63"
];

const ProgressChart = ({ data }) => {
  // Extract all unique game names from data (excluding "week")
  const gameNames = data.length > 0
    ? Object.keys(data[0]).filter(key => key !== "week")
    : [];

  return (
   <div style={{
  width: '100%',
  maxWidth: '900px',
  height: '470px',
  background: '#fff',
  borderRadius: '12px',
  padding: '20px',
  boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
  margin: '0 auto',
  marginBottom: '40px',
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}}>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 30, right: 30, left: 10, bottom: 5 }}
        >
          <CartesianGrid stroke="#ccc" strokeDasharray="4 4" />
          <XAxis dataKey="week" stroke="#333" tick={{ fontSize: 14 }} />
          <YAxis stroke="#333" tick={{ fontSize: 14 }} />
          <Tooltip contentStyle={{ backgroundColor: '#f4f4f4', color: '#000', borderRadius: '8px' }} />
          <Legend verticalAlign="top" height={36} />

          {gameNames.map((game, index) => (
            <Line
              key={game}
              type="monotone"
              dataKey={game}
              stroke={COLORS[index % COLORS.length]}
              strokeWidth={3}
              dot={{ r: 6, stroke: COLORS[index % COLORS.length], strokeWidth: 2, fill: '#fff' }}
              activeDot={{ r: 8 }}
              name={game}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProgressChart;
