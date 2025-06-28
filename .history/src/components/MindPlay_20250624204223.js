import React from 'react';
import './MindPlay.css';
import DecryptedText from './DecryptedText';

const MindPlay = () => {
  return (
    <section className="mindplay-section">
        <div className="vertical-decrypt">
      <DecryptedText
        text="M I N D P L A Y"
        animateOn="view"
        revealDirection="center"
        speed={250}            // slower speed (ms per step)
        maxIterations={50}     // more steps = slower animation
        sequential={true}      // reveals one letter at a time
        className="revealed"
        encryptedClassName="encrypted"
      />
      </div>
      <p>Tap into fun. Tune out stress.</p>
    </section>
  );
};

export default MindPlay;
