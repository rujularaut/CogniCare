import React, { useRef } from 'react';
import './MindPlay.css';
import DecryptedText from './DecryptedText';
import { motion, useInView } from 'framer-motion';
import TiltedCard from './TiltedCard';
import recallImg from '../assets/recall.png';
import reactionImg from '../assets/reaction.png';

const MindPlay = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="mindplay-section" ref={ref}>
      <div className="mindplay-heading">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <DecryptedText
            text="MINDPLAY"
            animateOn="view"
            revealDirection="center"
            speed={200}
            maxIterations={60}
            sequential={true}
            className="revealed"
            encryptedClassName="encrypted"
          />
        </motion.div>
      </div>

      <div className="mindplay-cards">
        <div className="card-with-text"></div>
        <TiltedCard
          imageSrc={recallImg}
          altText="Number Recall Game"
          captionText="Click to play"
          containerHeight="400px"
          containerWidth="370px"
          imageHeight="400px"
          imageWidth="350px"
          rotateAmplitude={12}
          scaleOnHover={1.1}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={<p className="tilted-card-demo-text">Number Recall</p>}
        />
        <p className="card-description">Train your memory with sequences</p>
  </div>

  <div className="card-with-text">
        <TiltedCard
          imageSrc={reactionImg}
          altText="Reaction Game"
          captionText="Click to play"
          containerHeight="400px"
          containerWidth="370px"
          imageHeight="400px"
          imageWidth="350px"
          rotateAmplitude={12}
          scaleOnHover={1.1}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={<p className="tilted-card-demo-text">Focus Flick</p>}
        />
        <p className="card-description">Test how fast you can react</p>
      </div>
    </section>
  );
};

export default MindPlay;
