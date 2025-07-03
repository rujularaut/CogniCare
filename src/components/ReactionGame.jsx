import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ReactionGame = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleQuit = () => {
      // Redirect to mindplay section when quit event is triggered from the iframe
      navigate('/#mindplay');
    };

    // Add listener when component mounts
    window.addEventListener('reactionQuit', handleQuit);

    // Clean up when component unmounts
    return () => {
      window.removeEventListener('reactionQuit', handleQuit);
    };
  }, [navigate]);

  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="/reaction.html"
        title="Focus Flick Game"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          display: 'block'
        }}
      ></iframe>
    </div>
  );
};

export default ReactionGame;
