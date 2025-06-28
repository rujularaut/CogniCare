import React from 'react';
import './MindPlay.css';
import DecryptedText from './DecryptedText';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';


const MindPlay = () => {
  return (
    <section className="mindplay-section">
      
      {/* Wrap DecryptedText inside motion.div */}
      <motion.div
        className="vertical-decrypt"
        initial={{ opacity: 0, y: 100 }}     // Start invisible + pushed down
        animate={{ opacity: 1, y: 0 }}       // End fully visible + in place
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <DecryptedText
          text="MINDPLAY"
          animateOn="view"
          revealDirection="center"
          speed={250}
          maxIterations={50}
          sequential={true}
          className="revealed"
          encryptedClassName="encrypted"
        />
      </motion.div>

      <p>Tap into fun. Tune out stress.</p>
    </section>
  );
};

export default MindPlay;
