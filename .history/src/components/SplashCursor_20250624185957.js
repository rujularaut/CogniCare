// src/components/SplashCursor.js
import { useEffect, useRef } from 'react';

const SplashCursor = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      ctx.beginPath();
      ctx.arc(clientX, clientY, 10, 0, 2 * Math.PI);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.fill();
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
};

export default SplashCursor;
