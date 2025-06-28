import React from 'react';
import './MindPlay.css';
import DecryptedText from './DecryptedText';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';


const MindPlay = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="mindplay-section" ref={ref}>
      <motion.div
        className="vertical-decrypt"
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <DecryptedText
          text="MINDPLAY"
          animateOn={isInView ? 'hover' : 'none'}  // ❗ trick to trigger when in view
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
