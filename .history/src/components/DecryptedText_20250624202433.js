
import React from 'react';
import './MindPlay.css';
import DecryptedText from './DecryptedText'; // Adjust path if it's in a different folder


const MindPlay = () => {
  return (
    <section className="mindplay-section">
  <DecryptedText
    text="MindPlay"
    animateOn="view"
    revealDirection="center"
    speed={40}
    maxIterations={20}
    characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$"
    className="revealed"
    encryptedClassName="encrypted"
  />
  <p>Tap into fun. Tune out stress.</p>
</section>

  );
};

export default MindPlay;
