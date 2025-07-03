import React, { useEffect } from 'react';

const RecallGame = () => {
  useEffect(() => {
    const handleQuit = (e) => {
      if (e.data === 'quit-recall-game') {
        window.location.href = '/#mindplay'; // Navigate to MindPlay
      }
    };
    window.addEventListener('message', handleQuit);
    return () => window.removeEventListener('message', handleQuit);
  }, []);

  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="/recall.html"
        title="Number Recall Game"
        style={{
          width: '100%',
          height: '100vh',
          border: 'none',
          overflow: 'hidden',
        }}
      ></iframe>
    </div>
  );
};

export default RecallGame;
